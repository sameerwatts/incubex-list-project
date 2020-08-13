import React, { useState, useEffect, lazy, Suspense } from 'react';
import axios from 'axios';
import './App.css';
import Nav from './Component/Nav';
import PopupModal from './Component/PopupModal';
import AddForm from './Component/Forms/AddForm';
import UpdateForm from './Component/Forms/UpdateForm';
import DataTile from './Component/DataTile';
import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from 'react-virtualized';
import loadingGif from "./assets/images/loading.gif"
import DeletePopup from './Component/DeletePopup';
import ErrorBoundary from './Component/ErrorBoundary';
const SectionWrapper = lazy(() => import('./Component/SectionWrapper'))

const App = (props) => {

  const [clicked, setClicked] = useState(false);
  const [formType, setFormType] = useState('');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [render, setRender] = useState(true);
  const [id, setId] = useState('');
  const [error, setError] = useState(0);

  const cache = React.useRef(new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 100,
  }));

  useEffect(() => {
    const fetchPosts = async (req, res) => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(res.data);
        setPosts(res.data);
        updateError(false)
      }
      catch (err) {
        console.log(err.response.status);
        updateError(err.response.status)
      }
    }
    fetchPosts();
  }, [render]);

  const popupModalHandler = (type) => {
    setFormType(type)
    setClicked(prevState => !prevState)
  }
  const deletePostById = (id) => {
    setLoading(true);
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        setLoading(false);
        console.log(res.data);
        popupModalHandler('Delete');
        updateError(false)
        renderPage()
      })
      .catch(err => {
        setLoading(false);
        popupModalHandler('Delete');
        updateError(err.response.status);
        return console.log(err);
      })
  }

  const deletePost = (type, id) => {
    setFormType(type);
    setId(id);
    setClicked(prevState => !prevState)
  }

  const updatePost = (type, id) => {
    setFormType(type);
    setId(id);
    setClicked(prevState => !prevState)
  }
  const renderPage = () => {
    setRender(prevState => !prevState)
  }

  const updateError = (status) => {
    setError(status)
  }

  return (
    <div className='pageWrapper'>
      <Nav popupModalHandler={popupModalHandler} clicked={clicked} />
      <Suspense fallback={
        <div className="d-flex justify-center align-center">
          <img src={loadingGif} alt="Loading"></img>
        </div>
      }>
        <ErrorBoundary>
          <SectionWrapper error={error}>
            <div className="dataTiles" >
              {
                <div className="dataTiles-inner" style={{ width: '100%', height: '80vh' }}>
                  <AutoSizer>
                    {
                      ({ width, height }) => (
                        <List
                          width={width}
                          height={height}
                          rowHeight={cache.current.rowHeight}
                          deferredMeasurementCache={cache.current}
                          rowCount={posts.length}
                          rowRenderer={({ key, index, style, parent }) => {
                            const post = posts[index];
                            return (
                              <CellMeasurer key={key} cache={cache.current} parent={parent} columnIndex={0} rowIndex={index} >
                                <div className="data-cards" style={style}>
                                  <DataTile key={post.id} details={post} updatePost={updatePost} deletePost={deletePost} />
                                </div>
                              </CellMeasurer>
                            )
                          }}
                        />
                      )
                    }
                  </AutoSizer>
                </div>
              }
            </div>
          </SectionWrapper>
        </ErrorBoundary>
      </Suspense>

      <PopupModal clicked={clicked} type={formType}>
        {formType === 'Add' && <AddForm popupModalHandler={popupModalHandler} renderPage={renderPage} updateError={updateError} />}
        {formType === 'Update' && <UpdateForm id={id} popupModalHandler={popupModalHandler} renderPage={renderPage}  updateError={updateError} />}
        {formType === 'Delete' && <DeletePopup id={id} popupModalHandler={popupModalHandler} deletePostById={deletePostById} disabled={loading} />}
      </PopupModal>
    </div >
  );
}

export default App;
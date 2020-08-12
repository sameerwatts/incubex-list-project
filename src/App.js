import React, { useState, useEffect, lazy, Suspense } from 'react';
import axios from 'axios';
import './App.css';
import Nav from './Component/Nav';
import PopupModal from './Component/PopupModal';
import AddForm from './Component/Forms/AddForm';
import UpdateForm from './Component/Forms/UpdateForm';
import DataTile from './Component/DataTile';
import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from 'react-virtualized';
// import SectionWrapper from './Component/SectionWrapper';
import loadingGif from "./assets/images/loading.gif"
const SectionWrapper = lazy(() => import('./Component/SectionWrapper'))
// const DataTile = lazy(() => import('./Component/DataTile'))
const App = (props) => {
  const [clicked, setClicked] = useState(false);
  const [formType, setFormType] = useState('');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const cache = React.useRef(new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 100,
  }));

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  }, []);
  console.log(posts);

  const popupModalHandler = (type) => {
    setFormType(type)
    setClicked(prevState => !prevState)
  }


  return (
    <div className='pageWrapper'>
      <Nav popupModalHandler={popupModalHandler} clicked={clicked} />
      <Suspense fallback={
      <div className="d-flex justify-center align-center">
        <img src={loadingGif} alt="Flowers in Chania"></img>
      </div>
      }>
        <SectionWrapper>
          <div className="dataTiles">
            {
              <div style={{ width: '100%', height: '70vh' }}>
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
                                <DataTile key={post.id} details={post} />
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
      </Suspense>

      <PopupModal clicked={clicked}>
        {formType === 'Add' && <AddForm popupModalHandler={popupModalHandler} />}
        {formType === 'Update' && <UpdateForm />}
      </PopupModal>
    </div >
  );
}

export default App;
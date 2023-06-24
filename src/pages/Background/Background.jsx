import React, { useState, useCallback } from "react";
import "./background.css";
import Gallery from "react-photo-gallery";
import FadeIn from "react-fade-in";
import Carousel, { Modal, ModalGateway } from "react-images";

export function Background() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <FadeIn>
      <div className="homeContainer">
        <h1 className="galleryTitle">Background</h1>
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </FadeIn>
  );
}

const photos = [
  {
    src: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    width: 4,
    height: 3
  },
  {
    src: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp",
    width: 1,
    height: 1
  },
  {
    src: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp",
    width: 4,
    height: 3
  },
  {
    src: "https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-1.webp",
    width: 4,
    height: 3
  },
  {
    src: "https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-2.webp",
    width: 4,
    height: 3
  },
  {
    src: "https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-3.webp",
    width: 4,
    height: 3
  },
  {
    src: "https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp",
    width: 4,
    height: 3
  },
  {
    src: "https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/2.webp",
    width: 4,
    height: 3
  },
  {
    src: "https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/3.webp",
    width: 4,
    height: 3
  },
  {
    src: "https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/4.webp",
    width: 4,
    height: 3
  },
  {
    src: "https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp",
    width: 4,
    height: 3
  },
  {
    src: "https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp",
    width: 4,
    height: 3
  },
  {
    src: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_640.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg",
    width: 4,
    height: 3
  },


  {
    src: "https://cdn.pixabay.com/photo/2013/07/25/13/01/stones-167089_640.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://cdn.pixabay.com/photo/2017/06/07/10/47/elephant-2380009_640.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://cdn.pixabay.com/photo/2018/01/21/19/57/tree-3097419_640.jpg",
    width: 4,
    height: 3
  },



  {
    src: "https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659_640.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://cdn.pixabay.com/photo/2017/09/11/14/11/fisherman-2739115_640.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://cdn.pixabay.com/photo/2013/04/03/21/25/flower-100263_640.jpg",
    width: 4,
    height: 3
  }
];

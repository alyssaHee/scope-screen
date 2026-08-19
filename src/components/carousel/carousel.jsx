import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../styles/pages.css';
import './carousel.css';
import useIsParentMobile from '../isMobile.jsx';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Carousel = ({ slides }) => {
  const isParentMobile = useIsParentMobile();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSlideChange = () => {
    document.querySelectorAll('.carousel-video').forEach((video) => {
      video.pause();
      video.currentTime = 0;
    });
  };

  const handleToggleExpand = () => {
    if (isParentMobile) return;
    setIsExpanded((prev) => !prev);
  };

  const handleMediaClick = (event) => {
    if (isParentMobile) return;
    event.stopPropagation();
    handleToggleExpand();
  };

  return (
    <Swiper
      cssMode={true}
      navigation={true}
      mousewheel={true}
      speed={800}
      keyboard={true}
      loop={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className={`mySwiper ${!isParentMobile && isExpanded ? 'expanded' : ''}`}
      onSlideChange={handleSlideChange}
      role={isParentMobile ? undefined : 'button'}
      tabIndex={isParentMobile ? undefined : 0}
      onKeyDown={(event) => {
        if (isParentMobile) return;
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          handleToggleExpand();
        }
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide className="carousel-slide" key={index}>
          {slide.type === 'video' ? (
            <video
              controls
              playsInline
              controlsList="nodownload noplaybackrate nofullscreen"
              disablePictureInPicture
              className="carousel-video"
              onClick={(event) => {
                if (event.target !== event.currentTarget) return;
                event.stopPropagation();
                handleMediaClick(event);
              }}
            >
              <source src={slide.src} type="video/mp4" />
            </video>
          ) : (
            <img
              src={slide.src}
              alt={slide.alt}
              className="carousel-media"
              onClick={handleMediaClick}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
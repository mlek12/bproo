import React, { useState } from 'react';
import './gallery.css';
import keraton from '../assets/keraton.jpg';
import satebandeng from '../assets/satebandeng.jpg';
import masjid from '../assets/masjid.jpg';
import sawarna from '../assets/sawarna.jpg';
import benteng from '../assets/benteng.jpg';
import badak from '../assets/badak.jpg';
import mapb from '../assets/mapb.jpg';
import mapc from '../assets/mapc.jpg';
import badui from '../assets/badui.jpg'

const Gallery = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentDescription, setCurrentDescription] = useState('');
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentImageUrl, setCurrentImageUrl] = useState('');

  const images = [
    {
      url: benteng,
      title: 'Benteng Speelwijk',
      description: 'Benteng Speelwijk adalah sebuah benteng peninggalan kolonial Belanda yang terletak di Kota Serang, Banten, Indonesia. Benteng Speelwijk memiliki sejarah yang kaya dan berperan penting dalam aktivitas perdagangan dan pertahanan Belanda di wilayah tersebut. Benteng ini awalnya didirikan untuk melindungi kepentingan dagang VOC dan mempertahankan kontrol atas wilayah Banten, yang pada saat itu merupakan salah satu pusat perdagangan penting di Nusantara.',
    },
    {
      url: keraton,
      title: 'Keraton Susurowan',
      description: 'Keraton Surosowan adalah sebuah istana kerajaan yang terletak di Kota Serang, Banten, Indonesia. Istana ini adalah pusat pemerintahan Kesultanan Banten pada masa kejayaannya dan memiliki peran penting dalam sejarah politik dan budaya di wilayah tersebut. Keraton Surosowan bukan hanya peninggalan arkeologis, tetapi juga warisan budaya yang penting. Ia menjadi simbol kejayaan dan kemakmuran Kesultanan Banten serta pengingat akan sejarah panjang perjuangan dan dinamika politik di wilayah tersebut.',
    },
    {
      url: masjid,
      title: 'Masjid Agung Banten',
      description: 'Masjid Agung Banten, juga dikenal sebagai Masjid Banten Lama, adalah salah satu masjid tertua dan paling bersejarah di Indonesia. Terletak di Banten Lama, Kabupaten Serang, Banten, masjid ini didirikan pada abad ke-16 dan memainkan peran penting dalam perkembangan Islam di wilayah tersebut. Masjid Agung Banten adalah simbol penting dari kejayaan dan penyebaran Islam di Banten serta bukti keanekaragaman budaya yang ada di Indonesia. Masjid ini terus menjadi pusat keagamaan dan kebudayaan yang hidup, serta warisan sejarah yang dihormati dan dijaga dengan baik.',
    },
    {
      url: satebandeng,
      title: 'Sate Bandeng',
      description: 'Sate Bandeng adalah salah satu kuliner khas dari daerah Banten, Indonesia. Sate ini menggunakan ikan bandeng sebagai bahan utamanya dan memiliki keunikan tersendiri dibandingkan dengan sate pada umumnya yang biasanya menggunakan daging ayam, kambing, atau sapi. Sate Bandeng adalah contoh kuliner tradisional Indonesia yang kaya akan cita rasa dan proses pembuatan yang unik, mencerminkan kreativitas dan keanekaragaman budaya kuliner Nusantara.',
    },
    {
      url: sawarna,
      title: 'Pantai Sawarna',
      description: 'Pantai Sawarna adalah salah satu destinasi wisata pantai yang populer di Provinsi Banten, Indonesia. Pantai ini menawarkan keindahan alam yang memukau dengan berbagai daya tarik wisata yang membuatnya menjadi tujuan favorit bagi wisatawan lokal maupun mancanegara. Pantai Sawarna adalah destinasi wisata yang menawarkan keindahan alam yang masih alami dan berbagai aktivitas menarik. Tempat ini cocok untuk wisatawan yang mencari ketenangan, petualangan, atau sekadar ingin menikmati keindahan pantai yang eksotis di Banten.',
    },
    {
      url: badak,
      title: 'Ujung Kulon',
      description: 'Taman Nasional Ujung Kulon merupakan kawasan konservasi alam yang terletak di Ujung Kulon, Banten. Taman nasional ini ditetapkan sebagai taman nasional pada tahun 1992 dan menjadi satu-satunya taman nasional di Indonesia yang memiliki status sebagai Cagar Biosfer Dunia dan Warisan Dunia UNESCO.Dengan luas 122.956 hektar, Ujung Kulon menjadi habitat terakhir bagi badak bercula satu (Rhinoceros sondaicus) di Asia. Populasi badak di sana diperkirakan hanya tersisa sekitar 60 ekor saja. Untuk itu, dilakukan upaya konservasi yang ketat untuk melindungi badak dari kepunahan.Selain badak, Ujung Kulon juga menjadi rumah bagi keanekaragaman hayati lainnya seperti banteng, rusa, monyet ekor panjang, elang dan ratusan jenis burung, serta ribuan jenis tumbuhan tropis. Taman ini memiliki ekosistem hutan hujan dataran rendah, hutan bakau, padang rumput, serta garis pantai yang indah.Bagi pengunjung, ada beberapa jalur trekking yang bisa dilalu',
    },
    {
      url: mapb,
      title: 'Peta Banten Doeloe',
      description: '1935: Peta daerah Banten dengan sekelilingnya yaitu Batavia dan Butenzorg.Dari buku: P.R. Bos - J.F. Niermeyer , "Schoolatlas der Geheele Aarde", J.B. Wolters, Groningen - Den Haag - Batavia, 1935'
    },
    {
      url: mapc,
      title: 'Peta Banten Kini',
      description: 'Gambar Peta Banten (Sumber : shutterstock)'
    },
    {
      url: badui,
      title: 'Suku Badui',
      description: 'Baduy atau Kanekes adalah salah satu desa di wilayah Kabupaten Lebak, Banten. Di dalamnya terdapat suku Baduy atau urang Kanekes yang merupakan sekelompok masyarakat yang memegang teguh kearifan lokal. Populasinya kurang lebih 26.000 jiwa dan terbagi menjadi dua wilayah, yaitu Baduy Luar dan Baduy Dalam. Perbatasan antara kedua wilayah tersebut ditandai dengan sebuah gubuk terbuat dari bambu sebagai tempat menginap suku Baduy Dalam ketika mereka berladang.Suku Baduy memang sangat ketat memegang adat istiadat, tetapi bukan wilayah terisolasi atau terasingkan dari perkembangan dunia luar. Ada beberapa hal yang menjadi pantangan atau tabu bagi mereka. Salah satunya adalah mengambil foto, terutama di wilayah Baduy Dalam. Pengunjung hanya boleh menggambarkan suasana di dalamnya hanya dengan sketsa. '
    },
  ];

  const handleImageClick = (description, url, title) => {
    setShowPopup(true);
    setCurrentDescription(description);
    setCurrentImageUrl(url);
    setCurrentTitle(title);
  };

  const handleCloseDescription = () => {
    setShowPopup(false);
    setCurrentDescription('');
    setCurrentImageUrl('');
    setCurrentTitle('');
  };

  return (
    <div className="Gallery">
      <div className="card-container">
        {images.map((image, index) => (
          <div key={index} className="card">
            <div className="card-image">
              <img
                src={image.url}
                alt={image.title}
                onClick={() => handleImageClick(image.description, image.url, image.title)}
                className={showPopup && currentImageUrl === image.url ? 'image-overlay' : ''}
              />
            </div>
          </div>
        ))}
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-button" onClick={handleCloseDescription}>
              ×
            </span>
            <div
              className="popup-image"
              style={{
                backgroundImage: `url(${currentImageUrl})`,
              }}
            ></div>
            <div className="popup-description">
              <h3>{currentTitle}</h3>
              <p>{currentDescription}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

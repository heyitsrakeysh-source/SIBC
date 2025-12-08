const menuItems = [
    { name: "Shrilankan Curry Idli", image: "images/food/1. Shrilankan curry idli.jpg" },
    { name: "Ghee Pudi Button Idli", image: "images/food/2. Ghee pudi button idli.jpg" },
    { name: "Dakshina Idli", image: "images/food/3. Dakshina idli.jpg" },
    { name: "Medu Wada", image: "images/food/5. Medu wada.jpg" },
    { name: "Dil Khus Dosa", image: "images/food/11. Dil khus Dosa.jpg" },
    { name: "Matka Dosa", image: "images/food/15. Matka Dosa.jpg" },
    { name: "Bahubali Dosa", image: "images/food/28. Bahubali Dosa.jpg" },
    { name: "Pushpa Dosa", image: "images/food/30. Pushpa Dosa.jpg" },
    { name: "Kerala Masala Dosa", image: "images/food/32. Kerala Masala Dosa.jpg" },
    { name: "Mysore Masala Dosa", image: "images/food/33. Mysore Masala Dosa.jpg" },
    { name: "Pav Bhaji", image: "images/food/21. Pav bhaji.jpg" },
    { name: "Veg Biryani", image: "images/food/26. Veg Biryani.jpg" },
    { name: "South Indian Thali", image: "images/food/51. South Indian thali.jpg" },
    { name: "Bisi Bele Bhat", image: "images/food/24. Bisi bele bhat.jpg" },
    { name: "Paneer Lababdar", image: "images/food/34. Paneer lababdar.jpg" },
    { name: "Cheese Paniaram", image: "images/food/12. Cheese paniaram.jpg" }
];

const galleryImages = [
    "images/food/16. Thatte idli.jpg",
    "images/food/17. Veg kolapuri.jpg",
    "images/food/18. Paneer palguni.jpg",
    "images/food/19. Ghee Masala Thatte idli.jpg",
    "images/food/20. Veg triple rice.jpg",
    "images/food/22. Tawa Pulao.jpg",
    "images/food/23. Pizza open Dosa.jpg",
    "images/food/25. Dal fry.jpg",
    "images/food/31. Rasam wada.jpg",
    "images/food/40. Upma.jpg",
    "images/food/41. Masala pav.jpg",
    "images/food/46. Roasted onion tomato uttappam.jpg",
    "images/food/47. Rasam rice.jpg",
    "images/food/48. Lemon rice.jpg",
    "images/food/50. Jini Dosa.jpg",
    "images/food/52. Pineapple shira.jpg"
];

const menuGrid = document.getElementById('menuGrid');
menuItems.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    menuItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="menu-item-info">
            <h3>${item.name}</h3>
        </div>
    `;
    menuGrid.appendChild(menuItem);
});

const galleryGrid = document.getElementById('galleryGrid');
galleryImages.forEach(image => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.innerHTML = `<img src="${image}" alt="Food">`;
    galleryGrid.appendChild(galleryItem);
});

const stickerImages = [
    "images/stickers/1 (2).png",
    "images/stickers/1 (4).png",
    "images/stickers/1 (12).png",
    "images/stickers/1 (14).png",
    "images/stickers/1 (15).png",
    "images/stickers/1 (19).png",
    "images/stickers/1 (20).png",
    "images/stickers/1 (21).png",
    "images/stickers/1 (22).png",
    "images/stickers/2 (1).png",
    "images/stickers/2 (2).png",
    "images/stickers/2 (3).png",
    "images/stickers/2 (4).png",
    "images/stickers/2 (5).png",
    "images/stickers/2 (6).png",
    "images/stickers/2 (7).png",
    "images/stickers/2 (8).png",
    "images/stickers/2 (9).png",
    "images/stickers/2 (10).png",
    "images/stickers/2 (11).png",
    "images/stickers/2 (12).png",
    "images/stickers/2 (13).png",
    "images/stickers/2 (14).png",
    "images/stickers/2 (15).png",
    "images/stickers/2 (16).png",
    "images/stickers/2 (17).png",
    "images/stickers/baby.png",
    "images/stickers/dancer.png"
];

const reelVideos = [
    "Reels/1.mp4",
    "Reels/2.mp4",
    "Reels/3.mp4"
];

const reelsGrid = document.getElementById('reelsGrid');
const videoElements = [];
let reelsStarted = false;

reelVideos.forEach((videoSrc, index) => {
    const reelItem = document.createElement('div');
    reelItem.className = 'reel-item';
    reelItem.innerHTML = `
        <video controls playsinline muted data-index="${index}">
            <source src="${videoSrc}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;
    reelsGrid.appendChild(reelItem);
    const video = reelItem.querySelector('video');
    videoElements.push(video);
    
    video.addEventListener('play', () => {
        videoElements.forEach((v, i) => {
            if (i !== index) {
                v.muted = true;
            }
        });
        video.muted = false;
    });
    
    video.addEventListener('ended', () => {
        const nextIndex = (index + 1) % videoElements.length;
        videoElements[nextIndex].play();
    });
});

if (videoElements.length > 0) {
    const reelsVideoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                videoElements[0].muted = false;
                videoElements[0].play().catch(() => {});
                reelsStarted = true;
            } else {
                if (reelsStarted) {
                    videoElements.forEach(v => {
                        v.pause();
                        v.currentTime = 0;
                    });
                    reelsStarted = false;
                }
            }
        });
    }, { threshold: 0.5 });
    
    reelsVideoObserver.observe(reelsGrid);
}

const stickersGrid = document.getElementById('stickersGrid');
stickerImages.forEach((sticker, index) => {
    const stickerItem = document.createElement('div');
    stickerItem.className = 'sticker-item';
    stickerItem.innerHTML = `
        <div class="sticker-image-wrapper">
            <img src="${sticker}?v=${Date.now()}" alt="Mascot Sticker ${index + 1}">
            <img src="images/logo/logo.png" alt="Logo" class="sticker-logo">
        </div>
        <a href="${sticker}" download="brahmin-cafe-sticker-${index + 1}.png" class="sticker-download">Download</a>
    `;
    stickersGrid.appendChild(stickerItem);
});

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const musicIcon = musicToggle.querySelector('.music-icon');
const volumeSlider = document.getElementById('volumeSlider');
const reelsSection = document.getElementById('reels');
let isPlaying = true;
let normalVolume = 0.5;
let musicStarted = false;

bgMusic.volume = normalVolume;
musicIcon.textContent = '🔊';
musicToggle.classList.add('playing');

const startMusic = () => {
    if (!musicStarted && isPlaying) {
        bgMusic.play().then(() => {
            musicStarted = true;
            document.removeEventListener('mousemove', startMusic);
            document.removeEventListener('keydown', startMusic);
            document.removeEventListener('wheel', startMusic);
        }).catch(() => {});
    }
};

document.addEventListener('click', startMusic, { once: true });
document.addEventListener('scroll', startMusic, { once: true });
document.addEventListener('touchstart', startMusic, { once: true });
document.addEventListener('mousemove', startMusic);
document.addEventListener('keydown', startMusic);
document.addEventListener('wheel', startMusic, { once: true });

setTimeout(startMusic, 500);

musicToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isPlaying) {
        bgMusic.pause();
        musicIcon.textContent = '🔇';
        musicToggle.classList.remove('playing');
        isPlaying = false;
        musicStarted = true;
    } else {
        bgMusic.play();
        musicIcon.textContent = '🔊';
        musicToggle.classList.add('playing');
        isPlaying = true;
        musicStarted = true;
    }
});

volumeSlider.addEventListener('input', (e) => {
    normalVolume = e.target.value / 100;
    if (!reelsSection || !document.querySelector('#reels').getBoundingClientRect().top < window.innerHeight) {
        bgMusic.volume = normalVolume;
    }
});

const reelsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            bgMusic.volume = 0.2;
        } else {
            bgMusic.volume = normalVolume;
        }
    });
}, { threshold: 0.3 });

if (reelsSection) {
    reelsObserver.observe(reelsSection);
}

const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

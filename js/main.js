// Lista de vídeos do YouTube (IDs extraídos das URLs)
const channels = [
    { id: 'xUarb_lxPUc', name: 'O que vamos aprender no curso?', level: 'basico', duration: '8:30' },
    { id: 'J7ABOxu1sdw', name: 'Por que é tão importante aprender IA?', level: 'basico', duration: '9:15' },
    { id: 'QAMF8irwPxM', name: 'Tire suas dúvidas do curso com a gente', level: 'basico', duration: '7:45' },
    { id: 'Sho2hvTQxKE', name: 'Como uma IA funciona?', level: 'intermediario', duration: '12:20' },
    { id: 'WrJBJsb5IDc', name: 'Rode modelos de IA direto no seu PC', level: 'intermediario', duration: '11:10' },
    { id: 'p33lQqS1PnY', name: 'O que é Inteligência Artificial?', level: 'basico', duration: '10:30' },
    { id: 'cUOM5qi5lyQ', name: 'A novidade Claude AI', level: 'intermediario', duration: '13:45' },
    { id: 'WsQyhzHXRlY', name: 'Aplicações de Inteligências Artificiais', level: 'intermediario', duration: '14:20' },
    { id: 'YY3MmQltQbk', name: 'Desafios das Inteligências Artificiais', level: 'avancado', duration: '15:10' },
    { id: 'BzbxjkNseVU', name: 'Inteligência Artificial hoje e no futuro', level: 'avancado', duration: '16:30' },
    { id: '0mtXae5HhTE', name: 'Você sabe o que é Machine Learning?', level: 'intermediario', duration: '13:15' },
    { id: '-RuI3BIAXno', name: 'Crie e edite imagens com IA', level: 'intermediario', duration: '12:45' },
    { id: 'M8hoXE24PMo', name: 'Você sabe o que é Deep Learning?', level: 'avancado', duration: '17:20' },
    { id: 'dqTZCknuctk', name: 'LLM: A tecnologia por trás da IA textual', level: 'avancado', duration: '18:10' }
];

// Estado atual
let currentChannel = 0;
let currentVolume = 100;
let isMuted = false;
let isPlaying = true;
let currentFilter = 'all';

// Elementos DOM
const iframe = document.getElementById('youtubePlayer');
const currentVideoDisplay = document.getElementById('currentVideo');
const totalVideosDisplay = document.getElementById('totalVideos');
const videoListContainer = document.getElementById('videoListContainer');
const playPauseBtn = document.getElementById('playPause');
const muteBtn = document.getElementById('mute');

// Variável para player do YouTube API
let player;

// Carregar API do YouTube
function loadYouTubeAPI() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Callback quando a API do YouTube está pronta
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtubePlayer', {
        videoId: channels[currentChannel].id,
        playerVars: {
            'playsinline': 1,
            'enablejsapi': 1,
            'controls': 1,
            'modestbranding': 1,
            'rel': 0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// Quando o player está pronto
function onPlayerReady(event) {
    updateVideoDisplay();
    createVideoList();
    player.setVolume(currentVolume);
    
    // Adicionar eventos dos botões
    setupEventListeners();
}

// Quando o estado do player muda
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        isPlaying = true;
        updatePlayPauseButton();
    } else if (event.data === YT.PlayerState.PAUSED) {
        isPlaying = false;
        updatePlayPauseButton();
    }
}

// Atualizar display do vídeo
function updateVideoDisplay() {
    const videoNum = (currentChannel + 1).toString().padStart(2, '0');
    currentVideoDisplay.textContent = videoNum;
    totalVideosDisplay.textContent = channels.length.toString().padStart(2, '0');
    
    // Atualizar lista de vídeos
    updateVideoListActive();
    
    // Adicionar efeito de mudança de filme
    addCinemaChangeEffect();
}

// Criar lista de vídeos
function createVideoList() {
    videoListContainer.innerHTML = '';
    
    const filteredVideos = currentFilter === 'all' 
        ? channels 
        : channels.filter(video => video.level === currentFilter);
    
    filteredVideos.forEach((video, filteredIndex) => {
        const originalIndex = channels.indexOf(video);
        
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        videoItem.setAttribute('data-level', video.level);
        
        if (originalIndex === currentChannel) {
            videoItem.classList.add('active');
        }
        
        const videoTitle = document.createElement('div');
        videoTitle.className = 'video-title';
        videoTitle.textContent = video.name;
        
        const videoDuration = document.createElement('div');
        videoDuration.className = 'video-duration';
        videoDuration.innerHTML = `<i class="fas fa-clock"></i> ${video.duration}`;
        
        const videoLevel = document.createElement('div');
        videoLevel.className = `video-level level-${video.level}`;
        videoLevel.textContent = video.level.charAt(0).toUpperCase() + video.level.slice(1);
        
        videoItem.appendChild(videoTitle);
        videoItem.appendChild(videoDuration);
        videoItem.appendChild(videoLevel);
        
        videoItem.addEventListener('click', () => {
            changeVideo(originalIndex);
        });
        
        videoListContainer.appendChild(videoItem);
    });
}

// Atualizar item ativo na lista de vídeos
function updateVideoListActive() {
    const items = document.querySelectorAll('.video-item');
    items.forEach((item, index) => {
        const originalIndex = channels.findIndex(video => 
            video.name === item.querySelector('.video-title').textContent
        );
        
        if (originalIndex === currentChannel) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Mudar vídeo
function changeVideo(newVideoIndex) {
    if (newVideoIndex >= 0 && newVideoIndex < channels.length) {
        currentChannel = newVideoIndex;
        if (player && player.loadVideoById) {
            player.loadVideoById(channels[currentChannel].id);
        }
        updateVideoDisplay();
    }
}

// Vídeo anterior
function prevVideo() {
    const newVideo = currentChannel - 1;
    if (newVideo < 0) {
        changeVideo(channels.length - 1);
    } else {
        changeVideo(newVideo);
    }
}

// Próximo vídeo
function nextVideo() {
    const newVideo = currentChannel + 1;
    if (newVideo >= channels.length) {
        changeVideo(0);
    } else {
        changeVideo(newVideo);
    }
}

// Aumentar volume
function volumeUp() {
    if (currentVolume < 100) {
        currentVolume = Math.min(100, currentVolume + 10);
        if (player && player.setVolume) {
            player.setVolume(currentVolume);
            if (isMuted) {
                player.unMute();
                isMuted = false;
                updateMuteButton();
            }
        }
        showVolumeNotification(currentVolume);
    }
}

// Diminuir volume
function volumeDown() {
    if (currentVolume > 0) {
        currentVolume = Math.max(0, currentVolume - 10);
        if (player && player.setVolume) {
            player.setVolume(currentVolume);
        }
        showVolumeNotification(currentVolume);
    }
}

// Toggle Play/Pause
function togglePlayPause() {
    if (player && player.getPlayerState) {
        const state = player.getPlayerState();
        if (state === YT.PlayerState.PLAYING) {
            player.pauseVideo();
            isPlaying = false;
        } else {
            player.playVideo();
            isPlaying = true;
        }
        updatePlayPauseButton();
    }
}

// Toggle Mute
function toggleMute() {
    if (player) {
        if (isMuted) {
            player.unMute();
            isMuted = false;
        } else {
            player.mute();
            isMuted = true;
        }
        updateMuteButton();
    }
}

// Atualizar botão de play/pause
function updatePlayPauseButton() {
    const icon = playPauseBtn.querySelector('i');
    if (isPlaying) {
        icon.className = 'fas fa-pause';
    } else {
        icon.className = 'fas fa-play';
    }
}

// Atualizar botão de mute
function updateMuteButton() {
    const icon = muteBtn.querySelector('i');
    if (isMuted || currentVolume === 0) {
        icon.className = 'fas fa-volume-mute';
    } else {
        icon.className = 'fas fa-volume-up';
    }
}

// Adicionar efeito de mudança de filme
function addCinemaChangeEffect() {
    const screenMask = document.querySelector('.screen-mask');
    screenMask.style.opacity = '0.5';
    screenMask.style.filter = 'sepia(1)';
    
    setTimeout(() => {
        screenMask.style.opacity = '1';
        screenMask.style.filter = 'sepia(0)';
    }, 300);
}

// Mostrar notificação de volume
function showVolumeNotification(volume) {
    // Remove notificação existente
    const existingNotification = document.querySelector('.volume-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Criar nova notificação
    const notification = document.createElement('div');
    notification.className = 'volume-notification';
    notification.innerHTML = `
        <i class="fas fa-volume-up"></i>
        Volume: ${volume}%
    `;
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.9);
        color: var(--cinema-gold);
        padding: 20px 30px;
        border-radius: 15px;
        font-size: 1.2rem;
        font-weight: 600;
        z-index: 1000;
        animation: cinemaNotification 1.5s ease-in-out;
        border: 2px solid var(--cinema-gold);
        box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
        display: flex;
        align-items: center;
        gap: 10px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 1500);
}

// Filtrar vídeos por nível
function filterVideos(level) {
    currentFilter = level;
    
    // Atualizar botões ativos
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    event.target.classList.add('active');
    
    // Recriar lista de vídeos
    createVideoList();
}

// Configurar event listeners
function setupEventListeners() {
    // Botões de controle
    document.getElementById('prevVideo').addEventListener('click', prevVideo);
    document.getElementById('nextVideo').addEventListener('click', nextVideo);
    document.getElementById('volumeDown').addEventListener('click', volumeDown);
    document.getElementById('volumeUp').addEventListener('click', volumeUp);
    playPauseBtn.addEventListener('click', togglePlayPause);
    muteBtn.addEventListener('click', toggleMute);
    
    // Filtros
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filter = e.target.getAttribute('data-filter');
            filterVideos(filter);
        });
    });
    
    // Atalhos de teclado
    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case 'ArrowLeft': // Vídeo anterior
                e.preventDefault();
                prevVideo();
                break;
            case 'ArrowRight': // Próximo vídeo
                e.preventDefault();
                nextVideo();
                break;
            case 'ArrowUp': // Aumentar volume
                e.preventDefault();
                volumeUp();
                break;
            case 'ArrowDown': // Diminuir volume
                e.preventDefault();
                volumeDown();
                break;
            case ' ': // Play/Pause
                e.preventDefault();
                togglePlayPause();
                break;
            case 'm':
            case 'M': // Mudo
                e.preventDefault();
                toggleMute();
                break;
        }
    });
}

// Adicionar CSS para animações
const style = document.createElement('style');
style.textContent = `
    @keyframes cinemaNotification {
        0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
        50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.05);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
        }
    }
    
    .screen-mask {
        transition: opacity 0.3s ease, filter 0.3s ease;
    }
`;
document.head.appendChild(style);

// Inicializar quando a página carregar
window.addEventListener('load', () => {
    loadYouTubeAPI();
});

// Tornar a função disponível globalmente para a API do YouTube
window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
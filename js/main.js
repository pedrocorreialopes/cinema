// Lista de vídeos do YouTube (IDs extraídos das URLs)
const channels = [
    { id: 'xUarb_lxPUc', name: 'O que vamos aprender no curso?' },
    { id: 'J7ABOxu1sdw', name: 'Por que é tão importante aprender IA?' },
    { id: 'QAMF8irwPxM', name: 'Tire suas dúvidas do curso com a gente' },
    { id: 'Sho2hvTQxKE', name: 'Como uma IA funciona?' },
    { id: 'WrJBJsb5IDc', name: 'Rode modelos de IA direto no seu PC' },
    { id: 'p33lQqS1PnY', name: 'O que é Inteligência Artificial?' },
    { id: 'cUOM5qi5lyQ', name: 'A novidade Claude AI' },
    { id: 'WsQyhzHXRlY', name: 'Aplicações de Inteligências Artificiais' },
    { id: 'YY3MmQltQbk', name: 'Desafios das Inteligências Artificiais' },
    { id: 'BzbxjkNseVU', name: 'Inteligência Artificial hoje e no futuro' },
    { id: '0mtXae5HhTE', name: 'Você sabe o que é Machine Learning?' },
    { id: '-RuI3BIAXno', name: 'Crie e edite imagens com IA' },
    { id: 'M8hoXE24PMo', name: 'Você sabe o que é Deep Learning?' },
    { id: 'dqTZCknuctk', name: 'LLM: A tecnologia por trás da IA textual' },
    { id: 'K25zMnhs3Ms', name: 'Crie seu assistente virtual com Hugging Chat' },
    { id: 'nilwEge6jDA', name: 'Simulando Conversas Humanas' },
    { id: 'FTZuA31dbwk', name: 'PLN: Respondendo à Linguagem Humana' },
    { id: 'JfJJIrOhWwQ', name: 'Tokens: A Base da Linguagem para a IA' },
    { id: 'jqQFA6k-Acs', name: 'Uma IA que te ajuda e cita fontes: Perplexity' },
    { id: '0rXf90pnL44', name: 'Prompts: O Pilar da Interação em IA' },
    { id: 'x6BCRy85HLA', name: 'Batalha de IAs: Gemini versus ChatGPT' },
    { id: 'RtoyMsSn9t4', name: 'Duelo de Tecnologias: Chatbots versus Buscadores' },
    { id: 'Ft6oGcG3_7g', name: 'Uma IA que Organiza Suas Ideias: Napkin' },
    { id: '31HFCW5DuqI', name: 'IAs Generativas: Matemática, Metáforas e Mitos' },
    { id: 'ATp4Q4UD-c8', name: 'Design de Prompt: Introdução a Engenharia de Prompt ' },
    { id: '_3lq1Mg4lYw', name: 'Aplicando a Engenharia de Prompt na Prática' },
    { id: 'AOFSTpOBMl8', name: 'Otimize seus estudos e pesquisas com o poder do Notebook LM' },
    { id: 'Hj39xHVvoj0', name: 'Prompts de Atuação: Atribuindo Papéis para IAs' },
    { id: '9OtsFrjYQMU', name: 'Aprimorando E-mails com IA: Prompts de Atuação - Parte 2' },
    { id: '42R_AM9LZ_o', name: 'Interações com modelos de Inteligência Artificial' },
    { id: 'ro9Sb9p-DY8', name: 'Integração de técnicas para amplificar resultados!' },
    { id: 'AGS3qzat0is', name: 'Formalizando Prompts' },
    { id: 'ctlWV3OAZlo', name: 'Aprenda a conversar com robôs!' },
    { id: 'M1yx08ef8SU', name: 'Domine a arte dos prompts poderosos para IA! (Parte 1)' },
    { id: '6Ipu6YB0VQo', name: 'Domine a arte dos prompts poderosos para IA! (Parte 2)' },
    { id: 'cehFjA0qL4g', name: 'Descubra o poder da I.A na criação de imagens!' },
    { id: 'IWzw87I6TqE', name: 'Desvendando falhas dos LLMs: Verifique suas fontes!' },
    { id: 'jsr_ObQ291o', name: 'Vieses em IA: Desvendando Preconceitos na I.A!' },
    { id: 'vTtjfRMNwCc', name: 'Revelando as Mentiras das IAs!' },
    { id: 'v1zYwUWScr4', name: 'Entenda as Armadilhas Matemáticas em Modelos de IA' },
    { id: 'sHuWzF8Mwms', name: 'A Verdade por Trás do Prompt Hacking na IA' },
    { id: 'JRzBxd5rbqc', name: 'Facilite Tarefas com IA: Automação e Organização de Dados' },
    { id: 'cPDabmtNBS8', name: 'Descubra como a IA Facilita sua Rotina de E-mails' },
    { id: 'rO45Chc3jNI', name: 'IA para Networking: Crie E-mails de Prospecção' },
    { id: '1dA2wxyR4pE', name: 'Faça Suas Abordagens Iniciais se Destacarem com IA' },
    { id: 'cYVK8p09zOo', name: 'Escreva Posts de Blog de Alto Nível com Agilidade' },
    { id: 'gm0BI1Gn7xs', name: 'Como a IA Pode Transformar Seus Estudos' },
    { id: 'l1yy3Jd_kaI', name: 'Como se Manter Atualizado com Inteligência Artificial' },
    { id: '35vdWc1MDRo', name: 'Como se Manter Atualizado com Inteligência Artificial (Parte 2)' },
    { id: '2Eam3XeRxHk', name: 'Como a IA Ajuda na Criação e Revisão de Códigos' },
    { id: '1V3WUDuzLmY', name: 'Depuração e Otimização de Código com Inteligência Artificial' },
    { id: '5S6h8t_pQLI', name: 'Converta Códigos e Domine Expressões Regulares' },
    { id: 'YGa4elddiug', name: 'Planejamento e Gestão de Projetos com IA' },
    { id: 'Im-wWhTAruI', name: 'Transforme seus Projetos em Negócios Reais com IA' },
    { id: 'P21na7vR6E0', name: 'Guia Prático de Marketing Digital Utilizando IA' },
    { id: 'rFomZew2BDw', name: 'Melhore suas Estratégias de SEO e Anúncios com IA' },
    { id: 'jFY1vPcPVoc', name: 'Descubra Aplicações Incríveis de IA em Diversas Áreas' },
    { id: 'OIlszrJfkhQ', name: 'Encerramento Módulo 01: Certificado e Próximos Passos' }
];

// Estado atual
let currentChannel = 0;
let currentVolume = 100;
let isMuted = false;
let isPlaying = true;

// Elementos DOM
const iframe = document.getElementById('youtubePlayer');
const channelNumberDisplay = document.getElementById('channelNumber');
const channelListContainer = document.getElementById('channelListContainer');

// Botões de controle
const channelUpBtn = document.getElementById('channelUp');
const channelDownBtn = document.getElementById('channelDown');
const volumeUpBtn = document.getElementById('volumeUp');
const volumeDownBtn = document.getElementById('volumeDown');
const playPauseBtn = document.getElementById('playPause');
const stopBtn = document.getElementById('stop');
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
    updateChannelDisplay();
    createChannelList();
    player.setVolume(currentVolume);
}

// Quando o estado do player muda
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        isPlaying = true;
    } else if (event.data === YT.PlayerState.PAUSED) {
        isPlaying = false;
    }
}

// Atualizar display do canal
function updateChannelDisplay() {
    const channelNum = (currentChannel + 1).toString().padStart(2, '0');
    channelNumberDisplay.textContent = channelNum;
    
    // Atualizar lista de canais
    updateChannelListActive();
}

// Criar lista de canais
function createChannelList() {
    channelListContainer.innerHTML = '';
    
    channels.forEach((channel, index) => {
        const channelItem = document.createElement('div');
        channelItem.className = 'channel-item';
        if (index === currentChannel) {
            channelItem.classList.add('active');
        }
        
        const channelNum = document.createElement('span');
        channelNum.className = 'channel-num';
        channelNum.textContent = `Aula ${(index + 1).toString().padStart(2, '0')}`;
        
        const channelName = document.createElement('span');
        channelName.textContent = channel.name;
        
        channelItem.appendChild(channelNum);
        channelItem.appendChild(channelName);
        
        channelItem.addEventListener('click', () => {
            changeChannel(index);
        });
        
        channelListContainer.appendChild(channelItem);
    });
}

// Atualizar item ativo na lista de canais
function updateChannelListActive() {
    const items = document.querySelectorAll('.channel-item');
    items.forEach((item, index) => {
        if (index === currentChannel) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Mudar canal
function changeChannel(newChannel) {
    if (newChannel >= 0 && newChannel < channels.length) {
        currentChannel = newChannel;
        if (player && player.loadVideoById) {
            player.loadVideoById(channels[currentChannel].id);
        }
        updateChannelDisplay();
        
        // Efeito visual de mudança de canal
        addChannelChangeEffect();
    }
}

// Efeito visual de mudança de canal
function addChannelChangeEffect() {
    const screenGlass = document.querySelector('.screen-glass');
    screenGlass.style.opacity = '0.3';
    setTimeout(() => {
        screenGlass.style.opacity = '1';
    }, 200);
}

// Canal anterior
function channelUp() {
    const newChannel = currentChannel - 1;
    if (newChannel < 0) {
        changeChannel(channels.length - 1);
    } else {
        changeChannel(newChannel);
    }
}

// Próximo canal
function channelDown() {
    const newChannel = currentChannel + 1;
    if (newChannel >= channels.length) {
        changeChannel(0);
    } else {
        changeChannel(newChannel);
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
    }
}

// Parar vídeo
function stopVideo() {
    if (player && player.stopVideo) {
        player.stopVideo();
        isPlaying = false;
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

// Atualizar botão de mute
function updateMuteButton() {
    if (isMuted) {
        muteBtn.innerHTML = '🔇';
    } else {
        muteBtn.innerHTML = '🔊';
    }
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
    notification.textContent = `Volume: ${volume}%`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(0, 0, 0, 0.8);
        color: #00ff00;
        padding: 15px 25px;
        border-radius: 10px;
        font-size: 12px;
        z-index: 1000;
        animation: fadeInOut 2s ease-in-out;
        border: 2px solid #00ff00;
        box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// Event Listeners
channelUpBtn.addEventListener('click', channelUp);
channelDownBtn.addEventListener('click', channelDown);
volumeUpBtn.addEventListener('click', volumeUp);
volumeDownBtn.addEventListener('click', volumeDown);
playPauseBtn.addEventListener('click', togglePlayPause);
stopBtn.addEventListener('click', stopVideo);
muteBtn.addEventListener('click', toggleMute);

// Atalhos de teclado
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowUp':
            e.preventDefault();
            channelUp();
            break;
        case 'ArrowDown':
            e.preventDefault();
            channelDown();
            break;
        case 'ArrowRight':
            e.preventDefault();
            volumeUp();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            volumeDown();
            break;
        case ' ':
            e.preventDefault();
            togglePlayPause();
            break;
        case 'm':
        case 'M':
            e.preventDefault();
            toggleMute();
            break;
        case 's':
        case 'S':
            e.preventDefault();
            stopVideo();
            break;
    }
});

// Adicionar CSS para animação de notificação
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0% {
            opacity: 0;
            transform: translateY(-20px);
        }
        20% {
            opacity: 1;
            transform: translateY(0);
        }
        80% {
            opacity: 1;
            transform: translateY(0);
        }
        100% {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// Inicializar quando a página carregar
window.addEventListener('load', () => {
    loadYouTubeAPI();
});

// Tornar a função disponível globalmente para a API do YouTube
window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

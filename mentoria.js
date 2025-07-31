(function() {
    'use strict';
    
    console.log('🎉 Carregando JavaScript da página Mentoria...');
    
    // ===================================
    // LINKS DAS REDES SOCIAIS
    // ===================================
    
    const socialLinks = {
        discord: 'https://discord.gg/seulinkaqui',        // ⚠️ SUBSTITUA pelo link real
        linkedin: 'https://linkedin.com/company/natrilhadodev', // ⚠️ SUBSTITUA pelo link real
        instagram: 'https://www.instagram.com/natrilhadodev/',
        whatsapp: 'https://chat.whatsapp.com/seulinkaqui'  // ⚠️ SUBSTITUA pelo link real
    };
    
    // ===================================
    // CONFIGURAÇÃO DOS LINKS SOCIAIS
    // ===================================
    
    function setupSocialLinks() {
        const socialButtons = document.querySelectorAll('a[data-social]'); // ← Continua funcionando!
        
        socialButtons.forEach(link => {
            const platform = link.getAttribute('data-social');
            
            if (socialLinks[platform]) {
                link.href = socialLinks[platform];
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                
                link.addEventListener('click', function(e) {
                    const button = this.querySelector('button');
                    if (button) {
                        const originalText = button.textContent;
                        button.textContent = 'Abrindo...';
                        button.style.transform = 'scale(0.95)';
                        
                        setTimeout(() => {
                            button.textContent = originalText;
                            button.style.transform = 'scale(1)';
                        }, 1000);
                    }
                    
                    console.log(`🔗 Redirecionando para: ${platform.toUpperCase()}`);
                });
            }
        });
        
        console.log(`✅ ${socialButtons.length} links sociais configurados`);
    }
    
    // ===================================
    // ANIMAÇÕES DE ENTRADA
    // ===================================
    
    function animatePageLoad() {
        const congratsText = document.querySelector('.text-background'); // ← Continua funcionando!
        if (congratsText) {
            congratsText.style.opacity = '0';
            congratsText.style.transform = 'translateY(30px) scale(0.95)';
            congratsText.style.transition = 'all 1.2s ease';
            
            setTimeout(() => {
                congratsText.style.opacity = '1';
                congratsText.style.transform = 'translateY(0) scale(1)';
            }, 300);
        }
        
        const socialTitle = document.querySelector('.social-media-title');
        if (socialTitle) {
            socialTitle.style.opacity = '0';
            socialTitle.style.transform = 'translateY(20px)';
            socialTitle.style.transition = 'all 0.8s ease';
            
            setTimeout(() => {
                socialTitle.style.opacity = '1';
                socialTitle.style.transform = 'translateY(0)';
            }, 800);
        }
        
        const socialCards = document.querySelectorAll('.grid-media'); // ← Continua funcionando!
        socialCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(60px) rotateX(10deg)';
            card.style.transition = 'all 1s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) rotateX(0deg)';
            }, 1200 + (index * 200));
        });
        
        const whatsappSection = document.querySelector('.whatsapp');
        if (whatsappSection) {
            whatsappSection.style.opacity = '0';
            whatsappSection.style.transform = 'translateY(40px)';
            whatsappSection.style.transition = 'all 1s ease';
            
            setTimeout(() => {
                whatsappSection.style.opacity = '1';
                whatsappSection.style.transform = 'translateY(0)';
            }, 1800);
        }
        
        console.log('✅ Animações de entrada configuradas');
    }
    
    // [... resto do código continua igual ...]
    
    // ===================================
    // INICIALIZAÇÃO
    // ===================================
    
    function init() {
        console.log('🎯 Inicializando página Mentoria...');
        
        setupSocialLinks();
        animatePageLoad();
        // setupInteractiveEffects();
        // setupButtonEffects();
        // setupFeedback();
        // mobileOptimizations();
        
        console.log('🎉 Página Mentoria totalmente funcional!');
        console.log('📱 Links configurados:', Object.keys(socialLinks));
    }
    
    init();
    
})();
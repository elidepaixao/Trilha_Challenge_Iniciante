(function() {
    'use strict';
    
    console.log('🚀 Carregando JavaScript da página Index...');
    
    // ===================================
    // NAVEGAÇÃO PARA MENTORIA
    // ===================================
    
    function redirectToMentoria() {
        document.body.style.opacity = '0.8';
        document.body.style.transition = 'opacity 0.3s ease';
        
        setTimeout(() => {
            window.location.href = 'mentoria.html'; // ← Continua funcionando!
        }, 300);
    }
    
    function setupMentoriaRedirection() {
        const mentoriaLinks = document.querySelectorAll('a[data-action="mentoria"]');
        
        mentoriaLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const button = this.querySelector('button');
                if (button) {
                    const originalText = button.textContent;
                    button.textContent = 'Redirecionando...';
                    button.style.transform = 'scale(0.95)';
                    
                    setTimeout(() => {
                        button.textContent = originalText;
                    }, 2000);
                }
                
                redirectToMentoria();
            });
        });
        
        console.log(`✅ ${mentoriaLinks.length} botões de mentoria configurados`);
    }
    
    // ===================================
    // ANIMAÇÕES DOS CARDS
    // ===================================
    
    function animateCards() {
        const cards = document.querySelectorAll('.grid-cards'); // ← Continua funcionando!
        
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            card.style.transition = 'all 0.8s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 150);
        });
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px) scale(1.03)';
                this.style.boxShadow = '0 20px 40px rgba(201, 243, 29, 0.25)';
                this.style.transition = 'all 0.3s ease';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = 'none';
            });
        });
        
        console.log(`✅ ${cards.length} cards animados`);
    }
    
    // ===================================
    // EFEITOS DOS BOTÕES
    // ===================================
    
    function setupButtonEffects() {
        const buttons = document.querySelectorAll('button'); // ← Continua funcionando!
        
        buttons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
                this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
                this.style.transition = 'all 0.3s ease';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = 'none';
            });
            
            button.addEventListener('mousedown', function() {
                this.style.transform = 'scale(0.98)';
            });
            
            button.addEventListener('mouseup', function() {
                this.style.transform = 'scale(1.05)';
            });
        });
        
        console.log(`✅ ${buttons.length} botões configurados`);
    }
    
    // ===================================
    // ANIMAÇÃO DA SECTION CHALLENGE
    // ===================================
    
    function animateChallenge() {
        const challengeSection = document.querySelector('.challenge'); // ← Continua funcionando!
        const challengeImage = document.querySelector('.challenge figure img');
        const challengeContent = document.querySelector('.content-challenge');
        
        if (challengeSection) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (challengeImage) {
                            challengeImage.style.opacity = '0';
                            challengeImage.style.transform = 'translateX(-50px)';
                            challengeImage.style.transition = 'all 1s ease';
                            
                            setTimeout(() => {
                                challengeImage.style.opacity = '1';
                                challengeImage.style.transform = 'translateX(0)';
                            }, 200);
                        }
                        
                        if (challengeContent) {
                            challengeContent.style.opacity = '0';
                            challengeContent.style.transform = 'translateX(50px)';
                            challengeContent.style.transition = 'all 1s ease';
                            
                            setTimeout(() => {
                                challengeContent.style.opacity = '1';
                                challengeContent.style.transform = 'translateX(0)';
                            }, 400);
                        }
                        
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });
            
            observer.observe(challengeSection);
        }
        
        console.log('✅ Animação da section challenge configurada');
    }
    
    // ===================================
    // OTIMIZAÇÕES MOBILE
    // ===================================
    
    function mobileOptimizations() {
        if (window.innerWidth <= 768) {
            const buttons = document.querySelectorAll('button');
            
            buttons.forEach(button => {
                button.addEventListener('touchstart', function() {
                    this.style.transform = 'scale(0.95)';
                    this.style.backgroundColor = '#a8d419';
                }, { passive: true });
                
                button.addEventListener('touchend', function() {
                    this.style.transform = 'scale(1)';
                    this.style.backgroundColor = '';
                }, { passive: true });
            });
            
            console.log('📱 Otimizações mobile aplicadas');
        }
    }
    
    // ===================================
    // SCROLL SUAVE
    // ===================================
    
    function setupSmoothScroll() {
        document.documentElement.style.scrollBehavior = 'smooth';
        
        if (window.location.hash === '') {
            window.scrollTo(0, 0);
        }
        
        console.log('✅ Scroll suave configurado');
    }
    
    // ===================================
    // INICIALIZAÇÃO
    // ===================================
    
    function init() {
        console.log('🎯 Inicializando funcionalidades...');
        
        setupMentoriaRedirection();
        animateCards();
        setupButtonEffects();
        animateChallenge();
        mobileOptimizations();
        setupSmoothScroll();
        
        console.log('✅ Página Index totalmente carregada e funcional!');
    }
    
    init();
    
    window.addEventListener('resize', mobileOptimizations);
    
})();
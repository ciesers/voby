// VOOBYTHEDOG Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Music player functionality
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    let isPlaying = false;

    // Try to play music on user interaction
    function enableAudio() {
        if (bgMusic && !isPlaying) {
            bgMusic.play().then(() => {
                isPlaying = true;
                musicToggle.textContent = '🔊';
                musicToggle.classList.remove('muted');
            }).catch(err => {
                console.log('Audio autoplay prevented:', err);
            });
        }
    }

    // Music toggle button
    if (musicToggle && bgMusic) {
        musicToggle.addEventListener('click', function() {
            if (isPlaying) {
                bgMusic.pause();
                isPlaying = false;
                this.textContent = '🔇';
                this.classList.add('muted');
            } else {
                bgMusic.play();
                isPlaying = true;
                this.textContent = '🔊';
                this.classList.remove('muted');
            }
        });

        // Enable audio on first user interaction
        document.addEventListener('click', enableAudio, { once: true });
        document.addEventListener('touchstart', enableAudio, { once: true });
    }

    // Copy contract address functionality
    window.copyAddress = function() {
        const address = document.getElementById('contractAddress').textContent;
        navigator.clipboard.writeText(address).then(function() {
            const btn = event.target;
            const originalText = btn.textContent;
            btn.textContent = 'Copied!';
            btn.style.background = '#ffb6c1';
            
            setTimeout(function() {
                btn.textContent = originalText;
                btn.style.background = 'transparent';
            }, 2000);
        }).catch(function(err) {
            console.error('Failed to copy:', err);
            alert('Failed to copy address. Please copy manually: ' + address);
        });
    };

    // Interactive Canvas Background
    const canvas = document.getElementById('interactiveCanvas');
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles = [];
    const particleCount = 50;

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.color = `hsl(${Math.random() * 60 + 300}, 70%, ${Math.random() * 30 + 60}%)`;
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        requestAnimationFrame(animate);
    }
    animate();

    // Mouse interaction with particles
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        particles.forEach(particle => {
            const dx = mouseX - particle.x;
            const dy = mouseY - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                const force = (100 - distance) / 100;
                particle.x -= (dx / distance) * force * 2;
                particle.y -= (dy / distance) * force * 2;
            }
        });
    });

    // Character story interactions
    const characterStories = document.querySelectorAll('.character-story');
    
    characterStories.forEach((story, index) => {
        // Add click interaction
        story.addEventListener('click', function() {
            // Create ripple effect
            createRipple(event, this);
            
            // Add bounce animation
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);
        });

        // Add hover sound effect simulation (visual feedback)
        story.addEventListener('mouseenter', function() {
            const img = this.querySelector('.character-img');
            if (img) {
                img.style.filter = 'drop-shadow(0 0 10px rgba(255,20,147,0.6))';
            }
        });

        story.addEventListener('mouseleave', function() {
            const img = this.querySelector('.character-img');
            if (img) {
                img.style.filter = '';
            }
        });

        // Stagger animation on load
        story.style.opacity = '0';
        story.style.transform = 'translateY(30px)';
        story.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            story.style.opacity = '1';
            story.style.transform = 'translateY(0)';
        }, 100);
    });

    // Ripple effect function
    function createRipple(e, element) {
        const ripple = document.createElement('div');
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ripple.style.position = 'absolute';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.width = '0';
        ripple.style.height = '0';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255,182,193,0.5)';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.pointerEvents = 'none';
        ripple.style.zIndex = '10';
        ripple.style.transition = 'width 0.6s, height 0.6s, opacity 0.6s';
        
        element.style.position = 'relative';
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.style.width = '200px';
            ripple.style.height = '200px';
            ripple.style.opacity = '0';
        }, 10);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // CTA button enhancements
    const ctaButtons = document.querySelectorAll('.cta-btn');
    
    ctaButtons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            // Create particle burst effect
            createButtonParticles(this);
        });
    });

    function createButtonParticles(button) {
        const rect = button.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        for (let i = 0; i < 10; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.left = centerX + 'px';
            particle.style.top = centerY + 'px';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.background = '#ff1493';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '10000';
            
            const angle = (Math.PI * 2 * i) / 10;
            const velocity = 50;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            document.body.appendChild(particle);
            
            let x = centerX;
            let y = centerY;
            let opacity = 1;
            
            const animate = () => {
                x += vx * 0.1;
                y += vy * 0.1;
                opacity -= 0.02;
                
                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                particle.style.opacity = opacity;
                
                if (opacity > 0) {
                    requestAnimationFrame(animate);
                } else {
                    particle.remove();
                }
            };
            
            animate();
        }
    }

    // Smooth scroll for character stories
    characterStories.forEach(story => {
        story.addEventListener('click', function() {
            this.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    });

    // Navigation section switching
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');
            
            // Hide all sections
            contentSections.forEach(section => {
                section.classList.add('hidden');
            });
            
            // Show target section
            const target = document.getElementById(targetSection);
            if (target) {
                target.classList.remove('hidden');
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Show home section by default
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.classList.remove('hidden');
    }

    // Dog click handler - bark and reverse rotation
    const spinningDog = document.getElementById('spinningDog');
    const barkSound = document.getElementById('barkSound');
    let isReversed = false;

    if (spinningDog) {
        spinningDog.addEventListener('click', function() {
            // Play bark sound
            if (barkSound) {
                barkSound.currentTime = 0;
                barkSound.play().catch(err => {
                    console.log('Bark sound play failed:', err);
                });
            } else {
                // Fallback: create a simple beep sound
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.value = 800;
                oscillator.type = 'square';
                
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.1);
            }

            // Toggle rotation direction
            if (isReversed) {
                this.classList.remove('reverse');
                isReversed = false;
            } else {
                this.classList.add('reverse');
                isReversed = true;
            }

            // Add bounce effect
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);
        });
    }

    // Draggable stickers functionality
    const draggableStickers = document.querySelectorAll('.draggable-sticker');
    
    draggableStickers.forEach(sticker => {
        let isDragging = false;
        let currentX;
        let currentY;
        let initialX;
        let initialY;
        let xOffset = 0;
        let yOffset = 0;

        sticker.addEventListener('mousedown', dragStart);
        sticker.addEventListener('touchstart', dragStart);

        function dragStart(e) {
            if (e.type === 'touchstart') {
                initialX = e.touches[0].clientX - xOffset;
                initialY = e.touches[0].clientY - yOffset;
            } else {
                initialX = e.clientX - xOffset;
                initialY = e.clientY - yOffset;
            }

            if (e.target === sticker || sticker.contains(e.target)) {
                isDragging = true;
            }
        }

        document.addEventListener('mousemove', drag);
        document.addEventListener('touchmove', drag);

        function drag(e) {
            if (isDragging) {
                e.preventDefault();

                if (e.type === 'touchmove') {
                    currentX = e.touches[0].clientX - initialX;
                    currentY = e.touches[0].clientY - initialY;
                } else {
                    currentX = e.clientX - initialX;
                    currentY = e.clientY - initialY;
                }

                xOffset = currentX;
                yOffset = currentY;

                setTranslate(currentX, currentY, sticker);
            }
        }

        document.addEventListener('mouseup', dragEnd);
        document.addEventListener('touchend', dragEnd);

        function dragEnd() {
            initialX = currentX;
            initialY = currentY;
            isDragging = false;
        }

        function setTranslate(xPos, yPos, el) {
            el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
        }

        // Click effect
        sticker.addEventListener('click', function(e) {
            if (!isDragging) {
                this.style.animation = 'none';
                setTimeout(() => {
                    this.style.animation = '';
                }, 10);
                
                // Add sparkle effect
                createSparkle(e);
            }
        });
    });

    // Console message
    console.log('%c🐕 VOOBYTHEDOG 🐕', 'color: #ff1493; font-size: 20px; font-weight: bold;');
    console.log('%cJoin the adventure!', 'color: #ff69b4; font-size: 14px;');
    console.log('%cClick the dog to make it bark!', 'color: #ff1493; font-size: 12px;');
    console.log('%cDrag the stickers around!', 'color: #ff1493; font-size: 12px;');
});

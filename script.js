        const emojis = ["❤️", "💖", "🥰", "😘", "🌹", "🧸", "💌", "💞", "💍", "💘"];
        const container = document.getElementById('emoji-container');

        function createEmoji() {
            const el = document.createElement('div');
            el.classList.add('emoji-bg');
            el.innerText = emojis[Math.floor(Math.random() * emojis.length)];
            
            el.style.left = Math.random() * 100 + 'vw';
            el.style.fontSize = (Math.random() * 20 + 20) + 'px';
            el.style.animationDuration = (Math.random() * 3 + 4) + 's';
            
            container.appendChild(el);

            setTimeout(() => {
                el.remove();
            }, 7000);
        }
        setInterval(createEmoji, 300);
    (function() {
      "use strict";

      const yesBtn = document.getElementById('yesBtn');
      const noBtn = document.getElementById('noBtn');
      const proposalSection = document.getElementById('proposalSection');
      const successSection = document.getElementById('successSection');
      const btnContainer = document.getElementById('btnContainer');

      function moveNoButton() {
        if (!noBtn) return;
        
        const x = (Math.random() * 130 - 65).toFixed(0); 
        const y = (Math.random() * 90 - 45).toFixed(0); 
        noBtn.style.transform = `translate(${x}px, ${y}px)`;
        

        const rotate = (Math.random() * 20 - 10).toFixed(0);
        noBtn.style.transform += ` rotate(${rotate}deg)`;
      }


      function resetNoButtonPosition() {
        moveNoButton();
      }

      if (noBtn) {

        noBtn.addEventListener('mouseenter', function(e) {
          e.preventDefault();
          moveNoButton();
        });
        
        noBtn.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          

          alert("😜 No is NOT an option, sweetheart! You can only say YES! ❤️");

          moveNoButton();
          
          yesBtn.style.transform = 'scale(1.2)';
          setTimeout(() => {
            yesBtn.style.transform = 'scale(1.08)';
          }, 200);
          setTimeout(() => {
            yesBtn.style.transform = 'scale(1)';
          }, 500);
          
          noBtn.style.backgroundColor = '#fdabaf';
          setTimeout(() => {
            noBtn.style.backgroundColor = '#a0aec0'; 
          }, 300);
        });

        noBtn.addEventListener('touchstart', function(e) {
          e.preventDefault();
          moveNoButton();
        });
      }

      if (yesBtn) {
        yesBtn.addEventListener('click', function(e) {
          e.preventDefault();
          
          proposalSection.style.display = 'none';
          
          successSection.style.display = 'block';
          const successDiv = successSection;
          
        });
      }

      window.addEventListener('load', function() {
        if (noBtn) {
          moveNoButton();
        }
      });
      window.addEventListener('resize', function() {
        if (noBtn && proposalSection.style.display !== 'none') {
          moveNoButton();
        }
      });

      noBtn.addEventListener('contextmenu', function(e) {
        e.preventDefault();
      });

    })();
        
   
document.getElementById('heart').addEventListener('click', function() {
      this.classList.toggle('selected');
  });

  
  document.addEventListener('DOMContentLoaded', function() {
    var popupTrigger = document.getElementById('popup-trigger');
    var popup = document.getElementById('popup');
    var closeBtn = document.getElementById('close-btn');

    popupTrigger.addEventListener('click', function(event) {
        event.preventDefault();
        popup.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var popupTrigger= document.getElementById('popup-trigger1');
    var popup = document.getElementById('popup1');
    var closeBtn = document.getElementById('close-btn');

    popupTrigger.addEventListener('click', function(event) {
        event.preventDefault();
        popup.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    var popupTrigger = document.getElementById('popup-trigger2');
    var popup = document.getElementById('popup2');
    var closeBtn = document.getElementById('close-btn');

    popupTrigger.addEventListener('click', function(event) {
        event.preventDefault();
        popup.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    var popupTrigger = document.getElementById('popup-trigger');
    var popup = document.getElementById('popup');
    var closeBtn = document.getElementById('close-btn');

    popupTrigger.addEventListener('click', function(event) {
        event.preventDefault();
        popup.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });

    var removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var memberItem = this.parentElement;
            memberItem.remove();
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var openPopupBtn = document.getElementById('open-popup-btn');
    var closePopupBtn = document.getElementById('close-popup-btn');
    var popup = document.getElementById('quiz-popup');
    var options = document.querySelectorAll('.option');
    var submitBtn = document.getElementById('submit-btn');
    var selectedAnswers = {};

    openPopupBtn.addEventListener('click', function() {
        popup.style.display = 'flex';
    });

    closePopupBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

    options.forEach(function(option) {
        option.addEventListener('click', function() {
            var questionContainer = this.closest('.question-container');
            var questionId = questionContainer.id;

            // Remove selected class from all options in this question
            var allOptions = questionContainer.querySelectorAll('.option');
            allOptions.forEach(function(opt) {
                opt.classList.remove('selected');
            });

            // Add selected class to the clicked option
            this.classList.add('selected');

            // Store the answer
            selectedAnswers[questionId] = this.getAttribute('data-answer');
        });
    });

    submitBtn.addEventListener('click', function() {
        console.log(selectedAnswers);
        alert('Quiz submitted! Check the console for the results.');
        popup.style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var popup = document.getElementById('popup-ai-recommend');
    var btn = document.getElementById('openPopup-ai');
    var span = document.getElementsByClassName('close');

    btn.onclick = function () {
        popup.style.display = 'block';
    }

    span.onclick = function () {
        popup.style.display = 'none';
    }

    window.onclick = function (event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    }
});

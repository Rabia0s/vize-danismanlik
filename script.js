window.addEventListener('load', function() {
    // İletişim formu gönderimi
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            alert('Mesajınız başarıyla gönderildi!');
            // Formu sıfırla
            document.getElementById('contact-form').reset();
        } else {
            alert('Lütfen tüm alanları doldurun.');
        }
    });


    // Simülasyon: Verilerin yüklenmesi
    setTimeout(function() {
        document.getElementById('consultant-count').textContent = '15+';
        document.getElementById('satisfaction-rate').textContent = '%98';
        document.getElementById('approval-rate').textContent = '%95';
    }, 2000); // 2 saniye sonra veriler yüklenecek

    // Vize başvuru durumu
    document.getElementById('visa-status-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const applicantName = document.getElementById('applicant-name').value;
        const applicantEmail = document.getElementById('applicant-email').value;
        const applicationNumber = document.getElementById('application-number').value;

        if (applicantName && applicantEmail && applicationNumber) {
            // Başvuru durumu mesajını göster
            const response = document.getElementById('visa-status-response');
            response.classList.remove('hidden');
            response.classList.add('visible');

            // Formu sıfırla
            document.getElementById('visa-status-form').reset();
        } else {
            alert('Lütfen tüm alanları doldurun.');
        }




        
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const aboutItems = document.querySelectorAll('.about-item');
    
    // Sayfa kaydırıldıkça her öğeyi kontrol et
    window.addEventListener('scroll', function() {
        aboutItems.forEach(function(item) {
            let sectionPosition = item.getBoundingClientRect().top;
            let screenPosition = window.innerHeight / 1.2; // Görünürlük alanı

            if (sectionPosition < screenPosition) {
                item.classList.add('visible');  // Görünür olduğunda animasyon başlar
            }
        });
    });
});
 
window.addEventListener('load', function () {
    const historySection = document.getElementById('history');

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(historySection);
});
window.addEventListener('load', function() {
    // Dinamik sayma işlemi
    const consultantCount = document.getElementById('consultant-count');
    const satisfactionRate = document.getElementById('satisfaction-rate');
    const approvalRate = document.getElementById('approval-rate');

    let consultantStart = 0;
    let satisfactionStart = 0;
    let approvalStart = 0;

    function animateCount(element, startValue, endValue) {
        let increment = Math.ceil((endValue - startValue) / 100);
        let countInterval = setInterval(function() {
            startValue += increment;
            if (startValue >= endValue) {
                startValue = endValue;
                clearInterval(countInterval);
            }
            element.textContent = startValue;
        }, 30);
    }

    // Sayma animasyonunu başlat
    animateCount(consultantCount, consultantStart, 15.000);  // 15+ danışman
    animateCount(satisfactionRate, satisfactionStart, 98);  // %98 memnuniyet
    animateCount(approvalRate, approvalStart, 95);  // %95 onay oranı
});


document.addEventListener("DOMContentLoaded", function() {
    const feedbackForm = document.getElementById('feedback-form');
    const closeBtn = document.getElementById('close-btn');
    const thankYouMessage = document.getElementById('thank-you-message');
    const submitFeedbackBtn = document.getElementById('submit-feedback-btn');
    const openFeedbackFormBtn = document.getElementById('open-feedback-form-btn');
    const stars = document.querySelectorAll('.star'); // Yıldızları seç
    
    let selectedRating = 0; // Başlangıçta seçilen puan 0

    // Yıldız tıklama olayını işleme
    stars.forEach(star => {
        star.addEventListener('click', function() {
            selectedRating = parseInt(this.getAttribute('data-value')); // Seçilen yıldızın değerini al
            stars.forEach(s => s.classList.remove('selected')); // Tüm yıldızlardan 'selected' sınıfını kaldır
            for (let i = 0; i < selectedRating; i++) {
                stars[i].classList.add('selected'); // Seçilen puanı görselde işaretle
            }
        });
    });

    // Formu açma fonksiyonu
    openFeedbackFormBtn.addEventListener('click', function() {
        feedbackForm.style.display = 'flex'; // Formu aç
        thankYouMessage.style.display = 'none'; // Teşekkür mesajını gizle
    });

    // Formu kapatma fonksiyonu
    closeBtn.addEventListener('click', function() {
        feedbackForm.style.display = 'none'; // Formu gizle
    });

    // Form gönderildiğinde teşekkür mesajını gösterme
    submitFeedbackBtn.addEventListener('click', function() {
        const feedbackText = document.getElementById('feedback-text').value;

        if (selectedRating > 0) {
            // Seçilen puanı ve yorumları al
            console.log("Puan:", selectedRating); // Konsola yazdırma (isteğe bağlı)
            console.log("Yorum:", feedbackText); // Konsola yorum yazdırma (isteğe bağlı)
            
            // Burada, puan ve yorum verilerini sunucuya gönderebilir veya başka işlemler yapabilirsiniz
        } else {
            alert("Lütfen bir puan seçin!"); // Eğer puan seçilmediyse uyarı göster
            return;
        }

        // Geri bildirim gönderildikten sonra teşekkür mesajını göster
        feedbackForm.style.display = 'none'; // Formu gizle
        thankYouMessage.style.display = 'block'; // Teşekkür mesajını göster

        // Teşekkür mesajını 5 saniye sonra gizle
        setTimeout(function() {
            thankYouMessage.style.display = 'none';
        }, 5000); // 5 saniye sonra kaybolacak
    });
});
submitFeedbackBtn.addEventListener('click', function() {
    console.log('Gönder butonuna tıklandı');
    // diğer işlemler
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Form alanlarını al
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Basit form doğrulaması
    if (name === '' || email === '' || message === '') {
        alert('Lütfen tüm alanları doldurun!');
    } else {
        alert('Mesajınız başarıyla gönderildi!');
        // Formu sıfırla
        this.reset();
    }
});


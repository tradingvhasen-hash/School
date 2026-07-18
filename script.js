document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const examNumber = document.getElementById('examNumber').value;
    const password = document.getElementById('password').value;
    const captcha = document.getElementById('captcha').value;
    
    // التحقق من الكابتشا
    if (captcha !== '21') {
        alert('الرجاء إدخال الإجابة الصحيحة للسؤال الحسابي');
        return;
    }
    
    // التحقق من الرقم الامتحاني والرمز السري
    if (examNumber === '102511510020175' && password === '25424015835729') {
        // إعادة توجيه إلى صفحة النتائج
        window.location.href = 'results.html';
    } else {
        alert('الرقم الامتحاني أو الرمز السري غير صحيح');
    }
});

// إضافة تأثيرات بصرية للحقول
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
        this.style.borderColor = '#4CAF50';
        this.style.boxShadow = '0 0 5px rgba(76, 175, 80, 0.3)';
    });
    
    input.addEventListener('blur', function() {
        this.style.borderColor = '#e0e0e0';
        this.style.boxShadow = 'none';
    });
});


document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // تحقق من اسم المستخدم وكلمة المرور
    if (username === "mostafa" && password === "01011479316") {
        window.location.href = "index.html";  // الانتقال إلى الصفحة الرئيسية
    } else {
        document.getElementById('error-message').style.display = 'block';  // عرض رسالة خطأ
    }
});
// تحديث التاريخ والوقت
function updateDateTime() {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('ar-EG');  // تنسيق التاريخ
    const formattedTime = now.toLocaleTimeString('ar-EG');  // تنسيق الوقت
    document.getElementById('datetime').textContent = `${formattedDate} | ${formattedTime}`;
}
setInterval(updateDateTime, 1000);
updateDateTime();

// عند إرسال النموذج
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('تم حفظ البيانات بنجاح!');
});
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const query = document.getElementById('search-query').value.toLowerCase();

    const data = [
        { name: "أحمد علي", nationalId: "1234567890", address: "القاهرة" },
        { name: "مريم محمد", nationalId: "0987654321", address: "الإسكندرية" },
    ];

    const results = data.filter(user =>
        user.name.toLowerCase().includes(query) || user.nationalId.includes(query)
    );

    const resultsDiv = document.getElementById('search-results');
    resultsDiv.innerHTML = '';

    if (results.length > 0) {
        results.forEach(result => {
            resultsDiv.innerHTML += `
                <div class="result-item">
                    <p><strong>الاسم:</strong> ${result.name}</p>
                    <p><strong>الرقم القومي:</strong> ${result.nationalId}</p>
                    <p><strong>العنوان:</strong> ${result.address}</p>
                </div>
            `;
        });
    } else {
        resultsDiv.innerHTML = '<p>لا توجد نتائج للبحث.</p>';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("booking-form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const date = document.getElementById("date").value;
        
        if (!name || !phone || !date) {
            alert("모든 항목을 입력해주세요.");
            return;
        }
        
        const data = { name, phone, date };
        
        fetch("https://script.google.com/macros/s/AKfycbzOsW4kv57Dw_X5Jywwegjk3cnqRGV0kpN4TOqFP-6clhv_gYkoHFnehw3P5g-K0oUI1w/exec", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        .then(response => response.text())
        .then(result => {
            alert("예약 신청이 완료되었습니다!");
            form.reset();
        })
        .catch(error => {
            alert("오류 발생: " + error);
        });
    });
});

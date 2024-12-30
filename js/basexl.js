const scriptURL = 'https://script.google.com/macros/s/AKfycbyeTBtYRxRcjfBAMFenUwPn5yAxZW9fzOBHSJfJjrBLVjsOfLdJIz2qfuKHI51BlBIg/exec';

async function handleSubmit(event) {
    event.preventDefault();
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            alert('Message sent successfully!');
            form.reset();
        } else {
            alert('Failed to send message.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to send message.');
    }
}
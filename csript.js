document.getElementById('showMoreBtn').addEventListener('click', function() {
    const moreDetails = document.getElementById('moreDetails');
    if (moreDetails.classList.contains('hidden')) {
        moreDetails.classList.remove('hidden');
        this.textContent = 'Скрыть детали';
    } else {
        moreDetails.classList.add('hidden');
        this.textContent = 'Показать дополнительные детали';
    }
})
class SimpleFormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
    }

    isValid() {
        const username = this.form.username.value;
        const email = this.form.email.value;
        
        return username.trim() !== '' && email.trim() !== '';
    }
};
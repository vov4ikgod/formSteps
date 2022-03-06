const b = document.querySelector('.btn');
const steps = document.querySelectorAll('.form-step');
const prevBtn = document.querySelector('.prev-step');
const nextBtn = document.querySelector('.next-step');
const form = document.querySelector('.steps-form');
const stepNumbers = document.querySelectorAll('.step-number');
const progress = document.querySelector('.progress-success');
const finish = document.querySelector('.finish');


let stepForm = () => {

    form.addEventListener('submit', e => e.preventDefault());


    let formStepIndex = 0;
    prevBtn.addEventListener('click', () => {
        formStepIndex--;

        stepNumbers[formStepIndex + 1].classList.remove('active-number'); 

        updateFormSteps();
    })
    nextBtn.addEventListener('click', () => {
        formStepIndex++;
        updateFormSteps();
    })



    let updateFormSteps = () => {
        steps.forEach(step => {
            if (step.classList.contains('active')) {
                step.classList.remove('active');
            }
        })

        steps[formStepIndex].classList.add('active');
        stepNumbers[formStepIndex].classList.add('active-number');

        if (formStepIndex === 0) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'inline-flex';
        }

        if (formStepIndex === steps.length - 1) {
            nextBtn.innerHTML = 'Finish';

            nextBtn.addEventListener('click', () => {
                finish.style.display = 'block';
                form.style.display = 'none'
            })
        } else {
            nextBtn.innerHTML = 'Next';
        }

        const actives = document.querySelectorAll('.active-number');
        const percent = (( actives.length - 1 ) / (stepNumbers.length - 1)) * 100 + '%';

        progress.style.width = percent;
    }

    updateFormSteps();
}

stepForm();
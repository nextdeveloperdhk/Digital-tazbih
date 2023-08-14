// For Subhanallah
let subhanallahInitialValue = 0;



const subhanallahIncreBtn = document.getElementById('subhanallahIncrementBtn');
subhanallahIncreBtn.addEventListener('click', function(){
    if(subhanallahInitialValue === 33){
        return alert('Subhanallah Complete. please another one.')
    }else{
        subhanallahInitialValue = subhanallahInitialValue + 1;
    const subhanallahCounter = document.getElementById('subhanallahCount');
    subhanallahCounter.innerText = subhanallahInitialValue
    }
    
        
})

const subhanallahDecreBtn = document.getElementById('subhanallahDecrementBtn');
subhanallahDecreBtn.addEventListener('click', function(){
    if(subhanallahInitialValue === 0){
        return alert('you cannot go to minus.')
    }else{
        subhanallahInitialValue = subhanallahInitialValue - 1;
        const subhanallahCounter = document.getElementById('subhanallahCount');
        subhanallahCounter.innerText = subhanallahInitialValue;
    }   
})




// For Alhamdulillah
let alhamdulillahInitialValue = 0;



const alhamdulillahIncreBtn = document.getElementById('alhamdulillahIncrementBtn');
alhamdulillahIncreBtn.addEventListener('click', function(){
    if(alhamdulillahInitialValue === 33){
        return alert('Alhamdulillah complete. please another one.')
    }else{
        alhamdulillahInitialValue += 1;
    const alhamdulillahCounter = document.getElementById('alhamdulillahCount');
    alhamdulillahCounter.innerText = alhamdulillahInitialValue;
    }
})


const alhamdulillahDecreBtn = document.getElementById('alhamdulillahDecrementBtn');
alhamdulillahDecreBtn.addEventListener('click', function(){
    if(alhamdulillahInitialValue === 0){
        return alert('you cannot go to minus.')
    }else{
        alhamdulillahInitialValue -= 1;
    const alhamdulillahBtnCounter = document.getElementById('alhamdulillahCount');
    alhamdulillahBtnCounter.innerText = alhamdulillahInitialValue;
    }
    
})
// For allah
let allahCountValue = 0;
const allahIncrementBtn = document.getElementById('allahIncrementBtn');
allahIncrementBtn.addEventListener('click', function(){
    if(allahCountValue === 34){
        return alert('Allah is complete. All done. you can start from first again.')
    }
    allahCountValue += 1;
    const allahCounter = document.getElementById('allahCount');
    allahCounter.innerText =  allahCountValue;
})

const allahDecrementBtn = document.getElementById('allahDecrementBtn');
allahDecrementBtn.addEventListener('click',function(){
    if(allahCountValue === 0){
        return alert('you cannot go to minus.')
    }else{
        allahCountValue -= 1;
    const allahCounter = document.getElementById('allahCount');
    allahCounter.innerText = allahCountValue;
    }
})

// Reset Button
const resetBttn = document.getElementById('resetBtn');
resetBttn.addEventListener('click', function(){
    subhanallahCount.innerText = 0;
    alhamdulillahCount.innerText = 0;
    allahCount.innerText = 0;
    subhanallahInitialValue = 0;
    alhamdulillahInitialValue = 0;
    allahCountValue = 0;

})



const day = document.querySelector('.day')
const week = document.querySelector('.week')
const month = document.querySelector('.month')

const btns = document.querySelectorAll('.btn')

btns.forEach(btn => {
        btn.addEventListener('click', e => {
                let currentBtn = e.currentTarget.classList
                if(currentBtn.contains('daily')) {
                        day.className = 'grid-container active day'
                        month.className = 'grid-container month'
                        week.className = 'grid-container week' 
                        currentBtn.add('active')  
                }
                if(currentBtn.contains('weekly')) {
                        week.className = 'grid-container active week'
                        month.className = 'grid-container month'
                        day.className = 'grid-container day' 
                        currentBtn.add('active')  
                }
                if(currentBtn.contains('monthly')) {
                        month.className = 'grid-container active month'
                        day.className = 'grid-container day'
                        week.className = 'grid-container week' 
                        currentBtn.add('active') 
                }
                btns.forEach(item => {
                        if(item !== btn) {
                                item.classList.remove('active')
                        }
                })
        })
})
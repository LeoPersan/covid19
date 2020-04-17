
        window.addEventListener('load', () => {
            (function (nav) {
                let button = nav.querySelector('button');
                let ul = nav.querySelector('ul');
                button.addEventListener('click', () => {
                    if (ul.offsetHeight > 0)
                        ul.style.height = '0px';
                    else
                        ul.style.height = ul.scrollHeight+'px';
                })
                window.addEventListener('resize', () => {
                    if (window.innerWidth >= 992)
                        ul.style.removeProperty('height');
                })
            })(document.querySelector('nav'));
            (function (hearts) {
                hearts.forEach(heart => {
                    heart.addEventListener('click', () => {
                        if (heart.classList.contains('fas')) {
                            heart.classList.remove('fas');
                            heart.classList.add('far');
                            heart.innerText = parseInt(heart.innerText)-1;
                        } else {
                            heart.classList.remove('far');
                            heart.classList.add('fas');
                            heart.innerText = parseInt(heart.innerText)+1;
                        }
                    })
                });
            })(document.querySelectorAll('.fa-heart'));
            (function(url) {
                let xhttp = new XMLHttpRequest();
                xhttp.open('GET',url,false);
                xhttp.send();
                let data = JSON.parse(xhttp.responseText);
                document.querySelector('.deceased .number').innerText = data.deceased;
                document.querySelector('.infected .number').innerText = data.infected;
                document.querySelector('.letality .number').innerText = (data.deceased*100/data.infected).toFixed(2)+'%';
            })('https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true');
        });
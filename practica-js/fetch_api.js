const apikey = '8fa8fe67b5f6b84aedfe04b2350639db'

const peticion = fetch(`https://api.themoviedb.org/3/movie/550?api_key=${apikey}`)


peticion
// esto se conoce como promesa en cadena
    .then(resp => resp.json() )
    .then( (data) => {
        //console.log(data);
        console.log(data.original_title)
        console.log(data.overview)
        console.log(data.poster_path)

        const title = document.createElement('h1')
        title.textContent = data.original_title

        const over = document.createElement('p')
        over.textContent = data.overview

        const img = document.createElement('img');
        img.src = 'https://image.tmdb.org/t/p/w500' + data.poster_path;

        document.body.append(title);
        document.body.append(over);
        document.body.append(img);

    })

    .catch(console.warn);
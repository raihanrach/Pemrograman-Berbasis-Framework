// ... the starter code you pasted ...
const e = React.createElement;

function LikeButton(){
    // DISPLAY A "Like" <button>

    return e(
        'button',
        {
            onClick: () => alert('berhasil')
        },
        'Like'
        );
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
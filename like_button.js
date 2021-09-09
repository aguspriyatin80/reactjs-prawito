const e = React.createElement
function LikeButton(){
    return e(
        'button',
        {onClick:()=>alert('button clicked')},
        'Like'
    )
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
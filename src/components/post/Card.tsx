/*basic card framework. will extend the following
   - Events
   - Artworks
   - Questions
*/

export default function Card() {
    return (
    <>
    <div className="post">
    <div className="post-header">
        <img src="/src/assets/react.svg" alt="Profile Picture" className="profile-pic"/>
        <div>
            <div className="username">Kye is a giant baka</div>
            <div className="timestamp">5 minutes ago</div>
        </div>
    </div>
    <div className="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget purus in ligula aliquet varius.
    </div>
    <div className="comments">
        <div className="comment-header">
            <img src="/src/assets/react.svg" alt="Profile Picture" className="comment-pic"/>
            <div className="comment-author">Commenter 1</div>
        </div>
        <div className="comment">
            <div className="comment-content">Nyaruhodo</div>
        </div>
    </div>
    </div>
    </>
    );
}
    
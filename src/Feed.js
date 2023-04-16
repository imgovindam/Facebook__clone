import React from 'react'
import Storyreel from './Storyreel'
import "./Feed.css"
import MessageSender from './MessageSender'
import Post from './Post'
function Feed() {
  return (
    <div className="feed">
      <Storyreel/>
      {/* <Feed/> */}
      <MessageSender/>
     
      <Post photoURL="https://scontent.fdel11-3.fna.fbcdn.net/v/t31.18172-8/17436336_1307019372721065_4586270760387435140_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=jXStL2olrgIAX938eSK&_nc_ht=scontent.fdel11-3.fna&oh=00_AfAE_vnZvOCo7Npmye3lUq2S8uLdDfH_k3m2WBJwnRGijw&oe=645F59B4" image="https://cdn.firstcry.com/education/2022/04/25155522/1378635314.jpg" username="Govind" timestamp="4:20pm" message="This is a message"/>
      <Post photoURL="https://m.media-amazon.com/images/I/61AVcds7zxL._SL1067_.jpg" image="https://www.exchange4media.com/news-photo/123068-107633-motupatlu.jpg" username="Motu" timestamp="4:20pm" message="This is a message"/>
     < Post photoURL="https://i.pinimg.com/originals/78/36/a8/7836a86777cdb65e94aa1a88acddf26e.jpg" image="https://www.hindipanda.com/wp-content/uploads/2018/08/The-Real-Story-of-Shin-Chan-Death-in-Hindi-3.jpg" username="Patlu" timestamp="4:20pm" message="This is a message"/>
     <Post photoURL="https://pbs.twimg.com/media/EbaKhc0U0AAvyMV.jpg" image="https://pbs.twimg.com/media/EbaKhc0U0AAvyMV.jpg" username="Chotu" timestamp="4:20pm" message="This is a message"/>
     
    </div>
  )
}

export default Feed

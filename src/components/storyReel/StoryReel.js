import React from "react";
import Story from "../story/Story";
import './StoryReel.css'

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://i.picsum.photos/id/822/200/300.jpg?hmac=L4-fkLPiZOUXQokdDk0s2gcjb6w_zq1DGU7WybDqrj0"
        profileSrc="https://i.picsum.photos/id/1011/200/300.jpg?hmac=3OASTCcuMs99-ZFi2rl7Rh9DuaNJXZytGmDyOsRm7Hw"
        title="Brynt Leonard"
      />
      <Story
        image="https://i.picsum.photos/id/367/200/300.jpg?hmac=9v6fvZlygxFPleXOePw645QmRd9ytp91VGVQaolJKIk"
        profileSrc="https://i.picsum.photos/id/590/200/300.jpg?hmac=rMKCd22eXuQjtVujiifOrJzm-dBuhO8blicB93xN4y4"
        title="Derek Frank"
      />
      <Story
        image="https://i.picsum.photos/id/576/200/300.jpg?hmac=Uf-okGnisfAphCT3N-WTyzaG-e-r9yvOhY3W43DMWwA"
        profileSrc="https://i.picsum.photos/id/590/200/300.jpg?hmac=rMKCd22eXuQjtVujiifOrJzm-dBuhO8blicB93xN4y4"
        title="Ben Chris"
      />
    </div>
  );
};

export default StoryReel;

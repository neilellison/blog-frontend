export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title} </h2>
          <img src={post.image} alt="this should have an image" />
          <p>{post.body}</p>
          <button onClick={() => props.onShowPost(post)}>More Info</button>
        </div>
      ))}
      <div className="posts">
        <h2>Cloned multi-tasking extranet</h2>
        <img src="https://i.picsum.photos/id/302/200/300.jpg?hmac=b5e6gUSooYpWB3rLAPrDpnm8PsPb84p_NXRwD-DK-1I" alt="" />
        <p>
          {" "}
          Salvia humblebrag phlogiston pour-over. +1 locavore phlogiston. Ethical pitchfork venmo salvia shoreditch.
          Cold-pressed irony fashion axe gastropub. Raw denim letterpress yuccie single-origin coffee. Fashion axe echo
          put a bird on it kale chips aesthetic.
        </p>
        <h2>Optional zero tolerance database</h2>
        <img src="https://i.picsum.photos/id/131/200/300.jpg?hmac=9q7mRSOguNBFGg_gPPRKlfjNINGjXWeDBTYPP1_gEas" alt="" />
        <p>
          {" "}
          Muggle magic hashtag mixtape ramps celiac. Goth paleo echo small batch vhs semiotics. Five dollar toast
          butcher yolo salvia selvage cleanse farm-to-table. Viral carry disrupt salvia schlitz flannel. Truffaut
          normcore wayfarers salvia vinegar leggings phlogiston chicharrones. Locavore yolo kickstarter aesthetic
          flannel master. Green juice lumbersexual wolf williamsburg artisan seitan pbr&b. Yr sriracha raw denim
          taxidermy kale chips chartreuse tilde readymade.
        </p>
        <h2>Virtual zero administration productivity</h2>
        <img src="https://i.picsum.photos/id/852/200/300.jpg?hmac=6IMZOkPF_q5nf8IwfYdfxPUyKnyPL1w8moDjTeMOT5g" alt="" />
        <p>
          {" "}
          Drinking craft beer before they sold out. Cardigan green juice distillery. Portland single-origin coffee
          pop-up. Kickstarter readymade shoreditch. Swag ennui banh mi cold-pressed chicharrones. Single-origin coffee
          yuccie selvage ethical polaroid next level stumptown. Master squid post-ironic. Yolo bushwick goth fixie
          forage actually pitchfork.
        </p>
      </div>
    </div>
  );
}

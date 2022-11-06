import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <>
      <div class="ba">
        <section class="tc pa3 pa5-ns">
          <article class="hide-child relative ba b--black-20 mw5 center">
            <img src={imageUrl} class="db" alt="Photo of Jesse Grant" />
            <div class="pa2 bt b--black-20">
              <a class="f6 db link dark-blue hover-blue" href="#">
                {title}
              </a>
              <p class="f6 gray mv1"></p>
              <a
                class="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1"
                href="#"
              >
                Show Now
              </a>
            </div>
            <a
              class="child absolute top-1 right-1 ba bw1 black-40 grow no-underline br-100 w1 h1 pa2 lh-solid b"
              href="#"
            >
              ×
            </a>
          </article>
        </section>
      </div>
      {/* <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div> */}
    </>
  );
};

export default CategoryItem;

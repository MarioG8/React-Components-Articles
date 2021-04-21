import "./App.scss";
import Article from "./Article";

function App() {
  return (
    <section className="main">
      <div className="main__wrapper">
        <Article
          img="https://images.pexels.com/photos/4220967/pexels-photo-4220967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          title="Beauty of Mountains"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente maiores, ducimus beatae provident, cupiditate quas ipsam nihil illo veritatis laboriosam aut! Architecto error, quisquam vitae est perspiciatis fuga eaque ea dolores vel magni ex expedita omnis quod temporibus unde consequatur reiciendis eum molestiae ipsa. Totam et quo accusantium quis itaque vitae error, culpa quaerat a quidem, quae molestias quia repellat?"
        />
        <Article
          img="https://images.pexels.com/photos/1448055/pexels-photo-1448055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          title="Beauty of Mountains"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente maiores, ducimus beatae provident, cupiditate quas ipsam nihil illo veritatis laboriosam aut! Architecto error, quisquam vitae est perspiciatis fuga eaque ea dolores vel magni ex expedita omnis quod temporibus unde consequatur reiciendis eum molestiae ipsa. Totam et quo accusantium quis itaque vitae error, culpa quaerat a quidem, quae molestias quia repellat?"
        />
        <Article
          img="https://images.pexels.com/photos/947448/pexels-photo-947448.jpeg?cs=srgb&dl=pexels-tembela-bohle-947448.jpg&fm=jpg"
          title="Beauty of Mountains"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente maiores, ducimus beatae provident, cupiditate quas ipsam nihil illo veritatis laboriosam aut! Architecto error, quisquam vitae est perspiciatis fuga eaque ea dolores vel magni ex expedita omnis quod temporibus unde consequatur reiciendis eum molestiae ipsa. Totam et quo accusantium quis itaque vitae error, culpa quaerat a quidem, quae molestias quia repellat?"
        />
        <Article
          img="https://images.pexels.com/photos/2222839/pexels-photo-2222839.jpeg?cs=srgb&dl=pexels-valdemaras-d-2222839.jpg&fm=jpg"
          title="Beauty of Mountains"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente maiores, ducimus beatae provident, cupiditate quas ipsam nihil illo veritatis laboriosam aut! Architecto error, quisquam vitae est perspiciatis fuga eaque ea dolores vel magni ex expedita omnis quod temporibus unde consequatur reiciendis eum molestiae ipsa. Totam et quo accusantium quis itaque vitae error, culpa quaerat a quidem, quae molestias quia repellat?"
        />
      </div>
    </section>
  );
}

export default App;

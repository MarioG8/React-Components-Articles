import "./App.scss";
import Article from "./Article";

function App() {
  return (
    <section className="main">
      <div className="main__wrapper">
        <Article
          img="https://images.pexels.com/photos/4220967/pexels-photo-4220967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          title="Beauty of Mountains"
          description="Get work done quicker by building out entire projects or isolating
            code to test features and animations. Want to keep it all under
            wraps? Upgrade to a PRO account to keep your work private. wraps?
            Upgrade to a PRO account to keep your work private. wraps? Upgrade
            to a PRO account to keep your work private. wraps? Upgrade to a PRO
            account to keep your work private."
        />
        <Article
          img="https://images.pexels.com/photos/1448055/pexels-photo-1448055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          title="Beauty of Mountains"
          description="Get work done quicker by building out entire projects or isolating
            code to test features and animations. Want to keep it all under
            wraps? Upgrade to a PRO account to keep your work private. wraps?
            Upgrade to a PRO account to keep your work private. wraps? Upgrade
            to a PRO account to keep your work private. wraps? Upgrade to a PRO
            account to keep your work private."
        />
        <Article
          img="https://images.pexels.com/photos/947448/pexels-photo-947448.jpeg?cs=srgb&dl=pexels-tembela-bohle-947448.jpg&fm=jpg"
          title="Beauty of Mountains"
          description="Get work done quicker by building out entire projects or isolating
            code to test features and animations. Want to keep it all under
            wraps? Upgrade to a PRO account to keep your work private. wraps?
            Upgrade to a PRO account to keep your work private. wraps? Upgrade
            to a PRO account to keep your work private. wraps? Upgrade to a PRO
            account to keep your work private."
        />
        <Article
          img="https://images.pexels.com/photos/2222839/pexels-photo-2222839.jpeg?cs=srgb&dl=pexels-valdemaras-d-2222839.jpg&fm=jpg"
          title="Beauty of Mountains"
          description="Get work done quicker by building out entire projects or isolating
            code to test features and animations. Want to keep it all under
            wraps? Upgrade to a PRO account to keep your work private. wraps?
            Upgrade to a PRO account to keep your work private. wraps? Upgrade
            to a PRO account to keep your work private. wraps? Upgrade to a PRO
            account to keep your work private."
        />
      </div>
    </section>
  );
}

export default App;

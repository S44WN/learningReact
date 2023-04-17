import DUMMY_MEALS from "./dummy-meals";

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map();

  return (
    <section>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;

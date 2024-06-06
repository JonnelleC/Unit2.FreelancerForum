const freelancer = [
  { id: "writer", name: "Alice", price: 30 },
  { id: "teacher", name: "Bob", price: 50 },
  { id: "programmer", name: "Carol", price: 70 },
];
console.log(freelancer);

const names = ["John", "Karen", "Jose", "Andrew"];

const occupations = ["Math Tutor", "Painter", "contractor", "handy-man"];

const body = document.querySelector("body");
const average = document.createElement("h2");

const addElement = (element, parent, str) => {
  const content = document.createElement(element);
  content.textContent = str;
  parent.append(content);
};

const addOl = (parent) => {
  const freelancerList = document.createElement("ol");
  freelancer.forEach((element) => {
    addElement(
      "li",
      freelancerList,
      `Name: ${element.name} Occupation: ${element.id} Price: $${element.price}`
    );
  });
  parent.append(freelancerList);
};

const avgPrice = () => {
  return (
    Math.round(
      (freelancer.reduce((acc, curr) => acc + curr.price, 0) /
        freelancer.length) *
        100
    ) / 100
  );
};

const render = () => {
  const freelancerList = document.querySelector("ol");
  const newFreelancer = {
    id: occupations[Math.floor(Math.random() * occupations.length)],
    name: names[Math.floor(Math.random() * names.length)],
    price: Math.floor(Math.random() * 100),
  };
  freelancer.push(newFreelancer);
  addElement(
    "li",
    freelancerList,
    `Name: ${newFreelancer.name} Occupation: ${newFreelancer.id} Price: $${newFreelancer.price}`
  );
  const avg = document.querySelector("#average");
  average.textContent = `Average price: $${avgPrice()}`;
};

average.textContent = `Average price: $${avgPrice()}`;

setInterval(render, 2000);
average.setAttribute("id", "average");
body.append(average);
addOl(body);

const init = () => {
  const alice = document.createElement("alice");

  alice.style.backgroundColor = "pink";
  alice.style.height = "200px";
  alice.style.color = "white";

  const bob = document.createElement("h1");
  bob.style.color = "yellow";
  bob.textContent = "bob";
  alice.append(bob);

  const carol = document.createElement("h1");
  carol.style.color = "green";
  carol.textContent = "carol";
  alice.append(carol);

  const newFreelancer = prompt(
    "Select a freelancer from options: writer, programmer, teacher "
  );
  console.log(findFreelancerBy(newFreelancer));
};

function findFreelancerBy(id) {
  return freelancer.find((freelancer) => {
    freelancer.id === id;
  });
}

let freelancers = [];
const category = [
  { id: "Math Tutor", name: "John", price: 60 },
  { id: "Painter", name: "Karen", price: 100 },
  { id: "contractor", name: "Jose", price: 200 },
  { id: "handy-man", name: "Andrew", price: 90 },
];

function getFreeLancer() {
  for (let i = 0; i < category.length; i++) {
    console.log(
      `${category[i].name} with the occupation of ${category[i].id} and a price of ${category[i].price}`
    );
  }
}

category.forEach((id) => freelancer.push(id));

//["Math Tutor", "Painter", "contractor", "handy-man"];

const averagePrice = () => {
  const total = freelancer.slice(0, 2).reduce((sum, f) => sum + f.price, 0);
  return total / 2;
};
console.log(`The average price of a freelancer is ${averagePrice()}`);

const newAveragePrice = () => {
  const total = freelancer.reduce((sum, f) => sum + f.price, 0);
  return total / freelancer.length;
};
console.log(
  `The average price of a freelancer is ${
    Math.round(newAveragePrice() * 100) / 100
  }`
);
init();

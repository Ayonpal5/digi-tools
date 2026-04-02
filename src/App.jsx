import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const productsData = [
  {
    id: 1,
    name: "AI Writing Pro",
    description: "Generate SEO content fast",
    price: 19,
    period: "monthly",
    tag: "Popular",
    features: ["100+ templates", "SEO optimized", "Export PDF"],
    icon: "✍️",
  },
  {
    id: 2,
    name: "Design Toolkit",
    description: "UI kits & templates",
    price: 29,
    period: "one-time",
    tag: "New",
    features: ["Figma", "Icons", "Components"],
    icon: "🎨",
  },
  {
    id: 3,
    name: "SEO Booster",
    description: "Rank your site",
    price: 15,
    period: "monthly",
    tag: "Best",
    features: ["Keyword", "Audit", "Reports"],
    icon: "🚀",
  },
  {
    id: 4,
    name: "Resume Builder",
    description: "ATS ready CV",
    price: 10,
    period: "one-time",
    tag: "Popular",
    features: ["Templates", "Download", "ATS"],
    icon: "📄",
  },
  {
    id: 5,
    name: "Marketing Kit",
    description: "Grow your brand",
    price: 25,
    period: "monthly",
    tag: "New",
    features: ["Ads", "Email", "Analytics"],
    icon: "📢",
  },
  {
    id: 6,
    name: "Code Snippets",
    description: "Reusable code",
    price: 12,
    period: "one-time",
    tag: "Best",
    features: ["JS", "React", "CSS"],
    icon: "💻",
  },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("products");

  const addToCart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      toast.error("Already added");
      return;
    }
    setCart([...cart, product]);
    toast.success("Added to cart");
  };
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.error("Removed");
  };
  const checkout = () => {
    setCart([]);
    toast.info("Checkout complete");
  };
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <ToastContainer />
      <div className="flex justify-between items-center px-8 py-4 bg-white shadow">
        <h1 className="text-xl font-bold text-purple-600">DigiTools</h1>
        <div className="font-semibold">🛒 {cart.length}</div>
      </div>
      <div className="grid md:grid-cols-2 items-center px-10 py-16 bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Supercharge Your Digital Workflow
          </h1>
          <p className="mb-4">All-in-one platform for developers & creators</p>
          <button className="bg-white text-purple-600 px-6 py-2 rounded mr-2">
            Get Started
          </button>
          <button className="border px-6 py-2 rounded">Learn More</button>
        </div>
        <div className="text-6xl text-center">💡</div>
      </div>
      <div className="grid grid-cols-3 text-center bg-purple-600 text-white py-6">
        <div>
          50K+
          <br />
          Customers
        </div>
        <div>
          200+
          <br />
          Tools
        </div>
        <div>
          4.9⭐
          <br />
          Rating
        </div>
      </div>
      <div className="flex justify-center gap-4 my-8">
        <button
          onClick={() => setView("products")}
          className="px-5 py-2 bg-purple-600 text-white rounded"
        >
          Products
        </button>
        <button
          onClick={() => setView("cart")}
          className="px-5 py-2 bg-gray-800 text-white rounded"
        >
          Cart
        </button>
      </div>
      {view === "products" && (
        <div className="grid md:grid-cols-3 gap-6 px-10">
          {productsData.map((p) => (
            <div
              key={p.id}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="flex justify-between">
                <h2 className="font-bold">
                  {p.icon} {p.name}
                </h2>
                <span className="text-xs bg-purple-100 px-2 rounded">
                  {p.tag}
                </span>
              </div>
              <p className="text-sm text-gray-600">{p.description}</p>
              <p className="font-bold mt-2">
                ${p.price} / {p.period}
              </p>
              <ul className="my-2 text-sm">
                {p.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>
              <button
                onClick={() => addToCart(p)}
                className="w-full bg-purple-600 text-white py-2 rounded"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      )}
      {view === "cart" && (
        <div className="px-10">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500">🛒 Empty Cart</p>
          ) : (
            <div className="bg-white p-5 rounded shadow">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between border-b py-2"
                >
                  <span>
                    {item.icon} {item.name}
                  </span>
                  <span>${item.price}</span>
                  <button onClick={() => removeItem(item.id)}>❌</button>
                </div>
              ))}
              <h2 className="mt-4 font-bold">Total: ${total}</h2>
              <button
                onClick={checkout}
                className="w-full mt-3 bg-green-500 text-white py-2 rounded"
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      )}
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold mb-6">Get Started in 3 Steps</h2>
        <div className="grid md:grid-cols-3 gap-6 px-10">
          <div className="bg-white p-4 shadow rounded">Create Account</div>
          <div className="bg-white p-4 shadow rounded">Choose Product</div>
          <div className="bg-white p-4 shadow rounded">Start Using</div>
        </div>
      </div>
      <div className="text-center py-16 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-6 px-10">
          <div className="bg-white p-6 rounded shadow">
            Free
            <br />
            $0
          </div>
          <div className="bg-purple-600 text-white p-6 rounded shadow">
            Pro
            <br />
            $29
          </div>
          <div className="bg-white p-6 rounded shadow">
            Enterprise
            <br />
            $99
          </div>
        </div>
      </div>
      <div className="bg-black text-white text-center p-6">
        © 2026 DigiTools. All rights reserved.
      </div>
    </div>
  );
}

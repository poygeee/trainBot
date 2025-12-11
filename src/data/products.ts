export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  rating: number;
  imageColor: string;
}

export const MOCK_PRODUCTS: Product[] = [
  { id: 1, title: "Factory Arm v4", category: "Robots", price: 0, rating: 4.8, imageColor: "#e3f2fd" },
  { id: 2, title: "Warehouse Environment", category: "Environments", price: 49.99, rating: 4.9, imageColor: "#f3e5f5" },
  { id: 3, title: "Bipedal Walker Gen2", category: "Robots", price: 129.00, rating: 4.5, imageColor: "#e8f5e9" },
  // Removed Item 4: City Streets Pack
  // Removed Item 5: Drone Physics Module
  { id: 6, title: "Mars Terrain", category: "Environments", price: 0, rating: 5.0, imageColor: "#fbe9e7" },
  { id: 7, title: "Gripper Attachments", category: "Parts", price: 9.99, rating: 4.3, imageColor: "#f1f8e9" },
  { id: 8, title: "Logistics Bot X1", category: "Robots", price: 249.00, rating: 4.9, imageColor: "#eceff1" },
  { id: 9, title: "Oceanic Research Drone", category: "Robots", price: 350.00, rating: 4.8, imageColor: "#e0f7fa" },
  { id: 10, title: "Automated Greenhouse Kit", category: "Environments", price: 199.00, rating: 4.9, imageColor: "#e8f5e9" },
  // Removed Item 11: Sensor Fusion Algorithm
  // Removed Item 12: Humanoid Assistant v3
];

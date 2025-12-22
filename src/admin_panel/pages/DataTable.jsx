import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
const data = [
  {
    id: 1,
    name: "Kabuli Pulao",
    category: "Rice Dish",
    vegetarian: "No",
    price: "$12",
    status: "Active",
  },
  {
    id: 2,
    name: "Mantu",
    category: "Dumplings",
    vegetarian: "Yes",
    price: "$8",
    status: "Active",
  },
];

export default function DataTables() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Category Name</TableHead>
          <TableHead>Vegetarian</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Status</TableHead>

          <TableCell className="text-right">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <MoreHorizontal />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Add</DropdownMenuLabel>
                <DropdownMenuItem>Update</DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.category}</TableCell>
            <TableCell>{row.vegetarian}</TableCell>
            <TableCell>{row.price}</TableCell>
            <TableCell>{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

// List Of Foods On Menu Page!!!
import { useEffect, useState } from "react";
import axios from "axios";

export function FoodTable() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/menu")
      .then((response) => {
        const foodsData = response.data.map((category) => ({
          id: food.id,
          category_id: food.category_id,
          name: food.name,
          description: food.description || "No description",
          price: food.price,
          photo_url: food.photo_url || "No photo",
          is_vegetarian: food.is_vegetarian,
          is_active: food.is_active,
        }));
        setFoods(foodsData);
      })
      .catch((error) => {
        console.error("Error fetching foods:", error);
      });
  }, []);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Category Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Photo Url</TableHead>
          <TableHead>Vegetarian</TableHead>
          <TableHead>Active</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {foods.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.category_id}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.description}</TableCell>
            <TableCell>${row.price}</TableCell>
            <TableCell>{row.photo_url}</TableCell>
            <TableCell>{row.is_vegetarian ? "Yes" : "No"}</TableCell>
            <TableCell>{row.is_active ? "Active" : "Inactive"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export function CategoryTable() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/menu")
      .then((response) => {
        const categoriesOnly = response.data.map((category) => ({
          id: category.id,
          name: category.name,
          description: category.description || "empty",
        }));
        setCategories(categoriesOnly);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>id</TableHead>
          <TableHead>name</TableHead>
          <TableHead>descriptin</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {categories.map((category) => (
          <TableRow key={category.id}>
            <TableCell>{category.id}</TableCell>
            <TableCell>{category.name}</TableCell>
            <TableCell>{category.description}</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

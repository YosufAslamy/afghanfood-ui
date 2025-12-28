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

import { MoreHorizontal, Plus, X } from "lucide-react";
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
                  <Plus />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <SidebarMenuButton>
                  <DropdownMenuLabel>Add Item</DropdownMenuLabel>
                </SidebarMenuButton>
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
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <MoreHorizontal />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Update</DropdownMenuItem>
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

// List Of Foods On Menu Page!!!
import { useEffect, useState } from "react";
import axios from "axios";
import { SidebarMenuButton } from "@/components/ui/sidebar";

export function FoodTable() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/menu")
      .then((response) => {
        const foodsData = response.data.flatMap((category) =>
          category.foods.map((food) => ({
            id: food.id,
            category_id: food.category_id,
            name: food.name,
            description: food.description || "No description",
            price: food.price,
            photo_url: food.photo_url || "No photo",
            is_vegetarian: food.is_vegetarian,
            is_active: food.is_active,
          }))
        );

        setFoods(foodsData);
      })
      .catch(console.error);
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
          <TableCell className="text-right">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <Plus />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <SidebarMenuButton>
                  <DropdownMenuLabel>Add Item</DropdownMenuLabel>
                </SidebarMenuButton>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
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
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <MoreHorizontal />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Update</DropdownMenuItem>
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
// List Of Categories On Menu Category Page!!! by Omar
export function CategoryTable() {
  const [categories, setCategories] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [currentCategory, setCurrentCategory] = useState({
    id: null,
    name: "",
    description: "",
  });
  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
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
  };

  const handleAddCategory = async () => {
    if (!newCategory.name.trim()) {
      alert("Category name is required!");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/categories",
        newCategory
      );

      console.log("Category added:", response.data);
      fetchCategories();
      setNewCategory({ name: "", description: "" });
      setShowAddForm(false);
    } catch (error) {
      console.error("Error adding category:", error);
      alert("Failed to add category. Please try again.");
    }
  };

  // UPDATE CATEGORY
  const handleUpdateClick = (category) => {
    setCurrentCategory({
      id: category.id,
      name: category.name,
      description: category.description,
    });
    setShowEditForm(true);
  };

  const handleUpdateCategory = async () => {
    if (!currentCategory.name.trim()) {
      alert("Category name is required!");
      return;
    }

    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/categorie/${currentCategory.id}`,
        {
          name: currentCategory.name,
          description: currentCategory.description,
        }
      );

      console.log("Category updated:", response.data);
      fetchCategories();
      setShowEditForm(false);
      setCurrentCategory({ id: null, name: "", description: "" });
    } catch (error) {
      console.error("Error updating category:", error);
      alert("Failed to update category. Please try again.");
    }
  };

  // DELETE CATEGORY
  const handleDeleteCategory = async (categoryId) => {
    if (!confirm("Are you sure you want to delete this category?")) {
      return;
    }

    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/categorie/${categoryId}`
      );

      console.log("Category deleted:", response.data);
      fetchCategories();
    } catch (error) {
      console.error("Error deleting category:", error);
      alert("Failed to delete category. Please try again.");
    }
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>id</TableHead>
            <TableHead>name</TableHead>
            <TableHead>description</TableHead>
            <TableCell className="text-right">
              <Button
                onClick={() => setShowAddForm(true)}
                variant="outline"
                size="sm"
                className="h-8 gap-1"
              >
                <Plus className="h-4 w-4" />
                Add Category
              </Button>
            </TableCell>
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
                    <DropdownMenuItem
                      onClick={() => handleUpdateClick(category)}
                    >
                      Update
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-red-600"
                      onClick={() => handleDeleteCategory(category.id)}
                    >
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Add Category Form Sidebar */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-end">
          <div className="bg-white h-full w-96 p-6 shadow-xl overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Add New Category</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowAddForm(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Form */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Category Name *
                </label>
                <input
                  type="text"
                  value={newCategory.name}
                  onChange={(e) =>
                    setNewCategory({ ...newCategory, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter category name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  value={newCategory.description}
                  onChange={(e) =>
                    setNewCategory({
                      ...newCategory,
                      description: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border rounded-md"
                  rows={4}
                  placeholder="Enter description (optional)"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-4">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowAddForm(false)}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleAddCategory}
                  className="flex-1"
                  disabled={!newCategory.name.trim()}
                >
                  Save Category
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Category Form Sidebar */}
      {showEditForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-end">
          <div className="bg-white h-full w-96 p-6 shadow-xl overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Edit Category</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowEditForm(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Form */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Category Name *
                </label>
                <input
                  type="text"
                  value={currentCategory.name}
                  onChange={(e) =>
                    setCurrentCategory({
                      ...currentCategory,
                      name: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter category name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  value={currentCategory.description}
                  onChange={(e) =>
                    setCurrentCategory({
                      ...currentCategory,
                      description: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border rounded-md"
                  rows={4}
                  placeholder="Enter description (optional)"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-4">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowEditForm(false)}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleUpdateCategory}
                  className="flex-1"
                  disabled={!currentCategory.name.trim()}
                >
                  Update Category
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

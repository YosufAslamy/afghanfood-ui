// components/data-table.tsx
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
const foods = [
  {
    id: 1,
    category_id: 1,
    name: "Kabuli Pulao",
    description: "A traditional Afghan rice dish with lamb and raisins.",
    price: 12.0,
    is_vegetarian: false,
  },
];

export function FoodTable() {
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
        {foods.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.category_id}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.description}</TableCell>
            <TableCell>{row.price}</TableCell>
            <TableCell>{row.is_vegetarian ? "Yes" : "No"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

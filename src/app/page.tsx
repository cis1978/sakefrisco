import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"


export default function Home() {
  return (
  <div >
  <main className="flex flex-col md:flex-row gap-8 items-center md:items-end">
  <div className="w-full md:w-1/2">
    <Image
      src="/converted_image.jpg" // 画像のパス
      alt="画像の説明" // アクセシビリティのための代替テキスト
      width={470}     // 画像の実際の幅に合わせて調整
      height={150}    // 画像の実際の高さに合わせて調整
      className="object-cover"
    />
  </div>
  <div className="w-full md:w-1/2">
    <Card>
      <CardHeader>
        <CardTitle>Subscribe Register Apply</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>First Name</p>
        <Input type="text" placeholder="First Name" />
        <p>Last Name</p>
        <Input type="text" placeholder="Last Name" />
        <p>Address Line 1</p>
        <Input type="text" placeholder="Address" />
        <p>City</p>
        <Input type="text" placeholder="City" />
        <p>Country</p>
        <Input type="text" placeholder="Country" />
        <p>Email</p>
        <Input type="email" placeholder="Email" />
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="bg-black text-white border-black hover:bg-gray-800">
          Submit
        </Button>
      </CardFooter>
    </Card>
  </div>
</main>
<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
</footer>
</div>
  );
}

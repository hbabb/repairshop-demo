import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">

      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">

        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/70 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-bold">Dan&apos;s Computer<br/>Repair Shop</h1>
          <address>
            555 Gateway Lane<br/>
            Kansas City, KS 55555
          </address>
          <p>
            Open Daily: 9am - 5pm
          </p>
          <Link href="tel:5555555555">
            (555) 555-5555
          </Link>
        </div>
        <Button
          className="bg-green-500/80 text-white font-bold rounded-xl w-4/5 sm:max-w-96 mx-auto hover:bg-green-700/80"
          asChild
        >
          <Link href="/login">Employee Login</Link>
        </Button>
      </main>
    </div>
  );
}

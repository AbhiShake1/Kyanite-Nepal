import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return <main className="flex flex-col gap-8 p-4 text-black dark:text-white">
    <section className="flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold">Welcome to Kyanite Nepal</h1>
      <p className="max-w-lg mt-4 text-lg text-gray-600 dark:text-gray-300">
        Experience the timeless beauty of Kyanite gemstones sourced directly from the mountains of Nepal.
      </p>
    </section>
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View</span>
        </Link>
        <Image
          alt="Kyanite Necklace"
          className="object-cover w-full h-64 transform group-hover:scale-105 transition-transform duration-300"
          height="400"
          src="https://shorturl.at/hovX2"
          style={{
            aspectRatio: "400/400",
            objectFit: "cover",
          }}
          width="400"
        />
        <div className="bg-white dark:bg-gray-900 p-4">
          <h3 className="font-bold text-xl text-black dark:text-white">Kyanite Necklace</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Exquisite and unique</p>
          <h4 className="font-semibold text-lg md:text-xl text-black dark:text-white">$129.99</h4>
          <Button className="mt-2 transform hover:scale-110 transition-transform duration-300" variant="link">
            Learn more
          </Button>
        </div>
      </div>
      <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View</span>
        </Link>
        <Image
          alt="Kyanite Earrings"
          className="object-cover w-full h-64 transform group-hover:scale-105 transition-transform duration-300"
          height="400"
          src="https://shorturl.at/lmuM4"
          style={{
            aspectRatio: "400/400",
            objectFit: "cover",
          }}
          width="400"
        />
        <div className="bg-white dark:bg-gray-900 p-4">
          <h3 className="font-bold text-xl text-black dark:text-white">Kyanite Earrings</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Elegant and sparkly</p>
          <h4 className="font-semibold text-lg md:text-xl text-black dark:text-white">$99.99</h4>
          <Button className="mt-2 transform hover:scale-110 transition-transform duration-300" variant="link">
            Learn more
          </Button>
        </div>
      </div>
      <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View</span>
        </Link>
        <Image
          alt="Kyanite Bracelet"
          className="object-cover w-full h-64 transform group-hover:scale-105 transition-transform duration-300"
          height="400"
          src="https://shorturl.at/kuV38"
          style={{
            aspectRatio: "400/400",
            objectFit: "cover",
          }}
          width="400"
        />
        <div className="bg-white dark:bg-gray-900 p-4">
          <h3 className="font-bold text-xl text-black dark:text-white">Kyanite Bracelet</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Stylish and versatile</p>
          <h4 className="font-semibold text-lg md:text-xl text-black dark:text-white">$79.99</h4>
          <Button className="mt-2 transform hover:scale-110 transition-transform duration-300" variant="link">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  </main>
}

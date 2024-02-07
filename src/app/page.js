import Image from "next/image";

export default function Home() {
  return (
    <div className="h bg-slate-600">
      <Image
        src="https://images.pexels.com/photos/20099573/pexels-photo-20099573/free-photo-of-haus.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height={500}
        width={500}
        alt="apple"
      />
    </div>
  );
}

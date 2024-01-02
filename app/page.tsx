import SearchForm from "@/components/SearchForm";
import PostForm from "@/components/PostForm";
import { trending_data } from "@/data/trendig";

export default function Home() {
  return (
    <main className="bg-[#0064d3]">
      <section className="max-w-7xl mx-auto p-6">
        <h2 className="font-bold text-5xl text-white">Temukan Liburan Anda</h2>
        <h3 className="text-white py-5 text-xl">Cari untuk tiket liburan</h3>
      </section>

      <section className="m-4 mt-0 -mb-14 px-2 lg:px-4">
        <SearchForm />
      </section>

      <section className="mx-auto max-w-7xl mt-10 p-6 bg-white rounded-t-lg">
        <div className="pt-5">
          <h3 className="text-xl font-bold">Dapatkan promo liburan</h3>
          <p className="font-light">Promo diskon 15%</p>
        </div>

        <div className="flex space-x-4 py-5 overflow-x-scroll">
          {trending_data.map((item) => (
            <div key={item.id} className="space-y-1 shrink-0 cursor-pointer">
              <img
                key={item.id}
                className="w-80 h-72 object-cover rounded-lg pb-2"
                src={item.src}
                alt=""
              />

              <p className="font-bold">{item.title}</p>
              <p className="">{item.location}</p>
              <p className="font-light text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl mt-10 p-6 bg-white rounded-t-lg">
        <div className="pt-5">
          <h3 className="text-xl font-bold">Tiket yang tersedia</h3>
          <p className="font-light">Segera pesan sekarang!</p>
        </div>
        <PostForm />
      </section>
    </main>
  );
}

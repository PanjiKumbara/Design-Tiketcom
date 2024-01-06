"use client";

import InputForm from "@/components/InputForm";
import SearchForm from "@/components/SearchForm";
import PostForm from "@/components/PostForm";
import { trending_data } from "@/data/trendig";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function Home() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

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

      <div>
        <section className="mx-auto max-w-7xl mt-10 p-6 bg-white rounded-t-lg">
          <div className="pt-5">
            <h3 className="text-xl font-bold">
              Isi Biodata Untuk Mendapatkan Tiket
            </h3>
            <p className="font-light">Segera isi!</p>
            <br />
            <div
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              ref={componentRef}
            >
              <h3 className="text-xl font-bold">E-Tiket</h3>
              <br />
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  itemID="username"
                >
                  Nama
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3
               text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Nama Lengkap"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  itemID="nohp"
                >
                  No. HP
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3
               text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nohp"
                  type="text"
                  placeholder="Gunakan (+62)"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  itemID="email"
                >
                  E-mail
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3
               text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="contoh haha@gmail.com"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  itemID="nik"
                >
                  NIK
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3
               text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="nik"
                  type="text"
                  placeholder="Pastikan Sesuai"
                />
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold">Jadwal Tiket</h3>
                <InputForm />
              </div>
            </div>
            <p className="text-gray-700 text-xs italic">
              Klik Submit untuk mencetak Tiket
            </p>
            <br />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handlePrint}
            >
              Submit
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

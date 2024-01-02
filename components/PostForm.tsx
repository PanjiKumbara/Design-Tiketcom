"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const invoices = [
  {
    maskapai: "Garuda Indonesia",
    asal: "Jakarta (CGK)",
    tujuan: "Surabaya (SUB)",
    waktu: "15.10 - 16.45 WIB",
    harga: "IDR 1.500.000",
    tipe: "Ekonomi",
  },
  {
    maskapai: "Citilink",
    asal: "Jakarta (CGK)",
    tujuan: "Surabaya (SUB)",
    waktu: "16.55 - 18.20 WIB",
    harga: "IDR 1.500.000",
    tipe: "Ekonomi",
  },
  {
    maskapai: "Lion Air",
    asal: "Jakarta (CGK)",
    tujuan: "Surabaya (SUB)",
    waktu: "18.40 - 20.20 WIB",
    harga: "IDR 1.500.000",
    tipe: "Ekonomi",
  },
];

function PostForm() {
  return (
    <Table id="post">
      <TableCaption>Harga bisa berubah kapan saja.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Maskapai</TableHead>
          <TableHead>Asal</TableHead>
          <TableHead>Tujuan</TableHead>
          <TableHead>Waktu</TableHead>
          <TableHead>Harga</TableHead>
          <TableHead>Tipe</TableHead>
          <TableHead className="text-center">Pesan</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.maskapai}>
            <TableCell className="font-medium">{invoice.maskapai}</TableCell>
            <TableCell>{invoice.asal}</TableCell>
            <TableCell>{invoice.tujuan}</TableCell>
            <TableCell>{invoice.waktu}</TableCell>
            <TableCell>{invoice.harga}</TableCell>
            <TableCell>{invoice.tipe}</TableCell>
            <TableCell className="text-center">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="bg-white hover:bg-blue-500 hover:text-white"
                  >
                    Pesan
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Info Pemesanan</AlertDialogTitle>
                    <AlertDialogDescription>
                      <p>Maskapai: {invoice.maskapai}</p>
                      <p>Asal: {invoice.asal}</p>
                      <p>Tujuan: {invoice.tujuan}</p>
                      <p>Waktu: {invoice.waktu}</p>
                      <p>Harga: {invoice.harga}</p>
                      <p>Tipe: {invoice.tipe}</p>
                      <p>Penumpang: 1</p>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Batal</AlertDialogCancel>
                    <AlertDialogAction className="hover:bg-blue-500 hover:text-white">
                      Lanjutkan
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default PostForm;

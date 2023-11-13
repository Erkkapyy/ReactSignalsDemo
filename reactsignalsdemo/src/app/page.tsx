"use client";
import "./globals.css";
import React from "react";
import { Content } from "./Content";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
// import { effect, signal } from "@preact/signals-react";
import { effect, signal } from "signals-react-safe";

export const count = signal(0);

export default function Home() {
  effect(() => {
    console.log("incremented count to: ", count.value);
  });

  return (
    <div>
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
}

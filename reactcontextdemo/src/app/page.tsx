"use client";

import React from "react";
import { Content } from "./Content";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import "./globals.css";
import { CountProvider } from "./CountContext";

export default function Home() {
  return (
    <div>
      <CountProvider>
        <Header />
        <Sidebar />
        <Content />
      </CountProvider>
    </div>
  );
}

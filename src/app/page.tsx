"use client";
import React from "react";
import AppLayout from "@cloudscape-design/components/app-layout";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import ContentLayout from "@cloudscape-design/components/content-layout";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Modules from "../components/Modules";

export default function Home() {
  return (
    <AppLayout
      content={
        <ContentLayout>
          <Modules hideHeader={true} />
        </ContentLayout>
      }
      navigationHide={true}
      toolsHide={true}
    />
  );
}

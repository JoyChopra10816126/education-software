"use client";
import AppLayout from "@cloudscape-design/components/app-layout";
import ContentLayout from "@cloudscape-design/components/content-layout";
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

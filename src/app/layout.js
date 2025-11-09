import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import '@ant-design/v5-patch-for-react-19';
import { Flex } from "antd";
import NavBar from "./components/NavBar";
import { AppProvider } from "./store/App";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <title>Yarelly Berger Portfolio</title>
      </head>
      <body>
        <AntdRegistry>
          <AppProvider>
            <Flex style={{height:"100vh"}} vertical>
              <NavBar/>
              <div className="content">{children}</div>
            </Flex>
          </AppProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
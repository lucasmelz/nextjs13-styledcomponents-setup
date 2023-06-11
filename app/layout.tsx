'use client';

import styled from "styled-components"
import StyledComponentsRegistry from "./registry";

const Body = styled.body`
  margin: 0;
  * {
  box-sizing:border-box;
  }
`

const Navbar = styled.nav`
height: 80px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
background-color: black;
color:white;
`

const Link = styled.a`
color:white;
text-decoration:none;
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
      <Body>
        <Navbar>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Sign in</Link>
          <Link href="#">Sign up</Link>
        </Navbar>
        {children}
      </Body>
      </StyledComponentsRegistry>
    </html>
  )
}

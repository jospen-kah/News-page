// import Navbar from "@/app/Components/navbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}){
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
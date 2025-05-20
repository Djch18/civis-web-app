import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Obtener la sesión del localStorage no es posible en el middleware
  // En una implementación real, verificaríamos un token JWT o una cookie segura

  // Para esta demo, simplemente verificamos si la ruta es de administrador
  const isAdminRoute = request.nextUrl.pathname.startsWith("/dashboard/admin")

  // En una implementación real, aquí verificaríamos el rol del usuario
  // Si no tiene el rol adecuado, lo redirigimos

  // Para esta demo, simplemente permitimos el acceso y dejamos que los componentes
  // manejen la redirección basada en el rol

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*"],
}

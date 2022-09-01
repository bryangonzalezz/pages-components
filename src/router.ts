// export function resultadoFinal(final) {
//     console.log("recibio una nueva ruta", final);
//     const contenedorEl = document.querySelector(
//       ".contenedor"
//     ) as HTMLAnchorElement;

//     const combo = [
//       {
//         path: /\/inbox/,
//         function: null,
//       },

//     ];

//     for (const r of combo) {
//       if (r.path.test(final)) {
//         const functionEl = r.function();
//         const contEl = document.querySelector(".content");
//         if (contEl?.firstChild) {
//           contEl.innerHTML = "";
//         }
//         contEl?.appendChild(functionEl);

//       }
//     }
//   }
//   function unificador(uni) {
//       history.pushState({}, "", uni);
//       resultadoFinal(uni);
//     }

//     (function () {
//       window.addEventListener("load", () => {
//         resultadoFinal(location.pathname);
//       });
//     })();

export function initRoute(container: HTMLAreaElement) {
  console.log(location.pathname);
}

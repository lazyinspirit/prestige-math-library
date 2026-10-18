---
id: def-orthogonal-fv-compressible-viscous-scheme
kind: definition
title: One-dimensional orthogonal finite-volume viscous scheme
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
aliases: []
deps:
  - def-compressible-navier-stokes-fourier-model
  - lem-compressible-admissible-state-set-open-convex
  - lem-compressible-ideal-gas-entropy-pair-and-variables
  - lem-compressible-viscous-flux-entropy-variable-factorization
  - def-fv-admissible-cell-face-mesh
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "R. Eymard, T. Gallouët, and R. Herbin, Finite Volume Methods, January 2019 updated author text, complete manuscript"
      url: "https://raphaeleh.github.io/PUBLI/bookevol.pdf"
      locator: "Chapter 9 §9.2, printed pp. 37–39: finite cell-face balances, shared face fluxes, and orthogonal center-to-face geometry."
    - title: "Jérôme Droniou, Finite volume schemes for diffusion equations: introduction to and review of modern methods, 2014, complete preprint"
      url: "https://arxiv.org/pdf/1407.1567"
      locator: "§1.1, PDF pp. 3–4, Definition 1.1 and Remark 1.2: cells, faces, normals, cell balances, and finite-volume conventions in any dimension."
    - title: "Pablo Fernandez, Ngoc-Cuong Nguyen, and Jaime Peraire, Entropy-stable hybridized discontinuous Galerkin methods for the compressible Euler and Navier-Stokes equations, complete author preprint"
      url: "https://arxiv.org/pdf/1808.05066"
      locator: "Sections 2.2–2.3 and 3.3, equations (3)–(5), (18)–(19): compressible viscous flux in entropy variables. The present cell-centered flux is defined and analysed locally."
---

## Definition

Let $L>0$, let $N\ge1$ be an integer, put $h=L/N$, and partition $\Omega=(0,L)$ into the open cells $K_i=((i-1)h,ih)$, $i=1,\ldots,N$, with centers $x_i=(i-\tfrac12)h$. The interior face $F_{i+1/2}=\{ih\}$ separates $K_i$ and $K_{i+1}$ for $i=1,\ldots,N-1$; the two endpoints are boundary faces. This is the one-dimensional uniform specialization of [[def-fv-admissible-cell-face-mesh]]: cells are convex intervals, faces are their endpoints, and the common face orientation is from left to right.

For cell states $U_i\in\mathcal G$, set $v_i=v(U_i)$ and define the admissible face state $U_{i+1/2}=(U_i+U_{i+1})/2\in\mathcal G$. Define the face block $K_{i+1/2}=K_{11}(U_{i+1/2})$, where $K_{11}$ is the state-space block of [[lem-compressible-viscous-flux-entropy-variable-factorization]] for spatial direction one. The shared rightward viscous flux is

$$G_{i+1/2}=K_{i+1/2}\frac{v_{i+1}-v_i}{h},\qquad i=1,\ldots,N-1.$$

Set the boundary fluxes $G_{1/2}=G_{N+1/2}=0$. The finite-volume viscous operator is

$$\dot U_i=\frac{G_{i+1/2}-G_{i-1/2}}{h},\qquad i=1,\ldots,N.$$

This is only the viscous diffusion part of the balance law; no Euler convection term or time discretization is included. The boundary convention is zero total viscous flux.

```tikz
\begin{tikzpicture}
  \draw[thick] (0,0) -- (4,0);
  \foreach \x in {0,1,2,3,4} \draw (\x,-0.25) -- (\x,0.25);
  \node at (0.5,0.45) {$K_1$};
  \node at (1.5,0.45) {$K_2$};
  \node at (2.5,0.45) {$K_3$};
  \node at (3.5,0.45) {$K_N$};
  \draw[->,blue,thick] (0.55,-0.5) -- (1.45,-0.5) node[midway,below] {$G_{3/2}$};
  \draw[->,blue,thick] (1.55,-0.5) -- (2.45,-0.5) node[midway,below] {$G_{5/2}$};
  \node at (-0.15,-0.5) {$0$};
  \node at (4.15,-0.5) {$0$};
\end{tikzpicture}
```

The schematic shows $N=4$ cells and two representative shared-flux arrows. The arrows show the rightward orientation used in the balances; the endpoint labels are the imposed zero boundary fluxes, and the omitted interior face uses the same convention. The drawing illustrates signed incidences only and is not used as a proof.

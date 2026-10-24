---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/def-ip-injective-geodesic-ray-transform.json
  precheck: n/a
id: def-ip-injective-geodesic-ray-transform
kind: definition
title: "Injective geodesic ray transform on a transversal manifold"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-riemannian-metric-and-riemannian-manifold
  - def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary
  - def-geodesic-of-an-affine-connection
  - thm-fundamental-theorem-of-riemannian-geometry
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Dos Santos Ferreira, Kurylev, Lassas, and Salo, The Calderon problem in transversally anisotropic geometries (2016)"
      url: "https://arxiv.org/pdf/1305.1273"
      locator: "Section 1, CTA hypotheses and the injectivity condition on the transversal ray transform."
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis (2023)"
      url: "https://arxiv.org/pdf/2312.08123v1"
      locator: "Section 2.2, Theorem 2.7, injectivity of the geodesic ray transform on simple manifolds."
---

## Definition

Let $(M_0,g_0)$ be a compact connected smooth Riemannian manifold with smooth boundary. A geodesic segment in $M_0$ satisfies the geodesic equation for the Levi-Civita connection of $g_0$ on $(0,L)$ and extends smoothly to its endpoints, where derivatives are interpreted one-sided. A nontangential maximal geodesic segment is a unit-speed geodesic $\gamma:[0,L]\to M_0$, with $L>0$, whose initial velocity points strictly inward at $\partial M_0$, whose terminal velocity points strictly outward at $\partial M_0$, and whose points for $0<t<L$ lie in $M_0^\circ$. For $f\in C_c^\infty(M_0^\circ,\mathbb R)$ define its geodesic ray transform by $I_{g_0}f(\gamma)=\int_0^L f(\gamma(t))\,dt$. The unweighted scalar ray transform is called injective on compactly supported smooth functions if $I_{g_0}f(\gamma)=0$ for every such segment implies $f=0$. For complex-valued $f$, injectivity means injectivity of its real and imaginary parts separately.

## Definition references

[[def-riemannian-metric-and-riemannian-manifold|Riemannian metric and unit-speed convention]]

[[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary|Boundary and interior of a smooth manifold with boundary]]

[[def-geodesic-of-an-affine-connection|Geodesics of a connection]]

[[thm-fundamental-theorem-of-riemannian-geometry|Levi-Civita connection of the metric]]


## Remarks

The schematic shows one of the nontangential maximal segments indexing the ray-transform data. The arrows follow increasing $t$: the initial velocity points strictly into $M_0$, and the terminal velocity points strictly out. The oval is only a schematic of the boundary; the picture imposes no Euclidean metric, simplicity, or nontrapping assumption on $M_0$.

```tikz
\begin{tikzpicture}[scale=1.1]
\draw[thick] (0,0) ellipse (2.6 and 1.35);
\node at (1.75,1.2) {$\partial M_0$};
\node at (0,-0.85) {$M_0^\circ$};
\draw[thick] (-2.6,0) -- (2.6,0);
\draw[->,very thick] (-2.6,0) -- (-1.75,0);
\draw[->,very thick] (1.75,0) -- (2.95,0);
\fill (-2.6,0) circle (1.5pt);
\fill (2.6,0) circle (1.5pt);
\node[below] at (-2.6,-0.12) {$\gamma(0)$};
\node[below] at (2.6,-0.12) {$\gamma(L)$};
\node[above] at (-2.15,0.08) {$\dot\gamma(0)$};
\node[above] at (2.55,0.08) {$\dot\gamma(L)$};
\node at (0,0.72) {$I_{g_0}f(\gamma)=\int_0^L f(\gamma(t))\,dt$};
\node at (0,-1.85) {$0\longrightarrow t\longrightarrow L,\qquad |\dot\gamma(t)|_{g_0}=1$};
\end{tikzpicture}
```

Only the segment from $\gamma(0)$ to $\gamma(L)$ is integrated; the outward arrow depicts its terminal velocity. The full data consist of the values $I_{g_0}f(\gamma)$ for every segment allowed by the Definition, not just the one drawn. Injectivity is the stated implication for this full family and for $f\in C_c^\infty(M_0^\circ,\mathbb R)$, with real and imaginary parts treated separately for complex-valued functions; the picture does not assert that every manifold has this property. The definition is independent of the illustration.

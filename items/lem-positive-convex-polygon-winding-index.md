---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/lem-positive-convex-polygon-winding-index.json
  precheck: pass
id: lem-positive-convex-polygon-winding-index
kind: lemma
title: "A positively oriented convex polygon has winding index one inside and zero outside"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-winding-number-closed-complex-contour
  - thm-winding-number-locally-constant
  - thm-winding-number-zero-unbounded-component
  - lem-winding-number-jumps-by-one-across-a-regular-planar-arc
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis"
      url: "https://www.jirka.org/ca/ca.pdf"
      locator: "Complete 304-page text retrieved; inspected Chapter 4 §4.1, printed pp. 93–96, and Chapter 5 §5.4, printed pp. 128–132."
---

## Statement

Let $v_0,\ldots,v_{m-1}\in\mathbb Q+i\mathbb Q$, $m\ge3$, be the cyclically ordered vertices of a simple strictly convex polygon whose edges are traversed counterclockwise. Let $P$ be its filled convex hull and let $\Gamma$ be the concatenation of its oriented edges. For every $z\notin\Gamma$, the winding number $n(\Gamma,z)$ is $1$ if $z\in\operatorname{int}P$ and $0$ if $z\notin P$.

## Facts & Assumptions

**Given:** A simple strictly convex polygon with rational vertices, its positive boundary orientation, its filled convex hull $P$, and the winding number of the resulting closed contour.

[F1] For a closed contour and a point off its trace, $n(\Gamma,z)=(2\pi i)^{-1}\int_\Gamma (w-z)^{-1}\,dw$ ([[def-winding-number-closed-complex-contour]]).

[F2] The winding number is constant on each connected component of the complement of the trace ([[thm-winding-number-locally-constant]]).

[F3] The winding number is zero on the unbounded connected component of the complement ([[thm-winding-number-zero-unbounded-component]]).

[F4] At a single regular arc traversed with positive real tangent, the index on the left side minus the index on the right side is one ([[lem-winding-number-jumps-by-one-across-a-regular-planar-arc]]).

## Proof

1.1 Fix exterior points $q_1,q_2\notin P$ and choose $R>\max\{\max_{u\in P}\|u\|_2,\|q_1\|_2,\|q_2\|_2\}$, which exists because $P$ is compact. For each $j\in\{1,2\}$, compactness gives a nearest point $p_j\in P$. For every $u\in P$, convexity puts $p_j+t(u-p_j)$ in $P$ for $0\le t\le1$; minimality of $p_j$ gives $\|q_j-p_j\|_2^2\le\|q_j-p_j-t(u-p_j)\|_2^2$. Expanding, dividing by $t>0$, and letting $t\downarrow0$ yields $\langle q_j-p_j,u-p_j\rangle\le0$. Hence the ray $q_j+s(q_j-p_j)$, $s\ge0$, avoids $P$ and, being unbounded, meets the circle $C_R=\{w:|w|=R\}$. The circle $C_R$ is disjoint from $P$ and connected, so these two rays and an arc of $C_R$ join $q_1$ to $q_2$ in $\mathbb C\setminus P$. Thus $\mathbb C\setminus P$ is path-connected and unbounded. [given, construct, algebra]

2.1 By [F1], $n(\Gamma,q)$ is the winding index of the contour. Since $\Gamma\subset P$, the exterior $\mathbb C\setminus P$ lies in the unbounded component of $\mathbb C\setminus\Gamma$; [F3] gives $n(\Gamma,q)=0$ for every $q\notin P$. [F1, F3, step 1.1]

3.1 Fix $z\in\operatorname{int}P$. Choose a ray from $z$ whose direction is not aimed at a vertex. Its intersection with the convex polygon is a bounded interval starting at $z$, so the ray exits at the interior $p$ of a single edge with directed tangent $v\ne0$. The polygon interior lies locally to the left of this positively oriented edge. Apply the orientation-preserving similarity $\rho(w)=\overline v(w-p)/|v|$, which sends $p$ to $0$ and the edge tangent to the positive real direction. For every $a\notin\Gamma$, put $c=\overline v/|v|$. Parametrizing the transformed contour and using [F1] gives $\int_{\rho\circ\Gamma}\frac{d\zeta}{\zeta-\rho(a)}=\int_\Gamma\frac{c\,dw}{c(w-a)}=\int_\Gamma\frac{dw}{w-a}$, so $n(\rho\circ\Gamma,\rho(a))=n(\Gamma,a)$. For sufficiently small $\varepsilon>0$, the points $\rho^{-1}(i\varepsilon)$ and $\rho^{-1}(-i\varepsilon)$ lie respectively on the interior and exterior local sides of the edge. Applying [F4] to $\rho\circ\Gamma$ gives $n(\rho\circ\Gamma,i\varepsilon)-n(\rho\circ\Gamma,-i\varepsilon)=1$; the just-proved invariance rewrites this as $n(\Gamma,\rho^{-1}(i\varepsilon))-n(\Gamma,\rho^{-1}(-i\varepsilon))=1$. The exterior-side index is zero by step 2.1. Thus an interior point near that edge has winding number one. [F1, F4, step 2.1, choose, algebra]

4.1 The interior of a convex polygon is connected. Its points avoid $\Gamma$, so [F2] makes the winding number constant throughout the interior. Step 3.1 identifies this constant as one. Together with step 2.1 this proves both cases. [F2, step 2.1, step 3.1] ∎


## Remarks

The picture shows a five-vertex example of the positive orientation. The right-hand inset uses the coordinates $\rho$ from step 3.1: the directed edge points right, so its interior side is above it. The displayed index values follow from steps 2.1–4.1; the proof is independent of the picture.

```tikz
\begin{tikzpicture}[scale=0.85]
\draw[thick] (0,0) -- (3,0) -- (3.6,1.6) -- (1.5,2.7) -- (-0.6,1.6) -- (0,0);
\draw[thick,->] (0.8,0) -- (1.8,0);
\draw[thick,->] (3.15,0.4) -- (3.45,1.2);
\draw[thick,->] (3.1,1.86) -- (2.05,2.41);
\draw[thick,->] (0.98,2.43) -- (-0.08,1.87);
\draw[thick,->] (-0.45,1.2) -- (-0.15,0.4);
\node[below left] at (0,0) {$v_0$};
\node[below right] at (3,0) {$v_1$};
\node[right] at (3.6,1.6) {$v_2$};
\node[above] at (1.5,2.7) {$v_3$};
\node[left] at (-0.6,1.6) {$v_4$};
\fill (1.5,1.25) circle (1.5pt);
\node[above] at (1.5,1.25) {$z$};
\node[below] at (1.5,1.05) {$n(\Gamma,z)=1$};
\fill (1.5,-1) circle (1.5pt);
\node[below] at (1.5,-1) {$q,\quad n(\Gamma,q)=0$};
\node at (1.5,3.35) {$\Gamma:\ \mathrm{counterclockwise}$};
\draw[thick,->] (5.2,0) -- (8.2,0);
\fill (6.7,0) circle (1.5pt);
\node[below right] at (6.7,0) {$0=\rho(p)$};
\fill (6.7,0.85) circle (1.5pt);
\node[above] at (6.7,0.85) {$i\varepsilon$};
\node at (6.7,1.65) {$\mathrm{left:\ interior},\quad n=1$};
\fill (6.7,-0.85) circle (1.5pt);
\node[below] at (6.7,-0.85) {$-i\varepsilon$};
\node at (6.7,-1.65) {$\mathrm{right:\ exterior},\quad n=0$};
\node at (6.7,2.65) {$\rho\circ\Gamma:\ \mathrm{local\ edge}$};
\node at (6.7,-2.3) {$n_{\mathrm{left}}-n_{\mathrm{right}}=1$};
\end{tikzpicture}
```

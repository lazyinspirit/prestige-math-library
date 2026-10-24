---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/def-na-periodic-staggered-grid-stokes-operators.json
  precheck: n/a
id: def-na-periodic-staggered-grid-stokes-operators
kind: definition
title: "Periodic staggered-grid velocity and pressure spaces"
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-natural-numbers, thm-reals-field]
justified_by: [lem-na-periodic-grid-pressure-laplacian-zero-mode-and-poincare]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. L. Guermond, P. Minev, and J. Shen, An overview of projection methods for incompressible flows"
      url: "https://people.tamu.edu/~guermond/PUBLICATIONS/guermond_minev_shen_CMAME_2006.pdf"
      locator: "§§3.1–3.3, printed pp. 6012–6015: projection, incremental pressure correction, the rotational update, and wall-boundary cautions."
    - title: "NPTEL, Lecture 5.4: Methods based on Coupling of Pressure and Velocity"
      url: "https://archive.nptel.ac.in/content/storage2/courses/112106061/Module_5/Lecture_5.4.pdf"
      locator: "§§2.3.1–2.3.3, printed pp. 45–47: fractional-step pressure projection, pressure update, and the staggered grid."

---

## Definition

Fix an integer dimension $d\ge1$ and an integer resolution $N\ge2$, where
$N\in\mathbb N$ ([[def-natural-numbers]]), and put $h=1/N$. Real scalar and
array operations use the field $\mathbb R$ ([[thm-reals-field]]). Let
$J_N=\{0,\ldots,N-1\}^d$; each coordinate index addition below is reduced
to the unique element of $\{0,\ldots,N-1\}$ congruent modulo $N$. The unit
torus $\mathbb T^d$ means the unit cube with opposite faces identified, so
fields and arrays are periodic across those faces. Write
$\mathbf 1=(1,\ldots,1)$ and let $e_i$ be the $i$th standard coordinate vector.
Cell $j$ has centre $x_j=h(j+\tfrac12\mathbf 1)$. The pressure value $q_j$ is
stored at that centre. Velocity component $i$ is stored at the right face of
cell $j$, with centre $x_j+\tfrac h2e_i$.

Let $\widetilde Q_h$ be all real scalar cell arrays and let
$Q_h=\{q\in\widetilde Q_h:h^d\sum_jq_j=0\}$. Let $V_h$ be the real vector
face arrays $v=(v_{i,j})_{1\le i\le d,\,j\in J_N}$. Give them the mass inner products
$$ (q,r)_{Q_h}=h^d\sum_{j\in J_N}q_jr_j,\qquad (v,w)_{M_h}=h^d\sum_{i=1}^d\sum_{j\in J_N}v_{i,j}w_{i,j}. $$
Define the pressure gradient $G_h:\widetilde Q_h\to V_h$ and velocity
divergence $D_h:V_h\to Q_h$ by
$$ (G_hq)_{i,j}=\frac{q_{j+e_i}-q_j}{h},\qquad (D_hv)_j=\sum_{i=1}^d\frac{v_{i,j}-v_{i,j-e_i}}{h}. $$
The compatible pressure Laplacian is $\Delta_h=D_hG_h$; its restriction to
$Q_h$ is negative semidefinite, and $G_h$ annihilates constants. Define the
componentwise vector Laplacian by
$$ (\Delta_h^Vv)_{i,j}=h^{-2}\sum_{\ell=1}^d (v_{i,j+e_\ell}-2v_{i,j}+v_{i,j-e_\ell}),\qquad A_h=-\Delta_h^V, $$
and the discrete velocity-gradient seminorm by
$$ \|\mathcal G_hv\|_{M_h}^2=h^{d-2}\sum_{i=1}^d\sum_{\ell=1}^d\sum_{j\in J_N} |v_{i,j+e_\ell}-v_{i,j}|^2. $$
The fixed cell/face placement is part of the definition; collocated central
differences are a different discretization.


## Remarks

The two-dimensional sketch shows two adjacent cells in a local periodic lift.
Dots mark pressure centres; short vertical and horizontal bars mark the face
centres storing the first and second velocity components, respectively.
The arrows fix the positive coordinate directions, not the signs of the
velocity values. Dotted continuations are not domain boundaries: all indices
are reduced modulo $N$, so, for example, $q_{j+Ne_1}=q_j$.

```tikz
\begin{tikzpicture}[scale=1.05]
  \draw (0,0) rectangle (3,2.5);
  \draw (3,0) rectangle (6,2.5);
  \draw[dotted] (-0.5,0) -- (0,0);
  \draw[dotted] (-0.5,2.5) -- (0,2.5);
  \draw[dotted] (6,0) -- (6.5,0);
  \draw[dotted] (6,2.5) -- (6.5,2.5);
  \fill (1.5,1.25) circle (1.6pt);
  \fill (4.5,1.25) circle (1.6pt);
  \node[above] at (1.5,1.35) {$q_j$};
  \node[above] at (4.5,1.35) {$q_{j+e_1}$};
  \draw[very thick] (0,1.1) -- (0,1.4);
  \draw[very thick] (3,1.1) -- (3,1.4);
  \node[below] at (0,1.0) {$v_{1,j-e_1}$};
  \node[below] at (3,1.0) {$v_{1,j}$};
  \draw[very thick] (1.35,0) -- (1.65,0);
  \draw[very thick] (1.35,2.5) -- (1.65,2.5);
  \node[below] at (1.5,-0.1) {$v_{2,j-e_2}$};
  \node[above] at (1.5,2.6) {$v_{2,j}$};
  \draw[->] (4,3.05) -- (5.5,3.05) node[right] {$+e_1$};
  \draw[->] (6.8,0.4) -- (6.8,1.9) node[above] {$+e_2$};
\end{tikzpicture}
```

Thus the common vertical face carries $(G_hq)_{1,j}=(q_{j+e_1}-q_j)/h$,
and the left cell has
$$(D_hv)_j=(v_{1,j}-v_{1,j-e_1})/h+(v_{2,j}-v_{2,j-e_2})/h.$$
These are precisely the defining formulas for $d=2$; the sketch adds no
boundary condition or proof assumption.

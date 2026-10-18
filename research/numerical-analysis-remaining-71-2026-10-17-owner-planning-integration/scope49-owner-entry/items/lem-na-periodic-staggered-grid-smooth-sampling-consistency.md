---
id: lem-na-periodic-staggered-grid-smooth-sampling-consistency
kind: lemma
title: "Second-order consistency of staggered periodic sampling"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-na-periodic-staggered-grid-stokes-operators
  - lem-taylor-lagrange-remainder-from-mean-value
  - lem-derivative-algebra-and-chain-rules
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "NPTEL, Lecture 5.4: Methods based on Coupling of Pressure and Velocity"
      url: "https://archive.nptel.ac.in/content/storage2/courses/112106061/Module_5/Lecture_5.4.pdf"
      locator: "§§2.1.3 and 2.3.3, printed pp. 43 and 46–47: central differences and staggered cell/face locations."
    - title: "J. L. Guermond, P. Minev, and J. Shen, An overview of projection methods for incompressible flows"
      url: "https://people.tamu.edu/~guermond/PUBLICATIONS/guermond_minev_shen_CMAME_2006.pdf"
      locator: "§§3.1–3.3, printed pp. 6012–6015: the periodic and pressure-correction context; all local truncation estimates are proved here."
---

## Statement

Use [[def-na-periodic-staggered-grid-stokes-operators]] with $h=1/N$. For a
smooth periodic vector field $u\in C^4(\mathbb T^d;\mathbb R^d)$, define
$R_hu$ by sampling component $i$ at each face centre $x_j+he_i/2$. For a
smooth periodic scalar $p\in C^3(\mathbb T^d)$, define $R_hp$ by sampling at
cell centres $x_j$. Then uniformly for $N\ge2$,
$$ \|D_hR_hu-R_h(\nabla\cdot u)\|_{Q_h} +\|A_hR_hu-R_h(-\Delta u)\|_{M_h} +\|G_hR_hp-R_h(\nabla p)\|_{M_h} \le C h^2, $$
where $C$ depends only on $d$ and the suprema of the displayed fields'
derivatives through orders $4$ for $u$ and $3$ for $p$. Here the sampling of a
vector field is facewise componentwise. For any $g\in C^2(\mathbb T^d)$ with
zero integral, the cell-centred or face-centred midpoint samples have discrete
mean of absolute value at most $C_dh^2\|D^2g\|_\infty$.

## Facts & Assumptions

**Given:** The unit torus, the staggered periodic grid and operators, and the
bounded derivatives in the statement.

[F1] Cell and face centres, discrete differences, and weighted mass norms are
defined in [[def-na-periodic-staggered-grid-stokes-operators]].

[F2] The unit torus is partitioned into the $N^d$ periodic grid cells of side
$h=1/N$, centred at cell sampling points. Smooth fields on $\mathbb T^d$ are
used through their smooth $1$-periodic lifts to $\mathbb R^d$, including across
periodic seams.

[F3] If $g$ has continuous derivatives through order $m+1$, Taylor's theorem
gives a pointwise remainder
$g(x)-\sum_{j=0}^m g^{(j)}(c)(x-c)^j/j!=g^{(m+1)}(\xi)(x-c)^{m+1}/(m+1)!$
([[lem-taylor-lagrange-remainder-from-mean-value]]).

[F4] Differentiating the line restriction $t\mapsto g(x+tz)$ uses the
ordinary chain rule ([[lem-derivative-algebra-and-chain-rules]]).

## Proof
1.1 For $g\in C^3(\mathbb T^d)$, Taylor's formula with Lagrange remainder at the midpoint and [F3] with $m=2$ give $$ g(x+h e_i/2)-g(x-h e_i/2)=h\,\partial_i g(x)+r, \qquad |r|\le h^3\|\partial_i^3g\|_\infty/24. $$ The same midpoint formula, with the two cell centres surrounding face $x_j+he_i/2$, gives $$ (G_hR_hp)_{i,j}=\partial_i p(x_j+he_i/2)+O(h^2), $$ with the pointwise error bounded by $h^2\|\partial_i^3p\|_\infty/24$. [F1, F2, F3, given, algebra]

1.2 For $g\in C^4(\mathbb T^d)$, [F3] with $m=3$ at $x$ gives $$ g(x+h e_i)-2g(x)+g(x-h e_i)=h^2\partial_i^2g(x)+r, $$ where the two fourth-order Lagrange remainders have total absolute value at most $h^4\|\partial_i^4g\|_\infty/12$. Apply this in every coordinate to $u_i$ at its face centre. It follows that $(A_hR_hu)_{i,j}=-(\Delta u_i)(x_j+he_i/2)+O(h^2)$, with the error bounded by $h^2\sum_\ell\|\partial_\ell^4u_i\|_\infty/12$. [F1, F2, F3, given, algebra]

2.1 Applying the midpoint formula to component $u_i$ at cell centre $x_j$ shows, by [F3] with $m=2$, $$ (D_hR_hu)_j=\sum_i\partial_i u_i(x_j)+r_j, \qquad |r_j|\le\frac{h^2}{24}\sum_i\|\partial_i^3u_i\|_\infty. $$ Thus the discrete divergence differs pointwise from the sampled continuous divergence by $O(h^2)$. [F1, F2, F3, step 1.1, algebra]

3.1 Each pointwise error bound in steps 1.1–1.2 is uniform. The weighted mass of the grid contains $h^dN^d=1$ total cell volume and there are $d$ velocity components. Therefore the corresponding mass norms are bounded by the same constants (or their finite $d$-component sum) times $h^2$. Combining the divergence, vector Laplacian and pressure gradient bounds proves the first claim. [F1, F2, step 1.1, step 2.1, step 1.2, algebra]

4.1 On each cell centred at $x_j$, fix $x$ and put $z=x-x_j$ and $\psi(t)=g(x_j+tz)$ for $0\le t\le1$. By [F3] with $m=1$ and [F4], $g(x)=g(x_j)+\nabla g(x_j)\cdot z+r_j(x)$ with $|r_j(x)|\le C_d\|D^2g\|_\infty|z|^2$. The linear term integrates to zero on the centred cell, so the difference between $h^dg(x_j)$ and $\int_{C_j}g$ is at most $C_dh^{d+2}\|D^2g\|_\infty$. Summing the $N^d$ cells yields $$ \left|h^d\sum_jg(x_j)-\int_{\mathbb T^d}g(x)\,dx\right| \le C_dh^2\|D^2g\|_\infty. $$ The face centres for any fixed component likewise centre a translated partition into cells of side $h$, so the same estimate holds for their samples. If the integral vanishes, this gives the stated discrete-mean bound. [F1, F2, F3, F4, given, algebra] ∎
---
id: def-decorated-link-cobordism-and-floer-target
kind: definition
title: "Decorated knot cobordisms and the two-color link Floer target"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-admissible-pointed-heegaard-floer-data
  - def-given-spin-and-spinc-structures-and-associated-spinor-bundles
  - lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing
  - def-locally-flat-proper-surface-and-concordance-collars
  - def-oriented-link-in-s-three-and-ambient-isotopy
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The analytic disk-count construction assumes AC_omega through the current pointed-disk supplier; the two-color specialization and its chain-complex property still require an explicit local verification."
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
      locator: "Definitions4.10 and8.8: strict coefficient greater than N for Chern value2N>=0, including N=0; this is the criterion used by the local finite-domain proof."
    - title: "Ian Zemke, Link cobordisms and functoriality in link Floer homology, §§1–3"
      url: "https://arxiv.org/pdf/1610.05207v3"
      locator: "PDF pp.1–14; Definitions 2.1–2.9 and 3.1–3.4, decorated cobordisms, coloring, curved complexes, and the two-variable specialization"
    - title: "Andras Juhasz, Cobordisms of sutured manifolds and the functoriality of link Floer homology, §§4 and 8"
      url: "https://arxiv.org/pdf/0910.4382v5"
      locator: "PDF pp.12–15 and 43–54; decorated surfaces, dividing sets, and the hat link Floer cobordism construction"
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Grid Homology for Knots and Links, Chapter 16"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Printed pp.325–338; pointed Heegaard data, basepoint multiplicities, and disk-count target conventions"
---

## Definition

Let $Y_0,Y_1$ be closed smooth oriented three-manifolds, let $W$ be a compact smooth oriented four-manifold with boundary $-Y_0\sqcup Y_1$, where $-Y_0$ has the reversed orientation, and let $K_i\subset Y_i$ be images of smooth oriented embeddings of the circle. Every component of $Y_i$ is required to meet $K_i$; the boundary parametrizations and compatible product collars are part of the data. A **decorated knot cobordism** from $(Y_0,K_0)$ to $(Y_1,K_1)$ is a properly embedded smooth oriented surface $\Sigma\subset W$ with boundary $(-K_0)\sqcup K_1$, together with one $w$-basepoint and one $z$-basepoint on each end knot and a compact properly embedded one-manifold $\mathcal A\subset\Sigma$, which may have arc and closed-circle components. Every component of $W$ meets $\Sigma$, and every component of $\Sigma$ meets $\mathcal A$. The full dividing set $\mathcal A$ decomposes $\Sigma$ into subsurfaces $\Sigma_w,\Sigma_z$, with each $w$-basepoint in the closure of $\Sigma_w$, each $z$-basepoint in the closure of $\Sigma_z$, and $\mathcal A$ meeting the boundary transversely away from the marked points. Every component of $K_i\setminus\mathcal A$ contains exactly one of the two marked points; in particular each boundary knot meets the dividing set in two points, separating its $w$- and $z$-intervals. The basepoint labels, dividing set, two regions and their two-color assignment are part of the data.

For an end pair $(Y,K)$, a doubly pointed Heegaard diagram consists of a closed genus-$g$ oriented surface $S$, two $g$-tuples $\boldsymbol\alpha,\boldsymbol\beta$ of pairwise disjoint simple closed curves giving a Heegaard splitting of $Y$, and points $w,z$ in the complement of those curves such that arcs in the two handlebodies from $w$ to $z$ form $K$. Each intersection point $\mathbf x\in\mathbb T_{\boldsymbol\alpha}\cap\mathbb T_{\boldsymbol\beta}$ determines a Spin-c structure $\mathfrak s_w(\mathbf x)$ on $Y$ from the homology class of the nonvanishing gradient vector field specified by $\mathbf x$ and $w$. For $\mathfrak t\in\operatorname{Spin}^c(Y)$, let $CFL^-_{UV}(Y,K,\mathfrak t)$ be generated over $R=\mathbb F_2[U,V]$ by those intersection points with $\mathfrak s_w(\mathbf x)=\mathfrak t$. A periodic domain is an integral two-chain in the regions of $S\setminus(\boldsymbol\alpha\cup\boldsymbol\beta)$ whose boundary is an integral sum of the attaching curves; its capped homology class in $Y$ is denoted $[P]$, and $n_w(P)$ is its multiplicity at $w$. Restrict to diagrams strongly admissible for $\mathfrak t$: there is a generator $\mathbf x$ with $\mathfrak s_w(\mathbf x)=\mathfrak t$, and for every nonzero periodic domain $P$ with $n_w(P)=0$ and $\langle c_1(\mathfrak t),[P]\rangle=2N\ge0$, some region of $P$ has multiplicity strictly greater than $N$. Here $c_1(\mathfrak t)$ is the first Chern class of its determinant line bundle. The symmetric product $\operatorname{Sym}^g(S)$ is the quotient of $S^g$ by permutations of the factors. The associated product tori $\mathbb T_{\boldsymbol\alpha},\mathbb T_{\boldsymbol\beta}\subset\operatorname{Sym}^g(S)$ determine the differential on each Spin-c summand by
$$
\partial \mathbf x=\sum_{\mathbf y}\ \sum_{\substack{\phi\in\pi_2(\mathbf x,\mathbf y)\\ \mu(\phi)=1}} \#_2\bigl(\mathcal M(\phi)/\mathbb R\bigr)\,U^{n_w(\phi)}V^{n_z(\phi)}\mathbf y.
$$
Here $\pi_2(\mathbf x,\mathbf y)$ is the set of homotopy classes of Whitney disks, $\mu$ is the Maslov index, $\mathcal M(\phi)/\mathbb R$ is the moduli space of index-one disks modulo translation for chosen generic almost-complex data, $n_w,n_z$ are their local multiplicities at the marked points, and $\#_2$ is the finite count modulo two. This is the two-variable specialization of the colored link Floer complex. Its curvature vanishes: for a knot with one $w$- and one $z$-basepoint the curvature formula is $UV+VU=0$ in $\mathbb F_2[U,V]$, so $\partial^2=0$. The complex has the two-coordinate filtration induced by the $w$- and $z$-multiplicities.

For a chosen $\mathfrak s\in\operatorname{Spin}^c(W)$, the Floer map indexed by $\mathfrak s$ has the complexes for $(Y_0,K_0,\mathfrak s|_{Y_0})$ and $(Y_1,K_1,\mathfrak s|_{Y_1})$ as source and target; $\operatorname{Spin}^c(W)$ denotes the set of Spin-c structures on $W$. The following local schematic shows the two regions separated by dividing arcs; it records decoration data and does not represent the cobordism map.

```tikz
\begin{tikzpicture}
  \draw (0,0) rectangle (5,2);
  \draw (2.5,0) -- (2.5,2);
  \node at (1.25,1) {$\Sigma_w$};
  \node at (3.75,1) {$\Sigma_z$};
  \node[below] at (0,0) {$w_0$};
  \node[below] at (5,0) {$z_0$};
  \node[above] at (0,2) {$w_1$};
  \node[above] at (5,2) {$z_1$};
  \node[above] at (2.5,2) {$\mathcal A$};
\end{tikzpicture}
```

## Definition references

[[def-admissible-pointed-heegaard-floer-data|Admissible pointed Heegaard data and basepoint multiplicities]]

[[def-locally-flat-proper-surface-and-concordance-collars|Proper surface and collar conventions]]

[[def-oriented-link-in-s-three-and-ambient-isotopy|Smooth oriented knots and links in $S^3$]]

[[def-given-spin-and-spinc-structures-and-associated-spinor-bundles|Spin-c structures]]

[Zemke, *Link cobordisms and functoriality in link Floer homology*, §§1–3](https://arxiv.org/pdf/1610.05207v3)

[Juhasz, *Cobordisms of sutured manifolds and the functoriality of link Floer homology*, §§4 and 8](https://arxiv.org/pdf/0910.4382v5)

[Ozsvath, Stipsicz, and Szabo, *Grid Homology for Knots and Links*, Chapter 16](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

## Unresolved proof obligations

The definition of the two-color target is made explicit, including the coloring, coefficient ring, basepoint weights, and Spin-c summand. A local proof is still required that the two-color disk counts are finite and regular in the stated generality, that their compactifications have no additional codimension-one ends, and that the mod-two boundary count gives $\partial^2=0$. The current pointed-disk supplier [L1] is escalated and does not by itself establish these stronger claims.

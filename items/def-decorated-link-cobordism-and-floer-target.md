---
id: def-decorated-link-cobordism-and-floer-target
kind: definition
title: "Decorated knot cobordisms and the two-color link Floer target"
status: published
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
axiom_use: "The general-three-manifold curvature identity is an explicitly imported Heegaard Floer result; the locally authored pointed-disk analytic supplier has its own stated AC_omega scope and is restricted to knots in S^3."
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
      locator: "Definitions4.10 and8.8: strict coefficient greater than N for Chern value2N>=0, including N=0; this is the criterion used by the local finite-domain proof."
    - title: "Ian Zemke, Link cobordisms and functoriality in link Floer homology, §§1–3"
      url: "https://arxiv.org/pdf/1610.05207v3"
      locator: "PDF pp.1–14; Definitions 2.1–2.9 and 3.1–3.4, decorated cobordisms, coloring, curved complexes, and the two-variable specialization"
    - title: "Ian Zemke, Quasi-stabilization and basepoint moving maps in link Floer homology, §2"
      url: "https://arxiv.org/pdf/1604.04316"
      locator: "PDF pp.4–5; Lemma 2.1 and its proof give the multipointed curvature formula by counting boundary degenerations; Lemma 2.2 records the same-component variable identification"
    - title: "Andras Juhasz, Cobordisms of sutured manifolds and the functoriality of link Floer homology, §§4 and 8"
      url: "https://arxiv.org/pdf/0910.4382v5"
      locator: "PDF pp.12–15 and 43–54; decorated surfaces, dividing sets, and the hat link Floer cobordism construction"
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Grid Homology for Knots and Links, Chapter 16"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Printed pp.325–338; pointed Heegaard data, basepoint multiplicities, and disk-count target conventions"
---

## Definition

Let $Y_0,Y_1$ be closed smooth oriented three-manifolds, let $W$ be a compact smooth oriented four-manifold with boundary $-Y_0\sqcup Y_1$, where $-Y_0$ has the reversed orientation, and let $K_i\subset Y_i$ be images of smooth oriented embeddings of the circle. Every component of $Y_i$ is required to meet $K_i$; the boundary parametrizations and compatible product collars are part of the data. A **decorated knot cobordism** from $(Y_0,K_0)$ to $(Y_1,K_1)$ is a properly embedded smooth oriented surface $\Sigma\subset W$ with boundary $(-K_0)\sqcup K_1$, together with one $w$-basepoint and one $z$-basepoint on each end knot and a compact properly embedded one-manifold $\mathcal A\subset\Sigma$, which may have arc and closed-circle components. Every component of $W$ meets $\Sigma$, and every component of $\Sigma$ meets $\mathcal A$. The full dividing set $\mathcal A$ decomposes $\Sigma$ into subsurfaces $\Sigma_w,\Sigma_z$, with each $w$-basepoint in the closure of $\Sigma_w$, each $z$-basepoint in the closure of $\Sigma_z$, and $\mathcal A$ meeting the boundary transversely away from the marked points. Every component of $K_i\setminus\mathcal A$ contains exactly one of the two marked points; in particular each boundary knot meets the dividing set in two points, separating its $w$- and $z$-intervals. The basepoint labels, dividing set, two regions and their two-color assignment are part of the data.

For an end pair $(Y,K)$, a doubly pointed Heegaard diagram consists of a closed genus-$g$ surface $S$ oriented as the boundary of the $\alpha$-handlebody, two $g$-tuples $\boldsymbol\alpha,\boldsymbol\beta$ of pairwise disjoint simple closed curves giving a Heegaard splitting of $Y$, and points $w,z$ off the curves. The curves are complete meridian systems: each bounds $g$ pairwise disjoint compressing disks in its handlebody, and cutting along those disks gives one ball. Require $K\cap S=\{w,z\}$, transversely, with the oriented knot meeting $S$ negatively at $w$ and positively at $z$. The portions of $K$ in the two cut handlebodies are specified properly embedded arcs, one in each ball, and are boundary-parallel there: each is isotopic within that ball, relative to its endpoints, into the matching component of $S\setminus\boldsymbol\alpha$ or $S\setminus\boldsymbol\beta$. Their union, with the orientations inherited from $K$, is $K$. Curves from different attaching systems meet transversely in finitely many points. Each intersection point $\mathbf x\in\mathbb T_{\boldsymbol\alpha}\cap\mathbb T_{\boldsymbol\beta}$ determines a Spin-c structure $\mathfrak s_w(\mathbf x)$ on $Y$ from the homology class of the nonvanishing gradient vector field specified by $\mathbf x$ and $w$. For $\mathfrak t\in\operatorname{Spin}^c(Y)$, let $CFL^-_{UV}(Y,K,\mathfrak t)$ be generated over $R=\mathbb F_2[U,V]$ by those intersection points with $\mathfrak s_w(\mathbf x)=\mathfrak t$. A periodic domain is an integral two-chain in the regions of $S\setminus(\boldsymbol\alpha\cup\boldsymbol\beta)$ whose boundary is an integral sum of the attaching curves; its capped homology class in $Y$ is denoted $[P]$, and $n_w(P)$ is its multiplicity at $w$. Restrict to diagrams strongly admissible for $\mathfrak t$: there is a generator $\mathbf x$ with $\mathfrak s_w(\mathbf x)=\mathfrak t$, and for every nonzero periodic domain $P$ with $n_w(P)=0$ and $\langle c_1(\mathfrak t),[P]\rangle=2N\ge0$, some region of $P$ has multiplicity strictly greater than $N$. Here $c_1(\mathfrak t)$ is the first Chern class of its determinant line bundle. The symmetric product $\operatorname{Sym}^g(S)$ is the quotient of $S^g$ by permutations of the factors. The associated product tori $\mathbb T_{\boldsymbol\alpha},\mathbb T_{\boldsymbol\beta}\subset\operatorname{Sym}^g(S)$ determine the differential on each Spin-c summand by
$$
\partial \mathbf x=\sum_{\mathbf y}\ \sum_{\substack{\phi\in\pi_2(\mathbf x,\mathbf y)\\ \mu(\phi)=1}} \#_2\bigl(\mathcal M(\phi)/\mathbb R\bigr)\,U^{n_w(\phi)}V^{n_z(\phi)}\mathbf y.
$$
Here $\pi_2(\mathbf x,\mathbf y)$ is the set of homotopy classes of Whitney disks, $\mu$ is the Maslov index, $\mathcal M(\phi)/\mathbb R$ is the moduli space of index-one disks modulo translation for chosen generic almost-complex data, $n_w,n_z$ are their local multiplicities at the marked points, and $\#_2$ is the finite count modulo two. This is the two-variable specialization of the colored link Floer complex. Its curvature vanishes: for a knot with one $w$- and one $z$-basepoint the curvature formula is $UV+VU=0$ in $\mathbb F_2[U,V]$, so $\partial^2=0$. The complex has the two-coordinate filtration induced by the $w$- and $z$-multiplicities.

For a chosen $\mathfrak s\in\operatorname{Spin}^c(W)$, the Floer map indexed by $\mathfrak s$ has the complexes for $(Y_0,K_0,\mathfrak s|_{Y_0})$ and $(Y_1,K_1,\mathfrak s|_{Y_1})$ as source and target; $\operatorname{Spin}^c(W)$ denotes the set of Spin-c structures on $W$. The following local schematic shows the two regions separated by dividing arcs; it records decoration data and does not represent the cobordism map.

```tikz
\begin{tikzpicture}
  \draw (0,0) rectangle (5,2);
  \draw (1.5,0) -- (1.5,2);
  \draw (3.5,0) -- (3.5,2);
  \node at (2.5,1) {$\Sigma_w$};
  \node at (0.75,1) {$\Sigma_z$};
  \node[below] at (2.5,0) {$w_0$};
  \node[below] at (0.75,0) {$z_0$};
  \node[above] at (2.5,2) {$w_1$};
  \node[above] at (0.75,2) {$z_1$};
  \node[right] at (1.5,1.7) {$\mathcal A$};
  \node[left] at (3.5,1.7) {$\mathcal A$};
  \node at (2.5,-0.45) {cut-open annulus: vertical edges identified};
\end{tikzpicture}
```

## Definition references

[[def-admissible-pointed-heegaard-floer-data|Admissible pointed Heegaard data and basepoint multiplicities]]

[[def-locally-flat-proper-surface-and-concordance-collars|Proper surface and collar conventions]]

[[def-oriented-link-in-s-three-and-ambient-isotopy|Smooth oriented knots and links in $S^3$]]

[[def-given-spin-and-spinc-structures-and-associated-spinor-bundles|Spin-c structures]]

[Zemke, *Link cobordisms and functoriality in link Floer homology*, §§1–3](https://arxiv.org/pdf/1610.05207v3)

[Zemke, *Quasi-stabilization and basepoint moving maps in link Floer homology*, §2](https://arxiv.org/pdf/1604.04316)

[Juhasz, *Cobordisms of sutured manifolds and the functoriality of link Floer homology*, §§4 and 8](https://arxiv.org/pdf/0910.4382v5)

[Ozsvath, Stipsicz, and Szabo, *Grid Homology for Knots and Links*, Chapter 16](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

## Facts & Assumptions

[F1] **External curvature input for general closed three-manifolds.** For a strongly $\mathfrak s$-admissible Heegaard diagram of a multi-based link $L\subset Y$ in a closed oriented three-manifold, with fixed $\mathfrak s\in\operatorname{Spin}^c(Y)$ and alternating $w,z$ basepoints on each component, Zemke's Lemma 2.1 gives the curvature formula for the multipointed differential. Its proof counts the alpha- and beta-boundary-degeneration ends; for a component with exactly one $w$- and one $z$-basepoint the contribution is $U_wV_z+V_zU_w$. Zemke's Lemma 3.4 states the corresponding formula for $CFL^-$, and Remark 2.14 states that coloring with only two variables, one for all $w$-basepoints and one for all $z$-basepoints, makes the curvature zero. For the single knot component in this target there is one such pair, so specializing to $U,V$ gives $\partial^2=UV+VU=0$ in $\mathbb F_2[U,V]$. The source establishes the curvature identity in its published Heegaard Floer setup; it is imported here, not reconstructed from the local disk supplier. ([Zemke, *Quasi-stabilization and basepoint moving maps in link Floer homology*, §2, Lemma 2.1 and proof](https://arxiv.org/pdf/1604.04316); [Zemke, *Link cobordisms and functoriality in link Floer homology*, §3, Lemma 3.4 and §2, Remark 2.14](https://arxiv.org/pdf/1610.05207v3))

[F2] **Narrower local analytic supplier.** [[def-admissible-pointed-heegaard-floer-data]] and [[lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing]] are formulated for balanced pointed diagrams of knots in $S^3$. They do not prove the general-$Y$ curvature statement in [F1]; their regularity, compactness, and gluing claims remain only at their stated $S^3$ scope.

## Scope note

The general-$Y$ two-color identity $\partial^2=0$ is supplied by the external input [F1], under that source's closed-three-manifold, multi-based-link, Spin-c, and Heegaard-diagram hypotheses. No independent local proof of the general-$Y$ disk analysis is asserted here; the narrower local suppliers in [F2] must not be used as if they covered arbitrary $Y$.

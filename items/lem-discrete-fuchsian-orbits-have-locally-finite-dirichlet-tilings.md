---
id: lem-discrete-fuchsian-orbits-have-locally-finite-dirichlet-tilings
kind: lemma
title: Discrete Fuchsian orbits have locally finite Dirichlet tilings
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-fuchsian-dirichlet-domains-and-cusp-data
- lem-upper-half-plane-metric-and-polygon-area-calculus
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
  - title: Michael Kapovich, Hyperbolic Manifolds and Discrete Groups, author text
    url: https://www.math.ucdavis.edu/~kapovich/RFG/book.pdf
    locator: 'Sections 4.10-4.11, printed pp.75-77: fundamental/Dirichlet domains
      and face-cycle setup. The finite-area and cusp arguments here are supplied locally.'
  - title: William P. Thurston, The Geometry and Topology of Three-Manifolds, electronic
      version 1.1 (2002)
    url: https://library.slmath.org/books/gt3m/PDF/Thurston-gt3m.pdf
    locator: 'Sections 2.1-2.4 and 3.8-3.9: models and horospheres. Sections 5.10-5.11
      are a distinct thick-thin treatment in the manifold setting, not an imported
      proof of the torsion-bearing Fuchsian assertion.'
dependency_level: 2
---

## Statement

Let $\Delta\le\operatorname{PSL}_2(\mathbb R)$ be discrete. Its point
orbits are locally finite and its point stabilizers are finite cyclic.
Only finitely many group translates of one compact set meet any other
compact set, and the quotient is Hausdorff.
The group is countable and has a free basepoint $p$. For every such
$p$, the Dirichlet region $D_p$ is closed and convex with nonempty
interior, and its translates form a locally finite tiling with disjoint
interiors. Its geodesic faces are locally finite in $\mathbb H$ and
have unique neighboring tiles and side pairings. The area of $D_p$
equals the quotient area, including when this area is infinite.
These assertions permit elliptic torsion and require neither finite
generation nor a choice axiom.

## Facts & Assumptions

**Given:** A discrete real projective matrix group $\Delta$.

[F1] The Dirichlet region and matrix action are defined in
[[def-fuchsian-dirichlet-domains-and-cusp-data]].

[F2] The distance formula, compact balls, convex bisector half-planes and
geodesic models are proved in
[[lem-upper-half-plane-metric-and-polygon-area-calculus]].

## Proof

1.1 A discrete subgroup meets any compact set of matrices in finitely many points: take an identity neighborhood $U$ meeting the group only at $1$ and $W$ with $W^{-1}W\subset U$; each translate of $W$ contains at most one group element, and finitely many such translates cover a compact set. For $z=x+iy$ put $h_z=\begin{pmatrix}\sqrt y&x/\sqrt y\\0&1/\sqrt y\end{pmatrix}$. Every isometry carrying a fixed $z$ to a point $w$ in a compact $K$ is $h_wk(\theta)h_z^{-1}$, where $k(\theta)=\begin{pmatrix}\cos\theta&-\sin\theta\\ \sin\theta&\cos\theta\end{pmatrix}$ and $0\le\theta\le\pi$: solving the equation $g(i)=i$ with determinant one gives exactly these rotations. This is a compact matrix family, so only finitely many group elements send $z$ into $K$. The same formula with $z,w$ both in compact sets proves that only finitely many translates of one compact set meet another. Point orbits are therefore locally finite. A point stabilizer is finite in its compact rotation group and is cyclic: its finite rotation angles have a least positive one, and division with remainder generates all angles. [F1, F2, given, algebra]

2.1 The matrix group has a fixed countable base, using rational coordinate balls in its finitely many projective charts. To each group element assign the least basic neighborhood containing it and no other element of $\Delta$; this assignment is injective, so it gives a specified enumeration of $\Delta$. A nonidentity real fractional-linear map has at most one fixed point in $\mathbb H$, since its fixed-point quadratic has real coefficients. Enumerate these possible fixed points by the specified group enumeration, skipping missing ones. Starting from a fixed closed rational box inside $\mathbb H$, at stage $n$ take the least coded rational closed subbox contained in the preceding interior, of diameter less than $2^{-n}$ and avoiding the $n$th listed point. Such a subbox exists in every nonempty open box. Nested compact boxes have a unique common point $p$, which avoids every listed fixed point. This deterministic recursion proves that a free basepoint exists without countable choice. [F1, step 1.1, construct]

3.1 Fix any free $p$. Its orbit has a positive separation from $p$ by step 1.1, so a sufficiently small ball around $p$ satisfies every Dirichlet inequality strictly. Thus $D_p$ has nonempty interior. It is closed and geodesically convex as an intersection of the bisector half-planes in [F2]. For any $z$, a nearest orbit point exists: among orbit points no farther from $z$ than $p$ there are only finitely many, in a compact ball. A nearest orbit point $\delta p$ gives $z\in\delta D_p$. Two different tile interiors cannot overlap because they would satisfy opposite strict distance comparisons with their different sites. The tie set is contained in the countably many orbit-point bisectors; these circles or lines have area zero. Ignoring this set, the quotient map restricts to a one-to-one local isometry on the region. By the induced local quotient-area definition this gives $\operatorname{area}(D_p)=\operatorname{area}(\Delta\backslash\mathbb H)$. The countable exceptional set uses explicit circle covers with area budgets $\varepsilon2^{-n}$ from the fixed enumeration, so no selection of an arbitrary countable family of null covers is required. [F1, F2, step 1.1, step 2.1, construct, algebra]

4.1 If a tile $\delta D_p$ meets a compact $K$ at $z$, its nearest-site property gives $d(z,\delta p)\le d(z,p)$, so $\delta p$ lies in one fixed compact neighborhood of $K$. Step 1.1 leaves only finitely many such tiles. Likewise a bisector with $p$ contributing a face at $z\in K$ satisfies $d(p,\delta p)\le2d(p,z)$, so only finitely many defining bisectors occur near $K$. Hence the tiling and its faces are locally finite. At an open face exactly two tiles meet: different sites cannot have the same entire bisector with $p$, since reflection of $p$ in that geodesic determines the other site uniquely. The other tile is $\delta D_p$ for a unique $\delta$ because $p$ is free, providing the side pairing. The quotient is Hausdorff: for lifts in distinct orbits, start with two relatively compact balls; only finitely many translates of one closed ball meet the other by step 1.1, and shrinking the balls avoids each of those finitely many possible overlaps. Their quotient neighborhoods are then disjoint. This proves every assertion, also for finite or elementary groups whose quotient area is infinite. [F1, F2, step 1.1, step 3.1, algebra] ∎

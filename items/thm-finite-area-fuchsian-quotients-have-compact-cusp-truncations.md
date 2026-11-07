---
id: thm-finite-area-fuchsian-quotients-have-compact-cusp-truncations
kind: theorem
title: Finite-area Fuchsian quotients have compact cusp truncations
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-fuchsian-dirichlet-domains-and-cusp-data
- lem-discrete-fuchsian-orbits-have-locally-finite-dirichlet-tilings
- lem-cofinite-dirichlet-domains-have-finitely-many-sides
- lem-finite-dirichlet-ideal-vertex-cycles-are-parabolic
- lem-shimizu-bound-and-disjoint-normalized-cusp-horoballs
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
dependency_level: 5
---

## Statement

Let $\Delta\le\operatorname{PSL}_2(\mathbb R)$ be discrete and have finite
quotient area. There are finitely many parabolic cusp classes, possibly
none. Choose any representatives $\xi_1,\ldots,\xi_s$ and any
normalizations $N_j$ taking their full stabilizers to
$\langle z\mapsto z+1\rangle$. For every $Y>1$ the open horoballs
$$H_j(Y)=N_j^{-1}\{y>Y\}$$
and all their distinct $\Delta$-translates are disjoint. The cusp
cylinders embed in the quotient. Their complement is compact; more
precisely there is a compact $K_Y\subset\mathbb H$ with
$$\mathbb H\setminus\bigcup_{\delta\in\Delta,j}\delta H_j(Y) \subseteq\Delta K_Y.$$
For every $Y'>Y$, the closed tail of each cusp cylinder with height at
least $Y'$ embeds properly in the quotient. Every free-basepoint
Dirichlet polygon is finite sided and has a compact truncation by these
horoballs at its ideal vertices. No finite-generation, torsion-free or
choice assumption is imposed.

## Facts & Assumptions

**Given:** The cofinite discrete group and any chosen standard
normalizations in the Statement.

[F1] The model and precise cusp conventions are
[[def-fuchsian-dirichlet-domains-and-cusp-data]].

[F2] The group has a free basepoint, proper point action and a locally
finite Dirichlet tiling with polygon area equal to quotient area.
[[lem-discrete-fuchsian-orbits-have-locally-finite-dirichlet-tilings]]

[F3] Such a finite-area Dirichlet region has finitely many sides,
ordinary corners and ideal vertices.
[[lem-cofinite-dirichlet-domains-have-finitely-many-sides]]

[F4] Every ideal vertex of a finite-area Dirichlet polygon is
parabolic; its full stabilizer admits a primitive translation
normalization.
[[lem-finite-dirichlet-ideal-vertex-cycles-are-parabolic]]

[F5] Normalized cusp horoballs of distinct classes have the mutual
height bound, precise invariance and primitive displacement formula.
[[lem-shimizu-bound-and-disjoint-normalized-cusp-horoballs]]

## Proof

1.1 Choose a free $p$ as explicitly constructed in [F2]. Its Dirichlet region $D$ has finite area and is a finite polygon by [F3]. By [F4] every ideal vertex is a parabolic fixed point. Take one representative from each of their finitely many orbits, and standard normalizations for these representatives. By [F5] their normalized horoballs, at any $Y>1$, are mutually disjoint up to equality and precisely invariant. For a vertex $v=\delta\xi_j$ of $D$, the horoball $\delta H_j(Y)$ is the horoball at $v$. In the coordinate $N_j\delta^{-1}$ its two adjacent polygon sides are distinct vertical lines; every other side has bounded height. Thus this horoball removes an entire polygon-neighborhood of $v$. The closure $K^0_Y$ of $D$ after removing the finitely many horoballs at all its ideal vertices is compact in $\mathbb H$: the compact disc closure of a finite polygon has only these finitely many ideal boundary points, all excluded by those neighborhoods. With no ideal vertices the same argument says $D$ itself is compact. Now let $K_Y$ be the subset of $K^0_Y$ outside every translate of the chosen open horoballs. It is a closed subset of that compact set, hence compact, and removes any additional cusp horoball which meets the polygon away from its ideal vertices. [F1, F2, F3, F4, F5, choose, algebra]

1.2 Every compact subset $L$ of the quotient is covered by the image of a compact $K_L\subset\mathbb H$. Indeed the images of all relatively compact open model balls form an open cover, because the quotient map is open. A finite subcover of $L$ by these neighborhoods gives $K_L$ as the finite union of the corresponding closed balls; no family of representatives is selected. There is a uniform positive lower bound for displacement by parabolic group elements at points of $K_L$. To see this, if $w\in K_L$ and $d(w,\delta w)\le1$, then $\delta$ takes a point of $K_L$ into its compact closed $1$-neighborhood. The compact-matrix argument of [F2] leaves only finitely many such $\delta$. Among the parabolic ones every displacement function has a positive minimum on $K_L$, since a parabolic fixes no point in $\mathbb H$. Take the minimum of these finitely many positive numbers and $1$. This also handles the case that the finite list is empty. [F1, F2, construct, algebra]

2.1 If $z$ misses every translate of these horoballs, choose a tile $\delta D$ containing it, using [F2]. Then $\delta^{-1}z$ misses, in particular, all the horoballs at the ideal vertices of $D$, so lies in $K^0_Y$; since it also misses every translated horoball, it lies in $K_Y$. This proves the displayed inclusion. The complement of the open cusp cylinders in the quotient is the image of this compact $K_Y$, and hence is compact. Their embeddings and standard cylinder descriptions are supplied by [F5]. This proves a compact truncation for the cusp classes already represented among the ideal vertices; we next verify properness of deeper closed tails and exhaustion of all parabolic classes. [F1, F2, F5, step 1.1, algebra]

2.2 Fix a normalized cusp and $Y'>Y$. If points in its closed tail $y\ge Y'$ map into $L$, lift their images into $K_L$ as in step 1.2. Conjugating the primitive cusp translation by the corresponding lifting transformations gives parabolic group elements with the same displacement. By [F5] that displacement equals $2\operatorname{arsinh}(1/(2y))$, so step 1.2 bounds $y$ above by one finite constant. The preimage of $L$ in the closed tail is consequently a closed subset of the compact cylinder $[0,1]\times[Y',C]$ with its vertical edges identified, and is compact. The tail map is already injective and a local embedding by [F5], so this proves proper embedding of every deeper closed tail. The proof applies to any parabolic class, whether or not yet among the polygon-vertex classes. [F1, F5, step 1.2, algebra]

3.1 Suppose a further parabolic class existed. Its full stabilizer and primitive normalization are supplied by [F5]. Apply the mutual Shimizu bound to this class together with the finite vertex classes. Its entire closed tail with height at least $Y'>Y>1$ is disjoint from all their open cusp cylinders. It would therefore map into the compact complement proved in step 2.1. By step 2.2 its preimage in that closed tail would be compact, yet the whole cylinder $[0,1]\times[Y',\infty)$ is noncompact. This contradiction proves exhaustion: the parabolic classes are exactly the finitely many vertex classes. [F1, F5, step 2.1, step 2.2, algebra]

4.1 Any other representative of one of these classes differs by a group transformation. Two primitive normalizations at a fixed cusp differ by a translation in the normalized coordinate: a real orientation-preserving map fixing $\infty$ is $z\mapsto\lambda z+b$ with $\lambda>0$, and conjugating primitive translation to primitive translation forces $\lambda=1$. Such a translation preserves every height horoball. Thus the equivariant family of horoballs does not depend on the choices of representatives or primitive normalizations, and all conclusions hold for the arbitrary choices in the Statement. All selections in this argument were finite, apart from the explicit choice-free basepoint construction of [F2]. This proves the stated cofinite geometric result without altering its elliptic or zero-cusp cases. [F1, F2, F5, step 1.1, step 2.1, step 2.2, step 3.1, algebra] ∎

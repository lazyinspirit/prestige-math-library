---
id: lem-shimizu-bound-and-disjoint-normalized-cusp-horoballs
kind: lemma
title: Shimizu bound and disjoint normalized cusp horoballs
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-fuchsian-dirichlet-domains-and-cusp-data
- lem-upper-half-plane-metric-and-polygon-area-calculus
- lem-discrete-fuchsian-orbits-have-locally-finite-dirichlet-tilings
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
dependency_level: 3
---

## Statement

Let $\Delta\le\operatorname{PSL}_2(\mathbb R)$ be discrete and contain
$T(z)=z+1$. Every determinant-one representative
$g=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\Delta$ with $c\ne0$ satisfies
$|c|\ge1$. The full stabilizer of any parabolic fixed point in any
discrete real group is a rank-one translation group after conjugation,
so it admits a standard cusp normalization.

For finitely many distinct cusp classes choose standard normalizations
$N_j$, one per class. For every $Y>1$, all distinct translates of
$H_j(Y)=N_j^{-1}\{y>Y\}$ are disjoint, and each is precisely invariant
under its full cusp stabilizer. Its quotient is the standard cylinder
$[0,1]\times(Y,\infty)$ with the vertical edges identified, of area
$1/Y$. In normalized coordinates the primitive cusp displacement is
$$d(x+iy,x+1+iy)=2\operatorname{arsinh}(1/(2y)).$$

## Facts & Assumptions

**Given:** The discrete groups, parabolic classes and normalizations in
the Statement.

[F1] The real matrix and cusp conventions are those of
[[def-fuchsian-dirichlet-domains-and-cusp-data]].

[F2] The height, distance and invariant-area formulas are proved in
[[lem-upper-half-plane-metric-and-polygon-area-calculus]].

[F3] A discrete matrix subgroup meets compact matrix sets finitely, and
its point orbits are proper, as proved in
[[lem-discrete-fuchsian-orbits-have-locally-finite-dirichlet-tilings]].

## Proof

1.1 Suppose $0<|c|<1$ and choose determinant-one lifts $g_0=g$, $g_{n+1}=g_nTg_n^{-1}$. If $g_n=\begin{pmatrix}a_n&b_n\\c_n&d_n\end{pmatrix}$, multiplication gives $g_{n+1}=\begin{pmatrix}1-a_nc_n&a_n^2\\-c_n^2&1+a_nc_n\end{pmatrix}$ and $c_{n+1}=-c_n^2$. For $r=|c_0|<1$ this yields $|c_n|=r^{2^n}$. Also $|a_{n+1}|\le1+r|a_n|$, so induction gives $|a_n|\le M=\max\{|a_0|,1/(1-r)\}$. Hence $a_{n+1}\to1$, $a_n^2\to1$, $c_n\to0$ and $d_{n+1}\to1$. Thus $g_n\to T$, while the distinct nonzero magnitudes $|c_n|$ show that the projective group elements are distinct. This contradicts [F3], and proves $|c|\ge1$. [F1, F3, given, algebra]

1.2 A group fixing $\infty$ consists of affine maps $z\mapsto\lambda z+b$ with $\lambda>0$. If its stabilizer contains a nonzero translation $z\mapsto z+t$ and an element with $\lambda\ne1$, conjugating that translation by positive or negative powers gives translations by nonzero parameters tending to zero, contradicting discreteness. Thus the stabilizer of a parabolic fixed point consists only of translations. Its parameter subgroup has zero isolated; a separation radius makes its intersection with every bounded interval finite, giving a least positive parameter $\ell>0$. Division by $\ell$ with remainder shows that subgroup is $\ell\mathbb Z$. The dilation $z\mapsto z/\ell$ normalizes its primitive translation to $1$. This proves existence of each stated normalization and excludes any hidden hyperbolic part in the cusp stabilizer. [F1, F3, algebra]

2.1 Put $g=N_j\delta N_k^{-1}=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ for $\delta\in\Delta$. If $c\ne0$, the element $gTg^{-1}$ belongs to $N_j\Delta N_j^{-1}$ and has lower-left entry $-c^2$. Applying step 1.1 in that group gives $|c|^2\ge1$. For $z=x+iy$ with $y>Y$, [F2] gives $\operatorname{Im}g(z)=y/|cz+d|^2\le1/(c^2y)<1/Y<Y$. Thus $g\{y>Y\}$ cannot meet $\{y>Y\}$. If $c=0$, the original group element takes the $k$th cusp to the $j$th, forcing $j=k$ by distinctness of the chosen classes. It then lies in the full stabilizer, which is a translation group by step 1.2, and preserves the horoball. Applying the same argument after any common translate proves the required mutual disjointness and precise invariance. [F1, F2, step 1.1, step 1.2, algebra]

3.1 The primitive translation identifies exactly the two vertical edges of $0\le x\le1$, $y>Y$. The quotient inclusion is injective by step 2.1, and is a local embedding by the properly discontinuous action in [F3]. Its area is $\int_Y^\infty\int_0^1 y^{-2}\,dx\,dy=1/Y$. Finally [F2] gives $\cosh d(z,z+1)=1+1/(2y^2)=\cosh(2\operatorname{arsinh}(1/(2y)))$; the two nonnegative distances are equal. The displacement therefore tends to zero uniformly in $x$ as $y\to\infty$. [F1, F2, F3, step 2.1, algebra] ∎

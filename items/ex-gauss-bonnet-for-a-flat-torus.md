---
id: ex-gauss-bonnet-for-a-flat-torus
kind: example
title: Flat torus and zero Euler characteristic
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - thm-global-gauss-bonnet-for-closed-oriented-riemannian-surfaces
  - def-two-dimensional-torus
  - def-riemannian-metric-and-riemannian-manifold
  - prop-christoffel-formula-for-the-levi-civita-connection
  - thm-gaussian-curvature-structure-equation
  - def-connection-one-form-of-an-oriented-orthonormal-frame
  - def-curvilinear-triangulation-of-a-compact-surface
  - thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined
  - thm-finite-products-of-compact-spaces
  - prop-real-line-mod-integers-is-compact-and-path-connected
  - def-countable-choice
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, Theorem 9.7, printed pp. 167-172 (PDF pp. 183-188): the global identity applied to a flat closed surface."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, Theorem 2.2.4, printed pp. 14-15 (PDF pp. 21-22): the total curvature of a flat torus vanishes."
verification:
  precheck: pass
  audited: 2026-09-30
---

## Example

Assume the axiom of choice.
Let $T^2=(\mathbb R/\mathbb Z)^2$ be the torus of
[[def-two-dimensional-torus]], equipped with the metric descended from
$dx^2+dy^2$ through the translation charts constructed below. Then
$K\equiv0$, $\chi(T^2)=0$, and
the Gauss-Bonnet identity reads
$$\int_{T^2}K\,dA=0=2\pi\chi(T^2).$$
The flat metric is the metric descended through the integer-translation
quotient; the Euler characteristic is counted from an explicit periodic
triangulation, so no classification input is used.

## Facts & Assumptions

**Given:** The torus $T^2=(\mathbb R/\mathbb Z)^2$ with the descended flat Euclidean metric and the orientation induced by the standard orientation of $\mathbb R^2$.

[A1] full AC is assumed; it is inherited through the global Gauss-Bonnet theorem quoted below and also covers the countable-choice hypothesis inherited by the curvature structure equation; the explicit chart and grid constructions add no choice ([[def-axiom-of-choice]]).

[F1] For every closed oriented Riemannian surface, $\int_{T^2}K\,dA=2\pi\chi(T^2)$ ([[thm-global-gauss-bonnet-for-closed-oriented-riemannian-surfaces]]).

[F2] The two-dimensional torus is the product topological space $(\mathbb R/\mathbb Z)^2$ ([[def-two-dimensional-torus]]). Its smooth translation atlas is constructed in step 1.1 below. A positive-definite smooth tensor in such charts is a Riemannian metric ([[def-riemannian-metric-and-riemannian-manifold]]).

[F3] In coordinates the Levi-Civita symbols are $\Gamma^k{}_{ij}=\tfrac12\sum_\ell g^{k\ell}(\partial_ig_{j\ell}+\partial_jg_{i\ell}-\partial_\ell g_{ij})$, so a coordinate frame with constant metric coefficients has all Christoffel symbols zero ([[prop-christoffel-formula-for-the-levi-civita-connection]]).

[F4] For a smooth positive orthonormal frame with connection form $\omega(X)=g(\nabla_Xe_1,e_2)$ one has $\nabla_Xe_1=\omega(X)e_2$, and $d\omega=-K\,dA$ ([[def-connection-one-form-of-an-oriented-orthonormal-frame]], [[thm-gaussian-curvature-structure-equation]]).

[F5] A finite face-to-face piecewise $C^2$ curvilinear triangulation of a compact smooth surface has the well-defined count $\chi(T^2)=V-E+F$ ([[def-curvilinear-triangulation-of-a-compact-surface]], [[thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined]]).

[F6] $T^2=(\mathbb R/\mathbb Z)^2$ with $S^1=\mathbb R/\mathbb Z$ compact ([[def-two-dimensional-torus]], [[prop-real-line-mod-integers-is-compact-and-path-connected]]); a finite product of compact spaces is compact ([[thm-finite-products-of-compact-spaces]]). The torus has empty boundary and is oriented by the translation-invariant orientation of its quotient charts.

## Verification

**Proof technique:** compute the curvature in the flat quotient charts and count a periodic triangulation.

1.1 Write $q:\mathbb R\to\mathbb R/\mathbb Z$ for the quotient map. For every open interval $I$ of length less than $1$, $q|_I$ is injective, and it is open because $q^{-1}(q(U))=\bigcup_{n\in\mathbb Z}(U+n)$ is open for every open $U\subseteq I$. Hence $q|_I:I\to q(I)$ is a homeomorphism. Products of these inverses give charts on the product topology of [F2]. In overlapping charts two lifts differ by an integer in each coordinate. This integer pair is locally constant, so each transition is locally an integer translation and is smooth with derivative the identity. The quotient circle is Hausdorff: distinct classes have representatives whose difference has positive distance from $\mathbb Z$, and sufficiently short intervals around them have disjoint quotient images. Images of intervals with rational endpoints form a countable basis; their finite products do so on $T^2$. These charts therefore define a Hausdorff second-countable smooth surface without boundary, oriented by their positive Jacobians. [F2, construct]

1.2 Put the $3\times3$ grid with vertices $(i/3,j/3)$, $0\le i,j\le3$, on the square $[0,1]^2$ and split each of the nine squares by the diagonal from its lower-left to its upper-right corner. The integer-translation identifications $(x,0)\sim(x,1)$ and $(0,y)\sim(1,y)$ map grid cells to grid cells and are injective away from the boundary, so the subdivision descends to a finite curvilinear triangulation of $T^2$: the four interior grid vertices are four classes and the twelve boundary grid vertices form five classes under the two pairings, so $V=4+5=9$; the twelve interior grid edges are distinct classes and the twelve boundary segments form six classes, while the nine diagonals are pairwise distinct, so $E=12+6+9=27$; and the nine squares split into $F=18$ triangles. By [F5], $\chi(T^2)=9-27+18=0$. [F5, F2, given, construct]

2.1 Choose quotient charts from products of intervals shorter than one unit in each coordinate. On overlaps their changes are locally integer translations by step 1.1, whose derivatives are the identity, so the local positive tensors $dx^2+dy^2$ agree and define a smooth metric on $T^2$. Its coordinate frame $(\partial_x,\partial_y)$ is orthonormal with constant coefficients, so by [F3] all Christoffel symbols vanish and hence $\nabla_{\partial_x}\partial_x=\nabla_{\partial_x}\partial_y=\nabla_{\partial_y}\partial_y=0$. With $e_1=\partial_x$, $e_2=\partial_y$ the connection form is $\omega(X)=g(\nabla_Xe_1,e_2)=0$ for every $X$, so $d\omega=0$; [F4] gives $K\,dA=0$, and since $dA\ne0$ pointwise, $K\equiv0$ on the chart. The quotient charts cover $T^2$, so $K\equiv0$ and $\int_{T^2}K\,dA=0$. [F2, F3, F4, step 1.1, algebra]

3.1 By step 2.1 the total curvature is $0$, and by step 1.2 $\chi(T^2)=0$; the identity [F1] therefore reads $0=2\pi\cdot0$, which is true. The torus is compact with empty boundary by [F6], so the global theorem applies. [F1, F6, step 2.1, step 1.2, algebra]

4.1 No new choice is made: the quotient charts, the grid and the diagonal pattern are explicit, and AC licenses the inherited global Gauss-Bonnet theorem [F1] and the countable-choice assumption of the curvature structure equation in [F4]. [A1, step 3.1] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, Theorem 9.7, printed pp. 167-172, gives the global identity, and Datar, *Lectures on Riemannian Geometry*, Lecture 2, Theorem 2.2.4, printed pp. 14-15, states it. The flat tensor descends by the explicit integer-translation chart check above from [[def-two-dimensional-torus]]; the vanished Christoffel symbols and connection form use [[prop-christoffel-formula-for-the-levi-civita-connection]] and [[thm-gaussian-curvature-structure-equation]]. The count $9-27+18=0$ is the explicit periodic triangulation.

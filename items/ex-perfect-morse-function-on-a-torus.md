---
id: ex-perfect-morse-function-on-a-torus
kind: example
title: "A Morse function on the torus is perfect over every field"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-morse-numbers-and-morse-polynomial, def-poincare-polynomial-over-a-field, thm-morse-polynomial-identity, cor-morse-euler-characteristic-identity, def-perfect-morse-function-over-a-field, prop-morse-handle-chain-complex-computes-singular-homology, lem-handle-boundary-coefficients-are-attaching-belt-intersection-numbers, def-attaching-belt-intersection-matrix-of-adjacent-index-handles, def-two-dimensional-torus, def-hessian-of-a-function-at-a-critical-point, def-nondegenerate-critical-point-nullity-index-and-coindex, def-critical-point-and-critical-value-of-a-smooth-function, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct-geometric-computation
sources:
  scraped: []
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Part I Chapter 4 Section 4.4, printed pp. 88-91 (PDF pp. 98-100)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
    - title: "Alexander Ritter, Morse Homology (Cambridge Part III lecture notes), Lecture 21, PDF pp. 96-101"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
    - title: "C. T. C. Wall, Differential Topology, Sections 5.1-5.4, printed pp. 129-148 (PDF pp. 137-151)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
dependency_level: 7
---

## Example

Assume $\mathrm{AC}_\omega$. On the two-dimensional torus
$T^2=(\mathbb R/\mathbb Z)^2$ ([[def-two-dimensional-torus]]) let
$$f(x,y)=\cos(2\pi x)+\cos(2\pi y).$$
Its critical points are the four points with coordinates in
$\{0,\tfrac12\}$, with Hessians
$\operatorname{diag}(-4\pi^2\cos(2\pi x),-4\pi^2\cos(2\pi y))$, so the indices
are $2$ at $(0,0)$, $1$ at $(0,\tfrac12)$ and $(\tfrac12,0)$, and $0$ at
$(\tfrac12,\tfrac12)$: $M_f(t)=1+2t+t^2$. The index-ordered handle presentation
has one $0$-handle, two $1$-handles and one $2$-handle, and its handle chain
complex over any field $F$ has ranks $1,2,1$; the boundary coefficients are the
intersection numbers of attaching and belt spheres: each $1$-handle attaches
with two feet on the belt circle of the $0$-handle and the attaching circle of
the $2$-handle meets each belt $0$-sphere of a $1$-handle in two points, and in
both cases the two contributions have opposite signs (and cancel mod two), so
$\partial_1=\partial_2=0$. Hence $H_0\cong F$, $H_1\cong F^2$, $H_2\cong F$ and
$P_{T^2,F}(t)=1+2t+t^2=M_f(t)$: $f$ is $F$-perfect for every field, and the
Euler identity gives $1-2+1=0=\chi(T^2)$.

## Facts & Assumptions

**Given:** The flat torus $T^2=(\mathbb R/\mathbb Z)^2$, the function $f(x,y)=\cos(2\pi x)+\cos(2\pi y)$, and a field $F$.

[F1] Critical points, nondegeneracy, the Hessian and the index are the local Morse notions of the library ([[def-critical-point-and-critical-value-of-a-smooth-function]], [[def-nondegenerate-critical-point-nullity-index-and-coindex]], [[def-hessian-of-a-function-at-a-critical-point]]).

[F2] The Morse numbers and Morse polynomial are $m_k(f)=\#\{p:\operatorname{ind}(p)=k\}$ and $M_f(t)=\sum_km_k(f)t^k$ ([[def-morse-numbers-and-morse-polynomial]]); the handle chain complex of an index-ordered presentation has $C_k$ with basis the core classes and $H_k(C_\bullet)\cong H_k(T^2;F)$ ([[prop-morse-handle-chain-complex-computes-singular-homology]]).

[F3] For the surface endpoints $k=0$ and $k=n-1=1$, the handle boundary coefficients in the core bases are given by the endpoint clause of the boundary-coefficient lemma: the coefficient of $\partial_{k+1}e_i$ at $f_j$ is the intersection number of the attaching sphere of the upper handle with the belt sphere of the lower handle in the middle level ([[lem-handle-boundary-coefficients-are-attaching-belt-intersection-numbers]]). The matrix definition [[def-attaching-belt-intersection-matrix-of-adjacent-index-handles]] requires $1\le k\le n-2$ and has no surface case.

[F4] For every field there is a unique $Q\in\mathbb Z[t]$ with nonnegative coefficients and $M_f=P_{T^2,F}+(1+t)Q$; $f$ is $F$-perfect exactly when $m_k(f)=b_k(T^2;F)$ for all $k$; and the Euler characteristic identity $\sum_k(-1)^km_k(f)=\chi(T^2)$ holds ([[thm-morse-polynomial-identity]], [[def-perfect-morse-function-over-a-field]], [[cor-morse-euler-characteristic-identity]], [[def-poincare-polynomial-over-a-field]]).

## Verification

**Proof technique:** direct-geometric-computation.

1.1 On the torus the gradient of $f$ is $-2\pi(\sin2\pi x,\sin2\pi y)$, which vanishes exactly when both coordinates lie in $\{0,\tfrac12\}$; at such a point the Hessian is $\operatorname{diag}(-4\pi^2\cos2\pi x,-4\pi^2\cos2\pi y)$, whose diagonal entries are both negative at $(0,0)$, of opposite signs at the two mixed points, and both positive at $(\tfrac12,\tfrac12)$. Hence the critical points are these four points, all nondegenerate, with indices $2,1,1,0$, and by [F2], $$M_f(t)=1+2t+t^2.$$ [F1, F2, given]

2.1 By [F2] the index-ordered presentation of $f$ has $m_0=1$ handle of index $0$, $m_1=2$ of index $1$ and $m_2=1$ of index $2$; its handle chain complex over $F$ has $\dim_FC_0=1$, $\dim_FC_1=2$, $\dim_FC_2=1$. [F2, step 1.1]

3.1 First boundary: the $1$-handles are attached to the single $0$-handle along two feet on its boundary circle $S^1$, and the attaching $0$-sphere $S^0$ is oriented as the boundary of the attaching interval, so the two feet contribute with opposite signs and their intersection numbers with the belt circle cancel; by the endpoint coefficient clause of [F3] this gives zero coefficients, so $\partial_1=0$. Equivalently, each $1$-handle is a band gluing the two marked points with opposite orientations, and the two feet lie in the same component of the connected boundary. [F3, step 2.1]

3.2 Second boundary: just below the maximum $(0,0)$, the sublevel is the torus with an open disk removed. Each $1$-handle is an untwisted band in this oriented surface. Its outgoing sides $D^1\times S^0$ are both in the boundary, and its belt sphere consists of their two midpoints. The remaining $2$-handle caps this boundary circle, which traverses the two sides of each band in opposite core directions: this follows from the boundary orientation of the rectangle $D^1\times D^1$. With the belt-point orientations compatible with the oriented core, the two local intersection signs are opposite. Thus every coefficient of $\partial_2$ is zero by [F3], integrally and over every field; modulo two the two points likewise cancel. [F3, step 2.1, algebra]

4.1 Since $\partial_1=\partial_2=0$, the handle chain complex equals its homology: $H_0\cong F$, $H_1\cong F^2$, $H_2\cong F$; by [F2] the same holds for $H_*(T^2;F)$, so $$P_{T^2,F}(t)=1+2t+t^2=M_f(t).$$ Comparing in the Morse polynomial identity [F4], the correction polynomial is $Q=0$ and $m_k(f)=b_k(T^2;F)$ for every $k$: the function $f$ is $F$-perfect, for every field $F$. [F2, F3, F4, step 3.1, step 3.2]

5.1 Euler check: $\sum_{k}(-1)^km_k(f)=1-2+1=0$, and by the Euler identity of [F4] this equals $\chi(T^2)$; the same alternating sum of the Betti numbers $1-2+1$ is zero. [F4, step 1.1, step 4.1] ∎

## Remarks

- **The first interesting case.** The surface has nontrivial $1$-handles, while both endpoint boundary maps vanish for the standard perfect function. These endpoint computations use the boundary-coefficient lemma; the middle-index attaching-belt matrix definition has no surface case.
- **Coefficient independence.** Because all boundary maps vanish integrally (the cancellation is by opposite signs, not merely mod two), the computation holds over every field at once; this contrasts with real projective space, where the torsion makes the answer depend on the characteristic.

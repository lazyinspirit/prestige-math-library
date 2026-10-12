---
id: lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps
kind: lemma
title: "Shape-controlled secants and relative piecewise smooth extension"
status: draft
origin: session
deps: [def-relative-smooth-triangulation-and-projection-preserving-fitting, lem-finite-convex-cell-complexes-admit-compatible-triangulations, def-barycentric-subdivision-of-an-abstract-simplicial-complex, cor-vector-valued-ftc-and-lipschitz-bound, thm-chain-rule-for-total-derivatives]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "James R. Munkres, Elementary Differential Topology, revised edition (1966)"
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/munkresdiff.pdf
      locator: "§9, complete proofs9.3–9.8, printed90–96"
---

## Statement

Let $K$ be a finite geometric complex and $f:K\to\mathbb R^q$ piecewise smooth. There are subdivisions $K_m$ agreeing on every original face, with mesh tending to zero and a single lower thickness bound $\theta>0$ for every positive-dimensional simplex. Their secant maps $S_m$, defined by affine interpolation of the values of $f$ at vertices, converge strongly in piecewise $C^1$ to $f$.

If $L\subset K$ is a subcomplex and $U$ an open neighbourhood of $|L|$, the approximation can instead be chosen pointwise equal to $f$ on a neighbourhood of $|L|$ and equal to a secant map outside $U$, on shape-controlled subdivisions. Subdivision of $L$ is permitted; it does not alter $f$ there. All affine target-plane constraints already satisfied by $f$ on original simplices are preserved.

There is also a local extension statement: given a finite subcomplex $A\subset K$, a sufficiently small strong approximation $g$ to $f|_A$ on any subdivision extends to a prescribed small strong approximation $G$ to $f$ on a subdivision of $K$, with $G=f$ and with the original simplices unchanged outside the closed star of $A$. The permitted error of $g$ depends on the requested error and the finite original simplices, not on the shape of the subdivision of $A$. If the correction $g-f$ has zero component under an affine linear target map $p$ on $A$, then the extended correction has zero $p$ component everywhere. This last extension does not assert a shape bound on its coned simplices.

## Facts & Assumptions

**Given:** the finite complex and piecewise smooth map in the Statement.

[F1] Finite convex cell complexes can be triangulated by compatible coning from interior points, and barycentric subdivision uses chains of faces ([[lem-finite-convex-cell-complexes-admit-compatible-triangulations]], [[def-barycentric-subdivision-of-an-abstract-simplicial-complex]]).

[F2] Segment integration and the chain rule control value and derivative errors ([[cor-vector-valued-ftc-and-lipschitz-bound]], [[thm-chain-rule-for-total-derivatives]]).

[F3] Relative and strong approximation have the meanings of [[def-relative-smooth-triangulation-and-projection-preserving-fitting]].

## Proof

1.1 Give the finitely many vertices a total order and realize the abstract complex as a union of faces of one standard simplex $\Delta\subset\mathbb R^N$, with vertices $0,e_1,\ldots,e_N$. The original geometric realization is related to this one by a linear isomorphism on each simplex; finitely many such isomorphisms have uniformly bounded operator norms and inverse norms on their affine spans. In $\mathbb R^N$, cut unit lattice cubes by the hyperplanes $\sum_i x_i=j$, $j\in\mathbb Z$, and all their faces. These cuts form a locally finite convex cell complex: intersection is obtained by activating shared supporting equalities. After translating a cube to $[0,1]^N$, only the cuts with $j=0,\ldots,N$ occur, so there are finitely many cell shapes up to translation. Triangulate by [F1], choosing for each cell the average of its vertices; this choice is preserved by translation. There are therefore finitely many simplex shapes, with maximal diameter $D$ and positive minimum thickness $\theta_0$ in positive dimensions. The simplex $m\Delta$, defined by $x_i\ge0$ and $\sum_i x_i\le m$, and each of its faces are unions of these cells. Scaling by $1/m$ gives a subdivision of $\Delta$, hence of the embedded abstract $K$, with mesh at most $D/m$ and the same thickness bound. Restrictions to all faces agree because they use one global cell complex. Transport to the original realization multiplies diameter and inradius by factors bounded above and below on its finitely many original simplices, giving the claimed mesh and one positive $\theta$. [F1, algebra]

1.2 For extension, first extend the subdivision of $A$ combinatorially in increasing dimension: keep every original simplex outside its closed star, and for each affected simplex whose boundary has already been subdivided, cone that boundary subdivision from the original barycentre. These cones are simplices and agree on faces by the ray description of a simplex. Suppose a boundary correction $e=g-f$ is defined on the subdivided boundary of an original simplex $\sigma$, of barycentre $c$. Every point $x\ne c$ has the unique expression $x=c+t(y-c)$, $0<t\le1$, $y\in\partial\sigma$. Choose a smooth scalar function $a$ zero for $t\le1/3$ and one for $t\ge2/3$, and extend by $G(x)=f(x)+a(t)e(y)$, $G(c)=f(c)$. On each coned simplex this extends smoothly across $c$, since it equals $f$ near $c$, and takes the given boundary values. Face agreement is automatic. [F1, F2, algebra]

2.1 Let $s$ be a refined simplex inside an original simplex $\sigma$, with barycentre $b$, diameter $h$ and radius $r\ge\theta h$. Put $T_b(x)=f(b)+Df(b)(x-b)$. On the compact original simplex, its derivative has a modulus of continuity $\omega_\sigma(h)$ tending to zero. Segment integration gives $|f(x)-T_b(x)|\le h\omega_\sigma(h)$ for $x\in s$. The affine difference $S_m-T_b$ interpolates these vertex errors, so its sup norm is at most $h\omega_\sigma(h)$. For an affine map $A$ on $s$ with $\sup_s|A|\le E$, any unit vector $v$ in its affine span has $b+rv\in s$ and therefore $|DA(v)|=|A(b+rv)-A(b)|/r\le2E/r$. Hence $\|DS_m-Df(b)\|\le2\omega_\sigma(h)/\theta$ and $\|DS_m-Df(x)\|\le(2/\theta+1)\omega_\sigma(h)$. The value error tends to zero as well. Taking the maximum of these moduli over finitely many original simplices proves strong convergence, including vectors on every refined tangent cone. [F2, F3, step 1.1, algebra]

3.1 Barycentrically subdivide once if necessary so that $L$ is full: a face chain all of whose vertices are barycentres of faces in $L$ lies in $L$. For a full subcomplex, the sum $d$ of the barycentric coordinates at vertices outside $L$ is a global continuous piecewise affine nonnegative function with zero set exactly $|L|$. Its minimum on the compact complement of $U$ is positive. Choose a smooth scalar cutoff $\chi(d)$ zero near $d=0$ and one on that complement; its piecewise derivative is bounded by a fixed constant. Set $g_m=f+\chi(d)(S_m-f)$. This fixes $f$ near $L$ and is secant outside $U$. Product differentiation bounds its derivative error by the derivative error of $S_m$ plus the fixed cutoff derivative times its value error, which tends to zero by step 2.1. Each simplex restriction is smooth, and face values agree. If $f(\sigma)$ lies in an affine plane, its vertex interpolant and this affine combination lie in the same plane. The finite preliminary subdivision still admits the uniformly controlled subdivisions of step 1.1. [F1, F2, F3, step 1.1, step 2.1]

4.1 On a cone over an original boundary face, $t$ is an affine function of $x$ divided by its fixed barycentre-to-face height, and $y=c+(x-c)/t$. On $t\ge1/3$, $|Dt|$ and $\|Dy\|$ are bounded by constants depending only on the original simplex, not on the subdivided boundary simplices. The derivative of the correction is $a'(t)e(y)Dt+a(t)De(y)Dy$. Consequently its sup value and derivative norms are bounded by $C_\sigma\|e\|_{C^1}$, uniformly over all boundary subdivisions. Apply this construction to affected original simplices in increasing dimension. There are finitely many dimensions and simplices, so the product of these finite bounds determines how small the initial error must be to achieve any requested final error. If an already fixed subcomplex has zero correction, this formula retains zero on it; outside the star the correction is zero by construction. Finally $p(e)=0$ implies $p(a(t)e(y))=0$ for an affine linear component map, meaning its linear part applied to the correction vanishes. This proves the projection-preserving extension. [F2, F3, step 1.2, algebra] ∎

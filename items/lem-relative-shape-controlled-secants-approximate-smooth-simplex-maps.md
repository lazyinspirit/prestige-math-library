---
id: lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps
kind: lemma
title: "Shape-controlled secants and relative piecewise smooth extension"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-relative-smooth-triangulation-and-projection-preserving-fitting, lem-finite-convex-cell-complexes-admit-compatible-triangulations, def-barycentric-subdivision-of-an-abstract-simplicial-complex, cor-vector-valued-ftc-and-lipschitz-bound, thm-chain-rule-for-total-derivatives]
justified_by: []
aliases: []
landmark: false
dependency_level: 1
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "James R. Munkres, Elementary Differential Topology, revised edition (1966), Princeton University Press"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/munkresdiff.pdf"
      locator: "§9 complete proofs, printed pp. 90-96 (PDF pp. 95-101): Definitions 9.1-9.2 and Lemma 9.3 printed pp. 90-92, Lemma 9.4 lattice-thickness construction (with the failure 9.4(a) of iterated barycentric subdivision) printed pp. 92-93, Theorems 9.6-9.7 printed p. 94, Lemma 9.8 with Exercises (c) and (d) on plane preservation and the tapered extension printed pp. 94-96"
---

## Statement

Let $K$ be a finite geometric complex and $f:K\to\mathbb R^q$ piecewise smooth in
the sense of [[def-relative-smooth-triangulation-and-projection-preserving-fitting]].
There are subdivisions $K_m$ agreeing on every original face, with mesh
tending to zero and a single lower thickness bound $\theta>0$ for every
positive-dimensional simplex, whose secant maps $S_m$, defined by affine
interpolation of the values of $f$ at vertices, converge strongly in piecewise
$C^1$ to $f$.

If $L\subset K$ is a subcomplex and $U$ an open neighbourhood of $|L|$, the
approximation can instead be chosen pointwise equal to $f$ on a neighbourhood
of $|L|$ and equal to a secant map outside $U$, on shape-controlled
subdivisions; subdivision of $L$ is permitted and does not alter $f$ there, and
every affine target-plane constraint already satisfied by $f$ on original
simplices is preserved.

There is also a local extension statement: given a finite subcomplex
$A\subset K$, a sufficiently small strong approximation $g$ to $f|_A$ on any
subdivision extends to a prescribed small strong approximation $G$ to $f$ on a
subdivision of $K$, with $G=f$ and with the original simplices unchanged
outside the closed star of $A$. The permitted error of $g$ depends on the
requested error and the finite original simplices, not on the shape of the
subdivision of $A$. If $p$ is an affine target map and $p(g)=p(f)$ on $A$, then $p(G)=p(f)$
everywhere; equivalently, the linear part of $p$ annihilates each correction. This last extension does not assert a shape bound on its
coned simplices.

## Facts & Assumptions

**Given:** the finite geometric complex $K$, the piecewise smooth map $f:K\to\mathbb R^q$, a subcomplex $L$ with an open neighbourhood $U$ of $|L|$, and a finite subcomplex $A$ with a strong approximation $g$ of $f|_A$ on a subdivision of $A$, in the sense of [[def-relative-smooth-triangulation-and-projection-preserving-fitting]].

[F1] Finite convex cell complexes admit compatible triangulations by coning from interior points. Barycentric subdivision has nonempty faces as vertices and strict face chains as simplices, so a chain all of whose faces belong to a subcomplex is a simplex of its barycentric subdivision; thus the subdivided subcomplex is full ([[lem-finite-convex-cell-complexes-admit-compatible-triangulations]], [[def-barycentric-subdivision-of-an-abstract-simplicial-complex]]).

[F2] Segment integration gives the value error of the linearization and chain-rule differentiation bounds composite corrections ([[cor-vector-valued-ftc-and-lipschitz-bound]], [[thm-chain-rule-for-total-derivatives]]).

[F3] Approximation and relative approximation have the meanings fixed in [[def-relative-smooth-triangulation-and-projection-preserving-fitting]]: for $\delta>0$, strong $\delta$-approximation combines the value bound $\sup_b|g(b)-f(b)|<\delta$ with the derivative bound $|dg_b(v)-df_b(v)|<\delta|v|$ on every nonzero tangent-star vector, and shape control is a positive lower bound for $r(\sigma)/\operatorname{diam}\sigma$.

## Proof

**Proof technique:** direct.

1.1 Lattice subdivisions with a uniform thickness bound. If $K$ has no positive-dimensional simplices, its unchanged complex and secant $f$ prove the approximation assertions with the thickness condition vacuous. Otherwise give the finitely many vertices a total order and realize the abstract complex as a union of faces of one standard simplex $\Delta\subset\mathbb R^N$ with vertices $0,e_1,\dots,e_N$. The original geometric realization is related to this one by a linear isomorphism on each simplex, and finitely many such isomorphisms have uniformly bounded operator norms and inverse norms on their affine spans. In $\mathbb R^N$ cut the unit lattice cubes by the hyperplanes $\sum_i x_i=j$, $j\in\mathbb Z$, and all their faces; these cuts form a locally finite convex cell complex, since intersections arise by activating the shared supporting equalities. After translating a cube to $[0,1]^N$ only the cuts with $j=0,\dots,N$ occur, so there are finitely many cell shapes up to translation; triangulating every cell compatibly by [F1] with the translation-invariant choice of the average of its vertices gives finitely many simplex shapes, with maximal diameter $D$ and positive minimum thickness $\theta_0$ in positive dimensions. The simplex $m\Delta=\{x_i\ge0,\ \sum_i x_i\le m\}$ and each of its faces are unions of these cells, so scaling by $1/m$ gives subdivisions of $\Delta$, hence of the embedded abstract complex, with mesh at most $D/m$ and thickness at least $\theta_0$; restrictions to all faces agree because one global cell complex is used. Transporting back to the original realization multiplies diameter and inradius by the finitely many bounded factors of the linear isomorphisms, leaving the claimed mesh bound and one positive thickness $\theta$. Iterated barycentric subdivision has no such bound and is not used. [F1, algebra]

1.2 Combinatorial extension of a subdivision, and coned corrections. For the extension statement, extend the given subdivision of $A$ combinatorially in increasing dimension: keep every original simplex outside the closed star of $A$, and for each affected simplex whose boundary has already been subdivided, cone that boundary subdivision from the original barycentre. Each cone over a face simplex from the barycentre of the ambient simplex is a simplex, and the cones agree on common faces by the ray description of a simplex, so this produces a subdivision of $K$ containing the given subdivision of $A$. Suppose a correction $e=g-f$ is already defined and piecewise smooth on the subdivided boundary of an original simplex $\sigma$ with barycentre $c$; every $x\ne c$ in $\sigma$ has the unique expression $x=c+t(y-c)$ with $0<t\le1$ and $y\in\partial\sigma$. The function $b(s)=\exp(-1/s)$ for $s>0$ and $b(s)=0$ for $s\le0$ is smooth, since every right derivative is a polynomial in $1/s$ times $\exp(-1/s)$ and tends to zero at $0$. Thus $a(t)=b(t-1/3)/(b(t-1/3)+b(2/3-t))$ is a smooth scalar taper with $a(t)=0$ for $t\le1/3$ and $a(t)=1$ for $t\ge2/3$ and define $G(x)=f(x)+a(t)e(y)$ on $\sigma\setminus\{c\}$ and $G(c)=f(c)$. On each coned simplex this is smooth across $c$, because $a=0$ near $c$ forces $G=f$ there, and it assumes the prescribed values on the boundary; faces agree because $t$ and $y$ are determined by $x$ and $e$ is one function on the subdivided boundary. [F1, F2, algebra]

2.1 Secant estimate on a shape-controlled simplex. A zero-dimensional refined simplex has secant value $f$ and zero tangent space, so contributes zero error. Let $s$ be a positive-dimensional refined simplex inside an original simplex $\sigma$, with incenter $b$, diameter $h$ and inradius $r\ge\theta h$, and put $T_b(x)=f(b)+Df(b)(x-b)$. On the compact simplex $\sigma$ the derivative of $f$ has a modulus of continuity $\omega_\sigma(h)\to0$ as $h\to0$, uniformly in the base point. To justify uniformity, for any $\varepsilon>0$ continuity supplies balls about each base point on which its derivative differs from the centre value by less than $\varepsilon/2$. The balls of half those radii cover $\sigma$; a finite subcover and the minimum of their half-radii ensure that any two sufficiently close points have derivative difference less than $\varepsilon$ by the triangle inequality. Define $\omega_\sigma(h)$ as the supremum of those differences at distance at most $h$; boundedness follows from the same finite-cover argument. Segment integration along $[b,x]$ gives $|f(x)-T_b(x)|\le h\,\omega_\sigma(h)$ for $x\in s$. The affine map $S_m-T_b$ interpolates the vertex errors $f(v)-T_b(v)$, each of modulus at most $h\,\omega_\sigma(h)$, and an affine function on a simplex attains its supremum at a vertex, so $\sup_s|S_m-T_b|\le h\,\omega_\sigma(h)$. For an affine map $A$ on $s$ with $\sup_s|A|\le E$ and a unit vector $v$ in the affine span of $s$, the point $b+rv$ lies in $s$ by the definition of incenter and inradius, so $|DA(v)|=|A(b+rv)-A(b)|/r\le2E/r$. Applying this to $S_m-T_b$ gives $\|DS_m-Df(b)\|\le2\omega_\sigma(h)/\theta$, and adding the continuity term $\|Df(b)-Df(x)\|\le\omega_\sigma(h)$ gives $\|DS_m-Df(x)\|\le(2/\theta+1)\omega_\sigma(h)$ for all $x\in s$. As the mesh tends to zero, both the value and the derivative errors tend to zero uniformly over all base points and all vectors of the refined tangent cones of $\sigma$; taking the maximum of the finitely many moduli $\omega_\sigma$ over the original simplices proves strong piecewise $C^1$ convergence. [F2, F3, step 1.1, algebra]

2.2 Extension error bounds. On a cone over a boundary simplex, $x=c+t(y-c)$; writing the barycentric coordinates of $x$ in $\sigma$ and summing those outside the face carrying $y$ shows that $t$ is an affine function of $x$ divided by the fixed barycentre-to-face height, and $y=c+(x-c)/t$. On the region $t\ge1/3$ the bounds $|Dt|\le C_1(\sigma)$ and $\|Dy\|\le C_2(\sigma)$ depend only on the original simplex, not on the subdivision of the boundary. The strong bound on $De$ controls its operator norm on the entire direction space of each refined boundary simplex: apply it at relative interior points, where every direction is tangent, and pass to the boundary by continuity. The correction of step 1.2 has value $a(t)e(y)$ and derivative $a'(t)e(y)Dt+a(t)De(y)Dy$ by the chain rule, so its supremum norm and derivative norm are bounded by $C_\sigma\|e\|_{C^1}$ with $C_\sigma$ depending only on $\sigma$; near $c$ the correction vanishes identically. Hence, for finitely many affected simplices handled in increasing dimension, the product of the finitely many constants $C_\sigma$ converts any requested final error into a sufficient bound on the initial error, uniformly over all subdivisions of $A$; a zero correction on an already fixed subcomplex is retained, and the correction is zero outside the closed star of $A$ by construction. If $p$ is affine and its linear part is $P$, then $p(g)=p(f)$ is equivalent to $P(e)=0$ on $A$. The formula gives $P(a(t)e(y))=a(t)P(e(y))=0$ on every newly extended simplex, so induction preserves $p(G)=p(f)$ everywhere. [F2, step 1.2, algebra]

3.1 Relative approximation with plane preservation. For the relative statement, barycentrically subdivide once if necessary so that $L$ is full: a face chain all of whose barycentric vertices lie in $L$ lies in $L$ by [F1]. Then let $d$ be the sum of the barycentric coordinates at vertices outside $L$; on each subdivision simplex the coordinates are affine, so $d$ is a global continuous piecewise affine nonnegative function, and its zero set is exactly $|L|$: a point of $|L|$ lies in a subdivision simplex all of whose vertices lie in $L$ because $L$ is full, so all coordinates outside $L$ vanish, while $d(x)=0$ forces $x$ into the hull of vertices lying in $L$, hence into $|L|$. The zero set of $d$ is closed and the complement of $U$ is compact, so, when $|K|\setminus U$ is nonempty, a positive lower bound $d_0$ exists: continuity and positivity give neighbourhoods on which $d$ is at least half its value at the centre, and a finite subcover gives the minimum of finitely many positive half-values. If $|K|\setminus U$ is empty, take $g_m=f$ and the assertion outside $U$ is vacuous. Otherwise take the cutoff $\chi(s)=a(s/d_0)$ using step 1.2, so $\chi=0$ on $[0,d_0/3]$ and $\chi=1$ on $[2d_0/3,\infty)$ and its values lie in $[0,1]$; its derivative is bounded, and the piecewise affine function $d$ has bounded derivative on the fixed finite subdivision. Setting $g_m=f+\chi(d)(S_m-f)$ gives, near $|L|$, $g_m=f$; outside $U$, $g_m=S_m$; and the derivative error is bounded by the derivative error of $S_m$ plus a fixed constant times its value error, both of which tend to zero by step 2.1. Each simplex restriction is smooth and face values agree. If $f$ maps an original simplex into an affine plane, then so do its vertex interpolants and every affine combination of $f$ with them, so all affine target-plane constraints are preserved, and the preliminary subdivision still admits the uniformly controlled subdivisions of step 1.1. [F1, F2, F3, step 1.1, step 2.1]

4.1 Assembly. The subdivisions of step 1.1 have mesh tending to zero and one positive thickness bound and, by step 2.1, their secant maps converge strongly in piecewise $C^1$ to $f$; step 3.1 provides the relative version, fixing $f$ near $L$, agreeing with a secant map outside $U$ and preserving affine target-plane constraints. For the extension statement, step 1.2 extends the subdivision and defines the coned correction, and step 2.2 bounds its $C^1$ norm by a constant depending only on the original simplices times the $C^1$ norm of the boundary correction, uniformly over all subdivisions of $A$; choosing the initial error small enough, in the finitely many affected simplices in increasing dimension, therefore realises any prescribed final strong-approximation error, keeps the correction zero outside the closed star of $A$, and preserves a vanishing affine-linear component. This proves all three assertions. [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1] ∎

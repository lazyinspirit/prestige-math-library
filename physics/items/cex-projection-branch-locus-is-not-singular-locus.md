---
id: cex-projection-branch-locus-is-not-singular-locus
kind: counterexample
title: "A branched projection of a smooth hypersurface"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-discriminant-and-branch-locus-weierstrass-hypersurface
  - def-discriminant-of-a-monic-polynomial
  - def-regular-singular-point-analytic-hypersurface
  - def-weierstrass-polynomial
  - lem-prepared-factorizations-and-irreducibility
  - thm-discriminant-root-formula-and-repeated-root-criterion
  - thm-holomorphic-implicit-function-theorem
  - thm-heine-borel-rn
  - thm-zero-order-factorization-holomorphic-function
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Chapter 6 §§6.1–6.7"
      url: "https://www.jirka.org/scv/scv.pdf"
      locator: "Example 6.6.4 the parabola y=x² and its branched projection (p. 190); Theorem 6.3.3 zeros and the discriminant set (p. 178)."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter II §§2, 4 and 6"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "II (4.19) discriminant and branch set of a finite preparation (p. 95)."
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement refuted

The following claim is false: for every reduced plane curve germ $X$ at the
origin of $\mathbb C^2$ and every complex-linear choice of coordinates in
which a reduced equation of $X$ is a Weierstrass polynomial in the second
variable, the branch set of the resulting local projection $\pi:X_W\to V$
equals $\pi(\operatorname{Sing}(X_W))$. For $X=Z(y^2-x)$, the curve is smooth
at the origin, but the Weierstrass polynomial $W=y^2-x$ has discriminant $4x$
and branch set $B_\pi=\{0\}$. The fibre over $0$ is the regular point
$(0,0)$, so $B_\pi$ strictly contains $\pi(\operatorname{Sing}(X_W))=\varnothing$.

## Facts & Assumptions

**Given:** The curve $X=Z(W)$ for $W(x,y)=y^2-x$ together with the projection $\pi(x,y)=x$ to the first coordinate.

[F1] A Weierstrass polynomial in $y$ is monic with coefficients in $\mathcal O_{\mathbb C,0}$ vanishing at the origin; hence $W=y^2-x$ is a Weierstrass polynomial of degree $2$ and is regular in $y$ of order $2$ ([[def-weierstrass-polynomial]]).

[F2] If a preparation $f=uW$ factorises as $W=GH$ with $G,H$ Weierstrass polynomials of positive degree, then $f$ is reducible in the germ ring; consequently a germ is irreducible if and only if its Weierstrass polynomial is irreducible in the polynomial ring ([[lem-prepared-factorizations-and-irreducibility]]).

[F3] A holomorphic germ of one variable of finite order $k$ has the form $x^ku$ with $u$ a unit, and the order is additive under multiplication; in particular a holomorphic square root of the germ $x$ would have even order $2k$ while $x$ has order $1$ ([[thm-zero-order-factorization-holomorphic-function]]).

[F4] For $W=y^2+a_1y+a_2$ the discriminant is $\operatorname{Disc}_y(W)=a_1^2-4a_2$, and it vanishes exactly when the polynomial has a repeated root ([[def-discriminant-of-a-monic-polynomial]], [[thm-discriminant-root-formula-and-repeated-root-criterion]]).

[F5] For the fixed projection of $W=y^2-x$, choose $r>0$ and $0<\varepsilon<r^2$, put $D=\{|y|<r\}$, $V=\{|x|<\varepsilon\}$, and $X_W=Z(W)\cap(V\times D)$. Its branch set is $\{x\in V:\operatorname{Disc}_y(W)(x)=0\}$ ([[def-discriminant-and-branch-locus-weierstrass-hypersurface]]). The proper two-sheeted projection is verified directly in step 2.2, using [[thm-heine-borel-rn]] and [[thm-holomorphic-implicit-function-theorem]].

[F6] A point is regular when the differential of a reduced local equation is nonzero ([[def-regular-singular-point-analytic-hypersurface]]).



**Proof technique:** direct — verify smoothness by exhibiting a graph, and compute the discriminant of the quadratic Weierstrass polynomial.

## Counterexample

1.1 The germ $W=y^2-x$ is irreducible in $\mathcal O_{\mathbb C^2,0}$. Indeed, by [F1] it is a Weierstrass polynomial of degree $2$; if $W=GH$ with $G,H$ Weierstrass polynomials of positive degree, then both have degree $1$, so $G=y-a(x)$ and $H=y-b(x)$ with $a,b\in\mathcal O_{\mathbb C,0}$; comparing coefficients gives $a+b=0$ and $ab=-x$, hence $a^2=x$, contradicting [F3] because the order of $a^2$ is even and that of $x$ is $1$. Therefore $W$ is irreducible in the polynomial ring and, by [F2], in the germ ring; in particular $W$ is reduced, since a germ divisible by the square of an irreducible germ is a product of two nonunits. [given, F1, F2, F3]

2.1 Every point of $X$ is regular. One has $dW=(-1,2y)\ne0$ at every point. Its local germ is reduced: a squared nonunit factor would make both the value and every first derivative vanish at that point by the product rule. Hence [F6] applies to $W$ and every point is regular; the singular locus of $X$ is empty. Equivalently $X$ is the graph $x=y^2$. [step 1.1, F6, algebra]

2.2 In the product of [F5], every slice $y^2=x$ has both roots in $D$, because $|y|^2=|x|<\varepsilon<r^2$; thus the fixed projection is surjective. For a compact $K\subset V$, its preimage is the closed bounded subset $\{(x,y):x\in K,\ y^2=x\}$ of $\mathbb C^2$, entirely inside $V\times D$, and is compact by [F5]. Thus the projection is proper. At $x\ne0$ its two roots are distinct and $\partial_yW=2y\ne0$; the implicit-function theorem of [F5] gives two disjoint local holomorphic sheets. They exhaust each nearby fibre, since every slice has exactly two roots. Finally [F4] gives $D_W=0^2-4(-x)=4x$, so [F5] gives $B_\pi=\{0\}$. [step 1.1, F4, F5, algebra]

3.1 Thus $B_\pi=\{0\}$ is nonempty while $\operatorname{Sing}(X_W)=\varnothing$ by step 2.1. The projection is branched over $0$ because the two roots of the slice coincide there by [F4], although its fibre is the regular point $(0,0)$. Hence $B_\pi\ne\pi(\operatorname{Sing}(X_W))$, refuting the claim. [step 2.1, step 2.2, F4, F5] ∎

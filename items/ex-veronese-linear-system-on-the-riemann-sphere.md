---
id: ex-veronese-linear-system-on-the-riemann-sphere
kind: example
title: The Veronese linear system on the Riemann sphere
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - thm-linear-system-map-to-projective-space-is-well-defined
  - def-complex-projective-space-and-holomorphic-charts
  - def-line-bundle-associated-to-a-divisor
  - def-riemann-sphere-holomorphic-charts
  - thm-meromorphic-functions-riemann-sphere-are-rational
  - def-divisor-principal-and-canonical-divisor-riemann-surface
  - thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity
  - thm-closed-subspace-of-a-compact-space-is-compact
  - thm-compact-subset-of-a-hausdorff-space-is-closed
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 12, printed pp. 106–107: the linear system $d[\\infty]$ on $\\mathbb P^1$, its polynomial basis, and the rational normal curve"
    - title: Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 5 §1, Example 5.9, printed pp. 50–51: $L(d[\\infty])$, the monomial basis, and the degree-$d$ rational normal curve"
dependency_level: 3
---

## Example

Let $X=\widehat{\mathbb C}=\mathbb P^1(\mathbb C)$ with affine coordinate $z=z_1/z_0$ and point at infinity $[0:1]$. Fix an integer $d\ge1$, put $D=d[\infty]$, and let $E=\mathcal O_X(D)$. Then:

1. $L(D)$ is the space of polynomials of degree at most $d$, so $\ell(D)=d+1$. The sections $s_j:=z^j s_D$ for $0\le j\le d$, where $s_D$ is the canonical meromorphic section of $\mathcal O_X(D)$, form a basis.

2. This basis is base-point-free. Its linear-system map is
$$\varphi_d:\mathbb P^1\longrightarrow\mathbb P^d,\qquad [z_0:z_1]\longmapsto[z_0^d:z_0^{d-1}z_1:\cdots:z_1^d],$$
and $\varphi_d^*\mathcal O_{\mathbb P^d}(1)\cong\mathcal O_X(D)$.

3. The map is a holomorphic embedding. Its image is the degree-$d$ rational normal curve, the image of the degree-$d$ Veronese parametrization.

## Verification

**Given:** The Riemann sphere $X$, its standard charts, the divisor $D=d[\infty]$ with $d\ge1$, and the line bundle $E=\mathcal O_X(D)$.

[F1] The finite chart has coordinate $z$ and the chart at infinity has coordinate $u=1/z$ ([[def-riemann-sphere-holomorphic-charts]]).

[F2] Projective space parametrizes lines and has the standard homogeneous-coordinate charts $U_j=\{Z_j\ne0\}$ ([[def-complex-projective-space-and-holomorphic-charts]]).

[F3] Every meromorphic function on the sphere is a rational function $P/Q$ with coprime polynomials ([[thm-meromorphic-functions-riemann-sphere-are-rational]]).

[F4] A nonconstant complex polynomial of degree $n$ has exactly $n$ roots counted with multiplicity ([[thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity]]).

[F5] A nonzero meromorphic function lies in $L(D)$ exactly when $(f)+D\ge0$ ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F6] The canonical meromorphic section $s_D$ of $E$ has divisor $D$, and $h\mapsto h s_D$ identifies $L(D)$ with $H^0(X,E)$; the divisor of $h s_D$ is $(h)+D$ ([[def-line-bundle-associated-to-a-divisor]]).

[F7] A base-point-free finite-dimensional subspace of holomorphic sections defines a holomorphic map to the projectivized dual space, and dual evaluation identifies the line bundle with the pullback of $\mathcal O(1)$, sending each chosen section to its coordinate section ([[thm-linear-system-map-to-projective-space-is-well-defined]]).

[F8] The standard projective space $\mathbb P^n(\mathbb C)$ is compact and Hausdorff ([[def-complex-projective-space-and-holomorphic-charts]]).

[F9] A closed subset of a compact space is compact, and a compact subset of a Hausdorff space is closed ([[thm-closed-subspace-of-a-compact-space-is-compact]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

**Choice audit:** No full AC or $\mathrm{AC}_\omega$ is used. The sphere and target use their explicit finite standard chart covers; the basis is displayed explicitly; and the compact case of the $\mathcal O(D)$ construction uses its finite-cover, choice-free branch ([[def-line-bundle-associated-to-a-divisor]]).

**Proof technique:** direct calculation in the two affine charts.

1.1 The zero function is a polynomial. For nonzero $f\in L(D)$, [F3] writes $f=P/Q$ with $P,Q$ coprime. If $Q$ were nonconstant, [F4] would give a root $a\in\mathbb C$; if $P(a)=0$, the same factorization result would make $z-a$ divide both $P$ and $Q$, contrary to coprimeness. Thus $P(a)\ne0$ and $f$ has a finite pole at $a$, impossible for $f\in L(d[\infty])$. Hence $Q$ is constant. If $P$ has degree $m$, its expression in $u=1/z$ has leading term $c u^{-m}$, so its pole order at infinity is $m$; membership in $L(D)$ forces $m\le d$. Conversely every polynomial of degree at most $d$ has no finite poles and pole order at infinity at most $d$, so belongs to $L(D)$. The monomials are linearly independent as polynomials and span this space, proving the dimension and basis claims. [F1, F3, F4, F5, given, algebra]

2.1 By [F6], $s_j=z^j s_D$ has divisor $(z^j)+D=j[0]+(d-j)[\infty]$, since $z$ has a simple zero at $0$ and a simple pole at $\infty$. At every finite point $s_0=s_D$ is nonzero because its divisor is $d[\infty]$; at infinity $s_d$ is nonzero because its divisor is $d[0]$. Thus the basis sections have no common zero. Since $d+1\ge2$, [F7] applies to $V=H^0(X,E)$ and gives the asserted linear-system map and pullback isomorphism. [F5, F6, F7, step 1.1, given]

3.1 On the source chart $z_0\ne0$, the section $s_D$ is a local frame and the coefficients of $s_j$ are $z^j$, so the map has coordinates $[1:z:\cdots:z^d]$. On the chart $z_1\ne0$, the coordinate is $u=z_0/z_1=1/z$ and $s_d=z^d s_D$ is a local frame because its divisor is $d[0]$; the coefficients of $s_0,\ldots,s_d$ in this frame are $u^d,u^{d-1},\ldots,1$. Hence the map is $[u^d:u^{d-1}:\cdots:1]$ there. On the overlap, multiplying $[1:z:\cdots:z^d]$ by $u^d$ gives the second tuple, so the formulas agree and are holomorphic in both charts; together they give the stated homogeneous formula on all of $\mathbb P^1$. [F1, F2, F5, F6, F7, step 2.1, algebra]

4.1 In the finite chart, the target chart coordinates are $(z,z^2,\ldots,z^d)$, whose first coordinate recovers $z$ and whose derivative has first component $1$. In the chart at infinity, the target coordinates are $(u^d,u^{d-1},\ldots,u)$, whose last coordinate recovers $u$ and whose derivative has last component $1$. The point at infinity maps to $[0:\cdots:0:1]$, outside the target chart with first coordinate nonzero, while every finite point lies in that chart. Thus the map is globally injective and has nonzero differential at every point. For any nonzero hyperplane form $L(W)=\sum_{j=0}^d a_jW_j$, monomial independence from step 1.1 shows its pullback $\sum_{j=0}^d a_jz_0^{d-j}z_1^j$ is a nonzero homogeneous polynomial of degree $d$. If its dehomogenization on $z_0\ne0$ has degree $m\le d$, [F4] gives $m$ finite roots counted with multiplicity, and in the infinity coordinate it has a zero of order $d-m$ when $m<d$; hence every hyperplane section has total multiplicity $d$. Under the hyperplane-section definition of degree, the image is the rational normal curve of degree $d$. [F1, F2, F4, step 1.1, step 3.1, algebra]

5.1 The chart formulas show that $\varphi_d$ is continuous. If $C\subseteq\mathbb P^1$ is closed, [F9] makes $C$ compact; pulling any open cover of $\varphi_d(C)$ back along $\varphi_d$ gives an open cover of $C$, so compactness gives a finite subcover and $\varphi_d(C)$ is compact. The target $\mathbb P^d$ is Hausdorff by [F8], so [F9] makes $\varphi_d(C)$ closed. Hence the continuous bijection from $\mathbb P^1$ onto its image is closed and has continuous inverse. Together with the nonzero differential from step 4.1, this proves that $\varphi_d$ is a holomorphic embedding, including the case $d=1$. [F8, F9, step 4.1, given, algebra] ∎

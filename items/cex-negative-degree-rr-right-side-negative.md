---
id: cex-negative-degree-rr-right-side-negative
kind: counterexample
title: "A negative right-hand side does not contradict Riemann-Roch"
status: draft
origin: pipeline
deps:
  - cor-h0-projective-space-o-d-homogeneous-polynomials
  - cor-negative-degree-no-sections-rr
  - cor-picard-projective-line-integers
  - cor-riemann-inequality-divisor-sections
  - cor-top-cohomology-projective-space-o-d
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-degree-divisor-proper-curve
  - def-dimension
  - def-divisor-smooth-proper-curve
  - def-index-speciality-divisor
  - def-little-l-divisor
  - lem-projective-line-divisors-classified-by-degree
  - thm-riemann-roch-as-l-minus-index
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 8 and 6"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Introduction to Algebraic Geometry (July 20, 2020 notes), Ch. 8"
      url: "https://math.mit.edu/classes/18.721/ag-jul20.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
pipeline_run: frontier-37-owner-30
verification:
  precheck: pass
---

## Counterexample

Assume the Axiom of Choice inherited from the current divisor, cohomology and Riemann-Roch suppliers.

Let $k$ be a field, let $m\ge1$ be an integer, let $\mathbb P^1_k$ be the
projective line over $k$ with point at infinity $\infty$ and coordinate $t$,
and put $D:=-m[\infty]$. Then
$$\deg_k(D)=-m<0,\qquad l(D)=0,\qquad i(D)=m-1,$$
so Riemann-Roch on $\mathbb P^1_k$ ($g=0$) reads
$$0-(m-1)=1-m=\deg_k(D)+1-g;$$
for $m=2$ this is the identity $0-1=-1=-2+1$. The explicitly refuted
readings are:

1. "$l(D)=\deg_k(D)+1-g$ for every divisor $D$": at $D=-2[\infty]$ one has
   $l(D)=0$ while $\deg_k(D)+1-g=-1$, and a negative integer is not the
   dimension of any $k$-vector space;
2. "there exist $\deg_k(D)+1-g$ independent sections": for every $m\ge2$ the
   number $1-m$ is negative, so it cannot count sections, and indeed
   $l(D)=0$;
3. "the Riemann inequality produces sections": the inequality
   $l(D)\ge1-m$ is vacuous for $m\ge2$, since its right-hand side is negative.

There is no contradiction with the vanishing $l(D)=0$ for $\deg_k(D)<0$
([[cor-negative-degree-no-sections-rr]]): that corollary asserts exactly the
value $l(D)=0$ computed here and is proved without the Riemann inequality,
because its nonpositive lower bound cannot ensure a nonzero section. The
Euler characteristic $l(D)-i(D)=1-m$ is an integer that may be negative, and
the compensation is supplied by
$H^1$, whose dimension $i(D)=m-1$ is not zero as soon as $m\ge2$; the right-hand
side of Riemann-Roch is therefore not itself the dimension of a space of
sections. At the boundary $m=1$, where $\deg_k(D)+1-g=0$ and
$l(D)=i(D)=0$, the first two numerical readings are consistent. The third
reading still fails: the bound $l(D)\ge0$ does not ensure a nonzero section.
Thus $m=2$ is the first failure of the first two readings and the first
negative right-hand side; the third reading fails already at $m=1$.

*Scaffold repair, recorded for the owner.* The frozen scaffold statement cited
the examples-page item `ex-cohomology-o-d-projective-line-all-d` for the
cohomology of the twists, and it also cited the same-page example
`ex-riemann-roch-projective-line-divisor`. Both are examples-page items: the
first is homed on the examples page
`cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes-examples`,
and an examples-page item may not be consumed by another item, while the
second is an example on this very page and likewise cannot carry the load. The
two citations are replaced here by the published A-page corollaries
[[cor-h0-projective-space-o-d-homogeneous-polynomials]] and
[[cor-top-cohomology-projective-space-o-d]] (the same values at $n=1$, with
the monomial count $d+1$ for $d\ge0$ and the rank $\binom{-d-1}{1}=m-1$ for
$d=-m\le-2$) together with the A-page suppliers
[[lem-projective-line-divisors-classified-by-degree]] and
[[cor-picard-projective-line-integers]]; every promised claim is preserved.

The current divisor-to-line-bundle route uses
[[lem-projective-line-divisors-classified-by-degree]] and
[[cor-picard-projective-line-integers]], while
[[def-little-l-divisor]] and [[def-index-speciality-divisor]] identify the two
cohomology dimensions. The published projective-line cohomology corollaries
give their explicit values.

## Facts & Assumptions

**Given:** the Axiom of Choice inherited from the current divisor, cohomology and Riemann-Roch suppliers; a field $k$, an integer $m\ge1$, the projective line $\mathbb P^1_k$ with point at infinity $\infty$ and coordinate $t$, and the divisor $D=-m[\infty]$.

[F1] Projective-line data: $\mathbb P^1_k$ is a smooth proper geometrically integral curve over $k$ ([[def-algebraic-curve-over-field]]) of genus $0$; the point at infinity has residue degree $[\kappa(\infty):k]=1$; the coordinate section $x_0$ of $\mathcal O(1)$ vanishes exactly at infinity with multiplicity one, so $\operatorname{div}(x_0)=[\infty]$ and $\mathcal O(1)\cong\mathcal O(\infty)$ with $\deg_k\mathcal O(1)=1$; and every divisor $D'$ on $\mathbb P^1_k$ is linearly equivalent to $\deg_k(D')[\infty]$, the degree homomorphism on divisor classes being an isomorphism ([[lem-projective-line-divisors-classified-by-degree]]).

[F2] Picard group: the degree homomorphism induces an isomorphism $\operatorname{Pic}(\mathbb P^1_k)\to\mathbb Z$ under which the class of $\mathcal O_{\mathbb P^1_k}(d)$ corresponds to $d$, so every invertible sheaf on $\mathbb P^1_k$ is isomorphic to $\mathcal O(d)$ for a unique integer $d$ ([[cor-picard-projective-line-integers]]).

[F3] Divisors and degree: a divisor on a smooth proper curve is a finite formal $\mathbb Z$-linear combination of closed points, and $\deg_k(D)=\sum_xn_x[\kappa(x):k]$ is a group homomorphism on the divisor group ([[def-divisor-smooth-proper-curve]], [[def-degree-divisor-proper-curve]]).

[F4] Dimensions: $l(D)=\dim_kL(D)=h^0(C,\mathcal O_C(D))$ and $i(D)=h^1(C,\mathcal O_C(D))=\dim_kH^1(C,\mathcal O_C(D))$ are nonnegative integers, and a dimension over a field is nonnegative by definition ([[def-little-l-divisor]], [[def-index-speciality-divisor]], [[def-dimension]]).

[F5] Riemann-Roch: for every divisor $D$ on the curve one has $l(D)-i(D)=\deg_k(D)+1-g$ with $g=g(C)$ and $i(D)\ge0$, with equality $l(D)=\deg_k(D)+1-g$ exactly when $i(D)=0$ ([[thm-riemann-roch-as-l-minus-index]]).

[F6] Negative degree: if $\deg_k(D)<0$ then $L(D)=0$ and $l(D)=0$, by the effective-divisor argument; the Riemann inequality is not used, since its right-hand side is nonpositive and cannot ensure a nonzero section ([[cor-negative-degree-no-sections-rr]]).

[F7] Explicit cohomology of the twists at $n=1$: $H^0(\mathbb P^1_k,\mathcal O(d))\cong k[x_0,x_1]_d$ for $d\ge0$, with monomial basis $x_0^ax_1^{d-a}$ ($0\le a\le d$) of size $d+1$, and $H^0=0$ for $d<0$; $H^1(\mathbb P^1_k,\mathcal O(d))=0$ for $d>-2$ and is free of rank $\binom{-d-1}{1}=-d-1$ for $d\le-2$ when $k\ne0$ ([[cor-h0-projective-space-o-d-homogeneous-polynomials]], [[cor-top-cohomology-projective-space-o-d]]).

[F8] Riemann inequality: $l(D)\ge\deg_k(D)+1-g$ for every divisor $D$ ([[cor-riemann-inequality-divisor-sections]]).

[F9] Riemann inequality vacuity and speciality: the inequality is an equality exactly when $i(D)=0$, so for $i(D)\ge1$ the divisor is special and the inequality is strict ([[def-index-speciality-divisor]]).

[F10] The current [[lem-projective-line-divisors-classified-by-degree]] and [[cor-picard-projective-line-integers]] identify the divisor class and attached twist, while [[def-little-l-divisor]] and [[def-index-speciality-divisor]] identify the cohomology dimensions. These interfaces give $\mathcal O_{\mathbb P^1_k}(-m[\infty])\cong\mathcal O_{\mathbb P^1_k}(-m)$ and the readings $l(D)=h^0(\mathcal O(D))$, $i(D)=h^1(\mathcal O(D))$ used at steps 1.1 and 2.1.

[F11] The Axiom of Choice is available and is inherited only through the cohomology, divisor and Riemann-Roch suppliers recorded above; the computation below evaluates explicit formulas at the given divisor and selects nothing ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** compute both sides of Riemann-Roch at $D=-m[\infty]$ from the explicit cohomology of the twists on $\mathbb P^1_k$, then read off the failure of the equality and existence readings for $m\ge2$.

1.1 The divisor and its degree; the attached sheaf. By [F1] the residue degree of infinity is $[\kappa(\infty):k]=1$, so by [F3] the degree of $D=-m[\infty]$ is $\deg_k(D)=-m\cdot[\kappa(\infty):k]=-m<0$. Still by [F1], $\mathcal O(1)\cong\mathcal O(\infty)$, and by the current divisor/Picard route [F10] dualizing and tensoring give $\mathcal O(-m)\cong\mathcal O(1)^{\otimes(-m)}\cong\mathcal O(-m[\infty])=\mathcal O(D)$; equivalently, both classes equal $-m$ under the isomorphism $\operatorname{Pic}(\mathbb P^1_k)\cong\mathbb Z$ of [F2] with $\mathcal O(1)\mapsto1$. [F1, F2, F3, F10]

2.1 Sections and index of speciality of $D$. By [F7] with $d=-m$: the group $H^0(\mathbb P^1_k,\mathcal O(-m))$ vanishes because $-m<0$, and $H^1(\mathbb P^1_k,\mathcal O(-m))$ vanishes for $m=1$ (as $-1>-2$) while for $m\ge2$ it is free of rank $\binom{m-1}{1}=m-1$; thus $h^0(\mathcal O(-m))=0$ and $h^1(\mathcal O(-m))=m-1$ for every $m\ge1$. By the isomorphism $\mathcal O(D)\cong\mathcal O(-m)$ of step 1.1 and the definitions [F4] of $l$ and $i$, $$l(D)=h^0(\mathcal O(D))=h^0(\mathcal O(-m))=0,\qquad i(D)=h^1(\mathcal O(D))=h^1(\mathcal O(-m))=m-1.$$ Independently [F6] gives $l(D)=0$ directly from $\deg_k(D)<0$ of step 1.1, so the two computations of $l(D)$ agree. [F4, F6, F7, step 1.1]

3.1 Riemann-Roch at $D$. By [F5] applied to the divisor $D$ of step 1.1, with $g=g(\mathbb P^1_k)=0$ from [F1] and the values of step 2.1, $$l(D)-i(D)=0-(m-1)=1-m=-m+1=\deg_k(D)+1-g,$$ an identity for every $m\ge1$; at $m=2$ it reads $0-1=-1=-2+1$. The right-hand side $1-m$ is negative exactly when $m\ge2$, and equals $0$ at the boundary $m=1$. [F1, F5, step 1.1, step 2.1]

3.2 The refuted readings and the role of $H^1$. For every $m\ge2$ step 2.1 gives $l(D)=0$ while $\deg_k(D)+1-g=1-m<0$; since a dimension over $k$ is nonnegative ([F4]), the equality $l(D)=\deg_k(D)+1-g$ fails, and the negative number $1-m$ cannot be the number of independent sections in $L(D)$. The Riemann inequality [F8] reads $0\ge1-m$, which is true for $m\ge2$ but vacuous: its right-hand side is negative, so it guarantees no nonzero section, in agreement with $l(D)=0$. The discrepancy is exactly the index of speciality: by step 2.1, $i(D)=m-1\ge1$ for $m\ge2$, so by [F9] $D$ is special, the Riemann inequality is strict, and the $h^1$ term $0-(m-1)=1-m$ supplies the negative compensation. For $m=1$ one has $i(D)=0$, $l(D)=0$ and $1-m=0$, so the first two numerical readings hold, but $l(D)\ge0$ still ensures no nonzero section. The third reading therefore fails already at $m=1$, while the first two fail first at $m=2$, explicitly by $D=-2[\infty]$ with $l(D)=0$, $i(D)=1$ and $0-1=-1$. [F4, F6, F8, F9, step 1.1, step 2.1]

4.1 Conclusion and choice accounting. Step 1.1 computes $\deg_k(-m[\infty])=-m$ and identifies the attached sheaf with $\mathcal O(-m)$; step 2.1 computes $l(D)=0$ and $i(D)=m-1$; step 3.1 verifies the Riemann-Roch identity $0-(m-1)=-m+1$; and step 3.2 exhibits the failure of the readings "$l(D)=\deg_k(D)+1-g$" and "there exist $\deg_k(D)+1-g$ sections" for every $m\ge2$, first at $D=-2[\infty]$ where the right-hand side is $-1$, while the negative-degree vanishing $l(D)=0$ of [F6] remains consistent because the $H^1$ term compensates. No contradiction with the Riemann inequality arises: the inequality gives no positive lower bound in this family: it is $0\ge0$ at $m=1$ and $0\ge1-m$ with negative right-hand side for $m\ge2$. The Axiom of Choice is inherited only through the suppliers of [F11]; the computation selects nothing beyond the given field and integer $m$. [F4, F6, F11, step 1.1, step 2.1, step 3.1, step 3.2] ∎

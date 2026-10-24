---
id: ex-genus-zero-conic-with-rational-point
kind: example
title: "A smooth conic with a rational point is a projective line"
status: published
origin: pipeline
deps:
  - cor-h0-projective-space-o-d-homogeneous-polynomials
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-degree-divisor-proper-curve
  - def-genus-euler-characteristic-curve
  - def-index-speciality-divisor
  - def-little-l-divisor
  - def-nonspecial-divisor
  - def-sheaf-cohomology-derived-global-sections
  - lem-projective-line-divisors-classified-by-degree
  - thm-genus-zero-point-implies-projective-line
  - thm-plane-curve-arithmetic-genus
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
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Example

Assume the Axiom of Choice inherited from the current plane-genus, rational-point and cohomology suppliers.

Let $k$ be a field of characteristic not two, let
$C=V_+(F)\subseteq\mathbb P^2_k$ be a smooth plane conic that is a curve
(integral of dimension one — the hypothesis under which
[[thm-plane-curve-arithmetic-genus]] applies), and let $p\in C$ be a
$k$-rational point. Then:

1. $\deg_k[p]=[\kappa(p):k]=1$, so $D=[p]$ is a divisor of degree one
   ([[def-degree-divisor-proper-curve]]);
2. [[thm-genus-zero-point-implies-projective-line]] applies once $g(C)=0$:
   [[thm-plane-curve-arithmetic-genus]] gives arithmetic genus
   $p_a(C)=\frac{(2-1)(2-2)}{2}=0$, which for a smooth curve is the genus, and
   a degree-one divisor is present, so $C\cong\mathbb P^1_k$;
3. under such an isomorphism the degree-one divisor $[p]$ corresponds to a
   degree-one divisor $[q]$ of $\mathbb P^1_k$, and the projective-line
   computation gives $l([q])=h^0(\mathcal O(1))=2$ and $i([q])=0$
   ([[cor-h0-projective-space-o-d-homogeneous-polynomials]]); dimensions of
   cohomology are invariant under isomorphism, so
   $$l([p])=2,\qquad i([p])=0:$$
   Riemann-Roch on $C$ reads $2-i([p])=1+1-0$, forcing $i([p])=0$, and the
   two-dimensional space $L([p])$ is spanned by $1$ and a coordinate function
   with a single simple pole at $p$, the coordinate of the isomorphism
   $C\cong\mathbb P^1_k$ supplied by the rational-point theorem.

The classical form of this computation is the projection parametrisation: for
each line $\ell$ through $p$ the residual intersection $C\cap\ell$ pairs the
second point of $\ell\cap C$ with $p$, giving the pencil $|[p]|$ and the
coordinate above; the reverse direction — that the quadratic Veronese image
of $\mathbb P^1_k$ is such a conic — is the batch-6 examples-page item
`ex-quadratic-veronese-conic`, which is not consumable here because
examples-page items are leaves.

*Scaffold repair, recorded for the owner.* The frozen scaffold cited the
examples-page items `ex-quadratic-veronese-conic` and
`ex-rational-parametrization-circle-conic`. Both are leaves and cannot carry a
load; the citations are replaced by the A-page rational-point theorem
[[thm-genus-zero-point-implies-projective-line]], the published A-page
computation of $h^0(\mathcal O(1))=2$
[[cor-h0-projective-space-o-d-homogeneous-polynomials]], and the local
argument of items 1–3. Every promised numerical claim
($\deg_k[p]=1$, $p_a=0$, $g=0$, $C\cong\mathbb P^1_k$, $l([p])=2$,
$i([p])=0$, and the reading $2-i=1+1-0$) is preserved. The explicit
line-pencil description of $|[p]|$ is recorded as the classical geometric
picture rather than as a consumed claim, with its would-be supplier named
above.

The current [[thm-plane-curve-arithmetic-genus]] gives the arithmetic genus;
smoothness identifies it with the curve genus. The current
[[thm-genus-zero-point-implies-projective-line]] supplies the isomorphism, and
the published projective-space cohomology result
[[cor-h0-projective-space-o-d-homogeneous-polynomials]] supplies the section
dimension. The proof transports cohomology through the isomorphism using the
current cohomology and Riemann-Roch interfaces cited below.

## Facts & Assumptions

**Given:** the Axiom of Choice inherited from the current plane-genus, rational-point and cohomology suppliers; a field $k$ of characteristic not two, a smooth plane conic curve $C=V_+(F)\subseteq\mathbb P^2_k$ with arithmetic genus computed by the plane-curve theorem, and a $k$-rational point $p\in C$.

[F1] Divisors and degree: $\deg_k(D)=\sum_xn_x[\kappa(x):k]$ is a group homomorphism, and a $k$-rational point has residue degree one, so $\deg_k[p]=1$ ([[def-degree-divisor-proper-curve]]).

[F2] Plane conic arithmetic genus: a curve $X=V_+(G)$ cut out by a nonzero homogeneous form of degree $d\ge1$ has $H^0(X,\mathcal O_X)=k$ and $p_a(X)=1-\chi(\mathcal O_X)=\frac{(d-1)(d-2)}{2}$; for $d=2$ this is $0$, and for a smooth curve the arithmetic genus is the genus ([[thm-plane-curve-arithmetic-genus]], [[def-algebraic-curve-over-field]]; the genus $g(C)=1-\chi(C,\mathcal O_C)$ is the one of [[def-genus-euler-characteristic-curve]], where the agreement with the arithmetic genus in the smooth case is recorded).

[F3] Rational-point theorem: a smooth proper geometrically integral curve of genus $0$ over $k$ that admits a divisor of degree one is isomorphic to $\mathbb P^1_k$ ([[thm-genus-zero-point-implies-projective-line]]).

[F4] Cohomology of the twists on the projective line: $\mathbb P^1_k$ is a smooth proper geometrically integral curve of genus $0$; for a $k$-rational point $q$ the degree-one divisor $[q]$ is linearly equivalent to $[\infty]$, so $\mathcal O([q])\cong\mathcal O(1)$ with $\deg_k\mathcal O(1)=1$, while $H^0(\mathbb P^1_k,\mathcal O(1))\cong k[x_0,x_1]_1$ has dimension $2$; hence $l([q])=h^0(\mathcal O(1))=2$ ([[cor-h0-projective-space-o-d-homogeneous-polynomials]], [[lem-projective-line-divisors-classified-by-degree]]).

[F5] Riemann-Roch and the index of speciality: $l(D)-i(D)=\deg_k(D)+1-g$ with $i(D)=h^1(D)\ge0$; $i(D)=0$ if and only if $D$ is nonspecial, equivalently if and only if the identity $l(D)=\deg_k(D)+1-g$ is an equality ([[thm-riemann-roch-as-l-minus-index]], [[def-index-speciality-divisor]], [[def-nonspecial-divisor]], [[def-little-l-divisor]]).

[F6] Invariance under isomorphism: $l(D)=\dim_kH^0(C,\mathcal O_C(D))$ and $i(D)=\dim_kH^1(C,\mathcal O_C(D))$ are dimensions of cohomology groups of the attached invertible sheaf, so an isomorphism of curves carrying $D$ to a divisor $D'$ carries $\mathcal O_C(D)$ to $\mathcal O_{C'}(D')$ and preserves $l$ and $i$ ([[def-little-l-divisor]], [[def-sheaf-cohomology-derived-global-sections]], [[def-index-speciality-divisor]]).

[F7] The Axiom of Choice is available and is inherited only through the rational-point and Riemann-Roch suppliers above; the computation evaluates the given conic, point and isomorphism and selects nothing beyond them ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** compute the degree of $[p]$, derive genus zero from the plane-conic arithmetic genus, apply the rational-point theorem, and transport $l$ and $i$ from the projective line to obtain $l([p])=2$, $i([p])=0$.

1.1 Degree one and genus zero. By [F1] the divisor $D=[p]$ has degree $[\kappa(p):k]=1$ because $p$ is $k$-rational. By [F2] the plane conic has $p_a(C)=\frac{(2-1)(2-2)}{2}=0$, and since $C$ is smooth, $g(C)=p_a(C)=0$. [F1, F2]

2.1 The conic is a projective line. The curve $C$ is smooth proper and geometrically integral by hypothesis and has genus $0$ by step 1.1, and it carries the degree-one divisor $[p]$ of step 1.1; [F3] therefore gives a $k$-isomorphism $\varphi:C\to\mathbb P^1_k$. [F3, step 1.1]

3.1 The two-dimensional space of the point. Under the isomorphism $\varphi$ of step 2.1 the degree-one divisor $[p]$ corresponds to a degree-one divisor $[q]$ of $\mathbb P^1_k$, and by [F4] $l([q])=2$ with $\mathcal O([q])\cong\mathcal O(1)$ and $g(\mathbb P^1_k)=0$; Riemann-Roch [F5] on $\mathbb P^1_k$ at $[q]$ therefore reads $2-i([q])=1+1-0$, so $i([q])=0$. By the invariance [F6] of $l$ and $i$ under isomorphism, $l([p])=2$ and $i([p])=i([q])=0$. Equivalently, $L([p])$ contains the constants and a coordinate function with a single simple pole at $p$, so its dimension is at least two, while [F5] gives $l([p])=2+i([p])$ and the value $l([p])=2$ forces $i([p])=0$. [F4, F5, F6, step 2.1]

4.1 Riemann-Roch on the conic and conclusion. Riemann-Roch on $C$ at the degree-one divisor reads $2-i([p])=1+1-0$, which with $i([p])=0$ of step 3.1 is the identity $2=2$; by [F5] the divisor $[p]$ is nonspecial, and the equality case of the Riemann inequality holds at a rational point of a genus-zero conic. The classical projection parametrisation of $C$ from $p$ realizes the pencil $|[p]|$ and the coordinate of the isomorphism; the example therefore exhibits explicitly the rational-point hypothesis of the genus-zero theorem in the conic case. The Axiom of Choice is inherited only through the suppliers of [F7]; nothing is selected beyond the given conic, point and isomorphism. [F1, F5, F7, step 1.1, step 3.1] ∎

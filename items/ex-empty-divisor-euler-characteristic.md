---
id: ex-empty-divisor-euler-characteristic
kind: example
title: "The empty divisor, its Euler characteristic and the genus boundary cases"
status: draft
origin: pipeline
deps:
  - cor-dimension-complete-linear-system
  - cor-h0-projective-space-o-d-homogeneous-polynomials
  - cor-top-cohomology-projective-space-o-d
  - def-axiom-of-choice
  - def-complete-linear-system
  - def-divisor-smooth-proper-curve
  - def-euler-characteristic-coherent-sheaf
  - def-genus-euler-characteristic-curve
  - def-index-speciality-divisor
  - def-little-l-divisor
  - def-nonspecial-divisor
  - lem-projective-line-divisors-classified-by-degree
  - thm-h0-structure-sheaf-proper-curve
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
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 18.5 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
pipeline_run: frontier-37-owner-30
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Example

Assume the Axiom of Choice inherited from the current cohomology, dimension and Riemann-Roch suppliers.

Let $k$ be a field, let $C$ be a smooth proper geometrically integral curve
over $k$ of genus $g=g(C)$ ([[def-genus-euler-characteristic-curve]]), and let
$D=0$ be the empty divisor. Then
$$l(0)=h^0(C,\mathcal O_C)=1,\qquad i(0)=h^1(C,\mathcal O_C)=g,$$
so the Euler characteristic of the structure sheaf is
$$\chi(C,\mathcal O_C)=h^0(C,\mathcal O_C)-h^1(C,\mathcal O_C)=1-g,$$
and Riemann-Roch on the empty divisor reads
$$1-g=0+1-g,$$
the normalization that makes $\chi(C,\mathcal O_C)=1-g$ the definition of the
genus. The complete linear system $|0|$ consists of the single divisor $0$ in
every genus, so $\dim_k|0|=0=l(0)-1$. The two boundary genera: for $g=0$ one
has $\chi=1$ with $i(0)=0$, so the empty divisor is nonspecial — for
$\mathbb P^1_k$ this reads $h^0(\mathcal O)=1$, $h^1(\mathcal O)=0$ — while for
$g=1$ one has $\chi=0$ with $l(0)=1=i(0)$, the first and simplest case of a
divisor of degree zero that is special, where the Riemann inequality for
$D=0$ is the strict bound $1\ge0$ with gap $i(0)=1$. In genus zero the
equality case $l(D)=\deg_k(D)+1-g$ holds at $D=0$, and it fails at $D=0$ as
soon as $g\ge1$.

*Scaffold repair, recorded for the owner.* The frozen scaffold cited the
examples-page item `ex-cohomology-o-d-projective-line-all-d` for the
projective-line values $h^0(\mathcal O)=1$, $h^1(\mathcal O)=0$. Examples-page
items are leaves and cannot carry a load; the citation is replaced by the
published A-page corollaries
[[cor-h0-projective-space-o-d-homogeneous-polynomials]] and
[[cor-top-cohomology-projective-space-o-d]] together with
[[lem-projective-line-divisors-classified-by-degree]], which give the same
values at $d=0$ and $g(\mathbb P^1_k)=0$. Every promised claim is preserved.

The current [[thm-riemann-roch-as-l-minus-index]] supplies the Riemann-Roch
identity, [[cor-dimension-complete-linear-system]] supplies the dimension
formula for $|0|$, and [[def-complete-linear-system]] identifies the linear
system. The current structure-sheaf and cohomology suppliers give the empty
divisor and genus boundary values.

## Facts & Assumptions

**Given:** the Axiom of Choice inherited from the current cohomology, dimension and Riemann-Roch suppliers; a field $k$, a smooth proper geometrically integral curve $C$ over $k$ of genus $g$, and the empty divisor $D=0$ on $C$.

[F1] The structure sheaf: the canonical map $k\to H^0(C,\mathcal O_C)$ is an isomorphism, so $h^0(C,\mathcal O_C)=l(0)=1$; in particular the zero divisor has a one-dimensional space of sections, spanned by the constant function $1$ ([[thm-h0-structure-sheaf-proper-curve]], [[def-little-l-divisor]]).

[F2] The index of speciality and the genus: $i(0)=h^1(C,\mathcal O_C)=g(C)$, the genus, which is the dimension of $H^1$ of the structure sheaf ([[def-index-speciality-divisor]], [[def-genus-euler-characteristic-curve]], [[def-little-l-divisor]]).

[F3] Euler characteristic: $\chi(C,\mathcal O_C)=h^0(C,\mathcal O_C)-h^1(C,\mathcal O_C)=1-g$, the Euler characteristic of the coherent sheaf $\mathcal O_C$ ([[def-euler-characteristic-coherent-sheaf]], [[def-genus-euler-characteristic-curve]]).

[F4] Riemann-Roch: for every divisor $D$ one has $l(D)-i(D)=\deg_k(D)+1-g$, with $i(D)\ge0$ and equality $l(D)=\deg_k(D)+1-g$ exactly when $i(D)=0$; a divisor is nonspecial exactly when $i(D)=0$, and special exactly when $i(D)\ge1$ ([[thm-riemann-roch-as-l-minus-index]], [[def-nonspecial-divisor]]).

[F5] The complete linear system of the empty divisor: $|0|=\{0\}$ is a single point, and $\dim_k|0|=0=l(0)-1$ for every genus; generally $|D|$ is nonempty exactly when $l(D)\ge1$ ([[cor-dimension-complete-linear-system]], [[def-complete-linear-system]], [[def-divisor-smooth-proper-curve]]).

[F6] The projective line: $\mathbb P^1_k$ is a smooth proper geometrically integral curve of genus $0$; for $d=0$ its twists satisfy $H^0(\mathbb P^1_k,\mathcal O)\cong k[x_0,x_1]_0\cong k$ and $H^1(\mathbb P^1_k,\mathcal O)=0$ ([[lem-projective-line-divisors-classified-by-degree]], [[cor-h0-projective-space-o-d-homogeneous-polynomials]], [[cor-top-cohomology-projective-space-o-d]]).

[F7] The Axiom of Choice is available and is inherited only through the cohomology, degree and Riemann-Roch suppliers recorded above; the computation below evaluates the fixed divisor $D=0$ and selects nothing ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** evaluate $h^0$ and $h^1$ at the empty divisor, read off the Euler characteristic and Riemann-Roch identity, identify $|0|$, and check the genus-zero and genus-one boundary cases.

1.1 The dimensions at the empty divisor. By [F1] the space $L(0)$ is one-dimensional, spanned by the constants, so $l(0)=h^0(C,\mathcal O_C)=1$; by [F2] the index of speciality is $i(0)=h^1(C,\mathcal O_C)=g$. [F1, F2]

2.1 Euler characteristic and Riemann-Roch at the empty divisor. By [F3] the Euler characteristic is $\chi(C,\mathcal O_C)=h^0-h^1=1-g$, and the Riemann-Roch identity [F4] at $D=0$, with $\deg_k(0)=0$ because the empty divisor has empty support, reads $l(0)-i(0)=1-g=0+1-g$, that is, $1-g=0+1-g$: the genus is exactly the normalization constant that makes this identity hold. [F3, F4, step 1.1]

2.2 The complete linear system of the empty divisor. By [F5] the complete linear system $|0|$ consists of the single divisor $0$, so $\dim_k|0|=0=l(0)-1$ by step 1.1, in every genus. [F5, step 1.1]

3.1 The genus boundary cases. If $g=0$, then step 1.1 gives $i(0)=0$, so by [F4] the empty divisor is nonspecial, $\chi=1$ by step 2.1, and the identity is an equality; the projective line realizes this with $h^0(\mathcal O)=1$, $h^1(\mathcal O)=0$ by [F6]. If $g=1$, then step 1.1 gives $l(0)=1=i(0)$, so the empty divisor is special by [F4], $\chi=0$ by step 2.1, and the Riemann inequality for $D=0$ reads $l(0)=1\ge0=\deg_k(0)+1-g$; it is strict with gap exactly $i(0)=1$. In genus zero the equality case $l(D)=\deg_k(D)+1-g$ holds at $D=0$, and for every $g\ge1$ it fails at $D=0$ by step 1.1 and [F4]. [F4, F6, step 1.1, step 2.1]

4.1 Conclusion and choice accounting. The empty divisor has $l(0)=1$, $i(0)=g$ and Euler characteristic $1-g$, Riemann-Roch at $D=0$ is the identity $1-g=0+1-g$, and $|0|=\{0\}$ with $\dim_k|0|=0$; the empty divisor is nonspecial exactly in genus zero and is the simplest special divisor in genus one. The Axiom of Choice is inherited only through the suppliers of [F7]; nothing is selected. [F2, F3, F5, F7, step 1.1, step 2.1, step 2.2, step 3.1] ∎

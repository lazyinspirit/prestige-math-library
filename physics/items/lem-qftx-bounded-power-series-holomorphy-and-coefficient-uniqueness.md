---
id: lem-qftx-bounded-power-series-holomorphy-and-coefficient-uniqueness
kind: lemma
title: Bounded multivariable power series are holomorphic with unique derivative coefficients
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 0
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-gaga-local-analytic-flatness
axiom_base: ZF
proof_strategy: direct
deps:
  - def-multivariable-power-series
  - def-holomorphic-function-in-several-complex-variables
  - def-wirtinger-operators-in-several-complex-variables
  - def-ck-and-multi-index-notation-in-several-variables
  - def-factorial-and-falling-factorial
  - def-balls-and-polydiscs-in-complex-euclidean-space
  - thm-absolute-convergence-of-complex-series
  - thm-weierstrass-m-test-for-complex-function-series
  - thm-nonnegative-series-bounded-partial-sums
  - thm-geometric-series
  - lem-binomial-theorem-over-complex-numbers
  - thm-induction-principle
  - def-complex-integer-powers
  - lem-finite-sum-laws
  - thm-complex-numbers-form-a-field
  - lem-complex-conjugation-and-modulus-laws
  - rem-complex-euclidean-space-dictionary
dependency_roles:
  def-multivariable-power-series: mathematical-premise
  def-holomorphic-function-in-several-complex-variables: mathematical-premise
  def-wirtinger-operators-in-several-complex-variables: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-factorial-and-falling-factorial: mathematical-premise
  def-balls-and-polydiscs-in-complex-euclidean-space: mathematical-premise
  thm-absolute-convergence-of-complex-series: mathematical-premise
  thm-weierstrass-m-test-for-complex-function-series: mathematical-premise
  thm-nonnegative-series-bounded-partial-sums: mathematical-premise
  thm-geometric-series: mathematical-premise
  lem-binomial-theorem-over-complex-numbers: mathematical-premise
  thm-induction-principle: mathematical-premise
  def-complex-integer-powers: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
  thm-complex-numbers-form-a-field: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  rem-complex-euclidean-space-dictionary: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §1.2, Theorem 1.2.1 and Proposition 1.2.2"
      url: https://www.jirka.org/scv/scv.pdf
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Fix an integer $m\ge1$, $a\in\mathbb C^m$, positive real radii
$r=(r_0,\ldots,r_{m-1})$, and $M\ge0$. For a multi-index
$\alpha\in\mathbb N^m$, write $|\alpha|=\sum_{i<m}\alpha_i$,
$\alpha!=\prod_{i<m}\alpha_i!$, and $w^\alpha=\prod_{i<m}w_i^{\alpha_i}$.
Suppose $c:\mathbb N^m\to\mathbb C$ satisfies
$|c_\alpha|\le M\prod_{i<m}r_i^{-\alpha_i}$. Then the series
$g(z)=\sum_\alpha c_\alpha(z-a)^\alpha$ converges absolutely and uniformly
on every closed polydisc $|z_i-a_i|\le s r_i$ with $0<s<1$.
Its sum is holomorphic on $\Delta_r(a)=\{z:|z_i-a_i|<r_i\text{ for all }i<m\}$,
in the sense of a total complex-linear differential.

Let $e_k$ denote the multi-index with $1$ at coordinate $k$ and $0$ elsewhere.
For every $k<m$ and $0<\theta<1$, the reindexed first derivative
coefficients $d_\nu=(\nu_k+1)c_{\nu+e_k}$ satisfy

$$|d_\nu|\le\frac{M}{r_k(1-\theta)^2}\prod_{i<m}(\theta r_i)^{-\nu_i}.$$

Every iterated complex coordinate partial derivative exists and is holomorphic
on $\Delta_r(a)$, and, with all coordinate differentiations interpreted as
Wirtinger derivatives,

$$\partial_z^\gamma g(z)=\sum_{\nu\in\mathbb N^m}\frac{(\nu+\gamma)!}{\nu!}c_{\nu+\gamma}(z-a)^\nu,\qquad \partial_z^\gamma g(a)=\gamma!c_\gamma.$$

Each derived series converges absolutely and uniformly on every smaller closed
polydisc. If a second family $c'$ satisfies a bound of the same form on the
same radii, with a possibly different constant, and has the same sum throughout
$\Delta_r(a)$, then $c_\alpha=c'_\alpha$ for every $\alpha$.

## Statement references

[Lebl, power series representation and derivative coefficients, §1.2](https://www.jirka.org/scv/scv.pdf)

## Facts & Assumptions

**Given:** The integer $m\ge1$, centre $a$, positive radii $r$, constant $M\ge0$, and coefficient family $c$ with the stated bound.

[F1] Multi-indexed absolute sums are independent of enumeration and their box partial sums converge to that sum; absolutely convergent complex series can be rearranged and split ([[def-multivariable-power-series]], [[thm-absolute-convergence-of-complex-series]]).

[F2] A summable family of uniform nonnegative bounds gives absolute uniform convergence by the M-test; a nonnegative series converges when its finite partial sums are bounded, and $\sum_{j\ge0}s^j=(1-s)^{-1}$ for $0<s<1$ ([[thm-weierstrass-m-test-for-complex-function-series]], [[thm-nonnegative-series-bounded-partial-sums]], [[thm-geometric-series]]).

[F3] Holomorphy means a complex-linear total differential with remainder $o(\lVert h\rVert)$; the Wirtinger derivative is $\partial_{z_k}=\tfrac12(\partial_{x_k}-i\partial_{y_k})$ ([[def-holomorphic-function-in-several-complex-variables]], [[def-wirtinger-operators-in-several-complex-variables]]).

[F4] The finite complex binomial formula expands $(u+v)^j$ with the nonnegative integer binomial coefficients; finite real sums obey additivity, scaling and monotonicity, complex arithmetic obeys the field laws, and $|uv|=|u||v|$, $|u+v|\le|u|+|v|$ ([[lem-binomial-theorem-over-complex-numbers]], [[lem-finite-sum-laws]], [[thm-complex-numbers-form-a-field]], [[lem-complex-conjugation-and-modulus-laws]]).

[F5] Multi-index factorials, natural powers including $w^0=1$, induction on natural numbers, polydiscs, and the Euclidean norm are as in [[def-ck-and-multi-index-notation-in-several-variables]], [[def-factorial-and-falling-factorial]], [[def-complex-integer-powers]], [[thm-induction-principle]], [[def-balls-and-polydiscs-in-complex-euclidean-space]], and [[rem-complex-euclidean-space-dictionary]]. In particular $|h_i|\le\lVert h\rVert$, and every factorial is nonzero.

## Proof

**Proof technique:** direct.

1.1 For $0<s<1$ and $|z_i-a_i|\le s r_i$, the coefficient bound gives $|c_\alpha(z-a)^\alpha|\le M s^{|\alpha|}$. The sum of these bounds over the box $\alpha_i\le N$ is $M\prod_{i<m}\sum_{j=0}^N s^j\le M(1-s)^{-m}$. Every finite set of multi-indices lies in a box, so [F2] makes the bounds summable, and [F1] and the M-test give the asserted absolute uniform convergence. Each point of $\Delta_r(a)$ lies in such a closed polydisc, so $g$ is defined throughout $\Delta_r(a)$. [given, F1, F2, F4, F5]

1.2 Fix $z$ with $w=z-a$ and $|w_i|\le s r_i$, where $0<s<t<1$. For $h\ne0$ put $\eta=\max_{i<m}|h_i|/r_i$ and restrict to $h$ small enough that $T=(t-s)/\eta\ge1$. This is possible since $\eta\le\lVert h\rVert/\min_i r_i$. Expand the polynomial $\phi_\alpha(u)=\prod_{i<m}(w_i+u h_i)^{\alpha_i}=\sum_j A_{\alpha,j}u^j$ by [F4]. Its first two coefficients are $A_{\alpha,0}=w^\alpha$ and $A_{\alpha,1}=\sum_{k<m,\,\alpha_k>0}\alpha_k w^{\alpha-e_k}h_k$. The triangle inequality and the nonnegative binomial coefficients give $\sum_j|A_{\alpha,j}|T^j\le\prod_{i<m}(|w_i|+T|h_i|)^{\alpha_i}\le\prod_{i<m}(t r_i)^{\alpha_i}$. As $T\ge1$, the remainder $R_\alpha=\phi_\alpha(1)-A_{\alpha,0}-A_{\alpha,1}$ therefore satisfies $|R_\alpha|\le T^{-2}\prod_{i<m}(t r_i)^{\alpha_i}$. [given, F4, F5]

2.1 Fix $k<m$ and $0<\theta<1$. Reindexing by $\alpha=\nu+e_k$ gives $|d_\nu|\le(M/r_k)(\nu_k+1)\prod_{i<m}r_i^{-\nu_i}=(M/r_k)(\nu_k+1)\theta^{|\nu|}\prod_{i<m}(\theta r_i)^{-\nu_i}$. For a natural $j$, $(j+1)\theta^j=\sum_{p+q=j}\theta^{p+q}\le(\sum_{p=0}^j\theta^p)^2\le(1-\theta)^{-2}$. Since $\theta^{|\nu|}\le\theta^{\nu_k}$, this proves the claimed bound on $d_\nu$. Step 1.1 applied to $d$ on radii $\theta r$ gives absolute uniform convergence of its series on every closed $s r$ polydisc with $s<\theta$. For each $s<1$ such a $\theta$ exists; thus the first derived series converges absolutely and uniformly on every smaller closed polydisc. [given, F2, F4, F5, step 1.1]

3.1 Step 1.2 and the box estimate in step 1.1 imply $\sum_\alpha|c_\alpha R_\alpha|\le M\eta^2/((t-s)^2(1-t)^m)\le M\lVert h\rVert^2/((\min_i r_i)^2(t-s)^2(1-t)^m)$. Both $z$ and $z+h$ belong to the closed $t r$ polydisc, and the first derived sums $b_k(z)=\sum_\nu(\nu_k+1)c_{\nu+e_k}w^\nu$ converge absolutely by step 2.1. Thus [F1] permits splitting and reindexing to obtain $g(z+h)-g(z)-\sum_{k<m}b_k(z)h_k=\sum_\alpha c_\alpha R_\alpha$. The map $h\mapsto\sum_k b_k(z)h_k$ is complex-linear, and the displayed bound is $O(\lVert h\rVert^2)$, hence $o(\lVert h\rVert)$. By [F3], $g$ has this total complex differential at $z$. Taking $h=u e_k$ and $h=i u e_k$ with real $u\to0$ gives $\partial_{x_k}g=b_k$ and $\partial_{y_k}g=i b_k$, so $\partial_{z_k}g=b_k$. Every interior $z$ admits such $s,t$, proving holomorphy and the first termwise derivative formula throughout $\Delta_r(a)$. [F1, F3, F5, step 1.1, step 2.1, step 1.2]

4.1 The arguments in steps 1.1, 1.2, 2.1 and 3.1 used only the stated coefficient bound, so they apply again to any derived coefficient family with a bound on positive radii. Fix a multi-index $\gamma$ of order $q=|\gamma|>0$ and a real $0<\tau<1$. Put $t_j=1-j(1-\tau)/q$ for $0\le j\le q$, so $1=t_0>t_1>\cdots>t_q=\tau>0$. Apply step 2.1 successively with radii $t_{j-1}r$ and shrink factor $t_j/t_{j-1}$, and apply step 3.1 at each stage. The finitely many constants in the bounds remain finite. Induction on the number of differentiations gives the coefficient at $\nu$ after differentiating with multi-index $\delta$ as $((\nu+\delta)!/\nu!)c_{\nu+\delta}$: one further differentiation in coordinate $k$ multiplies the coefficient at $\nu+e_k$ by $\nu_k+1$, changing the factorial denominator from $(\nu+e_k)!$ to $\nu!$. This formula is independent of the order of coordinate differentiations. The final series represents $\partial_z^\gamma g$ and is holomorphic on $\Delta_{\tau r}(a)$ by step 3.1. For any closed $s r$ polydisc with $s<1$, choose $s<\tau<1$; step 1.1 applied to the final coefficient bound gives absolute uniform convergence there. Since every interior point lies in some $\Delta_{\tau r}(a)$, all these identities and holomorphy hold throughout $\Delta_r(a)$. For $q=0$ they are step 1.1 and step 3.1. [F5, step 1.1, step 2.1, step 3.1]

5.1 At $z=a$ every monomial in the derived series of step 4.1 vanishes except $\nu=0$, whose value is $1$; thus $\partial_z^\gamma g(a)=\gamma!c_\gamma$. If $c'$ satisfies the stated bound and has the same sum, the argument just proved applies to $c'$ as well. The derivatives are those of the same function, so $\gamma!c_\gamma=\gamma!c'_\gamma$. Cancelling the nonzero factorial gives $c_\gamma=c'_\gamma$ for every $\gamma$, proving uniqueness. [given, F3, F5, step 4.1] ∎

## Remarks

The statement follows the power-series and derivative-coefficient results in Lebl §1.2. The geometric estimate and the binomial total-differential remainder above supply a local proof directly for the stated coefficient hypothesis and the total-differentiability convention.

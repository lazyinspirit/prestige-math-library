---
id: thm-waring-asymptotic-for-sufficiently-many-powers
kind: theorem
title: "Waring's asymptotic formula for sufficiently many powers"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
  - def-countable-choice
  - def-real-power
  - lem-integer-part
  - def-waring-representation-count
  - def-waring-singular-series-and-singular-integral
  - alg-circle-method-major-minor-arc-decomposition
  - lem-waring-complete-monomial-exponential-sum
  - lem-waring-singular-series-well-defined-and-local-densities
  - lem-waring-singular-integral-converges-and-evaluates
  - lem-waring-major-arcs-disjoint
  - lem-waring-critical-one-variable-moment-bound
  - lem-waring-major-arcs-asymptotic
  - lem-waring-minor-arc-weyl-saving
  - lem-continuous-torus-orthogonality-for-integer-frequencies
  - thm-dirichlet-rational-approximation-with-denominator-range
  - thm-classical-weyl-inequality
  - thm-vinogradov-mean-value-main-conjecture
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "T. D. Wooley, Vinogradov's Mean Value Theorem via Efficient Congruencing"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf"
      locator: "Theorem 1.4 and its complete proof in §10, printed pp. 1579 and 1616–1621"
    - title: "N. Assing, The Circle Method and Waring's Problem"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf"
      locator: "§§6.1–6.3, the asymptotic formula, singular series, and local solubility, printed pp. 34–48"
---

## Statement

Assume countable choice. Let $k\ge2$ and $s\ge2k^2+2k-3$ be integers. For each positive integer $n$, let
$$R_{s,k}(n)=\#\left\{(x_1,\ldots,x_s)\in\mathbb Z_{>0}^s:\sum_{i=1}^s x_i^k=n\right\}$$
count ordered tuples, and define
$$S_k(q,a)=\sum_{r=0}^{q-1}e(ar^k/q),\qquad A_{s,k}(q,n)=\sum_{\substack{0\le a<q\\\gcd(a,q)=1}}q^{-s}S_k(q,a)^s e(-an/q),\qquad \mathfrak S_{s,k}(n)=\sum_{q=1}^{\infty}A_{s,k}(q,n),$$
with the $q=1$ convention that the only residue is $a=0$. Here $e(t)=\exp(2\pi i t)$ and $\gcd(a,q)=1$ means that $a$ and $q$ have no positive common divisor other than $1$. Then, as $n\to\infty$ through positive integers,
$$\lim_{n\to\infty}\frac{R_{s,k}(n)-\dfrac{\Gamma(1+1/k)^s}{\Gamma(s/k)}\mathfrak S_{s,k}(n)n^{s/k-1}}{n^{s/k-1}}=0,$$
where $e(t)=\exp(2\pi i t)$ and $\Gamma(u)=\int_0^\infty t^{u-1}\exp(-t)dt$ for $u>0$.

## Statement references

[Wooley, Theorem 1.4 and §10](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf)

[Assing, §§6.1–6.3](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)

## Facts & Assumptions

**Given:** Countable choice; integers $k\ge2$, $s\ge2k^2+2k-3$; and positive integers $n$ tending to infinity.

[A1] Countable choice is assumed for the Vinogradov mean-value supplier used to bound the critical one-variable moment ([[def-countable-choice]]).

[F1] The representation count is the ordered positive-integer count, and torus orthogonality gives
$$R_{s,k}(n)=\int_{\mathbb T}g_{k,N}(\alpha)^s e(-n\alpha)d\alpha,\qquad N=\lfloor n^{1/k}\rfloor,$$
with $g_{k,N}(\alpha)=\sum_{x=1}^Ne(\alpha x^k)$ ([[def-waring-representation-count]], [[alg-circle-method-major-minor-arc-decomposition]], [[lem-continuous-torus-orthogonality-for-integer-frequencies]]).

[F2] The major-arc part is $\mathfrak J_{s,k}\mathfrak S_{s,k}(n)N^{s-k}+o(N^{s-k})$ ([[lem-waring-major-arcs-asymptotic]]).

[F3] With $s_0=k^2+k-2$, the critical moment satisfies $I_{s_0,k}(N)\le C N^{2s_0-k+\eta}$ for every $\eta>0$ ([[lem-waring-critical-one-variable-moment-bound]]). The full critical-moment bound and its one-variable-lift input are now proved at this unchanged interface.

[F4] On the chosen minor arcs, $\sup|g_{k,N}|\le C_{k,\eta}N^{1-\delta_k+\eta}$ with $\delta_k=1/(16\cdot2^{k-1})>0$ ([[lem-waring-minor-arc-weyl-saving]]).

[F5] $\mathfrak J_{s,k}=\Gamma(1+1/k)^s/\Gamma(s/k)$ and the singular series is uniformly bounded in $n$ ([[lem-waring-singular-integral-converges-and-evaluates]], [[lem-waring-singular-series-well-defined-and-local-densities]]).

## Proof

**Proof technique:** circle-method decomposition into major and minor arcs.

1.1 Put $s_0=k^2+k-2$. The threshold hypothesis is $s\ge2s_0+1$. For each $n$, let $N=\lfloor n^{1/k}\rfloor$ and split the integral in [F1] into the major-arc set and its complement. The major-arc integral is given by [F2]. [A1, F1, F2, given]

1.2 On the minor arcs, since $s-2s_0\ge1$, $$\left|\int_{\mathfrak m}g_{k,N}(\alpha)^s e(-n\alpha)d\alpha\right|\le\left(\sup_{\alpha\in\mathfrak m}|g_{k,N}(\alpha)|\right)^{s-2s_0}I_{s_0,k}(N).$$ Choose $\eta=\delta_k/4$ in [F4] and a moment exponent no larger than $\delta_k/4$ in [F3]. The right side is then at most $C_{k,s}N^{s-k-\delta_k/4}=o(N^{s-k})$. [F3, F4, algebra]

2.1 Combining steps 1.1 and 1.2 yields $$R_{s,k}(n)=\mathfrak J_{s,k}\mathfrak S_{s,k}(n)N^{s-k}+o(N^{s-k}).$$ Since $N^k\le n<(N+1)^k$, one has $N^k/n\to1$ and hence $N^{s-k}/n^{s/k-1}\to1$. The uniform boundedness of the singular series in [F5] and its singular-integral evaluation convert this expression to the limit asserted in the Statement. [F1, F2, F5, step 1.1, step 1.2, algebra] ∎

## Proof status

The sole critical-moment/transference dependency hold is discharged. The already supplied major/minor-arc argument establishes the full unchanged asymptotic limit under the stated Countable Choice hypothesis.

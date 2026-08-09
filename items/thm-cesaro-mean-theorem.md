---
id: thm-cesaro-mean-theorem
kind: theorem
title: "If $x_k \\to L$ then $\\sigma_n \\to L$: convergence implies $(C,1)$-summability to the same value"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-cesaro-mean, def-sequence, def-finite-sum, lem-finite-sum-laws, lem-triangle-inequality-finite, def-real-limit, lem-rat-embeds-dense, cor-archimedean-reciprocal, lem-of-inverse-positive, lem-of-add-order, lem-of-sign-rules, lem-of-abs-value, lem-of-naturals-positive, lem-limit-unique, thm-nat-linear-order, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Summation methods (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Summation_methods"
    - title: "Cesàro summation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ces%C3%A0ro_summation"
    - title: "Silverman-Toeplitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Silverman%E2%80%93Toeplitz_theorem"
    - title: "G. H. Hardy, Divergent Series, Ch. 5"
      url: "https://archive.org/details/divergentseries033523mbp"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals that converges ([[def-sequence]],
[[def-real-limit]]), and let $(\sigma_n)$ be its sequence of Cesaro means
([[def-cesaro-mean]]). Then $(\sigma_n)$ converges as well, and

$$\lim_n \sigma_n \;=\; \lim_k x_k .$$

Both limits are asserted to exist: the right-hand one by hypothesis, the
left-hand one as part of the conclusion. Equivalently: a convergent sequence is
$(C,1)$-summable, to its own limit. The notation is licensed by uniqueness of
limits of real sequences ([[lem-limit-unique]]).

The converse is false ([[fs-cesaro-converse]]).

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals converging to $L := \lim_k x_k$, and its Cesaro means $\sigma_n = (n+1)^{-1}\sum_{k=0}^{n} x_k$.

[L1] The Cesaro means and $(C,1)$-summability ([[def-cesaro-mean]]); $(n+1)\cdot 1_{\mathbb{R}} > 0$ for every $n \in \mathbb{N}$ ([[lem-of-naturals-positive]]).

[L2] Finite sums ([[def-finite-sum]]) and their laws: additivity, scaling with $\sum_{k<d}\lambda = d\lambda$, splitting $\sum_{k<n} = \sum_{k<m} + \sum_{k=m}^{n-1}$ for $m \le n$, and monotonicity of $\sum$ in its terms ([[lem-finite-sum-laws]]).

[L3] Triangle inequality for finite sums: $\big|\sum_{k<n} a_k\big| \le \sum_{k<n}|a_k|$ ([[lem-triangle-inequality-finite]]).

[L4] Convergence: for every rational $\varepsilon > 0$ there is $K$ with $|x_k - L| < \varepsilon$ for all $k \ge K$, and equivalently for every real $\varepsilon > 0$, since below every positive real lies a positive rational ([[def-real-limit]], [[def-sequence]], [[lem-rat-embeds-dense]]).

[L5] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $m \ge 1$ with $1/m < \varepsilon$ ([[cor-archimedean-reciprocal]]).

[L6] Order arithmetic: $a > 0$ gives $a^{-1} > 0$ and $0 < a < b$ gives $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]]); for $c > 0$, $a \le b$ gives $ac \le bc$ ([[lem-of-sign-rules]]); adding a constant preserves the order and inequalities add ([[lem-of-add-order]]); the order is total and transitive ([[def-complete-ordered-field]], [[def-ordered-field]]); $|u| \ge 0$ ([[lem-of-abs-value]]); and $d \cdot 1_{\mathbb{R}} \le e \cdot 1_{\mathbb{R}}$ whenever $d \le e$ in $\mathbb{N}$ ([[lem-of-naturals-positive]]). In each clause above, [[lem-of-sign-rules]] and [[lem-of-add-order]] state the STRICT forms and only those; the nonstrict forms used below are those together with the equality cases, which trichotomy settles, the order being total ([[def-ordered-field]]).

[L7] The order on $\mathbb{N}$ is total, so two indices have a larger one ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon > 0$ be an arbitrary real; choose $K \in \mathbb{N}$ with $|x_k - L| < \varepsilon/2$ for every $k \ge K$. [L4, L6, choose]

1.2 Put $C := \sum_{k<K} |x_k - L|$, a real with $C \ge 0$ because every summand is $\ge 0$. [L2, L6]

2.1 For every $n \ge K$: since $\sum_{k=0}^{n} L = (n+1)L$, one has $\sigma_n - L = (n+1)^{-1}\sum_{k=0}^{n}(x_k - L)$, hence $|\sigma_n - L| \le (n+1)^{-1}\sum_{k=0}^{n}|x_k - L| = (n+1)^{-1}\big(C + \sum_{k=K}^{n}|x_k - L|\big) \le (n+1)^{-1}\big(C + (n+1-K)(\varepsilon/2)\big) \le C(n+1)^{-1} + \varepsilon/2$, the last two steps using $|x_k - L| < \varepsilon/2$ for $K \le k \le n$ and $n+1-K \le n+1$. [step 1.1, step 1.2, L1, L2, L3, L6]

2.2 Since $\varepsilon\,(2(C+1))^{-1} > 0$, choose a natural $m \ge 1$ with $1/m < \varepsilon\,(2(C+1))^{-1}$; then for every $n \ge m$ one has $n + 1 > m$, so $C(n+1)^{-1} \le C/m \le (C+1)/m < \varepsilon/2$. [step 1.2, L5, L6, choose]

3.1 Let $N$ be the larger of $K$ and $m$; for every $n \ge N$ both estimates apply and $|\sigma_n - L| < \varepsilon/2 + \varepsilon/2 = \varepsilon$. [step 2.1, step 2.2, L6, L7]

4.1 As $\varepsilon > 0$ was arbitrary, $(\sigma_n)$ converges to $L$, so $\lim_n \sigma_n$ exists and equals $L = \lim_k x_k$. [step 3.1, L1, L4] ∎

## Remarks

- **The shape of the argument is the shape of every regularity proof.** The
  terms split into a fixed head, whose contribution is a constant divided by
  $n+1$ and therefore eventually negligible, and a tail, all of whose terms are
  already within $\varepsilon/2$ of $L$ and whose weights sum to at most $1$.
  [[thm-silverman-toeplitz]] is exactly this argument carried out for an
  arbitrary weighting, and [[cor-cesaro-matrix-is-regular]] recovers the theorem
  above from it.

- **The bound $C+1$ rather than $C$** in the second estimate is there only so
  that the divisor is positive when $C = 0$, which happens whenever the first
  $K$ terms already equal $L$.

- **Nothing here needs boundedness of $(x_k)$** as a separate hypothesis: it
  follows from convergence, and in any case only the fixed head
  $x_0, \dots, x_{K-1}$ is estimated crudely, and it is finite.

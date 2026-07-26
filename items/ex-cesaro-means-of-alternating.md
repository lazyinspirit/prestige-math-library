---
id: ex-cesaro-means-of-alternating
kind: example
title: "The Cesaro means of $(-1)^k$ converge to $0$ although the sequence diverges"
status: draft
origin: session
deps: [def-cesaro-mean, fs-cesaro-converse, fs-bounded-implies-convergent, lem-alternating-sequence, cor-archimedean-reciprocal, def-finite-sum, def-real-limit, def-sequence, lem-of-abs-value, lem-of-inverse-positive, lem-of-naturals-positive, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Cesàro summation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ces%C3%A0ro_summation"
    - title: "Grandi's series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Grandi%27s_series"
pipeline_run: null
---

## Example

Let $(s_k)$ be the alternating sequence of [[lem-alternating-sequence]], the
unique sequence of reals with $s_0 = 1$ and $s_{\sigma(k)} = -s_k$, usually
written $s_k = (-1)^k$. Its Cesaro means ([[def-cesaro-mean]]) are

$$\sigma_n \;=\; \frac{s_0 + \dots + s_n}{n+1} \;=\; \begin{cases} \dfrac{1}{n+1} & n \text{ even},\\[4pt] 0 & n \text{ odd},\end{cases}$$

so the first few values are

$$\sigma_0 = 1,\quad \sigma_1 = 0,\quad \sigma_2 = \tfrac13,\quad \sigma_3 = 0,\quad \sigma_4 = \tfrac15,\quad \sigma_5 = 0,\ \dots$$

and $\lim_n \sigma_n = 0$, while $(s_k)$ does not converge at all. So $(s_k)$ is
$(C,1)$-summable to $0$ and divergent: it is the standard witness that
$(C,1)$-summability is strictly weaker than convergence, and the one used in
[[fs-cesaro-converse]].

The value $0$ is the one an average ought to give, since the sequence spends
half its indices at $1$ and half at $-1$; the classical way to say this is that
the series $1 - 1 + 1 - 1 + \dots$ has Cesaro sum $\tfrac12$, that being the
Cesaro limit of its partial sums rather than of its terms.

## Facts & Assumptions

**Given:** The alternating sequence $(s_k)$ with $s_0 = 1$ and $s_{\sigma(k)} = -s_k$, its partial sums $S_n = \sum_{k<n} s_k$, and its Cesaro means $\sigma_n = (n+1)^{-1}S_{n+1}$.

[L1] The alternating sequence and its index maps $e$ (even indices) and $o$ (odd indices), with $\mathbb{N}$ the disjoint union of their ranges and $s_{e_j} = 1$, $s_{o_j} = -1$ ([[lem-alternating-sequence]]).

[L2] Its partial sums satisfy $S_{e_j} = 0$ and $S_{o_j} = 1$, and consequently $|\sigma_n| \le (n+1)^{-1}$ and $\sigma_n \to 0$; this is proved in [[fs-cesaro-converse]], steps 2.1, 3.1, 4.1 and 5.1 there.

[L3] $(s_k)$ is bounded and does not converge ([[fs-bounded-implies-convergent]]).

[L4] The Cesaro means and $(C,1)$-summability ([[def-cesaro-mean]], [[def-finite-sum]], [[def-sequence]]).

[L5] Convergence of a real sequence ([[def-real-limit]]); the reciprocal Archimedean property ([[cor-archimedean-reciprocal]]).

[L6] Order arithmetic: $(n+1)\cdot 1_{\mathbb{R}} > 0$ ([[lem-of-naturals-positive]]) hence invertible with positive inverse, and reciprocation reverses the order ([[lem-of-inverse-positive]]); $|u| = u$ for $u \ge 0$ ([[lem-of-abs-value]]); the order is total ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 $S_m = 0$ when $m$ is even and $S_m = 1$ when $m$ is odd, since $\mathbb{N}$ is the disjoint union of the ranges of $e$ and $o$ and $S_{e_j} = 0$, $S_{o_j} = 1$. [L1, L2]

1.2 $(s_k)$ does not converge. [L3]

2.1 Hence $\sigma_n = (n+1)^{-1}S_{n+1}$ equals $(n+1)^{-1}$ when $n$ is even, because $n+1$ is then odd, and equals $0$ when $n$ is odd; in particular $\sigma_0 = 1$, $\sigma_1 = 0$, $\sigma_2 = 1/3$, $\sigma_3 = 0$, $\sigma_4 = 1/5$ and $\sigma_5 = 0$. [step 1.1, L4, L6]

2.2 $|\sigma_n| \le (n+1)^{-1}$ for every $n$, and given a real $\varepsilon > 0$ a natural $m \ge 1$ with $1/m < \varepsilon$ gives $|\sigma_n| \le (n+1)^{-1} < \varepsilon$ for all $n \ge m$; so $\lim_n \sigma_n = 0$. [step 1.1, L2, L5, L6]

3.1 $(s_k)$ is therefore $(C,1)$-summable to $0$ and divergent. [step 1.2, step 2.1, step 2.2, L4] ∎

## Remarks

- **The means converge but are not monotone**, and they are not even eventually
  of one shape: they alternate between $0$ and a positive value shrinking like
  $1/(n+1)$. Convergence of a Cesaro transform therefore carries no monotonicity
  information, which is another way of seeing that the transform loses the
  oscillation rather than damping it.

- **Where the $1/2$ comes from.** The classical assertion "$1 - 1 + 1 - 1 +
  \dots = 1/2$" is about the *partial sums* $S_m$, which are $0, 1, 0, 1,
  \dots$; their Cesaro means tend to $1/2$. This library has no theory of series
  yet, so nothing above asserts it; the sequence averaged here is $(s_k)$
  itself, whose means tend to $0$.

- **This is not a failure of the Cesaro matrix.** That matrix is regular
  ([[cor-cesaro-matrix-is-regular]]): it never changes a limit that exists. What
  it does here is assign a value where no limit exists, which is exactly what a
  summability method is for.

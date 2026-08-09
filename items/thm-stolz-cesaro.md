---
id: thm-stolz-cesaro
kind: theorem
title: "Stolz-Cesaro, $\\infty/\\infty$ form: if $b_k$ is strictly increasing and unbounded and $(a_{k+1}-a_k)/(b_{k+1}-b_k) \\to L$ then $a_k/b_k \\to L$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-sequence, def-monotone-sequence, def-bounded-set, def-divergence-to-infinity, lem-monotone-unbounded-diverges, def-finite-sum, lem-finite-sum-laws, lem-triangle-inequality-finite, lem-of-triangle-inequality, def-real-limit, lem-rat-embeds-dense, lem-of-inverse-positive, lem-of-add-order, lem-of-sign-rules, lem-of-abs-value, thm-algebra-of-limits, lem-reciprocal-of-null-diverges, lem-limit-of-tail, lem-limit-unique, thm-nat-linear-order, def-complete-ordered-field, def-ordered-field]
forward_refs: [cex-stolz-cesaro-converse-fails]
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
    - title: "Stolz-Cesàro theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Stolz%E2%80%93Ces%C3%A0ro_theorem"
    - title: "Cesàro summation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ces%C3%A0ro_summation"
    - title: "J. Lebl, Basic Analysis I, §2.2 and §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $(a_k)$ and $(b_k)$ be sequences of reals ([[def-sequence]]) such that
$(b_k)$ is strictly increasing ([[def-monotone-sequence]]) and its range is not
bounded above ([[def-bounded-set]]). Then $b_{k+1} - b_k > 0$ for every $k$, so
the **difference quotient**

$$d_k \;:=\; \frac{a_{k+1} - a_k}{b_{k+1} - b_k}$$

is defined for every $k \in \mathbb{N}$. Suppose $(d_k)$ converges.

Then there is $K_0 \in \mathbb{N}$ with $b_k > 0$ for every $k \ge K_0$, so that
$q_j := a_{j + K_0} / b_{j + K_0}$ is a sequence of reals; that sequence
converges, and

$$\lim_j q_j \;=\; \lim_k d_k .$$

Both limits are asserted to exist: the right-hand one by hypothesis, the
left-hand one as part of the conclusion. If moreover $b_k \ne 0$ for every $k$,
so that $(a_k/b_k)$ is itself a sequence of reals, then it converges and
$\lim_k a_k/b_k = \lim_k d_k$, because convergence depends only on a tail
([[lem-limit-of-tail]]).

**Why the statement is about a tail.** Nothing forbids $b_0 = 0$, and the two
standard applications on the companion examples page have exactly that,
$b_k = k$ in one and $b_n = n^{p+1}$ in the other. Writing the conclusion for
the whole sequence would
be writing a quotient that does not denote at $k = 0$.

The notation is licensed by uniqueness of limits of real sequences
([[lem-limit-unique]]).

## Facts & Assumptions

**Given:** Sequences $(a_k)$, $(b_k)$ of reals with $(b_k)$ strictly increasing and with range not bounded above, and the difference quotients $d_k = (a_{k+1}-a_k)/(b_{k+1}-b_k)$, assumed to converge; write $L := \lim_k d_k$.

[L1] Sequences, tails and strict monotonicity: $(b_k)$ strictly increasing means $b_j < b_k$ for $j < k$, so $b_{k+1} - b_k > 0$ ([[def-sequence]], [[def-monotone-sequence]]).

[L2] Not bounded above: no real is $\ge$ every element of the range ([[def-bounded-set]]).

[L3] A nondecreasing sequence whose range is not bounded above diverges to $+\infty$, that is, for every real $M$ there is $K$ with $b_k > M$ for all $k \ge K$ ([[lem-monotone-unbounded-diverges]], [[def-divergence-to-infinity]]).

[L4] Finite sums ([[def-finite-sum]]) and their laws: telescoping $\sum_{k<n}(c_{k+1}-c_k) = c_n - c_0$, splitting, additivity, scaling and monotonicity in the terms ([[lem-finite-sum-laws]]).

[L5] Triangle inequalities: $\big|\sum_{k<n} u_k\big| \le \sum_{k<n}|u_k|$ ([[lem-triangle-inequality-finite]]) and $|u+v| \le |u|+|v|$ ([[lem-of-triangle-inequality]]); also $|uv| = |u||v|$ and $|u| = u$ for $u \ge 0$ ([[lem-of-abs-value]]).

[L6] Convergence: for every real $\varepsilon > 0$ there is $K$ beyond which the terms are within $\varepsilon$ of the limit, the rational and real formulations agreeing ([[def-real-limit]], [[def-sequence]], [[lem-rat-embeds-dense]]); limits are unique ([[lem-limit-unique]]).

[L7] For a sequence of strictly positive reals, converging to $0$ is equivalent to the reciprocal sequence diverging to $+\infty$ ([[lem-reciprocal-of-null-diverges]]).

[L8] Convergence depends only on the tail ([[lem-limit-of-tail]]).

[L9] Algebra of limits: a scalar multiple of a convergent sequence converges to the scalar multiple of the limit ([[thm-algebra-of-limits]]).

[L10] Order arithmetic: $a > 0$ gives $a^{-1} > 0$ and $0 < a < b$ gives $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]]); for $c > 0$, $a < b$ if and only if $ac < bc$ ([[lem-of-sign-rules]]); adding a constant preserves the order and inequalities add ([[lem-of-add-order]]); the order is total and transitive ([[def-complete-ordered-field]], [[def-ordered-field]]); and of two indices one is the larger ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 $(b_k)$ is nondecreasing and its range is not bounded above, so it diverges to $+\infty$; taking $M = 0$ gives $K_0 \in \mathbb{N}$ with $b_k > 0$ for every $k \ge K_0$, and then $q_j := a_{j+K_0}/b_{j+K_0}$ is a well-defined sequence of reals. [L1, L2, L3, L10]

1.2 For every $k$ one has $b_{k+1} - b_k > 0$, so each $d_k$ is defined and $a_{k+1} - a_k = d_k (b_{k+1} - b_k)$. [L1, L10]

2.1 For all $K < n$: telescoping gives $a_n - a_K = \sum_{k=K}^{n-1}(a_{k+1}-a_k) = \sum_{k=K}^{n-1} d_k (b_{k+1}-b_k)$ and $b_n - b_K = \sum_{k=K}^{n-1}(b_{k+1}-b_k)$, hence $a_n - a_K - L(b_n - b_K) = \sum_{k=K}^{n-1}(d_k - L)(b_{k+1}-b_k)$. [step 1.2, L4]

2.2 Let $\varepsilon > 0$ be an arbitrary real; choose $K \ge K_0$ with $|d_k - L| < \varepsilon/2$ for every $k \ge K$. [step 1.1, L6, L10, choose]

3.1 For every $n > K$: $|a_n - a_K - L(b_n-b_K)| \le \sum_{k=K}^{n-1}|d_k - L|\,(b_{k+1}-b_k) \le (\varepsilon/2)(b_n - b_K)$, and $b_K > 0$ with $b_n > b_K$ gives $0 < b_n - b_K < b_n$, so dividing by $b_n > 0$ yields $\big|\,a_n/b_n - L - (a_K - Lb_K)/b_n\,\big| < \varepsilon/2$ and therefore $|a_n/b_n - L| < \varepsilon/2 + |a_K - Lb_K|\,/\,b_n$. [step 2.1, step 2.2, L4, L5, L10]

3.2 The sequence $j \mapsto 1/b_{j+K_0}$ has strictly positive terms and its reciprocal $j \mapsto b_{j+K_0}$ diverges to $+\infty$, so it converges to $0$; multiplying by the constant $|a_K - Lb_K|$, the sequence $j \mapsto |a_K - Lb_K|/b_{j+K_0}$ converges to $0$. [step 1.1, step 2.2, L3, L7, L9]

4.1 So there is $N \ge K$ with $|a_K - Lb_K|/b_n < \varepsilon/2$ for every $n \ge N$, and then $|a_n/b_n - L| < \varepsilon/2 + \varepsilon/2 = \varepsilon$ for every $n \ge N$; equivalently $|q_j - L| < \varepsilon$ for every $j \ge N - K_0$. [step 3.1, step 3.2, L6, L10]

5.1 As $\varepsilon > 0$ was arbitrary, $(q_j)$ converges to $L$, so $\lim_j q_j$ exists and equals $L = \lim_k d_k$; and if $b_k \ne 0$ for every $k$ then $(a_k/b_k)$ is a sequence of reals whose $K_0$-th tail is $(q_j)$, so it too converges to $L$. [step 4.1, L6, L8] ∎

## Remarks

- **This is a discrete l'Hopital rule**, and the shape of the proof says why:
  the increments of $a$ are compared with the increments of $b$, the comparison
  is summed by telescoping, and the fixed head $a_K - Lb_K$ is washed out by the
  divergence of $b_n$. The head is exactly the constant of integration.

- **Strict increase is used twice**, once so that $b_{k+1}-b_k \ne 0$ and the
  quotients $d_k$ exist, and once so that $b_n - b_K > 0$ and the sum estimate
  keeps its sign. Unboundedness is used twice as well, once to reach positive
  $b_k$ and once to kill the head.

- **There is no converse**, not even under the same hypotheses:
  [[cex-stolz-cesaro-converse-fails]] exhibits $a_k$ and $b_k$ for which
  $a_k/b_k$ converges while $(d_k)$ oscillates between two values.

- **The Cesaro mean theorem is the special case** $a_n = \sum_{k=0}^{n} x_k$,
  $b_n = n+1$: then $d_n = x_{n+1}$, and the conclusion reads
  $\sigma_n \to \lim_k x_k$. That deduction is not carried out here, because
  [[thm-cesaro-mean-theorem]] is proved directly and earlier; the observation is
  recorded so the reader can see the two results are one.

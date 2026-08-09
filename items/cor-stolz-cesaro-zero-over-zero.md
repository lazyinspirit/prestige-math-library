---
id: cor-stolz-cesaro-zero-over-zero
kind: corollary
title: "Stolz-Cesaro, $0/0$ form: if $b_k$ is strictly decreasing to $0$, $a_k \\to 0$, and the difference quotient converges, then $a_k/b_k$ converges to the same value"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-sequence, def-monotone-sequence, def-real-limit, lem-rat-embeds-dense, thm-algebra-of-limits, def-finite-sum, lem-finite-sum-laws, lem-triangle-inequality-finite, lem-limit-preserves-order, lem-of-inverse-positive, lem-of-sign-rules, lem-of-add-order, lem-of-abs-value, lem-limit-unique, thm-nat-linear-order, def-complete-ordered-field, def-ordered-field]
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
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Stolz-Cesàro theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Stolz%E2%80%93Ces%C3%A0ro_theorem"
    - title: "J. Lebl, Basic Analysis I, §2.2 and §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $(a_k)$ and $(b_k)$ be sequences of reals ([[def-sequence]]) with $(b_k)$
strictly decreasing ([[def-monotone-sequence]]), $\lim_k b_k = 0$ and
$\lim_k a_k = 0$. Then $b_{k+1} - b_k < 0$ for every $k$, so the difference
quotient

$$d_k \;:=\; \frac{a_{k+1} - a_k}{b_{k+1} - b_k}$$

is defined for every $k$, exactly as in [[thm-stolz-cesaro]]. Suppose $(d_k)$
converges.

Then $b_k > 0$ for every $k$, so $(a_k/b_k)$ is a sequence of reals; that
sequence converges, and

$$\lim_k \frac{a_k}{b_k} \;=\; \lim_k d_k .$$

Both limits are asserted to exist: the right-hand one by hypothesis, the
left-hand one as part of the conclusion. The notation is licensed by uniqueness
of limits of real sequences ([[lem-limit-unique]]).

## Facts & Assumptions

**Given:** Sequences $(a_k)$, $(b_k)$ of reals with $(b_k)$ strictly decreasing, $\lim_k b_k = 0$, $\lim_k a_k = 0$, and difference quotients $d_k = (a_{k+1}-a_k)/(b_{k+1}-b_k)$ assumed to converge; write $L := \lim_k d_k$.

[L1] Sequences and strict decrease: $b_j > b_k$ for $j < k$, so $b_k - b_{k+1} > 0$ ([[def-sequence]], [[def-monotone-sequence]]).

[L2] Convergence: for every real $\varepsilon > 0$ there is $K$ beyond which the terms are within $\varepsilon$ of the limit, the rational and real formulations agreeing ([[def-real-limit]], [[def-sequence]], [[lem-rat-embeds-dense]]); a constant sequence converges to its value; limits are unique ([[lem-limit-unique]]).

[L3] Limits preserve non-strict inequalities, hypotheses needed only eventually ([[lem-limit-preserves-order]]).

[L4] Algebra of limits for sums, differences and scalar multiples ([[thm-algebra-of-limits]]).

[L5] Finite sums ([[def-finite-sum]]) and their laws: telescoping, splitting, additivity, scaling and monotonicity in the terms ([[lem-finite-sum-laws]]).

[L6] Triangle inequality for finite sums ([[lem-triangle-inequality-finite]]); $|uv| = |u||v|$, $|u| = u$ for $u \ge 0$, and $|u| \le c$ exactly when $-c \le u \le c$ ([[lem-of-abs-value]]).

[L7] Order arithmetic: $a > 0$ gives $a^{-1} > 0$ ([[lem-of-inverse-positive]]); for $c > 0$, $a \le b$ if and only if $ac \le bc$ ([[lem-of-sign-rules]]); adding a constant preserves the order and inequalities add ([[lem-of-add-order]]); the order is total and transitive ([[def-complete-ordered-field]], [[def-ordered-field]]); of two indices one is the larger ([[thm-nat-linear-order]]). In each clause above, [[lem-of-sign-rules]] and [[lem-of-add-order]] state the STRICT forms and only those; the nonstrict forms used below are those together with the equality cases, which trichotomy settles, the order being total ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 For every $k$ one has $b_k - b_{k+1} > 0$, so $b_{k+1} - b_k \ne 0$, each $d_k$ is defined, and $a_k - a_{k+1} = d_k\,(b_k - b_{k+1})$. [L1, L7]

1.2 $b_m > 0$ for every $m$: for all $k \ge m+1$ one has $b_k \le b_{m+1}$, so comparing $(b_k)$ with the constant sequence $b_{m+1}$ gives $0 = \lim_k b_k \le b_{m+1}$, and $b_{m+1} < b_m$ then gives $b_m > 0$. [L1, L2, L3]

1.3 Let $\varepsilon > 0$ be an arbitrary real; choose $K$ with $|d_k - L| < \varepsilon/2$ for every $k \ge K$. [L2, L7, choose]

2.1 For all $n > m \ge K$: telescoping gives $a_m - a_n = \sum_{k=m}^{n-1}(a_k - a_{k+1}) = \sum_{k=m}^{n-1} d_k (b_k - b_{k+1})$ and $b_m - b_n = \sum_{k=m}^{n-1}(b_k - b_{k+1})$, so $|a_m - a_n - L(b_m-b_n)| \le \sum_{k=m}^{n-1}|d_k - L|(b_k - b_{k+1}) \le (\varepsilon/2)(b_m - b_n)$, that is $-(\varepsilon/2)(b_m-b_n) \le a_m - a_n - L(b_m - b_n) \le (\varepsilon/2)(b_m - b_n)$. [step 1.1, step 1.3, L5, L6, L7]

3.1 Fix $m \ge K$ and let $n$ vary over the indices $> m$: since $a_n \to 0$ and $b_n \to 0$, the middle quantity converges in $n$ to $a_m - Lb_m$, the right-hand one to $(\varepsilon/2)b_m$ and the left-hand one to $-(\varepsilon/2)b_m$; the two eventual inequalities of step 2.1 therefore pass to the limit and give $-(\varepsilon/2)b_m \le a_m - Lb_m \le (\varepsilon/2)b_m$. [step 2.1, L2, L3, L4]

4.1 Since $b_m > 0$, dividing by $b_m$ gives $|a_m/b_m - L| \le \varepsilon/2 < \varepsilon$ for every $m \ge K$. [step 1.2, step 3.1, L6, L7]

5.1 As $\varepsilon > 0$ was arbitrary, $(a_k/b_k)$ converges to $L$, so $\lim_k a_k/b_k$ exists and equals $L = \lim_k d_k$. [step 4.1, L2] ∎

## Remarks

- **This is a companion of [[thm-stolz-cesaro]] rather than a formal consequence
  of it**, and the `cor-` prefix should be read that way. The two statements
  share hypotheses of the same shape and the same telescoping device, but
  neither is obtained by substituting data into the other: there the fixed head
  $a_K - Lb_K$ is washed out because $b_n$ grows without bound, here the head is
  removed by letting the *far* end of the telescope go to $0$. Nothing in the
  proof above cites the theorem.

- **Where the limit is taken matters.** In step 3.1 the index $m$ is frozen and
  $n$ runs; the estimate of step 2.1 is uniform in $n$ for that fixed $m$, which
  is why the passage to the limit is legitimate. Taking both indices to
  infinity at once would prove nothing.

- **The conclusion is non-strict at the level of $\varepsilon/2$** and is turned
  into the strict inequality demanded by the definition of a limit only at the
  last division, where $\varepsilon/2 < \varepsilon$. That is the usual price of passing
  an inequality to a limit ([[lem-limit-preserves-order]]): strictness is not
  preserved, so it has to be recovered by halving.

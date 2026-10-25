---
id: fs-ratio-limsup-at-least-one-diverges
kind: false-statement
title: "FALSE: $\\limsup |a_{k+1}/a_k| \\ge 1$ implies the series diverges"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-ratio-test, def-limsup-liminf, lem-limsup-exists, def-series, lem-alternating-sequence, lem-index-map-grows, def-extended-reals, lem-extended-reals-complete, thm-geometric-series, thm-direct-comparison-test, lem-series-linearity, def-integer-power, lem-power-laws, lem-power-monotone, lem-of-abs-value]
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
    - title: "Ratio test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ratio_test"
    - title: "Convergence tests (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Convergence_tests"
    - title: "CSUDH notes on the ratio and root tests"
      url: "https://math.csudh.edu/~pong/a3/Notes_01.html"
pipeline_run: null
---

## Statement

**False claim:** for every sequence $(a_k)$ of reals with $a_k \ne 0$ for every
$k$, if

$$\limsup_{k} \Big|\frac{a_{k+1}}{a_k}\Big| \;\ge\; 1$$

then $\sum a_k$ diverges ([[def-series]], [[def-limsup-liminf]]).

The true divergence half of the ratio test ([[thm-ratio-test]]) has the
hypothesis $\liminf_k |a_{k+1}/a_k| > 1$, on the limit *inferior* and with a
*strict* inequality. The claim above weakens it in both respects at once, and
either weakening alone already destroys it.

The witness is built from the alternating sequence: with $(s_k)$ as in
[[lem-alternating-sequence]], put $c_k := 2 + s_k$, so $c_k$ is $3$ at the even
indices and $1$ at the odd ones, and let

$$a_k \;:=\; c_k \, 2^{-k} \qquad (k \in \mathbb{N}).$$

Its ratios take only the two values $3/2$ and $1/6$, so their limit superior is at
least $1$, while the series converges by comparison with a geometric series.

## Facts & Assumptions

**Given:** The alternating sequence $(s_k)$ and the index maps $e, o$ of [[lem-alternating-sequence]]; $c_k := 2 + s_k$; and $a_k := c_k 2^{-k}$ for $k \in \mathbb{N}$.

[L1] The alternating sequence: $s_0 = 1$, $s_{k+1} = -s_k$, $|s_k| = 1$ for every $k$, $s_{e_j} = 1$ and $s_{o_j} = -1$, with $e$ and $o$ strictly increasing ([[lem-alternating-sequence]]); a strictly increasing index map satisfies $n_j \ge j$ ([[lem-index-map-grows]]).

[L2] Powers of $2$: $2^{-k} > 0$, $2^{-(k+1)} = 2^{-k}/2$, and $2^{-k} = 1/2^{k}$ ([[def-integer-power]], [[lem-power-laws]], [[lem-power-monotone]]).

[L3] Limit superior in $\overline{\mathbb{R}}$: $\limsup_k x_k = \inf\{s_n\}$ with $s_n = \sup\{x_k : k \ge n\}$; every subset of $\overline{\mathbb{R}}$ has a least upper bound and a greatest lower bound there; and both quantities exist for every sequence ([[def-limsup-liminf]], [[lem-extended-reals-complete]], [[def-extended-reals]], [[lem-limsup-exists]]).

[L4] The geometric series $\sum_{k} r^{k}$ converges for $|r| < 1$; scaling by a nonzero constant preserves convergence; and direct comparison applies to nonnegative terms ([[thm-geometric-series]], [[lem-series-linearity]], [[thm-direct-comparison-test]], [[lem-of-abs-value]]).

[L5] The ratio test: $\liminf_k |a_{k+1}/a_k| > 1$ gives divergence, and that is the only divergence criterion it supplies ([[thm-ratio-test]]).

[L6] The refuted claim: for every sequence of nonzero reals with $\limsup_k |a_{k+1}/a_k| \ge 1$, the series $\sum a_k$ diverges.

## Refutation

**Proof technique:** direct.

1.1 Each $s_k$ is $1$ or $-1$, since $|s_k| = 1$; so $c_k = 2 + s_k$ is $3$ or $1$, in either case $1 \le c_k \le 3$ and $c_k > 0$. [given, L1]

2.1 Hence $a_k = c_k 2^{-k} > 0$ for every $k$, so in particular $a_k \ne 0$ and the claim applies to $(a_k)$. [step 1.1, L2, L6]

2.2 For every $k$, $0 < a_k = c_k 2^{-k} \le 3 \cdot 2^{-k}$. [step 1.1, L2]

3.1 The ratios are $q_k := |a_{k+1}/a_k| = a_{k+1}/a_k = \dfrac{c_{k+1}}{c_k}\cdot\dfrac{1}{2}$, so $q_k = (1/3)(1/2) = 1/6$ when $s_k = 1$ and $q_k = 3 \cdot (1/2) = 3/2$ when $s_k = -1$, using $s_{k+1} = -s_k$. [step 1.1, step 2.1, L1, L2, algebra]

3.2 The geometric series $\sum_k (1/2)^{k}$ converges, since $|1/2| < 1$; hence so does $\sum_k 3 \cdot 2^{-k}$, and by comparison so does $\sum_k a_k$. [step 2.2, L2, L4]

4.1 For every $n \in \mathbb{N}$ there is an index $k \ge n$ with $s_k = -1$, namely $k = o_n$, since $o_n \ge n$; so $q_k = 3/2$ at some index $k \ge n$, for every $n$. [step 3.1, L1]

5.1 Therefore every tail supremum satisfies $\sup\{q_k : k \ge n\} \ge 3/2$, so $3/2$ is a lower bound of the set of tail suprema and $\limsup_k q_k \ge 3/2 \ge 1$. [step 4.1, L3]

6.1 So $(a_k)$ has nonzero terms and $\limsup_k |a_{k+1}/a_k| \ge 1$, yet $\sum a_k$ converges; the claim fails for it and is therefore false. [step 2.1, step 5.1, step 3.2, L6]

7.1 Nothing in the ratio test is contradicted: its divergence half requires $\liminf_k q_k > 1$, and here $\liminf_k q_k \le 1/6 < 1$, since $q_k = 1/6$ at indices $e_n \ge n$ for every $n$. [step 6.1, step 3.1, L1, L3, L5] ∎

## Remarks

- **Replacing $\liminf$ by $\limsup$ is already fatal, even with the inequality kept strict.** The witness above has $\limsup_k q_k \ge 3/2$, which is strictly greater than $1$, and its series converges. So the false claim is not rescued by demanding $\limsup_k |a_{k+1}/a_k| > 1$: the two quantities $\liminf$ and $\limsup$ are genuinely different hypotheses here, and only the first one works.

- **The asymmetry of the ratio test is not an accident of its proof.** A large ratio occurring arbitrarily late says only that the terms grow at those steps; it says nothing about their size, because they may have been made very small in between. Only an eventual lower bound on the ratios forces the terms to stay away from $0$, and that is precisely a hypothesis on $\liminf$.

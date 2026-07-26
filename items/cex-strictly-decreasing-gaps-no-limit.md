---
id: cex-strictly-decreasing-gaps-no-limit
kind: counterexample
title: "$x_{k+1} = x_k + 1/x_k$ from $x_1 = 1$ has strictly decreasing consecutive gaps and diverges, so no uniform $c < 1$ exists"
status: published
origin: session
deps: [def-contractive-sequence, thm-contractive-implies-cauchy, def-divergence-to-infinity, def-monotone-sequence, thm-of-archimedean, thm-induction-principle, lem-power-monotone, lem-of-inverse-positive, lem-convergent-implies-bounded, thm-recursion, def-sequence, def-real-limit, def-integer-power, lem-of-abs-value, lem-of-naturals-positive, cor-of-one-positive, lem-of-add-order, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Contraction mapping (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Contraction_mapping"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "R. Bartle and D. Sherbert, Introduction to Real Analysis, 4th ed., §3.5"
      url: "https://en.wikipedia.org/wiki/Fixed-point_iteration"
---

## Statement refuted

**Refuted claim:** a sequence whose consecutive gaps are strictly decreasing,

$$|x_{k+2} - x_{k+1}| < |x_{k+1} - x_k| \quad \text{for every } k,$$

is contractive, or at least converges ([[def-contractive-sequence]],
[[thm-contractive-implies-cauchy]]).

The witness is $x_1 = 1$, $x_{k+1} = x_k + 1/x_k$. Its gaps are
$x_{k+1} - x_k = 1/x_k$, strictly decreasing because $(x_k)$ is strictly
increasing; and the sequence **diverges to $+\infty$**
([[def-divergence-to-infinity]]). Since a contractive sequence converges
([[thm-contractive-implies-cauchy]]), no contraction constant $c < 1$ can exist
for it: the ratios of consecutive gaps are all below $1$ but have no bound below
$1$ that works at every index.

**Indexing.** Written on $\mathbb{N}$ the sequence is $(g_j)$ with $g_0 = 1$ and
$g_{j+1} = g_j + 1/g_j$, and $x_k := g_{k-1}$ for $k \ge 1$ ([[def-sequence]]).

## Facts & Assumptions

**Given:** The set $A := \{u \in \mathbb{R} : u \ge 1\}$, the element $1 \in A$, and the function $f : A \to A$ with $f(u) = u + 1/u$, which lands in $A$ because $u \ge 1 > 0$ gives $1/u > 0$ and hence $f(u) > u \ge 1$; by the recursion theorem ([[thm-recursion]]) the unique $g : \mathbb{N} \to A$ with $g_0 = 1$ and $g_{j+1} = f(g_j)$; and the gaps $d_j := g_{j+1} - g_j$.

[L1] Recursion theorem ([[thm-recursion]]) and induction principle ([[thm-induction-principle]]).

[L2] Order and arithmetic: $1 > 0$, so $2 = 1 + 1 > 0$; sums of positives are positive; adding a constant preserves the order; a positive has a positive inverse, and $0 < a < b$ gives $0 < 1/b < 1/a$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-inverse-positive]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L3] Powers: $(u + v)^2 = u^2 + 2uv + v^2$ and $u \cdot (1/u) = 1$, so $(u + 1/u)^2 = u^2 + 2 + 1/u^2$; and for $a, b \ge 0$, $a < b$ exactly when $a^2 < b^2$ ([[def-integer-power]], [[lem-power-monotone]]).

[L4] Canonical naturals: positive for $n \ge 1$, and strictly increasing in the index ([[lem-of-naturals-positive]]); the Archimedean property ([[thm-of-archimedean]]).

[L5] Absolute value: $|t| = t$ for $t \ge 0$ and $|t| \ge t$ ([[lem-of-abs-value]]).

[L6] Monotone sequences, with consecutive comparisons sufficing ([[def-monotone-sequence]]).

[L7] Divergence to $+\infty$ ([[def-divergence-to-infinity]]); a convergent sequence is bounded ([[lem-convergent-implies-bounded]]); convergence ([[def-real-limit]]).

[L8] Contractive sequences and their convergence: a contractive sequence, with a constant $c$ satisfying $0 < c < 1$ at every index, converges ([[def-contractive-sequence]], [[thm-contractive-implies-cauchy]]).

## Counterexample

**Proof technique:** direct.

1.1 Every term satisfies $g_j \ge 1 > 0$, since $g$ takes values in $A$ by construction. [given, L2]

2.1 The sequence is strictly increasing: $d_j = g_{j+1} - g_j = 1/g_j > 0$, and consecutive comparisons give strict increase. [step 1.1, L2, L6]

2.2 By induction, $(g_j)^2 \ge 1 + 2j$ for every $j$, where $j$ denotes the canonical natural. Base: $(g_0)^2 = 1 = 1 + 2\cdot 0$. Step: $(g_{j+1})^2 = (g_j + 1/g_j)^2 = (g_j)^2 + 2 + 1/(g_j)^2 > (g_j)^2 + 2 \ge (1 + 2j) + 2 = 1 + 2(j+1)$. [step 1.1, L1, L2, L3, L4]

3.1 The gaps are strictly decreasing: $0 < g_j < g_{j+1}$ gives $0 < 1/g_{j+1} < 1/g_j$, that is $0 < d_{j+1} < d_j$; and $|d_{j+1}| < |d_j|$ since both are positive. [step 1.1, step 2.1, L2, L5]

3.2 $(g_j)$ diverges to $+\infty$. Let $M \in \mathbb{R}$ and put $M' := |M| \ge M$, so $M' \ge 0$. By [L4] fix a natural $n \ge 1$ with $(M')^2 < n$. Then $(g_n)^2 \ge 1 + 2n > n > (M')^2$, and since $g_n \ge 0$ and $M' \ge 0$ this gives $g_n > M' \ge M$; for every $k \ge n$ strict increase gives $g_k \ge g_n > M$. [step 2.1, step 2.2, L3, L4, L5, L7]

4.1 $(g_j)$ does not converge: a convergent sequence is bounded, whereas step 3.2 exhibits terms above every real. [step 3.2, L7]

5.1 No $c$ with $0 < c < 1$ is a contraction constant for $(g_j)$: if one were, the sequence would be contractive and would converge, contradicting step 4.1. [step 4.1, L8]

6.1 So $(g_j)$, that is $(x_k)$, has strictly decreasing consecutive gaps by step 3.1, diverges to $+\infty$ by step 3.2, and admits no uniform $c < 1$ by step 5.1: strictly decreasing gaps neither make a sequence contractive nor make it converge. [step 3.1, step 3.2, step 5.1, L8] ∎

## Remarks

- **The gaps are not merely decreasing, they are null.** Since $d_j = 1/g_j$ and
  $g_j \to +\infty$, for any real $\varepsilon > 0$ the terms eventually exceed
  $1/\varepsilon$, so $0 < d_j < \varepsilon$ eventually
  ([[lem-of-inverse-positive]]). So this sequence is also a witness for
  [[fs-consecutive-differences-null-implies-cauchy]], alongside $\sqrt k$; the
  two are close relatives, since $(g_j)^2 \ge 1 + 2j$ says $g_j$ grows at least
  like $\sqrt{2j}$.

- **What the uniform constant is really asking for.** The ratio of consecutive
  gaps here is $d_{j+1}/d_j = g_j/g_{j+1}$, which is below $1$ at every index and
  approaches $1$ as $j$ grows. A contraction constant would have to sit strictly
  between all of those ratios and $1$, and there is no room: the supremum of the
  ratios is $1$ itself. This is the precise sense in which
  [[def-contractive-sequence]] asks for more than "each gap smaller than the
  last".

- **The comparison with a genuine contraction.** In
  [[ex-contractive-sequence-fixed-point]] the ratio is exactly $1/3$ at every
  index, so the constant exists and is optimal, and the error bound of
  [[thm-contractive-implies-cauchy]] applies. The difference between the two
  examples is not the speed at which the gaps shrink at any given index but
  whether the shrinking is uniform.

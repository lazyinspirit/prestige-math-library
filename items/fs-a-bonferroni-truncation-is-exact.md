---
id: fs-a-bonferroni-truncation-is-exact
kind: false-statement
title: "FALSE: truncating the sieve at a fixed depth of at least two gives the exact size of the union"
status: published
origin: session
deps: [thm-the-bonferroni-inequalities, def-a-sieve-family-and-its-intersections,
       def-finite-cardinality, def-canonical-natural, def-sum-over-a-finite-index-set,
       def-integer-power, def-binomial-coefficient, def-ordered-field, def-field,
       def-finite-sum, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Inclusion-exclusion principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Inclusion%E2%80%93exclusion_principle"
    - title: "Boole's inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boole%27s_inequality"
pipeline_run: null
---

## Statement

**FALSE.** The statement

> for every sieve family $X$, $I$, $(A_i)_{i \in I}$ and every $m \ge 2$,
> $$\iota\Big\lvert\bigcup_{i \in I}A_i\Big\rvert = T_m,$$

with $S_j$ and $T_m$ as in [[thm-the-bonferroni-inequalities]].

The claim reads the Bonferroni inequalities as if a truncation at any depth
beyond the first were already exact. What is true is that the truncation is an
over-estimate at an odd depth and an under-estimate at an even depth, and that it
becomes exact only once the depth reaches $\lvert I\rvert$; the hypothesis
$m \ge 2$ does nothing to close that gap when $\lvert I\rvert$ exceeds $m$.

## Facts & Assumptions

**Given:** The ambient set $X := \{0\}$, the index set $I := 3 = \{0,1,2\}$, the family $A_0 := A_1 := A_2 := \{0\}$, and the truncation depth $m := 2$.

[L1] $\lvert\{0\}\rvert = 1$, $\iota(1) = 1$ and $\iota(3) = 3$ ([[def-finite-cardinality]], [[def-canonical-natural]]).

[L2] $\lvert [I]^{j}\rvert = \binom{3}{j}$, and $\binom{3}{1} = \binom{3}{2} = 3$, $\binom{3}{3} = 1$ ([[def-binomial-coefficient]], [[def-a-sieve-family-and-its-intersections]]).

[L3] $S_j = \sum_{J \in [I]^{j}}\iota\lvert A_J\rvert$ and $T_m = \sum_{i<m}(-1)^{i}S_{i+1}$; a constant real summand gives $\sum_{p \in S}\lambda = \iota(\lvert S\rvert)\lambda$ ([[thm-the-bonferroni-inequalities]], [[def-sum-over-a-finite-index-set]], clause (c), [[def-finite-sum]], [[lem-finite-sum-laws]]).

[L4] $(-1)^{0} = 1$ and $(-1)^{1} = -1$ ([[def-integer-power]]); $\mathbb{R}$ is an ordered field, so $1 \ne 0$ ([[def-ordered-field]], [[def-field]]).

[L5] Clause 3 of [[thm-the-bonferroni-inequalities]], which says $T_m = \iota\lvert\bigcup_{i \in I}A_i\rvert$ once $m \ge \lvert I\rvert$.

## Refutation

**Proof technique:** constructive.

1.1 The witness. With $X = \{0\}$ and $A_0 = A_1 = A_2 = \{0\}$, every $A_J$ with $J \subseteq I$ is $\{0\}$, and the union is $\{0\}$, so $\iota\lvert\bigcup_{i \in I}A_i\rvert = 1$ by [L1]. [given, construct]

2.1 The first two truncation levels. Each summand $\iota\lvert A_J\rvert$ is $1$ by step 1.1, so $S_1 = \iota\lvert [I]^{1}\rvert\cdot 1 = 3$ and $S_2 = \iota\lvert [I]^{2}\rvert\cdot 1 = 3$ by [L2] and the constant clause of [L3]; likewise $S_3 = 1$. [L1, L2, L3]

3.1 Therefore $T_2 = (-1)^{0}S_1 + (-1)^{1}S_2 = 3 - 3 = 0$, while $\iota\lvert\bigcup_{i \in I}A_i\rvert = 1$. Since $1 \ne 0$ by [L4], the displayed claim fails at this family and at $m = 2$, which satisfies its hypothesis $m \ge 2$. [step 1.1, step 2.1, L3, L4]

4.1 What is true here instead. Clause 2 of [[thm-the-bonferroni-inequalities]] gives $\iota\lvert\bigcup_i A_i\rvert \ge T_2$, and indeed $1 \ge 0$; and $T_3 = 3 - 3 + 1 = 1$, which is the exact value, in agreement with clause 3 of that theorem at $m = 3 = \lvert I\rvert$. So the truncation becomes exact one level later than the claim asserts, and the gap at depth $2$ is the whole content of the failure. [step 2.1, step 3.1, L3, L4, L5, discharge-construct] ∎

## Remarks

- **The claim is not repaired by raising the fixed depth.** For any fixed $m$ the same family with $I$ taken to have more than $m$ elements refutes it again, because the truncation is exact only from depth $\lvert I\rvert$ onwards. That is why the true statement fixes the depth relative to $\lvert I\rvert$ rather than absolutely.

- **The direction of the error is not accidental.** Depth $2$ is an even truncation, and an even truncation under-estimates, so the truncated value is below the truth rather than above it. A witness at depth $3$ would over-shoot instead.

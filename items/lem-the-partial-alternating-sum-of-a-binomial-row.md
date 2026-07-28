---
id: lem-the-partial-alternating-sum-of-a-binomial-row
kind: lemma
title: "$\\sum_{j<m+1}(-1)^{j}\\,\\iota\\binom{t}{j} = (-1)^{m}\\,\\iota\\binom{t-1}{m}$ for every $t \\ge 1$ and every $m$"
status: draft
origin: session
deps: [thm-pascals-rule, def-binomial-coefficient, def-canonical-natural, def-integer-power,
       def-finite-sum, lem-finite-sum-laws, lem-nat-finite-sum-laws-and-the-canonical-embedding,
       def-nat-finite-sum-and-product, thm-induction-principle, def-nat-order,
       def-ordered-field, def-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Binomial coefficient (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binomial_coefficient"
    - title: "Pascal's rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pascal%27s_rule"
    - title: "Inclusion-exclusion principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Inclusion%E2%80%93exclusion_principle"
pipeline_run: null
---

## Statement

Let $t \in \mathbb{N}$ with $t \ge 1$ and let $m \in \mathbb{N}$. Then, in
$\mathbb{R}$,

$$\sum_{j<m+1}(-1)^{j}\,\iota\binom{t}{j} \;=\; (-1)^{m}\,\iota\binom{t-1}{m},$$

where $\iota$ is the canonical natural ([[def-canonical-natural]]), the binomial
coefficients are the counts of [[def-binomial-coefficient]], and $t-1$ is the
truncated difference of [[def-nat-finite-sum-and-product]], which for $t \ge 1$
is the ordinary one, so that $(t-1) + 1 = t$.

**The hypothesis $t \ge 1$ is part of the statement.** At $t = 0$ and $m = 1$ the
left-hand side is $\iota\binom{0}{0} - \iota\binom{0}{1} = 1$, while the truncated
difference gives $t - 1 = 0$ and the right-hand side is
$-\iota\binom{0}{1} = 0$.

**Two readings worth recording.** At $m = 0$ both sides are $1$, since
$\binom{t}{0} = \binom{t-1}{0} = 1$. For $m \ge t$ both sides are $0$: the terms
of the left-hand side with $j > t$ vanish and the remaining sum is the full
alternating row sum of $t$, which vanishes because $t \ge 1$, while
$\binom{t-1}{m} = 0$ because $m > t-1$.

## Facts & Assumptions

**Given:** Naturals $t \ge 1$ and $m$; the abbreviation $s := t-1$, so that $s+1 = t$ ([[def-nat-finite-sum-and-product]], [[def-nat-order]]); the real finite sum of [[def-finite-sum]]; and integer powers ([[def-integer-power]]) in the ordered field $\mathbb{R}$ ([[def-ordered-field]], [[def-field]]).

[L1] Induction: a property holding at $0$ and inherited by successors holds at every natural ([[thm-induction-principle]]).

[L2] Recursion clauses of the real finite sum: $\sum_{j<0}u_j = 0$ and $\sum_{j<p+1}u_j = \sum_{j<p}u_j + u_p$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L3] Pascal's rule, with **no** restriction relating the two indices: $\binom{n+1}{k+1} = \binom{n}{k} + \binom{n}{k+1}$ for all $n, k \in \mathbb{N}$ ([[thm-pascals-rule]], clause 1).

[L4] $\binom{n}{0} = 1$ for every $n$ ([[def-binomial-coefficient]]); $\iota(1) = 1$ and $\iota$ is additive ([[lem-nat-finite-sum-laws-and-the-canonical-embedding]], clause 0, [[def-canonical-natural]]).

[L5] Powers of $-1$: $(-1)^{0} = 1$ and $(-1)^{p+1} = (-1)^{p}\cdot(-1) = -(-1)^{p}$ ([[def-integer-power]]).

## Proof

**Proof technique:** induction.

1.1 Fix $t \ge 1$ and write $s := t-1$, so that $s+1 = t$; the claim is proved by induction on $m$, for this fixed $t$. [given]

1.2 Base case $m = 0$. By [L2] the left-hand side is the single term $(-1)^{0}\iota\binom{t}{0}$, which is $1$ by [L4] and [L5]; and the right-hand side is $(-1)^{0}\iota\binom{s}{0} = 1$ for the same reason. [base, L2, L4, L5]

1.3 Inductive hypothesis: fix $m$ and assume $\sum_{j<m+1}(-1)^{j}\iota\binom{t}{j} = (-1)^{m}\iota\binom{s}{m}$. [ih]

1.4 Pascal's rule at $n = s$ and $k = m$, together with $s+1 = t$, gives $\binom{t}{m+1} = \binom{s}{m} + \binom{s}{m+1}$, hence $\iota\binom{t}{m+1} = \iota\binom{s}{m} + \iota\binom{s}{m+1}$ by the additivity of $\iota$. [L3, L4]

2.1 By the recursion clause of [L2] and the hypothesis of step 1.3, $\sum_{j<m+2}(-1)^{j}\iota\binom{t}{j} = (-1)^{m}\iota\binom{s}{m} + (-1)^{m+1}\iota\binom{t}{m+1}$. [step 1.3, L2]

3.1 Substituting step 1.4 into step 2.1 and using $(-1)^{m+1} = -(-1)^{m}$ from [L5]: $(-1)^{m}\iota\binom{s}{m} + (-1)^{m+1}\big(\iota\binom{s}{m} + \iota\binom{s}{m+1}\big) = (-1)^{m}\iota\binom{s}{m} - (-1)^{m}\iota\binom{s}{m} + (-1)^{m+1}\iota\binom{s}{m+1} = (-1)^{m+1}\iota\binom{s}{m+1}$. [step 1.4, step 2.1, L5, algebra]

4.1 So the claim holds at $m+1$ whenever it holds at $m$, and it holds at $m = 0$; by [L1] it holds for every $m \in \mathbb{N}$, for the fixed $t \ge 1$, which was arbitrary. [step 1.2, step 1.3, step 3.1, L1, discharge-induction] ∎

## Remarks

- **Where $t \ge 1$ is spent.** In exactly one place: the identity $s+1 = t$, which is what lets Pascal's rule be applied with upper index $s+1$. Under the truncated difference the equation $s+1 = t$ fails at $t = 0$, where $s = 0$ and $s+1 = 1$, and the statement fails there too.

- **Why not the full alternating row sum.** The published corollary of the binomial theorem gives the sum over the whole row, and only for $t \ge 1$. A truncation of that row is a different quantity, and the identity above is what says how far a truncation misses: by exactly one binomial coefficient of the row above, with the sign of the last term kept.

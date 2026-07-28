---
id: ex-functions-injections-and-subsets-of-a-small-set
kind: example
title: "All $8$ functions $3 \\to 2$, the $0$ injections $3 \\to 2$, and the $8$ subsets of a $3$-element set"
status: published
origin: session
deps: [thm-cardinality-of-a-set-of-functions, thm-number-of-injections,
       cor-cardinality-of-the-power-set, cor-binomial-theorem-consequences,
       def-binomial-coefficient, lem-pigeonhole, def-nat-power, def-finite-cardinality,
       def-factorial-and-falling-factorial, thm-pascals-rule]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Power set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Power_set"
    - title: "Pigeonhole principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pigeonhole_principle"
    - title: "Binomial coefficient (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binomial_coefficient"
pipeline_run: null
---

## Example

Every count here is small enough to list in full, so nothing is asserted by
inspection. Take $3 = \{0,1,2\}$ and $2 = \{0,1\}$.

- There are $2^{3} = 8$ functions $3 \to 2$, and all eight are listed below as
  triples $(f(0),f(1),f(2))$.
- **None** of them is injective, and the predicted count is
  $2^{\underline{3}} = 2\cdot 1\cdot 0 = 0$.
- There are $2^{3} = 8$ subsets of a three-element set, and grouping them by size
  gives $1+3+3+1 = 8$.

## Facts & Assumptions

**Given:** The sets $3 = \{0,1,2\}$ and $2 = \{0,1\}$, and $A := 3$.

[L1] $\lvert X^{Y}\rvert = \lvert X\rvert^{\lvert Y\rvert}$ ([[thm-cardinality-of-a-set-of-functions]], [[def-nat-power]], [[def-finite-cardinality]]).

[L2] The number of injections of a $k$-element set into an $n$-element set is $n^{\underline{k}}$, with $n^{\underline{0}} = 1$ and $n^{\underline{\sigma(k)}} = n^{\underline{k}}(n-k)$ ([[thm-number-of-injections]], [[def-factorial-and-falling-factorial]]).

[L3] Pigeonhole: there is no injection $\sigma(n) \to n$, and none $p \to q$ when $q < p$ ([[lem-pigeonhole]], claims 1 and 2).

[L4] $\lvert\mathcal{P}(A)\rvert = 2^{\lvert A\rvert}$ ([[cor-cardinality-of-the-power-set]]), $\lvert [A]^{k}\rvert = \binom{\lvert A\rvert}{k}$ ([[def-binomial-coefficient]]), and $\sum_{k<n+1}\binom{n}{k} = 2^{n}$ ([[cor-binomial-theorem-consequences]], clause 1).

[L5] Pascal's rule and the boundary values $\binom{n}{0} = \binom{n}{n} = 1$ ([[thm-pascals-rule]], [[def-binomial-coefficient]]).

## Verification

**Proof technique:** direct.

1.1 The eight functions $3 \to 2$, written as the triples of their values: $(0,0,0)$, $(0,0,1)$, $(0,1,0)$, $(0,1,1)$, $(1,0,0)$, $(1,0,1)$, $(1,1,0)$, $(1,1,1)$. The list is exhaustive because a function is determined by its three values and each value is $0$ or $1$, and it has no repetitions. There are eight, and [L1] predicts $\lvert 2\rvert^{\lvert 3\rvert} = 2^{3} = 2\cdot 2\cdot 2 = 8$. [given, L1]

2.1 None of the eight is injective: in every triple above two of the three entries are equal, so two distinct elements of $3$ receive the same value. This agrees with [L2], which predicts $2^{\underline{3}} = 2^{\underline{2}}\cdot(2-2) = 2^{\underline{2}}\cdot 0 = 0$ injections, and with [L3], which forbids an injection $3 \to 2$ outright since $2 < 3$. [step 1.1, L2, L3]

2.2 The eight subsets of $A = 3$, grouped by cardinality: $\varnothing$; then $\{0\}$, $\{1\}$, $\{2\}$; then $\{0,1\}$, $\{0,2\}$, $\{1,2\}$; then $\{0,1,2\}$. So $\lvert [A]^{0}\rvert = 1$, $\lvert [A]^{1}\rvert = 3$, $\lvert [A]^{2}\rvert = 3$, $\lvert [A]^{3}\rvert = 1$, that is $\binom{3}{0} = 1$, $\binom{3}{1} = 3$, $\binom{3}{2} = 3$, $\binom{3}{3} = 1$, which is row $3$ of Pascal's triangle as [L5] gives it. [step 1.1, L4, L5]

3.1 The two ways of counting $\mathcal{P}(A)$ agree: directly, the list in step 2.2 has $1+3+3+1 = 8$ entries; by [L4], $\lvert\mathcal{P}(A)\rvert = 2^{3} = 8$ and $\sum_{k<4}\binom{3}{k} = 2^{3}$. This is clause 1 of [L4] in its smallest interesting case. [step 2.1, step 2.2, L4] ∎

## Remarks

- **The zero count is the interesting one.** $2^{\underline{3}} = 0$ because the
  falling factorial acquires the factor $2-2 = 0$ at the third step, which is the
  arithmetic shadow of the pigeonhole principle. Both routes are checked above
  against the same explicit list.

- **The three subsets of size $2$ and the three of size $1$** are matched by the
  complementation bijection of [[thm-binomial-closed-formula]]:
  $\{0\} \leftrightarrow \{1,2\}$, $\{1\} \leftrightarrow \{0,2\}$,
  $\{2\} \leftrightarrow \{0,1\}$.

---
id: cex-an-averaging-bound-that-is-not-attained
kind: counterexample
title: "A relation whose row fibres all differ from the average size, so the averaging principle gives a bound that no fibre meets exactly"
status: draft
origin: session
deps: [cor-the-averaging-principle, thm-double-counting, def-a-finite-incidence-relation-and-its-fibres,
       def-finite-cardinality, def-canonical-natural, def-sum-over-a-finite-index-set,
       def-ordered-field, def-field, lem-nat-finite-sum-laws-and-the-canonical-embedding,
       def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
cx_machine_verified: false
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Double counting (proof technique) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Double_counting_(proof_technique)"
    - title: "Pigeonhole principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pigeonhole_principle"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** that the averaging principle produces a row fibre of exactly
the average size, that is, that for every relation $R \subseteq X \times Y$
between finite sets with $X \ne \varnothing$ there is $x \in X$ with

$$\iota(\lvert R_x\rvert) \;=\; \mu \;:=\; \frac{\iota(\lvert R\rvert)}{\iota(\lvert X\rvert)} .$$

What [[cor-the-averaging-principle]] asserts is only that some row fibre is at
least $\mu$ and some row fibre is at most $\mu$; equality is not claimed, and it
can fail, because $\mu$ is a real number while a fibre size is a natural number.

The witness is $X := 2 = \{0,1\}$, $Y := 3 = \{0,1,2\}$ and

$$R := \{\,(0,0),\ (1,0),\ (1,1)\,\} \subseteq X \times Y .$$

Here $\lvert R\rvert = 3$ and $\lvert X\rvert = 2$, so $\mu = 3/2$, while the row
fibres have sizes $1$ and $2$.

## Facts & Assumptions

**Given:** $X = 2$, $Y = 3$, $R = \{(0,0),(1,0),(1,1)\}$, and the canonical natural $\iota$ ([[def-canonical-natural]]).

[L1] Row and column fibres, and their finiteness ([[def-a-finite-incidence-relation-and-its-fibres]], clause (a)).

[L2] A listed set with distinct entries has as many elements as entries ([[def-finite-cardinality]], clauses (a) and (c), [[def-injection-surjection-bijection]]).

[L3] Double counting: $\sum_{x \in X}\lvert R_x\rvert = \lvert R\rvert = \sum_{y \in Y}\lvert R^{y}\rvert$ ([[thm-double-counting]], [[def-sum-over-a-finite-index-set]]).

[L4] The averaging principle ([[cor-the-averaging-principle]]).

[L5] $\mathbb{R}$ is an ordered field, so $\mu$ is defined once $\iota(\lvert X\rvert) \ne 0$, and $\iota$ is strictly increasing with $\iota(0) = 0$, $\iota(1) = 1$, $\iota(2) = 1+1$, $\iota(3) = 1+1+1$ ([[def-ordered-field]], [[def-field]], [[lem-nat-finite-sum-laws-and-the-canonical-embedding]], clauses 0 and 7).

## Counterexample

**Proof technique:** constructive.

1.1 The fibres. $R_0 = \{0\}$ and $R_1 = \{0,1\}$, so $\lvert R_0\rvert = 1$ and $\lvert R_1\rvert = 2$ by [L1] and [L2]; and $\lvert R\rvert = 3$, the three listed pairs being distinct. [given, L1, L2, construct]

1.2 The average. $\lvert X\rvert = 2 \ne 0$, so $\mu = \iota(3)/\iota(2)$ is defined by [L5]; and $\iota(2)\,\iota(1) = \iota(2) < \iota(3) < \iota(2) + \iota(2) = \iota(2)\,\iota(2)$, so dividing by the positive $\iota(2)$ gives $\iota(1) < \mu < \iota(2)$ by [L5]. [given, L2, L5]

1.3 The column fibres check the count. $R^{0} = \{0,1\}$, $R^{1} = \{1\}$ and $R^{2} = \varnothing$, of sizes $2$, $1$ and $0$, and $2+1+0 = 3 = \lvert R\rvert$, in agreement with [L3]. [given, L1, L2, L3]

2.1 No row fibre has size $\mu$. The values $\iota(\lvert R_0\rvert) = \iota(1)$ and $\iota(\lvert R_1\rvert) = \iota(2)$ are the only candidates by step 1.1, and step 1.2 places $\mu$ strictly between them. So the refuted claim fails on this relation. [step 1.1, step 1.2, L5]

3.1 What [L4] does give here, and it is sharp as stated: $x_{+} := 1$ has $\iota(\lvert R_{1}\rvert) = \iota(2) > \mu$, and $x_{-} := 0$ has $\iota(\lvert R_{0}\rvert) = \iota(1) < \mu$. Both inequalities hold strictly, and neither can be improved to an equality by another choice of $x$, since step 1.1 lists all the row fibres. [step 1.1, step 1.2, step 2.1, L4, discharge-construct] ∎

## Remarks

- **Why equality was never available.** $\mu$ is a quotient of two natural numbers formed in $\mathbb{R}$, and nothing forces it to be the canonical natural of a natural number. Here $\lvert X\rvert$ does not divide $\lvert R\rvert$ in any sense the page supplies, and the average falls strictly between two consecutive fibre sizes.

- **The two elements produced by the averaging principle are distinct here**, and in general they need not be: if every fibre has the same size then a single $x$ serves as both. What the witness shows is only that neither inequality can be strengthened to an equality in general.

---
id: fs-cardinality-of-a-union-adds-without-disjointness
kind: false-statement
title: "FALSE: $\\lvert A \\cup B\\rvert = \\lvert A\\rvert + \\lvert B\\rvert$ for all finite $A$ and $B$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-sum-rule, def-finite-cardinality, def-injection-surjection-bijection,
       def-natural-numbers, lem-nat-trichotomy]
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
    - title: "Rule of sum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rule_of_sum"
    - title: "Inclusion-exclusion principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Inclusion%E2%80%93exclusion_principle"
    - title: "Cardinality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinality"
    - title: "J. Sylvestre, Elementary Foundations 12.02, Properties of finite sets and their cardinality (LibreTexts)"
      url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Elementary_Foundations:_An_Introduction_to_Topics_in_Discrete_Mathematics_(Sylvestre)/12:_Cardinality/12.02:_Properties_of_finite_sets_and_their_cardinality"
pipeline_run: null
---

## Statement

**FALSE.** The statement

> $\lvert A \cup B\rvert = \lvert A\rvert + \lvert B\rvert$

for all finite sets $A$ and $B$.

This is [[thm-sum-rule]] clause 1 with the hypothesis $A \cap B = \varnothing$
deleted. It is the single most common way a count goes wrong, and the smallest
witness is as small as a witness can be.

## Facts & Assumptions

**Given:** The sets $\{0\}$, $\{0,1\}$ and $\{1,2\}$, with $0$, $1$, $2$ the von Neumann naturals ([[def-natural-numbers]]).

[L1] $\lvert n\rvert = n$ for a natural $n$, and a bijection transports cardinality ([[def-finite-cardinality]], [[def-injection-surjection-bijection]]).

[L2] $\lvert A \cup B\rvert = \lvert A\rvert + \lvert B\rvert$ **when $A \cap B = \varnothing$** ([[thm-sum-rule]], clause 1).

[L3] Distinct naturals are distinct, so $1 \ne 2$ and $3 \ne 4$ ([[lem-nat-trichotomy]]).

## Refutation

**Proof technique:** direct.

1.1 The smallest witness. Take $A = B = \{0\}$. Then $A \cup B = \{0\}$, which is $1$ as a von Neumann natural, so $\lvert A \cup B\rvert = 1$ by [L1]; while $\lvert A\rvert + \lvert B\rvert = 1 + 1 = 2$. Since $1 \ne 2$ by [L3], the displayed statement fails. [given, L1, L3]

2.1 A witness with partial overlap, to show that the failure is not an artefact of taking $A$ and $B$ equal. Take $A = \{0,1\} = 2$ and $B = \{1,2\}$. Then $\lvert A\rvert = 2$ by [L1], and $\lvert B\rvert = 2$ because $0 \mapsto 1$, $1 \mapsto 2$ is a bijection of $2$ onto $B$. But $A \cup B = \{0,1,2\} = 3$, so $\lvert A\cup B\rvert = 3$, whereas $\lvert A\rvert + \lvert B\rvert = 4$. Again the two differ. [step 1.1, L1, L3]

3.1 The missing hypothesis is disjointness. [L2] proves the identity whenever $A \cap B = \varnothing$, and in step 1.1 the intersection is $\{0\}$ while in step 2.1 it is $\{1\}$; in each case the excess of the right-hand side over the left is the cardinality of that intersection. [step 1.1, step 2.1, L2] ∎

## Remarks

- **What the general correction is.** Adding the counts and then subtracting the
  count of the overlap is the two-set case of inclusion and exclusion. That
  principle is the next page of this track and is not available here, so no
  formula for the general case is stated: what is established above is only that
  the identity as displayed is false, and where its hypothesis went.

- **The same failure at the level of a family** is exhibited concretely in
  [[cex-a-count-that-double-counts]], where twelve subsets are counted as
  sixteen.

---
id: fs-inclusion-and-exclusion-for-three-sets-without-the-triple-term
kind: false-statement
title: "FALSE: $\\lvert A \\cup B \\cup C\\rvert = \\lvert A\\rvert + \\lvert B\\rvert + \\lvert C\\rvert - \\lvert A \\cap B\\rvert - \\lvert A \\cap C\\rvert - \\lvert B \\cap C\\rvert$"
status: published
origin: session
deps: [thm-inclusion-exclusion, def-a-sieve-family-and-its-intersections,
       def-finite-cardinality, def-canonical-natural, def-sum-over-a-finite-index-set,
       def-integer-power, def-ordered-field, def-field]
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
    - title: "Cardinality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinality"
pipeline_run: null
---

## Statement

**FALSE.** The statement

> for all finite sets $A$, $B$, $C$, in $\mathbb{R}$,
> $$\iota\lvert A \cup B \cup C\rvert = \iota\lvert A\rvert + \iota\lvert B\rvert + \iota\lvert C\rvert - \iota\lvert A \cap B\rvert - \iota\lvert A \cap C\rvert - \iota\lvert B \cap C\rvert .$$

This is the sieve identity of [[thm-inclusion-exclusion]] for a family of three
sets with the term at the triple intersection deleted. The identity is correct
only when the triple term $+\,\iota\lvert A \cap B \cap C\rvert$ is present, and
the claim above is refuted by a family in which that term is not $0$.

## Facts & Assumptions

**Given:** The one-element set $A := B := C := \{0\}$, taken inside the ambient set $X := \{0\}$, and the canonical natural $\iota$ ([[def-canonical-natural]]).

[L1] $\lvert\{0\}\rvert = 1$ and $\iota(1) = 1$ ([[def-finite-cardinality]], clause (a), [[def-canonical-natural]]).

[L2] The sieve identity for a finite family of subsets of a finite ambient set, in the form $\iota\lvert\bigcup_{i \in I}A_i\rvert = \sum_{J \ne \varnothing}(-1)^{\lvert J\rvert+1}\iota\lvert A_J\rvert$ ([[thm-inclusion-exclusion]], clause 1, [[def-a-sieve-family-and-its-intersections]], [[def-sum-over-a-finite-index-set]]).

[L3] $(-1)^{0} = 1$ and $(-1)^{p+1} = -(-1)^{p}$, so $(-1)^{2} = 1$, $(-1)^{3} = -1$ and $(-1)^{4} = 1$ ([[def-integer-power]]).

[L4] $\mathbb{R}$ is an ordered field, so $1 \ne 0$ and its arithmetic is available ([[def-ordered-field]], [[def-field]]).

## Refutation

**Proof technique:** constructive.

1.1 Take $I := 3 = \{0,1,2\}$, $X := \{0\}$ and $A_0 := A_1 := A_2 := \{0\}$, so that the family of the displayed claim is $A = A_0$, $B = A_1$, $C = A_2$. Every intersection of a nonempty subfamily is $\{0\}$, and the union is $\{0\}$. [given, construct]

1.2 Every set occurring in the computation is $\{0\}$, so by [L1] each of $\iota\lvert A\rvert$, $\iota\lvert B\rvert$, $\iota\lvert C\rvert$, $\iota\lvert A \cap B\rvert$, $\iota\lvert A \cap C\rvert$, $\iota\lvert B \cap C\rvert$, $\iota\lvert A \cap B \cap C\rvert$ and $\iota\lvert A \cup B \cup C\rvert$ equals $1$. [L1]

2.1 The right-hand side of the displayed claim is therefore $1 + 1 + 1 - 1 - 1 - 1 = 0$, while its left-hand side is $1$. Since $1 \ne 0$ in $\mathbb{R}$ by [L4], the claim is false at this family. [step 1.1, step 1.2, L4]

3.1 The true identity at the same family. By [L2] the sieve sum has the three singleton terms with sign $(-1)^{2} = 1$, the three two-element terms with sign $(-1)^{3} = -1$ and the one three-element term with sign $(-1)^{4} = 1$, so it reads $1+1+1-1-1-1+1 = 1$, which is $\iota\lvert A \cup B \cup C\rvert$. The deleted triple term is exactly the discrepancy found in step 2.1. [step 1.2, step 2.1, L2, L3, discharge-construct] ∎

## Remarks

- **The claim is the sieve truncated at depth $2$**, and the Bonferroni inequalities say what such a truncation does in general: an even truncation under-estimates. Here it under-estimates by $1$, and the claim asserts equality, so the failure is in the direction the inequality predicts.

- **The witness is as small as it can be.** Three sets are needed for a triple intersection to exist, and the discrepancy is the size of that intersection, so any family with a nonempty triple intersection refutes the claim. Taking all three sets equal to a single point makes every cardinality in the computation equal to $1$.

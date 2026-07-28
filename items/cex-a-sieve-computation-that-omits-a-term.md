---
id: cex-a-sieve-computation-that-omits-a-term
kind: counterexample
title: "A three-set count that drops the triple intersection and returns the wrong answer"
status: draft
origin: session
deps: [fs-inclusion-and-exclusion-for-three-sets-without-the-triple-term, thm-inclusion-exclusion,
       def-a-sieve-family-and-its-intersections, def-finite-cardinality, def-canonical-natural,
       def-sum-over-a-finite-index-set, def-integer-power, def-injection-surjection-bijection,
       lem-nat-finite-sum-laws-and-the-canonical-embedding, def-ordered-field, def-field]
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
    - title: "Inclusion-exclusion principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Inclusion%E2%80%93exclusion_principle"
    - title: "Cardinality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinality"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the sieve identity for three sets with its triple term deleted,
that is [[fs-inclusion-and-exclusion-for-three-sets-without-the-triple-term]]:

$$\iota\lvert A \cup B \cup C\rvert = \iota\lvert A\rvert + \iota\lvert B\rvert + \iota\lvert C\rvert - \iota\lvert A \cap B\rvert - \iota\lvert A \cap C\rvert - \iota\lvert B \cap C\rvert .$$

The witness is a family of overlapping but unequal sets, so that no cardinality in
the computation is degenerate. Inside $X := 5 = \{0,1,2,3,4\}$ take

$$A := \{0,1,2\}, \qquad B := \{1,2,3\}, \qquad C := \{2,3,4\} .$$

The truncated right-hand side returns $4$, while the union has $5$ elements; the
missing triple term is $\lvert A \cap B \cap C\rvert = 1$, and restoring it gives
$5$.

## Facts & Assumptions

**Given:** $X = 5$, $A = \{0,1,2\}$, $B = \{1,2,3\}$, $C = \{2,3,4\}$, and the canonical natural $\iota$ ([[def-canonical-natural]]).

[L1] A listed set with distinct entries has as many elements as entries ([[def-finite-cardinality]], clauses (a) and (c), [[def-injection-surjection-bijection]]).

[L2] The sieve identity for a sieve family with ambient set $X$ and index set $I = 3$, whose terms carry the sign $(-1)^{\lvert J\rvert+1}$ ([[thm-inclusion-exclusion]], clause 1, [[def-a-sieve-family-and-its-intersections]], [[def-sum-over-a-finite-index-set]], [[def-integer-power]]).

[L3] $\iota$ is additive and injective, so the arithmetic below may be carried out on natural numbers and read in $\mathbb{R}$, where subtraction is available ([[lem-nat-finite-sum-laws-and-the-canonical-embedding]], clauses 0 and 7, [[def-ordered-field]], [[def-field]]).

## Counterexample

**Proof technique:** constructive.

1.1 The three sets are subsets of $X$ with $\lvert A\rvert = \lvert B\rvert = \lvert C\rvert = 3$ by [L1], their entry lists being strictly increasing and so having distinct entries. [given, L1, construct]

1.2 The intersections. Comparing the listed sets entry by entry gives $A \cap B = \{1,2\}$, $A \cap C = \{2\}$, $B \cap C = \{2,3\}$ and $A \cap B \cap C = \{2\}$, of sizes $2$, $1$, $2$ and $1$ by [L1]. [given, L1]

1.3 The union. Every element of $X$ lies in one of the three sets: $0,1,2 \in A$, $3 \in B$ and $4 \in C$. So $A \cup B \cup C = X$, of size $5$ by [L1]. [given, L1]

2.1 The truncated right-hand side. By steps 1.1 and 1.2 it is $3 + 3 + 3 - 2 - 1 - 2 = 4$, while the left-hand side is $5$ by step 1.3. Since $4 \ne 5$ in $\mathbb{R}$ by [L3], the refuted claim fails on this family. [step 1.1, step 1.2, step 1.3, L3]

3.1 The correct computation. By [L2] the sieve sum carries the triple term with sign $(-1)^{4} = +1$, so it reads $3+3+3-2-1-2+1 = 5$, which is $\iota\lvert A \cup B \cup C\rvert$ by step 1.3. The discrepancy of step 2.1 is exactly $\lvert A \cap B \cap C\rvert = 1$, the element $2$ lying in all three sets. [step 1.2, step 2.1, L2, L3, discharge-construct] ∎

## Remarks

- **Every set in the witness is a proper subset of $X$ and no two of them are equal**, so the failure is not an artefact of a degenerate family. What makes the truncated formula wrong is only that the triple intersection is nonempty.

- **The direction of the error.** The truncation at depth $2$ under-counts, by exactly the size of the triple intersection. That is the direction the Bonferroni inequalities predict for an even truncation, and the size of the gap here is the single term that the next level of the sieve would add.

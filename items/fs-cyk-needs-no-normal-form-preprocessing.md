---
id: fs-cyk-needs-no-normal-form-preprocessing
kind: false-statement
title: "FALSE: CYK needs no normal-form preprocessing"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-cyk-table-and-span-variable, thm-cyk-membership-algorithm, thm-chomsky-normal-form]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Alfred V. Aho, COMS W3261 CS Theory, Lecture 10"
      url: "https://www.cs.columbia.edu/~aho/cs3261/Lectures/L10-PL_for_CFLs.html"
---

## Statement

**False claim:** the CYK algorithm can be applied directly to any context-free
grammar without first converting it to a suitable normal form.

## Facts & Assumptions

**Given:** The grammar
$$ S\to aSb\mid ab. $$

[A1] The statement refuted is: the CYK algorithm can be applied directly to any context-free grammar without first converting it to a suitable normal form.

[L1] By [[def-cyk-table-and-span-variable]], the CYK table recurrence uses only productions of the forms $A\to a$ and $A\to BC$.

[L2] By [[thm-cyk-membership-algorithm]], the CYK algorithm is proved correct exactly for grammars in the required CNF shape.

[L3] By [[thm-chomsky-normal-form]], an arbitrary context-free grammar can first be converted to an equivalent CNF grammar.

## Refutation

**Proof technique:** direct.

1.1 In the displayed grammar, the production $S\to aSb$ has length three and mixes terminals with a variable, while $S\to ab$ has two terminals on the right-hand side. Neither production has one of the two forms listed in [L1]. [L1, given]

2.1 Therefore the literal CYK recurrence does not know how to place $S$ into any table cell directly from those productions, so the proof of correctness in [L2] does not apply. One must first normalize the grammar as in [L3], or else modify the algorithm itself. [L2, L3, step 1.1]

3.1 This contradicts [A1]. So CYK does require the normal-form preprocessing built into its proof. [A1, step 2.1] ∎

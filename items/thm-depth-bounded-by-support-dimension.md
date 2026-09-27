---
id: thm-depth-bounded-by-support-dimension
title: Depth is bounded by support dimension
kind: theorem
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-depth-with-respect-to-an-ideal, cor-depth-of-a-finite-local-module-at-most-its-dimension]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-01-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). For every nonzero finite module $M$ over a Noetherian local ring $R$,
$$0\le\operatorname{depth}_R(M)\le\dim\operatorname{Supp}_R(M).$$
The nonzero hypothesis is essential for this formulation: under the adopted
convention $\operatorname{depth}_R(0)=+\infty$, whereas the empty support has
no nonnegative Krull dimension.

## Facts & Assumptions

**Given:** The Axiom of Choice; $M$ is nonzero and finite over the Noetherian local ring $R$.

[L1] Depth is the supremum of lengths of regular sequences in the maximal ideal, including the empty sequence ([[def-depth-with-respect-to-an-ideal]]).

[L2] Under the assumed AC, the depth of a nonzero finite local module is at most its support dimension ([[cor-depth-of-a-finite-local-module-at-most-its-dimension]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], depth is a supremum of a set containing zero, so it is nonnegative. The AC-qualified supplier [L2] gives the upper bound. [L1, L2, given]

2.1 These give the displayed double inequality. The last sentence follows directly from the separately declared zero-module depth convention. [step 1.1, algebra] ∎

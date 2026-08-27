---
id: fs-an-arbitrary-supremum-of-measurable-functions-need-not-be-measurable
kind: false-statement
title: "FALSE: the supremum of an arbitrary family of measurable functions is always measurable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-indicator-function-is-measurable-iff-its-set-is-measurable, thm-a-vitali-set-is-not-lebesgue-measurable, thm-vitali-sets-exist-under-choice-on-r-over-q]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration and Real Analysis, Exercise 29"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement

**False claim.** The pointwise supremum of an arbitrary family of measurable
functions is measurable. The correct theorem on this page is only the
**sequential** version.

## Facts & Assumptions

**Given:** The Axiom of Choice, the Lebesgue measurable-space structure on
$[0,1]$, a Vitali set $V \subseteq [0,1]$, and the family
$\{\mathbf{1}_{\{t\}} : t \in V\}$ of indicator functions on $[0,1]$.

[L1] Assuming choice, Vitali sets exist and are not Lebesgue measurable.
([[thm-vitali-sets-exist-under-choice-on-r-over-q]],
[[thm-a-vitali-set-is-not-lebesgue-measurable]])

[L2] The indicator of a measurable set is measurable.
([[prop-indicator-function-is-measurable-iff-its-set-is-measurable]])

## Refutation

**Proof technique:** direct.

1.1 Each singleton $\{t\}$ is measurable, so [L2] makes every [given, L2]
$\mathbf{1}_{\{t\}}$ measurable. [given, L2]

2.1 The pointwise supremum of the family is [step 1.1, L1, L2]

$$\sup_{t \in V} \mathbf{1}_{\{t\}} = \mathbf{1}_V.$$

Since $V$ is not measurable by [L1], the function $\mathbf{1}_V$ is not
measurable. So an uncountable supremum of measurable functions can fail to be
measurable. [step 1.1, L1, L2] ∎

---
id: cex-an-uncountable-supremum-of-indicators-need-not-be-measurable
kind: counterexample
title: "An uncountable supremum of measurable indicators can be nonmeasurable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-indicator-function-is-measurable-iff-its-set-is-measurable, thm-a-vitali-set-is-not-lebesgue-measurable, thm-vitali-sets-exist-under-choice-on-r-over-q]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration and Real Analysis, Exercise 29"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement refuted

That the pointwise supremum of an arbitrary family of measurable functions must
remain measurable.

## Facts & Assumptions

**Given:** The Axiom of Choice, the Lebesgue measurable space
$([0,1],\mathcal L(\mathbb R)|_{[0,1]})$, a Vitali set
$V \subseteq [0,1]$, and the family
$\{\mathbf{1}_{\{t\}} : t \in V\}$ on that common domain.

[L1] Assuming the Axiom of Choice, Vitali sets exist and are not Lebesgue measurable.
([[thm-vitali-sets-exist-under-choice-on-r-over-q]],
[[thm-a-vitali-set-is-not-lebesgue-measurable]])

[L2] The indicator of a measurable set is measurable.
([[prop-indicator-function-is-measurable-iff-its-set-is-measurable]])

## Counterexample

**Proof technique:** direct.

1.1 Every singleton $\{t\}$ belongs to the trace Lebesgue sigma-algebra, so [L2] makes each $\mathbf{1}_{\{t\}}$ measurable. [given, L2]

2.1 Their pointwise supremum is $\mathbf{1}_V$. If $V$ belonged to the trace Lebesgue sigma-algebra, then $V=E\cap[0,1]$ for some Lebesgue measurable $E\subseteq\mathbb R$, making $V$ Lebesgue measurable in $\mathbb R$, contrary to [L1]. Thus [L2] makes $\mathbf{1}_V$ nonmeasurable, so the arbitrary-family version fails. [step 1.1, L1, L2] ∎

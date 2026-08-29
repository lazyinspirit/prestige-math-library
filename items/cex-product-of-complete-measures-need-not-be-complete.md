---
id: cex-product-of-complete-measures-need-not-be-complete
kind: counterexample
title: "A nonmeasurable subset of a null line shows that the product of complete measures need not be complete"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-sections-of-product-measurable-sets-are-measurable, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, prop-countable-subsets-of-rn-are-lebesgue-null, thm-lebesgue-measure-is-a-complete-measure, def-countable-choice]
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Example 5.20"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement refuted

Assuming the Axiom of Countable Choice, the product of two complete measure
spaces is always complete.

## Counterexample

**Proof technique:** direct.

Let $N \subseteq \mathbb R$ be a non-Lebesgue-measurable set, and consider
$$E:=\{0\}\times N \subseteq \mathbb R^2.$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice ([[def-countable-choice]]), a
non-Lebesgue-measurable set $N \subseteq \mathbb R$, and the set
$E=\{0\}\times N$.

[L1] Every section of a product-measurable set is measurable. ([[thm-sections-of-product-measurable-sets-are-measurable]])

[L2] Assuming countable choice, Lebesgue measure is sigma-finite.
([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]])

[L3] For sigma-finite factors, the product measure satisfies the rectangle
formula. ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]])

[L4] Assuming countable choice, every singleton is Lebesgue null.
([[prop-countable-subsets-of-rn-are-lebesgue-null]])

[L5] Assuming countable choice, Euclidean Lebesgue measure is complete.
([[thm-lebesgue-measure-is-a-complete-measure]])

## Verification

1.1 By [L2], both factors are sigma-finite. For each integer $k\ge1$, [L3] and [L4] give $$(\lambda\times\lambda)(\{0\}\times[-k,k])=\lambda(\{0\})\lambda([-k,k])=0.$$ Hence $\{0\}\times\mathbb R=\bigcup_{k\ge1}\{0\}\times[-k,k]$ is product-measurable and product-null, and $E$ is a subset of a product-null set. [L2, L3, L4, algebra]

2.1 If $E$ belonged to $\mathcal L(\mathbb R)\otimes\mathcal L(\mathbb R)$, then its horizontal section $E_0$ would be $N$, which is not Lebesgue measurable. Thus $E$ is not product-measurable, even though step 1.1 places it inside a product-null set. Since [L5] makes both factor spaces complete, their product measure space is not complete. [step 1.1, L1, L5] ∎

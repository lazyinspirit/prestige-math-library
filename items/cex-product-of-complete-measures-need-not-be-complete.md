---
id: cex-product-of-complete-measures-need-not-be-complete
kind: counterexample
title: "A nonmeasurable subset of a null line shows that the product of complete measures need not be complete"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-sections-of-product-measurable-sets-are-measurable, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, thm-lebesgue-measure-of-a-box-of-every-kind, thm-lebesgue-measure-is-a-complete-measure, def-countable-choice, def-axiom-of-choice, def-vitali-set-on-the-unit-interval, thm-vitali-sets-exist-under-choice-on-r-over-q, thm-a-vitali-set-is-not-lebesgue-measurable, def-complete-measure-space]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: Codex
    verdict: repaired-and-locally-checked
    date: 2026-09-08
    scope: "Owner-authorized AC witness and dependency repair; local checks only, no judge"
    delegated_by: owner
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

Assume AC. Take a Vitali set $V\subseteq[0,1]$ and put
$$E:=\{0\}\times V\subseteq\mathbb R^2.$$
The two factors are complete Lebesgue measure spaces, but their product is
not complete. The verification supplies the witness using AC, not countable
choice alone.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]). Write $\lambda$
for Lebesgue measure on $\mathcal L(\mathbb R)$.

[L1] Every section of a product-measurable set is measurable. ([[thm-sections-of-product-measurable-sets-are-measurable]])

[L2] Assuming countable choice, Lebesgue measure is sigma-finite.
([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]])

[L3] For sigma-finite factors, the product measure satisfies the rectangle
formula. ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]])

[L4] Assuming countable choice, the intervals $\{0\}=[0,0]$ and $[0,1]$
are Lebesgue measurable with measures $0$ and $1$ respectively.
([[thm-lebesgue-measure-of-a-box-of-every-kind]])

[L5] Assuming countable choice, Euclidean Lebesgue measure is complete.
([[thm-lebesgue-measure-is-a-complete-measure]])

[L6] Under AC a Vitali set on $[0,1]$ exists
([[thm-vitali-sets-exist-under-choice-on-r-over-q]],
[[def-vitali-set-on-the-unit-interval]]), and every such set is non-Lebesgue-measurable
([[thm-a-vitali-set-is-not-lebesgue-measurable]]).

[L7] Completeness means that every subset of a measurable null set is
measurable ([[def-complete-measure-space]]).

[L8] Countable choice asks for a choice function on every sequence of
nonempty sets ([[def-countable-choice]]).

## Verification

1.1 AC implies [L8]: apply AC to the family $\{X_n:n\in\mathbb N\}$ of a sequence of nonempty sets and compose its choice function with $n\mapsto X_n$. This supplies countable choice for [L2], [L4] and [L5]. AC also supplies the selector in [L6]; fix that Vitali set $V\subseteq[0,1]$, which is non-Lebesgue-measurable, and set $E=\{0\}\times V$. [given, L6, L8, construct]

2.1 Both factors are sigma-finite by [L2]. The rectangle $Z=\{0\}\times[0,1]$ is product-measurable and [L3] and [L4] give $(\lambda\times\lambda)(Z)=\lambda(\{0\})\lambda([0,1])=0\cdot1=0$. Since $V\subseteq[0,1]$, we have $E\subseteq Z$. [step 1.1, L2, L3, L4, algebra]

3.1 If $E$ belonged to $\mathcal L(\mathbb R)\otimes\mathcal L(\mathbb R)$, then [L1] would make $E_0=\{y:(0,y)\in E\}=V$ Lebesgue measurable, contrary to step 1.1. Thus the subset $E$ of the measurable null set $Z$ is not product-measurable. By [L7] the product is not complete, although [L5] makes both factors complete. [step 1.1, step 2.1, L1, L5, L7] ∎

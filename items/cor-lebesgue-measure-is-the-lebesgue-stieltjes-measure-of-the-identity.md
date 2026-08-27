---
id: cor-lebesgue-measure-is-the-lebesgue-stieltjes-measure-of-the-identity
kind: corollary
title: "Lebesgue measure is the Lebesgue-Stieltjes measure of the identity function"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-lebesgue-measure-and-the-lebesgue-sigma-algebra, thm-existence-of-the-lebesgue-stieltjes-measure, thm-lebesgue-measure-of-a-box-of-every-kind, thm-uniqueness-of-the-lebesgue-stieltjes-measure-on-r]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Example 2.35"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Assume the Axiom of Countable Choice. Let $\operatorname{id}_{\mathbb{R}}(x) := x$. The Lebesgue-Stieltjes measure
attached to $\operatorname{id}_{\mathbb{R}}$ agrees with Lebesgue measure
$\lambda$ from [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]] on every
Borel subset of $\mathbb{R}$.

## Facts & Assumptions

**Given:** Countable choice and the identity function $\operatorname{id}_{\mathbb{R}} : \mathbb{R} \to \mathbb{R}$.

[L1] Assuming countable choice, every nondecreasing right-continuous function on $\mathbb{R}$ defines a Borel measure through the Lebesgue-Stieltjes construction. ([[thm-existence-of-the-lebesgue-stieltjes-measure]])

[L2] For every half-open interval $(a,b] \subseteq \mathbb{R}$, Lebesgue measure satisfies $\lambda((a,b]) = b-a$. ([[thm-lebesgue-measure-of-a-box-of-every-kind]])

[L3] A Borel measure on $\mathbb{R}$ finite on compact sets is uniquely determined by its values on half-open intervals. ([[thm-uniqueness-of-the-lebesgue-stieltjes-measure-on-r]])

## Proof

**Proof technique:** direct.

1.1 The identity function is nondecreasing and right-continuous, so [L1] gives a Borel measure $\mu_{\operatorname{id}}$ with [L1]

$$\mu_{\operatorname{id}}((a,b]) = \operatorname{id}_{\mathbb{R}}(b) - \operatorname{id}_{\mathbb{R}}(a) = b-a.$$

[L1]

1.2 By [L2], Lebesgue measure has the same half-open interval values: $\lambda((a,b]) = b-a$ for every $a < b$. [L2]

2.1 The measures $\mu_{\operatorname{id}}$ and $\lambda$ are both Borel and finite on compact sets, and by steps 1.1 and 1.2 they agree on every half-open interval. [step 1.1, step 1.2, L3]

Therefore [L3] gives $\mu_{\operatorname{id}} = \lambda$. [step 1.1, step 1.2, L3] ∎

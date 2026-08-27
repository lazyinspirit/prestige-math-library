---
id: ex-the-identity-function-generates-lebesgue-measure
kind: example
title: "The identity function generates Lebesgue measure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-lebesgue-measure-is-the-lebesgue-stieltjes-measure-of-the-identity, thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Example 2.35"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Example

Assuming the Axiom of Countable Choice, for $F(x)=x$ the associated
Lebesgue-Stieltjes measure is exactly Lebesgue
measure. In particular, the interval formulas become the ordinary length
formulas

$$\lambda((a,b]) = b-a,\quad \lambda((a,b)) = b-a,\quad \lambda([a,b]) = b-a.$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the identity function $F(x)=x$ on
$\mathbb{R}$.

[L1] Assuming Countable Choice, the Lebesgue-Stieltjes measure of the identity
function is Lebesgue measure.
([[cor-lebesgue-measure-is-the-lebesgue-stieltjes-measure-of-the-identity]])

[L2] The interval formulas for a Lebesgue-Stieltjes measure recover open,
closed, and half-open interval values from the distribution function.
([[thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures]])

## Verification

**Proof technique:** direct.

1.1 By [L1], the measure attached to $F(x)=x$ is $\lambda$. [L1]

2.1 Applying [L2] with $F(x)=x$ gives [step 1.1, L2]
$F(b)-F(a)=F(b^-)-F(a)=F(b)-F(a^-)=b-a$, so every one of the four interval
conventions has measure $b-a$. [step 1.1, L2] ∎

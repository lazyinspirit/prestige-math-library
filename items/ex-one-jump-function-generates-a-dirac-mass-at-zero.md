---
id: ex-one-jump-function-generates-a-dirac-mass-at-zero
kind: example
title: "A single jump generates the Dirac mass at $0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Example 2.36"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Example

Let

$$F(x) := \begin{cases} 0, & x < 0,\\ 1, & x \ge 0. \end{cases}$$

Then the associated Lebesgue-Stieltjes measure is the Dirac mass at $0$.

## Facts & Assumptions

**Given:** The step function $F$ displayed above and its Lebesgue-Stieltjes
measure $\mu_F$.

[L1] Lebesgue-Stieltjes singleton masses are jumps, and half-open interval
values are increments. ([[thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures]])

## Verification

**Proof technique:** direct.

1.1 The only jump of $F$ occurs at $0$, where $F(0)-F(0^-)=1$, so [L1] gives $\mu_F(\{0\})=1$. [given, L1]

2.1 If $x \ne 0$, then $F(x)=F(x^-)$, so [L1] gives $\mu_F(\{x\})=0$; and for any interval $(a,b]$, the increment $F(b)-F(a)$ is $1$ exactly when $a<0\le b$ and is $0$ otherwise, which is exactly the interval behavior of $\delta_0$. [step 1.1, L1] ∎


---
id: ex-interval-formulas-for-a-function-with-one-jump
kind: example
title: "The interval formulas for a function with one jump"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures]
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
    - title: "John K. Hunter, Measure Theory, Example 2.36"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Example

For the step function

$$F(x) := \begin{cases} 0, & x < 0,\\ 1, & x \ge 0, \end{cases}$$

the four interval conventions visibly differ at the jump:

$$\mu_F((-1,0)) = 0,\qquad \mu_F((-1,0]) = 1,\qquad \mu_F([0,1)) = 1,\qquad \mu_F((0,1]) = 0.$$

## Facts & Assumptions

**Given:** The step function $F$ above and its Lebesgue-Stieltjes measure
$\mu_F$.

[L1] For a Lebesgue-Stieltjes measure, the open, closed, and half-open interval
formulas are
$\mu_F((a,b)) = F(b^-) - F(a)$,
$\mu_F((a,b]) = F(b)-F(a)$,
$\mu_F([a,b)) = F(b^-) - F(a^-)$, and
$\mu_F([a,b]) = F(b)-F(a^-)$.
([[thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures]])

## Verification

**Proof technique:** direct.

1.1 For this $F$, one has [given]
$F(-1)=F(-1^-)=0$, $F(0^-)=0$, $F(0)=1$, $F(1^-)=1$, and $F(1)=1$. [given]

2.1 Substituting those values into [L1] gives [step 1.1, L1]
$\mu_F((-1,0))=0-0=0$,
$\mu_F((-1,0])=1-0=1$,
$\mu_F([0,1))=1-0=1$, and
$\mu_F((0,1])=1-1=0$. [step 1.1, L1] ∎

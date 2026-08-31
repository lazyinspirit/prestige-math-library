---
id: ex-the-parallelogram-law-on-two-indicator-functions-in-l-two
kind: example
title: "The parallelogram law on two indicator functions in $L^2$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-parallelogram-law-in-l-two]
proof_strategy: "Evaluate all four L^2 norms on a pair of simple indicator functions and compare the two sides directly."
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory, Chapter 15"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Example

On $[0,1]$ with Lebesgue measure, let

$$f:=\chi_{[0,1/2]},\qquad g:=\chi_{(1/2,1]}.$$

Then

$$\|f+g\|_2^2+\|f-g\|_2^2=2\|f\|_2^2+2\|g\|_2^2=2.$$

## Facts & Assumptions

**Given:** The two indicator functions $f$ and $g$ above.

[L1] The $L^2$ parallelogram law has already been proved
([[thm-parallelogram-law-in-l-two]]).

## Verification

**Proof technique:** Evaluate all four $L^2$ norms on a pair of simple
indicator functions and compare the two sides directly.

1.1 Since $f$ and $g$ are disjoint indicators of sets of measure $1/2$, [given, algebra]
$$\|f\|_2^2=\|g\|_2^2=\frac12,\qquad \|f+g\|_2^2=1,\qquad \|f-g\|_2^2=1.$$

2.1 Therefore [L1, step 1.1]
$$\|f+g\|_2^2+\|f-g\|_2^2=1+1=2=2\cdot\frac12+2\cdot\frac12=2\|f\|_2^2+2\|g\|_2^2,$$
exactly as [L1] predicts. ∎

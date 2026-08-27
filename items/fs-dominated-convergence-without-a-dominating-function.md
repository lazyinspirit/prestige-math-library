---
id: fs-dominated-convergence-without-a-dominating-function
kind: false-statement
title: "FALSE: dominated convergence holds without a dominating function"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-dominated-convergence]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory Notes, Example 4.18"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
---

## Statement

If $f_n\to f$ almost everywhere and each $f_n$ is integrable, then
$$\int f_n\,d\mu\to\int f\,d\mu.$$

## Facts & Assumptions

**Given:** The statement above.

[L1] Dominated convergence spends one integrable majorant for the whole sequence ([[thm-dominated-convergence]]).

## Refutation

**Proof technique:** direct.

1.1 On $(0,1)$ with Lebesgue measure, let [given, construct]
$$f_n:=(n+1)\chi_{(0,1/(n+1))}.$$
Then $f_n\to0$ almost everywhere and every $f_n$ is integrable.

2.1 However $\int f_n\,d\mu=1$ for every $n$, while $\int0\,d\mu=0$. So the conclusion fails, and [L1] identifies the missing dominating function as the lost hypothesis. [step 1.1, L1, algebra] ∎

---
id: ex-the-same-sequence-in-real-and-p-adic-metrics
kind: example
title: "The same sequence behaves oppositely in the real and p-adic metrics"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-p-adic-absolute-value-on-the-rationals, def-field-of-p-adic-numbers]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 5"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes5.pdf"
pipeline_run: null
---

## Example

For a fixed prime $p$, the sequence $(p^n)_{n \ge 0}$ tends to $\infty$ in the
usual absolute value and to $0$ in $\mathbb Q_p$.

## Facts & Assumptions

**Given:** A prime $p$.

[L1] $|p|_p = p^{-1}$ by definition of the $p$-adic absolute value
([[def-p-adic-absolute-value-on-the-rationals]]).

[L2] $\mathbb Q_p$ is the completion field for this metric
([[def-field-of-p-adic-numbers]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $|p^n|_p = p^{-n} \to 0$, so the sequence converges to $0$ in the $p$-adic metric and hence in the completion $\mathbb Q_p$. [L1, L2, given, algebra]

2.1 In the usual absolute value, $|p^n|_\infty = p^n \to \infty$, so the same sequence runs away instead of converging to $0$. [step 1.1, algebra] ∎

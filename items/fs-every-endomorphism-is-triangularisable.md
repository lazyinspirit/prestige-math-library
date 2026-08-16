---
id: fs-every-endomorphism-is-triangularisable
kind: false-statement
title: "FALSE: Every finite-dimensional endomorphism is triangularisable over its base field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-triangularisation-splitting-criterion]
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Result 5.43"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Statement

**False claim.** Every endomorphism of a finite-dimensional vector space is triangularisable over its base field.

## Facts & Assumptions

**Given:** The real quarter-turn $R=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$.

[L1] An endomorphism is triangularisable over $F$ exactly when its characteristic polynomial splits over $F$ ([[thm-triangularisation-splitting-criterion]]).

## Refutation

**Proof technique:** counterexample.

1.1 Direct determinant computation gives $\chi_R=x^2+1$. It has no root in $\mathbb R$, so it does not split over the base field. [algebra]

2.1 Fact [L1] therefore says that $R$ is not triangularisable over $\mathbb R$, refuting the universal claim. [step 1.1, L1] ∎

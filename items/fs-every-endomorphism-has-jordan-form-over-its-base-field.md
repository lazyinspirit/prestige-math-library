---
id: fs-every-endomorphism-has-jordan-form-over-its-base-field
kind: false-statement
title: "FALSE: Every finite-dimensional endomorphism has Jordan form over its base field"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-jordan-form-exists-iff-the-characteristic-polynomial-splits]
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Result 5.43"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Statement

**False claim.** Every endomorphism of a finite-dimensional vector space has Jordan canonical form over its base field.

## Facts & Assumptions

**Given:** The real quarter-turn $R=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$.

[L1] Jordan form over $F$ exists exactly when the characteristic polynomial splits over $F$ ([[thm-jordan-form-exists-iff-the-characteristic-polynomial-splits]]).

## Refutation

**Proof technique:** counterexample.

1.1 The characteristic polynomial of $R$ is $x^2+1$, which has no real root and does not split over $\mathbb R$. [algebra]

2.1 By [L1], $R$ has no Jordan form over its real base field, so the claim is false; scalar extension to $\mathbb C$ is essential in this example. [step 1.1, L1] ∎

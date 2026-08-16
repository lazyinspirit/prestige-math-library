---
id: fs-equal-characteristic-and-minimal-polynomials-imply-similarity
kind: false-statement
title: "FALSE: Equal characteristic and minimal polynomials imply similarity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-similarity-classification-by-jordan-canonical-form, cor-jordan-block-data-controls-eigenspaces-and-polynomials]
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
    - title: "K. Hoffman and R. Kunze, Linear Algebra, 2nd ed., Section 6.8, Exercise 9"
      url: "https://math.ucr.edu/~mpierce/teaching/linear-algebra/docs/Hoffman%2CKunze-LinearAlgebra.pdf"
pipeline_run: null
---

## Statement

**False claim.** Two matrices with the same characteristic polynomial and the same minimal polynomial must be similar.

## Facts & Assumptions

**Given:** For any $\lambda\in F$,
$$A=J_2(\lambda)\oplus J_2(\lambda),\qquad B=J_2(\lambda)\oplus J_1(\lambda)\oplus J_1(\lambda).$$

[L1] Jordan block sizes give the characteristic polynomial by total size and the minimal polynomial by largest size ([[cor-jordan-block-data-controls-eigenspaces-and-polynomials]]).

[L2] Split matrices are similar exactly when their Jordan block multisets agree ([[thm-similarity-classification-by-jordan-canonical-form]]).

## Refutation

**Proof technique:** counterexample.

1.1 Both matrices have total size four and largest block size two, so [L1] gives $\chi_A=\chi_B=(x-\lambda)^4$ and $\mu_A=\mu_B=(x-\lambda)^2$. [L1, algebra]

1.2 Nevertheless $\operatorname{rank}(A-\lambda I)=2$ while $\operatorname{rank}(B-\lambda I)=1$, and their block multisets are respectively $\{2,2\}$ and $\{2,1,1\}$. [algebra]

2.1 Fact [L2] therefore says that $A$ and $B$ are not similar, refuting the claim. [step 1.2, L2] ∎

---
id: cex-the-identity-on-f-two-has-no-cyclic-vector
kind: counterexample
title: "The identity on $F^2$ has no cyclic vector"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cyclic-vector-criterion-by-minimal-and-characteristic-polynomials]
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
    - title: "K. Hoffman and R. Kunze, Linear Algebra, 2nd ed., Section 7.1, Example 1"
      url: "https://math.ucr.edu/~mpierce/teaching/linear-algebra/docs/Hoffman%2CKunze-LinearAlgebra.pdf"
pipeline_run: null
---

## Statement refuted

Every endomorphism of a finite-dimensional vector space has a cyclic vector.

## Facts & Assumptions

**Given:** The identity endomorphism $I$ of $F^2$.

[L1] An endomorphism has a cyclic vector exactly when its minimal and characteristic polynomials are equal ([[thm-cyclic-vector-criterion-by-minimal-and-characteristic-polynomials]]).

## Counterexample

**Proof technique:** counterexample.

1.1 For any $v\in F^2$, every power $I^kv$ equals $v$, so $Z(v;I)=Fv$ has dimension at most one and cannot equal $F^2$. [algebra]

2.1 Equivalently, $\mu_I=x-1$ while $\chi_I=(x-1)^2$, so [L1] also rules out a cyclic vector. Thus the identity on $F^2$ refutes the universal claim. [L1, algebra] ∎

---
id: cex-daha-a1-eigenvalue-separation-fails-at-q-one
kind: counterexample
title: "At q=1 the rank-one Macdonald eigenvalues are not distinct"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [def-daha-a1-symmetric-macdonald-operator]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources: []
---
## Statement refuted
For every pair of nonzero complex parameters $q,t$, the scalars $\lambda_n=tq^n+t^{-1}q^{-n}$ are pairwise distinct as $n$ ranges over the nonnegative integers.
## Facts & Assumptions
**Given:** The displayed scalar sequence and the type-A1 difference operator $\mathcal D$.

[F1] [[def-daha-a1-symmetric-macdonald-operator]]: $\mathcal Df=(tz^2-t^{-1})(z^2-1)^{-1}f(qz)+(t^{-1}z^2-t)(z^2-1)^{-1}f(q^{-1}z)$.
## Counterexample
Take $q=1$ and any $t\in\mathbb C^\times$. Then both shifts in [F1] are the identity and the two coefficients sum to $t+t^{-1}$.
**Given:** $q=1$, $t\ne0$, and $m_0=1$, $m_1=z+z^{-1}$.

1.1 The coefficient sum is $\frac{tz^2-t^{-1}+t^{-1}z^2-t}{z^2-1}=t+t^{-1}$, so $\mathcal D=(t+t^{-1})\,\mathrm{id}$ on symmetric Laurent polynomials. [F1, given, algebra]

2.1 The distinct polynomials $m_0,m_1$ are both eigenvectors with eigenvalue $t+t^{-1}$; correspondingly $\lambda_0=\lambda_1=t+t^{-1}$. Thus the claimed pairwise distinction for all nonzero $q,t$ fails at $q=1$. [step 1.1, algebra] ∎

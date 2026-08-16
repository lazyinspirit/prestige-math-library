---
id: fs-every-endomorphism-has-a-commuting-diagonal-plus-nilpotent-decomposition
kind: false-statement
title: "FALSE: Every endomorphism has a commuting diagonal-plus-nilpotent decomposition over its base field"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-simultaneous-triangularisation-of-commuting-operators, def-diagonalisable-endomorphism, def-nilpotent-endomorphism, thm-nilpotent-endomorphism-characterisations, thm-triangularisation-splitting-criterion]
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
sources:
  scraped: []
  references:
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Result 5.43"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Statement

**False claim.** Every endomorphism $T$ over its base field can be written $T=D+N$ with $D$ diagonalisable, $N$ nilpotent, and $DN=ND$.

## Facts & Assumptions

**Given:** The real quarter-turn $R=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$.

[L1] A commuting family whose characteristic polynomials split is simultaneously triangularisable ([[thm-simultaneous-triangularisation-of-commuting-operators]]).

[L2] A diagonalisable endomorphism has a basis of eigenvectors ([[def-diagonalisable-endomorphism]]).

[L3] A nilpotent endomorphism has characteristic polynomial $x^n$ ([[thm-nilpotent-endomorphism-characterisations]]).

[L4] An endomorphism is triangularisable exactly when its characteristic polynomial splits ([[thm-triangularisation-splitting-criterion]]).

## Refutation

**Proof technique:** counterexample.

1.1 Suppose $R=D+N$ as claimed. By [L2], $\chi_D$ splits, while [L3] makes $\chi_N=x^2$ split; commutation and [L1] give one real basis in which both $D$ and $N$ are upper triangular. [assume-contra, L1, L2, L3]

2.1 Their sum $R$ is upper triangular in that basis, so [L4] would make $\chi_R$ split over $\mathbb R$. [step 1.1, L4, algebra]

3.1 But direct computation gives $\chi_R=x^2+1$, which has no real root. This contradiction refutes the claimed decomposition over the base field. [step 2.1, discharge-contradiction, algebra] ∎

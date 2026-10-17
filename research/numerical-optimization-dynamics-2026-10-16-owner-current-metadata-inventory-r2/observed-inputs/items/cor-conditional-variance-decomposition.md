---
id: cor-conditional-variance-decomposition
kind: corollary
title: "Conditional variance decomposition"
status: published
origin: pipeline
deps: [def-conditional-variance, thm-basic-algebra-and-order-properties-of-conditional-expectation, def-moments-variance-and-covariance, lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Assume AC. For real $X\in L^2(P)$, $\operatorname{Var}(X)=E[\operatorname{Var}(X\mid\mathcal G)]+\operatorname{Var}(E[X\mid\mathcal G])$.

## Facts & Assumptions

**Given:** AC, real $X\in L^2(P)$ and a sub-sigma-algebra G.

[F1] The integrable conditional variance equals the conditional second moment minus the squared conditional mean. ([[lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula]])

[F2] Taking ordinary expectation of a conditional expectation preserves its value. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

[F3] Variance is the expectation of the centered square. ([[def-moments-variance-and-covariance]])

## Proof

**Proof technique:** direct.

1.1 Put $U=E[X\mid\mathcal G]$. By [F1], $U^2=E[X^2\mid\mathcal G]-\operatorname{Var}(X\mid\mathcal G)$ is a difference of integrable functions, so U is square integrable. Taking expectations in that formula gives $E[\operatorname{Var}(X\mid\mathcal G)]=EX^2-EU^2$. Moreover $EU=EX$ by [F2]. [F1, F2]

2.1 For any square integrable real V, expansion of the centered square in [F3] gives $\operatorname{Var}(V)=EV^2-(EV)^2$. Therefore $E[\operatorname{Var}(X\mid\mathcal G)]+\operatorname{Var}(U)=EX^2-EU^2+EU^2-(EX)^2=\operatorname{Var}(X)$, proving the formula. [step 1.1, F3] ∎

## Source notes

Durrett §4.1.2, printed pp.210–213, supplies expectation preservation and the conditional $L^2$ identities. The decomposition is the displayed local algebraic consequence of the proved second-moment formula.

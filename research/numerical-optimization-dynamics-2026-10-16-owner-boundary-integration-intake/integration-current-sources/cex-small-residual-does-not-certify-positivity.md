---
id: cex-small-residual-does-not-certify-positivity
kind: counterexample
title: "An arbitrarily small linear residual does not certify positivity"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-finite-conservative-production-destruction-system
  - alg-modified-patankar-euler
  - thm-patankar-inexact-solve-residual-ledger
justified_by: []
aliases: []
proof_strategy: direct
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
---

## Statement refuted

For every conservative Patankar linear system, a sufficiently small linear residual by itself certifies that the computed candidate is nonnegative.

## Witness

Take state domain $\Omega=\mathbb R$ and one compartment with no transfers, so its Patankar matrix is $M=(1)$ and its nonnegative right-hand side is $b=0$. For any $\varepsilon>0$, the candidate $\widehat y=-\varepsilon$ has residual $M\widehat y-b=-\varepsilon$, which can be arbitrarily small while the candidate is negative.

## Facts & Assumptions

**Given:** A one-compartment closed system with no transfers, right-hand side $0$, and any real $\varepsilon>0$.

[F1] [[def-finite-conservative-production-destruction-system]] permits $m=1$ and zero paired transfer rates.

[F2] [[alg-modified-patankar-euler]] with any positive denominator and zero rates has solve matrix $M=(1)$.

[F3] [[thm-patankar-inexact-solve-residual-ledger]]: a residual margin can certify nonnegativity of the exact solution only when the approximate components meet the explicit componentwise margin; the residual alone is not a sign condition on the candidate.

## Refutation


1.1 Set $m=1$, $p_{11}=d_{11}=0$, $h=1$, $y^n=0$, and $\sigma_1=1$. These data satisfy [F1] and the admissible input conditions of [F2], and the system $My^+=y^n$ is $y^+=0$. [given, F1, F2, algebra]

2.1 For the candidate $\widehat y=-\varepsilon$, the exact residual is $r=M\widehat y-b=-\varepsilon$, so $|r|=\varepsilon$ can be made smaller than any prescribed positive tolerance while $\widehat y<0$. [step 1.1, algebra, choose]

3.1 Here the exact solve is $y^*=0$ and the candidate margin required by [F3] is $\widehat y\ge |r|=\varepsilon$, which fails because $-\varepsilon<\varepsilon$. Thus the residual bound does not certify the candidate's sign, refuting the statement. [F3, step 2.1, algebra] ∎

---
id: ex-euler-vacuum-threshold-boundary
kind: example
title: "Euler vacuum detection at and above the pressure-root threshold"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  - def-ideal-gas-euler-state-and-pressure
  - def-euler-star-pressure-response
  - thm-euler-star-pressure-root-and-vacuum-criterion
  - alg-safeguarded-euler-star-pressure-solver
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Randall J. LeVeque, Numerical Methods for Conservation Laws"
      url: "https://tevza.org/home/course/modelling-II_2016/books/Leveque%20-%20Numerical%20Methods%20for%20Conservation%20Laws.pdf"
      locator: "Ch. 9 §9.2, printed pp. 91–93: exact Euler Riemann solution and vacuum condition"
---

## Example

Let $\gamma=7/5$, $\rho_L=\rho_R=1$, and $p_L=p_R=1$. Then
$c_L=c_R=c=\sqrt{7/5}$, and the vacuum threshold is
$u_R-u_L\ge 2(c_L+c_R)/(\gamma-1)=10c$.

## Facts & Assumptions

**Given:** The two positive-density, positive-pressure initial states and the vacuum criterion.

[F1] [[def-ideal-gas-euler-state-and-pressure]]: positive density and pressure give admissible states and $c=\sqrt{\gamma p/\rho}$.

[F2] [[def-euler-star-pressure-response]]: $\Phi(0+)=u_R-u_L-2(c_L+c_R)/(\gamma-1)$.

[F3] [[thm-euler-star-pressure-root-and-vacuum-criterion]]: $\Phi(0+)\ge0$ means no positive star-pressure root.

[F4] [[alg-safeguarded-euler-star-pressure-solver]]: the procedure returns `vacuum` when $\Phi(0+)\ge0$.

## Verification

1.1 In the equality case take $u_L=-5c,u_R=5c$. Then $u_R-u_L=10c$, so [F2] gives $\Phi(0+)=0$. All thermodynamic states remain admissible by [F1]; [F3] gives no positive pressure root and [F4] returns `vacuum`. [given, F1, F2, F3, F4, algebra]

2.1 In a strict case take $u_L=-6,u_R=6$. Then $u_R-u_L=12>10\sqrt{7/5}=10c$, since $144>140$. Thus $\Phi(0+)>0$ and the same conclusions follow from [F3]–[F4]. These cases show the threshold equality and strict-vacuum branches without using an approximate numerical pressure. [step 1.1, F1, F2, F3, F4, algebra] ∎

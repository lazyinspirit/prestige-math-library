---
id: cex-emg-test-field-not-coupled-flat-solution
kind: counterexample
title: Nonzero flat test field is not a coupled flat solution
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
proof_strategy: direct
deps: [def-emg-electrovacuum-cauchy-system, def-emg-constrained-electrovacuum-data, lem-emg-maxwell-stress-conservation, thm-emg-gauss-codazzi-maxwell-constraints]
dependency_roles:
  def-emg-electrovacuum-cauchy-system: mathematical-premise
  def-emg-constrained-electrovacuum-data: mathematical-premise
  lem-emg-maxwell-stress-conservation: mathematical-premise
  thm-emg-gauss-codazzi-maxwell-constraints: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement refuted

For $\Lambda=0$, every smooth source-free Maxwell field on a prescribed Minkowski metric is an electrovacuum solution with that same flat metric.

## Facts & Assumptions

**Given:** The tensor system and constraint conventions of [[def-emg-electrovacuum-cauchy-system]] and [[def-emg-constrained-electrovacuum-data]], with $\kappa>0$, $\mu_0>0$, $\Lambda=0$, and $B_0\ne0$.

[F1] [[def-emg-electrovacuum-cauchy-system]]: a coupled solution must satisfy both Maxwell equations and $G+\Lambda g=\kappa T^{\rm EM}$.

[F2] [[lem-emg-maxwell-stress-conservation]]: for $e=0$ and $b=(0,0,B_0)$, $T^{\rm EM}(n,n)=B_0^2/(2\mu_0)$.

[F3] [[thm-emg-gauss-codazzi-maxwell-constraints]]: any smooth coupled solution induces data satisfying the Hamiltonian constraint.

## Counterexample

**Given:** The system and constraint conventions above; $\kappa,\mu_0>0$, $\Lambda=0$, and a fixed $B_0\ne0$ (tesla in the SI interpretation).

1.1 Take $M=\mathbb R^4$ with length coordinates $(x^0,x^1,x^2,x^3)$, metric $g=-(dx^0)^2+(dx^1)^2+(dx^2)^2+(dx^3)^2$, orientation $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$, and future field $N=\partial_{x^0}$; in the SI interpretation $x^0=ct$. Set $F=B_0\,dx^1\wedge dx^2$. The metric coefficients and those of $F$ and $\star_gF$ are constant, so the curvature vanishes and $dF=d(\star_gF)=0$. Hence this is a smooth source-free Maxwell field on the prescribed Minkowski background. [F1, algebra]

2.1 On the slice $x^0=0$, the data are $h=\delta$, $K=0$, $e=0$, and $b=(0,0,B_0)$. The Hamiltonian constraint from [F3] would require $0=(\kappa/\mu_0)B_0^2$, because $R(h)=0$ and $\Lambda=0$. This is impossible since $\kappa,\mu_0>0$ and $B_0\ne0$. Hence the given flat Maxwell test field is not a coupled electrovacuum solution with that metric. [F1, F2, F3, algebra] ∎

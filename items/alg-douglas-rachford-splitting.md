---
id: alg-douglas-rachford-splitting
kind: algorithm
title: "Douglas–Rachford splitting for two maximal-monotone relations"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
axiom_base: "No additional axiom; finite-dimensional real definitions and exact algebra only."
deps:
  - def-resolvent-of-a-monotone-relation
  - thm-maximal-monotone-resolvent-is-firmly-nonexpansive
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Jonathan Eckstein and Dimitri P. Bertsekas, On the Douglas–Rachford splitting method and the proximal point algorithm for maximal monotone operators, §4"
      url: "https://web.mit.edu/dimitrib/www/Eckstein_Bertsekas_D-R.pdf"
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, §4.4"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
---

## Definition

Given maximal-monotone $A,B$ on $E=\mathbb R^n$, $\rho>0$, and $w_0\in E$,
define for $k\ge0$
$$p_k=J_{\rho B}(w_k),\qquad q_k=J_{\rho A}(2p_k-w_k),\qquad w_{k+1}=w_k+q_k-p_k.$$
The **shadow** is $p_k$. Each exact update exists and is unique by
[[thm-maximal-monotone-resolvent-is-firmly-nonexpansive]]. This recurrence
specifies exact real arithmetic; a finite implementation that cannot evaluate
a resolvent must report failure and must not advance the exact recurrence. No
termination or convergence claim is part of this algorithm definition.

## Facts & Assumptions

**Given:** Maximal-monotone $A,B$, $\rho>0$, and a state $w_k\in E$.

[A1] Both relations are maximal monotone, $\rho>0$, and $w_0\in E$.


[F1] [[def-resolvent-of-a-monotone-relation]]: $J_{\rho A}(y)=\{x:y-x\in\rho A(x)\}$, and similarly for $B$.

[F2] [[thm-maximal-monotone-resolvent-is-firmly-nonexpansive]]: each such resolvent is a unique-valued map defined on all of $E$.

## Proof


1.1 Since $w_k\in E$, [F2] gives a unique $p_k$ and then a unique $q_k$ at the input $2p_k-w_k$. The displayed formula therefore defines exactly one next state $w_{k+1}$. [A1, given, F1, F2]

2.1 If a numerical routine does not return those exact resolvent values, the recurrence has not been completed; the item makes no convergence or approximate-solve assertion. The shadow sequence is precisely the first resolvent output $p_k$. [A1, given, F1, F2, given] ∎

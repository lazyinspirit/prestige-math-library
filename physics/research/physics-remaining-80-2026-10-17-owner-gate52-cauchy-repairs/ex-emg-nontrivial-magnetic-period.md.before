---
id: ex-emg-nontrivial-magnetic-period
kind: example
title: Magnetic period obstructs a global potential
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
proof_strategy: direct
deps: [def-emg-electrovacuum-cauchy-system, lem-emg-local-potential-gauge]
dependency_roles:
  def-emg-electrovacuum-cauchy-system: mathematical-premise
  lem-emg-local-potential-gauge: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
---

## Example

Let $M=\mathbb R^{1,1}\times\mathbb T^2_L$ with flat product metric, where $\mathbb T^2_L=(\mathbb R/L\mathbb Z)^2$ has length coordinates $x^1,x^2$ of period $L>0$. For $B_0\ne0$, define the smooth two-form $F=B_0\,dx^1\wedge dx^2$, with $B_0$ in tesla in the SI interpretation. Then $F$ is closed and source-free on the flat background, and its period over the spatial two-torus is $B_0L^2\ne0$. The field has local potentials but no single-valued global one-form potential on $M$. This example concerns the Maxwell field-strength sector on a fixed flat background; it is not asserted to solve the coupled Einstein equation with that flat metric.

## Facts & Assumptions

**Given:** The exterior-calculus and source-free Maxwell conventions of [[def-emg-electrovacuum-cauchy-system]] and the local potential conclusion of [[lem-emg-local-potential-gauge]].

[F1] [[def-emg-electrovacuum-cauchy-system]]: the source-free Maxwell equations are $dF=0$ and $d(\star_gF)=0$.

[F2] [[lem-emg-local-potential-gauge]]: every smooth closed two-form has a potential on a star-shaped coordinate neighborhood.

## Verification

**Given:** $L>0$, $B_0\ne0$, flat product coordinates, and $F=B_0\,dx^1\wedge dx^2$.

1.1 The coordinate one-forms are closed and $B_0$ is constant, so $dF=0$. The flat Hodge dual of $F$ has constant coefficients, so $d(\star_gF)=0$ as well. Its integral over the oriented two-torus $x^3$ fixed is $\int_{[0,L]^2}B_0\,dx^1dx^2=B_0L^2\ne0$. [F1, algebra]

2.1 On each star-shaped coordinate neighborhood, [F2] supplies a local potential. If a global smooth one-form $A$ on $M$ satisfied $F=dA$, write its periodic spatial components as $A_1,A_2$. Direct integration over a fundamental square and periodicity give $\int_{[0,L]^2}(\partial_1A_2-\partial_2A_1)\,dx^1dx^2=\int_0^L(A_2(L,x^2)-A_2(0,x^2))\,dx^2-\int_0^L(A_1(x^1,L)-A_1(x^1,0))\,dx^1=0$. This contradicts the nonzero period $B_0L^2$ from 1.1, so no global potential exists although the local potential is available. [step 1.1, F2, algebra] ∎
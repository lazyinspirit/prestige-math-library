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

Let $M=\mathbb R^2_{x^0,x^3}\times\mathbb T^2_L$, where $\mathbb T^2_L=(\mathbb R/L\mathbb Z)^2$ carries its standard global translation-invariant one-forms $dx^1,dx^2$, and give $M$ the flat product Lorentz metric

$$g=-(dx^0)^2+(dx^1)^2+(dx^2)^2+(dx^3)^2.$$

Take future direction $\partial_{x^0}$ and orient $M$ by $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$. In the SI interpretation use the length-coordinate convention $x^0=ct$ of [[def-emg-electrovacuum-cauchy-system]], with $c>0$ and $x^0,x^3$ and local lifts of $x^1,x^2$ measured in metres; $L>0$ is measured in metres. For a fixed $B_0\ne0$ tesla, define the smooth two-form $F=B_0\,dx^1\wedge dx^2$. Then $F$ and its Hodge dual have constant coefficients, so $dF=d(\star_gF)=0$ on the flat background. On the oriented spatial torus $S:=\{x^0=x^0_*,\ x^3=x^3_*\}\cong\mathbb T^2_L$, oriented by $dx^1\wedge dx^2$, its period is $\int_SF=B_0L^2\ne0$. The field has local potentials but no single-valued global one-form potential on $M$. This example concerns the Maxwell field-strength sector on a prescribed background; it is not asserted to solve the coupled Einstein equation with that flat metric.

## Facts & Assumptions

**Given:** The exterior-calculus and source-free Maxwell conventions of [[def-emg-electrovacuum-cauchy-system]] and the local potential conclusion of [[lem-emg-local-potential-gauge]].

[F1] [[def-emg-electrovacuum-cauchy-system]]: the source-free Maxwell equations are $dF=0$ and $d(\star_gF)=0$.

[F2] [[lem-emg-local-potential-gauge]]: every smooth closed two-form has a potential on a star-shaped coordinate neighborhood.

## Verification

**Given:** $L>0$, $B_0\ne0$, flat product coordinates, and $F=B_0\,dx^1\wedge dx^2$.

1.1 The global invariant one-forms $dx^1,dx^2$ on $\mathbb T^2_L$ are closed and $B_0$ is constant, so $dF=0$. The flat Hodge dual has constant coefficients and is closed as well. On $S$ at fixed $x^0,x^3$, direct integration over a fundamental square gives $\int_SF=\int_{[0,L]^2}B_0\,dx^1dx^2=B_0L^2\ne0$. [F1, algebra]

2.1 On each star-shaped coordinate neighborhood, [F2] supplies a local potential. If a global smooth one-form $A$ on $M$ satisfied $F=dA$, its components $A_1,A_2$ are periodic in the torus variables. At fixed $x^0_*,x^3_*$, direct integration over a fundamental square and periodicity give $\int_SF=\int_{[0,L]^2}(\partial_1A_2-\partial_2A_1)\,dx^1dx^2=\int_0^L(A_2(L,x^2)-A_2(0,x^2))\,dx^2-\int_0^L(A_1(x^1,L)-A_1(x^1,0))\,dx^1=0$. This contradicts the nonzero period in step 1.1, so no global potential exists although local potentials do. [step 1.1, F2, algebra] ∎

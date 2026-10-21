---
id: ex-ip-forward-euler-observation-model-error
kind: example
title: Forward Euler creates an observation-map error
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-error-budget-for-computed-inversion
  - lem-derivative-of-a-power
  - lem-finite-rank-operators-are-compact
  - def-bounded-linear-operator
  - def-hilbert-space
  - prop-standard-coordinate-inner-products
  - thm-reals-cauchy-complete
justified_by: []
aliases: []
generation:
  role: example
axiom_use: No choice principle is used; the ODE solution and scalar operator checks are explicit.
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references: []
---

## Example

For each parameter $\theta\in\mathbb R$, solve
$$\dot z_\theta(t)=\theta t,\qquad z_\theta(0)=0\qquad(0\le t\le1),$$
and observe $z_\theta(1)$. The exact observation map is
$A(\theta)=\theta/2$. Apply one explicit forward-Euler step of size $h=1$,
$$z_1=z_0+h\theta t_0\quad\text{with }(t_0,z_0)=(0,0);$$
the resulting discretized observation map is $A_h(\theta)=0$. In the computed
inversion error budget with $X=Y=\mathbb R$, truth $\theta=1$, zero observation
error, and $\lambda=1$, the pre-inversion discrepancy is $d_h=1/2$.

## Example references

[[def-ip-error-budget-for-computed-inversion|The pre-inversion discrepancy $d_h=(A-A_h)x^\dagger$]]

[[lem-derivative-of-a-power|Derivative of the square function]]

[[lem-finite-rank-operators-are-compact|Bounded finite-rank operators are compact]]

[[def-bounded-linear-operator|Boundedness of linear operators]]

[[def-hilbert-space|Hilbert-space completeness convention]]

[[prop-standard-coordinate-inner-products|The standard inner product on $\mathbb R$]]

[[thm-reals-cauchy-complete|Completeness of $\mathbb R$]]

## Facts & Assumptions

**Given:** $\theta\in\mathbb R$, the scalar ODE and initial value in the example, one forward-Euler step with $h=1$, and the computed-inversion error-budget interface.

[F1] [[lem-derivative-of-a-power]]: the function $t\mapsto t^2$ is differentiable at every real $t$ with derivative $2t$.

[F2] [[prop-standard-coordinate-inner-products]]: $\mathbb R$ with $\langle a,b\rangle=ab$ is a real inner-product space.

[F3] [[thm-reals-cauchy-complete]]: every Cauchy sequence in $\mathbb R$ converges in $\mathbb R$.

[F4] [[def-hilbert-space]]: a complete real inner-product space with its induced norm is a real Hilbert space.

[F5] [[def-bounded-linear-operator]]: a linear map is bounded if some $K\ge0$ satisfies $\|Tx\|\le K\|x\|$ for every $x$.

[F6] [[lem-finite-rank-operators-are-compact]]: a bounded linear operator whose range has a finite basis is compact.

[F7] [[def-ip-error-budget-for-computed-inversion]]: for the stated compact $A$, bounded finite-dimensional-range $A_h$, supplied adjoints, positive $\lambda$, and bijective shifted normal operators, the pre-inversion discrepancy is $d_h=(A-A_h)x^\dagger$.

## Verification

1.1 The function $z_\theta(t)=\theta t^2/2$ has $z_\theta(0)=0$ and, by [F1], derivative $\dot z_\theta(t)=\theta t$. It therefore gives the exact endpoint map $A(\theta)=z_\theta(1)=\theta/2$. At $\theta=1$ the exact observation is $1/2$. [given, F1, algebra]

1.2 By [F2]–[F4], $X=Y=\mathbb R$ with the standard inner product is a real Hilbert space. The maps $A(\theta)=\theta/2$ and $A_h(\theta)=0$ are linear and bounded by [F5], with bounds $1/2$ and $0$; their ranges have bases $(1)$ and the empty basis, respectively. Hence $A$ is compact by [F6], and $A_h$ has finite-dimensional range. The adjoints are multiplication by $1/2$ and $0$, since $\langle A\theta,y\rangle=\theta y/2=\langle\theta,y/2\rangle$ and $\langle A_h\theta,y\rangle=0$. For $\lambda=1$, the shifted normal operators are multiplication by $5/4$ and $1$, so both are bijective. All hypotheses of [F7] are satisfied. [given, F2, F3, F4, F5, F6, F7, algebra]

2.1 The stated forward-Euler formula at $(t_0,z_0)=(0,0)$ gives $z_1=0+1\cdot\theta\cdot0=0$, so $A_h(\theta)=0$ and $A_h(1)=0$. Thus the two endpoint maps differ even though the observation perturbation is zero. [given, step 1.1, algebra]

3.1 Set $x^\dagger=1$, $e=0$, $\delta=0$, and $\lambda=1$. Then [F7] gives $d_h=(A-A_h)x^\dagger=1/2-0=1/2$. This is a nonzero discretization contribution with no observation noise. [given, F7, step 1.1, step 2.1, algebra] ∎

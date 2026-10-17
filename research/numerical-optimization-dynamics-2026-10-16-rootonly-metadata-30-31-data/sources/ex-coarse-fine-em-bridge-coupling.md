---
id: ex-coarse-fine-em-bridge-coupling
kind: example
title: Coarse and fine Euler paths coupled by a bridge split
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-euler-maruyama
  - alg-dyadic-brownian-bridge-increment-tree
  - thm-dyadic-brownian-bridge-tree-increment-laws
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Simo Särkkä and Arno Solin, Applied Stochastic Differential Equations, Algorithm 8.1"
      url: "https://users.aalto.fi/~asolin/sde-book/sde-book.pdf"
---

## Example

Assume AC as in the Gaussian and Brownian interfaces.

For the scalar SDE $dX_t=X_tdt+dW_t$ on one interval of length $h>0$, let
$\Delta W\sim N(0,h)$ and independently $Z\sim N(0,h/4)$. Couple the two
fine increments by the Brownian bridge split
$\Delta W_1=\Delta W/2+Z$ and $\Delta W_2=\Delta W/2-Z$. From initial value
$y_0$, one coarse Euler step and two fine Euler steps give
$$Y_c=(1+h)y_0+\Delta W,$$
$$Y_f=(1+h/2)^2y_0+(1+h/2)\Delta W_1+\Delta W_2,$$
and hence
$$Y_f-Y_c=\frac{h^2}{4}y_0+\frac h4\Delta W+\frac h2Z.$$
For $y_0=0$, the coupled difference is centered with variance $h^3/8$.

## Facts & Assumptions

**Given:** AC, the Euler update for $b(x)=x$, $\sigma(x)=1$, the parent $\Delta W$, and the independent midpoint innovation $Z$.

[F1] A scalar Euler–Maruyama step is $Y_{k+1}=Y_k+b(Y_k)h+\sigma(Y_k)\Delta W_k$ on an interval of length $h$. [[alg-euler-maruyama]]

[F2] The bridge children are $\Delta W/2+Z$ and $\Delta W/2-Z$ with a fresh independent $Z\sim N(0,h/4)$. [[alg-dyadic-brownian-bridge-increment-tree]]

[F3] The children have the exact joint independent $N(0,h/2)$ law and sum to the parent. [[thm-dyadic-brownian-bridge-tree-increment-laws]]

[A1] AC is inherited through the Euler, Gaussian, and bridge-sampling interfaces; the finite update calculation makes no further selection. [[def-axiom-of-choice]]

## Proof

1.1 Applying [F1] once with $b(y)=y$ and $\sigma(y)=1$ gives $Y_c=y_0+hy_0+\Delta W=(1+h)y_0+\Delta W$. [F1, given, algebra]

2.1 Applying [F1] on the first fine half-step gives $Y_{1/2}=(1+h/2)y_0+\Delta W_1$. The second half-step gives $Y_f=(1+h/2)Y_{1/2}+\Delta W_2$, so substitution yields the displayed fine formula. [F1, given, step 1.1, algebra]

3.1 Substitute [F2] into $Y_f$ and subtract $Y_c$ from step 1.1: $Y_f-Y_c=\bigl((1+h/2)^2-(1+h)\bigr)y_0+ \bigl((1+h/2)(\Delta W/2+Z)+(\Delta W/2-Z)-\Delta W\bigr) =\frac{h^2}{4}y_0+\frac h4\Delta W+\frac h2Z.$ For $y_0=0$, independence and the variances in [F2] give $\operatorname{Var}(Y_f-Y_c)=(h/4)^2h+(h/2)^2(h/4)=h^3/8$. The identity $\Delta W_1+\Delta W_2=\Delta W$ makes this a path-consistent coupling, not two independent simulations. [F2, F3, step 1.1, step 2.1, algebra]

4.1 The case $h=0$ is excluded; for every $h>0$ the fine difference has strictly positive variance at $y_0=0$. A nonzero initial value changes the mean by $h^2y_0/4$ but not that variance. This example checks an exact finite-dimensional coupling only; it is not a general MLMC or convergence rate theorem. [A1, F2, F3, step 3.1, given] ∎

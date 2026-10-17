---
id: alg-cir-lamperti-positive-implicit-scheme
kind: algorithm
title: "Positive Lamperti drift-implicit scheme for the CIR process"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-locally-lipschitz-ito-sde-and-maximal-solution
justified_by:
  - lem-cir-lamperti-transform-and-positive-root
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Aurélien Alfonsi, Strong convergence of some drift implicit Euler scheme. Application to the CIR process, equation (3)"
      url: "https://arxiv.org/pdf/1206.3855"
---

## Definition

Assume AC and the Brownian conventions of
[[def-locally-lipschitz-ito-sde-and-maximal-solution]] on $[0,T]$ with
$U=(0,\infty)$. The input consists of $\kappa,\theta,\sigma>0$ satisfying
the Feller condition $2\kappa\theta\ge\sigma^2$, a step $h>0$, a current
transformed value $z_n\ge0$, and a finite Brownian increment $\Delta W_n$.
Set
$$a=\frac{4\kappa\theta-\sigma^2}{8},\qquad A=1+\frac{\kappa h}{2},\qquad c=z_n+\frac{\sigma}{2}\Delta W_n.$$
For valid parameters, $a>0$ and $A>0$. Compute
$$z_{n+1}=\frac{c+\sqrt{c^2+4Aah}}{2A},\qquad x_{n+1}=z_{n+1}^2.$$
This is the positive-root solution of
$$A z_{n+1}^2-cz_{n+1}-ah=0,$$
which is the drift-implicit Euler equation for the Lamperti variable
$Z=\sqrt X$ in the CIR model
$dX_t=\kappa(\theta-X_t)dt+\sigma\sqrt{X_t}\,dW_t$.

Return `invalid-input` for parameters outside the stated domain or a
non-finite input. Otherwise return `success` with $(z_{n+1},x_{n+1})$. In
exact real arithmetic the discriminant is strictly positive and the displayed
root is finite and positive for every $z_n\ge0$ and $\Delta W_n\in\mathbb R$;
the algorithm has no rejected root branch. A floating-point implementation
that cannot verify a finite positive root returns `solve-failure` and does
not advance the state. This is a specific implicit square-root update, not
the ordinary Euler–Maruyama update for $X$.

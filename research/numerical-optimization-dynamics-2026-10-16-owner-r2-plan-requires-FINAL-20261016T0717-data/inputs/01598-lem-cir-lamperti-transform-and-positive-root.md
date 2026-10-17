---
id: lem-cir-lamperti-transform-and-positive-root
kind: lemma
title: "CIR Lamperti equation and unique positive implicit root"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-cir-lamperti-positive-implicit-scheme
  - def-locally-lipschitz-ito-sde-and-maximal-solution
  - thm-multidimensional-ito-formula-for-brownian-driven-processes
  - thm-real-power-continuity-and-derivatives
  - thm-of-square-roots
  - def-axiom-of-choice
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Aurélien Alfonsi, Strong convergence of some drift implicit Euler scheme. Application to the CIR process, equation (2) and the positive root following equation (3)"
      url: "https://arxiv.org/pdf/1206.3855"
---

## Statement

Let $\kappa,\theta,\sigma>0$ satisfy the Feller condition
$2\kappa\theta\ge\sigma^2$, and put
$$a=\frac{4\kappa\theta-\sigma^2}{8}.$$
For a positive local strong solution of the CIR SDE
$$dX_t=\kappa(\theta-X_t)dt+\sigma\sqrt{X_t}\,dW_t$$
on $U=(0,\infty)$, the Lamperti variable $Z_t=\sqrt{X_t}$ satisfies
$$dZ_t=\left(\frac a{Z_t}-\frac\kappa2 Z_t\right)dt+ \frac\sigma2dW_t$$
up to every compact exit time. Moreover, for every $h>0$, $z\ge0$, and
$\Delta W\in\mathbb R$, the drift-implicit step
$$z_+=z+h\left(\frac a{z_+}-\frac\kappa2z_+\right) +\frac\sigma2\Delta W$$
has exactly one positive root. It is the value defined by
[[alg-cir-lamperti-positive-implicit-scheme]]. The boundary input $z=0$ is
included for the numerical root statement; the CIR solution theorem below
uses $X_0>0$.

## Facts & Assumptions

**Given:** AC; positive parameters satisfying the Feller condition; a positive local CIR solution; and a positive step $h$.

[F1] For a continuous Brownian Itô process $X$ and $f\in C^{1,2}$, Itô's formula has drift $f'b+\tfrac12f''\sigma^2$ and diffusion $f'\sigma$. [[thm-multidimensional-ito-formula-for-brownian-driven-processes]]

[F2] The numerical root procedure sets $A=1+\kappa h/2$, $c=z+\sigma\Delta W/2$, and returns $(c+\sqrt{c^2+4Aah})/(2A)$. [[alg-cir-lamperti-positive-implicit-scheme]]

[F3] Every nonnegative real number has a unique nonnegative square root, and squaring is strictly increasing on nonnegative reals. [[thm-of-square-roots]]

[F4] On $(0,\infty)$, $(x^{1/2})'=\tfrac12x^{-1/2}$ and $(x^{1/2})''=-\tfrac14x^{-3/2}$. [[thm-real-power-continuity-and-derivatives]]

[A1] AC is inherited from the local Brownian and Itô interfaces; no additional choice is used. [[def-axiom-of-choice]]

## Proof

**Given:** The hypotheses and facts in the Statement and Facts.

1.1 Fix a compact interval $[\varepsilon,R]\subset(0,\infty)$ and stop $X$ before leaving it. By [F4], $f(x)=\sqrt{x}$ is $C^2$ there, with $f'(x)=1/(2\sqrt{x})$ and $f''(x)=-1/(4x^{3/2})$. Applying [F1] gives drift $$\frac{\kappa(\theta-X_t)}{2\sqrt{X_t}} -\frac{\sigma^2X_t}{8X_t^{3/2}} =\frac{4\kappa\theta-\sigma^2}{8Z_t}-\frac\kappa2Z_t =\frac a{Z_t}-\frac\kappa2Z_t$$ and diffusion $\sigma/2$. This proves the transformed equation before each compact exit, hence on the local solution's lifetime. [F1, F4, given, algebra]

1.2 The Feller inequality implies $4\kappa\theta-\sigma^2\ge\sigma^2>0$, so $a>0$. Thus for the numerical step $A=1+\kappa h/2>0$ and $4Aah>0$. [given, algebra]

2.1 Multiplying the drift-implicit equation by $z_+$ and collecting terms gives $Az_+^2-cz_+-ah=0$, with $c=z+\sigma\Delta W/2$. Its discriminant is $c^2+4Aah>c^2$, so [F3] gives a square root strictly larger than $|c|$. The quadratic formula gives the positive root $z_+=(c+\sqrt{c^2+4Aah})/(2A)$; the other root has negative numerator $c-\sqrt{c^2+4Aah}<0$ and positive denominator, hence is negative. [F2, F3, step 1.2, algebra]

3.1 Every positive solution must be one of those two quadratic roots, and only the first is positive. Substitution verifies the displayed positive root in the original equation, so it is the unique admissible step, including when $z=0$. AC is exactly [A1]. [A1, step 2.1, given, algebra] ∎

---
id: cor-perturbed-conforming-galerkin-bound-from-cea
kind: corollary
title: Perturbed conforming solves are controlled by the exact Galerkin baseline
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [def-variational-crime-error-framework, def-bounded-coercive-and-symmetric-sesquilinear-forms, cor-symmetric-galerkin-best-approximation-in-energy-norm, thm-lax-milgram, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VI, Chapter 27, Error analysis with variational crimes
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap27.pdf
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 25, Non-conforming Finite Element Methods
      url: https://jschoeberl.github.io/iFEM/FEM/nonconforming.html
---

## Statement

Assume Countable Choice and the exact conforming Galerkin hypotheses of [[cor-symmetric-galerkin-best-approximation-in-energy-norm]], with Hermitian form $a$ bounded by $M$ in $\|\cdot\|_V$. Let $u_h^G$ be the exact Galerkin solution. Let $a_h$ be a bounded discrete form on the same $V_h$, coercive in $\|\cdot\|_V$ with constant $\alpha_h>0$, and let $F_h$ be a bounded discrete load with the matching test-linearity. Its unique perturbed solution $\widetilde u_h$ satisfies

$$\|u-\widetilde u_h\|_a\le\inf_{v_h\in V_h}\|u-v_h\|_a+\frac{\sqrt M}{\alpha_h}\rho_h,$$

where $\rho_h:=\sup_{w_h\ne0}|F_h(w_h)-a_h(u_h^G,w_h)|/\|w_h\|_V$, defined as zero if $V_h=\{0\}$. This uses the exact Galerkin solution as a baseline; $\rho_h$ must be bounded from the actual form and load defects.

## Facts & Assumptions

**Given:** The Countable-Choice bounded coercive Hermitian Galerkin setting, its exact Galerkin solution $u_h^G$, and a bounded coercive perturbed form/load with the stated residual $\rho_h$, including its zero-space convention.

[F1] [[cor-symmetric-galerkin-best-approximation-in-energy-norm]]: $\|u-u_h^G\|_a=\inf_{v_h\in V_h}\|u-v_h\|_a$.

[F2] [[thm-lax-milgram]] under [[def-countable-choice]]: the perturbed bounded coercive form on the finite-dimensional Hilbert space has a unique solution $\widetilde u_h$.

[F3] [[def-bounded-coercive-and-symmetric-sesquilinear-forms]]: boundedness gives $\|z\|_a^2=a(z,z)\le M\|z\|_V^2$ and discrete coercivity gives $\operatorname{Re}a_h(z,z)\ge\alpha_h\|z\|_V^2$.

[A1] $\rho_h$ is the residual supremum in the Statement, with the stated value zero when $V_h=\{0\}$.

## Proof

1.1 The perturbed form and load are bounded and coercive on $V_h$, so [F2] gives a unique $\widetilde u_h\in V_h$ satisfying $a_h(\widetilde u_h,w_h)=F_h(w_h)$ for all $w_h\in V_h$. [F2, given]

2.1 Put $e_h:=\widetilde u_h-u_h^G$. Use the discrete equation with test $e_h$ and the residual definition [A1] to obtain $\alpha_h\|e_h\|_V^2\le\operatorname{Re}a_h(e_h,e_h)=\operatorname{Re}(F_h(e_h)-a_h(u_h^G,e_h))\le\rho_h\|e_h\|_V$. [F3, A1, step 1.1, algebra]

3.1 If $e_h=0$ the claim is immediate; otherwise divide step 2.1 by $\alpha_h\|e_h\|_V$ and use [F3] to get $\|e_h\|_a\le\sqrt M\rho_h/\alpha_h$. [F3, step 2.1, algebra]

4.1 The triangle inequality and [F1] now give $\|u-\widetilde u_h\|_a\le\|u-u_h^G\|_a+\|e_h\|_a\le\inf_{v_h\in V_h}\|u-v_h\|_a+\sqrt M\rho_h/\alpha_h$, as required. [F1, step 3.1, algebra] ∎

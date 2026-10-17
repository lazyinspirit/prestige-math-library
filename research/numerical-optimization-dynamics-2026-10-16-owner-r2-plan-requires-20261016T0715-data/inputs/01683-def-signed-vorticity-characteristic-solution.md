---
id: def-signed-vorticity-characteristic-solution
kind: definition
title: Characteristic solution for a finite signed regularized vorticity
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-signed-measure
  - def-total-variation-of-a-signed-or-complex-measure
  - thm-jordan-decomposition-for-signed-measures
  - def-axiom-of-choice
  - def-mollified-biot-savart-vortex-kernel
justified_by: []
proof_strategy: direct
axiom_use: The definition uses canonical Jordan parts, whose general existence supplier assumes AC.
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: François Golse, Mean-Field Limits in Statistical Dynamics, Lecture 1
      url: https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf
    - title: J. Liu and X. Xin, Convergence of Vortex Methods for Weak Solutions to the 2-D Euler Equations with Vortex Sheet Data
      url: https://sites.math.duke.edu/~jliu/pdf/Liu_Xin_CPAM_1995.pdf
---

## Definition

Assume AC. Let $\omega_0$ be a finite signed Borel measure on $\mathbb R^2$, set $M=|\omega_0|(\mathbb R^2)$, and let $\omega_0=\omega_0^+-\omega_0^-$ be its Jordan decomposition. If $M=0$, its characteristic solution is the constant zero measure curve. If $M>0$, set $E=\mathbb R^2\times\{+1,-1\}$ and define the probability measure $\lambda_0$ by $\lambda_0(A\times\{s\})=\omega_0^s(A)/M$ for Borel $A$ and $s\in\{+1,-1\}$. A signed characteristic solution for the regularized kernel $K_\varepsilon$ on $[0,T]$ is a jointly measurable path map $Z:[0,T]\times E\to\mathbb R^2$, modulo $\lambda_0$-almost everywhere equality, with absolutely continuous paths for almost every label, $Z_0(x,s)=x$, and

$$Z_t(x,s)=x+M\int_0^t\int_E rK_\varepsilon(Z_u(x,s)-Z_u(y,r))\,d\lambda_0(y,r)\,du,$$

such that its time-supremum function is measurable and $\int_E\sup_{0\le t\le T}|Z_t(x,s)|\,d\lambda_0(x,s)<\infty$. It represents the signed measure curve

$$\omega_t=M\int_E s\,\delta_{Z_t(x,s)}\,d\lambda_0(x,s).$$

Here $\omega_0^s$ denotes $\omega_0^+$ when $s=+1$ and $\omega_0^-$ when $s=-1$. The total variation mass is $M$ at time zero, and the sign coordinate records each Jordan part separately.

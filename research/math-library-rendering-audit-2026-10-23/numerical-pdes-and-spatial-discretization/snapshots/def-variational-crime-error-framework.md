---
id: def-variational-crime-error-framework
kind: definition
title: Variational-crime settings and consistency defects
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-bounded-coercive-and-symmetric-sesquilinear-forms, def-hilbert-space]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
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

## Definition

Let $\mathbb K\in\{\mathbb R,\mathbb C\}$. In the **exact variational problem**, $V$ is a Hilbert space, $a:V\times V\to\mathbb K$ is a bounded coercive sesquilinear form (bilinear when $\mathbb K=\mathbb R$), linear in its first argument and conjugate-linear in its second when $\mathbb K=\mathbb C$, and $F:V\to\mathbb K$ is bounded and has the same linearity in its test argument as the second argument of $a$. Exact solutions satisfy $a(u,v)=F(v)$ for every $v\in V$. Boundedness and coercivity have the meanings in [[def-bounded-coercive-and-symmetric-sesquilinear-forms]].

For a **conforming perturbed Galerkin problem**, $V_h\subseteq V$ is a finite-dimensional subspace, $a_h:V_h\times V_h\to\mathbb K$ and $F_h:V_h\to\mathbb K$ are the discrete form and load, and $u_h\in V_h$ solves $a_h(u_h,w_h)=F_h(w_h)$. Its discrete coercivity constant is any $\alpha_h>0$ such that $\operatorname{Re}a_h(w_h,w_h)\ge\alpha_h\|w_h\|_V^2$ for every $w_h\in V_h$. For $v_h\in V_h$, define

$$\delta_{a,h}(v_h):=\sup_{w_h\in V_h\setminus\{0\}}\frac{|a(v_h,w_h)-a_h(v_h,w_h)|}{\|w_h\|_V},\qquad \delta_{F,h}:=\sup_{w_h\in V_h\setminus\{0\}}\frac{|F(w_h)-F_h(w_h)|}{\|w_h\|_V}.$$

If $V_h=\{0\}$, both defects are defined to be zero. The load defect $\delta_{F,h}$ includes any source approximation or data oscillation; it is not assumed small or zero without a separate bound.

For a **nonconforming problem**, the exact space $V$ and finite-dimensional trial space $V_h$ need not satisfy $V_h\subseteq V$. Put $X_h:=V+V_h$ and equip it with a norm $\|\cdot\|_h$ whose restrictions to $V$ and $V_h$ are norms. The discrete form $a_h$ is defined on $V_h\times V_h$, and a bounded extension $\widetilde a_h:X_h\times V_h\to\mathbb K$ means $\widetilde a_h=a_h$ on $V_h\times V_h$ and $|\widetilde a_h(z,w_h)|\le M_h\|z\|_h\|w_h\|_h$. For an exact solution $u\in V$, define the nonconforming consistency defect

$$\delta^{\mathrm{nc}}_h(u):=\sup_{w_h\in V_h\setminus\{0\}}\frac{|F_h(w_h)-\widetilde a_h(u,w_h)|}{\|w_h\|_h},$$

with value zero if $V_h=\{0\}$. This residual need not vanish: the exact weak equation is only asserted for tests in $V$.

Geometry and quadrature defects are components of the appropriate form defect when the implemented form is compared with the pulled-back exact form. No exact Galerkin orthogonality is asserted after replacing the form or test space.

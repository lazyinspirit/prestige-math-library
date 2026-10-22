---
id: def-emg-fx-dirichlet-constraint-problem
kind: definition
title: Bounded-domain charged conformal problem
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-emg-fx-conformal-seed
  - lem-emg-fx-conformal-constraints
dependency_roles:
  def-emg-fx-conformal-seed: mathematical-premise
  lem-emg-fx-conformal-constraints: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "A. I. Alcubierre, J. C. Degollado and M. Salgado, The Einstein-Maxwell system in 3+1 form and initial data for multiple charged black holes, arXiv:0907.1151v2 (2009)"
      url: "https://arxiv.org/pdf/0907.1151"
      locator: "Section III.A, equations (3.1)-(3.12); the local definition specializes the Hamiltonian constraint to a flat time-symmetric seed."
    - title: "Eric Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, Lecture Notes in Physics 846 (2012), author preprint arXiv:gr-qc/0703035v1"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
      locator: "Sections 6.2.3 and 6.4.2, equations (6.14)-(6.22) and (6.81); conformal metric and constraint conventions."
verification:
  precheck: n/a
---

## Definition

Let $\Omega\subset\mathbb R^3$ be a nonempty, bounded, connected open set with smooth boundary, meaning each boundary point has Euclidean coordinates in which $\Omega$ is one side of a smooth graph. Use Euclidean coordinates $x=(x^1,x^2,x^3)$, and set $\Delta=\sum_{i=1}^3\partial_i^2$. Fix $0<\alpha<1$, a real function $S\in C^{0,\alpha}(\overline\Omega)$ with $S\geq0$, and a real dimensionless parameter $\varepsilon$. For $g:\overline\Omega\to\mathbb R$, define $[g]_{0,\alpha}:=\sup_{x\ne y}|g(x)-g(y)|/|x-y|^\alpha$ and $\|g\|_{C^{0,\alpha}}:=\sup_{\overline\Omega}|g|+[g]_{0,\alpha}$. Define $C^{2,\alpha}(\overline\Omega)$ to consist of functions whose derivatives through order $2$ on $\Omega$ extend continuously to $\overline\Omega$ and whose norm

$$\|u\|_{C^{2,\alpha}}:=\sum_{|\beta|\leq2}\sup_{\overline\Omega}|D^\beta u|+\sum_{|\beta|=2}[D^\beta u]_{0,\alpha}$$

is finite, where $\beta$ is a multi-index. Write $X:=\{u\in C^{2,\alpha}(\overline\Omega):u|_{\partial\Omega}=0\}$, with its inherited norm, and $Y:=C^{0,\alpha}(\overline\Omega)$. The bounded-domain charged conformal problem is to find $u\in X$ such that $\psi:=1+u>0$ on $\overline\Omega$ and

$$-8\Delta\psi=2\varepsilon^2 S\psi^{-3}\quad\hbox{in }\Omega,\qquad \psi|_{\partial\Omega}=1.$$

In the time-symmetric flat-seed specialization $h=\psi^4\delta$, $K=0$, and $\Lambda=0$, the scalar equation is the Hamiltonian constraint from the conformal electrovacuum transformation when $S=|\bar E_0|_\delta^2+|\bar B_0|_\delta^2$ for independently prescribed divergence-free base fields and the actual seed fields are $\bar E=\varepsilon\bar E_0$, $\bar B=\varepsilon\bar B_0$. In geometric length coordinates, $\psi,\varepsilon$ are dimensionless, $\bar E_0,\bar B_0$ have units of inverse length, and $S$ has units of inverse length squared. The definition does not assert existence, uniqueness, a momentum constraint, or an asymptotically Euclidean or puncture solution.

## Definition references

[[def-emg-fx-conformal-seed]]

[[lem-emg-fx-conformal-constraints]]


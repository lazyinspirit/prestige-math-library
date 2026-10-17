---
id: def-linear-elliptic-pde-constrained-control-problem
kind: definition
title: Linear coercive elliptic PDE control problem and reduced objective
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-bounded-coercive-and-symmetric-sesquilinear-forms
  - def-bounded-linear-operator
  - def-countable-choice
  - def-dual-space-of-a-normed-space
  - def-hilbert-space
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-pde-box-control-set
  - def-wkp-zero-as-a-sobolev-closure
justified_by:
  - thm-linear-elliptic-control-state-and-adjoint-wellposedness
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Hannes Meinlschmidt, Optimization with Partial Differential Equations, FAU lecture notes
      url: "https://hannes.meinlschmidt.eu/lecture_notes/pde_opt.pdf"
      locator: "§§2–3, printed pp. 5–25: weak existence and first-order optimality in function spaces."
---

## Definition

Let $\Omega\subset\mathbb R^d$ be a bounded Lipschitz domain, $V=H^1_0(\Omega;\mathbb R)$, and $H=L^2(\Omega;\mathbb R)$, with the continuous inclusion $J:V\to H$. Let $E\subseteq\Omega$ be bounded and measurable, $U=L^2(E;\mathbb R)$, and let $Q_{ad}\subset U$ be the pointwise box of [[def-pde-box-control-set]]. Let $a:V\times V\to\mathbb R$ be bilinear, bounded with constant $M$, and coercive with constant $\beta>0$; symmetry is not assumed. Let $B:U\to V^*$ be bounded and linear, and fix $f\in V^*$, $u_d\in H$, and $\alpha>0$.

For $q\in Q_{ad}$, the **state** $u(q)\in V$ is required to satisfy
$$
a(u(q),v)=\langle f+Bq,v\rangle_{V^*,V}\qquad(v\in V).
$$
The reduced objective is
$$
\widehat J(q)=\frac12\|Ju(q)-u_d\|_H^2+\frac\alpha2\|q\|_U^2.
$$
A spatially varying coefficient, boundary control, variational crimes, finite-element control discretization, and parabolic evolution are separate hypotheses or branches; none is implicit in this definition. The state well-definedness is supplied by [[thm-linear-elliptic-control-state-and-adjoint-wellposedness]].

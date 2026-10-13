---
id: pthm-cm11-linearized-spin
kind: physics-theorem
title: "Linearization of the torque-free spin of the rigid-material model at a
  principal-axis spin: the oscillatory/exponential dichotomy and linear
  stability"
status: draft
origin: session
domain: physics
dependency_level: 16
deps:
  [
    post-cm10-rigid-material,
    post-cm11-torque-balance,
    pthm-cm11-euler-equations,
    pthm-cm11-principal-rotations,
    def-cm10-angular-velocity,
    def-cm10-inertia-tensor,
    pthm-cm10-principal-axes,
    thm-cm-linearized-torque-free-euler-equations,
    def-total-derivative-in-euclidean-space,
    def-cm-orbital-and-linear-stability,
    def-cross-product-in-r3,
    def-euclidean-inner-product,
    def-interval,
    lem-cm-skew-matrix-cross-product-correspondence,
    def-cm-special-orthogonal-group
  ]
dependency_roles:
  post-cm10-rigid-material: physical-assumption
  post-cm11-torque-balance: physical-assumption
  pthm-cm11-euler-equations: physical-result
  pthm-cm11-principal-rotations: physical-result
  def-cm10-angular-velocity: formulation-prerequisite
  def-cm10-inertia-tensor: formulation-prerequisite
  pthm-cm10-principal-axes: physical-result
  thm-cm-linearized-torque-free-euler-equations: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-cm-orbital-and-linear-stability: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-interval: mathematical-premise
  lem-cm-skew-matrix-cross-product-correspondence: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The first-order linearization of the torque-free
  body-angular-velocity dynamics of a nondegenerate rigid-material model of
  [[post-cm10-rigid-material]] at a principal-axis spin $\\Omega e_j$, for
  pairwise distinct principal moments: the total derivative of the spin field,
  the explicit transverse equations, the sign criterion $\\lambda_j<0$ for an
  extreme axis and $\\lambda_j>0$ for the intermediate axis, the bounded
  oscillatory solutions in the extreme case and the exponentially growing
  solutions in the intermediate case, and the corresponding linear-stability
  verdicts in the sense of [[def-cm-orbital-and-linear-stability]]. The
  statement concerns the linearized system only; no nonlinear Lyapunov
  conclusion is drawn here, and no measurement, damping, friction or empirical
  value is asserted."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015
        printing), Section 3.4.3, Eqs. (3.41)-(3.45), printed pages 57-58 (PDF
        pages 63-64): the perturbed principal-axis spin, the linearized
        equations, and the sign criterion for oscillation versus exponential
        growth"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics
        (title page last edited September 1, 2026), Chapter 4 Section 4.4, Eq.
        (4.66) with the discussion of rotation about the intermediate axis,
        chapter pages 15-16 (PDF pages 69-70)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. W. Stewart, Advanced Classical Mechanics (MIT 8.09 Advanced Classical
        Mechanics, Fall 2014 course text), Chapter 2 Section 2.4, printed pages
        41-48 (PDF pages 44-51): Euler equations and the linear treatment of
        rotational stability at a principal-axis spin"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac3\
        3f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical
        Mechanics, 2nd ed. (MIT Press, 2014), Sections 2.8.2-2.9: linear
        behaviour near principal-axis spins of the free rigid body"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9\
        579/sicm_edition_2.zip"
verification:
  precheck: pass
---

## Statement

Adopt a **nondegenerate** model of the rigid-material branch
[[post-cm10-rigid-material]] with **pairwise distinct** principal moments in
a positively oriented principal basis $(e_{1},e_{2},e_{3})$, $Ie_{j}=I_{j}e_{j}$ with $I_{j}>0$
([[pthm-cm10-principal-axes]] clauses (a) and (d)), and use it in the
**torque-free** branch of [[post-cm11-torque-balance]] clause (iv). In the
body-angular-velocity variable $\omega$ the torque-free dynamics is the
autonomous field
$$F(\omega):=-I^{-1}\bigl(\omega\times I\omega\bigr),\qquad \omega\in\mathbb R^{3},$$
on $\mathbb R^{3}$ ([[pthm-cm11-euler-equations]] clause 4), and for every
axis $j$ and every $\Omega\neq0$ the constant path
$\bar\omega\equiv\Omega e_{j}$ is a solution ([[pthm-cm11-principal-rotations]]
clauses 1-3). Fix such $j$ and $\Omega$, and choose $(a,b,j)$ cyclically:
$(a,b,j)=(2,3,1)$, $(3,1,2)$ or $(1,2,3)$. Thus $(e_a,e_b,e_j)$
is positively oriented. Put
$$\lambda_{j}:=\frac{\Omega^{2}\,(I_{a}-I_{j})(I_{j}-I_{b})}{I_{a}I_{b}}\neq0,\qquad \kappa_{j}:=\sqrt{\lvert\lambda_{j}\rvert}.$$
Then:

1. **The linearized field.** $F$ is totally differentiable at $\Omega e_{j}$
   in the sense of [[def-total-derivative-in-euclidean-space]], with total
   derivative $A_{j}$ given on the principal basis by
   $$A_{j}e_{a}=\frac{\Omega(I_{j}-I_{a})}{I_{b}}\,e_{b},\qquad A_{j}e_{b}=\frac{\Omega(I_{b}-I_{j})}{I_{a}}\,e_{a},\qquad A_{j}e_{j}=0,$$
   and there is a constant $C\ge0$ with
   $\lVert F(\Omega e_{j}+\delta)-A_{j}\delta\rVert_2\le C\lVert\delta\rVert_2^{2}$
   for all $\delta\in\mathbb R^{3}$.
2. **The linearized system and its dichotomy.** Write
   $\delta=\delta_{a}e_{a}+\delta_{b}e_{b}+\delta_{j}e_{j}$.
   - If $I_{j}$ is a **largest or smallest** principal moment, then
     $\lambda_{j}<0$, every solution of the linearized system
     $\delta'=A_{j}\delta$ has a unique maximal extension defined on all of $\mathbb R$ and bounded on
     $[0,\infty)$, with
     $$\delta_{a}(t)=\delta_{a}(0)\cos(\kappa_{j}t)+\frac{\Omega(I_{b}-I_{j})}{I_{a}\kappa_{j}}\,\delta_{b}(0)\sin(\kappa_{j}t),$$
     $$\delta_{b}(t)=\delta_{b}(0)\cos(\kappa_{j}t)+\frac{\Omega(I_{j}-I_{a})}{I_{b}\kappa_{j}}\,\delta_{a}(0)\sin(\kappa_{j}t),$$
     and $\delta_{j}$ constant; consequently the spin is **linearly stable** in
     the sense of [[def-cm-orbital-and-linear-stability]].
   - If $I_{j}$ lies **strictly between** $I_{a}$ and $I_{b}$, then
     $\lambda_{j}>0$, the same two formulas hold with $\cosh$ and $\sinh$ in
     place of $\cos$ and $\sin$ and $\kappa_{j}=\sqrt{\lambda_{j}}$, the
     linearized system has unbounded solutions (for instance with
     $\delta_{b}(0)=0$ and $\delta_{a}(0)\neq0$ satisfying
     $\delta_{a}(0)+\frac{\Omega(I_{b}-I_{j})}{I_{a}\kappa_{j}}\delta_{b}(0)\neq0$),
     and the spin is **not linearly stable**.

The statement is a statement about the linearized system at the spin; the
corresponding nonlinear Lyapunov statements are separate items of this page,
and no conclusion about the nonlinear stability of the spin is drawn here.

## Facts & Assumptions

**Given:** A nondegenerate model of [[post-cm10-rigid-material]] with pairwise distinct principal moments $I_{j}>0$ in the positively oriented principal basis $(e_{j})$, the zero-torque branch, and the data $j$, $\Omega\neq0$ of the statement.

[L1] The torque-free spin equation: for the zero-torque branch the body angular velocity satisfies $\omega'=F(\omega)$ with $F(\omega)=-I^{-1}(\omega\times I\omega)$ ([[pthm-cm11-euler-equations]] clause 4, [[def-cm10-angular-velocity]]).

[L2] The mathematical supplier ([[thm-cm-linearized-torque-free-euler-equations]]): let $I_{1},I_{2},I_{3}>0$ be pairwise distinct, let $I$ be the diagonal map with $Ie_{k}=I_{k}e_{k}$ on the standard orthonormal basis and $F(\omega)=-I^{-1}(\omega\times I\omega)$; for $\Omega\neq0$ the field $F$ is totally differentiable at $\Omega e_{3}$ with total derivative $A$ satisfying $(A\delta)_{1}=\Omega(I_{2}-I_{3})\delta_{2}/I_{1}$, $(A\delta)_{2}=\Omega(I_{3}-I_{1})\delta_{1}/I_{2}$, $(A\delta)_{3}=0$ and $\lVert F(\Omega e_{3}+\delta)-A\delta\rVert_2\le C\lVert\delta\rVert_2^{2}$ for the explicit constant $C=\lVert I^{-1}\rVert_F\lVert I\rVert_F$; with $\lambda=\Omega^{2}(I_{2}-I_{3})(I_{3}-I_{1})/(I_{1}I_{2})$ the linearized system $\delta'=A\delta$ has constant $\delta_{3}$ and solves the transverse pair by $\cos,\sin$ when $\lambda<0$ (with $\kappa=\sqrt{-\lambda}$, bounded solutions) and by $\cosh,\sinh$ when $\lambda>0$ (with $\kappa=\sqrt{\lambda}$, unbounded solutions and the growth criterion of the supplier), and $\lambda<0$ exactly when $I_{3}$ is a largest or smallest moment, $\lambda>0$ exactly when it lies strictly between $I_{1}$ and $I_{2}$ ([[def-total-derivative-in-euclidean-space]], [[def-interval]]).

[L3] Linear stability: for an equilibrium of an autonomous system with total derivative $L$, the linearized system is $y'=Ly$, and the equilibrium is linearly stable when every maximal solution of the linearized system is defined for all $t\ge0$ and bounded on $[0,\infty)$ ([[def-cm-orbital-and-linear-stability]]).

[L4] The spin is a solution: for every axis $j$ and rate $\Omega$ the constant body angular velocity $\Omega e_{j}$ belongs to a torque-free motion with $l=I\omega=\Omega I_{j}e_{j}$ constant ([[pthm-cm11-principal-rotations]] clauses 1-3).

[L5] Principal data: $(e_{1},e_{2},e_{3})$ is a positively oriented orthonormal basis and $I$ is diagonal with positive entries in it, $\lVert\cdot\rVert_2$ denoting the Euclidean norm ([[pthm-cm10-principal-axes]] clauses (a)-(b) and (d), [[def-euclidean-inner-product]], [[def-cross-product-in-r3]]).

[L6] For $Q\in SO(3)$ the cross product is equivariant, $Q(u\times v)=(Qu)\times(Qv)$ ([[lem-cm-skew-matrix-cross-product-correspondence]] clause 3 and proof step 1.3). An orthonormal principal basis can be made positively oriented by replacing one eigenvector by its negative; the associated eigenvalues are unchanged.

## Proof

**Proof technique:** direct; identify the principal basis with the supplier's standard basis so that the spin axis is third, apply its clauses, and translate the sign criterion and the boundedness conclusion.

1.1 The spin $\Omega e_{j}$ is a solution of $\omega'=F(\omega)$ on every interval with at least two points, because it is the constant body angular velocity of the torque-free motion of [L4] and [L1] is the same equation; with $l=I\omega=\Omega I_{j}e_{j}$ and $I^{-1}l=\Omega e_{j}$ the right-hand side $F(\Omega e_{j})=-I^{-1}(\Omega e_{j}\times\Omega I_{j}e_{j})=0$ vanishes. [given, L1, L4, L5]

1.2 Identify $\mathbb R^{3}$ with the supplier's $\mathbb R^{3}$ of [L2] by the map $Q$ carrying its standard basis to the cyclic basis $(e_{a},e_{b},e_{j})$. By the positive orientation stipulated in [L5], $Q\in SO(3)$, so $Q(u\times v)=(Qu)\times(Qv)$ ([L6]); then the supplier's diagonal map with entries $(I_{a},I_{b},I_{j})$ is the model's inertia operator $I$ expressed in the principal basis [L5], and the fields $F(\omega)=-I^{-1}(\omega\times I\omega)$ correspond. Clause 1 of [L2] applied at the spin about the third basis vector gives the total differentiability of $F$ at $\Omega e_{j}$ and the derivative $A_{j}$ of clause 1: the components are $(A_j\delta)_a=\Omega(I_b-I_j)\delta_b/I_a$, $(A_j\delta)_b=\Omega(I_j-I_a)\delta_a/I_b$, $(A_j\delta)_j=0$, so evaluating at $e_a$ and $e_b$ gives exactly the stated basis images. The supplier also gives the remainder bound and explicit constant, and clauses 2-3 of [L2] give the transverse formulas, the criterion for the sign of $\lambda_{j}=\Omega^{2}(I_{a}-I_{j})(I_{j}-I_{b})/(I_{a}I_{b})$ and the bounded/unbounded alternatives. The displayed sine/cosine and hyperbolic formulas are defined on all of $\mathbb R$, satisfy the linear system, and have the prescribed initial data; the uniqueness assertion in the supplier proof makes every local solution their restriction. This is clause 1 and the case analysis of clause 2 up to the sign criterion. [given, L2, L5, L6, algebra]

2.1 The product $(I_{a}-I_{j})(I_{j}-I_{b})$ is positive exactly when $I_{j}$ lies strictly between $I_{a}$ and $I_{b}$ and negative exactly when $I_{j}$ is larger than both or smaller than both; since $\Omega^{2}/(I_{a}I_{b})>0$, the criterion of clause 3 of [L2] reads: $\lambda_{j}<0$ (oscillatory, bounded, the displayed $\cos,\sin$ formulas with $\kappa_{j}=\sqrt{-\lambda_{j}}$) exactly for the extreme axes, and $\lambda_{j}>0$ (the $\cosh,\sinh$ formulas with $\kappa_{j}=\sqrt{\lambda_{j}}$, unbounded solutions, the stated growth criterion) exactly for the intermediate axis. This completes clause 2. [step 1.2, given, L2, algebra]

3.1 By [L3] the boundedness of every global maximal solution of the linearized system on $[0,\infty)$ in the extreme case is exactly linear stability of the spin, and the existence of an unbounded solution in the intermediate case is the failure of linear stability, since a solution that is unbounded on $[0,\infty)$ is not bounded there. [step 1.2, step 2.1, given, L3] ∎

## Remarks

- **The linearization variable.** The linearization is taken in the body-angular-velocity variable $\omega$; because $l=I\omega$ with $I$ a fixed invertible linear map, stability and boundedness statements transfer between the $\omega$- and $l$-variables up to the fixed constants $I_{\min}$ and $I_{\max}$, and the two formulations are equivalent for the linearized system.

- **Linear versus nonlinear.** Clause 2 is a statement about the linearized system. Exponential growth of a linearized solution does not by itself prove nonlinear instability, and boundedness of the linearized system does not by itself prove nonlinear Lyapunov stability; the nonlinear statements are proved separately in [[pthm-cm11-nonlinear-spin-stability]], which uses the conserved quantities rather than the linearization.

- **Distinctness is a real hypothesis.** The supplier requires pairwise distinct principal moments and the case analysis uses it; repeated moments change the equilibrium set and are not covered by this statement.

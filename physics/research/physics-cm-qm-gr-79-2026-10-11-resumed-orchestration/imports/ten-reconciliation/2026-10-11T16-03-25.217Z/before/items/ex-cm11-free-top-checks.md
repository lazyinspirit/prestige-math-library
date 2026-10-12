---
id: ex-cm11-free-top-checks
kind: example
title: "Two explicit free-rotation models checked: principal-axis spins, a non-uniform symmetric-top motion with its invariants, and the linearized frequencies of an asymmetric top"
status: draft
origin: session
domain: physics
dependency_level: 17
deps: [post-cm10-rigid-material, post-cm11-torque-balance, pthm-cm11-euler-equations, pthm-cm11-torque-free-invariants, pthm-cm11-principal-rotations, pthm-cm11-linearized-spin, def-cm10-inertia-tensor, pthm-cm10-principal-axes, lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity, def-cm-quaternion-rotation-map-and-cover, def-countable-choice, lem-cross-product-is-bilinear-alternating-and-orthogonal, def-cross-product-in-r3, def-euclidean-inner-product, thm-sine-and-cosine-derivatives, def-sine-and-cosine-by-power-series, thm-sine-and-cosine-addition-formulas, cor-trigonometric-parity-and-pythagorean-identity, def-hyperbolic-functions, thm-hyperbolic-identities-and-derivatives, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, def-derivative, def-interval, def-cm01-units]
dependency_roles:
  post-cm10-rigid-material: formulation-prerequisite
  post-cm11-torque-balance: formulation-prerequisite
  pthm-cm11-euler-equations: physical-result
  pthm-cm11-torque-free-invariants: physical-result
  pthm-cm11-principal-rotations: physical-result
  pthm-cm11-linearized-spin: physical-result
  def-cm10-inertia-tensor: formulation-prerequisite
  pthm-cm10-principal-axes: physical-result
  lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity: mathematical-premise
  def-cm-quaternion-rotation-map-and-cover: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  def-hyperbolic-functions: mathematical-premise
  thm-hyperbolic-identities-and-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
  def-cm01-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Worked checks inside the torque-free branch of the rigid-material model of [[post-cm10-rigid-material]] on two declared inertia matrices: a symmetric model with body inertia matrix diag(1,1,2) and an asymmetric model with diag(1,2,3). The checks verify principal-axis spins and their invariants, an explicit non-uniform symmetric-top motion with conserved angular momentum and energy, and the linearized frequencies at the principal-axis spins of the asymmetric model. No measured value, no concrete body and no experiment is asserted; the numerical data are declared model parameters."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 3.4.1-3.4.3, printed pages 55-58 (PDF pages 61-64): the free symmetric top and worked stability computations for principal-axis spins"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Chapter 4 Section 4.4, chapter pages 9-12 (PDF pages 63-66): free-rotation invariants and computed examples for symmetric and asymmetric bodies"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. W. Stewart, Advanced Classical Mechanics (MIT 8.09 Advanced Classical Mechanics, Fall 2014 course text), Chapter 2 Section 2.4, printed pages 41-48 (PDF pages 44-51): principal-axis spins and their linear stability with worked examples"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Example

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]), used only through the quaternion constructions
below. Consider two **declared** models of the rigid-material branch
[[post-cm10-rigid-material]], each with body inertia matrix diagonal in the
declared positively oriented orthonormal basis $(e_{1},e_{2},e_{3})$ and no other inertia data,
each used in the torque-free branch of [[post-cm11-torque-balance]] clause
(iv):

- **Model S** (symmetric): $I=\mathrm{diag}(1,1,2)$ in kilogram metres
  squared in the declared units ([[def-cm01-units]]); the principal moments
  are $I_{1}=I_{2}=1$, $I_{3}=2$.
- **Model A** (asymmetric): $I=\mathrm{diag}(1,2,3)$; the principal moments
  are $I_{1}=1<I_{2}=2<I_{3}=3$.

Verify the following.

1. **Principal-axis spins.** For each model, each $j$ and each $\Omega\in\mathbb R$,
   the constant path $\omega\equiv\Omega e_{j}$ is the body angular velocity
   of a torque-free motion; along it $l=\Omega I_{j}e_{j}$ is constant,
   $C=\Omega^{2}I_{j}^{2}$ and $E=\tfrac12\Omega^{2}I_{j}$. In Model S with
   $j=3$ and $\Omega=2$ this gives $l=4e_{3}$, $C=16$, $E=4$; in Model A with
   $j=1$ and $\Omega=1$ it gives $l=e_{1}$, $C=1$, $E=\tfrac12$.
2. **A non-uniform symmetric-top motion.** For Model S the path
   $$\omega(t)=\bigl(\tfrac12\cos t,\ \tfrac12\sin t,\ 1\bigr)\qquad(t\in\mathbb R)$$
   satisfies the torque-free Euler equations
   $l'=l\times(I^{-1}l)$ and is the body angular velocity of a torque-free
   motion of Model S; along it
   $$l(t)=\bigl(\tfrac12\cos t,\ \tfrac12\sin t,\ 2\bigr),\qquad C=\frac{17}{4},\qquad E=\frac98,\qquad\lVert\omega(t)\rVert_2^{2}=\frac54,$$
   and $\omega$ is not constant: $\omega(\tfrac\pi2)-\omega(0)=(-\tfrac12,\tfrac12,0)$.
3. **Linearization of Model A at its principal-axis spins.** At the spin
   $\Omega e_{1}$ with $\Omega=1$ the linearized system of
   [[pthm-cm11-linearized-spin]] has $\lambda_{1}=-\tfrac13$, $\kappa_{1}=1/\sqrt3$, and the
   pair $(\delta_{2},\delta_{3})=(\cos(t/\sqrt3),\ -\tfrac1{\sqrt3}\sin(t/\sqrt3))$
   solves the transverse equations; at the intermediate spin $e_{2}$ with
   $\Omega=1$ the linearized system has $\lambda_{2}=\tfrac13>0$ and the
   solution with $\delta_{1}(0)=1$, $\delta_{3}(0)=0$ has $\delta_{1}(t)=\cosh(t/\sqrt3)$,
   which is unbounded on $[0,\infty)$; at the extreme spin $e_{3}$ with
   $\Omega=1$ one has $\kappa_{3}=1$.

## Facts & Assumptions

**Given:** The two models S and A of the Example with their declared diagonal inertia matrices, the torque-free branch, and the data $j$, $\Omega$ of each claim.

[L1] Model data and nondegeneracy: for each model the body inertia matrix $I=\int(\lVert\rho\rVert_2^{2}I_3-\rho\rho^{\mathsf T})\,d\nu$ is diagonal with the displayed positive entries in the declared basis, and the model is nondegenerate ([[def-cm10-inertia-tensor]] clauses (a) and (d)-(e), [[pthm-cm10-principal-axes]] clauses (a) and (d), [[def-euclidean-inner-product]]).

[L2] Principal-axis spins: for a nondegenerate torque-free model, every axis $j$, rate $\Omega$ and initial orientation there is a torque-free motion with constant body angular velocity $\Omega e_{j}$, and along the motions $l=\Omega I_{j}e_{j}$, $C=\Omega^{2}I_{j}^{2}$, $E=\tfrac12\Omega^{2}I_{j}$ ([[pthm-cm11-principal-rotations]] clauses 1-3).

[L3] Torque-free equations and invariants: $l=I\omega$ satisfies $l'=l\times(I^{-1}l)$, and $\langle l,l\rangle$ and $\tfrac12\langle l,I^{-1}l\rangle$ are constant along solutions; the latter is $E=\tfrac12\omega^{\mathsf T}I\omega$ ([[pthm-cm11-torque-free-invariants]] clauses 2-3, [[pthm-cm11-euler-equations]] clause 4).

[L4] Realisability: for every continuous $\omega:\mathbb R\to\mathbb R^{3}$ there is a $C^{2}$ rotation path with body angular velocity $\omega$ if $\omega$ is $C^{1}$; and a $C^{2}$ rotation path with any prescribed initial orientation exists by the surjectivity of the quaternion cover ([[lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity]] clauses 1-2, [[def-cm-quaternion-rotation-map-and-cover]] and its second remark).

[L5] Linearization: the derivative of the torque-free spin field at $\Omega e_{j}$ and the dichotomy with $\lambda_{j}=\Omega^{2}(I_{a}-I_{j})(I_{j}-I_{b})/(I_{a}I_{b})$ and $\kappa_{j}=\sqrt{\lvert\lambda_{j}\rvert}$, with the explicit $\cos,\sin$ and $\cosh,\sinh$ solutions ([[pthm-cm11-linearized-spin]] clauses 1-2).

[L6] Calculus: $(\sin)'=\cos$, $(\cos)'=-\sin$, $(\sinh)'=\cosh$, $(\cosh)'=\sinh$, the sum, product and chain rules, $\sin^{2}+\cos^{2}=1$, and $\cosh t\ge1$ with $\cosh t\to+\infty$; cross products are bilinear and alternating ([[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-and-cosine-addition-formulas]], [[def-hyperbolic-functions]], [[thm-hyperbolic-identities-and-derivatives]], [[thm-algebra-of-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[def-derivative]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]], [[def-cross-product-in-r3]]).

## Proof

**Proof technique:** direct; instantiate the general statements on the declared diagonal data and check the displayed formulas by differentiation and expansion.

1.1 By [L2] applied to each model, each $j$ and each $\Omega$ there is a torque-free motion with constant body angular velocity $\Omega e_{j}$, and $l=\Omega I_{j}e_{j}$, $C=\Omega^{2}I_{j}^{2}$, $E=\tfrac12\Omega^{2}I_{j}$ along it; for Model S with $I_{3}=2$, $j=3$, $\Omega=2$ this gives $l=4e_{3}$, $C=(2\cdot2)^{2}=16$, $E=\tfrac12\cdot4\cdot2=4$, and for Model A with $I_{1}=1$, $j=1$, $\Omega=1$ it gives $l=e_{1}$, $C=1$, $E=\tfrac12$, which is claim 1. [given, L1, L2, algebra]

1.2 For the path $\omega$ of claim 2 in Model S, $l=I\omega=(\tfrac12\cos t,\tfrac12\sin t,2)$ by [L1], so $l'=(-\tfrac12\sin t,\tfrac12\cos t,0)$ by [L6], while $l\times(I^{-1}l)=l\times(\tfrac12\cos t,\tfrac12\sin t,1)$ has components $(\tfrac12\sin t\cdot1-2\cdot\tfrac12\sin t,\ -( \tfrac12\cos t\cdot1-2\cdot\tfrac12\cos t),\ \tfrac12\cos t\cdot\tfrac12\sin t-\tfrac12\sin t\cdot\tfrac12\cos t)=(-\tfrac12\sin t,\tfrac12\cos t,0)$ by the coordinate formula for the cross product in [L6]; hence $l'=l\times(I^{-1}l)$, so $l$ solves the torque-free equations and $\omega$ satisfies the Euler equations by [L3]. [given, L1, L3, L6, algebra]

1.3 For claim 3, [L5] gives $\lambda_{j}=\Omega^{2}(I_{a}-I_{j})(I_{j}-I_{b})/(I_{a}I_{b})$; for Model A and $j=1$, with $a=2$, $b=3$: $\lambda_{1}=\tfrac{(2-1)(1-3)}{2\cdot3}=-\tfrac13$ and $\kappa_{1}=1/\sqrt3$; for $j=2$, with the cyclic choice $a=3$, $b=1$: $\lambda_{2}=\tfrac{(3-2)(2-1)}{3\cdot1}=\tfrac13$ and $\kappa_{2}=1/\sqrt3$; for $j=3$, with $a=1$, $b=2$: $\lambda_{3}=\tfrac{(1-3)(3-2)}{1\cdot2}=-1$ and $\kappa_{3}=1$. In the first case the linearized field of [L5] satisfies $Ae_{2}=-\tfrac13e_{3}$ and $Ae_{3}=e_{2}$, and the pair $\delta_{2}(t)=\cos(t/\sqrt3)$, $\delta_{3}(t)=-\tfrac1{\sqrt3}\sin(t/\sqrt3)$ satisfies $\delta_{2}'=\delta_{3}$ and $\delta_{3}'=-\tfrac13\delta_{2}$ by [L6], so it solves the transverse linearized equations. [given, L5, L6, algebra]

2.1 The quantities of claim 2: $\lVert\omega(t)\rVert_2^{2}=\tfrac14\cos^{2}t+\tfrac14\sin^{2}t+1=\tfrac14+1=\tfrac54$ and $C=\langle l,l\rangle=\tfrac14\cos^{2}t+\tfrac14\sin^{2}t+4=\tfrac{17}4$ by the Pythagorean identity in [L6]; and $E=\tfrac12\omega^{\mathsf T}I\omega=\tfrac12(\tfrac14\cos^{2}t+\tfrac14\sin^{2}t+2\cdot1)=\tfrac12(\tfrac14+2)=\tfrac98$. The difference $\omega(\tfrac\pi2)-\omega(0)=(-\tfrac12,\tfrac12,0)\neq0$ has norm $\tfrac{\sqrt2}2$, so $\omega$ is not constant. [step 1.2, given, L1, L6, algebra]

3.1 Since $\omega$ is $C^{\infty}$, hence $C^{1}$, [L4] supplies a $C^{1}$ rotation path $R:\mathbb R\to SO(3)$ with body angular velocity $\omega$ and any prescribed initial orientation; then $R'=R[\omega]_\times$ is $C^{1}$, so $R$ is of class $C^{2}$, and $x(t,\rho):=R(t)\rho$ (that is, $c\equiv0$) is a motion of Model S with body angular velocity $\omega$ and $l$ as in step 1.2. Its balance holds: $L_c=Rl$ by [L3], so $(Rl)'=R'l+Rl'=R(\omega\times l+l')=0$ because $l'=l\times(I^{-1}l)=l\times\omega=-\omega\times l$ from step 1.2 and the alternation of the cross product in [L6]; hence the motion is torque-free and realizes claim 2. [step 1.2, step 2.1, given, L3, L4, L6]

4.1 In the intermediate case $j=2$, the same formulas give $Ae_{1}=-\tfrac13e_{3}$ and $Ae_{3}=-e_{1}$, so the transverse system is $\delta_{1}'=-\delta_{3}$, $\delta_{3}'=-\tfrac13\delta_{1}$; with $\delta_{1}(0)=1$, $\delta_{3}(0)=0$ the $\cosh,\sinh$ solution of [L5] is $\delta_{1}(t)=\cosh(t/\sqrt3)$, $\delta_{3}(t)=-\tfrac1{\sqrt3}\sinh(t/\sqrt3)$, and $\delta_{1}$ is unbounded on $[0,\infty)$ by [L6]; hence the linearized system at the intermediate spin of Model A has an unbounded solution, which is claim 3. [step 1.3, given, L5, L6, algebra] ∎

## Remarks

- **The two models are declared, not measured.** The matrices
  $\mathrm{diag}(1,1,2)$ and $\mathrm{diag}(1,2,3)$ are model parameters in
  the declared units; no body is asserted to have these principal moments and
  no measurement is reported.

- **What the checks exhibit.** Claim 2 exhibits a torque-free motion whose
  body angular velocity is not constant while both invariants and the spatial
  angular momentum are constant; claim 3 exhibits the oscillatory and the
  exponentially growing linearized behaviour on explicit data. The nonlinear
  consequences of the latter are proved in
  [[pthm-cm11-nonlinear-spin-stability]] and instantiated on the companion
  page.

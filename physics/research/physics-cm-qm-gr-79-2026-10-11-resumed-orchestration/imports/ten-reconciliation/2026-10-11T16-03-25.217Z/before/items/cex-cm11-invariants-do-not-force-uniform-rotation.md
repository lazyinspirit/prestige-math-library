---
id: cex-cm11-invariants-do-not-force-uniform-rotation
kind: counterexample
title: "A torque-free motion of a symmetric rigid-material model with constant angular momentum and energy whose body angular velocity is not constant: the invariants do not force a uniform rotation"
status: draft
origin: session
domain: physics
dependency_level: 18
deps: [post-cm10-rigid-material, post-cm11-torque-balance, pthm-cm11-torque-free-invariants, ex-cm11-free-top-checks, def-cm10-inertia-tensor, def-sine-and-cosine-by-power-series, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, def-euclidean-inner-product, def-interval]
dependency_roles:
  post-cm10-rigid-material: formulation-prerequisite
  post-cm11-torque-balance: formulation-prerequisite
  pthm-cm11-torque-free-invariants: physical-result
  ex-cm11-free-top-checks: formulation-prerequisite
  def-cm10-inertia-tensor: formulation-prerequisite
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A refutation inside the torque-free branch of the rigid-material model of [[post-cm10-rigid-material]]: on the declared symmetric model with body inertia matrix diag(1,1,2) there is a torque-free motion whose angular momentum about the centre of mass and rotational kinetic energy are both constant while its body angular velocity varies with time. The item refutes only the displayed false statement; it asserts no measurement, no concrete body and no failure of the torque-free equations, of which the exhibited motion is an exact solution."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 3.4.1-3.4.2, printed pages 55-57 (PDF pages 61-63): the free symmetric top, whose symmetry axis precesses about the fixed angular momentum while the body angular velocity is not constant"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Chapter 4 Section 4.4, chapter pages 9-12 (PDF pages 63-66): the free symmetric top's precession about the conserved angular momentum and the distinction between the latter and the body angular velocity"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed. (MIT Press, 2014), Sections 2.8.2-2.9: the invariant level curves of the free rigid body and the non-constant body angular velocity along them"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
verification:
  precheck: pass
---

## Statement refuted

Let a model of the rigid-material branch [[post-cm10-rigid-material]] be used
in the **torque-free** branch of [[post-cm11-torque-balance]] clause (iv), and
let $x(t,\rho)=c(t)+R(t)\rho$ be a motion of the resulting model on a time
window containing $[0,\infty)$. Suppose that along the motion the angular
momentum about the centre of mass $L_c$ and the rotational kinetic energy
$\tfrac12\omega^{\mathsf T}I\omega$ are constant in time. Then the body
angular velocity $\omega$ of the motion is constant in time.

## Facts & Assumptions

**Given:** The model S of [[ex-cm11-free-top-checks]], namely the rigid-material model with body inertia matrix $\mathrm{diag}(1,1,2)$ in the declared basis, used torque-free, and the path $\omega(t)=(\tfrac12\cos t,\tfrac12\sin t,1)$.

[F1] Model data: $\nu$ is the centred reference mass distribution of model S with body inertia matrix $I=\mathrm{diag}(1,1,2)$ in the declared orthonormal basis, and the model is nondegenerate ([[post-cm10-rigid-material]] clauses (i)-(ii), [[def-cm10-inertia-tensor]] clause (a), [[ex-cm11-free-top-checks]]).

[F2] The path $\omega$ is the body angular velocity of a torque-free motion of model S; along that motion $L_c$ is constant with $C=\lVert L_c\rVert_2^{2}=\tfrac{17}4$ by [[pthm-cm11-torque-free-invariants]] clause 1, and the rotational kinetic energy is the constant $E=\tfrac98$; and $\omega$ satisfies the torque-free Euler equations $l'=l\times(I^{-1}l)$ with $l=I\omega=(\tfrac12\cos t,\tfrac12\sin t,2)$ ([[ex-cm11-free-top-checks]] claim 2, [[pthm-cm11-torque-free-invariants]] clauses 2-3).

[F3] Values of the path: $\omega(0)=(\tfrac12,0,1)$ and $\omega(\tfrac\pi2)=(0,\tfrac12,1)$, using $\cos0=\sin\tfrac\pi2=1$ and $\sin0=\cos\tfrac\pi2=0$ with the sine and cosine of [[def-sine-and-cosine-by-power-series]] and their derivative and parity identities ([[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]]); the Euclidean norm of the difference is computed with [[def-euclidean-inner-product]].

## Counterexample

**Proof technique:** direct; instance the hypotheses of the refuted statement on the explicit model and motion of [[ex-cm11-free-top-checks]] and exhibit two times at which the body angular velocity differs.

1.1 The motion of [F2] is a torque-free motion of model S on $\mathbb R$, its angular momentum about the centre of mass is constant (with $\lVert L_c\rVert_2^{2}=\tfrac{17}4$), and its rotational kinetic energy is constantly $\tfrac98$; hence all hypotheses of the refuted statement are satisfied. [given, F1, F2]

2.1 By [F3], $\omega(\tfrac\pi2)-\omega(0)=(-\tfrac12,\tfrac12,0)$, whose Euclidean norm is $\tfrac{\sqrt2}2\neq0$; hence $\omega(\tfrac\pi2)\neq\omega(0)$, so the body angular velocity of the motion is not constant in time. [step 1.1, given, F3, algebra]

3.1 The hypotheses of the refuted statement hold along the motion by step 1.1, while its asserted conclusion fails by step 2.1; therefore the statement is false. [step 1.1, step 2.1, given] ∎

## Remarks

- **What the counterexample shows and does not show.** It shows that
  conservation of the angular momentum about the centre of mass and of the
  rotational kinetic energy does not force a constant body angular velocity,
  so no proof of uniform rotation may rely on those invariants alone. It does
  not show that the torque-free equations are inconsistent: the exhibited
  path is an exact solution of them, and the two invariants are precisely the
  reason the motion is bounded in $l$ and $\omega$.

- **Where uniform rotation does occur.** Constant body angular velocity
  characterises the principal-axis spins, as proved in
  [[pthm-cm11-principal-rotations]] clause 4; the present motion is not one of
  them because $\omega(t)$ is not parallel to a fixed principal direction.

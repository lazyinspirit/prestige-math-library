---
id: pthm-cm04-equilibrium-stability-at-a-strict-minimum
kind: physics-theorem
title: "A strict local minimum of the potential is a Lyapunov stable equilibrium of the conservative one-dimensional model, and its linearisation is an oscillator-type model"
status: draft
origin: session
domain: physics
dependency_level: 15
deps: [def-cm04-one-dimensional-models-and-equilibria, def-cm04-phase-plane-and-energy-level-sets, pthm-cm04-conservative-motion-and-energy, post-cm04-harmonic-model, def-cm-mechanical-vector-field-and-energy-in-a-chart, thm-cm-energy-stability-of-a-strict-minimum, prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium, def-cm-equilibrium-and-lyapunov-stability, def-cm-oscillator-model-and-phase-system, def-euclidean-inner-product, def-metric-ball, def-interval, def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  def-cm04-one-dimensional-models-and-equilibria: formulation-prerequisite
  def-cm04-phase-plane-and-energy-level-sets: formulation-prerequisite
  pthm-cm04-conservative-motion-and-energy: physical-result
  post-cm04-harmonic-model: formulation-prerequisite
  def-cm-mechanical-vector-field-and-energy-in-a-chart: mathematical-premise
  thm-cm-energy-stability-of-a-strict-minimum: mathematical-premise
  prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium: mathematical-premise
  def-cm-equilibrium-and-lyapunov-stability: mathematical-premise
  def-cm-oscillator-model-and-phase-system: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-metric-ball: mathematical-premise
  def-interval: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The equilibrium theory of a conservative one-dimensional model near a strict local minimum of its potential: the rest point is Lyapunov stable, with the Euclidean phase-plane norm, and its linearisation is the oscillator-type model with data (m,0,U''(x_*),0), which is the harmonic model with spring constant U''(x_*) when that number is positive. The statement is conditional on the declared potential and its strict local minimum; it asserts no asymptotic stability, no attraction and no instability in any case, and no measured value."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 3.2, Eqs. (3.10)-(3.18), chapter pages 2-4 (PDF pages 34-36): the quadratic expansion of the effective potential about a fixed point, the effective spring constant d^2 U_ef/dq^2, the characteristic equation, harmonic motion with frequency (kappa_ef/m_ef)^{1/2} at a minimum and the exponentially growing solution at a maximum"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 6.7, Theorem 6.16, printed pages 214-216: a fixed point of Newton's equation is stable if the potential has a local minimum there"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.6, printed pages 37-39 (PDF pages 43-45): stability of equilibria read from the potential, small oscillations about a minimum and the positive-definite kinetic matrix"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Adopt a conservative one-dimensional model as in
[[pthm-cm04-conservative-motion-and-energy]]: the class of
[[def-cm04-one-dimensional-models-and-equilibria]] with force law
$F(x)=-U'(x)$ for a potential $U:Q\to\mathbb R$ of class $C^{2}$, phase
system $G_{F}(x,v)=(v,-U'(x)/m)$ on $Q\times\mathbb R$, and energy
$E=\tfrac12mv^{2}+U$. Let $x_{*}\in Q$ be a **strict local minimum** of $U$:
there is $r_{0}>0$ with $\overline B(x_{*},r_{0})\subseteq Q$ and
$U(x)>U(x_{*})$ for $0<\lvert x-x_{*}\rvert<r_{0}$. Then:

1. **Lyapunov stability.** $(x_{*},0)$ is a Lyapunov stable rest point of
   the phase system in the sense of [[def-cm-equilibrium-and-lyapunov-stability]]:
   for every $\varepsilon>0$ with $\overline B((x_{*},0),\varepsilon)\subseteq
   Q\times\mathbb R$ there is $\delta>0$ such that the unique maximal solution of the autonomous phase equation through the datum of every motion $x$ of the
   model with $\lVert(x(t_{0}),x'(t_{0}))-(x_{*},0)\rVert_{2}<\delta$ for some
   $t_{0}\in I_{0}$ is defined for all $t\ge t_{0}$ and satisfies
   $$\bigl\lVert\bigl(x(t)-x_{*},\,x'(t)\bigr)\bigr\rVert_{2}<\varepsilon \qquad(t\ge t_{0}).$$
   Here $x$ in the displayed all-time bound denotes that maximal extension; on the original motion interval it agrees with the given motion. The autonomous equation is read on $\mathbb R\times Q\times\mathbb R$, even when the declared time window $I_0$ is smaller; no enlargement of that declared window is asserted. The norm is the Euclidean norm on $\mathbb R^{2}$ of
   [[def-euclidean-inner-product]]; the balls are those of
   [[def-metric-ball]]. No asymptotic stability and no attraction are
   asserted.

2. **Linearisation.** $U''(x_{*})$ exists ([[def-ck-euclidean-maps-and-diffeomorphisms]]),
   the phase field $G_{F}$ is totally differentiable at $(x_{*},0)$ with
   $$DG_{F}(x_{*},0)(\delta x,\delta v)=\Bigl(\delta v,\ -\frac{U''(x_{*})}{m}\,\delta x\Bigr),$$
   and the linearised equation is
   $$m\,\xi''+U''(x_{*})\,\xi=0,$$
   which is the equation of the oscillator-type model of clause (f) of
   [[def-cm04-one-dimensional-models-and-equilibria]] with data
   $(m,0,U''(x_{*}),0)$ ([[def-cm-oscillator-model-and-phase-system]]). If in
   addition $U''(x_{*})>0$, then that linearised model is the harmonic model
   of [[post-cm04-harmonic-model]] with spring constant $U''(x_{*})$, and its
   undamped frequency in the sense of
   [[def-cm-oscillator-model-and-phase-system]] is $\sqrt{U''(x_{*})/m}$.

The statement is conditional on the potential $U$ and on the strict local
minimum; no conclusion is drawn for a critical point that is only a weak
minimum, a maximum, or a point where $U''$ vanishes identically on one side.

## Facts & Assumptions

**Given:** The conservative one-dimensional model with potential $U$, the
strict local minimum $x_{*}$, and the quantity $D^{2}U:=U''(x_{*})$.

[L1] The phase field $G_{F}(x,v)=(v,-U'(x)/m)$ is exactly the mechanical
vector field of [[def-cm-mechanical-vector-field-and-energy-in-a-chart]] with
$n=1$, $\Omega:=Q$, the constant kinetic metric field $M(x)\equiv m$ (symmetric
positive definite, of class $C^{2}$ because it is constant), and the potential
$U$: for a constant field $M$, $D_{q}M=0$ and
$\nabla_{q}\bigl(\tfrac12v^{\mathsf T}Mv\bigr)=0$, so the second component of
$G$ is $M(x)^{-1}(0-0-U'(x))=-U'(x)/m$. Its energy $E(x,v)=\tfrac12
v^{\mathsf T}Mv+U(x)$ is the energy of [[def-cm04-phase-plane-and-energy-level-sets]]
clause (b). [given, [[def-cm-mechanical-vector-field-and-energy-in-a-chart]]]

[L2] [[thm-cm-energy-stability-of-a-strict-minimum]]: for $n\ge1$, an open
$\Omega\subseteq\mathbb R^{n}$, a $C^{2}$ field $M$ of symmetric positive
definite matrices, a $C^{2}$ potential $U$ and a strict local minimum $q_{0}$
of $U$, the point $(q_{0},0)$ is a Lyapunov stable equilibrium of the
mechanical system of [L1]'s definition: for every $\varepsilon>0$ with
$\overline B((q_{0},0),\varepsilon)\subseteq\Omega\times\mathbb R^{n}$ there
is $\delta>0$ such that every maximal solution $(q,v)$ with
$\lVert(q(0),v(0))-(q_{0},0)\rVert_{2}<\delta$ is defined for all $t\ge0$ and
satisfies $\lVert(q(t),v(t))-(q_{0},0)\rVert_{2}<\varepsilon$ for every
$t\ge0$. The statement uses no asymptotic stability.

[L3] [[prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium]]:
at a mechanical equilibrium $q_{0}$ of the data of [L1]'s definition, the
mechanical vector field is totally differentiable at $(q_{0},0)$ with
$DG(q_{0},0)(\delta q,\delta v)=(\delta v,-M(q_{0})^{-1}D^{2}U(q_{0})\delta q)$;
the linearised equation is $M(q_{0})\xi''+D^{2}U(q_{0})\xi=0$.

[L4] Model definitions ([[def-cm04-one-dimensional-models-and-equilibria]]
clauses (b), (e), (f), [[def-cm-oscillator-model-and-phase-system]],
[[post-cm04-harmonic-model]]): motions of the model are exactly the curves
whose phase curves solve $z'=G_{F}(z)$; $x_{*}$ is an equilibrium exactly when
$U'(x_{*})=0$, which holds at a strict local minimum; the oscillator-type
data $(m,0,k,0)$ with $k=U''(x_{*})$ have equation $m\xi''+k\xi=0$; and the
harmonic model of the postulate has force law $-kx$ and potential
$\tfrac12kx^{2}$.

## Proof

**Proof technique:** direct; identify the scalar phase system with the
one-dimensional instance of the mathematical mechanical system, apply the
energy-stability theorem to it, and read the linearisation from the
linearisation proposition.

1.1 By [L1] the phase field $G_{F}$ of the model is the mechanical vector field of the mathematical data $(n,\Omega,M,U)=(1,Q,m,U)$ with the constant positive definite metric field $M\equiv m$. Hence the phase curves of motions of the model are exactly the solutions $(q,v)$ of the mechanical system of [L1], and its energy is $E$. [given, L1, L4]

2.1 Clause 1. Let $\varepsilon>0$ with $\overline B((x_{*},0),\varepsilon)\subseteq Q\times\mathbb R$. Apply [L2] with $\Omega=Q$, $M\equiv m$, the potential $U$ and $q_{0}=x_{*}$: it produces $\delta>0$ such that every maximal solution $(q,v)$ of the mechanical system with $\lVert(q(0),v(0))-(x_{*},0)\rVert_{2}<\delta$ is defined for all $t\ge0$ and satisfies $\lVert(q(t),v(t))-(x_{*},0)\rVert_{2}<\varepsilon$ for all $t\ge0$. Now let $x:J\to Q$ be a motion of the model and $t_{0}\in J$ with $\lVert(x(t_{0}),x'(t_{0}))-(x_{*},0)\rVert_{2}<\delta$. The phase system is autonomous, so the translate $s\mapsto(x(t_{0}+s),x'(t_{0}+s))$, defined for $s$ with $t_{0}+s\in J$, is a solution of the same system with initial value $(x(t_{0}),x'(t_{0}))$ at $s=0$; it has a unique maximal extension for this unrestricted autonomous equation by [L2], and by step 1.1 and the defining property of $\delta$ that extension is defined for all $s\ge0$ and stays at distance $<\varepsilon$ from $(x_{*},0)$. Translating the maximal extension back yields a curve defined on $[t_{0},\infty)$ which agrees with $x$ on $J$, and $\lVert(x(t)-x_{*},x'(t))\rVert_{2}<\varepsilon$ for all $t\ge t_{0}$. Since $\varepsilon$ was arbitrary, $(x_{*},0)$ is Lyapunov stable in the sense of [[def-cm-equilibrium-and-lyapunov-stability]]. [given, step 1.1, L2, L4]

3.1 Clause 2, differentiability and linearised equation. $U$ is $C^{2}$, so $D^{2}U(x_{*})=U''(x_{*})$ exists and $x_{*}$ is a mechanical equilibrium because $U'(x_{*})=0$ at a strict local minimum. Applying [L3] with $q_{0}=x_{*}$, $M(q_{0})=m$ and $D^{2}U(q_{0})=U''(x_{*})$ gives the displayed total derivative and the linearised equation $m\xi''+U''(x_{*})\xi=0$. By [L4] this is exactly the oscillator-type model with data $(m,0,U''(x_{*}),0)$. If $U''(x_{*})>0$, then $k:=U''(x_{*})>0$ and [L4] identifies the equation with that of the harmonic model with spring constant $k$; the frequency $\sqrt{k/m}$ is the undamped frequency $\omega_{0}$ attached to the data $(m,0,k,0)$ by [[def-cm-oscillator-model-and-phase-system]], and it is quoted here only as the linearised frequency, not as a property of the nonlinear motion. [given, step 1.1, L3, L4] ∎

## Remarks

- **Stability is not attraction.** Clause 1 asserts only Lyapunov stability:
  nearby motions stay nearby, with no claim that they approach the rest
  point. For the conservative model the energy is conserved, and the
  companion results do not make the rest point attracting; the dissipative
  model is where attraction is proved.

- **The weak-minimum and saddle cases are not decided here.** If a critical point with vanishing $U''$ is still a strict minimum, clause 1 applies; at other degenerate critical points or a strict local maximum this item says nothing about stability or instability of the rest point; the
  linearised model with $U''(x_{*})<0$ is the repulsive oscillator, whose
  explicit growing solution is recorded in the companion pages of the
  mathematics track, but transferring that growth to the nonlinear model
  requires a separate nonlinear argument that this page does not supply.

- **Why the identification is legitimate.** The mechanical system of
  [[def-cm-mechanical-vector-field-and-energy-in-a-chart]] is a mathematical
  chart model with an arbitrary positive definite $C^{2}$ metric field; the
  model of this page is its one-dimensional constant-metric instance, and the
  identification in step 1.1 is a computation, not a modelling assumption.


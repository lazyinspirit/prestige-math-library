---
id: rem-cm09-zero-modes-degeneracy-and-scope
kind: remark
title: "Scope of the coupled quadratic model: zero modes, degenerate eigenspaces, unstable quadratic directions and the limits of the approximation statements"
status: draft
origin: session
domain: physics
dependency_level: 17
deps: [def-cm09-coupled-quadratic-model, pthm-cm09-free-modes-and-degeneracy, pthm-cm09-linearization-at-a-strict-minimum, pthm-cm09-linearization-error-bound, pthm-cm09-forced-modal-response, pthm-cm09-averaging-for-weak-damping, thm-cm-instability-of-a-hyperbolic-saddle, def-cm-equilibrium-and-lyapunov-stability, def-cm-mechanical-vector-field-and-energy-in-a-chart, def-hessian-and-euclidean-critical-point]
dependency_roles:
  def-cm09-coupled-quadratic-model: formulation-prerequisite
  pthm-cm09-free-modes-and-degeneracy: physical-result
  pthm-cm09-linearization-at-a-strict-minimum: physical-result
  pthm-cm09-linearization-error-bound: physical-result
  pthm-cm09-forced-modal-response: physical-result
  pthm-cm09-averaging-for-weak-damping: physical-result
  thm-cm-instability-of-a-hyperbolic-saddle: mathematical-premise
  def-cm-equilibrium-and-lyapunov-stability: mathematical-premise
  def-cm-mechanical-vector-field-and-energy-in-a-chart: mathematical-premise
  def-hessian-and-euclidean-critical-point: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Scope and cautionary reading of the coupled quadratic model of this page: the meaning of a zero modal stiffness (an affine, non-oscillatory free direction, with quadratic-in-time growth under a constant force component), the intrinsic status of degenerate eigenspaces and the non-intrinsic status of individual mode vectors, the exponential directions of an indefinite stiffness and the conditional nonlinear instability of a hyperbolic equilibrium, and the limits of the page's approximation statements (the quadratic model is exact only for quadratic data, the linearization error bound is finite-time and small-data, and the averaging estimate holds on the O(1/epsilon) time scale under explicit smallness and trapping hypotheses). The item records no measurement, asserts no empirical applicability of any model, and makes no stability claim beyond the explicitly cited conditional conclusions."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.6, Eqs. (2.113)-(2.138), printed pages 38-45 (PDF pages 44-51): the two possibilities for each modal eigenvalue, the linear instability of a positive eigenvalue, and the triatomic molecule's translation mode of zero frequency that is explicitly not an oscillation"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Chapter 6, Sections 6.1-6.2, chapter pages 1-6 (PDF pages 125-130): coupled oscillators and the warning that a normal-mode conclusion requires positive mass and stiffness and no zero modes"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 3, Sections 3.1-3.2, printed pages 52-59 (PDF pages 55-62): zero modes and degenerate eigenspaces needing careful treatment in the generalized eigenproblem"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: n/a
---

## Zero modes

A **zero mode** of a coupled quadratic model is an index with modal
stiffness $\lambda_{i}=0$ ([[def-cm09-coupled-quadratic-model]] clause (e));
the multiplicity of the value $0$ is $\dim\ker K$, and it counts the
independent directions in which the quadratic model exerts no restoring
force. By clause 2 of [[pthm-cm09-free-modes-and-degeneracy]] the free motion
in such a direction is affine, $z_{i}(t)=a_{i}+b_{i}t$, not oscillatory; for
$b_{i}\ne0$ it is unbounded on $[0,\infty)$. The classical instance is the
translation mode of a chain or molecule: the linearisation of a
translation-invariant model at a non-isolated minimum has a flat
second-order direction, and the "mode" of zero frequency is the uniform
motion of the whole system rather than a vibration. A constant generalized
force component along a zero mode produces quadratic growth in time by
clause 2(c) of [[pthm-cm09-forced-modal-response]], the degenerate analogue
of resonance; the model has no bounded steady response in that direction.
Zero modes are therefore excluded whenever a statement about oscillations
alone is intended: at a strict local minimum the stiffness is positive
semidefinite with $\ker K$ possibly nontrivial only if the minimum is not
isolated along those directions, and the Lyapunov stability of
[[pthm-cm09-linearization-at-a-strict-minimum]] remains valid in that case
because it does not use positivity of the stiffness.

## Degenerate modal stiffnesses

If a modal stiffness $\lambda$ has multiplicity $m>1$, the individual
eigenvectors and hence the individual modal vectors $u_{i}$ of a chosen
diagonalisation are **not** intrinsic: every orthonormal basis of the
eigenspace gives an equally valid decoupling. What is intrinsic is the
subspace $N_{\lambda}$ and its pure-$\lambda$ family of motions, exactly as
clause 4 of [[pthm-cm09-free-modes-and-degeneracy]] records: the pure-$\lambda$
motions are the solutions of $q''+\lambda q=0$ with values in
$N_{\lambda}$, a family with $2m$ parameters, and for $\lambda>0$ all of them
oscillate with the single frequency $\omega=\sqrt{\lambda}$. A statement
about "the $i$-th mode" must therefore be read as a statement about a chosen
basis vector, while the frequency, the subspace and the multi-parameter
family are the basis-independent objects. Resonance of a degenerate family
with a prescribed sinusoidal force is likewise basis-independent: it occurs
exactly when the modal force vanishes in no direction of $N_{\lambda}$
(clause 2 and the remarks of [[pthm-cm09-forced-modal-response]]).

## Unstable quadratic directions

An **unstable (exponential) direction** is an index with $\lambda_{i}<0$
([[def-cm09-coupled-quadratic-model]] clause (e)). Its free motion is the
hyperbolic family $a\cosh(\kappa t)+b\sinh(\kappa t)$ with
$\kappa=\sqrt{-\lambda_{i}}$, which grows exponentially whenever it is not
identically zero, and clause 6 of [[pthm-cm09-free-modes-and-degeneracy]]
proves accordingly that the rest point of the free quadratic model is not
Lyapunov stable ([[def-cm-equilibrium-and-lyapunov-stability]]). For a
mechanical system in a chart at a **critical** point $q_{0}$ of the potential
that is not a minimum — for instance a symmetric saddle or a strict maximum —
the stiffness $K=D^{2}U(q_{0})$ may have negative eigenvalues
([[def-hessian-and-euclidean-critical-point]]), and the corresponding
exponential directions of the linearised model exhibit the local saddle
behaviour. The linear calculation by itself certifies nothing about the
nonlinear system: the nonlinear instability of $(q_{0},0)$ follows from
[[thm-cm-instability-of-a-hyperbolic-saddle]] only when the derivative
$DG(q_{0},0)$ of the mechanical field
([[def-cm-mechanical-vector-field-and-energy-in-a-chart]]) is **hyperbolic**
— no eigenvalue on the imaginary axis, in particular no zero mode — and has
an eigenvalue with positive real part. When a zero mode is present the
linearisation is not hyperbolic and the exponential-mode argument does not
apply; a higher-order analysis is then required and is not supplied here.
Conversely, a negative eigenvalue of the stiffness is necessary but not
sufficient for a physical instability statement, because the nonlinear terms
may dominate in ways the quadratic model does not see.

## Limits of the approximation statements

Three separate qualifications belong to the results of this page.

- **The quadratic model is exact only for quadratic data.** The model
$Mq''+Kq=J$ is a declared model class; it coincides with a mechanical chart
system $G_{\mathrm{kin}}(q)q''+\cdots=-\nabla U(q)$ only when the kinetic
metric is constant and the potential is quadratic. The small-oscillation
model at an equilibrium is a first-order Taylor model, and
[[pthm-cm09-linearization-at-a-strict-minimum]] identifies it with the
derivative linearization without asserting that it approximates the
nonlinear motion.

- **The linearization error bound is finite-time and small-data.** The
estimate of [[pthm-cm09-linearization-error-bound]],
$\lVert z(t)-y(t)\rVert_{2}\le C\delta^{2}te^{(\lVert A\rVert+2L)t}$ on
$[0,T]$ under $\delta e^{LT}<r_{0}$, controls the discrepancy of the
nonlinear and linear motions only for the stated horizon, datum size and
regularity; the exponential factor grows with $T$, and no all-time
closeness, stability or instability conclusion follows from it.

- **The averaging estimate is a comparison, not an identity.** The
order-$\varepsilon$ bound of [[pthm-cm09-averaging-for-weak-damping]] holds
on the $O(1/\varepsilon)$ horizon under the displayed smallness, trapping and
constant hypotheses, and compares the exact weakly damped model with a
different, averaged model; it is not an exact decay law of the damped
oscillator, and its constants $M,L,K$ depend on the chosen ball and horizon.

Beyond the mathematical qualifications, the parameters of the models of this
page — masses, stiffnesses, damping coefficients, drive amplitudes and
frequencies — are model data. A value of such a parameter taken from a
calibration experiment is an empirical premise carrying the apparatus
conditions and the measurement uncertainty, and no claim of this page
identifies a model frequency with an observed spectral line without a
specified measurement model, which is not supplied here.

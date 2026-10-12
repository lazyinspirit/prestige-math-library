---
id: pthm-cm09-linearization-at-a-strict-minimum
kind: physics-theorem
title: "Small oscillations at a strict minimum: the linearized model, its normal modes and the Lyapunov stability of the nonlinear equilibrium"
status: draft
origin: session
domain: physics
dependency_level: 16
deps: [def-cm09-coupled-quadratic-model, pthm-cm09-free-modes-and-degeneracy, thm-cm-quadratic-mode-decomposition, prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium, thm-cm-energy-stability-of-a-strict-minimum, lem-cm-strict-minimum-has-positive-semidefinite-hessian, def-cm-mechanical-vector-field-and-energy-in-a-chart, def-cm-equilibrium-and-lyapunov-stability, cor-hessian-is-symmetric, def-hessian-and-euclidean-critical-point, def-matrix-product-and-identity-matrix, def-ck-euclidean-maps-and-diffeomorphisms, def-interval]
dependency_roles:
  def-cm09-coupled-quadratic-model: formulation-prerequisite
  pthm-cm09-free-modes-and-degeneracy: physical-result
  thm-cm-quadratic-mode-decomposition: mathematical-premise
  prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium: mathematical-premise
  thm-cm-energy-stability-of-a-strict-minimum: mathematical-premise
  lem-cm-strict-minimum-has-positive-semidefinite-hessian: mathematical-premise
  def-cm-mechanical-vector-field-and-energy-in-a-chart: mathematical-premise
  def-cm-equilibrium-and-lyapunov-stability: mathematical-premise
  cor-hessian-is-symmetric: mathematical-premise
  def-hessian-and-euclidean-critical-point: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A mechanical system in a chart at a strict local minimum of its potential: the assigned small-oscillation quadratic model with mass metric M(q_0) and stiffness the Hessian D^2 U(q_0) (symmetric and non-negative), the identification of that model with the derivative linearization of the mechanical field, the complete normal-mode classification of the linearized motions with frequencies sqrt(lambda_i) and no exponential directions, and the Lyapunov stability of the nonlinear equilibrium by exact energy conservation. The stability conclusion is a statement about the declared chart model; it asserts no asymptotic attraction, no measured frequency, no particular physical system and no empirical claim, and the accuracy of the linear model as an approximation of the nonlinear motion is a separate finite-time statement on this page."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.6, Eqs. (2.113)-(2.129), printed pages 38-41 (PDF pages 44-47): expansion about an equilibrium, the quadratic matrices and the stability reading of the normal modes"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 3, Sections 3.1-3.2, printed pages 52-59 (PDF pages 55-62): the quadratic natural Lagrangian about a minimum and the generalized symmetric eigenproblem"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 6.7, Theorem 6.16: a fixed point of Newton's equation is stable if the potential has a local minimum there"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the mechanical system in a chart of
[[def-cm-mechanical-vector-field-and-energy-in-a-chart]] with kinetic metric
field $M:\Omega\to M_{n}(\mathbb R)$ of class $C^{2}$, symmetric positive
definite at every point of the open set $\Omega\subseteq\mathbb R^{n}$, and
potential $U:\Omega\to\mathbb R$ of class $C^{2}$; write $G$ for its
mechanical vector field on $\Omega\times\mathbb R^{n}$. Let $q_{0}\in\Omega$
be a **strict local minimum** of $U$: $\nabla U(q_{0})=0$ and there is
$r_{0}>0$ with $\overline B(q_{0},r_{0})\subseteq\Omega$ and
$U(q)>U(q_{0})$ for $0<\lVert q-q_{0}\rVert_{2}<r_{0}$. Let
$M_{0}:=M(q_{0})$ and $K:=D^{2}U(q_{0})$. Then:

1. $K$ is symmetric and non-negative, and the small-oscillation model at
$q_{0}$ of clause (d) of [[def-cm09-coupled-quadratic-model]] — the coupled
quadratic model with mass metric matrix $M_{0}$, stiffness $K$ and zero
generalized force, in the displacement coordinates $\xi=q-q_{0}$ — is an
oscillatory model in the sense of clause (e) of that definition;
2. the linearization of $G$ at $(q_{0},0)$ is
$$DG(q_{0},0)(\delta q,\delta v)=\bigl(\delta v,\,-M_{0}^{-1}K\,\delta q\bigr)\qquad(\delta q,\delta v\in\mathbb R^{n}),$$
and for a curve $\xi:J\to\mathbb R^{n}$ of class $C^{2}$ on an interval $J$
with nonempty interior the following are equivalent: $\xi$ is a motion of the
small-oscillation model, $M_{0}\xi''+K\xi=0$ on $J$, and $t\mapsto(\xi(t),\xi'(t))$
solves the linear system $y'=DG(q_{0},0)y$ on $J$;
3. the motions of the small-oscillation model are exactly the modal
superpositions of clause 2 of [[pthm-cm09-free-modes-and-degeneracy]] with
every modal stiffness $\lambda_{i}\ge0$: there are no exponential
pure-$\lambda$ families, every oscillatory frequency is
$\omega_{i}=\sqrt{\lambda_{i}}$, and the pure-$\lambda$ motions of a
degenerate stiffness are the solutions of $q''+\lambda q=0$ with values in
the intrinsic subspace $N_{\lambda}=M_{0}^{-1/2}\{u:M_{0}^{-1/2}KM_{0}^{-1/2}u=\lambda u\}$;
4. $(q_{0},0)$ is a Lyapunov stable equilibrium of the nonlinear mechanical
system: for every $\varepsilon>0$ with
$\overline B((q_{0},0),\varepsilon)\subseteq\Omega\times\mathbb R^{n}$ there
is $\delta>0$ such that every solution of $z'=G(z)$ with
$\lVert z(0)-(q_{0},0)\rVert_{2}<\delta$ exists for all $t\ge0$ and stays
within distance $\varepsilon$ of $(q_{0},0)$.

No asymptotic attraction, no all-time validity of the linear model as an
approximation of the nonlinear motion, and no measured frequency is asserted.

## Facts & Assumptions

**Given:** The metric field $M$, the potential $U$, the strict local minimum
$q_{0}$, the mechanical field $G$, and the data $M_{0}=M(q_{0})$,
$K=D^{2}U(q_{0})$ of the statement.

[F1] Hessian at a strict minimum ([[def-hessian-and-euclidean-critical-point]],
[[cor-hessian-is-symmetric]],
[[lem-cm-strict-minimum-has-positive-semidefinite-hessian]]): $K$ is the
symmetric Hessian matrix of $U$ at the critical point $q_{0}$ and satisfies
$w^{\mathsf T}Kw\ge0$ for all $w\in\mathbb R^{n}$.

[F2] Derivative linearization ([[prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium]]
clauses 1-3): $G$ is totally differentiable at $(q_{0},0)$ with the displayed
derivative $DG(q_{0},0)$; the linearised equation at the equilibrium is
$M_{0}\xi''+K\xi=0$; and the linearized system is exactly the
constant-coefficient quadratic system with symmetric positive definite mass
matrix $M_{0}$ and symmetric non-negative stiffness $K$ of
[[thm-cm-quadratic-mode-decomposition]].

[F3] Model dictionary ([[def-cm09-coupled-quadratic-model]] clauses (b), (d),
(e)): the small-oscillation model at $q_{0}$ is the coupled quadratic model
with mass metric $M_{0}$, stiffness $K$ and $J\equiv0$ in the coordinates
$\xi$; its motions are the $C^{2}$ curves with $M_{0}\xi''+K\xi=0$, and its
phase system is $y'=Ay$ with $A=\begin{pmatrix}0&I_{n}\\-M_{0}^{-1}K&0\end{pmatrix}$;
it is oscillatory when $K$ is non-negative, and its modal vocabulary is that
of the definition's clause (e) with $M=M_{0}$.

[F4] Free modal classification ([[pthm-cm09-free-modes-and-degeneracy]]
clauses 1-4): for the free model with symmetric positive definite $M_{0}$ and
symmetric $K$ the motions are classified by the modal families of its clause
2; the pure-$\lambda$ motions form the intrinsic family described in its
clause 4.

[F5] Energy stability ([[thm-cm-energy-stability-of-a-strict-minimum]]): for
the $C^{2}$ positive definite metric field $M$, the $C^{2}$ potential $U$ and
the strict local minimum $q_{0}$, the rest point $(q_{0},0)$ of the
mechanical field is Lyapunov stable in the sense of
[[def-cm-equilibrium-and-lyapunov-stability]].

## Proof

**Proof technique:** direct; assemble the assigned model from the definition,
identify the derivative linearization with the model's phase system, read the
modal classification at a strict minimum, and invoke the energy-stability
theorem for the nonlinear statement.

1.1 Clause 1: by [F1] the stiffness $K=D^{2}U(q_{0})$ is symmetric and non-negative; by [F3] the small-oscillation model at $q_{0}$ is the coupled quadratic model with data $(M_{0},K,0)$, and a coupled quadratic model whose stiffness is non-negative is oscillatory in the sense of the definition's clause (e). [F1, F3, given]

1.2 Clause 2: by [F2] the derivative of $G$ at $(q_{0},0)$ is $(\delta q,\delta v)\mapsto(\delta v,-M_{0}^{-1}K\delta q)$; by [F3] the phase system of the small-oscillation model is $y'=Ay$ for the same block matrix $A$, and the model equation $M_{0}\xi''+K\xi=0$ is equivalent to $(\xi,\xi')'=A(\xi,\xi')$ by the product rule and invertibility of $M_{0}$. This proves clause 2. [F2, F3, given, algebra]

1.3 Clause 4: the hypotheses of [F5] are the $C^{2}$ positive definite metric field, the $C^{2}$ potential and the strict local minimum of the statement; its conclusion is exactly the Lyapunov stability assertion of clause 4 for the field $G$ and the rest point $(q_{0},0)$, whose equilibrium property is recorded in [[def-cm-mechanical-vector-field-and-energy-in-a-chart]]. [F5, given]

2.1 Clause 3: apply the classification of [F4] to the data $(M_{0},K,0)$ of the small-oscillation model; since $K$ is non-negative by [F1], every modal stiffness satisfies $\lambda_{i}\ge0$, so no exponential family occurs and the oscillatory and zero families of the free-mode theorem exhaust the motions, with frequencies $\omega_{i}=\sqrt{\lambda_{i}}$ and the intrinsic pure-$\lambda$ families described there. [F1, F3, F4, step 1.1]

3.1 Clauses 1-4 are proved. Clause 4 is a nonlinear conclusion obtained from exact energy conservation, not from the linearization; clauses 2 and 3 describe the linearized model only, and no accuracy of that model as an approximation of the nonlinear motion, and no attraction, is claimed here. [step 1.1, step 1.2, step 2.1, step 1.3] ∎

## Remarks

- **Stability is not asymptotic.** The proof of clause 4 uses exact
conservation of the mechanical energy, so the equilibrium is stable but not
attracting: there is no mechanism in an autonomous conservative model that
forces nearby motions to converge to the rest point, and none is asserted.

- **The linear model and the nonlinear motion.** Clause 2 identifies the
derivative linearization with the small-oscillation model; this makes the
normal-mode calculation a statement about the first-order Taylor model at the
equilibrium. The difference between that model and the nonlinear motion is
quantified, at finite times and on explicitly small data, by
[[pthm-cm09-linearization-error-bound]]; no all-time claim follows from
either theorem.

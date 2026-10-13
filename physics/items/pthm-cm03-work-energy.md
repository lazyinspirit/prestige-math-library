---
id: pthm-cm03-work-energy
kind: physics-theorem
title: "Power of the total force and the work-energy theorem: $K'=\\mathcal P$ and $K(t_1)-K(t_0)=W([t_0,t_1])$ along a motion"
status: draft
origin: session
domain: physics
dependency_level: 11
deps: [def-cm03-centre-of-mass-and-momenta, post-cm02-force-superposition, def-cm02-newtonian-flow, lem-cm-derivative-of-pairings-of-curves, def-euclidean-inner-product, def-vector-valued-derivative-and-integral, thm-newton-leibniz-with-interior-derivative, lem-finite-sum-laws, def-interval]
dependency_roles:
  def-cm03-centre-of-mass-and-momenta: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm02-newtonian-flow: formulation-prerequisite
  lem-cm-derivative-of-pairings-of-curves: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The work-energy identity of the force branch: along every motion the time derivative of the kinetic energy equals the power of the total force, and the change of kinetic energy over a time interval equals the work of the total force. The result is a conditional deduction from the adopted equation of motion and uses no potential, no pair structure and no conservation hypothesis; it asserts no frame-independent value and no measured quantity."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.3, Eqs. (1.19)-(1.21), chapter pages 6-7 (PDF pages 10-11): T = m v^2/2, dT = p dot dr, and the work-energy principle T(r_B) - T(r_A) = integral of F dot dr along the trajectory"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.3.2, Eq. (1.24) and the preceding display, printed page 8 (PDF page 14): the change of total kinetic energy equals the work integrals of the external and internal forces, sum_i integral F_i dot dr_i"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the force model and one inertial frame of
[[def-cm03-centre-of-mass-and-momenta]]: masses $m_{1},\dots,m_{N}>0$, an
open configuration domain $Q$, the force map $F$ with the standing hypotheses
of [[post-cm02-force-superposition]] clause (iii), and the quantities $w_{i}$,
$$K=\frac12\sum_{i}m_{i}\lVert w_{i}\rVert_{2}^{2},\qquad \mathcal P=\sum_{i}\bigl\langle F_{i}(t,x,w),\,w_{i}\bigr\rangle,\qquad W([t_{0},t_{1}])=\int_{t_{0}}^{t_{1}}\mathcal P(t)\,dt$$
along a curve family. Let $x:J\to Q$ be a **motion** of the model on an
interval $J$ with nonempty interior. Then:

1. $K$ is of class $C^{1}$ on $J$ and
   $$K'(t)=\mathcal P(t)\qquad(t\in J):$$
   the rate of change of the kinetic energy equals the power of the total
   force;
2. for all $t_{0}<t_{1}$ in $J$,
   $$K(t_{1})-K(t_{0})=\int_{t_{0}}^{t_{1}}\mathcal P(t)\,dt=W([t_{0},t_{1}]):$$
   the change of the kinetic energy equals the work of the total force.

No potential, no pair decomposition and no conservation hypothesis is used:
the identity is a consequence of the equation of motion alone, in the fixed
frame. The power and the work are frame-dependent (see clause 4
of the frame-transformation item of this page); the mechanical energy
statement of the potential branch is the energy balance of this page.

## Facts & Assumptions

**Given:** A force model of [[post-cm02-force-superposition]] with a motion $x:J\to Q$ on an interval $J$ with nonempty interior, and the quantities $K$, $\mathcal P$, $W$ of [[def-cm03-centre-of-mass-and-momenta]].

[L1] Notation and equation of motion ([[def-cm03-centre-of-mass-and-momenta]], [[def-cm02-newtonian-flow]]): $w_{i}=x_{i}'$ is $C^{1}$ because $x_{i}$ is $C^{2}$; $p_{i}=m_{i}w_{i}$; and $m_{i}\ddot x_{i}(t)=F_{i}(t,x(t),w(t))$ for all $i$, $t\in J$. The Euclidean inner product satisfies $\lVert u\rVert_{2}^{2}=\langle u,u\rangle$ ([[def-euclidean-inner-product]]) and finite sums are linear ([[lem-finite-sum-laws]]).

[L2] Derivative of the squared norm ([[lem-cm-derivative-of-pairings-of-curves]] clause 4): for a differentiable curve $u$, the function $t\mapsto\lVert u(t)\rVert_{2}^{2}$ is differentiable with derivative $2\langle u'(t),u(t)\rangle$.

[L3] Newton–Leibniz ([[thm-newton-leibniz-with-interior-derivative]]): if $G:[a,b]\to\mathbb R$ is continuous on $[a,b]$ and differentiable on $(a,b)$, and $f$ is Riemann integrable with $f=G'$ on $(a,b)$, then $\int_{a}^{b}f=G(b)-G(a)$. The interval $J$ has nonempty interior ([[def-interval]]).

## Proof

**Proof technique:** direct; differentiate the kinetic energy using the equation of motion and integrate the resulting identity.

1.1 For each $i$, $w_{i}$ is differentiable with derivative $w_{i}'=\ddot x_{i}$; [L2] gives $$\frac{d}{dt}\lVert w_{i}(t)\rVert_{2}^{2}=2\bigl\langle\ddot x_{i}(t),w_{i}(t)\bigr\rangle.$$ Multiplying by $\frac12m_{i}$ and summing over $i$ with the linearity of finite sums, $$K'(t)=\frac12\sum_{i}m_{i}\cdot2\bigl\langle\ddot x_{i}(t),w_{i}(t)\bigr\rangle=\sum_{i}\bigl\langle m_{i}\ddot x_{i}(t),w_{i}(t)\bigr\rangle=\sum_{i}\bigl\langle F_{i}(t,x(t),w(t)),w_{i}(t)\bigr\rangle=\mathcal P(t),$$ where the third equality is the equation of motion of [L1]. Each term is continuous in $t$ (the $F_{i}$ and $w_{i}$ are continuous), so $K'$ is continuous and $K$ is $C^{1}$; this is clause 1. [given, L1, L2, algebra]

2.1 Clause 2: fix $t_{0}<t_{1}$ in $J$. The function $K$ is continuous on $[t_{0},t_{1}]$ and differentiable on $(t_{0},t_{1})$ with $K'=\mathcal P$ by step 1.1, and $\mathcal P$ is continuous on $[t_{0},t_{1}]$, hence Riemann integrable there; [L3] gives $$\int_{t_{0}}^{t_{1}}\mathcal P=K(t_{1})-K(t_{0}),$$ which is the first equality of clause 2, and the second equality is the definition of $W([t_{0},t_{1}])$. [step 1.1, L1, L3] ∎

## Remarks

- **No structure beyond the equation of motion.** The power of the total force is the sum of the powers of whatever contributions the model declares, but the identity does not require the sum to split over pairs, and it holds for velocity-dependent and time-dependent forces alike.

- **Work depends on the frame and on the path.** For the boost velocity $v$ in [[pthm-cm03-frame-transformations]] clause 4, the power gains $\langle R\Sigma,v\rangle$, and the work gains the integral of this term. For a motion with the antisymmetric pair presentation, the momentum balance replaces that integral by $\langle R(P(t_{1})-P(t_{0})),v\rangle$; without those hypotheses the force-integral form applies. The work-energy identity holds in each frame separately.

- **Not yet an energy conservation statement.** Clause 2 relates the kinetic energy to the work of the total force; a conserved mechanical energy requires a potential, which is the subject of [[def-cm03-potential-and-mechanical-energy]] and [[pthm-cm03-energy-balance]].

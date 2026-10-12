---
id: pthm-cm16-variational-equation-and-linearization
kind: physics-theorem
title: "Linearisation along a motion of the mechanical model: the flow derivative solves the variational equation, with Lipschitz dependence, the constant-metric second-order form, and the conditional finite-time error bound of the linear approximation"
status: draft
origin: session
domain: physics
dependency_level: 12
deps: [def-cm16-flow-equilibria-and-invariant-sets,
       def-cm16-stability-and-hyperbolicity-concepts,
       thm-cm-smooth-dependence-and-the-variational-equation,
       thm-cm-finite-time-linearization-error-bound,
       def-cm02-newtonian-flow,
       def-cm-mechanical-vector-field-and-energy-in-a-chart,
       def-variational-equation-along-an-ode-solution,
       def-total-derivative-in-euclidean-space,
       def-jacobian-matrix-and-gradient,
       def-hessian-and-euclidean-critical-point,
       def-metric-ball,
       def-operator-norm,
       def-ck-euclidean-maps-and-diffeomorphisms,
       def-cm01-units]
dependency_roles:
  def-cm16-flow-equilibria-and-invariant-sets: formulation-prerequisite
  def-cm16-stability-and-hyperbolicity-concepts: formulation-prerequisite
  thm-cm-smooth-dependence-and-the-variational-equation: mathematical-premise
  thm-cm-finite-time-linearization-error-bound: mathematical-premise
  def-cm02-newtonian-flow: formulation-prerequisite
  def-cm-mechanical-vector-field-and-energy-in-a-chart: mathematical-premise
  def-variational-equation-along-an-ode-solution: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-hessian-and-euclidean-critical-point: mathematical-premise
  def-metric-ball: mathematical-premise
  def-operator-norm: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-cm01-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The linearisation of the mechanical chart model along a declared motion: the derivative of the model's local flow with respect to the initial state solves the variational equation along the motion; nearby initial states separate at most exponentially with the Lipschitz constant of the field; for a constant kinetic metric the second-order linearisation is M eta'' = -D^2 U(x(t)) eta; and whenever the quantitative quadratic remainder and linear growth bounds are declared on a ball, the finite-time difference between the nonlinear motion and the solution of the linearised equation obeys the supplier's explicit bound. The constants C and L are declared model-data bounds; no measured value, no long-time approximation and no global statement is asserted."
sources:
  references:
    - title: "Iain Stewart, Advanced Classical Mechanics (MIT 8.09/8.309, Fall 2014), Chapter 5 pp. 60-103: perturbation theory and the linearisation of a mechanical system about a reference motion"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), §§5.1-5.3: linearisation of oscillations about an equilibrium and the scope of the small-oscillation approximation"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "Gerald Sussman and Jack Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed., Chapter 5 and §7.2: perturbation of exact flows, series truncation and the warning that finite truncations need separate error estimates"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
---

## Statement

Let $n\ge1$, let $\Omega\subseteq\mathbb R^n$ be open, let
$M:\Omega\to M_n(\mathbb R)$ be a $C^2$ field of symmetric positive definite
matrices, let $U:\Omega\to\mathbb R$ be of class $C^2$, and let $G$ be the
mechanical vector field on the state domain $S_0:=\Omega\times\mathbb R^n$
([[def-cm-mechanical-vector-field-and-energy-in-a-chart]]), so that the
motions of the model are exactly the curves $t\mapsto\Phi(t,z_0)$ of the local
flow of the autonomous field $G$
([[def-cm16-flow-equilibria-and-invariant-sets]] clause (ii),
[[def-cm02-newtonian-flow]]). Fix a state $z_0=(q_0,v_0)\in S_0$, a time
$T>0$ and a radius $R>0$ such that $\overline B(z_0,R)\subseteq S_0$, put
$$M_R:=\sup_{\overline B(z_0,R)}\lVert G\rVert_2,\qquad L_R:=\sup_{\overline B(z_0,R)}\lVert DG\rVert,$$
and let $0<\rho<R-M_RT$ ([[def-metric-ball]],
[[def-jacobian-matrix-and-gradient]]). Then:

1. **(Flow derivative and variational equation.)** For every $a\in\overline
   B(z_0,\rho)$ the maximal solution $z(\,\cdot\,;a)$ is defined on $[0,T]$
   and stays in $B(z_0,R)$; the map $a\mapsto z(t;a)$ is differentiable at
   every $a\in B(z_0,\rho)$ for $t\in[0,T]$, and for every
   $u\in\mathbb R^{6N}$
   $$D_az(t;a)u=Y_a(t)u,$$
   where $Y_a$ is the unique solution of the variational equation along the
   reference motion $z(\,\cdot\,;a)$,
   $$Y'(t)=DG\bigl(z(t;a)\bigr)Y(t),\qquad Y(0)=I_{6N},$$
   in the sense of [[def-variational-equation-along-an-ode-solution]];
   moreover $\lVert z(t;a)-z(t;b)\rVert_2\le e^{L_Rt}\lVert a-b\rVert_2$ for
   all $a,b\in\overline B(z_0,\rho)$ and $t\in[0,T]$.
2. **(Constant-metric second-order form.)** Suppose in addition that $M$ is
   constant on $\Omega$, say $M(q)\equiv M$ with $M$ symmetric positive
   definite. Then along a motion $q:[0,T]\to\Omega$ with state curve
   $z(t)=(q(t),q'(t))$ the variational equation of clause 1 for a deviation
   $\eta:=Y_q$ (the first $n$ components of $Y$) is equivalent to the
   second-order equation
   $$M\,\eta''(t)=-D^2U\bigl(q(t)\bigr)\eta(t)\qquad(0\le t\le T),$$
   with $D^2U$ the Hessian of $U$
   ([[def-hessian-and-euclidean-critical-point]]).
3. **(Conditional finite-time error bound.)** Suppose in addition that
   $z_0$ is an equilibrium, $G(z_0)=0$, and write $A:=DG(z_0)$; suppose there
   are constants $C\ge0$, $L\ge0$ and $r>0$ with
   $\overline B(z_0,r)\subseteq S_0$ and
   $$\lVert G(z)-A(z-z_0)\rVert_2\le C\lVert z-z_0\rVert_2^2,\qquad \lVert G(z)\rVert_2\le L\lVert z-z_0\rVert_2\qquad(\lVert z-z_0\rVert_2\le r).$$
   Let $T>0$ and $\delta:=\lVert a-z_0\rVert_2>0$ with $\delta e^{LT}<r$, let
   $z(\,\cdot\,;a)$ be the model's motion through $a$, and let $y$ solve the
   linearised equation $y'=Ay$, $y(0)=a-z_0$. Then
   $$\lVert z(t;a)-z_0-y(t)\rVert_2\le C\delta^2\int_0^t e^{\lVert A\rVert(t-s)}e^{2Ls}\,\mathrm ds \le C\delta^2\,t\,e^{(\lVert A\rVert+2L)t}\qquad(0\le t\le T).$$
   under the supplier's interval, where $\lVert A\rVert$ is the operator norm
   ([[def-operator-norm]]).
4. **(Scope.)** The linearised equation approximates the model's motion only
   for finite times and initial states inside the declared ball with the
   declared quantitative bounds; the constants $M_R,L_R,C,L,r$ are model-data
   bounds, not measured quantities. Clause 1 gives no rate of separation
   beyond the exponential bound, no conclusion when the reference motion
   leaves $B(z_0,R)$ before time $T$, and no statement about the size of the
   time interval on which a linearisation is a good approximation; clause 3's
   hypotheses must be verified for the particular data.

## Facts & Assumptions

**Given:** the chart data $M,U$ of class $C^2$, the associated field $G$ on
$S_0=\Omega\times\mathbb R^n$, the state $z_0$, the numbers $T,R,\rho$ and
(for clause 2) a constant metric $M$; (for clause 3) an equilibrium $z_0$,
$A=DG(z_0)$ and the declared constants $C,L,r$ with the stated bounds.

[L1] Smooth dependence, the variational equation and Lipschitz bounds ([[thm-cm-smooth-dependence-and-the-variational-equation]]): for $F:U\to\mathbb R^n$ of class $C^1$ and $\overline B(a_0,R)\subseteq U$, $M:=\sup_{\overline B(a_0,R)}\lVert F\rVert_2$, $L:=\sup_{\overline B(a_0,R)}\lVert DF\rVert$ and $0<\rho<R-MT$, the maximal solution through $a\in\overline B(a_0,\rho)$ is defined on $[0,T]$, $\lVert x(t;a)-x(t;b)\rVert_2\le e^{Lt}\lVert a-b\rVert_2$, and $a\mapsto x(t;a)$ is differentiable with $D_ax(t;a)h=Y_a(t)h$, where $Y_a$ solves $Y'=DF(x(t;a))Y$, $Y(0)=I$.

[L2] The Hessian as the derivative of the gradient ([[def-hessian-and-euclidean-critical-point]]): for a $C^2$ field $U$, the gradient map $\nabla U$ is differentiable with derivative $D(\nabla U)(q)=D^2U(q)$ at every $q\in\Omega$; the Hessian matrix is symmetric.

[L3] The finite-time linearisation bound ([[thm-cm-finite-time-linearization-error-bound]]): for a continuous state-locally-Lipschitz $F$ with $\lVert F(z)-Az\rVert_2\le C\lVert z\rVert_2^2$ and $\lVert F(z)\rVert_2\le L\lVert z\rVert_2$ on $\overline B(0,r)$, and data with $\delta e^{LT}<r$, the maximal solution $z$ of $z'=F(z)$, $z(0)=z_0$ with $\lVert z_0\rVert_2=\delta$ satisfies $\lVert z(t)-y(t)\rVert_2\le C\delta^2\int_0^te^{\lVert A\rVert(t-s)}e^{2Ls}\,\mathrm ds$ for $t\in[0,T]$, where $y'=Ay$, $y(0)=z_0$.

## Proof

**Proof technique:** direct.

1.1 Clause 1: the field $G$ is of class $C^1$ on $S_0$, because $M$ is $C^2$ and $U$ is $C^2$ ([[def-cm-mechanical-vector-field-and-energy-in-a-chart]]); the numbers $M_R$ and $L_R$ are finite (continuous functions on the compact ball $\overline B(z_0,R)$). Apply [L1] with $F:=G$, $a_0:=z_0$, the given $R,T$ and $\rho$: every maximal solution through $a\in\overline B(z_0,\rho)$ is defined on $[0,T]$ and stays in $B(z_0,R)$, the Lipschitz bound $\lVert z(t;a)-z(t;b)\rVert_2\le e^{L_Rt}\lVert a-b\rVert_2$ holds, and $D_az(t;a)u=Y_a(t)u$ with $Y_a$ solving $Y'=DG(z(t;a))Y$, $Y(0)=I$, which is exactly the variational equation along the model's motion through $a$. [given, L1, algebra]

1.2 Clause 3: put $F(z):=G(z+z_0)$ on $\overline B(0,r)$; then $F$ is continuous and locally Lipschitz in the state (the standing regularity of $G$), $F(0)=G(z_0)=0$, $DF(0)=DG(z_0)=A$, and the declared bounds are exactly the hypotheses of [L3] for $F$ with the data $z_0$ replaced by $a-z_0$ of norm $\delta$: $\lVert F(\zeta)-A\zeta\rVert_2\le C\lVert\zeta\rVert_2^2$ and $\lVert F(\zeta)\rVert_2\le L\lVert\zeta\rVert_2$ for $\lVert\zeta\rVert_2\le r$. Applying [L3] to $F$ and translating by $z_0$ gives exactly the displayed bound for $\lVert z(t;a)-z_0-y(t)\rVert_2$ with $y'=Ay$, $y(0)=a-z_0$, on the supplier's interval. [given, L3, algebra]

2.1 Clause 2: with $M$ constant, $G(q,v)=(v,-M^{-1}\nabla U(q))$ ([[def-cm-mechanical-vector-field-and-energy-in-a-chart]]). By [L2], $\nabla U$ is differentiable with derivative $D^2U(q)$; hence $G$ is differentiable with $DG(q,v)(\eta,\theta)=(\theta,-M^{-1}D^2U(q)\eta)$. Writing $Y=(Y_q,Y_v)$ in the variational equation of step 1.1 gives $Y_q'=Y_v$ and $Y_v'=-M^{-1}D^2U(q(t))Y_q$; eliminating $Y_v=Y_q'$ from the first equation and substituting into the second yields $M Y_q''=-D^2U(q(t))Y_q$, that is the displayed second-order equation for $\eta=Y_q$. [step 1.1, given, L2, algebra]

3.1 Scope: clause 4 is the statement that no step above produced a conclusion outside the hypotheses of [L1] and [L3]: [L1] required the reference solution to stay in $\overline B(z_0,R)$ and yielded only the exponential Lipschitz bound, not an exact rate; [L3] required the quantitative bounds with constants $C,L,r$ and the smallness condition $\delta e^{LT}<r$; both are model-data hypotheses, and the constants are not measured quantities. [step 1.1, step 2.1, step 1.2] ∎

## Remarks

- **Interpretation.** Clause 1 is the precise sense in which "nearby initial states evolve near each other" in the model: the flow derivative is transported by the variational equation, and clause 3 quantifies when the linearised equation controls the nonlinear motion up to a finite time. A finite-time growth of the deviation is therefore a property of the linearised equation on a stated interval, not a claim about long-time behaviour or chaos; see [[def-cm16-finite-time-growth-rates]].

- **Regularity.** $M$ of class $C^2$ and $U$ of class $C^2$ make $G$ of class $C^1$, which suffices for the variational equation. If $M$ is only continuous, the variational equation need not exist, and clause 1 is not available; the local Lipschitz regularity of the field alone still gives uniqueness of motions.

- **Units.** $\lVert A\rVert$, $L_R$ and $L$ have dimension $\tau^{-1}$ and $C$ has dimension of inverse state-units times $\tau^{-1}$; the bound in clause 3 is dimensionally consistent because $C\delta^2$ has the dimension of a state rate times time ([[def-cm01-units]]).

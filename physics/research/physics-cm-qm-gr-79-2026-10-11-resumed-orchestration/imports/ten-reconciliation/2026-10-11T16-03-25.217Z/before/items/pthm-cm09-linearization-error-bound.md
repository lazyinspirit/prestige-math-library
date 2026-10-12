---
id: pthm-cm09-linearization-error-bound
kind: physics-theorem
title: "Finite-time error control for the small-oscillation approximation: the quadratic remainder of the mechanical field and the variation-of-constants bound"
status: draft
origin: session
domain: physics
dependency_level: 15
deps: [def-cm09-coupled-quadratic-model, thm-cm-finite-time-linearization-error-bound, prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium, def-cm-mechanical-vector-field-and-energy-in-a-chart, def-hessian-and-euclidean-critical-point, cor-hessian-is-symmetric, def-locally-lipschitz-in-the-state-variable, def-operator-norm, def-metric-ball, def-ck-euclidean-maps-and-diffeomorphisms, thm-mean-value-inequality, thm-heine-borel-rn, cor-inverse-matrix-by-adjugate, thm-continuous-partial-derivatives-imply-total-differentiability, cor-vector-valued-ftc-and-lipschitz-bound, thm-norm-inequality-for-the-vector-valued-integral, def-vector-valued-derivative-and-integral, thm-existence-and-uniqueness-of-a-maximal-ode-solution, def-maximal-ode-solution, def-euclidean-inner-product, def-matrix-product-and-identity-matrix, def-interval]
dependency_roles:
  def-cm09-coupled-quadratic-model: formulation-prerequisite
  thm-cm-finite-time-linearization-error-bound: mathematical-premise
  prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium: mathematical-premise
  def-cm-mechanical-vector-field-and-energy-in-a-chart: mathematical-premise
  def-hessian-and-euclidean-critical-point: mathematical-premise
  cor-hessian-is-symmetric: mathematical-premise
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  def-operator-norm: mathematical-premise
  def-metric-ball: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-mean-value-inequality: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  cor-inverse-matrix-by-adjugate: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  cor-vector-valued-ftc-and-lipschitz-bound: mathematical-premise
  thm-norm-inequality-for-the-vector-valued-integral: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  def-maximal-ode-solution: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Finite-time error control for the small-oscillation model of a mechanical system in a chart at a mechanical equilibrium: for a C^3 kinetic metric field and a C^3 potential with vanishing gradient at q_0, the mechanical field is C^2 near the equilibrium, its Taylor remainder at the linearization is quadratic with constants obtained from compactness, and the finite-time variation-of-constants estimate bounds the difference between the nonlinear motion and the linearized (normal-mode) motion by C delta^2 t exp((||A||+2L)t) on every horizon T with delta exp(LT)<r_0. The statement is a conditional finite-time estimate for the declared chart model under explicit regularity and smallness hypotheses; it asserts no all-time validity of the linear approximation, no stability conclusion, no large-data statement and no empirical claim, and the constants depend on the model data only through its behaviour on the stated ball."
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 2.4, Theorem 2.10 and Section 6.2: smooth dependence, the first variational equation and the linearization estimates, printed pages 45-48 and 190-197"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 7, Section 7.1.3, printed pages 147-148 (PDF pages 150-151): the linearised oscillator and the limits of linear reasoning"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Chapter 3, Section 3.2, Eqs. (3.8)-(3.23), chapter pages 2-8 (PDF pages 34-40): the Taylor expansion of the potential about a fixed point and the linearised equation, with the warning that a nondegenerate minimum does not by itself prove nonlinear stability"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $\Omega\subseteq\mathbb R^{n}$ be open, let
$M:\Omega\to M_{n}(\mathbb R)$ be a field of class $C^{3}$ with $M(q)$
symmetric positive definite for every $q\in\Omega$, and let
$U:\Omega\to\mathbb R$ be of class $C^{3}$ with $\nabla U(q_{0})=0$ at a point
$q_{0}\in\Omega$. Let $G$ be the mechanical vector field of
[[def-cm-mechanical-vector-field-and-energy-in-a-chart]] on
$\Omega\times\mathbb R^{n}$, let $r_{0}>0$ satisfy
$\overline B(q_{0},r_{0})\subseteq\Omega$ and define
$F:\{\zeta=(\delta q,\delta v):q_{0}+\delta q\in\Omega\}\to\mathbb R^{2n}$ by
$F(\delta q,\delta v):=G(q_{0}+\delta q,\delta v)$. Put
$A:=DF(0)=DG(q_{0},0)$. Then:

1. $F$ is of class $C^{2}$, $F(0)=0$, $F$ is locally Lipschitz in the state
variable, and
$$DG(q_{0},0)(\delta q,\delta v)=\bigl(\delta v,\,-M(q_{0})^{-1}D^{2}U(q_{0})\,\delta q\bigr);$$
moreover there are constants $C,L\ge0$ with
$$\lVert F(\zeta)-A\zeta\rVert_{2}\le C\lVert\zeta\rVert_{2}^{2},\qquad \lVert F(\zeta)\rVert_{2}\le L\lVert\zeta\rVert_{2}\qquad(\lVert\zeta\rVert_{2}\le r_{0});$$
one may take $L=\sup_{\lVert\eta\rVert_{2}\le r_{0}}\lVert DF(\eta)\rVert$
([[def-operator-norm]]) and $C=\Lambda/2$ for any Lipschitz constant
$\Lambda$ of $DF$ on the closed ball
$\overline B(0,r_{0})\subseteq\mathbb R^{2n}$ ([[def-metric-ball]]).
2. For every datum $z_{0}=(q_{0}+\delta q_{0},v_{0})$ with
$\delta:=\lVert(\delta q_{0},v_{0})\rVert_{2}>0$ and every $T>0$ with
$\delta e^{LT}<r_{0}$, the maximal solution $z=(q,v)$ of $z'=G(z)$ with
$z(0)=z_{0}$ is defined on $[0,T]$ ([[def-maximal-ode-solution]]) and
satisfies, for every $t\in[0,T]$,
$$\lVert z(t)-y(t)\rVert_{2}\le C\delta^{2}\,t\,e^{(\lVert A\rVert+2L)t},$$
where $y(t)=(q_0+\xi(t),\eta(t))$ and $\widetilde y=(\xi,\eta):\mathbb R\to\mathbb R^{2n}$ solves $\widetilde y'=A\widetilde y$, $\widetilde y(0)=(\delta q_0,v_0)$. Thus $y$ is the linear approximation translated back to the original chart.
3. Writing $\widetilde y=(\xi,\eta)$ for the displacement linear solution of clause 2, the first
component $\xi$ is exactly the unique motion of the small-oscillation model
at $q_{0}$ of clause (d) of [[def-cm09-coupled-quadratic-model]] with datum
$(\delta q_{0},v_{0})$: $\xi$ is $C^{2}$ on $\mathbb R$ with
$M(q_{0})\xi''+D^{2}U(q_{0})\xi=0$, $\xi(0)=\delta q_{0}$ and
$\xi'(0)=v_{0}$.

No all-time statement, no statement for data violating the smallness
condition $\delta e^{LT}<r_{0}$, and no value of any measured quantity is
asserted.

## Facts & Assumptions

**Given:** The $C^{3}$ metric field $M$, the $C^{3}$ potential $U$ with
$\nabla U(q_{0})=0$, the mechanical field $G$, the radius $r_{0}$, the
translated field $F$, the matrix $A=DF(0)$ and a datum
$z_{0}=(q_{0}+\delta q_{0},v_{0})$ with $\delta>0$.

[F1] Regularity of the mechanical field
([[def-cm-mechanical-vector-field-and-energy-in-a-chart]]): $G(q,v)=(v,M(q)^{-1}B(q,v))$
with $B(q,v)=\tfrac12\nabla_{q}(v^{\mathsf T}M(q)v)-(D_{q}M(q)[v])v-\nabla U(q)$;
the maps $M$, $\partial_{k}M$, $\nabla_{q}(v^{\mathsf T}M(q)v)$, $(D_{q}M(q)[v])v$,
$\nabla U$ and $q\mapsto M(q)^{-1}$ are respectively $C^{3}$, $C^{2}$, $C^{2}$,
$C^{2}$, $C^{2}$ and $C^{3}$ under the stated hypotheses, because
$M^{-1}=\det(M)^{-1}\mathrm{adj}(M)$ has entries polynomial in the entries of
$M$ divided by the nonvanishing continuous function $\det M$
([[cor-inverse-matrix-by-adjugate]],
[[thm-continuous-partial-derivatives-imply-total-differentiability]],
[[def-ck-euclidean-maps-and-diffeomorphisms]]); hence $G$ and $F$ are $C^{2}$,
so $F$ is locally Lipschitz in the state variable
([[def-locally-lipschitz-in-the-state-variable]]).

[F2] Linearization and equality of derivatives
([[prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium]]
clauses 1-2): $G$ is totally differentiable at $(q_{0},0)$ and
$DG(q_{0},0)(\delta q,\delta v)=(\delta v,-M(q_{0})^{-1}D^{2}U(q_{0})\delta q)$;
$D^{2}U(q_{0})$ is symmetric ([[cor-hessian-is-symmetric]],
[[def-hessian-and-euclidean-critical-point]]). Since $F$ is the translation
of $G$ to the equilibrium, $A=DF(0)=DG(q_{0},0)$ and $F(0)=G(q_{0},0)=0$
because $q_{0}$ is an equilibrium.

[F3] Compactness and mean value
([[thm-heine-borel-rn]], [[thm-mean-value-inequality]],
[[def-metric-ball]]): the closed ball $\overline B(0,r_{0})$ is a compact
convex subset of the open domain of $F$; a continuous real function on it
attains its maximum, and a continuous map with $\lVert DF\rVert\le L$ on the
ball satisfies $\lVert F(\eta)-F(\eta')\rVert_{2}\le L\lVert\eta-\eta'\rVert_{2}$
there.

[F4] Fundamental theorem along rays
([[cor-vector-valued-ftc-and-lipschitz-bound]],
[[thm-norm-inequality-for-the-vector-valued-integral]],
[[def-vector-valued-derivative-and-integral]]): for
$\lVert\zeta\rVert_{2}\le r_{0}$ the curve $t\mapsto F(t\zeta)$ on $[0,1]$ is
$C^{1}$ with derivative $DF(t\zeta)\zeta$, and
$$F(\zeta)-F(0)=\int_{0}^{1}DF(t\zeta)\zeta\,dt,\qquad \Bigl\lVert\int_{0}^{1}\phi(t)\,dt\Bigr\rVert_{2}\le\int_{0}^{1}\lVert\phi(t)\rVert_{2}\,dt .$$

[F5] Finite-time linearization bound
([[thm-cm-finite-time-linearization-error-bound]] with state dimension $2n$):
for the open domain of $F$, the constants $r_{0},C,L$ and the matrix $A$ of
the statement, the maximal solution $z$ of $z'=F(z)$, $z(0)=z_{0}$ is
defined on $[0,T]$ whenever $\delta e^{LT}<r_{0}$, it satisfies
$\lVert z(t)\rVert_{2}\le\delta e^{Lt}$ there, and
$$\lVert z(t)-y(t)\rVert_{2}\le C\delta^{2}\int_{0}^{t}e^{\lVert A\rVert(t-s)}e^{2Ls}\,ds\le C\delta^{2}te^{(\lVert A\rVert+2L)t}$$
for $t\in[0,T]$, where $y$ solves $y'=Ay$, $y(0)=z_{0}$; every initial value
problem has a unique maximal solution
([[thm-existence-and-uniqueness-of-a-maximal-ode-solution]],
[[def-maximal-ode-solution]]).

[F6] Model dictionary ([[def-cm09-coupled-quadratic-model]] clauses (b), (d)):
the small-oscillation model at $q_{0}$ is the coupled quadratic model with
mass metric matrix $M(q_{0})$ and stiffness $D^{2}U(q_{0})$, whose phase
system is $y'=Ay$ with the displayed block matrix
$A=\begin{pmatrix}0&I_{n}\\-M(q_{0})^{-1}D^{2}U(q_{0})&0\end{pmatrix}$; a
$C^{2}$ curve $\xi$ is a motion of it if and only if
$M(q_{0})\xi''+D^{2}U(q_{0})\xi=0$, with the datum read off $(\xi(0),\xi'(0))$.

## Proof

**Proof technique:** direct; prove the quadratic-remainder bounds for the
translated mechanical field by compactness and the fundamental theorem along
rays, then apply the finite-time linearization theorem and identify the
linear solution with the small-oscillation motion.

1.1 Clauses 1 and the derivative identity: by [F1] the translated field $F$ is $C^{2}$ on its open domain and locally Lipschitz; $F(0)=0$ and $A=DF(0)=DG(q_{0},0)$ with the displayed block form are [F2]. [F1, F2]

1.2 Quantitative remainder and growth bounds: since $F$ is $C^{2}$, $DF$ is $C^{1}$, hence continuous on the compact ball $\overline B(0,r_{0})$; thus $L:=\sup_{\lVert\eta\rVert_{2}\le r_{0}}\lVert DF(\eta)\rVert$ is finite, and $DF$ is Lipschitz on the convex ball with some finite constant $\Lambda$ (each entry of $DF$ has continuous gradient and is Lipschitz on the ball by [F3] with the supremum of that gradient; a finite sum of such bounds bounds $\lVert DF(\eta)-DF(\eta')\rVert$). For $\lVert\zeta\rVert_{2}\le r_{0}$, [F4] applied to the $C^{1}$ curve $t\mapsto F(t\zeta)-tA\zeta$, whose derivative is $DF(t\zeta)\zeta-A\zeta=(DF(t\zeta)-DF(0))\zeta$, gives $$F(\zeta)-A\zeta=\int_{0}^{1}\bigl(DF(t\zeta)-DF(0)\bigr)\zeta\,dt,$$ hence $\lVert F(\zeta)-A\zeta\rVert_{2}\le\int_{0}^{1}\Lambda t\lVert\zeta\rVert_{2}^{2}dt=\tfrac{\Lambda}{2}\lVert\zeta\rVert_{2}^{2}$; and $F(\zeta)=F(\zeta)-F(0)$ with [F3] gives $\lVert F(\zeta)\rVert_{2}\le L\lVert\zeta\rVert_{2}$. This proves the bounds of clause 1 with $C=\Lambda/2$. [F1, F3, F4, algebra]

2.1 The finite-time bound: apply [F5] to $F$, the constants $r_{0},C,L$, the matrix $A$ and the displaced datum $\zeta_0=(\delta q_0,v_0)$ of norm $\delta$. The maximal solution $\zeta$ of $\zeta'=F(\zeta)$ is defined on $[0,T]$ and obeys the error bound against $\widetilde y$. Translating back gives $z(t)=(q_0+\zeta_q(t),\zeta_v(t))$, the physical phase solution through $z_0$; $y(t)=(q_0+\xi(t),\eta(t))$ has exactly the same translation, so $\|z(t)-y(t)\|_2=\|\zeta(t)-\widetilde y(t)\|_2$; this is clause 2. [F5, step 1.2, given]

3.1 Identification of the linear solution: by [F2] the matrix $A$ is the block matrix $(\delta q,\delta v)\mapsto(\delta v,-M(q_{0})^{-1}D^{2}U(q_{0})\delta q)$; the displacement linear solution $\widetilde y=(\xi,\eta)$ of $\widetilde y'=A\widetilde y$, $\widetilde y(0)=(\delta q_0,v_0)$ therefore satisfies $\eta=\xi'$, hence $\xi''=-M(q_{0})^{-1}D^{2}U(q_{0})\xi$, equivalently $M(q_{0})\xi''+D^{2}U(q_{0})\xi=0$, with $\xi(0)=\delta q_{0}$, $\xi'(0)=v_{0}$; by [F6] this is exactly the motion of the small-oscillation model with that datum, and it is unique by the model's phase-system uniqueness. This is clause 3. [F2, F6, step 2.1, algebra]

4.1 Clauses 1-3 are proved. The estimate is a finite-time statement under the explicit smallness hypothesis $\delta e^{LT}<r_{0}$; the constants $C,L$ exist by compactness and are not asserted to be optimal, and no long-time, stability or empirical conclusion is drawn. [step 1.1, step 1.2, step 2.1, step 3.1] ∎

## Remarks

- **Where the exponential factor comes from.** The linearized flow itself
may grow exponentially at rate $\lVert A\rVert$ (an unstable equilibrium
included), and the nonlinear remainder is controlled by the Lipschitz growth
$e^{2Lt}$ of the solution; the product is the displayed rate
$\lVert A\rVert+2L$. On a fixed horizon this rate is a constant, and the
bound is of order $\delta^{2}$ in the initial displacement.

- **Constant versus asymptotic statements.** The theorem fixes a horizon
$T$ and shrinks the datum; it does not assert that the nonlinear motion stays
close to the linear one for all time, nor that a small initial displacement
produces a small displacement later. Such all-time statements are separate
problems (for the stable case they concern nonlinear stability, for the
unstable case nonlinear instability) and are not obtained from this
estimate.

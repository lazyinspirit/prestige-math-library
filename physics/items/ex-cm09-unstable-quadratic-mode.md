---
id: ex-cm09-unstable-quadratic-mode
kind: example
title: "The inverted pendulum about its upward equilibrium: the negative modal
  stiffness, the exponential quadratic mode and the nonlinear instability"
status: draft
origin: session
domain: physics
dependency_level: 18
deps:
  - def-cm09-coupled-quadratic-model
  - pthm-cm09-free-modes-and-degeneracy
  - rem-cm09-zero-modes-degeneracy-and-scope
  - pthm-cm09-linearization-at-a-strict-minimum
  - def-cm-mechanical-vector-field-and-energy-in-a-chart
  - prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium
  - thm-cm-instability-of-a-hyperbolic-saddle
  - def-cm-equilibrium-and-lyapunov-stability
  - def-cm01-units
  - def-euclidean-inner-product
  - thm-sine-and-cosine-derivatives
  - cor-differentiable-implies-continuous
  - thm-intermediate-value
  - thm-exponential-is-strictly-increasing
  - thm-of-square-roots
  - thm-cm-homogeneous-oscillator-solution-classification
  - def-ck-euclidean-maps-and-diffeomorphisms
  - prop-cm-oscillator-degenerate-and-repulsive-cases
dependency_roles:
  def-cm09-coupled-quadratic-model: formulation-prerequisite
  pthm-cm09-free-modes-and-degeneracy: physical-result
  rem-cm09-zero-modes-degeneracy-and-scope: formulation-prerequisite
  pthm-cm09-linearization-at-a-strict-minimum: physical-result
  def-cm-mechanical-vector-field-and-energy-in-a-chart: mathematical-premise
  prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium: mathematical-premise
  thm-cm-instability-of-a-hyperbolic-saddle: mathematical-premise
  def-cm-equilibrium-and-lyapunov-stability: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-differentiable-implies-continuous: mathematical-premise
  thm-intermediate-value: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  thm-of-square-roots: mathematical-premise
  thm-cm-homogeneous-oscillator-solution-classification: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  prop-cm-oscillator-degenerate-and-repulsive-cases: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked instance of an unstable quadratic direction: the
  planar inverted pendulum of mass m and length l about its upward equilibrium,
  with chart data M = m l^2 and U(theta) = m g l cos(theta) measured from the
  upward vertical, negative Hessian -m g l, the exact exponential motions of the
  small-oscillation model and the exponential escaping family of the quadratic
  model, together with the nonlinear Lyapunov instability of the upward
  equilibrium obtained from the hyperbolic-saddle theorem. The example is a
  conditional statement about the declared mathematical model; g, m and l are
  model parameters and no measured period or escape time is asserted."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015
        printing), Section 2.6, Eqs. (2.116)-(2.124), printed pages 38-41 (PDF
        pages 44-47): the two behaviours f'(x_0)<0 and f'(x_0)>0 about an
        equilibrium, the exponential family and the linear instability for a
        positive derivative"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics
        (title page last edited September 1, 2026), Chapter 3, Section 3.2, Eqs.
        (3.8)-(3.23), chapter pages 2-5 (PDF pages 34-37): fixed-point Taylor
        expansion, the oscillatory and exponential linear families according
        to the sign of nonzero potential curvature, and the zero-curvature
        caveat in footnote 2; the nonlinear instability here is supplied by
        the local hyperbolic-saddle theorem"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Example

The algebra below uses the fixed-unit numerical convention of [[def-cm09-coupled-quadratic-model]], with coordinate units radians, time unit $1\,\mathrm s$ and energy unit $1\,\mathrm J$. Physical model parameters are given their stated units; in matrix products, initial-vector identities and coefficient formulas their numerical coefficients in these fixed units are used. Modal amplitudes have common unit $a_*=(1\,\mathrm J)^{1/2}(1\,\mathrm s)$; the $j$-th component of a mass-normalized modal vector has unit $s_j/a_*$. Modal oscillatory and hyperbolic coefficients have unit $a_*$, and zero-mode slopes have unit $a_*/(1\,\mathrm s)$. Physical coordinates and energies are reconstructed with the coordinate units and $1\,\mathrm J$, respectively. In particular a numerical single-mode datum $q(0)=u_i$ means a modal amplitude of one in this common amplitude unit.

Global-time, growth and boundedness claims below refer to the unique maximal extension of the autonomous free equation on $\mathbb R$; local motions remain its restrictions. Values at $0$ in coefficient formulas are evaluated on that extension when the original interval omits $0$.

In the formulas below, $\cosh u=(e^{u}+e^{-u})/2$ and
$\sinh u=(e^{u}-e^{-u})/2$, as in the hyperbolic family of
[[pthm-cm09-free-modes-and-degeneracy]].

Let a planar pendulum consist of one particle label of mass $m>0$ attached
to a fixed pivot by a massless rod of length $l>0$, and let $\theta$ be its
angle from the **upward** vertical, read in radians (dimensionless under
[[def-cm01-units]]); let $g>0$ be the uniform gravitational acceleration of
the model. In the chart with kinetic metric field $M(\theta)=ml^{2}$ and
potential $U(\theta)=mgl\cos\theta$, the mechanical system of
[[def-cm-mechanical-vector-field-and-energy-in-a-chart]] has energy
$E=\tfrac12ml^{2}\theta'^{2}+mgl\cos\theta$ and equation
$ml^{2}\theta''=mgl\sin\theta$, that is $\theta''=(g/l)\sin\theta$. Then:

1. $\theta=0$ is a mechanical equilibrium and a strict local **maximum** of
$U$ on the chart, with $K:=D^{2}U(0)=-mgl<0$; the small-oscillation model
of clause (d) of [[def-cm09-coupled-quadratic-model]] is the one-dimensional
quadratic model $ml^{2}\xi''-mgl\,\xi=0$, whose modal stiffness is
$\lambda=-g/l<0$;
2. with $\kappa:=\sqrt{g/l}>0$, physical frequency unit $\mathrm s^{-1}$, every motion of that quadratic model on an
interval with nonempty interior is
$$\xi(t)=a\cosh(\kappa t)+d\sinh(\kappa t),\qquad a,d\in\mathbb R,$$
Here $a,d$ are coefficients of the angle coordinate, read in radians; $b$ below denotes its initial angular velocity in radians per second. The datum $\xi(0)=0$, $\xi'(0)=b\ne0$ gives
$\xi(t)=(b/\kappa)\sinh(\kappa t)$, unbounded on $[0,\infty)$;
3. the rest point of the quadratic model is not Lyapunov stable
([[def-cm-equilibrium-and-lyapunov-stability]]): with
$\varepsilon_{0}=1$ and every $\delta>0$, a datum of size
$<\delta$ leads to a motion reaching norm $1$;
4. the **nonlinear** upward equilibrium $(\theta,\theta')=(0,0)$ of the
pendulum chart system is not Lyapunov stable either: the field
$F(\theta,v)=(v,(g/l)\sin\theta)$ is $C^{1}$ with $F(0,0)=0$ and
$DF(0,0)=\begin{pmatrix}0&1\\ g/l&0\end{pmatrix}$, whose eigenvalues
$\pm\sqrt{g/l}$ are real, nonzero and include the positive value
$\sqrt{g/l}$, so the hyperbolic-saddle theorem applies.

## Facts & Assumptions

**Given:** The parameters $m,l,g>0$, the chart metric field and potential $M(\theta)=ml^{2}$, $U(\theta)=mgl\cos\theta$, the field $F(\theta,v)=(v,(g/l)\sin\theta)$, and the numbers $\kappa=\sqrt{g/l}$ and $\varepsilon_{0}=1$.

[F1] Mechanical chart model ([[def-cm-mechanical-vector-field-and-energy-in-a-chart]]): $\theta=0$ satisfies $\nabla U(0)=U'(0)=0$ and is a mechanical equilibrium; $U''(0)=-mgl$, so $K=D^{2}U(0)$ is the symmetric matrix $-mgl<0$; the mechanical vector field is $G(\theta,v)=(v,-U'(\theta)/ml^{2})=(v,(g/l)\sin\theta)$.

[F2] Small-oscillation model ([[def-cm09-coupled-quadratic-model]] clause (d)): the model at the equilibrium is the coupled quadratic model with mass metric $ml^{2}$, stiffness $K=-mgl$ and zero generalized force, in the displacement coordinate $\xi$; its modal stiffness is $\lambda=K/M=-g/l$.

[F3] Free-mode theory ([[pthm-cm09-free-modes-and-degeneracy]] clauses 2 and 6): for $\lambda<0$ the free motions are $a\cosh(\kappa t)+d\sinh(\kappa t)$ with $\kappa=\sqrt{-\lambda}$, and the rest point of the free model is not Lyapunov stable, for every requested initial size, with an escaping datum of smaller size and an explicit growing family. Stable decaying families are not asserted to escape.

[F4] Hyperbolic instability ([[thm-cm-instability-of-a-hyperbolic-saddle]]): for a $C^{1}$ field $F$ on an open set with $F(0)=0$, if no complex eigenvalue of $DF(0)$ has real part $0$ and at least one eigenvalue has positive real part, then $0$ is not a Lyapunov stable equilibrium ([[def-cm-equilibrium-and-lyapunov-stability]]).

[F5] Hyperbolic solutions and growth ([[prop-cm-oscillator-degenerate-and-repulsive-cases]], [[thm-exponential-is-strictly-increasing]]): the scalar proposition gives $e^{\kappa t}$ as a solution of $\xi''-\kappa^{2}\xi=0$ with initial data $(1,\kappa)$ and proves $e^{\kappa t}\to+\infty$; for $t\ge0$ the strictly increasing exponential also gives $0<e^{-\kappa t}\le1$. By the definitions in the Statement, $\sinh(\kappa t)=(e^{\kappa t}-e^{-\kappa t})/2$ is therefore unbounded as $t\to+\infty$.

[F6] Trigonometric derivative and continuity
([[thm-sine-and-cosine-derivatives]],
[[cor-differentiable-implies-continuous]],
[[def-ck-euclidean-maps-and-diffeomorphisms]]):
$$DF(\theta,v)=\begin{pmatrix}0&1\\(g/l)\cos\theta&0\end{pmatrix},$$
so $DF(0,0)=\begin{pmatrix}0&1\\g/l&0\end{pmatrix}$ and its eigenvalues
are $\pm\sqrt{g/l}$. The sine derivative is cosine, and cosine is continuous
because it is differentiable; hence $F$ is $C^{1}$. The square root is
positive since $g/l>0$ ([[thm-of-square-roots]]).

[F7] Intermediate value theorem ([[thm-intermediate-value]]): a continuous real-valued function on a closed interval takes every value between its endpoint values.

## Verification

**Proof technique:** direct; read the equilibrium data from the chart, solve the repulsive scalar equation, and apply the free-mode instability clause and the hyperbolic-saddle theorem.

1.1 Equilibrium and stiffness: $U'(\theta)=-mgl\sin\theta$ vanishes at $\theta=0$, and $U(\theta)<U(0)$ for $0<\lvert\theta\rvert<\pi$ on the chart, so $\theta=0$ is a strict local maximum and $K=U''(0)=-mgl<0$; the small-oscillation model has data $M=ml^{2}$, $K=-mgl$, i.e. modal stiffness $\lambda=-g/l$. This is clause 1. [F1, F2, algebra]

2.1 Exponential families: by [F3] and [F5] the motions of the quadratic model are exactly $\xi(t)=a\cosh(\kappa t)+d\sinh(\kappa t)$ with $\kappa=\sqrt{g/l}$; for the datum $\xi(0)=0$, $\xi'(0)=b\ne0$ the hyperbolic coefficients are $a=0$ and $d=b/\kappa$, so the motion is $(b/\kappa)\sinh(\kappa t)$, which is unbounded on $[0,\infty)$. This is clause 2. [F3, F5, step 1.1]

2.2 Nonlinear instability: the field $F(\theta,v)=(v,(g/l)\sin\theta)$ is $C^{1}$ on $\mathbb R^{2}$ with $F(0,0)=0$; by [F6] its derivative at the origin has the real eigenvalues $\pm\sqrt{g/l}$, none on the imaginary axis and one positive, so the hypotheses of [F4] hold and $(0,0)$ is not a Lyapunov stable equilibrium of the pendulum chart system. This is clause 4. [F4, F6, step 1.1]

3.1 Quadratic instability: by clause 6 of [F3] applied to the one-dimensional free model with negative modal stiffness, the rest point is not Lyapunov stable, with the displayed escaping family; explicitly, for every $\delta>0$ choose $0<\lvert b\rvert<\min(\delta,1)$. The motion $(b/\kappa)\sinh(\kappa t)$ has initial phase norm $|b|<1$ and its position norm is unbounded by [F5]. Thus its continuous phase norm starts below $1$ and exceeds $1$ at some finite time; [F7] gives a time $t>0$ at which the phase norm is exactly $1=\varepsilon_0$. This is clause 3. [F3, F5, F7, step 2.1, algebra]

4.1 Clauses 1-4 are verified on the explicit chart data; clause 4 is the nonlinear conclusion supplied by the hyperbolic-saddle theorem, whereas clause 3 concerns the quadratic model alone. The parameters $m,l,g$ are model data, and no escape time, measured period or apparatus behaviour is asserted. [step 1.1, step 2.1, step 3.1, step 2.2] ∎

## Remarks

- **Why the linear and nonlinear conclusions agree here.** The linearization at the upward equilibrium is hyperbolic — its spectrum $\pm\sqrt{g/l}$ is disjoint from the imaginary axis — so the saddle theorem converts the positive eigenvalue into a genuine nonlinear instability. This is exactly the conditional route recorded in [[rem-cm09-zero-modes-degeneracy-and-scope]]; for a nonhyperbolic critical point (in particular one with a zero mode) the linear calculation would not be sufficient.

- **The energy picture.** The mechanical energy $E=\tfrac12ml^{2}\theta'^{2}+mgl\cos\theta$ has a saddle at the upward equilibrium: its potential part has a strict local maximum while its velocity part is positive quadratic; energy conservation therefore cannot trap nearby data in a small neighbourhood, in contrast with the strict-minimum case where the same energy argument gives stability ([[pthm-cm09-linearization-at-a-strict-minimum]] clause 4).

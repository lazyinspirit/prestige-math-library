---
id: ex-cm09-double-pendulum-linear-modes
kind: example
title: "The equal-arm double pendulum in the linear approximation: the slow same-side mode, the fast opposite-side mode and the bounded modal motions"
status: draft
origin: session
domain: physics
dependency_level: 16
deps: [def-cm09-coupled-quadratic-model, pthm-cm09-free-modes-and-degeneracy, def-cm01-units, def-euclidean-inner-product, def-matrix-product-and-identity-matrix, thm-cm-homogeneous-oscillator-solution-classification, thm-chain-rule-for-total-derivatives, def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  def-cm09-coupled-quadratic-model: formulation-prerequisite
  pthm-cm09-free-modes-and-degeneracy: physical-result
  def-cm01-units: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  thm-cm-homogeneous-oscillator-solution-classification: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked instance of the coupled quadratic model: the two-angle small-oscillation data M = m l^2 [[2,1],[1,1]], K = m g l diag(2,1) attributed to the linearisation of an equal-mass equal-length planar double pendulum, with its two modal data (the slower same-side mode of frequency sqrt((g/l)(2-sqrt2)) and the faster opposite-side mode of frequency sqrt((g/l)(2+sqrt2))), the general bounded modal motion and the pure-mode data. The example verifies the quadratic model on the declared matrices; it does not derive the pendulum Lagrangians, does not control the error of the linear approximation at finite amplitude and asserts no measured period."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.6.1, Eqs. (2.130)-(2.132), printed pages 40-42 (PDF pages 46-48): the equal-arm double pendulum Lagrangian truncated to second order, the linearised equations and the two normal modes"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 3, Sections 3.1-3.2, printed pages 52-59 (PDF pages 55-62): the quadratic natural Lagrangian about a minimum and the decoupled normal modes"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Example

The algebra below uses the fixed-unit numerical convention of [[def-cm09-coupled-quadratic-model]], with coordinate units radians, time unit $1\,\mathrm s$ and energy unit $1\,\mathrm J$. Physical model parameters are given their stated units; in matrix products, initial-vector identities and coefficient formulas their numerical coefficients in these fixed units are used. Modal amplitudes have common unit $a_*=(1\,\mathrm J)^{1/2}(1\,\mathrm s)$; the $j$-th component of a mass-normalized modal vector has unit $s_j/a_*$. Modal oscillatory and hyperbolic coefficients have unit $a_*$, and zero-mode slopes have unit $a_*/(1\,\mathrm s)$. Physical coordinates and energies are reconstructed with the coordinate units and $1\,\mathrm J$, respectively. In particular a numerical single-mode datum $q(0)=u_i$ means a modal amplitude of one in this common amplitude unit.

Global-time, growth and boundedness claims below refer to the unique maximal extension of the autonomous free equation on $\mathbb R$; local motions remain its restrictions. Values at $0$ in coefficient formulas are evaluated on that extension when the original interval omits $0$.

Let a planar double pendulum consist of two equal particle labels of mass
$m>0$ connected by two equal massless rods of length $l>0$, pivoted at a
fixed point; let $\theta_{1},\theta_{2}$ be the angles of the rods from the
downward vertical, read in radians (dimensionless under the angle convention
of [[def-cm01-units]]), and let $g>0$ be the uniform gravitational
acceleration of the model. In the linear approximation about the downward
equilibrium of the cited treatment, the small-oscillation data are the
coupled quadratic model of [[def-cm09-coupled-quadratic-model]] with $n=2$,

$$M=ml^{2}\begin{pmatrix}2&1\\1&1\end{pmatrix},\qquad K=mgl\begin{pmatrix}2&0\\0&1\end{pmatrix},\qquad J\equiv0 .$$

Write $\gamma_{s}:=2-\sqrt2$, $\gamma_{f}:=2+\sqrt2$. Then:

1. $M$ is symmetric positive definite (with $M^{1/2}$ its unique positive
definite square root) and $K$ is symmetric positive definite, so the model
is oscillatory with both modal stiffnesses positive;
2. the modal data are
$$\lambda_{s}=\frac{g}{l}\gamma_{s}\quad\text{with}\quad w_{s}=\begin{pmatrix}1\\\sqrt2\end{pmatrix},\qquad\lambda_{f}=\frac{g}{l}\gamma_{f}\quad\text{with}\quad w_{f}=\begin{pmatrix}1\\-\sqrt2\end{pmatrix},$$
that is $Kw_{s}=\lambda_{s}Mw_{s}$ and $Kw_{f}=\lambda_{f}Mw_{f}$; the
$M$-orthonormal modal vectors are
$u_{s}=w_{s}/\sqrt{2ml^{2}\gamma_{f}}$ and
$u_{f}=w_{f}/\sqrt{2ml^{2}\gamma_{s}}$;
3. the mode frequencies are
$$\omega_{s}=\sqrt{\frac{g}{l}\bigl(2-\sqrt2\bigr)}<\omega_{f}=\sqrt{\frac{g}{l}\bigl(2+\sqrt2\bigr)},$$
and every motion is bounded on $\mathbb R$ and has the form
$$q(t)=\bigl(A\cos(\omega_{s}t)+B\sin(\omega_{s}t)\bigr)u_{s}+\bigl(C\cos(\omega_{f}t)+D\sin(\omega_{f}t)\bigr)u_{f};$$
4. in the slow mode $u_{s}$ the two angles have the same sign
($\theta_{2}=\sqrt2\,\theta_{1}$) and in the fast mode $u_{f}$ they have
opposite signs ($\theta_{2}=-\sqrt2\,\theta_{1}$); the datum
$q(0)=u_{s}$, $q'(0)=0$ excites exactly the slow mode and the datum
$q(0)=u_{f}$, $q'(0)=0$ exactly the fast mode.

## Facts & Assumptions

**Given:** The parameters $m,l,g>0$, the matrices $M,K$ of the Example,
the vectors $w_{s},w_{f}$ and the numbers $\gamma_{s},\gamma_{f}$.

[F1] Model dictionary ([[def-cm09-coupled-quadratic-model]]): the data
$(M,K,0)$ declare a free coupled quadratic model with two degrees of
freedom, kinetic energy $\tfrac12q'^{\mathsf T}Mq'$, potential energy
$\tfrac12q^{\mathsf T}Kq$ and the modal vocabulary of clause (e).

[F2] Free-mode theory ([[pthm-cm09-free-modes-and-degeneracy]] clauses 1, 2,
4 and 5): every free motion is the modal superposition of that theorem;
positive definite stiffness gives positive modal stiffnesses and bounded
motions; the pure-$\lambda$ motions are the solutions of $q''+\lambda q=0$
with values in the intrinsic subspace $N_{\lambda}$.

[F3] Direct linear algebra ([[def-matrix-product-and-identity-matrix]],
[[def-euclidean-inner-product]]): $M$-inner products, matrix products and
square roots of positive definite $2\times2$ matrices are computed by the
displayed formulas; the products below are direct computations.

[F4] Scalar oscillator calculus
([[thm-cm-homogeneous-oscillator-solution-classification]],
[[thm-chain-rule-for-total-derivatives]],
[[def-ck-euclidean-maps-and-diffeomorphisms]]): for $\lambda>0$ the scalar
equation $z''+\lambda z=0$ has exactly the family
$A\cos(\omega t)+B\sin(\omega t)$ with $\omega=\sqrt{\lambda}$.

## Verification

**Proof technique:** direct; check positive definiteness, verify the two
eigenpairs by explicit multiplication, and read the motion and boundedness
statements from the free-mode theorem.

1.1 Positive definiteness: $M$ is symmetric with leading principal minors $2ml^{2}>0$ and $\det M=(2\cdot1-1^{2})m^{2}l^{4}=m^{2}l^{4}>0$, hence positive definite; $K$ is diagonal with positive diagonal entries, hence symmetric positive definite; so the model is oscillatory with both modal stiffnesses positive. [F1, F3, algebra]

1.2 Eigenpairs: multiplying, $$Kw_{s}=mgl\begin{pmatrix}2\\ \sqrt2\end{pmatrix},\qquad Mw_{s}=ml^{2}\begin{pmatrix}2+\sqrt2\\ 1+\sqrt2\end{pmatrix},$$ and $2/(2+\sqrt2)=\sqrt2/(1+\sqrt2)=2-\sqrt2$, so $Kw_{s}=\frac{g}{l}(2-\sqrt2)Mw_{s}$; similarly $$Kw_{f}=mgl\begin{pmatrix}2\\-\sqrt2\end{pmatrix},\qquad Mw_{f}=ml^{2}\begin{pmatrix}2-\sqrt2\\ 1-\sqrt2\end{pmatrix},$$ and $2/(2-\sqrt2)=-\sqrt2/(1-\sqrt2)=2+\sqrt2$, so $Kw_{f}=\frac{g}{l}(2+\sqrt2)Mw_{f}$. The normalizations give $u_{s}^{\mathsf T}Mu_{s}=u_{f}^{\mathsf T}Mu_{f}=1$ and $u_{s}^{\mathsf T}Mu_{f}=0$, because $w_{s}^{\mathsf T}Mw_{s}=2ml^{2}\gamma_{f}$, $w_{f}^{\mathsf T}Mw_{f}=2ml^{2}\gamma_{s}$ and $w_{s}^{\mathsf T}Mw_{f}=ml^{2}(2-2)=0$; this proves clauses 1 and 2. [F1, F3, algebra]

2.1 Motions: by [F2] with $\lambda_{s},\lambda_{f}>0$ every motion is the displayed two-frequency superposition, with coefficients bijective onto the data, and it is bounded on $\mathbb R$ because both modal families are bounded; the frequencies are $\sqrt{\lambda_{s}}$ and $\sqrt{\lambda_{f}}$ by [F4]. This is clause 3. [F2, F4, step 1.2]

2.2 Mode patterns and pure-mode data: reading the coordinates of $w_{s}=(1,\sqrt2)$ and $w_{f}=(1,-\sqrt2)$ gives $\theta_{2}=\sqrt2\,\theta_{1}$ in the slow mode and $\theta_{2}=-\sqrt2\,\theta_{1}$ in the fast mode; the data $q(0)=u_{s}$, $q'(0)=0$ correspond to $A=1$, $B=C=D=0$, hence to $q(t)=\cos(\omega_{s}t)u_{s}$, and analogously for $u_{f}$. This is clause 4. [F2, step 1.2, algebra]

2.3 Frequency comparison: $\gamma_{f}-\gamma_{s}=2\sqrt2>0$ gives $\omega_{f}>\omega_{s}$: the mode in which the rods swing in opposite directions is the faster one, consistent with the cited treatment's conclusion. [step 1.2, algebra]

3.1 Clauses 1-4 are verified on the declared matrices, which are the small-oscillation data attributed to the double pendulum in the cited linearization. The verification does not derive those matrices from the pendulum Lagrangian, makes no claim about the accuracy of the linear approximation at finite angle, and asserts no measured period; the gravitational acceleration $g$ is a model parameter. [given, step 1.1, step 2.1, step 2.2] ∎

## Remarks

- **Why the slow mode is the same-side mode.** The potential energy
$\tfrac12q^{\mathsf T}Kq=mgl(\theta_{1}^{2}+\tfrac12\theta_{2}^{2})$
penalizes $\theta_{1}$ more strongly than $\theta_{2}$, while the kinetic
metric couples the two angles; the resulting slow direction is the one in
which both rods move together and the fast direction the one in which they
move oppositely. The computation above verifies the frequencies and
patterns; the physical reading is the interpretation of the model data.

- **The linear model is not the pendulum.** The matrices are the
second-order Taylor data of the pendulum potential and kinetic metric at
the downward equilibrium; the exact pendulum is not a quadratic model, and
the finite-time accuracy of the linear approximation is controlled only by
[[pthm-cm09-linearization-error-bound]] on small data, not by this example.

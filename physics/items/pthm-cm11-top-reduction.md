---
id: pthm-cm11-top-reduction
kind: physics-theorem
title: "Reduction of the heavy symmetric top branch: pivotal angular momentum, Euler-angle equations, the two conserved momenta and the one-dimensional $\\theta$ equation"
status: published
origin: session
domain: physics
dependency_level: 14
deps: [post-cm11-heavy-top, post-cm10-rigid-material, def-cm10-rigid-body-configuration, def-cm10-angular-velocity, def-cm10-inertia-tensor, pthm-cm10-kinetic-splitting, thm-cm-rigid-kinetic-energy-and-angular-momentum, def-cm-euler-angle-parametrization-and-heavy-top-system, lem-cm-euler-angle-angular-velocity, lem-cm-coordinate-rotation-matrices, thm-cm-heavy-top-reduction, thm-linearity-of-the-lebesgue-integral-on-l-one, lem-cm-mass-moments-are-finite, def-cm-mass-distribution-and-inertia-matrix, def-countable-choice, lem-cm-matrix-curve-derivative-rules, lem-cm-skew-matrix-cross-product-correspondence, lem-cross-product-is-bilinear-alternating-and-orthogonal, def-cross-product-in-r3, def-euclidean-inner-product, def-cm-special-orthogonal-group, def-matrix-product-and-identity-matrix, def-sine-and-cosine-by-power-series, thm-sine-and-cosine-derivatives, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, def-derivative, cor-zero-derivative-implies-constant, def-cm01-units, def-interval]
dependency_roles:
  post-cm11-heavy-top: physical-assumption
  post-cm10-rigid-material: physical-assumption
  def-cm10-rigid-body-configuration: formulation-prerequisite
  def-cm10-angular-velocity: formulation-prerequisite
  def-cm10-inertia-tensor: formulation-prerequisite
  pthm-cm10-kinetic-splitting: physical-result
  thm-cm-rigid-kinetic-energy-and-angular-momentum: mathematical-premise
  def-cm-euler-angle-parametrization-and-heavy-top-system: mathematical-premise
  lem-cm-euler-angle-angular-velocity: mathematical-premise
  lem-cm-coordinate-rotation-matrices: mathematical-premise
  thm-cm-heavy-top-reduction: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  lem-cm-mass-moments-are-finite: mathematical-premise
  def-cm-mass-distribution-and-inertia-matrix: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-cm-matrix-curve-derivative-rules: mathematical-premise
  lem-cm-skew-matrix-cross-product-correspondence: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-derivative: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Conditional deductions inside the heavy symmetric top branch of [[post-cm11-heavy-top]] for the rigid-material model of [[post-cm10-rigid-material]]: the angular momentum about the pivot equals $R\\tilde I\\omega$ with $\\tilde I$ the inertia about the pivot; the pivot balance gives the body-frame equations; and on any interval on which the orientation is described by the Euler-angle chart with $\\theta\\in(0,\\pi)$ the motion satisfies the heavy-top system with parameters equal to the pivot transverse moment $A=A_c+md^{2}$, the axial moment $C=C_c$, the total mass $m$, the pivot distance $d$ and the field strength $g$, so the conserved momenta, the reduced energy and the one-dimensional $\\theta$ equation hold. The statement carries the countable-choice assumption used only for the finiteness of the defining integrals, assumes the chart description as an explicit hypothesis, asserts nothing at the chart's poles, excludes friction and driving torques at the pivot, and asserts no measured value."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Sections 3.5-3.6, Eqs. (3.54)-(3.70), printed pages 62-70 (PDF pages 68-76): Euler-angle kinematics of the symmetric top, the two cyclic momenta and the reduced energy and effective potential"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Chapter 4 Section 4.5, Eqs. (4.74)-(4.85), chapter pages 15-20 (PDF pages 69-74): Euler angles and the exact reduced effective potential of the symmetric top"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed. (MIT Press, 2014), Section 2.10, Eqs. (2.84)-(2.91): the axisymmetric top, its momenta and reduced energy"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "I. W. Stewart, Advanced Classical Mechanics (MIT 8.09 Advanced Classical Mechanics, Fall 2014 course text), Chapter 2 Section 2.5, printed pages 48-51 (PDF pages 51-54): reduction of the symmetric top about a fixed point to a one-dimensional equation"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]), used only for the finiteness of the defining
integrals of the model's inertial quantities. Adopt the heavy symmetric top
branch [[post-cm11-heavy-top]] with parameters $A_{c}>0$, $C_{c}>0$, $d>0$,
$g>0$ and total mass $m>0$; use the notation of that postulate: the pivot
material point $\rho_{p}=-d\,e_{3}$ is held at the origin, so
$c(t)=d\,R(t)e_{3}$; the pivot reaction contributes no torque about the
origin; and the external gravitational field is $G=-g e_{3}$ with total
torque about the origin $\tau_{p}(t)=-mgd\,(R(t)e_{3})\times e_{3}$. Put
$$A:=A_{c}+md^{2}>0,\qquad C:=C_{c}>0,$$
the transverse moment of the model about the pivot and its axial moment. Let
$x(t,\rho)=c(t)+R(t)\rho$ be a motion of the branch with time window $I_0$,
and suppose that there are functions $\varphi,\theta,\psi:I_0\to\mathbb R$
of class $C^{2}$ with $\theta(I_0)\subseteq(0,\pi)$ and
$$R(t)=\Theta\bigl(\varphi(t),\theta(t),\psi(t)\bigr)=R_{z}\bigl(\varphi(t)\bigr)R_{y}\bigl(\theta(t)\bigr)R_{z}\bigl(\psi(t)\bigr)\qquad(t\in I_0),$$
the Euler-angle description of [[def-cm-euler-angle-parametrization-and-heavy-top-system]].
Then:

1. **Angular momentum about the pivot.** With $\omega$ the body angular
   velocity of the motion and
   $\tilde I:=A\,(e_{1}e_{1}^{\mathsf T}+e_{2}e_{2}^{\mathsf T})+C\,e_{3}e_{3}^{\mathsf T}$
   (the diagonal matrix $\mathrm{diag}(A,A,C)$ in the principal basis) one has
   $$J_{p}(t):=\int x(t,\rho)\times\partial_{t}x(t,\rho)\,d\nu(\rho)=R(t)\,\tilde I\,\omega(t),$$
   and the balance of [[post-cm11-heavy-top]] clause (v) reads
   $J_{p}'=\tau_{p}$ with
   $$\tau_{p}(t)=-mgd\,\bigl(R(t)e_{3}\bigr)\times e_{3},\qquad \tau_{p}(t)\cdot e_{3}=0 .$$
2. **Body-frame pivot equations.** With $\gamma(t):=R(t)^{\mathsf T}e_{3}$,
   $$\tilde I\,\omega'+\omega\times\tilde I\,\omega=-mgd\,\bigl(e_{3}\times\gamma\bigr)\qquad\text{on }I_0,$$
   that is, componentwise in the principal basis,
   $$A\omega_{1}'=(A-C)\omega_{2}\omega_{3}+mgd\,\gamma_{2},\qquad A\omega_{2}'=(C-A)\omega_{1}\omega_{3}-mgd\,\gamma_{1},\qquad C\omega_{3}'=0 .$$
   Under the Euler-angle description of the statement,
   $$\gamma=\bigl(-\sin\theta\cos\psi,\ \sin\theta\sin\psi,\ \cos\theta\bigr),\qquad \omega_{3}=\psi'+\varphi'\cos\theta .$$
3. **Reduction to one dimension.** Define on $I_0$
   $$b:=C\bigl(\psi'+\varphi'\cos\theta\bigr),\qquad a:=A\,\varphi'\sin^{2}\theta+b\cos\theta .$$
   Then $b$ and $a$ are constant on $I_0$; consequently
   $$\varphi'=\frac{a-b\cos\theta}{A\sin^{2}\theta},\qquad \psi'=\frac{b}{C}-\frac{(a-b\cos\theta)\cos\theta}{A\sin^{2}\theta};$$
   the **reduced energy**
   $$E:=\tfrac12 A\,\theta'^{2}+\frac{(a-b\cos\theta)^{2}}{2A\sin^{2}\theta}+\frac{b^{2}}{2C}+mgd\cos\theta$$
   is constant on $I_0$; and with the **effective potential**
   $$U(\theta):=\frac{(a-b\cos\theta)^{2}}{2A\sin^{2}\theta}+\frac{b^{2}}{2C}+mgd\cos\theta$$
   one has $A\,\theta''=-U'(\theta)$ on $I_0$.
4. **The heavy-top system.** Equivalently, $(\varphi,\theta,\psi)$ is a
   heavy-top trajectory of [[def-cm-euler-angle-parametrization-and-heavy-top-system]]
   with parameters $(A,C,m,d,g)$, and clauses 1-4 of
   [[thm-cm-heavy-top-reduction]] hold for it.

The statement assumes the Euler-angle description as a hypothesis on the
interval: no claim is made that every motion of the branch admits such a
description, that a description extends across the poles $\theta\in\{0,\pi\}$
(where the sleeping-top and hanging configurations lie), or that the
description is unique. On every subinterval on which a description with
$\theta\in(0,\pi)$ exists, the conclusions hold there. The statement asserts
no friction or driving torque at the pivot, no measurement and no empirical
value.

## Facts & Assumptions

**Given:** The heavy-top branch data $A_{c},C_{c},d,g,m$, the derived constants $A=A_{c}+md^{2}$ and $C=C_{c}$, a motion $x(t,\rho)=c(t)+R(t)\rho$ of the branch with time window $I_0$, and a $C^{2}$ Euler-angle description $(\varphi,\theta,\psi)$ of $R$ with $\theta(I_0)\subseteq(0,\pi)$.

[L1] Branch kinematics: the pivot material point $\rho_{p}=-d e_{3}$ satisfies $c(t)+R(t)\rho_{p}=0$, so $c(t)=d\,R(t)e_{3}$; the pivot reaction contributes no torque about the origin; the gravitational torque about the origin is $\tau_{p}=mc\times(-ge_{3})$; and the adopted balance is $J_{p}'=\tau_{p}$ with $J_{p}=\int x\times\partial_{t}x\,d\nu$ ([[post-cm11-heavy-top]] clauses (iii)-(v), [[def-cm10-rigid-body-configuration]], [[def-cm10-angular-velocity]]).

[L2] Inertial identities of the model: $P:=\int\partial_{t}x\,d\nu=mc'$, $L_c:=\int(x-c)\times(\partial_{t}x-c')\,d\nu=RI\omega$, and for $J_{p}=\int x\times\partial_{t}x\,d\nu$ one has $J_{p}=L_c+c\times P$ ([[pthm-cm10-kinetic-splitting]] clauses 2 and 4, [[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[lem-cm-mass-moments-are-finite]], [[def-cm-mass-distribution-and-inertia-matrix]]).

[L3] Body inertia matrix: $I=A_{c}(e_{1}e_{1}^{\mathsf T}+e_{2}e_{2}^{\mathsf T})+C_{c}e_{3}e_{3}^{\mathsf T}$ in the declared basis ([[post-cm11-heavy-top]] clause (ii), [[def-cm10-inertia-tensor]] clause (a)).

[L4] Euler-angle kinematics: for $R=\Theta(\varphi,\theta,\psi)$ with $\theta\in(0,\pi)$ the body angular velocity is $\omega=(-\varphi'\sin\theta\cos\psi+\theta'\sin\psi,\ \varphi'\sin\theta\sin\psi+\theta'\cos\psi,\ \psi'+\varphi'\cos\theta)$ in the standard basis, and $\omega_{1}^{2}+\omega_{2}^{2}=\theta'^{2}+\varphi'^{2}\sin^{2}\theta$ ([[lem-cm-euler-angle-angular-velocity]]); the coordinate rotation matrices satisfy $R_{y}(a)e_{3}=\sin a\,e_{1}+\cos a\,e_{3}$ and $R_{z}(b)^{\mathsf T}e_{1}=\cos b\,e_{1}-\sin b\,e_{2}$, $R_{z}(b)^{\mathsf T}e_{3}=e_{3}$ ([[lem-cm-coordinate-rotation-matrices]]); and $\sin^{2}+\cos^{2}=1$ ([[def-sine-and-cosine-by-power-series]], [[thm-sine-and-cosine-derivatives]]).

[L5] The heavy-top system: [[def-cm-euler-angle-parametrization-and-heavy-top-system]] defines a heavy-top trajectory by the three displayed equations $\frac{d}{dt}\bigl(A\varphi'\sin^{2}\theta+C\cos\theta(\psi'+\varphi'\cos\theta)\bigr)=0$, $\frac{d}{dt}(A\theta')=A\varphi'^{2}\sin\theta\cos\theta-C(\psi'+\varphi'\cos\theta)\varphi'\sin\theta+mgd\sin\theta$ and $\frac{d}{dt}\bigl(C(\psi'+\varphi'\cos\theta)\bigr)=0$, and [[thm-cm-heavy-top-reduction]] derives from them the conservation of $b$ and $a$, the formulas for $\varphi'$ and $\psi'$, the constant reduced energy $E$ and the equation $A\theta''=-U'(\theta)$ with the displayed $U$ ([[thm-cm-heavy-top-reduction]] clauses 1-4).

[L6] Calculus and algebra: $(R l)'=R'l+Rl'$, $R'=R[\omega]_{\times}$ and $[\omega]_{\times}z=\omega\times z$ for a $C^{1}$ rotation path ([[lem-cm-matrix-curve-derivative-rules]], [[lem-cm-skew-matrix-cross-product-correspondence]], [[def-cm-special-orthogonal-group]]); the cross product is bilinear and alternating with $u\times(u\times w)=(u\cdot w)u-\lVert u\rVert_2^{2}w$ for unit $u$ ([[lem-cross-product-is-bilinear-alternating-and-orthogonal]], [[def-cross-product-in-r3]], [[def-euclidean-inner-product]]); the chain, product and quotient rules hold for the scalar functions below ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-derivative]], [[def-interval]]); and a continuous real function on an interval with vanishing derivative at every interior point is constant ([[cor-zero-derivative-implies-constant]]).

## Proof

**Proof technique:** direct; compute the pivotal angular momentum from the model's inertial identities, translate the adopted balance into the body frame, and read the resulting equations in the Euler-angle chart, then invoke the supplier's reduction.

1.1 By [L1] the constraint gives $c(t)=dR(t)e_{3}$, and since $R$ is $C^{1}$ with $R'=R[\omega]_{\times}$ by [L6] one has $c'=dR'e_{3}=dR[\omega]_{\times}e_{3}=dR(\omega\times e_{3})$. [given, L1, L6]

1.2 By [L4], reading the columns of the three factors and using $\theta(I_0)\subseteq(0,\pi)$, the vector $\gamma=R^{\mathsf T}e_{3}=R_{z}(\psi)^{\mathsf T}R_{y}(\theta)^{\mathsf T}R_{z}(\varphi)^{\mathsf T}e_{3}=R_{z}(-\psi)R_{y}(-\theta)e_{3}$ equals $R_{z}(-\psi)\bigl(-\sin\theta\,e_{1}+\cos\theta\,e_{3}\bigr)=\bigl(-\sin\theta\cos\psi,\ \sin\theta\sin\psi,\ \cos\theta\bigr)$, and $\omega_{3}=\psi'+\varphi'\cos\theta$. [given, L4, algebra]

2.1 By [L1] the gravitational force system of the branch acts as the total force $-mge_{3}$ applied at the centre of mass, whose torque about the origin is $\tau_{p}=mc\times(-ge_{3})$; with $c=dRe_{3}$ from step 1.1 this is $\tau_{p}=-mgd(Re_{3})\times e_{3}$, and $\tau_{p}\cdot e_{3}=0$ because the cross product is orthogonal to its factors by [L6]. [step 1.1, given, L1, L6]

3.1 By [L2] one has $J_{p}=L_{c}+c\times P=RI\omega+mc\times c'$. Substituting $c=dRe_{3}$ and $c'=dR(\omega\times e_{3})$ from step 1.1 and using $I e_{3}=C e_{3}$, $Ie_{1}=A_{c}e_{1}$, $Ie_{2}=A_{c}e_{2}$ from [L3] gives $mc\times c'=md^{2}\,(Re_{3})\times R(\omega\times e_{3})=md^{2}R\bigl(e_{3}\times(\omega\times e_{3})\bigr)=md^{2}R(\omega-\omega_{3}e_{3})$ by [L6] and the vector triple product with $\lVert e_{3}\rVert_2=1$, so $J_{p}=R\bigl(I\omega+md^{2}(\omega-\omega_{3}e_{3})\bigr)=R\tilde I\omega$ with $\tilde I=\mathrm{diag}(A,A,C)$ and $A=A_{c}+md^{2}$, $C=C_{c}$. Hence the balance of [L1] reads $J_{p}'=\tau_{p}$ with $\tau_{p}$ as in step 2.1, completing clause 1. [step 1.1, step 2.1, given, L1, L2, L3, L6, algebra]

4.1 Since $R$ is $C^{1}$ and $\omega$ is $C^{1}$, the product $\tilde I\omega$ is $C^{1}$ and $J_{p}=R\tilde I\omega$ from step 3.1 gives $R(\tilde I\omega'+\omega\times\tilde I\omega)=J_{p}'$ by [L6]; with the balance $J_{p}'=\tau_{p}$ of step 3.1 and $R^{\mathsf T}R=I_{3}$ one gets $\tilde I\omega'+\omega\times\tilde I\omega=R^{\mathsf T}\tau_{p}$. By step 2.1 and [L6], $R^{\mathsf T}\bigl((Re_{3})\times e_{3}\bigr)=e_{3}\times(R^{\mathsf T}e_{3})=e_{3}\times\gamma$ with $\gamma$ of step 1.2, so $\tilde I\omega'+\omega\times\tilde I\omega=-mgd(e_{3}\times\gamma)$. Componentwise, $(e_{3}\times\gamma)_{1}=-\gamma_{2}$, $(e_{3}\times\gamma)_{2}=\gamma_{1}$, $(e_{3}\times\gamma)_{3}=0$ and $(\omega\times\tilde I\omega)_{1}=(C-A)\omega_{2}\omega_{3}$, $(\omega\times\tilde I\omega)_{2}=(A-C)\omega_{1}\omega_{3}$, $(\omega\times\tilde I\omega)_{3}=0$, giving the three displayed equations of clause 2. [step 1.2, step 2.1, step 3.1, given, L6, algebra]

5.1 The third of the equations of step 4.1 gives $C\omega_{3}'=0$, and $C>0$, so $\omega_{3}$ is constant on the interval $I_0$ by [L6]; by step 1.2, $b=C(\psi'+\varphi'\cos\theta)=C\omega_{3}$ is constant on $I_0$. [step 1.2, step 4.1, given, L6]

6.1 By step 3.1 and [L6], $\frac{d}{dt}(J_{p}\cdot e_{3})=J_{p}'\cdot e_{3}=\tau_{p}\cdot e_{3}=0$ by step 2.1, so $J_{p}\cdot e_{3}$ is constant on $I_0$; and by steps 3.1 and 1.2, $J_{p}\cdot e_{3}=(R\tilde I\omega)\cdot e_{3}=\tilde I\omega\cdot\gamma=A(\omega_{1}\gamma_{1}+\omega_{2}\gamma_{2})+C\omega_{3}\gamma_{3}$. Substituting the components of [L4] and step 1.2 and using $\sin^{2}\psi+\cos^{2}\psi=1$ from [L4] gives $\omega_{1}\gamma_{1}+\omega_{2}\gamma_{2}=\varphi'\sin^{2}\theta$ and $\omega_{3}\gamma_{3}=(\psi'+\varphi'\cos\theta)\cos\theta$, so $J_{p}\cdot e_{3}=A\varphi'\sin^{2}\theta+b\cos\theta=a$ is constant on $I_0$. [step 1.2, step 2.1, step 3.1, step 5.1, given, L4, L6, algebra]

6.2 Put $n:=\sin\psi\,e_{1}+\cos\psi\,e_{2}$, so that $n$ has $\lVert n\rVert_2=1$ and, by [L4] and $R'=R[\omega]_{\times}$, the identity $\theta'=\omega\cdot n$ holds. Differentiating $\theta'$ with [L6] gives $A\theta''=A(\omega'\cdot n)+A(\omega\cdot n')$, where $n'=\psi'(\cos\psi\,e_{1}-\sin\psi\,e_{2})$; using the first two equations of step 4.1, the components of [L4] and the values $\omega_{1}\cos\psi-\omega_{2}\sin\psi=-\varphi'\sin\theta$, $\omega_{2}\sin\psi-\omega_{1}\cos\psi=\varphi'\sin\theta$ and $\gamma_{2}\sin\psi-\gamma_{1}\cos\psi=\sin\theta$ of step 1.2, one computes $A(\omega'\cdot n)=(A-C)\omega_{3}\,\varphi'\sin\theta+mgd\,\sin\theta$ and $A(\omega\cdot n')=-A\varphi'\psi'\sin\theta$, hence $A\theta''=(A-C)\omega_{3}\varphi'\sin\theta+mgd\sin\theta-A\varphi'\psi'\sin\theta=A\varphi'^{2}\sin\theta\cos\theta-b\varphi'\sin\theta+mgd\sin\theta$, the last equality by $\omega_{3}-\psi'=\varphi'\cos\theta$ from step 1.2 and $b=C\omega_{3}$ from step 5.1. [step 1.2, step 4.1, step 5.1, given, L4, L6, algebra]

7.1 The three equations of the definition of [L5] hold: the first is $\frac{d}{dt}\bigl(A\varphi'\sin^{2}\theta+C\cos\theta(\psi'+\varphi'\cos\theta)\bigr)=a'=0$ by step 6.1, the third is $\frac{d}{dt}\bigl(C(\psi'+\varphi'\cos\theta)\bigr)=b'=0$ by step 5.1, and the second is $A\theta''=A\varphi'^{2}\sin\theta\cos\theta-C(\psi'+\varphi'\cos\theta)\varphi'\sin\theta+mgd\sin\theta$ by step 6.2 with $C(\psi'+\varphi'\cos\theta)=b$. Therefore $(\varphi,\theta,\psi)$ is a heavy-top trajectory of [L5] with parameters $(A,C,m,d,g)$, and clauses 1-4 of [[thm-cm-heavy-top-reduction]] apply: $a$ and $b$ are constant, $\varphi'$ and $\psi'$ are given by the displayed formulas, the reduced energy $E$ is constant, and $A\theta''=-U'(\theta)$. This proves clauses 3 and 4. [step 5.1, step 6.1, step 6.2, given, L5] ∎

## Remarks

- **Where $A=A_{c}+md^{2}$ comes from.** The transverse moment of the model about the pivot is the transverse moment $A_{c}$ about the centre of mass shifted by $md^{2}$; this is why the reduction uses $A$ and the supplier's parameter is identified with the pivot moment, not with $A_{c}$. The axial moment is unchanged because the shift is along the symmetry axis.

- **The role of the chart.** The Euler-angle description is a hypothesis; the chart is singular at the poles $\theta=0,\pi$, where the sleeping top and the hanging configuration lie, and the statement says nothing there. The definitions of $a$, $b$, $E$ and $U$ depend on the chosen description (the angles are determined only up to the chart's ambiguities), while the physical conclusions of clause 3 are invariants of the motion.

- **No empirical content.** Clause 3 is a conditional deduction from the adopted branch; in particular the sleeping-top threshold, the stability of the upright top and the interpretation of precession in any concrete apparatus are not asserted here, and no value of $A_{c}$, $C_{c}$, $m$, $d$ or $g$ is measured.

---
id: ex-cm11-heavy-top-steady-precession
kind: example
title: "A steady precession of the heavy symmetric top checked on explicit data: the pivot balance, the two conserved momenta and the reduced energy"
status: draft
origin: session
domain: physics
dependency_level: 15
deps: [post-cm11-heavy-top, post-cm10-rigid-material, pthm-cm11-top-reduction, def-cm-euler-angle-parametrization-and-heavy-top-system, lem-cm-euler-angle-angular-velocity, lem-cm-coordinate-rotation-matrices, thm-cm-heavy-top-reduction, pthm-cm10-kinetic-splitting, def-cm10-angular-velocity, def-cm10-inertia-tensor, thm-sine-and-cosine-derivatives, def-sine-and-cosine-by-power-series, cor-trigonometric-parity-and-pythagorean-identity, thm-algebra-of-derivatives, def-euclidean-inner-product, def-cross-product-in-r3, def-cm01-units, def-interval, def-pi-via-first-positive-cosine-zero, thm-cosine-has-a-smallest-positive-zero, thm-quarter-turn-values-and-shift-formulas, thm-sine-cosine-signs-monotonicity-and-ranges, thm-sine-and-cosine-addition-formulas, thm-of-square-roots]
dependency_roles:
  post-cm11-heavy-top: physical-assumption
  post-cm10-rigid-material: physical-assumption
  pthm-cm11-top-reduction: physical-result
  def-cm-euler-angle-parametrization-and-heavy-top-system: mathematical-premise
  lem-cm-euler-angle-angular-velocity: mathematical-premise
  lem-cm-coordinate-rotation-matrices: mathematical-premise
  thm-cm-heavy-top-reduction: mathematical-premise
  pthm-cm10-kinetic-splitting: physical-result
  def-cm10-angular-velocity: formulation-prerequisite
  def-cm10-inertia-tensor: formulation-prerequisite
  thm-sine-and-cosine-derivatives: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-interval: mathematical-premise
  def-pi-via-first-positive-cosine-zero: mathematical-premise
  thm-cosine-has-a-smallest-positive-zero: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  thm-of-square-roots: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked steady precession of the heavy symmetric top branch of [[post-cm11-heavy-top]] on declared parameters $A_c=2$, $C_c=1$, $m=1$, $d=1$, $g=1$ (so the pivot transverse moment is $A=3$) and the explicit angles $\\varphi(t)=t$, $\\theta=\\pi/3$, $\\psi(t)=2t$: the pivot balance is verified identically in time, the two conserved momenta are $a=7/2$ and $b=5/2$, the reduced energy is $19/4$, and the heavy-top system holds, so the reduction conclusions apply. All formulas use numerical SI values with dimensionless dimensionless t = T / (one second) as defined in the Example; no measurement, no concrete top and no experiment is asserted."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 3.6, Eqs. (3.62)-(3.70), printed pages 66-70 (PDF pages 72-76): the symmetric heavy top, its conserved momenta, the steady-precession condition and worked precession discussion"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Chapter 4 Section 4.5, Eqs. (4.74)-(4.88), chapter pages 15-21 (PDF pages 69-75): the exact effective potential, the steady-precession condition and the upright threshold"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed. (MIT Press, 2014), Section 2.10, Eqs. (2.84)-(2.91): the axisymmetric top, its conserved momenta and reduced energy; the explicit steady precession is checked locally"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
verification:
  precheck: pass
---

## Example

**Numerical SI convention.** Let $T$ denote physical elapsed time and fix
$T_*=1\,\mathrm s$, $M_*=1\,\mathrm{kg}$ and $D_*=1\,\mathrm m$.
All formulas below use numerical SI values: $t:=T/T_*$ is dimensionless,
angles are in radians, positions and $d$ are divided by $D_*$, masses by
$M_*$, inertia entries by $M_*D_*^2$, and $g$ by $D_*/T_*^2$.
Primes denote differentiation with respect to $t$. Restore physical
angular velocity as $\omega_{\rm phys}(T)=\omega(T/T_*)/T_*$,
angular momentum as $J_{\rm phys}(T)=(M_*D_*^2/T_*)J(T/T_*)$,
energy as $(M_*D_*^2/T_*^2)E$, and torque as
$(M_*D_*^2/T_*^2)\tau(T/T_*)$.
Thus the displayed rates $\varphi'=1$ and $\psi'=2$ mean physical rates
$1\,\mathrm s^{-1}$ and $2\,\mathrm s^{-1}$, and every trigonometric
argument is dimensionless. The physical placement is
$x_{\rm phys}(T,\rho_{\rm phys})=D_*x(T/T_*,\rho_{\rm phys}/D_*)$;
its derivatives restore the pivot balance and heavy-top equations with
the same SI data. These are unit conventions of [[def-cm01-units]], not
measured inputs.

Adopt the heavy symmetric top branch [[post-cm11-heavy-top]] with declared
parameters
$$A_{c}=2,\qquad C_{c}=1,\qquad m=1,\qquad d=1,\qquad g=1$$
in the framework's units ([[def-cm01-units]]), so that the body inertia
matrix is $I=\mathrm{diag}(2,2,1)$ in the declared basis and the pivot
transverse moment is
$$A=A_{c}+md^{2}=2+1=3,\qquad C=C_{c}=1 .$$
Let $\theta_{0}:=\pi/3$ and consider the angles
$$\varphi(t)=t,\qquad\theta(t)=\theta_{0},\qquad\psi(t)=2t\qquad(t\in\mathbb R),$$
the orientation path $R(t):=\Theta(\varphi(t),\theta(t),\psi(t))$ of
[[def-cm-euler-angle-parametrization-and-heavy-top-system]], the centre of
mass $c(t):=d\,R(t)e_{3}$, and the motion $x(t,\rho):=c(t)+R(t)\rho$. Verify:

1. **It is a motion of the branch satisfying the pivot balance.** The pivot
   constraint $c(t)+R(t)(-de_{3})=0$ holds, and with
   $\omega(t)=\bigl(-\tfrac{\sqrt3}2\cos(2t),\ \tfrac{\sqrt3}2\sin(2t),\ \tfrac52\bigr)$
   and $\gamma(t)=R(t)^{\mathsf T}e_{3}$,
   $$\tilde I\,\omega'+\omega\times\tilde I\,\omega=-mgd\,(e_{3}\times\gamma)\qquad(t\in\mathbb R),$$
   where $\tilde I=\mathrm{diag}(3,3,1)$; hence the motion satisfies the
   adopted balance of [[post-cm11-heavy-top]] clause (v) and the conclusions
   of [[pthm-cm11-top-reduction]] clauses 1-2 hold along it.
2. **The conserved momenta and the reduced energy.** With
   $\varphi'=1$, $\theta'=0$, $\psi'=2$,
   $$a=A\varphi'\sin^{2}\theta_{0}+b\cos\theta_{0}=\frac72,\qquad b=C\bigl(\psi'+\varphi'\cos\theta_{0}\bigr)=\frac52,\qquad E=U(\theta_{0})=\frac{19}{4}.$$
3. **The heavy-top system holds, and $\theta$ is constant.** The three
   equations of [[def-cm-euler-angle-parametrization-and-heavy-top-system]]
   hold for the triple, and $A\theta''=-U'(\theta_{0})=0$, so the motion is a
   **steady precession**: $\varphi'=1$ and $\psi'=2$ are constant and the
   nutation angle is constantly $\pi/3$.

## Facts & Assumptions

**Given:** The branch parameters $A_{c}=2$, $C_{c}=1$, $m=1$, $d=1$, $g=1$, the derived constants $A=3$, $C=1$, the angle data $\theta_{0}=\pi/3$, $\varphi(t)=t$, $\psi(t)=2t$, and the path $R=\Theta(\varphi,\theta_{0},\psi)$ with $c=dRe_{3}$.

[L1] Branch kinematics and dynamics: the motions of the branch satisfy the pivot constraint $c=dRe_{3}$ and the balance $J_{p}'=\tau_{p}$ with $J_{p}=R\tilde I\omega$, $\tau_{p}=-mgd(Re_{3})\times e_{3}$, so the reduction conclusions of [[pthm-cm11-top-reduction]] clauses 1-4 hold on any interval carrying an Euler-angle description ([[post-cm11-heavy-top]] clauses (ii)-(v), [[pthm-cm11-top-reduction]] clauses 1-4).

[L2] Euler-angle kinematics: for $R=\Theta(\varphi,\theta,\psi)$ one has $\omega=(-\varphi'\sin\theta\cos\psi+\theta'\sin\psi,\ \varphi'\sin\theta\sin\psi+\theta'\cos\psi,\ \psi'+\varphi'\cos\theta)$ and $\gamma=R^{\mathsf T}e_{3}=(-\sin\theta\cos\psi,\ \sin\theta\sin\psi,\ \cos\theta)$ ([[lem-cm-euler-angle-angular-velocity]], [[pthm-cm11-top-reduction]] clause 2, [[lem-cm-coordinate-rotation-matrices]]).

[L3] The heavy-top system and its reduction: the three displayed equations of [[def-cm-euler-angle-parametrization-and-heavy-top-system]], and the conclusions $A\theta''=-U'(\theta)$, $\varphi'=(a-b\cos\theta)/(A\sin^{2}\theta)$, $\psi'=b/C-(a-b\cos\theta)\cos\theta/(A\sin^{2}\theta)$ of [[thm-cm-heavy-top-reduction]] clauses 2-4.

[L4] Calculus and algebra: $(\sin)'=\cos$, $(\cos)'=-\sin$, the sum and product rules, and $\sin^{2}+\cos^{2}=1$; the cross product is bilinear with the coordinate formula and is orthogonal to its factors ([[thm-sine-and-cosine-derivatives]], [[def-sine-and-cosine-by-power-series]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-algebra-of-derivatives]], [[def-cross-product-in-r3]], [[def-euclidean-inner-product]]).

[L5] The constant $\pi=2\gamma$, where $\gamma$ is the smallest positive zero of cosine; $\cos\pi=-1$, $\cos0=1$, $\cos(\pi/2)=0$, $\sin0=0$; cosine is strictly decreasing on $[0,\pi]$ and sine strictly increasing on $[0,\pi/2]$; sine and cosine obey their addition formulas; and every nonnegative real has a unique nonnegative square root ([[def-pi-via-first-positive-cosine-zero]], [[thm-cosine-has-a-smallest-positive-zero]], [[thm-quarter-turn-values-and-shift-formulas]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-sine-and-cosine-addition-formulas]], [[thm-of-square-roots]]).

## Verification

**Proof technique:** direct; compute the body angular velocity, the vertical direction in body coordinates and the two sides of the pivot balance on the declared data, then read off the conserved momenta and the reduced energy.

1.1 Put $\theta=\pi/3$, $c=\cos\theta$ and $s=\sin\theta$. Since $0<\theta<\pi/2$, [L5] gives $0<c<1$ and $s>0$. The addition formulas [L5] and Pythagorean identity [L4] give $\cos\pi=\cos(3\theta)=4c^{3}-3c$; as $\cos\pi=-1$, $(c+1)(2c-1)^{2}=0$. Because $c>0$, $c=1/2$. Then $s^{2}=1-c^{2}=3/4$ and $s>0$, so the uniqueness of the nonnegative square root [L5] gives $s=\sqrt3/2$. [L4, L5, algebra]

2.1 By [L2] with $\varphi'=1$, $\theta'=0$, $\psi'=2$, $\theta_{0}=\pi/3$ and $\psi(t)=2t$: $\omega(t)=\bigl(-\sin\theta_{0}\cos(2t),\ \sin\theta_{0}\sin(2t),\ 2+\cos\theta_{0}\bigr)=\bigl(-\tfrac{\sqrt3}2\cos(2t),\ \tfrac{\sqrt3}2\sin(2t),\ \tfrac52\bigr)$ and $\gamma(t)=\bigl(-\tfrac{\sqrt3}2\cos(2t),\ \tfrac{\sqrt3}2\sin(2t),\ \tfrac12\bigr)$ by step 1.1 and [L2]. [given, step 1.1, L2, L4, algebra]

2.2 With $\varphi'=1$, $\theta'=0$, $\psi'=2$, $\sin^{2}\theta_{0}=\tfrac34$ and $\cos\theta_{0}=\tfrac12$ by [L4]: $b=C(\psi'+\varphi'\cos\theta_{0})=1\cdot(2+\tfrac12)=\tfrac52$ and $a=A\varphi'\sin^{2}\theta_{0}+b\cos\theta_{0}=3\cdot\tfrac34+\tfrac52\cdot\tfrac12=\tfrac94+\tfrac54=\tfrac72$. [step 1.1, given, L1, L4, algebra]

3.1 Compute both sides of the balance with $\tilde I=\mathrm{diag}(3,3,1)$: by [L4], $\omega'=\bigl(\sqrt3\sin(2t),\ \sqrt3\cos(2t),\ 0\bigr)$, so $\tilde I\omega'=\bigl(3\sqrt3\sin(2t),\ 3\sqrt3\cos(2t),\ 0\bigr)$, and with $\tilde I\omega=\bigl(-\tfrac{3\sqrt3}2\cos(2t),\ \tfrac{3\sqrt3}2\sin(2t),\ \tfrac52\bigr)$, the coordinate formula for the cross product gives $(\omega\times\tilde I\omega)_{1}=\tfrac{5\sqrt3}4\sin(2t)-\tfrac{15\sqrt3}4\sin(2t)=-\tfrac{5\sqrt3}2\sin(2t)$, $(\omega\times\tilde I\omega)_{2}=-\tfrac{15\sqrt3}4\cos(2t)+\tfrac{5\sqrt3}4\cos(2t)=-\tfrac{5\sqrt3}2\cos(2t)$ and $(\omega\times\tilde I\omega)_{3}=0$. Hence the left side is $\bigl(\tfrac{\sqrt3}2\sin(2t),\ \tfrac{\sqrt3}2\cos(2t),\ 0\bigr)$. On the right, $e_{3}\times\gamma=(-\gamma_{2},\gamma_{1},0)=\bigl(-\tfrac{\sqrt3}2\sin(2t),\ -\tfrac{\sqrt3}2\cos(2t),\ 0\bigr)$ and $mgd=1$, so the right side is the same vector; the balance holds for every $t$. [step 2.1, given, L1, L4, algebra]

3.2 The reduced energy: $E=\tfrac12A\theta'^{2}+\tfrac{(a-b\cos\theta_{0})^{2}}{2A\sin^{2}\theta_{0}}+\tfrac{b^{2}}{2C}+mgd\cos\theta_{0}=\tfrac{(9/4)^{2}}{2\cdot3\cdot(3/4)}+\tfrac{25/4}{2}+\tfrac12=\tfrac{9}{8}+\tfrac{25}{8}+\tfrac48=\tfrac{38}{8}=\tfrac{19}{4}$, where $a-b\cos\theta_{0}=\tfrac72-\tfrac54=\tfrac94$ by step 2.2. [step 2.2, given, L3, L4, algebra]

4.1 The constraint $c(t)+R(t)(-de_{3})=dR(t)e_{3}-dR(t)e_{3}=0$ holds by the definition of $c$; hence with step 3.1 the data constitute a motion of the branch satisfying the adopted pivot balance, and clauses 1-2 of [[pthm-cm11-top-reduction]] apply. [step 2.1, step 3.1, given, L1]

5.1 The three equations of the heavy-top system of [L3] hold for the triple: the first and third are the statements that $a$ and $b$ of step 2.2 are constant, and the second is $0=A\varphi'^{2}\sin\theta_{0}\cos\theta_{0}-C(\psi'+\varphi'\cos\theta_{0})\varphi'\sin\theta_{0}+mgd\sin\theta_{0}=3\cdot\tfrac{\sqrt3}4-\tfrac{5\sqrt3}4+\tfrac{2\sqrt3}4$ with $\varphi'=1$, which vanishes by [L4]. Hence $(\varphi,\theta,\psi)$ is a heavy-top trajectory with parameters $(A,C,m,d,g)=(3,1,1,1,1)$, and $A\theta''=-U'(\theta_{0})=0$; the conservation of $a$ and $b$ and the formulas $\varphi'=(a-b\cos\theta_{0})/(A\sin^{2}\theta_{0})=\tfrac{9/4}{9/4}=1$ and $\psi'=b/C-(a-b\cos\theta_{0})\cos\theta_{0}/(A\sin^{2}\theta_{0})=\tfrac52-\tfrac{9/4\cdot1/2}{9/4}=\tfrac52-\tfrac12=2$ of [L3] are consistent with the data, so the motion is a steady precession with constant nutation angle $\pi/3$. [step 4.1, step 2.2, step 3.2, given, L3, L4, algebra] ∎

## Remarks

- **A steady precession, not a sleeping top.** The nutation angle stays at $\pi/3$ while the precession and spin rates are constant; the sleeping-top configuration $\theta=0$ is a pole of the chart and is not covered by [[pthm-cm11-top-reduction]], so this example makes no claim about it.

- **What is declared.** The parameters, angles and rates are declared model data in the framework's units; the verification is an exact computation inside the branch and asserts no measured mass, length, duration or field strength, and no claim that a concrete top realises this data.

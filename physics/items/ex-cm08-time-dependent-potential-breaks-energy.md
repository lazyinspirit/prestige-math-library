---
id: ex-cm08-time-dependent-potential-breaks-energy
kind: example
title: "A one-label model with a time-dependent potential: the time-translation identity fails and the mechanical energy changes at the rate of the explicit time dependence"
status: draft
origin: session
domain: physics
dependency_level: 18
deps: [pthm-cm08-time-energy, pthm-cm03-energy-balance, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm02-newtonian-flow, def-cm07-action-and-mechanical-lagrangian, def-cm08-symmetry-of-the-mechanical-lagrangian, def-cm01-units, def-cm01-configuration, def-euclidean-inner-product, thm-sine-and-cosine-derivatives, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, lem-derivative-of-a-power, def-vector-valued-derivative-and-integral, def-interval, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives]
dependency_roles:
  pthm-cm08-time-energy: physical-result
  pthm-cm03-energy-balance: physical-result
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm02-newtonian-flow: formulation-prerequisite
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm08-symmetry-of-the-mechanical-lagrangian: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm01-configuration: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked model check inside the framework: a one-label global potential model (d=0) in the three-dimensional force branch whose potential depends explicitly on time through a prescribed vector drive f(t), with force -k x + f(t); the time-translation identity of the pair holds exactly when the drive is constant, the mechanical energy changes at the rate -f'(t) . x along motions, and for the sinusoidally driven specialisation an explicit global motion is exhibited whose energy derivative at a stated time is nonzero, together with a numerical instance. All values are model values of the declared idealization; the drive is adopted external data, and the example reports no measurement."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 5.1, Eqs. (5.13a)-(5.19), chapter pages 3-4 (PDF pages 89-90): the driven oscillator with a prescribed time-dependent force and its forced response"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 7, Section 7.1.3, printed pages 147-148 (PDF pages 150-151): the driven linear oscillator with a harmonic driving term"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.4.1 'Homogeneity of Time', printed page 26 (PDF page 32): conservation of the energy-type charge requires the absence of explicit time dependence"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Example

Work in the one-label force model of [[post-cm02-force-superposition]] with
$N=1$, mass $m>0$, time window $I_{0}=\mathbb R$, configuration domain
$Q=\mathbb R^{3}$, and let $f:\mathbb R\to\mathbb R^{3}$ be of class $C^{2}$,
of dimension $\mu\ell\tau^{-2}$ (newtons), be a prescribed external drive.
Adopt the **time-dependent potential**

$$U(t,x):=\tfrac{k}{2}\lvert x\rvert^{2}-f(t)\cdot x,\qquad k>0\ \text{with}\ [k]=\mu\tau^{-2},$$

of class $C^{2}$ and dimension $\mu\ell^{2}\tau^{-2}$, and check that the
presentation $(U,0)$ of [[def-cm03-potential-and-mechanical-energy]] has
force map $F(t,x,v)=-kx+f(t)$ of the standing regularity
([[post-cm02-force-superposition]] clause (iii)), so that the model is a
global potential model ($d\equiv0$) with mechanical energy

$$E(t,x,v)=\tfrac{m}{2}\lvert v\rvert^{2}+\tfrac{k}{2}\lvert x\rvert^{2}-f(t)\cdot x.$$

Verify:

For time translations take the family parameter to be measured in seconds;
then the generator value $\tau\equiv1$ is dimensionless and the charge $-E$
has units of joules.

1. **presentation and identity.** $\nabla_{x}U(t,x)=kx-f(t)$, so
   $-\nabla_{x}U=-kx+f(t)=F$; and
   $\partial_{t}U(t,x)=-f'(t)\cdot x$, so the time-translation datum
   $\tau\equiv1,\xi\equiv0,B\equiv0$ satisfies the model identity of
   [[def-cm08-symmetry-of-the-mechanical-lagrangian]] if and only if
   $f'\equiv0$ on $\mathbb R$.
2. **energy rate.** Along every motion $x:J\to Q$ of the model,

$$E'(t)=\partial_{t}U\bigl(t,x(t)\bigr)=-f'(t)\cdot x(t);$$

   in particular the mechanical energy is not conserved along any motion on
   which $t\mapsto f'(t)\cdot x(t)$ does not vanish identically, and if
   $f'(t_{0})\cdot x_{0}\ne0$ then the maximal motion through $(t_{0},x_{0},0)$
   has nonzero energy derivative at $t_{0}$.
3. **explicit sinusoidally driven motion.** Specialise to
   $f(t):=f_{0}\cos(\Omega t)\,\hat e$ with $f_{0}>0$ of force dimension,
   $\Omega>0$ of dimension $\tau^{-1}$ and a dimensionless unit vector
   $\hat e\in\mathbb R^{3}$, and assume $k\ne m\Omega^{2}$. Then

$$x_{p}(t):=\frac{f_{0}\cos(\Omega t)}{k-m\Omega^{2}}\,\hat e\qquad(t\in\mathbb R)$$

   is a motion of the model on $\mathbb R$, and along it

$$E(t)=\frac{f_{0}^{2}\bigl[m\Omega^{2}-(k-m\Omega^{2})\cos^{2}(\Omega t)\bigr]}{2(k-m\Omega^{2})^{2}},\qquad E'(t)=\frac{f_{0}^{2}\Omega\,\sin(\Omega t)\cos(\Omega t)}{k-m\Omega^{2}};$$

   at $t_{0}=\pi/(4\Omega)$ one has $E'(t_{0})=f_{0}^{2}\Omega/(2(k-m\Omega^{2}))\ne0$.
4. **numerical instance.** For $m=1\,\mathrm{kg}$, $k=1\,\mathrm{kg}\,\mathrm s^{-2}$,
   $\Omega=1/2\,\mathrm s^{-1}$, $f_{0}=1\,\mathrm N$ and $\hat e=e_{1}$ one has
   $k-m\Omega^{2}=3/4$ and $x_{p}(t)=\tfrac43\cos(t/2)e_{1}$; at $t=\pi/2\,\mathrm s$
   the values are $x_{p}=\tfrac{2\sqrt2}{3}\,\mathrm m$,
   $x_{p}'=-\tfrac{\sqrt2}{3}\,\mathrm m\,\mathrm s^{-1}$,
   $E=-\tfrac19\,\mathrm J$ and $E'=\tfrac13\,\mathrm J\,\mathrm s^{-1}$.

All values are model values of the declared idealization; the drive is adopted
external data and no measurement is reported.

## Facts & Assumptions

**Given:** The model, the time-dependent potential $U$, the drive $f$, the sinusoidal specialisation, the curve $x_{p}$ and the numerical instance.

[F1] Model and presentation ([[post-cm02-force-superposition]], [[def-cm03-potential-and-mechanical-energy]], [[def-cm07-action-and-mechanical-lagrangian]], [[def-cm01-configuration]], [[def-cm01-units]]): $U$ is $C^{2}$ with $\nabla_{x}U=kx-f(t)$ and $\partial_{t}U=-f'(t)\cdot x$; $F=-\nabla_{x}U$ has the standing regularity; the model is a global potential model with mechanical energy $E=\tfrac{m}{2}\lvert v\rvert^{2}+U(t,x)$; motions satisfy $mx''=F(t,x,x')=-kx+f(t)$ ([[def-cm02-newtonian-flow]]).

[F2] Energy balance and the time-translation statement ([[pthm-cm03-energy-balance]] clause 1, [[pthm-cm08-time-energy]]): along a motion of the presentation the mechanical energy is differentiable with $E'=\partial_{t}U+\sum_{i}\langle d_{i},x_{i}'\rangle$, which with $d\equiv0$ is $E'=\partial_{t}U$; the time-translation datum satisfies the model identity exactly when $\partial_{t}U\equiv0$, and then the energy is conserved, while a state with $\partial_{t}U(t_{0},x_{0})\ne0$ produces a maximal motion with nonzero energy derivative there.

[F3] Calculus ([[thm-sine-and-cosine-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[lem-derivative-of-a-power]], [[def-vector-valued-derivative-and-integral]], [[def-euclidean-inner-product]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[def-interval]]): the derivatives of sine and cosine with the chain rule give $f'(t)=-f_{0}\Omega\sin(\Omega t)\hat e$ and the derivatives of $x_{p}$; the Euclidean inner product is bilinear and $\lvert\hat e\rvert=1$.

## Verification

**Proof technique:** direct; verify the presentation and the identity condition, differentiate the energy along the explicit motion and evaluate the numerical instance.

1.1 Clause 1: differentiating $U(t,x)=\tfrac{k}{2}\lvert x\rvert^{2}-f(t)\cdot x$ in the configuration slot gives $\nabla_{x}U(t,x)=kx-f(t)$, hence $F=-\nabla_{x}U=-kx+f(t)$, which is continuous and locally Lipschitz in $(x,v)$ locally uniformly in $t$ because $f$ is continuous and the map is affine in the state; differentiating in $t$ gives $\partial_{t}U(t,x)=-f'(t)\cdot x$, which vanishes identically exactly when $f'\equiv0$; by [F2] the time-translation datum satisfies the model identity exactly then. [F1, F2, F3, algebra]

1.2 Clause 2: along a motion, $d\equiv0$ and [F2] gives $E'(t)=\partial_{t}U(t,x(t))=-f'(t)\cdot x(t)$; if the right-hand side does not vanish identically, then $E$ is not constant on $J$; and if $f'(t_{0})\cdot x_{0}\ne0$, the maximal motion through $(t_{0},x_{0},0)$ exists with $E'(t_{0})=-f'(t_{0})\cdot x_{0}\ne0$. [F2, algebra]

1.3 Clause 3, the curve is a motion: with $f(t)=f_{0}\cos(\Omega t)\hat e$ one has $x_{p}''(t)=-\Omega^{2}x_{p}(t)$ by [F3], so $mx_{p}''=-m\Omega^{2}x_{p}$, while $$-kx_{p}(t)+f(t)=f_{0}\cos(\Omega t)\Bigl(1-\frac{k}{k-m\Omega^{2}}\Bigr)\hat e=\frac{f_{0}\cos(\Omega t)}{k-m\Omega^{2}}\bigl(k-m\Omega^{2}-k\bigr)\hat e=-m\Omega^{2}x_{p}(t),$$ so the equation $mx_{p}''=-kx_{p}+f$ holds on $\mathbb R$. [F1, F3, algebra]

2.1 Clause 3, the energy values: by [F2] and step 1.3, $E'=-f'(t)\cdot x_{p}(t)=f_{0}\Omega\sin(\Omega t)\,(x_{p}(t)\cdot\hat e)=f_{0}^{2}\Omega\sin(\Omega t)\cos(\Omega t)/(k-m\Omega^{2})$, since $x_{p}(t)\cdot\hat e=f_{0}\cos(\Omega t)/(k-m\Omega^{2})$; substituting the displayed curve into $E=\tfrac{m}{2}\lvert x_{p}'\rvert^{2}+\tfrac{k}{2}\lvert x_{p}\rvert^{2}-f\cdot x_{p}$ gives $$E(t)=\frac{m f_{0}^{2}\Omega^{2}\sin^{2}(\Omega t)+k f_{0}^{2}\cos^{2}(\Omega t)}{2(k-m\Omega^{2})^{2}}-\frac{f_{0}^{2}\cos^{2}(\Omega t)}{k-m\Omega^{2}}=\frac{f_{0}^{2}\bigl[m\Omega^{2}-(k-m\Omega^{2})\cos^{2}(\Omega t)\bigr]}{2(k-m\Omega^{2})^{2}},$$ where the second form uses $\sin^{2}+\cos^{2}=1$; differentiating this expression with [F3] returns the displayed derivative, and at $t_{0}=\pi/(4\Omega)$ it equals $f_{0}^{2}\Omega/(2(k-m\Omega^{2}))\ne0$. [F2, F3, step 1.3, algebra]

3.1 Clause 4, numerical instance: with $m=1$, $k=1$, $\Omega=1/2$, $f_{0}=1$ and $\hat e=e_{1}$ one has $k-m\Omega^{2}=3/4$ and $x_{p}(t)=\tfrac43\cos(t/2)e_{1}$, so at $t=\pi/2$: $x_{p}=\tfrac43\cos(\pi/4)e_{1}=\tfrac{2\sqrt2}{3}e_{1}$, $x_{p}'=-\tfrac23\sin(\pi/4)e_{1}=-\tfrac{\sqrt2}{3}e_{1}$, $f(t)\cdot x_{p}=\cos(\pi/4)\cdot\tfrac{2\sqrt2}{3}=\tfrac23$, $\lvert x_{p}'\rvert^{2}=\tfrac29$, $\lvert x_{p}\rvert^{2}=\tfrac89$; hence $E=\tfrac12\cdot\tfrac29+\tfrac12\cdot\tfrac89-\tfrac23=\tfrac19+\tfrac49-\tfrac23=-\tfrac19\,\mathrm J$, and $E'=f_{0}^{2}\Omega\sin(\Omega t)\cos(\Omega t)/(k-m\Omega^{2})=\tfrac12\cdot\tfrac12/(\tfrac34)=\tfrac13\,\mathrm J\,\mathrm s^{-1}\ne0$. [step 2.1, F3, algebra]

4.1 Clauses 1 and 2 are steps 1.1 and 1.2, and clause 3 with its numerical instance is steps 1.3, 2.1 and 3.1; the example exhibits a model with an explicit time dependence in its potential along which the mechanical energy is not conserved, in agreement with the sharpness clause of the time-translation statement, and it reports no measurement. [step 1.1, step 1.2, step 1.3, step 2.1, step 3.1] ∎

## Remarks

- **The driven model is adopted external data.** The drive $f(t)$ is prescribed and does not depend on the state; the object producing it is not a label of the model. The example therefore shows that the energy balance of the pair and the failure of the time-translation identity are properties of the declared presentation, not of the framework's kinematics; the same mechanical equation with a constant force would have an autonomous representative and a conserved energy.

- **Representative dependence.** Adding a function $c(t)$ to $U$ shifts the energy by $c(t)$ and its rate by $c'(t)$, as recorded in clause (c) of [[def-cm03-potential-and-mechanical-energy]]; the representative declared here is the one in which the drive is visible as $\partial_{t}U=-f'(t)\cdot x$, and the numerical values of $E$ depend on that choice of representative.

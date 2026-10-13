---
id: ex-cm14-oscillator-caustic-check
kind: example
title: "The conjugate time of the harmonic model: the complete integral's mixed derivative is unbounded and the characteristic family refocuses at $\\omega t\\in\\pi\\mathbb Z$"
status: draft
origin: pipeline
domain: physics
dependency_level: 22
deps: [post-cm04-harmonic-model, pthm-cm04-harmonic-motion, def-cm12-hamiltonian, pthm-cm12-mechanical-hyperregularity, def-cm14-hamilton-jacobi-equation, def-cm14-complete-integral, pthm-cm14-hamilton-jacobi-characteristics, def-cm13-hamiltonian-field, def-cm02-newtonian-flow, def-cm01-units, def-ck-euclidean-maps-and-diffeomorphisms, def-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, thm-sine-and-cosine-derivatives, thm-chain-rule, thm-algebra-of-derivatives, thm-sine-cosine-zero-sets-and-fundamental-period, cor-trigonometric-parity-and-pythagorean-identity, thm-derivative-of-an-inverse, def-derivative, def-interval, def-cm07-generalized-coordinates-and-forces, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition]
dependency_roles:
  post-cm02-force-superposition: physical-assumption
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  def-cm07-generalized-coordinates-and-forces: formulation-prerequisite
  post-cm04-harmonic-model: physical-assumption
  pthm-cm04-harmonic-motion: physical-result
  def-cm12-hamiltonian: formulation-prerequisite
  pthm-cm12-mechanical-hyperregularity: physical-result
  def-cm14-hamilton-jacobi-equation: formulation-prerequisite
  def-cm14-complete-integral: formulation-prerequisite
  pthm-cm14-hamilton-jacobi-characteristics: physical-result
  def-cm13-hamiltonian-field: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-derivative-of-an-inverse: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked warning inside the declared harmonic model of the framework's force branch: the explicit complete integral of the oscillator's Hamilton-Jacobi equation is defined only on the time strips between the conjugate times $\\omega t\\in\\pi\\mathbb Z$; its mixed derivative $S_{x\\alpha}=-m\\omega\\csc(\\omega t)$ is unbounded as those times are approached; and the characteristic family through a fixed event refocuses there (all members with the same initial position pass through the same point a half-period later), so the map from the family's label to the position degenerates. The example asserts no measured value and no claim about any apparatus; it exhibits why the Hamilton-Jacobi statements of this page are local in time and carry no claim across a caustic."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 4.7, printed pages 121-126 (PDF pages 127-132): the endpoint-action construction of $W$ and the Hamilton-Jacobi equation it solves"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 10.4, chapter pages 13-14 (PDF pages 249-250): the endpoint-momentum construction of the action and the Hamilton-Jacobi equation"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Chapter 6, Sections 6.1-6.1.4: the Hamilton-Jacobi strategy and the action as the generating function of time evolution; the source states no caustic condition"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 4, Sections 4.1-4.6, printed pages 60-91 (PDF pages 63-94): generating functions, Hamilton-Jacobi separation and action-angle conventions"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---
## Example

Adopt the harmonic model of [[post-cm04-harmonic-model]] as in the
companion example. For the CM12-CM14 interfaces, declare an ambient one-label potential presentation on $Q_{\mathrm{amb}}=\mathbb R^3$, time window $\mathbb R$, mass operator $mI_3$, potential $U_{\mathrm{amb}}(y)=ky_1^2/2$ and residual force $d=0$. Its smooth immersion $X:\mathbb R\to Q_{\mathrm{amb}}$, $X(x)=(x,0,0)$ has mass metric $G=DX^{\mathsf T}mI_3DX=m$ and substituted potential $kx^2/2$ ([[def-cm07-generalized-coordinates-and-forces]], [[def-cm03-potential-and-mechanical-energy]], [[post-cm02-force-superposition]]). The transverse equations are $0=0$, so scalar harmonic motions reconstruct ambient motions. The displayed scalar Hamiltonian is the generalized-coordinate chart Hamiltonian of [[def-cm12-hamiltonian]] clause (b).

Take one label of mass $m>0$, spring constant $k>0$,
$\omega=\sqrt{k/m}>0$, $T=2\pi/\omega$, branch Hamiltonian
$H(x,p)=p^{2}/(2m)+m\omega^{2}x^{2}/2$, and the family

$$S(t,x,\alpha)=\frac{m\omega}{2}\Bigl[(x^{2}+\alpha^{2})\cot(\omega t)-2x\alpha\,\csc(\omega t)\Bigr]$$
on the open strips where $\sin(\omega t)\neq0$. The example verifies:

1. **(nondegeneracy between conjugate times)** the mixed derivative is
   $$S_{x\alpha}(t)=-\frac{m\omega}{\sin(\omega t)},$$ so $S$ is a complete
   integral of the model's Hamilton-Jacobi equation at every point of
   each time strip $\omega t\in(k\pi,(k+1)\pi)$, and
   $|S_{x\alpha}(t)|\to+\infty$ as $\omega t\to k\pi$ for every
   $k\in\mathbb Z$; the family has a pole there and offers no complete
   integral across it.
2. **(degeneration of the characteristic family)** the characteristic
   curves of $S$ are
$$x(t)=\alpha\cos(\omega t)-\frac{\beta}{m\omega}\sin(\omega t),\qquad\beta=S_{\alpha}(t,x(t),\alpha),$$and the derivative of the position with respect to the Jacobi label
   $\beta$ at fixed $(\alpha,t)$ is
$$\frac{\partial x}{\partial\beta}(t)=-\frac{\sin(\omega t)}{m\omega},\qquad \frac{\partial x}{\partial\beta}(t)=\frac{1}{S_{x\alpha}(t)}\quad(\sin(\omega t)\ne0),$$so it vanishes exactly at the conjugatetimes $\omega t\in\pi\mathbb Z$, where the map from the label $\beta$
   to the position degenerates while $S_{x\alpha}$ is unbounded.
3. **(refocusing of the model's motions)** independently, the harmonic
   motions through a fixed event $(t_{0},x_{0})$, labelled by their
   initial momentum $q$,
$$x(t;q)=x_{0}\cos\bigl(\omega(t-t_{0})\bigr)+\frac{q}{m\omega}\sin\bigl(\omega(t-t_{0})\bigr),$$all satisfy$x(t_{1};q)=-x_{0}$ at the conjugate time
   $t_{1}=t_{0}+\pi/\omega$, for every $q$, and
   $\partial x(t;q)/\partial q=0$ at $t=t_{1}$: the family of model
   solutions through the event refocuses at $(t_{1},-x_{0})$, so no
   label of the family can be recovered from the position there.

All data $m,k$ are declared model parameters and no measured value is
asserted.

## Facts & Assumptions

**Given:** The harmonic model data $m>0$, $k>0$, the constants $\omega,T$, the Hamiltonian $H$, the function $S$ on the strips $\sin(\omega t)\neq0$, and the conjugate time $t_{1}=t_{0}+\pi/\omega$.

[L1] Model and Hamiltonian ([[post-cm04-harmonic-model]], [[pthm-cm04-harmonic-motion]], [[pthm-cm12-mechanical-hyperregularity]], [[def-cm12-hamiltonian]], [[def-cm02-newtonian-flow]]): the motions are exactly the curves $x(t)=A\cos(\omega(t-t_{0}))+B\sin(\omega(t-t_{0}))$ with reals $A,B$; the branch Hamiltonian is the displayed $H$; and the least positive period of a nonconstant motion is $T$.

[L2] Calculus ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-directional-and-partial-derivatives]], [[def-jacobian-matrix-and-gradient]], [[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[thm-sine-cosine-zero-sets-and-fundamental-period]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-derivative-of-an-inverse]], [[def-derivative]], [[def-interval]]): $(\sin)'=\cos$, $(\cos)'=-\sin$, $(\cot)'=-\csc^{2}$, $(\csc)'=-\csc\cot$; the chain rule and algebra of derivatives apply; $\sin(k\pi)=0$ and $\cos(k\pi)=(-1)^{k}$ for integers $k$; and the one-variable inverse-function rule holds where the derivative is nonzero.

[L3] Complete-integral definitions and characteristics ([[def-cm14-hamilton-jacobi-equation]], [[def-cm14-complete-integral]], [[pthm-cm14-hamilton-jacobi-characteristics]]): a $C^{3}$ solution $S$ of $S_{t}+H(x,S_{x})=0$ is a complete integral at a point exactly when $S_{x\alpha}\neq0$ there, and its characteristic curves with $p=S_{x}$ solve the Hamilton equations with $\beta=S_{\alpha}$ constant.

[L4] Hamilton equations in one dimension ([[def-cm13-hamiltonian-field]]): for the branch Hamiltonian the field is $X_{H}=(H_{p},-H_{x})$, so $x'=p/m$ and $p'=-m\omega^{2}x$ along solutions.

## Verification

**Proof technique:** direct; differentiate the displayed family, evaluate the mixed derivative, solve the characteristics explicitly, and exhibit the refocusing of the model's solutions at the conjugate time.

1.1 Mixed derivative: by [L2], differentiating the displayed $S$ gives $S_{x}=m\omega(x\cot(\omega t)-\alpha\csc(\omega t))$ and hence $S_{x\alpha}=-m\omega\csc(\omega t)=-m\omega/\sin(\omega t)$; this is finite and nonzero exactly when $\sin(\omega t)\neq0$, and $|S_{x\alpha}|\to+\infty$ as $\omega t\to k\pi$, $k\in\mathbb Z$, because $\sin(k\pi)=0$. Direct substitution gives $S_t+H(x,S_x)=\frac{m\omega^2x^2}{2}(1+\cot^2(\omega t)-\csc^2(\omega t))=0$ on the strips by [L2]. Thus by [L3], $S$ is a complete integral at every point of the strips and has no finite nondegenerate extension across the conjugate times. This is claim 1. [L2, L3, algebra]

2.1 Characteristic curves: by [L3], solving $\beta=S_{\alpha}(t,x,\alpha) =m\omega(\alpha\cot(\omega t)-x\csc(\omega t))$ for $x$ gives $x(t)=\alpha\cos(\omega t)-\frac{\beta}{m\omega}\sin(\omega t),$ and with $p=S_{x}$ the pair solves $x'=p/m$, $p'=-m\omega^{2}x$; explicitly $x'(t)=-\alpha\omega\sin(\omega t)-\beta m^{-1}\cos(\omega t)$ and $\partial_{\beta}x(t)=-\sin(\omega t)/(m\omega)$, which vanishes exactly at $\omega t\in\pi\mathbb Z$; moreover $(\partial_{\beta}x)(t)=1/S_{x\alpha}(t)$ by step 1.1. At those times the label $\beta$ has no first-order effect on the position, so the map from the Jacobi label to the position degenerates while the mixed derivative is unbounded: this is the conjugate time of the family. This is claim 2. [L1, L2, L3, L4, step 1.1, algebra]

3.1 Refocusing: by [L1] the curve $x(t;q)=x_{0}\cos(\omega(t-t_{0}))+qm^{-1}\omega^{-1} \sin(\omega(t-t_{0}))$ is the motion of the model with $x(t_{0})=x_{0}$ and $x'(t_{0})=q/m$. At $t_{1}=t_{0}+\pi/\omega$, [L2] gives $\cos\pi=-1$ and $\sin\pi=0$, so $x(t_{1};q)=-x_{0}$ for every $q$, and $\partial x(t;q)/\partial q=(m\omega)^{-1}\sin(\omega(t-t_{0}))=0$ at $t=t_{1}$. Hence every member of the family of model solutions through $(t_{0},x_{0})$ passes through the single point $(t_{1},-x_{0})$, and the initial-momentum label cannot be recovered from the position at $t_{1}$; by the inverse-function rule of [L2] this is the same degeneration as in step 2.1. This is claim 3. [L1, L2, step 2.1, algebra]

4.1 Claims 1-3 are steps 1.1, 2.1 and 3.1 respectively; the example is verified. [step 1.1, step 2.1, step 3.1] ∎

## Remarks

- **The failure is a caustic, not an accident of the chart.** The half-period refocusing in step 3.1 shows that the obstruction is invariant: at the conjugate time the endpoint-position map of the family of extremals is not locally invertible, so no smooth complete integral based on that family can satisfy the nondegeneracy $\det S_{q\alpha}\neq0$ across the caustic. The companion scope remark records the same warning for the page.

- **No empirical content.** The conjugate time $\pi/\omega$ is a property of the ideal harmonic model; the example asserts no measured period or frequency and no claim about a real oscillator.

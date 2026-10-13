---
id: ex-cm14-harmonic-oscillator-hamilton-jacobi-check
kind: example
title: "The harmonic model worked through: an explicit complete integral, its characteristic motion, and the action-angle chart with $I=\\oint p\\,dx$ and period-one frequency $1/T$"
status: draft
origin: pipeline
domain: physics
dependency_level: 27
deps: [post-cm04-harmonic-model, pthm-cm04-harmonic-motion, def-cm04-one-dimensional-models-and-equilibria, def-cm12-hamiltonian, pthm-cm12-mechanical-hyperregularity, def-cm14-hamilton-jacobi-equation, def-cm14-complete-integral, pthm-cm14-hamilton-jacobi-characteristics, pthm-cm14-action-angle, cor-cm-action-angle-radian-scaling, def-cm02-newtonian-flow, def-cm12-cotangent-momentum, def-cm01-units, def-cm13-canonical-form, def-cm13-hamiltonian-field, def-cm07-generalized-coordinates-and-forces, def-cm07-action-and-mechanical-lagrangian, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, thm-euclidean-inverse-function-theorem, def-action-and-angle-coordinates, def-ck-euclidean-maps-and-diffeomorphisms, def-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, thm-sine-and-cosine-derivatives, thm-chain-rule, thm-algebra-of-derivatives, thm-double-angle-and-power-reduction-identities, thm-sine-cosine-zero-sets-and-fundamental-period, cor-vector-valued-ftc-and-lipschitz-bound, cor-trigonometric-parity-and-pythagorean-identity, def-darboux-integral, def-interval]
dependency_roles:
  post-cm04-harmonic-model: physical-assumption
  pthm-cm04-harmonic-motion: physical-result
  def-cm04-one-dimensional-models-and-equilibria: formulation-prerequisite
  def-cm12-hamiltonian: formulation-prerequisite
  pthm-cm12-mechanical-hyperregularity: physical-result
  def-cm14-hamilton-jacobi-equation: formulation-prerequisite
  def-cm14-complete-integral: formulation-prerequisite
  pthm-cm14-hamilton-jacobi-characteristics: physical-result
  pthm-cm14-action-angle: physical-result
  cor-cm-action-angle-radian-scaling: mathematical-premise
  def-cm02-newtonian-flow: formulation-prerequisite
  def-cm12-cotangent-momentum: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm13-canonical-form: formulation-prerequisite
  def-cm13-hamiltonian-field: formulation-prerequisite
  def-cm07-generalized-coordinates-and-forces: formulation-prerequisite
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  thm-euclidean-inverse-function-theorem: mathematical-premise
  def-action-and-angle-coordinates: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-double-angle-and-power-reduction-identities: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  cor-vector-valued-ftc-and-lipschitz-bound: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  def-darboux-integral: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked instance of the Hamilton-Jacobi and action-angle items inside the declared scalar harmonic model, identified with the generalized-coordinate presentation of the explicit straight-line immersion into a three-dimensional force model: for one label of mass $m>0$ and spring constant $k>0$, the explicit family $S$ is a complete integral of the model's Hamilton-Jacobi equation wherever $\\sin(\\omega t)\\neq0$; its characteristic curves are the harmonic motions with $\\beta=S_\\alpha$ constant; and the explicit chart $(\\theta,I)$ is canonical with $H=I/T$, $\\dot I=0$, $\\dot\\theta=1/T$ and $I=\\oint p\\,dx$, in the period-one convention, with the radian rescaling recovering the sources' chart. The example asserts no measured value, no claim that a real oscillator realizes the model, and no global extension of $S$ across the conjugate times $\\omega t\\in\\pi\\mathbb Z$."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Sections 4.5.1 and 4.7, printed pages 105-107 and 121-126 (PDF pages 111-113 and 127-132): the oscillator chart $q=\\sqrt{2I/(m\\omega)}\\sin\\theta$, $p=\\sqrt{2Im\\omega}\\cos\\theta$ with $H=\\omega I$, and the Hamilton-Jacobi construction with $p=W_q$"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Chapter 6, Sections 6.1 and 6.1.1: the Hamilton-Jacobi strategy of Chapter 6 and the oscillator branch; the source states no caustic condition"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Sections 5.1 and 10.2, chapter pages 1-2 and 5-7 (PDF pages 87-88 and 241-243): the harmonic solution with period $2\\pi/\\omega$ and the action variable $J=\\frac1{2\\pi}\\oint p\\,dq$"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---
## Example

Adopt the harmonic model of [[post-cm04-harmonic-model]]: one label of mass
$m>0$ on $\mathbb R$ with spring constant $k>0$, force law $F(x)=-kx$,
potential $U(x)=\tfrac12kx^{2}$ and no residual force.
For the CM12-CM14 presentation interfaces, declare the ambient one-label
model on $Q_{\mathrm{amb}}=\mathbb R^{3}$ with mass operator $mI_{3}$,
time window $\mathbb R$, potential $U_{\mathrm{amb}}(y)=ky_{1}^{2}/2$,
$d=0$ and smooth force $F_{\mathrm{amb}}(y,v)=(-ky_{1},0,0)$
([[post-cm02-force-superposition]], [[def-cm03-potential-and-mechanical-energy]],
[[def-cm07-action-and-mechanical-lagrangian]]).
The generalized-coordinate map $X:\mathbb R\to Q_{\mathrm{amb}}$,
$X(x)=(x,0,0)$ is a smooth immersion with length-valued coordinate $x$,
$G=DX^{\mathsf T}mI_{3}DX=m$ and substituted potential $kx^{2}/2$
([[def-cm07-generalized-coordinates-and-forces]]).
Thus its chart Hamiltonian $\widetilde H$ of
[[def-cm12-hamiltonian]] clause (b) is exactly the scalar Hamiltonian
below; write it as $H$. A scalar harmonic motion reconstructs an ambient
motion $X\circ x$ since the longitudinal equation is $mx''=-kx$ and
both transverse equations are $0=0$. Write

$$\omega:=\sqrt{\frac{k}{m}}>0,\qquad T:=\frac{2\pi}{\omega},$$

so that $U(x)=\tfrac12m\omega^{2}x^{2}$ and the branch Hamiltonian in the
generalized-coordinate chart is

$$H(x,p)=\frac{p^{2}}{2m}+\frac{m\omega^{2}}{2}x^{2}$$

([[pthm-cm12-mechanical-hyperregularity]], [[def-cm12-hamiltonian]]), with
$[H]=\mu\ell^{2}\tau^{-2}$ ([[def-cm01-units]]). On the open set

$$V:=\{(t,x,\alpha)\in\mathbb R^{3}:\sin(\omega t)\neq0\}$$

define

$$S(t,x,\alpha):=\frac{m\omega}{2}\Bigl[(x^{2}+\alpha^{2})\cot(\omega t)-2x\alpha\,\csc(\omega t)\Bigr].$$
The example checks the following claims of this page on this instance.

1. **(complete integral)** $S$ is of class $C^{\infty}$ on $V$ and solves
   the model's Hamilton-Jacobi equation
   $S_{t}+H(x,S_{x})=0$ on $V$; the mixed derivative is
   $S_{x\alpha}=-m\omega\,\csc(\omega t)$, so $S$ is a complete integral of
   the model's Hamilton-Jacobi equation at every point of $V$
   ([[def-cm14-hamilton-jacobi-equation]],
   [[def-cm14-complete-integral]]).
2. **(characteristics)** for every $(t_{0},x_{0},\alpha_{0})\in V$ and
   every real $\beta$, the curve
   $$x(t)=\alpha_{0}\cos(\omega t)-\frac{\beta}{m\omega}\sin(\omega t)$$
   satisfies $S_{\alpha}(t,x(t),\alpha_{0})=\beta$, and with
   $p(t):=S_{x}(t,x(t),\alpha_{0})$ the pair $(x,p)$ solves
   $x'=H_{p}$, $p'=-H_{x}$ on every interval on which
   $\sin(\omega t)\neq0$; hence $x$ is a motion of the harmonic model with
   $p=mx'$ and $S_{\alpha}$ is constant along it
   ([[pthm-cm14-hamilton-jacobi-characteristics]]).
3. **(action-angle chart)** the map
$$(\theta,I)\longmapsto(x,p)=\Bigl(\sqrt{\frac{I}{\pi m\omega}}\,\sin(2\pi\theta),\ \sqrt{\frac{Im\omega}{\pi}}\,\cos(2\pi\theta)\Bigr)$$

   for $I>0$ and $\theta\in\mathbb R/\mathbb Z$ is a $C^{\infty}$
   parametrization of the punctured phase plane; local real lifts of
   $\theta$ give charts with $\{x,p\}=1$ for the
   presentation's bracket, i.e. a canonical chart of
   [[def-cm13-canonical-form]] with
   $\omega_{\mathrm{form}}=d\theta\wedge dI$ in the period-one convention
   of [[def-action-and-angle-coordinates]], and in it
   $$H=h(I)=\frac{I}{T},$$
   so that every motion satisfies $\dot I=0$,
   $\dot\theta=1/T$, by the canonical Hamiltonian field of
   [[def-cm13-hamiltonian-field]] clause (a).
4. **(action normalization)** the action coordinate is the period integral
   $$I=\oint p\,dx=\int_{0}^{T}p(t)\,x'(t)\,dt$$
   along one period of the oscillator motion, in the period-one
   normalization discussed in the remark of [[pthm-cm14-action-angle]].
5. **(radian convention)** with $\theta^{\mathrm{rad}}:=2\pi\theta$ and
   $I^{\mathrm{rad}}:=I/(2\pi)$ the chart becomes
   $x=\sqrt{2I^{\mathrm{rad}}/(m\omega)}\,\sin\theta^{\mathrm{rad}}$,
   $p=\sqrt{2I^{\mathrm{rad}}m\omega}\,\cos\theta^{\mathrm{rad}}$ with
   $H=\omega I^{\mathrm{rad}}$ and
   $\dot\theta^{\mathrm{rad}}=\omega$, which is the radian chart of the
   sources ([[cor-cm-action-angle-radian-scaling]]).

All data $m,k$ are declared model parameters; the example asserts no
measured value and no claim about a real oscillator.

## Facts & Assumptions

**Given:** The harmonic model data $m>0$, $k>0$, the ambient potential presentation and immersion $X$ just declared, the constants $\omega,T$, the Hamiltonian $H$, the open set $V$ and the function $S$ displayed above.

[L1] Model and Hamiltonian ([[post-cm04-harmonic-model]], [[pthm-cm04-harmonic-motion]], [[pthm-cm12-mechanical-hyperregularity]], [[def-cm12-hamiltonian]], [[def-cm02-newtonian-flow]], [[def-cm07-generalized-coordinates-and-forces]]): scalar motions of the model are the solutions of $mx''=-kx$, and are exactly the curves $x(t)=A\cos(\omega(t-t_{0}))+B\sin(\omega(t-t_{0}))$ with reals $A,B$; the inverse Legendre branch is $(x,p)\mapsto p/m$, equivalently $p=mx'$, and the branch Hamiltonian is the displayed $H$. The least positive period of $x$ is $T$ when $(A,B)\neq(0,0)$, by clause 3 of [[pthm-cm04-harmonic-motion]].

[L2] Calculus ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-directional-and-partial-derivatives]], [[def-jacobian-matrix-and-gradient]], [[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[thm-double-angle-and-power-reduction-identities]], [[thm-sine-cosine-zero-sets-and-fundamental-period]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[cor-vector-valued-ftc-and-lipschitz-bound]], [[def-darboux-integral]], [[def-interval]]): the derivatives $(\sin)'=\cos$, $(\cos)'=-\sin$, $(\cot)'=-\csc^{2}$, $(\csc)'=-\csc\cot$ hold wherever the functions are defined; the chain rule and the algebra of derivatives apply; the power-reduction identity $\cos^{2}u=(1+\cos 2u)/2$ and the Pythagorean identity $\sin^{2}u+\cos^{2}u=1$ hold; $\sin(k\pi)=0$ for integers $k$; and a continuous $u:[a,b]\to\mathbb R$ with a primitive $W$ satisfies $\int_{a}^{b}u=W(b)-W(a)$.

[L3] Complete-integral definitions ([[def-cm14-hamilton-jacobi-equation]], [[def-cm14-complete-integral]]): a $C^{3}$ solution $S$ of $S_{t}+H(x,S_{x})=0$ with $S_{x\alpha}\neq0$ at a point is a complete integral there.

[L4] Characteristics theorem ([[pthm-cm14-hamilton-jacobi-characteristics]]): a complete integral $S$ produces curves with $p=S_{x}$ solving the Hamilton equations and with $\beta=S_{\alpha}$ constant.

[L5] Canonical chart and field ([[def-cm13-canonical-form]], [[def-cm13-hamiltonian-field]] clause (a), [[def-action-and-angle-coordinates]], [[thm-euclidean-inverse-function-theorem]]): a smooth coordinate map with nonzero Jacobian has smooth local inverses. In coordinates $(\theta,I)$ with two-form $d\theta\wedge dI$, the defining equation $\iota_{X_H}\omega_{\mathrm{form}}=dH$ reads $\dot\theta=H_I$, $\dot I=-H_\theta$. The radian rescaling preserves the two-form and transforms the Hamiltonian as $\tilde h(I^{\mathrm{rad}})=h(2\pi I^{\mathrm{rad}})$.

## Verification

**Proof technique:** direct; compute the partial derivatives, verify the Hamilton-Jacobi equation and the characteristic equations by substitution, check the Poisson bracket of the explicit chart, and evaluate the period integral.

1.1 Derivatives of $S$: with $c:=\cos(\omega t)$ and $s:=\sin(\omega t)$, [L2] gives $S_{x}=m\omega\bigl(x\cot(\omega t)-\alpha\csc(\omega t)\bigr)$ and $S_{t}=\frac{m\omega^{2}}{2}\Bigl[-(x^{2}+\alpha^{2})\csc^{2}(\omega t) +2x\alpha\,\csc(\omega t)\cot(\omega t)\Bigr].$ Substituting $p=S_{x}$ into $H$, $S_{t}+H(x,S_{x})=\frac{m\omega^{2}}{2}\Bigl[-(x^{2}+\alpha^{2})\csc^{2} +2x\alpha\csc\cot+\bigl(x\cot-\alpha\csc\bigr)^{2}+x^{2}\Bigr] =\frac{m\omega^{2}}{2}x^{2}\bigl(-\csc^{2}+\cot^{2}+1\bigr)=0,$ because $\cot^{2}-\csc^{2}=-1$; and $S_{x\alpha}=-m\omega\,\csc(\omega t)\neq0$ on $V$. Hence $S$ is a $C^{\infty}$ complete integral of the model's Hamilton-Jacobi equation at every point of $V$, which is claim 1. Dimensions: $[m\omega x^{2}]=\mu\tau^{-1}\ell^{2}=[S]$. [L2, L3, given, algebra]

2.1 The characteristic motion: put $x(t):=\alpha_{0}\cos(\omega t)-\beta(m\omega)^{-1}\sin(\omega t)$ and $p(t):=S_{x}(t,x(t),\alpha_{0})$. By [L2], $x'(t)=-\alpha_{0}\omega\sin(\omega t)-\beta m^{-1}\cos(\omega t)$ and $\frac{p(t)}{m}=\omega\Bigl[x(t)\frac{c}{s}-\alpha_{0}\frac{1}{s}\Bigr] =\omega\Bigl[\bigl(\alpha_{0}c-\frac{\beta}{m\omega}s\bigr)\frac{c}{s} -\frac{\alpha_{0}}{s}\Bigr] =-\omega\alpha_{0}s-\frac{\beta}{m}c=x'(t),$ using $\alpha_{0}(c^{2}-1)/s=-\alpha_{0}s$, so $p=mx'$ and $x'=H_{p}=p/m$, and $p'(t)=-m\omega^{2}\alpha_{0}c+\beta\omega s=-m\omega^{2}x(t)=-H_{x}$. For the constants, differentiating the displayed $S$ in $\alpha$ gives $S_{\alpha}(t,x,\alpha)=m\omega\bigl(\alpha\cot(\omega t)-x\csc(\omega t)\bigr)$, so $S_{\alpha}(t,x(t),\alpha_{0}) =m\omega\Bigl[\alpha_{0}\cot(\omega t)-\Bigl(\alpha_{0}c -\frac{\beta}{m\omega}s\Bigr)\csc(\omega t)\Bigr] =m\omega\alpha_{0}\bigl(\cot-c\,\csc\bigr)+\beta=\beta,$ since $\cot u-\cos u\,\csc u=0$. Hence the characteristic curve lies on the level set $S_{\alpha}=\beta$, it is a motion of the model with $p=mx'$ by [L1], and $\beta=S_{\alpha}$ is constant along it, which is claim 2. [L1, L2, L4, step 1.1, algebra]

3.1 The canonical chart: write $x=\sqrt{I/(\pi m\omega)}\,\sin(2\pi\theta)$ and $p=\sqrt{Im\omega/\pi}\,\cos(2\pi\theta)$; by [L2], $x_{\theta}p_{I}-x_{I}p_{\theta} =\cos^{2}(2\pi\theta)+\sin^{2}(2\pi\theta)=1,$ the computation being: $x_{\theta}=2\pi\sqrt{I/(\pi m\omega)}\cos$, $p_{I}=\tfrac12\sqrt{m\omega/\pi}\,I^{-1/2}\cos$ give $x_{\theta}p_{I}=\cos^{2}$; and $x_{I}=\tfrac12(\pi m\omega I)^{-1/2}\sin$, $p_{\theta}=-2\pi\sqrt{Im\omega/\pi}\sin$ give $x_{I}p_{\theta}=-\sin^{2}$. The energy fixes $I=2\pi H/\omega>0$, and the normalized pair $(x\sqrt{\pi m\omega/I},p\sqrt{\pi/(Im\omega)})$ fixes $\theta$ modulo one, so the parametrization is bijective onto the punctured phase plane; the nonzero Jacobian makes its inverse smooth in local angle lifts. Hence $\{x,p\}=1$ in the chart, i.e. the coordinates are canonical for the presentation's bracket and $\omega_{\mathrm{form}}=d\theta\wedge dI$. Substituting into $H$, $H=\frac{p^{2}}{2m}+\frac{m\omega^{2}}{2}x^{2} =\frac{I\omega}{2\pi}\bigl(\cos^{2}+\sin^{2}\bigr)=\frac{I\omega}{2\pi} =\frac{I}{T}=h(I).$ Writing $X_H=a\partial_\theta+b\partial_I$, contraction gives $a\,dI-b\,d\theta=dH=T^{-1}dI$, so $a=1/T$, $b=0$ by [L5]. Hence $\dot I=0$ and $\dot\theta=1/T$ along the scalar harmonic motions, which is claim 3. [L2, L5, step 2.1, algebra]

4.1 The period integral: parametrize the motion of step 3.1 with $I>0$, $\theta_{0}=0$ by $x(t)=A\sin(\omega t)$, $A:=\sqrt{I/(\pi m\omega)}$, so that $p(t)=mx'(t)=mA\omega\cos(\omega t)$ and the least positive period is $T$ by [L1]. Then by [L2], $\oint p\,dx=\int_{0}^{T}p(t)x'(t)\,dt=mA^{2}\omega^{2}\int_{0}^{T} \cos^{2}(\omega t)\,dt=mA^{2}\omega^{2}\cdot\frac{T}{2} =mA^{2}\omega\pi=I,$ because $\cos^{2}(\omega t)=(1+\cos 2\omega t)/2$, the integral of $\cos(2\omega t)$ over $[0,T]$ vanishes being an increment of $\sin(2\omega t)/(2\omega)$ at $\sin(2\pi k)=0$, and $mA^{2}\omega\pi=m\frac{I}{\pi m\omega}\omega\pi=I$. This is claim 4. [L2, step 3.1, algebra]

4.2 Radian rescaling: the map $[u]\mapsto[2\pi u]$ from $\mathbb R/\mathbb Z$ to $\mathbb R/(2\pi\mathbb Z)$ is a smooth bijection with smooth inverse $[v]\mapsto[v/(2\pi)]$, as checked in local real lifts. Thus $\theta^{\mathrm{rad}}=2\pi\theta$ and $I^{\mathrm{rad}}=I/(2\pi)$ satisfy $d\theta^{\mathrm{rad}}\wedge dI^{\mathrm{rad}}=(2\pi)d\theta\wedge dI/(2\pi)=d\theta\wedge dI$ and keep the two-form and give $H=h(2\pi I^{\mathrm{rad}})=2\pi I^{\mathrm{rad}}/T=\omega I^{\mathrm{rad}}$ and $\dot\theta^{\mathrm{rad}}=2\pi\dot\theta=2\pi/T=\omega$; inverting the rescaling in the chart of step 3.1 gives $x=\sqrt{2I^{\mathrm{rad}}/(m\omega)}\sin\theta^{\mathrm{rad}}$ and $p=\sqrt{2I^{\mathrm{rad}}m\omega}\cos\theta^{\mathrm{rad}}$, the source's chart. This is claim 5. [L5, step 3.1, algebra]

5.1 Claims 1-5 are verified by steps 1.1, 2.1, 3.1, 4.1 and 4.2 respectively; the example is verified. [step 1.1, step 2.1, step 3.1, step 4.1, step 4.2] ∎

## Remarks

- **Where the construction breaks.** The family $S$ is defined only for $\sin(\omega t)\neq0$, and the mixed derivative $S_{x\alpha}=-m\omega\csc(\omega t)$ is unbounded as $\omega t\to\pi\mathbb Z$; the complete integral is a local object between the conjugate times of the oscillator and is not continued across them. The companion example computes the focusing of the characteristic family at those times.

- **No empirical content.** The oscillator data are declared model parameters, and the displayed identities are statements about the model; no measured frequency, amplitude or period is asserted.

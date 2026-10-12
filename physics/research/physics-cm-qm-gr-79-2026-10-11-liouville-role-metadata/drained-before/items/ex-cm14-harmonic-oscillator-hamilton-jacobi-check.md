---
id: ex-cm14-harmonic-oscillator-hamilton-jacobi-check
kind: example
title: "The harmonic model worked through: an explicit complete integral, its characteristic motion, and the action-angle chart with $I=\\oint p\\,dx$ and period-one frequency $1/T$"
status: draft
origin: pipeline
domain: physics
dependency_level: 27
deps: [post-cm04-harmonic-model, pthm-cm04-harmonic-motion, def-cm04-one-dimensional-models-and-equilibria, def-cm12-hamiltonian, pthm-cm12-mechanical-hyperregularity, def-cm14-hamilton-jacobi-equation, def-cm14-complete-integral, pthm-cm14-hamilton-jacobi-characteristics, pthm-cm14-action-angle, cor-cm-action-angle-radian-scaling, def-cm02-newtonian-flow, def-cm12-cotangent-momentum, def-cm01-units, def-cm13-canonical-form, def-action-and-angle-coordinates, def-ck-euclidean-maps-and-diffeomorphisms, def-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, thm-sine-and-cosine-derivatives, thm-chain-rule, thm-algebra-of-derivatives, thm-double-angle-and-power-reduction-identities, thm-sine-cosine-zero-sets-and-fundamental-period, cor-vector-valued-ftc-and-lipschitz-bound, cor-trigonometric-parity-and-pythagorean-identity, def-darboux-integral, def-interval]
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
physical_scope: "A worked instance of the Hamilton-Jacobi and action-angle items inside the declared harmonic model of the framework's force branch: for one label of mass $m>0$ and spring constant $k>0$, the explicit family $S$ is a complete integral of the model's Hamilton-Jacobi equation wherever $\\sin(\\omega t)\\neq0$; its characteristic curves are the harmonic motions with $\\beta=S_\\alpha$ constant; and the explicit chart $(\\theta,I)$ is canonical with $H=I/T$, $\\dot I=0$, $\\dot\\theta=1/T$ and $I=\\oint p\\,dx$, in the period-one convention, with the radian rescaling recovering the sources' chart. The example asserts no measured value, no claim that a real oscillator realizes the model, and no global extension of $S$ across the conjugate times $\\omega t\\in\\pi\\mathbb Z$."
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
potential $U(x)=\tfrac12kx^{2}$ and no residual force; write

$$\omega:=\sqrt{\frac{k}{m}}>0,\qquad T:=\frac{2\pi}{\omega},$$

so that $U(x)=\tfrac12m\omega^{2}x^{2}$ and the branch Hamiltonian in the
Cartesian chart is

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
$$(\theta,I)\longmapsto(x,p)=\Bigl(\sqrt{\frac{I}{\pi m\omega}}\,\sin(2\pi\theta),\ \sqrt{\frac{Im\omega}{\pi}}\,\cos(2\pi\theta)\Bigr)$$is a $C^{\infty}$ chart of the region $I>0$ with $\{x,p\}=1$ for the
   presentation's bracket, i.e. a canonical chart of
   [[def-cm13-canonical-form]] with
   $\omega_{\mathrm{form}}=d\theta\wedge dI$ in the period-one convention
   of [[def-action-and-angle-coordinates]], and in it
   $$H=h(I)=\frac{I}{T},$$
   so that every motion satisfies $\dot I=0$,
   $\dot\theta=1/T$ ([[pthm-cm14-action-angle]] clause 4).
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

**Given:** The harmonic model data $m>0$, $k>0$, the constants $\omega,T$,
the Hamiltonian $H$, the open set $V$ and the function $S$ displayed above.

[L1] Model and Hamiltonian ([[post-cm04-harmonic-model]],
[[pthm-cm04-harmonic-motion]], [[pthm-cm12-mechanical-hyperregularity]],
[[def-cm12-hamiltonian]], [[def-cm02-newtonian-flow]]): motions of the
model are the solutions of $mx''=-kx$, and are exactly the curves
$x(t)=A\cos(\omega(t-t_{0}))+B\sin(\omega(t-t_{0}))$ with reals $A,B$; the
map $x\mapsto\mathsf Mx'=mx'$ is the inverse Legendre branch, and the
branch Hamiltonian is the displayed $H$. The least positive period of
$x$ is $T$ when $(A,B)\neq(0,0)$, by clause 3 of
[[pthm-cm04-harmonic-motion]].

[L2] Calculus ([[def-ck-euclidean-maps-and-diffeomorphisms]],
[[def-directional-and-partial-derivatives]],
[[def-jacobian-matrix-and-gradient]], [[thm-sine-and-cosine-derivatives]],
[[thm-chain-rule]], [[thm-algebra-of-derivatives]],
[[thm-double-angle-and-power-reduction-identities]],
[[thm-sine-cosine-zero-sets-and-fundamental-period]],
[[cor-trigonometric-parity-and-pythagorean-identity]],
[[cor-vector-valued-ftc-and-lipschitz-bound]], [[def-darboux-integral]],
[[def-interval]]): the derivatives
$(\sin)'=\cos$, $(\cos)'=-\sin$, $(\cot)'=-\csc^{2}$,
$(\csc)'=-\csc\cot$ hold wherever the functions are defined; the chain
rule and the algebra of derivatives apply; the power-reduction identity
$\cos^{2}u=(1+\cos 2u)/2$ and the Pythagorean identity
$\sin^{2}u+\cos^{2}u=1$ hold; $\sin(k\pi)=0$ for integers $k$; and a
continuous $u:[a,b]\to\mathbb R$ with a primitive $W$ satisfies
$\int_{a}^{b}u=W(b)-W(a)$.

[L3] Complete-integral definitions ([[def-cm14-hamilton-jacobi-equation]],
[[def-cm14-complete-integral]]): a $C^{3}$ solution $S$ of
$S_{t}+H(x,S_{x})=0$ with $S_{x\alpha}\neq0$ at a point is a complete
integral there.

[L4] Characteristics theorem
([[pthm-cm14-hamilton-jacobi-characteristics]]): a complete integral
$S$ produces curves with $p=S_{x}$ solving the Hamilton equations and
with $\beta=S_{\alpha}$ constant.

[L5] Action-angle theorem ([[pthm-cm14-action-angle]] clauses 1, 2, 4 and
5, [[def-cm13-canonical-form]], [[def-action-and-angle-coordinates]],
[[cor-cm-action-angle-radian-scaling]]): in a canonical chart with
period-one angles, $H=h(I)$ gives $\dot I=0$,
$\dot\theta=\partial h/\partial I$; the radian rescaling preserves the
two-form and transforms the Hamiltonian as
$\tilde h(I^{\mathrm{rad}})=h(2\pi I^{\mathrm{rad}})$.

## Verification

**Proof technique:** direct; compute the partial derivatives, verify the
Hamilton-Jacobi equation and the characteristic equations by
substitution, check the Poisson bracket of the explicit chart, and
evaluate the period integral.

1.1 Derivatives of $S$: with $c:=\cos(\omega t)$ and $s:=\sin(\omega t)$, [L2] gives $S_{x}=m\omega\bigl(x\cot(\omega t)-\alpha\csc(\omega t)\bigr)$ and $S_{t}=\frac{m\omega^{2}}{2}\Bigl[-(x^{2}+\alpha^{2})\csc^{2}(\omega t) +2x\alpha\,\csc(\omega t)\cot(\omega t)\Bigr].$ Substituting $p=S_{x}$ into $H$, $S_{t}+H(x,S_{x})=\frac{m\omega^{2}}{2}\Bigl[-(x^{2}+\alpha^{2})\csc^{2} +2x\alpha\csc\cot+\bigl(x\cot-\alpha\csc\bigr)^{2}+x^{2}\Bigr] =\frac{m\omega^{2}}{2}x^{2}\bigl(-\csc^{2}+\cot^{2}+1\bigr)=0,$ because $\cot^{2}-\csc^{2}=-1$; and $S_{x\alpha}=-m\omega\,\csc(\omega t)\neq0$ on $V$. Hence $S$ is a $C^{\infty}$ complete integral of the model's Hamilton-Jacobi equation at every point of $V$, which is claim 1. Dimensions: $[m\omega x^{2}]=\mu\tau^{-1}\ell^{2}=[S]$. [L2, L3, given, algebra]

2.1 The characteristic motion: put $x(t):=\alpha_{0}\cos(\omega t)-\beta(m\omega)^{-1}\sin(\omega t)$ and $p(t):=S_{x}(t,x(t),\alpha_{0})$. By [L2], $x'(t)=-\alpha_{0}\omega\sin(\omega t)-\beta m^{-1}\cos(\omega t)$ and $\frac{p(t)}{m}=\omega\Bigl[x(t)\frac{c}{s}-\alpha_{0}\frac{1}{s}\Bigr] =\omega\Bigl[\bigl(\alpha_{0}c-\frac{\beta}{m\omega}s\bigr)\frac{c}{s} -\frac{\alpha_{0}}{s}\Bigr] =-\omega\alpha_{0}s-\frac{\beta}{m}c=x'(t),$ using $\alpha_{0}(c^{2}-1)/s=-\alpha_{0}s$, so $p=mx'=H_{p}$, and $p'(t)=-m\omega^{2}\alpha_{0}c+\beta\omega s=-m\omega^{2}x(t)=-H_{x}$. For the constants, differentiating the displayed $S$ in $\alpha$ gives $S_{\alpha}(t,x,\alpha)=m\omega\bigl(\alpha\cot(\omega t)-x\csc(\omega t)\bigr)$, so $S_{\alpha}(t,x(t),\alpha_{0}) =m\omega\Bigl[\alpha_{0}\cot(\omega t)-\Bigl(\alpha_{0}c -\frac{\beta}{m\omega}s\Bigr)\csc(\omega t)\Bigr] =m\omega\alpha_{0}\bigl(\cot-c\,\csc\bigr)+\beta=\beta,$ since $\cot u-\cos u\,\csc u=0$. Hence the characteristic curve lies on the level set $S_{\alpha}=\beta$, it is a motion of the model with $p=mx'$ by [L1], and $\beta=S_{\alpha}$ is constant along it, which is claim 2. [L1, L2, L4, step 1.1, algebra]

3.1 The canonical chart: write $x=\sqrt{I/(\pi m\omega)}\,\sin(2\pi\theta)$ and $p=\sqrt{Im\omega/\pi}\,\cos(2\pi\theta)$; by [L2], $x_{\theta}p_{I}-x_{I}p_{\theta} =\cos^{2}(2\pi\theta)+\sin^{2}(2\pi\theta)=1,$ the computation being: $x_{\theta}=2\pi\sqrt{I/(\pi m\omega)}\cos$, $p_{I}=\tfrac12\sqrt{m\omega/\pi}\,I^{-1/2}\cos$ give $x_{\theta}p_{I}=\cos^{2}$; and $x_{I}=\tfrac12(\pi m\omega I)^{-1/2}\sin$, $p_{\theta}=-2\pi\sqrt{Im\omega/\pi}\sin$ give $x_{I}p_{\theta}=-\sin^{2}$. Hence $\{x,p\}=1$ in the chart, i.e. the coordinates are canonical for the presentation's bracket and $\omega_{\mathrm{form}}=d\theta\wedge dI$. Substituting into $H$, $H=\frac{p^{2}}{2m}+\frac{m\omega^{2}}{2}x^{2} =\frac{I\omega}{2\pi}\bigl(\cos^{2}+\sin^{2}\bigr)=\frac{I\omega}{2\pi} =\frac{I}{T}=h(I).$ By [L5], $\dot I=0$ and $\dot\theta=h'(I)=1/T$ along the motions, which is claim 3. [L2, L5, step 2.1, algebra]

4.1 The period integral: parametrize the motion of step 3.1 with $I>0$, $\theta_{0}=0$ by $x(t)=A\sin(\omega t)$, $A:=\sqrt{I/(\pi m\omega)}$, so that $p(t)=mx'(t)=mA\omega\cos(\omega t)$ and the least positive period is $T$ by [L1]. Then by [L2], $\oint p\,dx=\int_{0}^{T}p(t)x'(t)\,dt=mA^{2}\omega^{2}\int_{0}^{T} \cos^{2}(\omega t)\,dt=mA^{2}\omega^{2}\cdot\frac{T}{2} =mA^{2}\omega\pi=I,$ because $\cos^{2}(\omega t)=(1+\cos 2\omega t)/2$, the integral of $\cos(2\omega t)$ over $[0,T]$ vanishes being an increment of $\sin(2\omega t)/(2\omega)$ at $\sin(2\pi k)=0$, and $mA^{2}\omega\pi=m\frac{I}{\pi m\omega}\omega\pi=I$. This is claim 4. [L2, step 3.1, algebra]

4.2 Radian rescaling: by [L5], $\theta^{\mathrm{rad}}=2\pi\theta$ and $I^{\mathrm{rad}}=I/(2\pi)$ keep the two-form and give $H=h(2\pi I^{\mathrm{rad}})=2\pi I^{\mathrm{rad}}/T=\omega I^{\mathrm{rad}}$ and $\dot\theta^{\mathrm{rad}}=2\pi\dot\theta=2\pi/T=\omega$; inverting the rescaling in the chart of step 3.1 gives $x=\sqrt{2I^{\mathrm{rad}}/(m\omega)}\sin\theta^{\mathrm{rad}}$ and $p=\sqrt{2I^{\mathrm{rad}}m\omega}\cos\theta^{\mathrm{rad}}$, the source's chart. This is claim 5. [L5, step 3.1, algebra]

5.1 Claims 1-5 are verified by steps 1.1, 2.1, 3.1, 4.1 and 4.2 respectively; the example is verified. [step 1.1, step 2.1, step 3.1, step 4.1, step 4.2] ∎

## Remarks

- **Where the construction breaks.** The family $S$ is defined only for
  $\sin(\omega t)\neq0$, and the mixed derivative
  $S_{x\alpha}=-m\omega\csc(\omega t)$ is unbounded as
  $\omega t\to\pi\mathbb Z$; the complete integral is a local object
  between the conjugate times of the oscillator and is not continued
  across them. The companion example computes the focusing of the
  characteristic family at those times.

- **No empirical content.** The oscillator data are declared model
  parameters, and the displayed identities are statements about the
  model; no measured frequency, amplitude or period is asserted.

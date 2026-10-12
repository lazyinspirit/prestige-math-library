---
id: ex-cm15-hard-sphere-reflection-check
kind: example
title: "Elastic reflection from a fixed sphere: the branch
  $b=a\\cos(\\theta/2)$, the uniform density $a^2/4$ and the total $\\pi a^2$ of
  a contact model"
status: draft
origin: session
domain: physics
dependency_level: 18
deps:
  [
    def-cm-scattering-data,
    post-cm15-impulse,
    def-cm15-asymptotic-data,
    def-cm15-cross-section,
    pthm-cm15-central-scattering,
    thm-cm-differential-cross-section-density,
    def-cm01-units,
    post-cm01-frames,
    def-interval,
    def-euclidean-inner-product,
    def-cross-product-in-r3,
    def-principal-inverse-sine-and-cosine,
    thm-sine-cosine-signs-monotonicity-and-ranges,
    cor-trigonometric-parity-and-pythagorean-identity,
    thm-ftc-second-part,
    thm-chain-rule,
    thm-algebra-of-derivatives,
    def-countable-choice
  ]
dependency_roles:
  def-cm-scattering-data: mathematical-premise
  post-cm15-impulse: formulation-prerequisite
  def-cm15-asymptotic-data: formulation-prerequisite
  def-cm15-cross-section: formulation-prerequisite
  pthm-cm15-central-scattering: formulation-prerequisite
  thm-cm-differential-cross-section-density: mathematical-premise
  def-cm01-units: formulation-prerequisite
  post-cm01-frames: formulation-prerequisite
  def-interval: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-principal-inverse-sine-and-cosine: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Assuming countable choice for the locally defined incident and
  solid-angle measures, a separately adopted fixed-wall contact model of a
  reduced label of mass $\\mu$ reflecting elastically from an impenetrable
  sphere of radius $a$: the example-specific rule reverses the normal velocity
  component and preserves the tangential component, so speed and angular
  momentum are conserved across contact. The example computes the branch
  contribution $b=a\\cos(\\theta/2)$, the constant density $a^2/4$ and the total
  $\\pi a^2$. This fixed-wall rule is outside both the $C^2$ finite-range
  hypothesis of the central-scattering theorem and the finite-mass two-label
  restitution postulate; the $e=1$ comparison concerns only the normal-velocity
  reversal. The finite total does not contradict the Coulomb forward divergence.
  The data are declared model data; the example reports no observation or
  measured value."
sources:
  references:
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin),
        §6.4, Eqs. (352)-(357): the impenetrable-sphere interaction, b = a
        cos(theta/2), the constant differential cross-section a^2/4 and the
        total cross-section pi a^2"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node51.html"
    - title: "Jacob Moore and Contributors, Mechanics Map (Pennsylvania State
        University, 2nd ed.), Engineering LibreTexts, §11.4 'Surface Collisions
        and the Coefficient of Restitution': the normal/tangential split of a
        surface impact with the tangential velocity unchanged and the normal
        velocity ratio fixed by the coefficient of restitution"
      url: "https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_M\
        ap_(Moore_2nd_Edition)/11%3A_Impulse_and_Momentum_in_Particles/11.04%3A\
        _Surface_Collisions_and_the_Coefficient_of_Restitution"
---

## Example

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the mathematical incident and solid-angle measures below.

**Declared model.** Fix a length $a>0$ (the sphere radius) and a reduced mass
$\mu>0$. In a fixed inertial chart ([[post-cm01-frames]]), let the sphere
$S_a:=\{x\in\mathbb R^3:\lVert x\rVert_2=a\}$ be immovable and centred at the
origin. For $b\in(0,a)$ the label position is a continuous curve
$\gamma_b:\mathbb R\to\mathbb R^3$, affine on each side of one contact time
$t_*$, with one-sided velocity limits and
$P:=\gamma_b(t_*)\in S_a$. Its incoming affine line has speed
$v_\infty>0$, direction $\hat u$ and perpendicular distance $b$ from the
origin. Separately adopt, for this fixed-wall model, the **elastic reflection
rule** at the contact point with outward unit normal $n:=P/a$:
$$v^+=v^--2\langle v^-,n\rangle n,$$
that is, the normal component reverses and the tangential component is
unchanged. Its normal-velocity reversal is analogous to the $e=1$ case of
[[post-cm15-impulse]] clause (ii), but it is not a formal member of that law:
the postulate assumes a finite-mass two-label collinear contact, whereas this
example prescribes an immovable wall and a vector reflection rule. The inward
unit normal $-n$ makes the angle
$$\alpha:=\arcsin\frac{b}{a}\in\Bigl(0,\frac{\pi}{2}\Bigr)$$
with $\hat u$; equivalently $b=a\sin\alpha$ is the perpendicular distance of
the incoming line from the centre.

**Incident preparation and contact cross-section.** Choose orthonormal
vectors $e_1,e_2$ perpendicular to the common incoming direction $\hat u$.
For an incident offset $b e_\varphi$, where
$e_\varphi=\cos\varphi\,e_1+\sin\varphi\,e_2$, the first contact is
$P=b e_\varphi-\sqrt{a^2-b^2}\,\hat u$. The transverse component of the
reflected direction is a positive multiple of $e_\varphi$, so its outgoing
azimuth is $\varphi$. Let $D=(0,a)\times(0,2\pi)$ and
$Y=(0,\pi)\times(0,2\pi)$. Adopt uniform incident area measure
$\nu(B)=\int_B b\,d\lambda_2(b,\varphi)$ on Borel subsets of $D$ and
solid-angle measure $\Omega(B)=\int_B\sin\theta\,d\lambda_2(\theta,\varphi)$
on $Y$, using the abstract mathematical measures of
[[def-cm-scattering-data]]. Define the **contact cross-section measure**
by $\sigma(B):=\nu(T^{-1}(B))$, where
$T(b,\varphi)=(\theta(b),\varphi)$ is the outgoing direction map.
For an angular band $A\subseteq(0,\pi)$ abbreviate
$\sigma(A):=\sigma(A\times(0,2\pi))$.
A differential contact cross-section is a density $f$ satisfying
$\sigma(B)=\int_B f\,d\Omega$ for every Borel $B\subseteq Y$.
This is a local definition for the fixed-wall contact model, independent
of the smooth central-model class of [[def-cm15-asymptotic-data]].
The centre, grazing circle and azimuth seam have zero incident area and
supply no atoms; free incoming lines with $b>a$ do not hit the sphere and
are excluded from this contact cross-section.

**Assertion to check.** The motion is a single reflection with deflection
$$\theta(b)=\pi-2\alpha=\pi-2\arcsin\frac{b}{a}\in(0,\pi),$$
so the branch is $b(\theta)=a\cos(\theta/2)$ on $0<\theta<\pi$, the
differential cross-section is the constant $a^2/4$, and the truncated total
cross-section over the whole branch is $\pi a^2$.

## Facts & Assumptions

**Given:** Countable choice for the mathematical measures; the declared sphere radius $a>0$, mass $\mu>0$, speed $v_\infty>0$, impact parameter $b\in(0,a)$, incoming direction $\hat u$, contact point $P=\gamma_b(t_*)$ with outward normal $n=P/a$, the piecewise-affine trajectory of the Example and its reflection rule, and the locally defined incident measure $\nu$, solid-angle measure $\Omega$, direction map $T$ and contact cross-section $\sigma$.

[L1] The example's separately adopted reflection rule and Moore's normal/tangential split: the reflected velocity is $v^+=v^--2\langle v^-,n\rangle n$, so $|v^+|=|v^-|$ and the tangential component $\langle v^-,t\rangle$ is unchanged for $t\perp n$; the angular momentum about the centre is unchanged across contact because the impulse $-2\mu\langle v^-,n\rangle n$ passes through the origin: $\mu P\times(v^+-v^-)=\mu a\,n\times(-2\langle v^-,n\rangle n)=0$ ([[def-cross-product-in-r3]]).

[L2] Plane geometry ([[def-euclidean-inner-product]]): at the first contact of the incoming line with the sphere, $n\cdot\hat u<0$ and the acute incidence angle is $\alpha:=\arccos(-n\cdot\hat u)\in(0,\pi/2)$. Its impact parameter satisfies $b=|P\times\hat u|=a\sin\alpha$, so $\alpha=\arcsin(b/a)$. The reflection law gives $\langle v^-,v^+\rangle/|v^-|^2=1-2(n\cdot\hat u)^2=1-2\cos^2\alpha=\cos(\pi-2\alpha)$, hence the deflection angle is $\pi-2\alpha\in(0,\pi)$.

[L3] Trigonometry ([[def-principal-inverse-sine-and-cosine]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]]): $\arcsin$ maps $[0,1]$ increasingly onto $[0,\pi/2]$; $\sin^2+\cos^2=1$; $\cos(\theta/2)>0$ and $\sin(\theta/2)>0$ for $0<\theta<\pi$; $\sin\theta=2\sin(\theta/2)\cos(\theta/2)$; derivatives of $\cos$ and of compositions are the usual ones.

[L4] Abstract branch pushforward ([[def-cm-scattering-data]],
[[thm-cm-differential-cross-section-density]]): for the mathematical
measures $\nu=b\,d\lambda_2$ and $\Omega=\sin\theta\,d\lambda_2$, any
$C^1$ bijective branch with nonzero derivative and inverse $b(\theta)$
satisfies
$T_*\nu(B)=\int_B b(\theta)|b'(\theta)|\,d\lambda_2$ on every Borel set.
The supplier proves this by one-dimensional substitution on interior
rectangles and Borel measure uniqueness; its branch and measures are
abstract data independent of any smooth potential or physical trajectory.
Thus it applies to the locally defined contact pushforward after the
branch hypotheses have been verified. Truncated-band integration uses
[[thm-ftc-second-part]] and [[def-interval]].

## Verification

**Proof technique:** direct.

1.1 Reflection and conservation: by [L1], $|v^+|=|v^-|=v_\infty$ and the angular momentum about the centre is conserved across the contact; hence the two free pieces of the motion are straight lines and the motion has a constant angular momentum $j$ with $|j|=\mu b v_\infty$. This verifies directly for the incoming line the same geometric identity $b=J/(\mu v_\infty)$ used in [[def-cm15-asymptotic-data]] clause (ii); the contact trajectory itself is outside that definition's smooth central-model class. [given, L1, algebra]

1.2 Deflection: let $\alpha$ be the acute angle between the inward normal $-n$ at first contact and the incoming direction $\hat u$, so that $\sin\alpha=b/a$ by [L2]. The reflection turns the velocity by the angle computed in [L2], namely $\pi-2\alpha$; since $b\in(0,a)$ we have $\alpha\in(0,\pi/2)$ and $\theta=\pi-2\alpha\in(0,\pi)$. [given, L1, L2, algebra]

2.1 Branch and inverse: the map $b\mapsto\theta(b)=\pi-2\arcsin(b/a)$ is strictly decreasing on $(0,a)$ by [L3] and its image is $(0,\pi)$; solving $\sin((\pi-\theta)/2)=b/a$ gives $b(\theta)=a\cos(\theta/2)$ on $(0,\pi)$, which is $C^1$ with $b'(\theta)=-\frac{a}{2}\sin(\theta/2)\ne0$. Thus the model realises a single deflection branch with image $(0,\pi)$, and no branch sum is needed for it. [step 1.2, L3, algebra]

3.1 Contact pushforward: step 2.1 verifies the abstract branch hypotheses of [L4], and substituting $n=(b e_\varphi-\sqrt{a^2-b^2}\,\hat u)/a$ into the reflection rule gives $v^+/v_\infty=(2b^2/a^2-1)\hat u+[2b\sqrt{a^2-b^2}/a^2]e_\varphi$. The transverse coefficient is positive for $0<b<a$, verifying that the outgoing azimuth is $\varphi$ and the direction map is $T$. Therefore, for every Borel $B\subseteq Y$, $\sigma(B)=\int_B b(\theta)|b'(\theta)|\,d\lambda_2$. Since $\sin\theta>0$, the locally defined differential contact cross-section is $\frac{\mathrm d\sigma}{\mathrm d\Omega}(\theta)=\frac{b(\theta)|b'(\theta)|}{\sin\theta} =\frac{a\cos(\theta/2)\cdot\frac{a}{2}\sin(\theta/2)}{\sin\theta}$. Using $\sin\theta=2\sin(\theta/2)\cos(\theta/2)$ this equals $\frac{a^2}{4}$ for every $\theta\in(0,\pi)$: the contact pushforward is $(a^2/4)\Omega$, so the outgoing angular distribution of uniformly incident contacts is uniform, and the density is finite, positive and independent of $\theta$. [step 2.1, L3, L4, algebra]

4.1 Truncated total: by [L4] and the fundamental theorem, for the full image interval $$\sigma\bigl((0,\pi)\bigr)=\int_0^{\pi}\frac{a^2}{4}\,2\pi\sin\theta\,\mathrm d\theta=\frac{a^2}{4}\cdot2\pi\cdot\bigl[-\cos\theta\bigr]_0^{\pi} =\frac{a^2}{4}\cdot 4\pi=\pi a^2,$$ and for $0<\theta_1<\theta_2<\pi$ the band value is $\frac{a^2}{4}\cdot2\pi(\cos\theta_1-\cos\theta_2)$, finite; in particular the branch has a finite ideal total $\pi a^2$. [step 3.1, L3, L4, algebra]

5.1 Model boundary: the motion just computed is piecewise linear with a contact rule, not a central-force trajectory of class $C^2$ with a finite-range potential; the quadrature theorem [[pthm-cm15-central-scattering]] does not apply to it, and the finite total $\pi a^2$ is a property of this contact model, not a counterexample to the forward divergence of the ideal Coulomb branch. The declared data are model data: no measurement is reported, and the agreement of the algebraic form with the cited impenetrable-sphere computation is a consistency check of the model, not evidence about nature. [given, L1, L4] ∎

## Remarks

- **Units.** $[a]=[b]=\ell$, $[\mu]=\mathsf M$, $[v_\infty]=\ell\tau^{-1}$, $[\mathrm d\sigma/\mathrm d\Omega]=\ell^2$, $[\sigma]=\ell^2$, and $[j]=\mathsf M\ell^2\tau^{-1}$ with $j=\mu bv_\infty$ ([[def-cm01-units]]).

- **Why the rule is not a potential.** The impenetrable sphere corresponds to no $C^2$ finite-range potential; its force is a contact impulse at $|x|=a$. This example-specific fixed-wall law differs from the finite-mass two-label extension in [[post-cm15-impulse]], so the example illustrates the model boundary rather than an instance of its restitution law or the smooth-potential theorem.

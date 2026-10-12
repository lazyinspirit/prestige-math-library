---
id: ex-cm15-hard-sphere-reflection-check
kind: example
title: "Elastic reflection from a fixed sphere: the branch $b=a\\cos(\\theta/2)$, the uniform density $a^2/4$ and the total $\\pi a^2$ of a contact model"
status: draft
origin: session
domain: physics
dependency_level: 18
deps: [post-cm15-impulse,
       def-cm15-asymptotic-data,
       def-cm15-cross-section,
       pthm-cm15-central-scattering,
       thm-cm-differential-cross-section-density,
       def-cm01-units,
       def-interval,
       def-euclidean-inner-product,
       def-cross-product-in-r3,
       def-principal-inverse-sine-and-cosine,
       thm-sine-cosine-signs-monotonicity-and-ranges,
       cor-trigonometric-parity-and-pythagorean-identity,
       thm-ftc-second-part,
       thm-chain-rule,
       thm-algebra-of-derivatives]
dependency_roles:
  post-cm15-impulse: physical-assumption
  def-cm15-asymptotic-data: formulation-prerequisite
  def-cm15-cross-section: formulation-prerequisite
  pthm-cm15-central-scattering: formulation-prerequisite
  thm-cm-differential-cross-section-density: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-interval: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-principal-inverse-sine-and-cosine: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A declared contact model of a reduced label of mass $\\mu$ reflecting elastically from a fixed impenetrable sphere of radius $a$: the reflection rule reverses the normal velocity component and preserves the tangential component, so that speed and angular momentum are conserved across the contact; the example computes the branch $b=a\\cos(\\theta/2)$, the uniformly constant cross-section density $a^2/4$ and the truncated total $\\pi a^2$, and records that this is a contact (impulse) model outside the $C^2$ finite-range hypothesis of the central-scattering theorem, so its finite total does not contradict the Coulomb forward divergence. The data are declared model data; the example reports no observation and no measured value."
sources:
  references:
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin), §6.4, Eqs. (352)-(357): the impenetrable-sphere interaction, b = a cos(theta/2), the constant differential cross-section a^2/4 and the total cross-section pi a^2"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node51.html"
    - title: "Jacob Moore and Contributors, Mechanics Map (Pennsylvania State University, 2nd ed.), Engineering LibreTexts, §11.4 'Surface Collisions and the Coefficient of Restitution': the normal/tangential split of a surface impact with the tangential velocity unchanged and the normal velocity ratio fixed by the coefficient of restitution"
      url: "https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_Map_(Moore_2nd_Edition)/11%3A_Impulse_and_Momentum_in_Particles/11.04%3A_Surface_Collisions_and_the_Coefficient_of_Restitution"
---

## Example

**Declared model.** Fix a length $a>0$ (the sphere radius) and a reduced mass
$\mu>0$, and consider a label of mass $\mu$ moving in the plane in the
presence of a fixed impenetrable sphere of radius $a$ centred at the origin.
The adopted **elastic reflection rule** at a contact point with outward unit
normal $n$ is
$$v^+=v^--2\langle v^-,n\rangle n,$$
that is, the normal component of the velocity reverses and the tangential
component is unchanged; this is the infinite-mass, $e=1$ member of the
contact family of [[post-cm15-impulse]] clause (ii) (the second label is
frozen and its mass is not treated as finite), and it is the contact rule of
the impenetrable-sphere model. Let the label approach from infinity along a
straight line with speed $v_\infty>0$, impact parameter $b\in(0,a)$ and
velocity direction $\hat u$, and let $P$ be the contact point, so that
$|OP|=a$ and $\langle OP,\hat u\rangle$ makes the angle
$$\alpha:=\arcsin\frac{b}{a}\in\Bigl(0,\frac{\pi}{2}\Bigr)$$
with $\hat u$; equivalently $b=a\sin\alpha$ is the perpendicular distance of
the incoming line from the centre.

**Assertion to check.** The motion is a single reflection with deflection
$$\theta(b)=\pi-2\alpha=\pi-2\arcsin\frac{b}{a}\in(0,\pi),$$
so the branch is $b(\theta)=a\cos(\theta/2)$ on $0<\theta<\pi$, the
differential cross-section is the constant $a^2/4$, and the truncated total
cross-section over the whole branch is $\pi a^2$.

## Facts & Assumptions

**Given:** The declared sphere size $a>0$, mass $\mu>0$, approach speed $v_\infty>0$, impact parameter $b\in(0,a)$, direction $\hat u$, contact point $P$ with outward normal $n=P/a$, the reflection rule of the Example, and the vocabulary of [[def-cm15-asymptotic-data]] and [[def-cm15-cross-section]].

[L1] Reflection and conservation ([[post-cm15-impulse]] clause (ii), Moore's normal/tangential split): the reflected velocity is $v^+=v^--2\langle v^-,n\rangle n$, so $|v^+|=|v^-|$ and the tangential component $\langle v^-,t\rangle$ is unchanged for $t\perp n$; the angular momentum about the centre is unchanged across the contact because the impulse $-2\mu\langle v^-,n\rangle n$ passes through the origin: $\mu P\times(v^+-v^-)=\mu a\,n\times(-2\langle v^-,n\rangle n)=0$ ([[def-cross-product-in-r3]]).

[L2] Plane geometry ([[def-euclidean-inner-product]]): for a line at perpendicular distance $b$ from the origin meeting the circle $|x|=a$ at $P$ with direction $\hat u$, the angle $\alpha$ between the radius $n$ and the line satisfies $\sin\alpha=b/a$, because $b=|P\times\hat u|=a\sin\alpha$; the reflection of a unit vector making angle $\alpha$ with $n$ makes angle $\pi-2\alpha$ with its incident direction, since $\langle v^-,v^+\rangle/|v^-|^2=1-2\cos^2\alpha=-\cos 2\alpha=\cos(\pi-2\alpha)$.

[L3] Trigonometry ([[def-principal-inverse-sine-and-cosine]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]]): $\arcsin$ maps $[0,1]$ increasingly onto $[0,\pi/2]$; $\sin^2+\cos^2=1$; $\cos(\theta/2)>0$ and $\sin(\theta/2)>0$ for $0<\theta<\pi$; $\sin\theta=2\sin(\theta/2)\cos(\theta/2)$; derivatives of $\cos$ and of compositions are the usual ones.

[L4] Branch formula and integration ([[thm-cm-differential-cross-section-density]], [[def-cm15-cross-section]] clauses (i)-(iii), [[thm-ftc-second-part]], [[def-interval]]): on a $C^1$ branch with $\theta'\ne0$ the cross-section density is $b(\theta)|b'(\theta)|/\sin\theta$, and a truncated total over a compact angular interval is an ordinary integral of a continuous integrand.

## Verification

**Proof technique:** direct.

1.1 Reflection and conservation: by [L1], $|v^+|=|v^-|=v_\infty$ and the angular momentum about the centre is conserved across the contact; hence the two free pieces of the motion are straight lines and the motion has a constant angular momentum $j$ with $|j|=\mu b v_\infty$, so the impact parameter of the incoming line is indeed $b=J/(\mu v_\infty)$ in the sense of [[def-cm15-asymptotic-data]] clause (ii). [given, L1, algebra]

1.2 Deflection: let $\alpha$ be the angle between the radius $n$ at the contact point and the incoming direction $\hat u$, so that $\sin\alpha=b/a$ by [L2]. The reflection turns the velocity by the angle computed in [L2], namely $\pi-2\alpha$; since $b\in(0,a)$ we have $\alpha\in(0,\pi/2)$ and $\theta=\pi-2\alpha\in(0,\pi)$. [given, L1, L2, algebra]

2.1 Branch and inverse: the map $b\mapsto\theta(b)=\pi-2\arcsin(b/a)$ is strictly decreasing on $(0,a)$ by [L3] and its image is $(0,\pi)$; solving $\sin((\pi-\theta)/2)=b/a$ gives $b(\theta)=a\cos(\theta/2)$ on $(0,\pi)$, which is $C^1$ with $b'(\theta)=-\frac{a}{2}\sin(\theta/2)\ne0$. Thus the model realises a single deflection branch with image $(0,\pi)$, and no branch sum is needed for it. [step 1.2, L3, algebra]

3.1 Cross-section density: by [L4], $\frac{\mathrm d\sigma}{\mathrm d\Omega}(\theta)=\frac{b(\theta)|b'(\theta)|}{\sin\theta} =\frac{a\cos(\theta/2)\cdot\frac{a}{2}\sin(\theta/2)}{\sin\theta}$. Using $\sin\theta=2\sin(\theta/2)\cos(\theta/2)$ this equals $\frac{a^2}{4}$ for every $\theta\in(0,\pi)$: the outgoing angular distribution is uniform, and the density is finite, positive and independent of $\theta$. [step 2.1, L3, L4, algebra]

4.1 Truncated total: by [L4] and the fundamental theorem, for the full image interval $$\sigma\bigl((0,\pi)\bigr)=\int_0^{\pi}\frac{a^2}{4}\,2\pi\sin\theta\,\mathrm d\theta=\frac{a^2}{4}\cdot2\pi\cdot\bigl[-\cos\theta\bigr]_0^{\pi} =\frac{a^2}{4}\cdot 4\pi=\pi a^2,$$ and for $0<\theta_1<\theta_2<\pi$ the band value is $\frac{a^2}{4}\cdot2\pi(\cos\theta_1-\cos\theta_2)$, finite; in particular the branch has a finite ideal total $\pi a^2$. [step 3.1, L3, L4, algebra]

5.1 Model boundary: the motion just computed is piecewise linear with a contact rule, not a central-force trajectory of class $C^2$ with a finite-range potential; the quadrature theorem [[pthm-cm15-central-scattering]] does not apply to it, and the finite total $\pi a^2$ is a property of this contact model, not a counterexample to the forward divergence of the ideal Coulomb branch. The declared data are model data: no measurement is reported, and the agreement of the algebraic form with the cited impenetrable-sphere computation is a consistency check of the model, not evidence about nature. [given, L1, L4] ∎

## Remarks

- **Units.** $[a]=\ell$, $[\mathrm d\sigma/\mathrm d\Omega]=\ell^2$, $[\sigma]=\ell^2$, and $[j]=\mathsf M\ell^2\tau^{-1}$ with $j=\mu bv_\infty$ ([[def-cm01-units]]).

- **Why the rule is not a potential.** The impenetrable sphere corresponds to no $C^2$ finite-range potential; its force is a contact impulse at $|x|=a$, exactly the kind of model extension adopted in [[post-cm15-impulse]]. The example therefore illustrates the model boundary of the page rather than an instance of its smooth-potential theorem.

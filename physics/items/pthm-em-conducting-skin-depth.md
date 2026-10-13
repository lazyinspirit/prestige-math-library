---
id: pthm-em-conducting-skin-depth
kind: physics-theorem
title: "Conducting-medium propagation: the exact attenuation constant, the skin depth and its good- and poor-conductor regimes"
status: published
origin: pipeline
domain: physics
dependency_level: 19
deps: [def-em-medium-wave-parameters, pthm-em-medium-plane-wave-fields, post-em-material-closure, def-em-fields, def-em-lab-geometry, def-em-si-conventions, thm-every-complex-number-has-a-square-root, thm-of-square-roots, lem-of-square-monotone, prop-of-multiply-inequalities, lem-of-sign-rules, def-complex-numbers-and-arithmetic, def-complex-conjugate-real-imaginary-part-and-modulus, lem-complex-conjugation-and-modulus-laws, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-principal-inverse-tangent, thm-sine-and-cosine-addition-formulas, thm-complex-numbers-form-a-field, thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions, def-tangent-cotangent-secant-cosecant, thm-quarter-turn-values-and-shift-formulas, thm-sine-cosine-signs-monotonicity-and-ranges]
dependency_roles:
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  def-tangent-cotangent-secant-cosecant: mathematical-premise
  def-em-medium-wave-parameters: formulation-prerequisite
  pthm-em-medium-plane-wave-fields: physical-result
  post-em-material-closure: physical-assumption
  def-em-fields: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  thm-every-complex-number-has-a-square-root: mathematical-premise
  thm-of-square-roots: mathematical-premise
  lem-of-square-monotone: mathematical-premise
  prop-of-multiply-inequalities: mathematical-premise
  lem-of-sign-rules: mathematical-premise
  def-complex-numbers-and-arithmetic: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  def-principal-inverse-tangent: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  thm-complex-numbers-form-a-field: mathematical-premise
  thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Exact conditional statement about a monochromatic plane-wave field in a homogeneous isotropic Ohmic medium at rest with constant scalar eps,mu>0 and sigma>0: the exact complex propagation constant and decay, the closed-form skin depth, explicit bounded remainder inequalities in the good-conductor regime eps*omega/sigma<=1/4 and the poor-conductor regime sigma/(eps*omega)<=1/2, and the phase relation. Excluded: sigma=0 (no attenuation, infinite skin depth), the ideal-conductor limit, frequency-dependent or tensor conductivity, anisotropy, dispersion, nonlinearity, any laboratory material and all empirical claims."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 author-hosted revision, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "\u00a77.6.2 printed pp. 207-209: the conductor ansatz with $J=\\sigma(\\omega)E$, the effective permittivity $\\varepsilon_{\\mathrm{eff}}=\\varepsilon+i\\sigma/\\omega$, the dispersion relation (7.54), the low-frequency Drude regime $\\sigma(\\omega)\\approx\\sigma_{\\mathrm{DC}}$ with $k=k_1+ik_2=\\sqrt{\\mu\\omega\\sigma_{\\mathrm{DC}}/2}\\,(1+i)$, the skin depth $\\delta=1/k_2=\\sqrt{2/(\\mu\\omega\\sigma_{\\mathrm{DC}})}$ and the $\\pi/4$ phase statement; the high-frequency plasma-frequency discussion is disposed separately in the coverage file and is not used here."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall, 1999, 596-page retained scan)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "\u00a79.4.1 printed pp. 393-396: the modified wave equations (9.122), the attenuated plane waves (9.123), the complex wave number (9.124) $k^{2}=\\mu\\varepsilon\\omega^{2}+i\\mu\\sigma\\omega$, the decomposition $k=k+i\\kappa$ (9.125) and the skin depth $d=1/\\kappa$ (9.128); Problems 9.19(a),(b),(c) printed pp. 395-396 state the poor-conductor frequency-independent skin depth, the good-conductor depth $\\lambda/2\\pi$ and the $\\pi/4$ phase lag. Retained scan with OCR noise; the exact formulas were cross-checked against Tong and against the local computations in the batch notes."
verification:
  precheck: pass

---

## Statement

Assume the elementary inertial-rest branch of [[post-em-material-closure]] in the isotropic scalar case at rest in the laboratory frame with constants $\varepsilon,\mu>0$ and $\sigma>0$, the fields of [[def-em-fields]] on the laboratory region of [[def-em-lab-geometry]] and the plane-wave structure of [[pthm-em-medium-plane-wave-fields]]: let $\omega>0$, $e\in\mathbb C^{3}\setminus\{0\}$, $n\in\mathbb R^3$ a unit vector and $k=\lambda n$, $\lambda\in\mathbb C$, and let $E(x,t)=\operatorname{Re}\bigl(e\,e^{i(k\cdot x-\omega t)}\bigr)$ be a plane-wave field satisfying the amplitude conditions of [[pthm-em-medium-plane-wave-fields]](b) with $k\cdot e=0$. Put $a:=\mu\varepsilon\omega^{2}>0$, $b:=\mu\sigma\omega>0$, $r:=\sqrt{a^{2}+b^{2}}$ and let $p,q>0$ be the quantities of [[def-em-medium-wave-parameters]]. Then:

**(a) [Exact propagation constant and decay]** $\lambda^{2}=k\cdot k=\varepsilon\mu\omega^{2}+i\mu\sigma\omega=a+ib$, so $\lambda=\pm(p+iq)$; if $x_3':=n\cdot x$, then for $\lambda=p+iq$
$$E(x,t)=e^{-q x_3'}\,\operatorname{Re}\bigl(e\,e^{i(p x_3'-\omega t)}\bigr),$$
so the field oscillates with wavenumber $p$ and its amplitude decays in the direction of increasing $x_3'$ at the exact rate $q$; with $\lambda=-(p+iq)$ the exact formula is $E(x,t)=e^{q x_3'}\operatorname{Re}(e\,e^{i(-p x_3'-\omega t)})$, which grows in that direction, so the decaying branch is the one with $\lambda=p+iq$, in agreement with the selection rule of [[def-em-medium-wave-parameters]](b).

**(b) [Exact skin depth]** $q^{2}=\bigl(\sqrt{a^{2}+b^{2}}-a\bigr)/2$, $p^{2}=\bigl(\sqrt{a^{2}+b^{2}}+a\bigr)/2$, $pq=b/2=\mu\sigma\omega/2$, and the skin depth of [[def-em-medium-wave-parameters]] equals the exact closed expression
$$\delta(\omega)=\frac{1}{q}=\frac{\sqrt{2\,(r+a)}}{b}=\frac{\sqrt{2\bigl(\sqrt{a^{2}+b^{2}}+a\bigr)}}{\mu\sigma\omega}.$$

**(c) [Good-conductor regime]** put $t:=a/b=\varepsilon\omega/\sigma>0$. For every $t\le1/4$ the exact value satisfies the explicit bounds
$$\bigl|q-\sqrt{b/2}\bigr|\le2t\sqrt{b/2}=\frac{2\varepsilon\omega}{\sigma}\sqrt{\frac{\mu\sigma\omega}{2}},\qquad \bigl|\delta-\sqrt{2/b}\bigr|\le4t\sqrt{2/b}=\frac{4\varepsilon\omega}{\sigma}\sqrt{\frac{2}{\mu\sigma\omega}} ;$$
equivalently $\delta=\sqrt{2/(\mu\sigma\omega)}\,\bigl(1+O(\varepsilon\omega/\sigma)\bigr)$ in the declared regime $\varepsilon\omega/\sigma\le1/4$, with the displayed explicit remainder bounds.

**(d) [Poor-conductor regime]** put $t':=b/a=\sigma/(\varepsilon\omega)>0$. For every $t'\le1/2$ the exact value satisfies
$$\Bigl|q-\frac{\sigma}{2}\sqrt{\frac{\mu}{\varepsilon}}\Bigr|\le\frac{t'^{2}}{4}\cdot\frac{\sigma}{2}\sqrt{\frac{\mu}{\varepsilon}},\qquad\Bigl|\delta-\frac{2}{\sigma}\sqrt{\frac{\varepsilon}{\mu}}\Bigr|\le\frac{t'^{2}}{2}\cdot\frac{2}{\sigma}\sqrt{\frac{\varepsilon}{\mu}},$$
so in this regime $\delta$ is frequency-independent up to the displayed relative error $O\bigl((\sigma/(\varepsilon\omega))^{2}\bigr)$.

**(e) [Phase relation for a real amplitude]** if $e\in\mathbb R^{3}$ and $\lambda=p+iq$, then
$$E(x,t)=e^{-q x_3'}e\cos(px_3'-\omega t),\qquad H(x,t)=\frac{e^{-q x_3'}}{\mu\omega}\bigl(p\cos(px_3'-\omega t)-q\sin(px_3'-\omega t)\bigr)\,(n\times e),$$
and the ratio of the quadrature to the in-phase coefficient is $q/p=\sqrt{1+t^{2}}-t$ with $1-2t\le q/p\le1$ for every $t\le1/2$; in particular $q/p\to1$ as $t\downarrow0$, so the magnetic scalar factor is $\sqrt{p^2+q^2}\cos(px_3'-\omega t+\eta)$ with $\eta:=\arctan(q/p)\to\pi/4$ (45 degrees), not a 90-degree quadrature phase shift. At fixed position with the $e^{-i\omega t}$ convention this corresponds to the stated signed $+\eta$ phase in the decreasing phase variable.

**(f) [Limits and scope]** for $\sigma=0$ one has $b=0$, $q=0$, no attenuation and $\delta=+\infty$, and the approximations of (c) and (d) are not applicable; the ideal-conductor limit $\sigma\to\infty$ is not covered by this theorem, which works inside the finite-Ohmic branch of [[post-em-material-closure]] (a separate boundary model is needed for an ideal conductor); the frequency dependence of $\sigma$ (Drude or other) is not supplied, and $\sigma$ is the declared constant of the branch; the conclusions are exact identities for the ideal plane-wave field and carry no empirical content, no measured conductivity and no claim about any laboratory field.

## Facts & Assumptions

**Given:** The declared Ohmic branch with constants $\varepsilon,\mu>0$, $\sigma>0$; the unit vector $n$, $k=\lambda n$, $e\ne0$ with $k\cdot e=0$; the plane-wave field $E=\operatorname{Re}(e\,e^{i(k\cdot x-\omega t)})$ with $H$ determined by the amplitude conditions; the numbers $a=\mu\varepsilon\omega^2>0$, $b=\mu\sigma\omega>0$, $r=\sqrt{a^2+b^2}$ and the parameters $p,q>0$ of [[def-em-medium-wave-parameters]].

[F1] Concrete propagation data: $k\cdot k=\varepsilon\mu\omega^{2}+i\mu\sigma\omega$ and $h=k\times e/(\omega\mu)$ by [[pthm-em-medium-plane-wave-fields]](b)-(c); and by [[def-em-medium-wave-parameters]](b), $\kappa=p+iq$ is the unique complex number with $\operatorname{Re}\kappa\ge0$, $\operatorname{Im}\kappa\ge0$ and $\kappa^{2}=a+ib$, where $p=\sqrt{(r+a)/2}$ and $q=\sqrt{(r-a)/2}$; also $v=(\varepsilon\mu)^{-1/2}$ and $Z=(\mu/\varepsilon)^{1/2}$.

[F2] The complex exponential in Cartesian form: for real $x,y$, $\exp(x+iy)=e^{x}(\cos y+i\sin y)$ and $|\exp(x+iy)|=e^{x}$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F3] Complex arithmetic and modulus: $\mathbb C$ is a field, a product vanishes only if a factor does, and from $z^{2}=w$ and $\kappa^{2}=w$ one gets $(z-\kappa)(z+\kappa)=0$, hence $z=\pm\kappa$ ([[def-complex-numbers-and-arithmetic]], [[thm-complex-numbers-form-a-field]]); the modulus satisfies $z\overline z=|z|^{2}$ and $|zw|=|z||w|$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]], [[lem-complex-conjugation-and-modulus-laws]]).

[F4] Real roots and order: every nonnegative real has a unique nonnegative square root, and $\sqrt{a}\sqrt{b}=\sqrt{ab}$ for $a,b\ge0$ follows from squaring and uniqueness ([[thm-of-square-roots]]); for $0\le a\le b$ one has $a^{2}\le b^{2}$, and for $0\le a,b$ with $a^{2}\le b^{2}$ one has $a\le b$ ([[lem-of-square-monotone]]); if $0\le a\le b$ and $0\le c\le d$ then $ac\le bd$, and if $0<c<d$ then $1/d<1/c$ in the sense $0<1/d\le1/c$ ([[prop-of-multiply-inequalities]], [[lem-of-sign-rules]]: multiplication by a positive preserves order, and $1/c-1/d=(d-c)/(cd)>0$).

[F5] Every complex number has a square root ([[thm-every-complex-number-has-a-square-root]]).

[F6] The principal inverse tangent $\arctan:\mathbb R\to(-\pi/2,\pi/2)$ is continuous and strictly increasing with $\tan(\arctan y)=y$ ([[def-principal-inverse-tangent]]), and the addition formulas $\cos(\theta+\eta)=\cos\theta\cos\eta-\sin\theta\sin\eta$ hold for real angles ([[thm-sine-and-cosine-addition-formulas]]).

[F7] Trigonometry: $\sin^{2}\theta+\cos^{2}\theta=1$ and $\cos(-\theta)=\cos\theta$ ([[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]]); $\tan\theta=\sin\theta/\cos\theta$ where defined ([[def-tangent-cotangent-secant-cosecant]]); $\sin(\theta+\pi/2)=\cos\theta$ and $\cos(\pi/2)=0$ ([[thm-quarter-turn-values-and-shift-formulas]]). Cosine is strictly decreasing on $[0,\pi]$ and hence positive on $(0,\pi/2)$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]]). Consequently $\sin(\pi/4)=\cos(-\pi/4)=\cos(\pi/4)>0$, so $\tan(\pi/4)=1$ and $\arctan 1=\pi/4$ by [F6].

[F8] The laboratory setting and units are those of [[def-em-lab-geometry]], [[def-em-si-conventions]] and [[def-em-fields]]; the branch assumption is that of [[post-em-material-closure]].

## Proof

**Proof technique:** direct; substitute the concrete data into the medium plane-wave theorem, extract the decaying root via Euler's Cartesian form, and bound the exact radicals with elementary square-root inequalities.

1.1 [Propagation constant and decay, part (a)] By [F1], $k\cdot k=\varepsilon\mu\omega^{2}+i\mu\sigma\omega=a+ib$, and since $k=\lambda n$ with $n\cdot n=1$ the bilinear expansion gives $\lambda^{2}=k\cdot k=a+ib$; by [F1] and [F5] with [F3], the solutions of $z^{2}=a+ib$ are exactly $z=\pm(p+iq)$. Writing $x_3'=n\cdot x$, so that $k\cdot x=\lambda x_3'$, the exponent is $i(k\cdot x-\omega t)=i\lambda x_3'-i\omega t$; for $\lambda=p+iq$ this is $-qx_3'+i(px_3'-\omega t)$, and the Cartesian form [F2] gives $e^{i(k\cdot x-\omega t)}=e^{-qx_3'}(\cos(px_3'-\omega t)+i\sin(px_3'-\omega t))$, whence $E=e^{-qx_3'}\operatorname{Re}\bigl(e\,e^{i(px_3'-\omega t)}\bigr)$ componentwise; the amplitude factor $e^{-qx_3'}$ decreases as $x_3'$ increases because $q>0$ by [F1]. For $\lambda=-(p+iq)$ the same computation gives $i\lambda x_3'-i\omega t=qx_3'+i(-px_3'-\omega t)$ and $E=e^{qx_3'}\operatorname{Re}(e\,e^{i(-px_3'-\omega t)})$, which grows in the direction of increasing $x_3'$; the decaying branch is therefore $\lambda=p+iq$, matching the root selection of [F1]. [given, F1, F2, F3, F5, algebra]

2.1 [Exact skin depth, part (b)] By [F1], $q^{2}=(r-a)/2$ and $p^{2}=(r+a)/2$ with $r=\sqrt{a^{2}+b^{2}}$; multiplying, $(pq)^{2}=\bigl(r^{2}-a^{2}\bigr)/4=b^{2}/4$, and since $p,q\ge0$ and $b>0$ the uniqueness of the nonnegative square root in [F4] gives $pq=b/2=\mu\sigma\omega/2$. For the skin depth $\delta=1/q$ of [[def-em-medium-wave-parameters]](c): $\delta^{2}=1/q^{2}=2/(r-a)=2(r+a)/\bigl((r-a)(r+a)\bigr)=2(r+a)/b^{2}$, where $(r-a)(r+a)=r^{2}-a^{2}=b^{2}$ by [F4]; since $\delta>0$ and $b>0$, taking the nonnegative square root gives $\delta=\sqrt{2(r+a)}/b$, and substituting $a=\mu\varepsilon\omega^{2}$ and $b=\mu\sigma\omega$ gives the displayed closed form. [step 1.1, F1, F4, algebra]

3.1 [Ratio identities] With $t=a/b>0$ one has $r=b\sqrt{1+t^{2}}$ because $r^{2}=a^{2}+b^{2}=b^{2}(t^{2}+1)$ and both sides are nonnegative, by [F4]; hence $q^{2}=(r-a)/2=\tfrac{b}{2}\bigl(\sqrt{1+t^{2}}-t\bigr)$ and $\sqrt{1+t^{2}}-t=\bigl(\sqrt{1+t^{2}}+t\bigr)^{-1}$, the second identity because $\bigl(\sqrt{1+t^{2}}-t\bigr)\bigl(\sqrt{1+t^{2}}+t\bigr)=1+t^{2}-t^{2}=1$ with all factors positive by [F4] and [F1]. Moreover $q/p=\sqrt{1+t^{2}}-t$: indeed $q^{2}/p^{2}=(r-a)/(r+a)$, and the same rationalisation gives $(r-a)/(r+a)=\bigl(\sqrt{1+t^{2}}-t\bigr)^{2}$, so the positive quantities $q/p$ and $\sqrt{1+t^{2}}-t$ have equal squares and are equal by [F4]. With $s=t'=b/a>0$ one has analogously $r=a\sqrt{1+s^{2}}$ and $q^{2}=\tfrac{a}{2}\bigl(\sqrt{1+s^{2}}-1\bigr)$. Writing $q_{t}:=\frac{\sigma}{2}\sqrt{\frac{\mu}{\varepsilon}}$, the identity $q_{t}=\frac{\sqrt{a}\,s}{2}$ holds: expanding $\sqrt a=\omega(\varepsilon\mu)^{1/2}$ and $s=\frac{\sigma}{\varepsilon\omega}$ by [F1] gives $\frac{\sqrt a\,s}{2}=\frac{\omega(\varepsilon\mu)^{1/2}\sigma}{2\varepsilon\omega}=\frac{\sigma}{2}\sqrt{\frac{\mu}{\varepsilon}}$; hence $q^{2}/q_{t}^{2}=\frac{2(\sqrt{1+s^{2}}-1)}{s^{2}}=\frac{2}{1+\sqrt{1+s^{2}}}$ by the same rationalisation. [step 2.1, F1, F4, algebra]

4.1 [Good-conductor bounds, part (c)] For $t\ge0$ one has $1\le\sqrt{1+t^{2}}\le1+t$: the left inequality because $1\le1+t^{2}$ and both sides are nonnegative, the right because $1+t^{2}\le(1+t)^{2}=1+2t+t^{2}$, both by [F4]. Hence $\frac{1}{1+2t}\le\sqrt{1+t^{2}}-t\le\frac{1}{1+t}\le1$ by step 3.1 and [F4], and $\frac{1}{1+2t}\ge1-2t$ because $0\le1-2t\le1$ and $(1-2t)(1+2t)=1-4t^{2}\le1$ for $t\le1/2$; therefore $\sqrt{1-2t}\le\frac{q}{\sqrt{b/2}}\le1$, that is $\sqrt{b/2}\sqrt{1-2t}\le q\le\sqrt{b/2}$. For $t\le1/4$ one has $1-2t\ge0$ and $(1-2t)^{2}\le1-2t$, so $\sqrt{1-2t}\ge1-2t$ by [F4], giving $\bigl|q-\sqrt{b/2}\bigr|\le2t\sqrt{b/2}$ with the stated equivalent form since $\sqrt{b/2}=\sqrt{\mu\sigma\omega/2}$. For $\delta=1/q$ one has $\sqrt{2/b}\le\delta\le\frac{\sqrt{2/b}}{1-2t}$ from the bound on $q$ and [F4]; and $\frac{1}{1-2t}\le1+4t$ for $t\le1/4$ because $1\le(1+4t)(1-2t)=1+2t-8t^{2}$, i.e. $0\le2t(1-4t)$, by [F4]; hence $\bigl|\delta-\sqrt{2/b}\bigr|\le4t\sqrt{2/b}$ with the stated equivalent form. [step 3.1, F1, F4, algebra]

4.2 [Poor-conductor bounds, part (d)] By step 3.1, $q^{2}=\tfrac{a}{2}\bigl(\sqrt{1+s^{2}}-1\bigr)$ and $q^{2}/q_{t}^{2}=\frac{2}{1+\sqrt{1+s^{2}}}$ with $q_{t}=\frac{\sigma}{2}\sqrt{\frac{\mu}{\varepsilon}}$, $s=t'=b/a>0$. Since $\sqrt{1+s^{2}}\ge1$, the ratio is at most $1$, so $q\le q_{t}$; and $\sqrt{1+s^{2}}\le1+\frac{s^{2}}{2}$ because $1+s^{2}\le\bigl(1+\frac{s^{2}}{2}\bigr)^{2}=1+s^{2}+\frac{s^{4}}{4}$, so $q^{2}/q_{t}^{2}\ge\frac{2}{2+\frac{s^{2}}{2}}=\frac{1}{1+\frac{s^{2}}{4}}$; for $s^{2}\le1$ (which holds when $s\le1/2$) one has $\frac{1}{1+s^{2}/4}\ge1-\frac{s^{2}}{4}$ since $\bigl(1-\frac{s^{2}}{4}\bigr)\bigl(1+\frac{s^{2}}{4}\bigr)=1-\frac{s^{4}}{16}\le1$ with $1-\frac{s^{2}}{4}\ge0$; therefore $q/q_{t}\ge1-\frac{s^{2}}{4}$, i.e. $\bigl|q-q_{t}\bigr|\le\frac{s^{2}}{4}q_{t}$. For $\delta=1/q$ and $\delta_{t}=1/q_{t}$ we get $\delta/\delta_{t}=q_{t}/q\le\frac{1}{1-s^{2}/4}\le1+\frac{s^{2}}{2}$ whenever $s^{2}\le1$ (since $\frac{1}{1-s^{2}/4}\le1+\frac{s^{2}}{2}$ is equivalent to $1\le1+\frac{s^{2}}{4}-\frac{s^{4}}{8}$, true for $s^{2}\le2$), whence $\bigl|\delta-\delta_{t}\bigr|\le\frac{s^{2}}{2}\delta_{t}$; substituting $\delta_{t}=\frac{2}{\sigma}\sqrt{\frac{\varepsilon}{\mu}}$ gives both displayed bounds, by [F4] throughout. [step 3.1, F4, algebra]

5.1 [Phase relation, part (e)] Assume $e\in\mathbb R^{3}$ and $\lambda=p+iq$; by [F1], $h=k\times e/(\omega\mu)=\lambda\,(n\times e)/(\omega\mu)$ because $k=\lambda n$ and $n\times e$ is real, and the exponent is computed as in step 1.1. Writing $\theta:=px_3'-\omega t$ and using $\lambda/(\mu\omega)=(p+iq)/(\mu\omega)$ with real $p,q$, the Cartesian form [F2] gives $\operatorname{Re}\bigl((p+iq)(\cos\theta+i\sin\theta)\bigr)=p\cos\theta-q\sin\theta$, so $E=e^{-qx_3'}e\cos\theta$ and $H=e^{-qx_3'}(p\cos\theta-q\sin\theta)(n\times e)/(\mu\omega)$, the two displayed identities. By step 3.1, $q/p=\sqrt{1+t^{2}}-t$, and the bounds $1-2t\le q/p\le1$ for $t\le1/2$ are the ones established in step 4.1 for the same quantity; as $t\downarrow0$ the inequality $0\le\sqrt{1+t^2}-1=t^2/(\sqrt{1+t^2}+1)\le t^2/2$ gives $|\sqrt{1+t^2}-t-1|\le t+t^2/2\to0$, so $\eta:=\arctan(q/p)$ tends to $\arctan 1=\pi/4$ by the continuity of $\arctan$ in [F6]. Put $r:=q/p>0$ and $\eta=\arctan r\in(0,\pi/2)$; by [F6], $\sin\eta=r\cos\eta$, and the Pythagorean identity $\sin^{2}\eta+\cos^{2}\eta=1$ with $\cos\eta>0$ gives $\cos\eta=1/\sqrt{1+r^{2}}$ and $\sin\eta=r/\sqrt{1+r^{2}}$; equivalently $\cos\eta=p/\sqrt{p^{2}+q^{2}}$ and $\sin\eta=q/\sqrt{p^{2}+q^{2}}$, since $\sqrt{1+r^{2}}=\sqrt{p^{2}+q^{2}}/p$ with $p>0$ by [F4]. The addition formula of [F6] then gives $\sqrt{p^{2}+q^{2}}\cos(\theta+\eta)=p\cos\theta-q\sin\theta$, which is the stated form of the magnetic scalar factor. [given, step 1.1, step 3.1, step 4.1, F1, F2, F4, F6, F7, algebra]

6.1 [Limits and scope, part (f)] Clause (f): for $\sigma=0$ the definition of [[def-em-medium-wave-parameters]] gives $b=0$, $q=0$, no attenuation and $\delta=+\infty$, and the divisions and bounds of steps 3.1-4.2 use $b>0$, $q>0$ and are not evaluated at zero; the limit $\sigma\to\infty$ is outside the finite-Ohmic branch and the frequency dependence of $\sigma$ is not supplied; all identities are exact for the plane-wave field and involve no measurement, material data or empirical statement, and no choice principle is used since every quantity is defined by explicit formulas in the given scalars. [given, step 4.2, F1, F8] ∎

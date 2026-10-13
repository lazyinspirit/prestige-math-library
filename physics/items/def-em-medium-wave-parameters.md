---
id: def-em-medium-wave-parameters
kind: definition
title: "Homogeneous isotropic medium parameters: phase speed, impedance, refractive index, complex propagation constant and skin depth"
status: published
origin: pipeline
domain: physics
dependency_level: 17
deps: [post-em-material-closure, def-em-polarization-magnetization, def-em-lab-geometry, def-em-si-conventions, thm-of-square-roots, thm-every-complex-number-has-a-square-root, def-complex-numbers-and-arithmetic, def-complex-conjugate-real-imaginary-part-and-modulus, lem-complex-conjugation-and-modulus-laws, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-complex-numbers-form-a-field]
dependency_roles:
  thm-complex-numbers-form-a-field: mathematical-premise
  post-em-material-closure: formulation-prerequisite
  def-em-polarization-magnetization: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  thm-of-square-roots: mathematical-premise
  thm-every-complex-number-has-a-square-root: mathematical-premise
  def-complex-numbers-and-arithmetic: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Terminology, units and branch conventions for homogeneous isotropic materials at rest in the laboratory frame in the constant scalar branch D=eps E, B=mu H, J_f=sigma E+J_ext with eps,mu>0 and sigma>=0: the lossless phase speed, wave impedance, refractive index and wavenumber, the complex propagation constant kappa=p+iq as the unique root with Re,Im>=0 of k^2=eps*mu*omega^2+i*mu*sigma*omega, and the skin depth. Objects, units and conventions only: no field equation, no dispersion relation for a solution, no attenuation of any concrete field and no material validity or measured value."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 author-hosted revision, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "\u00a77.5.2 printed pp. 194-198 (frequency-dependent response, speed and index in a medium; the constant-coefficient scalar case) and \u00a77.6.2 printed pp. 207-209: $\\varepsilon_{\\mathrm{eff}}=\\varepsilon+i\\sigma/\\omega$, the dispersion relation $k\\cdot k=\\mu\\varepsilon_{\\mathrm{eff}}\\omega^{2}$, the root selection and the skin depth $\\delta=\\sqrt{2/(\\mu\\omega\\sigma)}$ in the low-frequency regime; the sign convention is $e^{i(k\\cdot x-\\omega t)}$."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall, 1999, 596-page retained scan)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "\u00a79.3.1 printed pp. 382-383: $v=1/\\sqrt{\\varepsilon\\mu}$, the index $n=\\sqrt{\\varepsilon\\mu/(\\varepsilon_0\\mu_0)}$ and the transcription of the vacuum plane-wave results to a linear medium; \u00a79.4.1 printed pp. 394-395: the complex wave number $k^{2}=\\mu\\varepsilon\\omega^{2}+i\\mu\\sigma\\omega$ and the skin depth $d=1/\\kappa$ defined as the $1/e$ amplitude-decay distance. The scan is a retained 596-page third-edition copy with OCR noise; the displayed formulas were cross-checked against Tong and against the local computations recorded in the batch notes."
verification:
  precheck: n/a
---

## Definition

Assume the elementary inertial-rest branch of [[post-em-material-closure]] in the laboratory region $U\cong I\times\Omega$ of [[def-em-lab-geometry]] with the units of [[def-em-si-conventions]], in its isotropic scalar case: the material is at rest in the laboratory frame, $D,H$ are defined by [[def-em-polarization-magnetization]](d), and the constitutive relations of [[post-em-material-closure]](b) hold with constant scalars $\varepsilon>0$ (F$\,$m$^{-1}$), $\mu>0$ (H$\,$m$^{-1}$) and $\sigma\ge0$ (S$\,$m$^{-1}$), so that $D=\varepsilon E$, $B=\mu H$ and the free current is $J_f=\sigma E+J_{\mathrm{ext}}$ for a declared external free current $J_{\mathrm{ext}}$. Write $c>0$ for the exact vacuum speed of [[def-em-si-conventions]] and let $\omega>0$ (s$^{-1}$) be an angular frequency. Define:

**(a) [Lossless parameters]** with $\sqrt{\cdot}$ the nonnegative square root of [[thm-of-square-roots]],
$$v:=(\varepsilon\mu)^{-1/2}\quad(\mathrm m\,\mathrm s^{-1}),\qquad Z:=\Bigl(\frac{\mu}{\varepsilon}\Bigr)^{1/2}\quad(\Omega),\qquad n:=\frac{c}{v}=c(\varepsilon\mu)^{1/2}\quad(\text{dimensionless}),\qquad k(\omega):=\frac{\omega}{v};$$
$v$ is the phase speed, $Z$ the wave impedance, $n$ the refractive index relative to vacuum and $k(\omega)$ the real wavenumber of the lossless case.

**(b) [Complex propagation constant]** put $a:=\mu\varepsilon\omega^{2}>0$, $b:=\mu\sigma\omega\ge0$, $r:=\sqrt{a^{2}+b^{2}}$ and
$$p(\omega):=\sqrt{\frac{r+a}{2}},\qquad q(\omega):=\sqrt{\frac{r-a}{2}},\qquad \kappa(\omega):=p(\omega)+i\,q(\omega).$$
Then $\kappa(\omega)$ is the unique $k\in\mathbb C$ with $\operatorname{Re}k\ge0$, $\operatorname{Im}k\ge0$ and $k^{2}=\varepsilon\mu\omega^{2}+i\mu\sigma\omega=a+ib$; in the lossless case $\sigma=0$ one has $b=0$, $q=0$ and $\kappa(\omega)=k(\omega)=p(\omega)$ real. (The explicit formula is the one of [[thm-every-complex-number-has-a-square-root]]; the verification $p^{2}-q^{2}=a$, $2pq=b$ and the uniqueness of the root with $\operatorname{Re}k\ge0$, $\operatorname{Im}k\ge0$ are verified in the well-definedness paragraph below.)

**(c) [Skin depth]** call $\delta(\omega):=1/q(\omega)$ (m) the skin depth if $\sigma>0$, and set $\delta(\omega):=+\infty$ if $\sigma=0$: for $\kappa(\omega)=p+iq$ and $x_3\in\mathbb R$ the modulus of $e^{i(\kappa x_3-\omega t)}$ equals $e^{-q x_3}$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]), so $\delta$ is the distance in which that modulus decays by the factor $1/e$ in the direction of increasing $x_3$; for $\sigma=0$ there is no attenuation and $\delta$ is infinite rather than a division by zero.

**(d) [Status and scope]** This item fixes objects, units, branch conventions and terminology only. It asserts no field equation, no dispersion relation for a solution, no attenuation of any concrete field and no material validity. The parameters are declared for the isotropic scalar constant-coefficient branch at rest in the laboratory frame; for $\varepsilon\mu<c^{-2}$ the branch is, by [[post-em-material-closure]](b), a declared finite-band effective phase-response model with no universal front-speed claim. An exact broadband interpretation must be separately adopted and requires $\varepsilon\mu\ge c^{-2}$; that inequality alone does not adopt a broadband interpretation or establish material validity, and a finite-band interpretation remains possible when it holds. No measured value, precision or empirical statement is included.

### Well-definedness and conventions

The material assumptions, the rest-frame clause, the isotropic scalar case and the finite-band caveat are those of [[post-em-material-closure]](a)-(b) read with [[def-em-polarization-magnetization|the polarization and magnetization definitions]]; the unit system and the exact constant $c$ are those of [[def-em-si-conventions]]; the laboratory chart is that of [[def-em-lab-geometry]].

The only content beyond notation is the well-definedness of $\kappa(\omega)$ in (b). With $a>0$, $b\ge0$ and $r=\sqrt{a^{2}+b^{2}}$ one has $r+a>0$ and $(r-a)(r+a)=b^2\ge0$, so $r-a\ge0$ and both defining radicands are nonnegative. If $b>0$, the same identity gives $r-a>0$, hence $q>0$; if $b=0$, uniqueness of nonnegative roots gives $r=a$ and $q=0$. Also $p>0$ because $r+a>0$. Thus $p^{2}-q^{2}=(r+a)/2-(r-a)/2=a$ and $(2pq)^{2}=4\cdot(r+a)(r-a)/4=r^{2}-a^{2}=b^{2}$, so $2pq=b$ because $p,q\ge0$ ([[thm-of-square-roots]]); hence $\kappa^{2}=p^{2}-q^{2}+2ipq=a+ib$, by the field arithmetic of [[def-complex-numbers-and-arithmetic]]. The square roots of $a+ib$ are exactly $\pm\kappa$: if $z^2=\kappa^2$, then $(z-\kappa)(z+\kappa)=0$, and the complex field property ([[thm-complex-numbers-form-a-field]]) gives $z=\kappa$ or $z=-\kappa$. If $k=u+iv$ with $u,v\ge0$ and $k^{2}=a+ib$, then $u^{2}-v^{2}=a$, $2uv=b$ and $u^{2}+v^{2}=|k|^{2}=|k^{2}|=\sqrt{a^{2}+b^{2}}=r$, where $|k^{2}|=|k|^{2}$ is the multiplicativity of the modulus ([[lem-complex-conjugation-and-modulus-laws]]) and $|a+ib|=\sqrt{a^{2}+b^{2}}$ is the modulus of [[def-complex-conjugate-real-imaginary-part-and-modulus]]; solving gives $u^{2}=(r+a)/2=p^{2}$ and $v^{2}=(r-a)/2=q^{2}$, and since $u,v,p,q\ge0$ the uniqueness of the nonnegative square root ([[thm-of-square-roots]]) gives $u=p$ and $v=q$, so $k=\kappa$. In the lossless case $\sigma=0$ one has $b=0$, $r=a$, $q=0$, $p=\sqrt a=\omega(\varepsilon\mu)^{1/2}=k(\omega)$ by [[thm-of-square-roots]]. All divisions are by strictly positive real numbers, $v$ and $q$ are nonzero exactly where defined, and no choice principle is used.

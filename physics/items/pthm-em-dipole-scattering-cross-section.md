---
id: pthm-em-dipole-scattering-cross-section
kind: physics-theorem
title: "Differential and total cross sections of the ideal harmonic dipole in a plane wave, with actual-source fidelity bounds"
status: draft
origin: pipeline
domain: physics
dependency_level: 22
deps: [def-em-ideal-harmonic-dipole-model, pthm-em-dipole-radiation, pthm-em-wave-energy-average, def-em-plane-wave-definition, pthm-em-plane-wave-maxwell, def-em-vacuum-energy-flux, def-em-si-conventions, lem-em-period-average, lem-em-sphere-zonal-moments, def-euclidean-inner-product, def-cross-product-in-r3, lem-cross-product-is-bilinear-alternating-and-orthogonal, def-complex-conjugate-real-imaginary-part-and-modulus, def-countable-choice, lem-test-function-cutoffs-and-euclidean-localization, def-mollifier-family-generated-by-a-unit-mass-smooth-bump, thm-integration-by-parts, thm-riemann-fubini-on-product-rectangles, lem-riemann-lebesgue-comparison-for-distribution-test-integrands, thm-ftc-first-part, cor-zero-derivative-implies-constant, thm-monotonicity-of-the-integral, def-multidimensional-rectangle-and-volume, thm-continuous-on-a-rectangle-is-riemann-integrable]
dependency_roles:
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  def-multidimensional-rectangle-and-volume: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-em-ideal-harmonic-dipole-model: formulation-prerequisite
  pthm-em-dipole-radiation: physical-result
  pthm-em-wave-energy-average: physical-result
  def-em-plane-wave-definition: formulation-prerequisite
  pthm-em-plane-wave-maxwell: physical-result
  def-em-vacuum-energy-flux: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  lem-em-period-average: mathematical-premise
  lem-em-sphere-zonal-moments: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  def-mollifier-family-generated-by-a-unit-mass-smooth-bump: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  lem-riemann-lebesgue-comparison-for-distribution-test-integrands: mathematical-premise
  thm-ftc-first-part: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Conditional cross sections of the adopted ideal harmonic dipole model in a plane wave: the directional and total model cross sections in SI constants, the scalar-polarizability branch, and the explicit fidelity bounds comparing the model with an actual compact smooth source. Excluded: measured cross sections, frequency-domain response laws, magnetic-dipole and higher-multipole content, self-force and radiation reaction, material response, finite-size and every empirical claim."
sources:
  references:
    - title: "David Tong, Electromagnetism (University of Cambridge Part II Mathematical Tripos, author-hosted complete 236-page notes)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "section 6.3 'Scattering', printed pp. 154-157: scattering as reradiation and the cross section as the ratio of outgoing to incoming power"
    - title: "R. Fitzpatrick, Classical Electromagnetism, node 96 'Thompson scattering' (University of Texas at Austin)"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node96.html"
      locator: "eqs. (1124)-(1127) of node 96: differential scattered power and the definitions of differential and total scattering cross section"
    - title: "N. Beisert, Elektrodynamik, ETH Zurich 2024 FS, section 12.3 'Streuung an Materie'"
      url: "https://people.phys.ethz.ch/~beisert/lectures/ED-24FS-Skript.pdf"
      locator: "eqs. (12.36)-(12.41) printed pp. 12.8-12.11: cross-section definition and electric/magnetic dipole radiation law"
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

Assume Countable Choice ($\mathrm{AC}_\omega$) as carried by [[pthm-em-dipole-radiation]] and [[lem-em-sphere-zonal-moments]] ([[def-countable-choice]]); the period-average and cross-section algebra itself uses no choice. Adopt the ideal harmonic electric-dipole radiation model of [[def-em-ideal-harmonic-dipole-model]] with frequency $\omega>0$, wavenumber $k=\omega/c$ and amplitude $p_0\in\mathbb C^3$; let $E_{\rm d},B_{\rm d},S_{\rm d}$ be its fields and model flux. Let $\kappa\in\mathbb R^3\setminus\{0\}$ with $|\kappa|=\omega/c$, $e\in\mathbb C^3\setminus\{0\}$ with $\kappa\cdot e=0$, $b:=\kappa\times e/\omega$ ([[def-cross-product-in-r3]], [[def-euclidean-inner-product]]), and let $(E_{\rm inc},B_{\rm inc})$ be the corresponding plane-wave fields of [[def-em-plane-wave-definition]] on $\mathbb R^3\times\mathbb R$; by [[pthm-em-plane-wave-maxwell]] they satisfy the smooth-branch source-free vacuum Maxwell equations, and by [[pthm-em-wave-energy-average]](b) their period-averaged energy flux has magnitude $I_{\rm inc}=\frac{\varepsilon_0c}{2}|e|^2=\frac{|e|^2}{2\mu_0c}$ ([[def-em-si-conventions]]). Define the **model differential scattering cross section** by

$$\frac{d\sigma}{d\Omega}(n):=\frac{r^2\langle S_{\rm d}(rn,\cdot)\cdot n\rangle}{\langle S_{\rm inc}\cdot\hat\kappa\rangle},\qquad n\in S^2,\ r>0,$$

where $\hat\kappa:=\kappa/|\kappa|$, $S_{\rm inc}:=E_{\rm inc}\times B_{\rm inc}/\mu_0$ ([[def-em-vacuum-energy-flux]]), and $\langle f\rangle:=\frac1T\int_0^Tf(s)\,ds$, $T=2\pi/\omega$, is the period average at fixed observation point. Then: (a) [Angular pattern] the ratio is independent of $r$ and of the averaging start, and for every $n\in S^2$

$$\frac{d\sigma}{d\Omega}(n)=\frac{\omega^4|n\times p_0|^2}{16\pi^2\varepsilon_0^2c^4|e|^2}=\frac{\mu_0^2\omega^4|n\times p_0|^2}{16\pi^2|e|^2}.$$

(b) [Total cross section] with $d\sigma_{S^2}$ the surface measure of the unit sphere, $\sigma:=\int_{S^2}\frac{d\sigma}{d\Omega}\,d\sigma_{S^2}$ equals

$$\sigma=\frac{\omega^4|p_0|^2}{6\pi\varepsilon_0^2c^4|e|^2}=\frac{\mu_0^2\omega^4|p_0|^2}{6\pi|e|^2};$$

if $p_0=\alpha e$ for a complex scalar $\alpha$ (the scalar polarizability, in $\mathrm F\,\mathrm m^2$), then $\sigma=\frac{\omega^4|\alpha|^2}{6\pi\varepsilon_0^2c^4}$ and $\frac{d\sigma}{d\Omega}(n)=\frac{\omega^4|\alpha|^2}{16\pi^2\varepsilon_0^2c^4}|n\times\hat e|^2$ with $\hat e:=e/|e|$. (c) [Fidelity for arbitrary actual sources and matched windows] Let an actual compact smooth conserved source satisfy the exact hypotheses of [[pthm-em-dipole-radiation]], with spatial support radius $a>0$, source-time interval $[\tau_0,\tau_1]$, moment $p_{\rm act}(u)$, variation bound $D(u)$ and constants $\Gamma_E,\Gamma_B$. These source data are independent of the prescribed model amplitude $p_0$. Put

$$p_{\rm h}(u):=\operatorname{Re}(p_0e^{-i\omega u}),\qquad M(u):=|p_{\rm act}''(u)-p_{\rm h}''(u)|.$$

For $n\in S^2$, $u\in[\tau_0,\tau_1]$, $r\ge2a$, define

$$H(u,r):=\frac{\Gamma_E}{r^2}+\frac{\mu_0}{4\pi r}[D(u)+M(u)].$$

The actual retarded fields and the model fields satisfy, uniformly in $n$,

$$|E_{\rm act}(rn,u+r/c)-E_{\rm d}(rn,u+r/c)|\le H(u,r),$$

$$|B_{\rm act}(rn,u+r/c)-B_{\rm d}(rn,u+r/c)|\le\frac{\Gamma_B+\Gamma_E/c}{r^2}+\frac{H(u,r)}c.$$

Also retain the sharper direct source-leading-field consequence

$$|B_{\rm act}-B_{\rm d}|\le\frac{\Gamma_B}{r^2}+\frac{\mu_0[D(u)+M(u)]}{4\pi cr}$$

at the same events. If $p_{\rm act}''=p_{\rm h}''$ on a specified finite window, $M\equiv0$ there and these give the full matched dipole bounds; in particular they imply the coarser electric bound $\Gamma_E/r^2+\mu_0D/(2\pi r)$. Neither moment matching nor $D\equiv0$ is automatic. A sound sufficient matched branch is $p_{\rm act}=p_{\rm h}+a_0+b_0u$ on an open neighbourhood of the window (any fixed real vectors $a_0,b_0$). Such a branch has actual compact realizations over any finite window: choose a smooth time cutoff $\eta$ equal to $1$ near the window, let $p_\eta:=\eta\,(p_{\rm h}+a_0+b_0u)$, choose a nonnegative smooth spatial bump $\sigma$ with support inside $B_a$ and integral $1$, and set $\rho:=-p_\eta\cdot\nabla\sigma$, $J:=p_\eta'\sigma$. Then continuity holds and the actual moment is $p_\eta$; outside the window it is tapered. Apply the actual-source theorem with the resulting $D$ and $\Gamma$, retaining every finite-radius and source-variation error. No eternal harmonic moment of a compact-time source is asserted. (d) [Scope] conditional predictions of the adopted ideal model: no measured cross section, no frequency-domain response law (the amplitude $p_0$ is prescribed model data), no magnetic-dipole or higher-multipole content, no self-force, material response, finite-size or empirical claim; the scalar-$\alpha$ clause records a declared proportional response, not a derived polarizability. In all complex-amplitude formulas $|v|^2=\sum_i|v_i|^2$ is the Hermitian norm square; $n\times v$ is complex-linear for real $n$. The $p_0=0$ case gives zero scattered fields and cross sections while the nonzero incident intensity still defines the ratios. Actual-source fidelity assumes only the explicitly quantified mismatch and source hypotheses; it does not turn the model cross section into a measured or self-consistent scattering prediction.

## Facts & Assumptions

**Given:** The model data of [[def-em-ideal-harmonic-dipole-model]]: $\omega>0$, $k=\omega/c$, $p_0\in\mathbb C^3$, the model fields $E_{\rm d},B_{\rm d}$ and flux $S_{\rm d}$ on $(\mathbb R^3\setminus\{0\})\times\mathbb R$; the plane-wave data $\kappa$, $e\ne0$ with $\kappa\cdot e=0$, $b=\kappa\times e/\omega$, and the fields $E_{\rm inc},B_{\rm inc}$, $S_{\rm inc}$; the constants $c,\varepsilon_0,\mu_0$ of [[def-em-si-conventions]] with $\varepsilon_0\mu_0c^2=1$; the period $T=2\pi/\omega$ and the cross section of the Statement.

[F1] Model interface: $E_{\rm d}(x,t)=\operatorname{Re}(w(x)e^{-i\omega t})$ with $w(x):=-\frac{\mu_0\omega^2}{4\pi r}n\times(n\times p_0)e^{ikr}$, $r=|x|$, $n=x/r$; $B_{\rm d}=n\times E_{\rm d}/c$; $S_{\rm d}=E_{\rm d}\times B_{\rm d}/\mu_0$ is the flux of [[def-em-vacuum-energy-flux]] evaluated at the model fields ([[def-em-ideal-harmonic-dipole-model]]).

[F2] Incident plane wave: $(E_{\rm inc},B_{\rm inc})$ are the plane-wave fields of [[def-em-plane-wave-definition]] with amplitude $e$ and $b=\kappa\times e/\omega$, $|\kappa|=\omega/c$, satisfying the smooth source-free vacuum Maxwell equations by [[pthm-em-plane-wave-maxwell]]; their period-averaged flux satisfies $\langle S_{\rm inc}\rangle=I_{\rm inc}\hat\kappa$ with $I_{\rm inc}=\frac{\varepsilon_0c}{2}|e|^2=\frac{|e|^2}{2\mu_0c}$ ([[pthm-em-wave-energy-average]], [[def-em-si-conventions]]).

[F3] Period averages: for $a,d\in\mathbb C$, $\frac1T\int_0^T\operatorname{Re}(ae^{-i\omega t})\operatorname{Re}(de^{-i\omega t})\,dt=\frac12\operatorname{Re}(a\overline d)$; in particular the mean of the real square is $\frac12|a|^2$ ([[lem-em-period-average]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F4] Cross product and norm identities: the cross product is bilinear and alternating; $|n\times(n\times v)|=|n\times v|\le|v|$ for $|n|=1$; $n\times(u+iv)=n\times u+i\,n\times v$ for real $n$; $|n\times v|^2=\sum_i|(n\times v)_i|^2$ is the Hermitian norm square ([[lem-cross-product-is-bilinear-alternating-and-orthogonal]], [[def-cross-product-in-r3]], [[def-euclidean-inner-product]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F5] Sphere moments: for the surface measure $\sigma_{S^2}$ of the unit sphere, $\sigma_{S^2}(S^2)=4\pi$, $\int_{S^2}n\,d\sigma_{S^2}=0$, $\int_{S^2}n_in_j\,d\sigma_{S^2}=(4\pi/3)\delta_{ij}$, and for every $a\in\mathbb R^3$, $\int_{S^2}(n\cdot a)^2\,d\sigma_{S^2}=\frac{4\pi}{3}|a|^2$ and $\int_{S^2}|n\times a|^2\,d\sigma_{S^2}=\frac{8\pi}{3}|a|^2$ ([[lem-em-sphere-zonal-moments]]).

[F6] Actual-source theorem: under the hypotheses of [[pthm-em-dipole-radiation]] (jointly $C^\infty$ conserved sources vanishing outside $\overline B_a(0)\times[\tau_0,\tau_1]$, $u\in[\tau_0,\tau_1]$), for $n\in S^2$, $r\ge2a$, $|E_{\rm act}(rn,u+r/c)-\frac{\mu_0}{4\pi r}n\times(n\times p_{\rm act}''(u))|\le\frac{\Gamma_E}{r^2}+\frac{\mu_0D(u)}{4\pi r}$ and $|B_{\rm act}(rn,u+r/c)-\frac{n\times E_{\rm act}(rn,u+r/c)}{c}|\le\frac{\Gamma_B+\Gamma_E/c}{r^2}$, and the sharper bound $|B_{\rm act}(rn,u+r/c)-\frac{n\times E_{\rm lead}(n,u,r)}{c}|\le\frac{\Gamma_B}{r^2}$ with $E_{\rm lead}=\frac{\mu_0}{4\pi r}n\times(n\times V_{\rm act})$; the constants $\Gamma_E,\Gamma_B$ depend only on $a,c,\mu_0$ and the source suprema and the theorem assumes $\mathrm{AC}_\omega$ ([[pthm-em-dipole-radiation]], [[def-countable-choice]]).

[F7] Window construction toolbox: smooth compactly supported cutoffs and localized bumps exist with the properties used below ([[lem-test-function-cutoffs-and-euclidean-localization]], [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]]); integration by parts holds on a bounding rectangle ([[thm-integration-by-parts]], [[thm-riemann-fubini-on-product-rectangles]]), and the Riemann-Lebesgue comparison identifies the Lebesgue and Riemann integrals of the continuous integrands used there ([[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]]); the first fundamental theorem gives the derivative of an integral over a moving endpoint ([[thm-ftc-first-part]]), and a continuous function on an interval with zero derivative is constant ([[cor-zero-derivative-implies-constant]]). Rectangles, cubes and their volumes are those of [[def-multidimensional-rectangle-and-volume]]; continuous real functions on nondegenerate closed rectangles are Riemann integrable ([[thm-continuous-on-a-rectangle-is-riemann-integrable]]). The integral is monotone ([[thm-monotonicity-of-the-integral]]), so a nonnegative continuous cutoff equal to $1$ near a nonempty cube has a strictly positive finite integral; dividing by that integral normalizes the spatial bump.

## Proof

**Proof technique:** direct; compute the model flux pointwise from the double cross product, evaluate its period average with the period-average lemma, divide by the incident flux, integrate the pattern against the sphere moments for the total, and obtain the actual-source fidelity bounds by adding the dipole theorem's errors to the moment mismatch through the norm inequalities of the cross product.

1.1 [Model flux along the observation direction] Fix $n\in S^2$ and $r>0$. By [F1], $B_{\rm d}=n\times E_{\rm d}/c$ and $n\cdot E_{\rm d}=0$, since $n\times(n\times p_0)$ is orthogonal to $n$; hence with the vector identity $E_{\rm d}\times(n\times E_{\rm d})=n|E_{\rm d}|^2-E_{\rm d}(n\cdot E_{\rm d})$ of [F4], $S_{\rm d}\cdot n=\frac1{\mu_0}(E_{\rm d}\times B_{\rm d})\cdot n=\frac1{\mu_0c}(E_{\rm d}\times(n\times E_{\rm d}))\cdot n=\frac{|E_{\rm d}|^2}{\mu_0c}$, because $n\cdot n=1$. [given, F1, F4, algebra]

1.2 [The model field is the leading field of the harmonic waveform] For $u=t-r/c$ one has $e^{i(kr-\omega t)}=e^{-i\omega u}$; since $p_{\rm h}''(u)=\operatorname{Re}(-\omega^2p_0e^{-i\omega u})$ by [F1] of the harmonic lemma as recorded in [[def-em-ideal-harmonic-dipole-model]], and $n\times(n\times\cdot)$ is real-linear by [F4], $E_{\rm d}(rn,u+r/c)=\frac{\mu_0}{4\pi r}n\times(n\times p_{\rm h}''(u))$ and $B_{\rm d}(rn,u+r/c)=\frac1c n\times E_{\rm d}(rn,u+r/c)=-\frac{\mu_0}{4\pi cr}n\times p_{\rm h}''(u)$, the last identity by the double-cross computation of [F4]. [given, F1, F4, algebra]

2.1 [Period average and the averaged radial power] At fixed $x=rn$ the amplitude $w=w(x)$ of [F1] is independent of $t$, and $E_{\rm d}(rn,t)=\operatorname{Re}(we^{-i\omega t})$; by [F3] with $a=d=w$, $\langle|E_{\rm d}|^2\rangle=\frac12|w|^2$. Evaluating $|w|^2$ with [F4], $|w|^2=\bigl(\frac{\mu_0\omega^2}{4\pi r}\bigr)^2|n\times(n\times p_0)|^2=\frac{\mu_0^2\omega^4}{16\pi^2r^2}|n\times p_0|^2$, because $|n\times(n\times p_0)|=|n\times p_0|$; therefore $r^2\langle S_{\rm d}\cdot n\rangle=\frac{r^2}{\mu_0c}\langle|E_{\rm d}|^2\rangle=\frac{\mu_0\omega^4}{32\pi^2c}|n\times p_0|^2$, independent of $r$. [step 1.1, F1, F3, F4, algebra]

2.2 [Electric and magnetic fidelity bounds] Let $p_{\rm act}$ and $D,\Gamma_E,\Gamma_B$ be the actual-source data of [F6]. Subtracting the two leading fields, $E_{\rm act}(rn,u+r/c)-E_{\rm d}(rn,u+r/c)=\bigl[E_{\rm act}-\frac{\mu_0}{4\pi r}n\times(n\times p_{\rm act}'')\bigr]+\frac{\mu_0}{4\pi r}n\times\bigl(n\times(p_{\rm act}''-p_{\rm h}'')\bigr)$, so taking norms and using $|n\times(n\times w)|\le|w|$ of [F4] and $|p_{\rm act}''-p_{\rm h}''|=M(u)$, the first bound of [F6] gives $|E_{\rm act}-E_{\rm d}|\le\frac{\Gamma_E}{r^2}+\frac{\mu_0D(u)}{4\pi r}+\frac{\mu_0M(u)}{4\pi r}=H(u,r)$, uniformly in $n$ at fixed $u$. For the magnetic field, $|B_{\rm act}-B_{\rm d}|\le|B_{\rm act}-\frac1c n\times E_{\rm act}|+\frac1c|n\times(E_{\rm act}-E_{\rm d})|\le\frac{\Gamma_B+\Gamma_E/c}{r^2}+\frac{H(u,r)}{c}$ by the second bound of [F6], [F4] and the electric bound just proved. For the sharper direct estimate, [F6] gives $|B_{\rm act}-\frac1c n\times E_{\rm lead}(V_{\rm act})|\le\frac{\Gamma_B}{r^2}$ with $E_{\rm lead}=\frac{\mu_0}{4\pi r}n\times(n\times V_{\rm act})$, and by the double-cross computation of [F4] applied to $V_{\rm act}$ and $p_{\rm h}''$, $\frac1c n\times E_{\rm lead}(V_{\rm act})-B_{\rm d}=-\frac{\mu_0}{4\pi cr}n\times(V_{\rm act}-p_{\rm h}'')$; hence $|B_{\rm act}-B_{\rm d}|\le\frac{\Gamma_B}{r^2}+\frac{\mu_0(D(u)+M(u))}{4\pi cr}$ by the triangle inequality and $|V_{\rm act}-p_{\rm h}''|\le D+M$ from the replacement bound of [F6]. When $M\equiv0$ on the window the bounds reduce to $H=\frac{\Gamma_E}{r^2}+\frac{\mu_0D}{4\pi r}\le\frac{\Gamma_E}{r^2}+\frac{\mu_0D}{2\pi r}$, and neither $M\equiv0$ nor $D\equiv0$ is automatic. [step 1.2, F4, F6, algebra]

3.1 [Independence of the averaging start] For any real $s$, define $G(s):=\int_s^{s+T}|E_{\rm d}(rn,t)|^2dt$. By [F7] the first fundamental theorem gives $G'(s)=|E_{\rm d}(rn,s+T)|^2-|E_{\rm d}(rn,s)|^2=0$, because the exponential encoding of [F1] and the addition law give $e^{-i\omega(t+T)}=e^{-i\omega t}e^{-2\pi i}=e^{-i\omega t}$, so $t\mapsto E_{\rm d}(rn,t)$ is $T$-periodic; hence $G$ is constant by the zero-derivative corollary of [F7] and the mean $\frac1T\int_s^{s+T}|E_{\rm d}|^2=\frac1T\int_0^T|E_{\rm d}|^2$ is independent of the start, so the cross-section ratio of step 2.1 is as well. [step 2.1, F1, F7, algebra]

3.2 [Matched compact-window realization] Let the window be a compact interval $W$ in the source-time line and let $a_0,b_0\in\mathbb R^3$. Choose a real $C^\infty$ cutoff $\eta$ in time, equal to $1$ on a neighbourhood of $W$, supported in a compact interval $(t_0,t_1)$ strictly containing $W$, as supplied by [F7], and set $p_\eta:=\eta\,(p_{\rm h}+a_0+b_0u)$. Choose a nonempty closed cube $Q\subset B_a$ and a cutoff $\chi\in C_c^\infty(B_a)$ with $0\le\chi\le1$ and $\chi=1$ near $Q$, by [F7]. On a bounding rectangle, Fubini and integral monotonicity give $0<\operatorname{vol}(Q)\le C:=\int\chi<\infty$; set $\sigma:=\chi/C$, which is nonnegative, smooth, supported in $B_a$ and has $\int\sigma=1$ and set $\rho(y,u):=-p_\eta(u)\cdot\nabla\sigma(y)$, $J(y,u):=p_\eta'(u)\sigma(y)$; both are $C^\infty$ and vanish outside $\overline B_a(0)\times[t_0,t_1]$, and $\partial_u\rho+\operatorname{div}J=-p_\eta'\cdot\nabla\sigma+p_\eta'\cdot\nabla\sigma=0$, so the conservation equation holds. Integrating by parts on a rectangle containing $B_a$ and using Fubini as in [F7], $\int_{B_a}\rho(y,u)\,dy=-p_\eta(u)\cdot\int_{B_a}\nabla\sigma=0$, so the total charge vanishes, and $\int_{B_a}y_i\rho(y,u)\,dy=-\sum_jp_{\eta,j}(u)\int_{B_a}y_i\partial_j\sigma(y)\,dy=p_{\eta,i}(u)$ because $\int_{B_a}y_i\partial_j\sigma=-\delta_{ij}\int_{B_a}\sigma=-\delta_{ij}$ by the same integration by parts; hence the actual moment of the source is $p_{\rm act}=p_\eta$. On $W$ one has $\eta\equiv1$, so $p_{\rm act}''=p_{\rm h}''$ there and the mismatch $M$ vanishes on the window; applying the fidelity bounds of step 2.2 to this source preserves every finite-radius and source-variation error term $D,\Gamma_E,\Gamma_B$ computed from it, and outside the window the moment is tapered, so no eternal harmonic moment is asserted. [step 2.2, F6, F7, algebra]

4.1 [Angular pattern] Dividing the averaged radial power of step 2.1 by $I_{\rm inc}=\frac{|e|^2}{2\mu_0c}$ of [F2] gives $\frac{d\sigma}{d\Omega}(n)=\frac{\mu_0^2\omega^4|n\times p_0|^2}{16\pi^2|e|^2}$, and substituting $\mu_0^2=\frac1{\varepsilon_0^2c^4}$ from [[def-em-si-conventions]] gives the displayed second form $\frac{\omega^4|n\times p_0|^2}{16\pi^2\varepsilon_0^2c^4|e|^2}$; with step 3.1 this is clause (a). [step 2.1, step 3.1, F2, algebra]

5.1 [Total cross section] Write $p_0=u+iv$ with $u,v\in\mathbb R^3$; by [F4], $|n\times p_0|^2=|n\times u|^2+|n\times v|^2$ for every $n$, so integrating the pattern of step 4.1 over $S^2$ and using $\int_{S^2}|n\times a|^2d\sigma_{S^2}=\frac{8\pi}{3}|a|^2$ of [F5] for the real vectors $u$ and $v$ gives $\int_{S^2}|n\times p_0|^2d\sigma_{S^2}=\frac{8\pi}{3}(|u|^2+|v|^2)=\frac{8\pi}{3}|p_0|^2$; hence $\sigma=\frac{\mu_0^2\omega^4}{16\pi^2|e|^2}\cdot\frac{8\pi}{3}|p_0|^2=\frac{\mu_0^2\omega^4|p_0|^2}{6\pi|e|^2}$, and the $\varepsilon_0$ form follows from $\mu_0^2=\frac1{\varepsilon_0^2c^4}$. For the scalar branch $p_0=\alpha e$, [F4] gives $|n\times p_0|^2=|\alpha|^2|n\times e|^2=|\alpha|^2|e|^2|n\times\hat e|^2$ and $|p_0|^2=|\alpha|^2|e|^2$, so both displayed substitutions hold; this is clause (b). [step 4.1, F4, F5, algebra]

6.1 [Scope and choice accounting] Clause (d) is the exact scope: the cross sections are conditional predictions of the adopted model, $p_0$ is prescribed data rather than a derived response, and no measured, material, multipole, self-force or finite-size claim is made; the $p_0=0$ case gives zero model fields and zero cross sections while the nonzero $I_{\rm inc}$ still normalizes the ratios. The only choice principle used is the Countable Choice carried by the actual-source theorem and the sphere-moment interface of [F5], both invoked in the finite-window and integration steps; the period averages, the double-cross algebra, the division by the incident flux and the integration of the pattern use only finite sums and the explicit suppliers [F3], [F4], so no further choice is made. [step 4.1, step 5.1, step 2.2, step 3.2, given] ∎

## Remarks

- The incident intensity used is the framework's own $I_{\rm inc}=\varepsilon_0c|e|^2/2$ from [[pthm-em-wave-energy-average]](b); no source's printed flux normalisation is used, and the two displayed $\varepsilon_0$ and $\mu_0$ forms of the cross sections are related by $\varepsilon_0\mu_0c^2=1$.
- The fidelity clause compares the model with actual compact smooth sources through the explicit $D,\Gamma$ bounds plus the moment mismatch $M$; it is not a claim that an actual scatterer's measured cross section equals the model value, and the matched-window branch only shows that the mismatch term is genuinely removable for a realized source class.

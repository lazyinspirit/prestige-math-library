---
id: pthm-emx-paraxial-error
kind: physics-theorem
title: Paraxial phase and longitudinal-field bounds
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 2
deps:
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-countable-choice
  - def-em-complex-plane-wave
  - def-directional-and-partial-derivatives
  - def-em-si-conventions
  - def-emx-angular-spectrum
  - def-euclidean-inner-product
  - lem-of-square-monotone
  - lem-emx-paraxial-phase-multiplier-bound
  - post-em-vacuum-maxwell
  - thm-chain-rule-for-total-derivatives
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-plancherel
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
dependency_roles:
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  def-countable-choice: mathematical-premise
  def-em-complex-plane-wave: formulation-prerequisite
  def-directional-and-partial-derivatives: mathematical-premise
  def-em-si-conventions: formulation-prerequisite
  def-emx-angular-spectrum: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  lem-of-square-monotone: mathematical-premise
  lem-emx-paraxial-phase-multiplier-bound: mathematical-premise
  post-em-vacuum-maxwell: physical-assumption
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  thm-plancherel: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
proof_strategy: direct
physical_scope: >-
  Conditional result for the ideal band-limited scalar angular-spectrum model
  and smooth source-free monochromatic vacuum plane-wave modes in the same fixed
  inertial chart and SI convention. It bounds the scalar Helmholtz phase
  approximation and the longitudinal electric amplitude only; it does not say
  that finite-aperture data have the required band limit, that the scalar model
  is exact Maxwell theory, or that a finite sample or measurement obeys the
  bound. No empirical conclusion or angular-momentum decomposition is asserted.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Konijnenberg, Adam and Urbach, BSc Optics, §6.3 Angular Spectrum Method"
      url: "https://phys.libretexts.org/Bookshelves/Optics/BSc_Optics_%28Konijnenberg_Adam_and_Urbach%29/06%3A_Scalar_diffraction_optics/6.04%3A_Angular_Spectrum_Method"
      locator: "Complete §6.3, especially the propagating-wave multiplier and the final vector-transversality remark; the uniform $L^2$ error bound is proved locally."
    - title: "Niklas Beisert, Elektrodynamik, ETH Zürich 2024 FS lecture notes"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "§11.1 'Fourier-Raum', equations (11.5)–(11.10), PDF pp. 121–122: source-free Maxwell mode constraints and amplitude relations."
    - title: "Alexander Cerjan and Charles Cerjan, Orbital angular momentum of Laguerre–Gaussian beams beyond the paraxial approximation, JOSA A 28 (2011)"
      url: "https://alexcerjan.com/documents/papers/cerjan_JOSA_2011.pdf"
      locator: "§2 equation (8), §4 equations (22), (29), and (37), PDF pp. 2254–2257: exact angular-spectrum phase and longitudinal vector-field components; this item proves a separate uniform cone estimate."
verification:
  precheck: pending
---

## Statement

Let $k_0>0$, $0<\delta<1$, and $z\in\mathbb R$. For every
$u_0\in L^2(\mathbb R^2;\mathbb C)$ whose Fourier transform is supported, up
to null sets, in
$D_\delta:=\{\boldsymbol\xi:|2\pi\boldsymbol\xi|\le\delta k_0\}$,

$$\left\|u_{\mathrm{exact}}(z)-u_{\mathrm{par}}(z)\right\|_{L^2(\mathbb R^2)} \le \frac{|z|k_0\delta^4}{8(1-\delta^2)^{3/2}}\left\|u_0\right\|_{L^2(\mathbb R^2)},$$

where the propagated fields are exactly those of the angular-spectrum
Definition. For a source-free monochromatic vacuum plane-wave mode with
$\mathbf q:=2\pi\boldsymbol\xi$, $|\mathbf q|\le\delta k_0$,
$k_z:=\sqrt{k_0^2-|\mathbf q|^2}$, and complex electric amplitude
$\mathbf e=(\mathbf e_\perp,e_z)$, use the complex-bilinear convention
$\mathbf q\cdot\mathbf e_\perp:=q_xe_x+q_ye_y$ with no conjugation,

$$e_z=-\frac{\mathbf q\cdot\mathbf e_\perp}{k_z},\qquad |e_z|\le\frac{\delta}{\sqrt{1-\delta^2}}|\mathbf e_\perp|.$$

## Statement references

[[def-emx-angular-spectrum]]

[[lem-emx-paraxial-phase-multiplier-bound]]

[[thm-plancherel]]

[[def-countable-choice]]

[[def-em-complex-plane-wave]]

[[post-em-vacuum-maxwell]]

[[def-complex-conjugate-real-imaginary-part-and-modulus]]

[[def-euclidean-inner-product]]

[[lem-of-square-monotone]]

[[def-em-si-conventions]]

## Facts & Assumptions

**Given:** $k_0>0$, $0<\delta<1$, $z\in\mathbb R$, scalar data $u_0$ supported
in the angular cone, and an exact source-free monochromatic vacuum plane-wave
mode at $|\mathbf q|\le\delta k_0$.

[F1] The exact and paraxial fields are the $L^2$ Fourier multipliers
$e^{izk_z(\boldsymbol\xi)}$ and
$e^{ik_0z}e^{-iz|2\pi\boldsymbol\xi|^2/(2k_0)}$ on the support disk; the
$\mathcal F_2$ convention is $e^{-2\pi i x\cdot\xi}$. [[def-emx-angular-spectrum]]

[F2] Under countable choice, $\mathcal F_2$ is unitary on complex $L^2$ and
preserves its norm. [[thm-plancherel]] [[def-countable-choice]]

[F3] For $0\le s\le\delta^2$, the difference between phases
$zk_0\sqrt{1-s}$ and $zk_0(1-s/2)$ has multiplier modulus at most
$|z|k_0s^2/[8(1-\delta^2)^{3/2}]$. [[lem-emx-paraxial-phase-multiplier-bound]]

[F4] A real plane wave is
$E(\mathbf x,t)=\operatorname{Re}(\mathbf e e^{i(\mathbf K\cdot\mathbf x-\omega t)})$;
the exponential is differentiable and its phase derivative follows the chain
rule. [[def-em-complex-plane-wave]] [[thm-complex-exponential-is-entire-with-derivative-itself]] [[thm-chain-rule-for-total-derivatives]] [[def-directional-and-partial-derivatives]]

[A1] In the smooth source-free vacuum branch, the adopted Maxwell equations
include $\operatorname{div}E=0$. [[post-em-vacuum-maxwell]]

[F5] For real $\theta$, $e^{i\theta}=\cos\theta+i\sin\theta$ and
$e^{-i\pi/2}=-i$. [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]

[F6] Complex modulus is the Euclidean modulus of real and imaginary parts, and
the real transverse Euclidean norm is induced by the dot product; extend a real
dot product bilinearly when its second argument is complex. Order of squares
reflects order for nonnegative real numbers. [[def-complex-conjugate-real-imaginary-part-and-modulus]] [[def-euclidean-inner-product]] [[lem-of-square-monotone]]

[F7] In the fixed SI chart, $z$ is measured in metres, $k_0=\omega/c$ in
$\mathrm{m}^{-1}$, and $\delta$ is dimensionless. [[def-emx-angular-spectrum]] [[def-em-si-conventions]]

## Proof

1.1 On the Fourier support put $s:=|2\pi\boldsymbol\xi|^2/k_0^2$. Then
$0\le s\le\delta^2$, $k_z=k_0\sqrt{1-s}$, and the paraxial axial phase is
$k_0(1-s/2)$. [given, F1, algebra]

1.2 By [F3], the difference of the two Fourier multipliers has modulus at
most $C:=|z|k_0\delta^4/[8(1-\delta^2)^{3/2}]$ throughout the support.
Unitarity [F2] therefore gives
$\|u_{\mathrm{exact}}(z)-u_{\mathrm{par}}(z)\|_2^2
=\int |\widehat u_0(\boldsymbol\xi)|^2
|e^{izk_z}-e^{ik_0z-iz|2\pi\boldsymbol\xi|^2/(2k_0)}|^2\,d^2\boldsymbol\xi
\le C^2\|u_0\|_2^2$; taking nonnegative square roots proves the scalar bound.
[step 1.1, F1, F2, F3, algebra]

2.1 Write $\phi(\mathbf x,t):=\mathbf K\cdot\mathbf x-\omega t$. For each
spatial coordinate $x_j$, the chain rule and $\exp'=\exp$ in [F4] give
$\partial_{x_j}E_j=\operatorname{Re}(iK_je_j e^{i\phi})$: indeed
$\partial_{x_j}\phi=K_j$, and the real-part map commutes with this real
derivative. Summing over $j=1,2,3$ and using additivity of real parts yields
$\operatorname{div}E=\operatorname{Re}(i(\mathbf K\cdot\mathbf e)e^{i\phi})$.
By [A1] this is zero for every $(\mathbf x,t)$. Put
$S:=\mathbf K\cdot\mathbf e$. At $\mathbf x=0,t=0$, the expression is
$\operatorname{Re}(iS)=-\operatorname{Im}S$, so $\operatorname{Im}S=0$. At
$\mathbf x=0,t=\pi/(2\omega)$, [F5] gives $e^{i\phi}=-i$ and the expression
is $\operatorname{Re}(S)$, so $\operatorname{Re}S=0$. Thus $S=0$, that is,
$\mathbf q\cdot\mathbf e_\perp+k_ze_z=0$. [given, F4, F5, A1, algebra]

2.2 Since $k_z\ge k_0\sqrt{1-\delta^2}>0$, step 2.1 gives
$|e_z|=|\mathbf q\cdot\mathbf e_\perp|/k_z$. The identity
$(|\mathbf q|^2|\mathbf e_\perp|^2-|\mathbf q\cdot\mathbf e_\perp|^2)
=|q_xe_y-q_ye_x|^2\ge0$ implies
$|\mathbf q\cdot\mathbf e_\perp|\le|\mathbf q||\mathbf e_\perp|$; using
$|\mathbf q|\le\delta k_0$ yields the displayed longitudinal bound.
[step 2.1, F6, algebra]

3.1 The scalar error prefactor $|z|k_0\delta^4/[8(1-\delta^2)^{3/2}]$ and
the longitudinal prefactor $\delta/\sqrt{1-\delta^2}$ are dimensionless by
[F7]; hence the two bounds have the same units as their respective field
amplitudes. [F7, algebra] ∎

## Remarks

The scalar bound is conditional on the stated spectral support and its
longitudinal scale $|z|k_0\delta^4$. It does not claim a bound for arbitrary
aperture data or for exact vector Maxwell errors.

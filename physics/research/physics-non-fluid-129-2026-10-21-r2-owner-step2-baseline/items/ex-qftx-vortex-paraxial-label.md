---
id: ex-qftx-vortex-paraxial-label
kind: example
title: A finite-energy vortex packet and its paraxial labels
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-qftx-paraxial-cone
  - def-qftx-photon-helicity-bundle
  - lem-euclidean-chart-measure-agrees-with-polar-surface-measure
  - lem-qftx-paraxial-vortex-packet-existence
  - prop-qftx-photon-fock-angular-lift
  - prop-qftx-paraxial-spin-error
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-qftx-paraxial-cone: mathematical-premise
  def-qftx-photon-helicity-bundle: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
  lem-qftx-paraxial-vortex-packet-existence: mathematical-premise
  prop-qftx-photon-fock-angular-lift: mathematical-premise
  prop-qftx-paraxial-spin-error: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Konstantin Y. Bliokh, Miguel A. Alonso, Elena A. Ostrovskaya, and Andrea Aiello, Angular Momenta and Spin-Orbit Interaction of Nonparaxial Light in Free Space"
      url: https://arxiv.org/pdf/1006.3876
      locator: "Full 8-page PDF retrieved; inspected §IV Eq. 24 uses an ideal conical Bessel spectrum, and Eqs. 25–26 give its spin/orbital/total labels. The local example replaces it with a finite Hilbert-space packet."
    - title: "A. Bekshaev, M. Soskin, and M. Vasnetsov, Paraxial Light Beams with Angular Momentum"
      url: https://arxiv.org/pdf/0801.2309
      locator: "Full 87-page PDF retrieved; inspected §§2–3, PDF pp. 6–10, for paraxial vortex modes and the distinction between classical beam energy flow and this one-photon Hilbert model."
    - title: "David Tong, Quantum Field Theory, Chapter 6"
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: "Full author-hosted Chapter 6 HTML retrieved; §6.2.1 Eqs. 6.511–6.523 read in full; other sections not harvested."
verification:
  precheck: pass
---

## Example

Fix $\sigma\in\{+1,-1\}$, $\ell\in\mathbb Z$, $0<\kappa_-<\kappa_+<\infty$, and $0<\theta_1<\theta_2<\theta_{\max}<\pi/2$. Use the finite-bandwidth vortex packet $f_{\sigma,\ell}$ constructed in the preceding lemma, with $d\nu=d^3\mathbf k/(2|\mathbf k|)$, north-gauge factor $e^{i\ell\varphi}e_\sigma^N$, and normalization $\|f_{\sigma,\ell}\|_\nu=1$. In the specified free radial model with phase $V_t f(\mathbf k)=e^{-it|\mathbf k|}f(\mathbf k)$, take $c=1$ and define the one-photon energy functional by $E_0(f)=\hbar\int_M|\mathbf k||f(\mathbf k)|^2d\nu(\mathbf k)$. Then $E_0(f_{\sigma,\ell})\le\hbar\kappa_+<\infty$, $J_zf_{\sigma,\ell}=(\ell+\sigma)\hbar f_{\sigma,\ell}$, and
$$\langle f_{\sigma,\ell},S'_zf_{\sigma,\ell}\rangle_\nu=\hbar\sigma\int_M\cos\theta|f_{\sigma,\ell}|^2d\nu,$$
$$|\langle S'_z\rangle-\hbar\sigma|\le\hbar(1-\cos\theta_2)\le\frac{\hbar\theta_2^2}{2},\qquad \langle L'_z\rangle=(\ell+\sigma)\hbar-\langle S'_z\rangle.$$
The support has nonzero radial bandwidth and angular width. An ideal exact cone or exact radial shell is not a nonzero normalizable vector of $\mathcal H_T^\nu$.

## Example references

[[def-qftx-paraxial-cone]]

[[lem-qftx-paraxial-vortex-packet-existence]]

[[prop-qftx-photon-fock-angular-lift]]

[[prop-qftx-paraxial-spin-error]]

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice, $\hbar>0$, $c=1$, the transverse photon Hilbert space and its measure, the north-patch gauge, and the specified radial phase model.

[A1] Assume the Axiom of Choice and Countable Choice for the rotation and transverse-space suppliers. [[def-axiom-of-choice]] [[def-countable-choice]]

[F1] The preceding lemma constructs $f_{\sigma,\ell}\in\mathcal D$ with norm one, helicity $\sigma$, radial support in $(\kappa_-,\kappa_+)$, angular support in $(\theta_1,\theta_2)$, and $J_z$ eigenvalue $(\ell+\sigma)\hbar$. [[lem-qftx-paraxial-vortex-packet-existence]]

[F2] For a normalized helicity packet, $\langle S'_z\rangle_\nu=\hbar\sigma\int_M\cos\theta|f|^2d\nu$ and the paraxial-cone spin and orbital bounds hold. [[prop-qftx-paraxial-spin-error]]

[F3] The free radial phase is $V_t f(\mathbf k)=e^{-it|\mathbf k|}f(\mathbf k)$; with $|\mathbf k|$ in inverse-length units, $t$ has length units in the $c=1$ convention. [[prop-qftx-photon-fock-angular-lift]]

[F4] $d\nu=(r/2)\,dr\,d\Omega$, the measure is sigma-finite, and radial annuli have finite measure. [[def-qftx-photon-helicity-bundle]]

[F5] On the spherical chart, $d\Omega=\sin\theta\,d\theta\,d\varphi$. [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]

[F6] Fubini's theorem applies to integrable functions on sigma-finite product measures. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

## Verification

**Given:** [A1], [F1]–[F6], the interval bounds in the Example, and the definition of $E_0$ there.

1.1 By [F1], $f_{\sigma,\ell}$ is a unit vector and vanishes unless $|\mathbf k|<\kappa_+$. Since the integrand is nonnegative, $E_0(f_{\sigma,\ell})=\hbar\int|\mathbf k||f_{\sigma,\ell}|^2d\nu\le\hbar\kappa_+\int|f_{\sigma,\ell}|^2d\nu=\hbar\kappa_+<\infty$. The radial multiplier is the phase generator in [F3]; with $|\mathbf k|$ in inverse-length units and $c=1$, this functional has energy units. [A1, F1, F3, F4, given, algebra]

1.2 Fix $0<\theta_0<\pi$ and $m\ge2$. On the radial annulus $1/m\le r\le m$, the polar formula in [F4] and the chart formula in [F5] give
$$\nu(\{1/m\le r\le m,\ \theta=\theta_0\})=\frac12\int_{1/m}^{m}r\,dr\int_0^{2\pi}\int_{\{\theta_0\}}\sin\theta\,d\theta\,d\varphi=0,$$
because the singleton $\{\theta_0\}$ has one-dimensional Lebesgue measure zero; [F6] justifies the iterated integral on this finite-measure annulus. The whole exact cone is the countable union of these null annular intersections, hence is $\nu$-null. Also, for any fixed $r_0>0$, the polar formula gives $\nu(\{|\mathbf k|=r_0\})=\frac12\int_{\{r_0\}}r\,dr\int_{S^2}d\Omega=0$, since the radial singleton has one-dimensional Lebesgue measure zero and the sphere measure is finite. Thus an exact monochromatic shell is null as well. An $L^2(M,\nu;\mathbb C^3)$ vector supported on either null set is zero almost everywhere and cannot be normalized. The construction uses genuine finite radial and angular widths rather than a distributional delta-cone mode. [A1, F4, F5, F6, given, algebra]

2.1 The same supplier gives $J_zf_{\sigma,\ell}=(\ell+\sigma)\hbar f_{\sigma,\ell}$ and helicity $\sigma$. Substitution into [F2] yields the stated exact projected-spin expectation and, by the orbital identity there, $\langle L'_z\rangle=(\ell+\sigma)\hbar-\langle S'_z\rangle$. The normalization and finite radial support are as established in step 1.1. [A1, F1, F2, step 1.1, given, algebra]

3.1 The angular support has $0\le\theta\le\theta_2$. The cosine monotonicity and quadratic bound proved in the preceding proposition give $|\langle S'_z\rangle-\hbar\sigma|\le\hbar(1-\cos\theta_2)\le\hbar\theta_2^2/2$. The packet is normalized, so this is a model expectation bound, not an empirical statement. [A1, F1, F2, step 2.1, given] ∎

## Remarks

The energy functional and operator expectations are part of the stated mathematical free-photon model. No detector, apparatus, OAM measurement, or empirical outcome is asserted; extracting an experimental spectrum would require a specified mode analyzer and calibration.

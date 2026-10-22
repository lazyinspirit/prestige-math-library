---
id: cex-emx-paraxial-distance-failure
kind: counterexample
title: A small angular cone can accumulate order-one phase error
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps:
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - def-countable-choice
  - def-complex-exponential
  - def-emx-angular-spectrum
  - def-multidimensional-rectangle-and-volume
  - lem-complex-conjugation-and-modulus-laws
  - lem-emx-paraxial-phase-multiplier-bound
  - pthm-emx-paraxial-error
  - thm-complex-exponential-addition-and-real-extension
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-plancherel
dependency_roles:
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  def-countable-choice: mathematical-premise
  def-complex-exponential: mathematical-premise
  def-emx-angular-spectrum: formulation-prerequisite
  def-multidimensional-rectangle-and-volume: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  lem-emx-paraxial-phase-multiplier-bound: mathematical-premise
  pthm-emx-paraxial-error: physical-result
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  thm-plancherel: mathematical-premise
proof_strategy: direct
physical_scope: >-
  Counterexample inside the ideal band-limited scalar angular-spectrum model
  in a fixed inertial chart and SI units. Its spectra are square-integrable
  plane data and are not asserted to be outputs of a compact finite aperture.
  It is a conditional model calculation, not an observed optical result.
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Konijnenberg, Adam and Urbach, BSc Optics, §6.3 Angular Spectrum Method"
      url: "https://phys.libretexts.org/Bookshelves/Optics/BSc_Optics_%28Konijnenberg_Adam_and_Urbach%29/06%3A_Scalar_diffraction_optics/6.04%3A_Angular_Spectrum_Method"
      locator: "§6.3: exact square-root propagating multiplier; this counterexample constructs its own supported $L^2$ spectra."
    - title: "Alexander Cerjan and Charles Cerjan, Orbital angular momentum of Laguerre–Gaussian beams beyond the paraxial approximation, JOSA A 28 (2011)"
      url: "https://alexcerjan.com/documents/papers/cerjan_JOSA_2011.pdf"
      locator: "§2 equation (8) and discussion of the positive propagation root and excluded evanescent components, PDF p. 2254; the annular sequence and phase limit here are proved locally."
    - title: "Niklas Beisert, Elektrodynamik, ETH Zürich 2024 FS lecture notes"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "§11.1 Fourier-space solution, equations (11.5)–(11.10), PDF pp. 121–122; no vector angular-momentum claim is made in this scalar counterexample."
generation:
  role: counterexample
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement refuted

For every sequence $(\delta_n)_{n\ge1}$ with $\delta_n\in(0,1)$ and
$\delta_n\to0$, every fixed $k_0>0$, every nonzero scalar input
$u_{0,n}\in L^2(\mathbb R^2;\mathbb C)$
whose Fourier support lies in $|2\pi\boldsymbol\xi|\le\delta_n k_0$, and every
sequence of forward distances $z_n>0$ satisfying
$z_nk_0\delta_n^4=8\pi$, the relative exact-to-paraxial error tends to zero:

$$\frac{\|u_{\mathrm{exact},n}(z_n)-u_{\mathrm{par},n}(z_n)\|_2} {\|u_{0,n}\|_2}\longrightarrow0.$$

## Statement references

[[def-emx-angular-spectrum]]

[[pthm-emx-paraxial-error]]

[[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]

[[def-complex-exponential]]

[[lem-complex-conjugation-and-modulus-laws]]

## Facts & Assumptions

**Given:** The scalar propagators and Fourier convention of the angular-spectrum
Definition; countable choice as assumed by its $L^2$ Plancherel supplier.

[F1] The exact and paraxial Fourier multipliers are respectively
$e^{izk_0\sqrt{1-s}}$ and $e^{izk_0(1-s/2)}$, where
$s=|2\pi\boldsymbol\xi|^2/k_0^2$. [[def-emx-angular-spectrum]]

[F2] The exact remainder is
$R(s)=s^2/[4(1-s/2+\sqrt{1-s})]$, and for real phases $a,b$ the local lemma
gives $|e^{ia}-e^{ib}|\le|a-b|$.
[[lem-emx-paraxial-phase-multiplier-bound]]

[F3] The Fourier transform $\mathcal F_2$ is unitary on complex $L^2$ under
countable choice. [[thm-plancherel]] [[def-countable-choice]]

[F4] Under countable choice, each nondegenerate box has Lebesgue measure equal
to the product of its side lengths. [[thm-lebesgue-measure-of-a-box-of-every-kind]] [[def-multidimensional-rectangle-and-volume]] [[def-countable-choice]]

[F5] The complex exponential addition law holds; its power-series definition
gives $e^0=1$. The Cartesian/modulus corollary states $|e^{it}|=e^0$ for real
$t$, so $|e^{it}|=1$; it also gives Euler's identity $e^{i\pi}=-1$.
Consequently, for
$\Delta\in\mathbb R$,
$$|e^{-i\Delta}-1|=|e^{i\Delta}-1|.$$
Indeed, the addition law gives $e^{-i\Delta}e^{i\Delta}=e^0=1$, so
$e^{-i\Delta}-1=e^{-i\Delta}(1-e^{i\Delta})$; modulus multiplicativity and
$|e^{-i\Delta}|=1$ give the identity. For any real $b$, the addition law also gives
$e^{i(b-\Delta)}-e^{ib}=e^{ib}(e^{-i\Delta}-1)$, so the modulus of this
phase-multiplier difference is $|e^{i\Delta}-1|$.
[[thm-complex-exponential-addition-and-real-extension]] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] [[lem-complex-conjugation-and-modulus-laws]]

[F6] The A-page estimate is proportional to the scaled distance
$|z|k_0\delta^4$; it makes no convergence claim when that quantity is fixed and
nonzero. [[pthm-emx-paraxial-error]]

[F7] Complex modulus is subadditive and multiplicative. For $u,v\in\mathbb C$,
$|u|\le|u-v|+|v|$ and $|v|\le|v-u|+|u|=|u-v|+|u|$, so
$\bigl||u|-|v|\bigr|\le|u-v|$; the equality $|v-u|=|u-v|$ follows from
$v-u=-(u-v)$, multiplicativity, and $|-1|=1$ from the modulus definition.
[[lem-complex-conjugation-and-modulus-laws]]

## Counterexample

**Given:** Fix $k_0>0$ and choose one constant spectral norm
$A_\star>0$ (in volts for scalar fields measured in $\mathrm{V\,m^{-1}}$).

1.1 Set $\delta_n:=1/(n+2)$ and $R_n:=\delta_n k_0/(2\pi)$. Let $\Xi_n:=[R_n(1-\delta_n/4),R_n(1-\delta_n/8)] \times[0,R_n\delta_n/8]$. Its side lengths are both $R_n\delta_n/8>0$, so [F4] gives $0<|\Xi_n|=R_n^2\delta_n^2/64<\infty$. Define $\widehat u_{0,n}:=A_\star|\Xi_n|^{-1/2}\mathbf 1_{\Xi_n}$; then $\|\widehat u_{0,n}\|_2=A_\star$. For $\mathbf q=2\pi\boldsymbol\xi$ with $\boldsymbol\xi\in\Xi_n$, $q_x\ge\delta_n k_0(1-\delta_n/4)>\delta_n k_0(1-\delta_n)$ and $|\mathbf q|^2\le\delta_n^2k_0^2[(1-\delta_n/8)^2+(\delta_n/8)^2] \le\delta_n^2k_0^2$; hence this nonzero spectrum lies in the angular cone and concentrates near its outer radius. [given, F4, algebra]

2.1 Let $u_{0,n}:=\mathcal F_2^{-1}\widehat u_{0,n}$ and $z_n:=8\pi/(k_0\delta_n^4)>0$. This fixes the scale in [F6] at $8\pi$. By [F3], $\|u_{0,n}\|_2=A_\star$, so each input is nonzero and admissible for the refuted statement. [step 1.1, F3, F6, algebra]

2.2 For $\boldsymbol\xi\in\Xi_n$, put $s_n:=|2\pi\boldsymbol\xi|^2/k_0^2$. Step 1.1 gives $(1-\delta_n/4)^2\le s_n/\delta_n^2\le1$, so this ratio tends to $1$ uniformly on $\Xi_n$. Also $0\le s_n\le\delta_n^2$, and $|1-\sqrt{1-s_n}|=s_n/(1+\sqrt{1-s_n})\le s_n$, so $1-s_n/2+\sqrt{1-s_n}\to2$ uniformly. By [F2], the relative phase difference is $\Delta_n:=z_nk_0R(s_n) =2\pi(s_n/\delta_n^2)^2/(1-s_n/2+\sqrt{1-s_n})$, which tends uniformly to $\pi$. [step 1.1, F2, algebra]

3.1 The actual exact-minus-paraxial phase is $-\Delta_n$, so [F5] makes the modulus of the multiplier difference $|e^{i\Delta_n}-1|$. Put $u=e^{i\Delta_n}-1$ and $v=e^{i\pi}-1$. By [F7], $\bigl||u|-|v|\bigr|\le|u-v|$; [F5] gives $|v|=2$, and [F2] gives $|u-v|=|e^{i\Delta_n}-e^{i\pi}|\le|\Delta_n-\pi|\to0$ uniformly on $\Xi_n$. Thus the multiplier-difference modulus tends uniformly to $2$. [step 2.2, F2, F5, F7, algebra]

4.1 By [F3], the squared relative $L^2$ error is the average of $|e^{i\Delta_n}-1|^2$ over $\Xi_n$ with respect to normalized Lebesgue measure. Since step 3.1 gives uniform convergence of that modulus to $2$, the averages of its square tend to $4$; the relative errors are nonnegative, so they tend to $2$, not $0$. This contradicts the Statement refuted and proves the claimed counterexample. [step 1.1, step 2.1, step 3.1, F1, F3, algebra] ∎


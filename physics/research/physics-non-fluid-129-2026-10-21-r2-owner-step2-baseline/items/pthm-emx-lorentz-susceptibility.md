---
id: pthm-emx-lorentz-susceptibility
kind: physics-theorem
title: "Analytic susceptibility and dispersion restrictions"
status: draft
origin: pipeline
domain: physics
dependency_level: 1
proof_strategy: direct
deps:
  - post-emx-lorentz-medium
  - pthm-em-causal-dispersive-response
  - def-countable-choice
  - def-dependent-choice
  - def-complex-exponential
  - thm-algebra-of-derivatives
  - thm-derivative-of-exponential
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-sine-and-cosine-derivatives
  - thm-of-square-roots
  - thm-integration-by-parts
  - thm-differentiation-under-the-integral-sign
  - thm-exponential-beats-every-polynomial
dependency_roles:
  post-emx-lorentz-medium: physical-assumption
  pthm-em-causal-dispersive-response: physical-result
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-complex-exponential: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-of-square-roots: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  thm-differentiation-under-the-integral-sign: mathematical-premise
  thm-exponential-beats-every-polynomial: mathematical-premise
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Conditional frequency response of the finite homogeneous Lorentz oscillator model in its material rest frame. Upper-half-plane analyticity holds for all declared nonnegative damping rates; the unsubtracted Hilbert-transform relation is asserted only for strictly positive damping, under the exact integrable causal-response hypotheses. Undamped real poles have no pointwise response or pointwise dispersion formula. No universal group-velocity bound or empirical material claim is asserted."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (236-page complete text)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§7.5.1, printed pp. 193–194, equations (7.29)–(7.30): the forced damped oscillator and complex frequency-dependent polarizability; §7.5.4, pp. 200–204: causal response and the additional high-frequency decay needed for the unsubtracted Kramers–Kronig relation."
    - title: "MIT OpenCourseWare 6.007, Electromagnetic Energy: From Motors to Lasers, Lecture 22: Interaction of atoms and EM waves (Lorentz oscillator)"
      url: "https://ocw.mit.edu/courses/6-007-electromagnetic-energy-from-motors-to-lasers-spring-2011/6434fa7aae0266ed6d40109d70c724f9_MIT6_007S11_lec22.pdf"
      locator: "Slides 9–15 (PDF pp. 9–15): damped oscillator equation, harmonic response and the Lorentz-model dielectric function. The local theorem separately proves analyticity, passivity and the conditional Hilbert relation."
    - title: "Niklas Beisert, Elektrodynamik, ETH Zurich 2024 FS complete lecture script"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "§12.1, printed p. 12.2 (PDF p. 143), equations (12.9)–(12.10): causal polarization response and frequency-dependent permittivity. Its printed universal group-velocity bound is explicitly outside this theorem."
---

## Statement

Use the finite Lorentz oscillator closure in its homogeneous material rest frame. Let $N\ge1$ be finite, with $\varepsilon_\infty>0$ in F m$^{-1}$, $a_\ell>0$ in F m$^{-1}$ s$^{-2}$, $\omega_\ell>0$ in s$^{-1}$ and $\gamma_\ell\ge0$ in s$^{-1}$ as in that model. Assume Countable Choice; for the strictly damped integrable-kernel dispersion clause also assume Dependent Choice, as required by the causal-response supplier. For the time convention $e^{-i\omega t}$, let $z$ denote complex angular frequency in s$^{-1}$ and define the absolute oscillator susceptibility, with units F m$^{-1}$, by

$$\chi_{\mathrm{abs}}(z):=\sum_{\ell=1}^{N}\frac{a_\ell}{\omega_\ell^2-z^2-i\gamma_\ell z},\qquad \varepsilon(z):=\varepsilon_\infty+\chi_{\mathrm{abs}}(z).$$

The dimensionless transfer function in the causal-response theorem is $\chi_{\mathrm{norm}}(z):=\chi_{\mathrm{abs}}(z)/\varepsilon_0$, so that it has the theorem's convention $P=\varepsilon_0\chi_{\mathrm{norm}}E$ for harmonic histories.

The function $\chi_{\mathrm{abs}}$ is analytic for $\operatorname{Im}z>0$ for every $\gamma_\ell\ge0$. For real angular frequency $\omega>0$ in s$^{-1}$ away from undamped poles,

$$\operatorname{Im}\varepsilon(\omega)=\sum_{\ell=1}^{N}\frac{a_\ell\gamma_\ell\omega}{(\omega_\ell^2-\omega^2)^2+\gamma_\ell^2\omega^2}\ge0.$$

When every $\gamma_\ell>0$, each causal impulse-response kernel is exponentially decaying, satisfies the integrable-kernel hypotheses of the causal-response theorem, and $\varepsilon-\varepsilon_\infty$ obeys its unsubtracted Hilbert-transform relations. When $\gamma_\ell=0$, that oscillator's poles lie at $z=\pm\omega_\ell$ on the real boundary; the transfer function has no pointwise value at those poles, and no pointwise dispersion formula there is asserted. The theorem makes no universal group-velocity bound.

## Statement references

[[post-emx-lorentz-medium]]

[[pthm-em-causal-dispersive-response]]

[[def-countable-choice]]

[[def-dependent-choice]]

## Facts & Assumptions

**Given:** The finite homogeneous Lorentz oscillator model with real parameters $\varepsilon_\infty,a_\ell,\omega_\ell>0$, $\gamma_\ell\ge0$, real electric fields, and the temporal Fourier convention $e^{-i\omega t}$. For the Hilbert-transform conclusion, also assume the Countable and Dependent Choice hypotheses carried by the integrable branch of the causal-response supplier.

[A1] At each material point, the polarization solves $P_{\ell,tt}+\gamma_\ell P_{\ell,t}+\omega_\ell^2P_\ell=a_\ell E$ with initial oscillator state specified; the medium is homogeneous and spatially local, and the time-domain model is adopted, not derived ([[post-emx-lorentz-medium]]).

[L1] For the declared memory branch, an integrable real causal kernel $K$ gives normalized response $P(t)=\varepsilon_0\int_0^\infty K(s)E(t-s)\,ds$; when $K$ is locally absolutely continuous with $K,K'\in L^1$ and $sK\in L^1$, the transfer $\chi(z)=\int_0^\infty K(s)e^{izs}ds$ is holomorphic on $\operatorname{Im}z>0$, has the stated real-boundary regularity, and obeys the unsubtracted principal-value dispersion relations ([[pthm-em-causal-dispersive-response]], clauses (a)–(b)).

[F1] Countable Choice is assumed for the smooth comparison route, and Dependent Choice is assumed in the integrable-kernel branch used for the causal convolution and dispersion result ([[def-countable-choice]], [[def-dependent-choice]], [[pthm-em-causal-dispersive-response]]).

[F2] The real exponential has derivative $\exp'=\exp$, the complex exponential is defined by its series and is entire with the same derivative, sine and cosine have their usual derivatives, products satisfy the product rule, and integration by parts applies componentwise on finite intervals to the oscillator kernels and $C^2$ histories used below ([[def-complex-exponential]], [[thm-derivative-of-exponential]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-sine-and-cosine-derivatives]], [[thm-algebra-of-derivatives]], [[thm-integration-by-parts]]).

[F3] Every nonnegative real has its unique nonnegative square root; for $x\to+\infty$ and $\lambda>0$, $x/\exp(\lambda x)\to0$ ([[thm-of-square-roots]], [[thm-exponential-beats-every-polynomial]]).

[F4] If an integrand is differentiable in a parameter and its derivative has a common integrable majorant, differentiation passes through the integral ([[thm-differentiation-under-the-integral-sign]]).

## Proof
**Proof technique:** solve the harmonic oscillator algebraically, locate its characteristic roots, construct its retarded Green kernel under positive damping, and apply the exact integrable causal-response theorem only in that branch.

1.1 For a real history $E(t)=\operatorname{Re}(e e^{-i\omega t})$, insert $P_\ell(t)=\operatorname{Re}(p_\ell e^{-i\omega t})$ into [A1]. By the derivative of the complex exponential and the chain rule, one and two time derivatives multiply the complex amplitude by $-i\omega$ and $-\omega^2$, respectively. Hence $(\omega_\ell^2-\omega^2-i\gamma_\ell\omega)p_\ell=a_\ell e$, so the absolute susceptibility is exactly the finite sum in the Statement wherever its denominators do not vanish. [given, A1, F2, algebra]

1.2 The roots of $\omega_\ell^2-z^2-i\gamma_\ell z=0$ are $z=-i\gamma_\ell/2\pm\sqrt{\omega_\ell^2-\gamma_\ell^2/4}$. If $0\le\gamma_\ell<2\omega_\ell$, the square root is real and both roots have imaginary part $-\gamma_\ell/2\le0$; at $\gamma_\ell=0$ they are the real values $\pm\omega_\ell$. If $\gamma_\ell=2\omega_\ell$, the repeated root is $-i\omega_\ell$. If $\gamma_\ell>2\omega_\ell$, write $\beta=\sqrt{\gamma_\ell^2/4-\omega_\ell^2}$; then $0<\beta<\gamma_\ell/2$ and the roots $-i(\gamma_\ell/2\mp\beta)$ both have strictly negative imaginary part. Hence no denominator vanishes in the open upper half-plane, proving analyticity there; the undamped real poles are exactly the stated boundary exceptions. [given, A1, F3, algebra]

1.3 Fix one oscillator, denote its parameters by $a,\omega_0,\gamma$, assume $\gamma>0$, and set $g(t)=0$ for $t<0$. For $t\ge0$, define the retarded kernel by $g(t)=e^{-\gamma t/2}\sin(\alpha t)/\alpha$ if $0<\gamma<2\omega_0$, $g(t)=te^{-\omega_0t}$ if $\gamma=2\omega_0$, and $g(t)=\bigl(e^{-(\gamma/2-\beta)t}-e^{-(\gamma/2+\beta)t}\bigr)/(2\beta)$ if $\gamma>2\omega_0$, where $\alpha=\sqrt{\omega_0^2-\gamma^2/4}$ and $\beta=\sqrt{\gamma^2/4-\omega_0^2}$ in their respective cases. Differentiating with [F2] gives $g(0)=0$, $g'(0+)=1$ and $g''+\gamma g'+\omega_0^2g=0$ for $t>0$. The underdamped $g,g'$ decay at rate $\gamma/2$; the critical formula and derivative are bounded by $Ce^{-\omega_0t/2}$; the overdamped formula and derivative are bounded by $Ce^{-(\gamma/2-\beta)t}$, with $\gamma/2-\beta>0$. Hence $g,g'\in L^1(0,\infty)$. For each positive decay rate $\lambda$, $te^{-\lambda t}$ is integrable by integration by parts on $[0,T]$ and [F3] as $T\to\infty$, so also $tg\in L^1(0,\infty)$. [given, A1, F2, F3, algebra]

2.1 For each real vector history $E\in C^2(\mathbb R;\mathbb R^3)$ with $E,E',E''$ bounded, set $P(t)=a\int_0^\infty g(s)E(t-s)\,ds$. Apply [F4] componentwise: the derivative integrands are measurable and bounded, uniformly in $t$, by $\|E'\|_\infty|g|$ and $\|E''\|_\infty|g|$, which are integrable by step 1.3. Thus $P_{tt}+\gamma P_t+\omega_0^2P=a\int_0^\infty[g(s)E''(t-s)+\gamma g(s)E'(t-s)+\omega_0^2g(s)E(t-s)]\,ds$. [F4, step 1.3, algebra]

2.2 For real $\omega>0$, put $A_\ell=\omega_\ell^2-\omega^2$ and $B_\ell=\gamma_\ell\omega$. Away from an undamped pole, $A_\ell-iB_\ell\ne0$ and $\frac{a_\ell}{A_\ell-iB_\ell}=\frac{a_\ell(A_\ell+iB_\ell)}{A_\ell^2+B_\ell^2}$, so $\operatorname{Im}(a_\ell/(A_\ell-iB_\ell))=a_\ell\gamma_\ell\omega/(A_\ell^2+\gamma_\ell^2\omega^2)\ge0$. Since $\varepsilon_\infty$ is real, summing these expressions proves the displayed nonnegative imaginary part of $\varepsilon$. At $\gamma_\ell=0$ and $\omega=\omega_\ell$ the denominator vanishes, so this pointwise computation and pointwise formula do not apply. [given, A1, step 1.1, algebra]

3.1 Integrating by parts twice on $[0,T]$ and taking $T\to\infty$ is valid because $g,g'$ decay by step 1.3, $g''=-\gamma g'-\omega_0^2g\in L^1$, and $E,E'$ are bounded. The boundary values $g(0)=0$, $g'(0+)=1$ give $\int_0^\infty g(s)E''(t-s)\,ds=E(t)+\int_0^\infty g''(s)E(t-s)\,ds$ and $\int_0^\infty g(s)E'(t-s)\,ds=\int_0^\infty g'(s)E(t-s)\,ds$. Substitution in step 2.1 cancels the integral by $g''+\gamma g'+\omega_0^2g=0$, leaving $P_{tt}+\gamma P_t+\omega_0^2P=aE$. [step 1.3, step 2.1, F2, algebra]

4.1 The normalized kernel $K=(a/\varepsilon_0)g$ is real, causal and locally absolutely continuous; step 1.3 gives $K,K'\in L^1$ and $sK\in L^1$. For $\operatorname{Im}z>0$, exponential decay makes the boundary terms vanish in integration by parts, so $\int_0^\infty g'(s)e^{izs}ds=-izG(z)$ and $\int_0^\infty g''(s)e^{izs}ds=-1-z^2G(z)$, where $G(z)=\int_0^\infty g(s)e^{izs}ds$. The Green equation gives $(\omega_0^2-z^2-i\gamma z)G(z)=1$, hence the normalized transfer is $(a/\varepsilon_0)/(\omega_0^2-z^2-i\gamma z)$. Summing the finite kernels gives $\chi_{\mathrm{norm}}=\chi_{\mathrm{abs}}/\varepsilon_0$; with [F1], this kernel satisfies every hypothesis of [L1], which yields causality, upper-half-plane analyticity and the unsubtracted Hilbert relations for the strictly damped branch. Multiplication by $\varepsilon_0$ gives the same relations for $\varepsilon-\varepsilon_\infty=\chi_{\mathrm{abs}}$. [A1, step 1.3, step 3.1, F1, L1, algebra]

5.1 Steps 1.1–4.1 establish the rational susceptibility, its upper-half-plane analyticity, the nonnegative loss for every real positive frequency where the pointwise response exists, and the unsubtracted dispersion relation exactly in the strictly damped integrable-kernel branch. The undamped poles and their pointwise exclusions remain as stated; no assertion about a universal group-velocity bound follows from these calculations. [step 1.1, step 1.2, step 2.2, step 4.1] ∎

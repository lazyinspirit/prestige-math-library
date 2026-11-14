---
title: Thermal bath spectral density and frequency signs
status: draft
research_item: pthm-qec-distinguishability-thermal-spectral-density
dependency_level: 11
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 13, Eq. (S3.14)
      statement: The article gives the thermal spectrum as an integral of the two
        frequency-sign Dirac masses with prefactor 8π/(3c³), and also gives its
        expression using the Heaviside function.
      hypotheses: The article's thermal photon-bath conventions and preceding time
        correlator.
      reading_limits: Attribution of the original article claim, not an independent
        proof. The frozen extracted article formulation and completed
        time-correlator supplier were consulted; no independent article-defect
        judgment is asserted here.
---

PDF p. 13: ` Eq. (S3.14) `

## Prerequisites

- [pthm-qec-distinguishability-thermal-time-correlator](item-pthm-qec-distinguishability-thermal-time-correlator)
- [def-qec-distinguishability-bath-correlator](item-def-qec-distinguishability-bath-correlator)
- [def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)
- [math:thm-fourier-inversion-on-schwartz-space](https://alphabetamath.cc/item/thm-fourier-inversion-on-schwartz-space)
- [math:lem-schwartz-functions-and-all-derivatives-are-integrable](https://alphabetamath.cc/item/lem-schwartz-functions-and-all-derivatives-are-integrable)
- [math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)
- [math:thm-indefinite-integral-of-a-nonnegative-function-is-a-measure](https://alphabetamath.cc/item/thm-indefinite-integral-of-a-nonnegative-function-is-a-measure)
- [math:cor-c-one-change-of-variables-for-l-one-functions](https://alphabetamath.cc/item/cor-c-one-change-of-variables-for-l-one-functions)
- [math:thm-tonelli-theorem-for-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-tonelli-theorem-for-sigma-finite-product-spaces)
- [math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity](https://alphabetamath.cc/item/cor-complex-exponential-cartesian-form-modulus-and-eulers-identity)
- [math:thm-sine-and-cosine-derivatives](https://alphabetamath.cc/item/thm-sine-and-cosine-derivatives)
- [math:lem-complex-integration-by-parts-on-intervals-and-decaying-lines](https://alphabetamath.cc/item/lem-complex-integration-by-parts-on-intervals-and-decaying-lines)
- [math:thm-quarter-turn-values-and-shift-formulas](https://alphabetamath.cc/item/thm-quarter-turn-values-and-shift-formulas)


## Statement

Assume the Axiom of Choice, Countable Choice and Dependent Choice, and all hypotheses and normalization conventions of [pthm-qec-distinguishability-thermal-time-correlator](item-pthm-qec-distinguishability-thermal-time-correlator). In particular, $c,\beta,\gamma>0$, $\kappa$ is Borel, and $M=\int_0^\infty |\kappa(\omega)|^2\omega^2[2(e^{\beta\omega}-1)^{-1}+1]d\omega<\infty$. Put $N(\omega)=(e^{\beta\omega}-1)^{-1}$ and $A=8\pi/(3\gamma c^3)$.

Use the positive-exponential spectral convention of [def-qec-distinguishability-bath-correlator](item-def-qec-distinguishability-bath-correlator), extended distributionally as follows: for a Schwartz test function $\varphi$ on $\mathbb R$, pair the spectrum with $\varphi$ by $(2\pi)^{-1}\int_{\mathbb R}\mathcal J_{\alpha\alpha}(t)\int_{\mathbb R}\varphi(x)e^{ixt}dx\,dt$. A Schwartz function is a smooth function whose derivatives, multiplied by arbitrary powers of its argument, are bounded. Then this spectrum is the finite measure

$$\mathcal J_{\alpha\alpha}(dx)=A\int_0^\infty |\kappa(\omega)|^2\omega^2\{N(\omega)\delta_{-\omega}(dx)+[N(\omega)+1]\delta_{\omega}(dx)\}\,d\omega.$$

Here $\delta_a$ is unit point mass at $a$. Its Lebesgue density may be represented, for $x\ne0$, by

$$J(x)=A x^2\left[|\kappa(-x)|^2N(-x)\Theta(-x)+|\kappa(x)|^2(N(x)+1)\Theta(x)\right],$$

where a term is evaluated only when its Heaviside factor is one and $\Theta(x)=1$ for $x>0$, $\Theta(x)=0$ for $x<0$. The value at zero is arbitrary. This representative describes the measure almost everywhere; no pointwise Fourier-integral identity or value at zero is asserted without further regularity. The correlation need not be integrable in time.

## Facts & Assumptions

**Given:** The model, regulator limit, choice assumptions and integrable radial envelope in the Statement.

[F1] The completed time-correlator supplier gives $\mathcal J_{\alpha\alpha}(t)=A\int_0^\infty |\kappa(\omega)|^2\omega^2[N(\omega)e^{i\omega t}+(N(\omega)+1)e^{-i\omega t}]d\omega$ under these hypotheses. [pthm-qec-distinguishability-thermal-time-correlator](item-pthm-qec-distinguishability-thermal-time-correlator)

[F2] The ordinary bath spectral convention has the positive exponential and factor $(2\pi)^{-1}$; it requires time integrability. [def-qec-distinguishability-bath-correlator](item-def-qec-distinguishability-bath-correlator) [def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)

[F3] Schwartz Fourier inversion holds with the supplier's $2\pi$ convention, and Schwartz functions and their derivatives are integrable. [math:thm-fourier-inversion-on-schwartz-space](https://alphabetamath.cc/item/thm-fourier-inversion-on-schwartz-space) [math:lem-schwartz-functions-and-all-derivatives-are-integrable](https://alphabetamath.cc/item/lem-schwartz-functions-and-all-derivatives-are-integrable)

[F4] Tonelli's theorem evaluates the nonnegative product integral, and Fubini's theorem permits interchange for an absolutely integrable function on a sigma-finite product. [math:thm-tonelli-theorem-for-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-tonelli-theorem-for-sigma-finite-product-spaces) [math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces)

[F5] On any measure space, a nonnegative measurable function $f$ defines a measure by $E\mapsto\int_E f$. [math:thm-indefinite-integral-of-a-nonnegative-function-is-a-measure](https://alphabetamath.cc/item/thm-indefinite-integral-of-a-nonnegative-function-is-a-measure)

[F6] Under Countable Choice, a $C^1$ diffeomorphism $T:U\to V$ between open subsets of Euclidean space satisfies $\int_V f=\int_U(f\circ T)|\det DT|$ for $f\in L^1(V)$. [Change of variables for integrable functions](https://alphabetamath.cc/item/cor-c-one-change-of-variables-for-l-one-functions)

[F7] For real $u$, $e^{iu}=\cos u+i\sin u$, and $(\sin u)'=\cos u$, $(\cos u)'=-\sin u$. Under Countable Choice the Lebesgue fundamental theorem gives $\int_a^b v'=v(b)-v(a)$ for every complex $C^1$ function $v$ on $[a,b]$. [math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity](https://alphabetamath.cc/item/cor-complex-exponential-cartesian-form-modulus-and-eulers-identity) [math:thm-sine-and-cosine-derivatives](https://alphabetamath.cc/item/thm-sine-and-cosine-derivatives) [math:lem-complex-integration-by-parts-on-intervals-and-decaying-lines](https://alphabetamath.cc/item/lem-complex-integration-by-parts-on-intervals-and-decaying-lines)

[F8] The quarter-turn values include $\cos0=1$, $\cos\pi=-1$, and $\cos(u+\pi)=-\cos u$; hence $\cos(k\pi)=(-1)^k$ for each nonnegative integer $k$. [math:thm-sine-and-cosine-derivatives](https://alphabetamath.cc/item/thm-sine-and-cosine-derivatives) [math:thm-quarter-turn-values-and-shift-formulas](https://alphabetamath.cc/item/thm-quarter-turn-values-and-shift-formulas)

[A1] The three stated choice assumptions are retained from the completed correlator and Fourier suppliers. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)

## Proof

**Goal:** Establish the distributional frequency-sign formula and its almost-everywhere density, with the stated normalization.

1.1 On $(0,\infty)$ put $w_-(\omega)=|\kappa(\omega)|^2\omega^2N(\omega)$ and $w_+(\omega)=|\kappa(\omega)|^2\omega^2[N(\omega)+1]$. These are nonnegative Borel functions with $\int_0^\infty(w_-+w_+)=M<\infty$, so each is integrable. Define $J_*(x)=Aw_-(-x)$ for $x<0$, $J_*(x)=Aw_+(x)$ for $x>0$, and $J_*(0)=0$. The reflection $T:(-\infty,0)\to(0,\infty)$, $T(x)=-x$, is a $C^1$ diffeomorphism with $|T'(x)|=1$. Apply [F6] to $w_-$ on these open half-lines to obtain $\int_{-\infty}^0w_-(-x)dx=\int_0^\infty w_-(\omega)d\omega$. Thus $J_*$ is nonnegative Borel and integrable, with integral $AM$. By [F5], $\mu(E)=\int_EJ_*(x)dx$ is a finite measure. For any Borel $E\subseteq\mathbb R$, the function $f_E(\omega)=w_-(\omega)\mathbf1_E(-\omega)$ is Borel and bounded in absolute value by $w_-$, hence is in $L^1(0,\infty)$. Applying the same reflection to $f_E$ gives $\mu(E)=A\int_0^\infty[w_-(\omega)\mathbf1_E(-\omega)+w_+(\omega)\mathbf1_E(\omega)]d\omega$. This is exactly the stated point-mass mixture, now with countable additivity supplied by [F5]. [given, F5, F6, A1, construct, algebra]

1.2 To establish the possible failure of time integrability, fix any $c,\beta,\gamma>0$ and take the real Borel coupling $\kappa(\omega)=\mathbf1_{(0,1)}(\omega)/(\omega\sqrt{2N(\omega)+1})$ for $\omega>0$. Its denominator is strictly positive and finite at every positive frequency. Assign $\kappa(0)=0$ if a value at zero is wanted. Its thermal envelope is exactly $\mathbf1_{(0,1)}$, so $M=1$ and [F1] applies with the supplier's specified regulators and normalization (one may take $d_0=1$ and $\mathcal E=\kappa$). Write $C(t)=\mathcal J_{\alpha\alpha}(t)$ for this coupling. Taking real parts in the absolutely convergent frequency integral of [F1] and using [F7] gives $\operatorname{Re}C(t)=A\int_0^1\cos(\omega t)d\omega=A\sin t/t$ for $t\ne0$, by applying the Lebesgue fundamental theorem to $v(\omega)=\sin(\omega t)/t$ on $[0,1]$. At $t=0$ the same real part is $A$. Thus $|C(t)|\ge A|\sin t|/t$ for $t>0$. [given, F1, F7, A1, construct, algebra]

2.1 Let $\varphi$ be a Schwartz test function and write $h(t)=\int_{\mathbb R}\varphi(x)e^{ixt}dx$. The first integral exists by [F3]. In the Fourier supplier's convention, $\widehat\varphi(\xi)=\int_{\mathbb R}\varphi(x)e^{-2\pi ix\xi}dx$ and $h(t)=\widehat\varphi(-t/(2\pi))$. The absolute-convergence assertion in [F3] implies $\widehat\varphi\in L^1(\mathbb R)$. The map $T:\mathbb R\to\mathbb R$, $T(t)=-t/(2\pi)$, is a $C^1$ diffeomorphism with $|T'|=(2\pi)^{-1}$, so [F6] applied to $|\widehat\varphi|$ gives $\int_{\mathbb R}|h(t)|dt=2\pi\int_{\mathbb R}|\widehat\varphi(\xi)|d\xi<\infty$. After inserting [F1] into the spectral pairing, the absolute value of its double integrand is bounded by $A|h(t)|[w_-(\omega)+w_+(\omega)]$. These are product-measurable functions on the sigma-finite Lebesgue spaces $\mathbb R$ and $(0,\infty)$. Tonelli in [F4] gives the bound $AM\int|h|<\infty$ on the product integral. Fubini in [F4] therefore permits interchange of time and positive frequency, and the stated pairing is finite. [F1, F3, F4, F6, A1, step 1.1, algebra]

3.1 Apply [F6] with the same real-line diffeomorphism to $f(\xi)=\widehat\varphi(\xi)e^{-2\pi i\omega\xi}$ and to $f(\xi)=\widehat\varphi(\xi)e^{2\pi i\omega\xi}$, each integrable because the exponential has modulus one. Fourier inversion [F3] then gives $(2\pi)^{-1}\int_{\mathbb R}h(t)e^{i\omega t}dt=\varphi(-\omega)$ and $(2\pi)^{-1}\int_{\mathbb R}h(t)e^{-i\omega t}dt=\varphi(\omega)$. Thus the spectral pairing equals $A\int_0^\infty[w_-(\omega)\varphi(-\omega)+w_+(\omega)\varphi(\omega)]d\omega$. Apply the half-line reflection in [F6] to $w_-(\omega)\varphi(-\omega)$, which is integrable since a Schwartz function is bounded, to identify this expression with $\int_{\mathbb R}J_*(x)\varphi(x)dx$. Hence the distributional spectrum is the finite measure constructed in step 1.1. The factor $2\pi$ from inversion cancels the convention's $(2\pi)^{-1}$; the factor $\gamma^{-1}$ remains from [F1]. [F1, F2, F3, F6, step 1.1, step 2.1, algebra]

4.1 Expanding $w_-$ and $w_+$ in $J_*$ gives the displayed Heaviside density on the respective open half-lines, with each term evaluated only there. Its value at the Lebesgue-null singleton zero is immaterial; in particular $\mu(\{0\})=0$. This proves the almost-everywhere density assertion while allowing any assigned value at zero. [step 1.1, step 3.1, algebra]

5.1 For each integer $k\ge1$, [F7] and [F8] give $\int_{k\pi}^{(k+1)\pi}|\sin t|dt\ge|\int_{k\pi}^{(k+1)\pi}\sin t\,dt|=|\cos(k\pi)-\cos((k+1)\pi)|=2$. Since $t\le(k+1)\pi$ on that interval, step 1.2 implies $\int_{k\pi}^{(k+1)\pi}|C(t)|dt\ge2A/((k+1)\pi)$. If $C$ belonged to $L^1(\mathbb R)$, then $|C|$ would be measurable with finite integral and [F5] would make $E\mapsto\int_E|C(t)|dt$ a finite measure. The intervals can be made disjoint by omitting endpoints, which have zero Lebesgue integral. For every $m\ge0$, summing over $2^m\le k<2^{m+1}$ gives a lower bound $2^m\,2A/(2^{m+1}\pi)=A/\pi$. Finite additivity and monotonicity therefore bound the integral of $|C|$ over the first $L$ such disjoint blocks below by $LA/\pi$ for every positive integer $L$. Since $A>0$, the full time integral is infinite. This proves the Statement's nonintegrability possibility without altering its distributional spectrum. [F1, F5, F7, F8, A1, step 1.2, algebra] ∎

## Source notes

The original article's Eq. (S3.14) states the same two frequency signs with prefactor $8\pi/(3c^3)$, equivalently $\frac{8\pi}{3c^3}x^2[|\kappa(-x)|^2N(-x)\Theta(-x)+|\kappa(x)|^2(N(x)+1)\Theta(x)]$. In the completed time-correlator supplier, the explicitly retained bath-operator normalization gives the additional factor $\gamma^{-1}$; the article-prefactor expression is therefore the spectrum of $\gamma\mathcal J_{\alpha\alpha}$ in that convention, and agrees with this item when $\gamma=1$. The article citation supplies attribution, not proof of this conditional calculation.

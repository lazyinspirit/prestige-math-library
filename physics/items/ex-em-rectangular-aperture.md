---
id: ex-em-rectangular-aperture
kind: example
title: "Uniform rectangular aperture: the sinc-squared Fraunhofer pattern and its exact zeros and maxima"
status: draft
origin: pipeline
domain: physics
dependency_level: 19
deps: [pthm-em-scalar-aperture-diffraction, post-em-scalar-aperture-model, def-measure-with-density, def-integration-against-a-signed-or-complex-measure, def-multidimensional-rectangle-and-volume, thm-riemann-fubini-on-product-rectangles, thm-continuous-on-a-rectangle-is-riemann-integrable, lem-riemann-lebesgue-comparison-for-distribution-test-integrands, thm-ftc-second-part, thm-sine-and-cosine-derivatives, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-complex-exponential, def-complex-conjugate-real-imaginary-part-and-modulus, thm-algebra-of-derivatives, thm-linearity-of-the-lebesgue-integral-on-l-one, def-euclidean-inner-product, lem-em-period-average, def-countable-choice, def-complex-measure, def-total-variation-of-a-signed-or-complex-measure, thm-continuous-preimages-of-borel-sets-are-borel, thm-sine-cosine-zero-sets-and-fundamental-period, thm-sine-cosine-signs-monotonicity-and-ranges, thm-continuous-implies-integrable, thm-monotonicity-of-the-integral, thm-additivity-over-subintervals, cor-trigonometric-parity-and-pythagorean-identity, thm-chain-rule-for-total-derivatives, prop-simple-integrals-are-bounded-by-total-variation, thm-lebesgue-measure-of-a-box-of-every-kind, thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation]
dependency_roles:
  thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation: mathematical-premise
  pthm-em-scalar-aperture-diffraction: physical-result
  post-em-scalar-aperture-model: physical-assumption
  def-measure-with-density: mathematical-premise
  def-integration-against-a-signed-or-complex-measure: mathematical-premise
  def-multidimensional-rectangle-and-volume: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  lem-riemann-lebesgue-comparison-for-distribution-test-integrands: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  def-complex-exponential: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  lem-em-period-average: mathematical-premise
  def-countable-choice: mathematical-premise
  def-complex-measure: mathematical-premise
  def-total-variation-of-a-signed-or-complex-measure: mathematical-premise
  thm-continuous-preimages-of-borel-sets-are-borel: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  prop-simple-integrals-are-bounded-by-total-variation: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Exact computation in the adopted scalar aperture-diffraction model for a uniform rectangular aperture: the Fraunhofer amplitude $4abA_0\\operatorname{sinc}(ka n_1)\\operatorname{sinc}(kb n_2)$ and the sinc-squared model intensity pattern with its zeros and central maximum, up to the explicit Fraunhofer error of the parent theorem. Excluded: measured diffraction records, absolute radiometric calibration, polarization and vector effects, screen interaction and aperture back-reaction, apparatus models, sampling laws and every empirical or statistical claim."
sources:
  references:
    - title: "N. Beisert, Elektrodynamik, ETH Zurich 2024 FS, section 14 'Wellenoptik'"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "printed pp. 14.1-14.5, eqs. (14.1)-(14.13): Kirchhoff diffraction, Huygens principle, Fraunhofer and Fresnel diffraction"
    - title: "J. Peatross and M. Ware, Physics of Light and Optics (Brigham Young University, author-hosted complete 348-page textbook)"
      url: "https://optics.byu.edu/docs/OpticsBook.pdf"
      locator: "chapter 10 'Diffraction', printed pp. 261-271, sections 10.1-10.4 and Example 10.4; appendix 10.A"
proof_strategy: direct
verification:
  precheck: pass
---

## Example

Assume Countable Choice ($\mathrm{AC}_\omega$) as carried by [[pthm-em-scalar-aperture-diffraction]] and by the Riemann-Lebesgue comparison and Fubini suppliers used in the integral reduction below ([[def-countable-choice]]). Work in the scalar aperture model of [[post-em-scalar-aperture-model]] and [[pthm-em-scalar-aperture-diffraction]], with frequency $\omega>0$, $k=\omega/c$, aperture plane $y_3=0$, model field $u=G_k*\alpha$ and $I(x)=\frac12|u(x)|^2$. Fix lengths $a>0$, $b>0$ in metres and $A_0\in\mathbb C\setminus\{0\}$ in $\mathrm V\,\mathrm m^{-2}$, so that $\alpha$ has the model unit $\mathrm V$; identify the rectangle $R:=[-a,a]\times[-b,b]\subset\mathbb R^2$ with the planar aperture $\{(y_1,y_2,0):(y_1,y_2)\in R\}$, let $\jmath:\mathbb R^2\to\mathbb R^3$ be $\jmath(y_1,y_2)=(y_1,y_2,0)$, and define the **uniform rectangular aperture distribution** as the plane-embedding pushforward

$$\alpha(E):=A_0\,\lambda_2(R\cap\jmath^{-1}(E))\qquad(E\subseteq\mathbb R^3\text{ Borel}).$$

This is a finite complex measure on $\mathbb R^3$, supported on the embedded compact rectangle $S=\jmath(R)$ with $|y|\le a':=\sqrt{a^2+b^2}$ and total variation $\|\alpha\|_{\rm TV}=4ab|A_0|$ ([[def-multidimensional-rectangle-and-volume]], [[def-measure-with-density]], [[def-integration-against-a-signed-or-complex-measure]]). Then: (a) [Fraunhofer amplitude] with $\operatorname{sinc}\xi:=\sin\xi/\xi$ for $\xi\ne0$ and $\operatorname{sinc}0:=1$, the Fraunhofer amplitude factor of [[pthm-em-scalar-aperture-diffraction]](a) is exactly

$$\int e^{-ikn\cdot y}\,d\alpha(y)=4abA_0\operatorname{sinc}(ka\,n_1)\operatorname{sinc}(kb\,n_2)\qquad(n=(n_1,n_2,n_3)\in S^2),$$

an identity for every direction $n$ ([[def-euclidean-inner-product]], [[def-complex-exponential]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-ftc-second-part]], [[thm-sine-and-cosine-derivatives]], [[thm-algebra-of-derivatives]], [[thm-riemann-fubini-on-product-rectangles]], [[thm-continuous-on-a-rectangle-is-riemann-integrable]], [[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]). (b) [Fraunhofer intensity] in the Fraunhofer regime of [[pthm-em-scalar-aperture-diffraction]](a) with aperture radius $a':=\sqrt{a^2+b^2}$, i.e. for $r\ge2a'$, the model intensity is

$$I_{\rm F}(rn)=\frac{a^2b^2|A_0|^2}{2\pi^2r^2}\operatorname{sinc}^2(ka\,n_1)\operatorname{sinc}^2(kb\,n_2)$$

up to the Fraunhofer absolute error of that theorem, transferred to $I$ by its clause (c). The pattern vanishes exactly where $ka\,n_1\in\pi\mathbb Z\setminus\{0\}$ or $kb\,n_2\in\pi\mathbb Z\setminus\{0\}$, and, as a mathematical pattern on all $S^2$, has its global maximum exactly at the two poles $n=(0,0,\pm1)$. The model observes only $x_3>0$; its allowed directions have $n_3>0$, where the central maximum is only $n=(0,0,1)$. (c) [Scope] this is an exact computation inside the adopted ideal scalar model, not a measured diffraction record: no absolute radiometric calibration, polarization content, screen interaction, apparatus model or sampling law is asserted, and the Fraunhofer/Fresnel error bounds of [[pthm-em-scalar-aperture-diffraction]] are inherited rather than re-estimated.

## Facts & Assumptions

**Given:** Countable Choice; the data $a>0$, $b>0$, $A_0\in\mathbb C\setminus\{0\}$, the rectangle $R=[-a,a]\times[-b,b]$, the embedding $\jmath(y_1,y_2)=(y_1,y_2,0)$, the pushforward $\alpha$ of the Example, and the model field $u=G_k*\alpha$, $I=\frac12|u|^2$ of the scalar aperture model.

[F1] Parent model and theorem: the model field and $I=\frac12|u|^2$ are those of [[post-em-scalar-aperture-model]], and [[pthm-em-scalar-aperture-diffraction]] provides, for a finite complex measure supported in $|y|\le a_0$ with $r\ge2a_0$ and all $n\in S^2$, the Fraunhofer estimate $u(rn)=e^{ikr}(4\pi r)^{-1}\int e^{-ikn\cdot y}\,d\alpha(y)+\text{error}$ with $|\text{error}|\le\|\alpha\|_{\rm TV}(\pi r)^{-1}[a_0/r+ka_0^2/r]$, uniformly in direction, together with the intensity-error transfer $\bigl|\frac12|u_{\rm approx}|^2-I\bigr|\le\frac12\delta(|u|+|u_{\rm approx}|)$ whenever $|u_{\rm approx}-u|\le\delta$ and the period-average identity of [[lem-em-period-average]].

[F2] Rectangle, area and density measure: $R$ is a nondegenerate closed rectangle in $\mathbb R^2$ with two-dimensional Lebesgue measure $\lambda_2(R)=4ab$, its embedded image $S=\jmath(R)$ is compact with $|y|\le a'=\sqrt{a^2+b^2}$ and the corners attaining $a'$, by [[def-multidimensional-rectangle-and-volume]] and [[thm-lebesgue-measure-of-a-box-of-every-kind]]. The nonnegative restricted measure $\lambda_2|_R$ has density $\mathbf1_R$ as in [[def-measure-with-density]]; the complex pushforward itself is defined by the displayed formula in the Example and verified in step 1.1.

[F3] Measure-theoretic toolbox: $\jmath$ is continuous, hence the inverse image of every Borel set is Borel; a finite complex measure on the Borel sets is countably additive and its total variation is as in [[def-complex-measure]] and [[def-total-variation-of-a-signed-or-complex-measure]]; the integral against it is defined by [[def-integration-against-a-signed-or-complex-measure]], and for any bounded Borel function $h$ on a finite-variation measure space, $h$ is integrable and $|\int h\,d\alpha|\le\int|h|\,d|\alpha|\le\|h\|_\infty\|\alpha\|_{\rm TV}$ by [[thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation]]; this includes the simple-function bound ([[thm-continuous-preimages-of-borel-sets-are-borel]], [[prop-simple-integrals-are-bounded-by-total-variation]], [[def-countable-choice]]).

[F4] Integral comparison: for a bounded Borel function on a nondegenerate rectangle that is Riemann integrable, the Lebesgue integral exists and agrees with the Riemann integral ([[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]]); a continuous function on a compact rectangle is Riemann integrable ([[thm-continuous-on-a-rectangle-is-riemann-integrable]]); the Riemann double integral factors through iterated one-dimensional integrals when the sections are integrable ([[thm-riemann-fubini-on-product-rectangles]]); and the Lebesgue integral is complex-linear on $L^1$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F5] One-dimensional calculus and the exponential: $e^{i\theta}=\cos\theta+i\sin\theta$, so $e^{-ikn_1y_1}$ decomposes into real and imaginary parts, and the complex exponential is the power-series exponential ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[def-complex-exponential]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]); the chain and algebra of derivatives, the sine and cosine derivatives and the second fundamental theorem give the antiderivative computations below ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[thm-sine-and-cosine-derivatives]], [[thm-ftc-second-part]]); on the aperture $n\cdot y=n_1y_1+n_2y_2$ for the Euclidean inner product ([[def-euclidean-inner-product]]).

[F6] Sinc calculus: the zeros of sine are exactly the integer multiples of $\pi$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]]); $\sin$ is odd, $\sin^2+\cos^2=1$, and cosine is strictly decreasing on $[0,\pi]$ with $\cos0=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-cosine-signs-monotonicity-and-ranges]]); continuous functions on closed intervals are Riemann integrable, the Riemann integral is monotone, and it is additive over subintervals ([[thm-continuous-implies-integrable]], [[thm-monotonicity-of-the-integral]], [[thm-additivity-over-subintervals]]).

## Verification

**Proof technique:** direct.

1.1 [The pushforward is a finite complex measure with the stated support and total variation] For disjoint Borel sets $E_m\subseteq\mathbb R^3$ the inverse images $\jmath^{-1}(E_m)$ are disjoint and Borel by [F3], and countable additivity of $\lambda_2$ gives $\alpha(\bigcup_mE_m)=A_0\sum_m\lambda_2(R\cap\jmath^{-1}(E_m))=\sum_m\alpha(E_m)$, while $\alpha(\varnothing)=0$; hence $\alpha$ is a complex measure, and it is finite because $\lambda_2(R)=4ab$ by [F2]. If $E\cap S=\varnothing$ then $R\cap\jmath^{-1}(E)=\varnothing$, so $\alpha$ is supported in $S$. For every countable Borel partition $\{E_m\}$ of $\mathbb R^3$, the defining values sum to $|A_0|\sum_m\lambda_2(R\cap\jmath^{-1}(E_m))=|A_0|\lambda_2(R)=4ab|A_0|$ by countable additivity and [F2]; taking the supremum over partitions gives $\|\alpha\|_{\rm TV}=4ab|A_0|<+\infty$. [given, F2, F3, algebra]

2.1 [Pairing identity] For a complex simple Borel function $s$, its defining sum gives $\int s\,d\alpha=A_0\int_Rs\circ\jmath\,d\lambda_2$, since each level set pulls back to $R\cap\jmath^{-1}(E)$, by [F3]. For bounded Borel $f$, choose $M>0$ bounding both real coordinates. For each positive integer $N$, partition $[-M,M]$ at $t_j:=-M+2Mj/N$, $0\le j\le N$, into half-open intervals $[t_j,t_{j+1})$ except for the last interval, which includes $M$. On the Borel preimage of the cell with coordinate indices $j,k$, set $s_N:=t_j+it_k$. This gives a finite-range Borel simple function with $\|f-s_N\|_\infty\le2\sqrt2M/N$. By [F3], the error in the left integral is at most $2\sqrt2M\|\alpha\|_{\rm TV}/N$, and the error in the right integral is at most $8ab|A_0|\sqrt2M/N$, using $\lambda_2(R)=4ab$. Passing to the limit in the simple-function identities proves $\int f\,d\alpha=A_0\int_Rf\circ\jmath\,d\lambda_2$. [step 1.1, F2, F3, algebra]

3.1 [Fraunhofer amplitude] Fix $n\in S^2$ and put $f(y):=e^{-ikn\cdot y}$, which is continuous on the compact support; by step 2.1, $\int e^{-ikn\cdot y}\,d\alpha(y)=A_0\int_R e^{-ik(n_1y_1+n_2y_2)}\,d\lambda_2(y_1,y_2)$ because $y=\jmath(y_1,y_2)$ and $n\cdot y=n_1y_1+n_2y_2$ by [F5]. The integrand is continuous on the compact rectangle $R$, hence Riemann integrable, so the Lebesgue integral equals the Riemann double integral by [F4], and the Riemann double integral factors as the product of the one-dimensional integrals $\int_{-a}^ae^{-ikn_1y_1}dy_1$ and $\int_{-b}^be^{-ikn_2y_2}dy_2$ by [F4]. For $n_1\ne0$ the map $y_1\mapsto e^{-ikn_1y_1}/(-ikn_1)$ is an antiderivative with derivative $e^{-ikn_1y_1}$ by the chain, algebra and trigonometric derivative rules of [F5], so the second fundamental theorem gives $\int_{-a}^ae^{-ikn_1y_1}dy_1=(e^{-ikn_1a}-e^{ikn_1a})/(-ikn_1)=2\sin(ka\,n_1)/(kn_1)=2a\operatorname{sinc}(ka\,n_1)$; for $n_1=0$ the integral is $2a=2a\operatorname{sinc}0$ by the separate value of sinc. The second factor is analogous, giving the displayed identity $4abA_0\operatorname{sinc}(ka\,n_1)\operatorname{sinc}(kb\,n_2)$ for every direction $n$. [step 2.1, F4, F5, algebra]

4.1 [Fraunhofer intensity] For $r\ge2a'$ the support bound $|y|\le a'$ of [F2] puts the model in the regime of the Fraunhofer estimate of [F1] with aperture radius $a'$, so $u(rn)=e^{ikr}(4\pi r)^{-1}\cdot4abA_0\operatorname{sinc}(ka\,n_1)\operatorname{sinc}(kb\,n_2)+R(rn)$ with $|R(rn)|\le\|\alpha\|_{\rm TV}(\pi r)^{-1}[a'/r+k(a')^2/r]$ uniformly in direction by step 3.1. Taking moduli, $|u_{\rm F}(rn)|=\dfrac{ab|A_0|}{\pi r}\,|\!\operatorname{sinc}(ka\,n_1)|\,|\!\operatorname{sinc}(kb\,n_2)|$, so $I_{\rm F}(rn)=\frac12|u_{\rm F}(rn)|^2=\dfrac{a^2b^2|A_0|^2}{2\pi^2r^2}\operatorname{sinc}^2(ka\,n_1)\operatorname{sinc}^2(kb\,n_2)$, and the intensity-error transfer of [F1] bounds $\bigl|I(rn)-I_{\rm F}(rn)\bigr|$ by the Fraunhofer field error. [step 3.1, F1, F2, algebra]

5.1 [Zeros of the pattern] By definition of sinc and the zero set of sine in [F6], $\operatorname{sinc}\xi=0$ exactly when $\xi\in\pi\mathbb Z\setminus\{0\}$; since $k,a,b>0$ and the two factors multiply, $I_{\rm F}(rn)=0$ exactly when $ka\,n_1\in\pi\mathbb Z\setminus\{0\}$ or $kb\,n_2\in\pi\mathbb Z\setminus\{0\}$. [step 4.1, F6, algebra]

5.2 [Global maxima] First, $|\sin x|\le|x|$ for every real $x$, with equality exactly at $x=0$: for $x>0$ choose $\delta:=\min\{x/3,\pi/6\}>0$; on $[\delta,2\delta]\subseteq[0,\pi/2]$ the cosine is positive and strictly decreasing, so $|\cos t|=\cos t\le\cos\delta<1$ there, while $|\cos t|\le1$ everywhere; the second fundamental theorem, the integral triangle bound and monotonicity of [F6] give $|\sin x|=\bigl|\int_0^x\cos t\,dt\bigr|\le\int_0^x|\cos t|\,dt\le(x-\delta)+\delta\cos\delta=x-\delta(1-\cos\delta)<x$, and for $x<0$ oddness of sine in [F6] gives $|\sin x|=|\sin(-x)|<|x|$, while $x=0$ gives equality. Hence $|\!\operatorname{sinc}\xi|\le1$ with equality exactly at $\xi=0$; since $k,a,b>0$, the modulus of the product in step 4.1 equals the prefactor exactly when $ka\,n_1=0$ and $kb\,n_2=0$, that is $n_1=n_2=0$, which on $S^2$ means $n=(0,0,\pm1)$; these two poles are therefore exactly the global maxima of the pattern on $S^2$, and the model's half-space $x_3>0$ forces $n_3>0$, leaving only the positive pole. [step 4.1, F2, F6, algebra]

6.1 [Scope and choice accounting] The computation is exact inside the adopted scalar model: by [F1] it inherits the Fraunhofer and Fresnel error bounds rather than re-estimating them, it makes no measured-intensity, apparatus, sampling or calibration claim, and no polarization or screen-interaction content is introduced; only model comparisons of $I$ between observation points are read from it, which is clause (c). The only choice principle used is the Countable Choice carried by the parent theorem and by the Riemann-Lebesgue comparison and Fubini interfaces of [F4]; the remaining steps are explicit finite computations, so no further choice is made. [step 3.1, step 4.1, step 5.2, F1, F3, F4, given] ∎

## Remarks

- The pattern's mathematical maxima on the whole sphere sit at the two poles, but the model field is only defined for $x_3>0$; the observable central maximum is the single direction $n=(0,0,1)$, and the lower pole belongs to the extension of the formula, not to the model's observation region.
- The zeros $ka\,n_1\in\pi\mathbb Z\setminus\{0\}$ or $kb\,n_2\in\pi\mathbb Z\setminus\{0\}$ are exact zeros of the ideal Fraunhofer factor; a finite measurement could not verify exact darkness, and no such empirical claim is made here.

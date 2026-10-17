---
id: cor-emg-regular-counterpoised-sphere
kind: corollary
title: "Globally regular sphere, proper integrals and dilute bounds"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
proof_strategy: direct
deps:
  - thm-monotonicity-of-the-integral
  - def-emg-explicit-power-regimes
  - lem-emg-positive-square-root-smoothness
  - def-countable-choice
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-nonnegative-lebesgue-integral
  - def-integrable-real-and-complex-functions-and-their-integrals
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - cor-continuous-functions-are-borel-measurable
  - thm-borel-sets-are-lebesgue-measurable
  - def-polar-surface-measure-on-the-unit-sphere
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - thm-real-power-continuity-and-derivatives
  - thm-sine-and-cosine-derivatives
  - thm-quarter-turn-values-and-shift-formulas
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - cor-trigonometric-parity-and-pythagorean-identity
  - thm-euclidean-inverse-function-theorem
  - thm-intermediate-value
  - thm-continuous-implies-integrable
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-newton-leibniz-with-interior-derivative
  - thm-emg-selected-matter-energy-conditions
  - lem-emg-conformastatic-curvature
  - thm-emg-smooth-counterpoised-dust
dependency_roles:
  thm-monotonicity-of-the-integral: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
  lem-emg-positive-square-root-smoothness: mathematical-premise
  def-countable-choice: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  def-nonnegative-lebesgue-integral: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  cor-continuous-functions-are-borel-measurable: mathematical-premise
  thm-borel-sets-are-lebesgue-measurable: mathematical-premise
  def-polar-surface-measure-on-the-unit-sphere: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates: mathematical-premise
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
  thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
  thm-intermediate-value: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-emg-selected-matter-energy-conditions: mathematical-premise
  lem-emg-conformastatic-curvature: mathematical-premise
  thm-emg-smooth-counterpoised-dust: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3, equations (3.90), (3.92), (3.95), printed pp. 81–82 (PDF pp. 88–89)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Ricci, scalar and Einstein contractions; the radial matter integrals and all bounds are proved locally."
    - title: "David Tong, General Relativity, full author-hosted lecture notes, Michaelmas 2019, §3.4.1, PDF pp. 137–139"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "Independent Ricci and Einstein contractions; the exact spherical family and integrals are proved locally."
    - title: "Reinhard Meinel and Moritz Hütten, On the black hole limit of electrically counterpoised dust configurations, arXiv:1105.3807v3 (2011), §2, equations (1)–(7), PDF pp. 2–3"
      url: "https://arxiv.org/pdf/1105.3807"
      locator: "The ECD metric and model context; no source measurement, black-hole limit, stability conclusion, or exact proper-integral value is used."
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$ as stated in [[def-countable-choice]]. Let $a,b>0$ have length units, let $s\in\{-1,+1\}$, and on all of $\mathbb R^3$ set
$$r^2=(x^1)^2+(x^2)^2+(x^3)^2,\qquad \Psi(x):=\sqrt{r^2+b^2}>0,\qquad H(x):=1+\frac a{\Psi(x)}.$$
Use the constants and exact formal coupled family of [[thm-emg-smooth-counterpoised-dust]]. The function $H$ is smooth, positive, and satisfies
$$\Delta H=-\frac{3ab^2}{(r^2+b^2)^{5/2}}<0,\qquad \rho(x)=\frac{3c^2ab^2}{4\pi G_NH(x)^3(r^2+b^2)^{5/2}}.$$
On the slice $x^0=\text{constant}$ the induced spatial metric is $h=H^2\delta_{ij}dx^i dx^j$. Define the candidate proper mass and signed charge by
$$M_{\mathrm{prop}}:=\int_{\mathbb R^3}\rho H^3\,d\lambda_3,\qquad Q_{\mathrm{prop}}:=\int_{\mathbb R^3}\sigma H^3\,d\lambda_3.$$
The proof establishes that the first is a finite nonnegative Lebesgue integral and the second is a finite signed Lebesgue integral. They equal
$$M_{\mathrm{prop}}=\frac{c^2a}{G_N},\qquad Q_{\mathrm{prop}}=sQ_s\frac{c^2a}{G_N}.$$
The scalar curvature is $S_g=-2\Delta H/H^3>0$, the total stress satisfies WEC, NEC, SEC, and DEC, and the smooth matter density is positive at every point and has infinite spatial extent. For $a=\delta b$ with $0<\delta\le1$, put $h_0(x):=b/\sqrt{r^2+b^2}$ and
$$\rho_{\mathrm{lin}}(x):=\frac{3c^2\delta b^3}{4\pi G_N(r^2+b^2)^{5/2}}.$$
The same exact coupled solutions obey the pointwise Cartesian-coordinate bounds
$$\left|g_{00}+\bigl(1-2\delta h_0\bigr)\right|\le3\delta^2,\qquad \left|g_{ij}-\bigl(1+2\delta h_0\bigr)\delta_{ij}\right|\le\delta^2,\qquad 0\le1-\frac{\rho}{\rho_{\mathrm{lin}}}\le3\delta.$$
These are ideal mathematical estimates, not measurements or stability statements.

## Facts & Assumptions

**Given:** $a,b>0$, $s\in\{-1,+1\}$, $\mathrm{AC}_\omega$, the positive-root convention, the smooth family, and the Lebesgue measure and integral definitions.

[F1] [[def-emg-explicit-power-regimes]] defines the unique positive square root and reciprocal integer powers for positive bases.

[F2] [[lem-emg-positive-square-root-smoothness]]: for $q>0$, the unique positive root $s(q)$ is smooth and $s'(q)=1/(2s(q))$.

[F3] [[thm-emg-smooth-counterpoised-dust]] supplies the exact smooth formal solution family and the density $\rho=-c^2\Delta H/(4\pi G_NH^3)$ for smooth positive $H$ with $\Delta H\le0$.

[F4] [[thm-emg-selected-matter-energy-conditions]]: the Maxwell tensor plus any nonnegative charged-dust tensor satisfies WEC, NEC, SEC, and DEC.

[F5] [[lem-emg-conformastatic-curvature]] gives $S_g=-2\Delta H/H^3$ and the arbitrary-positive-$H$ Einstein table.

[F6] [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]] defines $\lambda_3$, and [[def-nonnegative-lebesgue-integral]] defines the integral of a nonnegative measurable function as the supremum of its simple-function integrals.

[F7] [[thm-polar-coordinates-formula-for-lebesgue-measure]]: under $\mathrm{AC}_\omega$, for every nonnegative Borel $f$ on $\mathbb R^3$,
$$\int_{\mathbb R^3}f\,d\lambda_3=\int_0^\infty r^2\int_{S^2}f(r\omega)\,d\varsigma_2(\omega)\,dr,$$
where $\varsigma_2$ is the polar surface measure of [[def-polar-surface-measure-on-the-unit-sphere]]. The symbol $\varsigma_2$ is used here to distinguish surface measure from the charge density $\sigma$.

[F8] [[lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates]]: under $\mathrm{AC}_\omega$, $\varsigma_2(S^2)=4\pi$.

[F9] [[cor-continuous-functions-are-borel-measurable]] and [[thm-borel-sets-are-lebesgue-measurable]]: under $\mathrm{AC}_\omega$, continuous Euclidean functions are Borel and Borel sets are Lebesgue measurable; in particular the nonnegative integrand below is measurable for both suppliers.

[F10] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]] applies under $\mathrm{AC}_\omega$ to a $C^1$ diffeomorphism of open Euclidean sets and transforms a nonnegative Lebesgue integral by the absolute Jacobian. Every singleton in $\mathbb R$ is Lebesgue null by [[thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null]].

[F11] [[def-integrable-real-and-complex-functions-and-their-integrals]] defines a real signed integral by positive and negative parts and says integrability is equivalent to finiteness of $\int|f|$; [[thm-linearity-of-the-lebesgue-integral-on-l-one]] gives linearity on integrable functions.

[F12] Positive-base powers have the stated derivative; the one-variable product, quotient and chain rules apply; sine and cosine have the derivatives, signs, ranges, Pythagorean identity and quarter-turn values used below. A continuous function on an interval assumes intermediate values, and a one-dimensional C1 map with nonzero derivative has local C1 inverses. ([[thm-real-power-continuity-and-derivatives]], [[thm-algebra-of-derivatives]], [[thm-chain-rule]], [[thm-sine-and-cosine-derivatives]], [[thm-quarter-turn-values-and-shift-formulas]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-euclidean-inverse-function-theorem]], [[thm-intermediate-value]])

[F13] Continuous functions are Riemann integrable on a compact interval; their bounded Riemann and Lebesgue integrals agree under $\mathrm{AC}_\omega$; and Newton--Leibniz evaluates an integral from a continuous antiderivative with an integrable interior derivative. ([[thm-continuous-implies-integrable]], [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]], [[thm-newton-leibniz-with-interior-derivative]])

[F14] For Riemann-integrable real functions on $[u,v]$ with $u<v$, pointwise nonnegativity implies a nonnegative integral, pointwise order is preserved by integration, and a bound $m\le h\le M$ implies $m(v-u)\le\int_u^v h\le M(v-u)$ ([[thm-monotonicity-of-the-integral]]).

[A1] Countable choice is limited to the indexed Axiom $\mathrm{AC}_\omega$ of [[def-countable-choice]]; no full Axiom of Choice is assumed.

## Proof

1.1 Since $r^2+b^2\ge b^2>0$, [F1] gives the unique positive root $\Psi$, and [F2] makes it smooth with $\partial_i\Psi=x^i/\Psi$. The chain, product and quotient rules [F12] then give $H_i=-ax^i/\Psi^3$ and $\partial_iH_i=-a(\Psi^{-3}-3(x^i)^2\Psi^{-5})$, so $\Delta H=-a\sum_{i=1}^3(\Psi^{-3}-3(x^i)^2\Psi^{-5})=-a(3\Psi^{-3}-3r^2\Psi^{-5})=-3ab^2/\Psi^5<0$. The integrand $\rho H^3=3c^2ab^2/[4\pi G_N(r^2+b^2)^{5/2}]$ is nonnegative and continuous on $\mathbb R^3$, hence Borel and Lebesgue measurable by [F9]. The coupled-dust theorem [F3] applies and supplies the smooth fields and exact formal solution. [given, A1, F1, F2, F3, F9, F12, algebra]

2.1 On $x^0=\text{constant}$ the metric pullback is $h_{ij}=H^2\delta_{ij}$, so $\det h=H^6$ and its positive volume density is $\sqrt{\det h}=H^3$. Substituting the density from step 1.1 gives $\rho H^3=3c^2ab^2/[4\pi G_N(r^2+b^2)^{5/2}]$, a nonnegative Borel integrand for [F6]. [given, F6, step 1.1, algebra]

2.2 The curvature formula [F5] and strict negativity in step 1.1 give $S_g=6ab^2/(H^3\Psi^5)>0$. The energy-condition theorem [F4] applies because $\rho\ge0$. Since the density formula in step 1.1 is strictly positive for every $x\in\mathbb R^3$, the set of points where it is nonzero is all of $\mathbb R^3$; no compact subset of $\mathbb R^3$ contains all those points. [step 1.1, F4, F5, algebra]

2.3 If $a=\delta b$, then $H=1+z$ with $z=\delta h_0$ and $0<h_0\le1$, since $\Psi\ge b$. For $f(u)=(1+u)^{-2}$, $f(0)=1$, $f'(0)=-2$, and $0<f''(u)=6(1+u)^{-4}\le6$ for $u\ge0$ by [F12]. Fix $z>0$ and define $G_z(u):=(z-u)f'(u)+f(u)$ on $[0,z]$. The product rule [F12] gives $G_z'(u)=(z-u)f''(u)$ on its interior. This derivative is continuous on $[0,z]$, hence Riemann integrable by [F13]; $G_z$ is continuous there. Newton--Leibniz [F13] therefore gives
$$\int_0^z(z-u)f''(u)\,du=G_z(z)-G_z(0)=f(z)-1+2z.$$
The integrand lies between $0$ and $6(z-u)$. These continuous comparison functions are integrable by [F13], so [F14] and Newton--Leibniz applied to $6zu-3u^2$ give
$$0\le f(z)-(1-2z)\le\int_0^z6(z-u)\,du=3z^2\le3\delta^2.$$
At $z=0$ the same remainder and bound are zero directly; no theorem requiring a nondegenerate interval is applied there. Since $g_{00}=-H^{-2}$, this proves the stated time-component bound. [given, F1, F12, F13, F14, step 1.1, algebra]

3.1 Apply the polar formula [F7] to the integrand in step 2.1; it is constant on each sphere of radius $r$. The area factor [F8] then gives $M_{\mathrm{prop}}=(3c^2ab^2/G_N)\int_0^\infty r^2(r^2+b^2)^{-5/2}\,dr$. All uses of the polar formula are under exactly [A1]'s $\mathrm{AC}_\omega$ hypothesis. [given, A1, F6, F7, F8, step 2.1, algebra]

4.1 The radial integrand has finite value at $r=0$, and that singleton has measure zero by [F10], so its integral over $[0,\infty)$ equals its integral over $(0,\infty)$. On $(0,\pi/2)$, $\cos\theta>0$, and quotient differentiation with the sine/cosine derivatives and Pythagorean identity in [F12] gives $(b\tan\theta)'=b\sec^2\theta>0$. Also $\sin$ increases and $\cos$ decreases while remaining positive on this interval [F12], so $\tan=\sin/\cos$ is strictly increasing. Their continuity and quarter-turn values give limits $0$ and $+\infty$ at the interval's endpoints. For each $y>0$, choose interior points $\theta_-<\theta_+$ with $T(\theta_-)<y<T(\theta_+)$; continuity on $[\theta_-,\theta_+]$ and the intermediate value theorem [F12] give a preimage, and strict monotonicity gives uniqueness. Hence $T(\theta)=b\tan\theta$ is a bijection $(0,\pi/2)\to(0,\infty)$. Since $T'$ never vanishes, the inverse function theorem [F12] gives C1 local inverses, which agree by bijectivity to form a global C1 inverse. Thus [F10] applies, and using $\cos\theta>0$ to simplify gives $\int_0^\infty r^2(r^2+b^2)^{-5/2}\,dr=b^{-2}\int_0^{\pi/2}\sin^2\theta\cos\theta\,d\theta$. The integrand is continuous on $[0,\pi/2]$, so it is Riemann integrable and its Lebesgue integral agrees by [F13]; the endpoints have measure zero by [F10]. The function $G(\theta)=\sin^3\theta/3$ has derivative $\sin^2\theta\cos\theta$ on the interior by [F12], and Newton--Leibniz [F13] with $\sin 0=0$, $\sin(\pi/2)=1$ yields $1/3$. Thus the radial integral is $1/(3b^2)$, and step 3.1 gives $M_{\mathrm{prop}}=c^2a/G_N<\infty$. [given, A1, F10, F12, F13, step 3.1, algebra]

5.1 Put $f=\rho H^3$. By step 4.1, $f\ge0$ and $\int f=M_{\mathrm{prop}}<\infty$, so $f$ is real integrable under [F11]. Since $\sigma H^3=sQ_sf$ and $sQ_s$ is a finite real constant, [F11] gives integrability of the signed charge density and $Q_{\mathrm{prop}}=\int_{\mathbb R^3}\sigma H^3\,d\lambda_3=sQ_s\int_{\mathbb R^3}f\,d\lambda_3=sQ_sM_{\mathrm{prop}}$. [step 4.1, F3, F11, algebra]

6.1 The spatial metric is exactly $g_{ij}=H^2\delta_{ij}=(1+2\delta h_0+\delta^2h_0^2)\delta_{ij}$, so the component error is $\delta^2h_0^2|\delta_{ij}|\le\delta^2$. Also $\rho/\rho_{\mathrm{lin}}=H^{-3}=(1+z)^{-3}$. By [F12], the function $P(u):=1-(1+u)^{-3}$ is continuously differentiable for $u\ge0$ with $P'(u)=3(1+u)^{-4}$. For $z>0$, [F13] makes this derivative integrable on $[0,z]$ and gives
$$1-(1+z)^{-3}=P(z)-P(0)=\int_0^z3(1+u)^{-4}\,du.$$
Its integrand lies between $0$ and $3$, so [F14] yields $0\le1-\rho/\rho_{\mathrm{lin}}\le3z\le3\delta$. At $z=0$ both sides vanish by substitution. This proves the density bound. [given, F1, F12, F13, F14, step 2.3, algebra] ∎

## Remarks

The masses here are the integrals defined from the induced spatial volume density; no ADM-mass identification is used. The density's nonzero set is all of $\mathbb R^3$, and the family has a fixed signed charge-to-mass ratio. The dilute estimates compare exact coupled solutions with explicitly stated linear profiles; they do not assert stability or a general perturbation theorem.

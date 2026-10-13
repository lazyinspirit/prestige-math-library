---
id: ex-nrqm-observables-position-bin-probabilities
aliases: [ nrqm-observables-position-bin-probabilities ]
kind: example
domain: physics
title: "Position-bin probabilities of a Gaussian packet"
status: published
origin: pipeline
dependency_level: 9
deps:
  [
    cor-continuous-functions-are-borel-measurable,
    def-axiom-of-choice,
    def-countable-choice,
    def-integral-over-a-measurable-set,
    def-l-p-space-as-a-quotient-by-null-functions,
    def-nonnegative-lebesgue-integral,
    def-nrqm-magnetic-and-detection-position-and-momentum-operators,
    def-nrqm-observables-framework-observable-and-outcome-law,
    lem-complex-conjugation-and-modulus-laws,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    pthm-nrqm-observables-position-and-momentum-outcome-laws,
    thm-gaussian-integral,
    thm-tonelli-theorem-for-sigma-finite-product-spaces
  ]
dependency_roles:
  cor-continuous-functions-are-borel-measurable: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-nonnegative-lebesgue-integral: mathematical-premise
  def-nrqm-magnetic-and-detection-position-and-momentum-operators: mathematical-premise
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  pthm-nrqm-observables-position-and-momentum-outcome-laws: physical-result
  thm-gaussian-integral: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A finite model computation of position-bin probabilities in the
  spinless massive-particle model: for a normalized Gaussian packet in the first
  coordinate and an arbitrary normalized transverse factor, the probability that
  the first position coordinate lies in a Borel bin is the Gaussian integral
  over that bin, and the probability of an exact value is zero while every bin
  of positive length gets positive probability with the stated elementary
  bounds. The item is conditional on the model's postulates, uses no measured
  data and asserts no apparatus behaviour."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Sections 1.1-1.2
        and 2.1.4, printed pages 3-10 and 26-30 (the probability density of the
        wave function; Gaussian wave packets and their properties)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 4
        \"Dirac's Bra and Ket Notation\", Section 3, printed pages 11-15 (the
        position wave function as the component of the state along position
        states and the normalization of position amplitudes)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/4de6d044fa9\
        d7e5b8998c5f8ca984a42_MIT8_05F13_Chap_04.pdf"
verification:
  precheck: pass
---

## Example

Work in the spinless massive-particle model of P5, that is $H=L^{2}(\mathbb R^{3};\mathbb C)$ with position operators $Q_{j}$ ([[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]], [[def-nrqm-magnetic-and-detection-position-and-momentum-operators]]), fix a width $\sigma>0$ in metres, and let
$$\psi_{\sigma}(t):=(2\pi\sigma^{2})^{-1/4}e^{-t^{2}/(4\sigma^{2})}\qquad(t\in\mathbb R),$$
the **Gaussian packet** of width $\sigma$. Let $\varphi\in L^{2}(\mathbb R^{2};\mathbb C)$ satisfy $\int_{\mathbb R^{2}}|\varphi|^{2}=1$ and put
$$\psi(x):=\psi_{\sigma}(x_{1})\,\varphi(x_{2},x_{3})\qquad(x\in\mathbb R^{3}),$$
so that $\psi\in H$ is a unit vector and the preparation $[\psi]$ is a state of the model. Then:

(i) The probability that the first coordinate $Q_{1}$ lies in a Borel set $B\subseteq\mathbb R$ is
$$\mu^{Q_{1}}_{\psi}(B)=\int_{B}|\psi_{\sigma}(t)|^{2}\,dt=\frac{1}{\sqrt{2\pi\sigma^{2}}}\int_{B}e^{-t^{2}/(2\sigma^{2})}\,dt,$$
independently of the transverse factor $\varphi$; the law has density $|\psi_{\sigma}|^{2}$ and $\mu^{Q_{1}}_{\psi}(\mathbb R)=1$.

(ii) For every $\lambda\in\mathbb R$ the probability of the exact value $\lambda$ is zero, $\mu^{Q_{1}}_{\psi}(\{\lambda\})=0$, while for every $a<b$ the bin $(a,b]$ has positive probability with the explicit bounds
$$\frac{b-a}{\sqrt{2\pi\sigma^{2}}}\exp\Bigl(-\frac{\max\{|a|,|b|\}^{2}}{2\sigma^{2}}\Bigr)\le\mu^{Q_{1}}_{\psi}((a,b])\le\frac{b-a}{\sqrt{2\pi\sigma^{2}}}.$$
In particular these bounds hold when $0\le a<b$. In the symmetric case $a=-\delta$, $b=\delta$ with $\delta>0$, the probability satisfies
$$\sqrt{\frac{2}{\pi e}}\ \le\ \mu^{Q_{1}}_{\psi}((-\sigma,\sigma])\ \le\ \sqrt{\frac{2}{\pi}},\qquad 0\ <\ \mu^{Q_{1}}_{\psi}((-\delta,\delta])\ \le\ \frac{2\delta}{\sqrt{2\pi\sigma^{2}}}.$$
In particular a single recorded event localized in a bin of positive length is possible in the model, while an event at an exact coordinate value has probability zero.

(iii) For each $j\in\{1,2,3\}$ the same formulas hold for $Q_j$ in the unit product preparation $\psi^{(j)}(x):=\psi_\sigma(x_j)\varphi(x_\perp)$, where $x_\perp$ lists the other two coordinates in increasing index order. For the original preparation $\psi=\psi^{(1)}$, the laws of $Q_2$ and $Q_3$ are the marginals of $|\varphi|^2$ and need not be Gaussian. The width and bin endpoints are model parameters read in metres.

The computation is the framework's own outcome law applied to an explicit state; it records no measurement, no apparatus response and no empirical data.

## Facts & Assumptions

**Given:** The spinless massive-particle model of P5 with $H=L^{2}(\mathbb R^{3};\mathbb C)$ and position operators $Q_{j}$ ([[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]], [[def-nrqm-magnetic-and-detection-position-and-momentum-operators]]); the outcome-law reading of [[def-nrqm-observables-framework-observable-and-outcome-law]]; a width $\sigma>0$; a unit vector $\varphi\in L^{2}(\mathbb R^{2};\mathbb C)$; the Gaussian packet $\psi_{\sigma}$ and state $\psi=\psi_{\sigma}\otimes\varphi$; a bin $(a,b]\subseteq\mathbb R$; the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]).

[F1] **Gaussian integrals.** $\int_{\mathbb R}e^{-u^{2}}du=\sqrt\pi$ ([[thm-gaussian-integral]]); for $c>0$ the $C^{1}$ substitution $u=t/\sqrt{2c}$ gives $\int_{\mathbb R}e^{-t^{2}/(2c)}dt=\sqrt{2\pi c}$.

[F2] **Position law of the model.** For the spinless massive model and a unit vector $\psi$, the law of $Q_{j}$ is $\mu^{Q_{j}}_{\psi}(B)=\int_{x_{j}^{-1}(B)}|\psi(x)|^{2}dx$, with density $f_{j}(t)=\int_{\mathbb R^{2}}|\psi(x_{\perp},t)|^{2}dx_{\perp}$ and $\mu^{Q_{j}}_{\psi}(\{\lambda\})=0$ for every $\lambda$ ([[pthm-nrqm-observables-position-and-momentum-outcome-laws]] clauses (b) and (d)).

[F3] **Iterated integrals and monotonicity.** For product-measurable nonnegative functions on $\sigma$-finite spaces the integral may be iterated ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]); for nonnegative measurable $f\le g$ one has $\int f\le\int g$ and $\int_A f\le\int_B f$ for $A\subseteq B$, directly from the supremum definition of the nonnegative integral ([[def-nonnegative-lebesgue-integral]], [[def-integral-over-a-measurable-set]]); and $t\mapsto e^{-t^{2}/(2\sigma^{2})}$ is continuous, hence Borel measurable ([[cor-continuous-functions-are-borel-measurable]]).

[F4] **The product state is a unit vector.** $\psi=\psi_{\sigma}\otimes\varphi$ is the almost-everywhere product of an $L^{2}$ function of $x_{1}$ and an $L^{2}$ function of $(x_{2},x_{3})$, hence lies in $L^{2}(\mathbb R^{3};\mathbb C)$ ([[def-l-p-space-as-a-quotient-by-null-functions]],); Tonelli [F3] and the normalizations of $\psi_{\sigma}$ and $\varphi$ give $\|\psi\|^{2}=1$, and $|\psi|^{2}$ is the product $|\psi_{\sigma}(x_{1})|^{2}|\varphi(x_{2},x_{3})|^{2}$ because the modulus of a product is the product of the moduli ([[lem-complex-conjugation-and-modulus-laws]]).

[F5] **States.** The pure preparation of the unit vector $\psi$ is the state $T_{\psi,\psi}$ of the model, and the outcome law is read as in [[def-nrqm-observables-framework-observable-and-outcome-law]] clause (b).

## Verification

**Proof technique:** direct; normalize the Gaussian packet and compute the position-bin probabilities, their bounds and the exact-value probability.

1.1 [Normalization of the Gaussian packet] With $c=\sigma^{2}$ in [F1], $\int_{\mathbb R}e^{-t^{2}/(2\sigma^{2})}dt=\sqrt{2\pi\sigma^{2}}$. Therefore $\int_{\mathbb R}|\psi_{\sigma}(t)|^{2}dt=(2\pi\sigma^{2})^{-1/2}\sqrt{2\pi\sigma^{2}}=1$, since $|\psi_{\sigma}(t)|^{2}=(2\pi\sigma^{2})^{-1/2}e^{-t^{2}/(2\sigma^{2})}$ by [F4]; consequently $\int_{\mathbb R^{3}}|\psi|^{2}dx=\left(\int_{\mathbb R}|\psi_{\sigma}|^{2}\right)\left(\int_{\mathbb R^{2}}|\varphi|^{2}\right)=1$ by Tonelli [F3], so $\psi$ is a unit vector and $[\psi]$ is a pure preparation of the model by [F5]. [given, F1, F3, F4, F5, algebra]

2.1 [The position law and its density] By [F2] the law of $Q_{1}$ in the preparation $[\psi]$ is $\mu^{Q_{1}}_{\psi}(B)=\int_{x_{1}^{-1}(B)}|\psi|^{2}dx$; writing the integrand as $|\psi_{\sigma}(x_{1})|^{2}|\varphi(x_{2},x_{3})|^{2}$ by [F4] and iterating the integral by Tonelli [F3], $\int_{x_{1}^{-1}(B)}|\psi|^{2}dx=\left(\int_{B}|\psi_{\sigma}(t)|^{2}dt\right)\left(\int_{\mathbb R^{2}}|\varphi|^{2}\right)=\int_{B}|\psi_{\sigma}(t)|^{2}dt$, which is clause (i) with density $f_{1}(t)=|\psi_{\sigma}(t)|^{2}$. [given, step 1.1, F2, F3, F4, algebra]

3.1 [Exact values and bin bounds] By [F2] (the atomless clause of the position law) $\mu^{Q_{1}}_{\psi}(\{\lambda\})=0$ for every $\lambda$, so no exact coordinate value carries probability. For any finite $a<b$, put $M:=\max\{|a|,|b|\}$. Every $t\in[a,b]$ satisfies $|t|\le M$, and therefore $\frac{1}{\sqrt{2\pi\sigma^{2}}}e^{-M^{2}/(2\sigma^{2})}\le|\psi_{\sigma}(t)|^{2}\le\frac{1}{\sqrt{2\pi\sigma^{2}}}$. Integrating these inequalities over $(a,b]$ and using the position law in [F2] and monotonicity [F3] gives the two displayed bounds. Their lower bound is strictly positive because $a<b$ and $\sigma>0$, so every bin of positive length receives positive probability, including bins crossing the origin and bins with negative endpoints. For the symmetric bin $(-\sigma,\sigma]$, the substitution $u=t/\sigma$ in step 2.1 gives $\mu^{Q_{1}}_{\psi}((-\sigma,\sigma])=\frac{1}{\sqrt{2\pi}}\int_{-1}^{1}e^{-u^{2}/2}du$, and since $e^{-1/2}\le e^{-u^{2}/2}\le1$ on $[-1,1]$, monotonicity [F3] yields $\sqrt{2/(\pi e)}\le\mu^{Q_{1}}_{\psi}((-\sigma,\sigma])\le\sqrt{2/\pi}$. Permuting the selected coordinate in the product state repeats steps 1.1 and 2.1 with $x_j$ in place of $x_1$, proving (iii); the other two marginals of the original state come from $|\varphi|^2$ by [F2] and Tonelli [F3]. The final upper bound for $(-\delta,\delta]$ is the general upper estimate with $a=-\delta$, $b=\delta$; its lower estimate is positive for every $\delta>0$. [given, step 1.1, step 2.1, F1, F2, F3, algebra] ∎

## Remarks

- The transverse factor $\varphi$ enters the computation only through its total mass $\int|\varphi|^{2}=1$; the first-coordinate law of a product state is independent of the transverse profile, while a state that is not a product can correlate the coordinates and change the marginal, as the general density formula $f_{j}(t)=\int_{\mathbb R^{2}}|\psi(x_{\perp},t)|^{2}dx_{\perp}$ of [[pthm-nrqm-observables-position-and-momentum-outcome-laws]] shows.
- The bounds are deliberately elementary: they neither sharpen the Gaussian integral nor claim an error analysis. They are finite checks of the model's law, not measured frequencies, and no apparatus resolution, binning procedure or count is asserted.

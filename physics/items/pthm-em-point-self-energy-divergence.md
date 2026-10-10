---
id: pthm-em-point-self-energy-divergence
kind: physics-theorem
title: Divergence of the point-charge field energy and the limits of mass inference
domain: physics
physical_scope: "The truncated electric field energy of the idealised point charge in vacuum: the shell energy is $q^2/(8\\pi\\varepsilon_0)(1/\\delta-1/R)$, finite for $0<\\delta<R$ but divergent as the inner cutoff $\\delta\\downarrow0$ for $q\\ne0$. The item records this divergence as a property of the point idealisation and explicitly excludes inferences about particle rest mass, self-force, empirical measurement or inconsistency of the framework; finite-energy statements remain those of the compact-source branches."
status: draft
origin: pipeline
proof_strategy: direct
deps: ["pthm-em-coulomb-solution", "pthm-em-electrostatic-field-energy", "def-em-electrostatic-regime", "def-em-fields", "def-em-sources", "def-em-si-conventions", "def-em-weak-sources", "thm-polar-coordinates-formula-for-lebesgue-measure", "def-polar-surface-measure-on-the-unit-sphere", "cor-volume-of-the-unit-n-ball", "lem-euclidean-chart-measure-agrees-with-polar-surface-measure", "def-laplace-fundamental-solution-with-positive-minus-laplacian-sign", "def-metric-ball", "def-euclidean-inner-product", "lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric", "def-integral-over-a-measurable-set", "def-integrable-real-and-complex-functions-and-their-integrals", "prop-order-and-scalar-rules-for-the-nonnegative-integral", "thm-monotone-convergence-for-the-integral", "thm-ftc-second-part", "lem-derivative-of-a-power", "thm-real-power-continuity-and-derivatives", "cor-continuous-functions-are-borel-measurable", "def-countable-choice", "cor-integral-over-a-null-set-vanishes", "lem-riemann-lebesgue-comparison-for-distribution-test-integrands"]
dependency_roles:
  pthm-em-coulomb-solution: physical-result
  pthm-em-electrostatic-field-energy: physical-result
  def-em-electrostatic-regime: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-weak-sources: formulation-prerequisite
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  def-polar-surface-measure-on-the-unit-sphere: mathematical-premise
  cor-volume-of-the-unit-n-ball: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
  def-laplace-fundamental-solution-with-positive-minus-laplacian-sign: mathematical-premise
  def-metric-ball: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  cor-continuous-functions-are-borel-measurable: mathematical-premise
  def-countable-choice: mathematical-premise
  cor-integral-over-a-null-set-vanishes: mathematical-premise
  lem-riemann-lebesgue-comparison-for-distribution-test-integrands: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)
      url: https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf
      locator: Section 2.4.4 printed pp. 95-96 (the energy of a point charge, the divergent integral and the comments on the electron's self-energy). Read in the stamped scanned full text, OCR cross-checked.
    - title: David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)
      url: https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf
      locator: Section 2.3 printed pp. 25-28 (the energy stored in the field of a point particle and its divergence at short distances; the electron-radius discussion is recorded as interpretive context only). Read in the stamped full text.
    - title: L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields, 3rd revised English edition (Pergamon 1971, 387 pp.; full text)
      url: http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf
      locator: Section 37 printed p. 90 (the divergent self-energy of a point charge; the mass-identification discussion is excluded from this item). Read in the stamped full text.
    - title: Weng Cho Chew, Lectures on Electromagnetic Field Theory (Purdue University, Fall 2020, 497 pp.)
      url: https://engineering.purdue.edu/wcchew/ece604f20/EMFTAll.pdf
      locator: Sections 3.3.2-3.3.3 printed pp. 35-36 (the point-charge static field whose squared magnitude is integrated here). Read in the stamped full text.
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$) as carried by the Lebesgue and polar interfaces ([[def-countable-choice]]).
Let $q\in\mathbb R$, $x_0\in\mathbb R^3$, and let $E_q$ be the ideal point-charge field of [[pthm-em-coulomb-solution]](d) ([[def-em-fields]], [[def-em-si-conventions]]).
For $0<\delta<R$ put
$$U_q(\delta,R):=\frac{\varepsilon_0}{2}\int_{\{\delta\le|x-x_0|\le R\}}|E_q(x)|^2\,d\lambda_3(x)$$
(the truncated field energy of the shell between the two spheres, [[def-metric-ball]]).
Then:

(a) [Exact truncated energy] for all $0<\delta<R$,
$$U_q(\delta,R)=\frac{q^2}{8\pi\varepsilon_0}\Bigl(\frac1\delta-\frac1R\Bigr);$$

(b) [Divergence] $\lim_{R\to\infty}U_q(\delta,R)=q^2/(8\pi\varepsilon_0\delta)$ for every $\delta>0$, and for $q\ne0$
$$\lim_{\delta\downarrow0}U_q(\delta,R)=+\infty\qquad\text{for every }R>0;$$
so the field energy of the ideal point charge is locally infinite at its own location, and any finite-energy treatment of a point-like charge must modify the source/field near the singularity or introduce an explicit cutoff;

(c) [Limits of the mass inference] the identity is a divergence of the *field energy of the idealised point source* in the framework's SI conventions. It does not assert that a physical particle has infinite rest mass, does not identify field energy with rest mass, contains no measurement, and involves neither a self-force nor a contradiction claim for classical electrodynamics: the framework supplies no mass-energy identification for a charged particle, and the smooth compact-source field/assembly energy of [[pthm-em-electrostatic-field-energy]] remains finite. The compact $L^1$ branch of [[pthm-em-coulomb-solution]] retains its locally integrable potential and distributional Poisson equation; it does not guarantee finite field energy for arbitrary $L^1$ densities. The point source itself is the idealisation of [[def-em-weak-sources]](b) ([[def-em-electrostatic-regime]](e)); its energy divergence is a mathematical property of that idealisation, not an empirical result.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, $q\in\mathbb R$, $x_0\in\mathbb R^3$, the point-charge field $E_q(z)=q z/(4\pi\varepsilon_0|z|^3)$ off $z=0$ of the Coulomb solution, and $0<\delta<R$.

[F1] The ideal point-charge field satisfies $|E_q(z)|=|q|/(4\pi\varepsilon_0|z|^2)$ for $z\ne0$; its value at the pole is arbitrary and immaterial; the compact-source field/assembly energy of a $C^1$ compactly supported density is finite and equal to $\frac12\int\rho\varphi$, and the compact $L^1$ branch keeps a locally integrable potential with distributional Poisson equation but asserts no finite field energy ([[pthm-em-coulomb-solution]], [[pthm-em-electrostatic-field-energy]], [[def-em-fields]], [[def-em-si-conventions]]).

[F2] The polar formula computes radial integrals, the sphere area is $\sigma(S^2)=4\pi$ from $|S^{n-1}|=n|B_1|$ and $|B_1|=4\pi/3$, and the fundamental theorem evaluates $\int_\delta^Rr^{-2}dr$ as the increment of the primitive $-1/r$ on compact subintervals, the Riemann and Lebesgue values agreeing for the continuous integrand; a singleton or the pole sphere set $\{x_0\}$ is null and does not affect the integral ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[def-polar-surface-measure-on-the-unit-sphere]], [[cor-volume-of-the-unit-n-ball]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]], [[thm-ftc-second-part]], [[lem-derivative-of-a-power]], [[thm-real-power-continuity-and-derivatives]], [[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]], [[cor-integral-over-a-null-set-vanishes]]).

[F3] The nonnegative integral is monotone and homogeneous, the integral of a radial density is the polar integral, and monotone convergence passes increasing limits; the point source is the idealisation of the weak point-source definition and of the static-to-distributional reading ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[def-integral-over-a-measurable-set]], [[def-integrable-real-and-complex-functions-and-their-integrals]], [[thm-monotone-convergence-for-the-integral]], [[cor-continuous-functions-are-borel-measurable]], [[def-em-weak-sources]], [[def-em-electrostatic-regime]], [[def-metric-ball]], [[def-euclidean-inner-product]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

## Proof

**Proof technique:** direct.

1.1 For $z\ne0$ the field satisfies $|E_q(z)|^2=q^2/(16\pi^2\varepsilon_0^2|z|^4)$ by [F1]; the shell $\{\delta\le|x-x_0|\le R\}$ excludes $x_0$ because $\delta>0$, and the integrand is continuous on the shell, hence Borel and locally bounded there; the value assigned to $E_q$ at $x_0$ does not affect the integral since $\{x_0\}$ is null ([F1], [F2], [F3]). [given, F1, F2, F3]

2.1 Polar integration about $x_0$: substituting $x=x_0+z$ and using the polar formula in $z$ with the radial density $q^2/(16\pi^2\varepsilon_0^2r^4)$ gives $$\int_{\{\delta\le|x-x_0|\le R\}}|E_q(x)|^2\,d\lambda_3(x)=\frac{q^2}{16\pi^2\varepsilon_0^2}\int_\delta^R r^{-4}\cdot 4\pi r^2\,dr=\frac{q^2}{4\pi\varepsilon_0^2}\int_\delta^R r^{-2}\,dr,$$ where $\sigma(S^2)=4\pi$ and the radial integrals are taken over the compact interval $[\delta,R]$ ([F2], [F3]). [step 1.1, F2, F3]

3.1 The fundamental theorem with the primitive $r\mapsto-r^{-1}$ of $r\mapsto r^{-2}$ gives $\int_\delta^Rr^{-2}dr=1/\delta-1/R$ ([F2]); substituting into step 2.1 and multiplying by $\varepsilon_0/2$ yields $$U_q(\delta,R)=\frac{\varepsilon_0}{2}\cdot\frac{q^2}{4\pi\varepsilon_0^2}\Bigl(\frac1\delta-\frac1R\Bigr)=\frac{q^2}{8\pi\varepsilon_0}\Bigl(\frac1\delta-\frac1R\Bigr),$$ which is clause (a); the quantity is finite for $0<\delta<R$ and of the sign of $q^2$ ([F3]). [step 2.1, F2, F3]

4.1 Clause (b): letting $R\to\infty$ in the exact formula gives $\lim_{R\to\infty}U_q(\delta,R)=q^2/(8\pi\varepsilon_0\delta)$ for every $\delta>0$, and letting $\delta\downarrow0$ gives $\lim_{\delta\downarrow0}U_q(\delta,R)=+\infty$ whenever $q\ne0$, while for $q=0$ both expressions vanish identically; the limits are read off the continuous elementary functions $R\mapsto1/R$ and $\delta\mapsto1/\delta$ on $(0,\infty)$ ([F2], [F3]). [step 3.1, F2, F3]

5.1 Clause (c): the computation used only the idealised point field of [F1] and the radial integration of [F2]; it yields a divergence of the truncated field energy of that idealisation. No identification of field energy with rest mass, no self-force, no measurement and no inconsistency claim is made; the smooth compact-source energy of [[pthm-em-electrostatic-field-energy]] remains finite by [F1], the compact $L^1$ branch keeps only its locally integrable potential and distributional Poisson equation, and the point source is the idealisation of the weak point-source definition together with the static-to-distributional reading [F3]. [step 4.1, F1, F3] ∎

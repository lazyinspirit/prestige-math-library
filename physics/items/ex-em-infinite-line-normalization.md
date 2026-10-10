---
id: ex-em-infinite-line-normalization
kind: example
title: "The infinite line charge: logarithmic potential, flux normalization and divergent energy"
domain: physics
physical_scope: "The idealised infinite straight line charge in vacuum: the field $\\lambda\\hat e_r/(2\\pi\\varepsilon_0\\rho)$, the logarithmic potential, the zero-volume-source classical equations off the axis, the cylinder flux $\\lambda L/\\varepsilon_0$, the distributional identity $\\operatorname{div}E=\\rho_\\lambda/\\varepsilon_0$ on $\\mathbb R^3$, the failure of the infinity normalization and of the star-shaped hypothesis, and the logarithmically divergent energy per unit length. The line source lies outside the declared source types of the framework; the item is a mathematical idealisation with no physical realisation, equilibrium or empirical claim."
status: draft
origin: pipeline
proof_strategy: direct
deps: ["pthm-em-coulomb-solution", "pthm-em-electrostatic-potential", "def-em-electrostatic-regime", "def-em-fields", "def-em-sources", "def-em-si-conventions", "def-em-lab-geometry", "def-em-weak-sources", "thm-logarithm-derivative-and-integral", "thm-chain-rule-for-total-derivatives", "thm-algebra-of-derivatives", "def-directional-and-partial-derivatives", "def-divergence-and-curl-of-a-c1-vector-field", "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces", "thm-tonelli-theorem-for-sigma-finite-product-spaces", "thm-polar-coordinates-formula-for-lebesgue-measure", "def-polar-surface-measure-on-the-unit-sphere", "cor-volume-of-the-unit-n-ball", "lem-euclidean-chart-measure-agrees-with-polar-surface-measure", "def-admissible-regular-parametrized-surface-patch", "def-oriented-unit-normal-and-flux-of-a-surface-patch", "thm-surface-area-density-is-cross-product-norm", "def-cross-product-in-r3", "def-complex-exponential", "def-complex-conjugate-real-imaginary-part-and-modulus", "thm-complex-exponential-is-entire-with-derivative-itself", "cor-complex-exponential-cartesian-form-modulus-and-eulers-identity", "def-euclidean-inner-product", "def-metric-ball", "lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric", "def-integral-over-a-measurable-set", "def-integrable-real-and-complex-functions-and-their-integrals", "prop-order-and-scalar-rules-for-the-nonnegative-integral", "cor-continuous-functions-are-borel-measurable", "thm-dominated-convergence", "thm-monotone-convergence-for-the-integral", "thm-extreme-value-metric", "def-test-function-space-d-of-an-open-set", "def-distribution", "def-distributional-derivative", "def-regular-distribution-from-a-locally-integrable-function", "thm-locally-integrable-functions-embed-in-distributions", "def-riemann-integral-over-a-jordan-set", "thm-lebesgue-measure-of-a-box-of-every-kind", "lem-riemann-lebesgue-comparison-for-distribution-test-integrands", "def-ck-euclidean-maps-and-diffeomorphisms", "def-star-shaped-open-subset-of-rn", "def-metric-topology", "def-countable-choice", "lem-derivative-of-a-power", "thm-real-power-continuity-and-derivatives", "thm-metric-continuity-characterisations", "prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null", "thm-borel-products-of-euclidean-spaces-are-euclidean-borel", "thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets", "thm-ftc-second-part", "thm-kernel-and-fibres-of-complex-exponential"]
dependency_roles:
  thm-kernel-and-fibres-of-complex-exponential: mathematical-premise
  pthm-em-coulomb-solution: physical-result
  pthm-em-electrostatic-potential: physical-result
  def-em-electrostatic-regime: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-weak-sources: formulation-prerequisite
  thm-logarithm-derivative-and-integral: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  def-polar-surface-measure-on-the-unit-sphere: mathematical-premise
  cor-volume-of-the-unit-n-ball: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
  def-admissible-regular-parametrized-surface-patch: mathematical-premise
  def-oriented-unit-normal-and-flux-of-a-surface-patch: mathematical-premise
  thm-surface-area-density-is-cross-product-norm: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-complex-exponential: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-metric-ball: mathematical-premise
  lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  cor-continuous-functions-are-borel-measurable: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  def-distribution: mathematical-premise
  def-distributional-derivative: mathematical-premise
  def-regular-distribution-from-a-locally-integrable-function: mathematical-premise
  thm-locally-integrable-functions-embed-in-distributions: mathematical-premise
  def-riemann-integral-over-a-jordan-set: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  lem-riemann-lebesgue-comparison-for-distribution-test-integrands: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-star-shaped-open-subset-of-rn: mathematical-premise
  def-metric-topology: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-metric-continuity-characterisations: mathematical-premise
  prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null: mathematical-premise
  thm-borel-products-of-euclidean-spaces-are-euclidean-borel: mathematical-premise
  thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets: mathematical-premise
  thm-ftc-second-part: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)
      url: https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf
      locator: Section 2.1.3 printed pp. 12-13 (the 1/r field and cylindrical flux), Section 2.2 printed pp. 16-17 (potential conventions), and Section 2.2.3, “A Comment on Infinite Charge Distributions”, printed pp. 22-23 (the logarithmic line potential and finite reference radius). Read in the stamped full text.
    - title: David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)
      url: https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf
      locator: Section 2.2.3 (Examples 2.3-2.4 and the line-charge flux computation, printed pp. 72-75), Section 2.3.2 (the reference point and the line/plane potentials, printed pp. 79-83) and Section 2.4 (energy of continuous distributions, printed pp. 90-96). Read in the stamped scanned full text, OCR cross-checked.
    - title: L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields, 3rd revised English edition (Pergamon 1971, 387 pp.; full text)
      url: http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf
      locator: Section 36 printed pp. 88-89 (the field of a uniformly charged line and the logarithmic potential); Gaussian units re-expressed in SI. Read in the stamped full text.
    - title: Weng Cho Chew, Lectures on Electromagnetic Field Theory (Purdue University, Fall 2020, 497 pp.)
      url: https://engineering.purdue.edu/wcchew/ece604f20/EMFTAll.pdf
      locator: Sections 1.3.1-1.3.2 and 3.3.2-3.3.3 printed pp. 8-9 and 35-36 (line-source fields, Poisson's equation and its Green-function solution). Read in the stamped full text.
---

## Example

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$), inherited from the cited Lebesgue, polar, Newtonian and distribution interfaces ([[def-countable-choice]]).
Use the one-based coordinate and derivative labels of [[pthm-em-coulomb-solution]]: $x_k:=x(k-1)$, $\partial_k$ is differentiation in that coordinate, and $e_k$ is its unit vector, for $k=1,2,3$.
Let $\Omega:=\mathbb R^3\setminus\{x:x_1=x_2=0\}$ (the complement of the $z$-axis), let $\rho(x):=\sqrt{x_1^2+x_2^2}$ and $\hat e_r(x):=(x_1,x_2,0)/\rho(x)$ for $x\in\Omega$ ([[def-euclidean-inner-product]], [[def-metric-ball]]), let $\lambda\in\mathbb R$ be a line charge density in $\mathrm{C\,m^{-1}}$, let $r_0>0$, and define, with the constants and units of [[def-em-si-conventions]] ([[def-em-fields]], [[def-em-sources]]),
$$E(x):=\frac{\lambda\,\hat e_r(x)}{2\pi\varepsilon_0\,\rho(x)},\qquad \varphi(x):=-\frac{\lambda}{2\pi\varepsilon_0}\log\frac{\rho(x)}{r_0}\qquad(x\in\Omega).$$
Then:

(a) [Gradient] $E=-\nabla\varphi$ on $\Omega$ ([[thm-logarithm-derivative-and-integral]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]]);

(b) [Classical equations] $\operatorname{div}E=0$ and $\operatorname{curl}E=0$ pointwise on $\Omega$; hence the fixed-time pair $(E,0)$ satisfies the reduced smooth-branch electrostatic equations with zero volume source on $\Omega$ ([[def-em-electrostatic-regime]] (c), [[def-divergence-and-curl-of-a-c1-vector-field]]);

(c) [Flux per length] for every $r>0$ and $L>0$ the flux of $E$ through the lateral cylinder surface $\{x:\rho(x)=r,\ |x_3|\le L/2\}$ in the outward orientation is $\Phi_r=\lambda L/\varepsilon_0$; the parametrization $(\theta,z)\mapsto(r\operatorname{Re}e^{i\theta},r\operatorname{Im}e^{i\theta},z)$ over the rectangle $[0,2\pi]\times[-L/2,L/2]$ is an admissible regular surface patch ([[def-admissible-regular-parametrized-surface-patch]], [[def-oriented-unit-normal-and-flux-of-a-surface-patch]], [[def-complex-exponential]], [[def-complex-conjugate-real-imaginary-part-and-modulus]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-surface-area-density-is-cross-product-norm]]);

(d) [Distributional line source] extend $E$ by $0$ on the axis and let $\rho_\lambda(\psi):=\lambda\int_{\mathbb R}\psi(0,0,z)\,dz$ be the line-charge distribution on $\mathbb R^3$ ([[def-distribution]], [[def-test-function-space-d-of-an-open-set]]). Then, with distributional derivatives and the regular distribution of $E$ ([[def-regular-distribution-from-a-locally-integrable-function]], [[thm-locally-integrable-functions-embed-in-distributions]]),
$$\operatorname{div}E=\frac{1}{\varepsilon_0}\rho_\lambda,\qquad\operatorname{curl}E=0\qquad\text{in }\mathcal D'(\mathbb R^3),$$
by superposition of the point-charge identities of [[pthm-em-coulomb-solution]] (d) along the axis ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]); the line density fixed by the field in this weak sense is exactly $\lambda$;

(e) [Normalization] for fixed $r_0$, $\varphi(\rho)\to-\infty$ as $\rho\to\infty$ if $\lambda>0$ and $\to+\infty$ if $\lambda<0$, while changing $r_0$ to $r_0'$ shifts $\varphi$ by $\frac{\lambda}{2\pi\varepsilon_0}\log(r_0'/r_0)$ and leaves $E$ unchanged. For $\lambda\ne0$ the infinity normalization of [[pthm-em-coulomb-solution]] (b) is therefore unavailable; for $\lambda=0$ the field, potential and line source are zero and all cutoff energies and fluxes vanish; and $\Omega$ is not star-shaped (for every $a\in\Omega$ the segment from $a$ to $-a$ passes through the axis, which is not in $\Omega$), so [[pthm-em-electrostatic-potential]] does not apply to $\Omega$, although the displayed $\varphi$ still satisfies $E=-\nabla\varphi$ ([[def-star-shaped-open-subset-of-rn]]);

(f) [Energy per length] for $0<\delta<r<R$ and $L>0$,
$$\frac{\varepsilon_0}{2}\int_{\{\delta<\rho<R,\ |x_3|<L/2\}}|E|^2\,d\lambda_3=\frac{\lambda^2L}{4\pi\varepsilon_0}\log\frac{R}{\delta},$$
which for $\lambda\ne0$ diverges both as $\delta\downarrow0$ and as $R\to\infty$; there is no finite energy per unit length ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[def-polar-surface-measure-on-the-unit-sphere]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]], [[cor-volume-of-the-unit-n-ball]]);

(g) [Scope and idealization] the line charge $\rho_\lambda$ is *not* a source type of [[def-em-weak-sources]]: only point sources and stationary sheets are declared there, and no line current, moving sheet or other distribution is included. The item therefore verifies classical, flux and distributional identities for an explicitly specified distribution $\rho_\lambda$ on $\mathbb R^3$ with a noncompact singularity; it is not a framework postulate covering infinite line charges, asserts no physical realisation, equilibrium or empirical content, and is not a compact-source Coulomb corollary. Real line-like distributions have finite length and transverse size, and their far fields and energies require their own hypotheses.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, the open set $\Omega=\mathbb R^3\setminus\{\text{axis}\}$, the transverse radius $\rho(x)=\sqrt{x_1^2+x_2^2}$, the radial unit vector $\hat e_r(x)=(x_1,x_2,0)/\rho(x)$, real $\lambda$ and $r_0>0$, and the fields $E,\varphi$ displayed above.

[F1] The transverse radius is continuous and positive exactly on $\Omega$, so $\Omega$ is open; on it $\rho$ is smooth with $\partial_i\rho=x_i/\rho$ for $i=1,2$ and $\partial_3\rho=0$ ([[def-metric-topology]], [[thm-metric-continuity-characterisations]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]], [[thm-real-power-continuity-and-derivatives]], [[lem-derivative-of-a-power]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-directional-and-partial-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F2] The logarithm is smooth on $(0,\infty)$ with derivative $1/t$; the divergence and curl are the classical operators of [[def-divergence-and-curl-of-a-c1-vector-field]], and the regime conventions are those of [[def-em-electrostatic-regime]], [[def-em-fields]], [[def-em-sources]], [[def-em-si-conventions]] and [[def-em-lab-geometry]] ([[thm-logarithm-derivative-and-integral]]).

[F3] The complex exponential is entire with derivative equal to itself, so the real-parameter map $\theta\mapsto e^{i\theta}$ has derivative $ie^{i\theta}$; its real and imaginary parts and modulus satisfy $|e^{i\theta}|=1$ and Euler's identity ([[def-complex-exponential]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F4] For a regular patch the outward-oriented flux is the integral of $F\cdot(\varphi_u\times\varphi_v)$ over the parameter region; the cross product and its norm are those of the Euclidean structure, and a compact Jordan parameter region $D$ is a compact Jordan measurable set equal to the closure of its nonempty connected interior. It is admissible when the parametrization is $C^1$ on a neighbourhood of $D$, the cross product is nonzero on $D^\circ$, and no point of $D^\circ$ shares its image with a distinct point of the whole region $D$; boundary seam identifications are permitted ([[def-oriented-unit-normal-and-flux-of-a-surface-patch]], [[def-admissible-regular-parametrized-surface-patch]], [[thm-surface-area-density-is-cross-product-norm]], [[def-cross-product-in-r3]], [[def-riemann-integral-over-a-jordan-set]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F5] The polar formula computes integrals in every dimension; the transverse plane is $\mathbb R^2$ with $\sigma(S^1)=2\pi$ from $|S^{n-1}|=n|B_1|$ and $|B_1|=\pi$ in dimension two ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[def-polar-surface-measure-on-the-unit-sphere]], [[cor-volume-of-the-unit-n-ball]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]).

[F6] On sigma-finite products, Tonelli equates the product integral and both iterated integrals of every nonnegative product-measurable function, allowing infinite values; Fubini equates the integrals of a complex-valued product-measurable function only after its absolute product integral is finite ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]). For every $m,n\ge1$, the Euclidean Borel sigma-algebra on $\mathbb R^{m+n}$ equals the product Borel sigma-algebra, and $\lambda_m\times\lambda_n$ agrees with $\lambda_{m+n}$ on Borel sets ([[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]], [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]]); each factor is sigma-finite by its exhaustion by finite-measure boxes [F8].

[F7] Distributions, their derivatives, test functions and the embedding of locally integrable functions are as in the cited interfaces, and the ideal point charge with charge parameter $q$ at $x_0$ has $\operatorname{div}E_q=(q/\varepsilon_0)\delta_{x_0}$ and $\operatorname{curl}E_q=0$ in $\mathcal D'(\mathbb R^3)$ ([[def-distribution]], [[def-distributional-derivative]], [[def-test-function-space-d-of-an-open-set]], [[def-regular-distribution-from-a-locally-integrable-function]], [[thm-locally-integrable-functions-embed-in-distributions]], [[pthm-em-coulomb-solution]]).

[F8] The fundamental theorem and its integrable-derivative form evaluate one-variable integrals of continuous integrands on compact intervals, and the Riemann and Lebesgue integrals of a continuous compactly supported integrand agree ([[thm-ftc-second-part]], [[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]], [[def-integral-over-a-measurable-set]], [[def-integrable-real-and-complex-functions-and-their-integrals]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F9] Monotone and dominated convergence pass limits through integrals under the stated majorants, and continuous functions are Borel with the usual monotonicity and homogeneity of the nonnegative integral ([[thm-monotone-convergence-for-the-integral]], [[thm-dominated-convergence]], [[cor-continuous-functions-are-borel-measurable]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-extreme-value-metric]], [[def-metric-ball]]).

[F10] The $z$-axis is Lebesgue null: it lies in the coordinate hyperplane $x_1=0$ ([[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]]).

[F11] Star-shapedness is defined through segments to a centre, and the potential construction and uniqueness up to a constant of [[pthm-em-electrostatic-potential]] use a star-shaped region; the framework's declared source types are point and stationary-sheet sources of [[def-em-weak-sources]] ([[def-star-shaped-open-subset-of-rn]], [[pthm-em-electrostatic-potential]], [[def-em-weak-sources]]).

## Verification

**Proof technique:** direct.

1.1 By [F1] $\Omega$ is open and $\rho$ is smooth and positive on it with $\partial_i\rho=x_i/\rho$ for $i=1,2$ and $\partial_3\rho=0$; consequently $E$ is $C^\infty$ on $\Omega$ and $E\in L^1_{\mathrm{loc}}(\Omega)$ with $|E|=\frac{|\lambda|}{2\pi\varepsilon_0\rho}$, since on every bounded set the transverse polar formula gives $\int_{\rho<A}\rho^{-1}\,d\lambda_2=2\pi A$ and Tonelli on $\mathbb R^2\times\mathbb R$ multiplies this nonnegative transverse integral (with value $0$ on the axis) by the finite longitudinal length of the containing cylinder to give a finite $\lambda_3$-integral ([F1], [F5], [F6]). Extending $E$ by $0$ on the axis does not change its $L^1_{\mathrm{loc}}$ class or any regular distribution, because the axis is null ([F10]), and the functional $\rho_\lambda(\psi)=\lambda\int_{\mathbb R}\psi(0,0,z)\,dz$ is a distribution: on a compact test support contained in a cylinder $\rho\le A$, $|z|\le H$ its absolute pairing is at most $|\lambda|\,2H\|\psi\|_\infty$ ([F7], [F9], [F10]). [given, F1, F5, F6, F7, F9, F10]

2.1 Clause (a): the chain rule and the derivative of the logarithm [F1], [F2] give $\nabla\varphi=-\frac{\lambda}{2\pi\varepsilon_0}\frac{1}{\rho}\nabla\rho=-\frac{\lambda}{2\pi\varepsilon_0\rho}\hat e_r=-E$ on $\Omega$, since $\nabla\rho=(x_1,x_2,0)/\rho=\hat e_r$. [step 1.1, F1, F2]

3.1 Clause (b): writing $E=(E_1,E_2,0)$ with $E_i=\frac{\lambda x_i}{2\pi\varepsilon_0\rho^2}$, the quotient rule and $\partial_i\rho=x_i/\rho$ give $\partial_iE_i=\frac{\lambda}{2\pi\varepsilon_0}\frac{\rho^2-2x_i^2}{\rho^4}$ for $i=1,2$, so $\operatorname{div}E=\frac{\lambda}{2\pi\varepsilon_0}\frac{2\rho^2-2x_1^2-2x_2^2}{\rho^4}=0$; and $\operatorname{curl}E$ has components $\partial_2E_3-\partial_3E_2=0$, $\partial_3E_1-\partial_1E_3=0$ and $\partial_1E_2-\partial_2E_1=\frac{\lambda}{2\pi\varepsilon_0}\frac{-2x_1x_2+2x_1x_2}{\rho^4}=0$, because $E_3=0$ and $E$ does not depend on $x_3$ ([F1], [F2]). Hence $(E,0)$ satisfies the reduced equations with zero volume source on $\Omega$: the pair is time independent and the reduced smooth-branch equations are exactly $\operatorname{div}E=0$, $\operatorname{curl}E=0$ [F2]. [step 2.1, F1, F2]

4.1 Clause (c): let $u(\theta)=\operatorname{Re}e^{i\theta}$, $v(\theta)=\operatorname{Im}e^{i\theta}$, and let $\Phi(\theta,z)=(ru(\theta),rv(\theta),z)$ on $D=[0,2\pi]\times[-L/2,L/2]$. This compact rectangle is the closure of its nonempty connected interior and is Jordan measurable, its boundary consisting of four line segments. By [F3], $\Phi$ is $C^1$ on a neighbourhood of $D$ with $\partial_\theta\Phi=r(u',v',0)=r(-v,u,0)$ and $\partial_z\Phi=(0,0,1)$, so $\partial_\theta\Phi\times\partial_z\Phi=r(u,v,0)$ is nonzero on the interior because $r>0$ and $u^2+v^2=|e^{i\theta}|^2=1$; by [[thm-kernel-and-fibres-of-complex-exponential]], equality of images forces equal $z$ and $\theta-\theta^\prime\in2\pi\mathbb Z$. If $0<\theta<2\pi$ and $0\le\theta^\prime\le2\pi$, their difference lies strictly between $-2\pi$ and $2\pi$, so it is zero. Thus no interior point shares its image with a distinct point of the whole rectangle; the seam $\theta=0\leftrightarrow2\pi$ lies on the boundary. Hence $(D,\Phi)$ is an admissible regular patch for the lateral surface [F4]. Since $E(\Phi(\theta,z))=\frac{\lambda}{2\pi\varepsilon_0r}(u,v,0)$, the flux integrand is $E\cdot(\partial_\theta\Phi\times\partial_z\Phi)=\frac{\lambda}{2\pi\varepsilon_0r}\cdot r=\frac{\lambda}{2\pi\varepsilon_0}$, and the flux equals $\frac{\lambda}{2\pi\varepsilon_0}\lambda_2(D)=\frac{\lambda}{2\pi\varepsilon_0}\cdot2\pi L=\frac{\lambda L}{\varepsilon_0}$ by the box measure and the Riemann/Lebesgue agreement for the constant integrand ([F4], [F8]). [step 3.1, F3, F4, F8]

5.1 Clause (d), superposition representation: for a longitudinal coordinate $t\in\mathbb R$ (metres) put $z_t:=te_3$ and $E_{1,t}:\mathbb R^3\to\mathbb R^3$ by $E_{1,t}(x):=\frac{x-z_t}{4\pi\varepsilon_0|x-z_t|^3}$ for $x\ne z_t$ and set $E_{1,t}(z_t):=0$ (the point-charge field per unit charge at $z_t$, obtained from [F7] by dividing the field of any nonzero charge $q$ by $q$, with units V C$^{-1}$ m$^{-1}$). For $x\in\Omega$, direct computation with the primitive $t\mapsto\frac{t}{\rho^2\sqrt{\rho^2+t^2}}$ of $(\rho^2+t^2)^{-3/2}$ shows $\int_{-T}^{T}\frac{dt}{(\rho^2+t^2)^{3/2}}=\frac{2T}{\rho^2\sqrt{\rho^2+T^2}}\to\frac{2}{\rho^2}$ as $T\to\infty$ and $\int_{x_3-T}^{x_3+T}\frac{x_3-t}{(\rho^2+(x_3-t)^2)^{3/2}}dt=0$ by oddness for every $T$ ([F8]); hence, for every $x\in\Omega$, $$\lambda\int_{\mathbb R}E_{1,t}(x)\,dt=\lambda\Bigl(\frac{x_1}{2\pi\varepsilon_0\rho^2},\frac{x_2}{2\pi\varepsilon_0\rho^2},0\Bigr)=E(x),$$ the first two components because $\int_{\mathbb R}(\rho^2+t^2)^{-3/2}dt=2/\rho^2$ and the third by oddness. Moreover $|E_{1,t}(x)|=\frac{1}{4\pi\varepsilon_0(\rho^2+(x_3-t)^2)}\le\frac{1}{4\pi\varepsilon_0}\bigl(\frac{\mathbf 1_{|x_3-t|\le\rho}}{\rho^2}+\frac{\mathbf 1_{|x_3-t|>\rho}}{(x_3-t)^2}\bigr)$, whose $t$-integral is at most $\frac{4}{4\pi\varepsilon_0\rho}=\frac{1}{\pi\varepsilon_0\rho}$, and $x\mapsto|\nabla\psi(x)|/\rho(x)$, extended by $0$ on the axis, is integrable for every compactly supported test: $|\nabla\psi|$ is bounded on a containing cylinder and step 1.1 supplies the integral of $1/\rho$ there ([F5], [F6], [F9]). [step 1.1, step 4.1, F5, F6, F7, F8, F9]

6.1 Clause (d), the distributional identities: let $\psi\in C_c^\infty(\mathbb R^3)$ and let $\Psi\in C_c^\infty(\mathbb R^3;\mathbb C^3)$. For $h=\nabla\psi$ or $h=\operatorname{curl}\Psi$, the function $g_h(x,t):=|E_{1,t}(x)||h(x)|$ is nonnegative and Borel on $\mathbb R^3\times\mathbb R$: it is continuous off the closed set $\{(x,t):x=te_3\}$ and is $0$ there. By [F6] it is product-measurable, and Tonelli, applied before any Fubini interchange, gives $$\int_{\mathbb R^3\times\mathbb R}g_h\,d(\lambda_3\times\lambda_1)=\int_{\mathbb R^3}\Bigl(\int_{\mathbb R}g_h(x,t)\,dt\Bigr)\,dx\le\frac{1}{\pi\varepsilon_0}\int_{\Omega}\frac{|h(x)|}{\rho(x)}\,dx<\infty.$$ The bound holds off the null axis by step 5.1; the last integral is finite because $h$ is bounded and compactly supported and step 1.1 gives the transverse majorant. Thus $E_{1,t}\cdot h$ belongs to product $L^1$, and Fubini [F6] now licenses both orders of integration. Using step 5.1 almost everywhere, $$\langle\operatorname{div}E,\psi\rangle=-\int_{\mathbb R^3}E\cdot\nabla\psi\,d\lambda_3=-\lambda\int_{\mathbb R}\Bigl(\int_{\mathbb R^3}E_{1,t}\cdot\nabla\psi\,d\lambda_3\Bigr)dt=\lambda\int_{\mathbb R}\langle\operatorname{div}E_{1,t},\psi\rangle\,dt,$$ and [F7] gives $\operatorname{div}E_{1,t}=\frac{1}{\varepsilon_0}\delta_{z_t}$, so the last expression is $\frac{\lambda}{\varepsilon_0}\int_{\mathbb R}\psi(0,0,t)\,dt=\frac{1}{\varepsilon_0}\rho_\lambda(\psi)$ for every test function, which is the first identity. The same justified interchange for $h=\operatorname{curl}\Psi$ gives $\langle\operatorname{curl}E,\Psi\rangle=\int E\cdot\operatorname{curl}\Psi=\lambda\int_{\mathbb R}\langle\operatorname{curl}E_{1,t},\Psi\rangle dt=0$, since each translated unit-charge field has vanishing distributional curl by [F7]; hence $\operatorname{curl}E=0$ in $\mathcal D'(\mathbb R^3)$. [step 1.1, step 5.1, F6, F7, F9, F10]

7.1 Clause (e): with $\varphi=-\frac{\lambda}{2\pi\varepsilon_0}\log(\rho/r_0)$, the limits $\rho\to\infty$ and the $r_0$-shift are the elementary properties of the logarithm [F2]: replacing $r_0$ by $r_0'$ adds $-\frac{\lambda}{2\pi\varepsilon_0}\log(r_0/r_0')=\frac{\lambda}{2\pi\varepsilon_0}\log(r_0'/r_0)$ to $\varphi$, which cancels in $\nabla\varphi$, and as $\rho\to\infty$ the potential diverges to $-\infty$ for $\lambda>0$ and to $+\infty$ for $\lambda<0$, so for $\lambda\ne0$ no normalisation at infinity is available ([F11]). If $\lambda=0$ then $E=0$, $\varphi=0$, $\rho_\lambda=0$, and every flux and cutoff energy vanishes by the identities above. For non-star-shapedness, let $a\in\Omega$; then $-a$ lies in $\Omega$ and the segment $s\mapsto(1-2s)a$ at $s=1/2$ is $0$, which is not in $\Omega$, so no point of $\Omega$ is a star centre for the whole set ([F1], [F11]). [step 6.1, F1, F2, F11]

8.1 Clause (f): $|E|^2=\frac{\lambda^2}{4\pi^2\varepsilon_0^2\rho^2}$, and the two-dimensional polar formula of [F5], applied in the transverse variables and combined with Tonelli for the nonnegative integrand in the $x_3$-variable [F6], gives $\int_{\{\delta<\rho<R,|x_3|<L/2\}}|E|^2\,d\lambda_3=L\cdot\frac{\lambda^2}{4\pi^2\varepsilon_0^2}\cdot2\pi\log\frac{R}{\delta}=\frac{\lambda^2L}{2\pi\varepsilon_0^2}\log\frac{R}{\delta}$; multiplying by $\frac{\varepsilon_0}{2}$ gives the displayed identity. For $\lambda\ne0$ the factor $\log(R/\delta)$ tends to $+\infty$ as $\delta\downarrow0$ and as $R\to\infty$, so no finite energy per unit length exists ([F5], [F9]). [step 7.1, F5, F6, F9]

9.1 Clause (g) records the scope: [F11] declares only point and stationary-sheet sources, so the line distribution $\rho_\lambda$ is outside the framework's source types; the construction used the ideal point-charge identity of [F7] superimposed along the axis with the absolute majorant of step 5.1, the classical computations of steps 2.1-4.1 on the open set $\Omega$, and the polar/Fubini computations of steps 6.1-8.1. No physical realisation, equilibrium, material model, self-force or empirical claim is made, and no compact-source corollary is asserted; this is exactly the scope stated. [step 8.1, F7, F11] ∎

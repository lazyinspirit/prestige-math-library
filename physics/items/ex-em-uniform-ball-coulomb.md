---
id: ex-em-uniform-ball-coulomb
kind: example
title: "The uniformly charged ball: interior and exterior fields, continuous potential and finite energy"
domain: physics
physical_scope: "The uniformly charged ball of radius $a$ and total charge $Q$ in vacuum: the candidate piecewise field and continuous potential, the pointwise and distributional static equations with the piecewise-constant density and zero surface charge, the exterior Coulomb field of total charge $Q$, the vanishing jump of the normal field, and the finite energy $3Q^2/(20\\pi\\varepsilon_0a)$ equal to the assembly integral. The density is only piecewise continuous; no uniqueness, empirical or stability claim is made."
status: published
origin: pipeline
proof_strategy: direct
deps: ["pthm-em-coulomb-solution", "pthm-em-electrostatic-field-energy", "def-em-weak-sources", "def-em-electrostatic-regime", "def-em-fields", "def-em-sources", "def-em-si-conventions", "def-em-lab-geometry", "lem-em-interface-derivatives", "lem-em-euclidean-balls-and-annuli-are-bounded-c-one-domains", "def-em-surface-distribution", "def-laplacian-of-a-c2-function", "def-divergence-and-curl-of-a-c1-vector-field", "def-directional-and-partial-derivatives", "thm-algebra-of-derivatives", "thm-chain-rule-for-total-derivatives", "thm-continuous-partial-derivatives-imply-total-differentiability", "lem-derivative-of-a-power", "thm-real-power-continuity-and-derivatives", "thm-polar-coordinates-formula-for-lebesgue-measure", "def-polar-surface-measure-on-the-unit-sphere", "cor-volume-of-the-unit-n-ball", "lem-euclidean-chart-measure-agrees-with-polar-surface-measure", "def-metric-ball", "def-euclidean-inner-product", "lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric", "def-integral-over-a-measurable-set", "def-integrable-real-and-complex-functions-and-their-integrals", "prop-order-and-scalar-rules-for-the-nonnegative-integral", "cor-continuous-functions-are-borel-measurable", "cor-integral-over-a-null-set-vanishes", "def-measure-null-set-and-almost-everywhere", "def-distribution", "def-distributional-derivative", "def-regular-distribution-from-a-locally-integrable-function", "thm-locally-integrable-functions-embed-in-distributions", "def-test-function-space-d-of-an-open-set", "def-ck-euclidean-maps-and-diffeomorphisms", "def-countable-choice", "thm-clairaut-schwarz-mixed-partials", "thm-ftc-second-part", "thm-monotone-convergence-for-the-integral", "prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null", "lem-riemann-lebesgue-comparison-for-distribution-test-integrands"]
dependency_roles:
  pthm-em-coulomb-solution: physical-result
  pthm-em-electrostatic-field-energy: physical-result
  def-em-weak-sources: formulation-prerequisite
  def-em-electrostatic-regime: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  lem-em-interface-derivatives: mathematical-premise
  lem-em-euclidean-balls-and-annuli-are-bounded-c-one-domains: mathematical-premise
  def-em-surface-distribution: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  def-polar-surface-measure-on-the-unit-sphere: mathematical-premise
  cor-volume-of-the-unit-n-ball: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
  def-metric-ball: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  cor-continuous-functions-are-borel-measurable: mathematical-premise
  cor-integral-over-a-null-set-vanishes: mathematical-premise
  def-measure-null-set-and-almost-everywhere: mathematical-premise
  def-distribution: mathematical-premise
  def-distributional-derivative: mathematical-premise
  def-regular-distribution-from-a-locally-integrable-function: mathematical-premise
  thm-locally-integrable-functions-embed-in-distributions: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null: mathematical-premise
  lem-riemann-lebesgue-comparison-for-distribution-test-integrands: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)
      url: https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf
      locator: Section 2.2.3 Example 2.2 and Problem 2.12 printed pp. 70-72 (the fields inside and outside a uniformly charged solid sphere) and Sections 2.4.2-2.4.3 printed pp. 92-95 (the energy of the uniformly charged sphere). Read in the stamped scanned full text, OCR cross-checked.
    - title: David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)
      url: https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf
      locator: Section 2.1.2 printed pp. 11-12 (interior and exterior fields of a uniform sphere, continuity at the surface) and Section 2.3 printed pp. 25-28 (its energy). Read in the stamped full text.
    - title: L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields, 3rd revised English edition (Pergamon 1971, 387 pp.; full text)
      url: http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf
      locator: Section 36 printed pp. 88-89 (spherically symmetric static fields and the exterior Coulomb field). Read in the stamped full text.
    - title: Weng Cho Chew, Lectures on Electromagnetic Field Theory (Purdue University, Fall 2020, 497 pp.)
      url: https://engineering.purdue.edu/wcchew/ece604f20/EMFTAll.pdf
      locator: Sections 3.3.2-3.3.3 printed pp. 35-36 (Poisson's equation and the radial solution for a bounded source). Read in the stamped full text.
---

## Example

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$), inherited from the cited Lebesgue, polar, Newtonian and distribution interfaces ([[def-countable-choice]]).
Let $a>0$, $Q\in\mathbb R$, let $\overline B_a=\{x:|x|\le a\}$ ([[def-metric-ball]]), and define, with the constants of [[def-em-si-conventions]] ([[def-em-fields]], [[def-em-sources]]),
$$\rho(x):=\frac{3Q}{4\pi a^3}\,\mathbf 1_{\{|x|<a\}}(x),\qquad E(x):=\frac{Q}{4\pi\varepsilon_0}\begin{cases}x/a^3,&|x|<a,\\ x/|x|^3,&|x|\ge a,\end{cases}\qquad \varphi(x):=\begin{cases}\dfrac{Q(3a^2-|x|^2)}{8\pi\varepsilon_0a^3},&|x|\le a,\\ \dfrac{Q}{4\pi\varepsilon_0|x|},&|x|\ge a.\end{cases}$$
(The value of $\rho$ on the sphere $\{|x|=a\}$ is immaterial: it is a Lebesgue-null set by the polar calculation $\lambda_3(S_a)=4\pi\int_0^\infty\mathbf1_{\{a\}}(r)r^2dr=0$, since the one-dimensional singleton has measure zero ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[def-measure-null-set-and-almost-everywhere]], [[cor-integral-over-a-null-set-vanishes]]).) Then:

(a) [Regularity and gradient] $E$ is continuous on $\mathbb R^3$, of class $C^\infty$ on each of the open regions $\{|x|<a\}$, $\{|x|>a\}$; $\varphi\in C^1(\mathbb R^3)$, its displayed branch derivatives agree on $\{|x|=a\}$, and $E=-\nabla\varphi$ on $\mathbb R^3$ ([[thm-continuous-partial-derivatives-imply-total-differentiability]], [[thm-chain-rule-for-total-derivatives]], [[lem-derivative-of-a-power]], [[thm-real-power-continuity-and-derivatives]]);

(b) [Classical equations] for every $x$ with $|x|\ne a$,
$$\operatorname{div}E(x)=\rho(x)/\varepsilon_0,\qquad \operatorname{curl}E(x)=0$$
([[def-divergence-and-curl-of-a-c1-vector-field]], [[thm-algebra-of-derivatives]]);

(c) [Weak equations] the pair $(E,(\rho,0))$ satisfies the spatial distributional equations $\operatorname{div}E=\rho/\varepsilon_0$, $\operatorname{curl}E=0$ in $\mathcal D'(\mathbb R^3)$: $E$ is $C^1$ on each side of the sphere $S_a=\{|x|=a\}$ with one-sided continuous traces that agree, $[E]=0$, so [[lem-em-interface-derivatives]] gives
$$\operatorname{div}E=\{\operatorname{div}E\}_{\mathrm{piecewise}}+n\cdot[E]\,\delta_{S_a}=\rho/\varepsilon_0,\qquad \operatorname{curl}E=\{\operatorname{curl}E\}_{\mathrm{piecewise}}+n\times[E]\,\delta_{S_a}=0,$$
with $\rho$ the displayed locally integrable density and no surface-charge term ([[def-em-weak-sources]], [[lem-em-euclidean-balls-and-annuli-are-bounded-c-one-domains]] for the sphere as a compact embedded smooth hypersurface); by the fixed-time reading of [[def-em-electrostatic-regime]] (e) these are the weak equations of the static model for this source, with zero singular part;

(d) [Energy] the field energy is finite and equals the assembly integral,
$$\frac{\varepsilon_0}{2}\int_{\mathbb R^3}|E|^2\,d\lambda_3=\frac12\int_{\mathbb R^3}\rho\varphi\,d\lambda_3=\frac{3Q^2}{20\pi\varepsilon_0a},$$
computed with the polar formula ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[def-polar-surface-measure-on-the-unit-sphere]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]], [[cor-volume-of-the-unit-n-ball]]); the value agrees with the smooth-source identity of [[pthm-em-electrostatic-field-energy]] although the density here is only piecewise continuous;

(e) [Consistency and contrast] for $|x|>a$ the field is exactly the point-charge Coulomb field of total charge $Q$ centred at the origin ([[pthm-em-coulomb-solution]] (d) with $x_0=0$) although the source is the extended ball, and for $|x|<a$ it is the affine field $Qx/(4\pi\varepsilon_0a^3)$; $\varphi$ is continuous at $|x|=a$ and decays at infinity; the field is bounded on $\mathbb R^3$, so no divergence of field energy occurs for the extended source;

(f) [Scope] the example verifies the displayed candidate and its energy; it does not claim uniqueness of the solution (this would require boundary data and an infinity condition, and the density is not continuous), it asserts no empirical content, and the density $\rho$ is treated as a bounded $L^1_{\mathrm{loc}}$ density with the sphere carrying no surface charge ($[E]=0$).

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, $a>0$, $Q\in\mathbb R$, the density $\rho$, field $E$ and potential $\varphi$ displayed above, and the sphere $S_a=\{x:|x|=a\}$.

[F1] The polar formula and the sphere area $\sigma(S^2)=4\pi$, together with $|S^{n-1}|=n|B_1|$ and $|B_1|=4\pi/3$, compute radial integrals; the one-dimensional singleton is null, so the sphere $\{|x|=a\}$ is Lebesgue null and integrals are unchanged by modifying the integrand there ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[def-polar-surface-measure-on-the-unit-sphere]], [[cor-volume-of-the-unit-n-ball]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]], [[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]], [[cor-integral-over-a-null-set-vanishes]], [[def-measure-null-set-and-almost-everywhere]], [[def-integral-over-a-measurable-set]], [[def-integrable-real-and-complex-functions-and-their-integrals]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]]).

[F2] Real powers, the chain rule and the algebra rules for derivatives compute the gradients and divergences below, and continuous partial derivatives give total differentiability with the gradient as derivative ([[lem-derivative-of-a-power]], [[thm-real-power-continuity-and-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[thm-continuous-partial-derivatives-imply-total-differentiability]], [[def-directional-and-partial-derivatives]], [[def-divergence-and-curl-of-a-c1-vector-field]], [[def-laplacian-of-a-c2-function]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-euclidean-inner-product]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]], [[def-metric-ball]]).

[F3] Across a stationary interface the distributional divergence and curl of a field that is $C^1$ on each side with one-sided $C^1$ traces are the piecewise classical expressions plus the jump terms $n\cdot[F]\delta_S$ and $n\times[F]\delta_S$, with $[F]=F_+-F_-$; the surface distribution $\delta_S$ is the surface integral functional, and the sphere is a compact embedded smooth hypersurface with two-sided normal ([[lem-em-interface-derivatives]], [[def-em-surface-distribution]], [[lem-em-euclidean-balls-and-annuli-are-bounded-c-one-domains]], [[def-distribution]], [[def-test-function-space-d-of-an-open-set]]).

[F4] The Coulomb solution's point-charge branch provides the exterior field $Qx/(4\pi\varepsilon_0|x|^3)$ with its distributional identities, and the compact-source energy identity states that for smooth compactly supported densities the field energy $(\varepsilon_0/2)\int|E|^2$ equals the assembly integral $\frac12\int\rho\varphi$; the weak-solution predicate and the static-to-distributional reading are those of the framework ([[pthm-em-coulomb-solution]], [[pthm-em-electrostatic-field-energy]], [[def-em-weak-sources]], [[def-em-electrostatic-regime]], [[def-em-fields]], [[def-em-sources]], [[def-em-si-conventions]], [[def-em-lab-geometry]], [[def-distributional-derivative]], [[def-regular-distribution-from-a-locally-integrable-function]], [[thm-locally-integrable-functions-embed-in-distributions]], [[cor-continuous-functions-are-borel-measurable]], [[thm-ftc-second-part]], [[thm-monotone-convergence-for-the-integral]], [[thm-clairaut-schwarz-mixed-partials]]).

## Verification

**Proof technique:** direct.

1.1 Setup: the density is bounded and supported in $\overline B_a$, hence in $L^1_{\mathrm{loc}}(\mathbb R^3)$; its total charge is $\int\rho=\frac{3Q}{4\pi a^3}\frac{4\pi a^3}{3}=Q$ by [F1]; the sphere is null, so the value of $\rho$ there is immaterial ([F1]). Writing $r=|x|$ and $h(r):=\frac{Q}{4\pi\varepsilon_0a^3}$ for $r<a$ and $h(r):=\frac{Q}{4\pi\varepsilon_0r^3}$ for $r\ge a$, the field is $E(x)=h(r)x$ and the potential is the radial function $\varphi(x)=f(r)$ with $f(r)=\frac{Q(3a^2-r^2)}{8\pi\varepsilon_0a^3}$ for $r\le a$ and $f(r)=\frac{Q}{4\pi\varepsilon_0r}$ for $r\ge a$. Both branches are smooth on their open regions, $h$ is continuous at $r=a$ with common value $\frac{Q}{4\pi\varepsilon_0a^3}$, and $f$ is continuous with $f(a)=\frac{Q}{4\pi\varepsilon_0a}$ from both branches; moreover $f'(r)=-rh(r)$ on each side, with common value $f'(a)=-\frac{Q}{4\pi\varepsilon_0a^2}$, so the one-sided limits of $\nabla\varphi=f'(r)x/r$ agree on $S_a$ ([F2]). [given, F1, F2]

2.1 Clause (a): on each coordinate line the sphere has at most two intersection points. On every smooth subinterval the derivative of $\varphi$ is the corresponding component of $-E$, with matching limits at the intersection points by step 1.1. Apply the FTC [F4] on those subintervals and pass their endpoints to an intersection; the resulting increment formula is the integral of the continuous component $-E_i$ along the whole short line segment. Dividing by the segment length proves the same partial derivative at the intersection. Thus all partial derivatives exist and are continuous, so the continuous-partial-derivatives characterization gives total differentiability at every point with $\nabla\varphi=-E$; $E$ is continuous because $h$ is, and both $E$ and $\varphi$ are smooth on each open side ([F2]). [step 1.1, F2, F4]

3.1 Clause (b): for $|x|<a$, $E(x)=\frac{Q}{4\pi\varepsilon_0a^3}x$ is affine, so $\operatorname{div}E=\frac{3Q}{4\pi\varepsilon_0a^3}=\rho(x)/\varepsilon_0$ and $\operatorname{curl}E=0$; for $|x|>a$, $E(x)=\frac{Qx}{4\pi\varepsilon_0|x|^3}$ is radial of the Coulomb shape, and the quotient rule with $\partial_i|x|=x_i/|x|$ gives $\operatorname{div}E=\frac{Q}{4\pi\varepsilon_0}\sum_i(\frac{1}{|x|^3}-\frac{3x_i^2}{|x|^5})=0=\rho(x)/\varepsilon_0$ and $\operatorname{curl}E=0$ componentwise, since for all indices $j,k$, $\partial_j E_k=\frac{Q}{4\pi\varepsilon_0}(\delta_{jk}|x|^{-3}-3x_jx_k|x|^{-5})$ is symmetric in $j,k$ ([F2]). [step 2.1, F1, F2]

4.1 Clause (c): the sphere $S_a$ is a compact embedded smooth two-sided hypersurface with outward normal $n(x)=x/|x|$; the field $E$ is $C^1$ on $\{|x|<a\}$ and on $\{|x|>a\}$ with one-sided $C^1$ traces on $S_a$: inside, $\partial_jE_k=\frac{Q}{4\pi\varepsilon_0a^3}\delta_{jk}$; outside the derivative formula in step 3.1 extends continuously to $|x|=a>0$. By step 2.1 both traces are the continuous field $E$, so $[E]=E_+-E_-=0$ on $S_a$ ([F3]). The interface lemma [F3] therefore gives $\operatorname{div}E=\{\operatorname{div}E\}_{\mathrm{piecewise}}+n\cdot[E]\delta_{S_a}$ and $\operatorname{curl}E=\{\operatorname{curl}E\}_{\mathrm{piecewise}}+n\times[E]\delta_{S_a}$; the jump terms vanish, and the piecewise expressions equal $\rho/\varepsilon_0$ and $0$ respectively as locally integrable functions by step 3.1 and the nullity of the sphere ([F1], [F3]). Hence $\operatorname{div}E=\rho/\varepsilon_0$ and $\operatorname{curl}E=0$ in $\mathcal D'(\mathbb R^3)$; by the static-to-distributional reading these are the weak equations for the source $(\rho,0)$ with zero singular part ([F4]). [step 3.1, F1, F3, F4]

5.1 Clause (d), field energy: $|E|^2=h(r)^2r^2$, so the polar formula gives $$\int_{\mathbb R^3}|E|^2\,d\lambda_3=4\pi\Bigl(\int_0^a\frac{Q^2r^2}{16\pi^2\varepsilon_0^2a^6}r^2\,dr+\int_a^\infty\frac{Q^2}{16\pi^2\varepsilon_0^2r^4}r^2\,dr\Bigr)=\frac{Q^2}{4\pi\varepsilon_0^2}\Bigl(\frac{a^5}{5a^6}+\frac1a\Bigr)=\frac{3Q^2}{10\pi\varepsilon_0^2a},$$ using $\int_0^ar^4dr=a^5/5$ and $\int_a^\infty r^{-2}dr=1/a$ ([F1], [F2]); multiplying by $\varepsilon_0/2$ gives $\frac{\varepsilon_0}{2}\int|E|^2=\frac{3Q^2}{20\pi\varepsilon_0a}$, which is finite. [step 4.1, F1, F2]

6.1 Clause (d), assembly integral: since $\rho$ vanishes off $\{|x|<a\}$, $$\frac12\int_{\mathbb R^3}\rho\varphi\,d\lambda_3=\frac12\cdot\frac{3Q}{4\pi a^3}\cdot\frac{Q}{8\pi\varepsilon_0a^3}\int_{|x|<a}\bigl(3a^2-|x|^2\bigr)d\lambda_3,$$ and the polar formula gives $\int_{|x|<a}(3a^2-|x|^2)d\lambda_3=4\pi\int_0^a(3a^2r^2-r^4)dr=4\pi\bigl(a^5-\frac{a^5}{5}\bigr)=\frac{16\pi a^5}{5}$ ([F1]); hence $\frac12\int\rho\varphi=\frac12\cdot\frac{3Q^2}{32\pi^2\varepsilon_0a^6}\cdot\frac{16\pi a^5}{5}=\frac{3Q^2}{20\pi\varepsilon_0a}$, which equals the field energy of step 5.1; the same value as the smooth-source identity of [F4] is thus obtained although $\rho$ is only piecewise continuous, the computation being valid because the finiteness and equalities were verified directly for this density with a null interface ([F1]). [step 5.1, F1, F4]

7.1 Clause (e): for $|x|>a$ the second branch of $E$ is exactly the point-charge field $\frac{Qx}{4\pi\varepsilon_0|x|^3}$ of [F4] with $x_0=0$, so the exterior field is the Coulomb field of the total charge $Q$ even though the source is extended; for $|x|<a$ the field is the affine field $\frac{Q}{4\pi\varepsilon_0a^3}x$; the potential is continuous at $|x|=a$ and decays as $|x|\to\infty$ by its exterior branch; and $|E(x)|\le\frac{|Q|}{4\pi\varepsilon_0a^2}$ on all of $\mathbb R^3$, the maximum being attained at $|x|=a$, so the field energy is finite and no divergence occurs ([F1], [F2], [F4]). [step 6.1, F1, F2, F4]

8.1 Clause (f): the verification produced the displayed candidate, its pointwise equations off the sphere, its distributional equations with zero surface-charge jump, and its exact finite energy; no uniqueness is claimed, since uniqueness would require boundary data and an infinity condition and the density is not continuous, and the pair $(E,(\rho,0))$ is read through the weak predicate and the static-to-distributional dictionary only. No empirical content is asserted, and the sphere carries no surface charge because $[E]=0$; this is exactly the scope stated. [step 4.1, step 7.1, F3, F4] ∎

---
id: pthm-em-electrostatic-field-energy
kind: physics-theorem
title: Finite-source assembly energy equals the electric field energy
domain: physics
physical_scope: "Electrostatic energy of a compactly supported $C^1$ charge distribution in vacuum within the pure electrostatic regime: the field energy $(\\varepsilon_0/2)\\int|E|^2$, the assembly integral $\\tfrac12\\int\\rho\\varphi$ and the symmetric double-kernel energy $(2\\varepsilon_0)^{-1}\\iint\\Phi(x-y)\\rho(x)\\rho(y)$ are finite and equal. The assembly is an ideal quasi-static model with sources held by external support; no radiation, time-dependent work, material model, stability claim or identification of field energy with particle rest mass is asserted."
status: published
origin: pipeline
proof_strategy: direct
deps: ["pthm-em-coulomb-solution", "pthm-em-electrostatic-work", "lem-em-euclidean-balls-and-annuli-are-bounded-c-one-domains", "lem-em-newtonian-far-field-gradient", "cor-first-green-identity-on-a-bounded-c-one-domain", "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces", "thm-tonelli-theorem-for-sigma-finite-product-spaces", "thm-dominated-convergence", "thm-monotone-convergence-for-the-integral", "thm-decay-of-the-newtonian-potential-of-compactly-supported-data", "cor-volume-of-the-unit-n-ball", "lem-euclidean-chart-measure-agrees-with-polar-surface-measure", "thm-polar-coordinates-formula-for-lebesgue-measure", "def-laplace-fundamental-solution-with-positive-minus-laplacian-sign", "def-newtonian-potential", "def-laplacian-of-a-c2-function", "def-divergence-and-curl-of-a-c1-vector-field", "def-directional-and-partial-derivatives", "thm-algebra-of-derivatives", "def-em-fields", "def-em-sources", "def-em-si-conventions", "def-em-lab-geometry", "def-em-electrostatic-regime", "def-metric-ball", "def-euclidean-inner-product", "lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric", "def-integral-over-a-measurable-set", "def-integrable-real-and-complex-functions-and-their-integrals", "prop-order-and-scalar-rules-for-the-nonnegative-integral", "cor-continuous-functions-are-borel-measurable", "thm-extreme-value-metric", "def-ck-euclidean-maps-and-diffeomorphisms", "def-countable-choice", "def-polar-surface-measure-on-the-unit-sphere", "thm-integrals-are-invariant-under-measure-preserving-maps", "thm-lebesgue-outer-measure-and-measurability-are-translation-invariant", "thm-borel-products-of-euclidean-spaces-are-euclidean-borel", "thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets", "lem-riemann-lebesgue-comparison-for-distribution-test-integrands"]
dependency_roles:
  pthm-em-coulomb-solution: physical-result
  pthm-em-electrostatic-work: physical-result
  lem-em-euclidean-balls-and-annuli-are-bounded-c-one-domains: mathematical-premise
  lem-em-newtonian-far-field-gradient: mathematical-premise
  cor-first-green-identity-on-a-bounded-c-one-domain: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  thm-decay-of-the-newtonian-potential-of-compactly-supported-data: mathematical-premise
  cor-volume-of-the-unit-n-ball: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  def-laplace-fundamental-solution-with-positive-minus-laplacian-sign: mathematical-premise
  def-newtonian-potential: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-em-fields: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-electrostatic-regime: formulation-prerequisite
  def-metric-ball: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  cor-continuous-functions-are-borel-measurable: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-countable-choice: mathematical-premise
  def-polar-surface-measure-on-the-unit-sphere: mathematical-premise
  thm-integrals-are-invariant-under-measure-preserving-maps: mathematical-premise
  thm-lebesgue-outer-measure-and-measurability-are-translation-invariant: mathematical-premise
  thm-borel-products-of-euclidean-spaces-are-euclidean-borel: mathematical-premise
  thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets: mathematical-premise
  lem-riemann-lebesgue-comparison-for-distribution-test-integrands: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)
      url: https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf
      locator: Sections 2.4.2-2.4.4 printed pp. 92-96 (the energy of a continuous distribution, Eqs. (2.43) and (2.45), the assembly interpretation and the comments on point-charge energy). Read in the stamped scanned full text, OCR cross-checked.
    - title: David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)
      url: https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf
      locator: Section 2.3 printed pp. 25-28 (electrostatic energy (2.23)-(2.27), assembly and the point-particle self-energy). Read in the stamped full text.
    - title: L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields, 3rd revised English edition (Pergamon 1971, 387 pp.; full text)
      url: http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf
      locator: Section 37 printed pp. 89-90 (U = (1/2) integral rho phi and the point-charge self-energy discussion); Gaussian units re-expressed in SI. Read in the stamped full text.
    - title: Weng Cho Chew, Lectures on Electromagnetic Field Theory (Purdue University, Fall 2020, 497 pp.)
      url: https://engineering.purdue.edu/wcchew/ece604f20/EMFTAll.pdf
      locator: Sections 3.3.2-3.3.3 printed pp. 35-36 (the static Green's function and the convolution solution underlying the double-kernel energy). Read in the stamped full text.
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$) as carried by the Lebesgue, polar and surface interfaces cited below ([[def-countable-choice]]).
Let $\rho\in C^1_c(\mathbb R^3;\mathbb R)$ with support in $\overline B_R$ ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-metric-ball]]), let $\varphi=\varepsilon_0^{-1}N\rho$ and $E=-\nabla\varphi$ be the smooth-branch Coulomb solution of [[pthm-em-coulomb-solution]](a) with the constants of [[def-em-si-conventions]] and the pure electrostatic regime of [[def-em-electrostatic-regime]], and let $\Phi$ be the $n=3$ kernel, $\Phi(z)=1/(4\pi|z|)$ ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]], [[cor-volume-of-the-unit-n-ball]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]).
Then:

(a) [Finiteness] the three quantities
$$\frac{\varepsilon_0}{2}\int_{\mathbb R^3}|E|^2\,d\lambda_3,\qquad \frac12\int_{\mathbb R^3}\rho\varphi\,d\lambda_3,\qquad +\frac{1}{2\varepsilon_0}\iint_{\mathbb R^3\times\mathbb R^3}\Phi(x-y)\rho(x)\rho(y)\,d(\lambda_3\times\lambda_3)(x,y)$$
are finite real numbers;

(b) [Identity] they are equal:
$$\frac{\varepsilon_0}{2}\int_{\mathbb R^3}|E|^2\,d\lambda_3=\frac12\int_{\mathbb R^3}\rho\varphi\,d\lambda_3=\frac{1}{2\varepsilon_0}\iint_{\mathbb R^3\times\mathbb R^3}\Phi(x-y)\rho(x)\rho(y)\,d(\lambda_3\times\lambda_3)(x,y).$$
The last expression is the **external assembly work** of the ideal quasistatic bookkeeping family $\rho_s=s\rho$, $\varphi_s=s\varphi$ for $0\le s\le1$. An added test charge brought from infinity, where the potential is zero, has electric-force work $-dq\,\varphi_s$ by [[pthm-em-electrostatic-work]]; the balancing external work is $+dq\,\varphi_s$. Therefore $W_{\rm ext}=\int_0^1s\,ds\int\rho\varphi=\tfrac12\int\rho\varphi$. Both signs of $\rho$ are allowed. The symmetric double kernel gives the equivalent ordered-pair interpretation of the factor $1/2$.

(c) [Scope] the identity is a statement about the ideal quasi-static assembly of a compactly supported $C^1$ charge distribution in vacuum, all sources being held in place by external support ([[def-em-electrostatic-regime]]). It asserts no time-dependent work, no radiation, no material or stability model, and it does not identify the field energy with the rest mass of any particle; the point-source limit is treated separately below and is divergent.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a real $C^1$ function $\rho$ compactly supported in $\overline B_R$ with $R>0$ as in the smooth Coulomb branch, the potential $\varphi=\varepsilon_0^{-1}N\rho$ and field $E=-\nabla\varphi$ of the smooth Coulomb branch, and the kernel $\Phi(z)=1/(4\pi|z|)$ off the origin.

[F1] The Coulomb solution gives $\varphi\in C^2(\mathbb R^3)$, $E=-\nabla\varphi\in C^1$, $-\Delta\varphi=\rho/\varepsilon_0$, the far-field bound $|E(x)|\le\|\rho\|_1/(\pi\varepsilon_0|x|^2)$ for $|x|>2R$, and, for $|x|>2R$, the potential bound $|\varphi(x)|\le |Q|/(4\pi\varepsilon_0|x|)+R\|\rho\|_1/(\pi\varepsilon_0|x|^2)$, where $Q:=\int\rho\,d\lambda_3$; the kernel is $\Phi(z)=1/(4\pi|z|)$ with $\sigma(S^2)=4\pi$ ([[pthm-em-coulomb-solution]], [[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]], [[def-newtonian-potential]], [[lem-em-newtonian-far-field-gradient]], [[thm-decay-of-the-newtonian-potential-of-compactly-supported-data]], [[cor-volume-of-the-unit-n-ball]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]], [[def-polar-surface-measure-on-the-unit-sphere]]).

[F2] Green's first identity holds on a bounded $C^1$ domain for real $u=v\in C^2$ up to the closure, with the outward normal; the Euclidean balls are bounded $C^1$ domains with outward normal $x/|x|$ on their bounding spheres, and $|S_{R'}|=4\pi R'^2$ ([[cor-first-green-identity-on-a-bounded-c-one-domain]], [[lem-em-euclidean-balls-and-annuli-are-bounded-c-one-domains]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]], [[cor-volume-of-the-unit-n-ball]]).

[F3] The Laplacian, divergence and gradient are the classical operators of the cited definitions, with the partial derivative convention of [[def-directional-and-partial-derivatives]] and the algebra rules for derivatives; the regime, field and unit conventions are those of the primitives ([[def-laplacian-of-a-c2-function]], [[def-divergence-and-curl-of-a-c1-vector-field]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-algebra-of-derivatives]], [[def-em-electrostatic-regime]], [[def-em-fields]], [[def-em-sources]], [[def-em-si-conventions]], [[def-em-lab-geometry]], [[def-euclidean-inner-product]]).

[F4] The polar formula, translation invariance of Lebesgue measure, the product-measure identification for Euclidean spaces, Fubini and Tonelli, monotone and dominated convergence, and the order and scalar rules for the nonnegative integral are available; continuous functions on nonempty compact sets are bounded and attain extrema, and are Borel ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[thm-integrals-are-invariant-under-measure-preserving-maps]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]], [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-monotone-convergence-for-the-integral]], [[thm-dominated-convergence]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[def-integral-over-a-measurable-set]], [[def-integrable-real-and-complex-functions-and-their-integrals]], [[thm-extreme-value-metric]], [[cor-continuous-functions-are-borel-measurable]], [[def-metric-ball]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]], [[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]]).

[F5] The work of the electric force along a prescribed path is $q$ times the potential drop and is additive in the added charge; the potential is linear in the source ([[pthm-em-electrostatic-work]], [[def-newtonian-potential]]).

## Proof

**Proof technique:** direct.

1.1 Finiteness of the field energy: on the bounded ball $\overline B_{2R}$ the continuous function $|E|^2$ is bounded by [F4] and $\lambda_3(\overline B_{2R})<\infty$, so $\int_{|x|\le2R}|E|^2<\infty$; on the far field the bound of [F1] gives $\int_{|x|>2R}|E|^2\le\frac{\|\rho\|_1^2}{\pi^2\varepsilon_0^2}\int_{|x|>2R}|x|^{-4}\,d\lambda_3$, and the polar formula computes $\int_{2R}^{\infty}r^{-4}\cdot4\pi r^2dr=4\pi/(2R)<\infty$ ([F1], [F4]). [given, F1, F4]

2.1 Finiteness of the other two quantities: $\rho$ is bounded and supported in $\overline B_R$ and $\varphi$ is continuous, so $|\rho\varphi|$ is bounded with compact support and $\int|\rho\varphi|<\infty$. Put $M:=\sup|\rho|$. Splitting at the positive length $R$, translation invariance and the polar formula give, uniformly in $x$, $$\int_{\mathbb R^3}\Phi(x-y)|\rho(y)|\,d\lambda_3(y)\le M\int_{|z|<R}\Phi(z)\,d\lambda_3(z)+\frac{\|\rho\|_1}{4\pi R}=\frac{MR^2}{2}+\frac{\|\rho\|_1}{4\pi R},$$ since $\int_{|z|<R}\Phi(z)\,d\lambda_3=\int_0^R r\,dr=R^2/2$. Tonelli therefore bounds the absolute double integral by $\|\rho\|_1(MR^2/2+\|\rho\|_1/(4\pi R))<\infty$. This proves the remaining finiteness claims of (a), with both terms in the kernel estimate carrying charge per length. [step 1.1, F1, F4]

3.1 Green's identity on the ball: fix $R'>R$. By [F2] the ball $B_{R'}$ is a bounded $C^1$ domain with outward normal $\nu(x)=x/|x|$ on $S_{R'}$, and $\varphi\in C^2(\overline B_{R'})$; Green's first identity with $u=v=\varphi$ gives $$\int_{B_{R'}}\bigl(\varphi\Delta\varphi+|D\varphi|^2\bigr)d\lambda_3=\int_{S_{R'}}\varphi\,\partial_\nu\varphi\,dS.$$ Substituting $\Delta\varphi=-\rho/\varepsilon_0$ and $|D\varphi|^2=|E|^2$ from [F1], [F3] and rearranging gives $$\int_{B_{R'}}|E|^2\,d\lambda_3=\frac{1}{\varepsilon_0}\int_{B_{R'}}\rho\varphi\,d\lambda_3+\int_{S_{R'}}\varphi\,\partial_\nu\varphi\,dS.$$ [step 2.1, F1, F2, F3]

4.1 Boundary estimate: take $R'>2R$. On $S_{R'}$ the decay bound of [F1] gives $|\varphi(x)|\le C/R'$ with $C:=(|Q|+2\|\rho\|_1)/(4\pi\varepsilon_0)$, because $R/R'<1/2$, the far-field bound gives $|\nabla\varphi(x)|\le\|\rho\|_1/(\pi\varepsilon_0R'^2)$, and $\partial_\nu\varphi=\nabla\varphi\cdot x/|x|$ has the same bound; with $|S_{R'}|=4\pi R'^2$ from [F2] this yields $$\Bigl|\int_{S_{R'}}\varphi\,\partial_\nu\varphi\,dS\Bigr|\le\frac{C}{R'}\cdot\frac{\|\rho\|_1}{\pi\varepsilon_0R'^2}\cdot4\pi R'^2=\frac{4C\|\rho\|_1}{\varepsilon_0R'},$$ which tends to $0$ as $R'\to\infty$ ([F1], [F2], [F4]). [step 3.1, F1, F2, F4]

5.1 First equality: the sets $B_{R'}$ increase to $\mathbb R^3$ along the increasing sequence $R'_n=(n+2)R$, $n\ge1$, and $|E|^2\ge0$, so monotone convergence gives $\int_{B_{R'}}|E|^2\to\int_{\mathbb R^3}|E|^2$; since $\rho$ is supported in $\overline B_R\subset B_{R'}$, the integrals $\int_{B_{R'}}\rho\varphi$ are eventually constant equal to $\int_{\mathbb R^3}\rho\varphi$, which is finite by step 2.1; the boundary term vanishes by step 4.1. Passing to the limit in the identity of step 3.1 therefore gives $\int|E|^2=\frac{1}{\varepsilon_0}\int\rho\varphi$, that is $\frac{\varepsilon_0}{2}\int|E|^2=\frac12\int\rho\varphi$ ([F4]). [step 3.1, step 4.1, F4]

6.1 Second equality: by [F1] the potential is $\varphi=\varepsilon_0^{-1}N\rho$, and the product $\rho(x)\Phi(x-y)\rho(y)$ is absolutely integrable over $\mathbb R^3\times\mathbb R^3$ by step 2.1, so Fubini applies: $$\int_{\mathbb R^3}\rho\varphi\,d\lambda_3=\frac{1}{\varepsilon_0}\int_{\mathbb R^3}\rho(x)\Bigl(\int_{\mathbb R^3}\Phi(x-y)\rho(y)\,d\lambda_3(y)\Bigr)d\lambda_3(x)=\frac{1}{\varepsilon_0}\iint\Phi(x-y)\rho(x)\rho(y)\,d(\lambda_3\times\lambda_3).$$ Since $\Phi(x-y)=\Phi(y-x)$ and $\rho(x)\rho(y)=\rho(y)\rho(x)$, the double integral is unchanged by exchanging $x$ and $y$, which is the ordered-pair reading of the factor; multiplying the identity by $\frac12$ gives $\frac12\int\rho\varphi=\frac{1}{2\varepsilon_0}\iint\Phi(x-y)\rho(x)\rho(y)\,d(\lambda_3\times\lambda_3)$, the second equality of (b) ([F1], [F4]). [step 5.1, F1, F4]

7.1 Assembly reading: for $0\le s\le1$ put $\rho_s:=s\rho$ and $\varphi_s:=\varepsilon_0^{-1}N\rho_s=s\varphi$, so that $E_s=sE$ and all the above estimates hold with $\rho_s$ in place of $\rho$ ([F1], [F5]). An increment of charge $d\rho_s=\rho\,ds$ added at $x$ to a configuration whose potential is $\varphi_s$ has electric-force work $-d\rho_s\,\varphi_s(x)$ when the charge is brought from infinity, by the work formula of [F5] together with the decay $\varphi_s(x)\to0$ at infinity; the balancing external work is $+d\rho_s\,\varphi_s(x)$, so the total external assembly work is $$W_{\rm ext}=\int_0^1\Bigl(\int_{\mathbb R^3}\rho(x)\varphi_s(x)\,d\lambda_3(x)\Bigr)ds=\int_0^1s\,ds\int_{\mathbb R^3}\rho\varphi\,d\lambda_3=\frac12\int_{\mathbb R^3}\rho\varphi\,d\lambda_3,$$ the interchange being justified by the absolute finiteness of step 2.1 applied to $\rho_s$; both signs of $\rho$ are allowed because all integrals involved are absolutely convergent ([F4], [F5]). [step 6.1, F1, F4, F5]

8.1 Clauses (a), (b) and (c): finiteness is steps 1.1-2.1, the two equalities are steps 5.1 and 6.1, the assembly reading is step 7.1, and the scope clause records that the construction is an ideal quasi-static bookkeeping with external support, uses the pure electrostatic regime, and neither models radiation or material dynamics nor identifies the field energy with a particle rest mass; the divergent point-source limit is treated separately below and is not asserted here. [step 1.1, step 5.1, step 6.1, step 7.1, F1] ∎

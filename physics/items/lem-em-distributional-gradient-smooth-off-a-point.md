---
id: lem-em-distributional-gradient-smooth-off-a-point
kind: lemma
title: The distributional gradient of a locally integrable function smooth off one point
domain: mathematics
status: published
origin: pipeline
proof_strategy: direct
deps: ["def-countable-choice", "def-locally-integrable-function-on-r-n", "def-regular-distribution-from-a-locally-integrable-function", "thm-locally-integrable-functions-embed-in-distributions", "def-distributional-derivative", "def-test-function-space-d-of-an-open-set", "prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null", "cor-integral-over-a-null-set-vanishes", "thm-the-lebesgue-integral-respects-almost-everywhere-equality", "def-ck-euclidean-maps-and-diffeomorphisms", "def-measure-null-set-and-almost-everywhere", "prop-closure-properties-of-measurable-functions-used-by-the-integral", "def-integral-over-a-measurable-set", "def-integrable-real-and-complex-functions-and-their-integrals", "prop-order-and-scalar-rules-for-the-nonnegative-integral", "def-metric-ball", "thm-borel-products-of-euclidean-spaces-are-euclidean-borel", "thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures", "thm-tonelli-and-fubini-for-completed-product-measures", "def-linear-map", "def-euclidean-inner-product", "def-linear-isometry-and-orthogonal-or-unitary-operator", "cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus", "cor-c-one-change-of-variables-for-l-one-functions", "thm-integration-by-parts", "thm-continuous-implies-integrable", "lem-riemann-lebesgue-comparison-for-distribution-test-integrands", "def-directional-and-partial-derivatives"]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-locally-integrable-function-on-r-n: mathematical-premise
  def-regular-distribution-from-a-locally-integrable-function: mathematical-premise
  thm-locally-integrable-functions-embed-in-distributions: mathematical-premise
  def-distributional-derivative: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null: mathematical-premise
  cor-integral-over-a-null-set-vanishes: mathematical-premise
  thm-the-lebesgue-integral-respects-almost-everywhere-equality: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-measure-null-set-and-almost-everywhere: mathematical-premise
  prop-closure-properties-of-measurable-functions-used-by-the-integral: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  def-metric-ball: mathematical-premise
  thm-borel-products-of-euclidean-spaces-are-euclidean-borel: mathematical-premise
  thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures: mathematical-premise
  thm-tonelli-and-fubini-for-completed-product-measures: mathematical-premise
  def-linear-map: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-linear-isometry-and-orthogonal-or-unitary-operator: mathematical-premise
  cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  lem-riemann-lebesgue-comparison-for-distribution-test-integrands: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)
      url: https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf
      locator: Section 2.2 printed pp. 16-17 (E = -grad phi, the Poisson equation (2.12), uniqueness up to a constant and the phi -> 0 normalization at infinity) and Section 2.2.1 printed pp. 17-19 (the point charge, rho = Q delta_3(x) and its potential). Read in the stamped full text.
    - title: Weng Cho Chew, Lectures on Electromagnetic Field Theory (Purdue University, Fall 2020, 497 pp.)
      url: https://engineering.purdue.edu/wcchew/ece604f20/EMFTAll.pdf
      locator: Sections 1.3.1-1.3.2 printed pp. 8-9 (Coulomb's law and the electric field) and Sections 3.3.2-3.3.3 printed pp. 35-36 (Poisson's equation (3.3.9), the point-charge solution (3.3.14), the static Green's function (3.3.16) and the convolution solution for general sources). Read in the stamped full text.
    - title: David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)
      url: https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf
      locator: Section 1.5.3 printed pp. 50-52 (the distributional treatment of the point-charge kernel and of 1/r near the origin) and Section 2.3.4 printed pp. 83-87.
    - title: L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields, 3rd revised English edition (Pergamon 1971, 387 pp.; full text)
      url: http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf
      locator: Sections 36 printed pp. 88-89 (static Maxwell equations (36.1)-(36.2), E = -grad phi, the Poisson equation (36.4), the Coulomb law (36.6)-(36.7), superposition (36.8) and the point-source relation (36.9)); Gaussian units re-expressed in SI. Read in the stamped full text.
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$) for the Lebesgue and product-measure interfaces ([[def-countable-choice]]).
Use the explicit one-based labels $x_k:=x(k-1)$ for $k=1,\dots,n$; here $\partial_k$ denotes differentiation in $x(k-1)$, corresponding to $\partial_{k-1}$ in the zero-based supplier convention of [[def-directional-and-partial-derivatives]].
Let $n\ge2$, let $p\in\mathbb R^n$, and let $u\in L^1_{\mathrm{loc}}(\mathbb R^n)$ be continuous on $\mathbb R^n\setminus\{p\}$ and of class $C^1$ there, with each classical partial derivative $\partial_iu:\mathbb R^n\setminus\{p\}\to\mathbb R$ (extended by $0$ at $p$) again in $L^1_{\mathrm{loc}}(\mathbb R^n)$ ([[def-locally-integrable-function-on-r-n]]).
Then for every $i=1,\dots,n$, with $T_u\in\mathcal D'(\mathbb R^n)$ the regular distribution of $u$ ([[def-regular-distribution-from-a-locally-integrable-function]], [[thm-locally-integrable-functions-embed-in-distributions]]) and $\partial_i$ the distributional derivative ([[def-distributional-derivative]]),
$$\partial_iT_u=T_{\partial_iu}\qquad\text{in }\mathcal D'(\mathbb R^n),$$
that is, $\langle\partial_iT_u,\psi\rangle=\int_{\mathbb R^n}\partial_iu\,\psi\,d\lambda_n$ for every $\psi\in C_c^\infty(\mathbb R^n)$ ([[def-test-function-space-d-of-an-open-set]]).
The value assigned to $\partial_iu$ at the single point $p$ is immaterial, because a singleton is Lebesgue null ([[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]], [[cor-integral-over-a-null-set-vanishes]], [[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]).
Both hypotheses are used: $u$ must be locally integrable and continuous away from $p$, and each classical partial must be locally integrable; the lemma is asserted for one exceptional point, not for an exceptional set of positive surface measure.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, $n\ge2$, $p\in\mathbb R^n$, and a function $u\in L^1_{\mathrm{loc}}(\mathbb R^n)$ that is continuous on $\mathbb R^n\setminus\{p\}$ and $C^1$ there, with every classical partial $\partial_iu$ (extended by $0$ at $p$) in $L^1_{\mathrm{loc}}(\mathbb R^n)$. Fix an index $i\in\{1,\dots,n\}$ and a test function $\psi\in C_c^\infty(\mathbb R^n)$.

[F1] For $f\in L^1_{\mathrm{loc}}(\mathbb R^n)$ the regular distribution is $\langle T_f,\varphi\rangle=\int_{\mathbb R^n}f\varphi\,d\lambda_n$, and the embedding $f\mapsto T_f$ is complex-linear and injective modulo almost-everywhere equality ([[def-regular-distribution-from-a-locally-integrable-function]], [[thm-locally-integrable-functions-embed-in-distributions]]).

[F2] The distributional derivative is defined by $\langle\partial_iT,\varphi\rangle=-\langle T,\partial_i\varphi\rangle$, and the pairing is bilinear with no conjugation ([[def-distributional-derivative]]).

[F3] The test space $C_c^\infty(\mathbb R^n)$ consists of smooth compactly supported functions; each such $\psi$ is bounded and its support is a compact subset of $\mathbb R^n$ ([[def-test-function-space-d-of-an-open-set]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F4] A singleton $\{p\}$ is Lebesgue null, the integral over a measurable null set vanishes, and changing an integrand on a null set does not change its integral or its $L^1_{\mathrm{loc}}$ class ([[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]], [[cor-integral-over-a-null-set-vanishes]], [[thm-the-lebesgue-integral-respects-almost-everywhere-equality]], [[def-measure-null-set-and-almost-everywhere]]).

[F5] Measurable real functions are closed under pointwise-defined sums, scalar multiples and absolute values; a nonnegative measurable function may be restricted by a measurable-set indicator, and increasing limits are measurable ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]]). Integrability means finiteness of the integral of the absolute value, and the nonnegative integral is monotone and homogeneous ([[def-integral-over-a-measurable-set]], [[def-integrable-real-and-complex-functions-and-their-integrals]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]). Measurability of the particular products in this proof is established locally in step 1.1.

[F6] $f\in L^1_{\mathrm{loc}}(\mathbb R^n)$ means that $f$ is measurable and $\int_{B(x,r)}|f|\,d\lambda_n<\infty$ for every Euclidean ball ([[def-locally-integrable-function-on-r-n]], [[def-metric-ball]]); the Lebesgue and product-measure interfaces used below carry the declared Countable Choice ([[def-countable-choice]]).

[F7] Under the standard identification $\mathbb R^n=\mathbb R^{n-1}\times\mathbb R$, the Borel sigma-algebras satisfy $\mathcal B(\mathbb R^{n-1})\otimes\mathcal B(\mathbb R)=\mathcal B(\mathbb R^n)$, and $\lambda_n$ is the completion of the product measure $\lambda_{n-1}\times\lambda_1$ ([[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]], [[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]]).

[F8] Fubini and Tonelli hold for the completed product of two sigma-finite measure spaces: for $G\in L^1(\lambda_n)$ the sections are integrable almost everywhere and the repeated integrals agree with the integral against $\lambda_n$ ([[thm-tonelli-and-fubini-for-completed-product-measures]]).

[F9] A coordinate permutation of $\mathbb R^n$ is a linear isometry for the Euclidean norm, hence an orthogonal operator, and every orthogonal operator has $|\det T|=1$; for a $C^1$ diffeomorphism $T$ and $F\in L^1(\lambda_n)$, $\int F\,d\lambda_n=\int F\circ T\,|\det DT|\,d\lambda_n$ ([[def-linear-map]], [[def-euclidean-inner-product]], [[def-linear-isometry-and-orthogonal-or-unitary-operator]], [[cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus]], [[cor-c-one-change-of-variables-for-l-one-functions]]).

[F10] Integration by parts holds on a compact interval for functions differentiable at every point whose derivatives are integrable, continuous functions on a compact interval are Darboux integrable, and a bounded Borel Riemann integrable function on a box has equal Riemann and Lebesgue integrals ([[thm-integration-by-parts]], [[thm-continuous-implies-integrable]], [[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]]).

[F11] The classical partial derivative $\partial_iu$ is the derivative of the one-variable function obtained by freezing all other coordinates ([[def-directional-and-partial-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 Set $F:=\partial_iu\cdot\psi$ and $H:=u\cdot\partial_i\psi$ on $\mathbb R^n$. By [F4] replace $u$ and each $\partial_iu$ at $p$ by $0$ without changing their local integrability classes or integrals. On $O:=\mathbb R^n\setminus\{p\}$ these functions, and the real and imaginary parts of $F,H$, are continuous. For any one of these real functions $v$ extended by $0$ at $p$ and every real $a$, the set $\{v>a\}\cap O$ is open in $O$, hence open in $\mathbb R^n$; the full superlevel set is this open set with $\{p\}$ added when $0>a$. It is therefore Borel, so the real and imaginary parts of $F,H$ are Borel measurable. Choose a ball containing the compact support of $\psi$ and its derivatives. On it $|F|\le\|\psi\|_\infty|\partial_iu|$ and $|H|\le\|\partial_i\psi\|_\infty|u|$, and both products vanish outside it; monotonicity and homogeneity yield $F,H\in L^1(\lambda_n)$. [given, F3, F4, F5, F6]

2.1 Let $\pi:\mathbb R^n\to\mathbb R^n$ be the coordinate permutation moving the $i$-th coordinate to the last position, $\pi(x)=(x_1,\dots,x_{i-1},x_{i+1},\dots,x_n,x_i)$. Then $\|\pi(x)\|^2=\sum_jx_j^2=\|x\|^2$, so $\pi$ is a linear isometry, hence an orthogonal operator with $|\det D\pi|=|\det\pi|=1$ ([F9]); $\pi$ is a $C^1$ diffeomorphism of $\mathbb R^n$ onto itself. Applying the change-of-variables identity of [F9] to $F$ and to $H$, and using $|\det D\pi|=1$, gives $$\int_{\mathbb R^n}F\,d\lambda_n=\int_{\mathbb R^n}F\circ\pi^{-1}\,d\lambda_n,\qquad\int_{\mathbb R^n}H\,d\lambda_n=\int_{\mathbb R^n}H\circ\pi^{-1}\,d\lambda_n.$$ The compositions $F\circ\pi^{-1}$ and $H\circ\pi^{-1}$ are Borel and in $L^1(\lambda_n)$ because $\int|F\circ\pi^{-1}|\,d\lambda_n=\int|F|\,d\lambda_n<\infty$ and likewise for $H$. [step 1.1, F5, F9]

3.1 Identify $\mathbb R^n$ with $\mathbb R^{n-1}\times\mathbb R$ by the standard ordering, so that a point with last coordinate $t$ and remaining coordinates $y$ is written $(y,t)$; the permutation of step 2.1 then satisfies $\pi(x)=(y(x),x_i)$ where $y(x)$ lists the coordinates other than the $i$-th. Define $G(y,t):=F(x(y,t))$ and $K(y,t):=H(x(y,t))$, where $x(y,t)\in\mathbb R^n$ is the point with $i$-th coordinate $t$ and remaining coordinates $y$. Then $G=F\circ\pi^{-1}$ and $K=H\circ\pi^{-1}$ under the identification, so step 2.1 reads $\int F\,d\lambda_n=\int G\,d\lambda_n$ and $\int H\,d\lambda_n=\int K\,d\lambda_n$; by [F7] and [F8] these equal the repeated integrals $\int_{\mathbb R^{n-1}}\bigl(\int_{\mathbb R}G(y,t)\,dt\bigr)dy$ and $\int_{\mathbb R^{n-1}}\bigl(\int_{\mathbb R}K(y,t)\,dt\bigr)dy$, the inner sections being integrable for almost every $y$. [step 2.1, F7, F8]

4.1 Fix $y\in\mathbb R^{n-1}$ such that the line $L_y=\{x(y,t):t\in\mathbb R\}$ does not pass through $p$; the excluded set of $y$ is the single point $y^\ast$ listing the coordinates of $p$ other than $p_i$, which is a degenerate box and hence $\lambda_{n-1}$-null ([F4]). For such $y$, the map $t\mapsto u(x(y,t))$ is $C^1$ on $\mathbb R$ with derivative $t\mapsto\partial_iu(x(y,t))$ ([F11]), and $t\mapsto\psi(x(y,t))$ is smooth with compact support ([F3]). Choose $a<b$ with the support of $t\mapsto\psi(x(y,t))$ contained in $(a,b)$. Then $v(t):=u(x(y,t))\,\psi(x(y,t))$ is differentiable at every point of $[a,b]$ with continuous derivative $v'=\partial_iu\,\psi+u\,\partial_i\psi$ there, so $v'$ is integrable in the Darboux sense ([F10]); applying the real integration-by-parts formula of [F10] to the real and imaginary parts of both factors on $[a,b]$, combining the resulting identities bilinearly and using that the boundary terms vanish gives $$\int_{\mathbb R}G(y,t)\,dt=-\int_{\mathbb R}K(y,t)\,dt,$$ where the Darboux integrals have been replaced by the equal Lebesgue integrals of the continuous compactly supported integrands ([F10]). [step 3.1, F3, F4, F10, F11]

5.1 The equality of step 4.1 holds for every $y$ outside the null set $\{y^\ast\}$ ([F4]), hence almost everywhere, and the section functions are integrable there by step 3.1. Integrating the identity over $\mathbb R^{n-1}$ and using the linearity of the integral gives $\int F\,d\lambda_n=\int G\,d\lambda_n=-\int K\,d\lambda_n=-\int H\,d\lambda_n$. Therefore, by [F1] and [F2], $$\langle\partial_iT_u,\psi\rangle=-\langle T_u,\partial_i\psi\rangle=-\int_{\mathbb R^n}u\,\partial_i\psi\,d\lambda_n=-\int_{\mathbb R^n}H\,d\lambda_n=\int_{\mathbb R^n}F\,d\lambda_n=\int_{\mathbb R^n}\partial_iu\,\psi\,d\lambda_n=\langle T_{\partial_iu},\psi\rangle.$$ Since $\psi\in C_c^\infty(\mathbb R^n)$ was arbitrary, $\partial_iT_u=T_{\partial_iu}$ in $\mathcal D'(\mathbb R^n)$, as claimed. [step 3.1, step 4.1, F1, F2, F5] ∎

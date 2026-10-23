---
id: lem-fd-sensor-pairing-is-well-defined
kind: lemma
title: The L2 velocity sensor is well-defined
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-fd-random-velocity-sensor-law
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-probability-measure
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-holder-inequality-for-integrals
  - thm-bochner-integrability-criterion
  - thm-bounded-linear-maps-commute-with-bochner-integration
  - def-strongly-measurable-banach-valued-function
dependency_roles:
  def-strongly-measurable-banach-valued-function: mathematical-premise
  thm-bounded-linear-maps-commute-with-bochner-integration: mathematical-premise
  thm-bochner-integrability-criterion: mathematical-premise
  def-fd-random-velocity-sensor-law: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-probability-measure: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  thm-holder-inequality-for-integrals: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis, Section 11.6
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07%2110_23_44_AM.pdf
      locator: Lemmas 11.30–11.31, printed pp. 332–334.
    - title: Terence Tao, An Introduction to Measure Theory
      url: https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf
      locator: Section 1.7, Theorem 1.7.21 and proof, printed pp. 204–206.
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-23
---

## Statement

Let $(D,\mathcal D,\lambda)$, $H$, and the finite-second-moment probability law $\mu$ be as in the Definition. For every $\psi\in H$, the integral defining $S_\psi(v)$ is finite and independent of the representatives of $v$ and $\psi$. The map $S_\psi:H\to\mathbb R$ is linear and continuous, with
$$|S_\psi(v)|\le \|v\|_H\|\psi\|_H.$$
Its centered observable $f_\psi(v)=S_\psi(v)-\int_H S_\psi\,d\mu$ is Borel measurable and belongs to $L^2(\mu)$.

For the general random-state interface, if $X$ is a supplied separable real Banach space and $U$ is strongly measurable with $\mathbb E\|U\|_X^2<\infty$, its Bochner mean exists. For every finite family of bounded real-linear sensors $L_j:X\to\mathbb R$, $L_j(U)$ has a measurable square-integrable version and
$$\mathbb E L_j(U)=L_j(\mathbb E_B U).$$
For a family $L_1,\ldots,L_m$, define its covariance matrix $\Sigma\in\mathbb R^{m\times m}$ by
$$\Sigma_{ij}:=\mathbb E\bigl[(L_i(U)-\mathbb E L_i(U))(L_j(U)-\mathbb E L_j(U))\bigr],\qquad 1\le i,j\le m.$$
This matrix is well-defined and, for every $c=(c_1,\ldots,c_m)\in\mathbb R^m$,
$$c^{\mathsf T}\Sigma c=\mathbb E\left[\left(\sum_{j=1}^m c_j(L_j(U)-\mathbb E L_j(U))\right)^2\right]\ge0.$$
Scalar almost-everywhere values are interpreted through the measurable representatives furnished by strong simple approximation; if a pointwise scalar random variable is required, such a version is used.

## Statement references

[[def-fd-random-velocity-sensor-law]]

[[def-l-p-space-as-a-quotient-by-null-functions]]

[[thm-linearity-of-the-lebesgue-integral-on-l-one]]

[[thm-holder-inequality-for-integrals]]

[[def-probability-measure]]

[Teschl, Topics in Real and Functional Analysis, Section 11.6](https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07%2110_23_44_AM.pdf)

[Tao, An Introduction to Measure Theory, Section 1.7](https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf)

[[thm-bochner-integrability-criterion]]

[[thm-bounded-linear-maps-commute-with-bochner-integration]]

[[def-strongly-measurable-banach-valued-function]]

## Facts & Assumptions

**Given:** A finite measure space $(D,\mathcal D,\lambda)$ with $0<\lambda(D)<\infty$, the normed space $H=L^2(D,\lambda;\mathbb R^d)$, a probability measure $\mu$ with $\int_H\|v\|_H^2\,d\mu(v)<\infty$, and $\psi\in H$.

[A1] These data and the definition of $S_\psi$ and $f_\psi$ are fixed by [[def-fd-random-velocity-sensor-law]].

[F1] An element of $H$ is an almost-everywhere equivalence class of measurable representatives ([[def-l-p-space-as-a-quotient-by-null-functions]]).

[F2] Holder's inequality with conjugate exponents $2,2$ makes products of two $L^2$ functions integrable and bounds their integral by the product of their norms ([[thm-holder-inequality-for-integrals]]).

[F3] The Lebesgue integral is linear on its $L^1$ space ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F4] The measure $\mu$ is a probability measure, so $\int_H 1\,d\mu=1$ ([[def-probability-measure]]).

[F5] A strongly measurable Banach-valued map with integrable norm is Bochner integrable, and bounded linear maps commute with its integral ([[thm-bochner-integrability-criterion]], [[thm-bounded-linear-maps-commute-with-bochner-integration]]). Strong simple approximation supplies the measurable versions used here ([[def-strongly-measurable-banach-valued-function]]).

## Proof

**Given:** The spatial measure space, finite-second-moment law, and weight in the Statement.

1.1 For measurable representatives $v$ and $\psi$, the pointwise inequality $|v(x)\cdot\psi(x)|\le |v(x)|\,|\psi(x)|$ and [F2] give $\int_D|v\cdot\psi|\,d\lambda\le\|v\|_H\|\psi\|_H<\infty$. Replacing either representative on a $\lambda$-null set changes the product only on a null set, so the integral depends only on the classes [F1]. Thus $S_\psi(v)$ is finite and representative-independent. [A1, F1, F2, given, algebra]

2.1 By [F3], $S_\psi$ is linear. Applying the estimate in step 1.1 to $v-w$ gives $|S_\psi(v)-S_\psi(w)|\le\|v-w\|_H\|\psi\|_H$, so $S_\psi$ is continuous and hence Borel measurable. [F3, step 1.1, algebra]

2.2 Squaring the estimate in step 1.1 and integrating over $\mu$ gives $\int_H|S_\psi(v)|^2\,d\mu(v)\le\|\psi\|_H^2\int_H\|v\|_H^2\,d\mu(v)<\infty$. Holder's inequality on the probability space $(H,\mathcal B(H),\mu)$ and [F4] then give $\int_H|S_\psi|\,d\mu<\infty$, so its centering integral exists. Subtracting this finite constant preserves Borel measurability and $L^2(\mu)$ membership, proving the assertion about $f_\psi$. [A1, F2, F4, step 1.1, algebra]

3.1 In the general Banach-state clause, Holder on the probability space gives $\mathbb E\|U\|_X\le(\mathbb E\|U\|_X^2)^{1/2}<\infty$, so [F5] supplies the Bochner mean. Composing the strong simple approximants with each continuous $L_j$ gives scalar measurable approximants converging outside the same null set; taking zero on that set supplies a measurable version. The bound $|L_j(U)|\le\|L_j\|\|U\|_X$ gives its finite second moment. Bounded-map interchange in [F5] proves the expectation identity. Center each of the finitely many sensor versions. Holder makes all products integrable, and for every finite real coefficient vector $z$ the covariance quadratic form equals $\mathbb E[(\sum_jz_j(L_j(U)-\mathbb E L_j(U)))^2]\ge0$, proving positive semidefiniteness without another choice principle. [F2, F4, F5, given, algebra] ∎


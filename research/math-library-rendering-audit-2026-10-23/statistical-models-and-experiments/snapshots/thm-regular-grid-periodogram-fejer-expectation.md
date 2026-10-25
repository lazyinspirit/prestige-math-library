---
id: thm-regular-grid-periodogram-fejer-expectation
kind: theorem
title: "Fejer convolution formula for the lattice periodogram"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-regular-grid-periodogram-and-smoother
  - lem-dual-of-zd-is-torus
  - lem-transport-lattice-spectral-measure-to-torus
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
  - lem-angular-fourier-orthogonality
  - thm-choice-implies-dependent-implies-countable-choice
  - def-positive-definite-function-on-an-abelian-group
  - thm-bochner-theorem-for-lca-groups
  - def-integers
  - lem-integers-lattice-is-discrete-lca-group
  - def-standard-topologies
  - def-topological-group
  - def-moments-variance-and-covariance
  - cor-cauchy-schwarz-for-random-variables
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - def-product-measure-on-sigma-finite-spaces
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Evgeny Spodarev, Spatial Statistics: Lecture Notes (2024), Section 2.3, Definition 2.9 and Lemma 2.10"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.110/mitarbeiter/spodarev/publications/scripts/SpatialStatistics_2024.pdf"
    - title: "Oxford Mathematical Institute, Harmonic Analysis lecture notes, characters of Z^d, pp. 17–18"
      url: "https://www.maths.ox.ac.uk/system/files/media/HarmAnLectureNotes.pdf"
---

## Statement

Let $d\ge1$ and let $(Y_j)_{j\in\mathbb Z^d}$ be real square-integrable
random variables with constant mean $\mu$ and lag-dependent covariance
$$c(h):=\operatorname{Cov}(Y_{j+h},Y_j),$$
independent of $j$. Assume the Axiom of Choice and Dependent Choice. Then there
is a unique finite positive Radon measure $F$ on the angular torus $\mathbb T^d$
such that
$$c(h)=\int_{\mathbb T^d}e^{ih\cdot\theta}\,F(d\theta), \qquad h\in\mathbb Z^d.$$
For the periodogram $I_n$ of
[[def-regular-grid-periodogram-and-smoother]], define the product Fejer kernel
$$\Phi_n(x):=\frac1{(2\pi)^dn^d} \left|\sum_{j\in\{0,\ldots,n-1\}^d}e^{-ij\cdot x}\right|^2 =\prod_{r=1}^d\frac1{2\pi n} \left|\sum_{a=0}^{n-1}e^{-iax_r}\right|^2.$$
Then, for every $n\ge1$ and $\lambda\in\mathbb T^d$,
$$\mathbb E[I_n(\lambda)] =\int_{\mathbb T^d}\Phi_n(\lambda-\theta)\,F(d\theta).$$
The kernel is nonnegative and has integral one with respect to product angular
Lebesgue measure. The spectral measure and density here belong to the
lattice-indexed observations on the dual torus.

## Facts & Assumptions

**Given:** The lattice field, constant mean, covariance convention, and
periodogram definition in the Statement; assume AC and DC.

[A1] [[def-axiom-of-choice]]: the Axiom of Choice is assumed.

[A2] [[def-dependent-choice]]: Dependent Choice is assumed.

[F1] [[def-positive-definite-function-on-an-abelian-group]]: a function
$c:G\to\mathbb C$ is positive definite when every finite quadratic form
$$\sum_{r,s}a_r\overline{a_s}\,c(x_r-x_s)$$
is nonnegative.

[F2] [[thm-bochner-theorem-for-lca-groups]]: under AC and DC, every continuous
positive-definite function on an LCA group has a unique finite positive Radon
representing measure on its Pontryagin dual.

[F3] [[lem-dual-of-zd-is-torus]]: $\widehat{\mathbb Z^d}$ is identified with
the product torus by $\chi_\theta(j)=e^{ij\cdot\theta}$.

[F4] [[lem-transport-lattice-spectral-measure-to-torus]]: a finite positive
Radon measure on $\widehat{\mathbb Z^d}$ transports to a finite positive
Radon measure on $\mathbb T^d$ while preserving integrals after composition.

[F5] [[def-regular-grid-periodogram-and-smoother]]: for
$\Lambda_n=\{0,\ldots,n-1\}^d$ and $N_n=n^d$,
$$I_n(\lambda)=\frac1{(2\pi)^dN_n} \left|\sum_{j\in\Lambda_n}(Y_j-\mu)e^{-ij\cdot\lambda}\right|^2.$$

[F6] [[def-moments-variance-and-covariance]]: covariance is the expected
centered product of square-integrable real random variables.

[F7] [[cor-expectation-linearity-monotonicity-and-modulus-bound]] and
[[cor-cauchy-schwarz-for-random-variables]]: expectation is linear on finite
integrable sums, and products of square-integrable variables are integrable.

[F8] [[def-product-measure-on-sigma-finite-spaces]] and
[[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: the product
angular Lebesgue measure exists and integrals can be evaluated by sections.

[F9] [[lem-integers-lattice-is-discrete-lca-group]]: $\mathbb Z^d$ with the
discrete topology is Hausdorff, abelian and locally compact, and every
function on it is continuous.

[F10] [[lem-angular-fourier-orthogonality]]: under Countable Choice, for every
integer $k$, $\int_{-\pi}^{\pi}e^{ikx}\,dx$ is $2\pi$ when $k=0$ and zero
otherwise.

[F11] [[thm-choice-implies-dependent-implies-countable-choice]]: AC implies
Countable Choice (through DC).

[F12] [[def-countable-choice]]: Countable Choice selects one element from each
set in a countable family of nonempty sets.

## Proof


**Proof technique:** prove the covariance sequence is positive definite, apply
Bochner on the discrete lattice, then expand the finite Fourier square.

1.1 For any finite lattice points $k_1,\ldots,k_m\in\mathbb Z^d$ and complex coefficients $a_1,\ldots,a_m$, the finite sum $\sum_r a_r(Y_{k_r}-\mu)$ is square-integrable. Expanding its squared modulus, using [F6] and stationarity, gives $\sum_{r,s}a_r\overline{a_s}c(k_r-k_s) =\mathbb E\left|\sum_r a_r(Y_{k_r}-\mu)\right|^2\ge0.$ Thus $c$ is positive definite by [F1]. [F1, F6, F7, given, algebra]

1.2 By [F9], $\mathbb Z^d$ is a locally compact Hausdorff abelian group and every function on it is continuous, so $c$ is continuous. By Bochner's theorem [F2], using AC [A1] and DC [A2], there is a unique finite positive Radon measure $F_0$ on $\widehat{\mathbb Z^d}$ such that $c(h)=\int_{\widehat{\mathbb Z^d}}\chi(h)\,F_0(d\chi).$ [A1, A2, F2, F9, given]

1.3 Expand the finite squared modulus in [F5]. Every product is integrable by [F7], and stationarity gives $\mathbb E[I_n(\lambda)] =\frac1{(2\pi)^dn^d}\sum_{j,k\in\Lambda_n} c(j-k)e^{-i(j-k)\cdot\lambda}.$ [F5, F6, F7, given, algebra]

2.1 By [F3] and [F4], transport $F_0$ to the unique finite positive Radon measure $F$ on $\mathbb T^d$. Applying the integral-transport identity [F4] to $\chi\mapsto\chi(h)$ gives $c(h)=\int_{\mathbb T^d}e^{ih\cdot\theta}\,F(d\theta).$ [F3, F4, step 1.2]

3.1 Substitute the spectral representation from step 2.1 into each summand of step 1.3. Linearity permits moving the finite sum through the integral, and $\sum_{j,k\in\Lambda_n}e^{-i(j-k)\cdot(\lambda-\theta)} =\left|\sum_{j\in\Lambda_n}e^{-ij\cdot(\lambda-\theta)}\right|^2.$ After dividing by $(2\pi)^dn^d$ this is precisely $\mathbb E[I_n(\lambda)] =\int_{\mathbb T^d}\Phi_n(\lambda-\theta)\,F(d\theta).$ [F5, step 2.1, step 1.3, F7, algebra]

4.1 The displayed kernel factors into nonnegative one-dimensional kernels. For each coordinate, expanding the finite square and applying angular orthogonality [F10] to each integer exponent $a-b$ gives $\int_{-\pi}^{\pi}\frac1{2\pi n} \left|\sum_{a=0}^{n-1}e^{-iax}\right|^2dx=1.$ The Countable Choice hypothesis of [F10] follows from AC by [F11] and [A1]. Fubini [F8] for the finite product then gives $\int_{\mathbb T^d}\Phi_n(x)\,dx=1,$ and nonnegativity follows from the squared modulus. [A1, F8, F10, F11, F12, algebra] ∎
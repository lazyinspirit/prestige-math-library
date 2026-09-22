---
id: def-fourier-coefficients-and-trigonometric-polynomials
kind: definition
title: Fourier coefficients and trigonometric polynomials on the torus
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-the-one-dimensional-torus-and-normalized-haar-integral, thm-finite-measure-l-r-includes-into-l-p-for-p-less-r, def-complex-exponential, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-countable-choice, def-complex-lp-and-euclidean-test-function-conventions, thm-complex-holder-minkowski-and-the-quotient-norm, thm-the-lebesgue-integral-respects-almost-everywhere-equality, thm-linearity-of-the-lebesgue-integral-on-l-one, lem-complex-conjugation-and-modulus-laws, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §2.5, pp.63–64, equations (2.42)–(2.44)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — Example 2.66, pp.87–88"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
verification:
  audited: 2026-09-22
---

## Definition

Assume the Axiom of Countable Choice ([[def-countable-choice]]) and let
$\mathbb T=\mathbb R/\mathbb Z$ with its normalized Haar integral
$dm_{\mathbb T}$ ([[def-the-one-dimensional-torus-and-normalized-haar-integral]]).

**Characters.** For $k\in\mathbb Z$ define $e_k:\mathbb T\to\mathbb C$ by
$e_k(x):=\exp(2\pi i\,k\,\widetilde x)$ for $x=[\widetilde x]\in\mathbb T$,
where $\exp$ is the complex exponential ([[def-complex-exponential]]). The
definition is independent of the representative $\widetilde x$: replacing
$\widetilde x$ by $\widetilde x+n$ with $n\in\mathbb Z$ adds the period
$2\pi kn$ to the argument of sine and cosine. Each $e_k$ is continuous, hence
Borel, and satisfies

$$e_k(x)e_l(x)=e_{k+l}(x),\qquad |e_k(x)|=1,\qquad \overline{e_k(x)}=e_{-k}(x) ,$$

the last two by the cartesian form $\exp(i\theta)=\cos\theta+i\sin\theta$ of
[[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] and
[[lem-complex-conjugation-and-modulus-laws]]. In particular $e_0=1$ and every
$e_k$ is bounded and nonzero everywhere.

**Fourier coefficients.** Let $f\in L^1(\mathbb T;\mathbb C)$
([[def-complex-lp-and-euclidean-test-function-conventions]]), that is, a class
of Borel functions with $\int_{\mathbb T}|f|\,dm_{\mathbb T}<+\infty$. Define the
**Fourier coefficient** of $f$ at $k\in\mathbb Z$ by

$$\widehat f(k):=\int_{\mathbb T}f(x)e_{-k}(x)\,dm_{\mathbb T}=\int_{\mathbb T}f(x)\exp(-2\pi ikx)\,dm_{\mathbb T}.$$

This is well defined: $|f\,e_{-k}|=|f|$ because $|e_{-k}|=1$, so
$f\,e_{-k}\in L^1(\mathbb T;\mathbb C)$ and its integral is finite; and the
integral depends only on the class of $f$, because it is unchanged when $f$ is
modified on a null set
([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]). The map
$f\mapsto\widehat f(k)$ is complex-linear for each $k$
([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

**Trigonometric polynomials.** A **trigonometric polynomial** on $\mathbb T$ is
a finite complex linear combination of characters, $p=\sum_{k\in F}c_ke_k$, for
a finite $F\subseteq\mathbb Z$ and scalars $c_k\in\mathbb C$. The set of all
trigonometric polynomials is the span of $\{e_k:k\in\mathbb Z\}$; it is closed
under addition, scalar multiplication, multiplication and complex conjugation
(by the identities for $e_ke_l$ and $\overline{e_k}$), and it contains $e_0=1$.
Nothing is claimed here about uniqueness of the coefficients in an expansion,
nor about the size of $\widehat p$; those are properties of the characters
proved below.

**The finite torus.** On $\mathbb T^n$, $n\ge1$, the characters are
$e_k(x):=\exp(2\pi i\,k\cdot x)$ for $k\in\mathbb Z^n$, where $k\cdot x$ is the
Euclidean dot product of a representative tuple; trigonometric polynomials are
finite complex linear combinations of these, and Fourier coefficients of
$f\in L^1(\mathbb T^n;\mathbb C)$ are
$\widehat f(k)=\int_{\mathbb T^n}f\,e_{-k}\,dm_{\mathbb T^n}$. Fubini computes
integrals of products of characters on the product measure
([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]); for
$f\in L^2(\mathbb T^n;\mathbb C)$ Hölder's inequality makes $f\,e_{-k}$
integrable ([[thm-complex-holder-minkowski-and-the-quotient-norm]],
[[thm-finite-measure-l-r-includes-into-l-p-for-p-less-r]]).

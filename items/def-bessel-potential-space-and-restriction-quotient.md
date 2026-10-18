---
id: def-bessel-potential-space-and-restriction-quotient
kind: definition
title: "Fourier Bessel-potential and restriction-quotient Sobolev spaces"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-rbf-kernels-sites-and-augmented-interpolation
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-complex-lp-and-euclidean-test-function-conventions
  - def-real-and-complex-inner-product-space
  - def-real-power
  - def-axiom-of-choice
  - def-countable-choice
justified_by:
  - lem-matern-weighted-fourier-space-is-hilbert-and-injective
  - lem-schwartz-dense-in-fourier-bessel-potential-space
  - lem-restricted-matern-native-space-is-sobolev
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Gregory E. Fasshauer, MATH 590: Meshfree Methods, Chapter 13, pp. 23–36"
      url: "https://math.iit.edu/~fass/Notes590_Ch13Print.pdf"
    - title: "Rasmussen and Williams, Gaussian Processes for Machine Learning, Chapter 4, equations (4.5)–(4.6)"
      url: "https://gaussianprocess.org/gpml/chapters/RW4.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Assume the Axiom of Choice when using the well-definedness results below; it is inherited conservatively from the published $L^2$ completeness supplier. Let $d\ge1$ and $s>d/2$. Write $L^2_s(\mathbb R^d)$ for the equivalence classes modulo Lebesgue-almost-everywhere equality of measurable complex functions $g$ satisfying
$$\|g\|_{L^2_s}^2=\int_{\mathbb R^d}(1+|\xi|^2)^s|g(\xi)|^2\,d\xi<\infty.$$
For such $g$, the **inverse Fourier representative** is the function
$$U_g(x)=\int_{\mathbb R^d}g(\xi)e^{2\pi i x\cdot\xi}\,d\xi.$$
The whole-space Bessel-potential space $H^s(\mathbb R^d)$ consists of these representatives, with norm $\|U_g\|_{H^s(\mathbb R^d)}=\|g\|_{L^2_s}$. For the admitted domain $\Omega$ of [[def-rbf-kernels-sites-and-augmented-interpolation]], define $H^s(\Omega)$ to be the restrictions $U|_\Omega$ of whole-space members, with the quotient norm
$$\|u\|_{H^s(\Omega)}=\inf\{\|U\|_{H^s(\mathbb R^d)}:U|_\Omega=u\}.$$
The whole-space inner product is $\langle U_g,U_h\rangle_{H^s}=\int (1+|\xi|^2)^s g(\xi)\overline{h(\xi)}\,d\xi$, linear in the first variable as in [[def-real-and-complex-inner-product-space]].
The inverse Fourier map is injective, whole-space representatives are continuous, the whole-space model is Hilbert, and Schwartz functions are dense in that norm; these facts are supplied by [[lem-matern-weighted-fourier-space-is-hilbert-and-injective]] and [[lem-schwartz-dense-in-fourier-bessel-potential-space]]. The restriction quotient is a norm by bounded point evaluation; its Hilbert realization as the restricted native space is proved in [[lem-restricted-matern-native-space-is-sobolev]]. No extension operator or identification with an intrinsic fractional Sobolev norm on $\Omega$ is part of this definition.

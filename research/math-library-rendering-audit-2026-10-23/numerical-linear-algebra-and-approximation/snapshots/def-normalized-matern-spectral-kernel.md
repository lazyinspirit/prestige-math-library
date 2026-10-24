---
id: def-normalized-matern-spectral-kernel
kind: definition
title: "The normalized Matérn kernel in the 2π Fourier convention"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-rbf-kernels-sites-and-augmented-interpolation
  - def-real-gamma-function-by-the-euler-integral
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-countable-choice
justified_by: [lem-matern-spectral-integral-and-normalization]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Rasmussen and Williams, Gaussian Processes for Machine Learning, Chapter 4, equations (4.14)–(4.15)"
      url: "https://gaussianprocess.org/gpml/chapters/RW4.pdf"
    - title: "Gregory E. Fasshauer, MATH 590: Meshfree Methods, Chapter 13, pp. 34–36"
      url: "https://math.iit.edu/~fass/Notes590_Ch13Print.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Fix the dimension $d\ge1$ of an admitted domain, a smoothness parameter $\nu>0$, and an inverse length $a>0$. Assume Countable Choice for the Lebesgue-integration suppliers used to justify this formula; this definition does not assume full Choice. Put $s=\nu+d/2$ and
$$A=\frac{\Gamma(s)(4\pi)^{d/2}a^{2\nu}}{\Gamma(\nu)},\qquad w(\xi)=A(a^2+4\pi^2|\xi|^2)^{-s}.$$
All integrals are Lebesgue integrals with respect to $\lambda_d$ ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]), and $\Gamma$ is the Euler integral of [[def-real-gamma-function-by-the-euler-integral]]. With the negative-sign Fourier transform convention $\widehat U(\xi)=\int U(x)e^{-2\pi i x\cdot\xi}\,dx$, define the normalized stationary kernel by
$$k(z)=\int_{\mathbb R^d}w(\xi)e^{2\pi i z\cdot\xi}\,d\xi,\qquad K(x,y)=k(x-y).$$
The corresponding length parameter in the usual Matérn notation is $\ell=\sqrt{2\nu}/a$. For $b>0$, define the modified Bessel function in its integral normalization by
$$K_\nu(b)=\frac12\left(\frac b2\right)^\nu\int_0^\infty u^{-\nu-1}e^{-u-b^2/(4u)}\,du.$$
The classical Bessel expression for $k(z)$ when $z\ne0$, its value $k(0)=1$, absolute convergence, continuity, and radial symmetry are established by [[lem-matern-spectral-integral-and-normalization]]. This definition makes no finite-precision stability claim.

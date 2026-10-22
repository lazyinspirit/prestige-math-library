---
id: cex-nrqmx-trial-vector-domain
kind: counterexample
domain: mathematics
library: mathematics
title: A normalized square-integrable vector can have infinite kinetic form energy
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 2
deps:
  - thm-nrqmx-form-min-max
  - thm-nrqmx-free-laplacian-form-domain
  - thm-plancherel
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  thm-nrqmx-form-min-max: mathematical-premise
  thm-nrqmx-free-laplacian-form-domain: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: counterexample
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Phan Thanh Nam, Functional Analysis II, lecture notes, Winter 2020-2021,
        Ludwig-Maximilians-Universität München
      url: https://www.math.lmu.de/~nam/LectureNotesFA2021.pdf
      locator: "Chapter 2, §2.5, printed pp.25-27: free Schrödinger quadratic form on
        H¹."
    - title: Marcello Porta, Mathematical Quantum Theory, University of Tübingen
        lecture notes (2019)
      url: https://www.math.uni-tuebingen.de/de/forschung/maphy/lehre/ss-2019/quantumtheory/dateien/notes.pdf
      locator: "Section 4.4, Theorem 4.65, printed p.41: the form domain is the domain
        of the square root of its represented operator."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and Countable Choice. For the free Hamiltonian
$H_0=-\Delta$ on $L^2(\mathbb R^3;\mathbb C)$ with form
domain $Q(H_0)=H^1(\mathbb R^3)$, it is false that every normalized $L^2$
vector is an admissible finite-energy Rayleigh–Ritz trial vector. In the
$2\pi$ Fourier convention, the normalized vector with
$$\widehat f(\xi)=c(1+|\xi|^2)^{-1},\qquad c=\left(\int_{\mathbb R^3}(1+|\xi|^2)^{-2}\,d\xi\right)^{-1/2},$$
lies in $L^2$ but not in $H^1$, so it is outside the form domain and has no
finite free kinetic form value.

## Statement references

[[thm-nrqmx-form-min-max]]

[[thm-nrqmx-free-laplacian-form-domain]]

## Facts & Assumptions

**Given:** Choice and Countable Choice, the $2\pi$ Fourier convention, and
the free operator on $L^2(\mathbb R^3;\mathbb C)$.

[F1] The form domain of $-\Delta$ is exactly $H^1$ and its form is
$\int4\pi^2|\xi|^2|\widehat f(\xi)|^2\,d\xi$
([[thm-nrqmx-free-laplacian-form-domain]]).

[F2] Plancherel is unitary, so an $L^2$ Fourier function is the transform of a
unique $L^2$ vector with the same norm ([[thm-plancherel]]).

[F3] The min-max infimum ranges only over finite-dimensional subspaces of the
form domain; vectors outside that domain are not admissible form trial vectors
([[thm-nrqmx-form-min-max]]).

[A1] Countable Choice is assumed by the cited Fourier and form suppliers
([[def-countable-choice]]).

[A2] The Axiom of Choice is assumed by the cited free-form and min-max
suppliers ([[def-axiom-of-choice]]).

[F4] Polar coordinates give the radial integration formula on $\mathbb R^3$
([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

## Proof

**Given:** [A1], [A2], [F1]–[F4], and the Fourier function in the Statement.

1.1 In spherical coordinates [F4], $$J=\int_{\mathbb R^3}(1+|\xi|^2)^{-2}\,d\xi =4\pi\int_0^\infty\frac{r^2}{(1+r^2)^2}\,dr.$$ The integrand is bounded by $r^2$ near zero and by $r^{-2}$ for $r\ge1$; thus $0<J<\infty$ and $c=J^{-1/2}$ is defined. By [F2], $\widehat f$ is the Fourier transform of an $L^2$ vector and its norm is $c^2J=1$. [A1, F2, F4, algebra]

2.1 Its formal kinetic form integral equals $$4\pi^2c^2\int_{\mathbb R^3} \frac{|\xi|^2}{(1+|\xi|^2)^2}\,d\xi =16\pi^3c^2\int_0^\infty\frac{r^4}{(1+r^2)^2}\,dr=+\infty,$$ because the radial integrand tends to $1$ as $r\to\infty$. By [F1], finite form energy is equivalent to this weighted integral being finite, so $f\notin H^1(\mathbb R^3;\mathbb C)=Q(H_0)$. [A2, F1, F4, step 1.1, algebra]

3.1 The vector is normalized in $L^2$ by step 1.1 but outside the exact form domain by step 2.1. Thus it cannot be inserted into the min-max variational family described in [F3], which requires its subspaces to lie in $Q(H_0)$; the universal trial-vector claim is false. This counterexample concerns domain admissibility and assigns no finite value to the divergent integral. [F3, step 1.1, step 2.1] ∎

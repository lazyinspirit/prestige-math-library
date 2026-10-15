---
id: ex-white-noise-is-not-l2-valued
kind: example
title: White noise has a negative-Sobolev law but no L2-valued law
status: draft
origin: pipeline
dependency_level: 3
deps:
  - def-negative-sobolev-space-for-white-noise
  - lem-white-noise-is-borel-gaussian-on-negative-sobolev-space
  - cor-canonical-white-noise-law-is-tight-under-choice
  - def-axiom-of-choice
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Castillo and Nickl, Nonparametric Bernstein–von Mises theorems in Gaussian white noise, §1.2, printed pp. 2005–2006"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/AOS1133.pdf
    - title: "Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, §7.3.4, printed pp. 594–595"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
---

## Example

Take a wavelet basis with $2^l$ coefficients at level $l$ and $a_l=2^l$ for $l\ge1$. The weighted white-noise trace at $\delta=1/2$ has level-$l$ contribution

$$2^l\,2^{-l}(\log 2^l)^{-1}=\frac{1}{l\log2},$$

so the covariance trace used by this construction diverges. For every $\delta>1/2$ the trace is finite and white noise has a Borel Gaussian law on $H(\delta)$; under AC its law is tight. In every infinite-dimensional orthonormal basis, white noise still fails to be an $L^2$-valued random element. This example records the topology and target-law boundary in the weak BvM theorem; it does not assert a separate impossibility theorem for every conceivable $L^2$ posterior limit.

## Facts & Assumptions

**Given:** The wavelet-level weights and the standard independent white-noise coordinates.

[F1] [[def-negative-sobolev-space-for-white-noise]]: For wavelets the level multiplicity is $2^l$ and the weight is $2^{-l}(\log a_l)^{-2\delta}$, with the coarsest finite level treated separately.

[F2] [[lem-white-noise-is-borel-gaussian-on-negative-sobolev-space]]: The white-noise series is Borel Gaussian in $H(\delta)$ for $\delta>1/2$, while its independent standard-normal coefficients cannot be those of an $L^2$ element.

[F3] [[cor-canonical-white-noise-law-is-tight-under-choice]]: Under AC, the canonical Borel law on Polish $H(\delta)$ is tight.

[A1] [[def-axiom-of-choice]]: AC is assumed only for the tightness conclusion in [F3]; the trace calculation and failure of an $L^2$ realization use no choice axiom.

## Verification

**Given:** The basis, the weights, and the white-noise coefficient sequence.

1.1 At $\delta=1/2$, the $l$th trace contribution for $l\ge1$ is $1/(l\log2)$. On each block $2^m\le l<2^{m+1}$ its sum is at least $1/(2\log2)$, so the trace diverges. For $\delta>1/2$ the contribution is proportional to $l^{-2\delta}$; on each dyadic block its sum is at most a constant times $2^{m(1-2\delta)}$, a summable geometric sequence. Finite coarsest terms do not affect either conclusion. [F1, algebra]

1.2 By [F2] the coefficient sequence defines a Borel Gaussian law on $H(\delta)$ and is not $L^2$-valued; [F3] gives tightness of that law under [A1]. [A1, F2, F3]

2.1 Therefore the canonical Gaussian target for the weak BvM result is the negative-Sobolev law described in [F2], tight under the stated AC branch [F3]; the theorem makes no $L^2$-valued or total-variation conclusion. [A1, F2, F3, step 1.1, step 1.2] ∎

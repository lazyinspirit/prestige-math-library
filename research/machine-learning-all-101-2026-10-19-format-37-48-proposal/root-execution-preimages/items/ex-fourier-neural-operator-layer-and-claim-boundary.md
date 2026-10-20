---
id: ex-fourier-neural-operator-layer-and-claim-boundary
kind: example
title: "A one-frequency Fourier layer on the circle"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps: [def-fourier-neural-operator-layer]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: n/a
sources:
  references:
    - title: "Kovachki et al., Neural Operator: Learning Maps Between Function Spaces With Applications to PDEs"
      url: "https://arxiv.org/pdf/2108.08481"
      locator: "§5.3, Fourier neural-operator layer"
---

## Example

On the one-dimensional torus, let $v(x)=\sin(2\pi x)$ and use a Fourier cutoff $K\ge1$. If the spectral matrices satisfy $R_1=R_{-1}=1$ and all other retained matrices vanish, then the spectral part of the layer returns $v$ exactly. If the cutoff is $K=0$, its spectral part is zero because $\widehat v(0)=0$. These finite-mode computations illustrate the layer definition and make no approximation or universality claim for the full Fourier neural-operator architecture.

## Example references
[Kovachki et al., §5.3: finite Fourier-mode parameterization](https://arxiv.org/pdf/2108.08481)

[Kovachki et al., §5.3: Fourier-layer convention](https://arxiv.org/pdf/2108.08481)

## Facts & Assumptions

**Given:** $v(x)=\sin(2\pi x)$ on $\mathbb T=\mathbb R/\mathbb Z$ and the Fourier coefficient convention in the Fourier neural-operator layer definition.

[F1] The Fourier coefficient of $e^{2\pi i kx}$ at index $j$ is $1$ if $j=k$ and $0$ otherwise, by integrating the exponential over one period.

## Verification

**Proof strategy:** compute the two nonzero Fourier coefficients.

1.1 Using $\sin(2\pi x)=(e^{2\pi ix}-e^{-2\pi ix})/(2i)$ and [F1], $\widehat v(1)=1/(2i)$, $\widehat v(-1)=-1/(2i)$, and every other coefficient is zero. [given, F1, algebra]

1.2 With $R_1=R_{-1}=1$, the retained sum is $e^{2\pi ix}/(2i)-e^{-2\pi ix}/(2i)=v(x)$. At cutoff zero, the sum has only the $k=0$ term, which vanishes because $\widehat v(0)=0$. [step 1.1, algebra] ∎


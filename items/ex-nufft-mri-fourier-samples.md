---
id: ex-nufft-mri-fourier-samples
kind: example
title: Exact MRI Fourier samples from a two-point object
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: nonuniform-fast-fourier-transforms-examples
dependency_level: 2
proof_strategy: direct
deps:
  - def-nufft-transform-types-and-mode-conventions
  - def-complex-exponential
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Leslie Greengard and June-Yub Lee, Accelerating the Nonuniform Fast
        Fourier Transform"
      url: "https://cims.nyu.edu/~greengar/glee_nufft_sirev.pdf"
      locator: "Example 4, printed pp. 451–452: MRI sampling as nonuniform Fourier
        evaluation; this example recomputes a separate exact two-point model."
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Consider a two-point object in $\mathbb T^2=[0,1)^2$ with locations
$$x_0=(1/4,0),\qquad x_1=(1/2,1/4),$$
and weights $c_0=1,c_1=2$. At the two type-3 frequency samples
$$\xi_0=(0,0),\qquad \xi_1=(1/3,1/5),$$
the exact nonuniform Fourier samples are
$$G_0=3,\qquad G_1=e^{-2\pi i/12}+2e^{-2\pi i(13/60)}.$$
These are finite Fourier samples of a point-source model of an MRI object; no acquisition or reconstruction claim is made.

## Facts & Assumptions

**Given:** The two locations, weights and frequency samples stated above.

[F1] [[def-nufft-transform-types-and-mode-conventions]]: a type-3 sample is $G_\ell=\sum_jc_je^{-2\pi i\xi_\ell\cdot x_j}$ for finite real source and frequency lists.

[F2] [[def-complex-exponential]]: its power series defines every displayed value, and substituting $z=0$ gives $e^0=1$.

## Proof

1.1 For $\xi_0=(0,0)$, both dot products are zero, so [F1] gives $G_0=1\cdot e^0+2\cdot e^0=3$. [F1, F2, given, algebra]

2.1 For $\xi_1=(1/3,1/5)$, the dot products are $\xi_1\cdot x_0=1/12$ and $\xi_1\cdot x_1=1/6+1/20=13/60$. Substituting these and the weights in [F1] yields $G_1=e^{-2\pi i/12}+2e^{-2\pi i(13/60)}$, as claimed. [F1, F2, given, algebra] ∎
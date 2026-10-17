---
id: ex-na-three-sample-dct-chebyshev-coefficients
kind: example
title: "Three Chebyshev-root samples recover a quadratic by DCT-II"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: computed-fast-transforms-and-convolution-examples
dependency_level: 3
deps: [thm-na-dct-ii-chebyshev-coefficient-extraction, thm-na-dct-ii-orthogonality-inverse-and-dft-extension, def-chebyshev-polynomials-first-and-second-kind]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "C. Sidney Burrus, Fast Fourier Transforms, Chapter 8 §8.3.2"
      url: https://repository.rice.edu/server/api/core/bitstreams/01e9e0a5-fa6f-453d-a1b5-8209fa0a565c/content
---

## Example

Let $p(t)=2+T_1(t)-T_2(t)$, where $T_k$ is the first-kind Chebyshev polynomial, and sample it at the three DCT-II nodes $\xi_j=\cos(\pi(j+1/2)/3)$ for $j=0,1,2$. The DCT-II output is $(6,3/2,-3/2)$, and the inverse coefficient rule recovers $(2,1,-1)$.

## Facts & Assumptions

**Given:** The polynomial $p(t)=2+T_1(t)-T_2(t)$ and the samples $x_j=p(\xi_j)$ at $\xi_j=\cos(\pi(j+1/2)/3)$.

[F1] At these DCT-II nodes, a polynomial $p=\sum_{k=0}^{N-1}a_kT_k$ has DCT values $X_0=Na_0$ and $X_k=(N/2)a_k$ for $k\ge1$ ([[thm-na-dct-ii-chebyshev-coefficient-extraction]]).

[F2] Chebyshev coefficient recovery from the DCT-II samples is $a_0=X_0/N$ and $a_k=2X_k/N$ for $1\le k<N$ ([[thm-na-dct-ii-chebyshev-coefficient-extraction]]).

[F3] $T_0(t)=1$, $T_1(t)=t$, and $T_2(t)=2t^2-1$ ([[def-chebyshev-polynomials-first-and-second-kind]]).

## Verification

1.1 By [F3], $p(t)=2+T_1(t)-T_2(t)=2+1\cdot T_1(t)-1\cdot T_2(t)$ has Chebyshev coefficient vector $(a_0,a_1,a_2)=(2,1,-1)$ and degree less than $3$. Applying [F1] with $N=3$ gives $X_0=3\cdot2=6$, $X_1=(3/2)\cdot1=3/2$, and $X_2=(3/2)(-1)=-3/2$. [given, F1, F3, algebra]

2.1 Applying [F2] gives $a_0=6/3=2$, $a_1=2(3/2)/3=1$, and $a_2=2(-3/2)/3=-1$, recovering the original coefficients. [step 1.1, F2, algebra] ∎

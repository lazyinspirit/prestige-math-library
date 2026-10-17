---
id: ex-na-prime-length-five-bluestein-transform
kind: example
title: "The length-five all-ones vector through Bluestein"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: computed-fast-transforms-and-convolution-examples
dependency_level: 1
deps: [lem-na-bluestein-chirp-convolution-factorization, thm-complex-exponential-addition-and-real-extension, thm-kernel-and-fibres-of-complex-exponential]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "C. Sidney Burrus, Fast Fourier Transforms, Chapter 5 §5.2"
      url: https://repository.rice.edu/server/api/core/bitstreams/01e9e0a5-fa6f-453d-a1b5-8209fa0a565c/content
---

## Example

Take $N=5$ and $x=(1,1,1,1,1)$. Choose $M=16$, the least power of two at least $2N-1=9$. The direct unnormalised DFT is $X=(5,0,0,0,0)$, and the exact Bluestein chirp convolution with this padding represents the same vector. This example checks the prime-length indexing and the padding threshold; it makes no floating-point accuracy claim.

## Facts & Assumptions

**Given:** $N=5$, $M=16$, and $x_j=1$ for $0\le j<5$.

[F1] The Bluestein identity represents the DFT through the zero-padded cyclic chirp convolution with padding $M\ge2N-1$ ([[lem-na-bluestein-chirp-convolution-factorization]]).

[F2] $e^{z+w}=e^ze^w$ and $e^{2\pi i n}=1$ for integers $n$; $e^z=1$ exactly when $z\in2\pi i\mathbb Z$ ([[thm-complex-exponential-addition-and-real-extension]], [[thm-kernel-and-fibres-of-complex-exponential]]).

## Verification

1.1 Since $2N-1=9$, the greatest power of two below $9$ is $8$ and the next is $16$, so $M=16$ is the least qualifying power. It satisfies the no-aliasing condition [F1]. [given, F1, algebra]

1.2 The direct unnormalised transform is $X_k=\sum_{j=0}^{4}e^{-2\pi ijk/5}$. For $k=0$, all five terms equal $1$, so $X_0=5$. For $1\le k\le4$, let $r=e^{-2\pi ik/5}$. The addition law in [F2] gives $r^5=e^{-2\pi ik}=1$. If $r=1$, the kernel statement in [F2] gives $-2\pi i k/5\in2\pi i\mathbb Z$, so $k/5$ is an integer, contradicting $1\le k\le4$. Therefore $r\ne1$, and $(1-r)\sum_{j=0}^{4}r^j=1-r^5=0$ gives $X_k=0$ after division by $1-r$. [given, F2, algebra]

2.1 By [F1], the exact chirp convolution with $M=16$ equals this same DFT; hence its output is $(5,0,0,0,0)$. [step 1.1, step 1.2, F1] ∎

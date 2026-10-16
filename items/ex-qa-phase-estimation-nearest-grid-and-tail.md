---
id: ex-qa-phase-estimation-nearest-grid-and-tail
kind: example
title: Nearest-grid and tail estimates in phase estimation
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - thm-qa-phase-estimation-success-and-tail
  - lem-qa-phase-estimation-outcome-kernel
  - lem-qa-phase-estimation-geometric-sum
  - def-qa-circular-phase-distance
  - thm-complex-exponential-addition-and-real-extension
  - thm-kernel-and-fibres-of-complex-exponential
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - lem-complex-conjugation-and-modulus-laws
  - cor-trigonometric-parity-and-pythagorean-identity
justified_by: []
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
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §4.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, version 6, §4.6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Lin Lin, Lecture Notes on Quantum Algorithms for Scientific Computation, §§16.1–16.3"
      url: "https://math.berkeley.edu/~linlin/qasc/live_notes_0315.pdf"
---

## Example

Take a valid eigenphase-estimation input with $m=3$, $Q=8$, and
$\theta=3/16$. Compute the nearest-label probabilities and the exact circular
tail probability at threshold $\eta=1/4$.

## Facts & Assumptions

**Given:** A valid QPE eigenpair with $m=3$, $Q=8$, and $\theta=3/16$.

[F1] The finite outcome law is $P_\theta(y)=Q^{-2}|\sum_{j<Q}\exp(2\pi ij(\theta-y/Q))|^2$ ([[lem-qa-phase-estimation-outcome-kernel]]).

[F2] The geometric sum is $(1-z^Q)/(1-z)$ when $z\ne1$ ([[lem-qa-phase-estimation-geometric-sum]]).

[F3] The circular distance is $d_{\mathbb T}(x)=\min(|x|,1-|x|)$ for $x\in[-1,1]$ ([[def-qa-circular-phase-distance]]).

[F4] The success-and-tail theorem gives every nearest label probability at least $4/\pi^2$, and for $K=\lfloor Q\eta\rfloor\ge2$ bounds the circular tail by $1/(2(K-1))$ ([[thm-qa-phase-estimation-success-and-tail]]).

## Verification

1.1 Since $Q\theta=3/2$, the grid labels $1$ and $2$ are tied nearest labels, each at circular distance $1/16$. For $y=1,2$, $Q(\theta-y/8)=\pm1/2$, so the geometric quotient in [F1]–[F2] has numerator modulus $2$ and denominator modulus $2\sin(\pi/16)$. Thus $P_\theta(1)=P_\theta(2)=1/(64\sin^2(\pi/16))$, which is at least $4/\pi^2$ by the nearest-grid part of [F4]. [given, F1, F2, F4, algebra]

1.2 The circular distances for $y=0,\ldots,7$ are $(3/16,1/16,1/16,3/16,5/16,7/16,7/16,5/16)$, by [F3]. Hence the tail event $d_{\mathbb T}(\theta-y/8)\ge1/4$ consists exactly of $y=4,5,6,7$. For these labels the exact outcome probabilities are $P_\theta(4)=P_\theta(7)=1/(64\sin^2(5\pi/16))$ and $P_\theta(5)=P_\theta(6)=1/(64\sin^2(7\pi/16))$, again by the finite geometric quotient. [F1, F2, F3, algebra]

2.1 Therefore the exact total tail is $\frac1{32}\bigl(\sin^{-2}(5\pi/16)+\sin^{-2}(7\pi/16)\bigr)$. Here $K=\lfloor8(1/4)\rfloor=2$, so [F4] gives the proven upper bound $1/2$ for this total. Numerically the exact expression is approximately $0.07769$, well below $1/2$. [F4, step 1.2, algebra] ∎

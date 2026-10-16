---
id: ex-qa-exact-phase-estimation
kind: example
title: Exact estimation of a binary phase
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - alg-qa-quantum-phase-estimation
  - lem-qa-phase-estimation-outcome-kernel
  - thm-qa-phase-estimation-exact-grid
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
---

## Example

Take a valid eigenphase-estimation input with $m=3$ and eigenphase
$\theta=5/8$. Compute the complete output law and the returned estimate.

## Facts & Assumptions

**Given:** A valid QPE eigenpair $U\psi=\exp(2\pi i(5/8))\psi$, with $m=3$.

[F1] The algorithm returns the measured label $y$ and estimate $y/Q$, where $Q=2^m$ ([[alg-qa-quantum-phase-estimation]]).

[F2] If $Q\theta=t$ is an integer, then the exact-grid theorem gives probability one to $y=t$ and zero to every other label ([[thm-qa-phase-estimation-exact-grid]]).

## Verification

1.1 Here $Q=2^3=8$ and $Q\theta=8(5/8)=5$, an integer in $\{0,\ldots,7\}$. By [F2], the output probabilities in label order $0,1,\ldots,7$ are $(0,0,0,0,0,1,0,0)$. [given, F2, algebra]

2.1 The unique measured label is $y=5$; [F1] therefore returns the exact phase estimate $y/Q=5/8$. [F1, step 1.1, algebra] ∎

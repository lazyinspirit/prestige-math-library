---
id: lem-qa-13-pi-rational-bounds
kind: lemma
title: "Rational bounds for pi used in finite schedules"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - thm-principal-inverse-tangent-calculus
  - def-pi-via-first-positive-cosine-zero
  - thm-alternating-series-test
  - thm-of-archimedean
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all constructions and measurement schedules are finite, and the analytic estimates use the stated real-analysis suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brassard, Høyer, Mosca, and Tapp, Quantum Amplitude Amplification and Estimation, complete article, §§4–5, Theorems 11–18"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, complete lecture notes, §§19.1–19.3"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, complete 239-page notes, §7.3"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Statement

The circle constant satisfies $3<\pi<22/7$.

## Facts & Assumptions

**Given:** The principal inverse tangent and the usual positive constant $\pi$.

[F1] $\arctan x=\int_0^x(1+t^2)^{-1}\,dt$ and $\pi/4=\sum_{n=0}^\infty(-1)^n/(2n+1)$ ([[thm-principal-inverse-tangent-calculus]]). The positive terms $1/(2n+1)$ decrease to zero; the alternating-series test places the sum between consecutive partial sums and bounds the error by the first omitted term ([[thm-alternating-series-test]], [[thm-of-archimedean]]).

[F2] The definition identifies $\pi/2$ as the first positive zero of cosine and fixes the same circle constant used in the arctangent identity ([[def-pi-via-first-positive-cosine-zero]]).

## Proof

1.1 Group the first eight terms of the alternating series in [F1] into four positive pairs. Their sum is $2/3+2/35+2/99+2/195=33976/45045>3/4$, since $4\cdot33976=135904>135135=3\cdot45045$. The alternating-series remainder after an even partial sum is positive, so $\pi/4>3/4$ and $\pi>3$. [given, F1, F2, algebra]

2.1 For $0<x<1$, the integrand $x^4(1-x)^4/(1+x^2)$ is positive. Polynomial division gives $x^4(1-x)^4/(1+x^2)=x^6-4x^5+5x^4-4x^2+4-4/(1+x^2)$. Its integral over $[0,1]$ is $1/7-2/3+1-4/3+4-4\arctan(1)=22/7-\pi$ by [F1]. The integral is strictly positive, hence $\pi<22/7$. [given, F1, F2, algebra] ∎

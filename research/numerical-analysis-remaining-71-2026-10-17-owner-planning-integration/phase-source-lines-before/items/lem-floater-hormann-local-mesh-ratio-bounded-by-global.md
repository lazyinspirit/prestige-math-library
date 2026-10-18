---
id: lem-floater-hormann-local-mesh-ratio-bounded-by-global
kind: lemma
title: A global mesh ratio bounds the local degree-zero ratio
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps:
  - def-floater-hormann-local-mesh-ratio
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Michael S. Floater and Kai Hormann, Barycentric rational interpolation with no poles and high rates of approximation, Theorem 3
      url: https://www.mn.uio.no/math/english/people/aca/michaelf/papers/rational.pdf
---

## Statement

Let $x_0<\cdots<x_n$, $n\ge1$, put
$h=\max_{0\le j<n}(x_{j+1}-x_j)$ and
$h_{\min}=\min_{0\le j<n}(x_{j+1}-x_j)$, and let
$\rho=h/h_{\min}$. The local ratio $\beta$ in
[[def-floater-hormann-local-mesh-ratio]] satisfies $0\le\beta\le\rho$.

## Facts & Assumptions

**Given:** Ordered distinct nodes, their largest and smallest adjacent gaps $h,h_{\min}$, and the local ratio $\beta$.

[F1] [[def-floater-hormann-local-mesh-ratio]]: for $n\ge3$, $\beta$ is the maximum over interior indices of the smaller of two adjacent-gap ratios; for $n\le2$, $\beta=0$.

## Proof

1.1 Since every adjacent gap is at most $h$ and at least $h_{\min}>0$, each
ratio appearing in [F1] is positive and at most $h/h_{\min}=\rho$. Their
minimum is therefore in $[0,\rho]$, and the maximum of these minima also lies
in $[0,\rho]$. When $n\le2$, $\beta=0\le\rho$. [given, F1, algebra] ∎

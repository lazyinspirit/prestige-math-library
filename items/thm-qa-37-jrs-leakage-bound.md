---
id: thm-qa-37-jrs-leakage-bound
kind: theorem
title: "Finite JRS leakage amplitude and probability"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 11
deps:
  - def-qa-37-finite-adiabatic-braid-input
  - thm-qa-36-jrs-finite-adiabatic-bound
justified_by: []
axiom_use: "None; the JRS result is finite-dimensional and choice-free."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sabine Jansen, Mary-Beth Ruskai, and Ruedi Seiler, Bounds for the adiabatic approximation with applications to quantum computation"
      url: https://arxiv.org/pdf/quant-ph/0603175
      locator: "Theorem 3, finite-rank projector estimate and transition bound, PDF pp. 8–12."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Chapter 30 §§30.1–30.2; read as context only, PDF pp. 159–164."
---

## Statement

For a finite adiabatic braid input with rank-$m$ spectral band and schedule
$T>0$, define
$$A_m(s)=\frac1T\left[\frac{m\|H'(0)\|}{g(0)^2} +\frac{m\|H'(s)\|}{g(s)^2} +\int_0^s\left(\frac{m\|H''(r)\|}{g(r)^2} +\frac{7m\sqrt m\|H'(r)\|^2}{g(r)^3}\right)dr\right].$$
Then
$\|U_T(s)P(0)U_T(s)^*-P(s)\|\le A_m(s)$, and every unit initial band
vector has leakage probability at most $A_m(s)^2$. In particular,
$\|[I-P(1)]U_T(1)A_0\|_{\rm op}\le A_m(1)$ and leakage probability is at
most $A_m(1)^2$. This result does not prove the separate in-band transport
condition or identify band transport with Fibonacci $F/R$ data.

## Facts & Assumptions

**Given:** The finite-dimensional $C^2$ Hermitian path, its constant-rank
uniformly gapped band, preparation isometry, schedule $T>0$, and propagator.

[F1] The JRS theorem gives the displayed rank-dependent projector bound and
transition-probability bound. [[thm-qa-36-jrs-finite-adiabatic-bound]]

[F2] The preparation isometry maps every unit vector in $\mathbb C^m$ to a
unit vector in $\operatorname{ran}P(0)$.
[[def-qa-37-finite-adiabatic-braid-input]]

## Proof

1.1 The hypotheses of [F1] are exactly the finite-path, $C^2$, constant-rank, uniform-gap and $T>0$ clauses in the input definition. Substituting its $H,P,g,m,T$ into the JRS expression gives the displayed $A_m(s)$ and $\|U_T(s)P(0)U_T(s)^*-P(s)\|\le A_m(s)$. [F1, F2, given, algebra]

2.1 Let $v\in\mathbb C^m$ be unit and set $\psi=A_0v$. By [F2], $\psi$ is a unit vector in the initial band, so [F1] gives $\|[I-P(1)]U_T(1)\psi\|^2\le A_m(1)^2$. Taking square roots and then the supremum over unit $v$ gives $\|[I-P(1)]U_T(1)A_0\|_{\rm op}\le A_m(1)$. The squared bound is its leakage probability. No statement in [F1] supplies the in-band comparison $\epsilon_{\rm tr}$; that remains an independent input hypothesis. [F1, F2, step 1.1, algebra] ∎

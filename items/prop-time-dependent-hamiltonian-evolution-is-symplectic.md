---
id: prop-time-dependent-hamiltonian-evolution-is-symplectic
kind: proposition
title: Time-dependent Hamiltonian evolution is symplectic
status: published
origin: pipeline
deps: ["def-countable-choice", "def-time-dependent-hamiltonian-vector-field-and-flow", "thm-differentiation-of-a-pulled-back-form-along-a-time-dependent-flow"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §5.1, flow differentiation and Moser calculation, pp. 56--58
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Every time slice $\Phi_{t,s}$ of a
time-dependent Hamiltonian evolution is a local symplectomorphism wherever it
is defined: $\Phi_{t,s}^*\omega=\omega$.

## Facts & Assumptions

**Given:** A time-dependent Hamiltonian and its local evolution.

[F1] $\iota_{X_{H_t}}\omega=dH_t$.
[[def-time-dependent-hamiltonian-vector-field-and-flow]].

[F2] Along a time-dependent evolution,
$\partial_t\Phi_{t,s}^*\omega=\Phi_{t,s}^*(\mathcal L_{X_{H_t}}\omega)$.
[[thm-differentiation-of-a-pulled-back-form-along-a-time-dependent-flow]].

## Proof

**Proof technique:** direct.

1.1 Cartan's formula and [F1] give $\mathcal L_{X_{H_t}}\omega=d(dH_t)+\iota_{X_{H_t}}d\omega=0$. [F1, given]

2.1 By [F2], $\partial_t\Phi_{t,s}^*\omega=0$. At $t=s$ the pullback is $\omega$, so it remains $\omega$ on the evolution domain. [F2, step 1.1] ∎

---
id: alg-qa-28-median-spectral-estimation
kind: algorithm
title: Median-amplified spectral estimate
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - alg-qa-28-phase-spectral-estimation
  - def-qa-28-spectral-estimation-access
justified_by: []
axiom_use: "None; the procedure makes finitely many independently prepared runs."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §4.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, version 6, §4.6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Definition

**Inputs.** An eigenvalue-estimation access instance, positive rational binary inputs $\epsilon>0$ and $0<\delta<1$, and certified rational upper enclosures $\pi_+>\pi$ and $L_+\ge\ln(1/\delta)$ as produced by the finite interval procedures in OP0 of `research/quantum-algorithms-planning/operational-contracts.md`.

**Instructions.** Choose the least dyadic $Q=2^m$, $m\ge1$, satisfying $Q\epsilon\ge6\pi_+$. Choose the least positive odd integer $r$ satisfying $r\ge8L_+$. On each of $r$ fresh trials, prepare the declared eigenstate and run [[alg-qa-28-phase-spectral-estimation]] with phase-register size $m$. Decode every result using the same branch convention, then return the median of the $r$ real eigenvalue estimates. Do not reuse the postmeasurement system from one trial as the input to another; each trial begins with a fresh state preparation.

The certified enclosures, doubling comparisons, state preparation, each QPE circuit, each controlled-power or controlled-$U$ call, projective readout, decoding, and median computation are charged. If only controlled-$U$ access is supplied, the ideal controlled-call count is $r(Q-1)$; exact supplied powers use their separately declared per-trial costs. No inverse call is used by this procedure. Its accuracy theorem is separate.

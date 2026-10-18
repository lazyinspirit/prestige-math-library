---
id: def-qa-37-finite-adiabatic-braid-input
kind: definition
title: "Finite adiabatic braid compilation input"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps:
  - def-qa-36-finite-adiabatic-path-model
  - thm-qa-36-jrs-finite-adiabatic-bound
  - def-qc-tqc-physical-braid-interface
  - ex-qc-tqc-fibonacci-data
  - def-qa-37-phase-reference-cost
justified_by: []
axiom_use: "None; uses finite-dimensional spectral and matrix ODE model hypotheses."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: "§IV.C, material and implementation caveats, PDF pp. 58–63."
    - title: "Sabine Jansen, Mary-Beth Ruskai, and Ruedi Seiler, Bounds for the adiabatic approximation with applications to quantum computation"
      url: https://arxiv.org/pdf/quant-ph/0603175
      locator: "Theorem 3 and Lemmas 1–8, PDF pp. 5–12."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Chapter 30 §§30.1–30.2, rank-one adiabatic theorem context, printed pp. 151–156."
---

## Definition

A **finite adiabatic braid input** consists of a finite-dimensional complex
Hilbert space $V$, a $C^2$ Hermitian path $H(s)$ on $0\le s\le1$, a
norm-continuous constant-rank orthogonal spectral projection $P(s)$ onto a
coherently followed band with uniform positive full gap, a slow-time schedule
$T>0$, and an explicit initial isometry $A_0:\mathbb C^m\to\operatorname{ran}P(0)$.
These are the path and propagator hypotheses of
[[def-qa-36-finite-adiabatic-path-model]]; the output propagator $U_T$ solves
$iU_T'(s)=TH(s)U_T(s)$. Also supply an endpoint isometry
$A_1:\mathbb C^m\to\operatorname{ran}P(1)$ and a specified Fibonacci braid
word $b$ with categorical action $\rho(b)$ on a specified $m$-dimensional
fusion space $V_{\rm cat}$, in the fixed convention of
[[ex-qc-tqc-fibonacci-data]], and a unitary target
$\rho_{\rm log}(b)\in U(\mathbb C^m)$ in the declared logical input/output
frames. Supply unitary coordinate maps $Q_j:\mathbb C^m\to V_{\rm cat}$
for $j=0,1$ and set $\rho_{\rm log}(b)=Q_1^*\rho(b)Q_0$.
The band identifications are then $\iota_j=A_jQ_j^*$, as in
[[def-qc-tqc-physical-braid-interface]]. The target is the selected categorical
$F/R$ action written in those frames, including the phase convention recorded by
[[def-qa-37-phase-reference-cost]]; specifying it does not assert that the
physical path realizes it. The **in-band transport condition** is the separate
hypothesis
$$\|P(1)U_T(1)A_0-A_1\rho_{\rm log}(b)\|_{\rm op}\le\epsilon_{\rm tr}.$$
This condition is not a consequence of a projector-leakage estimate. The
model also specifies a finite output measurement and, if needed, its own
implementation-variation bound. The JRS expression and leakage consequence
are handled as a separate result.

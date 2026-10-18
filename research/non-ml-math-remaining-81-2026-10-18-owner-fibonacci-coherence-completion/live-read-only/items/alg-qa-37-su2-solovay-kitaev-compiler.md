---
id: alg-qa-37-su2-solovay-kitaev-compiler
kind: algorithm
title: "SU(2) Fibonacci Solovay–Kitaev compiler"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 13
deps:
  - def-qa-37-fibonacci-braid-gate-set
  - def-qa-37-certified-matrix-input
  - def-qc-effective-unitary-matrix-input
  - alg-qc-solovay-kitaev-unitary-compiler
  - lem-qc-compact-su2-base-net
  - def-qc-inverse-closed-dense-su2-gate-set
  - def-qa-37-phase-reference-cost
  - def-countable-choice
  - thm-qc-solovay-kitaev-bit-complexity
justified_by: []
axiom_use: "None beyond the carried ACω density hypothesis used to establish the gate alphabet; the recursion itself is finite and choice-free."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Christopher M. Dawson and Michael A. Nielsen, The Solovay–Kitaev Algorithm"
      url: https://arxiv.org/pdf/quant-ph/0505030
      locator: "§§2–4, finite net and recursive compiler, PDF pp. 2–10."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 2 §2.2, PDF pp. 26–29."
---

## Definition

**Inputs:** a certified Cauchy name for an exact $S\in SU(2)$; a positive
binary-rational tolerance $\varepsilon\le\eta_0$; the fixed inverse-closed
dense Fibonacci alphabet $G_{\rm Fib}$; and a fixed certified base-net
certificate $(\mathcal N_0,\eta_0,L_0)$ with $\eta_0<64^{-2}$. Apply the
finite-precision Solovay–Kitaev recursion of
[[alg-qc-solovay-kitaev-unitary-compiler]] to this alphabet and target. Return
the resulting word in the labels $zB_1,zB_2,(zB_1)^{-1},(zB_2)^{-1}$, its
expanded length, and its Artin exponent sum $k$. The exact-real recursion and
the finite Turing interface are distinguished: the published SK error theorem
uses exact-real comparisons, while the finite bit implementation requires the
polynomial-name and algebraic-entry hypotheses stated in
[[thm-qc-solovay-kitaev-bit-complexity]]. The base-net list is supplied
certificate data; this algorithm does not compute it from density.

**Output:** a braid word $b$ and ledger scalar $(R_1z^{-1})^k$ such that,
when the algorithm's hypotheses hold, the normalized SU(2) matrix of $b$ is
within the requested tolerance of $S$. Its physical matrix carries the
recorded scalar from [[def-qa-37-phase-reference-cost]].

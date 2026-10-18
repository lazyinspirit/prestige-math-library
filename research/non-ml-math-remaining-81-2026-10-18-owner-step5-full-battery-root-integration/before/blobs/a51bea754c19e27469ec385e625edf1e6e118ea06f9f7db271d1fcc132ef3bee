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
  statement: ai-altered
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

**Inputs:** a positive binary-rational tolerance $0<\varepsilon\le\eta_0$;
the fixed inverse-closed Fibonacci alphabet $G_{\rm Fib}$; and a fixed
certified base-net certificate $(\mathcal N_0,\eta_0,L_0)$ with
$0<\eta_0<64^{-2}$. Select exactly one target interface:

1. **Ideal exact-real interface:** supply an exact-real handle for
   $S\in SU(2)$ with exact fixed-dimensional matrix operations and exact
   comparisons. Invoke the ideal recursive procedure
   [[alg-qc-solovay-kitaev-unitary-compiler]] on $S$ and $\varepsilon$.
2. **Finite Turing interface:** supply a polynomial-time Cauchy name for
   $S\in SU(2)$ and the minimal-polynomial and rational isolating-interval
   descriptions of every real and imaginary gate coordinate required by the
   finite-precision theorem. Run the deterministic Turing implementation
   established by [[thm-qc-solovay-kitaev-bit-complexity]] on that name,
   alphabet, certificate, and tolerance. This branch uses its certified
   interval decisions and does not invoke exact-real comparisons.

In either branch, return the resulting word in the labels
$zB_1,zB_2,(zB_1)^{-1},(zB_2)^{-1}$, its expanded length, and its Artin
exponent sum $k$. The base-net list is supplied certificate data; this
algorithm does not compute it from density. A Cauchy name alone is not an
exact-real handle, and the ideal branch makes no finite bit-time claim.

**Output:** a braid word $b$ and ledger scalar $(R_1z^{-1})^k$ such that,
when the algorithm's hypotheses hold, the normalized SU(2) matrix of $b$ is
within the requested tolerance of $S$. Its physical matrix carries the
recorded scalar from [[def-qa-37-phase-reference-cost]].

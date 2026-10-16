---
id: alg-qa-32-simon-query-rank-test
kind: algorithm
title: Simon promise decision by sampled rank
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: quantum-complexity-classes-and-oracle-separations
dependency_level: 16
deps:
  - def-qa-32-simon-decision-oracle-promise
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
  - def-qc-clifford-t-gate-library
  - def-qc-coherent-function-oracle
  - thm-qc-reversible-xor-oracle-unitary
  - def-qc-instrument-and-conditional-state
  - lem-qa-32-simon-function-register-instrument
  - def-qc-circuit-cost-model
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 3, Section 3.2"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 1, Section 1.6"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
---

## Definition

Input: an integer $n\ge1$ and oracle access to a promised function $f:V_n\to V_n$ from [[def-qa-32-simon-decision-oracle-promise]]. Set $m=n+2$. For each of $m$ independent runs, initialize two ordered $n$-qubit registers $X,Y$ to $|0^n\rangle|0^n\rangle$, apply $H^{\otimes n}$ to $X$, and query the coherent XOR oracle $U_f$ once on $X,Y$. Apply the computational-basis instrument on $Y$ from [[lem-qa-32-simon-function-register-instrument]], record and discard its classical outcome, apply $H^{\otimes n}$ again to $X$, and measure $X$ in the computational basis using the same instrument. Record the resulting $y_j\in V_n$.

Form the $m\times n$ binary matrix with rows $y_1,\ldots,y_m$. Set the next pivot row to $r=1$ and scan columns $j=1,\ldots,n$ from left to right. In column $j$, search rows $r,\ldots,m$ for the first row with a $1$ in that column. If there is no such row, leave the column without a pivot and continue to the next column. Otherwise swap that row with row $r$, XOR row $r$ into every other row with a $1$ in column $j$, and increase $r$ by one. Accept (declare injective) exactly when the number of pivots is $n$.

The operation counts and correctness of this procedure are established in [[thm-qa-32-simon-sample-rank-correctness]]. A query is charged separately from an implementation of $f$ by [[def-qc-circuit-cost-model]]. It makes no gate-time separation claim.

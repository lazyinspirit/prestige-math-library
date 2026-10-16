---
id: alg-qa-12-unknown-amplitude-search
kind: algorithm
title: "Unknown-amplitude randomized search"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - def-qa-12-prepared-success-subspace
  - alg-qa-12-amplitude-amplification
  - def-qc-projective-measurement
  - thm-qc-projective-measurement-outcome-law
  - thm-qc-projective-conditional-state
  - thm-qc-unit-vector-projector-is-density
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-reflection
  - def-qc-dirac-notation-conversion
  - def-qa-quantum-query-algorithm
  - def-qa-expected-query-cost
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
---

## Definition

This is a sequential randomized procedure, not a bounded-$T$ circuit family. Fix $c=3/2$. For rounds $\ell=1,2,\ldots$, compute the finite integer $M_\ell=\lceil c^\ell\rceil$ by exact rational arithmetic. In classical-output mode, require the diagonal-predicate specialization of [[def-qa-12-prepared-success-subspace]] and a costed verifier that accepts exactly the basis labels designated good by $\Pi_{\mathrm{good}}$; measure the designated output basis only after the good/bad instrument and then run the verifier.

1. On a fresh register prepare $A|0\rangle$ and perform the declared good/bad projective instrument. On a bad outcome, continue to step 2. On a good outcome, return the conditional quantum state in quantum-output mode; in classical-output mode, measure the designated output basis, verify the candidate, and return it if accepted.

2. Prepare $A|0\rangle$ on a second fresh register. Draw $j$ uniformly from the finite set $\{1,\ldots,M_\ell\}$, apply exactly $j$ standard $Q$-iterates, and perform the good/bad instrument. On a good outcome, return the conditional quantum state in quantum-output mode; in classical-output mode, measure the designated output basis, verify the candidate, and return it if accepted. If the outcome is bad or verification rejects, discard the registers and continue to round $\ell+1$.

The random choice is fresh and independent in each round; the schedule depends only on $\ell$, never on the unknown $a$. Every round is finite. When $a=0$, the loop runs forever and does not decide whether the good set is empty.

## Remarks

The expected query cost of this unbounded sequential procedure is interpreted using finite execution prefixes as in [[def-qa-expected-query-cost]]. A zero-probability good branch is never normalized.

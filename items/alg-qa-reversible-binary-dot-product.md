---
id: alg-qa-reversible-binary-dot-product
kind: algorithm
title: "Reversible binary dot-product query"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - def-qa-binary-dot-product
  - def-qc-clean-and-dirty-ancillas
  - def-qc-register-and-computational-basis
  - def-qc-dirac-notation-conversion
  - def-qc-toffoli-and-fredkin
  - def-qc-cnot-and-control-target-order
  - def-qc-elementary-circuit-resources
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6)"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 2, §§2.1.2–2.3, PDF pp. 22–25: Toffoli computation and reversible function evaluation."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 1, §1.4, PDF pp. 10–11: compute, copy, and uncompute."
---

## Definition

**Input:** An integer $n\ge0$, ordered $n$-bit registers $|a\rangle,|x\rangle$, a one-bit target $|z\rangle$, and one distinct clean work bit $r=0$.

**Output:** The reversible map
$$
|a\rangle|x\rangle|z\rangle|0\rangle_r\longmapsto|a\rangle|x\rangle|z\oplus(a\cdot x)\rangle|0\rangle_r.
$$

**Gate model:** Use an operation model whose declared finite nonoracle gate alphabet contains and permits Toffoli and CNOT as callable gates; each listed occurrence counts once under [[def-qc-elementary-circuit-resources]]. This procedure makes no black-box oracle call.

**Instructions:** For $i=0,1,\ldots,n-1$, apply Toffoli with controls $a_i,x_i$ and target $r$. Apply CNOT from $r$ to $z$. Then apply those same Toffoli gates in reverse order, from $i=n-1$ down to $0$. All gates act on the ordered computational-basis registers of [[def-qc-register-and-computational-basis]]; their basis actions are fixed in [[def-qc-toffoli-and-fredkin]] and [[def-qc-cnot-and-control-target-order]]. For $n=0$, the forward and reverse loops are empty and the XOR fold is $0$.

The procedure uses $2n$ Toffoli occurrences and one CNOT occurrence, with one clean work bit. It has no failure branch.

---
id: lem-qc-toffoli-clean-target-and-uncomputation
kind: lemma
title: "Toffoli computes into a clean target and uncomputes it"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - def-qc-clean-and-dirty-ancillas
  - def-qc-toffoli-and-fredkin
  - lem-qc-x-cnot-toffoli-and-fredkin-are-involutions
  - def-qc-cnot-and-control-target-order
  - def-qc-circuit-denotational-semantics
  - def-qc-tensor-register-and-permutation
  - def-qc-tensor-map
  - thm-qc-computational-basis-orthonormal
  - lem-qc-tensor-product-basis-and-dimension
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 5: Classical and Quantum Circuits (updated July 2015)"
      url: "https://www.preskill.caltech.edu/ph219/chap5_15.pdf"
      locator: "§5.2.2–§5.2.3, printed pp.14–20: Toffoli and compute-copy-reverse."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§2.1.2–§2.3, printed pp.14–16: reversible function computation and coherent extension."
---

## Statement

Let $a,b$ be the values on two distinct control wires, let $t$ be a distinct clean target wire with value $0$, and let $y$ be another distinct target wire with arbitrary value. Toffoli changes $t$ to $ab$ while preserving the controls. Copying that value into $y$ by CNOT and applying Toffoli again, in the written chronological order, sends
$$
|a,b,y,0\rangle\longmapsto|a,b,y\oplus ab,0\rangle.
$$
The same operator identity holds on superpositions.

## Facts & Assumptions

**Given:** The Toffoli action, a zero-initialized workspace bit, and a distinct arbitrary target bit. Prove the stated compute-copy-uncompute identity.

[F1] [[def-qc-toffoli-and-fredkin]]: Toffoli maps $|a,b,t\rangle$ to $|a,b,t\oplus ab\rangle$.

[F2] [[lem-qc-x-cnot-toffoli-and-fredkin-are-involutions]]: Toffoli is its own inverse.

[F3] [[def-qc-clean-and-dirty-ancillas]]: A clean ancilla is initialized in $|0\rangle$ and the complete subroutine must return it exactly to $|0\rangle$.

[F4] [[def-qc-cnot-and-control-target-order]]: In the ordered two-qubit basis, $\operatorname{CNOT}_{1\to2}|a,t\rangle=|a,t\mathbin{\oplus}a\rangle$.

[F5] [[def-qc-circuit-denotational-semantics]]: A chronological list of layers $L_1,\ldots,L_d$, with $L_1$ applied first, denotes $U_{L_d}\cdots U_{L_1}$.

[F6] [[def-qc-tensor-map]]: A tensor map extends its factor maps linearly and acts factorwise on each elementary tensor.

[F7] [[thm-qc-computational-basis-orthonormal]]: The one-qubit computational basis is an orthonormal basis for its declared inner product.

[F8] [[lem-qc-tensor-product-basis-and-dimension]]: The ordered tensor product of finite orthonormal factor bases is an orthonormal basis of the register.


## Proof

1.1 Since $t=0$, Toffoli sets $t$ to $0\oplus ab=ab$. The four control cases $00,01,10,11$ give target values $0,0,0,1$, respectively, and the controls are unchanged. [given, F1, F3, algebra]

2.1 CNOT from this work bit to the disjoint target changes $y$ to $y\oplus ab$ and leaves $a,b,t$ otherwise unchanged. The final Toffoli toggles $t$ by the same $ab$, returning it to $ab\oplus ab=0$; by [F2] it is the inverse compute gate. Thus each basis input has the stated output and clean work. [given, F1, F2, F4, F5, step 1.1, algebra]

3.1 The vectors $|a,b,y,0\rangle$, as $(a,b,y)$ ranges over its eight values, form a basis of the input subspace with the work factor fixed to $|0\rangle$, by [F7]–[F8]. Every gate is linear, so the basis-vector identity in Step 2.1 extends to every superposition in that subspace. The tensor-map rule [F6] makes each gate act factorwise on the ordered wires, preserving the displayed register order. [step 2.1, F5, F6, F7, F8, algebra] ∎


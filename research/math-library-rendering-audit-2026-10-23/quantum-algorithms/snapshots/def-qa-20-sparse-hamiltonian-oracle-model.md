---
id: def-qa-20-sparse-hamiltonian-oracle-model
kind: definition
title: Sparse Hamiltonian row and value oracles
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - def-qa-20-simulation-error-and-cost-model
  - def-qc-coherent-function-oracle
  - def-qc-circuit-cost-model
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 27 §27.4, printed pp. 135–136: sparse Hamiltonian row-neighbor/value access and edge-coloring simulation."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 9 §9.4, Example 2, printed pp. 76–77: sparse row-location and entry-value access for a Hermitian matrix."
---

## Definition

Fix $N\ge1$, a sparsity bound $d\ge1$, an integer $b\ge1$, and an injective code $\mathrm{enc}:C\to\{0,1\}^b$ for a finite set $C\subset\mathbb C$ containing $0$ and closed under conjugation. Put $w=\lceil\log_2N\rceil$ and $v=\lceil\log_2d\rceil$, identify $[N]$ with the first $N$ strings in $\{0,1\}^w$, and regard any remaining strings as invalid labels. A valid $w$-bit index is zero-extended to $w+1$ bits. Let $H=(H_{xy})_{x,y\in[N]}$ be Hermitian, have entries in $C$, and have at most $d$ nonzero entries in every row. For each valid row $x$, list its nonzero column indices in increasing order. Define the total location function $f_H(x,\ell)$ to be the $\ell$-th listed index for a valid slot $0\le\ell<d$ when that slot exists, and a distinguished sentinel otherwise. Invalid row labels and invalid slot labels also return the sentinel. Encode the sentinel by a fixed $(w+1)$-bit word outside the valid index codes. Define the total value function $g_H(x,y)$ to return $\mathrm{enc}(H_{xy})$ on valid labels and $\mathrm{enc}(0)$ on invalid labels. All label widths and codes are part of the finite input description.

The **row-location oracle** and **entry-value oracle** are the coherent XOR maps $O_{f_H}|x,\ell,z\rangle=|x,\ell,z\oplus f_H(x,\ell)\rangle$ and $O_{g_H}|x,y,z\rangle=|x,y,z\oplus g_H(x,y)\rangle$, where the output target has respectively $w+1$ and $b$ bits. The slot register has $v$ bits; all unused slot strings are invalid and use the sentinel. These are total Boolean-function oracles on every bitstring basis input. They are instances of [[def-qc-coherent-function-oracle]], whose justified-by supplier proves unitarity and involutivity for arbitrary total functions. Each named call and any separately granted controlled or inverse call is charged under [[def-qc-circuit-cost-model]]. This exact-code model describes the decoded matrix $H$; approximating a different target matrix requires a separate bound on the matrix difference. Row and value access alone does not supply a term list or term-evolution circuits.

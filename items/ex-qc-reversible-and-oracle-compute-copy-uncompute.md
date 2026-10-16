---
id: ex-qc-reversible-and-oracle-compute-copy-uncompute
kind: example
title: "A reversible AND oracle with clean work"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps:
  - thm-qc-reversible-embedding-cost
  - lem-qc-toffoli-clean-target-and-uncomputation
  - def-qc-toffoli-and-fredkin
  - def-qc-cnot-and-control-target-order
  - def-qc-clean-and-dirty-ancillas
  - def-qc-ordered-bitstring-encoding
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
  - def-qc-tensor-map
  - def-qc-circuit-denotational-semantics
  - thm-qc-computational-basis-orthonormal
  - lem-qc-tensor-product-basis-and-dimension
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 5: Classical and Quantum Circuits (updated July 2015)"
      url: "https://www.preskill.caltech.edu/ph219/chap5_15.pdf"
      locator: "§5.2.2–§5.2.3, printed pp.14–20: Toffoli computes AND and compute-copy-reverse clears work."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§2.1.2–§2.3, printed pp.14–16: Toffoli computes Boolean functions and work is coherently retained."
---

## Facts & Assumptions

[F1] [[def-qc-toffoli-and-fredkin]]: $T|a,b,t\rangle=|a,b,t\oplus ab\rangle$.

[F4] [[def-qc-cnot-and-control-target-order]]: In the ordered two-qubit basis, $\operatorname{CNOT}_{1\to2}|a,t\rangle=|a,t\mathbin{\oplus}a\rangle$.

[F2] [[def-qc-clean-and-dirty-ancillas]]: A clean work bit starts in $|0\rangle$ and must return exactly to $|0\rangle$.

[F3] [[thm-qc-reversible-embedding-cost]]: A bounded-fan-in Boolean circuit can be compiled with explicit gate and clean-work costs.

[F5] [[def-qc-circuit-denotational-semantics]]: A chronological layer list $L_1,\ldots,L_d$, with $L_1$ applied first, denotes $U_{L_d}\cdots U_{L_1}$.

[F6] [[thm-qc-computational-basis-orthonormal]]: The one-qubit computational basis is an orthonormal basis for its declared inner product.

[F7] [[lem-qc-tensor-product-basis-and-dimension]]: Ordered tensor products of finite orthonormal factor bases form an orthonormal basis of the register.

## Example

This circuit implements
$$
|a,b,y,0\rangle\longmapsto|a,b,y\oplus ab,0\rangle.
$$
For each fixed $(a,b)$, it is a one-gate reversible computation of $ab$ into clean work, one target copy, and the inverse compute. It uses three elementary gate occurrences and one clean work bit; for the one-AND Boolean DAG, this is within the bound of [[thm-qc-reversible-embedding-cost]]. This is a compiled circuit, not a black-box query unless separately provided as an oracle.

The complete basis check is

|$(a,b,y)$|after first Toffoli $(a,b,y,w)$|after CNOT $(a,b,y,w)$|final $(a,b,y,w)$|
|---|---|---|---|
|$(0,0,0)$|$(0,0,0,0)$|$(0,0,0,0)$|$(0,0,0,0)$|
|$(0,0,1)$|$(0,0,1,0)$|$(0,0,1,0)$|$(0,0,1,0)$|
|$(0,1,0)$|$(0,1,0,0)$|$(0,1,0,0)$|$(0,1,0,0)$|
|$(0,1,1)$|$(0,1,1,0)$|$(0,1,1,0)$|$(0,1,1,0)$|
|$(1,0,0)$|$(1,0,0,0)$|$(1,0,0,0)$|$(1,0,0,0)$|
|$(1,0,1)$|$(1,0,1,0)$|$(1,0,1,0)$|$(1,0,1,0)$|
|$(1,1,0)$|$(1,1,0,1)$|$(1,1,1,1)$|$(1,1,1,0)$|
|$(1,1,1)$|$(1,1,1,1)$|$(1,1,0,1)$|$(1,1,0,0)$|

## Verification

**Given:** Input bits $a,b$, arbitrary target bit $y$, and clean work bit $w=0$. Verify the chronological circuit Toffoli$(a,b,w)$, CNOT$(w,y)$, Toffoli$(a,b,w)$.

1.1 The first Toffoli changes $w=0$ to $ab$ and preserves $a,b$. For $(a,b)=(0,0),(0,1),(1,0),(1,1)$, this gives $w=0,0,0,1$, respectively, as the eight-row table records for both values of $y$. [given, F1, F2, F5, choose]

2.1 The CNOT changes $y$ to $y\oplus ab$ and does not change $a,b,w$; the final Toffoli again toggles $w$ by $ab$, so $w=ab\oplus ab=0$. The chronological product in [F5] is therefore exactly the tabled action on all eight basis inputs and clean-work outputs. [given, F1, F4, F5, step 1.1, algebra]

3.1 The vectors $|a,b,y,0\rangle$ in the eight table rows form a basis of the subspace with clean work fixed to zero, by [F6]–[F7]. Each gate is linear, so the verified basis action in Step 2.1 extends to every superposition in that subspace. For $S=1$, $E=2$, and $m=1$, the circuit uses three gate occurrences and one clean work bit, within the stated bounds $6S+4E+m=15$ and $S+E=3$ from [F3]. [step 2.1, F2, F3, F5, F6, F7, algebra] ∎


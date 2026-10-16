---
id: alg-qa-simon-one-sample
kind: algorithm
title: "One Simon Fourier-sampling sample"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - def-qa-simon-promise
  - def-qa-standard-bit-query
  - lem-qa-hadamard-f2-kernel
  - def-qc-projective-measurement
  - def-qc-povm-and-outcome-law
  - def-qc-instrument-and-conditional-state
  - thm-qc-luders-instrument-of-a-povm-is-valid
  - thm-qc-instrument-outcome-law-normalizes
  - thm-qc-instrument-conditional-state-is-density
justified_by: []
axiom_use: "No Choice is used; the circuit and all registers are finite and explicitly ordered."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6, 2026)"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 3 §§3.1-3.3, PDF pp.35-39: Simon promise, one-sample derivation, uniform s-perp law, rank growth, expected queries and classical lower-bound proof."
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms (updated November 2020)"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
      locator: "§6.1, PDF pp.11-13 and §6.5, PDF pp.27-33: independent Simon sample derivation and finite-abelian HSP context."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 6, PDF pp.33-37: Simon as a finite-abelian hidden-subgroup instance and Fourier sampling context."
---
## Definition

**Input:** Integers $n\ge1$, $m\ge n-1$, and ordinary access through the [[def-qa-standard-bit-query]] to a total function satisfying [[def-qa-simon-promise]]. Prepare an ordered $n$-qubit address register and $m$-qubit target register, both in their zero computational-basis states.

**Instructions:**

1. Apply the exact one-qubit Hadamard gate to every address wire, producing $H^{\otimes n}|0^n\rangle$, and leave the target at $|0^m\rangle$.
2. Apply the standard bit-flip oracle $U_f|x\rangle|z\rangle=|x\rangle|z\oplus f(x)\rangle$ once. Measure the target with the computational-basis projective measurement [[def-qc-projective-measurement]], viewed as the finite POVM [[def-qc-povm-and-outcome-law]]. Use the Lüders branch maps $\mathcal I_v(X)=P_vXP_v$, where $P_v=I_{\rm address}\otimes|v\rangle\langle v|$, under the instrument and conditional-state interface [[def-qc-instrument-and-conditional-state]]. Theorem [[thm-qc-luders-instrument-of-a-povm-is-valid]] supplies a valid instrument; its outcome weights and positive-branch states are covered by [[thm-qc-instrument-outcome-law-normalizes]] and [[thm-qc-instrument-conditional-state-is-density]]. Discard the reported value and target register. The POVM effects are these same $P_v$.
3. Apply $H^{\otimes n}$ to the address register and measure it in the computational basis. Return the observed $n$-bit string $y$ as one sample row.

Every branch uses exactly one oracle query and $2n$ Hadamard gates. It makes one finite instrument measurement on the target and one terminal projective measurement on the address. The intermediate target outcome is not used by classical postprocessing. There is no failure branch, controlled-oracle call, or inverse-oracle call. This procedure's sample law is proved separately in [[thm-qa-simon-hadamard-sampling-law]].

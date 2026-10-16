---
id: def-qa-20-term-list-access-model
kind: definition
title: Term-list Hamiltonian access
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - def-qa-20-simulation-error-and-cost-model
  - def-self-adjoint-and-normal-endomorphism
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-uniform-circuit-family
  - def-qc-clean-and-dirty-ancillas
  - thm-nth-roots-exist
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
      locator: "Chapter 27 §§27.2–27.3, printed pp. 133–135: finite time-independent Hamiltonian evolution, operator-norm simulation, and product formulas."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 9 §§9.1–9.2, printed pp. 71–74: finite Hermitian evolution, operator-norm simulation, and Lie–Suzuki–Trotter methods."
---

## Definition

A **term-list access input** consists of an integer $m\ge1$, finite-dimensional self-adjoint endomorphisms $H_1,\ldots,H_m$ on one stated register, and the exact target $H=\sum_{j=1}^m H_j$. A supported time code is a finite expression whose leaves are rational numbers or symbols $\rho_q$ denoting the unique positive real root of $x^q=4$ for an odd integer $q\ge1$; [[thm-nth-roots-exist]] gives a unique nonnegative root; it is positive because $0^q=0\ne4$. Internal operations are addition, subtraction, multiplication, or division by a nonzero expression. Its exact real value and bit length are recorded. These codes include rational times and every coefficient-scaled rational time in the finite Suzuki recursion.

For each $j$, the input declares which time codes are supported and supplies either the exact operation $e^{-isH_j}$ or a full-list uniform circuit generator, in the sense of [[def-qc-uniform-circuit-family]], that returns a unitary $V_j(s)$ together with a certified error $\eta_j(s)\ge0$ satisfying $\|V_j(s)-e^{-isH_j}\|\le\eta_j(s)$. If a circuit uses auxiliary registers, it supplies the exact clean or dirty contract of [[def-qc-clean-and-dirty-ancillas]] so that its induced operation $V_j(s)$ on the target is well-defined: clean registers start and return to zero for every target input, and dirty registers are acted on by the identity. The operator-norm error is measured on the induced target operation. The provider specifies how each supported code is passed to the generator and records its actual description length and generation time; no polynomial bound is inferred. This is an explicit access promise, not a claim that every matrix has such a family.

For each supported call the input records its named-oracle query counts, gate count, ancillary wires, description bits, coefficient bits, and classical generation cost. Costs of composing the calls into a full product and generating that product are separately recorded as $Q_{\rm wrap}$ and $G_{\rm wrap}$. A controlled form is available only when separately declared as the block operation of [[def-qc-controlled-unitary-access]]. Inverse access to a call is available only when separately declared under [[def-qc-inverse-unitary-access]], with its own cost and error record. Forward access implies neither capability. The term list supplies no promise that any operation or coefficient computation is free.

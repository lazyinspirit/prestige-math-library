---
id: def-qa-33-witness-verifier-interface
kind: definition
title: Uniform verifier interface with a quantum witness
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - def-promise-problem
  - def-qc-uniform-circuit-family
  - def-qc-promise-computation-model
  - def-qc-circuit-cost-model
  - def-qc-circuit-syntax-and-register-order
  - def-qc-circuit-denotational-semantics
  - def-qc-clean-and-dirty-ancillas
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
  - def-qc-density-operator
  - def-qc-povm-and-outcome-law
  - def-qc-partial-trace
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "John Watrous, Quantum Computational Complexity"
      url: https://arxiv.org/pdf/0804.3401
      locator: §V.1, QMA verifier definition, PDF pp. 18–19
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
      locator: Chapter 14, §14.1, PDF pp. 115–116
---

## Definition

For an input length $n$, let $X_n=\mathcal Q_n$ be the ordered classical-input register, $W_n=\mathcal Q_{w(n)}$ a witness register, and $A_n=\mathcal Q_{a(n)}$ a zero-initialized workspace register; $w(n),a(n)$ are polynomially bounded and zero qubits means the one-dimensional space $\mathbb C$. A verifier family is one full-list uniform family of finite circuits on $X_n\otimes W_n\otimes A_n$, generated in polynomial time from $1^n$. The widths $w(n)$ and $a(n)$ must also be computed from $1^n$ by one fixed polynomial-time algorithm. Equivalently, a fixed polynomial-time wrapper outputs the widths together with the full circuit description, whose circuit component is a valid full-list code; the register metadata does not alter that code or its measured wire indices. Its gate order and unitary denotation are those of [[def-qc-uniform-circuit-family]], [[def-qc-circuit-syntax-and-register-order]], and [[def-qc-circuit-denotational-semantics]]. The first register holds the classical basis input $|x\rangle$, the witness may be any density operator $\rho$ on $W_n$, and the workspace qubits start in $|0^{a(n)}\rangle$. Thus this definition adds an explicit quantum witness register to the classical-input, zero-ancilla promise-computation convention of [[def-qc-promise-computation-model]]; a witness is not an initialized ancilla. The workspace need not return to zero; the exact clean-return subroutine contract of [[def-qc-clean-and-dirty-ancillas]] is a separate requirement when invoked.

Let $O_n$ be the ordered tuple of distinct terminally measured wires. One fixed total polynomial-time algorithm evaluates the predicate $\operatorname{Acc}_n(x,z)$ and determines acceptance from the measured output string $z$. Let $J_x:W_n\to X_n\otimes W_n\otimes A_n$ be $J_x\psi=|x\rangle\otimes\psi\otimes|0^{a(n)}\rangle$, and let $P_x$ be the orthogonal projection onto all computational-basis output strings accepted by $\operatorname{Acc}_n(x,\cdot)$, tensored with the identity on every unmeasured wire. Define the witness acceptance effect and its probability by

$$E_x:=J_x^*U_n^*P_xU_nJ_x,\qquad p_V(x,\rho):=\operatorname{Tr}(E_x\rho).$$

The projection $P_x$ sums over every unmeasured output wire. The positivity of this compression and its equality with the terminal outcome law are proved separately. The matrix input, gate list, generator, output predicate, and all circuit and classical costs are charged according to [[def-qc-circuit-cost-model]]; no intermediate measurement or free random source is assumed in this base interface.

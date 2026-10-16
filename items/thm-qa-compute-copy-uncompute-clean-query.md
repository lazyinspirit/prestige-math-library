---
id: thm-qa-compute-copy-uncompute-clean-query
kind: theorem
title: "Compute-copy-uncompute yields a clean coherent function query"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - alg-qc-reversible-embedding
  - thm-qc-reversible-embedding-cost
  - def-qc-clean-and-dirty-ancillas
  - def-qc-inverse-unitary-access
  - def-qc-cnot-and-control-target-order
  - def-qc-elementary-circuit-resources
  - def-qa-standard-bit-query
  - def-qc-register-and-computational-basis
  - thm-qc-computational-basis-orthonormal
  - lem-qc-tensor-product-basis-and-dimension
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 1, §1.4, PDF pp. 10–11: reversible computation, copying the answer, and reversing the computation."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6)"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 2, §§2.1.2–2.3, PDF pp. 22–25: reversible Boolean computation and coherent extension."
---

## Statement

Let $f:\{0,1\}^{a}\to\{0,1\}^{b}$ be total. Suppose a finite nonoracle gate circuit $V$ preserves the address and, from zero value and workspace registers, computes
$$
V|x\rangle|0^b\rangle|0^w\rangle=|x\rangle|f(x)\rangle|0^w\rangle
$$
for every $x$, with gate count $G$. Suppose its exact inverse circuit is available with the same gate count and acts only on the address, value, and workspace registers. Applying $V$, copying the $b$ output bits to a fresh target by $b$ CNOTs, and applying $V^{-1}$ implements the standard query, restores the value and workspace registers to zero, and uses exactly $2G+b$ gate occurrences. Any query calls in a different implementation must be charged separately.

For a finite Boolean DAG with $S$ noninput nodes, $E$ input-port uses counted with multiplicity, and $b$ ordered output ports, the current QC10 reversible-embedding construction itself already implements the clean XOR query. Its local cost theorem gives at most $6S+4E+b$ gates and $S+E$ clean work bits. Thus its size is $O(S+E+b)$, and is $O(S+b)$ when $E=O(S)$, as for the stated bounded-fan-in graphs. No depth bound is inferred from the classical Boolean DAG.

## Facts & Assumptions

**Given:** A total function, a clean reversible evaluator with an exact same-count inverse, a fresh target register, and the QC10 Boolean-DAG supplier for the concrete cost statement. The operation model's declared finite nonoracle gate alphabet contains and permits CNOT for the generic copy step; $V$ and its exact inverse are available as circuits over that model. For the concrete QC10 cost claim, it contains and permits $X$, CNOT and Toffoli, each counted as one nonoracle gate occurrence. Any black-box query calls are charged separately.

[F1] [[def-qc-clean-and-dirty-ancillas]]: a clean workspace initialized at zero must return exactly to zero for every allowed data input.

[F2] [[def-qc-inverse-unitary-access]]: the inverse circuit applies the gate inverses in reverse chronological order; its availability and charge are explicit.

[F3] [[def-qc-cnot-and-control-target-order]]: CNOT from a control bit $r$ to a distinct target bit $y_j$ maps $|r,y_j\rangle$ to $|r,y_j\oplus r\rangle$.

[F4] [[def-qa-standard-bit-query]]: the desired standard action is $|x\rangle|y\rangle\mapsto|x\rangle|y\oplus f(x)\rangle$.

[F5] [[alg-qc-reversible-embedding]]: the QC10 procedure evaluates each Boolean-DAG node into work bits, copies the ordered output ports into the target, and reverses its evaluation list.

[F6] [[thm-qc-reversible-embedding-cost]]: for the specified DAG and gate model, that procedure implements the standard XOR action with clean work and at most $6S+4E+b$ gates and $S+E$ work bits.

[F7] [[def-qc-elementary-circuit-resources]]: gate size counts each occurrence; oracle calls, depth, width, and other costs are separate coordinates.

[F8] [[def-qc-register-and-computational-basis]], [[thm-qc-computational-basis-orthonormal]] and [[lem-qc-tensor-product-basis-and-dimension]]: the ordered basis vectors of the joint address, value, workspace and target registers form a complete basis.

## Proof


1.1 On basis input $|x\rangle|0^b\rangle|0^w\rangle|y\rangle$, the first circuit $V$ produces $|x\rangle|f(x)\rangle|0^w\rangle|y\rangle$ by the assumed evaluator identity. The output register is a separate factor from the fresh target. [given, F1]

2.1 Applying one CNOT from each output bit to its corresponding target bit leaves $x$, $f(x)$, and the zero workspace unchanged, and changes $y$ to $y\oplus f(x)$ by [F3]. [step 1.1, F3, algebra]

3.1 Apply $V^{-1}$ to the address, value, and workspace factors. Since $V^{-1}V=I$ on those factors and does not act on the target, the result is $|x\rangle|0^b\rangle|0^w\rangle|y\oplus f(x)\rangle$. This is the standard query action [F4] with clean work [F1]. The gate count is $G+b+G=2G+b$ by [F2] and [F7]. [given, step 2.1, F1, F2, F4, F7, algebra]

4.1 The basis vectors with value and work initially zero span the allowed input subspace by [F8]. The composed circuit is linear, so step 3.1 extends to every superposition in that subspace. Thus the standard query action and clean-work identity hold for all allowed vector inputs. [step 3.1, F1, F4, F8, algebra]

5.1 The finite Boolean-DAG procedure [F5] already includes its own output copy and reverse pass. Therefore its complete elementary gate-occurrence bound for implementing the XOR action is the supplier bound [F6], not an additional application of the generic $2G+b$ construction. The stated asymptotic forms follow by dividing the exact bound by the indicated parameter relation $E=O(S)$ when that relation holds. [F5, F6, algebra] ∎


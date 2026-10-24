---
id: thm-qa-reversible-binary-dot-product-correct-and-cost
kind: theorem
title: "Reversible binary dot product: correctness and exact cost"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - alg-qa-reversible-binary-dot-product
  - def-qa-binary-dot-product
  - def-qc-clean-and-dirty-ancillas
  - def-qc-register-and-computational-basis
  - def-qc-dirac-notation-conversion
  - def-qc-toffoli-and-fredkin
  - def-qc-cnot-and-control-target-order
  - def-qc-elementary-circuit-resources
  - thm-qc-computational-basis-orthonormal
  - lem-qc-tensor-product-basis-and-dimension
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6)"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 2, §§2.1.2–2.3, PDF pp. 22–25: reversible Toffoli computation and compute-copy-uncompute."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 1, §1.4, PDF pp. 10–11: reversible computation and cleanup."
---

## Statement

For every $n\ge0$, the algorithm [[alg-qa-reversible-binary-dot-product]] maps every computational-basis input to
$$
|a\rangle|x\rangle|z\rangle|0\rangle_r\longmapsto|a\rangle|x\rangle|z\oplus(a\cdot x)\rangle|0\rangle_r.
$$
It therefore implements the same linear map on superpositions. Its exact cost is $2n$ Toffoli gates, one CNOT, and one clean work bit; it has no failure branch.

## Facts & Assumptions

**Given:** $n\ge0$, binary strings $a,x$, an arbitrary target bit $z$, a clean work bit $r=0$, and the stated gate sequence. The operation model's declared finite nonoracle gate alphabet contains and permits Toffoli and CNOT as callable gates, each occurrence is counted once under [F7], and this circuit makes no black-box oracle calls.

[F1] [[alg-qa-reversible-binary-dot-product]]: the sequence accumulates coordinate products into $r$, copies $r$ to $z$, and reverses the Toffoli sequence.

[F2] [[def-qa-binary-dot-product]]: $a\cdot x$ is the left-to-right XOR fold of the bits $a_i\land x_i$, with empty fold $0$.

[F3] [[def-qc-toffoli-and-fredkin]]: Toffoli preserves its two controls and toggles its target by their product.

[F4] [[def-qc-cnot-and-control-target-order]]: CNOT preserves its control and toggles its target by the control value.

[F5] [[def-qc-clean-and-dirty-ancillas]]: a clean ancilla starts and ends exactly at zero.

[F6] [[thm-qc-computational-basis-orthonormal]] and [[lem-qc-tensor-product-basis-and-dimension]]: the ordered computational-basis product vectors of the data, target and work registers form a basis of their joint register.

[F8] [[def-qc-dirac-notation-conversion]]: ket notation denotes the corresponding vectors, with the repository's stated inner-product convention.

[F7] [[def-qc-elementary-circuit-resources]]: each occurrence of a declared gate contributes one occurrence to the gate count.

**Proof technique:** induction on the forward and reverse loop indices.

## Proof

1.1 Before any Toffoli gate, $r=0$, which is the empty parity $p_0$. [given, F1, F2, base]

1.2 If after processing coordinates $0,\ldots,i-1$ the work bit is $p_i=\bigoplus_{j<i}(a_j\land x_j)$, the next Toffoli leaves the controls unchanged and changes $r$ to $p_i\oplus(a_i\land x_i)=p_{i+1}$ by [F3]. Thus the forward invariant holds for every $i\le n$. [given, F1, F2, F3, ih, algebra]

2.1 At the end of the forward loop, $r=p_n=a\cdot x$ by [F2]. This includes $n=0$, for which step 1.1 is already the final state. [step 1.1, step 1.2, F2, discharge-induction]

3.1 The CNOT now changes $z$ to $z\oplus r=z\oplus(a\cdot x)$ and leaves $a,x,r$ unchanged by [F4]. [step 2.1, F4, algebra]

4.1 In the reverse loop, define $q_i$ to be the accumulator after the gates for coordinates $n-1,n-2,\ldots,i$ have been applied. Before any reverse gate, $q_n=p_n$. If $q_{i+1}=p_{i+1}$, the next Toffoli toggles $q_{i+1}$ by $a_i\land x_i$, so $q_i=p_{i+1}\oplus(a_i\land x_i)=p_i$. Descending through $i=n-1,\ldots,0$ therefore ends at $q_0=p_0=0$. The reverse gates do not change $a,x,z$, so the work bit is clean. [step 2.1, step 3.1, F1, F2, F3, F5, induction, algebra]

5.1 The input basis map is the claimed map by steps 3.1 and 4.1. Every gate is linear, and the computational basis spans the finite joint register by [F6], so the same identity holds on every superposition. The forward and reverse loops each have $n$ Toffoli occurrences and there is one CNOT, giving the exact stated nonoracle gate-occurrence count; the algorithm has no branch and makes no oracle call. [step 3.1, step 4.1, F1, F6, F7, F8, algebra, discharge-induction] ∎

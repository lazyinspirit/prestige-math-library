---
id: def-qa-14-boolean-search-query-model
kind: definition
title: Boolean oracle query model for search lower bounds
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - def-qa-task-and-promise-domain
  - def-qa-input-encoding-and-size
  - def-qa-standard-bit-query
  - def-qa-quantum-query-algorithm
  - def-qa-quantum-query-complexity
  - def-qa-bounded-error-promise-correctness
  - def-qc-dirac-notation-conversion
  - def-qc-register-and-computational-basis
  - thm-qc-computational-basis-orthonormal
  - lem-qc-tensor-product-basis-and-dimension
  - lem-qa-14-coherent-query-normal-form
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
axiom_use: None; the model uses finite-dimensional registers and finite query circuits.
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§11.1, printed pp.89–90 (PDF pp.101–102): standard XOR query and fixed-unitary query circuits."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "§23.2, printed pp.110–114 (PDF pp.119–123): finite query registers, input-independent unitaries, and query count."
    - title: "Charles H. Bennett, Ethan Bernstein, Gilles Brassard, and Umesh Vazirani, Strengths and Weaknesses of Quantum Computing"
      url: "https://arxiv.org/pdf/quant-ph/9701001"
      locator: "§3.1, Theorem 3.3 and Corollary 3.4 (PDF pp.7–10): query-magnitude hybrid arguments."
---

## Definition

Let $N\ge1$, let the input be a bit string $x=(x_1,\ldots,x_N)\in\{0,1\}^N$, and let the address register have ordered orthonormal basis $|0\rangle,\ldots,|N-1\rangle$ in the finite-dimensional register of [[def-qc-register-and-computational-basis]]. A standard Boolean query acts on address, response bit, and work register by
$$O_x|j,b,w\rangle=|j,b\oplus x_{j+1},w\rangle,\qquad 0\le j<N.$$
The response register is one qubit and the work register is any declared finite tensor product. For $N=2^n$, this is the standard bit query of [[def-qa-standard-bit-query]] under the big-endian address encoding; for general $N$, it is the same XOR basis action on the $N$-level address register.

A $T$-query algorithm is a finite circuit whose only input-dependent operations are at most $T$ invocations of $O_x$ on every execution branch. By [[lem-qa-14-coherent-query-normal-form]], it may be analyzed as a pure initial unit vector, input-independent unitaries between exactly $T$ ordinary queries, and one final measurement. The query coordinate counts these oracle invocations under [[def-qa-quantum-query-complexity]]; response preparation, verification queries, gates, and classical work are stated separately. No controlled access to $O_x$ follows from an ordinary query.

For a decision task, bounded error means the correct answer has probability at least $2/3$ on every promised input, as in [[def-qa-bounded-error-promise-correctness]]. For a finding task, the same threshold applies to producing a valid witness on each promised input. The normal-form construction is finite for each input length; this definition makes no claim about its additional gate cost or preservation of a particular uniform generator.

## Facts & Assumptions

**Given:** $N\ge1$, a Boolean string $x\in\{0,1\}^N$, the ordered address basis, one response bit, and finite work registers.

[F1] [[def-qc-register-and-computational-basis]]: the $N$-level address register has ordered basis $|0\rangle,\ldots,|N-1\rangle$, and the response register has basis $|0\rangle,|1\rangle$.

[F2] [[thm-qc-computational-basis-orthonormal]]: these declared computational bases are orthonormal bases.

[F3] [[def-qa-standard-bit-query]]: the standard Boolean function oracle preserves its address and XORs the function value into its response register.

[F4] [[lem-qc-tensor-product-basis-and-dimension]]: the product of the declared address, response, and work bases is an orthonormal basis.

## Proof

1.1 Applying the displayed $O_x$ twice to a basis vector gives $|j,(b\oplus x_{j+1})\oplus x_{j+1},w\rangle=|j,b,w\rangle$. Thus it is an involution on the declared product basis. [given, F1, F3, algebra]

2.1 By [F1], [F2], and [F4], the input and response basis vectors, tensored with any work basis, form a finite orthonormal basis. Step 1.1 shows that $O_x$ permutes this basis, so its linear extension is unitary. For $N=2^n$ it is the standard query in [F3] with the address labeling fixed in the Definition; for general $N$ it is the same XOR permutation on the $N$-level address basis. [F1, F2, F3, F4, step 1.1, algebra] ∎


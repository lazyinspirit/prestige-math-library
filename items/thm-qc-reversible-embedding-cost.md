---
id: thm-qc-reversible-embedding-cost
kind: theorem
title: "Gate, workspace, and serial-depth costs of reversible embedding"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - alg-qc-reversible-embedding
  - def-qc-clean-and-dirty-ancillas
  - lem-qc-ancilla-identities-stable-under-reference-and-mixtures
  - def-qc-elementary-circuit-resources
  - def-boolean-circuit-size-depth-fanin-and-basis
  - lem-qc-fresh-target-not-and-or-gadgets
  - lem-qc-toffoli-clean-target-and-uncomputation
  - def-qc-toffoli-and-fredkin
  - lem-qc-x-cnot-toffoli-and-fredkin-are-involutions
  - def-qc-circuit-denotational-semantics
  - def-qc-register-and-computational-basis
  - def-qc-ordered-bitstring-encoding
  - thm-qc-bitstring-index-is-bijection
  - def-qc-tensor-register-and-permutation
  - def-qc-tensor-map
  - def-qc-cnot-and-control-target-order
  - def-qc-pauli-matrices
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
      locator: "§5.2.2–§5.2.3, printed pp.14–22: Toffoli simulation and the compute-copy-reverse method."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§2.1.2–§2.3, printed pp.14–16: Toffoli computation, reversible circuits, and superposition extension."
---

## Statement

Let $n,m\ge0$, $x\in\{0,1\}^n$, and $y\in\{0,1\}^m$. Let a finite topologically ordered Boolean DAG have $S$ non-input nodes, including constants, and $E$ input-port uses counted with multiplicity. Its gates are NOT, AND, OR, and constants, with fan-in at most two, and it has $m$ ordered output ports computing $f(x)$. Under the fixed elementary alphabet in [[def-qc-elementary-circuit-resources]], counting each occurrence of $X$, CNOT, and Toffoli as one gate and one serial layer, [[alg-qc-reversible-embedding]] returns a circuit on the ordered input, target, and work registers implementing
$$
|x,y,0^w\rangle\longmapsto|x,y\oplus f(x),0^w\rangle
$$
for every basis input $x$ and every target string $y$. It uses at most $6S+4E+m$ elementary gate occurrences, at most $S+E$ clean work bits, and serial depth at most $6S+4E+m$. The same operator action holds coherently on arbitrary superpositions and after adjoining any finite reference register.

## Facts & Assumptions

**Given:** The finite Boolean DAG convention, the procedure in [[alg-qc-reversible-embedding]], and the gate actions in the local suppliers. Prove correctness, clean-work restoration, and the stated bounds.

[F1] [[def-boolean-circuit-size-depth-fanin-and-basis]]: A Boolean circuit has constants $0$ and $1$, and NOT, AND, and OR gates; AND and OR have fan-in two, while NOT has fan-in one. Its size is its number of non-input gates.

[F2] [[alg-qc-reversible-embedding]]: The procedure computes each gate into fresh zero work, copies the designated outputs into arbitrary targets, and reverses the node-evaluation list.

[F3] [[lem-qc-fresh-target-not-and-or-gadgets]]: The fresh-target sequences write $1\oplus a$ for NOT and $a\oplus b\oplus ab=a\lor b$ for OR without changing sources.

[F4] [[lem-qc-toffoli-clean-target-and-uncomputation]]: Toffoli computes $ab$ into a clean target, and copying followed by the inverse Toffoli restores that target to zero.

[F5] [[lem-qc-ancilla-identities-stable-under-reference-and-mixtures]]: Clean workspace identities extend to arbitrary references and matrices.

[F6] [[lem-qc-x-cnot-toffoli-and-fredkin-are-involutions]]: $X$, CNOT, and Toffoli are each their own inverse.

[F8] [[def-qc-pauli-matrices]]: The Pauli matrix $X=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ sends $|0\rangle$ to $|1\rangle$ and $|1\rangle$ to $|0\rangle$.

[F7] [[def-qc-tensor-register-and-permutation]]: An ordered tensor register retains the displayed factor order, and its product basis is ordered lexicographically by factor-index tuples.

[F9] [[def-qc-ordered-bitstring-encoding]]: The first bit is the most significant position in the computational-basis index.

[F10] [[thm-qc-bitstring-index-is-bijection]]: Each length-$n$ bit string labels exactly one computational-basis vector of the $n$-qubit register.

[F11] [[def-qc-circuit-denotational-semantics]]: A chronological list of layers $L_1,\ldots,L_d$, with $L_1$ applied first, denotes $U_{L_d}\cdots U_{L_1}$.

[F12] [[lem-qc-tensor-product-basis-and-dimension]]: The ordered tensor-product computational basis is orthonormal, including the work-register factors.

[F13] [[def-qc-elementary-circuit-resources]]: Circuit size counts gate occurrences, depth counts explicit layers, and width counts all wires including workspace wires.

## Proof

1.1 Let $q$ be the number of two-port nodes whose two ports name the same source. Each non-input node uses at most three evaluation gates: at most one for a constant, two for NOT, one for AND, and three for OR. Each repeated-source node adds one CNOT copy and one uncopy, so the forward pass uses at most $3S+2q$ gates. Since each such node accounts for two of the $E$ port uses, $q\le E$, and the forward bound is at most $3S+2E$. It uses $S$ value bits and $q\le E$ temporary bits. [given, F1, F2, F3, F4, F13, algebra]

2.1 The $m$ output ports are copied by $m$ CNOTs into distinct target bits. Reversing the complete node-evaluation list uses at most another $3S+2E$ gates. By [F6], each gate is its own inverse; reversing both order and gate sequence therefore implements the inverse computation and returns every value and temporary bit to zero. The total is at most $2(3S+2E)+m=6S+4E+m$ gate occurrences. A serial execution assigns each occurrence its own explicit layer, so the depth has the same bound by [F13]; [F11] specifies the chronological operator product. [given, F2, F4, F6, F11, F13, step 1.1, algebra]

3.1 Use [F9]–[F10] to identify each ordered bit string with its unique basis vector. Induct along the supplied topological order. A constant-$0$ node leaves its zero bit unchanged and a constant-$1$ node uses [F8]; NOT and OR nodes receive the outputs in [F3], and AND nodes receive the output in [F4]. If a two-port node repeats a source value $c$, its fresh scratch bit is set to $c$ by CNOT; the two distinct physical control wires then both hold $c$, so AND gives $c\land c=c$ and OR gives $c\lor c=c$. The scratch is immediately uncomputed by the same CNOT. Thus every value bit equals its Boolean node value and all temporary bits are zero before the output copy. The $m$ output CNOTs produce $y\oplus f(x)$; reversing the node list then restores every work bit without touching the input or target registers, whose order is fixed by [F7]. Since applying $y\mapsto y\oplus f(x)$ twice returns $y$, the target action is a permutation of the ordered basis and is unitary by [F12]; the compiled gate list is unitary by [F6] and [F11]. [given, F1, F2, F3, F4, F6, F7, F8, F9, F10, F11, F12, step 2.1, induction, algebra]

4.1 The basis identity in Step 3.1 extends by linearity to every input vector, so it is the clean-ancilla identity required by [F5]. The lemma then extends it to every finite reference register and every matrix, hence to density matrices. The construction uses only the supplied finite list; no choice principle is used. [step 3.1, F5, algebra] ∎


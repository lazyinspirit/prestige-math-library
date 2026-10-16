---
id: thm-qc-reversible-embedding-parallel-depth
kind: theorem
title: "Parallel depth of reversible Boolean embedding"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps:
  - def-boolean-circuit-size-depth-fanin-and-basis
  - thm-qc-reversible-embedding-cost
  - def-qc-elementary-circuit-resources
  - def-qc-circuit-denotational-semantics
  - def-qc-pauli-matrices
  - def-qc-toffoli-and-fredkin
  - lem-qc-fresh-target-not-and-or-gadgets
  - lem-qc-x-cnot-toffoli-and-fredkin-are-involutions
  - def-qc-register-and-computational-basis
  - def-qc-ordered-bitstring-encoding
  - thm-qc-bitstring-index-is-bijection
  - def-qc-tensor-register-and-permutation
  - def-qc-tensor-map
  - def-qc-cnot-and-control-target-order
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
      locator: "§5.2.3, printed pp.20–22: compute-copy-reverse; the parallel fan-out schedule and bound are proved locally."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§2.1.2–§2.3, printed pp.14–16: circuit layers, reversible computation and coherent extension."
---

## Statement

For a finite Boolean DAG over constants, NOT, AND, and OR, with fan-in at most two, let $S$ be its number of non-input nodes, $E$ its number of input-port uses counted with multiplicity, and $m$ its number of ordered output ports. Let $D$ be the number of nonempty layers obtained by grouping each non-input node according to the maximum number of non-input vertices on a path ending at that node. Let $F$ be the maximum number of input-port occurrences from one source wire into gates in one such layer, with $F=0$ if there are no gate input ports. There is a layer-respecting reversible circuit implementing the same XOR embedding as [[alg-qc-reversible-embedding]] with $O(S+E+m)$ gate occurrences and $O(S+E+m)$ work bits. Let
$$
L=\lceil\log_2(F+1)\rceil,\qquad L_m=\lceil\log_2(m+1)\rceil.
$$
Its depth is at most
$$
2D(2L+3)+2L_m+1.
$$
The bound permits coherent fan-out of computational-basis labels by CNOT trees and does not assert arbitrary-state cloning or constant-factor preservation of Boolean-DAG depth. For bounded fan-in, $E\le2S$.

## Facts & Assumptions

**Given:** The reversible embedding construction, finite gate/depth conventions, and disjoint ordered registers. Prove the scheduling and resource bound.

[F1] [[thm-qc-reversible-embedding-cost]]: The compute-copy-reverse construction implements the XOR embedding and restores clean work.

[F10] [[def-qc-elementary-circuit-resources]]: Size counts gate occurrences, depth counts explicit layers, and width counts all wires including workspace wires.

[F9] [[def-qc-circuit-denotational-semantics]]: Chronological layers $L_1,\ldots,L_d$, with $L_1$ applied first, denote $U_{L_d}\cdots U_{L_1}$; disjoint gates in a layer are interpreted as parallel.

[F2] [[def-qc-tensor-register-and-permutation]]: An ordered tensor register retains the displayed factor order, and its product basis is ordered lexicographically by factor-index tuples.

[F3] [[def-qc-tensor-map]]: The tensor map of a finite family of linear maps acts on each elementary tensor by applying the corresponding map to each factor.

[F4] [[def-qc-cnot-and-control-target-order]]: In the ordered two-qubit basis, $\operatorname{CNOT}_{1\to2}|a,t\rangle=|a,t\mathbin{\oplus}a\rangle$.

[F5] [[def-qc-pauli-matrices]]: The Pauli matrix $X$ flips a computational-basis bit.

[F6] [[def-qc-toffoli-and-fredkin]]: Toffoli maps $|a,b,t\rangle$ to $|a,b,t\oplus ab\rangle$ and preserves its two controls.

[F7] [[lem-qc-fresh-target-not-and-or-gadgets]]: NOT and OR are computed into a distinct zero target by the stated two- and three-gate gadgets, with source wires preserved.

[F8] [[lem-qc-x-cnot-toffoli-and-fredkin-are-involutions]]: $X$, CNOT, and Toffoli are each their own inverse and unitary on their ordered registers.

[F11] [[thm-qc-computational-basis-orthonormal]]: Each one-qubit computational basis is an orthonormal basis for its declared inner product.

[F12] [[lem-qc-tensor-product-basis-and-dimension]]: Ordered tensor products of finite orthonormal factor bases form an orthonormal basis, including empty registers.

[F13] [[def-qc-ordered-bitstring-encoding]]: Ordered bit strings label computational-basis slots by their big-endian indices.

[F14] [[thm-qc-bitstring-index-is-bijection]]: Every length-$n$ bit string labels exactly one computational-basis vector, including the empty string.


## Proof

1.1 For a source wire used $r\ge1$ times in one DAG layer, start with that wire as one leaf and in each round apply CNOT from each current leaf to at most one fresh zero target. After $j$ rounds there are at least $\min(r,2^j)$ distinct leaves, so at most $\lceil\log_2(r+1)\rceil\le L$ rounds suffice. The tree needs $r-1$ CNOTs, and summing $r-1$ over source wires and layers gives at most $E$ copies. By [F4], each leaf carries the source's basis value and each CNOT leaves its control unchanged. The rounds are successive explicit layers in the order specified by [F9], counted by [F10]. [given, F2, F3, F4, F9, F10, choose, algebra]

2.1 Fix a DAG layer and suppose each source wire at its start holds its Boolean circuit value. Fan out every source to private leaves by Step 1.1. Each non-input node has a distinct fresh zero value bit. A constant-$0$ node leaves that bit unchanged, and a constant-$1$ node flips it by [F5]. For NOT, the two sublayers in [F7] write $1\oplus a$; for AND, [F6] writes $ab$; for OR, [F7] writes $a\oplus b\oplus ab=a\lor b$. Repeated logical sources have distinct physical leaves, and every gate preserves its leaves. Targets are distinct between nodes, so each of these at most three gate sublayers has disjoint supports. Reversing the fan-out trees restores all private leaves to zero, since the evaluation gates did not change them; [F8] supplies the inverse CNOTs. By [F9] these are chronological sublayers, and [F10] counts them. The layer therefore takes at most $L+3+L=2L+3$ depth. [given, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 1.1, algebra]

3.1 If a non-input node $u$ feeds a node $v$, every longest path ending at $u$ extends by that edge, so the layer index of $u$ is strictly smaller than the layer index of $v$. Induct on the layer index. At the first layer all non-input predecessors are absent; at a later layer every non-input predecessor has its correct value by induction. Step 2.1 then writes the Boolean value of each node in the current layer and clears its temporary leaves. Thus after all $D$ layers every value bit equals its node's Boolean evaluation, including when two ports use the same source, and all fan-out leaves are zero. [given, step 2.1, induction, algebra]

4.1 For each output source selected $r$ times, use Step 1.1 to produce $r$ private leaves in at most $L_m$ rounds. Copy each leaf into its distinct target bit in one layer, then reverse the tree in at most $L_m$ rounds. Summing $r-1$ over output sources gives at most $m$ temporary targets, and the output stage has depth at most $2L_m+1$. This also covers repeated output ports and output sources that are input wires. The chronological composition is the one in [F9], and [F10] counts the explicit layers. [given, F2, F3, F4, F9, F10, step 1.1, step 3.1, algebra]

5.1 Copy each output into its target, then reverse the layer computations. In reverse order the fan-out tree is first recreated, the node gates are inverted to clear their value bits, and the fan-out tree is then undone; [F8] makes these same CNOT, X, and Toffoli gates available as inverses. This costs at most another $D(2L+3)$ depth and returns every value bit and temporary copy to zero. Adding this reverse depth, the output stage from Step 4.1, and the forward depth from Steps 2.1–3.1 gives $2D(2L+3)+2L_m+1$. There are $S$ value bits, at most $E$ temporary input-copy bits, and at most $m$ output-copy bits, for $O(S+E+m)$ work. The input-copy trees and their reversals in both computation passes use at most $4E$ CNOTs, and the output-copy trees and their reversals use at most $2m$ CNOTs, output copying uses $m$ CNOTs, and Boolean evaluation and reversal use at most $6S$ gates, hence the total is $O(S+E+m)$. Since fan-in is at most two, $E\le2S$. By Step 3.1 each output source holds its Boolean value, so Step 4.1 changes the target to $y\oplus f(x)$; reversing node computations restores the work without changing the input or target. This is the XOR embedding specified by [F1]. By [F11]–[F14], ordered bit strings identify the complete computational basis of the input, target, and work registers, including the zero-qubit case; the basis identity therefore extends by linearity to superpositions. The finite circuit denotes the chronological operator product [F9], its resource coordinates are counted by [F10], and fan-out CNOTs may entangle copies during computation, but reversing them restores each copy bit to zero, so no arbitrary unknown state is cloned. [given, F1, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, step 2.1, step 3.1, step 4.1, algebra] ∎


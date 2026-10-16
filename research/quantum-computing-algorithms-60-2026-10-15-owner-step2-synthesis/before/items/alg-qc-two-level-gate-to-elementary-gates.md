---
id: alg-qc-two-level-gate-to-elementary-gates
kind: algorithm
title: Gray-Path Synthesis of a Two-Level Gate
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - def-qc-two-level-unitary
  - def-qc-controlled-unitary-access
  - def-qc-elementary-circuit-resources
  - def-qc-ordered-bitstring-encoding
  - thm-qc-multicontrolled-ancilla-resource-tradeoff
  - def-qc-cnot-and-control-target-order
  - def-qc-circuit-syntax-and-register-order
  - def-qc-circuit-denotational-semantics
  - def-qc-clean-and-dirty-ancillas
  - thm-qc-computational-basis-orthonormal
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Adriano Barenco et al., Elementary gates for quantum computation, arXiv:quant-ph/9503016v1"
      url: "https://arxiv.org/pdf/quant-ph/9503016"
---
## Definition

Input distinct $x,y\in\{0,1\}^n$, $n\ge1$, and exact $V\in U(2)$. Let $g_0=x,\ldots,g_d=y$ be the path that flips the differing bit positions once in increasing order, where $d$ is the Hamming distance. For $j=0,\ldots,d-2$, swap $g_j$ and $g_{j+1}$ by an $X$ on their differing bit controlled on the other $n-1$ bits matching their common pattern. Apply $V$ to the final pair $g_{d-1},y$ by a one-qubit target gate controlled on their common other bits, reversing the ordered $2\times2$ block if $g_{d-1}$ has target bit $1$. Undo the swaps in reverse order. Expand every multi-control with either the no-workspace or one-clean-bit construction of [[thm-qc-multicontrolled-ancilla-resource-tradeoff]]; implement negative controls by conjugating that control wire with $X$.

Let $c_{X,j}$ be the elementary cost of the $j$th selected pattern-controlled swap, including its negative-control $X$ conjugations, and use its exact inverse for the return swap. Let $c_V$ similarly include the middle block's conjugations. The exact count is $2\sum_{j=0}^{d-2}c_{X,j}+c_V$. If the selected swap implementations each have cost $c_X(n-1)$ and the middle implementation has cost $c_V(n-1)$, this is $2(d-1)c_X(n-1)+c_V(n-1)$. The same clean work bit may be reused because each call returns it to zero.

## Facts & Assumptions

**Given:** Distinct computational basis labels $x,y$, the exact block $V$, and the selected resource costs and ancilla convention.

[F1] [[def-qc-two-level-unitary]]: the desired two-level operator applies $V$ on the ordered pair $(|x\rangle,|y\rangle)$ and is identity on its orthogonal complement.

[F2] [[def-qc-ordered-bitstring-encoding]]: a computational basis word is identified with its ordered bitstring, so individual wire values and bit flips determine the corresponding basis label.

[F3] [[def-qc-cnot-and-control-target-order]]: a CNOT flips its target bit exactly when its named control bit is $1$.

[F4] [[def-qc-circuit-denotational-semantics]]: chronological circuit layers $L_1,\ldots,L_d$ denote $U_{L_d}\cdots U_{L_1}$.

[F5] [[def-qc-elementary-circuit-resources]]: costs count declared gate occurrences under the explicit operation model.

[F6] [[thm-qc-computational-basis-orthonormal]]: the ordered computational basis of the register is orthonormal.

[F7] [[thm-qc-multicontrolled-ancilla-resource-tradeoff]] gives exact no-workspace $O(m^2)$ and one-clean-bit $O(m)$ elementary constructions; each clean call returns its work bit to zero.

## Proof


1.1 By [F2] and [F3], each path swap is an $X$ controlled on the other bits' fixed values, so it exchanges exactly the two indicated basis labels and fixes every other basis vector. Each swap is a permutation of the orthonormal computational basis [F6], hence a unitary. Their chronological product $P$ sends $x=g_0$ to $g_{d-1}$ and fixes $y=g_d$, because the last path edge is deliberately omitted. [given, F1, F2, F3, F6, algebra]

2.1 Let $M$ be the full-register middle operation. It acts only on the pair $(g_{d-1},g_d)$; reversing its $2\times2$ block when the target bit of $g_{d-1}$ is $1$ makes its ordered action exactly $V$. By [F4], the complete circuit matrix is $P^*MP$. Since $P$ sends $(x,y)$ to $(g_{d-1},g_d)$ and permutes no basis vector into that active pair except $x,y$, this conjugate acts by $V$ on $(x,y)$ and fixes every other basis vector. It is the exact two-level unitary, including its scalar phase. [step 1.1, F1, F4, algebra]

3.1 There are $d-1$ swaps, their $d-1$ inverses, and one controlled-$V$ call. Counting each selected circuit and its exact inverse, including negative-control conjugations, gives $2\sum_{j=0}^{d-2}c_{X,j}+c_V$ occurrences under [F5], with the stated equal-cost specialization. Conjugating a positive control by $X$ before and after changes its active value from $1$ to $0$ and adds two one-qubit gates, so these exact pattern costs remain within the same $O(n^2)$ no-workspace or $O(n)$ clean-bit bounds for each call. By [F7] these are actual exact elementary constructions. The calls are sequential, and if the selected clean-bit construction returns its work bit to zero after each call, the same bit suffices throughout. [step 2.1, F5, F7, algebra]

4.1 If $d=1$, the swap lists are empty and the single controlled target block acts on $(x,y)$ directly. If $n=1$, there are no controls and the construction is one gate on the sole wire: its matrix is $V$ when $x=0,y=1$, and $XVX$ when $x=1,y=0$, so its action on the selected ordered pair is $V$ in both cases. For the other cases, [F7] supplies the elementary expansion used in step 3.1 with the stated work-bit return. Thus every case is an exact elementary implementation. [step 1.1, step 2.1, step 3.1, F7, algebra] ∎

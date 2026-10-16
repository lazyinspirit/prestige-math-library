---
id: alg-qc-isometry-unitary-completion
kind: algorithm
title: Isometry Unitary Completion
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - def-qc-tensor-register-and-permutation
  - def-qc-ordered-bitstring-encoding
  - def-qc-clean-and-dirty-ancillas
  - def-real-and-complex-inner-product-space
  - def-linear-isometry-and-orthogonal-or-unitary-operator
justified_by:
  - thm-qc-isometry-completion-and-synthesis
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapter 1
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: Vivek V. Shende, Stephen S. Bullock, and Igor L. Markov, Synthesis of Quantum Logic Circuits
      url: https://arxiv.org/pdf/quant-ph/0406176
---

## Definition

**Input.** Integers $1\le D\le M$, ordered orthonormal bases of $\mathbb C^D$ and $\mathbb C^M$, and an exact $M\times D$ matrix $V$ whose columns are orthonormal, so $V$ represents a linear isometry in the convention of [[def-linear-isometry-and-orthogonal-or-unitary-operator]]. Arithmetic is ideal exact complex arithmetic with conjugation, norms, square roots, and exact zero tests; no bit-time bound is part of this procedure.

**Procedure.** Initialize an ordered list $L$ with the $D$ columns of $V$. For $j=0,1,\ldots,M-1$, compute

$$r_j=e_j-\sum_{w\in L}\langle e_j,w\rangle_{\mathrm{root}}w.$$

If $\|r_j\|_2=0$, leave $L$ unchanged. Otherwise append $r_j/\|r_j\|_2$ to $L$. After the finite loop, return the square matrix $W$ whose columns are the final list, and return INVALID if the input dimensions or orthonormal-column condition fail.

For integer widths $0\le n\le w$, put $D=2^n$, $M=2^w$, and $a=w-n$. The input data and clean workspace use the ordered tensor-register convention of [[def-qc-tensor-register-and-permutation]] and the big-endian basis encoding of [[def-qc-ordered-bitstring-encoding]]. A clean workspace register starts at $|0^a\rangle$ under [[def-qc-clean-and-dirty-ancillas]]. Let $\Pi$ be the ordered wire permutation that swaps the $n$-wire data block with the $a$-wire zero-workspace block, so $\Pi(|x\rangle|0^a\rangle)=|0^a\rangle|x\rangle$. This sends the declared clean-input basis to the first $D$ standard basis vectors. The matrix $W\Pi$ is the full-unitary extension interface used by [[thm-qc-isometry-completion-and-synthesis]].

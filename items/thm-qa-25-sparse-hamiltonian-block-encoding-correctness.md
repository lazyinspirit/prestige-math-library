---
id: thm-qa-25-sparse-hamiltonian-block-encoding-correctness
kind: theorem
title: Correctness and access cost of sparse block encoding
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - alg-qa-25-sparse-hamiltonian-block-encoding
  - def-qa-25-qubitization-access-model
  - def-qa-22-block-encoding
  - def-qa-20-sparse-hamiltonian-oracle-model
  - def-qc-dirac-notation-conversion
  - def-qc-state-preparation-cost-model
  - lem-qa-25-sorted-xor-sparse-access-isometries
proof_strategy: direct
axiom_use: "None; the matrix entries are finite sums of basis overlaps."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, Lemma 48 and proof"
      url: "https://arxiv.org/pdf/1806.01838"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 9 §9.4, Example 2"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

For a $d_H$-row-sparse Hermitian $H$, put $h_{\max}=\max_{i,j}|H_{ij}|$ and supply a certified bound $h\ge h_{\max}$. In the supplied-permutation mode, if $h=0$ then $H=0$ and the returned $X_{\rm flag}\otimes I$ has zero all-zero-flag compression and normalization $1$; if $h>0$, the designated all-zero auxiliary compression of $U_L^*U_R$ from [[alg-qa-25-sparse-hamiltonian-block-encoding]] is $H/(d_Hh)$. One such block-encoding call uses one supplied inverse row-location permutation, one supplied column-location permutation, two entry-value queries (compute and uncompute), and the declared $D_{d_H}$, inverse, flag-rotation, and arithmetic implementations. In the optional sorted-XOR mode with $h>0$, the encoded matrix is $H\oplus0$ with normalization $d_Hh$, and each encoding, actual adjoint or coherent controlled call costs $O(\log(d_H+1))$ original location calls and $O(1)$ value calls. No constant-cost conversion from XOR locations to in-place permutations is asserted.

## Facts & Assumptions

**Given:** One declared sparse-algorithm input mode. The supplied-permutation mode has a certified nonnegative bound $h\ge h_{\max}$, exact reversible location permutations and costed uniform preparation; when $h>0$, it also has costed exact value and flag arithmetic. The optional sorted-XOR branch has its separately declared positive entry bound and sorted support interface; the algorithm's $h=0$ branch is common to both modes.

[F1] [[alg-qa-25-sparse-hamiltonian-block-encoding]]: $V_L$ prepares the uniform row-neighbor state, $V_R$ the uniform column-neighbor state, and the supplied-permutation mode's flag-zero value amplitude is $h_{ij}=H_{ij}/h$ for its certified bound $h$.

[F2] [[def-qa-25-qubitization-access-model]]: an all-zero compression is $J^*UJ$; its normalization and access costs are separate.

[F3] [[def-qa-22-block-encoding]]: a projected block of a supplied unitary is the encoded matrix divided by its declared normalization.

[F4] [[def-qa-20-sparse-hamiltonian-oracle-model]]: valid row/value access describes a Hermitian matrix and counts each named oracle call separately.

[F5] [[def-qc-dirac-notation-conversion]]: $|u\rangle\langle v|$ contributes the matrix entry $\langle u,e_i\rangle_{\rm root}\langle e_j,v\rangle_{\rm root}$ in the stated basis convention.

[F6] [[def-qa-25-qubitization-access-model]]: an exact block encoding is a unitary dilation whose all-zero compression is the normalized target matrix.

[F7] [[lem-qa-25-sorted-xor-sparse-access-isometries]] constructs the optional sorted-XOR mode with clean workspace, normalization $d_Hh$, and the stated ordinary, inverse and controlled query counts.

## Proof

**Given:** As in Facts & Assumptions.

1.1 First consider the supplied-permutation mode. If $h=0$, the promised bound implies every entry of $H$ is zero. The returned $X_{\rm flag}\otimes I$ is unitary and its compression against the clean flag $|0\rangle$ is $\langle0|X|0\rangle I=0$, so normalization $1$ encodes $H=0$. Now suppose $h>0$. Each row and, by Hermiticity, each column has at most $d_H$ nonzero entries, each of magnitude at most $h$. For any vector $v$, Cauchy–Schwarz gives $|(Hv)_i|^2\le(\sum_j|H_{ij}|)(\sum_j|H_{ij}||v_j|^2)$. Summing over $i$ and using the row and column bounds gives $\|Hv\|^2\le(d_Hh)^2\|v\|^2$, so $\|H\|_{\rm op}\le d_Hh$ and the stated normalization is valid in [F3]. For each system label $i$, $V_L|0,i\rangle=d_H^{-1/2}\sum_{k=1}^{d_H}|i,\rho(i,k)\rangle$, where $\rho(i,k)$ is its listed column or a distinct sentinel. For each system label $j$, $(D_{d_H}\otimes I)|0,j\rangle=d_H^{-1/2}\sum_{\ell=1}^{d_H}|\ell,j\rangle$; the register SWAP sends this to $d_H^{-1/2}\sum_{\ell=1}^{d_H}|j,\ell\rangle$, so the supplied action of $O_c$ gives $V_R|0,j\rangle=d_H^{-1/2}\sum_{\ell=1}^{d_H}|\kappa(j,\ell),j\rangle$. Each is normalized because its $d_H$ terms are orthonormal and have coefficient $d_H^{-1/2}$. [F1, F3, F4, F6, given, algebra]

1.2 For $|h|\le1$, the two columns of the stated flag matrix have unit norm and inner product $\overline h(-\sqrt{1-|h|^2})+\sqrt{1-|h|^2}\,\overline h=0$; hence it is unitary and its flag-zero output amplitude from $|0\rangle$ is $h$. The value oracle is uncomputed after this rotation, so the good-flag overlap retains no value workspace. [F1, F4, algebra]

2.1 With the root inner product linear in its first argument, the $(i,j)$ matrix entry of $U_L^*U_R$ is $\langle U_R(|0\rangle\otimes|j\rangle),\,U_L(|0\rangle\otimes|i\rangle)\rangle_{\rm root}$, by the adjoint identity and the ordered-basis coordinate convention in [F5]. The row and column lists contain the pair $(i,j)$ once each exactly when $H_{ij}\ne0$, by Hermiticity and the nonzero-entry enumeration. In that case the unique matching basis pair contributes $d_H^{-1}h_{ij}=H_{ij}/(d_Hh)$: the $U_R$ amplitude is first in the root pairing and equals $h_{ij}/\sqrt{d_H}$, while the row-state amplitude is $1/\sqrt{d_H}$. If $H_{ij}=0$, there is no valid matching pair, and the sentinel branch has flag-zero amplitude $0$. Thus every clean matrix entry is the stated one, proving the compressed block identity. [F1, F2, F3, F4, F5, F6, step 1.1, step 1.2, algebra]

3.1 The displayed circuit for $U_L^*U_R$ applies the inverse row-location permutation once through $V_L^*$, the column-location permutation once through $V_R$, and the entry-value oracle twice to compute and uncompute the value. Its state preparations, inverses, arithmetic, flag rotations, controlled operations, and gate synthesis are separate declared costs, so no additional sparse-access operation has been counted as free. [F1, F2, step 2.1]

4.1 In the optional sorted-XOR mode, apply [F7] to the supplied sorted QA20 interface and positive entry bound $h$. Its clean isometries insert $H_{ij}/h$ only on the column side, give the padded block $(H\oplus0)/(d_Hh)$, and clear the extra location and value work exactly on the prepared input subspaces. Its actual inverses and coherent controls have the same logarithmic location-query order. The supplied-permutation proof and counts in steps 1.1–3.1 are unchanged. [F7, step 3.1, algebra] ∎

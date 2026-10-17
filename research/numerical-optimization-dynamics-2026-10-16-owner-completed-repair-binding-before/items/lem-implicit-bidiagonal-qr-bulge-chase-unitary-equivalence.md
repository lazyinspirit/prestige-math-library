---
id: lem-implicit-bidiagonal-qr-bulge-chase-unitary-equivalence
kind: lemma
title: "Bulge chase preserves bidiagonal singular values"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [alg-implicit-shifted-bidiagonal-qr-with-deflation, def-real-and-complex-givens-transformations, thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries]
dependency_level: 2
verification:
  precheck: pass
proof_strategy: direct
sources:
  references:
    - title: "Wen-Wei Lin, Lecture Notes of Matrix Computations, §6.3"
      url: "https://zhims.github.io/doc/note/computing/matrixComputations.pdf"
    - title: "James Demmel and W. Kahan, Accurate Singular Values of Bidiagonal Matrices, §3"
      url: "https://www.netlib.org/lapack/lawnspdf/lawn03.pdf"
---

## Statement

Consider one exact-arithmetic sweep of [[alg-implicit-shifted-bidiagonal-qr-with-deflation]] on an unreduced upper bidiagonal block, with no nonzero deflation. If its right rotations have product $V_s$ and its left rotations have product $U_s$, the restored bidiagonal block is $B_+=U_s^*BV_s$. Consequently $B_+$ and $B$ have the same singular values. If a set $D$ of superdiagonal entries is deflated, then the transformed output instead equals the corresponding unitary transform of $B+E_D$, where $E_D$ has those entries negated and all other entries zero.

## Facts & Assumptions

**Given:** An upper bidiagonal block, the Givens bulge-chase instructions, and exact unitary rotations.

[F1] [[alg-implicit-shifted-bidiagonal-qr-with-deflation]] starts with a right rotation and alternates right rotations that remove generated second-superdiagonal bulges with left rotations that remove subdiagonal bulges; deflation occurs before the sweep rotations.

[F2] [[thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries]]: each exact Givens rotation is unitary.

## Proof

1.1 The first right rotation acts on the leading adjacent column pair of the active block and creates at most the first subdiagonal bulge. Each left rotation annihilates the current subdiagonal entry; because it mixes only two adjacent rows, it can create at most the next second-superdiagonal bulge. The following right rotation mixes only the adjacent columns supporting that bulge, annihilates it, and creates at most the next subdiagonal bulge. Induction along the block therefore keeps one bulge at a time and removes it at the next alternating rotation. The zero coupling at a deflated block endpoint prevents a bulge from leaving the block, so the final matrix is upper bidiagonal. [F1, F2, induction]

1.2 Every right operation multiplies on the right by a unitary Givens factor and every left operation multiplies on the left by the adjoint of a unitary Givens factor. Their products therefore give unitary $U_s,V_s$ and the final matrix is exactly $U_s^*BV_s$. [F1, F2, algebra]

2.1 Left and right unitary factors preserve singular values, since $(U_s^*(B+E_D)V_s)^*(U_s^*(B+E_D)V_s)=V_s^*(B+E_D)^*(B+E_D)V_s$ is unitarily similar to $(B+E_D)^*(B+E_D)$. Deflation occurs before the sweep rotations, and setting each listed superdiagonal entry to zero adds exactly its negative there; hence the matrix entering the unitary sweep is $B+E_D$. With no deflation $E_D=0$, so step 1.2 gives equal singular values for $B_+$ and $B$. [step 1.2, F1, F2, algebra] ∎

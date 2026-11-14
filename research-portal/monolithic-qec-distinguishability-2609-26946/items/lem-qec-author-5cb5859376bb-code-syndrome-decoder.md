---
id: lem-qec-author-5cb5859376bb-code-syndrome-decoder
kind: lemma
domain: mathematics
title: A Knill–Laflamme decoder retaining the code syndrome
status: draft
origin: session
deps:
  - def-qec-prereq-restricted-logical-channel
  - math:lem-qc-knill-laflamme-orthogonal-error-basis
  - math:thm-qc-finite-kraus-choi-stinespring-equivalence
  - math:def-qc-tensor-map
dependency_roles:
  def-qec-prereq-restricted-logical-channel: mathematical-premise
  math:lem-qc-knill-laflamme-orthogonal-error-basis: mathematical-premise
  math:thm-qc-finite-kraus-choi-stinespring-equivalence: mathematical-premise
  math:def-qc-tensor-map: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct-proof
dependency_level: 1
---

## Statement

Let $V:H_L\to H_P$ be a finite-dimensional isometry with nonzero logical space, $P=VV^\dagger$, and let $L_1,\ldots,L_m$ be finite matrices. Assume the scalar Knill–Laflamme products for $E_0=I,E_a=L_a$: $V^\dagger E_a^\dagger E_bV=c_{ab}I$. Put $S=\sum_aL_a^\dagger L_a$ and $r=\sum_ac_{aa}\geq0$. There is a CPTP decoder $R$ such that, writing $\mathcal V(X)=VXV^\dagger$, $R\mathcal V(X)=X$, $R(\sum_aL_a\mathcal V(X)L_a^\dagger)=rX$ and $R(S\mathcal V(X))=R(\mathcal V(X)S)=rX$. Moreover $R(VXZ^\dagger)=R(ZXV^\dagger)=0$ whenever $V^\dagger Z=0$. These are linear-map identities and persist under any finite reference extension.

## Facts & Assumptions

[F1] Isometric encoding and a decoded recovery have the stated finite channel types. [[def-qec-prereq-restricted-logical-channel]]

[F2] A finite scalar-product error family can be unitarily mixed into positive-weight orthogonal isometric error ranges, with zero-weight restrictions vanishing. [[math:lem-qc-knill-laflamme-orthogonal-error-basis]]

[F3] For finite-dimensional complex inner-product spaces, a complex-linear map given by a finite Kraus sum is a quantum channel when the Kraus operators have adjoint-square sum equal to the input identity (condition 3 implies condition 1). [[math:thm-qc-finite-kraus-choi-stinespring-equivalence]]

[F4] The tensor product of finite-dimensional linear maps is the unique linear map with the specified factorwise action on elementary tensors. [[math:def-qc-tensor-map]]

## Proof

**Given:** The isometry and scalar products including the identity. **Goal:** Construct a decoder with the claimed branch and cross-term identities.

1.1 Write $\ell_a=c_{0a}$ and $F_a=L_a-\ell_aI$. Then $V^\dagger F_aV=0$ and $V^\dagger F_a^\dagger F_bV=(c_{ab}-\overline{\ell_a}\ell_b)I$. Apply [F2] to this centered family: its nonzero mixed restrictions are $\sqrt{\lambda_j}W_j$, where the $W_j$ are isometries with pairwise orthogonal ranges. Since each $F_aV$ is orthogonal to $\operatorname{im}V$, every $W_j$ range is also orthogonal to that code range. The scalar Gram matrix is positive because $\|\sum_a z_aF_aVx\|^2$ is its quadratic form times $\|x\|^2$. [given, F1, F2]

2.1 Put $Q=I-VV^\dagger-\sum_jW_jW_j^\dagger$. Choose a unit logical vector $\ell_*$ and an orthonormal basis $q_k$ of $QH_P$. The decoder has Kraus operators $V^\dagger$, $W_j^\dagger$, and $|\ell_*\rangle\langle q_k|$. Their adjoint-square sum is $VV^\dagger+\sum_jW_jW_j^\dagger+Q=I$, so [F3], applied with input space $H_P$ and output space $H_L$, makes their finite Kraus sum a completely positive trace-preserving map. On a code/complement cross term every Kraus congruence vanishes: either the code factor or its orthogonal factor is annihilated. This proves the cross-term identity and $R\mathcal V=\operatorname{id}$. [F1, F2, F3, step 1.1]

3.1 Expand $L_aV$ in the mutually orthogonal ranges $V,W_j$. Each coefficient is scalar, so the decoder sends $L_aVXV^\dagger L_a^\dagger$ to the sum of their squared magnitudes times $X$, which is $c_{aa}X$ because $V^\dagger L_a^\dagger L_aV=c_{aa}I$. Summing gives $rX$. Finally $V^\dagger SV=rI$, hence $SV=rV+Z$ with $V^\dagger Z=0$. The cross-term property in step 2.1 gives both anticommutator identities. These are equalities on the full logical matrix space. [given, F1, step 1.1, step 2.1]

4.1 Let $H_A$ be any finite-dimensional complex reference space, and write $\operatorname{id}_A=\operatorname{id}_{\mathcal L(H_A)}$. For $H=H_L$ or $H_P$, identify $\mathcal L(H)\otimes\mathcal L(H_A)$ with $\mathcal L(H\otimes H_A)$ by sending $A\otimes B$ to the operator $x\otimes y\mapsto Ax\otimes By$. The latter operator is supplied by [F4]; in finite ordered bases the tensors of matrix units act as the matrix units of the product basis, so this correspondence is a linear isomorphism. By [F4], the amplification of any linear map $T$ on operator spaces satisfies $(T\otimes\operatorname{id}_A)(X\otimes B)=T(X)\otimes B$. Apply the identities in steps 2.1 and 3.1 to each $X\otimes B$; linearity gives the identities for every operator on the reference-extended space, since these elementary operators span it. This includes the cross-term maps for each fixed $Z$ with $V^\dagger Z=0$. [F4, step 2.1, step 3.1] ∎

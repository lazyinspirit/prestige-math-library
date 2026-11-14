---
id: lem-qec-author-5cb5859376bb-amplified-trace-sandwich
kind: lemma
domain: mathematics
title: Reference-uniform trace-norm sandwich estimates
status: published
origin: session
deps:
  - math:thm-singular-value-decomposition
  - math:thm-qc-trace-norm-rank-one-formula
  - math:thm-qc-trace-norm-duality-and-norm-properties
  - math:def-qc-trace-norm
  - math:def-operator-norm-on-a-finite-dimensional-inner-product-space
  - math:lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous
  - math:def-real-and-complex-inner-product-space
  - math:def-adjoint-of-a-linear-map-between-inner-product-spaces
  - math:thm-adjoint-exists-and-is-unique-in-finite-dimension
  - math:prop-adjoint-algebra
  - math:thm-cauchy-schwarz-in-an-inner-product-space
  - math:def-qc-tensor-register-and-permutation
  - math:def-qc-tensor-map
  - math:thm-qc-tensor-map-composition-and-adjoint
  - math:def-linear-isometry-and-orthogonal-or-unitary-operator
  - math:lem-qc-linear-isometry-preserves-inner-products
  - math:def-qc-dirac-notation-conversion
dependency_roles:
  math:thm-singular-value-decomposition: mathematical-premise
  math:thm-qc-trace-norm-rank-one-formula: mathematical-premise
  math:thm-qc-trace-norm-duality-and-norm-properties: mathematical-premise
  math:def-qc-trace-norm: mathematical-premise
  math:def-operator-norm-on-a-finite-dimensional-inner-product-space: mathematical-premise
  math:lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous: mathematical-premise
  math:def-real-and-complex-inner-product-space: mathematical-premise
  math:def-adjoint-of-a-linear-map-between-inner-product-spaces: mathematical-premise
  math:thm-adjoint-exists-and-is-unique-in-finite-dimension: mathematical-premise
  math:prop-adjoint-algebra: mathematical-premise
  math:thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  math:def-qc-tensor-register-and-permutation: mathematical-premise
  math:def-qc-tensor-map: mathematical-premise
  math:thm-qc-tensor-map-composition-and-adjoint: mathematical-premise
  math:def-linear-isometry-and-orthogonal-or-unitary-operator: mathematical-premise
  math:lem-qc-linear-isometry-preserves-inner-products: mathematical-premise
  math:def-qc-dirac-notation-conversion: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct-proof
dependency_level: 0
---

## Statement

On finite complex matrix spaces, use spectral operator norm $\|A\|$ and trace norm $\|X\|_1$. For compatible matrices, $\|AXB\|_1\leq\|A\|\|B\|\|X\|_1$. Consequently $\|AXA^\dagger-BXB^\dagger\|_1\leq(\|A\|+\|B\|)\|A-B\|\|X\|_1$. Both estimates hold after adjoining an identity on any finite reference space with the same constants. An isometric encoding preserves trace norm, and unitary conjugation does also.

## Facts & Assumptions

[F1] Finite matrices admit a singular-value decomposition with orthonormal domain and codomain bases. [[math:thm-singular-value-decomposition]]

[F2] A rank-one outer product has trace norm equal to the product of its vector norms. [[math:thm-qc-trace-norm-rank-one-formula]]

[F3] Trace norm is homogeneous and obeys the triangle inequality. [[math:thm-qc-trace-norm-duality-and-norm-properties]]

[F4] Trace norm is the sum of the domain singular values, including zeros; the sum is zero on a zero domain. [[math:def-qc-trace-norm]]

[F5] The operator norm is zero on a zero domain and otherwise is the maximum over unit vectors. The induced vector norm is homogeneous. [[math:def-operator-norm-on-a-finite-dimensional-inner-product-space]] [[math:lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous]]

[F6] The pairing is linear in the first argument, conjugate-symmetric and positive definite, with $\|z\|^2=\langle z,z\rangle$. Finite-dimensional adjoints exist uniquely and satisfy $\langle Tz,w\rangle=\langle z,T^\dagger w\rangle$; adjoints preserve sums, reverse composition and satisfy $(T^\dagger)^\dagger=T$. Cauchy–Schwarz bounds the absolute pairing by the product of the vector norms. [[math:def-real-and-complex-inner-product-space]] [[math:def-adjoint-of-a-linear-map-between-inner-product-spaces]] [[math:thm-adjoint-exists-and-is-unique-in-finite-dimension]] [[math:prop-adjoint-algebra]] [[math:thm-cauchy-schwarz-in-an-inner-product-space]]

[F7] Finite tensor spaces carry the product inner product and product orthonormal basis, allowing zero-dimensional factors. Tensor maps act factorwise on elementary tensors and preserve composition, identities and adjoints. [[math:def-qc-tensor-register-and-permutation]] [[math:def-qc-tensor-map]] [[math:thm-qc-tensor-map-composition-and-adjoint]]

[F8] A linear isometry preserves every vector norm and, over the complex field, every inner product. A unitary operator is an invertible linear isometry. [[math:def-linear-isometry-and-orthogonal-or-unitary-operator]] [[math:lem-qc-linear-isometry-preserves-inner-products]]

[F9] The outer product $|u\rangle\langle v|$ denotes the map $z\mapsto\langle z,v\rangle u$ in the first-argument-linear convention. [[math:def-qc-dirac-notation-conversion]]

## Proof

**Given:** The finite compatible matrices and any finite reference. **Goal:** Establish all stated trace-norm controls.

1.1 For a finite map $T$, scaling a nonzero vector to a unit vector in [F5] gives $\|Tz\|\leq\|T\|\|z\|$; for $z=0$ the inequality is immediate. To bound its adjoint, put $q=T^\dagger w$. If $q\ne0$, [F6] gives $\|q\|^2=|\langle Tq,w\rangle|\leq\|T\|\|q\|\|w\|$, hence $\|T^\dagger w\|\leq\|T\|\|w\|$; the same inequality holds if $q=0$. Taking the maximum over unit $w$, or using the zero-domain convention when there are none, yields $\|T^\dagger\|\leq\|T\|$. Applying this to $T^\dagger$ and using its double-adjoint identity gives $\|T^\dagger\|=\|T\|$. [F5, F6, algebra]

2.1 Write an SVD $X=\sum_j s_j|u_j\rangle\langle v_j|$, with orthonormal vectors and $\sum_j s_j=\|X\|_1$ by [F1] and [F4]. The outer-product and adjoint rules [F6] and [F9] give $AXB=\sum_j s_j|Au_j\rangle\langle B^\dagger v_j|$. Thus [F2], [F3] and step 1.1 imply $\|AXB\|_1\leq\sum_js_j\|Au_j\|\|B^\dagger v_j\|\leq\|A\|\|B\|\|X\|_1$. The empty SVD sum gives the same result for zero rank or a zero domain. The identity $AXA^\dagger-BXB^\dagger=(A-B)XA^\dagger+BX(A-B)^\dagger$, the triangle inequality and the just-proved sandwich estimate yield $\|AXA^\dagger-BXB^\dagger\|_1\leq(\|A\|+\|B\|)\|A-B\|\|X\|_1$. [F1, F2, F3, F4, F6, F9, step 1.1, algebra]

3.1 Fix any finite reference space $R$ and choose an orthonormal basis $(e_j)$, available by applying [F1] to its identity map. In the product basis [F7], every vector has the form $z=\sum_j z_j\otimes e_j$. The product inner product and tensor-map rule give $\|(T\otimes I_R)z\|^2=\sum_j\|Tz_j\|^2\leq\|T\|^2\sum_j\|z_j\|^2=\|T\|^2\|z\|^2$ by step 1.1. Consequently $\|T\otimes I_R\|\leq\|T\|$, also when $R=0$ or the domain of $T$ is zero, since then the product domain is zero and its operator norm is zero. Expanding instead as $z=\sum_j e_j\otimes z_j$ proves the identical bound for $I_R\otimes T$. Apply step 2.1 to the amplified matrices. The composition, identity and adjoint rules in [F7], together with the tensor-map rule for differences, identify those sandwiches and congruences with the desired reference extensions. The upper bounds for $A$, $B$ and $A-B$ retain exactly the original constants. [F1, F5, F7, step 1.1, step 2.1, choose, algebra]

4.1 Let $V:H\to K$ be a linear isometry and $X:H\to H$. By [F8] and the adjoint rule [F6], $\langle x,V^\dagger Vy\rangle=\langle Vx,Vy\rangle=\langle x,y\rangle$. For each $y$, take $x=(V^\dagger V-I_H)y$ in the resulting zero pairing; positive definiteness gives $V^\dagger V=I_H$. Norm preservation and [F5] give $\|V\|\leq1$, including $H=0$; step 1.1 gives $\|V^\dagger\|\leq1$. Step 2.1 now gives $\|VXV^\dagger\|_1\leq\|X\|_1$ and, in the reverse direction, $\|X\|_1=\|V^\dagger(VXV^\dagger)V\|_1\leq\|VXV^\dagger\|_1$. Hence encoding preserves trace norm. The tensor expansion in step 3.1 and vector norm preservation show that $V\otimes I_R$ and $I_R\otimes V$ are isometries even for $R=0$, so this preservation also holds with references. A unitary operator is an isometry by [F8], giving unitary-conjugation invariance as well. [F5, F6, F7, F8, step 1.1, step 2.1, step 3.1, algebra] ∎

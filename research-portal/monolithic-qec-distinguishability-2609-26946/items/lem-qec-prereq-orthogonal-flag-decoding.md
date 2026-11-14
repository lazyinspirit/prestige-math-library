---
id: lem-qec-prereq-orthogonal-flag-decoding
kind: lemma
domain: mathematics
title: Recovery optimization on orthogonal flagged branches
status: draft
origin: session
deps:
  - def-qec-prereq-restricted-logical-channel
  - def-qec-prereq-entanglement-fidelity
  - math:def-qc-choi-matrix
  - math:thm-qc-finite-kraus-choi-stinespring-equivalence
  - math:thm-heine-borel-rn
  - math:thm-extreme-value-metric
  - math:def-real-and-complex-inner-product-space
  - math:def-adjoint-of-a-linear-map-between-inner-product-spaces
  - math:thm-trace-of-ab-equals-trace-of-ba
  - math:def-orthogonal-vectors-sets-and-orthonormal-bases
  - math:def-orthogonal-projection
dependency_roles:
  def-qec-prereq-restricted-logical-channel: mathematical-premise
  def-qec-prereq-entanglement-fidelity: mathematical-premise
  math:def-qc-choi-matrix: mathematical-premise
  math:thm-qc-finite-kraus-choi-stinespring-equivalence: mathematical-premise
  math:thm-heine-borel-rn: mathematical-premise
  math:thm-extreme-value-metric: mathematical-premise
  math:def-real-and-complex-inner-product-space: mathematical-premise
  math:def-adjoint-of-a-linear-map-between-inner-product-spaces: mathematical-premise
  math:thm-trace-of-ab-equals-trace-of-ba: mathematical-premise
  math:def-orthogonal-vectors-sets-and-orthonormal-bases: mathematical-premise
  math:def-orthogonal-projection: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
---

## Statement

Let $H=\mathbb C^d$ with $d\geq1$, and let $K=\bigoplus_{j=1}^m K_j$ be a finite orthogonal direct sum of nonzero finite-dimensional complex inner-product spaces. Concretely, $K$ is the space of tuples $v=(v_1,\ldots,v_m)$ with $v_j\in K_j$, with coordinatewise vector operations and inner product $\langle v,w\rangle_K=\sum_{j=1}^m\langle v_j,w_j\rangle_{K_j}$, linear in the first argument. Write $\iota_j:K_j\to K$ for the map putting its input in coordinate $j$ and zero in every other coordinate, and $P_j=\iota_j\iota_j^*$ for the orthogonal projector onto its image; the star denotes the adjoint for these inner products. Let $p_j\geq0$, with $\sum_jp_j=1$, and let each $\mathcal N_j:\mathcal L(H)\to\mathcal L(K_j)$ be a quantum channel. Define $\mathcal N(X)=\sum_jp_j\iota_j\mathcal N_j(X)\iota_j^*$. Then, for entanglement fidelity at the maximally mixed input,

$$\max_{\mathcal R:\mathcal L(K)\to\mathcal L(H)\ \mathrm{channel}}F_e(\mathcal R\circ\mathcal N)=\sum_jp_j\max_{\mathcal R_j:\mathcal L(K_j)\to\mathcal L(H)\ \mathrm{channel}}F_e(\mathcal R_j\circ\mathcal N_j).$$

A decoder attaining the left side can be constructed by projecting onto the orthogonal blocks and applying a maximizing decoder for the corresponding block. The hypothesis that the weights are fixed independently of the input is part of this statement; input-dependent branch weights are not covered.

## Statement references

[[def-qec-prereq-restricted-logical-channel]]

[[def-qec-prereq-entanglement-fidelity]]

[[math:def-real-and-complex-inner-product-space]]

[[math:def-adjoint-of-a-linear-map-between-inner-product-spaces]]

[[math:def-orthogonal-vectors-sets-and-orthonormal-bases]]

[[math:def-orthogonal-projection]]

## Facts & Assumptions

[F1] A quantum channel is a complex-linear completely positive trace-preserving map; a decoder is a channel with the indicated input and logical output. Complete positivity means positivity after tensoring with every finite-dimensional identity map. [[def-qec-prereq-restricted-logical-channel]]

[F2] For $|\Phi_d\rangle=d^{-1/2}\sum_{a=0}^{d-1}|a\rangle\otimes|a\rangle$, entanglement fidelity is the overlap of $|\Phi_d\rangle$ with the output of $\operatorname{id}\otimes\mathcal E$ on $|\Phi_d\rangle\langle\Phi_d|$. [[def-qec-prereq-entanglement-fidelity]]

[F3] For a linear map $\mathcal T:\mathcal L(A)\to\mathcal L(B)$, its input-first Choi matrix is $J(\mathcal T)=\sum_{a,b}|a\rangle\langle b|\otimes\mathcal T(|a\rangle\langle b|)$ in an ordered orthonormal basis of $A$. Such a map is a channel exactly when $J(\mathcal T)$ is positive semidefinite and its partial trace over $B$ is $I_A$. [[math:def-qc-choi-matrix]] [[math:thm-qc-finite-kraus-choi-stinespring-equivalence]]

[F4] A closed and bounded subset of finite-dimensional real Euclidean space is compact, and a continuous real-valued function on a nonempty compact metric space attains its maximum. [[math:thm-heine-borel-rn]] [[math:thm-extreme-value-metric]]

[F5] A complex inner product is linear in the first argument, conjugate symmetric, and positive definite: $\langle x,x\rangle\geq0$, with equality exactly when $x=0$. [[math:def-real-and-complex-inner-product-space]]

[F6] An adjoint $T^*$ of a linear map $T:A\to B$ satisfies $\langle Tx,y\rangle_B=\langle x,T^*y\rangle_A$ for all $x\in A,y\in B$. [[math:def-adjoint-of-a-linear-map-between-inner-product-spaces]]

[F7] For compatible rectangular matrices, $\operatorname{tr}(AB)=\operatorname{tr}(BA)$. [[math:thm-trace-of-ab-equals-trace-of-ba]]

[F8] Vectors are orthogonal when their inner product is zero, and two subspaces are orthogonal when every vector in one is orthogonal to every vector in the other. An orthonormal basis is an ordered basis whose vectors are pairwise orthogonal and each have induced norm one. [[math:def-orthogonal-vectors-sets-and-orthonormal-bases]]

[F9] For a subspace $W$ of a finite-dimensional inner-product space $V$, the orthogonal projection sends each $v\in V$ to the unique $w\in W$ for which $v-w$ is orthogonal to every vector in $W$. When treated as an endomorphism of $V$, this map is followed by the inclusion $W\hookrightarrow V$. [[math:def-orthogonal-projection]]

## Proof

**Given:** The finite spaces, fixed probabilities and channels in the statement.

**Goal:** Establish the displayed equality and construct a maximizing decoder.

1.1 The coordinatewise operations make the tuple space a complex vector space. The pairing in the Statement is linear in its first argument and conjugate symmetric by [F5]. Its value on $(v,v)$ is a finite sum of nonnegative terms, vanishing exactly when every $v_j=0$, so it is positive definite and hence an inner product. Extending a basis of each $K_j$ by zero in the other coordinates gives a finite basis of $K$: these vectors span coordinatewise, and a linear relation vanishes in each coordinate only when all coefficients vanish. Thus $K$ is a finite-dimensional complex inner-product space. [given, F5, construct]

1.2 Each branch supremum is attained. Indeed, in fixed bases, [F3] identifies branch decoders with positive semidefinite Choi matrices $J$ whose output partial trace is $I_{K_j}$. This set is nonempty: the replacement channel $Y\mapsto\operatorname{tr}(Y)I_H/d$ is completely positive and trace-preserving. The set is closed by its matrix inequalities and linear partial-trace equations. It is bounded because $\operatorname{tr}J=\dim K_j$, its diagonal entries are nonnegative, and positivity of each $2\times2$ principal submatrix gives $|J_{ab}|^2\leq J_{aa}J_{bb}$. The matrix coordinates form a finite-dimensional real Euclidean space, so [F4] gives compactness. The Choi formula determines a map by its values on matrix units, and the overlap in [F2] is a linear function of those values; hence the branch objective is continuous. By [F4] it attains a maximum. [F1, F2, F3, F4, F8]

2.1 Define the coordinate map $q_j:K\to K_j$ by $q_j(v)=v_j$. For $x\in K_j$ and $v\in K$, the pairing gives $\langle\iota_jx,v\rangle_K=\langle x,v_j\rangle_{K_j}$, so $q_j$ is the adjoint $\iota_j^*$ by [F6]; uniqueness follows from [F5], since a vector orthogonal to every vector, including itself, is zero. Also $\langle\iota_jx,\iota_jy\rangle_K=\langle x,y\rangle_{K_j}$, so each inclusion is an isometry. Coordinate evaluation yields $\iota_j^*\iota_j=I_{K_j}$ and $\iota_k^*\iota_j=0:K_j\to K_k$ when $k\ne j$. The map $P_j=\iota_jq_j$ retains exactly coordinate $j$; it is the identity on $\operatorname{im}\iota_j$ and zero on the other coordinate subspaces, which are orthogonal to that image by the summed pairing. For every $v\in K$, the vector $P_jv$ lies in $\operatorname{im}\iota_j$ and the residual $v-P_jv$ has zero coordinate $j$, so it is orthogonal to every vector in that image by [F8]. Thus [F9], viewed as an endomorphism of $K$, identifies $P_j$ as the orthogonal projector onto $\operatorname{im}\iota_j$, and $\sum_jP_j=I_K$ because the sum restores every coordinate of every tuple. [given, F5, F6, F8, F9, step 1.1, algebra]

3.1 For any decoder $\mathcal R$ on $K$, define $\mathcal R_j(Y)=\mathcal R(\iota_jY\iota_j^*)$. Conjugation by $\iota_j$ is completely positive, since every finite amplification is conjugation by an inclusion, and it preserves trace because $\iota_j^*\iota_j=I_{K_j}$. Composition with $\mathcal R$ therefore makes each $\mathcal R_j$ a channel. By linearity of the channel action and of the overlap in [F2], $F_e(\mathcal R\mathcal N)=\sum_jp_jF_e(\mathcal R_j\mathcal N_j)$. Thus every left-side value is at most the sum of the branchwise suprema. [given, F1, F2, F7, step 2.1]

4.1 Choose a maximizing channel $\mathcal R_j$ for each of the finitely many branches and define $\mathcal R(Y)=\sum_j\mathcal R_j(\iota_j^*Y\iota_j)$. Every compression is completely positive, and a finite sum of completely positive maps is completely positive. Also $\operatorname{tr}\mathcal R(Y)=\sum_j\operatorname{tr}(\iota_j^*Y\iota_j)=\operatorname{tr}Y$, since $\sum_jP_j=I_K$; hence $\mathcal R$ is a decoder. The coordinate identities in step 2.1 give $\iota_j^*\iota_j=I_{K_j}$ and $\iota_k^*\iota_j=0$ for $k\ne j$, so $\mathcal R(\iota_jY\iota_j^*)=\mathcal R_j(Y)$ for every $Y\in\mathcal L(K_j)$. The identity in step 3.1 therefore gives the sum of the branch maxima. This achieves the upper bound from step 3.1, proving the equality and the asserted construction. [given, F1, F7, step 2.1, step 3.1, step 1.2] ∎

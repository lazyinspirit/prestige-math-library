---
title: Finite spanning-list compression and channel qualification
status: draft
research_item: lem-author-11a9fe6cf386-finite-span-kl
dependency_level: 2
---

## Prerequisites

- [def-qec-prereq-ae-error-span-contract](item-def-qec-prereq-ae-error-span-contract)
- [math:thm-qc-knill-laflamme-necessity](https://alphabetamath.cc/item/thm-qc-knill-laflamme-necessity)
- [math:thm-qc-knill-laflamme-explicit-recovery](https://alphabetamath.cc/item/thm-qc-knill-laflamme-explicit-recovery)
- [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)
- [math:def-qc-exact-recovery-of-a-quantum-code](https://alphabetamath.cc/item/def-qc-exact-recovery-of-a-quantum-code)
- [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)
- [math:def-qc-quantum-channel](https://alphabetamath.cc/item/def-qc-quantum-channel)
- [math:prop-adjoint-algebra](https://alphabetamath.cc/item/prop-adjoint-algebra)


## Statement

Let $H$ and $\mathcal E\subseteq\mathcal L(H)$ be the finite-dimensional space and error span of the tensor-span contract. Let $V:\mathbb C^2\to H$ be any isometry and put $P=VV^*$. For any linear subspace $\mathcal S\subseteq\mathcal L(H)$, the **pair-product condition for $(V,\mathcal S)$** means that for every $E,F\in\mathcal S$ there is a complex scalar $c_{E,F}$ with $PE^*FP=c_{E,F}P$. For $\mathcal S=\mathcal E$ and $\operatorname{im}V\subseteq V_J$, this agrees with the tensor-span contract's condition; the algebraic formulation here also applies to arbitrary isometries into $H$.

For any spanning list $T_1,\ldots,T_N$ of $\mathcal E$, the pair-product condition for $(V,\mathcal E)$ is equivalent to every $V^*T_a^*T_bV$ being a scalar matrix. If this condition holds, every quantum channel $\mathcal N:\mathcal L(H)\to\mathcal L(H)$ with a finite Kraus representation whose Kraus operators lie in $\mathcal E$ is exactly recoverable on this code. Conversely, exact recovery of a finite Kraus channel on $H$ implies the pair-product condition for its Kraus span; it implies that condition for $\mathcal E$ when the Kraus span equals $\mathcal E$. Exact recovery means that a decoded recovery channel $\mathcal R:\mathcal L(H)\to\mathcal L(\mathbb C^2)$ satisfies $\mathcal R(\mathcal N(VXV^*))=X$ for every $X\in\mathcal L(\mathbb C^2)$. A bare list with no trace-preserving channel is only an algebraic test.

## Facts & Assumptions

[F1] The tensor-span contract supplies a finite-dimensional $H$ and error span $\mathcal E$. Its pair-product condition on codes in the input block is the scalar-compression condition used in the Statement. [def-qec-prereq-ae-error-span-contract](item-def-qec-prereq-ae-error-span-contract)

[F2] Exact recovery of a finite trace-preserving Kraus channel implies its pair-product identities. [math:thm-qc-knill-laflamme-necessity](https://alphabetamath.cc/item/thm-qc-knill-laflamme-necessity)

[F3] A finite trace-preserving Kraus channel satisfying those identities has an exact decoded recovery. [math:thm-qc-knill-laflamme-explicit-recovery](https://alphabetamath.cc/item/thm-qc-knill-laflamme-explicit-recovery)

[F4] A quantum channel is a completely positive trace-preserving complex-linear map on the full operator space; a finite Kraus representation is $\mathcal N(X)=\sum_a K_aXK_a^*$. [math:def-qc-quantum-channel](https://alphabetamath.cc/item/def-qc-quantum-channel) [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)

[F5] Exact correction is the decoded-channel identity $\mathcal R\circ\mathcal N\circ\operatorname{Ad}_V=\operatorname{id}$ on the full logical operator space, with $\operatorname{Ad}_V(X)=VXV^*$. [math:def-qc-exact-recovery-of-a-quantum-code](https://alphabetamath.cc/item/def-qc-exact-recovery-of-a-quantum-code)

[F6] Adjoints are additive and conjugate-homogeneous and reverse compatible compositions. [math:prop-adjoint-algebra](https://alphabetamath.cc/item/prop-adjoint-algebra)

[F7] For a finite-dimensional isometric encoding into $H$, $P=VV^*$ is the code projector and $V^*V=I$; the encoding and decoded recovery have the types used here. [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

## Proof

**Given:** The finite-dimensional objects, isometry, and pair-product formulation in the Statement.

**Goal:** Establish the spanning-list equivalence and the qualified channel implications.

1.1 By [F7], $P=VV^*$ and $V^*V=I_2$. Thus $PT_a^*T_bP=c_{ab}P$ and $V^*T_a^*T_bV=c_{ab}I_2$ are equivalent by multiplying respectively by $V^*,V$ or $V,V^*$. If the latter identities hold and $E=\sum_a x_aT_a$, $F=\sum_b y_bT_b$, [F6] gives $V^*E^*FV=\sum_{a,b}\overline{x_a}y_bc_{ab}I_2$, so multiplication by $V,V^*$ gives the pair-product condition for $(V,\mathcal E)$. Conversely, that condition applies to every $T_a,T_b\in\mathcal E$. This proves the spanning-list equivalence, using no restriction of $\operatorname{im}V$ to the input spin block. The same expansion applies to the linear span of any finite operator family on $H$. [given, F1, F6, F7, algebra]

2.1 For a finite Kraus channel with Kraus family inside $\mathcal E$, step 1.1 gives all scalar pair-product identities. The finite-dimensional channel and encoding meet [F3]'s hypotheses: the channel is trace preserving on the full operator space by [F4], and the logical space is the nonzero space $\mathbb C^2$. Hence [F3] gives a completely positive trace-preserving decoded recovery, which is exact in the sense of [F5]. Conversely [F2] gives the scalar identities for the Kraus family of any exactly recoverable finite Kraus channel on $H$. The expansion in step 1.1 extends them to its Kraus span, and hence to $\mathcal E$ if the two spans agree. None of these implications assigns a channel to an arbitrary spanning list. [F2, F3, F4, F5, F7, step 1.1] ∎

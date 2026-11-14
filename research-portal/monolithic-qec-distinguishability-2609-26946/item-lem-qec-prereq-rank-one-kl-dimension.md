---
title: Dimensional boundary of a rank-one KL obstruction
status: published
research_item: lem-qec-prereq-rank-one-kl-dimension
dependency_level: 1
---

## Prerequisites

- [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)
- [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)
- [math:def-adjoint-of-a-linear-map-between-inner-product-spaces](https://alphabetamath.cc/item/def-adjoint-of-a-linear-map-between-inner-product-spaces)
- [math:thm-qc-knill-laflamme-necessity](https://alphabetamath.cc/item/thm-qc-knill-laflamme-necessity)


## Statement

Let $H_L,H_P,H_O$ be finite-dimensional complex inner-product spaces, with inner products linear in the first argument, and let $V:H_L\to H_P$ be an isometry. Write $P=VV^*$ for the orthogonal projector onto the code $V(H_L)$, and suppose $\dim H_L\geq 2$. Let a channel $\mathcal N:\mathcal L(H_P)\to\mathcal L(H_O)$ be exactly correctable on this code and have a finite Kraus representation containing the nonzero operator $E:H_P\to H_O$ given by $Ex=\langle x,s\rangle f$ for vectors $s\in H_P$ and $f\in H_O$. Then $Ps=0$.

The dimension hypothesis is essential: in dimension one, exact correctability and the same rank-one form need not imply $Ps=0$.

## Facts & Assumptions

[F1] The code projector is $P=VV^*$, and exact correctability means that a decoded recovery channel composed with the noise and encoding is the identity on the logical operator space. [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[F2] A finite Kraus representation has the form $\mathcal N(X)=\sum_a E_aXE_a^*$ for every input operator $X$. [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)

[F3] The adjoint is characterized by $\langle Tx,y\rangle=\langle x,T^*y\rangle$. [math:def-adjoint-of-a-linear-map-between-inner-product-spaces](https://alphabetamath.cc/item/def-adjoint-of-a-linear-map-between-inner-product-spaces)

[F4] Exact correction of a finite-dimensional isometric code for a channel with finite Kraus operators $E_a$ implies $PE_a^*E_bP=C_{ab}P$ for scalars $C_{ab}$. [math:thm-qc-knill-laflamme-necessity](https://alphabetamath.cc/item/thm-qc-knill-laflamme-necessity)

## Proof

**Given:** The finite-dimensional isometric code, its exact recovery, and a finite Kraus family containing the stated nonzero $E$.

**Goal:** Prove $Ps=0$ and exhibit the stated one-dimensional boundary.

1.1 By [F4], applied to the index of $E$ twice, $PE^*EP=cP$ for a scalar $c$. By [F3] and the displayed formula for $E$, for every $x\in H_P$ one has $PE^*EPx=\|f\|^2\langle x,Ps\rangle Ps$. Thus the image of $PE^*EP$ lies in the span of $Ps$, which has dimension at most one. [given, F3, F4, algebra]

2.1 The image of $P$ is the code and has dimension at least two, so $cP$ cannot have image of dimension at most one unless $c=0$. Hence $PE^*EP=0$. Evaluating its quadratic form at $s$ gives $0=\|f\|^2\|Ps\|^4$. Since $E$ is nonzero, $f\ne 0$, and therefore $Ps=0$. [given, step 1.1, algebra]

3.1 For the boundary, take all three spaces to be $\mathbb C$, let $V=P=I$, and let $\mathcal N$ be the identity channel with its single Kraus operator $E=I$. With $s=f=1$, the stated rank-one formula holds, the identity channel is its own decoder, and $Ps=1\ne 0$. This establishes the claimed one-dimensional exception. [F1, F2, construct, algebra] ∎

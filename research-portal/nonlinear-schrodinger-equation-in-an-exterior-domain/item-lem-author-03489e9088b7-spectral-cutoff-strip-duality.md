---
title: Spectral cutoff dual tests and the exact interpolation lower bound
status: draft
research_item: lem-author-03489e9088b7-spectral-cutoff-strip-duality
dependency_level: 2
---

## Prerequisites

- [lem-author-03489e9088b7-spectral-analytic-strip-profiles](item-lem-author-03489e9088b7-spectral-analytic-strip-profiles)
- [math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus)
- [math:thm-hadamard-three-lines](https://alphabetamath.cc/item/thm-hadamard-three-lines)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space)
- [math:def-symmetric-self-adjoint-and-essentially-self-adjoint](https://alphabetamath.cc/item/def-symmetric-self-adjoint-and-essentially-self-adjoint)
- [math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces](https://alphabetamath.cc/item/thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces)


## Statement

Assume AC. Let $T\ge I$ be self-adjoint on a nonzero complex Hilbert space $K$, with first-variable-linear inner product, and use the admissible strip class for $(K,D(T))$ and the exact domain norm $\|Tv\|_K$. If $F$ is admissible and $M_j=\sup_t\|F(j+it)\|_{X_j}$, then $F(\theta)\in D(T^\theta)$ and $\|T^\theta F(\theta)\|\le M_0^{1-\theta}M_1^\theta$, for $0<\theta<1$. Thus $[K,D(T)]_\theta=D(T^\theta)$ isometrically, including for the strip convention with vanishing boundary values.

## Facts & Assumptions

[F1] The strip class, sum norm, complex-power convention and exact upper inequality are as defined in the spectral-profile lemma [lem-author-03489e9088b7-spectral-analytic-strip-profiles](item-lem-author-03489e9088b7-spectral-analytic-strip-profiles).

[F2] Spectral cutoffs, multiplier norm integrals and monotone convergence characterize the domain of T to the power theta [math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus).

[F3] Scalar three-lines applies to bounded continuous scalar strip functions holomorphic in the interior, including zero endpoint bounds [math:thm-hadamard-three-lines](https://alphabetamath.cc/item/thm-hadamard-three-lines).

[F4] AC is retained for the spectral suppliers [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F5] A complex Hilbert space is complete for its inner-product norm [math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space). Under the assumed AC, self-adjoint means that the densely defined operator equals its adjoint, with equal domains and values [math:def-symmetric-self-adjoint-and-essentially-self-adjoint](https://alphabetamath.cc/item/def-symmetric-self-adjoint-and-essentially-self-adjoint).

[F6] For the first-variable-linear inner product, Cauchy–Schwarz gives $|\langle u,v\rangle|\le\|u\|\|v\|$ for all $u,v\in K$ [math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces](https://alphabetamath.cc/item/thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces).

## Proof

**Given:** The data and AC in the statement.

**Goal:** All asserted identifications and bounds, with the stated exact norms.

1.1 Let $P_N=E_T([1,N])$, $h\in K$, and $\phi_N(z)=\langle F(z),T^{\overline z}P_Nh\rangle$. Since $T^{\overline z}P_Nh$ is norm-antiholomorphic (the logarithm is bounded on the cutoff), this is scalar holomorphic inside and continuous on $S$. By Cauchy–Schwarz its modulus is bounded on all $S$ by $N\|h\|\sup_S\|F(z)\|_K$. At $z=it$ its modulus is at most $M_0\|h\|$, since imaginary powers are unitary. At $z=1+it$, the self-adjoint multiplier product gives $\phi_N(1+it)=\langle TF(1+it),T^{-it}P_Nh\rangle$, so the bound is $M_1\|h\|$. All scalar three-lines hypotheses, including boundedness throughout the strip rather than just the boundary, have now been verified. [F1, F2, F3, F4, F5, F6]

2.1 Three-lines yields $|\langle T^\theta P_NF(\theta),h\rangle|\le M_0^{1-\theta}M_1^\theta\|h\|$. Taking $h$ to be the normalized vector on the left when it is nonzero gives $\|T^\theta P_NF(\theta)\|\le M_0^{1-\theta}M_1^\theta$. The squares of these norms increase to $\int_{[1,\infty)}\lambda^{2\theta}\,d(E_T)_{F(\theta)}$. Their uniform bound makes this integral finite; the exact Borel-calculus domain formula proves the membership and inequality. Taking the infimum over $F$ gives the lower inequality; the upper inequality from the profile lemma proves equality, and hence definiteness and completeness of this interpolation norm. No density assertion about analytic functions and no preexisting operator interpolation theorem is used. [F1, F2, F3, F5, step 1.1] ∎

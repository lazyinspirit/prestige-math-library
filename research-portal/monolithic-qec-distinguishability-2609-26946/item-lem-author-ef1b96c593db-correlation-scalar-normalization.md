---
title: A scalar normalization survives a two-point functional
status: draft
research_item: lem-author-ef1b96c593db-correlation-scalar-normalization
dependency_level: 0
---

## Prerequisites

- [math:def-linear-map](https://alphabetamath.cc/item/def-linear-map)
- [math:def-vector-space](https://alphabetamath.cc/item/def-vector-space)
- [math:def-balanced-and-bilinear-maps](https://alphabetamath.cc/item/def-balanced-and-bilinear-maps)
- [math:lem-nonnegative-square-root-exists-and-unique](https://alphabetamath.cc/item/lem-nonnegative-square-root-exists-and-unique)
- [math:def-complete-ordered-real-field](https://alphabetamath.cc/item/def-complete-ordered-real-field)
- [math:cor-cauchy-reals-lub-complete](https://alphabetamath.cc/item/cor-cauchy-reals-lub-complete)
- [math:def-complex-numbers-and-arithmetic](https://alphabetamath.cc/item/def-complex-numbers-and-arithmetic)
- [math:thm-complex-numbers-form-a-field](https://alphabetamath.cc/item/thm-complex-numbers-form-a-field)


## Statement

Let $\mathcal A$ be a complex vector space with a complex-bilinear multiplication $\mathcal A\times\mathcal A\to\mathcal A$, written by juxtaposition; no associativity or multiplicative identity is required. Let $\ell:\mathcal A\to\mathbb C$ and $\tau_t:\mathcal A\to\mathcal A$ be complex-linear maps, where $t$ is an arbitrary fixed label. For a real number $\gamma>0$, let $\sqrt\gamma$ denote its unique nonnegative real square root. Given $F_1,F_2\in\mathcal A$, define $B_j=-(\sqrt\gamma)^{-1}F_j$ for $j=1,2$. Then

$$\ell(\tau_t(B_1)B_2)=\gamma^{-1}\ell(\tau_t(F_1)F_2).$$

In particular, for $F\in\mathcal A$ and $B=-F/\sqrt\gamma$, one has $\ell(\tau_t(B)B)=\gamma^{-1}\ell(\tau_t(F)F)$. These identities require no limiting operation or convention for the time coordinate.

## Facts & Assumptions

**Given:** The complex vector space and its bilinear product, the two complex-linear maps, the positive real number $\gamma$, and the elements $F_1,F_2$ specified in the Statement.

[F1] Scalar multiplication in a complex vector space is closed and satisfies $a(bu)=(ab)u$. [math:def-vector-space](https://alphabetamath.cc/item/def-vector-space)

[F2] A complex-linear map preserves scalar multiplication and finite sums. [math:def-linear-map](https://alphabetamath.cc/item/def-linear-map)

[F3] A complex-bilinear product is complex-linear in each argument separately. [math:def-balanced-and-bilinear-maps](https://alphabetamath.cc/item/def-balanced-and-bilinear-maps)

[F4] In a Dedekind-complete ordered field, every $x\geq0$ has a unique $r\geq0$ with $r^2=x$. [math:lem-nonnegative-square-root-exists-and-unique](https://alphabetamath.cc/item/lem-nonnegative-square-root-exists-and-unique)

[F5] The real numbers in their Cauchy-sequence realization form a complete ordered field: every nonempty bounded-above subset has a least upper bound. Thus they satisfy the Dedekind-complete ordered-field hypotheses of [F4]. [math:cor-cauchy-reals-lub-complete](https://alphabetamath.cc/item/cor-cauchy-reals-lub-complete) [math:def-complete-ordered-real-field](https://alphabetamath.cc/item/def-complete-ordered-real-field)

[F6] The complex numbers are the field $\mathbb C=\mathbb R[x]/(x^2+1)$, with the constant-class embedding $\iota:\mathbb R\to\mathbb C$. This embedding is injective and preserves addition, multiplication and the identity. Real scalars in complex scalar actions are identified with their images under $\iota$. [math:def-complex-numbers-and-arithmetic](https://alphabetamath.cc/item/def-complex-numbers-and-arithmetic) [math:thm-complex-numbers-form-a-field](https://alphabetamath.cc/item/thm-complex-numbers-form-a-field)

## Proof

**Goal:** Prove the two-component identity and its equal-component specialization.

1.1 By [F5], the real field satisfies the hypotheses of [F4], so $r=\sqrt\gamma$ exists and satisfies $r\geq0$ and $r^2=\gamma$. Since $\gamma>0$, $r=0$ would imply $\gamma=0$, so $r>0$. In the real field $a=-r^{-1}$ is therefore defined and $a^2=(r^2)^{-1}=\gamma^{-1}$. By [F6], $\iota(r)\iota(r^{-1})=\iota(1)=1$ and $\iota(r)\neq0$, so the real inverse maps to the complex inverse. Preservation of addition and multiplication also gives $\iota(a)^2=\iota(\gamma^{-1})$. With the stated identification this is $a^2=\gamma^{-1}$ in $\mathbb C$, and $B_j=aF_j$ belongs to $\mathcal A$ by [F1]. [given, F1, F4, F5, F6, algebra]

2.1 By [F2], $\tau_t(B_1)=a\tau_t(F_1)$. Both this element and $B_2=aF_2$ lie in $\mathcal A$. Applying [F3] separately in the two product arguments and composing the scalar actions by [F1] gives $\tau_t(B_1)B_2=a^2\tau_t(F_1)F_2=\gamma^{-1}\tau_t(F_1)F_2$, an equality in $\mathcal A$. [F1, F2, F3, step 1.1, algebra]

3.1 Apply $\ell$ to the equality in step 2.1 and use [F2] to obtain $\ell(\tau_t(B_1)B_2)=\gamma^{-1}\ell(\tau_t(F_1)F_2)$. Taking $F_1=F_2=F$ gives the stated diagonal identity. The argument is algebraic for each fixed label $t$, so it involves neither limits nor any time-coordinate convention. [F2, step 2.1, algebra] ∎

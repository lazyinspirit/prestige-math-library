---
title: Exact scale interpolation and endpoint operator transport
status: published
research_item: lem-author-03489e9088b7-exact-scale-operator-interpolation
dependency_level: 3
---

## Prerequisites

- [lem-author-03489e9088b7-spectral-cutoff-scale-identifications](item-lem-author-03489e9088b7-spectral-cutoff-scale-identifications)
- [lem-author-03489e9088b7-spectral-analytic-strip-profiles](item-lem-author-03489e9088b7-spectral-analytic-strip-profiles)
- [lem-author-03489e9088b7-spectral-cutoff-strip-duality](item-lem-author-03489e9088b7-spectral-cutoff-strip-duality)
- [math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space)
- [math:def-completion-of-a-normed-space](https://alphabetamath.cc/item/def-completion-of-a-normed-space)
- [math:def-symmetric-self-adjoint-and-essentially-self-adjoint](https://alphabetamath.cc/item/def-symmetric-self-adjoint-and-essentially-self-adjoint)


## Statement

Assume AC. Let $H,K$ be complex Hilbert spaces, possibly zero, with inner products linear in the first variable. Let $A\ge I$ and $B\ge I$ be positive self-adjoint operators on $H$ and $K$, respectively. Form the completed spectral scales $H_A^s$ and $K_B^s$, $s\in\mathbb R$, by completing $D(A^\infty)=\bigcap_{n\ge1}D(A^n)$ and $D(B^\infty)=\bigcap_{n\ge1}D(B^n)$ in the norms $\|A^{s/2}u\|_H$ and $\|B^{s/2}v\|_K$, respectively, and use the admissible complex strip interpolation norm. For any real $a,b$ and $0<\theta<1$ there is the canonical isometric identity $[H_A^a,H_A^b]_\theta=H_A^{(1-\theta)a+\theta b}$. For real $a_0,a_1,b_0,b_1$, a consistent complex-linear operator $L$ on $H_A^{a_0}+H_A^{a_1}$ whose restrictions map $H_A^{a_j}$ boundedly to $K_B^{b_j}$ with bounds $M_j\ge0$ satisfies $\|Lu\|_{K_B^{(1-\theta)b_0+\theta b_1}}\le M_0^{1-\theta}M_1^\theta\|u\|_{H_A^{(1-\theta)a_0+\theta a_1}}$ for every $u\in H_A^{(1-\theta)a_0+\theta a_1}$. Consistency means the restrictions agree on the intersection and define one map into the target sum. The zero-bound convention is $0^t=0$ for $t>0$.

## Facts & Assumptions

[F1] Unitary scale shifts identify each ordered scale couple with a pivot and a power domain, with exact endpoint norms [lem-author-03489e9088b7-spectral-cutoff-scale-identifications](item-lem-author-03489e9088b7-spectral-cutoff-scale-identifications).

[F2] The admissible strip convention and its explicit analytic profiles define the interpolation space [lem-author-03489e9088b7-spectral-analytic-strip-profiles](item-lem-author-03489e9088b7-spectral-analytic-strip-profiles).

[F3] The cutoff dual argument supplies the isometric identity for a pivot and a positive self-adjoint operator domain [lem-author-03489e9088b7-spectral-cutoff-strip-duality](item-lem-author-03489e9088b7-spectral-cutoff-strip-duality).

[F4] Positive real powers of a positive self-adjoint operator are self-adjoint and satisfy the exact spectral multiplier domains. On the zero Hilbert space all spectral multipliers are the unique full-domain operator [math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus).

[F5] AC is assumed for the underlying spectral calculus [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F6] A complex Hilbert space is a complex inner-product space complete in its induced norm [math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space).

[F7] A completion of a normed space is a Banach space with a dense linear isometric embedding of that space [math:def-completion-of-a-normed-space](https://alphabetamath.cc/item/def-completion-of-a-normed-space).

[F8] A densely defined operator is self-adjoint when it equals its adjoint, with the same domain and values [math:def-symmetric-self-adjoint-and-essentially-self-adjoint](https://alphabetamath.cc/item/def-symmetric-self-adjoint-and-essentially-self-adjoint). The countable-choice hypothesis of this definition follows from the assumed AC: apply AC to the family of values of a sequence of nonempty sets and compose the choice function with that sequence [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

## Proof

**Given:** The data and AC in the statement.

**Goal:** All asserted identifications and bounds, with the stated exact norms.

1.1 On the zero Hilbert space the unique full-domain operator is self-adjoint, and all its powers act on $\{0\}$ by [F4]. Thus its smooth core is $\{0\}$. Its completion at any real scale index is again $\{0\}$: the dense isometric image of the zero space consists only of zero, and a nonzero vector of norm $r>0$ would have a ball of radius $r/2$ disjoint from that image. For the zero endpoint couple the only strip function is zero, so its interpolation space is $\{0\}$ with its unique norm. This proves the scale identity whenever $H=\{0\}$, and the same reasoning applies to $K$. If either $H=\{0\}$ or $K=\{0\}$, the operator $L$ has zero image and the claimed estimate is $0\le0$ or $0\le M_0^{1-\theta}M_1^\theta\|u\|$, respectively. Hence the operator estimate is also established in every such case. For the remaining arguments assume $H,K\ne\{0\}$. [given, F2, F4, F6, F7, F8]

1.2 Suppose $a\le b$, and write $d=(b-a)/2$. The unitary $J_a$ maps the endpoint couple isometrically and consistently to $(H,D(T))$ for $T=A^d\ge I$ with norm $\|Tv\|$. The Borel calculus gives self-adjointness of $T$ and $T^\theta=A^{d\theta}$. Applying this common map and its inverse to strip functions preserves holomorphy, continuity, decay and both endpoint norms. The pivot/domain identity therefore gives $[H_A^a,H_A^b]_\theta=H_A^{a+2d\theta}$ with identical norms. If $a=b$, use $T=I$. If $a>b$, $F(z)\mapsto F(1-z)$ is an isometry between the admissible classes with swapped endpoints, and evaluates at $1-\theta$, proving the same formula. [F1, F2, F3, F4, F5, F6, F8]

2.1 Endpoint boundedness makes $L$ bounded between the sum spaces: for each decomposition $u=u_0+u_1$, its target sum norm is at most $M_0\|u_0\|+M_1\|u_1\|$, so at most $\max(M_0,M_1)\|u\|_{\mathrm{sum}}$ after infimizing. Thus composition with $L$ preserves sum-valued holomorphy and continuity; endpoint boundedness preserves boundary continuity and decay. For $\delta>0$ put $m_j=M_j+\delta>0$. If $F(\theta)=u$, the strip function $G(z)=(m_0/m_1)^{z-\theta}LF(z)$ is admissible in the target, has $G(\theta)=Lu$, and has boundary norms at most $m_0^{1-\theta}m_1^\theta\|F\|_{\mathcal F}$: on boundary zero multiply $M_0$ by $(m_0/m_1)^{-\theta}$ and on boundary one multiply $M_1$ by $(m_0/m_1)^{1-\theta}$. The scalar factor is bounded on the strip, since the ratio is positive real. Taking the infimum in $F$ and then $\delta\downarrow0$ gives the asserted norm bound, including $M_j=0$. The target and source norms in this calculation are exactly those in step 1.2. [F1, F2, F3, step 1.2] ∎

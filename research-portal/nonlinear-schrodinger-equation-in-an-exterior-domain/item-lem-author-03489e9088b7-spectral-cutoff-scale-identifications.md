---
title: Spectral cutoff cores and unitary identifications of completed scales
status: published
research_item: lem-author-03489e9088b7-spectral-cutoff-scale-identifications
dependency_level: 0
---

## Prerequisites

- [math:thm-spectral-theorem-for-unbounded-self-adjoint-operators](https://alphabetamath.cc/item/thm-spectral-theorem-for-unbounded-self-adjoint-operators)
- [math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:lem-spectral-form-domain-and-core-of-a-semibounded-operator](https://alphabetamath.cc/item/lem-spectral-form-domain-and-core-of-a-semibounded-operator)
- [math:def-completion-of-a-normed-space](https://alphabetamath.cc/item/def-completion-of-a-normed-space)
- [math:thm-metric-completion-carries-a-unique-banach-space-structure](https://alphabetamath.cc/item/thm-metric-completion-carries-a-unique-banach-space-structure)
- [math:thm-completion-of-an-inner-product-space-is-hilbert](https://alphabetamath.cc/item/thm-completion-of-an-inner-product-space-is-hilbert)
- [math:thm-extension-of-a-bounded-map-from-a-dense-subspace](https://alphabetamath.cc/item/thm-extension-of-a-bounded-map-from-a-dense-subspace)
- [math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space)
- [math:def-symmetric-self-adjoint-and-essentially-self-adjoint](https://alphabetamath.cc/item/def-symmetric-self-adjoint-and-essentially-self-adjoint)
- [math:def-projection-valued-measure](https://alphabetamath.cc/item/def-projection-valued-measure)


## Statement

Assume AC. Let $A\ge I$ be self-adjoint on a nonzero complex Hilbert space $H$, with inner product linear in the first variable and spectral measure $E$. Write $\mathcal C=D(A^\infty)=\bigcap_{n\ge1}D(A^n)$, and let $H_A^s$ be the Hilbert completion of $\mathcal C$ for $\|u\|_s=\|A^{s/2}u\|_H$, for $s\in\mathbb R$. Then $E_N=E([1,N])$ has range in $\mathcal C$ and converges to the identity at every scale level. The map $J_su=A^{s/2}u$ extends to a unitary $J_s:H_A^s\to H$. For $s\ge0$, the canonical embedding in $H$ identifies $H_A^s$ with $D(A^{s/2})$ with exactly this norm. The core powers extend to onto isometries $A^{-r/2}:H_A^s\to H_A^{s+r}$ for every real $r,s$.

The scales have canonical compatible embeddings: if $b\ge a$, the identity on $\mathcal C$ extends to a contractive injective map $H_A^b\to H_A^a$. Under $J_a$ this couple is exactly $(H,D(A^{(b-a)/2}))$, with the second norm $\|A^{(b-a)/2}v\|_H$. Any finite set of scale levels may therefore be placed in the common Hausdorff Hilbert space at their smallest index.

## Facts & Assumptions

[F1] The spectral theorem gives the PVM of a self-adjoint operator under AC [math:thm-spectral-theorem-for-unbounded-self-adjoint-operators](https://alphabetamath.cc/item/thm-spectral-theorem-for-unbounded-self-adjoint-operators).

[F2] The Borel calculus gives exact domains, closedness, products and the norm integral, including spectral truncation convergence [math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus).

[F3] AC is assumed for the spectral suppliers. Restricting AC to countable families supplies the countable-choice assumptions of the completion and extension suppliers [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F4] For a self-adjoint operator with $\langle Au,u\rangle\ge c\|u\|^2$ on $D(A)$, its spectral PVM is carried on $[c,\infty)$ [math:lem-spectral-form-domain-and-core-of-a-semibounded-operator](https://alphabetamath.cc/item/lem-spectral-form-domain-and-core-of-a-semibounded-operator).

[F5] A normed-space completion has a dense linear isometric embedding and is Banach; under countable choice such a completion exists with the compatible norm and vector-space structure [math:def-completion-of-a-normed-space](https://alphabetamath.cc/item/def-completion-of-a-normed-space) [math:thm-metric-completion-carries-a-unique-banach-space-structure](https://alphabetamath.cc/item/thm-metric-completion-carries-a-unique-banach-space-structure).

[F6] Under countable choice, the norm completion of a real or complex inner-product space has a unique extending inner product inducing its completion norm and is Hilbert [math:thm-completion-of-an-inner-product-space-is-hilbert](https://alphabetamath.cc/item/thm-completion-of-an-inner-product-space-is-hilbert).

[F7] Under countable choice, a bounded linear map from a dense normed subspace into a Banach space extends uniquely to the ambient normed space, with the same operator norm [math:thm-extension-of-a-bounded-map-from-a-dense-subspace](https://alphabetamath.cc/item/thm-extension-of-a-bounded-map-from-a-dense-subspace).

## Proof

**Given:** The data and AC in the statement.

**Goal:** All asserted identifications and bounds, with the stated exact norms.

1.1 Interpret $A\ge I$ as $\langle Au,u\rangle\ge\|u\|_H^2$ for $u\in D(A)$. Apply [F4] with $c=1$: $E(( -\infty,1))=0$. Thus all scalar spectral measures are carried on $[1,\infty)$. For every real $t$, define $A^t$ by the Borel multiplier $\lambda^t$ there, extended by $1$ below $1$; values below $1$ do not affect the operator. For $u\in\mathcal C$ every such power is defined, since an integer $m\ge1$ with $2m\ge2t$ gives $\lambda^{2t}\le\lambda^{2m}$ on this carrier. [given, F1, F2, F3, F4]

2.1 For $u\in H$ and every positive integer $k$, the norm and product formulas give $\|A^kE_Nu\|_H^2=\int_{[1,N]}\lambda^{2k}\,dE_u\le N^{2k}\|u\|_H^2$, so $E_NH\subset\mathcal C$. Also $\|(I-E_N)u\|_H^2=E_u((N,\infty))\to0$, proving density of $\mathcal C$ in $H$. For $u\in\mathcal C$ and real $s$, the integrable measure $\lambda^s\,dE_u$ has tails tending to zero, so $\|(I-E_N)u\|_s^2=\int_{(N,\infty)}\lambda^s\,dE_u\to0$. The same formulas give $\|E_Nu\|_s\le\|u\|_s$. [F1, F2, step 1.1]

3.1 The linear space $\mathcal C$ has the first-linear Hermitian pairing $\langle u,v\rangle_s=\langle A^{s/2}u,A^{s/2}v\rangle_H$. It is positive definite: if its diagonal is zero, $\int_{[1,\infty)}\lambda^s\,dE_u=0$; positivity of $\lambda^s$ implies $E_u([1,\infty))=0$, hence $u=0$. Its norm is exactly $\|u\|_s$. Therefore [F5] and [F6], with countable choice from [F3], construct the Hilbert completion $H_A^s$ with dense embedded core, which we identify with $\mathcal C$. Apply [F7] to each core contraction $E_N:\mathcal C\to H_A^s$. For $x\in H_A^s$ and $u\in\mathcal C$, the extension satisfies $\|(I-E_N)x\|_s\le2\|x-u\|_s+\|(I-E_N)u\|_s$. First approximate $x$ by $u$, then use step 2.1; this proves strong convergence on every completed scale. [F2, F3, F5, F6, F7, step 1.1, step 2.1]

4.1 The map $J_s:\mathcal C\to H$, $J_su=A^{s/2}u$, is linear and isometric. By [F7] it extends to $H_A^s$, and passage to limits preserves the norm and pairing. Its range is closed: if $J_sx_n$ converges in $H$, isometry makes $x_n$ Cauchy; completeness gives $x_n\to x$ and its image converges to $J_sx$. Its range contains $E_NH$: if $v=E_Nv$, then $u=A^{-s/2}v$ has spectral support in $[1,N]$, lies in $\mathcal C$, and $J_su=v$ by the product formula. Step 2.1 makes the union of these cutoff ranges dense in $H$, so $J_s$ is onto and unitary. The core identity $J_sE_N=E_NJ_s$ extends by continuity; since $A^{-s/2}E_NH\subset\mathcal C$, it also identifies every completed cutoff range with core vectors. [F2, F7, step 1.1, step 2.1, step 3.1]

4.2 For any real $r$ and $u\in\mathcal C$, $A^{-r/2}u$ belongs to $\mathcal C$: for each integer $k\ge0$, choose an integer $m\ge1$ with $2m\ge2k-r$; then the relevant moment $\int_{[1,\infty)}\lambda^{2k-r}\,dE_u$ is bounded by $\int_{[1,\infty)}\lambda^{2m}\,dE_u<\infty$. The same argument with $-r$ shows that $A^{r/2}$ preserves $\mathcal C$, and the product formula makes these core maps inverse. Moreover, $\|A^{-r/2}u\|_{s+r}^2=\int_{[1,\infty)}\lambda^s\,dE_u=\|u\|_s^2$. Extend both core maps using [F7] between the Hilbert completions. Norm equality passes to limits, and their compositions are identities by density and uniqueness of extension. They are thus inverse onto isometries at all real indices. [F2, F7, step 1.1, step 3.1]

5.1 For $s\ge0$, $A^{-s/2}$ is a bounded contraction on $H$ and is injective, since its multiplier is strictly positive on the spectral carrier. The map $\iota_s=A^{-s/2}J_s:H_A^s\to H$ is therefore a contractive injection and equals the identity on $\mathcal C$, so it is the canonical extension of that identity. The exact product-domain formula gives $\operatorname{ran}A^{-s/2}=D(A^{s/2})$: every $v\in H$ has $A^{-s/2}v\in D(A^{s/2})$ and $A^{s/2}A^{-s/2}v=v$, while every $u\in D(A^{s/2})$ satisfies $u=A^{-s/2}A^{s/2}u$. Surjectivity of $J_s$ gives the asserted range of $\iota_s$, and $\|A^{s/2}\iota_s x\|_H=\|J_sx\|_H=\|x\|_s$. Spectral truncations converge in this exact domain norm by its integrable spectral tails, so no graph-norm factor is introduced. [F2, F7, step 1.1, step 2.1, step 4.1]

6.1 If $b\ge a$, then $\lambda^a\le\lambda^b$ on $[1,\infty)$, so the identity on $\mathcal C$ extends by [F7] to a contraction $i_{b,a}:H_A^b\to H_A^a$. On the core, and hence on the completions, $J_ai_{b,a}=A^{(a-b)/2}J_b$. The multiplier $A^{(a-b)/2}$ is injective and has range $D(A^{(b-a)/2})$ by the inverse-product argument of step 5.1. Therefore $i_{b,a}$ is injective, and for $v=J_ai_{b,a}x$ one has $\|A^{(b-a)/2}v\|_H=\|J_bx\|_H=\|x\|_b$. This proves precisely the claimed couple and its second norm. For $c\ge b\ge a$, $i_{b,a}i_{c,b}=i_{c,a}$ because both maps agree on the dense core; consequently a finite collection embeds compatibly in the Hilbert space at its minimum index, which is Hausdorff. [F2, F7, step 1.1, step 3.1, step 4.1, step 5.1] ∎

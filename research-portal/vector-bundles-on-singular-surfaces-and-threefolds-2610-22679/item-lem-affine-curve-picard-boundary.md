---
title: Picard group of an affine curve through its boundary
status: published
research_item: lem-affine-curve-picard-boundary
dependency_level: 2
---

PDF p. 13: Divisibility of the normalization Picard group

## Prerequisites

- [lem-author-4057f3195e4f-divisor-class-localization](item-lem-author-4057f3195e4f-divisor-class-localization)
- [lem-author-4057f3195e4f-transfer-exactness](item-lem-author-4057f3195e4f-transfer-exactness)
- [lem-author-4057f3195e4f-degree-adjustment](item-lem-author-4057f3195e4f-degree-adjustment)
- [lem-author-4057f3195e4f-curve-geometric-input](item-lem-author-4057f3195e4f-curve-geometric-input)
- [math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)
- [math:cor-weak-nullstellensatz-algebraically-closed-coordinate-form](https://alphabetamath.cc/item/cor-weak-nullstellensatz-algebraically-closed-coordinate-form)

## Statement
Let $k$ be algebraically closed and let $C$ be a smooth connected affine curve over $k$. Then a smooth projective completion $j:C\hookrightarrow\overline C$ exists and its boundary $B=\overline C\setminus C$ is a nonempty finite set of closed points. For any such completion, the sequence $\bigoplus_{b\in B}\mathbb Z[b]\to\operatorname{Pic}(\overline C)\to\operatorname{Pic}(C)\to0$ is exact, the first map sending $[b]$ to $[\mathcal O_{\overline C}(b)]$ and the second being restriction. Each $b$ has degree one. Consequently the degree-zero Picard group $\operatorname{Pic}^0(\overline C)(k)$ surjects onto $\operatorname{Pic}(C)$.

Here a curve means a nonempty finite-type scheme of pure dimension one; smoothness is over $k$. A completion means a dense open immersion into a smooth projective integral curve. A line bundle is a sheaf locally isomorphic to the structure sheaf; its isomorphism classes form the Picard group under tensor product. The degree of a closed point is the dimension of its residue field over $k$. The degree-zero Picard group is the kernel of the degree homomorphism on line-bundle classes, identified with the $k$-points of the degree-zero Picard variety by the cited geometric input.

## Facts & Assumptions

[F1] A regular integral separated finite-type curve over a perfect field has a smooth projective completion with finite closed-point boundary; if affine, the boundary is nonempty. For smooth integral curves, divisor classes identify naturally with Picard classes and restriction deletes coefficients outside the open. On a smooth projective curve, degree is additive, a point class has its residue-field degree, and the degree-zero kernel is the group of $k$-points of the degree-zero Picard variety ([lem-author-4057f3195e4f-curve-geometric-input](item-lem-author-4057f3195e4f-curve-geometric-input)).

[F2] If $d:K\to\mathbb Z^{(S)}$ is a homomorphism and $B\subseteq S$, restriction induces an exact sequence $\mathbb Z^{(B)}\to\operatorname{coker}(d)\to\operatorname{coker}(r d)\to0$ ([lem-author-4057f3195e4f-divisor-class-localization](item-lem-author-4057f3195e4f-divisor-class-localization)). Exactness transports across compatible isomorphisms ([lem-author-4057f3195e4f-transfer-exactness](item-lem-author-4057f3195e4f-transfer-exactness)).

[F3] If a surjective homomorphism $q:A\to D$ kills an element of degree one for a homomorphism $\deg:A\to\mathbb Z$, then $q(\ker\deg)=D$ ([lem-author-4057f3195e4f-degree-adjustment](item-lem-author-4057f3195e4f-degree-adjustment)).

[F4] Closed points of a finite-type scheme over an algebraically closed field have residue field $k$, by the weak Nullstellensatz on affine charts ([math:cor-weak-nullstellensatz-algebraically-closed-coordinate-form](https://alphabetamath.cc/item/cor-weak-nullstellensatz-algebraically-closed-coordinate-form)). Picard groups and restriction use line bundles and tensor product ([math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)).

**Given:** $k$ and $C$ as stated.

**Goal:** Prove existence and nonemptiness of the boundary, exactness, and the degree-zero surjection.

## Proof

1.1 An algebraically closed field is perfect. Smoothness makes $C$ regular. Its regular local rings are domains, so distinct irreducible components cannot meet; finite type gives finitely many components, hence connectedness makes $C$ integral. Since $C$ is affine over $k$, it is separated over $k$. Apply [F1] to obtain a smooth projective integral completion with finite boundary. It is nonempty because an affine positive-dimensional curve is not proper. The same argument proves nonemptiness for any completion in the statement. [F1, given]

2.1 Let $S$ be the closed points of $\overline C$ and $K=k(\overline C)^\times$, the multiplicative group of nonzero rational functions. The principal-divisor homomorphism $d:K\to\mathbb Z^{(S)}$ assigns each function its finite sum of orders at closed points. The open curve has the same function field, and its principal-divisor homomorphism is restriction of $d$ to $S\setminus B$. Apply [F2], then use the compatible divisor-class and Picard isomorphisms of [F1]. The boundary basis element $[b]$ maps to $[\mathcal O_{\overline C}(b)]$, giving the exact sequence in the statement. [F1, F2, step 1.1]

3.1 By [F4], every $b\in B$ has residue field $k$, hence degree one; [F1] gives $\deg[\mathcal O_{\overline C}(b)]=1$. Exactness in step 2.1 shows that this class lies in the kernel of restriction. [F1, F4, step 1.1, step 2.1]

4.1 Restriction is surjective by step 2.1. Applying [F3] with the boundary class from step 3.1 shows that its restriction from the degree-zero kernel is still surjective. The identification in [F1] gives the stated map from $\operatorname{Pic}^0(\overline C)(k)$. [F1, F3, step 2.1, step 3.1] ∎

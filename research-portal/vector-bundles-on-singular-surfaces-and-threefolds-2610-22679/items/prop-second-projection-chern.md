---
id: prop-second-projection-chern
kind: proposition
title: Second projection is minus second Chern class
status: published
domain: mathematics
deps:
  - lem-author-9b6cb358ddc9-actual-second-fiber
  - lem-second-chern-additive
  - lem-filtered-stage-exact-sequence
  - def-motivic-filtration
  - lem-author-e216acade157-low-dimensional-quotient
  - math:def-axiom-of-choice
dependency_roles:
  lem-author-9b6cb358ddc9-actual-second-fiber: mathematical-premise
  lem-second-chern-additive: mathematical-premise
  lem-filtered-stage-exact-sequence: mathematical-premise
  def-motivic-filtration: mathematical-premise
  lem-author-e216acade157-low-dimensional-quotient: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 27
---

## Statement
Assume AC and the fixed site/universe bounds. Let $k$ be algebraically closed and $X$ a normal qcqs $k$-scheme. For perfect-complex $K$-theory, the actual second-stage projection transports uniquely to its image subgroup, and
$$p_2:F^2_{\mathrm{mot}}K_0(X)\longrightarrow H^{4,2}_{\mathrm{mot}}(X,\mathbb Z),\qquad p_2(\alpha)=-c_2(\alpha).$$
Its kernel is $F^3_{\mathrm{mot}}K_0(X)$. No finite-type or global bundle-representation hypothesis is imposed on this equality or kernel assertion. If, additionally, $X$ is finite type and $\dim X\leq3$, it induces $F^2/F^3\cong H^{4,2}_{\mathrm{mot}}(X,\mathbb Z)$ with this sign.

## Facts & Assumptions
**Given:** The normal qcqs scheme and the actual motivic stages and perfect operations.

**Goal:** Preserve the original scope, actual map, sign, kernel, and the existing finite-type low-dimensional supplement.

[F1] [[lem-author-9b6cb358ddc9-actual-second-fiber]] identifies the actual second-layer map with minus the actual second Chern map as derived sheaf maps on every qcqs field-scheme. Its determinant-fiber retraction also proves injectivity of the second-stage augmentation on $\pi_0$, without finite-type assumptions.

[F2] [[def-motivic-filtration]] defines image groups and their compatible augmentations. [[lem-filtered-stage-exact-sequence]] supplies exactness of the consecutive stage sequence. [[lem-second-chern-additive]] gives additivity in this full scope.

[F3] [[lem-author-e216acade157-low-dimensional-quotient]] gives the quotient isomorphism for normal finite-type schemes of dimension at most three.

[F4] [[math:def-axiom-of-choice]] states the Choice assumption inherited from the actual filtration, section and Chern-operation constructions in [F1]–[F3].

## Proof
1.1 By [F1] the second-stage augmentation is injective on $\pi_0$, hence identifies that group with its image $F^2$. Transport the actual layer map by this isomorphism to define $p_2$. Evaluating the actual map identity of [F1] on the unique lift of any $\alpha\in F^2$ gives $p_2(\alpha)=-c_2(\alpha)$; it includes non-bundle-representable perfect classes. Additivity is also consistent with [F2]. [F1, F2, F4]

2.1 Exactness of the third-to-second stage sequence in [F2] says that the layer value of the lift is zero precisely when it comes from a third-stage class. Augmenting to $K_0$ identifies these classes exactly with the third image subgroup. Conversely any third-stage representative has zero second-layer value. Injectivity at stage two from step 1.1 therefore gives $\ker(p_2)=F^3$; no injectivity at stage three is assumed. [F2, step 1.1]

3.1 Under the additional finite-type and dimension assumptions apply [F3]. It gives surjectivity of this same actual projection, and steps 1.1–2.1 identify its sign and kernel. Thus the quotient supplement is retained without narrowing the normal qcqs equality. [F3, step 1.1, step 2.1] ∎

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
  - def-filtration-projections
  - def-article-conventions
dependency_roles:
  lem-author-9b6cb358ddc9-actual-second-fiber: mathematical-premise
  lem-second-chern-additive: mathematical-premise
  lem-filtered-stage-exact-sequence: mathematical-premise
  def-motivic-filtration: mathematical-premise
  lem-author-e216acade157-low-dimensional-quotient: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-filtration-projections: mathematical-premise
  def-article-conventions: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 30
formulation_deps:
  - def-article-conventions
  - def-motivic-filtration
  - def-filtration-projections
  - lem-author-9b6cb358ddc9-actual-second-fiber
  - lem-second-chern-additive
  - math:def-axiom-of-choice
argument_deps:
  - lem-author-9b6cb358ddc9-actual-second-fiber
  - lem-second-chern-additive
  - lem-filtered-stage-exact-sequence
  - def-motivic-filtration
  - lem-author-e216acade157-low-dimensional-quotient
  - math:def-axiom-of-choice
  - def-filtration-projections
  - def-article-conventions
---

## Statement
Assume AC and the fixed site/universe bounds. Let $k$ be algebraically closed and $X$ a normal qcqs $k$-scheme. For perfect-complex $K$-theory, the actual second-stage projection transports uniquely to its image subgroup, and
$$p_2:F^2_{\mathrm{mot}}K_0(X)\longrightarrow H^{4,2}_{\mathrm{mot}}(X,\mathbb Z),\qquad p_2(\alpha)=-c_2(\alpha).$$
Its kernel is $F^3_{\mathrm{mot}}K_0(X)$. No finite-type or global bundle-representation hypothesis is imposed on this equality or kernel assertion. If, additionally, $X$ is finite type and $\dim X\leq3$, it induces $F^2/F^3\cong H^{4,2}_{\mathrm{mot}}(X,\mathbb Z)$ with this sign.

## Facts & Assumptions
**Given:** The normal qcqs scheme and the actual motivic stages and perfect operations.

**Goal:** Preserve the original scope, actual map, sign, kernel, and the existing finite-type low-dimensional supplement.

[F1] [[lem-author-9b6cb358ddc9-actual-second-fiber]] supplies the actual-value map identity $Q_2(X)\simeq-C_2(X)i_K(X)$ on every qcqs field-scheme. Here $Q_2$ is the zeroth-space actual second-layer projection, $C_2$ is the actual perfect second Chern operation, and $i_K$ is the stage-to-$K$ augmentation. Their actual target $Y_2(X)$ has $\pi_0Y_2(X)=H^{4,2}_{\mathrm{mot}}(X,\mathbb Z)$. Use the supplier's explicit actual-value conclusion, proved in its Proof step 4.1; its separate derived-section target is not identified with these actual values. Its Proof step 1.1 establishes injectivity of the actual second-stage augmentation on $\pi_0$ by the determinant-fiber retraction and rank-fiber exactness, without finite-type assumptions.

[F2] [[def-motivic-filtration]] defines image groups and their compatible augmentations. [[lem-filtered-stage-exact-sequence]] supplies exactness of the consecutive stage sequence. [[lem-second-chern-additive]] gives additivity in this full scope.

[F3] [[lem-author-e216acade157-low-dimensional-quotient]] gives the quotient isomorphism for normal finite-type schemes of dimension at most three.

[F4] [[math:def-axiom-of-choice]] states the Choice assumption inherited from the actual filtration, section and Chern-operation constructions in [F1]–[F3], and from the stable exact-sequence construction in [F2]. Use the fixed compatible universe and smallness conventions of that exact-sequence supplier together with the site and universe bounds of the actual motivic constructions. These assumptions are retained at steps 1.1–3.1, including the exactness application in step 2.1. Universe existence is a separate size assumption, not a consequence of Choice.

[F5] [[def-article-conventions]] fixes the $k$-scheme, qcqs and Krull-dimension conventions. [[def-filtration-projections]] defines normality, finite type, the actual stage-to-graded projection and its motivic-cohomology target, and the stage-to-image transport on normal qcqs schemes over an algebraically closed field. Its notation agrees with the transport proved here. These interfaces retain the fixed site and universe assumptions of the specified constructions.

## Proof
1.1 By [F1], the actual second-stage augmentation is injective on $\pi_0$, hence identifies that group with its image $F^2$. Transport the actual layer map by this isomorphism to define $p_2$. Apply $\pi_0$ to the actual-value map identity in [F1] at $X$, whose target group is $\pi_0Y_2(X)=H^{4,2}_{\mathrm{mot}}(X,\mathbb Z)$. On the unique second-stage lift of any $\alpha\in F^2$, this gives $p_2(\alpha)=-c_2(\alpha)$, including non-bundle-representable perfect classes. Additivity is also consistent with [F2]. [F1, F2, F4, F5]

2.1 Exactness of the third-to-second stage sequence in [F2] says that the layer value of the lift is zero precisely when it comes from a third-stage class. Augmenting to $K_0$ identifies these classes exactly with the third image subgroup. Conversely any third-stage representative has zero second-layer value. Injectivity at stage two from step 1.1 therefore gives $\ker(p_2)=F^3$; no injectivity at stage three is assumed. [F2, step 1.1]

3.1 Under the additional finite-type and dimension assumptions apply [F3]. It gives surjectivity of this same actual projection, and steps 1.1–2.1 identify its sign and kernel. Thus the quotient supplement is retained without narrowing the normal qcqs equality. [F3, F5, step 1.1, step 2.1] ∎

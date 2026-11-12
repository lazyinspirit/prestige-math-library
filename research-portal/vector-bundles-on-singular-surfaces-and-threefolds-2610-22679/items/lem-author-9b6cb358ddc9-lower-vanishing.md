---
id: lem-author-9b6cb358ddc9-lower-vanishing
kind: lemma
title: The first two perfect Chern classes vanish on the third image piece in
  full scope
status: published
domain: mathematics
deps:
  - lem-author-9b6cb358ddc9-actual-second-fiber
  - def-motivic-filtration
  - lem-filtered-stage-exact-sequence
  - prop-first-chern-determinant
  - lem-author-ec13f1db88a5-global-picard-projection
  - math:def-axiom-of-choice
  - def-article-conventions
  - def-nonconnective-k-spectrum-interface
  - def-motivic-cohomology
  - thm-author-d026a7b99ace-universal-chern-space
  - lem-author-ec13f1db88a5-rank-zero-stage
  - math:def-grothendieck-universe-closure-convention
dependency_roles:
  lem-author-9b6cb358ddc9-actual-second-fiber: mathematical-premise
  def-motivic-filtration: mathematical-premise
  lem-filtered-stage-exact-sequence: mathematical-premise
  prop-first-chern-determinant: mathematical-premise
  lem-author-ec13f1db88a5-global-picard-projection: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-article-conventions: mathematical-premise
  def-nonconnective-k-spectrum-interface: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  thm-author-d026a7b99ace-universal-chern-space: mathematical-premise
  lem-author-ec13f1db88a5-rank-zero-stage: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 28
formulation_deps:
  - def-article-conventions
  - def-nonconnective-k-spectrum-interface
  - def-motivic-filtration
  - def-motivic-cohomology
  - thm-author-d026a7b99ace-universal-chern-space
  - lem-author-ec13f1db88a5-rank-zero-stage
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - prop-first-chern-determinant
argument_deps:
  - lem-author-9b6cb358ddc9-actual-second-fiber
  - def-motivic-filtration
  - lem-filtered-stage-exact-sequence
  - prop-first-chern-determinant
  - lem-author-ec13f1db88a5-global-picard-projection
  - math:def-axiom-of-choice
  - def-article-conventions
  - def-nonconnective-k-spectrum-interface
  - def-motivic-cohomology
  - thm-author-d026a7b99ace-universal-chern-space
  - lem-author-ec13f1db88a5-rank-zero-stage
  - math:def-grothendieck-universe-closure-convention
---

## Statement
Assume the Axiom of Choice and the fixed site and universe bounds of the supplied constructions. For every qcqs $k$-scheme $X$ over any field, every $\alpha\in F^3_{\rm mot}K_0(X)$ has rank zero and $c_1(\alpha)=c_2(\alpha)=0$. This uses actual stage maps and needs neither normality nor an image-stage isomorphism.

Here a $k$-scheme is a scheme with a structure morphism to $\operatorname{Spec}k$; qcqs means quasi-compact and quasi-separated. Write $K_0(X)=\pi_0K(X)$ for the specified nonconnective K-theory spectrum of perfect complexes. Put $\operatorname{Fil}^jK=F^j_{\rm mot}K$ for its supplied spectral filtration and $F^j_{\rm mot}K_0(X)=\operatorname{im}(\pi_0\operatorname{Fil}^jK(X)\to K_0(X))$. Rank means the locally constant Euler-rank function of a perfect class. For $i=1,2$, $c_i:K_0(X)\to H^{2i,i}_{\rm mot}(X,\mathbb Z)$ is the actual pointed perfect-complex Chern operation on components; its target is degree-$2i$ cohomology of the weight-$i$ motivic complex. The universe bounds are those of these same constructions, with universe existence assumed separately from Choice.

## Facts & Assumptions
[A1] Assume the Axiom of Choice as formulated in [[math:def-axiom-of-choice]] and fixed compatible Grothendieck universes in the closure convention of [[math:def-grothendieck-universe-closure-convention]], with $\omega$ in the scheme-data universe and the sites and targets in the larger universes required by the suppliers. Universe existence is a separate assumption. Choice and these bounds are inherited from the perfect K-theory and actual Chern constructions in [F0], the rank identification in [F4], the first-layer comparison in [F2] at step 1.1 and the actual second-fiber comparison in [F3] at step 2.1. The selection of the single representative below uses the image definition, not a new family of choices.

[F0] [[def-article-conventions]] fixes the category of qcqs $k$-schemes, with the explicit arbitrary-field exception in this Statement. [[def-nonconnective-k-spectrum-interface]] fixes the perfect spectrum and its homotopy groups. [[def-motivic-cohomology]] fixes the integral motivic cohomology targets. [[prop-first-chern-determinant]] fixes $c_1$ as the actual rank-reduced first-layer class on perfect $K_0$. [[thm-author-d026a7b99ace-universal-chern-space]] supplies the actual pointed second Chern operation on perfect K-spaces; $c_2$ denotes its map on components.

[F1] [[def-motivic-filtration]] defines the spectral stages, their compatible augmentations to stage zero $K$, and the nested image groups. [[lem-filtered-stage-exact-sequence]] gives the consecutive stage-to-layer fiber sequences and exactness on $\pi_0$. In particular a transition $\pi_0\operatorname{Fil}^{j+1}K(X)\to\pi_0\operatorname{Fil}^jK(X)$ followed by the graded projection is zero.

[F2] [[lem-author-ec13f1db88a5-global-picard-projection]] and [[prop-first-chern-determinant]] identify the actual first layer with determinant/first Chern on the rank-zero space for all qcqs field-schemes. On components, the first-layer value of a first-stage class is $c_1$ of its augmentation, using the supplied weight-one identification.

[F3] [[lem-author-9b6cb358ddc9-actual-second-fiber]] identifies the actual second layer with minus the actual second Chern operation in the same scope. Thus the second-layer value of a second-stage class is $-c_2$ of its augmentation.

[F4] [[lem-author-ec13f1db88a5-rank-zero-stage]] identifies the actual weight-zero projection on $K_0(X)$ with locally constant Euler rank and the image of the first-stage augmentation with its kernel, for every qcqs scheme over any field under [A1]. In particular every first-stage augmentation has pointwise rank zero.

## Proof
**Given:** $X,\alpha$ and a third-stage representative $a\in\pi_0\operatorname{Fil}^3K(X)$, which exists by the image definition in [F1], with the types and foundations of [F0] and [A1].

**Goal:** Prove lower-class vanishing without transporting projections through a finite-type image-stage identification.

1.1 Send $a$ to the second, first and zeroth stages. Their common augmentation is $\alpha$. By [F4], its first-stage representative gives $\alpha$ rank zero. By [F1], the first-layer projection of this representative is zero, since it comes from the second stage. By [F2] this gives $c_1(\alpha)=0$. [A1, F0, F1, F2, F4]

2.1 Its second-stage representative is in the image of the third stage, so its actual second-layer value is zero by [F1]. By [F3] that value is $-c_2(\alpha)$. Thus $c_2(\alpha)=0$ in its abelian cohomology group. No injectivity of any stage augmentation or representation of $\alpha$ by global bundles has been used. [A1, F0, F1, F3, step 1.1] ∎

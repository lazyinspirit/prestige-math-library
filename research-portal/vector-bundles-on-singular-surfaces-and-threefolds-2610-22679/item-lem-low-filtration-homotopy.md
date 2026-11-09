---
title: Low-stage homotopy equals its image
status: published
research_item: lem-low-filtration-homotopy
dependency_level: 20
---

PDF p. 8: Lemma 4.1; PDF p. 9: Conclusion of proof

## Prerequisites

- [def-article-conventions](item-def-article-conventions)
- [def-motivic-filtration](item-def-motivic-filtration)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [def-derived-sections-on-sites](item-def-derived-sections-on-sites)
- [prop-motivic-graded-spectral-sequence](item-prop-motivic-graded-spectral-sequence)
- [prop-motivic-weight-zero](item-prop-motivic-weight-zero)
- [prop-motivic-weight-one](item-prop-motivic-weight-one)
- [lem-k-one-projection-determinant](item-lem-k-one-projection-determinant)
- [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and fixed compatible site and universe size bounds for the big Nisnevich comparison and its small-site derived sections. Let $k$ be an algebraically closed field and $X$ a normal quasi-compact quasi-separated $k$-scheme. For every $0\leq i\leq2$ and $j\geq0$, the canonical homomorphism
$$\pi_jF^i_{\mathrm{mot}}K(X)\longrightarrow F^i_{\mathrm{mot}}K_j(X)$$
is an isomorphism.

Normal means that every local ring of $X$ is an integrally closed domain; quasi-compact means that every open cover has a finite subcover, and quasi-separated means that intersections of affine opens are quasi-compact. Here $K(X)$ is the specified nonconnective $K$-theory spectrum of perfect complexes, $K_j(X)=\pi_jK(X)$, and $F^i_{\mathrm{mot}}K(X)$ is the $i$th stage of its motivic filtration. The group on the right is the image of the stage-to-$K(X)$ map on $\pi_j$, and the displayed homomorphism is its corestriction to that image. The fixed size bounds specify the small sites and ambient universes for derived sections; Choice says that every family of nonempty sets has a choice function.

## Facts & Assumptions

**Given:** An algebraically closed field $k$, a normal quasi-compact quasi-separated $k$-scheme $X$, Choice, the stated site-size bounds, and integers $0\leq i\leq2$ and $j\geq0$.

**Goal:** Prove that the canonical stage-to-image map is an isomorphism.

[F1] The specified filtration has $F^0_{\mathrm{mot}}K(X)=K(X)$, compatible transition maps, and image groups defined as in the statement. The given scheme is qcqs, so the stated suppliers apply ([def-article-conventions](item-def-article-conventions), [def-motivic-filtration](item-def-motivic-filtration)).

[F2] For each $r\geq0$, the graded triangle is $F^{r+1}_{\mathrm{mot}}K(X)\to F^r_{\mathrm{mot}}K(X)\to\mathbb Z(r)_{\mathrm{mot}}(X)[2r]$. Its graded homotopy group in degree $n$ is $H^{2r-n,r}_{\mathrm{mot}}(X,\mathbb Z)$, where motivic cohomology is the cohomology of the specified motivic complex. The triangle gives the corresponding long exact homotopy sequence ([prop-motivic-graded-spectral-sequence](item-prop-motivic-graded-spectral-sequence), [def-motivic-cohomology](item-def-motivic-cohomology), [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence)).

[F3] Weight-zero motivic cohomology vanishes in negative cohomological degrees. Under Choice and the stated site-size bounds, weight-one motivic cohomology vanishes in degrees at most zero and $H^{1,1}_{\mathrm{mot}}(X,\mathbb Z)$ is naturally the group of global units ([prop-motivic-weight-zero](item-prop-motivic-weight-zero), [prop-motivic-weight-one](item-prop-motivic-weight-one), [def-derived-sections-on-sites](item-def-derived-sections-on-sites)).

[F4] Under the given field, normality, qcqs, Choice and size hypotheses, the actual projection $\pi_1F^1_{\mathrm{mot}}K(X)\to H^{1,1}_{\mathrm{mot}}(X,\mathbb Z)$ is surjective: after the actual augmentation isomorphism and the global-units identification it is determinant, which has the unit section ([lem-k-one-projection-determinant](item-lem-k-one-projection-determinant)). Choice is as stated in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

## Proof

**Proof technique:** Use the exact sequences of the weight-zero and weight-one graded triangles and the surjectivity of the actual determinant projection.

1.1 Write $F^r=F^r_{\mathrm{mot}}K(X)$ and $q_r:\pi_jF^r\to K_j(X)$ for the map induced by the transition to stage zero. For $r=0$, [F1] identifies $q_0$ with the identity, so its corestriction to its image is an isomorphism. By definition, every $q_r$ is surjective onto its image; it remains to prove injectivity for $r=1,2$. [F1, given]

2.1 The weight-zero part of [F2] gives the exact segment $H^{-j-1,0}_{\mathrm{mot}}(X,\mathbb Z)\to\pi_jF^1\xrightarrow{q_1}K_j(X)$. Since $j\geq0$, the first group is zero by [F3]. Thus $q_1$ is injective, and its corestriction to $F^1_{\mathrm{mot}}K_j(X)$ is an isomorphism. [F2, F3, step 1.1]

3.1 The weight-one part of [F2] gives the exact segment $H^{1-j,1}_{\mathrm{mot}}(X,\mathbb Z)\to\pi_jF^2\to\pi_jF^1$. If $j\geq1$, its first group vanishes by [F3], so the transition $\pi_jF^2\to\pi_jF^1$ is injective. Its composite with $q_1$ is $q_2$ by compatibility of transitions; therefore $q_2$ is injective by step 2.1. [F1, F2, F3, step 2.1]

3.2 If $j=0$, the weight-one exact sequence contains $\pi_1F^1\to H^{1,1}_{\mathrm{mot}}(X,\mathbb Z)\to\pi_0F^2\to\pi_0F^1$. The first map is surjective by [F4], so exactness makes the connecting map zero and the following transition injective. Composing with the injective $q_1$ from step 2.1 shows that $q_2$ is injective also in degree zero. [F1, F2, F4, step 2.1]

4.1 Steps 1.1 through 3.2 establish injectivity of each relevant stage-to-$K$ map. Its corestriction is surjective onto the image by definition, hence is an isomorphism for all stated $i$ and $j$. [F1, step 1.1, step 2.1, step 3.1, step 3.2] ∎

## Reading limits
The article's Lemma 4.1 and its proof on PDF pages 8–9 were read. The determinant identification and the motivic graded and low-weight results are used through the completed suppliers named above; their underlying constructions are not reconstructed here.

## Qcqs maintenance
The original normal qcqs scope of Lemma 4.1 is retained for every stated nonnegative homotopy degree, using the current qcqs determinant-projection lemma in [F4]. No dimension, Noetherian or finite-type hypothesis is used in this argument. The sole direct consumer, second-Chern surjectivity in dimensions two and three, was inspected: its finite-type application and Choice/size premises satisfy the extended contract, so it requires no edit. No new external-source reading or independent acceptance is asserted.

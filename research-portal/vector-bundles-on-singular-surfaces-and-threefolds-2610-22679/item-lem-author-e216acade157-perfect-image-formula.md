---
title: The perfect image filtration has the stated second projection and kernel
status: published
research_item: lem-author-e216acade157-perfect-image-formula
dependency_level: 25
---

PDF p. 11: Proposition 5.5; pp. 11–12

## Prerequisites

- [lem-author-9b6cb358ddc9-actual-second-fiber](item-lem-author-9b6cb358ddc9-actual-second-fiber)
- [lem-author-e216acade157-split-determinant-fiber](item-lem-author-e216acade157-split-determinant-fiber)
- [def-motivic-filtration](item-def-motivic-filtration)
- [def-filtration-projections](item-def-filtration-projections)
- [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence)
- [lem-second-chern-additive](item-lem-second-chern-additive)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the fixed compatible site and universe size bounds for the specified motivic filtration, perfect K-theory and Chern constructions. Let $k$ be a field and $X$ a quasi-compact quasi-separated $k$-scheme. The actual second-stage projection transports uniquely to the second image subgroup, giving a homomorphism
$$p_2:F^2_{\mathrm{mot}}K_0(X)\longrightarrow H^{4,2}_{\mathrm{mot}}(X,\mathbb Z),\qquad p_2(\alpha)=-c_2(\alpha).$$
Its kernel is
$$\ker(p_2)=F^3_{\mathrm{mot}}K_0(X).$$
Here $K_0(X)=\pi_0K(X)$ is the K-theory of perfect complexes, and $F^j_{\mathrm{mot}}K_0(X)$ is the image of $\pi_0\operatorname{Fil}^jK(X)\to K_0(X)$, including for $j=3$. A perfect complex is locally quasi-isomorphic to a bounded complex of finite-rank locally free sheaves. The target is degree-four cohomology of the specified weight-two integral motivic complex, and $c_2$ is the actual perfect second Chern operation. Transport means that composing $p_2$ with the second-stage augmentation gives the actual stage projection.

In particular, this preserves the original normal qcqs scope over an algebraically closed field. The formula and kernel require no finite-type, noetherian, dimension or global bundle-representation hypothesis; they assert no injectivity of the third-stage augmentation. Here qcqs means quasi-compact quasi-separated, normal means that every local ring is an integrally closed domain, Choice asserts that every family of nonempty sets has a choice function, and the size bounds fix the sites and ambient universes of the constructions.

## Facts & Assumptions
[A1] Assume the Axiom of Choice as in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the compatible size bounds in the Statement. These are inherited from the specified filtration, section and Chern constructions in [F1]–[F4], used at steps 1.1–3.1. No separate choice of a family of representatives is made.

[F1] [lem-author-9b6cb358ddc9-actual-second-fiber](item-lem-author-9b6cb358ddc9-actual-second-fiber) gives the actual homotopy $Q_2\simeq-C_2i_K$ on the small Zariski site of every qcqs field-scheme. It evaluates on derived sections over $X$, and $i_K$ is the augmentation into its perfect K-space.

[F2] [lem-author-e216acade157-split-determinant-fiber](item-lem-author-e216acade157-split-determinant-fiber) supplies the actual pointed section $\kappa:B\to S$ of $d:S\to B$, with $S=\Omega^\infty\operatorname{Fil}^1K$, $B=\Omega^\infty\operatorname{gr}^1K$ and fiber $T=\Omega^\infty\operatorname{Fil}^2K$. It also identifies the first stage with the rank fiber over a discrete target. Its argument applies after derived sections on every qcqs field-scheme. Only the pointed section and the resulting injections on $\pi_0$ are needed; the section need not be additive.

[F3] [def-motivic-filtration](item-def-motivic-filtration) defines the compatible augmentations and their image subgroups. [def-filtration-projections](item-def-filtration-projections) defines the actual stage map $Q_{2,*}:\pi_0\operatorname{Fil}^2K(X)\to H^{4,2}_{\mathrm{mot}}(X,\mathbb Z)$ on every qcqs field-scheme, using the graded cofiber of this same tower. [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence) gives exactness at the middle term of $\pi_0\operatorname{Fil}^3K(X)\to\pi_0\operatorname{Fil}^2K(X)\xrightarrow{Q_{2,*}}H^{4,2}_{\mathrm{mot}}(X,\mathbb Z)$.

[F4] [lem-second-chern-additive](item-lem-second-chern-additive) supplies the additive restriction of the actual $c_2$ to this second image subgroup on every qcqs scheme over a field, with the same assumptions. Its perfect-class argument does not require a global bundle-difference representative.

## Proof
**Given:** $k,X$, Choice and the size bounds in the Statement, with the specified actual tower and perfect Chern operations.

**Goal:** Transport the actual second-layer map and identify its sign and third-image kernel throughout the stated qcqs scope.

1.1 Evaluate the pointed section in [F2] on derived sections over $X$. It makes $\pi_1S(X)\to\pi_1B(X)$ surjective. The homotopy-fiber exact sequence therefore makes $\pi_0T(X)\to\pi_0S(X)$ injective. The rank target is discrete, so the rank-fiber sequence also makes $\pi_0S(X)\to K_0(X)$ injective. Their composite is the second-stage augmentation by [F3]. Its corestriction $q_2:\pi_0\operatorname{Fil}^2K(X)\to F^2_{\mathrm{mot}}K_0(X)$ is consequently injective and, by the image definition, surjective. Define $p_2=Q_{2,*}q_2^{-1}$. This is a homomorphism and is the unique one with $p_2q_2=Q_{2,*}$ because $q_2$ is onto. [A1, F2, F3]

2.1 For $\alpha\in F^2_{\mathrm{mot}}K_0(X)$, take its unique stage representative $\widetilde\alpha=q_2^{-1}(\alpha)$. Evaluation of the derived-map identity in [F1] on this representative gives $p_2(\alpha)=Q_{2,*}(\widetilde\alpha)=-c_2(\alpha)$. The operation is the same actual perfect operation as in [F4], so its additive interpretation agrees with that supplier. This applies to every perfect class in the image, including classes without global bundle-difference representatives. [A1, F1, F4, step 1.1]

3.1 Write $r:\pi_0\operatorname{Fil}^3K(X)\to\pi_0\operatorname{Fil}^2K(X)$ for the transition. Exactness in [F3] gives $\ker Q_{2,*}=\operatorname{im}r$. Thus the isomorphism $q_2$ in step 1.1 gives $\ker p_2=q_2(\operatorname{im}r)$. Compatibility of augmentations identifies the image of this composite in $K_0(X)$ with the image of the third-stage augmentation, which is exactly $F^3_{\mathrm{mot}}K_0(X)$. This proves the kernel formula without third-stage injectivity. [A1, F3, step 1.1, step 2.1] ∎

## Scope and reading limits
The supplied article text was read at the v1 conventions on p. 3 and Lemma 5.3 and Proposition 5.5 on pp. 11–12. The current full-qcqs actual-second-fiber, determinant-section, stage-projection, image-filtration, stage-exactness and Chern-additivity arguments were inspected for this application. The original global bundle-representation premise is not used. The narrower noetherian finite-dimensional actual-fiber comparison and finite-type low-homotopy lemma remain unchanged; neither is a premise here. The deeper external motivic, determinant and universal-operation constructions behind the named helpers are used through their stated contracts, without reconstruction or a new acceptance claim.

The exact outside-resolution packet, its relevant low-filtration proposal, genuine prior escalation response and the two retained proposals for this assigned scope concern were consulted as proposals and historical evidence. No unavailable historical patch is presumed applied. The packet's nonseparated raw-cycle and integral Chern/Gysin comparison claims are not premises of this deduction. The separate low-dimensional quotient retains its finite-type and dimension hypotheses.

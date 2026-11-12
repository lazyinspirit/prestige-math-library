---
id: lem-k-one-projection-determinant
kind: lemma
title: Weight-one K-one projection is determinant
status: published
domain: mathematics
deps:
  - def-motivic-cohomology
  - lem-filtered-stage-exact-sequence
  - lem-eilenberg-maclane-shift-index
  - def-article-conventions
  - def-motivic-filtration
  - def-derived-sections-on-sites
  - prop-motivic-graded-spectral-sequence
  - prop-motivic-weight-zero
  - prop-motivic-weight-one
  - lem-unit-section-of-k-one-determinant
  - math:def-axiom-of-choice
  - lem-author-ec13f1db88a5-global-picard-projection
  - math:def-integral-closure-and-integrally-closed-domain
dependency_roles:
  def-motivic-cohomology: mathematical-premise
  lem-filtered-stage-exact-sequence: mathematical-premise
  lem-eilenberg-maclane-shift-index: mathematical-premise
  def-article-conventions: mathematical-premise
  def-motivic-filtration: mathematical-premise
  def-derived-sections-on-sites: mathematical-premise
  prop-motivic-graded-spectral-sequence: mathematical-premise
  prop-motivic-weight-zero: mathematical-premise
  prop-motivic-weight-one: mathematical-premise
  lem-unit-section-of-k-one-determinant: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-author-ec13f1db88a5-global-picard-projection: mathematical-premise
  math:def-integral-closure-and-integrally-closed-domain: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 3, notation and conventions; pp. 8–9, proof of Lemma 4.1
      statement: The proof of Lemma 4.1 identifies the weight-one K-one projection
        with determinant and uses its surjectivity; the preceding weight-zero
        argument gives the augmentation isomorphism. The standing scheme
        category is qcqs over an algebraically closed base field.
      hypotheses: X is normal under the standing algebraically closed base-field and
        qcqs scheme conventions. The article separately imposes finite type on
        schemes called affine. The explicit Choice and compatible size
        assumptions belong to the declared local suppliers.
      reading_limits: Historical reading scope retained from the incoming record. This
        maintenance pass checks the current item and supplier interfaces; it
        claims no fresh primary-source reading or independent acceptance. Read
        the frozen article text at p. 3 and pp. 8–9, including the displayed
        exact row and the prose describing the two squares. No PDF image
        inspection or external determinant construction is claimed in this
        repair. The global-Picard argument and unit section are supplied by
        declared local items; this reference gives article attribution and does
        not replace their proof inputs.
dependency_level: 21
formulation_deps:
  - def-motivic-cohomology
  - lem-eilenberg-maclane-shift-index
  - def-article-conventions
  - def-motivic-filtration
  - def-derived-sections-on-sites
  - prop-motivic-graded-spectral-sequence
  - prop-motivic-weight-one
  - lem-unit-section-of-k-one-determinant
  - lem-author-ec13f1db88a5-global-picard-projection
  - math:def-axiom-of-choice
  - math:def-integral-closure-and-integrally-closed-domain
argument_deps:
  - def-motivic-cohomology
  - lem-filtered-stage-exact-sequence
  - lem-eilenberg-maclane-shift-index
  - def-article-conventions
  - def-motivic-filtration
  - def-derived-sections-on-sites
  - prop-motivic-graded-spectral-sequence
  - prop-motivic-weight-zero
  - prop-motivic-weight-one
  - lem-unit-section-of-k-one-determinant
  - math:def-axiom-of-choice
  - lem-author-ec13f1db88a5-global-picard-projection
---

## Statement
Assume the Axiom of Choice and fixed compatible site and universe size bounds for the big Nisnevich comparison and its small-site derived sections. Let $k$ be algebraically closed and let $X$ be a normal quasi-compact quasi-separated $k$-scheme. For the specified motivic filtration on the nonconnective $K$-theory of perfect complexes, the actual augmentation induces an isomorphism
$$\pi_1F^1_{\mathrm{mot}}K(X)\xrightarrow{\sim}K_1(X).$$
Under this isomorphism and the natural identification $H^{1,1}_{\mathrm{mot}}(X,\mathbb Z)\cong\Gamma(X,\mathcal O_X)^\times$, the actual first-stage projection
$$\pi_1F^1_{\mathrm{mot}}K(X)\longrightarrow H^{1,1}_{\mathrm{mot}}(X,\mathbb Z)$$
is the determinant homomorphism $\det_X:K_1(X)\to\Gamma(X,\mathcal O_X)^\times$. It is surjective, with section taking a unit $u$ to the $K_1$-class of multiplication by $u$ on $\mathcal O_X$.

Here normal means that every local ring is an integrally closed domain; quasi-compact means that every open cover has a finite subcover, and quasi-separated means that intersections of affine opens are quasi-compact. A global unit is a global regular function with a multiplicative inverse. The spectrum $K(X)$ is the specified nonconnective $K$-theory of perfect complexes, $K_1(X)=\pi_1K(X)$, and the augmentation is the first transition $F^1_{\mathrm{mot}}K(X)\to F^0_{\mathrm{mot}}K(X)=K(X)$. The first-stage projection is induced by the actual map from that stage to its weight-one graded piece, whose first homotopy group is $H^{1,1}_{\mathrm{mot}}(X,\mathbb Z)$. This includes the article's normal finite-type schemes and its full normal qcqs scope; no finite-type, Noetherian or dimension hypothesis is used.

## Facts & Assumptions

**Given:** An algebraically closed field $k$, a normal qcqs $k$-scheme $X$, the Axiom of Choice, and the fixed site-size bounds in the Statement.

**Goal:** Prove the augmentation isomorphism, identify the actual first-stage projection with determinant, and exhibit its unit section.

[F1] The filtration has a natural identification $F^0_{\mathrm{mot}}K(Y)=K(Y)$ for each qcqs $k$-scheme $Y$, and its transitions are natural in $Y$ ([[def-motivic-filtration]]). The stated qcqs hypothesis puts $X$ in this category ([[def-article-conventions]]). The integrally closed domain condition in the inline normality convention has the meaning of [[math:def-integral-closure-and-integrally-closed-domain]].

[F2] For every such $Y$ the natural graded triangle at weight zero is $F^1K(Y)\to K(Y)\to\mathbb Z(0)_{\mathrm{mot}}(Y)$ ([[prop-motivic-graded-spectral-sequence]]). Apply [[lem-filtered-stage-exact-sequence]] with $E=K(Y)$, its specified decreasing motivic filtration, filtration index zero and homotopy index one to obtain the exact segment $\pi_2\operatorname{gr}^0K(Y)\to\pi_1F^1K(Y)\to K_1(Y)\to\pi_1\operatorname{gr}^0K(Y)$. Motivic cohomology is the cohomology of the specified motivic complex ([[def-motivic-cohomology]]). Under the actual graded comparison, [[lem-eilenberg-maclane-shift-index]] identifies $\pi_n\operatorname{gr}^0K(Y)$ with $H^{-n,0}_{\mathrm{mot}}(Y,\mathbb Z)$ for every integer $n$; the latter group vanishes when $-n<0$ ([[prop-motivic-weight-zero]]).

[F3] Under AC and the stated site-size bounds, the weight-one comparison naturally identifies $H^{1,1}_{\mathrm{mot}}(Y,\mathbb Z)$ with $\Gamma(Y,\mathcal O_Y)^\times$ for qcqs $Y$; the bounds fix small sites and universe sizes for derived sections ([[prop-motivic-weight-one]], [[def-derived-sections-on-sites]]). The graded triangle at weight one gives the actual projection, naturally in $Y$ ([[prop-motivic-graded-spectral-sequence]]); its target on $\pi_1$ is $H^{2\cdot1-1,1}_{\mathrm{mot}}(Y,\mathbb Z)=H^{1,1}_{\mathrm{mot}}(Y,\mathbb Z)$ by [[lem-eilenberg-maclane-shift-index]].

[F4] [[lem-author-ec13f1db88a5-global-picard-projection]] identifies the actual map $\Omega^\infty F^1K\to\Omega^\infty\operatorname{gr}^1K\simeq B\mathbb G_m$ with the perfect-complex determinant/Picard map on the big Nisnevich site of every qcqs field-scheme, including its actual loop map and descent data. Its Choice and compatible site/universe bounds are those assumed here. At $X$, loops at the trivial line in $B\mathbb G_m(X)$ are its global units. Thus taking $\pi_1$ uses the actual determinant rather than agreement of Picard groups on affine opens.

[F5] Under AC, for every qcqs scheme $Y$ there is a natural determinant homomorphism $\det_Y:K_1(Y)\to\Gamma(Y,\mathcal O_Y)^\times$. The natural map $s_Y(u)=[\mathcal O_Y\xrightarrow{u}\mathcal O_Y]$ satisfies $\det_Y\circ s_Y=\operatorname{id}$ ([[lem-unit-section-of-k-one-determinant]]). AC is the assertion that every family of nonempty sets admits a choice function ([[math:def-axiom-of-choice]]).

## Proof

1.1 Apply the weight-zero long exact sequence in [F2] to $X$. The two groups surrounding $\pi_1F^1K(X)\to K_1(X)$ are $H^{-2,0}_{\mathrm{mot}}(X,\mathbb Z)$ and $H^{-1,0}_{\mathrm{mot}}(X,\mathbb Z)$, both zero by [F2]. Hence the actual augmentation is an isomorphism, in the full stated qcqs scope. [F1, F2, given]

2.1 By [F4], the first-stage projection on spaces is the actual determinant/Picard map. Evaluate its pointed natural map at $X$ and take $\pi_1$. Its target identifies with the global units by [F3] and the trivial-line automorphism description in [F4]. Under the augmentation isomorphism in step 1.1 the resulting map is precisely $\det_X:K_1(X)\to\Gamma(X,\mathcal O_X)^\times$, with the actual automorphism normalization in [F5]. This identifies the specified projection, without choosing a smooth locus or a global bundle representative. [F3, F4, F5, step 1.1]

3.1 For every global unit $u$, [F5] gives $\det_X([\mathcal O_X\xrightarrow{u}\mathcal O_X])=u$. Combining this identity with step 2.1 proves surjectivity and supplies exactly the asserted unit section, using step 1.1 for the domain identification. [F5, step 1.1, step 2.1] ∎

## Maintenance reading limits
The following reading narrative is retained as historical context, rather than a fresh source-reading claim in this maintenance pass.

The supplied article extraction at Lemma 4.1 and its proof, PDF pp. 8–9, was read. The present extension uses the current qcqs global-Picard argument, the actual graded and low-weight interfaces, and the unit-section contract. Their underlying determinant and motivic inputs were not reconstructed or newly accepted. This repair explicitly supplies filtered-stage homotopy exactness, the cohomology definition and the graded homotopy-index calculation. The direct consumer, lem-low-filtration-homotopy, was read; its use of the unchanged determinant-projection statement in [F4] and Proof step 3.2 requires no change. No new external theorem is imported and no independent acceptance is asserted.

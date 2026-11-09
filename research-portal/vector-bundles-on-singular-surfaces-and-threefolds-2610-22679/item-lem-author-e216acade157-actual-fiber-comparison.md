---
title: The second-stage projection is minus the actual second Chern map on its
  homotopy fiber
status: draft
research_item: lem-author-e216acade157-actual-fiber-comparison
dependency_level: 26
---

PDF p. 11: Proposition 5.5; pp. 11–12

## Prerequisites

- [lem-author-e216acade157-split-determinant-fiber](item-lem-author-e216acade157-split-determinant-fiber)
- [lem-author-e216acade157-bundle-calculation](item-lem-author-e216acade157-bundle-calculation)
- [lem-author-3cde9692a7e9-local-free-test](item-lem-author-3cde9692a7e9-local-free-test)
- [lem-author-3cde9692a7e9-derived-chain-detection](item-lem-author-3cde9692a7e9-derived-chain-detection)
- [thm-author-3cde9692a7e9-universal-grass-input](item-thm-author-3cde9692a7e9-universal-grass-input)
- [thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space)
- [prop-motivic-projective-bundle-formula](item-prop-motivic-projective-bundle-formula)
- [def-motivic-filtration](item-def-motivic-filtration)
- [lem-author-ec13f1db88a5-rank-zero-stage](item-lem-author-ec13f1db88a5-rank-zero-stage)
- [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)
- [lem-author-32887006bdff-em-p1-model](item-lem-author-32887006bdff-em-p1-model)
- [lem-author-32887006bdff-actual-orientation](item-lem-author-32887006bdff-actual-orientation)
- [thm-author-32887006bdff-p1-spectrum-input](item-thm-author-32887006bdff-p1-spectrum-input)
- [lem-adjudicate-a8be8a17c858-negative-model-coefficients](item-lem-adjudicate-a8be8a17c858-negative-model-coefficients)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [thm-author-74a9c17e63f1-source-multiplicative-input](item-thm-author-74a9c17e63f1-source-multiplicative-input)


## Statement
Assume the Axiom of Choice and the compatible site-size and universe bounds required by the supplied perfect K-theory, motivic and derived-section constructions. On the small Nisnevich site of every noetherian finite-dimensional field-scheme $X$, the actual natural maps from the second-stage space satisfy
$$Q\simeq-C_2\circ i_K:T\longrightarrow A,$$
where $i_K$ is its augmentation into the perfect K-space. This is an equality of homotopy classes of derived sheaf maps, hence induces the equality on derived sections, not merely on bundle classes or affine $\pi_0$ groups.

## Facts & Assumptions
[A1] The Axiom of Choice is as formulated in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). The foundation bounds and Choice in the unchanged Statement are inherited by the supplied filtration, model, detecting flag towers and local comparisons. They are assumed when these constructions are used in steps 1.1–7.1; no foundational necessity assertion is made.

[F1] [lem-author-e216acade157-split-determinant-fiber](item-lem-author-e216acade157-split-determinant-fiber) constructs the actual natural determinant map $d:S\to B$, its pointed line-class section $\kappa:B\to S$, the homotopy $d\kappa\simeq\mathrm{id}$ and retraction $r:S\to T$ with $ri\simeq\mathrm{id}$ on qcqs schemes. Here $B\simeq B\mathbb G_m$ and $i:T\to S$. [lem-author-e216acade157-bundle-calculation](item-lem-author-e216acade157-bundle-calculation) computes $Q(r([V]-n))=-c_2(V)=-c_2(\delta(V))$, where $\delta(V)=[V]-[\det V]-(n-1)$, for actual bundles on noetherian finite-dimensional schemes, including the finite Grassmannians used below.

[F2] [lem-author-3cde9692a7e9-local-free-test](item-lem-author-3cde9692a7e9-local-free-test) supplies the actual local plus comparison, and [lem-author-3cde9692a7e9-derived-chain-detection](item-lem-author-3cde9692a7e9-derived-chain-detection) supplies the derived free-chain adjunction and detection of map classes into the abelian target $A$.

[F3] [thm-author-3cde9692a7e9-universal-grass-input](item-thm-author-3cde9692a7e9-universal-grass-input) supplies the map-induced Grass/Vect cohomology comparison and finite Grassmannian basis. [lem-author-32887006bdff-em-p1-model](item-lem-author-32887006bdff-em-p1-model) and [lem-author-32887006bdff-actual-orientation](item-lem-author-32887006bdff-actual-orientation) identify its actual oriented non-A¹ model over $X$; the model has the supplied projective bundle maps, consistent with [prop-motivic-projective-bundle-formula](item-prop-motivic-projective-bundle-formula). [lem-adjudicate-a8be8a17c858-negative-model-coefficients](item-lem-adjudicate-a8be8a17c858-negative-model-coefficients) proves all-degree negative-weight coefficient vanishing for this represented model. A formal zero convention for negative complexes alone is not used to establish that vanishing.

[F4] [def-motivic-filtration](item-def-motivic-filtration) gives the actual functorial stages and augmentation on qcqs schemes. [thm-author-74a9c17e63f1-source-multiplicative-input](item-thm-author-74a9c17e63f1-source-multiplicative-input) supplies their natural actual graded equivalence $\gamma_2:\operatorname{gr}^2F_{\rm mot}K\simeq\mathbb Z(2)_{\rm mot}[4]$, restricted from the prime field. Thus $Q$ is $\Omega^\infty$ of the stage-to-cofiber map followed by this same $\gamma_2$, naturally under restriction. No boundedness or convergence assertion is used. [lem-author-ec13f1db88a5-rank-zero-stage](item-lem-author-ec13f1db88a5-rank-zero-stage) identifies $S$ as the actual rank fiber. [thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space) constructs $C_2$ functorially from the specified stable bundle maps, including on the smooth big site and under restriction. The spectrum model in [F3] has actual level $A=\Omega^\infty(\mathbb Z(2)_{\rm mot}[4])$ there. The evaluation/shift and coefficient adjunctions in [thm-author-32887006bdff-p1-spectrum-input](item-thm-author-32887006bdff-p1-spectrum-input) identify maps into this level with its weight-two cohomology. [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes) supplies derived Nisnevich descent for the coefficient functor. The actual rank and determinant fibers in [F1] are already Nisnevich sheaf objects, with the given natural maps and homotopies.


**Given:** $X$, Choice, the stated size bounds, and these actual natural operations and coefficient models.

**Goal:** Establish a compatible big-site comparison before using small-site chain detection.

## Proof
1.1 On the smooth big Zariski site $\mathrm{Sm}_X$, evaluate the functorial stages and maps of [F4]. Construct $r$ by the fiber-product inverse of $T\times B\to S$, $(t,b)\mapsto i(t)+\kappa(b)$, using the specified homotopy in [F1]. Together with the actual $Q$ and the functorial universal $C_2$, this defines $D_{\rm big}=(Q+C_2i_K)r:S\to A$. Its restriction to small-site objects is the specified difference $D$, because every constituent, including the determinant-fiber path, is the same natural construction. Smooth qcqs objects over the noetherian finite-dimensional $X$ have finite presentation and remain noetherian finite-dimensional. Thus all bundle calculations used on this site meet [F1]'s hypotheses. [A1, F1, F4]

2.1 The rank-zero test is the pointed zero class. For positive ranks the reduced bundle-class construction defines $j_0:BGL=\operatorname{colim}_n BGL_n\to S$ on this big site, with $BGL_n=\mathrm{Vect}_n$ after Zariski descent. The composite $D_{\rm big}j_0$ on $\mathrm{Vect}_n$ is a map into the actual spectrum level in [F4], so the adjunction identifies its class with a weight-two cohomology class of that stack. This applies to this particular constructed map; it is no claim that arbitrary small-site maps extend to motivic stacks. For pointed classes, forgetting the basepoint is injective here: the chosen trivial-bundle basepoint splits the coefficient-valued suspension spectrum of $\mathrm{Vect}_{n,+}$ into its unit and reduced summands, as also recorded in Asakura–Sato Proposition 5.2. Thus a zero class in the displayed unreduced cohomology also gives a zero pointed map class. [A1, F2, F3, F4, step 1.1]

2.2 At a Nisnevich local ring $R$, the small-site map $j_0$ is the actual rank-zero plus map $BGL(R)\to BGL(R)^+$. Projectives over $R$ are free, and the rank target is discrete by [F4]. The component-zero local comparison in [F2] therefore makes $j_0$ an integral-chain equivalence. This uses the actual plus model of this rank fiber; it does not claim that an arbitrary homotopy fiber preserves a homology equivalence. [A1, F2, F4, step 1.1]

3.1 Pull this class back along $G(n,N)\to\mathrm{Vect}_n$, where $G(n,N)$ carries the actual universal rank-$n$ quotient. By derived Yoneda this pullback is the value on that universal bundle as an element of its full cohomology group. Its image under $rj_0$ has underlying class $\delta(V)$, and [F1] gives $Q(r([V]-n))+C_2(\delta(V))=0$. These Grassmannians are smooth qcqs over $X$ and remain noetherian finite-dimensional. Their cohomology classes therefore vanish by the bundle calculation, including the bundle descent data. [A1, F1, F4, step 1.1, step 2.1]

4.1 Apply [F3] on the big site over the qcqs base $X$. Its actual model is homotopy commutative, linearly oriented and satisfies PBF; use the unit coring in Corollary 4.4.7. In mapping homotopy degree $u=0,1$, a Chern monomial of weight $w$ has coefficient $\mathcal E_X^{4-2w-u,2-w}(X)$, which vanishes for $w>2$ by the actual negative-coefficient lemma. The finite basis on $G(n,N)$ is indexed by $\alpha$ with $|\alpha|=\sum_j\alpha_j\leq N-n$ and weight $w=\sum_jj\alpha_j$. Every potentially nonzero monomial has $|\alpha|\leq2$, so ambient ranges $N-n\geq2$ include them all, and the transition maps preserve them. This holds for both mapping degrees. Hence the finite-approximation tower has zero $\lim^1\pi_1$; the map-induced Grass/Vect comparison detects the class in step 2.1 from the zero restrictions in step 3.1. It follows that $D_{\rm big}j_0$ is zero on each $\mathrm{Vect}_n$. [A1, F3, F4, step 2.1, step 3.1]

5.1 Stabilization $V\mapsto V\oplus\mathcal O$ preserves $[V]-n$, its determinant, and the specified universal Chern maps with their natural identifications. Thus these restrictions are restrictions of a single stable map. In the coefficient formula of step 4.1, variables newly introduced after rank two have weight greater than two. Both mapping $\pi_0$ and $\pi_1$ therefore stabilize for $n\geq2$. The Milnor exact sequence for the mapping-spectrum inverse limit has $\lim^1\pi_1=0$. Its map to $\lim\pi_0$ is consequently injective, and the zero rank restrictions imply $D_{\rm big}j_0\simeq0$ on stable $BGL$. This separately controls the rank limit, rather than choosing incompatible nullhomotopies at each rank. [A1, F3, F4, step 4.1]

6.1 Represent the homotopy in step 5.1 in the local simplicial-sheaf model with fibrant derived coefficient target. It is then a homotopy of presheaf maps. Restrict it along the inclusion of qcqs étale $X$-schemes into $\mathrm{Sm}_X$, and apply the supplied derived Nisnevich sheafification. At finite rank the restricted bundle stack is the small-site $\mathrm{Vect}_n$: both assign to an étale test scheme its groupoid of rank-$n$ bundles and their isomorphisms. Use the canonical map from the presheaf colimit of these restricted finite-rank stacks to the restriction of the big-site stable $BGL$, and precompose the restricted homotopy with it. After Nisnevich sheafification its source is exactly the small-site stable $BGL$, since sheafification preserves this colimit. The target remains the actual $A$ by its derived Nisnevich descent in [F4]; the rank and determinant fibers, retraction, augmentation and stage map are the same natural constructions by [F1] and [F4]. On each finite-rank stack the precomposed map is exactly the reduced bundle-class map followed by $D$, since its constituents were restricted from step 1.1. The resulting homotopy is therefore precisely $Dj_0\simeq0$. This uses restriction of the particular constructed big-site homotopy; it requires neither an equivalence of sites nor commutation of restriction with a sheaf colimit. [A1, F1, F4, step 1.1, step 5.1]

7.1 The derived free-chain adjunction of [F2] makes precomposition with this $j_0$ injective on homotopy classes of maps into $A$. Steps 6.1 and 2.2 imply $D\simeq0$ on $S$. Restrict along $i:T\to S$ and use $ri\simeq\mathrm{id}$ from [F1] to obtain $Q+C_2i_K\simeq0$. Evaluation on derived sections proves the asserted equality, retaining all gluing morphisms. No global bundle-difference presentation of a perfect class is used. [A1, F1, F2, step 6.1, step 2.2] ∎

This is a draft proof repair, with the unchanged noetherian finite-dimensional Statement. The precise external statements, hypotheses, versions and reading limits are recorded above. The natural graded equivalence is used only to identify the actual map $Q$; no convergence or numerical connectivity estimate enters. Negative-weight coefficients are computed by the represented-model supplier. The Asakura–Sato input is the qualified formal completion construction, with the actual perfect K-space and coefficient comparisons supplied separately.

The assigned part of the genuine job-01286 rejected response, its hash-bound outside-resolution packet, and the relevant determinant-scope and low-filtration proposals were consulted as proposals. The current determinant/Picard and section arguments supply the maps used here. No unrestricted naturality for ordinary triangulated diagrams, nonseparated cycle comparison, or integral Chern/Gysin comparison is a premise. The two retained job-01605/job-01609 proposals were checked against current bodies; their existence grants no acceptance.

The separate full-qcqs actual-second-fiber and perfect-image-formula arguments were read and remain unchanged. The latter uses the full-qcqs helper directly, preserving the article's normal-qcqs scope. The frozen graph has no direct consumers of this assigned helper. Its Statement and all existing coverage are preserved. The article's original global bundle-representation premise remains a source defect even though the current alternate proof avoids it. No serving or library content was changed, and no independent judgment or render pass is claimed.

## Scope and source limits
This is a draft proof repair, with the unchanged noetherian finite-dimensional Statement. The precise external statements, hypotheses, versions and reading limits are recorded above. The natural graded equivalence is used only to identify the actual map $Q$; no convergence or numerical connectivity estimate enters. Negative-weight coefficients are computed by the represented-model supplier. The Asakura–Sato input is the qualified formal completion construction, with the actual perfect K-space and coefficient comparisons supplied separately.

The assigned part of the genuine job-01286 rejected response, its hash-bound outside-resolution packet, and the relevant determinant-scope and low-filtration proposals were consulted as proposals. The current determinant/Picard and section arguments supply the maps used here. No unrestricted naturality for ordinary triangulated diagrams, nonseparated cycle comparison, or integral Chern/Gysin comparison is a premise. The two retained job-01605/job-01609 proposals were checked against current bodies; their existence grants no acceptance.

The separate full-qcqs actual-second-fiber and perfect-image-formula arguments were read and remain unchanged. The latter uses the full-qcqs helper directly, preserving the article's normal-qcqs scope. The frozen graph has no direct consumers of this assigned helper. Its Statement and all existing coverage are preserved. The article's original global bundle-representation premise remains a source defect even though the current alternate proof avoids it. No serving or library content was changed, and no independent judgment or render pass is claimed.

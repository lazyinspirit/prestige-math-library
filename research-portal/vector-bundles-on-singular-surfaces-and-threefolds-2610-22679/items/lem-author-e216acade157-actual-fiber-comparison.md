---
id: lem-author-e216acade157-actual-fiber-comparison
kind: lemma
title: The second-stage projection is minus the actual second Chern map on its
  homotopy fiber
status: draft
domain: mathematics
deps:
  - lem-author-e216acade157-split-determinant-fiber
  - lem-author-e216acade157-bundle-calculation
  - lem-author-3cde9692a7e9-local-free-test
  - lem-author-3cde9692a7e9-derived-chain-detection
  - thm-author-3cde9692a7e9-universal-grass-input
  - thm-author-d026a7b99ace-universal-chern-space
  - prop-motivic-projective-bundle-formula
  - def-motivic-filtration
  - lem-author-ec13f1db88a5-rank-zero-stage
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - lem-author-32887006bdff-em-p1-model
  - lem-author-32887006bdff-actual-orientation
  - thm-author-32887006bdff-p1-spectrum-input
  - lem-adjudicate-a8be8a17c858-negative-model-coefficients
  - math:def-axiom-of-choice
  - thm-author-74a9c17e63f1-source-multiplicative-input
dependency_roles:
  lem-author-e216acade157-split-determinant-fiber: mathematical-premise
  lem-author-e216acade157-bundle-calculation: mathematical-premise
  lem-author-3cde9692a7e9-local-free-test: mathematical-premise
  lem-author-3cde9692a7e9-derived-chain-detection: mathematical-premise
  thm-author-3cde9692a7e9-universal-grass-input: mathematical-premise
  thm-author-d026a7b99ace-universal-chern-space: mathematical-premise
  prop-motivic-projective-bundle-formula: mathematical-premise
  def-motivic-filtration: mathematical-premise
  lem-author-ec13f1db88a5-rank-zero-stage: mathematical-premise
  lem-author-b747b28c359f-elmanto-morrow-complexes: mathematical-premise
  lem-author-32887006bdff-em-p1-model: mathematical-premise
  lem-author-32887006bdff-actual-orientation: mathematical-premise
  thm-author-32887006bdff-p1-spectrum-input: mathematical-premise
  lem-adjudicate-a8be8a17c858-negative-model-coefficients: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  thm-author-74a9c17e63f1-source-multiplicative-input: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Annala–Iwasa, Motivic spectra and universality of K-theory, author PDF
        dated 14 April 2025
      url: https://ryomei.com/papers/MotSp.pdf
      locator: Section 2.1 and Notations 2.2.7–2.2.9 / coefficient adjunction 2.2.10,
        pp. 14–15; Definition 4.4.1 through Corollary 4.4.7, pp. 30–32
      hypotheses: A homotopy-commutative oriented motivic E1-ring spectrum satisfying
        the source PBF over a qcqs base. Use the cohomological Corollary 4.4.7;
        Theorem 4.4.6 is stated after elementary-excision localization.
      reading_limits: "Read this round the cached primary author PDF, SHA256
        ad36a2ed6a7e8b5815c94b19100b2431f2533fb538c57843bdbeef3d1b400261,
        printed pp. 14–15 and 30–32, using PyMuPDF text extraction: smooth-site
        and stack conventions, evaluation/shift and coefficient adjunctions, and
        Definition 4.4.1 through Corollary 4.4.7 with their displayed arguments.
        Opened the live primary PDF and checked its April 14, 2025 date. The
        finite-basis proof imported from AI22, lifting lemmas and categorical
        foundations are imported, not reconstructed. Read the current
        actual-model, orientation, coefficient-shift, negative-coefficient and
        universal-detection supplier bodies for this application."
      statement: On the smooth big Zariski site over a qcqs base, for the stated
        oriented PBF model, the canonical Grass/Vect map gives the cohomological
        Chern-coordinate isomorphism of Corollary 4.4.7. Lemma 4.4.4 supplies
        the finite additive basis indexed by sum(alpha_j) <= N-n, with Chern
        weight sum(j alpha_j). Theorem 4.4.6 itself is formulated after
        elementary-excision localization.
    - title: Asakura–Sato, Chern Class and Riemann–Roch Theorem for Cohomology Theory
        without Homotopy Invariance, J. Math. Sci. Univ. Tokyo 26 (2019)
      url: https://www.ms.u-tokyo.ac.jp/journal/26-3-1.pdf
      locator: Definition 5.1, Steps 1–3, Proposition 5.3, formula (5.3.1), and
        naturality square (5.4.1), pp. 269–272
      hypotheses: Only the formal extension of specified stable universal bundle maps
        into derived simplicial-abelian targets is used, through the current
        qualified supplier and its perfect K-space comparison. The entire
        admissibility package is not imported.
      reading_limits: "Read this round the cached 2019 published primary PDF, SHA256
        6736b9710dd4d8d5fd89dfa2863a72cf90fc274ba47a45651fc7024209b4dcbf,
        printed pp. 269–272 using PyMuPDF text extraction: Definition 5.1, Steps
        1–3, Propositions 5.2–5.3, formula (5.3.1) and the naturality square
        (5.4.1). Opened the live publication and checked its bibliographic
        identity. Completion foundations and the separately supplied perfect
        K-space comparison are imported. The source’s full admissibility package
        and resolution-dependent motivic application are not imported."
      statement: Given specified stable positive-index pointed universal bundle maps
        into derived simplicial-abelian coefficient targets, apply the
        functorial local K-space completion, project away the rank factor, and
        use Z-completeness of the target. Proposition 5.2 gives injectivity on
        forgetting the basepoint; (5.4.1) records restriction naturality. The
        current qualified supplier supplies the actual perfect K-space bridge
        separately.
    - title: Elmanto–Morrow, Motivic cohomology of equicharacteristic schemes,
        arXiv:2309.08463v1 (15 September 2023 header; 18 September 2023 internal
        date)
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Theorem 1.1 opening and part (1), printed p. 3
      hypotheses: Nonnegative weights on qcqs schemes over a prime field, restricted
        along the prime subfield of the given field.
      reading_limits: "Read this round the primary arXiv v1 PDF through web
        extraction: header (15 September 2023), internal date (18 September
        2023), and Theorem 1.1 opening and part (1), printed p. 3. These give
        the derived Nisnevich coefficient sheaves and the functorial filtration
        with natural graded pieces. Read the current filtration, actual
        graded-comparison and coefficient-descent supplier bodies. Trace
        constructions, proofs and convergence arguments are imported, not
        reconstructed or used here."
      statement: For each nonnegative weight on qcqs schemes over a prime field, the
        motivic coefficient functor is a finitary derived Nisnevich sheaf. The
        functorial multiplicative filtration of nonconnective perfect K-theory
        has natural graded pieces Z(j)_mot[2j]. No convergence hypothesis is
        needed for the stage-to-graded map used here.
dependency_level: 26
---

## Statement
Assume the Axiom of Choice and the compatible site-size and universe bounds required by the supplied perfect K-theory, motivic and derived-section constructions. On the small Nisnevich site of every noetherian finite-dimensional field-scheme $X$, the actual natural maps from the second-stage space satisfy
$$Q\simeq-C_2\circ i_K:T\longrightarrow A,$$
where $i_K$ is its augmentation into the perfect K-space. This is an equality of homotopy classes of derived sheaf maps, hence induces the equality on derived sections, not merely on bundle classes or affine $\pi_0$ groups.

## Facts & Assumptions
[A1] The Axiom of Choice is as formulated in [[math:def-axiom-of-choice]]. The foundation bounds and Choice in the unchanged Statement are inherited by the supplied filtration, model, detecting flag towers and local comparisons. They are assumed when these constructions are used in steps 1.1–7.1; no foundational necessity assertion is made.

[F1] [[lem-author-e216acade157-split-determinant-fiber]] constructs the actual natural determinant map $d:S\to B$, its pointed line-class section $\kappa:B\to S$, the homotopy $d\kappa\simeq\mathrm{id}$ and retraction $r:S\to T$ with $ri\simeq\mathrm{id}$ on qcqs schemes. Here $B\simeq B\mathbb G_m$ and $i:T\to S$. [[lem-author-e216acade157-bundle-calculation]] computes $Q(r([V]-n))=-c_2(V)=-c_2(\delta(V))$, where $\delta(V)=[V]-[\det V]-(n-1)$, for actual bundles on noetherian finite-dimensional schemes, including the finite Grassmannians used below.

[F2] [[lem-author-3cde9692a7e9-local-free-test]] supplies the actual local plus comparison, and [[lem-author-3cde9692a7e9-derived-chain-detection]] supplies the derived free-chain adjunction and detection of map classes into the abelian target $A$.

[F3] [[thm-author-3cde9692a7e9-universal-grass-input]] supplies the map-induced Grass/Vect cohomology comparison and finite Grassmannian basis. [[lem-author-32887006bdff-em-p1-model]] and [[lem-author-32887006bdff-actual-orientation]] identify its actual oriented non-A¹ model over $X$; the model has the supplied projective bundle maps, consistent with [[prop-motivic-projective-bundle-formula]]. [[lem-adjudicate-a8be8a17c858-negative-model-coefficients]] proves all-degree negative-weight coefficient vanishing for this represented model. A formal zero convention for negative complexes alone is not used to establish that vanishing.

[F4] [[def-motivic-filtration]] gives the actual functorial stages and augmentation on qcqs schemes. [[thm-author-74a9c17e63f1-source-multiplicative-input]] supplies their natural actual graded equivalence $\gamma_2:\operatorname{gr}^2F_{\rm mot}K\simeq\mathbb Z(2)_{\rm mot}[4]$, restricted from the prime field. Thus $Q$ is $\Omega^\infty$ of the stage-to-cofiber map followed by this same $\gamma_2$, naturally under restriction. No boundedness or convergence assertion is used. [[lem-author-ec13f1db88a5-rank-zero-stage]] identifies $S$ as the actual rank fiber. [[thm-author-d026a7b99ace-universal-chern-space]] constructs $C_2$ functorially from the specified stable bundle maps, including on the smooth big site and under restriction. The spectrum model in [F3] has actual level $A=\Omega^\infty(\mathbb Z(2)_{\rm mot}[4])$ there. The evaluation/shift and coefficient adjunctions in [[thm-author-32887006bdff-p1-spectrum-input]] identify maps into this level with its weight-two cohomology. [[lem-author-b747b28c359f-elmanto-morrow-complexes]] supplies derived Nisnevich descent for the coefficient functor. The actual rank and determinant fibers in [F1] are already Nisnevich sheaf objects, with the given natural maps and homotopies.


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

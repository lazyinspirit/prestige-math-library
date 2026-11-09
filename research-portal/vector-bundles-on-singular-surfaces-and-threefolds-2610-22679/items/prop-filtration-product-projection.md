---
id: prop-filtration-product-projection
kind: proposition
title: Filtration projections and multiplication
status: published
domain: mathematics
deps:
  - def-motivic-filtration
  - def-motivic-cohomology
  - thm-author-74a9c17e63f1-source-multiplicative-input
  - lem-author-e216acade157-split-determinant-fiber
  - lem-image-filtration-products
  - math:def-axiom-of-choice
dependency_roles:
  def-motivic-filtration: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  thm-author-74a9c17e63f1-source-multiplicative-input: mathematical-premise
  lem-author-e216acade157-split-determinant-fiber: mathematical-premise
  lem-image-filtration-products: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 10, multiplication square and equation (4.3)
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes, arXiv:2309.08463v1
      url: https://arxiv.org/pdf/2309.08463v1
      locator: "Version 1, 15 September 2023 (internal date 18 September 2023):
        Section 2.2, printed pp. 11–12; Definition 4.9 and Theorem 4.10(1)–(2),
        pp. 21–22; Definition 4.23 and Theorem 4.24(1)–(2), pp. 27–28."
      reading_limits: Read the primary PDF extraction of these definitions,
        shifted-graded formulas, theorem clauses and immediate graded-piece
        proof paragraphs, and Section 2.2. The graded-construction clause of the
        named external input is used; trace methods, descent foundations and
        spectral-sequence constructions are not reconstructed. No convergence
        result or numerical connectivity estimate is used.
dependency_level: 19
---

## Statement
Assume the Axiom of Choice and fix the compatible universe and site-size bounds of the specified constructions. Let $k$ be a field, $X$ a quasi-compact quasi-separated $k$-scheme, and $i,j\geq0$. Write $F^r=F^r_{\mathrm{mot}}K(X)$ for the $r$th stage of the specified multiplicative motivic filtration of the nonconnective $K$-theory spectrum of perfect complexes. Let $M_r=\mathbb Z(r)_{\mathrm{mot}}(X)[2r]$, regarded as a spectrum via the Eilenberg–Mac Lane construction, and let $p_r:F^r\to M_r$ be the actual graded projection. Then the following square commutes up to the coherent homotopy supplied by the filtered multiplication:

$$\begin{array}{ccc} F^i\wedge F^j&\xrightarrow{p_i\wedge p_j}&M_i\wedge M_j\\ \downarrow\!\mu_{i,j}&&\downarrow\!\smile\\ F^{i+j}&\xrightarrow{p_{i+j}}&M_{i+j}. \end{array}$$

Here $\wedge$ is the smash product of spectra; the right vertical map is the product transported from the graded motivic algebra. The corresponding product on homotopy groups is the motivic cup product.

Suppose additionally that $k$ is algebraically closed, $X$ is normal, and the fixed universe size bounds for the small Nisnevich sites and derived sections in the low-stage comparison hold. For $0\leq i,j\leq2$, the canonical maps identify $\pi_0F^i$ and $\pi_0F^j$ with their images $F^i_{\mathrm{mot}}K_0(X)$ and $F^j_{\mathrm{mot}}K_0(X)$ in $K_0(X)$. Under these identifications, taking degree-zero products gives the commutative square

$$\begin{array}{ccc} F^i_{\mathrm{mot}}K_0(X)\otimes_{\mathbb Z}F^j_{\mathrm{mot}}K_0(X)&\xrightarrow{p_i\otimes p_j}&H^{2i,i}_{\mathrm{mot}}(X,\mathbb Z)\otimes_{\mathbb Z}H^{2j,j}_{\mathrm{mot}}(X,\mathbb Z)\\ \downarrow&&\downarrow\!\smile\\ \pi_0F^{i+j}&\xrightarrow{p_{i+j}}&H^{2i+2j,i+j}_{\mathrm{mot}}(X,\mathbb Z). \end{array}$$

The left vertical map multiplies the unique stage representatives. In particular, for $a\in F^i_{\mathrm{mot}}K_0(X)$ and $b\in F^j_{\mathrm{mot}}K_0(X)$, their stage representatives multiply to a class $c\in\pi_0F^{i+j}$ mapping to $ab\in K_0(X)$, and $p_{i+j}(c)=p_i(a)\smile p_j(b)$. This assertion does not require $p_{i+j}$ to descend to the image group when $i+j>2$.

Normal means that every local ring of $X$ is an integrally closed domain. The image group $F^r_{\mathrm{mot}}K_0(X)$ is the image of $\pi_0F^r\to K_0(X)$; motivic cohomology is $H^{a,r}_{\mathrm{mot}}(X,\mathbb Z)=H^a(\mathbb Z(r)_{\mathrm{mot}}(X))$. Choice means that every family of nonempty sets has a choice function.

## Facts & Assumptions
**Given:** A field $k$, a quasi-compact quasi-separated $k$-scheme $X$, nonnegative integers $i,j$, Choice, and the stated compatible size bounds. For the second square, also assume that $k$ is algebraically closed, $X$ is normal, and $i,j\leq2$.

**Goal:** Prove the actual graded multiplication square and its degree-zero form, preserving the stage target and the original normal qcqs scope.

[F1] [[def-motivic-filtration]] defines the actual tower, augmentation and products by restriction from the prime subfield of $k$. [[def-motivic-cohomology]] defines the motivic complexes by the same restriction and identifies $\pi_0M_r$ with $H^{2r,r}_{\mathrm{mot}}(X,\mathbb Z)$.

[F2] The graded-construction clause of [[thm-author-74a9c17e63f1-source-multiplicative-input]] supplies, on every qcqs $\mathbb Q$-scheme or $\mathbb F_p$-scheme, the actual equivalences $\operatorname{gr}^rF\simeq\mathbb Z(r)_{\mathrm{mot}}[2r]$ and their graded algebra structure. Its induced product is the source motivic cup product. This clause uses Elmanto–Morrow v1, Section 2.2 and Definitions 4.9/4.23, without any finite-valuative-dimension hypothesis.

[F3] [[lem-image-filtration-products]] supplies compatibility of stage products with both augmentation and graded projection. It requires no injectivity for the stage-level identity.

[F4] [[lem-author-e216acade157-split-determinant-fiber]] supplies, on every qcqs field-scheme $X$, the actual spaces $S=\Omega^\infty F^1$, $T=\Omega^\infty F^2$, and injective maps $\pi_0T(X)\to\pi_0S(X)\to K_0(X)$. Its actual pointed determinant section makes $\pi_1S(X)\to\pi_1B(X)$ surjective for $B=\Omega^\infty\operatorname{gr}^1F$, which kills the boundary obstructing degree-zero injectivity of the fiber map. Only these degree-zero conclusions are needed here. Choice, as in [[math:def-axiom-of-choice]], and the compatible size bounds discharge the inherited local-realization assumptions of these suppliers.

## Proof
1.1 Let $P\subseteq k$ be the prime subfield, either $\mathbb Q$ or $\mathbb F_p$. Composing $X\to\operatorname{Spec}k$ with $\operatorname{Spec}k\to\operatorname{Spec}P$ leaves the underlying qcqs scheme unchanged, and every $k$-morphism is a $P$-morphism. Apply [F2] on this prime-field category under the assumed Choice and compatible size bounds. By [F1], restriction along this forgetful functor gives exactly the specified tower and motivic complexes on $k$-schemes. Restriction evaluates the same natural diagrams at the same objects and maps, preserving their cofiber projections, graded equivalences, multiplication and coherent homotopies. Thus this applies for arbitrary $k$. [F1, F2, given]

1.2 In stage zero the augmentation is identity by [F1]. In stages one and two, [F4] gives its injectivity on $\pi_0$, since $\pi_0\Omega^\infty F^r(X)=\pi_0F^r(X)$ and the composite of the two injections there is the stage-two augmentation. Each augmentation is surjective onto its image by definition, so its corestriction is an isomorphism for $0\leq r\leq2$. This applies in particular on every normal qcqs $X$ over the algebraically closed field in the second assertion, including its finite-type special case. [F1, F4, given]

2.1 The cofiber compatibility in [F3] gives the coherent multiplication square from $F^i\wedge F^j$ through the graded pieces to $\operatorname{gr}^{i+j}F$. Transport its graded terms along the actual equivalences restricted in step 1.1. Their graded algebra structure in [F2] identifies the transported product with the specified motivic cup product, proving the first square. [F2, F3, step 1.1]

3.1 For $x\in\pi_0F^i$ and $y\in\pi_0F^j$, their stage product lies in $\pi_0F^{i+j}$. Applying the first square to their representing sphere maps gives $p_{i+j}(xy)=p_i(x)\smile p_j(y)$. The augmentation sends $xy$ to the product of the augmented classes in $K_0(X)$. These pairings are bilinear, hence factor through tensor products of abelian groups. [F1, F3, step 2.1]

4.1 Under the second assertion's hypotheses, step 1.2 supplies unique representatives $x,y$ for any $a\in F^i_{\mathrm{mot}}K_0(X)$ and $b\in F^j_{\mathrm{mot}}K_0(X)$. Define the left vertical map on $a\otimes b$ by $xy$ and extend bilinearly, using the inverse source-group isomorphisms from step 1.2. Step 3.1 proves that $c=xy$ maps to $ab$ in $K_0(X)$ and satisfies $p_{i+j}(c)=p_i(a)\smile p_j(b)$, proving the second square. The target remains $\pi_0F^{i+j}$; no injectivity or descent for that output stage is required when $i+j>2$. [F3, step 3.1, step 1.2] ∎

The supplied article's conventions on PDF p. 3, Lemma 4.1 and its proof on pp. 8–9, and the multiplication square and equation (4.3) on p. 10 were read. The primary Elmanto–Morrow v1 reading is limited to the passages specified in the reference above. The graded construction is imported through the precise external-input supplier; trace methods and descent foundations were not reconstructed. The current determinant-fiber, global-Picard and rank-zero-stage arguments were inspected for their actual qcqs maps and degree-zero injectivity; their substantial external prerequisites were not reconstructed or newly certified. The finite-type low-homotopy supplier is left unchanged and is not used here. This proof preserves the original normal qcqs scope, including nonseparated schemes, and its finite-type consequence. All proposed content remains draft.

## Reading limits
The supplied article's conventions on PDF p. 3, Lemma 4.1 and its proof on pp. 8–9, and the multiplication square and equation (4.3) on p. 10 were read. The primary Elmanto–Morrow v1 reading is limited to the passages specified in the reference above. The graded construction is imported through the precise external-input supplier; trace methods and descent foundations were not reconstructed. The current determinant-fiber, global-Picard and rank-zero-stage arguments were inspected for their actual qcqs maps and degree-zero injectivity; their substantial external prerequisites were not reconstructed or newly certified. The finite-type low-homotopy supplier is left unchanged and is not used here. This proof preserves the original normal qcqs scope, including nonseparated schemes, and its finite-type consequence. All proposed content remains draft.

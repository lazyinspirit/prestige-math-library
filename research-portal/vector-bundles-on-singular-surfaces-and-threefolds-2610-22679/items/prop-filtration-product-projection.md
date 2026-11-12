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
  - def-stable-spectra-interface
  - def-multiplicative-filtered-spectrum
  - lem-adjudicate-d5306176fce5-coherent-realization
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - math:thm-universal-property-of-module-tensor-products
  - math:thm-prime-subfield-classification
  - math:thm-affine-scheme-ring-anti-equivalence
dependency_roles:
  def-motivic-filtration: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  thm-author-74a9c17e63f1-source-multiplicative-input: mathematical-premise
  lem-author-e216acade157-split-determinant-fiber: mathematical-premise
  lem-image-filtration-products: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  def-multiplicative-filtered-spectrum: mathematical-premise
  lem-adjudicate-d5306176fce5-coherent-realization: mathematical-premise
  lem-author-b747b28c359f-elmanto-morrow-complexes: mathematical-premise
  math:thm-universal-property-of-module-tensor-products: mathematical-premise
  math:thm-prime-subfield-classification: mathematical-premise
  math:thm-affine-scheme-ring-anti-equivalence: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 3, Notation and conventions; pp. 8–9, Lemma 4.1; p. 10, opening
        multiplication square and equation (4.3)
      statement: The article compares the stage multiplication with the graded motivic
        product on qcqs field-schemes. Under its normality and standing
        base-field conventions, degree-zero stage representatives in indices 0
        through 2 give equation (4.3), whose lower-left target is the stage
        homotopy group, not its image in K_0.
      hypotheses: The first comparison is stated for qcqs schemes over a field. The
        image-group square invokes Lemma 4.1 for normal X, with 0 <= i,j <= 2
        and the standing algebraically closed base field. No finite-type
        restriction on nonaffine X is imposed.
      reading_limits: In this repair, read the frozen text at pp. 3 and 8–10 and
        inspected the supplied PDF image of p. 10, including both squares. The
        local proof uses the declared determinant-fiber supplier for
        injectivity; no fresh certification of the article proof of Lemma 4.1 or
        original-author defect finding is claimed.
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes, arXiv:2309.08463v1
      url: https://arxiv.org/pdf/2309.08463v1
      locator: v1, Section 2.2, printed pp. 11–12; Definition 4.9 and Theorem
        4.10(1)–(2), pp. 21–22; Definition 4.23 and Theorem 4.24(1)–(2), pp.
        27–28.
      reading_limits: Freshly read the versioned primary PDF extraction at Section
        2.2, Definitions 4.9/4.23, the indicated theorem clauses and their
        immediate graded-piece proof paragraphs. These premises are used through
        the declared source-multiplicative supplier. No trace, descent,
        convergence or numerical connectivity proof is reconstructed.
      statement: The actual prime-field filtration is a pullback of filtered
        E-infinity algebras. Motivic complexes are its shifted graded pieces;
        associated graded carries the multiplication by its strong monoidal
        structure.
      hypotheses: Qcqs schemes over Q or F_p; nonnegative weights here. The graded
        construction and products require no finite valuative dimension or
        convergence hypothesis.
dependency_level: 21
formulation_deps:
  - def-motivic-filtration
  - def-motivic-cohomology
  - thm-author-74a9c17e63f1-source-multiplicative-input
  - lem-author-e216acade157-split-determinant-fiber
  - lem-image-filtration-products
  - math:def-axiom-of-choice
  - def-stable-spectra-interface
  - def-multiplicative-filtered-spectrum
  - lem-adjudicate-d5306176fce5-coherent-realization
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - math:thm-universal-property-of-module-tensor-products
argument_deps:
  - def-motivic-filtration
  - def-motivic-cohomology
  - thm-author-74a9c17e63f1-source-multiplicative-input
  - lem-author-e216acade157-split-determinant-fiber
  - lem-image-filtration-products
  - math:def-axiom-of-choice
  - def-stable-spectra-interface
  - def-multiplicative-filtered-spectrum
  - lem-adjudicate-d5306176fce5-coherent-realization
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - math:thm-universal-property-of-module-tensor-products
  - math:thm-prime-subfield-classification
  - math:thm-affine-scheme-ring-anti-equivalence
---

## Statement
Assume the Axiom of Choice and fix the compatible universe and site-size bounds of the specified constructions. Let $k$ be a field, $X$ a quasi-compact quasi-separated $k$-scheme, and $i,j\geq0$. Write $F^r=F^r_{\mathrm{mot}}K(X)$ for the $r$th stage of the specified multiplicative motivic filtration of the nonconnective $K$-theory spectrum of perfect complexes. Let $C_r=\mathbb Z(r)_{\mathrm{mot}}(X)$ be the value of the supplied coherent motivic-complex functor, and put $M_r=\mathcal H(C_r[2r])$, using the compatible Eilenberg–Mac Lane realization $\mathcal H$ of derived abelian complexes. Cochain shifts mean $C[s]^q=C^{q+s}$ with differential $(-1)^s d_C$; thus $\pi_0M_r\cong H^0(C_r[2r])=H^{2r}(C_r)$. Let $p_r:F^r\to M_r$ be the actual graded projection composed with the specified graded equivalence. Then the following square commutes up to the coherent homotopy supplied by the filtered multiplication:

$$\begin{array}{ccc} F^i\wedge F^j&\xrightarrow{p_i\wedge p_j}&M_i\wedge M_j\\ \downarrow\!\mu_{i,j}&&\downarrow\!\smile\\ F^{i+j}&\xrightarrow{p_{i+j}}&M_{i+j}. \end{array}$$

Here $\wedge$ is the smash product of spectra; the right vertical map is the product transported from the graded motivic algebra. The corresponding product on homotopy groups is the motivic cup product.

Suppose additionally that $k$ is algebraically closed, $X$ is normal, and the fixed universe size bounds for the small Nisnevich sites and derived sections in the low-stage comparison hold. For $0\leq i,j\leq2$, the canonical maps identify $\pi_0F^i$ and $\pi_0F^j$ with their images $F^i_{\mathrm{mot}}K_0(X)$ and $F^j_{\mathrm{mot}}K_0(X)$ in $K_0(X)$. Under these identifications, taking degree-zero products gives the commutative square

$$\begin{array}{ccc} F^i_{\mathrm{mot}}K_0(X)\otimes_{\mathbb Z}F^j_{\mathrm{mot}}K_0(X)&\xrightarrow{p_i\otimes p_j}&H^{2i,i}_{\mathrm{mot}}(X,\mathbb Z)\otimes_{\mathbb Z}H^{2j,j}_{\mathrm{mot}}(X,\mathbb Z)\\ \downarrow&&\downarrow\!\smile\\ \pi_0F^{i+j}&\xrightarrow{p_{i+j}}&H^{2i+2j,i+j}_{\mathrm{mot}}(X,\mathbb Z). \end{array}$$

The left vertical map multiplies the unique stage representatives. In particular, for $a\in F^i_{\mathrm{mot}}K_0(X)$ and $b\in F^j_{\mathrm{mot}}K_0(X)$, their stage representatives multiply to a class $c\in\pi_0F^{i+j}$ mapping to $ab\in K_0(X)$, and $p_{i+j}(c)=p_i(a)\smile p_j(b)$. This assertion does not require $p_{i+j}$ to descend to the image group when $i+j>2$.

Normal means that every local ring of $X$ is an integrally closed domain. The image group $F^r_{\mathrm{mot}}K_0(X)$ is the image of $\pi_0F^r\to K_0(X)$; motivic cohomology is $H^{a,r}_{\mathrm{mot}}(X,\mathbb Z)=H^a(\mathbb Z(r)_{\mathrm{mot}}(X))$. Choice means that every family of nonempty sets has a choice function.

## Facts & Assumptions
**Given:** A field $k$, a quasi-compact quasi-separated $k$-scheme $X$, nonnegative integers $i,j$, Choice, and the stated compatible size bounds. For the second square, also assume that $k$ is algebraically closed, $X$ is normal, and $i,j\leq2$.

**Goal:** Prove the actual graded multiplication square and its degree-zero form, preserving the stage target and the original normal qcqs scope.

[F1] [[def-motivic-filtration]] defines the actual tower, augmentation and products by restriction from the prime subfield of $k$. [[def-motivic-cohomology]] defines motivic cohomology as the cohomology of these complexes. [[lem-author-b747b28c359f-elmanto-morrow-complexes]] supplies the actual enhanced complex-valued functor and its prime-field restriction. The spectral comparison is supplied separately in [F5].

[F2] The graded-construction clause of [[thm-author-74a9c17e63f1-source-multiplicative-input]] supplies, on every qcqs $\mathbb Q$-scheme or $\mathbb F_p$-scheme, the actual equivalences $\operatorname{gr}^rF\simeq\mathbb Z(r)_{\mathrm{mot}}[2r]$ and their graded algebra structure. Its induced product is the source motivic cup product. This clause uses Elmanto–Morrow v1, Section 2.2 and Definitions 4.9/4.23, without any finite-valuative-dimension hypothesis.

[F3] [[lem-image-filtration-products]] supplies compatibility of stage products with both augmentation and graded projection. It requires no injectivity for the stage-level identity.

[F4] [[lem-author-e216acade157-split-determinant-fiber]] supplies, on every qcqs field-scheme $X$, the actual spaces $S=\Omega^\infty F^1$, $T=\Omega^\infty F^2$, and injective maps $\pi_0T(X)\to\pi_0S(X)\to K_0(X)$. Its actual pointed determinant section makes $\pi_1S(X)\to\pi_1B(X)$ surjective for $B=\Omega^\infty\operatorname{gr}^1F$, which kills the boundary obstructing degree-zero injectivity of the fiber map. Only these degree-zero conclusions are needed here. Choice, as in [[math:def-axiom-of-choice]], and the compatible size bounds discharge the inherited local-realization assumptions of these suppliers.

[F5] [[def-stable-spectra-interface]] supplies spectra, their smash product, sphere $\mathbb S$, homotopy groups and shifts. Here $\Omega^\infty E$ is the pointed mapping space $\operatorname{Map}_{\mathrm{Sp}}(\mathbb S,E)$, so $\pi_0\Omega^\infty E=\pi_0E$. [[lem-adjudicate-d5306176fce5-coherent-realization]] supplies the coherent realization $\mathcal H$ and the natural formula $\pi_n\mathcal H(C)=H^{-n}(C)$, with the cochain shift convention stated above. Apply this to the supplied enhanced complexes in [F1].

[F6] [[math:thm-universal-property-of-module-tensor-products]] supplies unique factorization of a balanced pairing through a tensor product. Apply it with $R=\mathbb Z$ and the usual integer actions on the abelian homotopy groups. A biadditive pairing is balanced for these actions: repeated addition and additive inverses give $b(nx,y)=n b(x,y)=b(x,ny)$ for every integer $n$.

[F7] [[math:thm-prime-subfield-classification]] identifies the prime subfield of $k$ with $P=\mathbb Q$ or $\mathbb F_p$ by a unit-preserving embedding $P\hookrightarrow k$. [[math:thm-affine-scheme-ring-anti-equivalence]] gives its morphism $\operatorname{Spec}k\to\operatorname{Spec}P$.

[F8] [[def-multiplicative-filtered-spectrum]] supplies the coherent stage and graded products, cofiber projections and the homotopy $\overline\mu_{i,j}(q_i\wedge q_j)\simeq q_{i+j}\mu_{i,j}$ for $q_r:F^r\to\operatorname{gr}^rF$. This is the spectrum-level compatibility used before taking homotopy groups.

## Proof
1.1 By [F7], fix the unit-preserving embedding $P\hookrightarrow k$ from the standard prime field $P=\mathbb Q$ or $\mathbb F_p$, and its induced affine-scheme morphism. Composing $X\to\operatorname{Spec}k$ with $\operatorname{Spec}k\to\operatorname{Spec}P$ leaves the underlying qcqs scheme unchanged, and every $k$-morphism is a $P$-morphism. Apply [F2] on this prime-field category under the assumed Choice and compatible size bounds. By [F1], restriction along this forgetful functor gives exactly the specified tower and motivic complexes on $k$-schemes. Restriction evaluates the same natural diagrams at the same objects and maps, preserving their cofiber projections, graded equivalences, multiplication and coherent homotopies. Thus this applies for arbitrary $k$. [F1, F2, F7, given]

1.2 In stage zero the augmentation is identity by [F1]. In stages one and two, [F4] gives its injectivity on $\pi_0$, since [F5] identifies $\pi_0\Omega^\infty F^r(X)=\pi_0F^r(X)$ and the composite of the two injections there is the stage-two augmentation. Each augmentation is surjective onto its image by definition, so its corestriction is an isomorphism for $0\leq r\leq2$. This applies in particular on every normal qcqs $X$ over the algebraically closed field in the second assertion, including its finite-type special case. [F1, F4, F5, given]

2.1 The coherent cofiber compatibility in [F8] gives the coherent multiplication square from $F^i\wedge F^j$ through the graded pieces to $\operatorname{gr}^{i+j}F$. Transport its graded terms along the actual equivalences restricted in step 1.1. Their graded algebra structure in [F2] identifies the transported product with the specified motivic cup product, proving the first square. [F2, F8, step 1.1]

3.1 For $x\in\pi_0F^i$ and $y\in\pi_0F^j$, their stage product lies in $\pi_0F^{i+j}$. Applying the first square to their representing sphere maps gives $p_{i+j}(xy)=p_i(x)\smile p_j(y)$. The augmentation sends $xy$ to the product of the augmented classes in $K_0(X)$. Under [F5], the target groups are $\pi_0M_r\cong H^0(C_r[2r])=H^{2r}(C_r)=H^{2r,r}_{\mathrm{mot}}(X,\mathbb Z)$; the middle equality follows by reindexing kernels and images in the stated cochain shift. The smash pairings are additive in each sphere-map variable: addition of maps is given by the diagonal and codiagonal of finite biproducts, and smash preserves finite coproducts separately by [F5]. They are therefore $\mathbb Z$-balanced as in [F6], and its universal property gives the homomorphisms out of the displayed tensor products. In particular it constructs the cup-product arrow and the map on tensors induced by the two projections. [F1, F3, F5, F6, step 2.1]

4.1 Under the second assertion's hypotheses, step 1.2 supplies unique representatives $x,y$ for any $a\in F^i_{\mathrm{mot}}K_0(X)$ and $b\in F^j_{\mathrm{mot}}K_0(X)$. Define the left vertical map on $a\otimes b$ by $xy$, using the inverse source-group isomorphisms from step 1.2 and the unique factorization in [F6]. Step 3.1 proves that $c=xy$ maps to $ab$ in $K_0(X)$ and satisfies $p_{i+j}(c)=p_i(a)\smile p_j(b)$, proving equality of the two composites on pure tensors. The uniqueness in [F6] then proves equality as homomorphisms, hence the second square. The target remains $\pi_0F^{i+j}$; no injectivity or descent for that output stage is required when $i+j>2$. [F3, F6, step 3.1, step 1.2] ∎

## Reading limits
The article text was read at pp. 3 and 8–10, and its p. 10 PDF image was inspected. The Elmanto–Morrow reading is limited to the primary PDF passages in reference 1. The current filtration, complex, graded-algebra, coherent-realization, spectral and determinant-fiber supplier bodies were inspected for the interfaces used here. Their substantial external foundations are used through their declared contracts, without reconstruction or new acceptance. Both current direct consumer bodies were read: they use the first, stage-level square, whose scope and product are preserved. No image-stage descent at an output index greater than two is asserted. The local indexing, balanced-factorization and restriction arguments are authored here; this item is not itself an imported theorem.

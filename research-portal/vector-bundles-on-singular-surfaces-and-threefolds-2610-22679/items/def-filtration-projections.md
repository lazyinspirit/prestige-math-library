---
id: def-filtration-projections
kind: definition
title: Graded filtration projections
status: published
domain: mathematics
deps:
  - def-motivic-filtration
  - def-motivic-cohomology
  - thm-author-74a9c17e63f1-source-multiplicative-input
  - lem-author-e216acade157-split-determinant-fiber
  - lem-filtered-stage-exact-sequence
  - math:def-axiom-of-choice
  - math:def-algebraically-closed-field
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-integral-closure-and-integrally-closed-domain
  - math:def-derived-category-of-an-abelian-category
dependency_roles:
  def-motivic-filtration: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  thm-author-74a9c17e63f1-source-multiplicative-input: mathematical-premise
  lem-author-e216acade157-split-determinant-fiber: mathematical-premise
  lem-filtered-stage-exact-sequence: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-algebraically-closed-field: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:def-integral-closure-and-integrally-closed-domain: mathematical-premise
  math:def-derived-category-of-an-abelian-category: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 3, conventions; pp. 8–9, Lemma 4.1; p. 10, Section 5 opening;
        pp. 12–13, Section 6 opening
      statement: The article uses stage-to-graded projections on zeroth homotopy,
        transports them to image filtration groups in stages zero through two
        using Lemma 4.1 on normal schemes, and retains the stage domain for the
        third projection in Section 6.
      hypotheses: The standing base field is algebraically closed and schemes are
        qcqs. The low-stage image identification assumes normality. The later
        third-stage isomorphism in Section 6 assumes a normal threefold and is
        not imported into this definition.
      reading_limits: The preceding repair's source record reports reading the frozen
        article extraction at the p. 3 conventions, pp. 8–9 Lemma 4.1 and its
        proof, p. 10 Section 5 opening, and pp. 12–13 Section 6 opening. No
        fresh page-image inspection or original-author defect adjudication is
        claimed. The local low-stage justification uses the declared
        determinant-fiber supplier rather than reconstructing the article
        argument.
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: arXiv:2309.08463v1 (arXiv stamp 15 September 2023; title-page date 18
        September 2023), printed pp. 21–22 and 27–28, Definitions 4.9/4.23 and
        Theorems 4.10(1)–(2)/4.24(1)–(2)
      reading_limits: The preceding repair's source record reports reading the
        version-specific primary PDF extraction at Definitions 4.9/4.23,
        Theorems 4.10(1)–(2)/4.24(1)–(2), and their immediate graded-piece
        arguments, on printed pp. 21–22 and 27–28. The trace and descent
        constructions are imported through the declared source-multiplicative
        supplier. No reconstruction of those deep proofs or fresh page-image
        inspection is claimed.
      statement: Definitions 4.9 and 4.23 construct the actual filtered algebra and
        define the weight-i complex as its i-th graded cofiber shifted by -2i.
        Theorems 4.10(1)–(2) and 4.24(1)–(2), with their immediate arguments,
        identify these as derived complexes and give the natural graded
        comparison used here.
      hypotheses: X is a qcqs scheme over Q in Definition 4.9 and Theorem 4.10, or
        over F_p for a prime p in Definition 4.23 and Theorem 4.24; i is
        nonnegative here. No finite-type, normality, dimension or convergence
        hypothesis is used for the graded comparison. Choice and compatible
        universes are retained as explicit local foundational assumptions.
proof_strategy: direct
dependency_level: 21
formulation_deps:
  - def-motivic-filtration
  - def-motivic-cohomology
  - thm-author-74a9c17e63f1-source-multiplicative-input
  - lem-author-e216acade157-split-determinant-fiber
  - lem-filtered-stage-exact-sequence
  - math:def-axiom-of-choice
  - math:def-algebraically-closed-field
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-integral-closure-and-integrally-closed-domain
  - math:def-derived-category-of-an-abelian-category
argument_deps:
  - def-motivic-filtration
  - def-motivic-cohomology
  - thm-author-74a9c17e63f1-source-multiplicative-input
  - lem-author-e216acade157-split-determinant-fiber
  - lem-filtered-stage-exact-sequence
  - math:def-axiom-of-choice
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-derived-category-of-an-abelian-category
---

## Definition
Assume the Axiom of Choice and fix compatible site and universe size bounds for the specified motivic and weight-one constructions. Let $k$ be a field, $X$ a quasi-compact quasi-separated $k$-scheme, and $i\geq0$. Write $F^i_{\mathrm{mot}}K(X)$ for stage $i$ of the specified motivic filtration of the nonconnective $K$-theory spectrum of perfect complexes. The **stage projection**
$$p_i:\pi_0F^i_{\mathrm{mot}}K(X)\longrightarrow H^{2i,i}_{\mathrm{mot}}(X,\mathbb Z)$$
is induced by the map from that stage to its graded cofiber $\mathbb Z(i)_{\mathrm{mot}}(X)[2i]$. Here $H^{a,i}_{\mathrm{mot}}(X,\mathbb Z)$ is degree-$a$ cohomology of the specified weight-$i$ motivic complex. Both the filtration and the complex are restricted from the prime field of $k$.

The image filtration group $F^i_{\mathrm{mot}}K_0(X)$ is the image of the stage-to-$K(X)$ homomorphism on $\pi_0$; write $q_i:\pi_0F^i_{\mathrm{mot}}K(X)\to F^i_{\mathrm{mot}}K_0(X)$ for its canonical corestriction. If $k$ is algebraically closed and $X$ is normal, then for $0\leq i\leq2$ the map $q_i$ is an isomorphism. For these indices the same symbol $p_i$ also denotes the transported homomorphism
$$F^i_{\mathrm{mot}}K_0(X)\xrightarrow{\ q_i^{-1}\ }\pi_0F^i_{\mathrm{mot}}K(X)\xrightarrow{\ p_i\ }H^{2i,i}_{\mathrm{mot}}(X,\mathbb Z).$$
This convention covers every normal qcqs $k$-scheme, including the normal finite-type case. It requires no finite-type, Noetherian or dimension bound. At stage zero, the equivalence $F^0_{\mathrm{mot}}K(X)=K(X)$ already identifies the stage and image for every $X$ above. Normal means that every local ring is an integrally closed domain. Finite type means that $X$ has a finite affine cover by spectra of finitely generated $k$-algebras. Choice means that every family of nonempty sets has a choice function; the size bounds fix the small sites and ambient universes of the specified constructions.

For $i=3$ the stage projection has domain $\pi_0F^3_{\mathrm{mot}}K(X)$. The low-stage identification above does not itself identify this domain with $F^3_{\mathrm{mot}}K_0(X)$; image-domain notation at stage three requires a separate justification.

## Definition references

[[def-motivic-filtration]]

[[def-motivic-cohomology]]

[[thm-author-74a9c17e63f1-source-multiplicative-input]]

[[lem-author-e216acade157-split-determinant-fiber]]

[[math:def-algebraically-closed-field]]

[[math:def-quasi-compact-and-quasi-separated-scheme]]

[[math:def-integral-closure-and-integrally-closed-domain]]

[[math:def-derived-category-of-an-abelian-category]]

## Facts & Assumptions
**Given:** A field $k$, a qcqs $k$-scheme $X$, Choice, compatible site and universe size bounds, and $i\geq0$. For the image-domain convention in stages one and two, also assume that $k$ is algebraically closed and $X$ is normal.

**Goal:** Define the actual stage projections and justify their low-stage image-domain convention throughout the original normal qcqs scope.

[F1] [[def-motivic-filtration]] supplies the actual tower, compatible augmentations, the stage-zero equivalence with $K(X)$ and the image groups. It and [[def-motivic-cohomology]] specify restriction from the prime field. [[math:def-axiom-of-choice]] supplies the assumed Choice premise for the perfect-complex realization and site constructions.

[F2] [[thm-author-74a9c17e63f1-source-multiplicative-input]] supplies the natural equivalence $\operatorname{gr}^iF_{\mathrm{mot}}K\simeq\mathbb Z(i)_{\mathrm{mot}}[2i]$ on qcqs prime-field schemes under the given Choice and size assumptions. The complexes and graded cofibers are those of the same actual tower; no convergence hypothesis is needed. [[def-motivic-cohomology]] specifies their cohomology notation.

[F3] [[lem-author-e216acade157-split-determinant-fiber]] applies to all qcqs schemes over a field under Choice and the existing size bounds. For $S=\Omega^\infty F^1_{\mathrm{mot}}K$, $B=\Omega^\infty\operatorname{gr}^1F_{\mathrm{mot}}K$ and $T=\Omega^\infty F^2_{\mathrm{mot}}K$, it supplies the actual pointed section $\kappa:B\to S$ of $d:S\to B$ and injections $\pi_0T(X)\to\pi_0S(X)\to K_0(X)$. The section is a map of spaces and need not be additive. The second injection uses the actual rank fiber over a discrete target.

[F4] [[lem-filtered-stage-exact-sequence]] gives homotopy exactness and the criterion for a stage projection to descend to its image: the kernel of the augmentation must lie in the kernel of the projection. In particular an injective augmentation suffices.

[F5] [[math:def-algebraically-closed-field]] defines the algebraic-closure condition in the stated normal special case. [[math:def-quasi-compact-and-quasi-separated-scheme]] defines the two scheme conditions in qcqs, and [[math:def-integral-closure-and-integrally-closed-domain]] defines integrally closed domains in the inline normality convention. [[math:def-derived-category-of-an-abelian-category]] fixes the cochain shift $C[n]^a=C^{a+n}$ with differential $(-1)^n d_C^{a+n}$, so $H^0(C[n])=H^n(C)$.

## External input
The graded-comparison premise documented in reference 1 is used through [[thm-author-74a9c17e63f1-source-multiplicative-input]] in [F2], on the actual tower and complexes of [F1]. Prime-field restriction and the stage-to-image transport below are local arguments. Reference 0 records the original projection convention and its original normal scope; it supplies no additional third-stage injectivity premise.

## Justification
1.1 Let $\mathbb F$ be the prime field of $k$. Forgetting to $\mathbb F$ preserves the underlying qcqs scheme and takes each $k$-morphism to an $\mathbb F$-morphism. Under the Choice and size assumptions in [F1], restrict the natural graded equivalence in [F2] along this forgetful functor. By the definitions in [F1], its source and target are exactly the specified tower's graded cofiber and the specified shifted motivic complex on $X$. This applies over every field $k$ without a finite-type or convergence hypothesis. [F1, F2, given]

1.2 Apply the two injections supplied by [F3] to the given qcqs $X$: the second-stage-to-first-stage map on $\pi_0$ and the first-stage augmentation into $K_0(X)$ are injective. By the compatible augmentations in [F1], their composite is the second-stage augmentation, so it too is injective. Stage zero has its augmentation equivalence by [F1]. Thus every $q_i$ for $0\leq i\leq2$ is injective and is surjective onto its image by definition; in particular this applies on the stated normal qcqs schemes. [F1, F3, given]

2.1 The cofiber sequence $F^{i+1}_{\mathrm{mot}}K(X)\to F^i_{\mathrm{mot}}K(X)\to\operatorname{gr}^iF_{\mathrm{mot}}K(X)$ and step 1.1 give the stage-to-complex map. Applying $\pi_0$ and the cochain shift convention in [F5] identifies its target with $H^0(\mathbb Z(i)_{\mathrm{mot}}(X)[2i])=H^{2i,i}_{\mathrm{mot}}(X,\mathbb Z)$. This defines the displayed homomorphism for every $i\geq0$, naturally under pullback. [F1, F2, F4, F5, step 1.1]

3.1 Each $q_i$ in step 1.2 is an isomorphism of abelian groups. Compose its inverse with the projection in step 2.1 to obtain the displayed image-domain homomorphism. It is the unique map whose composite with $q_i$ is the stage projection, since $q_i$ is surjective. Equivalently, [F4]'s kernel criterion holds because the augmentation is injective. The construction is natural and agrees with the same transport in the finite-type special case. [F1, F4, step 2.1, step 1.2]

4.1 Step 1.2 identifies only the augmentations in stages zero, one and two. It gives no third-stage injectivity, so $p_3$ retains the stage domain of step 2.1 until a separate result supplies image-domain identification or descent. This establishes all stated conventions. [step 2.1, step 1.2, step 3.1] ∎

## Reading limits
For this adjudication, read the complete current assigned body and all ten direct supplier bodies. In particular, the determinant-fiber supplier's Statement explicitly supplies both component injections, and its Proof step 2.1 obtains the first injection from a pointed retraction. The repaired step 1.2 uses those supplied injections directly, without a new space-level exactness argument. The other declared contracts supply the actual filtered spectrum, motivic cohomology, graded comparison, cochain shift, image-group transport and formulation conditions. Their prerequisite chains are not audited here.

Read the mathematical bodies of all eight current direct consumers: the surface classification, zeroth- and first-projection lemmas, second-piece rank/determinant lemma, second-projection proposition, exterior-square calculation, perfect-image formula and low-dimensional quotient. Their projection uses remain compatible. The Definition, hypotheses, stage domains and dependency edges are unchanged, so this argument-only repair requests no consumer edit or further interface propagation.

The citation reading limits in the frontmatter are historical records of the preceding repair, not fresh reading credit for this adjudication. No PDF, page image or new external statement was read or imported in this round. The actual graded comparison and determinant constructions are used through their current declared supplier contracts. No original-author defect finding, independent repair acceptance, prerequisite-source audit or library publication is claimed. Central rendering and changed-item rejudgment remain controller tasks.

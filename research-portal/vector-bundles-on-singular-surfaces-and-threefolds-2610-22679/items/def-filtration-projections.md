---
id: def-filtration-projections
kind: definition
title: Graded filtration projections
status: draft
domain: mathematics
deps:
  - def-motivic-filtration
  - def-motivic-cohomology
  - thm-author-74a9c17e63f1-source-multiplicative-input
  - lem-author-e216acade157-split-determinant-fiber
  - lem-filtered-stage-exact-sequence
  - math:def-axiom-of-choice
dependency_roles:
  def-motivic-filtration: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  thm-author-74a9c17e63f1-source-multiplicative-input: mathematical-premise
  lem-author-e216acade157-split-determinant-fiber: mathematical-premise
  lem-filtered-stage-exact-sequence: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
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
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: arXiv:2309.08463v1 (arXiv stamp 15 September 2023; title-page date 18
        September 2023), printed pp. 21–22 and 27–28, Definitions 4.9/4.23 and
        Theorems 4.10(1)–(2)/4.24(1)–(2)
      reading_limits: Read the version-specific primary PDF extraction at these
        definitions, theorem clauses and immediate graded-piece arguments. The
        trace and descent constructions are imported through the named external
        supplier; no reconstruction or page-image inspection is claimed.
proof_strategy: direct
dependency_level: 19
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

## Facts & Assumptions
**Given:** A field $k$, a qcqs $k$-scheme $X$, Choice, compatible site and universe size bounds, and $i\geq0$. For the image-domain convention in stages one and two, also assume that $k$ is algebraically closed and $X$ is normal.

**Goal:** Define the actual stage projections and justify their low-stage image-domain convention throughout the original normal qcqs scope.

[F1] [[def-motivic-filtration]] supplies the actual tower, compatible augmentations, the stage-zero equivalence with $K(X)$ and the image groups. It and [[def-motivic-cohomology]] specify restriction from the prime field. [[math:def-axiom-of-choice]] supplies the assumed Choice premise for the perfect-complex realization and site constructions.

[F2] [[thm-author-74a9c17e63f1-source-multiplicative-input]] supplies the natural equivalence $\operatorname{gr}^iF_{\mathrm{mot}}K\simeq\mathbb Z(i)_{\mathrm{mot}}[2i]$ on qcqs prime-field schemes under the given Choice and size assumptions. The complexes and graded cofibers are those of the same actual tower; no convergence hypothesis is needed. [[def-motivic-cohomology]] specifies their cohomology notation.

[F3] [[lem-author-e216acade157-split-determinant-fiber]] applies to all qcqs schemes over a field under Choice and the existing size bounds. For $S=\Omega^\infty F^1_{\mathrm{mot}}K$, $B=\Omega^\infty\operatorname{gr}^1F_{\mathrm{mot}}K$ and $T=\Omega^\infty F^2_{\mathrm{mot}}K$, it supplies the actual pointed section $\kappa:B\to S$ of $d:S\to B$ and injections $\pi_0T(X)\to\pi_0S(X)\to K_0(X)$. The section is a map of spaces and need not be additive. The second injection uses the actual rank fiber over a discrete target.

[F4] [[lem-filtered-stage-exact-sequence]] gives homotopy exactness and the criterion for a stage projection to descend to its image: the kernel of the augmentation must lie in the kernel of the projection. In particular an injective augmentation suffices.

## Justification
1.1 Let $\mathbb F$ be the prime field of $k$. Forgetting to $\mathbb F$ preserves the underlying qcqs scheme and takes each $k$-morphism to an $\mathbb F$-morphism. Under the Choice and size assumptions in [F1], restrict the natural graded equivalence in [F2] along this forgetful functor. By the definitions in [F1], its source and target are exactly the specified tower's graded cofiber and the specified shifted motivic complex on $X$. This applies over every field $k$ without a finite-type or convergence hypothesis. [F1, F2, given]

1.2 Apply [F3] to the given qcqs $X$. Evaluating $d\kappa\simeq\mathrm{id}$ at $X$ makes $\pi_1S(X)\to\pi_1B(X)$ surjective. The actual fiber sequence therefore has zero boundary into $\pi_0T(X)$, and its transition $\pi_0F^2_{\mathrm{mot}}K(X)\to\pi_0F^1_{\mathrm{mot}}K(X)$ is injective. The first-stage augmentation is injective by the rank-fiber assertion in [F3]. Their composite is the second-stage augmentation by [F1], so it too is injective. Stage zero has its augmentation equivalence. Thus every $q_i$ for $0\leq i\leq2$ is injective and is surjective onto its image by definition; in particular this applies on the stated normal qcqs schemes. [F1, F3, F4, given]

2.1 The cofiber sequence $F^{i+1}_{\mathrm{mot}}K(X)\to F^i_{\mathrm{mot}}K(X)\to\operatorname{gr}^iF_{\mathrm{mot}}K(X)$ and step 1.1 give the stage-to-complex map. Applying $\pi_0$ identifies its target with $H^0(\mathbb Z(i)_{\mathrm{mot}}(X)[2i])=H^{2i,i}_{\mathrm{mot}}(X,\mathbb Z)$. This defines the displayed homomorphism for every $i\geq0$, naturally under pullback. [F1, F2, F4, step 1.1]

3.1 Each $q_i$ in step 1.2 is an isomorphism of abelian groups. Compose its inverse with the projection in step 2.1 to obtain the displayed image-domain homomorphism. It is the unique map whose composite with $q_i$ is the stage projection, since $q_i$ is surjective. Equivalently, [F4]'s kernel criterion holds because the augmentation is injective. The construction is natural and agrees with the same transport in the finite-type special case. [F1, F4, step 2.1, step 1.2]

4.1 Step 1.2 identifies only the augmentations in stages zero, one and two. It gives no third-stage injectivity, so $p_3$ retains the stage domain of step 2.1 until a separate result supplies image-domain identification or descent. This establishes all stated conventions. [step 2.1, step 1.2, step 3.1] ∎

The supplied article PDF text was read at its conventions on p. 3, Lemma 4.1 and proof on pp. 8–9, Section 5 opening on p. 10, and Section 6 opening on pp. 12–13. The version-specific Elmanto–Morrow reading is recorded in the reference above. The current definitions, graded source input, stage-exactness argument, determinant-fiber proof and its rank-zero and global-Picard suppliers were inspected for these applications. Their underlying motivic, determinant and descent constructions are used through those contracts, not reconstructed here. The exact outside-resolution packet, its low-filtration proposal and the relevant genuine rejected response were consulted as proposals and historical evidence; they confer no acceptance. The separate finite-type low-homotopy lemma remains unchanged.

## Reading limits
The supplied article PDF text was read at its conventions on p. 3, Lemma 4.1 and proof on pp. 8–9, Section 5 opening on p. 10, and Section 6 opening on pp. 12–13. The version-specific Elmanto–Morrow reading is recorded in the reference above. The current definitions, graded source input, stage-exactness argument, determinant-fiber proof and its rank-zero and global-Picard suppliers were inspected for these applications. Their underlying motivic, determinant and descent constructions are used through those contracts, not reconstructed here. The exact outside-resolution packet, its low-filtration proposal and the relevant genuine rejected response were consulted as proposals and historical evidence; they confer no acceptance. The separate finite-type low-homotopy lemma remains unchanged.

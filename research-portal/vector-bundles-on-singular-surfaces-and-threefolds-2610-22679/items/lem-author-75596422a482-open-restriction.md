---
id: lem-author-75596422a482-open-restriction
kind: lemma
title: Open restriction of admissible cycles
status: published
domain: mathematics
deps:
  - def-bloch-higher-cycle-complex
  - lem-author-89250b1d710c-cycle-open-locality
  - math:def-scheme-over-base
  - math:def-open-immersion-schemes
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:lem-finite-type-local-on-source-and-target
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-quasi-compact-and-quasi-separated-morphism
  - math:def-free-abelian-group
  - math:def-chain-map
  - math:def-axiom-of-choice
dependency_roles:
  def-bloch-higher-cycle-complex: mathematical-premise
  lem-author-89250b1d710c-cycle-open-locality: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-open-immersion-schemes: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:lem-finite-type-local-on-source-and-target: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-morphism: mathematical-premise
  math:def-free-abelian-group: mathematical-premise
  math:def-chain-map: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 5
sources:
  references:
    - title: "The Stacks Project, Lemma 29.15.6: Noetherian source of a finite-type
        morphism"
      url: https://stacks.math.columbia.edu/tag/01T6
      locator: Lemma 29.15.6, Noetherian/finite-type clause and displayed proof
      statement: A finite-type morphism to a Noetherian scheme has Noetherian source.
      hypotheses: A morphism of schemes with Noetherian target and of finite type.
        Apply to U over Spec(k); a field is Noetherian and its spectrum is
        quasi-compact.
      reading_limits: Read the displayed lemma and its short proof on the live tag
        page. Its cited finite-type algebra theorem and quasi-compactness facts
        are imported, not independently reconstructed. No separatedness
        hypothesis is added.
    - title: "The Stacks Project, Lemma 28.5.6: Noetherian locally closed subschemes"
      url: https://stacks.math.columbia.edu/tag/02IK
      locator: Lemma 28.5.6, Noetherian clause and proof hint
      statement: A locally closed subscheme of a Noetherian scheme is Noetherian; this
        includes every open subscheme.
      hypotheses: A Noetherian ambient scheme and a locally closed subscheme. Apply to
        the open subscheme V of U after establishing U is Noetherian.
      reading_limits: Read the displayed lemma and proof hint on the live tag page.
        The source omits a full proof; the quotient, localization and
        topological facts in the hint are imported. Only the stated subscheme
        assertion is used.
formulation_deps:
  - def-bloch-higher-cycle-complex
  - lem-author-89250b1d710c-cycle-open-locality
  - math:def-scheme-over-base
  - math:def-open-immersion-schemes
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:lem-finite-type-local-on-source-and-target
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-quasi-compact-and-quasi-separated-morphism
  - math:def-free-abelian-group
  - math:def-chain-map
  - math:def-axiom-of-choice
argument_deps:
  - def-bloch-higher-cycle-complex
  - lem-author-89250b1d710c-cycle-open-locality
  - math:def-scheme-over-base
  - math:def-open-immersion-schemes
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:lem-finite-type-local-on-source-and-target
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-quasi-compact-and-quasi-separated-morphism
  - math:def-free-abelian-group
  - math:def-chain-map
  - math:def-axiom-of-choice
---

## Statement
Assume the Axiom of Choice, retaining the foundational premise of the specified Bloch cycle construction.

Let $k$ be a field, $U$ a smooth finite-type $k$-scheme, $V\subset U$ open and $r\geq0$. Restricting each admissible generator to $V\times\Delta^n$, with empty restriction sent to zero, defines a chain map $j^*:z^r(U,\bullet)\to z^r(V,\bullet)$.

## Statement references
[[def-bloch-higher-cycle-complex]]

[[lem-author-89250b1d710c-cycle-open-locality]]

[[math:def-scheme-over-base]]

[[math:def-open-immersion-schemes]]

[[math:def-smooth-morphism-schemes]]

[[math:def-locally-finite-type-and-finite-type-morphism]]

[[math:lem-finite-type-local-on-source-and-target]]

[[math:def-locally-noetherian-and-noetherian-scheme]]

[[math:def-quasi-compact-and-quasi-separated-morphism]]

[[math:def-free-abelian-group]]

[[math:def-chain-map]]

## Facts & Assumptions
**Given:** $k,U,V,r$ as stated; $V$ carries its open-subscheme structure and its $k$-structure is the restriction of that of $U$. [[math:def-scheme-over-base]] [[math:def-open-immersion-schemes]]

**Goal:** Verify that the target complex exists, then establish admissibility and compatibility with boundaries.

[F1] The Bloch groups are free on admissible integral closed subschemes; their faces have finite local-length coefficients and their boundaries are alternating face sums, with zero groups in negative degrees. [[def-bloch-higher-cycle-complex]]

[F2] For finite-type schemes over a field, the cycle open-locality lemma supplies Noetherian simplex products, integral closed restrictions, the correspondence of surviving intersection components and preservation of their generic local rings, codimensions and face lengths. Its intersection and ordered-face identifications commute with open restriction, including empty restrictions. For the componentwise codimension convention in [F1], apply its codimension assertion inside each ambient irreducible component. [[lem-author-89250b1d710c-cycle-open-locality]]

[F3] Smoothness is a germwise property preserved under open restriction, and an empty source is smooth vacuously. [[math:def-smooth-morphism-schemes]]

[F4] Locally finite type is affine-local on source and target and therefore restricts to open subschemes; finite type means locally finite type and quasi-compact. [[math:lem-finite-type-local-on-source-and-target]] [[math:def-locally-finite-type-and-finite-type-morphism]]

[F5] Reference 0 in External input supplies Noetherianity of a finite-type scheme over a Noetherian base. Reference 1 supplies Noetherianity of its open subschemes. A Noetherian scheme is locally Noetherian and quasi-compact; a morphism is quasi-compact when inverse images of quasi-compact target opens are quasi-compact. [[math:def-locally-noetherian-and-noetherian-scheme]] [[math:def-quasi-compact-and-quasi-separated-morphism]]

[F6] A function on the basis of a free abelian group extends uniquely to a homomorphism. [[math:def-free-abelian-group]]

[F7] A chain map is a family of degreewise homomorphisms commuting with the differentials. [[math:def-chain-map]]

[A1] The specified Bloch complex and its admissible face construction are used under their stated Axiom of Choice. This premise is inherited from that construction; the subsequent calculation does not assert that Choice is necessary for its formal algebraic conclusion. [[math:def-axiom-of-choice]]

## External input
Reference 0 imports the finite-type Noetherian-source assertion from [Stacks, Lemma 29.15.6](https://stacks.math.columbia.edu/tag/01T6). Reference 1 imports the Noetherian locally closed-subscheme assertion from [Stacks, Lemma 28.5.6](https://stacks.math.columbia.edu/tag/02IK), used for the open subscheme $V$. Their hypotheses and actual reading limits are recorded in sources.references. The application below and the cycle-restriction argument are local deductions; the imported premises are not claimed to have been proved here.

## Proof
1.1 The field $k$ has only the ideals $0$ and $k$, and its spectrum has one point, so $\operatorname{Spec}k$ is Noetherian. By [F5], $U$ and then its open subscheme $V$ are Noetherian. Thus $V$ is quasi-compact. Since the only opens of $\operatorname{Spec}k$ are itself and the empty set, the structure morphism of $V$ is quasi-compact by [F5]; it is locally of finite type by [F4], hence of finite type. By [F3] it is smooth. This includes $V=\varnothing$: quasi-compactness uses the empty subcover and the pointwise conditions are vacuous. Both Bloch complexes in the Statement therefore exist by [F1]. For each $n\geq0$, [F2] makes a nonempty restriction of an admissible generator integral and closed in $V\times\Delta^n$. On every coordinate face, surviving components retain their generic local rings and codimension $r$, measured in their ambient irreducible component as in [F1]; components missing the open disappear. The restriction is consequently admissible, or zero if empty. Extend the generator rule uniquely by [F6] to $j_n^*$, and use the zero homomorphism in negative degrees. [given, F1, F2, F3, F4, F5, F6]

2.1 For $n\geq1$, [F2] identifies the restriction of each scheme-theoretic face intersection with the corresponding face intersection after restriction, using the same ordered face coordinates as [F1]. Its surviving components have the same generic local rings and the same coordinate $t_i$, so the quotient modules defining their finite lengths are identified and their coefficients agree. Components missing the open contribute zero on both sides; an empty generator restriction has every face restriction empty. Thus $j_{n-1}^*d_i^n=d_i^n j_n^*$ on generators, and by linearity on cycles. Taking alternating sums gives $j_{n-1}^*\partial_n=\partial_nj_n^*$. For $n\leq0$ both sides are zero by [F1]. These degreewise homomorphisms are the asserted chain map by [F7], including when $U$ or $V$ is empty. [F1, F2, F7, step 1.1] ∎

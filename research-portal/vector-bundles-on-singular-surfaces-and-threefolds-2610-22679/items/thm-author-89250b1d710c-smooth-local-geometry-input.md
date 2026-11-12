---
id: thm-author-89250b1d710c-smooth-local-geometry-input
kind: theorem
title: External geometric inputs for affine reduction
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - math:def-scheme
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-irreducible-component-scheme
  - math:def-integral-scheme
  - math:def-affine-scheme
  - math:def-affine-open-subscheme
  - math:def-embedding-dimension-and-regular-local-ring
  - math:def-integral-closure-and-integrally-closed-domain
  - math:def-dimension-noetherian-topological-space
  - math:def-noetherian-topological-space
  - math:def-separated-scheme-over-base
  - math:lem-noetherian-subspaces-and-compact-opens
  - math:lem-noetherian-space-has-finitely-many-irreducible-components
  - math:cor-affine-scheme-quasi-compact
  - math:cor-affine-schemes-separated
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  math:def-scheme: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:def-irreducible-component-scheme: mathematical-premise
  math:def-integral-scheme: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:def-affine-open-subscheme: mathematical-premise
  math:def-embedding-dimension-and-regular-local-ring: mathematical-premise
  math:def-integral-closure-and-integrally-closed-domain: mathematical-premise
  math:def-dimension-noetherian-topological-space: mathematical-premise
  math:def-noetherian-topological-space: mathematical-premise
  math:def-separated-scheme-over-base: mathematical-premise
  math:lem-noetherian-subspaces-and-compact-opens: mathematical-premise
  math:lem-noetherian-space-has-finitely-many-irreducible-components: mathematical-premise
  math:cor-affine-scheme-quasi-compact: mathematical-premise
  math:cor-affine-schemes-separated: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: The Stacks Project, Schemes smooth over fields
      url: https://stacks.math.columbia.edu/tag/04QM
      locator: Lemmas 33.25.3 and 33.25.4, including their displayed proofs.
      statement: Smoothness over a field implies regularity and normality.
      hypotheses: The structure morphism X to Spec(k) is smooth; k is a field. No
        global finite-type or separatedness assumption is needed.
      reading_limits: Read these two statements and their displayed proofs. Import
        their conclusions; the linked commutative-algebra results and
        geometric-regularity criteria were not reconstructed.
    - title: The Stacks Project, Normal schemes
      url: https://stacks.math.columbia.edu/tag/0357
      locator: Lemma 28.7.5, implication (1) to (2) and the last paragraph of its proof.
      statement: If each quasi-compact open of a normal scheme has finitely many
        irreducible components, the components are disjoint open normal integral
        subschemes.
      hypotheses: X is normal and every quasi-compact open in X has finitely many
        irreducible components.
      reading_limits: Read the statement and displayed proof, including the
        identification with irreducible components. The affine normal-ring
        decomposition cited there was not reconstructed.
    - title: The Stacks Project, Morphisms of finite type
      url: https://stacks.math.columbia.edu/tag/01T0
      locator: Lemma 29.15.2, final assertion; Lemma 29.15.6, Noetherian case.
      statement: Restriction to open subschemes preserves locally finite type
        morphisms. A finite-type morphism with Noetherian target has Noetherian
        source.
      hypotheses: For restriction, f is locally of finite type and the chosen source
        and target are open subschemes with the source mapping into the target.
        For Noetherianity, f is of finite type and its target is Noetherian.
      reading_limits: Read the statements and displayed proofs of both lemmas. Apply
        the second to Spec(k), which is Noetherian because k is a Noetherian
        ring and its spectrum is a point. The cited algebraic locality,
        Hilbert-basis and quasi-compactness results were not reconstructed.
    - title: The Stacks Project, Noetherian schemes
      url: https://stacks.math.columbia.edu/tag/01OU
      locator: Lemma 28.5.5, Noetherian case, and its displayed proof.
      statement: The underlying space of a Noetherian scheme is Noetherian.
      hypotheses: X is a Noetherian scheme.
      reading_limits: Read Lemma 28.5.5 and its displayed proof. Import only the
        Noetherian case; its cited algebraic-spectrum and finite-union inputs
        were not reconstructed.
dependency_level: 0
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. A scheme smooth over a field is regular and normal. If it is also noetherian, its irreducible components are disjoint normal integral open-and-closed subschemes. Consequently a smooth finite-type scheme over a field admits a cover by integral smooth affine opens, each separated and equidimensional.

Here regular means locally Noetherian with every local ring regular local, and normal means that every local ring is an integrally closed domain. Irreducible components carry their reduced induced subscheme structures. Equidimensional means that all irreducible components have the same chain dimension. Separatedness of an open in the cover is over the ground field (and it is also absolutely separated). For the empty scheme the cover is empty. No separatedness or equidimensionality of the original scheme is assumed.

## Statement references

[[math:def-axiom-of-choice]]

[[math:def-scheme]]

[[math:def-smooth-morphism-schemes]]

[[math:def-locally-finite-type-and-finite-type-morphism]]

[[math:def-locally-noetherian-and-noetherian-scheme]]

[[math:def-irreducible-component-scheme]]

[[math:def-integral-scheme]]

[[math:def-affine-scheme]]

[[math:def-affine-open-subscheme]]

[[math:def-embedding-dimension-and-regular-local-ring]]

[[math:def-integral-closure-and-integrally-closed-domain]]

[[math:def-dimension-noetherian-topological-space]]

[[math:def-noetherian-topological-space]]

[[math:def-separated-scheme-over-base]]

[[math:lem-noetherian-subspaces-and-compact-opens]]

[[math:lem-noetherian-space-has-finitely-many-irreducible-components]]

[[math:cor-affine-scheme-quasi-compact]]

[[math:cor-affine-schemes-separated]]

## External input

Smoothness over a field implies regularity and normality, by Stacks Lemmas 33.25.3 and 33.25.4 (reference 0).

A normal scheme whose every quasi-compact open has finitely many irreducible components is the disjoint union of its open normal integral components, by Stacks Lemma 28.7.5 and its proof (reference 1).

Restriction to open subschemes preserves locally finite type morphisms. A finite-type morphism to a Noetherian scheme has Noetherian source, by Stacks Lemmas 29.15.2 and 29.15.6 (reference 2).

The underlying space of a Noetherian scheme is Noetherian, by Stacks Lemma 28.5.5 (reference 3).

These are imported premises. The component-hypothesis check and the affine-cover construction below are local deductions, not claimed reconstructions of the imported proofs.

## Facts & Assumptions

**Given:** A field $k$, a smooth $k$-scheme $X$, and the Axiom of Choice. For the second assertion additionally assume $X$ Noetherian; for the cover assertion additionally assume $X$ of finite type over $k$.

[F1] The smooth regularity and normality premise is imported as reference 0 in External input.

[F2] The normal-component decomposition, conditional on finiteness in every quasi-compact open, is imported as reference 1 in External input.

[F3] The open-restriction and finite-type Noetherianity premises are imported as reference 2 in External input.

[F4] The Noetherian scheme-to-topology premise is imported as reference 3 in External input.

[A1] Choice is assumed exactly to meet the hypotheses of the two topological finiteness suppliers in [F5] and the affine quasi-compactness supplier in [F9]. [[math:def-axiom-of-choice]]

[F5] Under Choice every subspace of a Noetherian topological space is Noetherian, and every Noetherian topological space has finitely many irreducible components. [[math:lem-noetherian-subspaces-and-compact-opens]] [[math:lem-noetherian-space-has-finitely-many-irreducible-components]]

[F6] Every point of a scheme has an affine open neighborhood. Open subschemes carry the restricted structure sheaf, so an affine open of an open component is an affine open of $X$. [[math:def-scheme]] [[math:def-affine-open-subscheme]] [[math:def-affine-scheme]]

[F7] An integral scheme is nonempty, and equivalently all its nonempty affine opens are spectra of domains. Its irreducible underlying space has just one irreducible component. [[math:def-integral-scheme]] [[math:def-irreducible-component-scheme]]

[F8] Smoothness is preserved by open restriction, as part of its germwise definition. A finite-type morphism is locally of finite type and quasi-compact. [[math:def-smooth-morphism-schemes]] [[math:def-locally-finite-type-and-finite-type-morphism]]

[F9] Under Choice affine schemes are quasi-compact. Every morphism between affine schemes is separated; this applies both to the structure morphism to $\operatorname{Spec}k$ and to that to $\operatorname{Spec}\mathbb Z$. [[math:cor-affine-scheme-quasi-compact]] [[math:cor-affine-schemes-separated]] [[math:def-separated-scheme-over-base]]

## Proof

**Goal:** Establish the statement under its stated hypotheses.

**Given:** The data and conditional hypotheses in Facts & Assumptions, with the conventions in the Statement.

1.1 By [F1], $X$ is regular and normal. If $X$ is Noetherian, [F4] makes $|X|$ Noetherian. For every quasi-compact open $V\subseteq X$, [F5] makes $|V|$ Noetherian and gives finitely many irreducible components of $V$. This verifies the full hypothesis of [F2], not merely finiteness for $X$ itself. Thus the components of $X$, with the structures specified in [F7], are disjoint open normal integral subschemes. They are closed by the definition of an irreducible component, so they are open and closed. [A1, F1, F2, F4, F5, F7, given]

2.1 If $X$ is of finite type over $k$, then $\operatorname{Spec}k$ is Noetherian: the field has only the ideals $0$ and $k$, and its one-point spectrum is quasi-compact. By [F3] and the definition of Noetherian scheme, $X$ is Noetherian, so step 1.1 applies. Use the family of all nonempty affine opens $U$ in its components $C$; it covers $X$ by [F6]. Every nonempty affine open of $U$ is also a nonempty affine open of the integral scheme $C$, hence is the spectrum of a domain by [F7]; the same criterion shows that $U$ is integral. Smoothness restricts to $U$ by [F8]. Also $U\to\operatorname{Spec}k$ is locally of finite type by [F3], and is quasi-compact by [F9] because its target is a point; hence it is of finite type by [F8]. It is separated over $k$ and absolutely separated by [F9]. Its irreducibility gives one irreducible component by [F7], so it is equidimensional under the stated convention. This constructs the asserted cover; if $X$ is empty the family is empty. Choice is used only through [F5] and [F9] as recorded in [A1]. [A1, F3, F6, F7, F8, F9, step 1.1, construct] ∎

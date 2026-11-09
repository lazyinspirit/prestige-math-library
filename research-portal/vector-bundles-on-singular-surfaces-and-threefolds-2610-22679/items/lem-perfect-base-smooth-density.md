---
id: lem-perfect-base-smooth-density
kind: lemma
title: Smooth density and normal codimension over a perfect field
status: published
domain: mathematics
deps:
  - math:thm-smooth-locus-open
  - math:thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - math:lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct
  - math:thm-stalk-structure-sheaf-prime-localization
  - math:def-axiom-of-choice
  - lem-normal-scheme-component-reduction
  - lem-author-2389e5bafea8-generic-reduced-local-ring
  - lem-author-2389e5bafea8-field-regular-local
  - lem-author-2389e5bafea8-dvr-regular-local
  - lem-author-2389e5bafea8-open-generic-density
  - lem-author-2389e5bafea8-codimension-exclusion
  - lem-author-2389e5bafea8-perfect-pointwise-smoothness
dependency_roles:
  math:thm-smooth-locus-open: mathematical-premise
  math:thm-height-one-localisation-of-normal-noetherian-domain-is-dvr: mathematical-premise
  math:lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct: mathematical-premise
  math:thm-stalk-structure-sheaf-prime-localization: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-normal-scheme-component-reduction: mathematical-premise
  lem-author-2389e5bafea8-generic-reduced-local-ring: mathematical-premise
  lem-author-2389e5bafea8-field-regular-local: mathematical-premise
  lem-author-2389e5bafea8-dvr-regular-local: mathematical-premise
  lem-author-2389e5bafea8-open-generic-density: mathematical-premise
  lem-author-2389e5bafea8-codimension-exclusion: mathematical-premise
  lem-author-2389e5bafea8-perfect-pointwise-smoothness: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 2
---

## Statement
Assume the Axiom of Choice. Let $X$ be a reduced finite-type scheme over a perfect field $k$. Its smooth locus is open and meets every irreducible component in a dense open subset. If $X$ is normal, its nonsmooth locus has codimension at least two in every irreducible component.

A field is perfect if all its algebraic extensions are separable. Finite type means that $X$ has a finite affine cover by spectra of finitely generated $k$-algebras. Reduced means that every local ring has no nonzero nilpotents; normal means that every local ring is an integrally closed domain. The smooth locus is the set of points where $X\to\operatorname{Spec} k$ is smooth. For an integral component $C$, the codimension of a point is the supremum of lengths of strict chains of irreducible closed subsets from $C$ to the closure of the point; the codimension of a subset is the infimum over its points, with the empty subset having codimension $+\infty$.

## Facts & Assumptions

**Given:** AC, a perfect field $k$, and a reduced finite-type $k$-scheme $X$.

**Goal:** Prove openness and componentwise density of the smooth locus and, when $X$ is normal, the codimension bound on its complement.

[F1] A finite-variable polynomial algebra over a field is noetherian ([[math:lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct]]). Its quotients are noetherian, because the preimage of every ideal is finitely generated.

[F2] Under AC, the smooth locus of a locally finitely presented morphism is open ([[math:thm-smooth-locus-open]]). AC means that every family of nonempty sets has a choice function ([[math:def-axiom-of-choice]]).

[F3] For a reduced scheme locally of finite type over a perfect field, smoothness at a point is equivalent to regularity of its local ring; this is an external input ([[lem-author-2389e5bafea8-perfect-pointwise-smoothness]]).

[F4] Under the assumed AC, a generic local ring of a reduced scheme is a field, and every field is regular local ([[lem-author-2389e5bafea8-generic-reduced-local-ring]], [[lem-author-2389e5bafea8-field-regular-local]]). An open subset containing the generic point of a component meets it densely ([[lem-author-2389e5bafea8-open-generic-density]]).

[F5] Under AC, a noetherian normal scheme is a finite disjoint union of open-and-closed integral normal components, and each affine coordinate ring is a finite product of noetherian integrally closed domains ([[lem-normal-scheme-component-reduction]]). For a noetherian integrally closed domain, localization at a height-one prime is a discrete valuation ring ([[math:thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]]), and such a ring is regular local ([[lem-author-2389e5bafea8-dvr-regular-local]]). Affine stalks are prime localizations ([[math:thm-stalk-structure-sheaf-prime-localization]]).

[F6] A subset of an integral scheme with no points of codimension zero or one has codimension at least two ([[lem-author-2389e5bafea8-codimension-exclusion]]).

## Proof

1.1 On each finite-type affine chart $\operatorname{Spec} A$, write $A=k[t_1,\ldots,t_n]/I$. By [F1], the polynomial ring is noetherian, so $I$ is finitely generated and $A$ is both noetherian and finitely presented over $k$. Thus $X$ is noetherian and its structure morphism is locally finitely presented. By [F2] its smooth locus $U$ is open. [F1, F2, given]

2.1 Each irreducible component of a scheme has a generic point $\eta$. By reducedness and [F4], $\mathcal O_{X,\eta}$ is a field and hence regular local. The pointwise input [F3] therefore gives $\eta\in U$. By [F4], $U\cap C$ is dense open in each component $C$. This also covers the empty scheme vacuously. [F3, F4, step 1.1, given]

2.2 Now suppose $X$ normal. By step 1.1 and [F5], its components are open-and-closed integral normal schemes. Fix one component $C$ and a point $x$ of codimension one in it. Choose an affine neighborhood $\operatorname{Spec} A\subset C$ of $x$. The component reduction [F5] makes $A$ a finite product of noetherian integrally closed domains; since its spectrum is a nonempty open subset of the irreducible space $C$, it is irreducible, so there is only one nonzero factor. Thus $A$ is a noetherian integrally closed domain. The prime $\mathfrak p$ corresponding to $x$ has height one: chains of primes below $\mathfrak p$ correspond to chains of irreducible closed subsets of $C$ ending at $\overline{\{x\}}$, because intersecting with this open neighborhood and taking closures are inverse on such chains. By [F5], $\mathcal O_{X,x}\cong A_{\mathfrak p}$ is a discrete valuation ring and hence regular local. [F5, step 1.1, given]

3.1 The generic point of $C$ is smooth by step 2.1, and every codimension-one point is smooth by step 2.2 and [F3]. Hence $C\setminus U$ contains no point of codimension zero or one. Applying [F6] proves its codimension is at least two. AC is used through the explicitly AC-dependent suppliers [F2], [F4] and [F5]. [F2, F3, F5, F6, step 2.1, step 2.2] ∎

---
id: thm-milnor-invariants-isotopy-and-link-homotopy-scope
kind: theorem
title: Isotopy invariance and nonrepeating link-homotopy scope of Milnor invariants
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-based-string-link-and-labeled-link-peripheral-system
  - def-milnor-integer-and-residue-invariants
  - lem-milnor-basing-indeterminacy-and-self-crossing-scope
  - thm-string-link-nilpotent-peripheral-identifications
  - lem-a-vector-field-along-an-embedded-submanifold-extends-to-a-neighbourhood-and-globally-when-closed
  - thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set
  - thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: John Milnor, Link Groups
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnorlink.pdf
      locator: §§4–5, PDF pp. 14–16, link-homotopy and Milnor coefficient discussion
    - title: Ryan Stees, Milnor’s Invariants for Knots and Links in Closed Orientable
        3-Manifolds
      url: https://scholarworks.iu.edu/iuswrrest/api/core/bitstreams/54c7d68f-d982-4e1f-9550-e54140ada5ea/content
      locator: §2.5, printed pp. 16–18 (PDF pp. 24–26), based coefficients and
        closed-link residues
---

## Statement

Assume AC. Every integer Milnor coefficient of a based string link is invariant
under smooth isotopy through string links fixing the endpoint collars, with the selected tubes, parallels, meridians, and access paths transported by a relative ambient extension of that isotopy. For
closed labeled oriented links, the residue candidate $\bar\mu_L(I)$ is invariant
under ambient isotopy. A link-homotopy is a finite sequence of ambient isotopies
and local crossing changes in which the two branches at every crossing change
belong to the same component. Under link-homotopy, $\bar\mu_L(I)$ is invariant
when the entries of $I$ are pairwise distinct. No invariance for repeated-index
sequences under link-homotopy is asserted.

## Statement references

[Milnor, *Link Groups*, §§4–5](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnorlink.pdf)

[Stees, §2.5](https://scholarworks.iu.edu/iuswrrest/api/core/bitstreams/54c7d68f-d982-4e1f-9550-e54140ada5ea/content)

## Facts & Assumptions

**Given:** Full AC, the based peripheral data, and the definitions of the integer and residue coefficients.

[A1] Full AC, written AC, is [[def-axiom-of-choice]].

[F1] Based string-link coefficients are extracted from unique longitude classes in finite nilpotent quotients using the Magnus expansion. [[def-milnor-integer-and-residue-invariants]], [[thm-string-link-nilpotent-peripheral-identifications]]

[F2] For every index sequence, changing closed-link basings and finite longitude-word lifts preserves the residue and its lower-coefficient ideal. Self-crossing changes preserve these data for pairwise-distinct index sequences. [[lem-milnor-basing-indeterminacy-and-self-crossing-scope]]

[F3] Ambient isotopy of oriented links carries exteriors, positive meridians, and peripheral tori to the corresponding data. [[def-oriented-link-in-s-three-and-ambient-isotopy]], [[def-based-string-link-and-labeled-link-peripheral-system]]

[L1] Full AC implies countable choice. [[thm-choice-implies-dependent-implies-countable-choice]], [[def-axiom-of-choice]], [[def-countable-choice]]

[F4] Under countable choice, a smooth vector field along a closed embedded submanifold extends to a global smooth vector field. [[lem-a-vector-field-along-an-embedded-submanifold-extends-to-a-neighbourhood-and-globally-when-closed]]

[F5] A compact set in an open set of a smooth manifold admits a smooth cutoff equal to one near the compact set and supported in the open set. [[thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set]]

[F6] A smooth time-dependent vector field with uniformly compact support has a global evolution on a compact time interval. [[thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval]]

## Proof

**Given:** The isotopy or link-homotopy described in the statement.

1.1 Let $\tau_t$ be the given smooth isotopy through string links, fixed on common endpoint collars. Reparametrize it to be stationary near $t=0,1$. Choose fixed disjoint smooth closure arcs outside $C=D^2\times[0,1]$, using the closure construction in the based-string-link definition, and adjoin them to the moving intervals. The result is a smooth family of closed links in $S^3$, constant on the closure arcs and endpoint collars; extend it constantly in time outside $[0,1]$. The map $\Theta:\mathbb R\times\bigsqcup_i S^1\to\mathbb R\times S^3$, $\Theta(t,s)=(t,\overline\tau_t(s))$, is an injective immersion and is proper: injectivity and immersion follow from the time coordinate and the embedding of each link slice, while the preimage of a compact set lies in a compact time interval times the finite union of circles. Thus its image is a closed embedded submanifold. The vector field $Y(t,\overline\tau_t(s))=(0,\partial_t\overline\tau_t(s))$ along this graph is smooth and vanishes on the fixed closure arcs and endpoint collars. Since the motion is confined to a compact subinterval of each string component away from its endpoint collars, choose a compact set $K\subset\operatorname{int}C$ containing every point where this velocity can be nonzero. By [A1] and [L1], [F4] extends $Y$ to a global smooth vector field on $\mathbb R\times S^3$. Let $X_t$ be its $S^3$ component. By [F5] choose $\chi:S^3\to[0,1]$ equal to one near $K$ and supported in $\operatorname{int}C$, and replace $X_t$ by $\chi X_t$. This field still equals the prescribed velocity along the entire closed link: it is unchanged wherever the velocity is nonzero and is zero on the stationary arcs. Its supports lie in the compact set $\operatorname{supp}\chi\subset\operatorname{int}C$. Integrate it by [F6]. Uniqueness of the flow gives an ambient isotopy $H_t$ with $H_t\overline\tau_0=\overline\tau_t$; its support in $\operatorname{int}C$ makes $H_t$ the identity near $\partial C$, so it preserves $C$ and fixes the endpoint collars, bottom basepoint, and side connector. This is the relative based isotopy-extension argument for string links. [A1, L1, F4, F5, F6, given, construct]

1.2 Under [A1], an ambient isotopy of closed links induces the peripheral correspondence in [F3]. Applying that correspondence to the based word-lift data gives the transported based residue candidate. The first assertion of [F2] proves independence of every meridian basing and finite longitude-word lift, with exactly equal lower-coefficient ideals. Applying it to the transported word data proves that the two closed-link residues agree in the same residue group. [A1, F2, F3]

2.1 In the string-link case, take the target peripheral datum to be the transported datum required in the statement. Restricting $H_1$ gives a based homeomorphism of string-link exteriors that transports the selected tubes, positive meridians, parallels, and access paths. It fixes the endpoint basepoints and side connector, so the two end inclusions commute with the induced based group isomorphisms. By [F1], the longitude has a unique preimage in each finite bottom-end quotient; naturality carries that preimage to the corresponding class for the isotopic string link. The Magnus expansion is the same homomorphism on the transported meridian symbols, so every integer coefficient agrees. [A1, F1, step 1.1, construct]

3.1 Under [A1], a link-homotopy is generated by ambient isotopies and self-crossing changes. For pairwise-distinct indices, ambient isotopy is handled by step 1.2 and each self-crossing change is the second assertion of [F2]. Each move identifies the lower-coefficient ideals by [F2]; composing these finitely many equalities proves the asserted residue equality. No repeated-index conclusion is drawn. [A1, F2, step 1.2] ∎


---
id: lem-finite-etale-sections-over-separably-closed-extensions-in-zf
kind: lemma
title: Finite étale sections are invariant under separably closed field extension in ZF
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-finite-morphism-schemes
  - def-etale-morphism-schemes
  - def-separable-elements-and-separable-extensions
  - lem-finite-type-connected-components-over-separably-closed-fields-in-zf
  - lem-etale-morphisms-are-locally-standard-and-universally-open-in-zf
proof_strategy: direct
axiom_use: No choice or unspecified algebraic closure is used; all components and module witnesses are finite.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: The Stacks Project, Fundamental Groups of Schemes, Section 9
      url: https://stacks.math.columbia.edu/download/pione.pdf
      locator: The published local specialization source cites this context. The direct component and faithful-field-extension proof below is locally supplied.
---

## Statement

In ZF, let $k\subseteq K$ be specified separably closed fields, let $Z$ be a finite-type $k$-scheme, and let $E\to Z$ be a specified finite étale scheme. The natural map from the set of $Z$-sections of $E$ to the set of $Z_K$-sections of $E_K$ is a bijection. No properness, smoothness, algebraic-closure choice or fundamental-group construction is assumed.

## Statement references

[[def-finite-morphism-schemes]]

[[def-etale-morphism-schemes]]

[[def-separable-elements-and-separable-extensions]]

## Facts & Assumptions

**Given:** The two specified fields, the finite-type scheme and the specified finite étale map.

[F1] Finite-type connected components and their open-and-closed unions are unchanged by extension between specified separably closed fields in ZF. [[lem-finite-type-connected-components-over-separably-closed-fields-in-zf]]

[F2] Étale maps are universally open in ZF, and finite morphisms are given by finite affine algebras. [[lem-etale-morphisms-are-locally-standard-and-universally-open-in-zf]] [[def-finite-morphism-schemes]]

## Proof

**Proof technique:** descend the open-and-closed image of a section, then descend its inverse by faithful field extension.

1.1 The schemes $Z$ and $E$ are finite type over $k$ and have finitely many open-and-closed connected components. A section $s_K:Z_K\to E_K$ is a closed immersion because $E_K\to Z_K$ is separated, and is open because an étale section is an open immersion: on its local standard chart the inverse derivative gives an isomorphism onto a principal neighbourhood. Thus its image is a union of connected components of $E_K$. By [F1], that union is uniquely the base change of an open-and-closed subscheme $E_0\subseteq E$. [F1, F2, given, construct, algebra]

2.1 On each finite affine chart $V=\operatorname{Spec}A\subseteq Z$, write $E_0\times_ZV=\operatorname{Spec}B$ with $B$ a finite $A$-algebra. The map $A\to B$ becomes an isomorphism after tensoring with $K$ over $k$, since the image of $s_K$ maps isomorphically to $Z_K$. Tensoring a specified $k$-vector-space map with $K$ is faithful: a finite linear relation can be tested after choosing a basis of the finite-dimensional span of its coefficients. Hence both the kernel and cokernel of $A\to B$ vanish, so $E_0\to Z$ is an isomorphism. Its inverse is a section descending $s_K$. [F1, F2, step 1.1, construct, algebra]

3.1 If two $Z$-sections become equal over $K$, their equalizer is a closed subscheme of $Z$ because $E\to Z$ is separated. On a finite affine cover, equality after tensoring with $K$ means equality of finitely many images of algebra generators; faithful field extension gives the equality over $k$. Hence the two sections already agree. This proves both surjectivity and injectivity without choosing geometric points. [F2, step 2.1, given, algebra] ∎

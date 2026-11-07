---
id: def-semiabelian-variety-over-a-scheme
kind: definition
title: "Semiabelian variety over a scheme"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-abelian-scheme
  - def-algebraic-torus-over-a-field
  - def-group-scheme-over-a-scheme
  - def-closed-immersion-schemes
  - def-faithfully-flat-morphism-schemes
  - def-scheme
  - def-smooth-morphism-schemes
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "G. Faltings and G. Wüstholz et al., *Rational Points*, Chapter IV, §1"
      url: "https://yhzhumath.github.io/Mordell2024/RP.pdf"
      locator: "Definitions of extensions of abelian schemes by tori and semiabelian schemes."
verification:
  precheck: pending
---

## Definition

Let $S$ be a scheme. A **semiabelian scheme** over $S$ is a smooth commutative $S$-group scheme $G$ in a sequence of $S$-group schemes
$$0\longrightarrow T\longrightarrow G\longrightarrow B\longrightarrow0,$$
where $0$ denotes the identity group scheme $S$, $T$ is an $S$-torus, and $B$ is an abelian scheme over $S$. The sequence is exact when $T\to G$ is a closed immersion, $G\to B$ is faithfully flat, and the scheme-theoretic kernel of $G\to B$ is $T$.

## Definition references

[[def-abelian-scheme]]

[[def-group-scheme-over-a-scheme]]

[[def-algebraic-torus-over-a-field]]

[[def-closed-immersion-schemes]]

[[def-faithfully-flat-morphism-schemes]]

[[def-scheme]]

[[def-smooth-morphism-schemes]]

[Faltings–Wüstholz, *Rational Points*, Chapter IV, §1](https://yhzhumath.github.io/Mordell2024/RP.pdf)

## Facts & Assumptions

**Given:** A scheme $S$, an $S$-torus $T$, an abelian scheme $B/S$, and an extension of $B$ by $T$ in commutative group schemes.

[F1] [[def-abelian-scheme]]: an abelian scheme is proper and smooth over its base, with geometrically connected fibers.

[F2] [[def-group-scheme-over-a-scheme]]: an $S$-group scheme is a group object in $S$-schemes, and commutativity means multiplication is unchanged by exchanging the two factors.

[F3] [[def-algebraic-torus-over-a-field]]: an $S$-torus is fpqc-locally isomorphic to $\mathbb G_{m,S}^r$ for finite $r$, and its rank is locally constant.

[F4] [[def-closed-immersion-schemes]]: a closed immersion identifies the source with a closed subscheme of the target.

[F5] [[def-faithfully-flat-morphism-schemes]]: faithfully flat morphisms are flat and surjective.

[F6] [[def-group-scheme-over-a-scheme]]: the scheme-theoretic kernel of a group-scheme morphism is the fibre product with the target identity section; its functor of points is the kernel of the induced group homomorphism.

[F7] [[def-scheme]] and [[def-smooth-morphism-schemes]]: $S$ is a scheme and smoothness is the stated scheme-morphism property.

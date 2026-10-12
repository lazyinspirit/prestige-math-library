---
id: thm-projective-pushforward-of-smooth-constant-sheaves-has-semisimple-perverse-cohomology
kind: theorem
title: "Compact smooth projective pushforwards have semisimple perverse cohomology in characteristic zero"
status: draft
origin: session
deps:
  - def-axiom-of-choice
  - thm-relative-hard-lefschetz-and-perverse-splitting-for-projective-algebraic-maps
  - lem-characteristic-zero-scalar-extension-preserves-geometric-local-system-semisimplicity
  - thm-equivariant-constructible-ext-is-degreewise-finite-and-compatible-with-characteristic-zero-scalars
  - thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "de Cataldo and Migliorini, The Hodge theory of algebraic maps, projective decomposition and semisimplicity theorem"
      url: https://arxiv.org/pdf/math/0306030
---

## Statement

Assume the inherited Axiom of Choice. Let $f:X\to Y$ be a projective morphism of complex projective varieties, $X$ smooth of pure complex dimension $n$, and let $k$ be any characteristic-zero coefficient field. Then $Rf_*k_X[n]$ is a finite direct sum of shifts of simple perverse sheaves on $Y$; equivalently all its perverse cohomology objects are semisimple and it splits into their shifted sum. This holds without any assumption that $k$ embeds in $\mathbb C$.

## Facts & Assumptions

**Given:** the complex projective map, smooth source, coefficient field and inherited choice assumption of the Statement.

[F1] The rational compact projective theorem gives finite perverse splitting, IC semisimplicity and semisimple complexifications of the rational constituent local systems ([[thm-relative-hard-lefschetz-and-perverse-splitting-for-projective-algebraic-maps]]).

[F2] If a finite-rank rational local system has semisimple complexification, its extension to every characteristic-zero field is semisimple, by the full local regular-trace argument of [[lem-characteristic-zero-scalar-extension-preserves-geometric-local-system-semisimplicity]].

[F3] The actual finite constructible coefficient comparison commutes with proper pushforward, perverse truncation and intermediate extension/IC ([[thm-equivariant-constructible-ext-is-degreewise-finite-and-compatible-with-characteristic-zero-scalars]]). Simple perverse sheaves are IC objects of simple finite-rank local systems ([[thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]]).

## Proof

**Given:** the data of the Statement and the actual suppliers above.

1.1 The canonical inclusion $\mathbb Q\hookrightarrow k$ makes $k_X$ the scalar extension of $\mathbb Q_X$. Apply [F3] to the finite splitting of [F1]. It gives the finite splitting of $Rf_*k_X[n]$ into scalar-extended perverse cohomology objects, each a finite sum of scalar-extended rational IC objects. Intermediate-extension comparison identifies each of the latter with IC of the scalar-extended local system. [F1, F3, given, construct]

2.1 The rational local systems in [F1] have semisimple complexification, so [F2] makes their extensions to $k$ finite semisimple local systems. Decomposing each into its finitely many simple local-system constituents and applying the additive IC construction from [F3] gives finitely many simple perverse sheaves. Combine these with the finite splitting of step 1.1. This proves every assertion and uses no embedding of $k$ into $\mathbb C$. [F2, F3, step 1.1] ∎

## Proof contract boundary

This coefficient-field reduction is complete relative to the actual rational compact projective theorem and the constructed scalar/IC formalism. It does not assert semisimplicity follows from rational simplicity alone. The complexified local-system clause in [F1] is an indispensable owned output of the projective Hodge/monodromy proof.

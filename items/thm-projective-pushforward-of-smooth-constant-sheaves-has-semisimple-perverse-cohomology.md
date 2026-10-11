---
id: thm-projective-pushforward-of-smooth-constant-sheaves-has-semisimple-perverse-cohomology
kind: theorem
title: "Compact smooth projective pushforwards have semisimple perverse cohomology in characteristic zero"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 25
deps: [def-axiom-of-choice, lem-analytic-constructible-sheaves-admit-coherent-six-operations, lem-characteristic-zero-scalar-extension-preserves-geometric-local-system-semisimplicity, thm-equivariant-constructible-ext-is-degreewise-finite-and-compatible-with-characteristic-zero-scalars, thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes, thm-relative-hard-lefschetz-and-perverse-splitting-for-projective-algebraic-maps]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "M. A. A. de Cataldo and L. Migliorini, «The Hodge theory of algebraic maps», arXiv:math/0306030v2 (complete arXiv PDF)"
      url: "https://arxiv.org/pdf/math/0306030"
      locator: "Theorem 2.1.1(c) and §6 (semisimplicity of the middle perverse cohomology), printed pp. 7–8 and 51–59"
---

## Statement

Assume the inherited Axiom of Choice. Let $f:X\to Y$ be a projective morphism of complex projective varieties, $X$ smooth of pure complex dimension $n$, and let $k$ be any characteristic-zero coefficient field. Then $Rf_*k_X[n]$ is a finite direct sum of shifts of simple perverse sheaves on $Y$; equivalently all its perverse cohomology objects are semisimple and it splits into their shifted sum. This holds without any assumption that $k$ embeds in $\mathbb C$.

## Facts & Assumptions

**Given:** The projective morphism $f:X\to Y$ of complex projective varieties with $X$ smooth of pure complex dimension $n$, the characteristic-zero coefficient field $k$ with its canonical inclusion of $\mathbb Q$, and the Axiom of Choice inherited from the suppliers.

[F1] The rational compact projective theorem [[thm-relative-hard-lefschetz-and-perverse-splitting-for-projective-algebraic-maps]] gives a finite perverse splitting of $Rf_*\mathbb Q_X[n]$, the IC description of its perverse cohomology objects with simple rational local systems, and semisimplicity of the complexifications of those rational local systems.

[F2] A finite-rank rational local system whose complexification is semisimple remains semisimple after extension of scalars to every characteristic-zero field, by [[lem-characteristic-zero-scalar-extension-preserves-geometric-local-system-semisimplicity]].

[F3] Ordinary constructible six operations, including proper pushforward and Verdier duality, commute with field extension by [[lem-analytic-constructible-sheaves-admit-coherent-six-operations]]. Exact field extension preserves the perverse upper support bounds, and its compatibility with duality preserves the lower bounds, so it is perverse-exact. Uniqueness of truncation triangles then gives compatibility with perverse truncation. On the hearts it preserves images, hence also the image of ${}^pH^0j_!\to{}^pH^0Rj_*$ defining intermediate extension. These deductions use the ordinary perverse structure of [F4].

[F4] Simple perverse sheaves are the intersection complexes of simple finite-rank local systems on smooth dense opens of irreducible supports, and the IC construction is additive in the local system, by [[thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]].

## Proof

**Given:** The map, source, coefficient field and suppliers of the Statement and Facts.

1.1 The canonical inclusion $\mathbb Q\hookrightarrow k$ makes the constant sheaf $k_X$ the scalar extension of $\mathbb Q_X$. Applying the constructible coefficient comparison of [F3] to the finite splitting of [F1] gives a finite splitting of $Rf_*k_X[n]$ into scalar-extended perverse cohomology objects, each of them a finite sum of scalar extensions of rational IC objects; the commuting of scalar extension with intermediate extension included in [F3] identifies each of these with the IC object of the scalar-extended rational local system. [F1, F3, F4, given, construct]

2.1 The rational local systems of [F1] have semisimple complexification, so [F2] makes their extensions to $k$ finite semisimple local systems. Decomposing each of them into finitely many simple local-system constituents and applying the additive IC construction of [F4] produces finitely many simple perverse sheaves on $Y$. Combined with the finite splitting of step 1.1 this exhibits $Rf_*k_X[n]$ as a finite direct sum of shifts of simple perverse sheaves, equivalently it shows that every perverse cohomology object is semisimple and that the complex splits into their shifted sum. At no point is an embedding of $k$ into $\mathbb C$ used, and no semisimplicity is inferred from rational simplicity alone: the complexified clause of [F1] is the indispensable input. [F1, F2, F3, F4, step 1.1] ∎

## Remarks

The ordinary coefficient comparison [F3] derives perverse-truncation and intermediate-extension compatibility from the ordinary six operations and the perverse-heart item [F4]. Proof step 2.1 of [[thm-equivariant-constructible-ext-is-degreewise-finite-and-compatible-with-characteristic-zero-scalars]] uses the same ordinary argument before transporting it to equivariant objects. The present reduction uses the rational compact projective theorem and scalar-extension lemma of [F1] and [F2], and no embedding of $k$ into $\mathbb C$ enters.

---
id: def-small-projective-generator-and-progenerator
kind: definition
title: "Small projective generators and progenerators"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 0
justified_by: [lem-small-projective-modules-are-exactly-finitely-generated-projective-modules]
aliases: []
deps: [def-abelian-category, def-small-locally-small-and-large-category, def-small-finite-and-large-limits-completeness-and-cocompleteness, def-products-and-coproducts, def-preservation-reflection-creation-continuity-and-cocontinuity, def-projective-object, def-generator-and-cogenerator-of-a-category, def-projective-module, def-generated-cyclic-finitely-generated-and-free-modules, def-direct-sum-of-a-family-of-modules]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "W. Crawley-Boevey, Noncommutative Algebra, §3.12, Definitions (cocomplete abelian category; finitely generated means Hom(P,-) preserves coproducts; generator; R is a projective generator)"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
    - title: "P. Etingen, S. Gelaki, D. Nikshych, V. Ostrik, Tensor Categories, printed p.10 (projective generator P and A = End(P)^op)"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $\mathcal C$ be a locally small cocomplete abelian category. An object $P$ of $\mathcal C$ is a **small projective generator** when (i) $P$ is projective ([[def-projective-object]]), (ii) $P$ is a generator ([[def-generator-and-cogenerator-of-a-category]]), and (iii) the abelian-group-valued functor $\mathcal C(P,-):\mathcal C\to\mathbf{Ab}$ preserves every set-indexed coproduct ([[def-preservation-reflection-creation-continuity-and-cocontinuity]], [[def-products-and-coproducts]]). Here "small" names this compactness property of the functor $\mathcal C(P,-)$; it does not assert that the underlying object, set, or module is small. For a unital ring $B$, a left $B$-module $P$ is a **progenerator** when $P$ is finitely generated ([[def-generated-cyclic-finitely-generated-and-free-modules]]), projective ([[def-projective-module]]), and a generator. For module categories the two notions agree: a left $B$-module is a small projective generator of $B\text{-Mod}$ if and only if it is a progenerator ([[lem-small-projective-modules-are-exactly-finitely-generated-projective-modules]]), and in particular the regular module ${}_BB$ is a small projective generator. No commutativity of $B$ is assumed, and both phrases are properties of an object, not existence axioms beyond the coproducts already required of $\mathcal C$.

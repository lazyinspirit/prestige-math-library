---
id: def-algebraic-space-as-fppf-sheaf
kind: definition
title: "Algebraic spaces over a scheme, defined as fppf sheaves"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
justified_by: [lem-scheme-functor-is-algebraic-space]
aliases: []
deps:
  - def-fppf-sheaf-and-sheafification
  - def-representable-morphism-of-presheaves
  - def-etale-morphism-schemes
  - def-presheaf-representable-functor-and-representation
  - def-scheme
  - def-morphism-of-schemes
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "The Stacks Project, Chapter 65 (Algebraic Spaces), Section 65.6"
      url: "https://stacks.math.columbia.edu/download/spaces.pdf"
      locator: "Definition 65.6.1 (tag 025Y), algebraic spaces as fppf sheaves with representable diagonal and etale scheme cover"
---

## Definition

An **algebraic space over $S$** is a presheaf of sets $F$ on
$(\mathit{Sch}/S)_{fppf}$ ([[def-fppf-sheaf-and-sheafification]]) such that:

1. $F$ is an fppf sheaf;
2. the diagonal morphism $F\to F\times F$ is representable by schemes
   ([[def-representable-morphism-of-presheaves]]);
3. there exists an $S$-scheme $U$ ([[def-scheme]]) together with a morphism
   $h_U\to F$ from the presheaf $h_U=\operatorname{Mor}_S(-,U)$ represented by
   $U$ ([[def-presheaf-representable-functor-and-representation]]) which is
   representable, etale and surjective
   ([[def-etale-morphism-schemes]], [[def-morphism-of-schemes]]).

A **morphism of algebraic spaces over $S$** is a natural transformation of the
underlying presheaves; algebraic spaces over $S$ form a full subcategory of
the presheaves of sets on the fppf site. Under the Axiom of Choice ([[def-axiom-of-choice]])
inherited from represented-sheaf descent, a scheme $X$ over $S$ gives an
algebraic space $h_X$, and $X\mapsto h_X$ is a full embedding
([[lem-scheme-functor-is-algebraic-space]]). No separatedness, quasi-compactness,
finiteness or Noetherian hypothesis is part of the definition: condition 3
asks only for a single etale scheme cover, not for a Zariski cover or for
quasi-compactness, and the covering morphism may have infinite index set.

An **etale scheme cover** of an algebraic space $F$ is a morphism
$h_U\to F$ as in condition 3; its existence is part of the definition, while a
second such cover is compared with the first by the fibrewise properties of
representable morphisms of [[def-representable-morphism-of-presheaves]].

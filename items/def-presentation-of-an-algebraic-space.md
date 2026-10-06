---
id: def-presentation-of-an-algebraic-space
kind: definition
title: "Presentations of algebraic spaces"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
justified_by: []
aliases: []
deps:
  - def-algebraic-space-as-fppf-sheaf
  - def-groupoid-in-schemes-and-etale-equivalence-relation
  - lem-presentation-from-surjective-etale-map
  - def-fibre-product-schemes-universal-property
  - def-closed-immersion-schemes
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
    - title: "The Stacks Project, Chapter 65 (Algebraic Spaces), Definition 65.9.3"
      url: "https://stacks.math.columbia.edu/download/spaces.pdf"
      locator: "Definition 65.9.3 (tag 0263), presentations; Section 65.13 (tag 02X3), diagonal properties and separation conditions"
    - title: "The Stacks Project, Descent, Section 35.24"
      url: "https://stacks.math.columbia.edu/tag/02YL"
      locator: "Lemma 35.24.1: immersions are fppf local on the target; its proof uses closed-immersion descent, Lemma 35.23.21"
---

## Definition

A **presentation** of an algebraic space $F$ over $S$
([[def-algebraic-space-as-fppf-sheaf]]) is a pair consisting of an $S$-scheme
$U$, an etale equivalence relation
$j=(t,s)\colon R\to U\times_SU$ on $U$ over $S$
([[def-groupoid-in-schemes-and-etale-equivalence-relation]]) and a surjective
etale morphism $U\to F$ such that $R=U\times_FU$, that is, such that $j$
identifies $R$ with the kernel pair of $U\to F$
([[def-fibre-product-schemes-universal-property]]). By
[[lem-presentation-from-surjective-etale-map]] every surjective etale
morphism from a scheme to $F$ yields a presentation: the kernel pair
$U\times_FU$ is an etale equivalence relation and $F$ is its quotient sheaf.
Conversely a presentation determines $F$ as $U/R$.

A presentation is **quasi-compact** when $U$ is quasi-compact. This depends
on the chosen cover: under the inherited Axiom of Choice
([[def-axiom-of-choice]]), a nonempty affine scheme $S$ has both the presentation
$S\to S$ and the non-quasi-compact presentation
$\coprod_{n\ge0}S\to S$. The open components of the latter source have no
finite subcover.

A presentation is
**separated**, **locally separated** or **locally quasi-finite** when $j$ is
respectively a closed immersion ([[def-closed-immersion-schemes]]), an
immersion, or separated and locally quasi-finite. These diagonal conditions
are independent of the presentation: $j$ is the base change of
$\Delta_F$ along the surjective etale cover $U\times_SU\to F\times_SF$,
and closed immersions and immersions are fppf local on the target (Stacks,
Descent Lemmas 35.23.21 and 35.24.1). Moreover the separated locally
quasi-finite condition on $j$ holds for every presentation: $j$ is a
monomorphism, hence separated, and is locally of finite type because $s$
is etale; its fibres have at most one point, so it is locally quasi-finite
(Stacks Lemma 65.13.1). This condition concerns the diagonal and does not
say that $F\to S$ is locally quasi-finite.

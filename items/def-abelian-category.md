---
id: def-abelian-category
kind: definition
title: "Abelian category"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-additive-category, thm-the-canonical-morphism-from-the-coimage-to-the-image-exists-and-is-unique]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Alexandre Grothendieck, Some aspects of homological algebra, §1.4"
      url: "https://ncatlab.org/nlab/files/BarrTranslOf-GrothedieckTohoku.pdf"
    - title: "The Stacks Project, Section 12.5, Definition 12.5.1"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
    - title: "Gautam Tamme, Algebra II Lecture 9, §9.4"
      url: "https://people.math.osu.edu/gautam.42/S21/AII/Notes/Lecture09.pdf"
pipeline_run: frontier-21
---

## Definition

An **abelian category** is an additive category ([[def-additive-category]]) in
which every morphism has a kernel and a cokernel, and in which for every
morphism $f$ the canonical comparison morphism

$$\operatorname{coim}(f)\longrightarrow\operatorname{im}(f)$$

constructed in
[[thm-the-canonical-morphism-from-the-coimage-to-the-image-exists-and-is-unique]]
is an isomorphism.

The first two clauses are Grothendieck's AB1, while the invertibility of the
canonical map is this page's working form of AB2.

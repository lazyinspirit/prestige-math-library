---
id: def-a-category-with-enough-projectives-and-with-enough-injectives
kind: definition
title: "A category with enough projectives and with enough injectives"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-projective-object, def-injective-object]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-28
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories, Definition 1.6.5"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: frontier-22
---

## Definition

An abelian category has **enough projectives** when every object $A$ admits an
epimorphism $P\twoheadrightarrow A$ with $P$ projective
([[def-projective-object]]).

It has **enough injectives** when every object $A$ admits a monomorphism
$A\rightarrowtail I$ with $I$ injective ([[def-injective-object]]).

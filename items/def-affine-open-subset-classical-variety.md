---
id: def-affine-open-subset-classical-variety
kind: definition
title: "Affine open subsets of a classical affine variety"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-principal-open-classical-variety, thm-coordinate-ring-principal-open]
justified_by: []
sources:
  scraped: []
  references:
    - title: "Michael Artin, Notes for a Course in Algebraic Geometry, Proposition 2.6.1"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
    - title: "J. S. Milne, Algebraic Geometry, Chapter 3c"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Definition

Let $X$ be a classical affine variety. On this page, an **affine open subset**
of $X$ means a principal open subset
$$ U=D_X(\overline f) $$
for some $\overline f \in k[X]$.

Its coordinate ring is
$$ k[U]:=\mathcal O_X(U), $$
and [[thm-coordinate-ring-principal-open]] identifies it with the principal
localisation $k[X]_{\overline f}$.

This page uses the classical basic-affine opens only. Later pages may enlarge
the phrase "affine open" to the intrinsic scheme-theoretic notion.

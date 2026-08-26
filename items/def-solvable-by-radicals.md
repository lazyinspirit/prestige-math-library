---
id: def-solvable-by-radicals
kind: definition
title: "A polynomial is solvable by radicals when its splitting field lies in a radical extension"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-radical-extension, def-polynomials-that-split-and-splitting-fields]
aliases: []
landmark: false
verification:
  audited: 2026-08-26
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Section 7"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
    - title: "J. Ash, Basic Abstract Algebra, Section 6.8"
      url: "https://faculty.math.illinois.edu/~r-ash/Algebra.html"
pipeline_run: null
---

## Definition

Let $f\in F[x]$ be a nonzero polynomial and let $E/F$ be a splitting field of
$f$ ([[def-polynomials-that-split-and-splitting-fields]]).

The polynomial $f$ is **solvable by radicals** when there exists a radical
extension $L/F$ ([[def-radical-extension]]) such that $E\subseteq L$.

This is deliberately the weakest standard convention: the radical tower itself
is not required to be Galois and is not required to contain the relevant roots of
unity in advance.

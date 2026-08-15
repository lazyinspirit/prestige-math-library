---
id: def-algebraically-constructible-real-number
kind: definition
title: "Algebraically constructible real numbers as the smallest real subfield closed under positive square roots"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-rat-field, thm-reals-ordered-field, thm-of-square-roots, def-subfield]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "A. W. Knapp, Basic Algebra, 2nd ed., Chapter IX, Section 5"
      url: "https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Theorem 1.37 through consequence 1.41"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Definition

Let $\mathcal C$ be the intersection of all subfields $E\subseteq\mathbb R$ such that $\mathbb Q\subseteq E$ and

$$a\in E,\ a>0\quad\Longrightarrow\quad\sqrt a\in E.$$

This family is nonempty because $\mathbb R$ belongs to it, and the intersection is again a subfield with the same square-root closure. A real number is **algebraically constructible** when it belongs to $\mathcal C$.

This is an algebraic definition. It does not assert an equivalence with a physical straightedge-and-compass model.

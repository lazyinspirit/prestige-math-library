---
id: def-germ-and-local-ring-classical-variety
kind: definition
title: "Germs of regular functions and the local ring at a point of a classical affine variety"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-regular-function-classical-variety]
justified_by: []
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 3c"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, Notes for a Course in Algebraic Geometry, 5.1.10"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Definition

Let $X$ be a classical affine variety, let $x \in X$, and let
$f \in \mathcal O_X(U)$ and $g \in \mathcal O_X(V)$ be regular functions on open
neighbourhoods $U,V$ of $x$. The two pairs $(U,f)$ and $(V,g)$ are
**equivalent at $x$** when there exists an open neighbourhood
$W \subseteq U \cap V$ of $x$ such that $f|_W=g|_W$.

An equivalence class is called the **germ** of a regular function at $x$ and is
written $f_x$ when $f$ represents it.

The set of all such germs is a ring under representativewise addition and
multiplication. It is the **local ring of $X$ at $x$** and is denoted
$$ \mathcal O_{X,x}. $$

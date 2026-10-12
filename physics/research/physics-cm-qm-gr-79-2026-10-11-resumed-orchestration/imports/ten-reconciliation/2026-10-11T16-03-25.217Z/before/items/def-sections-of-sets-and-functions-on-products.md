---
id: def-sections-of-sets-and-functions-on-products
kind: definition
title: "Sections E_x, E^y, f_x, and f^y on a product"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-product-sigma-algebra-and-finite-product-sigma-algebras, def-measurable-function-between-measurable-spaces]
verification:
  audited: 2026-08-29
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Section 5.1 and Section 5.4"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Definition

Let $E \subseteq X \times Y$. For $x \in X$ and $y \in Y$, the **horizontal**
and **vertical sections** of $E$ are

$$E_x := \{y \in Y : (x,y) \in E\},\qquad E^y := \{x \in X : (x,y) \in E\}.$$

If $f : X \times Y \to Z$ is a function, its **sections** are

$$f_x : Y \to Z,\quad f_x(y):=f(x,y),\qquad f^y : X \to Z,\quad f^y(x):=f(x,y).$$

The notation remembers which variable has been frozen: the subscript freezes
$x$, while the superscript freezes $y$.

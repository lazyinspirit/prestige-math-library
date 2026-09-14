---
id: def-levi-subalgebra-and-levi-decomposition
kind: definition
title: Levi subalgebras and Levi decompositions
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-radical-of-a-finite-dimensional-lie-algebra, def-semidirect-product-of-lie-algebras, def-simple-semisimple-and-reductive-lie-algebras]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, Definition 6.24"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "§6, Definition 6.24, printed p. 62"
---

## Definition

Let $\mathfrak g$ be finite-dimensional with radical
$\mathfrak r=\operatorname{rad}(\mathfrak g)$. A **Levi subalgebra** or
**Levi factor** is a semisimple Lie subalgebra $\mathfrak s\subseteq
\mathfrak g$ such that

$$\mathfrak g=\mathfrak r\oplus\mathfrak s$$

as vector spaces. Since $\mathfrak r$ is an ideal, its bracket action by
$\mathfrak s$ makes the map
$\mathfrak s\ltimes\mathfrak r\to\mathfrak g$, $(x,u)\mapsto x+u$, an
isomorphism, where the acting algebra is written first as in
[[def-semidirect-product-of-lie-algebras]]. This is called a **Levi
decomposition**. This definition asserts neither
existence nor uniqueness. If $\mathfrak g$ is semisimple, then
$\mathfrak r=0$ and $\mathfrak s=\mathfrak g$ is the evident Levi factor; if
$\mathfrak g$ is solvable, a Levi factor, when it exists, must be zero.

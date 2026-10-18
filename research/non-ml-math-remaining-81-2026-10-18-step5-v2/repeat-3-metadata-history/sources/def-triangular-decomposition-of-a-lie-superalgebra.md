---
id: def-triangular-decomposition-of-a-lie-superalgebra
kind: definition
title: Triangular decomposition of a Lie superalgebra
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-lie-superalgebra-over-complex-numbers
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Vera Serganova, Kac–Moody Superalgebras and Integrability, §2"
      url: https://math.berkeley.edu/~serganov/papers/superk.pdf
      locator: "Printed pp. 3–5: Cartan, root decomposition, and triangular decomposition for contragredient superalgebras."
    - title: "Sigiswald Barbier, A minimal representation for the orthosymplectic Lie-superalgebra, §2.5"
      url: https://backoffice.biblio.ugent.be/download/8560881/8560883
      locator: "Printed pp. 30–36: Cartan subalgebras, roots, and Borel subalgebras for basic Lie superalgebras."
verification:
  precheck: n/a
---

## Definition

A **triangular decomposition datum** for a complex Lie superalgebra $\mathfrak g$ is a triple of graded subalgebras $(\mathfrak n^-,\mathfrak h,\mathfrak n^+)$ such that $\mathfrak h\subseteq\mathfrak g_{\bar0}$ is abelian, $\mathfrak g=\mathfrak n^-\oplus\mathfrak h\oplus\mathfrak n^+$ as graded vector spaces, and $\mathfrak b:=\mathfrak h\oplus\mathfrak n^+$ is a subalgebra. No root decomposition, nondegenerate form, basic-classical hypothesis, or finite-dimensionality is implicit in this definition.

The subalgebra $\mathfrak b$ is the selected positive subalgebra. Different choices of $\mathfrak n^+$ can give different highest-weight conventions for the same superalgebra.

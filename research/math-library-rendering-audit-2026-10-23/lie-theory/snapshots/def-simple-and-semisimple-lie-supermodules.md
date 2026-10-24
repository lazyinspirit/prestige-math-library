---
id: def-simple-and-semisimple-lie-supermodules
kind: definition
title: Simple and semisimple Lie supermodules
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-lie-supermodule
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Sigiswald Barbier, A minimal representation for the orthosymplectic Lie-superalgebra, §2.4.1"
      url: https://backoffice.biblio.ugent.be/download/8560881/8560883
      locator: "Printed pp. 25–27: submodules, irreducibility, and indecomposability in the supermodule setting."
    - title: "Vera Serganova, Kac–Moody Superalgebras and Integrability, §10"
      url: https://math.berkeley.edu/~serganov/papers/superk.pdf
      locator: "Printed pp. 29–31: module and integrability conventions for a specified superalgebra class."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

A **graded submodule** of a Lie supermodule $V=V_{\bar0}\oplus V_{\bar1}$ is a subspace $W=W_{\bar0}\oplus W_{\bar1}$, with $W_{\bar i}\subseteq V_{\bar i}$, invariant under the $\mathfrak g$-action. A nonzero supermodule is **simple** if its only graded submodules are $0$ and itself. The zero supermodule is not simple.

A supermodule is **semisimple** if it is an internal direct sum of simple graded submodules; the zero module is the empty direct sum and is semisimple. The category of finite-dimensional Lie supermodules for $\mathfrak g$ is semisimple if every finite-dimensional object is semisimple. These definitions are in the graded category, whose morphisms preserve parity.

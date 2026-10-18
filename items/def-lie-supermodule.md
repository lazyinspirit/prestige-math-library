---
id: def-lie-supermodule
kind: definition
title: Lie supermodules and representations
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-lie-superalgebra-over-complex-numbers
  - def-associative-superalgebra-over-complex-numbers
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Sigiswald Barbier, A minimal representation for the orthosymplectic Lie-superalgebra, §2.4.1"
      url: https://backoffice.biblio.ugent.be/download/8560881/8560883
      locator: "Printed pp. 25–26: definitions of Lie-superalgebra representations and modules."
    - title: "Lauren Caston and Rita Fioresi, Mathematical Foundations of Supersymmetry, §1.3"
      url: https://arxiv.org/pdf/0710.5742
      locator: "Printed pp. 14–15: graded modules over superalgebras and parity conventions."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $\mathfrak g$ be a complex Lie superalgebra. A **left $\mathfrak g$-supermodule** is a complex vector space with grading $V=V_{\bar0}\oplus V_{\bar1}$ and a complex-bilinear action $\mathfrak g\times V\to V$, denoted $(x,v)\mapsto x\cdot v$, such that $\mathfrak g_{\bar i}\cdot V_{\bar j}\subseteq V_{\overline{i+j}}$ and, for homogeneous $x,y\in\mathfrak g$,
$$ [x,y]\cdot v=x\cdot(y\cdot v)-(-1)^{|x||y|}y\cdot(x\cdot v)\qquad(v\in V). $$
A **parity-preserving homomorphism** of supermodules is a complex-linear map $T:V\to W$ preserving the two graded summands and satisfying $T(x\cdot v)=x\cdot T(v)$. A **representation** is the same action data written as an even linear map $\rho:\mathfrak g\to\operatorname{End}(V)$, where an endomorphism has parity $i$ when it maps $V_{\bar j}$ to $V_{\overline{i+j}}$; composition gives the supercommutator from [[def-associative-superalgebra-over-complex-numbers]].

No finite-dimensionality, complete reducibility, topology, or unitarity is part of this definition.

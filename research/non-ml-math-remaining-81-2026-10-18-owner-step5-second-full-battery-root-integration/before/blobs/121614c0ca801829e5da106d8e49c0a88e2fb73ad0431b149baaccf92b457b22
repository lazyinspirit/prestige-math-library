---
id: def-quiver-motivic-quantum-torus
kind: definition
title: "The Euler-twisted dimension-vector algebra of a quiver"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-motivic-stack-function-groups-for-quiver-representations
  - def-motivic-hall-algebra-of-a-finite-quiver
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Tom Bridgeland, An Introduction to Motivic Hall Algebras, arXiv:1002.4372v1, §§4.3 and 5.2"
      url: "https://arxiv.org/pdf/1002.4372v1"
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2, §§1.2–1.3"
      url: "https://arxiv.org/pdf/math/0611617v2"
verification:
  precheck: n/a
---

## Definition

For a finite quiver $Q$, let $R$ and the invertible class $\mathbb L$ be
as in [[def-motivic-stack-function-groups-for-quiver-representations]].
For dimension vectors $\mathbf d,\mathbf e\in\mathbb N^{Q_0}$ define
$$\chi_Q(\mathbf d,\mathbf e) =\sum_{i\in Q_0}d_i e_i- \sum_{a\in Q_1}d_{s(a)}e_{t(a)}.$$This is the Euler pairing for the fixed quiver representation convention: the first argument is the quotient dimension and the second is the subrepresentation dimension. It is bilinear by its displayed finite-sum formula. Let $T_Q=\bigoplus_{\mathbf d\in\mathbb N^{Q_0}}R\,x^{\mathbf d}$ be the free $R$-module on formal symbols $x^{\mathbf d}$. Equip it with the bilinear multiplication$$x^{\mathbf d}x^{\mathbf e} =\mathbb L^{-\chi_Q(\mathbf d,\mathbf e)} x^{\mathbf d+\mathbf e}.$$
The subsequent theorem verifies associativity and the unit $x^{\mathbf 0}$.
This is the Euler-twisted dimension-vector monoid algebra used as the
target of the stack integration map; the formula fixes its twist convention.


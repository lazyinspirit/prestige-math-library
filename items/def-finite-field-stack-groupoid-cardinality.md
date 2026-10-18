---
id: def-finite-field-stack-groupoid-cardinality
kind: definition
title: "Finite-field groupoid cardinality for quiver stack specializations"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-motivic-stack-function-groups-for-quiver-representations
justified_by:
  - lem-finite-field-stack-groupoid-cardinality-respects-motivic-relations
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Dominic Joyce, Configurations in abelian categories. II. Ringel-Hall algebras, arXiv:math/0503029v2, §§2–3"
      url: "https://arxiv.org/pdf/math/0503029v4"
    - title: "Tom Bridgeland, An Introduction to Motivic Hall Algebras, arXiv:1002.4372v1, §§2–3"
      url: "https://arxiv.org/pdf/1002.4372v1"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $k=\mathbb F_q$. A finite groupoid is a groupoid with finitely many
isomorphism classes of objects and finite automorphism groups. Its
**groupoid cardinality** is
$$|\mathcal G|=\sum_{[x]\in\operatorname{Iso}(\mathcal G)} \frac{1}{|\operatorname{Aut}_{\mathcal G}(x)|}.$$
For a quotient stack in the finite-quiver construction whose rational-point
groupoid is finite, define its point-count value by the groupoid cardinality
of that rational-point groupoid. This definition applies, in particular, to
$\mathfrak M_{\mathbf d}(Q)$, the exact-sequence stacks, and the
vector-bundle-stack fibers in the examples below. Its compatibility with the
relations defining $\mathscr K$ is established by
[[lem-finite-field-stack-groupoid-cardinality-respects-motivic-relations]].


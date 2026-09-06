---
id: ex-segre-veronese-bidegree-two-three
kind: example
title: A bidegree (2,3) Segre-Veronese embedding
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [cor-segre-veronese-embedding, thm-multihomogeneous-map-to-projective-space]
sources:
  scraped: []
  references:
    - title: J. S. Milne, Algebraic Geometry, 6.23 and 6.26
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Example

For $([s:t],[u:v])\in\mathbf P^1\times\mathbf P^1$, the bidegree $(2,3)$ coordinates are the twelve products
$$s^{2-i}t^i u^{3-j}v^j\qquad(0\le i\le2,\ 0\le j\le3).$$
Scaling the two representatives by $\lambda,\mu$ scales every coordinate by
$\lambda^2\mu^3$. Up to the target coordinate permutation determined by the
chosen Veronese monomial orderings, this is
$\sigma\circ(\nu_{1,2}\times\nu_{1,3})$, hence is the stated closed embedding.

---
id: "def-geodesic-spray"
kind: "definition"
title: "Geodesic spray"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["prop-coordinate-geodesic-equation","def-countable-choice","thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure","def-induced-tangent-bundle-chart"]
justified_by: ["lem-the-geodesic-spray-is-a-well-defined-smooth-vector-field-on-tm"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, proof of Theorem 15.2.1, pp.115–117
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Definition

Assume countable choice $\mathrm{AC}_\omega$. For an affine connection on $M$, consider in every induced tangent-bundle chart $(x^i,v^i)$ the local formula
$$S=v^i\frac{\partial}{\partial x^i}-\Gamma^k{}_{ij}(x)v^iv^j\frac{\partial}{\partial v^k}.$$
The **geodesic spray** is the smooth vector field on $TM$ obtained from these chartwise formulas. Their overlap agreement, and hence the existence and uniqueness of this global vector field, is proved in [[lem-the-geodesic-spray-is-a-well-defined-smooth-vector-field-on-tm]].

## Facts & Assumptions

**Given:** The affine connection and an induced tangent-bundle chart.

[F1] [[def-countable-choice]] is $\mathrm{AC}_\omega$.

[F2] Under [F1], [[thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]] makes $TM$ a smooth manifold with the charts of [[def-induced-tangent-bundle-chart]].

[F3] [[prop-coordinate-geodesic-equation]] rewrites the second-order geodesic equation as $\dot x^k=v^k$ and $\dot v^k=-\Gamma^k{}_{ij}v^iv^j$.

## Verification

1.1 In the $2n$ coordinates $(x,v)$ supplied by [F2], the displayed expression has base components $v^i$ and fibre components $-\Gamma^k{}_{ij}(x)v^iv^j$. The Christoffel functions are smooth, so every component is smooth. An integral curve of this local expression obeys exactly the first-order system in [F3]. [F2, F3, given]

2.1 At a zero vector $v=0$ both component lists vanish, so the zero section consists of stationary points of the local spray. For $n=1$ the formula is $v\partial_x-\Gamma^1{}_{11}(x)v^2\partial_v$; for $n=0$ it is the zero vector field on the discrete zero section. Empty $M$ gives empty $TM$. No claim of overlap agreement is used here; that is the next lemma. The only choice principle is the explicitly assumed $\mathrm{AC}_\omega$ in [F1]–[F2], used to obtain the global smooth-manifold structure on $TM$; the coordinate formula itself is choice-free. [F1, F2, F3, step 1.1] ∎

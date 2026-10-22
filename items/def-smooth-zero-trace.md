---
id: def-smooth-zero-trace
kind: definition
title: "Smooth zero-trace of a knot"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Lisa Piccirillo, The Conway knot is not slice"
      url: "https://arxiv.org/pdf/1808.02923"
      locator: "Definition 1.2, printed p. 583 (PDF p. 2)"
    - title: "Jennifer Hom, Getting a handle on the Conway knot"
      url: "https://arxiv.org/pdf/2107.09171"
      locator: "§2.1, Definition 2.2 and the zero-framed 2-handle construction"
---

## Definition

Let $K\subset S^3$ be a smooth oriented knot with a chosen tubular neighborhood
and preferred longitude $\lambda_K$. Its smooth zero-trace $X_0(K)$ is the
compact smooth $4$-manifold obtained from $B^4$ by attaching a single $2$-handle
$D^2\times D^2$ to $\partial B^4=S^3$ along $K$, using the framing whose
parallel curve represents $\lambda_K$; corners are rounded.

## Definition references

[Piccirillo, Definition 1.2](https://arxiv.org/pdf/1808.02923)

[Hom, §2.1, Definition 2.2](https://arxiv.org/pdf/2107.09171)

## Facts & Assumptions

**Given:** A smooth oriented knot $K\subset S^3$, a chosen tubular neighborhood,
and its preferred longitude.

[F1] [[def-knot-meridian-and-preferred-longitude]]: the preferred longitude is
the degree-one peripheral curve whose class is zero in the first homology of
the knot exterior.

## Proof

**Proof technique:** direct.

1.1 The attaching framing determines a parallel curve on the boundary torus of the chosen tubular neighborhood. By [F1], the zero framing is the one whose parallel represents the preferred longitude, which is the stated attaching convention. [F1, given, def. preferred-longitude framing]

2.1 The construction uses the supplied preferred-longitude representative as attaching data; it makes no uniqueness claim about such representatives and does not change the chosen attachment. [F1, step 1.1] ∎


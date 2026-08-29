---
id: fs-any-two-atlases-on-the-same-topological-manifold-have-a-union-atlas
kind: false-statement
title: "Two atlases on the same topological manifold need not have a union atlas"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-smooth-atlas, def-smoothly-compatible-charts]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.2"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §2"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
pipeline_run: null
---

## Statement

**False claim:** any two smooth atlases on the same topological manifold have a
union that is again a smooth atlas.

## Facts & Assumptions

**Given:** The real line $\mathbb R$ with the two singleton atlases $\mathcal A=\{(\mathbb R,\operatorname{id})\}$ and $\mathcal B=\{(\mathbb R,\psi)\}$, where $\psi(x)=x^3$.

[F1] A smooth atlas is a covering family of pairwise smoothly compatible charts ([[def-smooth-atlas]]).

[F2] Two charts are smoothly compatible only when both transition maps on the overlap are smooth ([[def-smoothly-compatible-charts]]).

## Refutation

**Proof technique:** direct.

1.1 Both $\mathcal A$ and $\mathcal B$ are atlases on $\mathbb R$: each consists of one global chart and therefore covers the space. [given]

Their only cross-transition maps are

$$\psi\circ\operatorname{id}^{-1}(x)=x^3,\qquad \operatorname{id}\circ\psi^{-1}(x)=x^{1/3}.$$

The first is smooth on $\mathbb R$, while the second is not $C^1$ at $0$.
[given]

2.1 Since one of the two required transition maps fails to be smooth, [F2] shows that the chart in $\mathcal A$ is not smoothly compatible with the chart in $\mathcal B$. Hence $\mathcal A\cup\mathcal B$ is not pairwise compatible and therefore is not a smooth atlas by [F1]. [F1, F2, step 1.1]

3.1 Thus two atlases on the same topological manifold need not have a union atlas. [step 2.1] ∎

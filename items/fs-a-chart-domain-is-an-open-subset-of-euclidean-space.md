---
id: fs-a-chart-domain-is-an-open-subset-of-euclidean-space
kind: false-statement
title: "A chart domain need not be a Euclidean open set"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-manifold-chart-coordinate-domain-and-coordinate-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.1"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §1"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
pipeline_run: null
---

## Statement

**False claim:** in a chart $(U,\varphi)$, the domain $U$ is an open subset of
Euclidean space.

## Facts & Assumptions

**Given:** A chart $(U,\varphi)$ on a manifold $M$.

[F1] A chart has $U\subseteq M$ open in the manifold and $\varphi:U\to\widehat U\subseteq\mathbb R^n$ a homeomorphism onto an open Euclidean set; the Euclidean open set is the image $\widehat U=\varphi(U)$ ([[def-manifold-chart-coordinate-domain-and-coordinate-functions]]).

## Refutation

**Proof technique:** direct.

1.1 By [F1], the set $U$ lives in the manifold $M$ and is open there, while the [F1] Euclidean open set is $\widehat U=\varphi(U)\subseteq\mathbb R^n$. The two sets lie in different ambient spaces and play different roles. [F1]

2.1 Therefore the false claim swaps the chart domain with the chart image and is wrong at the level of the definition itself. [step 1.1] ∎

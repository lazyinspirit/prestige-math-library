---
id: lem-smooth-chart-compatibility-is-symmetric-and-reflexive
kind: lemma
title: "Smooth chart compatibility is symmetric and reflexive"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-smoothly-compatible-charts]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.2"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
pipeline_run: null
---

## Statement

Let $M$ be a topological manifold and let $(U,\varphi)$ and $(V,\psi)$ be charts
on $M$. Then:

1. Every chart is smoothly compatible with itself.
2. If $(U,\varphi)$ and $(V,\psi)$ are smoothly compatible, then $(V,\psi)$ and
   $(U,\varphi)$ are smoothly compatible.

## Facts & Assumptions

**Given:** Charts $(U,\varphi)$ and $(V,\psi)$ on a topological manifold $M$.

[F1] Two charts are smoothly compatible when their domains are disjoint, or when both transition maps are smooth; in dimension zero overlapping charts are declared compatible ([[def-smoothly-compatible-charts]]).

[A1] A constant real-valued function on an open subset of $\mathbb R^m$ is continuous (its preimage of any open set is either the empty set or the whole domain, and both are open).

## Proof

**Proof technique:** direct.

1.1 The transition maps of $(U,\varphi)$ with itself are both the identity $\mathrm{id}_{\varphi(U)}$. Each component $x\mapsto x_j$ of the identity has first partials the constant functions $1$ and $0$ and all higher partials equal to the zero function; every one of these is constant, hence continuous by [A1]. Therefore every component is of class $C^k$ for every $k$, and the identity is smooth. By [F1], this makes $(U,\varphi)$ smoothly compatible with itself, which is claim 1. [F1, A1, given]

2.1 The definition in [F1] requires both transition maps to be smooth whenever the overlap is nonempty, so interchanging the two charts interchanges the same two smoothness requirements; the hypothesis that $(U,\varphi)$ and $(V,\psi)$ are compatible therefore makes $(V,\psi)$ and $(U,\varphi)$ compatible, which is claim 2. [F1, given] ∎

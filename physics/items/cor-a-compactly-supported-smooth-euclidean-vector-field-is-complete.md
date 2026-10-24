---
id: cor-a-compactly-supported-smooth-euclidean-vector-field-is-complete
kind: corollary
title: "A compactly supported smooth Euclidean vector field is complete"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-a-bounded-vector-field-on-all-of-euclidean-space-is-complete,
       thm-extreme-value-metric]
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
    - title: "Nigel Hitchin, Differentiable Manifolds, Appendix §10.2"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Chin-Lung Wang, Banach Calculus, §4.4"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
pipeline_run: null
---

## Statement

Every compactly supported smooth vector field on $\mathbb R^n$ is complete.

## Facts & Assumptions

**Given:** A smooth vector field $V:\mathbb R^n\to\mathbb R^n$ whose support is contained in a compact set $K$.

[L1] A bounded locally Lipschitz vector field on all of Euclidean space is complete ([[cor-a-bounded-vector-field-on-all-of-euclidean-space-is-complete]]).

[L2] A continuous real-valued function on a nonempty compact metric space attains its maximum ([[thm-extreme-value-metric]]).

## Proof

**Proof technique:** direct.

1.1 The norm function $x\mapsto\|V(x)\|_2$ is continuous on the compact support [L2] $K$, so [L2] gives a bound $M$ there. Outside $K$ the vector field vanishes by definition of support. Hence $\|V(x)\|_2\le M$ for every $x\in\mathbb R^n$. [L2]

2.1 Smooth maps are locally Lipschitz on Euclidean open sets, so step 1.1 makes [L1, step 1.1] $V$ a bounded locally Lipschitz vector field. Therefore [L1] applies and yields completeness. [L1, step 1.1] ∎

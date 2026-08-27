---
id: fs-the-pullback-of-an-epimorphism-is-an-epimorphism-in-any-category-with-pullbacks
kind: false-statement
title: "FALSE: pullbacks preserve epimorphisms in every category with pullbacks"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-pullback-of-an-epimorphism-is-an-epimorphism, def-hausdorff-space, def-dense-top, cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal, lem-q-and-irrationals-dense-r]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "General Topology Notes (UC Riverside)"
      url: "https://math.ucr.edu/~res/math205A-2014/gentop-notes.pdf"
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.13"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
pipeline_run: frontier-21
---

## Statement

In every category with pullbacks, the pullback of an epimorphism is again an
epimorphism.

## Facts & Assumptions

**Given:** The full subcategory of Hausdorff spaces and continuous maps.

[L1] A Hausdorff space is a topological space in which points are separated by
disjoint neighbourhoods ([[def-hausdorff-space]]).

[L2] A continuous map into a Hausdorff space is determined by its restriction
to any dense subset
([[def-dense-top]],
[[cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal]]).

[L3] The rationals are dense in $\mathbb R$, and the irrationals are nonempty
([[lem-q-and-irrationals-dense-r]]).

## Refutation

1.1 Let $i:\mathbb Q_{\mathbb R}\hookrightarrow\mathbb R$ be the inclusion of the rationals into the real line, regarded as Hausdorff spaces. By [L3], $\mathbb Q_{\mathbb R}$ is dense in $\mathbb R$, so [L2] says that $i$ is epic: any two continuous maps out of $\mathbb R$ into a Hausdorff space that agree on $\mathbb Q_{\mathbb R}$ are equal. [L1, L2, L3]

2.1 Choose an irrational point $x\in\mathbb R$ using [L3], and let $j:\{x\}\hookrightarrow\mathbb R$ be the inclusion. The pullback of $i$ along $j$ is the map $\varnothing\to\{x\}$, because $\{x\}\cap\mathbb Q_{\mathbb R}=\varnothing$. Let $D=\{0,1\}$ with the discrete topology, which is Hausdorff by [L1]. The two constant maps $\{x\}\to D$ are distinct, but their composites with $\varnothing\to\{x\}$ are equal. So the pullback map is not epic, and the universal statement is false. [L1, L2, L3, step 1.1] ∎

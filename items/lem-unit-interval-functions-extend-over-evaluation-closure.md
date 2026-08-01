---
id: lem-unit-interval-functions-extend-over-evaluation-closure
kind: lemma
title: "Every continuous $[0,1]$-valued function extends uniquely over the closure of the full evaluation image"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-evaluation-map-into-unit-cube, thm-product-universal-property, cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal, thm-closure-characterisation-top]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Moorhouse, The Stone–Čech Compactification"
      url: "https://ericmoorhouse.org/handouts/stone-cech.pdf"
pipeline_run: null
---

## Statement

Let $e:X\to[0,1]^{C(X,[0,1])}$ be the full evaluation map and let $B=\overline{e[X]}$. Every continuous $g:X\to[0,1]$ has a unique continuous $\bar g:B\to[0,1]$ with $\bar g\circ e=g$.

## Facts & Assumptions

**Given:** The full evaluation map $e$, its closure $B$, and a continuous $g:X\to[0,1]$.

[L1] Coordinate projections from a product are continuous ([[thm-product-universal-property]]).

[L2] Two continuous maps to a Hausdorff target that agree on a dense subset agree everywhere ([[cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal]]).

## Proof

**Proof technique:** direct.

1.1 The coordinate projection $\pi_g$ is continuous by [L1]. Its restriction $\bar g=\pi_g|_B$ is continuous and satisfies $\bar g(e(x))=e(x)(g)=g(x)$. [L1]

2.1 If $h:B\to[0,1]$ is another such extension, then $h$ and $\bar g$ agree on $e[X]$, which is dense in $B$. Since $[0,1]$ is Hausdorff, [L2] gives $h=\bar g$. [L2, step 1.1] ∎

---
id: ex-plane-trees-with-at-most-four-vertices
kind: example
title: "Plane trees with at most four vertices from $T=\\mathcal{Z}\\times\\operatorname{SEQ}(T)$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-plane-trees-satisfy-t-equals-z-over-one-minus-t]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

The rooted plane trees on at most four vertices are counted by the first
coefficients of the Catalan series:

$$1,\ 1,\ 2,\ 5.$$

Concretely there is one tree on one vertex, one on two vertices, two on three
vertices, and five on four vertices.

## Facts & Assumptions

**Given:** The plane-tree generating function satisfies $T(x)=x/(1-T(x))$ ([[cor-plane-trees-satisfy-t-equals-z-over-one-minus-t]]).

## Verification

**Proof technique:** direct.

1.1 Solving $T=x/(1-T)$ coefficientwise gives $T(x)=x+x^2+2x^3+5x^4+\cdots$, so the first four counts are $1,1,2,5$. [given, algebra]

2.1 These are realized by the evident shapes: a single root; a root with one child; for three vertices, the chain and the root with two children; for four vertices, the chain of length four, the root with three children, the root with one child whose child has two children, and the two left-right orderings of a root with two children one of which has one child. [step 1.1] ∎

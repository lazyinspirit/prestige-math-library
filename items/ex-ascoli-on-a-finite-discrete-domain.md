---
id: ex-ascoli-on-a-finite-discrete-domain
kind: example
title: "For finite discrete $X$ and compact metric $Y$, the whole space $C(X,Y)$ is compact"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-standard-topologies, def-equicontinuity-on-a-topological-domain-and-pointwise-relative-compactness, lem-compact-open-and-pointwise-topologies-agree-on-an-equicontinuous-family, def-topology-of-pointwise-convergence, thm-finite-products-of-compact-spaces]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Topology, second edition, Section 47"
      url: "https://djvu.online/file/7PTGeGhMkCAAK"
pipeline_run: null
---

## Example

Let $X$ be a finite set with the discrete topology and let $Y$ be a compact metric space. Then every map $X\to Y$ is continuous and $C(X,Y)$ is compact in the compact-open topology. This includes $X=\varnothing$, when $C(X,Y)$ is a singleton.

## Facts & Assumptions

**Given:** A finite discrete space $X$ and a compact metric space $Y$.

[L1] In the discrete topology every subset of $X$ is open ([[def-standard-topologies]]).

[L2] Equicontinuity permits a neighbourhood depending on the point and tolerance but requires it to serve the whole family ([[def-equicontinuity-on-a-topological-domain-and-pointwise-relative-compactness]]).

[L3] On an equicontinuous family, the compact-open and pointwise topologies agree ([[lem-compact-open-and-pointwise-topologies-agree-on-an-equicontinuous-family]]).

[L4] The pointwise topology on $Y^X$ is the product topology ([[def-topology-of-pointwise-convergence]]).

[L5] Every finite product of compact spaces, including the empty product, is compact ([[thm-finite-products-of-compact-spaces]]).

## Verification

**Proof technique:** direct.

1.1 Every map $f:X\to Y$ is continuous because the inverse image of each open subset of $Y$ is a subset of $X$, hence open by [L1]. Thus $C(X,Y)=Y^X$. [L1]

1.2 The whole family $Y^X$ is equicontinuous: at $x\in X$, the neighbourhood $\{x\}$ makes $d(f(y),f(x))=0$ for every $f$ and every $y$ in it. [L1, L2]

1.3 By [L4] and [L5], the pointwise topology on $Y^X$ is compact, including the empty product when $X=\varnothing$. [L4, L5]

2.1 By [L3], this pointwise topology equals the compact-open topology on the equicontinuous whole family. Hence $C(X,Y)$ is compact. [L3, step 1.2, step 1.3] ∎

---
id: thm-complete-and-totally-bounded-uniform-spaces-are-compact
kind: theorem
title: "Assuming the ultrafilter lemma, every complete and totally bounded uniform space is compact"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-ultrafilters-on-totally-bounded-uniform-spaces-are-cauchy, def-complete-uniform-space, thm-compactness-via-nets-filters-and-ultrafilters]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Uniform space", url: "https://encyclopediaofmath.org/wiki/Uniform_space"}]
pipeline_run: null
---

## Statement

**Assume the ultrafilter lemma.** Every complete and totally bounded uniform space is compact.

## Facts & Assumptions

**Given:** A complete, totally bounded uniform space $X$ and the ultrafilter lemma.

[L1] Every ultrafilter on a totally bounded uniform space is Cauchy ([[lem-ultrafilters-on-totally-bounded-uniform-spaces-are-cauchy]]).

[L2] Completeness makes every Cauchy filter converge ([[def-complete-uniform-space]]).

[L3] Assuming the ultrafilter lemma, a topological space is compact if and only if every ultrafilter converges ([[thm-compactness-via-nets-filters-and-ultrafilters]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal V$ be an ultrafilter on $X$. It is Cauchy by [L1]. [L1]

2.1 Completeness makes $\mathcal V$ converge by [L2]. [step 1.1, L2]

3.1 Every ultrafilter converges, so $X$ is compact by [L3], under the stated ultrafilter-lemma assumption. [step 2.1, L3] ∎

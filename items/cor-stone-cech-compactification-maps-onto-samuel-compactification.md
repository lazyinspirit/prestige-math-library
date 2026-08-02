---
id: cor-stone-cech-compactification-maps-onto-samuel-compactification
kind: corollary
title: "Under dependent choice and the ultrafilter lemma, the Stone-Cech compactification maps continuously onto the Samuel compactification"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-samuel-completion-is-a-compactification, def-stone-cech-compactification, cor-separated-uniformizable-iff-tychonoff, thm-stone-cech-evaluation-closure-universal-property, thm-compactness-under-continuous-maps, thm-compact-subset-of-a-hausdorff-space-is-closed]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Garrido and Meroño, The Samuel realcompactification"
      url: "https://arxiv.org/abs/1706.00279"
    - title: "Stacks Project, Stone-Cech compactification"
      url: "https://stacks.math.columbia.edu/tag/0908"
pipeline_run: null
---

## Statement

**Assume dependent choice and the ultrafilter lemma.** If $X$ is a separated uniform space, then its evaluation-closure Stone--Cech compactification $j:X\to\beta X$ admits a continuous surjection
$$
q:\beta X\longrightarrow S(X)
$$
such that $qj=\eta$, where $\eta:X\to S(X)$ is the Samuel compactification map.

## Facts & Assumptions

**Given:** The stated choice principles and a separated uniform space $X$.

[L1] Under dependent choice, a separated uniformizable space is Tychonoff; under the two choice principles its evaluation closure is a Stone--Cech compactification ([[cor-separated-uniformizable-iff-tychonoff]], [[thm-stone-cech-evaluation-closure-universal-property]]).

[L2] Under the same principles, the Samuel completion is a compactification, hence $S(X)$ is compact Hausdorff and $\eta[X]$ is dense ([[thm-samuel-completion-is-a-compactification]]).

[L3] The Stone--Cech extension property extends a continuous map from $X$ to a compact Hausdorff target uniquely ([[def-stone-cech-compactification]]).

[L4] A continuous image of a compact space is compact, and a compact subset of a Hausdorff space is closed ([[thm-compactness-under-continuous-maps]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

## Proof

**Proof technique:** direct.

1.1 The map $\eta:X\to S(X)$ is continuous by [L2], so [L1] and [L3] give a continuous $q:\beta X\to S(X)$ with $qj=\eta$. [L1, L2, L3]

2.1 By [L1], $\beta X$ is compact. Thus the image $q[\beta X]$ is compact and therefore closed in the Hausdorff space $S(X)$ by [L4]. [L1, L4, step 1.1]

3.1 Since $q[\beta X]$ contains $qj[X]=\eta[X]$, it contains a dense subset of $S(X)$; its closedness from step 2.1 gives $q[\beta X]=S(X)$. [L2, step 1.1, step 2.1]

4.1 Hence $q$ is the asserted continuous surjection. [step 3.1] ∎

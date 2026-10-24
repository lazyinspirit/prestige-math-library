---
id: cor-tychonoff-spaces-have-compactifications-under-the-ultrafilter-lemma
kind: corollary
title: "Assuming the ultrafilter lemma, every Tychonoff space has a Hausdorff compactification"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-tychonoff-embedding-theorem, def-compactification-of-a-tychonoff-space, thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma, lem-products-preserve-t0-t1-and-hausdorff, thm-closed-subspace-of-a-compact-space-is-compact, thm-closure-characterisation-top, thm-heine-borel-r, thm-metric-hausdorff-separation]
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
    - title: "E. Moorhouse, The Stone–Čech Compactification"
      url: "https://ericmoorhouse.org/handouts/stone-cech.pdf"
pipeline_run: null
---

## Statement

Assume the ultrafilter lemma. If $X$ is Tychonoff, $e:X\to[0,1]^{C(X,[0,1])}$ is its full evaluation map, and $K=\overline{e[X]}$, then $(K,e)$ is a Hausdorff compactification of $X$. In particular every Tychonoff space has one. This statement uses the ultrafilter lemma only for compactness of the cube; it makes no assertion about dependent choice.

## Facts & Assumptions

**Given:** A Tychonoff space $X$ and the ultrafilter lemma.

[L1] Assuming the ultrafilter lemma, every product of compact Hausdorff spaces is compact ([[thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma]]).

[L2] A closed subspace of a compact space is compact, and a point lies in the closure of $A$ exactly when every open neighbourhood of it meets $A$ ([[thm-closed-subspace-of-a-compact-space-is-compact]], [[thm-closure-characterisation-top]]).

[L3] A Tychonoff space embeds in a unit cube ([[thm-tychonoff-embedding-theorem]]).

[L4] An arbitrary product of Hausdorff spaces is Hausdorff ([[lem-products-preserve-t0-t1-and-hausdorff]]).

[L5] The interval $[0,1]$ is compact, and its usual metric topology is Hausdorff ([[thm-heine-borel-r]], [[thm-metric-hausdorff-separation]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], the full evaluation map embeds $X$ as $E=e[X]$ in the cube $Q=[0,1]^{C(X,[0,1])}$. By [L5] the interval is compact Hausdorff, so [L1] makes $Q$ compact and [L4] makes it Hausdorff. [L1, L3, L4, L5]

1.2 Put $K=\overline E\subseteq Q$. It is closed, hence compact by [L2], and it is Hausdorff as a subspace of the Hausdorff space $Q$. [L1, L2]

2.1 The evaluation embedding $e:X\to K$ has image $E$, which is dense in $K$ by the definition of closure and [L2]. Thus $(K,e)$ is a Hausdorff compactification in the sense of [[def-compactification-of-a-tychonoff-space]]. [step 1.1, step 1.2, L2] ∎

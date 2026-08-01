---
id: thm-stone-cech-evaluation-closure-universal-property
kind: theorem
title: "Under the ultrafilter lemma and dependent choice, the closure of the full evaluation image is the Stone–Čech compactification"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-tychonoff-spaces-have-compactifications-under-the-ultrafilter-lemma, def-stone-cech-compactification, lem-unit-interval-functions-extend-over-evaluation-closure, lem-compact-hausdorff-targets-embed-in-unit-cubes-under-dependent-choice, thm-product-universal-property, thm-compact-subset-of-a-hausdorff-space-is-closed, cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Stacks Project, Stone–Čech compactification"
      url: "https://stacks.math.columbia.edu/tag/0908"
pipeline_run: null
---

## Statement

Assume the ultrafilter lemma and dependent choice. If $X$ is Tychonoff, $e:X\to[0,1]^{C(X,[0,1])}$ is its full evaluation map, and $B=\overline{e[X]}$, then $(B,e)$ is a Stone–Čech compactification of $X$.

## Facts & Assumptions

**Given:** The two stated choice principles, a Tychonoff space $X$, its full evaluation closure $B$, a compact Hausdorff space $K$, and a continuous map $f:X\to K$.

[L1] Under the ultrafilter lemma, the evaluation closure gives a Hausdorff compactification ([[cor-tychonoff-spaces-have-compactifications-under-the-ultrafilter-lemma]]).

[L2] Under dependent choice, $K$ has an embedding $j:K\to[0,1]^J$ ([[lem-compact-hausdorff-targets-embed-in-unit-cubes-under-dependent-choice]]).

[L3] A compact subset of a Hausdorff space is closed, and continuous maps agreeing on a dense subset with Hausdorff target agree everywhere ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal]]).

[L4] A family of continuous component maps assembles uniquely to a continuous map into the product ([[thm-product-universal-property]]).

[L5] Every continuous unit-interval-valued map extends uniquely over the full evaluation closure ([[lem-unit-interval-functions-extend-over-evaluation-closure]]).

[L6] A Stone–Čech compactification is a Hausdorff compactification with the stated unique compact-Hausdorff extension property ([[def-stone-cech-compactification]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $B$ is compact Hausdorff and $e[X]$ is dense in it. [L1]

1.2 Use [L2] to fix an embedding $j:K\to[0,1]^J$. For each $a\in J$, the map $\pi_a\circ j\circ f:X\to[0,1]$ extends uniquely to a continuous $h_a:B\to[0,1]$ by [L5]. [L2, L5]

2.1 The family $(h_a)_{a\in J}$ assembles to a continuous map $h:B\to[0,1]^J$ by [L4], and $h\circ e=j\circ f$ coordinatewise. [step 1.2, L4]

3.1 The subset $j[K]$ is compact, hence closed in the Hausdorff cube by [L3]. It contains $h[e[X]]$, so it contains $h[B]$: the inverse image $h^{-1}[j[K]]$ is closed in $B$ and contains the dense subset $e[X]$. [L3, step 1.1, step 2.1]

4.1 Thus $\bar f=j^{-1}\circ h:B\to K$ is continuous and satisfies $\bar f\circ e=f$. If $q:B\to K$ is another extension, then $j\circ q$ and $h$ agree on dense $e[X]$, so [L3] gives equality and injectivity of $j$ gives $q=\bar f$. [L3, step 2.1, step 3.1]

5.1 Step 1.1 gives a Hausdorff compactification and step 4.1 gives the required unique extension for every compact Hausdorff target. This is exactly [L6]. [step 1.1, step 4.1, L6] ∎

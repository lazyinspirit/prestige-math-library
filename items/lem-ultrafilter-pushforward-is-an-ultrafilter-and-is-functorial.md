---
id: lem-ultrafilter-pushforward-is-an-ultrafilter-and-is-functorial
kind: lemma
title: "Pushforward sends ultrafilters to ultrafilters and is functorial"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ultrafilter, thm-ultrafilter-characterisation]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Exercise 5.1.ii"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

For a function $f:X\to Y$ and an ultrafilter $\mathcal U$ on $X$, define

$$f_*\mathcal U=\{B\subseteq Y:f^{-1}[B]\in\mathcal U\}.$$

Then $f_*\mathcal U$ is an ultrafilter on $Y$. Moreover, $(1_X)_*=1_{\beta X}$ and $(g\circ f)_*=g_*\circ f_*$, where $\beta X$ denotes the set of ultrafilters on $X$.

## Facts & Assumptions

**Given:** A function $f:X\to Y$ and an ultrafilter $\mathcal U$ on $X$.

[L1] An ultrafilter is a proper filter maximal among proper filters ([[def-ultrafilter]]).

[L2] A proper filter is an ultrafilter exactly when, for every subset $A$, it contains either $A$ or its complement ([[thm-ultrafilter-characterisation]]).

## Proof

**Proof technique:** direct.

1.1 Inverse image preserves the whole set, inclusions, and finite intersections and sends the empty set to the empty set. Consequently the displayed family contains $Y$, excludes $\varnothing$, is upward closed, and is closed under finite intersections, so it is a proper filter. [L1]

2.1 For $B\subseteq Y$, [L2] applied to $f^{-1}[B]$ says that either $f^{-1}[B]\in\mathcal U$ or $X\setminus f^{-1}[B]=f^{-1}[Y\setminus B]\in\mathcal U$. Thus $f_*\mathcal U$ decides every subset of $Y$ and is an ultrafilter by [L2]. [L2, step 1.1]

3.1 The equalities $(1_X)^{-1}[A]=A$ and $(g\circ f)^{-1}[C]=f^{-1}[g^{-1}[C]]$ show membership-by-membership that $(1_X)_*\mathcal U=\mathcal U$ and $(g\circ f)_*\mathcal U=g_*(f_*\mathcal U)$. [step 2.1] ∎

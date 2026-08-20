---
id: thm-higher-regularity-of-local-inverses
kind: theorem
title: "A local inverse of a $C^k$ regular map is $C^k$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ck-euclidean-maps-and-diffeomorphisms, thm-ck-euclidean-maps-closed-under-algebra-and-composition, lem-matrix-inversion-preserves-ck-regularity, thm-euclidean-inverse-function-theorem]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Remark 8.5.8"
      url: "https://jirilebl.github.io/ra/realanal2.pdf"
pipeline_run: null
---

## Statement

Let $k,n\ge1$, let $U\subseteq\mathbb R^n$ be open, and let $f:U\to\mathbb R^n$ be $C^k$, with $Df(a)$ invertible. Then every local inverse supplied by the inverse function theorem at $a$ is $C^k$. In its inverse neighbourhood it satisfies

$$Dg(y)=Df(g(y))^{-1}.$$

## Facts & Assumptions

**Given:** The hypotheses in the Statement and the $C^k$ closure theorem [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]].

[L1] The inverse function theorem supplies an inverse $g:W\to V$ that is $C^1$ and satisfies $Dg(y)=Df(g(y))^{-1}$ ([[thm-euclidean-inverse-function-theorem]]).

[L2] If the entries of $A:U\to M_n(\mathbb R)$ are $C^r$ and $\det A$ never vanishes, then the entries of $A^{-1}$ are $C^r$ ([[lem-matrix-inversion-preserves-ck-regularity]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the local inverse exists, is $C^1$, and satisfies $Dg=(Df\circ g)^{-1}$ throughout its domain. [L1]

2.1 Suppose $1\le r<k$ and $g$ is $C^r$. Because $f$ is $C^k$, the entries of $Df$ are $C^{k-1}$, hence $C^r$ when $r<k$; closure under composition makes $Df\circ g$ $C^r$, and [L2] makes $Dg$ $C^r$. Therefore $g$ is $C^{r+1}$. Starting from step 1.1 and repeating this finite bootstrap reaches $C^k$. [step 1.1, L2, given, algebra] ∎

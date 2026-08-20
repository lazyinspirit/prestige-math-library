---
id: cor-c-one-local-diffeomorphisms-are-open-maps
kind: corollary
title: "A $C^1$ map with everywhere-invertible derivative is open"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-euclidean-inverse-function-theorem, def-homeomorphism-and-open-maps]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Corollary 8.5.2"
      url: "https://jirilebl.github.io/ra/realanal2.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open, and let $f:U\to\mathbb R^n$ be $C^1$. Suppose $Df(x)$ is invertible for every $x\in U$. Then $f$ maps every open subset of $U$ to an open subset of $\mathbb R^n$. Thus $f$ is an open map ([[def-homeomorphism-and-open-maps]]).

## Facts & Assumptions

**Given:** The map in the Statement and an open subset $O\subseteq U$.

[L1] At every point with invertible derivative, there are open sets $V,W\subseteq\mathbb R^n$ on which the map restricts to a $C^1$ diffeomorphism onto $W$ ([[thm-euclidean-inverse-function-theorem]]).

## Proof

**Proof technique:** direct.

1.1 Let $y\in f[O]$ and choose $x\in O$ with $f(x)=y$. Apply [L1] at $x$ and replace its source neighbourhood by its intersection with $O$; the image of that smaller neighbourhood is an open neighbourhood of $y$ contained in $f[O]$. [L1, given, choose]

2.1 Thus every point of $f[O]$ is interior. If $O=\varnothing$, its image is the open empty set, so $f[O]$ is open in every case. [step 1.1] ∎

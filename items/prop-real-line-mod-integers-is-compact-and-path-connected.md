---
id: prop-real-line-mod-integers-is-compact-and-path-connected
kind: proposition
title: "$\\mathbb R/\\mathbb Z$ is compact and path-connected"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-circle-as-real-line-mod-integers, lem-integer-part, thm-heine-borel-rn, thm-compactness-agrees-with-metric-compactness, thm-compactness-under-continuous-maps, def-path-connected, thm-algebra-of-continuous-functions, lem-continuity-is-local-and-pastes]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Jonathan Wise, Math 6210 Lecture Notes, Week 3, Sections 3.1 and 3.4"
      url: "https://math.colorado.edu/~jonathan.wise/teaching/math6210-fall-2012/notes.pdf"
pipeline_run: null
---

## Statement

$\mathbb R/\mathbb Z$ is compact and path-connected.

## Facts & Assumptions

**Given:** The quotient projection $p:\mathbb R\to\mathbb R/\mathbb Z$.

[L1] For every real $x$ there is exactly one integer $m$ with $m\le x<m+1$ ([[lem-integer-part]]).

[L2] A subset $K\subseteq\mathbb R$ is compact for the usual metric if and only if it is closed and bounded ([[thm-heine-borel-rn]]).

[L3] If $f:X\to Y$ is continuous and $K\subseteq X$ is compact, then $f[K]$ is a compact subset of $Y$ ([[thm-compactness-under-continuous-maps]]).

[L4] A space $X$ is path-connected when for every $x,y\in X$ there is a continuous path $\gamma:[0,1]\to X$ with $\gamma(0)=x$ and $\gamma(1)=y$ ([[def-path-connected]]).

[L5] The circle is $S^1:=\mathbb R/\mathbb Z$ with the quotient topology induced by $p(x)=[x]$ and basepoint $[0]$; moreover $p^{-1}([0])=\mathbb Z$ and $p(x+n)=p(x)$ for every real $x$ and integer $n$ ([[def-circle-as-real-line-mod-integers]]).

[L6] For a metric space, metric compactness is equivalent to compactness in its metric topology, both for the whole space and for every subspace ([[thm-compactness-agrees-with-metric-compactness]]).

[L7] Every constant real-valued function and the identity are continuous, and finite sums, products, and scalar multiples of continuous functions are continuous ([[thm-algebra-of-continuous-functions]]).

[L8] A composite of continuous maps is continuous ([[lem-continuity-is-local-and-pastes]]).

## Proof

**Proof technique:** direct.

1.1 For $x\in\mathbb R$, let $m=\lfloor x\rfloor$ from [L1] and put $r=x-m$. Then $0\le r<1$ and $p(r)=p(x)$ by [L5]. Hence $p|_{[0,1]}$ is surjective onto $\mathbb R/\mathbb Z$. [L1, L5]

2.1 The interval $[0,1]$ is closed and bounded, so [L2] makes it compact for the usual metric and [L6] makes it compact as a topological subspace. The quotient projection is continuous by [L5], and its restriction remains continuous. By step 1.1 its image is all of $\mathbb R/\mathbb Z$, so [L3] proves that $\mathbb R/\mathbb Z$ is compact. [step 1.1, L2, L3, L5, L6]

3.1 Let $[x],[y]\in\mathbb R/\mathbb Z$. The affine map $a(t)=(1-t)x+ty$ is continuous by [L7], and $\gamma=p\circ a$ is continuous by [L5] and [L8]. Its endpoints are $\gamma(0)=[x]$ and $\gamma(1)=[y]$. Thus [L4] gives a path between every pair of classes, so the quotient is path-connected. If the classes agree, the same conclusion also follows from the constant path. [L4, L5, L7, L8] ∎

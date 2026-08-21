---
id: fs-invertible-derivative-everywhere-gives-a-global-inverse
kind: false-statement
title: "FALSE: an everywhere-invertible derivative gives a global inverse"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-euclidean-inverse-function-theorem, def-c-one-map-and-local-inverse, def-invertible-euclidean-linear-map, def-metric-topology, thm-continuous-partial-derivatives-imply-total-differentiability, thm-algebra-of-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Example 8.5.4"
      url: "https://jirilebl.github.io/ra/realanal2.pdf"
pipeline_run: null
---

## Statement

**False claim:** a $C^1$ map between open subsets of $\mathbb R^n$ whose derivative is invertible everywhere must have a global inverse.

## Facts & Assumptions

**Given:** On the punctured plane $U=\mathbb R^2\setminus\{(0,0)\}$ define $S(x,y)=(x^2-y^2,2xy)$. The domain is open ([[def-metric-topology]]), and scalar derivative algebra is supplied by [[thm-algebra-of-derivatives]] and [[def-c-one-map-and-local-inverse]].

[L1] If $f$ is $C^1$ on an open Euclidean domain and $Df(a)$ is invertible, the inverse function theorem supplies open neighbourhoods on which $f$ has a $C^1$ inverse ([[thm-euclidean-inverse-function-theorem]]).

[L2] A Euclidean linear map is invertible when it has a two-sided linear inverse ([[def-invertible-euclidean-linear-map]]).

[L3] Continuous partial derivatives give total differentiability, with total derivative represented by the Jacobian matrix ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

## Refutation

**Proof technique:** direct.

1.1 By [L3], $$DS(x,y)=\begin{pmatrix}2x&-2y\\2y&2x\end{pmatrix}.$$ At $(x,y)\ne(0,0)$, the matrix $\frac1{2(x^2+y^2)}\begin{pmatrix}x&y\\-y&x\end{pmatrix}$ is its two-sided inverse, so [L2] and [L1] make $S$ locally invertible at every point of $U$. [L1, L2, L3, given, algebra]

2.1 Nevertheless $S(1,0)=(1,0)=S(-1,0)$. Thus $S$ is not injective and has no global inverse, despite its everywhere-invertible derivative. [step 1.1, algebra] ∎

---
id: ex-square-root-ac-not-lipschitz
kind: example
title: "$\sqrt{x}$ is absolutely continuous but not Lipschitz on $[0,1]$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-absolutely-continuous-function, def-lipschitz-holder-contraction,
       thm-nth-roots-exist, lem-of-square-monotone,
       lem-finite-sum-laws, thm-of-archimedean]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Christopher Heil, Absolute Continuity and the Banach-Zaretsky Theorem, Section 2"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
pipeline_run: null
---

## Example

The function $f(x)=\sqrt{x}$ is absolutely continuous on $[0,1]$, although its slope near zero prevents any global Lipschitz constant.

## Facts & Assumptions

**Given:** $f(x)=\sqrt{x}$ on $[0,1]$.

[L1] Nonnegative square roots exist, are unique, and are increasing ([[thm-nth-roots-exist]], [[lem-of-square-monotone]]).

[L2] Absolute continuity is tested on finite disjoint families of intervals ([[def-absolutely-continuous-function]]).

[L3] A Lipschitz bound must hold for every pair of points ([[def-lipschitz-holder-contraction]]).

## Verification

**Proof technique:** direct.

1.1 Let $[u_j,v_j]$ be pairwise nonoverlapping subintervals. Fix $r>0$. The intervals meeting $[0,r]$ contribute at most $\sqrt r$ in total, because $\sqrt{x}$ is increasing and their increments telescope after gaps are filled. On intervals with $u_j\ge r$,
$$\sqrt{v_j}-\sqrt{u_j}=\frac{v_j-u_j}{\sqrt{v_j}+\sqrt{u_j}}\le\frac{v_j-u_j}{2\sqrt r}.$$

1.2 Given $\varepsilon>0$, choose $r>0$ with $\sqrt r<\varepsilon/2$, then require $\sum_j(v_j-u_j)<\varepsilon\sqrt r$. Steps 1.1 and 1.2 make the total endpoint increment less than $\varepsilon$, proving absolute continuity by [L2]. [L1, L2]

2.1 If a Lipschitz constant $K$ existed, the pair $0$ and $1/n^2$ would give $n^{-1}\le K n^{-2}$, hence $n\le K$ for every positive integer $n$, contradicting the Archimedean property. Thus [L3] fails. ∎

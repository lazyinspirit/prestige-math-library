---
id: thm-the-discrete-and-indiscrete-topologies-form-an-adjoint-triple-over-set
kind: theorem
title: 'Discrete topology, underlying set, and indiscrete topology form an adjoint triple'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-adjoint-triple, def-standard-topologies, def-continuous-map-top, prop-sets-and-functions-form-category-set, prop-topological-spaces-and-continuous-maps-form-category-top]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Example 4.1.6'
      url: 'https://emilyriehl.github.io/files/context.pdf'
    - title: 'Tom Leinster, Basic Category Theory, Example 2.1.5'
      url: 'https://arxiv.org/pdf/1612.09375.pdf'
pipeline_run: null
---

## Statement

Let $D,I:\mathbf{Set}\to\mathbf{Top}$ equip a set with the discrete and indiscrete topology, respectively, and let $U:\mathbf{Top}\to\mathbf{Set}$ forget the topology. Then

$$D\dashv U\dashv I.$$

## Facts & Assumptions

**Given:** A set $X$ and a topological space $Y$.

[F1] The discrete topology on a set is its power set, and the indiscrete topology is $\{\varnothing,X\}$ ([[def-standard-topologies]]).

[F2] A map $f$ is continuous when it is continuous at every point, and $f$ is continuous at $x$ exactly when for every open $V\subseteq Y$ with $f(x)\in V$ there is an open $U\subseteq X$ with $x\in U$ and $f[U]\subseteq V$ ([[def-continuous-map-top]]).

[F3] Sets and functions form the locally small category $\mathbf{Set}$ ([[prop-sets-and-functions-form-category-set]]).

[F4] Topological spaces and continuous maps form the locally small category $\mathbf{Top}$ ([[prop-topological-spaces-and-continuous-maps-form-category-top]]).

[L1] An adjoint triple consists of adjunctions on both sides of its middle functor ([[def-adjoint-triple]]).

## Proof

**Proof technique:** direct.

1.1 Every function $f:X\to UY$ is continuous as a map $D(X)\to Y$: given $x\in X$ and an open $V\ni f(x)$ in $Y$, the singleton $U=\{x\}$ is open in the discrete topology by [F1] and satisfies $f[U]\subseteq V$, so [F2] gives continuity at $x$ and hence continuity. Thus the identity-on-functions correspondence gives $\mathbf{Top}(D X,Y)\cong\mathbf{Set}(X,UY)$. [F1, F2, F3, F4]

1.2 Every function $g:UY\to X$ is continuous as a map $Y\to I(X)$: by [F1] the only open sets of $I(X)$ are $\varnothing$ and $X$, so an open $V$ containing $g(y)$ must be $X$, and $U=Y$ is open with $g[U]\subseteq X$; [F2] again gives continuity. Thus $\mathbf{Set}(UY,X)\cong\mathbf{Top}(Y,I X)$. [F1, F2, F3, F4]

2.1 Both correspondences are natural because precomposition and postcomposition leave the underlying function unchanged. Therefore $D\dashv U$ and $U\dashv I$. [step 1.1, step 1.2]

3.1 By [L1] these adjunctions form the displayed triple. The same proof includes the empty set and singleton, whose discrete and indiscrete topologies may coincide. [step 2.1, L1] ∎

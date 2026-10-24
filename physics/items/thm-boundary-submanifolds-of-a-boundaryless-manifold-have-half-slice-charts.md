---
id: thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts
kind: theorem
title: "Boundary submanifolds of a boundaryless manifold have half-slice charts"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-embedded-smooth-submanifold-with-boundary, def-smooth-immersion-and-embedding-for-manifolds-with-boundary, thm-constant-rank-theorem-for-manifolds, def-smooth-function-on-a-relatively-open-subset-of-a-half-space]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
    - title: "Will Merry, Differential Geometry (2021), Lecture 24"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

If $S^k$ is an embedded manifold with boundary in a boundaryless $n$-manifold, then interior points have ordinary slice charts and boundary points have charts with $S=\{x^{k+1}=\cdots=x^n=0,\ x^k\ge0\}$.

## Facts & Assumptions

**Given:** A smooth embedding $i:S^k\hookrightarrow M^n$, where $S$ is a manifold with boundary and $M$ is boundaryless, and a point $p\in S$.

[L1] The differential of a smooth embedding of manifolds with boundary is injective on the full tangent space ([[def-smooth-immersion-and-embedding-for-manifolds-with-boundary]]).

[L2] A smooth half-space map admits a smooth Euclidean extension near each point ([[def-smooth-function-on-a-relatively-open-subset-of-a-half-space]]).

[L3] A rank-$k$ smooth map from a $k$-manifold has local coordinates in which it is $u\mapsto(u,0)$ ([[thm-constant-rank-theorem-for-manifolds]]).

## Proof

**Proof technique:** direct.

1.1 At an interior point, [L1] and [L3] give an ordinary slice chart. At a boundary point, choose boundary coordinates $x$ on $S$ and ordinary ambient coordinates. By [L2], extend the coordinate embedding to a smooth map $\widetilde F$ on an open subset of $\mathbb R^k$. Its derivative at the boundary point equals the injective differential from [L1], so after shrinking an invertible $k\times k$ minor stays nonzero and $\widetilde F$ has constant rank $k$. [given, L1, L2, L3]

2.1 Apply [L3] to $\widetilde F$. In the resulting source coordinates $u=\alpha(x)$ and target coordinates $(u,w)$, it has the form $u\mapsto(u,0)$. The source change $\alpha$ need not preserve the face, but it can be absorbed into the target chart: postcompose that chart with the local diffeomorphism $$(u,w)\longmapsto(\alpha^{-1}(u),w).$$ In the new target coordinates, $\widetilde F(x)=(x,0)$ in the original boundary coordinates. [L3, step 1.1]

3.1 Restricting $x$ back to the source half-space now gives $$S=\{x^{k+1}=\cdots=x^n=0,\ x^k\ge0\}$$ near the boundary point, while step 1.1 gives the ordinary slice at interior points. [step 2.1] ∎

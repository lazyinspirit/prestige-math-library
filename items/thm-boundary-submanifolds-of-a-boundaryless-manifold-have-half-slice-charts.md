---
id: thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts
kind: theorem
title: "Boundary submanifolds of a boundaryless manifold have half-slice charts"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-embedded-smooth-submanifold-with-boundary, def-smooth-immersion-and-embedding-for-manifolds-with-boundary, thm-constant-rank-theorem-for-manifolds]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
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

**Given:** The hypotheses and conventions in the statement.

## Proof

**Proof technique:** direct.

1.1 At an interior point apply the constant-rank theorem to the embedding. At a boundary point, choose boundary coordinates $x$ on $S$ and ordinary ambient coordinates, and smoothly extend the resulting coordinate embedding from the source half-space to a map $\widetilde F$ on an open subset of $\mathbb R^k$. Extension-independent derivatives and injectivity of the embedding differential show that $\widetilde F$ has rank $k$ after shrinking. [given]

2.1 Apply [[thm-constant-rank-theorem-for-manifolds]] to $\widetilde F$. In the resulting source coordinates $u=\alpha(x)$ and target coordinates $(u,w)$, it has the form $u\mapsto(u,0)$. The source change $\alpha$ need not preserve the face, but it can be absorbed into the target chart: postcompose that chart with the local diffeomorphism $$(u,w)\longmapsto(\alpha^{-1}(u),w).$$ In the new target coordinates, $\widetilde F(x)=(x,0)$ in the original boundary coordinates. [step 1.1]

3.1 Restricting $x$ back to the source half-space now gives $$S=\{x^{k+1}=\cdots=x^n=0,\ x^k\ge0\}$$ near the boundary point, while step 1.1 gives the ordinary slice at interior points. [step 2.1] ∎

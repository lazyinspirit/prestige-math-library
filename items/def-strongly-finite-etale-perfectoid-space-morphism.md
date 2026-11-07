---
id: def-strongly-finite-etale-perfectoid-space-morphism
kind: definition
title: "Strongly finite étale morphism of perfectoid spaces"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-perfectoid-space
  - def-perfectoid-affinoid-k-algebra
  - def-almost-module-and-almost-finite-etale-algebra
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Peter Scholze, Perfectoid Spaces, Definitions 7.1–7.2"
      url: "https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf"
verification:
  precheck: n/a
---

## Definition

Let $K$ be a perfectoid field. A morphism $(R,R^+)\to(S,S^+)$ of affinoid $K$-algebra pairs is **finite étale** if $S$ is a finite étale $R$-algebra with its induced topology and $S^+$ is the integral closure of the image of $R^+$ in $S$. Here a finite étale $R$-algebra is an $R$-algebra that is finite as an $R$-module, finitely presented as an $R$-algebra, flat over $R$, and has zero module of relative Kähler differentials. A morphism $f:Y\to X$ of adic spaces is finite étale if $X$ has an open affinoid cover such that each inverse image is affinoid and each induced affinoid-pair morphism is finite étale. It is **étale** if for every $y\in Y$ there are open neighborhoods $U\subseteq Y$ of $y$ and $V\subseteq X$ of $f(y)$, a finite étale morphism $Z\to V$, and a factorization $U\hookrightarrow Z\to V$ in which $U\hookrightarrow Z$ is an open immersion and the composite is $f|_U$. For perfectoid affinoid $K$-algebras, the pair morphism is **strongly finite étale** if it is finite étale and $S^{\circ a}$ is finite étale over $R^{\circ a}$ in the almost category for $K^\circ$. A morphism $f:Y\to X$ of perfectoid spaces over $K$ is strongly finite étale if $X$ has a cover by open affinoid perfectoid subspaces $V$ such that the entire preimage $f^{-1}(V)$ is affinoid perfectoid and the induced morphism of affinoid pairs $(\mathcal O_X(V),\mathcal O_X^+(V))\to(\mathcal O_Y(f^{-1}(V)),\mathcal O_Y^+(f^{-1}(V)))$ is strongly finite étale in the preceding sense.

## Definition references

[[def-perfectoid-space]]

[[def-perfectoid-affinoid-k-algebra]]

[[def-almost-module-and-almost-finite-etale-algebra]]

[Peter Scholze, *Perfectoid Spaces*, Definitions 7.1–7.2](https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf)


---
id: thm-evaluation-is-continuous-for-a-locally-compact-hausdorff-domain
kind: theorem
title: "Evaluation is continuous for the compact-open topology on a locally compact Hausdorff domain"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-compact-open-topology-for-topological-domains, thm-locally-compact-hausdorff-basics, def-product-topology, def-continuous-map-top]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Topology, second edition, Theorem 46.10"
      url: "https://djvu.online/file/7PTGeGhMkCAAK"
pipeline_run: null
---

## Statement

Let $X$ be a locally compact Hausdorff space and let $Y$ be a topological space. Give $C(X,Y)$ the compact-open topology. Then the evaluation map

$$\operatorname{ev}:C(X,Y)\times X\longrightarrow Y,\qquad \operatorname{ev}(f,x)=f(x),$$

is continuous. The assertion includes the empty domain, where the product domain is empty.

## Facts & Assumptions

**Given:** A locally compact Hausdorff space $X$ and a topological space $Y$.

[L1] A compact-open subbasic neighbourhood has the form $S(K,W)=\{g:g[K]\subseteq W\}$ for compact $K\subseteq X$ and open $W\subseteq Y$ ([[def-compact-open-topology-for-topological-domains]]).

[L2] If $X$ is locally compact Hausdorff, $x\in O$, and $O$ is open, then some open $U$ satisfies $x\in U\subseteq\overline U\subseteq O$ with $\overline U$ compact ([[thm-locally-compact-hausdorff-basics]]).

[L3] Products of open sets form a basis for the product topology ([[def-product-topology]]).

[L4] A continuous map pulls an open set back to an open set ([[def-continuous-map-top]]).

## Proof

**Proof technique:** direct.

1.1 If $X=\varnothing$, the domain $C(X,Y)\times X$ is empty, so evaluation is continuous. Assume henceforth that $(f,x)\in C(X,Y)\times X$ and that $W\subseteq Y$ is open with $f(x)\in W$. [L4]

1.2 By [L4], $O=f^{-1}[W]$ is open and contains $x$. By [L2], choose open $U$ with $x\in U\subseteq K:=\overline U\subseteq O$ and $K$ compact. [L2, L4]

2.1 The set $S(K,W)\times U$ is an open product neighbourhood of $(f,x)$: $f[K]\subseteq W$, $S(K,W)$ is subbasic open, and [L3] applies. [L1, L3, step 1.2]

3.1 If $(g,y)\in S(K,W)\times U$, then $y\in U\subseteq K$ and $g(y)\in W$. Thus evaluation maps this neighbourhood into $W$, proving continuity. [step 2.1] ∎

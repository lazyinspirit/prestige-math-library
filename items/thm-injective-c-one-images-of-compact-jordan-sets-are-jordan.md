---
id: thm-injective-c-one-images-of-compact-jordan-sets-are-jordan
kind: theorem
title: "An injective $C^1$ map with invertible derivative sends compact Jordan sets to compact Jordan sets"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-c-one-map-and-local-inverse, def-invertible-euclidean-linear-map, thm-euclidean-inverse-function-theorem, thm-continuous-image-of-a-compact-space-is-compact, thm-mean-value-inequality-for-total-derivatives, thm-lipschitz-images-of-null-sets-in-rn-are-null, thm-jordan-boundary-criterion]
justified_by: []
aliases: []
landmark: false
proof_strategy: local-to-global
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Leibman, Multidimensional Real Analysis, Theorem 6.1.4"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb R^n$ be open, let $g:U\to\mathbb R^n$ be injective and $C^1$, and suppose $Dg(x)$ is invertible for every $x\in U$. If $K\subseteq U$ is compact and Jordan measurable, then $g(K)$ is compact and Jordan measurable.

## Facts & Assumptions

**Given:** The open set $U$, injective $C^1$ map $g$, and compact Jordan set $K\subseteq U$.

[L1] The Euclidean inverse function theorem makes $g$ a local $C^1$ diffeomorphism wherever its derivative is invertible ([[thm-euclidean-inverse-function-theorem]]).

[L2] A continuous image of a compact space is compact ([[thm-continuous-image-of-a-compact-space-is-compact]]).

[L3] Lipschitz self-maps of Euclidean space preserve null sets ([[thm-lipschitz-images-of-null-sets-in-rn-are-null]]), and a bounded set is Jordan measurable exactly when its boundary is null ([[thm-jordan-boundary-criterion]]).

[L4] A uniform derivative bound on a convex open set gives a Lipschitz bound there ([[thm-mean-value-inequality-for-total-derivatives]]).

## Proof

**Proof technique:** local-to-global.

1.1 Continuity and [L2] make $g(K)$ compact, hence closed and bounded. If $y=g(x)\in\partial g(K)$, then $x$ cannot lie in the interior of $K$: otherwise [L1], together with global injectivity on $U$, would map a neighborhood of $x$ contained in $K$ onto a neighborhood of $y$ contained in $g(K)$. Thus the following boundary inclusion holds. [L1, L2]
$$\partial g(K)\subseteq g(\partial K).$$

1.2 Around each point of the compact set $\partial K$, choose a closed cube in a slightly larger convex cube inside $U$ on which $Dg$ is bounded. By [L4], $g$ is Lipschitz on the smaller cube. Composing its restriction with coordinatewise clamping onto that cube produces a Lipschitz self-map of $\mathbb R^n$, so [L3] sends the null set $\partial K$ inside the cube to a null set. A finite subcover shows that $g(\partial K)$ is null. [L3, L4, given]

2.1 Step 1.1 makes $\partial g(K)$ a subset of the null set from step 1.2. Since $g(K)$ is bounded, the boundary criterion in [L3] proves it is Jordan measurable. [L3, step 1.1, step 1.2] ∎

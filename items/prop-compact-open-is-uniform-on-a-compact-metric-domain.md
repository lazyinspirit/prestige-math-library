---
id: prop-compact-open-is-uniform-on-a-compact-metric-domain
kind: proposition
title: "On a nonempty compact metric domain, the compact-open topology is the uniform topology"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-compact-open-equals-compact-convergence, def-topology-of-compact-convergence, def-topology-of-uniform-convergence]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Topology, second edition, Section 46"
      url: "https://djvu.online/file/7PTGeGhMkCAAK"
pipeline_run: null
---

## Statement

Let $X$ be a nonempty compact metric space and let $Y$ be a metric space. On $C(X,Y)$, the published compact-open topology is equal to the topology of uniform convergence.

## Facts & Assumptions

**Given:** A nonempty compact metric space $X$ and a metric space $Y$.

[L1] For metric domain and target, the compact-open topology equals the topology of compact convergence ([[thm-compact-open-equals-compact-convergence]]).

[L2] Compact convergence has basic sets $B_K(f,\varepsilon)$ requiring $d(f(x),g(x))<\varepsilon$ for every $x$ in a compact $K$; and by its clause (U3), for $f,g\in C(X,Y)$ and a nonempty compact $K\subseteq X$ the value $\max_{x\in K}d(f(x),g(x))$ exists ([[def-topology-of-compact-convergence]]).

[L3] The uniform topology is induced by $\bar\rho(f,g)=\sup_{x\in X}\min\{d(f(x),g(x)),1\}$ ([[def-topology-of-uniform-convergence]]).

## Proof

**Proof technique:** direct.

1.1 A uniform ball of radius $0<\delta<\min\{\varepsilon,1\}$ about $f$ is contained in every compact-convergence basic set $B_K(f,\varepsilon)$, because its inequality holds at every point of $X$. [L2, L3]

2.1 Conversely take $0<\varepsilon<1$ and $g\in B_X(f,\varepsilon)$, so $d(f(x),g(x))<\varepsilon$ at every $x\in X$. Since $X$ is nonempty and compact, clause (U3) of [L2] makes $M:=\max_{x\in X}d(f(x),g(x))$ exist, and $M<\varepsilon<1$ because the maximum is one of the values. Hence $\bar\rho(f,g)=\sup_{x\in X}\min\{d(f(x),g(x)),1\}=M<\varepsilon$, so $g$ lies in the uniform ball of radius $\varepsilon$. For the reverse inclusion note that step 1.1 is stated for a radius strictly below $\varepsilon$ and so cannot be instantiated at $\varepsilon$ itself; argue directly instead: if $\bar\rho(f,g)<\varepsilon<1$ then $\min\{d(f(x),g(x)),1\}<\varepsilon<1$ at every $x$, so $d(f(x),g(x))<\varepsilon$ at every $x$ and $g\in B_X(f,\varepsilon)$. So $B_X(f,\varepsilon)$ is exactly that uniform ball. [L2, L3, step 1.1]

3.1 Steps 1.1 and 2.1 show that compact convergence and uniform convergence induce the same topology. By [L1], that topology is also the compact-open topology. [L1, step 1.1, step 2.1] ∎

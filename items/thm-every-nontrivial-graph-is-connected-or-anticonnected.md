---
id: thm-every-nontrivial-graph-is-connected-or-anticonnected
kind: theorem
title: "Every graph with at least two vertices is connected or anticonnected"
status: published
origin: session
deps: [def-anticonnected-graph-and-anticonnected-component, def-connected-graph-and-connected-component, cor-connected-components-partition-the-vertex-set, def-graph-isomorphism-and-complement]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, The structure of bull-free graphs"
      url: "https://web.math.princeton.edu/~mchudnov/bullsurvey.pdf"
pipeline_run: null
---

## Statement

Every finite graph with at least two vertices is connected or anticonnected. Equivalently, if $G$ is disconnected and nontrivial, then $\overline G$ is connected.

## Facts & Assumptions

**Given:** A finite graph $G$ with $|V(G)|\ge2$.

[F1] $G$ is anticonnected exactly when $\overline G$ is connected ([[def-anticonnected-graph-and-anticonnected-component]]).

[L1] If $G$ is disconnected, its connected components partition $V(G)$ into at least two nonempty parts ([[cor-connected-components-partition-the-vertex-set]], [[def-connected-graph-and-connected-component]]).

[F2] Vertices in different components of $G$ are nonadjacent in $G$ and hence adjacent in $\overline G$ ([[def-graph-isomorphism-and-complement]]).

## Proof

**Proof technique:** direct.

1.1 If $G$ is connected, the first alternative holds. Suppose instead that $G$ is disconnected. [Given]

1.2 Let $x,y\in V(G)$. If $x=y$, the length-zero path joins them. If they are distinct and lie in different components, then $xy\in E(\overline G)$. [L1, F2]

1.3 If $x\ne y$ and they lie in the same component, choose a vertex $z$ in a different component. Then $xz,zy\in E(\overline G)$, so $x,z,y$ is an $x$-$y$ path in $\overline G$. [L1, F2]

2.1 Every two vertices are therefore joined in $\overline G$, so $\overline G$ is connected and $G$ is anticonnected. [step 1.2, step 1.3, F1] ∎

---
id: thm-continuous-image-of-a-compact-space-is-compact
kind: theorem
title: "The image of a compact metric space under a continuous map is compact, and so is the image of any compact subset"
status: published
origin: session
deps: [def-metric-compactness, lem-compactness-is-intrinsic, def-metric-continuity, thm-metric-continuity-characterisations, def-metric-topology, def-isometry-and-metric-embedding, def-injection-surjection-bijection, def-metric-space]
justified_by: []
aliases: []
landmark: true
short: "continuous image of a compact space"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]) and let
$f : X \to Y$ be continuous ([[def-metric-continuity]]). Then:

1. If $(X,d_X)$ is compact ([[def-metric-compactness]]), the image
   $f[X] \subseteq Y$ is a compact subset of $Y$.
2. More generally, if $K \subseteq X$ is a compact subset of $X$, then $f[K]$ is
   a compact subset of $Y$.

No choice principle is used.

## Facts & Assumptions

**Given:** Metric spaces $(X,d_X)$ and $(Y,d_Y)$ and a continuous $f : X \to Y$; images and preimages are written $f[\,\cdot\,]$ and $f^{-1}[\,\cdot\,]$ ([[def-injection-surjection-bijection]]).

[L1] A subset $A$ of a metric space is compact exactly when for every family $(V_i)_{i \in I}$ of open subsets of the ambient space with $A \subseteq \bigcup_{i \in I} V_i$ there are $n \in \mathbb{N}$ and $i_0, \dots, i_n \in I$ with $A \subseteq V_{i_0} \cup \dots \cup V_{i_n}$, or else $A = \emptyset$; and a space is a compact subset of itself exactly when it is a compact metric space ([[lem-compactness-is-intrinsic]], [[def-metric-compactness]]).

[L2] $f$ is continuous exactly when $f^{-1}[V]$ is open in $X$ for every open $V \subseteq Y$ ([[thm-metric-continuity-characterisations]], [[def-metric-continuity]], [[def-metric-topology]]).

[L3] The restriction of $f$ to a metric subspace $(K,d_K)$ of $X$ is continuous as a map $(K,d_K) \to (Y,d_Y)$, since the $\varepsilon$-$\delta$ condition at a point of $K$ is the condition for $f$ at that point read for the points of $K$ only, and $d_K$ is the restriction of $d_X$ ([[def-isometry-and-metric-embedding]], [[def-metric-continuity]]).

## Proof

**Proof technique:** direct.

1.1 Assume $(X,d_X)$ compact and let $(V_i)_{i \in I}$ be a family of open subsets of $Y$ with $f[X] \subseteq \bigcup_{i \in I} V_i$. [L1]

2.1 Each $f^{-1}[V_i]$ is open in $X$, and $X = \bigcup_{i \in I} f^{-1}[V_i]$, because every $x \in X$ has $f(x) \in f[X]$ and so $f(x) \in V_i$ for some $i$. [L2, step 1.1]

3.1 If $X = \emptyset$ then $f[X] = \emptyset$ and there is nothing to prove; otherwise compactness of $X$, read against the indexed family of step 2.1, gives $n \in \mathbb{N}$ and $i_0, \dots, i_n \in I$ with $X = f^{-1}[V_{i_0}] \cup \dots \cup f^{-1}[V_{i_n}]$. [L1, step 2.1]

4.1 Every $y \in f[X]$ is $f(x)$ for some $x \in X$, and that $x$ lies in some $f^{-1}[V_{i_j}]$, so $y \in V_{i_j}$; hence $f[X] \subseteq V_{i_0} \cup \dots \cup V_{i_n}$ and $f[X]$ is a compact subset of $Y$: claim 1. [L1, step 3.1]

5.1 For claim 2, let $K \subseteq X$ be a compact subset, so that $(K,d_K)$ is a compact metric space; the restriction of $f$ to $K$ is continuous, and its image is $f[K]$, so claim 1 applied to that restriction gives that $f[K]$ is a compact subset of $Y$. [L1, L3, step 4.1] ∎

## Remarks

**Compactness travels forwards, not backwards.** The preimage of a compact set under a continuous map need not be compact: a constant map from an unbounded space has a one-point image. What claim 1 uses is that preimages of *open* sets are open, which is the content of continuity, together with the fact that a finite subcover upstairs projects to a finite subcover downstairs.

**Consequences on this page.** Claim 1 with $Y = \mathbb{R}$ gives the extreme value theorem ([[thm-extreme-value-metric]]), and claim 2 is what makes the inverse of a continuous bijection from a compact space continuous ([[thm-continuous-bijection-from-a-compact-space-has-continuous-inverse]]).

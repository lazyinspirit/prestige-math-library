---
id: lem-compact-closed-balls-in-a-locally-compact-metric-space
kind: lemma
title: "In a locally compact metric space every point has arbitrarily small compact closed balls, hence a neighbourhood base of compact sets"
status: published
origin: session
deps: [def-locally-compact-metric-space, def-metric-compactness, lem-compactness-is-intrinsic,
       lem-closed-subset-of-a-compact-space-is-compact, def-metric-ball, def-metric-topology,
       thm-metric-open-set-algebra, def-isometry-and-metric-embedding, def-metric-space,
       def-neighbourhood-top, def-max-min, lem-finite-set-has-max, thm-heine-borel-rn]
justified_by: []
aliases: []
landmark: false
short: "compact closed balls, small ones"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Locally compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_compact_space"
    - title: "J. Munkres, Topology, 2nd ed., §29"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a locally compact metric space
([[def-locally-compact-metric-space]]) and let $x \in X$. Then there is a real
$r_0 > 0$ such that

1. $\bar B(x,r)$ is a compact subset of $X$ ([[def-metric-ball]],
   [[def-metric-compactness]]) for **every** real $r$ with $0 < r < r_0$; and
2. the family $\{\, \bar B(x,r) : 0 < r < r_0 \,\}$ is a neighbourhood base at
   $x$ ([[def-neighbourhood-top]]) consisting of compact sets: every
   neighbourhood of $x$ contains one of these closed balls.

Note that the closed ball itself is compact, not merely its closure; a closed
ball is already closed ([[thm-metric-open-set-algebra]]). No choice principle is
used.

## Facts & Assumptions

**Given:** A locally compact metric space $(X,d)$ and a point $x \in X$; balls $B(x,r)$ and $\bar B(x,r)$ as in [[def-metric-ball]].

[A1] Local compactness at $x$: there are a compact subset $K \subseteq X$ and a real $r_0 > 0$ with $B(x,r_0) \subseteq K$ ([[def-locally-compact-metric-space]]).

[L1] $\bar B(x,r)$ is closed in $(X,d)$ for every real $r > 0$, and a set is closed exactly when its complement is open ([[thm-metric-open-set-algebra]], [[def-metric-topology]]).

[L2] A subset $A \subseteq X$ is compact exactly when the metric subspace $(A, d_A)$ is a compact metric space, $d_A$ being the restriction of $d$; and for $A \subseteq K \subseteq X$ the metric $A$ inherits from $(K,d_K)$ is $d_A$, both being the restriction of $d$ to $A \times A$ ([[def-metric-compactness]], [[def-isometry-and-metric-embedding]]).

[L3] A subset of a metric subspace is open in that subspace exactly when it is the trace on it of a set open in the ambient space ([[lem-compactness-is-intrinsic]], claim 1).

[L4] A closed subset of a compact metric space is a compact subset of it ([[lem-closed-subset-of-a-compact-space-is-compact]]).

[L5] $B(x,s) \subseteq \bar B(x,s)$, and $0 < s \le t$ gives $B(x,s) \subseteq B(x,t)$ and $\bar B(x,s) \subseteq \bar B(x,t)$; moreover $\bar B(x,s) \subseteq B(x,t)$ whenever $0 < s < t$, since $d(x,y) \le s < t$ ([[def-metric-ball]]).

[L6] A set $N$ is a neighbourhood of $x$ exactly when there is a real $s > 0$ with $B(x,s) \subseteq N$, the balls around $x$ being a neighbourhood base there ([[def-neighbourhood-top]], [[def-metric-topology]]).

[L7] The minimum of a two-element set of reals exists and is one of the two elements ([[lem-finite-set-has-max]], [[def-max-min]]).

## Proof

**Proof technique:** direct.

1.1 Fix $K$ and $r_0$ as in [A1], so that $K$ is compact and $B(x,r_0) \subseteq K$. [A1, choose]

1.2 Let $r$ be a real with $0 < r < r_0$. [given]

1.3 For claim 2, let $N$ be a neighbourhood of $x$ and fix a real $s > 0$ with $B(x,s) \subseteq N$. [L6, choose]

2.1 $\bar B(x,r) \subseteq B(x,r_0) \subseteq K$, the first inclusion because $r < r_0$. [step 1.1, step 1.2, L5]

2.2 $X \setminus \bar B(x,r)$ is open in $(X,d)$, since $\bar B(x,r)$ is closed. [step 1.2, L1]

2.3 Put $r := \min\{s, r_0\}/2$, a real with $0 < r$, $r < r_0$ and $r < s$, since $\min\{s,r_0\}$ is one of $s$ and $r_0$ and is at most each of them. [step 1.3, step 1.1, L7]

3.1 $K \setminus \bar B(x,r) = (X \setminus \bar B(x,r)) \cap K$ is open in the metric subspace $(K, d_K)$, being the trace on $K$ of a set open in $X$; hence $\bar B(x,r) = \bar B(x,r) \cap K$ is closed in $(K,d_K)$. [step 2.1, step 2.2, L2, L3]

4.1 $(K,d_K)$ is a compact metric space by step 1.1, so its closed subset $\bar B(x,r)$ is a compact subset of it, that is the metric subspace of $(K,d_K)$ on $\bar B(x,r)$ is a compact metric space. [step 1.1, step 3.1, L2, L4]

5.1 That metric subspace is $(\bar B(x,r), d_{\bar B(x,r)})$, the metric being the restriction of $d$ either way, so $\bar B(x,r)$ is a compact subset of $X$; this is claim 1. [step 4.1, L2]

6.1 By step 5.1 the set $\bar B(x,r)$ is compact, and $\bar B(x,r) \subseteq B(x,s) \subseteq N$ because $r < s$; moreover $\bar B(x,r)$ is a neighbourhood of $x$, since $B(x,r) \subseteq \bar B(x,r)$ and $B(x,r)$ is open and contains $x$. [step 5.1, step 1.3, step 2.3, L5, L6]

7.1 Steps 5.1 and 6.1 give claims 1 and 2: every $\bar B(x,r)$ with $0 < r < r_0$ is a compact neighbourhood of $x$, and every neighbourhood of $x$ contains one of them. [step 5.1, step 6.1] ∎

## Remarks

- **Where local compactness is spent.** Once, at step 1.1, to produce a single compact set with nonempty interior around $x$. Everything after that is the hereditary behaviour of compactness: a closed subset of a compact space is compact ([[lem-closed-subset-of-a-compact-space-is-compact]]), and closed balls are closed ([[thm-metric-open-set-algebra]]).

- **The bound $r < r_0$ is not cosmetic.** The closed ball $\bar B(x,r_0)$ itself need not be contained in $K$, since $B(x,r_0) \subseteq K$ says nothing about points at distance exactly $r_0$, so the argument is run strictly below $r_0$. That costs nothing, because arbitrarily small radii are what the neighbourhood base of claim 2 needs.

- **Compactness of every closed ball is a strictly stronger property.** The lemma asserts compactness of the *small* closed balls at each point, with the threshold depending on the point. In $\mathbb{R}^{n}$ every closed ball is compact ([[thm-heine-borel-rn]]), but that is a feature of $\mathbb{R}^{n}$ and not a consequence of local compactness.

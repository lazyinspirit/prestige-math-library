---
id: thm-evaluation-is-continuous-on-a-locally-compact-metric-domain
kind: theorem
title: "If $X$ is a locally compact metric space then the evaluation map is continuous for the compact-open topology"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-evaluation-map, def-compact-open-topology, def-locally-compact-metric-space,
       lem-compact-closed-balls-in-a-locally-compact-metric-space, def-product-topology,
       def-continuous-map-top, thm-continuity-characterisations-top, def-metric-ball,
       def-metric-topology, thm-metric-open-set-algebra, def-metric-compactness,
       def-topology-basis-subbasis, thm-basis-criterion, def-metrizable-space,
       def-max-min, lem-finite-set-has-max, def-topological-space, def-metric-space]
justified_by: []
aliases: []
landmark: true
short: "evaluation is continuous (locally compact domain)"
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
    - title: "Compact-open topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact-open_topology"
    - title: "J. Munkres, Topology, 2nd ed., §46"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a **locally compact** metric space
([[def-locally-compact-metric-space]]) carrying its metric topology, let
$(Y,\mathcal{T}_Y)$ be a topological space ([[def-topological-space]]), and give
$C(X,Y)$ the compact-open topology ([[def-compact-open-topology]]). Then the
evaluation map

$$e : C(X,Y) \times X \to Y, \qquad e(f,x) = f(x)$$

([[def-evaluation-map]]) is continuous, the product carrying the product topology
([[def-product-topology]]).

**No hypothesis whatever is placed on $Y$**, which is an arbitrary topological
space: the argument uses only that a point of $Y$ lies in an open set. No choice
principle is used.

**Local compactness is not removable.** This page records as a false statement
that the evaluation map is continuous for every metric domain, and its witness is
$X = \mathbb{Q}$, a metric space that is locally compact at no point.

## Facts & Assumptions

**Given:** A locally compact metric space $(X,d)$ with its metric topology, a topological space $(Y,\mathcal{T}_Y)$, the set $C(X,Y)$ with the compact-open topology, and the evaluation map $e$.

[L1] A map $h$ into $Y$ is continuous exactly when for every point $p$ of its domain and every open $V \subseteq Y$ with $h(p) \in V$ there is an open $U$ of the domain with $p \in U$ and $h[U] \subseteq V$ ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).

[L2] For a two-element index set the basic product-open sets are the boxes: $O \times U$ with $O$ open in $C(X,Y)$ and $U$ open in $X$ is open in $C(X,Y) \times X$ ([[def-product-topology]], [[thm-basis-criterion]], [[def-topology-basis-subbasis]]).

[L3] $S(K,V) = \{\, g \in C(X,Y) : g[K] \subseteq V \,\}$ is open in the compact-open topology for every compact $K \subseteq X$ and open $V \subseteq Y$ ([[def-compact-open-topology]]).

[L4] Local compactness at $x$ gives a real $r_0 > 0$ such that $\bar B(x,r)$ is compact for every real $r$ with $0 < r < r_0$ ([[lem-compact-closed-balls-in-a-locally-compact-metric-space]], [[def-locally-compact-metric-space]], [[def-metric-compactness]]).

[L5] A subset $W \subseteq X$ is open exactly when each of its points has a ball around it inside $W$; balls are open; $B(x,r) \subseteq \bar B(x,r)$; and $\bar B(x,r) \subseteq B(x,s)$ whenever $0 < r < s$ ([[def-metric-topology]], [[thm-metric-open-set-algebra]], [[def-metric-ball]], [[def-metrizable-space]]).

[L6] The minimum of a two-element set of reals exists, is one of the two elements and is at most each of them ([[lem-finite-set-has-max]], [[def-max-min]]).

[L7] $f \in C(X,Y)$ is continuous, so $f^{-1}[V]$ is open in $X$ for every open $V \subseteq Y$ ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).

## Proof

**Proof technique:** direct.

1.1 Let $(f,x) \in C(X,Y) \times X$ and let $V \subseteq Y$ be open with $e(f,x) = f(x) \in V$. [L1]

1.2 Local compactness gives a real $r_0 > 0$ such that $\bar B(x,r)$ is compact for every real $r$ with $0 < r < r_0$. [L4, choose]

2.1 $f^{-1}[V]$ is open in $X$ and contains $x$, so there is a real $s > 0$ with $B(x,s) \subseteq f^{-1}[V]$. [step 1.1, L5, L7, choose]

3.1 Put $r := \min\{s, r_0\}/2$, a real with $0 < r$, $r < r_0$ and $r < s$; then $K := \bar B(x,r)$ is compact and $K \subseteq B(x,s) \subseteq f^{-1}[V]$, that is $f[K] \subseteq V$. [step 2.1, step 1.2, L5, L6]

4.1 Hence $f \in S(K,V)$, which is open in the compact-open topology, and $x \in B(x,r)$, which is open in $X$; so $S(K,V) \times B(x,r)$ is an open subset of the product containing $(f,x)$. [step 3.1, L2, L3, L5]

5.1 For every $(g,y) \in S(K,V) \times B(x,r)$: $y \in B(x,r) \subseteq \bar B(x,r) = K$ and $g[K] \subseteq V$, so $e(g,y) = g(y) \in V$; that is, $e[S(K,V) \times B(x,r)] \subseteq V$. [step 3.1, step 4.1, L3, L5]

6.1 Steps 4.1 and 5.1 exhibit, for the arbitrary point $(f,x)$ and the arbitrary open $V$ containing its image, an open set of the product around $(f,x)$ mapped into $V$; so $e$ is continuous. [step 1.1, step 4.1, step 5.1, L1] ∎

## Remarks

- **What the compact-open topology is doing.** The whole proof is the single observation that $S(K,V)$ constrains a function on the *whole* of the compact set $K$, so once $K$ is a neighbourhood of $x$ the constraint survives moving the point as well as moving the function. A topology whose basic sets constrain a function at finitely many points only, such as the topology of pointwise convergence, cannot do this, and the evaluation map is in general not continuous for it.

- **Where local compactness is spent.** Once, at step 1.2, to produce a *compact* neighbourhood of $x$ inside the open set $f^{-1}[V]$. Every metric space has arbitrarily small closed balls inside such an open set; what local compactness adds is that they may be taken compact.

- **The converse is not asserted.** Nothing here says that continuity of the evaluation map forces $X$ to be locally compact. That direction is true for Hausdorff spaces in the general theory and is not proved in this library.

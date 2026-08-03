---
id: fs-quotient-map-is-open
kind: false-statement
title: "FALSE: every quotient map is an open map"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-quotient-topology, def-homeomorphism-and-open-maps, def-interval,
       def-metrizable-space, lem-real-line-is-a-metric-space,
       lem-open-or-closed-surjection-is-quotient, def-topological-space]
justified_by: []
forward_refs: [cex-quotient-map-neither-open-nor-closed]
aliases: []
landmark: false
short: "a quotient map need not be open"
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
    - title: "Quotient space (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Quotient_space_(topology)"
    - title: "Open and closed maps (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_and_closed_maps"
pipeline_run: null
---

## Statement

**False claim:** every quotient map $q : X \to Y$ ([[def-quotient-topology]]) is
an open map, that is, carries open subsets of $X$ to open subsets of $Y$
([[def-homeomorphism-and-open-maps]]).

The converse implication is the one that holds: a continuous open surjection is a
quotient map ([[lem-open-or-closed-surjection-is-quotient]], clause 1). The claim
above fails for the cheapest identification there is, collapsing a closed
interval of $\mathbb{R}$ to a point. Take $X := \mathbb{R}$ with its usual
topology ([[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]),
$B := [0,1]$ ([[def-interval]]), and let

$$q : \mathbb{R} \to \mathbb{R}/B$$

be the canonical projection of the quotient that identifies all of $B$ to one
point and identifies nothing else ([[def-quotient-topology]]). Then $q$ is a
quotient map by construction, and $q[(-1,\ 1/2)]$ is not open.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with its usual topology; $B = [0,1]$; the equivalence relation on $\mathbb{R}$ whose classes are $B$ and the singletons $\{t\}$ for $t \notin B$; the quotient $\mathbb{R}/B$ with the quotient topology and its canonical projection $q$; and the set $U := (-1,\ 1/2)$.

[A1] $q$ is a surjection, the topology of $\mathbb{R}/B$ is the quotient topology of $q$, and consequently $V \subseteq \mathbb{R}/B$ is open exactly when $q^{-1}[V]$ is open in $\mathbb{R}$; so $q$ is a quotient map ([[def-quotient-topology]]).

[A2] $A \subseteq \mathbb{R}$ is saturated for $q$ exactly when $A \cap B$ is $\varnothing$ or $B$, and $q^{-1}[q[A]]$ is the saturation of $A$ ([[def-quotient-topology]]).

[A3] $f$ is an open map when images of open sets are open ([[def-homeomorphism-and-open-maps]]).

[L1] $(a,b) = \{t : a < t < b\}$ and $[0,1] = \{t : 0 \le t \le 1\}$; $U \subseteq \mathbb{R}$ is open in the usual topology exactly when every point of $U$ has a bounded open interval around it inside $U$, and every bounded open interval is open ([[def-interval]], [[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]).

[L2] A continuous open surjection is a quotient map ([[lem-open-or-closed-surjection-is-quotient]], clause 1).

[L3] A topology is a family of subsets of the underlying set ([[def-topological-space]]).

## Refutation

**Proof technique:** direct.

1.1 $U = (-1,\ 1/2)$ is open in $\mathbb{R}$, being a bounded open interval. [L1]

1.2 $U \cap B = [0,\ 1/2)$, which is neither $\varnothing$, since it contains $0$, nor $B$, since $1 \in B$ and $1 \notin [0,1/2)$; so $U$ is not saturated. [A2, L1]

1.3 $(-1,\ 1]$ is not open in $\mathbb{R}$: for every $r > 0$ the interval $(1-r,\ 1+r)$ contains $1 + r/2$, which satisfies $1 + r/2 > 1$ and so lies outside $(-1,1]$; hence no bounded open interval around $1$ lies inside $(-1,1]$. [L1]

2.1 $q^{-1}[q[U]] = U \cup B = (-1,\ 1]$: the saturation of $U$ adds to $U$ exactly the class of each of its points, and the only non-singleton class meeting $U$ is $B$ itself, by step 1.2. [step 1.2, A2, L1]

3.1 By step 2.1 and step 1.3 the set $q^{-1}[q[U]]$ is not open in $\mathbb{R}$, so $q[U]$ is not open in $\mathbb{R}/B$ by [A1]. [step 2.1, step 1.3, A1, L3]

4.1 By [A1] the map $q$ is a quotient map, and by step 1.1 and step 3.1 it carries the open set $U$ to a set that is not open; so $q$ is not an open map by [A3], and the claim is false. [step 1.1, step 3.1, A1, A3, L2] ∎

## Remarks

- **The obstruction is saturation, and it is the general one.** A quotient map is
  open exactly when the saturation of every open set is open
  ([[def-quotient-topology]]), and collapsing a set with nonempty interior
  destroys that: an open set that meets $B$ without containing it acquires the
  whole of $B$ in its saturation, and $B$ has boundary points.

- **Closedness fails independently.** The map above happens to be closed, since
  the saturation of a closed set $F$ is $F$ or $F \cup B$, both closed; so this
  witness separates "quotient map" from "open map" only. A quotient map that is
  neither open nor closed needs a different construction, and one is worked on the
  companion page as [[cex-quotient-map-neither-open-nor-closed]].

- **Why the converse direction is nevertheless useful.** Most quotients that are
  identified with a known space in practice are open quotient maps, because their
  equivalence relation comes from translating by the elements of a group, and
  translation is a homeomorphism; both the circle and the torus on the companion
  page are of that kind.

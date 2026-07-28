---
id: fs-a-connected-space-is-locally-connected
kind: false-statement
title: "FALSE: every connected space is locally connected"
status: draft
origin: session
deps: [lem-the-oscillating-zigzag-curve, def-locally-connected, def-connected-space,
       thm-locally-connected-iff-components-of-open-sets-are-open,
       def-connected-component-and-quasicomponent, def-subspace-topology-top]
justified_by: []
aliases: []
landmark: false
short: "a connected space need not be locally connected"
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Locally connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_connected_space"
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
pipeline_run: null
---

## Statement

**False claim:** every connected topological space ([[def-connected-space]]) is
locally connected ([[def-locally-connected]]).

Neither condition implies the other, and this item refutes one of the two
directions. The other fails as well: a two-point discrete space is locally
connected and disconnected, as [[def-locally-connected]] records.

**Witness.** The closure $\overline{G}$ of the zigzag graph
([[lem-the-oscillating-zigzag-curve]]), a subspace of $\mathbb{R}^2$
([[def-subspace-topology-top]]), is connected and is not locally connected at any
point of the segment $\{0\} \times [0,1]$.

## Facts & Assumptions

**Given:** The zigzag graph $G \subseteq \mathbb{R}^2$ and its closure $\overline{G}$, with the subspace topology.

[A1] $X$ is locally connected when for every $x \in X$ and every open $U \ni x$ there is an open connected $V$ with $x \in V \subseteq U$; being locally connected requires this at every point ([[def-locally-connected]], [[def-subspace-topology-top]]).

[L1] $\overline{G}$ is connected ([[lem-the-oscillating-zigzag-curve]], claim 3).

[L2] $\overline{G}$ is **not** locally connected at any point $(0,t)$ with $t \in [0,1]$, and such points belong to $\overline{G}$ ([[lem-the-oscillating-zigzag-curve]], claims 2 and 5).

[L3] A space is locally connected exactly when every component of every open subspace is open in it, and then its own components are clopen ([[thm-locally-connected-iff-components-of-open-sets-are-open]], [[def-connected-component-and-quasicomponent]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that the claim holds: every connected space is locally connected. [assume-contra]

2.1 $\overline{G}$ is connected by [L1], so the supposed claim applies to it and $\overline{G}$ is locally connected. [step 1.1, L1]

3.1 By [A1] this means $\overline{G}$ is locally connected at every one of its points, in particular at $(0,0)$, which lies in $\overline{G}$ by [L2]. [step 2.1, A1, L2]

4.1 This contradicts [L2], which denies local connectedness at that point. So the claim is false. [step 3.1, L2, discharge-contradiction] ∎

## Remarks

- **Connectedness is global and local connectedness is not, so no implication is to be expected in either direction.** Connectedness says the space cannot be cut in two; local connectedness says every point has arbitrarily small connected open neighbourhoods. A space can be a single unbroken piece and still be locally shredded at some of its points, which is what $\overline{G}$ is at every point of the added segment.

- **What the failure costs.** By [L3] a locally connected space has clopen components and, inside every open set, open components. In $\overline{G}$ that machinery is unavailable, which is precisely why its partition into path components fails to be a partition into clopen pieces and why the space is connected without being path-connected.

- **The failure is confined to the segment.** Claim 5 of [[lem-the-oscillating-zigzag-curve]] locates it at the points $(0,t)$, and at every other point $\overline{G}$ agrees locally with $G$, which is locally connected by claim 1 there.

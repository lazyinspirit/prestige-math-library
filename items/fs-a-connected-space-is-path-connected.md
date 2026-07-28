---
id: fs-a-connected-space-is-path-connected
kind: false-statement
title: "FALSE: every connected topological space is path-connected"
status: draft
origin: session
deps: [lem-the-oscillating-zigzag-curve, def-connected-space, def-path-connected,
       thm-path-connected-implies-connected, def-subspace-topology-top]
justified_by: []
aliases: []
landmark: false
short: "a connected space need not be path-connected"
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
    - title: "Topologist's sine curve (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Topologist%27s_sine_curve"
pipeline_run: null
---

## Statement

**False claim:** every connected topological space ([[def-connected-space]]) is
path-connected ([[def-path-connected]]).

The implication holds in the other direction — every path-connected space is
connected ([[thm-path-connected-implies-connected]]) — and it is that true
statement which the false one attempts to reverse.

**Witness.** The closure $\overline{G}$ of the zigzag graph
([[lem-the-oscillating-zigzag-curve]]), a subspace of $\mathbb{R}^2$
([[def-subspace-topology-top]]), is connected and is not path-connected.

## Facts & Assumptions

**Given:** The graph $G$ of the zigzag function and its closure $\overline{G}$ in $\mathbb{R}^2$, with the subspace topology.

[A1] A space is path-connected when any two of its points are joined by a path, and connected when it admits no separation ([[def-path-connected]], [[def-connected-space]], [[def-subspace-topology-top]]).

[L1] $\overline{G}$ is connected ([[lem-the-oscillating-zigzag-curve]], claim 3).

[L2] $\overline{G}$ is **not** path-connected ([[lem-the-oscillating-zigzag-curve]], claim 4).

[L3] Every path-connected space is connected ([[thm-path-connected-implies-connected]], claim 2).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that the claim holds: every connected space is path-connected. [assume-contra]

1.2 $\overline{G}$ is a topological space, being a subspace of $\mathbb{R}^2$, and it is connected by [L1]. [L1, A1]

2.1 Applying the supposed claim to $\overline{G}$ gives that $\overline{G}$ is path-connected. [step 1.1, step 1.2]

3.1 This contradicts [L2], which says $\overline{G}$ is not path-connected. So the claim is false. [step 2.1, L2, discharge-contradiction] ∎

## Remarks

- **What survives is the converse, and only the converse.** [L3] is a theorem: path-connectedness implies connectedness, always. The false claim is its reversal, and $\overline{G}$ shows that no amount of connectedness alone produces a path.

- **Where the failure sits in the witness.** By claim 2 of [[lem-the-oscillating-zigzag-curve]] the space $\overline{G}$ is the graph $G$ together with the segment $\{0\} \times [0,1]$. The graph on its own is path-connected; adjoining the segment keeps the space connected, because the closure of a connected set is connected, and destroys path-connectedness, because a path reaching the segment from $G$ would have to take the values $0$ and $1$ in its second coordinate arbitrarily late.

- **A hypothesis that does repair it.** A connected space that is also locally path-connected is path-connected ([[thm-connected-and-locally-path-connected-implies-path-connected]]), and $\overline{G}$ fails that extra hypothesis at every point of the segment.

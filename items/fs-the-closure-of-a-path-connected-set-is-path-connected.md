---
id: fs-the-closure-of-a-path-connected-set-is-path-connected
kind: false-statement
title: "FALSE: the closure of a path-connected subspace is path-connected"
status: published
origin: session
deps: [lem-the-oscillating-zigzag-curve, def-path-connected, thm-closure-of-a-connected-set,
       def-connected-space, def-subspace-topology-top, def-interior-closure-boundary-top]
justified_by: []
aliases: []
landmark: false
short: "the closure of a path-connected set need not be path-connected"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
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

**False claim:** if $A$ is a path-connected subset of a topological space $X$
([[def-path-connected]], [[def-subspace-topology-top]]), then $\overline{A}$ is
path-connected ([[def-interior-closure-boundary-top]]).

The corresponding statement for **connectedness** is true and is
[[thm-closure-of-a-connected-set]]; the false claim above is that statement with
"connected" replaced by "path-connected" throughout, and the replacement is not
legitimate.

**Witness.** In $X = \mathbb{R}^2$ take $A = G$, the graph of the zigzag function
([[lem-the-oscillating-zigzag-curve]]): $G$ is path-connected and $\overline{G}$
is not.

## Facts & Assumptions

**Given:** The zigzag graph $G \subseteq \mathbb{R}^2$ and its closure $\overline{G}$, with the subspace topology.

[A1] A subset is path-connected when any two of its points are joined by a path with image in it; closure is taken in the ambient space ([[def-path-connected]], [[def-subspace-topology-top]], [[def-interior-closure-boundary-top]]).

[L1] $G$ is path-connected ([[lem-the-oscillating-zigzag-curve]], claim 1).

[L2] $\overline{G}$ is **not** path-connected ([[lem-the-oscillating-zigzag-curve]], claim 4).

[L3] If $A$ is connected then so is every $B$ with $A \subseteq B \subseteq \overline{A}$; in particular $\overline{A}$ is connected ([[thm-closure-of-a-connected-set]], [[def-connected-space]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that the claim holds: the closure of every path-connected subset is path-connected. [assume-contra]

2.1 $G$ is a path-connected subset of $\mathbb{R}^2$ by [L1], so the supposed claim applies to it. [step 1.1, L1, A1]

3.1 It follows that $\overline{G}$ is path-connected. [step 2.1]

4.1 This contradicts [L2]. So the claim is false. [step 3.1, L2, discharge-contradiction] ∎

## Remarks

- **Exactly one word changes between the true statement and the false one.** [L3] holds in every topological space with no hypothesis at all, and the witness above shows that its path-connected analogue holds in none but the cases where some further hypothesis is present. The asymmetry has a cause: a point of $\overline{A} \setminus A$ is a limit of points of $A$, which is enough to prevent a separation but not enough to produce a path, a path being a single continuous map defined on the whole unit interval.

- **The added set is as small as it can usefully be.** By claim 2 of [[lem-the-oscillating-zigzag-curve]], $\overline{G} \setminus G$ is one segment. So a path-connected set can lose path-connectedness on adjoining a single closed segment, and no larger or more complicated addition is needed.

- **What the witness does not show.** Nothing here says that the closure of a path-connected set is never path-connected; it usually is. The claim refuted is the universal one.

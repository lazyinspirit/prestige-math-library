---
id: fs-a-totally-disconnected-space-is-discrete
kind: false-statement
title: "FALSE: a totally disconnected space carries the discrete topology"
status: published
origin: session
deps: [def-connected-component-and-quasicomponent, cor-connected-subsets-of-the-line,
       def-connected-space, def-standard-topologies, def-subspace-topology-top,
       lem-q-and-irrationals-dense-r, lem-of-q-dense, def-interval,
       def-metrizable-space, lem-real-line-is-a-metric-space, def-metric-topology,
       def-metric-ball, def-topological-space]
justified_by: []
aliases: []
landmark: false
short: "a totally disconnected space need not be discrete"
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
    - title: "Totally disconnected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Totally_disconnected_space"
    - title: "Discrete space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discrete_space"
pipeline_run: null
---

## Statement

**False claim:** if every connected component of a topological space is a single
point ([[def-connected-component-and-quasicomponent]]) then the space carries the
discrete topology ([[def-standard-topologies]]).

The implication holds in the other direction — a discrete space is totally
disconnected, as [[def-connected-component-and-quasicomponent]] shows — and it is
that true statement which the false one attempts to reverse.

**Witness.** The set $\mathbb{Q}$ of rationals inside $\mathbb{R}$, as a subspace
of the usual topology ([[lem-q-and-irrationals-dense-r]],
[[def-subspace-topology-top]], [[lem-real-line-is-a-metric-space]],
[[def-metrizable-space]]). Every component of $\mathbb{Q}$ is a single point, and
no singleton is open in $\mathbb{Q}$, so the topology is not discrete.

Here $\mathbb{Q}$ denotes the copy $\mathbb{Q}_{\mathbb{R}}$ of the rationals
inside $\mathbb{R}$ ([[lem-q-and-irrationals-dense-r]]).

## Facts & Assumptions

**Given:** $\mathbb{R}$ with its usual topology and the subspace $\mathbb{Q} = \mathbb{Q}_{\mathbb{R}} \subseteq \mathbb{R}$.

[A1] A subset of $\mathbb{R}$ is a connected subset exactly when it is order-convex, that is when it contains every real lying between two of its points ([[cor-connected-subsets-of-the-line]], [[def-interval]], [[def-connected-space]]).

[A2] The subspace topology is transitive: for $E \subseteq \mathbb{Q} \subseteq \mathbb{R}$ the topology $E$ inherits from $\mathbb{Q}$ is the one it inherits from $\mathbb{R}$ ([[def-subspace-topology-top]]).

[A3] Both $\mathbb{Q}$ and $\mathbb{R} \setminus \mathbb{Q}$ are dense in $\mathbb{R}$: every nonempty open interval of $\mathbb{R}$ contains a rational and an irrational ([[lem-q-and-irrationals-dense-r]], [[lem-of-q-dense]]).

[A4] $B(x,r) = (x-r, x+r)$ and a subset $U \subseteq \mathbb{R}$ is open exactly when each of its points has such a ball inside it; the open sets of the subspace $\mathbb{Q}$ are the traces $U \cap \mathbb{Q}$ ([[lem-real-line-is-a-metric-space]], [[def-metric-ball]], [[def-metric-topology]], [[def-metrizable-space]], [[def-subspace-topology-top]], [[def-interval]]).

[A5] In the discrete topology every subset is open, in particular every singleton ([[def-standard-topologies]], [[def-topological-space]]).

[A6] The component of a point is the largest connected subset containing it, and a space is totally disconnected when every component is a singleton, equivalently when every connected subset has at most one point ([[def-connected-component-and-quasicomponent]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that the claim holds: every totally disconnected space carries the discrete topology. [assume-contra]

1.2 Let $E \subseteq \mathbb{Q}$ be connected as a subspace of $\mathbb{Q}$. By [A2] the space $E$ is the same whether $E$ is regarded as a subspace of $\mathbb{Q}$ or of $\mathbb{R}$, so $E$ is a connected subset of $\mathbb{R}$ and hence order-convex by [A1]. [A1, A2]

1.3 The singleton $\{q\}$ is not open in $\mathbb{Q}$ for any $q \in \mathbb{Q}$: an open set of $\mathbb{Q}$ containing $q$ is a trace $U \cap \mathbb{Q}$ with $U$ open in $\mathbb{R}$, so it contains $(q-r, q+r) \cap \mathbb{Q}$ for some $r > 0$ by [A4], and that set contains a rational other than $q$, since $(q, q+r)$ is a nonempty open interval and meets $\mathbb{Q}$ by [A3]. [A3, A4]

2.1 $E$ has at most one point: if $p, q \in E$ with $p < q$ then order-convexity from step 1.2 puts every real of $[p,q]$ in $E \subseteq \mathbb{Q}$, whereas $(p,q)$ contains an irrational by [A3]. So every connected subset of $\mathbb{Q}$ has at most one point, and $\mathbb{Q}$ is totally disconnected by [A6]. [step 1.2, A3, A6]

3.1 Applying the supposed claim of step 1.1 to $\mathbb{Q}$ makes its topology discrete, so every singleton $\{q\}$ is open in $\mathbb{Q}$ by [A5]. [step 1.1, step 2.1, A5]

4.1 This contradicts step 1.3. So the claim is false. [step 1.3, step 3.1, discharge-contradiction] ∎

## Remarks

- **What separates the two notions.** Total disconnectedness forbids *large* connected pieces; discreteness demands that each point be *isolated*. In $\mathbb{Q}$ every point is a limit of other points, so nothing is isolated, and yet no two points can be joined inside $\mathbb{Q}$ by an order-convex set, because the irrationals block every interval. Both facts hold simultaneously, and step 1.3 and step 2.1 are exactly the two of them.

- **The witness is not exotic.** No construction is needed: $\mathbb{Q}$ with its usual topology is the standard example, and the only inputs are the density of the rationals and of the irrationals ([A3]) together with the classification of the connected subsets of the line ([A1]).

- **A second, non-countable witness exists.** The set of irrationals, and the Cantor set, are totally disconnected and not discrete for the same reason. The Cantor set case is already recorded elsewhere in the library as [[ex-cantor-set-is-perfect-and-totally-disconnected]], which proves that every connected subset of it is a single point while no point of it is isolated.

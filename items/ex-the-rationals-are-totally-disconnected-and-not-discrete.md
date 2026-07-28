---
id: ex-the-rationals-are-totally-disconnected-and-not-discrete
kind: example
title: "$\\mathbb{Q}$ as a subspace of $\\mathbb{R}$: every component is a single point, no point is isolated, and the space is not locally connected anywhere"
status: published
origin: session
deps: [def-connected-component-and-quasicomponent, cor-connected-subsets-of-the-line,
       def-connected-space, def-subspace-topology-top, lem-q-and-irrationals-dense-r,
       lem-of-q-dense, def-standard-topologies, def-interval,
       thm-components-partition-and-are-closed, def-locally-connected,
       def-metrizable-space, lem-real-line-is-a-metric-space, def-metric-topology,
       def-metric-ball, thm-rationals-countable, cor-irrationals-uncountable,
       def-interior-closure-boundary-top]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
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
    - title: "Rational number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rational_number"
pipeline_run: null
---

## Example

Let $\mathbb{Q} = \mathbb{Q}_{\mathbb{R}}$ be the copy of the rationals inside
$\mathbb{R}$ ([[lem-q-and-irrationals-dense-r]]) with the subspace topology of
the usual topology ([[def-subspace-topology-top]],
[[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]). Then:

1. **Every component is a single point**: $C(q) = \{q\}$ for every
   $q \in \mathbb{Q}$, so $\mathbb{Q}$ is totally disconnected
   ([[def-connected-component-and-quasicomponent]]).
2. **No point is isolated**: $\{q\}$ is not open in $\mathbb{Q}$, so the topology
   is not discrete ([[def-standard-topologies]]).
3. **$\mathbb{Q}$ is not locally connected at any of its points.**
4. **The components are closed and not open.** They are closed by
   [[thm-components-partition-and-are-closed]] and not open by claim 2, so
   $\mathbb{Q}$ is a space in which every component fails to be clopen.

$\mathbb{Q}$ is countably infinite ([[thm-rationals-countable]]) while its
complement in $\mathbb{R}$ is uncountable ([[cor-irrationals-uncountable]]); it
is the abundance of the complement, not the scarcity of $\mathbb{Q}$, that drives
claim 1.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with its usual topology and the subspace $\mathbb{Q} \subseteq \mathbb{R}$.

[A1] A subset of $\mathbb{R}$ is a connected subset exactly when it is order-convex ([[cor-connected-subsets-of-the-line]], [[def-interval]], [[def-connected-space]]).

[A2] The subspace topology is transitive, so a subset of $\mathbb{Q}$ carries the same topology whether taken inside $\mathbb{Q}$ or inside $\mathbb{R}$; the open sets of $\mathbb{Q}$ are the traces $U \cap \mathbb{Q}$ with $U$ open in $\mathbb{R}$ ([[def-subspace-topology-top]]).

[A3] Every nonempty open interval of $\mathbb{R}$ contains a rational and an irrational ([[lem-q-and-irrationals-dense-r]], [[lem-of-q-dense]]).

[A4] $B(x,r) = (x-r, x+r)$, and $U \subseteq \mathbb{R}$ is open exactly when every point of it has such a ball inside it ([[lem-real-line-is-a-metric-space]], [[def-metric-ball]], [[def-metric-topology]], [[def-metrizable-space]], [[def-interval]]).

[A5] $C(q)$ is the largest connected subset containing $q$; the components partition the space and each is closed; a space is totally disconnected when every component is a singleton ([[def-connected-component-and-quasicomponent]], [[thm-components-partition-and-are-closed]], [[def-interior-closure-boundary-top]]).

[A6] $X$ is locally connected at $x$ when every open $U \ni x$ contains an open connected $V$ with $x \in V \subseteq U$ ([[def-locally-connected]]).

[A7] In the discrete topology every singleton is open ([[def-standard-topologies]]).

## Verification

**Proof technique:** direct.

1.1 Let $E \subseteq \mathbb{Q}$ be a connected subset of $\mathbb{Q}$. By [A2] the space $E$ is the same as a subspace of $\mathbb{R}$, so $E$ is a connected subset of $\mathbb{R}$ and hence order-convex by [A1]. [A1, A2]

1.2 Let $q \in \mathbb{Q}$ and let $W$ be open in $\mathbb{Q}$ with $q \in W$. By [A2] and [A4] there is $r > 0$ with $(q-r, q+r) \cap \mathbb{Q} \subseteq W$, and $(q, q+r)$ is a nonempty open interval, hence contains a rational $q' \ne q$ by [A3]; so $W \ne \{q\}$. [A2, A3, A4]

2.1 $E$ has at most one point: if $p, u \in E$ with $p < u$ then order-convexity from step 1.1 puts every real of $[p,u]$ into $E \subseteq \mathbb{Q}$, whereas $(p,u)$ contains an irrational by [A3]. Hence every connected subset of $\mathbb{Q}$ is empty or a singleton, and $C(q) = \{q\}$ by [A5]; this is claim 1, and with [A5] it also gives claim 4's closedness half. [step 1.1, A3, A5]

2.2 No singleton is open in $\mathbb{Q}$, by step 1.2 applied with $W = \{q\}$; so the topology is not discrete by [A7], which is claim 2, and the components of claim 1 are not open, which completes claim 4. [step 1.2, A7]

3.1 $\mathbb{Q}$ is not locally connected at any $q$: take $U := \mathbb{Q}$, which is open and contains $q$; a connected $V$ with $q \in V \subseteq U$ is a singleton by step 2.1, hence $V = \{q\}$, which is not open by step 2.2. So no open connected $V$ exists and [A6] fails at $q$. This is claim 3. [step 2.1, step 2.2, A6] ∎

## Remarks

- **Total disconnectedness and discreteness come apart here, and the two steps that separate them are step 2.1 and step 2.2.** The first says the irrationals block every interval, so no connected set can span two rationals; the second says the rationals themselves are everywhere, so no rational is isolated. A space can be shredded into points without those points being separated.

- **Local connectedness fails for a structural reason, not a delicate one.** In any totally disconnected space the only candidates for a connected neighbourhood are singletons, so local connectedness at $x$ is equivalent to $\{x\}$ being open. Hence a totally disconnected space is locally connected exactly when it is discrete, and step 3.1 is that observation applied to $\mathbb{Q}$.

- **The same argument applies to the irrationals.** Nothing in steps 1.1 and 2.1 used countability of $\mathbb{Q}$; only that its complement meets every interval. The irrationals have that property too by [A3], so they are totally disconnected and not discrete as well, and they are uncountable ([[cor-irrationals-uncountable]]).

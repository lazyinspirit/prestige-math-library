---
id: fs-every-topology-is-metrizable
kind: false-statement
title: "FALSE: every topology is induced by some metric"
status: draft
origin: session
deps: [def-metrizable-space, def-standard-topologies, thm-metric-hausdorff-separation, def-metric-topology,
       def-topological-space, def-sequence-convergence-top, lem-metric-limits-unique]
justified_by: []
forward_refs: [cex-non-metrizable-topology]
aliases: []
landmark: false
short: "not every topology is metrizable"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Metrizable space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metrizable_space"
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Trivial topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Trivial_topology"
pipeline_run: null
---

## Statement

**False claim:** every topological space $(X,\mathcal{T})$ is metrizable, that is,
for every topology there is a metric on $X$ whose metric topology is
$\mathcal{T}$ ([[def-metrizable-space]], [[def-metric-topology]]).

The claim fails for the smallest interesting reason available: every metric space
separates distinct points by disjoint open sets
([[thm-metric-hausdorff-separation]]), and the indiscrete topology on a set with
two points has no two disjoint nonempty open sets at all
([[def-standard-topologies]]).

## Facts & Assumptions

**Given:** A two-point set $X = \{a,b\}$ with $a \ne b$, carrying the indiscrete topology $\mathcal{T}_{\mathrm{ind}} = \{\varnothing, X\}$.

[A1] The indiscrete topology on $X$ has exactly the two open sets $\varnothing$ and $X$ ([[def-standard-topologies]]).

[A2] $(X,\mathcal{T})$ is metrizable when some metric $d$ on $X$ has $\mathcal{T}_d = \mathcal{T}$ ([[def-metrizable-space]]).

[L1] In a metric space, distinct points $p \ne q$ admit disjoint open sets $B(p,r)$ and $B(q,r)$ containing $p$ and $q$ respectively, with $r = d(p,q)/2 > 0$ ([[thm-metric-hausdorff-separation]]).

[L2] Open sets of a metric topology are exactly the members of $\mathcal{T}_d$ ([[def-metric-topology]]), and a topology contains $\varnothing$ and $X$ ([[def-topological-space]]).

## Refutation

**Proof technique:** direct.

1.1 Suppose $d$ were a metric on $X$ with $\mathcal{T}_d = \mathcal{T}_{\mathrm{ind}}$. [assume-hyp]

1.2 Since $a \ne b$, [L1] supplies open sets $U \ni a$ and $V \ni b$ of $(X,d)$ with $U \cap V = \varnothing$. [given, L1]

2.1 By the supposition of step 1.1 the sets $U$ and $V$ lie in $\mathcal{T}_{\mathrm{ind}} = \{\varnothing, X\}$; and $a \in U$, $b \in V$ make both nonempty, so $U = V = X$ by [A1]. [step 1.1, step 1.2, A1, L2]

3.1 Then $U \cap V = X \ne \varnothing$, since $a \in X$, contradicting the disjointness of step 1.2; so no such metric $d$ exists and $(X, \mathcal{T}_{\mathrm{ind}})$ is not metrizable. [step 1.2, step 2.1, A2] ∎

## Remarks

- **A second reading of the same failure, in terms of limits.** In the indiscrete topology on $X$ every sequence converges to every point ([[def-sequence-convergence-top]]), whereas in a metric space a sequence has at most one limit ([[lem-metric-limits-unique]]). A constant sequence therefore converges to two distinct points here and could not do so under any metric. This is the same obstruction as the one used above, since uniqueness of limits is a consequence of the separation of distinct points by disjoint balls.

- **Separation is one obstruction and countability is another.** Every metrizable space is Hausdorff, which is what the refutation above uses, and every metrizable space is also first countable ([[def-metrizable-space]], [[def-first-countable-top]]). The cocountable topology on $\mathbb{R}$ fails the second: were it first countable, [[thm-first-countable-sequences-suffice]] would make the identity onto the usual topology continuous, which it is not ([[fs-sequentially-continuous-implies-continuous]]). So it is not metrizable either, on grounds independent of the two-point witness. Neither obstruction is a characterisation: metrization theorems need separation and countability axioms that this library does not develop.

- **What is being refuted is an existence claim**, so the refutation must rule out *every* metric, which is why it argues from a property that all metric topologies share rather than by inspecting candidate metrics. The witness is worked again on the companion page ([[cex-non-metrizable-topology]]).

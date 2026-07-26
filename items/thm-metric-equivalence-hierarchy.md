---
id: thm-metric-equivalence-hierarchy
kind: theorem
title: "Lipschitz equivalence implies uniform equivalence implies topological equivalence"
status: draft
origin: session
deps: [def-equivalent-metrics, def-metric-topology, thm-metric-continuity-characterisations,
       def-metric-ball, def-metric-continuity, def-metric-space, lem-of-inverse-positive,
       lem-of-sign-rules, lem-of-add-order, def-ordered-field, def-complete-ordered-field]
justified_by: []
forward_refs: [cex-topologically-not-uniformly-equivalent, cex-uniformly-not-lipschitz-equivalent]
aliases: []
landmark: true
short: "Lipschitz $\\Rightarrow$ uniform $\\Rightarrow$ topological"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Equivalence of metrics (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_of_metrics"
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
    - title: "J. Munkres, Topology, 2nd ed., §20"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $d$ and $d'$ be metrics on the same set $X$ ([[def-metric-space]]), with the
three equivalences as in [[def-equivalent-metrics]]. Then:

1. If $d$ and $d'$ are Lipschitz equivalent, they are uniformly equivalent.
2. If $d$ and $d'$ are uniformly equivalent, they are topologically equivalent.

**Strictness is not claimed here.** The theorem asserts the two implications and
nothing more; that neither reverses is witnessed by explicit pairs of metrics on
the companion page, and those witnesses are not prerequisites of this theorem.
See the first remark below.

## Facts & Assumptions

**Given:** A set $X$ and two metrics $d, d'$ on it; a real $\varepsilon > 0$.

[A1] Lipschitz equivalence: there are reals $\alpha, \beta > 0$ with $\alpha\, d(x,y) \le d'(x,y) \le \beta\, d(x,y)$ for all $x, y \in X$ ([[def-equivalent-metrics]]).

[A2] Uniform equivalence: for every real $\varepsilon > 0$ there are $\delta, \delta' > 0$ such that $d(x,y) < \delta$ implies $d'(x,y) < \varepsilon$ and $d'(x,y) < \delta'$ implies $d(x,y) < \varepsilon$, for all $x, y \in X$ ([[def-equivalent-metrics]]).

[L1] Inverses and products of positives: $\gamma > 0$ gives $\gamma^{-1} > 0$ ([[lem-of-inverse-positive]]), and a product of positives is positive; multiplying an inequality by a positive preserves it, in the strict form of [[lem-of-sign-rules]] and, with the case of equality settled by totality, in the nonstrict form ([[def-ordered-field]], [[def-complete-ordered-field]]).

[L2] Transitivity of the order, and addition of a constant to an inequality ([[lem-of-add-order]], [[def-ordered-field]]).

[L3] Continuity of a map at a point in the $\varepsilon$-$\delta$ form ([[def-metric-continuity]]); a map continuous at every point has open preimages of open sets ([[thm-metric-continuity-characterisations]]).

[L4] Open sets and the metric topology ([[def-metric-topology]]); membership in a ball ([[def-metric-ball]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1: assume [A1] and let $\varepsilon > 0$. Put $\delta := \varepsilon \beta^{-1}$ and $\delta' := \alpha \varepsilon$, both positive since $\alpha, \beta, \varepsilon$ are. If $d(x,y) < \delta$ then $d'(x,y) \le \beta\, d(x,y) < \beta\delta = \varepsilon$; and if $d'(x,y) < \delta'$ then $\alpha\, d(x,y) \le d'(x,y) < \alpha\varepsilon$, so $d(x,y) < \varepsilon$ after multiplying by $\alpha^{-1} > 0$. Hence $d$ and $d'$ are uniformly equivalent. [A1, L1, L2]

1.2 Assume [A2]. Then the identity map $\mathrm{id} : (X,d) \to (X,d')$ is continuous at every point $a \in X$: given $\varepsilon > 0$, the $\delta$ of [A2] satisfies $d(x,a) < \delta \Rightarrow d'(x,a) < \varepsilon$, which is the $\varepsilon$-$\delta$ condition at $a$; symmetrically $\mathrm{id} : (X,d') \to (X,d)$ is continuous at every point, using $\delta'$. [A2, L3]

2.1 By [L3] applied to the two continuous identity maps of step 1.2: the preimage under $\mathrm{id} : (X,d) \to (X,d')$ of a $d'$-open set $V$ is $V$ itself and is $d$-open, so every $d'$-open set is $d$-open; and symmetrically every $d$-open set is $d'$-open. Hence $\mathcal{T}_d = \mathcal{T}_{d'}$, which is claim 2. [step 1.2, L3, L4]

3.1 Claims 1 and 2 are established by steps 1.1 and 2.1, so Lipschitz equivalence implies uniform equivalence and uniform equivalence implies topological equivalence. [step 1.1, step 2.1] ∎

## Remarks

- **Neither implication reverses, and the witnesses are on the companion page.**
  On $(0,\infty)$ the metrics $|x-y|$ and $|1/x - 1/y|$ have the same topology
  and are not uniformly equivalent
  ([[cex-topologically-not-uniformly-equivalent]]); on $\mathbb{R}$ the metrics
  $|x-y|$ and $\min\{|x-y|,1\}$ are uniformly equivalent and not Lipschitz
  equivalent ([[cex-uniformly-not-lipschitz-equivalent]]). Those two items are
  read here as orientation only: this theorem does not depend on them, and its
  statement claims nothing about strictness.
- **Uniform equivalence is strictly more than "both identities are
  continuous".** Continuity of both identity maps is exactly topological
  equivalence, by the argument of step 2.1 read in reverse; uniform equivalence
  additionally demands that one $\delta$ serve at every point at once, and that
  is the whole difference between the two conditions.
- **What each level preserves.** Lipschitz equivalence preserves boundedness and
  changes diameters by at most a constant factor; uniform equivalence preserves
  Cauchy sequences and uniform continuity, notions taken up on a later page and
  not defined here; topological equivalence preserves the open sets and
  everything defined from them, and nothing else.

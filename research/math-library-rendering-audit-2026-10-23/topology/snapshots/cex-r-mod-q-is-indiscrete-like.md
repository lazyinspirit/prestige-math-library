---
id: cex-r-mod-q-is-indiscrete-like
kind: counterexample
title: "$\\mathbb{R}/\\mathbb{Q}$ carries the indiscrete topology, although $\\mathbb{R}$ is metrizable and the quotient has more than one point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-quotient-topology, def-standard-topologies, def-dense-top, lem-rat-embeds-dense,
       def-metrizable-space, lem-real-line-is-a-metric-space, def-interval,
       cor-irrationals-uncountable, def-rationals, def-hausdorff-space,
       def-topological-space]
justified_by: []
aliases: []
landmark: false
short: "$\\mathbb{R}/\\mathbb{Q}$ is indiscrete"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Quotient space (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Quotient_space_(topology)"
    - title: "Trivial topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Trivial_topology"
    - title: "Topology, Spring 2005, Homework 1 [Flagg/Blecher]"
      url: "https://www.math.uh.edu/~dblecher/6343H1S2.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted:** that a quotient of a metrizable space must be Hausdorff. Here the
quotient of $\mathbb{R}$ collapses to the indiscrete topology and, because it
has more than one point, is not Hausdorff ([[def-hausdorff-space]]).

**Witness.** Give $\mathbb{R}$ its usual topology
([[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]), identify
$\mathbb{Q}$ with its canonical copy in $\mathbb{R}$ ([[def-rationals]]), and set

$$x \sim y \quad :\Longleftrightarrow \quad x - y \in \mathbb{Q},$$

an equivalence relation. Let $R := \mathbb{R}/\mathbb{Q}$ carry the quotient
topology with canonical projection $q$ ([[def-quotient-topology]]). Then the only
open subsets of $R$ are $\varnothing$ and $R$: the topology of $R$ is the
indiscrete one ([[def-standard-topologies]]). Moreover $R$ has more than one
point, since $\mathbb{R}$ has an irrational number
([[cor-irrationals-uncountable]]), so this is not the degenerate one-point case.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with its usual topology; the relation $\sim$; the quotient $R = \mathbb{R}/\mathbb{Q}$ with projection $q$; and a nonempty open $V \subseteq R$.

[A1] $q$ is a surjection, $V \subseteq R$ is open exactly when $q^{-1}[V]$ is open in $\mathbb{R}$, and $q^{-1}[V]$ is saturated: $x \in q^{-1}[V]$ and $y - x \in \mathbb{Q}$ imply $y \in q^{-1}[V]$ ([[def-quotient-topology]]).

[A2] The indiscrete topology on a set is $\{\varnothing, R\}$ ([[def-standard-topologies]], [[def-topological-space]]).

[L1] A nonempty open subset of $\mathbb{R}$ contains a bounded open interval $(a,b)$ with $a < b$ around each of its points ([[lem-real-line-is-a-metric-space]], [[def-interval]], [[def-metrizable-space]]).

[L2] Strictly between any two reals lies a rational ([[lem-rat-embeds-dense]]); equivalently $\mathbb{Q}$ is dense in $\mathbb{R}$ and meets every nonempty open subset ([[def-dense-top]]).

[L3] The set of irrationals is uncountable, hence nonempty ([[cor-irrationals-uncountable]], [[def-rationals]]).

## Counterexample

**Proof technique:** direct.

1.1 Let $V \subseteq R$ be open and nonempty, and put $G := q^{-1}[V]$, which is open in $\mathbb{R}$ by [A1] and nonempty, $q$ being surjective. [A1]

2.1 By [L1] there are $a < b$ with $(a,b) \subseteq G$. [step 1.1, L1]

3.1 Let $y \in \mathbb{R}$ be arbitrary. By [L2] there is a rational $t$ with $a - y < t < b - y$, so $y + t \in (a,b)$. [step 2.1, L2]

4.1 By step 2.1 and step 3.1 the point $y + t$ lies in $G$, and $(y+t) - y = t \in \mathbb{Q}$, so $y \in G$ by the saturation clause of [A1]. As $y$ was arbitrary, $G = \mathbb{R}$ and hence $V = q[G] = R$, $q$ being surjective. [step 2.1, step 3.1, A1]

5.1 So the only open subsets of $R$ are $\varnothing$ and $R$, which is the indiscrete topology by [A2]. [step 4.1, A2]

6.1 By [L3] there is an irrational $\alpha$, and $\alpha - 0 = \alpha \notin \mathbb{Q}$, so $q(\alpha) \ne q(0)$ and $R$ has at least two points; with step 5.1 the quotient of the metrizable space $\mathbb{R}$ is a space with more than one point carrying the indiscrete topology, which is not Hausdorff, no two distinct points having disjoint open neighbourhoods. [step 5.1, A2, L3] ∎

## Remarks

- **What has been destroyed and what has not.** The quotient still has more than one point, as step 6.1 proves. What is destroyed is every proper nonempty open set: a saturated open set is a union of cosets, each of which is dense, so a saturated open set that is nonempty is everything.

- **This is the extreme case of the failure recorded on the general page.** The line with two origins ([[cex-line-with-two-origins]]) loses the Hausdorff condition at exactly two points; here the quotient topology retains nothing at all. Both quotient maps are open, so openness of the quotient map is no protection whatever.

- **The quotient map is open here too.** For open $U \subseteq \mathbb{R}$ the saturation is $\bigcup_{t \in \mathbb{Q}} (U + t)$, a union of translates and hence open, exactly as in [[ex-circle-as-r-mod-z]]; step 4.1 shows that this union is $\mathbb{R}$ whenever $U$ is nonempty, which is the whole phenomenon in one line.

---
id: cex-non-metrizable-topology
kind: counterexample
title: "The indiscrete topology on a two-point set is induced by no metric"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [fs-every-topology-is-metrizable, def-metrizable-space, def-standard-topologies,
       thm-metric-hausdorff-separation, def-metric-space, def-metric-ball, def-metric-topology,
       def-topological-space, def-sequence-convergence-top, lem-metric-limits-unique,
       lem-sequential-closure-inside-closure]
justified_by: []
aliases: []
landmark: false
short: "a non-metrizable topology"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-03
    scope: published-audit-targeted
    context_sha256: 9813f0170f06c5a30088618b38f20fb44da4fc33099aaa0a9bf8b94fbb7719c7
    item_sha256: 5e3dc5ea28e1bfbe330f7b953383dab3a7b50a6d6726a1d3ae696aaad3f00570
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Metrizable space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metrizable_space"
    - title: "Trivial topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Trivial_topology"
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
pipeline_run: null
---

## Statement refuted

**Refuted:** that every topology is induced by some metric
([[fs-every-topology-is-metrizable]]).

**Witness.** Let $X = \{a,b\}$ with $a \ne b$, carrying the indiscrete topology
$\mathcal{T}_{\mathrm{ind}} = \{\varnothing, X\}$ ([[def-standard-topologies]]).
No metric $d$ on $X$ satisfies $\mathcal{T}_d = \mathcal{T}_{\mathrm{ind}}$
([[def-metrizable-space]], [[def-metric-topology]]), so $(X,\mathcal{T}_{\mathrm{ind}})$
is not metrizable.

## Facts & Assumptions

**Given:** The set $X = \{a,b\}$ with $a \ne b$ and the topology $\mathcal{T}_{\mathrm{ind}} = \{\varnothing, X\}$; and a hypothetical metric $d$ on $X$ with $\mathcal{T}_d = \mathcal{T}_{\mathrm{ind}}$.

[A1] The indiscrete topology on $X$ has exactly the two open sets $\varnothing$ and $X$ ([[def-standard-topologies]], [[def-topological-space]]).

[A2] A space is metrizable when some metric on it has the given topology as its metric topology ([[def-metrizable-space]], [[def-metric-topology]], [[def-metric-space]]).

[L1] In any metric space, distinct points $p \ne q$ satisfy $B(p,r) \cap B(q,r) = \varnothing$ for $r := d(p,q)/2 > 0$, and these two balls are open and contain $p$ and $q$ respectively ([[thm-metric-hausdorff-separation]], [[def-metric-ball]]).

## Counterexample

**Proof technique:** direct.

1.1 Suppose $d$ is a metric on $X$ with $\mathcal{T}_d = \mathcal{T}_{\mathrm{ind}}$. [assume-hyp]

1.2 Since $a \ne b$, [L1] gives $r := d(a,b)/2 > 0$ and two disjoint sets $U := B(a,r)$ and $V := B(b,r)$, open in $(X,d)$, with $a \in U$ and $b \in V$. [given, L1]

2.1 By the supposition of step 1.1 the sets $U$ and $V$ are open in $\mathcal{T}_{\mathrm{ind}}$, so each is $\varnothing$ or $X$ by [A1]; and $a \in U$, $b \in V$ make both nonempty, so $U = V = X$. [step 1.1, step 1.2, A1]

3.1 Then $U \cap V = X$, which contains $a$ and is therefore nonempty, contradicting the disjointness of step 1.2. So no such metric exists, and $(X, \mathcal{T}_{\mathrm{ind}})$ is not metrizable, which refutes the claim. [step 1.2, step 2.1, A2] ∎

## Remarks

- **A second route, through limits.** In the indiscrete topology every sequence converges to every point ([[lem-sequential-closure-inside-closure]], claim 3, [[def-sequence-convergence-top]]), whereas in a metric space a sequence has at most one limit ([[lem-metric-limits-unique]]). The constant sequence at $a$ therefore has two limits here and could have only one under any metric. This is the same obstruction, since uniqueness of metric limits is proved from the separation of [L1].

- **Two points are the minimum.** On a one-point set the indiscrete topology *is* metrizable, by the unique metric $d(x,x) = 0$; the failure needs two distinct points, and it needs them only to have distinct distance.

- **The obstruction used here is separation, not size.** An uncountable metrizable space exists ($\mathbb{R}$), and a finite non-metrizable space exists (this one), so cardinality is irrelevant. Assuming the Axiom of Countable Choice, the other obstruction developed on these pages — failure of first countability — also rules out the cocountable topology on $\mathbb{R}$ ([[ex-cocountable-topology-on-r]], [[def-first-countable-top]]).

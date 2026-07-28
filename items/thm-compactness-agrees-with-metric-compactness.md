---
id: thm-compactness-agrees-with-metric-compactness
kind: theorem
title: "For a metric space with its metric topology, compactness in the topological sense is compactness in the metric sense, and the two notions of compact subset coincide"
status: published
origin: session
deps: [def-compact-space, def-metric-compactness, def-metric-topology, def-metrizable-space, def-metric-space, def-subspace-topology-top, def-isometry-and-metric-embedding, def-topological-space, cor-metrizability-and-first-countability-are-hereditary]
justified_by: []
aliases: [thm-metric-and-topological-compactness-agree]
landmark: true
short: "the two compactness notions agree"
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
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Metrizable space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metrizable_space"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---
## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $\mathcal{T}_d$ be
its metric topology ([[def-metric-topology]]), so that $(X, \mathcal{T}_d)$ is a
topological space ([[def-topological-space]]) and is metrizable
([[def-metrizable-space]]). Then:

1. $(X,d)$ is a compact metric space ([[def-metric-compactness]]) **if and only
   if** $(X, \mathcal{T}_d)$ is a compact topological space
   ([[def-compact-space]]).
2. For every $A \subseteq X$: $A$ is a compact subset of the metric space
   $(X,d)$ if and only if $A$ is a compact subset of the topological space
   $(X, \mathcal{T}_d)$, the two readings of "compact subset" being the metric
   subspace $(A, d_A)$ ([[def-isometry-and-metric-embedding]]) and the topological
   subspace $(A, (\mathcal{T}_d)_A)$ ([[def-subspace-topology-top]]).

**Nothing here is a coincidence and nothing is transported.** The open-cover
condition of [[def-metric-compactness]] quantifies over families of subsets open
in $(X,d)$, and by [[def-metric-topology]] those are exactly the members of
$\mathcal{T}_d$; so the two conditions are not merely equivalent, they are the
same condition written twice. No choice principle is used.

## Facts & Assumptions

**Given:** A metric space $(X,d)$, its metric topology $\mathcal{T}_d$, and a subset $A \subseteq X$.

[L1] A subset $U \subseteq X$ is open in $(X,d)$ exactly when $U \in \mathcal{T}_d$, and $\mathcal{T}_d$ satisfies (T1), (T2) and (T3), so $(X, \mathcal{T}_d)$ is a topological space and is metrizable ([[def-metric-topology]], [[def-topological-space]], [[def-metrizable-space]]).

[L2] $(X,d)$ is a compact metric space exactly when every family of subsets open in $(X,d)$ whose union is $X$ has a finite subfamily whose union is $X$; and $A$ is a compact subset of $(X,d)$ exactly when the metric subspace $(A, d_A)$ is a compact metric space ([[def-metric-compactness]], [[def-isometry-and-metric-embedding]]).

[L3] $(X, \mathcal{T}_d)$ is a compact topological space exactly when every family of members of $\mathcal{T}_d$ whose union is $X$ has a finite subfamily whose union is $X$; and $A$ is a compact subset of $(X, \mathcal{T}_d)$ exactly when the subspace $(A, (\mathcal{T}_d)_A)$ is a compact topological space ([[def-compact-space]], [[def-subspace-topology-top]]).

[L4] The subspace topology $(\mathcal{T}_d)_A$ is the metric topology of the subspace metric $d_A$ ([[cor-metrizability-and-first-countability-are-hereditary]], [[def-metrizable-space]], [[def-isometry-and-metric-embedding]]).

## Proof

**Proof technique:** direct.

1.1 The subsets of $X$ open in the metric space $(X,d)$ and the subsets of $X$ open in the topological space $(X, \mathcal{T}_d)$ are one and the same family, namely $\mathcal{T}_d$. [L1]

1.2 The subspace topology $(\mathcal{T}_d)_A$ and the metric topology of $d_A$ are one and the same topology on $A$, so the topological subspace of $(X, \mathcal{T}_d)$ carried by $A$ and the metric subspace $(A, d_A)$ with its own metric topology are one topological space. [L4]

2.1 Hence a family of subsets of $X$ is an open cover of the metric space $(X,d)$ exactly when it is an open cover of the topological space $(X, \mathcal{T}_d)$, and a subfamily of one is a subfamily of the other; so "every open cover has a finite subcover" is one condition and not two, and $(X,d)$ is a compact metric space exactly when $(X, \mathcal{T}_d)$ is a compact topological space, which is claim 1. [L2, L3, step 1.1]

3.1 Step 2.1 was proved for an arbitrary metric space, so it applies to $(A, d_A)$: the metric space $(A, d_A)$ is compact exactly when $A$ carrying the metric topology of $d_A$ is a compact topological space. [step 2.1]

4.1 Combining, $A$ is a compact subset of $(X,d)$ exactly when $(A,d_A)$ is a compact metric space, exactly when $A$ with the metric topology of $d_A$ is a compact topological space, exactly when $(A, (\mathcal{T}_d)_A)$ is a compact topological space, exactly when $A$ is a compact subset of $(X, \mathcal{T}_d)$; this is claim 2. [L2, L3, step 1.2, step 3.1] ∎

## Remarks

**What this theorem buys, and why it is stated so early on the page.** Every theorem proved on `compactness-in-metric-spaces` about compact metric spaces and their compact subsets is, by this theorem, a theorem about metrizable topological spaces and their compact subsets, once a metric inducing the topology has been named. Heine-Borel in $\mathbb{R}^n$ ([[thm-heine-borel-rn]]), the extreme value theorem ([[thm-extreme-value-metric]]) and the equivalence of the four compactness conditions for metric spaces ([[thm-metric-compactness-equivalences]]) are all available in that form and are used below without being reproved.

**It also forbids a second notion.** Since the metric development already fixed the intrinsic reading of "compact subset" ([[def-metric-compactness]]) and this page fixes the same reading ([[def-compact-space]]), claim 2 says that the phrase means one thing throughout the library, whichever of the two developments a reader arrives from. Had either page taken the ambient reading as its definition the phrase would have meant two things, and the agreement would have had to be proved through [[lem-compactness-is-intrinsic]] and [[lem-compactness-of-a-subspace-is-ambient]] rather than directly.
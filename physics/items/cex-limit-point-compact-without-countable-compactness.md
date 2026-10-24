---
id: cex-limit-point-compact-without-countable-compactness
kind: counterexample
title: "$\\mathbb{N} \\times \\{a,b\\}$ with the indiscrete topology on the second factor is limit point compact and not countably compact, so the hypothesis that singletons are closed is not decoration"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-compactness-variants, def-compact-space, def-standard-topologies, def-product-topology, def-topological-space, def-interior-closure-boundary-top, def-neighbourhood-top, thm-compactness-variants-hierarchy, def-countable, def-natural-numbers]
justified_by: []
aliases: []
landmark: true
short: "limit point compact, not countably compact"
proof_strategy: direct
verification:
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
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Limit point compact (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point_compact"
    - title: "Countably compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countably_compact_space"
pipeline_run: null
---

## Statement refuted

**Refuted:** that a limit point compact space is countably compact
([[def-compactness-variants]]). The true statement carries a hypothesis: limit
point compactness gives countable compactness when every singleton of the space
is closed, and assuming countable choice
([[thm-compactness-variants-hierarchy]], claim 4). The witness below satisfies
every other part of that theorem's hypotheses and fails the singleton one, and it
is not countably compact.

**Witness.** Let $\mathbb{N}$ carry the discrete topology and let $D = \{a,b\}$
with $a \ne b$ carry the indiscrete topology ([[def-standard-topologies]]), and
give

$$X \;:=\; \mathbb{N} \times D$$

the product topology ([[def-product-topology]]). Then every nonempty subset of
$X$ has a limit point in $X$, so $X$ is limit point compact; the family
$\{\, \{n\} \times D : n \in \mathbb{N} \,\}$ is an at most countable open cover
with no finite subcover, so $X$ is not countably compact; and no singleton of $X$
is closed.

## Facts & Assumptions

**Given:** $\mathbb{N}$ with the discrete topology, $D = \{a,b\}$ with the indiscrete topology, and $X = \mathbb{N} \times D$ with the product topology.

[L1] The basic open sets of a binary product are the sets $U \times V$ with $U$ open in the first factor and $V$ open in the second; every open set is a union of them ([[def-product-topology]], [[def-topological-space]]).

[L2] Every subset of $\mathbb{N}$ is open, and the open subsets of $D$ are $\varnothing$ and $D$ ([[def-standard-topologies]]).

[L3] $p$ is a limit point of $A$ when every neighbourhood $N$ of $p$ satisfies $N \cap (A \setminus \{p\}) \ne \varnothing$; an open set containing $p$ is a neighbourhood of $p$, and every neighbourhood of $p$ contains an open set containing $p$ ([[def-interior-closure-boundary-top]], [[def-neighbourhood-top]]).

[L4] A space is limit point compact when every infinite subset has a limit point in it, and countably compact when every at most countable open cover has a finite subcover; *infinite* means not finite ([[def-compactness-variants]], [[def-countable]], [[def-compact-space]], [[def-natural-numbers]]).

## Counterexample

**Proof technique:** direct.

1.1 The nonempty open subsets of $X$ are exactly the sets $U \times D$ with $U \subseteq \mathbb{N}$ nonempty: by [L1] and [L2] every basic open set is $U \times \varnothing = \varnothing$ or $U \times D$, and a union of sets of the second form is again of that form. [L1, L2]

2.1 Every nonempty $A \subseteq X$ has a limit point in $X$. Take $(n,c) \in A$ and let $p := (n,c')$ be the point with the same first coordinate and $c' \ne c$, which exists since $D$ has two elements. Every neighbourhood of $p$ contains an open set containing $p$, hence by step 1.1 a set $U \times D$ with $n \in U$, and that set contains $(n,c)$, which lies in $A$ and differs from $p$. So $p$ is a limit point of $A$, and in particular every infinite subset of $X$ has one: $X$ is limit point compact. [L3, L4, step 1.1]

2.2 The family $\{\, \{n\} \times D : n \in \mathbb{N} \,\}$ consists of open sets by step 1.1, is at most countable, and covers $X$; a finite subfamily is $\{n_0\} \times D, \dots, \{n_k\} \times D$ and its union misses $(m, a)$ for any $m$ different from all the $n_j$, which exists because $\mathbb{N}$ is not finite. So $X$ is not countably compact. [L4, step 1.1]

3.1 No singleton of $X$ is closed: the complement of $\{(n,c)\}$ contains $(n,c')$, and by step 1.1 every open set containing $(n,c')$ contains $\{n\} \times D$ and hence $(n,c)$, so that complement is not open. This is the hypothesis of claim 4 of [[thm-compactness-variants-hierarchy]], and steps 2.1 and 2.2 show that dropping it makes the implication fail. [L4, step 1.1, step 2.1, step 2.2] ∎

## Remarks

**What the witness does and does not separate.** It separates limit point compactness from countable compactness, and it does so for a reason that is entirely about separation of points: each point has a partner that no open set can distinguish it from, so every point of the space is a limit point of every set containing its partner. Limit point compactness is then satisfied for free.

**The space is a product of two very simple spaces**, and each factor contributes one half of the behaviour: the discrete factor supplies the countable open cover with no finite subcover, and the indiscrete factor supplies the partners that make every nonempty set have a limit point.

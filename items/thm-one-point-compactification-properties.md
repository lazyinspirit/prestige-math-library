---
id: thm-one-point-compactification-properties
kind: theorem
title: "$X^{*}$ is compact and contains $X$ as an open subspace; $X$ is dense in $X^{*}$ exactly when $X$ is not compact; and $X^{*}$ is Hausdorff exactly when $X$ is locally compact and Hausdorff"
status: published
origin: session
deps: [def-one-point-compactification, def-compact-space, def-locally-compact-space, def-hausdorff-space, thm-compact-subset-of-a-hausdorff-space-is-closed, thm-locally-compact-hausdorff-basics, def-subspace-topology-top, def-dense-top, def-interior-closure-boundary-top, thm-closure-characterisation-top, lem-compactness-of-a-subspace-is-ambient, def-topological-space, def-neighbourhood-top]
justified_by: []
aliases: [thm-alexandroff-compactification-properties]
landmark: true
short: "properties of $X^{*}$"
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
    - title: "Alexandroff extension (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Alexandroff_extension"
    - title: "J. Munkres, Topology, 2nd ed., §29"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$(X^{*}, \mathcal{T}^{*})$ be its one-point compactification, with added point
$\infty$ ([[def-one-point-compactification]]). Then:

1. **$X^{*}$ is compact** ([[def-compact-space]]).
2. **$X$ is an open subspace of $X^{*}$**: $X \in \mathcal{T}^{*}$, and the
   subspace topology that $X$ inherits from $X^{*}$
   ([[def-subspace-topology-top]]) is $\mathcal{T}$ itself.
3. **$X$ is dense in $X^{*}$** ([[def-dense-top]]) **if and only if $X$ is not
   compact.**
4. **$X^{*}$ is Hausdorff** ([[def-hausdorff-space]]) **if and only if $X$ is
   locally compact** ([[def-locally-compact-space]]) **and Hausdorff.**

In particular, a locally compact Hausdorff space is an open subspace of a compact
Hausdorff space, which is the reason the construction is made. **No choice
principle is used**: the only cover thinned below is thinned by the indexed form
of [[lem-compactness-of-a-subspace-is-ambient]], which returns its own indices.

## Facts & Assumptions

**Given:** A topological space $(X, \mathcal{T})$, its one-point compactification $X^{*} = X \cup \{\infty\}$ with $\infty \notin X$, and the topology $\mathcal{T}^{*}$.

[L1] $\mathcal{T}^{*}$ consists of the members of $\mathcal{T}$ together with the sets $X^{*} \setminus C$ for $C \subseteq X$ closed in $X$ and a compact subset of $X$; an open subset of $X^{*}$ containing $\infty$ is exactly one of the latter, and $C$ is recovered from it by complementation ([[def-one-point-compactification]]).

[L2] A space is compact when every open cover has a finite subcover; a subset $A$ is a compact subset when the subspace it carries is compact ([[def-compact-space]], [[def-subspace-topology-top]]).

[L3] $A$ is a compact subset of a space $Z$ exactly when for every set $I$ and every family $(W_i)_{i \in I}$ of open subsets of $Z$ with $A \subseteq \bigcup_{i \in I} W_i$ there are $n \in \mathbb{N}$ and $i_0, \dots, i_n \in I$ with $A \subseteq W_{i_0} \cup \dots \cup W_{i_n}$, or else $A = \varnothing$ ([[lem-compactness-of-a-subspace-is-ambient]], claim 2).

[L4] The open sets of a subspace are the traces of the open sets of the ambient space ([[def-subspace-topology-top]]); an open set is a neighbourhood of each of its points ([[def-neighbourhood-top]]).

[L5] $A$ is dense in $Z$ when $\overline{A} = Z$, and $z \in \overline{A}$ exactly when every open set containing $z$ meets $A$ ([[def-dense-top]], [[def-interior-closure-boundary-top]], [[thm-closure-characterisation-top]], claim 1).

[L6] A space is Hausdorff when distinct points have disjoint open neighbourhoods ([[def-hausdorff-space]]); in a Hausdorff space a compact subset is closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], claim 3).

[L7] In a locally compact Hausdorff space every neighbourhood of a point contains a compact neighbourhood of it ([[thm-locally-compact-hausdorff-basics]], claim 1); $X$ is locally compact when every point of $X$ has a compact neighbourhood ([[def-locally-compact-space]]).

## Proof

**Proof technique:** direct.

1.1 Claim 2: $X \in \mathcal{T}$, so $X \in \mathcal{T}^{*}$ by [L1] and $X$ is open in $X^{*}$; and the traces on $X$ of the members of $\mathcal{T}^{*}$ are the sets $U \cap X = U$ for $U \in \mathcal{T}$ and the sets $(X^{*} \setminus C) \cap X = X \setminus C$ for $C$ closed in $X$, all of which lie in $\mathcal{T}$, while every $U \in \mathcal{T}$ is its own trace. So the subspace topology is $\mathcal{T}$. [L1, L4]

1.2 Claim 1: let $\mathcal{U} \subseteq \mathcal{T}^{*}$ have union $X^{*}$; some $O \in \mathcal{U}$ contains $\infty$, so $O = X^{*} \setminus C$ with $C$ closed in $X$ and a compact subset of $X$, by [L1]. [L1, L2]

1.3 For claim 3, the open subsets of $X^{*}$ containing $\infty$ are exactly the sets $X^{*} \setminus C$ with $C \subseteq X$ closed and compact, and $(X^{*} \setminus C) \cap X = X \setminus C$; so by [L5] the point $\infty$ lies in the closure of $X$ exactly when $X \setminus C \ne \varnothing$ for every such $C$. [L1, L5]

1.4 For the backward half of claim 4 assume $X$ is locally compact and Hausdorff, and let $u \ne v$ in $X^{*}$. If both lie in $X$, disjoint open subsets of $X$ separating them are open in $X^{*}$ by [L1]. If $v = \infty$ and $u = x \in X$, then [L7] applied to the neighbourhood $X$ of $x$ gives a compact neighbourhood $C$ of $x$, closed by [L6], and an open $U$ of $X$ with $x \in U \subseteq C$; then $U$ and $X^{*} \setminus C$ are disjoint members of $\mathcal{T}^{*}$ containing $x$ and $\infty$. [L1, L6, L7]

2.1 For the forward half of claim 4 assume $X^{*}$ is Hausdorff. Distinct points of $X$ are separated in $X^{*}$ by disjoint open $P, Q$, and $P \cap X$, $Q \cap X$ are disjoint sets open in $X$ by claim 2, so $X$ is Hausdorff. [L4, L6, step 1.1]

2.2 The traces $W \cap X$ for $W \in \mathcal{U}$ are open in $X$ by step 1.1, and they cover $C$, since $C \subseteq X$ and $\bigcup \mathcal{U} = X^{*}$; so [L3], applied with index set $\mathcal{U}$ and the family $W \mapsto W \cap X$, gives $n \in \mathbb{N}$ and $W_0, \dots, W_n \in \mathcal{U}$ with $C \subseteq (W_0 \cap X) \cup \dots \cup (W_n \cap X)$, or else $C = \varnothing$. [L3, step 1.1, step 1.2]

2.3 A closed compact $C \subseteq X$ equals $X$ exactly when $X$ is compact, since $X$ is closed in $X$ and, by [L2], $X$ is a compact subset of itself exactly when it is a compact space. So the condition of step 1.3 fails for some $C$ exactly when $X$ is compact. [L2, step 1.3]

3.1 For $x \in X$ the Hausdorff property of $X^{*}$ gives disjoint open $U \ni x$ and $O \ni \infty$; by [L1] $O = X^{*} \setminus C$ with $C$ closed in $X$ and compact, and $U \cap O = \varnothing$ forces $U \subseteq X^{*} \setminus O = C$. As $U$ is open in $X$ by step 1.1 and contains $x$, the compact set $C$ is a neighbourhood of $x$ in $X$ by [L4], so $X$ is locally compact. [L1, L4, L7, step 1.1, step 2.1]

3.2 Claim 1 follows: $X^{*} = O \cup W_0 \cup \dots \cup W_n$, since a point of $X^{*}$ is either $\infty$ or a point of $X$, a point of $X$ outside $C$ lies in $O = X^{*} \setminus C$, and a point of $C$ lies in some $W_j$ by step 2.2; in the alternative $C = \varnothing$ already $X^{*} = O$. So every open cover of $X^{*}$ has a finite subcover. [L2, step 1.2, step 2.2]

3.3 Claim 3 follows: $\overline{X} = X^{*}$ holds exactly when $\infty \in \overline{X}$, since $X \subseteq \overline{X}$ and $X^{*} = X \cup \{\infty\}$; by steps 1.3 and 2.3 that holds exactly when $X$ is not compact. [L5, step 1.3, step 2.3]

4.1 Claims 1, 2, 3 and 4 are established: claim 1 at step 3.2, claim 2 at step 1.1, claim 3 at step 3.3, and claim 4 by steps 1.4 for one direction and 2.1 and 3.1 for the other. [step 1.1, step 1.4, step 3.1, step 3.2, step 3.3] ∎

## Remarks

**Claim 3 is the reason the added point is called a point at infinity.** When $X$ is compact the set $\{\infty\}$ is itself open, so $X^{*}$ is the disjoint sum of $X$ and an isolated point and nothing has been compactified; the construction is of interest exactly when $X$ is not compact, and then every neighbourhood of $\infty$ contains all of $X$ outside a compact set.

**Claim 4 is where local compactness is forced.** Separating a point $x$ from $\infty$ means finding an open $U \ni x$ and a closed compact $C$ with $U \cap (X^{*} \setminus C) = \varnothing$, that is $U \subseteq C$; and that is precisely a compact neighbourhood of $x$. So the Hausdorff property of $X^{*}$ and local compactness of $X$ are the same requirement read on the two sides of the construction.

**$X$ open in $X^{*}$ is claim 2 and is not automatic for a compactification in general.** What claim 2 asserts is that no open set of $X$ is lost and none is gained: the topology $X$ inherits back from $X^{*}$ is the one it started with, so every statement about $X$ may be read inside $X^{*}$ without translation.

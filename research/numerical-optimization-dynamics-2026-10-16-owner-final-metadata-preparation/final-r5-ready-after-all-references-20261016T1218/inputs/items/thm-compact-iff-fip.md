---
id: thm-compact-iff-fip
kind: theorem
title: "A space is compact exactly when every family of closed subsets with the finite intersection property has nonempty intersection"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-compact-space, def-topological-space, def-finite-intersection-property, def-filter, lem-fip-generates-filter]
justified_by: []
aliases: [thm-compactness-fip-characterisation]
landmark: true
short: "compact iff the FIP condition"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "claude-sonnet-5 + deepseek-v4-pro"
    verdict: pass
    date: 2026-08-05
    scope: published-audit-targeted
    context_sha256: 57fe31f2e7f11f5d665c37210d393d77626e81f5a27ef8abaeaaae585660b180
    item_sha256: 4201165cbda0f675c940e878e76b3a90247f9408ade85442b8c945e75a305911
  verified:
    model: claude-sonnet-5
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Finite intersection property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_intersection_property"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Stacks Project, Tag 0059"
      url: "https://stacks.math.columbia.edu/tag/0059"
pipeline_run: null
---
## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]). For a
family $\mathcal{A}$ of subsets of $X$ write

$$\bigcap \mathcal{A} \;:=\; \{\, x \in X : x \in A \text{ for every } A \in \mathcal{A} \,\},$$

so that $\bigcap \varnothing = X$, matching the convention for the empty finite
intersection in [[def-finite-intersection-property]]. Then:

1. $(X, \mathcal{T})$ is compact ([[def-compact-space]]) **if and only if** every
   family $\mathcal{A}$ of closed subsets of $X$ with the finite intersection
   property ([[def-finite-intersection-property]]) satisfies
   $\bigcap \mathcal{A} \ne \varnothing$.
2. Equivalently: $(X, \mathcal{T})$ is compact if and only if every family of
   closed subsets of $X$ that is contained in some filter on $X$
   ([[def-filter]]) has nonempty intersection, a family of subsets of $X$ lying
   in a filter exactly when it has the finite intersection property
   ([[lem-fip-generates-filter]]).

No choice principle is used in either direction: complementation is a canonical
bijection, so no member of a family ever has to be selected.

## Facts & Assumptions

**Given:** A topological space $(X, \mathcal{T})$.

[A1] For a family $\mathcal{A}$ of subsets of $X$ write $\mathcal{A}^{c} := \{\, X \setminus A : A \in \mathcal{A} \,\}$.

[L1] A subset $F \subseteq X$ is closed exactly when $X \setminus F \in \mathcal{T}$, and $X \setminus (X \setminus F) = F$ for every $F \subseteq X$ ([[def-topological-space]]).

[L2] $(X, \mathcal{T})$ is compact exactly when every family $\mathcal{U} \subseteq \mathcal{T}$ with $\bigcup \mathcal{U} = X$ has a finite subfamily with union $X$, a family being finite when it is empty or listable as $\{V_0, \dots, V_n\}$ for some $n \in \mathbb{N}$ ([[def-compact-space]]).

[L3] $\mathcal{A}$ has the finite intersection property when $\bigcap_{i \in n} s(i) \ne \varnothing$ for every $n \in \mathbb{N}$ and every finite list $s : n \to \mathcal{A}$, the intersection over $n = 0$ being $X$ ([[def-finite-intersection-property]]).

[L4] A family of subsets of $X$ is contained in some filter on $X$ if and only if it has the finite intersection property ([[lem-fip-generates-filter]], [[def-filter]]).

## Proof

**Proof technique:** direct.

1.1 The operation $\mathcal{A} \mapsto \mathcal{A}^{c}$ of [A1] carries families of closed subsets of $X$ to families of open subsets of $X$ and back, and satisfies $(\mathcal{A}^{c})^{c} = \mathcal{A}$, so it is a bijection between the two collections. [A1, L1]

1.2 For every family $\mathcal{A}$ of subsets of $X$ one has $X \setminus \bigcap \mathcal{A} = \bigcup \mathcal{A}^{c}$, since a point of $X$ fails to lie in every member of $\mathcal{A}$ exactly when it lies in the complement of some member; with $\bigcap \varnothing = X$ and $\bigcup \varnothing = \varnothing$ the identity also holds at $\mathcal{A} = \varnothing$. Hence $\bigcap \mathcal{A} = \varnothing$ if and only if $\bigcup \mathcal{A}^{c} = X$. [A1, L1, L3]

2.1 The same identity applied to finitely many members: for $n \in \mathbb{N}$ and a finite list $s : n \to \mathcal{A}$ one has $\bigcap_{i \in n} s(i) = \varnothing$ exactly when $\{\, X \setminus s(i) : i \in n \,\}$, a finite subfamily of $\mathcal{A}^{c}$, has union $X$; and every finite subfamily of $\mathcal{A}^{c}$ arises from such a list. So $\mathcal{A}$ has the finite intersection property if and only if no finite subfamily of $\mathcal{A}^{c}$ has union $X$. [L2, L3, step 1.1, step 1.2]

3.1 Assume $(X, \mathcal{T})$ is compact and let $\mathcal{A}$ be a family of closed subsets of $X$ with $\bigcap \mathcal{A} = \varnothing$; then $\mathcal{A}^{c}$ is a family of open sets by step 1.1 and has union $X$ by step 1.2, so it is an open cover, compactness supplies a finite subfamily of it with union $X$, and by step 2.1 the family $\mathcal{A}$ fails the finite intersection property. Contraposing over $\mathcal{A}$: every family of closed subsets of $X$ with the finite intersection property has nonempty intersection. [L2, step 1.1, step 1.2, step 2.1]

3.2 Conversely assume every family of closed subsets of $X$ with the finite intersection property has nonempty intersection, and let $\mathcal{U}$ be an open cover of $X$; then $\mathcal{A} := \mathcal{U}^{c}$ is a family of closed subsets of $X$ with $\mathcal{A}^{c} = \mathcal{U}$ by step 1.1 and $\bigcap \mathcal{A} = \varnothing$ by step 1.2, so $\mathcal{A}$ fails the finite intersection property, and by step 2.1 some finite subfamily of $\mathcal{U}$ has union $X$. So every open cover of $X$ has a finite subcover and $(X, \mathcal{T})$ is compact. [L2, step 1.1, step 1.2, step 2.1]

4.1 Claim 1 is proved by steps 3.1 and 3.2, and claim 2 follows from it by [L4], which replaces the phrase "has the finite intersection property" by "is contained in some filter on $X$" without changing what is being quantified over. [L4, step 3.1, step 3.2] ∎

## Remarks

**What the condition says, and why it is the useful form.** Compactness in the open-cover form is a statement about families that already cover; the closed-set form is a statement about families that already have all their finite intersections nonempty. In practice the second is easier to apply, because a nested family of nonempty closed sets has the finite intersection property for free, and the theorem then produces a point lying in all of them at once. That is how it is used below in [[thm-baire-category-locally-compact-hausdorff]], whose step 7.1 turns a decreasing sequence of nonempty closed sets into a point common to all of them. [[thm-quasicomponents-equal-components-in-a-compact-hausdorff-space]] uses the theorem in the opposite direction: from a family of closed sets whose intersection is empty it extracts a finite subfamily whose intersection is already empty.

**The finite intersection property is not a topological notion.** [[def-finite-intersection-property]] is a condition on an arbitrary family of subsets of a set, and [[lem-fip-generates-filter]] shows it is exactly the condition for the family to sit inside a filter. The topology enters this theorem only through the word "closed"; the theorem is that compactness of the topology is what makes that combinatorial condition detect a common point.

**The metric special case is [[thm-compact-iff-finite-intersection-property]]**, stated there for a metric space and its closed sets. It is not used above, and it is not needed: by [[thm-compactness-agrees-with-metric-compactness]] the metric statement is the present one applied to a metric topology.

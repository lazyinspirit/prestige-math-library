---
id: thm-baire-category-locally-compact-hausdorff
kind: theorem
title: "Assuming dependent choice, every locally compact Hausdorff space is a Baire space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-dependent-choice-along-a-sequence-of-relations, def-baire-space, def-compact-space, thm-compact-iff-fip, thm-compact-subset-of-a-hausdorff-space-is-closed, def-locally-compact-space, thm-locally-compact-hausdorff-basics, def-hausdorff-space, def-dense-top, def-interior-closure-boundary-top, def-topological-space, def-subspace-topology-top, def-dependent-choice, def-sequence-convergence-top, def-natural-numbers]
justified_by: []
external_refs: [rem-baire-category-choice-strength]
aliases: [thm-baire-category-lch]
landmark: true
short: "Baire category for locally compact Hausdorff"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Baire category theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Baire_category_theorem"
    - title: "Locally compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_compact_space"
    - title: "J. Munkres, Topology, 2nd ed., §48"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Stacks Project, Section 5.13: Locally quasi-compact spaces"
      url: "https://stacks.math.columbia.edu/tag/08ZQ"
pipeline_run: null
---

## Statement

**Assume the Axiom of Dependent Choice** ([[def-dependent-choice]]).

Let $(X, \mathcal{T})$ be a locally compact Hausdorff space
([[def-locally-compact-space]], [[def-hausdorff-space]],
[[def-topological-space]]). Then $X$ is a Baire space ([[def-baire-space]]): for
every sequence $(U_n)_{n \in \mathbb{N}}$ of dense open subsets of $X$
([[def-dense-top]], [[def-sequence-convergence-top]]), the intersection
$\bigcap_{n \in \mathbb{N}} U_n$ is dense in $X$.

**Dependent choice is sufficient here and no claim of necessity is made.** The
several statements that go by the name "Baire category theorem" are inequivalent
over ZF, and the choice principles they correspond to differ; that account,
including the fact that the compact Hausdorff version is equivalent to a
principle strictly weaker than dependent choice, is
[[rem-baire-category-choice-strength]], which this library states and does not
prove. Nothing below asserts that dependent choice is needed for the statement
above.

## Facts & Assumptions

**Given:** A locally compact Hausdorff space $(X, \mathcal{T})$, a sequence $(U_n)_{n \in \mathbb{N}}$ of dense open subsets of $X$, and the Axiom of Dependent Choice.

[L1] $A \subseteq X$ is dense exactly when $\overline{A} = X$, exactly when $A$ meets every nonempty open subset of $X$; and $X$ is a Baire space when every sequence of dense open sets has dense intersection ([[def-dense-top]], [[def-interior-closure-boundary-top]], [[def-baire-space]]).

[L2] If $O \subseteq X$ is open and $x \in O$, there is an open $V$ with $x \in V \subseteq \overline{V} \subseteq O$ and $\overline{V}$ a compact subset of $X$ ([[thm-locally-compact-hausdorff-basics]], claim 3; [[def-locally-compact-space]]).

[L3] In a Hausdorff space every compact subset is closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], claim 3), and $A \subseteq \overline{A}$ with $\overline{A}$ closed ([[def-interior-closure-boundary-top]]).

[L4] The closed subsets of a subspace are the traces of the closed subsets of the ambient space, and a subset is a compact subset when the subspace it carries is a compact space ([[def-subspace-topology-top]], [[def-compact-space]]).

[L5] A space is compact exactly when every family of its closed subsets with the finite intersection property has nonempty intersection ([[thm-compact-iff-fip]]).

[L6] Assuming dependent choice: if $A$ is nonempty and $(R_n)_{n \in \mathbb{N}}$ are relations on $A$ such that every $u \in A$ has some $v \in A$ with $u \mathbin{R_n} v$, then for every $a_0 \in A$ there is $a : \mathbb{N} \to A$ with $a(0) = a_0$ and $a(n) \mathbin{R_n} a(n+1)$ for every $n$ ([[lem-dependent-choice-along-a-sequence-of-relations]], [[def-sequence-convergence-top]], [[def-natural-numbers]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] it suffices to show that every nonempty open $W \subseteq X$ meets $\bigcap_{n \in \mathbb{N}} U_n$; if $X$ has no nonempty open subset the requirement is vacuous and there is nothing to prove, so fix a nonempty open $W$. [L1, suffices: every nonempty open W meets the intersection]

2.1 $W \cap U_0$ is open and nonempty, $U_0$ being dense and $W$ nonempty open; fixing a point of it, [L2] gives an open $V_0$ with that point in $V_0$ and $\overline{V_0} \subseteq W \cap U_0$, with $\overline{V_0}$ a compact subset of $X$. In particular $V_0$ is nonempty. [L1, L2, step 1.1]

3.1 Let $\mathcal{A}$ be the set of nonempty open $V \subseteq X$ whose closure $\overline{V}$ is a compact subset of $X$; it contains $V_0$ by step 2.1, so it is nonempty. For $n \in \mathbb{N}$ define a relation $R_n$ on $\mathcal{A}$ by declaring $V \mathbin{R_n} V'$ to hold exactly when $\overline{V'} \subseteq V \cap U_{n+1}$. [L1, step 2.1, construct]

4.1 Each $R_n$ is entire on $\mathcal{A}$: given $V \in \mathcal{A}$, the set $V \cap U_{n+1}$ is open and nonempty, $U_{n+1}$ being dense and $V$ nonempty open, so fixing a point of it and applying [L2] gives an open $V'$ containing that point with $\overline{V'} \subseteq V \cap U_{n+1}$ and $\overline{V'}$ compact; then $V' \in \mathcal{A}$ and $V \mathbin{R_n} V'$. This is a pure existence statement and selects nothing, which is why dependent choice and nothing stronger is spent below. [L1, L2, step 3.1]

5.1 By [L6] applied to $\mathcal{A}$, the relations $R_n$ and the point $V_0$, there is a sequence $(V_n)_{n \in \mathbb{N}}$ in $\mathcal{A}$ with $V_0$ as given and $\overline{V_{n+1}} \subseteq V_n \cap U_{n+1}$ for every $n \in \mathbb{N}$. [L6, step 3.1, step 4.1]

6.1 The sets $\overline{V_n}$ are nonempty, since $V_n$ is nonempty and $V_n \subseteq \overline{V_n}$ by [L3], and they decrease: $\overline{V_{n+1}} \subseteq V_n \subseteq \overline{V_n}$ by step 5.1 and [L3]. Each is a compact subset of $X$ and hence closed in $X$ by [L3], so each is the trace of a closed set on $\overline{V_0}$ and therefore closed in the subspace $\overline{V_0}$ by [L4]. [L3, L4, step 5.1]

7.1 The family $\{\, \overline{V_n} : n \in \mathbb{N} \,\}$ of closed subsets of the compact space $\overline{V_0}$ has the finite intersection property: the intersection of the empty list is $\overline{V_0}$, which is nonempty, and the intersection of a nonempty finite list is $\overline{V_N}$ for $N$ the greatest of the indices occurring, the sets being decreasing, and that is nonempty. So [L5] gives a point $x \in \bigcap_{n \in \mathbb{N}} \overline{V_n}$. [L4, L5, step 6.1]

8.1 That point lies in $W \cap \bigcap_{n \in \mathbb{N}} U_n$: from $x \in \overline{V_0} \subseteq W \cap U_0$ it lies in $W$ and in $U_0$, and for every $n \in \mathbb{N}$ it lies in $\overline{V_{n+1}} \subseteq V_n \cap U_{n+1} \subseteq U_{n+1}$, so it lies in $U_m$ for $m = 0$ and for every $m$ of the form $n+1$, that is in every $U_m$. [step 2.1, step 5.1, step 7.1]

9.1 So every nonempty open $W$ meets $\bigcap_{n \in \mathbb{N}} U_n$, which by [L1] makes that intersection dense; as $(U_n)$ was an arbitrary sequence of dense open sets, $X$ is a Baire space. [L1, step 1.1, step 8.1] ∎

## Remarks

**Where each hypothesis is spent.** Local compactness and the Hausdorff condition enter only through [L2], the shrinking clause of [[thm-locally-compact-hausdorff-basics]], which is used twice: once to start the construction and once to continue it. Compactness of $\overline{V_0}$ is used once, at step 7.1, to turn a decreasing sequence of nonempty closed sets into a common point; that is the finite intersection characterisation [[thm-compact-iff-fip]] and nothing else.

**Why the stage-dependent form of dependent choice is needed.** The $n$-th shrinking must land inside $U_{n+1}$, so the admissible successors of $V$ change with $n$; that is a *family* of relations and not a relation, and [[def-dependent-choice]] as stated applies to a single relation on a single set. [[lem-dependent-choice-along-a-sequence-of-relations]] is exactly the bridge, and it costs nothing beyond dependent choice itself.

**Each $U_n$ is used exactly once.** The base step consumes $U_0$ and the step from $V_n$ to $V_{n+1}$ consumes $U_{n+1}$, so as $n$ ranges over $\mathbb{N}$ every index is consumed and none twice. Since $\mathbb{N}$ contains $0$, dropping the base step would leave $U_0$ untouched and the conclusion false as stated; the accounting is checked at step 8.1, where membership in $U_m$ is established separately for $m = 0$ and for $m = n+1$.

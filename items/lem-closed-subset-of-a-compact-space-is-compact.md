---
id: lem-closed-subset-of-a-compact-space-is-compact
kind: lemma
title: "A closed subset of a compact metric space is compact"
status: published
origin: session
deps: [def-metric-compactness, lem-compactness-is-intrinsic, def-metric-topology, def-isometry-and-metric-embedding, def-metric-space]
justified_by: []
aliases: []
landmark: false
short: "closed in compact is compact"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a compact metric space ([[def-metric-compactness]],
[[def-metric-space]]) and let $F \subseteq X$ be closed in $X$
([[def-metric-topology]]). Then $F$ is a compact subset of $X$: the metric
subspace $(F, d_F)$ is a compact metric space
([[def-isometry-and-metric-embedding]]).

No choice principle is used.

## Facts & Assumptions

**Given:** A compact metric space $(X,d)$ and a closed subset $F \subseteq X$.

[L1] $(X,d)$ is compact: every family of open subsets of $X$ with union $X$ has a finite subfamily with union $X$ ([[def-metric-compactness]]).

[L2] A subset $A \subseteq X$ is a compact subset exactly when for every set $I$ and every family $(U_i)_{i \in I}$ of open subsets of $X$ with $A \subseteq \bigcup_{i \in I} U_i$ there are $n \in \mathbb{N}$ and $i_0, \dots, i_n \in I$ with $A \subseteq U_{i_0} \cup \dots \cup U_{i_n}$, or else $A = \emptyset$; and $X$ is a compact subset of itself, its subspace metric being $d$ ([[lem-compactness-is-intrinsic]], [[def-isometry-and-metric-embedding]]).

[L3] $F$ is closed exactly when $X \setminus F$ is open in $X$ ([[def-metric-topology]]).

## Proof

**Proof technique:** direct.

1.1 $X \setminus F$ is open in $X$. [L3]

1.2 By the ambient characterisation it suffices to show that every family $(U_i)_{i \in I}$ of open subsets of $X$ with $F \subseteq \bigcup_{i \in I} U_i$ has finitely many members whose union contains $F$, or that $F = \emptyset$; so fix such a family. [L2, suffices: finitely many members cover F]

2.1 Take an object $\ast$ not in $I$, put $I^{+} := I \cup \{\ast\}$ and $U_{\ast} := X \setminus F$; then $(U_i)_{i \in I^{+}}$ is a family of open subsets of $X$ whose union is $X$, since a point outside $F$ lies in $U_{\ast}$ and a point of $F$ lies in some $U_i$ with $i \in I$. [L1, L2, step 1.1, step 1.2]

3.1 Applying the ambient characterisation to the compact subset $X$ of itself gives $n \in \mathbb{N}$ and $j_0, \dots, j_n \in I^{+}$ with $X = U_{j_0} \cup \dots \cup U_{j_n}$, unless $X = \emptyset$, in which case $F = \emptyset$ and there is nothing to prove. [L2, step 2.1]

4.1 Delete from the list $j_0, \dots, j_n$ every entry equal to $\ast$; what remains is a finite list of indices from $I$, possibly empty, and the union of the corresponding sets still contains $F$, because $U_{\ast} = X \setminus F$ contains no point of $F$ while every point of $F$ lies in one of the listed sets. [step 3.1]

5.1 If that remaining list is empty then $F = \emptyset$, and otherwise it exhibits finitely many members of $(U_i)_{i \in I}$ whose union contains $F$; in both cases the condition of step 1.2 is met, so $F$ is a compact subset of $X$. [L2, step 1.2, step 4.1] ∎

## Remarks

**The hypothesis that $X$ is compact cannot be dropped**, and neither can closedness. A closed subset of a non-compact space need not be compact: the whole space is closed in itself. And a non-closed subset of a compact space need not be compact, since a compact subset of any metric space is closed ([[thm-compact-subset-is-closed-and-bounded]]).

**Why the augmented family is the whole trick.** The set $F$ is covered by the $U_i$, but $X$ need not be; adjoining the single open set $X \setminus F$ repairs that at no cost, and it is the only member of the resulting finite subcover that has to be discarded again at the end.

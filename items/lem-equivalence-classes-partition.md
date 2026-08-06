---
id: lem-equivalence-classes-partition
kind: lemma
title: "The equivalence classes of an equivalence relation are nonempty, cover $A$, and are pairwise equal or disjoint; conversely every such cover arises from exactly one equivalence relation"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-equivalence-relation, def-union-of-a-set-and-binary-union,
       def-intersection-of-a-set-and-binary-intersection, def-power-set,
       def-subset-and-proper-subset, thm-the-empty-set-exists-and-is-unique]
justified_by: []
aliases: [lem-partition-theorem]
landmark: false
short: "classes = partition"
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
    - title: "Equivalence class (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_class"
    - title: "Partition of a set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Partition_of_a_set"
pipeline_run: null
---

## Statement

Let $\sim$ be an equivalence relation on a set $A$, with classes $[a]$ and
quotient set $A/{\sim}$ ([[def-equivalence-relation]]). Then:

1. $a \in [a]$ for every $a \in A$; hence every class is nonempty and the classes
   cover $A$, that is, the union of the members of $A/{\sim}$ is $A$;
2. $a \sim b$ if and only if $[a] = [b]$;
3. for all $a, b \in A$, either $[a] = [b]$ or $[a] \cap [b] = \varnothing$.

Conversely, call a set $P$ of subsets of $A$ a **partition** of $A$ when every
member of $P$ is nonempty, distinct members of $P$ are disjoint, and the union of
the members of $P$ is $A$. For such a $P$ define $a \sim_P b$ to mean that some
$B \in P$ contains both $a$ and $b$. Then $\sim_P$ is an equivalence relation on
$A$ whose quotient set is exactly $P$, and it is the **only** equivalence
relation on $A$ whose quotient set is $P$.

## Facts & Assumptions

**Given:** An equivalence relation $\sim$ on a set $A$, with $[a] = \{ b \in A : a \sim b \}$ and $A/{\sim} = \{ [a] : a \in A \}$ ([[def-equivalence-relation]]); and, for the converse, a partition $P$ of $A$ in the sense stated above.

[L1] Reflexivity: $a \sim a$ for every $a \in A$ ([[def-equivalence-relation]]).

[L2] Symmetry: $a \sim b$ implies $b \sim a$ ([[def-equivalence-relation]]).

[L3] Transitivity: $a \sim b$ and $b \sim c$ imply $a \sim c$ ([[def-equivalence-relation]]).

## Proof

**Proof technique:** direct.

1.1 For every $a \in A$ reflexivity gives $a \sim a$, that is $a \in [a]$; so each class is nonempty, each class is a subset of $A$ by construction, and each $a \in A$ lies in the class $[a]$, whence the union of the members of $A/{\sim}$ is exactly $A$. This is claim 1. [L1, given]

1.2 Suppose $a \sim b$. If $c \in [b]$ then $b \sim c$, so $a \sim c$ by transitivity, so $c \in [a]$; thus $[b] \subseteq [a]$. Symmetry gives $b \sim a$, and the same argument with $a$ and $b$ interchanged gives $[a] \subseteq [b]$; hence $[a] = [b]$. [L2, L3, given]

1.3 Every member of $P$ is nonempty, distinct members of $P$ are disjoint, and the union of $P$ is $A$; consequently each $a \in A$ lies in at least one $B \in P$, and in only one, since two members containing $a$ are not disjoint and therefore are not distinct. Write $B_a$ for that unique member. [given]

2.1 Suppose $[a] = [b]$. By step 1.1, $b \in [b] = [a]$, which says $a \sim b$. Together with step 1.2 this is claim 2. [step 1.1, step 1.2]

2.2 Suppose $[a] \cap [b] \ne \varnothing$ and pick $c$ in the intersection, so $a \sim c$ and $b \sim c$. Symmetry gives $c \sim b$, and transitivity then gives $a \sim b$, so $[a] = [b]$ by step 1.2. Hence for any $a, b$ either the classes are disjoint or they are equal, which is claim 3. [step 1.2, L2, L3, choose]

2.3 $\sim_P$ is reflexive, since $a \in B_a$ gives $a \sim_P a$; it is symmetric, since the defining condition is symmetric in $a$ and $b$; and it is transitive, for if $a, b \in B$ and $b, c \in B'$ with $B, B' \in P$, then $b \in B \cap B'$, so $B$ and $B'$ are not disjoint and hence not distinct, giving $B = B'$ and $a, c \in B$. So $\sim_P$ is an equivalence relation on $A$. [step 1.3, given]

3.1 Fix $a \in A$ and write $[a]_P$ for its class under $\sim_P$. If $b \in [a]_P$ then some $B \in P$ contains $a$ and $b$, and $B = B_a$ by the uniqueness in step 1.3, so $b \in B_a$; conversely if $b \in B_a$ then $B_a$ contains both $a$ and $b$, so $b \in [a]_P$. Hence $[a]_P = B_a$. [step 1.3, step 2.3]

4.1 Every class of $\sim_P$ is a member of $P$ by step 3.1, and every $B \in P$ is nonempty, so choosing $a \in B$ gives $B = B_a = [a]_P$, a class; therefore the quotient set of $\sim_P$ is exactly $P$. [step 1.3, step 3.1, choose]

4.2 Uniqueness. Let $\approx$ be any equivalence relation on $A$ whose quotient set is $P$, and fix $a \in A$. Its class $[a]_\approx$ lies in $P$ and contains $a$ by step 1.1 applied to $\approx$, so $[a]_\approx = B_a$ by the uniqueness in step 1.3. Then $a \approx b$ holds exactly when $b \in [a]_\approx = B_a$, which by step 3.1 holds exactly when $a \sim_P b$; so $\approx$ and $\sim_P$ relate the same pairs and are equal as subsets of $A \times A$. [step 1.1, step 1.3, step 3.1]

5.1 Claims 1, 2 and 3 are steps 1.1, 2.1 and 2.2; the converse is steps 2.3, 4.1 and 4.2. [step 1.1, step 2.1, step 2.2, step 2.3, step 4.1, step 4.2] ∎

## Remarks

- Claim 2 is the fact used constantly in practice: an equation between classes may always be replaced by a relation between representatives, and conversely. Claim 3 is what makes a quotient set behave like a set of disjoint boxes.

- The converse half is what licenses building an equivalence relation by describing its classes rather than its pairs. The uniqueness clause matters: it says that no information is lost either way, so a partition and an equivalence relation are interchangeable descriptions of the same structure.

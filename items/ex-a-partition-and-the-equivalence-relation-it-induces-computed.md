---
id: ex-a-partition-and-the-equivalence-relation-it-induces-computed
kind: example
title: "A two-cell partition of a three-element set, the equivalence relation it induces listed pair by pair, and the quotient set recovered from it"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-equivalence-relation, lem-equivalence-classes-partition, def-unordered-pair-and-singleton, thm-the-empty-set-exists-and-is-unique, def-cartesian-product, def-ordered-pair, def-relation-domain-range-and-field, def-axiom-of-extensionality, lem-unions-and-intersections-of-small-families, def-union-of-a-set-and-binary-union, thm-the-characterising-property-of-ordered-pairs]
justified_by: []
aliases: []
landmark: false
short: "a partition computed"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Equivalence relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_relation"
    - title: "Partition of a set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Partition_of_a_set"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §3.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Example

Write $u := \varnothing$, $v := \{\varnothing\}$ and
$w := \{\varnothing,\{\varnothing\}\}$, which are pairwise distinct, and put
$A := \{u,v\} \cup \{w\}$. The collection $\{\{u,v\},\{w\}\}$ has nonempty cells,
covers $A$, and its two cells are disjoint. The equivalence relation it induces
on $A$, namely "$a$ and $b$ lie in the same cell", is

$$\sim \;=\; \{(u,u),(u,v)\} \cup \{(v,u),(v,v)\} \cup \{(w,w)\},$$

with classes $[u] = [v] = \{u,v\}$ and $[w] = \{w\}$, so that
$A/{\sim} = \{\{u,v\},\{w\}\}$ is the original collection again.

## Facts & Assumptions

**Given:** $u := \varnothing$, $v := \{\varnothing\}$, $w := \{\varnothing,\{\varnothing\}\}$, $A := \{u,v\} \cup \{w\}$, and $\sim$ as displayed.

[L1] **reflexive**: $a \sim a$ for every $a \in A$ ([[def-equivalence-relation]]).

[L2] **symmetric**: $a \sim b$ implies $b \sim a$, for all $a, b \in A$ ([[def-equivalence-relation]]).

[L3] **transitive**: $a \sim b$ and $b \sim c$ imply $a \sim c$, for all $a, b, c \in A$ ([[def-equivalence-relation]]).

[L4] $[a] \;:=\; \{\, b \in A \;:\; a \sim b \,\} \;\subseteq\; A$ ([[def-equivalence-relation]]).

[L5] $A/{\sim} \;:=\; \{\, [a] \;:\; a \in A \,\}$ ([[def-equivalence-relation]]).

[L6] The equivalence classes of an equivalence relation are nonempty, cover $A$, and are pairwise equal or disjoint ([[lem-equivalence-classes-partition]]).

[L7] $\{x,y\}$ is the set whose elements are exactly $x$ and $y$, and $\{x\} := \{x,x\}$ ([[def-unordered-pair-and-singleton]]).

[L8] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

[L9] $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L10] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L11] $(a,b) = (c,d)$ if and only if $a = c$ and $b = d$ ([[thm-the-characterising-property-of-ordered-pairs]]).

[L12] $(a,b) := \{\{a\},\{a,b\}\}$ ([[def-ordered-pair]]).

[L13] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

[L14] A **relation** is a set $R$ every element of which is an ordered pair ([[def-relation-domain-range-and-field]]).

[L15] $a \cup b := \bigcup\{a,b\}$ ([[def-union-of-a-set-and-binary-union]]).

## Verification

**Proof technique:** direct.

1.1 $u$, $v$ and $w$ are pairwise distinct: $u$ has no element, $v$ has exactly $u$, and $w$ has $v$ as an element while $v$ does not. So $A$ has exactly those three elements, and $\sim$ is a relation on $A$, each of its five listed pairs having both coordinates in $A$. [L7, L8, L9, L10, L12, L14, L15]

2.1 $\sim$ is an equivalence relation on $A$: it contains $(u,u)$, $(v,v)$ and $(w,w)$, so it is reflexive on $A$; its pairs with distinct coordinates are $(u,v)$ and $(v,u)$, and each of those has its reverse present, so it is symmetric; and every composable pair of its members has its composite present, since chains through $u$ and $v$ stay inside $\{u,v\}$ and $w$ relates only to itself. [L1, L2, L3, L11, L13, step 1.1]

3.1 The classes are as stated: $[u] = \{b \in A : u \sim b\} = \{u,v\}$, $[v] = \{u,v\}$ by the pairs $(v,u)$ and $(v,v)$, and $[w] = \{w\}$. Hence $A/{\sim}$ has exactly the two elements $\{u,v\}$ and $\{w\}$, which is the collection we started from. [L4, L5, L7, L11, L13, step 1.1, step 2.1]

4.1 The collection is therefore a partition of $A$ in the sense of the classes being nonempty, covering $A$ and pairwise equal or disjoint, and it is recovered as the quotient set of the equivalence relation it induces. [L6, step 2.1, step 3.1] ∎

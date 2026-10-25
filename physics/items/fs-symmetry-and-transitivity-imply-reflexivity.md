---
id: fs-symmetry-and-transitivity-imply-reflexivity
kind: false-statement
title: "FALSE: a symmetric and transitive relation on a set $A$ is reflexive on $A$, so reflexivity is redundant in the definition of an equivalence relation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-properties-of-a-relation-on-a-set, def-equivalence-relation, def-relation-domain-range-and-field, def-cartesian-product, def-ordered-pair, def-unordered-pair-and-singleton, thm-the-empty-set-exists-and-is-unique]
justified_by: []
aliases: []
landmark: false
short: "reflexivity is redundant (false)"
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
    - title: "Binary relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binary_relation"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §3.1"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

**False statement.** If a relation $R$ on a set $A$ is symmetric and transitive,
then it is reflexive on $A$; consequently the reflexivity clause in the
definition of an equivalence relation follows from the other two and could be
dropped.

## Facts & Assumptions

**Given:** the claim above.

[L1] $R$ is **reflexive on $A$** when $(a,a) \in R$ for every $a \in A$ ([[def-properties-of-a-relation-on-a-set]]).

[L2] $R$ is **symmetric** when $(a,b) \in R$ implies $(b,a) \in R$, for all $a, b \in A$ ([[def-properties-of-a-relation-on-a-set]]).

[L3] $R$ is **transitive** when $(a,b) \in R$ and $(b,c) \in R$ imply $(a,c) \in R$, for all $a, b, c \in A$ ([[def-properties-of-a-relation-on-a-set]]).

[L4] A binary relation $\sim$ on $A$ is an **equivalence relation** when it is reflexive, symmetric and transitive ([[def-equivalence-relation]]).

[L5] $R$ is a **relation on $A$** when $R \subseteq A \times A$ ([[def-relation-domain-range-and-field]]).

[L6] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L7] $(a,b) := \{\{a\},\{a,b\}\}$ ([[def-ordered-pair]]).

[L8] $\{x,y\}$ is the set whose elements are exactly $x$ and $y$, and $\{x\} := \{x,x\}$ ([[def-unordered-pair-and-singleton]]).

[L9] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

## Refutation

**Proof technique:** direct.

1.1 The argument that makes the claim look right: given $a \in A$, take any $b$ with $(a,b) \in R$; symmetry gives $(b,a) \in R$, and transitivity applied to $(a,b)$ and $(b,a)$ gives $(a,a) \in R$. [L1, L2, L3]

1.2 The witness: put $u := \varnothing$, $v := \{\varnothing\}$, $A := \{u,v\}$ and $R := \{(u,u)\}$. Here $u \neq v$, because $v$ has an element and $u$ has none. [L8, L9]

2.1 The gap in step 1.1 is the phrase "take any $b$ with $(a,b) \in R$": no hypothesis supplies such a $b$. Symmetry and transitivity are conditional on pairs that are already in $R$, so they constrain $R$ only at points that $R$ relates to something, and say nothing whatever about a point of $A$ that $R$ leaves untouched. [L2, L3, step 1.1]

2.2 $R$ is a relation on $A$: its only element is the ordered pair $(u,u)$, whose coordinates both lie in $A$. [L5, L6, L7, step 1.2]

2.3 $R$ is symmetric, since its only pair is its own reversal, and transitive, since the only composable pair of its members is $(u,u)$ with $(u,u)$, whose conclusion $(u,u) \in R$ holds. [L2, L3, step 1.2]

3.1 $R$ is not reflexive on $A$: $v$ is an element of $A$ and $(v,v) \notin R$, since the only element of $R$ is $(u,u)$ and $v \neq u$. [L1, L7, L8, step 1.2, step 2.2]

4.1 The claim is therefore false, and with it the conclusion drawn from it: the reflexivity clause in the definition of an equivalence relation is not redundant, since $R$ satisfies the other two clauses on $A$ and is not an equivalence relation on $A$. [L4, step 2.1, step 2.3, step 3.1] ∎

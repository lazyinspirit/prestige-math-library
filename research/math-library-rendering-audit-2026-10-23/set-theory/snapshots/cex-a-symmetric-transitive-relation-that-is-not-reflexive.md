---
id: cex-a-symmetric-transitive-relation-that-is-not-reflexive
kind: counterexample
title: "A symmetric and transitive relation on a two-element set that is not reflexive on it"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-properties-of-a-relation-on-a-set, def-relation-domain-range-and-field, thm-the-empty-set-exists-and-is-unique, def-unordered-pair-and-singleton, def-cartesian-product, def-ordered-pair, thm-the-characterising-property-of-ordered-pairs, def-union-of-a-set-and-binary-union, lem-unions-and-intersections-of-small-families]
justified_by: []
aliases: []
landmark: false
short: "symmetric and transitive but not reflexive"
proof_strategy: direct
cx_machine_verified: false
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

## Statement refuted

**Refuted claim:** a symmetric and transitive relation on a set $A$ is reflexive
on $A$. Write $u := \varnothing$ and $v := \{\varnothing\}$, put
$A := \{u,v\}$ and

$$R := \{(u,u)\}.$$

$R$ is a relation on $A$ that is symmetric and transitive, and it is not
reflexive on $A$, because $(v,v) \notin R$.

The failure is located exactly at the point of $A$ that $R$ does not touch: $R$
*is* reflexive on its own field $\{u\}$, and symmetry and transitivity constrain
$R$ only there.

## Facts & Assumptions

**Given:** $u := \varnothing$, $v := \{\varnothing\}$, $A := \{u,v\}$ and $R := \{(u,u)\}$.

[L1] $R$ is **reflexive on $A$** when $(a,a) \in R$ for every $a \in A$ ([[def-properties-of-a-relation-on-a-set]]).

[L2] $R$ is **symmetric** when $(a,b) \in R$ implies $(b,a) \in R$, for all $a, b \in A$ ([[def-properties-of-a-relation-on-a-set]]).

[L3] $R$ is **transitive** when $(a,b) \in R$ and $(b,c) \in R$ imply $(a,c) \in R$, for all $a, b, c \in A$ ([[def-properties-of-a-relation-on-a-set]]).

[L4] A **relation** is a set $R$ every element of which is an ordered pair ([[def-relation-domain-range-and-field]]).

[L5] $\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}, \qquad \operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L6] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

[L7] $\{x,y\}$ is the set whose elements are exactly $x$ and $y$, and $\{x\} := \{x,x\}$ ([[def-unordered-pair-and-singleton]]).

[L8] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L9] $(a,b) = (c,d)$ if and only if $a = c$ and $b = d$ ([[thm-the-characterising-property-of-ordered-pairs]]).

[L10] $(a,b) := \{\{a\},\{a,b\}\}$ ([[def-ordered-pair]]).

[L11] $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L12] $a \cup b := \bigcup\{a,b\}$ ([[def-union-of-a-set-and-binary-union]]).

## Counterexample

**Proof technique:** direct.

1.1 $u \neq v$, because $v$ has the element $u$ and $u$ has none; so $A$ has exactly the two elements $u$ and $v$. [L6, L7]

2.1 $R$ is a relation on $A$: its only element is the ordered pair $(u,u)$, and both coordinates lie in $A$, so $R \subseteq A \times A$. [L4, L8, L10, step 1.1]

3.1 The three characteristic sets of $R$ are $\operatorname{dom} R = \operatorname{ran} R = \operatorname{fld} R = \{u\}$, since $(u,u)$ is its only pair. [L5, L7, L9, L11, L12, step 2.1]

3.2 $R$ is symmetric: the only pair in $R$ is $(u,u)$, whose reversal is itself. It is transitive: the only composable pair of members is $(u,u)$ with $(u,u)$, and the required conclusion $(u,u) \in R$ holds. [L2, L3, L9, step 2.1]

4.1 $R$ is reflexive on $\operatorname{fld} R$: the only element of $\{u\}$ is $u$, and $(u,u) \in R$. [L1, L7, step 3.1]

5.1 $R$ is not reflexive on $A$: $v \in A$, and $(v,v) \neq (u,u)$ because $v \neq u$, so $(v,v) \notin R$. The failure is therefore confined to the single element of $A$ lying outside $\operatorname{fld} R$; symmetry and transitivity say nothing about such a point, which is exactly why they do not imply reflexivity on $A$. [L1, L9, step 1.1, step 2.1, step 3.1, step 3.2, step 4.1] ∎

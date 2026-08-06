---
id: cex-composition-of-relations-is-not-commutative
kind: counterexample
title: "Relations $R$ and $S$ on a two-element set with $S \\circ R \\neq R \\circ S$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-inverse-relation-composition-and-restriction, def-relation-domain-range-and-field, def-ordered-pair, def-unordered-pair-and-singleton, thm-the-empty-set-exists-and-is-unique, prop-composition-of-relations-is-associative, def-axiom-of-extensionality, thm-the-characterising-property-of-ordered-pairs, def-cartesian-product]
justified_by: []
aliases: []
landmark: false
short: "composition is not commutative"
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
    - title: "Composition of relations (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Composition_of_relations"
    - title: "B. Kaya, MATH 320 Set Theory (METU), Def. 12"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Binary relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binary_relation"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** $S \circ R = R \circ S$ for all relations $R$ and $S$. With
$u := \varnothing$, $v := \{\varnothing\}$, $A := \{u,v\}$ and

$$R := \{(u,v)\}, \qquad S := \{(v,u)\},$$

the two composites are $S \circ R = \{(u,u)\}$ and $R \circ S = \{(v,v)\}$, which
are different. Composition of relations is associative
([[prop-composition-of-relations-is-associative]]) but not commutative.

## Facts & Assumptions

**Given:** $u := \varnothing$, $v := \{\varnothing\}$, $A := \{u,v\}$, $R := \{(u,v)\}$ and $S := \{(v,u)\}$.

[L1] $(a,c) \in S \circ R$ holds if and only if $(a,b) \in R$ and $(b,c) \in S$ for some $b$ ([[def-inverse-relation-composition-and-restriction]]).

[L2] A **relation** is a set $R$ every element of which is an ordered pair ([[def-relation-domain-range-and-field]]).

[L3] $(a,b) = (c,d)$ if and only if $a = c$ and $b = d$ ([[thm-the-characterising-property-of-ordered-pairs]]).

[L4] $(a,b) := \{\{a\},\{a,b\}\}$ ([[def-ordered-pair]]).

[L5] $\{x,y\}$ is the set whose elements are exactly $x$ and $y$, and $\{x\} := \{x,x\}$ ([[def-unordered-pair-and-singleton]]).

[L6] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

[L7] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

[L8] $T \circ (S \circ R) = (T \circ S) \circ R$ ([[prop-composition-of-relations-is-associative]]).

[L9] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

## Counterexample

**Proof technique:** direct.

1.1 $u \neq v$, because $v$ has an element and $u$ has none; and $R$ and $S$ are relations on $A$, each with one pair, both of whose coordinates lie in $A$. [L2, L5, L6, L9]

2.1 $S \circ R$: the only pair of $R$ is $(u,v)$, and the only pair of $S$ whose first coordinate is $v$ is $(v,u)$, so the only element of $S \circ R$ is $(u,u)$. [L1, L3, L5, L7, step 1.1]

2.2 $R \circ S$: the only pair of $S$ is $(v,u)$, and the only pair of $R$ whose first coordinate is $u$ is $(u,v)$, so the only element of $R \circ S$ is $(v,v)$. [L1, L3, L5, L7, step 1.1]

3.1 $(u,u)$ and $(v,v)$ are different, since equality of ordered pairs would force $u = v$; so the two composites have different elements and $S \circ R \neq R \circ S$, while the associativity of composition is unaffected. [L3, L4, L7, L8, step 1.1, step 2.1, step 2.2] ∎

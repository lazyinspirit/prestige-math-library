---
id: ex-a-relation-on-a-three-element-set-with-its-domain-range-inverse-and-composites
kind: example
title: "A four-pair relation on $\\{\\varnothing,\\{\\varnothing\\},\\{\\varnothing,\\{\\varnothing\\}\\}\\}$ with its domain, range, field, inverse, restriction, image and self-composite computed"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-relation-domain-range-and-field, def-inverse-relation-composition-and-restriction, def-image-and-preimage-under-a-relation, def-ordered-pair, def-unordered-pair-and-singleton, thm-the-empty-set-exists-and-is-unique, def-cartesian-product, thm-the-characterising-property-of-ordered-pairs, def-union-of-a-set-and-binary-union, lem-unions-and-intersections-of-small-families, def-axiom-of-extensionality]
justified_by: []
aliases: []
landmark: false
short: "a relation computed"
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
    - title: "B. Kaya, MATH 320 Set Theory (METU), §2.1"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Binary relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binary_relation"
    - title: "Composition of relations (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Composition_of_relations"
pipeline_run: null
---

## Example

Write $u := \varnothing$, $v := \{\varnothing\}$ and
$w := \{\varnothing,\{\varnothing\}\}$; these are pairwise distinct, since $u$
has no element, $v$ has exactly the element $u$, and $w$ has $v$ as an element
while $v$ does not. Put $A := \{u,v\} \cup \{w\}$ and

$$R := \{(u,v),(v,w)\} \cup \{(w,u),(u,u)\}.$$

Then $R$ is a relation on $A$ with

$$\operatorname{dom} R = \operatorname{ran} R = \operatorname{fld} R = A, \qquad R^{-1} = \{(v,u),(w,v)\} \cup \{(u,w),(u,u)\},$$

$$R \restriction \{u\} = \{(u,v),(u,u)\}, \qquad R[\{u\} \cup \{v\}] = A, \qquad R \circ R = \{(u,w),(u,v)\} \cup \{(u,u),(v,u)\} \cup \{(w,v),(w,u)\}.$$

## Facts & Assumptions

**Given:** $u := \varnothing$, $v := \{\varnothing\}$, $w := \{\varnothing,\{\varnothing\}\}$, $A := \{u,v\} \cup \{w\}$ and $R$ as displayed.

[L1] A **relation** is a set $R$ every element of which is an ordered pair ([[def-relation-domain-range-and-field]]).

[L2] $\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}, \qquad \operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L3] $(b,a) \in R^{-1}$ holds if and only if $(a,b) \in R$; $(a,c) \in S \circ R$ holds if and only if $(a,b) \in R$ and $(b,c) \in S$ for some $b$; and $(a,b) \in R \restriction A$ holds if and only if $(a,b) \in R$ and $a \in A$ ([[def-inverse-relation-composition-and-restriction]]).

[L4] $b \in R[A]$ holds if and only if $(a,b) \in R$ for some $a \in A$ ([[def-image-and-preimage-under-a-relation]]).

[L5] $(a,b) = (c,d)$ if and only if $a = c$ and $b = d$ ([[thm-the-characterising-property-of-ordered-pairs]]).

[L6] $(a,b) := \{\{a\},\{a,b\}\}$ ([[def-ordered-pair]]).

[L7] $\{x,y\}$ is the set whose elements are exactly $x$ and $y$, and $\{x\} := \{x,x\}$ ([[def-unordered-pair-and-singleton]]).

[L8] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

[L9] $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L10] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L11] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

[L12] $a \cup b := \bigcup\{a,b\}$ ([[def-union-of-a-set-and-binary-union]]).

## Verification

**Proof technique:** direct.

1.1 $u$, $v$ and $w$ are pairwise distinct and $A$ has exactly them as elements; every element of $R$ is an ordered pair with both coordinates in $A$, so $R$ is a relation on $A$, that is $R \subseteq A \times A$. [L1, L6, L7, L8, L9, L10, L12]

2.1 Reading off first coordinates gives $u$, $v$, $w$, so $\operatorname{dom} R = A$; reading off second coordinates gives $v$, $w$, $u$, so $\operatorname{ran} R = A$; and the field, being the union of the two, is $A$ as well. [L2, L5, L9, L11, step 1.1]

2.2 Reversing each pair gives $R^{-1} = \{(v,u),(w,v)\} \cup \{(u,w),(u,u)\}$; keeping the pairs whose first coordinate is $u$ gives $R \restriction \{u\} = \{(u,v),(u,u)\}$; and the elements related to $u$ or to $v$ are $v$, $u$ and $w$, so $R[\{u\} \cup \{v\}] = A$. [L3, L4, L5, L7, L9, L11, step 1.1]

2.3 For the self-composite, each pair $(a,b)$ of $R$ is matched with every pair of $R$ whose first coordinate is $b$: from $(u,v)$ and $(v,w)$ comes $(u,w)$; from $(u,u)$ and the two pairs starting at $u$ come $(u,v)$ and $(u,u)$; from $(v,w)$ and $(w,u)$ comes $(v,u)$; and from $(w,u)$ and the two pairs starting at $u$ come $(w,v)$ and $(w,u)$. These six pairs are exactly the displayed $R \circ R$. [L3, L5, L9, L11, step 1.1]

3.1 The domain, range, field, inverse, restriction, image and self-composite are as displayed. [step 2.1, step 2.2, step 2.3] ∎

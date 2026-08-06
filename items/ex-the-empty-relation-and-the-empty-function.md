---
id: ex-the-empty-relation-and-the-empty-function
kind: example
title: "$\\varnothing$ is a relation on every set, is the unique equivalence relation on $\\varnothing$, is a function $\\varnothing \\to B$ for every $B$, is a bijection $\\varnothing \\to \\varnothing$, and is not a surjection $\\varnothing \\to \\{\\varnothing\\}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-relation-domain-range-and-field, def-function, def-injection-surjection-bijection, def-equivalence-relation, def-properties-of-a-relation-on-a-set, thm-the-empty-set-exists-and-is-unique, def-unordered-pair-and-singleton, def-product-of-an-indexed-family, prop-products-over-small-index-sets, def-cartesian-product, prop-cartesian-products-and-set-operations, def-subset-and-proper-subset]
justified_by: []
aliases: []
landmark: false
short: "the empty relation and function"
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
    - title: "B. Kaya, MATH 320 Set Theory (METU), Exercise 9"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Equivalence relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_relation"
    - title: "Empty function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Empty_function"
pipeline_run: null
---

## Example

The empty set does the work of five different objects at once.

- $\varnothing$ is a relation, and a relation on $A$ for every set $A$; its
  domain, range and field are all $\varnothing$.
- $\varnothing$ is the only relation on $\varnothing$, and it is an equivalence
  relation on $\varnothing$; so $\varnothing$ carries exactly one equivalence
  relation.
- $\varnothing$ is a function $\varnothing \to B$ for every set $B$, and it is
  the only one.
- $\varnothing$ is a bijection $\varnothing \to \varnothing$.
- $\varnothing$ is **not** a surjection $\varnothing \to \{\varnothing\}$, even
  though it is an injective function $\varnothing \to \{\varnothing\}$.

The last two together are the reason a codomain belongs to the declaration
$f : A \to B$ rather than to the set $f$: one and the same set is a bijection
under one declaration and a non-surjection under another. The empty function is
also the unique element of the empty product.

## Facts & Assumptions

**Given:** the set $\varnothing$ and arbitrary sets $A$ and $B$.

[L1] A **relation** is a set $R$ every element of which is an ordered pair ([[def-relation-domain-range-and-field]]).

[L2] $\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}, \qquad \operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L3] A **function** is a relation $f$ such that $(a,b) \in f$ and $(a,c) \in f$ imply $b = c$ ([[def-function]]).

[L4] We write $f : A \to B$, and say $f$ is a **function from $A$ to $B$**, when $f$ is a function with $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$ ([[def-function]]).

[L5] $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all $x, y \in A$ ([[def-injection-surjection-bijection]]).

[L6] $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$ with $f(x) = b$ ([[def-injection-surjection-bijection]]).

[L7] A binary relation $\sim$ on $A$ is an **equivalence relation** when it is reflexive, symmetric and transitive ([[def-equivalence-relation]]).

[L8] $R$ is **reflexive on $A$** when $(a,a) \in R$ for every $a \in A$ ([[def-properties-of-a-relation-on-a-set]]).

[L9] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

[L10] $\{x\} := \{x,x\}$, the **singleton** of $x$, is the set whose only element is $x$ ([[def-unordered-pair-and-singleton]]).

[L11] $A \times B = \varnothing$ if and only if $A = \varnothing$ or $B = \varnothing$ ([[prop-cartesian-products-and-set-operations]]).

[L12] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L13] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L14] if $I = \varnothing$ then $\prod_{i \in I} A_i = \{\varnothing\}$ ([[prop-products-over-small-index-sets]]).

[L15] an element of $\prod_{i \in I} A_i$ is a function with domain $I$ that takes its value at each index inside the member carried by that index ([[def-product-of-an-indexed-family]]).

## Verification

**Proof technique:** direct.

1.1 $\varnothing$ has no elements, so "every element is an ordered pair" holds vacuously and $\varnothing$ is a relation; $\varnothing \subseteq A \times A$ for every $A$, so it is a relation on every set; and no set satisfies the defining conditions for its domain or its range, so both are $\varnothing$, hence so is its field. [L1, L2, L9, L12]

1.2 A relation on $\varnothing$ is a subset of $\varnothing \times \varnothing$, which is $\varnothing$, so $\varnothing$ is the only one. It is reflexive on $\varnothing$, symmetric and transitive, since each condition quantifies over elements of $\varnothing$; hence it is the unique equivalence relation on $\varnothing$. [L7, L8, L9, L11, L12, L13]

2.1 $\varnothing$ is single valued vacuously, has domain $\varnothing$ and range $\varnothing \subseteq B$, so $\varnothing : \varnothing \to B$ for every $B$; and any function with domain $\varnothing$ has no elements, so it is $\varnothing$. [L3, L4, L9, L12, step 1.1]

3.1 As a function $\varnothing \to \varnothing$ it is injective, since the injectivity condition quantifies over elements of the domain, and surjective, since the surjectivity condition quantifies over elements of the codomain and $\varnothing$ has none; so it is a bijection. [L5, L6, L9, step 2.1]

3.2 As a function $\varnothing \to \{\varnothing\}$ it is still injective, for the same reason, but not surjective: $\varnothing$ is an element of $\{\varnothing\}$ and no element of the domain is sent to it. [L5, L6, L9, L10, step 2.1]

3.3 The empty function is the unique element of the empty product: $\prod_{i \in \varnothing} A_i = \{\varnothing\}$, and its one element is a function with domain $\varnothing$. [L14, L15, step 2.1]

4.1 All five descriptions hold of the single set $\varnothing$, and the last two differ only in the declared codomain. [step 1.1, step 1.2, step 2.1, step 3.1, step 3.2, step 3.3] ∎

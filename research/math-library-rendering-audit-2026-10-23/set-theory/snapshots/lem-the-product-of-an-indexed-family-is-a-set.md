---
id: lem-the-product-of-an-indexed-family-is-a-set
kind: lemma
title: "For an indexed family $(A_i)_{i \\in I}$ the collection of functions $f$ with domain $I$ and $f(i) \\in A_i$ for every $i \\in I$ is a set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-indexed-family, def-indexed-union-and-intersection, def-the-set-of-functions-from-one-set-to-another, def-axiom-schema-of-separation, def-function, def-subset-and-proper-subset, def-relation-domain-range-and-field]
justified_by: []
aliases: []
landmark: false
short: "the product is a set"
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
    - title: "B. Kaya, MATH 320 Set Theory (METU), Def. 21"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Cartesian product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cartesian_product"
    - title: "Indexed family (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Indexed_family"
pipeline_run: null
---

## Statement

Let $(A_i)_{i \in I}$ be an indexed family. Then there is a set whose elements
are exactly the functions $f$ with $\operatorname{dom} f = I$ and
$f(i) \in A_i$ for every $i \in I$, and it is a subset of
$C^{I}$ where $C := \bigcup_{i \in I} A_i$.

## Facts & Assumptions

**Given:** an indexed family $(A_i)_{i \in I}$, and $C := \bigcup_{i \in I} A_i$.

[L1] An **indexed family** with **index set** $I$ is a function $A$ with $\operatorname{dom} A = I$ ([[def-indexed-family]]).

[L2] $z \in \bigcup_{i \in I} A_i$ holds if and only if $z \in A_i$ for some $i \in I$ ([[def-indexed-union-and-intersection]]).

[L3] $f \in B^{A}$ holds if and only if $f : A \to B$ ([[def-the-set-of-functions-from-one-set-to-another]]).

[L4] We write $f : A \to B$, and say $f$ is a **function from $A$ to $B$**, when $f$ is a function with $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$ ([[def-function]]).

[L5] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L6] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L7] $\operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

## Proof

**Proof technique:** direct.

1.1 Let $f$ be a function with $\operatorname{dom} f = I$ and $f(i) \in A_i$ for every $i \in I$. Every element of $\operatorname{ran} f$ is $f(i)$ for some $i \in I$, hence lies in $A_i$ and therefore in $C$; so $\operatorname{ran} f \subseteq C$ and $f : I \to C$, that is, $f \in C^{I}$. [L1, L2, L3, L4, L6, L7]

2.1 Separating inside $C^{I}$ with the formula saying that $z(i) \in A_i$ for every $i \in I$, with parameters $I$ and the family, gives a set whose elements are exactly the members of $C^{I}$ with that property; by step 1.1 every function of the kind described already lies in $C^{I}$, so this set has exactly the intended elements and is included in $C^{I}$. [L3, L5, L6, step 1.1] ∎

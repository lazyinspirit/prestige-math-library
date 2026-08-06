---
id: ex-a-nonempty-product-built-without-choice
kind: example
title: "For any indexed family the product $\\prod_{i \\in I} \\mathcal{P}(X_i)$ contains the constant function with value $\\varnothing$, and $\\prod_{i \\in I} \\{i\\}$ has exactly one element"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [def-product-of-an-indexed-family, def-indexed-family, def-power-set, def-function, thm-the-empty-set-exists-and-is-unique, def-the-identity-and-membership-relations-on-a-set, def-unordered-pair-and-singleton, prop-products-over-small-index-sets, def-axiom-schema-of-separation, def-cartesian-product, def-relation-domain-range-and-field, lem-basic-laws-of-inclusion, def-indexed-union-and-intersection, lem-the-composite-of-two-functions-is-a-function]
justified_by: []
aliases: []
landmark: false
short: "products that are nonempty without choice"
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
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Cartesian product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cartesian_product"
    - title: "B. Kaya, MATH 320 Set Theory (METU), Def. 21 and Exercise 13"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Example

Two families whose products can be shown nonempty by writing an element down,
with no choice principle involved.

- Let $(X_i)_{i \in I}$ be any indexed family. Then
  $(\mathcal{P}(X_i))_{i \in I}$ is an indexed family, and the constant function
  $c := \{\,(i,\varnothing) : i \in I\,\}$ is an element of
  $\prod_{i \in I} \mathcal{P}(X_i)$. So that product is nonempty for every $I$
  and every family, even when some $X_i$ is empty.
- Let $I$ be any set and let $(\{i\})_{i \in I}$ be the family carrying the
  singleton of the index at each index. Then
  $\prod_{i \in I} \{i\} = \{\Delta_I\}$: its only element is the identity
  relation on $I$.

Neither construction selects anything: in the first the value is the same set at
every index, and in the second the value at $i$ is forced to be $i$.

## Facts & Assumptions

**Given:** an indexed family $(X_i)_{i \in I}$ and a set $I$.

[L1] an element of $\prod_{i \in I} A_i$ is a function with domain $I$ that takes its value at each index inside the member carried by that index ([[def-product-of-an-indexed-family]]).

[L2] An **indexed family** with **index set** $I$ is a function $A$ with $\operatorname{dom} A = I$ ([[def-indexed-family]]).

[L3] $z \in \mathcal{P}(x)$ holds if and only if $z \subseteq x$ ([[def-power-set]]).

[L4] (i) $\varnothing \subseteq x$ ([[lem-basic-laws-of-inclusion]]).

[L5] A **function** is a relation $f$ such that $(a,b) \in f$ and $(a,c) \in f$ imply $b = c$ ([[def-function]]).

[L6] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

[L7] $\Delta_A$ is a function with $\operatorname{dom} \Delta_A = A$ and $\Delta_A(a) = a$ for every $a \in A$ ([[lem-the-composite-of-two-functions-is-a-function]]).

[L8] $(a,b) \in \Delta_A$ holds if and only if $a = b$ and $a \in A$ ([[def-the-identity-and-membership-relations-on-a-set]]).

[L9] $\{x\} := \{x,x\}$, the **singleton** of $x$, is the set whose only element is $x$ ([[def-unordered-pair-and-singleton]]).

[L10] if $I = \varnothing$ then $\prod_{i \in I} A_i = \{\varnothing\}$ ([[prop-products-over-small-index-sets]]).

[L11] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L12] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L13] $\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}, \qquad \operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L14] $z \in \bigcup_{i \in I} A_i$ holds if and only if $z \in A_i$ for some $i \in I$ ([[def-indexed-union-and-intersection]]).

## Verification

**Proof technique:** direct.

1.1 $(\mathcal{P}(X_i))_{i \in I}$ is an indexed family: separating inside $I \times \mathcal{P}(\mathcal{P}(\bigcup_{i \in I} X_i))$ with the formula $\exists i\,\exists w\,(z = (i,w) \wedge i \in I \wedge w = \mathcal{P}(X_i))$ gives a set, which is single valued and has domain $I$; the ambient set contains each $\mathcal{P}(X_i)$, since every subset of $X_i$ is a subset of $\bigcup_{i \in I} X_i$. [L2, L3, L5, L11, L12, L13, L14]

1.2 Similarly $(\{i\})_{i \in I}$ is an indexed family, obtained by separating inside $I \times \mathcal{P}(I)$, since $\{i\} \subseteq I$ for $i \in I$. [L2, L3, L5, L9, L11, L12, L13]

2.1 The constant function $c := \{\,(i,\varnothing) : i \in I\,\}$ is a set, by separating inside $I \times \{\varnothing\}$; it is single valued, has domain $I$, and $c(i) = \varnothing$ for every $i \in I$. Since $\varnothing \subseteq X_i$, we have $\varnothing \in \mathcal{P}(X_i)$ for every $i$, so $c$ lies in $\prod_{i \in I} \mathcal{P}(X_i)$ and that product is nonempty. [L1, L3, L4, L5, L6, L9, L11, L12, L13, step 1.1]

2.2 $\Delta_I$ is a function with domain $I$ and $\Delta_I(i) = i$, and $i$ is the only element of $\{i\}$, so $\Delta_I \in \prod_{i \in I} \{i\}$. Conversely any $f$ in that product has domain $I$ and $f(i) \in \{i\}$, hence $f(i) = i$ for every $i \in I$, so $f$ and $\Delta_I$ are functions with the same domain agreeing everywhere and are equal. [L1, L5, L7, L8, L9, step 1.2]

3.1 Both products are therefore nonempty, and the second has exactly one element; when $I = \varnothing$ both statements agree with the general computation of the empty product, whose single element is the empty function. [L10, step 2.1, step 2.2] ∎

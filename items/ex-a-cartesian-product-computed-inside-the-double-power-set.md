---
id: ex-a-cartesian-product-computed-inside-the-double-power-set
kind: example
title: "$\\{\\varnothing\\} \\times \\{\\varnothing,\\{\\varnothing\\}\\}$ listed in full, together with the inclusion in $\\mathcal{P}(\\mathcal{P}(A \\cup B))$ that makes it a set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cartesian-product, lem-ordered-pairs-lie-in-the-double-power-set, def-power-set, def-ordered-pair, def-union-of-a-set-and-binary-union, lem-unions-and-intersections-of-small-families, def-unordered-pair-and-singleton, thm-the-empty-set-exists-and-is-unique, def-axiom-of-extensionality, def-subset-and-proper-subset]
justified_by: []
aliases: []
landmark: false
short: "a product computed"
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
    - title: "Cartesian product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cartesian_product"
    - title: "B. Kaya, MATH 320 Set Theory (METU), Def. 10"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), Def. 2.8"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
pipeline_run: null
---

## Example

Put $A := \{\varnothing\}$ and $B := \{\varnothing,\{\varnothing\}\}$. Then

$$A \times B = \bigl\{\, \{\{\varnothing\}\},\ \{\{\varnothing\},\{\varnothing,\{\varnothing\}\}\} \,\bigr\},$$

a set with two elements, namely the pairs $(\varnothing,\varnothing)$ and
$(\varnothing,\{\varnothing\})$. Here $A \cup B = B$, and both elements lie in
$\mathcal{P}(\mathcal{P}(B))$, which is the ambient set the product is separated
inside.

## Facts & Assumptions

**Given:** $A := \{\varnothing\}$ and $B := \{\varnothing,\{\varnothing\}\}$.

[L1] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L2] If $a \in A$ and $b \in B$, then $(a,b) \in \mathcal{P}(\mathcal{P}(A \cup B))$ ([[lem-ordered-pairs-lie-in-the-double-power-set]]).

[L3] $(a,b) := \{\{a\},\{a,b\}\}$ ([[def-ordered-pair]]).

[L4] $\{x,y\}$ is the set whose elements are exactly $x$ and $y$, and $\{x\} := \{x,x\}$ ([[def-unordered-pair-and-singleton]]).

[L5] $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L6] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

[L7] There is exactly one set with no elements ([[thm-the-empty-set-exists-and-is-unique]]).

[L8] $z \in \mathcal{P}(x)$ holds if and only if $z \subseteq x$ ([[def-power-set]]).

[L9] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L10] $a \cup b := \bigcup\{a,b\}$ ([[def-union-of-a-set-and-binary-union]]).

## Verification

**Proof technique:** direct.

1.1 $A \cup B = B$: an element of $A \cup B$ is $\varnothing$ or is an element of $B$, and $\varnothing \in B$, so the two sets have the same elements. [L4, L5, L6, L7, L10]

1.2 The only element of $A$ is $\varnothing$, and the elements of $B$ are $\varnothing$ and $\{\varnothing\}$, so the pairs with first coordinate in $A$ and second in $B$ are exactly $(\varnothing,\varnothing)$ and $(\varnothing,\{\varnothing\})$; unfolding the definition of the ordered pair, these are $\{\{\varnothing\}\}$ and $\{\{\varnothing\},\{\varnothing,\{\varnothing\}\}\}$. [L1, L3, L4, L6, L7]

2.1 Hence $A \times B$ has exactly those two elements, and they are distinct because $\{\varnothing,\{\varnothing\}\}$ belongs to the second and not to the first. [L1, L4, L6, step 1.2]

2.2 Both elements lie in $\mathcal{P}(\mathcal{P}(B))$: this is the general fact applied with $A \cup B = B$, and it is also visible directly, since each is a set of subsets of $B$. [L2, L8, L9, step 1.1, step 1.2]

3.1 The product is listed in full and its two elements are exhibited inside the ambient double power set that makes the separation legitimate. [step 2.1, step 2.2] ∎

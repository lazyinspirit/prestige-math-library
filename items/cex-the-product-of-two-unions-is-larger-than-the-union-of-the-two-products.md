---
id: cex-the-product-of-two-unions-is-larger-than-the-union-of-the-two-products
kind: counterexample
title: "Sets with $(A \\times C) \\cup (B \\times D) \\subsetneq (A \\cup B) \\times (C \\cup D)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cartesian-product, def-union-of-a-set-and-binary-union, lem-unions-and-intersections-of-small-families, def-unordered-pair-and-singleton, thm-the-empty-set-exists-and-is-unique, thm-the-characterising-property-of-ordered-pairs, def-subset-and-proper-subset]
justified_by: []
aliases: []
landmark: false
short: "product of unions"
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
    - title: "Cartesian product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cartesian_product"
    - title: "Algebra of sets (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Algebra_of_sets"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §2.1"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** $(A \times C) \cup (B \times D) = (A \cup B) \times (C \cup D)$
for all sets $A$, $B$, $C$, $D$. The witness is
$A = C := \{\varnothing\}$ and $B = D := \{\{\varnothing\}\}$: the pair
$(\varnothing,\{\varnothing\})$ mixes a first coordinate from $A$ with a second
coordinate from $D$, so it lies in the right-hand side and in neither product on
the left.

## Facts & Assumptions

**Given:** $A = C := \{\varnothing\}$ and $B = D := \{\{\varnothing\}\}$.

[L1] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L2] $(a,b) = (c,d)$ if and only if $a = c$ and $b = d$ ([[thm-the-characterising-property-of-ordered-pairs]]).

[L3] $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L4] $\{x,y\}$ is the set whose elements are exactly $x$ and $y$, and $\{x\} := \{x,x\}$ ([[def-unordered-pair-and-singleton]]).

[L5] There is exactly one set with no elements ([[thm-the-empty-set-exists-and-is-unique]]).

[L6] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L7] $a \cup b := \bigcup\{a,b\}$ ([[def-union-of-a-set-and-binary-union]]).

## Counterexample

**Proof technique:** direct.

1.1 $\varnothing \neq \{\varnothing\}$, since the second has an element and the first has none; so $\varnothing \notin B$ and $\{\varnothing\} \notin C$, while $\varnothing \in A$ and $\{\varnothing\} \in D$. [L4, L5]

1.2 The inclusion from left to right always holds: an element of $A \times C$ is a pair $(x,y)$ with $x \in A$ and $y \in C$, hence with $x \in A \cup B$ and $y \in C \cup D$, so it lies in $(A \cup B) \times (C \cup D)$; the same argument applies to $B \times D$. [L1, L3, L6, L7]

2.1 The pair $(\varnothing,\{\varnothing\})$ lies in $(A \cup B) \times (C \cup D)$, because $\varnothing \in A$ gives $\varnothing \in A \cup B$ and $\{\varnothing\} \in D$ gives $\{\varnothing\} \in C \cup D$. [L1, L3, L7, step 1.1]

2.2 It lies in neither product on the left. Membership in $A \times C$ would give $\{\varnothing\} \in C$, and membership in $B \times D$ would give $\varnothing \in B$; the characterising property makes the coordinates unambiguous, and step 1.1 rules out both. [L1, L2, L3, step 1.1]

3.1 The inclusion of step 1.2 therefore omits the element exhibited at step 2.1, so it is proper. [step 1.2, step 2.1, step 2.2] ∎

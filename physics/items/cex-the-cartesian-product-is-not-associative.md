---
id: cex-the-cartesian-product-is-not-associative
kind: counterexample
title: "Sets $A$, $B$, $C$ with $(A \\times B) \\times C \\neq A \\times (B \\times C)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cartesian-product, def-ordered-pair, thm-the-characterising-property-of-ordered-pairs, def-iterated-products-and-ordered-triples, def-unordered-pair-and-singleton, thm-the-empty-set-exists-and-is-unique, def-axiom-of-extensionality]
justified_by: []
aliases: []
landmark: false
short: "the product is not associative"
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
    - title: "Tuple (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tuple"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §2.1"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** $(A \times B) \times C = A \times (B \times C)$ for all sets
$A$, $B$, $C$. The witness is $A = B = C = \{\varnothing\}$: the left-hand side
has the element $((\varnothing,\varnothing),\varnothing)$, whose first coordinate
is an ordered pair, and every element of the right-hand side has first coordinate
$\varnothing$.

This is why the convention $(a,b,c) := ((a,b),c)$ of
[[def-iterated-products-and-ordered-triples]] has to be fixed rather than assumed
harmless.

## Facts & Assumptions

**Given:** $A = B = C = \{\varnothing\}$.

[L1] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L2] $(a,b) = (c,d)$ if and only if $a = c$ and $b = d$ ([[thm-the-characterising-property-of-ordered-pairs]]).

[L3] $(a,b) := \{\{a\},\{a,b\}\}$ ([[def-ordered-pair]]).

[L4] $\{x,y\}$ is the set whose elements are exactly $x$ and $y$, and $\{x\} := \{x,x\}$ ([[def-unordered-pair-and-singleton]]).

[L5] There is exactly one set with no elements ([[thm-the-empty-set-exists-and-is-unique]]).

[L6] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

## Counterexample

**Proof technique:** direct.

1.1 $(\varnothing,\varnothing) = \{\{\varnothing\},\{\varnothing,\varnothing\}\} = \{\{\varnothing\}\}$, which has $\{\varnothing\}$ as an element; $\varnothing$ has no element, so $(\varnothing,\varnothing) \neq \varnothing$. [L3, L4, L5, L6]

2.1 Since $\varnothing$ is the only element of each of $A$, $B$, $C$, the product $A \times B$ has $(\varnothing,\varnothing)$ as its only element, so $((\varnothing,\varnothing),\varnothing)$ is an element of $(A \times B) \times C$. [L1, L4, step 1.1]

2.2 Every element of $A \times (B \times C)$ has the form $(x,y)$ with $x \in A$, hence with $x = \varnothing$; if $((\varnothing,\varnothing),\varnothing)$ were such an element then the characterising property would give $(\varnothing,\varnothing) = \varnothing$, which step 1.1 refutes. [L1, L2, L4, step 1.1]

3.1 The set $(A \times B) \times C$ therefore has an element that $A \times (B \times C)$ does not, so the two products are different. [step 2.1, step 2.2] ∎

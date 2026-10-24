---
id: def-product-of-an-indexed-family
kind: definition
title: "The product $\\prod_{i \\in I} A_i := \\{\\, f : I \\to \\bigcup_{i \\in I} A_i \\ \\mid\\ f(i) \\in A_i \\text{ for every } i \\in I \\,\\}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-the-product-of-an-indexed-family-is-a-set, def-indexed-family, def-indexed-union-and-intersection, def-function]
justified_by: []
forward_refs: []
aliases: [def-indexed-product]
landmark: true
short: "product of a family"
verification:
  precheck: n/a
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

## Definition

Let $(A_i)_{i \in I}$ be an indexed family ([[def-indexed-family]]) and write
$C := \bigcup_{i \in I} A_i$ ([[def-indexed-union-and-intersection]]). By
[[lem-the-product-of-an-indexed-family-is-a-set]] the following collection is a
set; it is the **product** of the family:

$$\prod_{i \in I} A_i \;:=\; \{\, f : I \to C \ \mid\ f(i) \in A_i \text{ for every } i \in I \,\}.$$

So an element of $\prod_{i \in I} A_i$ is a function with domain $I$ that takes
its value at each index inside the member carried by that index; "function" is as
in [[def-function]].

## Remarks

- **Nonemptiness of the product is exactly the Axiom of Choice.** Nothing in
  this definition decides whether $\prod_{i \in I} A_i$ is nonempty when every
  $A_i$ is nonempty. That assertion, for an arbitrary index set, is one of the
  standard formulations of the Axiom of Choice, stated later on this page at
  [[def-axiom-of-choice]]. The product formulation recorded there, that
  $\prod_{i \in I} X_i$ is nonempty whenever every $X_i$ is nonempty, quantifies
  over exactly the object defined here: it is this definition that fixes what
  the symbol $\prod$ in that formulation denotes, and what its elements are.
  What *is* decided without any choice principle is the degenerate arithmetic:
  the empty index set and a family with an empty member, both in
  [[prop-products-over-small-index-sets]], together with the families whose
  product can be written down explicitly.

- **Why the ambient set is $C^{I}$.** The definition separates inside the set of
  all functions $I \to C$, so the ambient set must contain every function with
  domain $I$ whose value at $i$ lies in $A_i$. Taking $C$ to be the union of the
  members secures that, since such a value lies in $A_i$ and hence in $C$; and
  $C$ is the smallest set that includes every member of the family.

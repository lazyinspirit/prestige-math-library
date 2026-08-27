---
id: ex-noetherian-not-artinian
kind: example
title: "$\\mathbb Z$ and $k[x]$ are Noetherian but not Artinian"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-field, lem-subgroups-of-z-are-cyclic, thm-noetherian-ring-ideal-characterisations, cor-finite-variable-polynomial-ring-noetherian, def-generated-and-principal-ideals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Sections 3 and 16"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Example (19.7)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Example

Let $k$ be a field. Then $\mathbb Z$ and $k[x]$ are Noetherian rings, but neither is Artinian.

## Facts & Assumptions

**Given:** A field $k$.

## Verification

**Proof technique:** direct.

1.1 Every ideal of $\mathbb Z$ is an additive subgroup, so [[lem-subgroups-of-z-are-cyclic]] makes it principal; then [[thm-noetherian-ring-ideal-characterisations]] shows that $\mathbb Z$ is Noetherian. Also [[cor-finite-variable-polynomial-ring-noetherian]] applied to the field $k$ shows that $k[x]$ is Noetherian. [given, algebra]

2.1 In $\mathbb Z$ the principal ideals $(2)\supsetneq(2^2)\supsetneq(2^3)\supsetneq\cdots$ form a strict descending chain, because $2^n\in(2^n)\setminus(2^{n+1})$ for every $n\ge1$. Likewise $(x)\supsetneq(x^2)\supsetneq(x^3)\supsetneq\cdots$ is a strict descending chain of ideals in $k[x]$. Therefore neither ring is Artinian. [step 1.1, given, algebra]

3.1 These two standard examples show that Noetherianity alone does not imply Artinianness. [step 2.1] ∎

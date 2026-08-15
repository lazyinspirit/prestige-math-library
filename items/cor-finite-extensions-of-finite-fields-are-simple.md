---
id: cor-finite-extensions-of-finite-fields-are-simple
kind: corollary
title: "Every finite extension of a finite field is simple"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-multiplicative-group-of-a-finite-field-is-cyclic, def-extension-degree-and-finite-extension, thm-cardinality-of-a-set-of-functions, def-field-extension-generated-subfields-and-simple-extension]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Finite Fields, Section 1"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf"
pipeline_run: null
---

## Statement

Every finite-degree extension $K/F$ of a finite field is simple: there exists $a\in K$ with $K=F(a)$.

## Facts & Assumptions

**Given:** A finite field $F$ and a finite extension $K/F$ of degree $n$.

[L1] The multiplicative group of a finite field is cyclic ([[thm-multiplicative-group-of-a-finite-field-is-cyclic]]).

[L2] Degree $n$ gives a finite basis of $K$ over $F$ ([[def-extension-degree-and-finite-extension]]).

[L3] The functions from an $n$-element set to a finite set form a finite set ([[thm-cardinality-of-a-set-of-functions]]).

[L4] The subfield $F(a)$ is the smallest subfield containing $F$ and $a$, and an extension equal to such a field is simple ([[def-field-extension-generated-subfields-and-simple-extension]]).

## Proof

**Proof technique:** constructive.

1.1 Coordinates in a finite basis identify $K$ with a finite set of functions from an $n$-element index set to $F$, so $K$ is a finite field. [given, L2, L3]

2.1 By [L1], choose a generator $a$ of the cyclic group $K^\times$. [step 1.1, L1, choose, construct]

3.1 The subfield $F(a)$ contains $0$, $1$, and every power of $a$, hence all of $K^\times$ and therefore all of $K$. Thus $K=F(a)$ by [L4]. [step 2.1, L4]

4.1 The chosen $a$ exhibits the extension as simple. [step 3.1, discharge-construct] ∎

---
id: ex-f-nine-as-a-polynomial-quotient
kind: example
title: "$\\mathbb F_9=\\mathbb F_3[t]/(t^2+1)$ and a generator of its multiplicative group"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-polynomial-quotient-is-a-field-iff-irreducible, thm-z-mod-p-is-a-field, thm-multiplicative-group-of-a-finite-field-is-cyclic]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "K. Conrad, Finite Fields, Section 1"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf"
pipeline_run: null
---

## Example

In $\mathbb F_9=\mathbb F_3[t]/(t^2+1)$, write $a$ for the class of $t$. Then $a^2=2$ and $a$ has order $4$, while $1+a$ has order $8$ and generates $\mathbb F_9^\times$.

## Facts & Assumptions

**Given:** The quotient $A=\mathbb F_3[t]/(t^2+1)$ and the class $a$ of $t$.

[L1] A polynomial quotient over a field is a field exactly when its modulus is irreducible ([[thm-polynomial-quotient-is-a-field-iff-irreducible]]).

[L2] The ring $\mathbb Z/3$ is a field ([[thm-z-mod-p-is-a-field]]).

[L3] The multiplicative group of a field with nine elements is cyclic ([[thm-multiplicative-group-of-a-finite-field-is-cyclic]]).

## Verification

**Proof technique:** direct.

1.1 The squares in $\mathbb F_3$ are $0$ and $1$, so $t^2+1$ has no root and is irreducible. Thus [L1] and [L2] make $A$ a field with the nine elements $r+sa$, where $r,s\in\mathbb F_3$, and $a^2=2$. [given, L1, L2]

2.1 One has $a^2=2$ and $a^4=1$, with $a^2\ne1$, so $a$ has order $4$. Put $b=1+a$. Then $b^2=2a$, $b^4=2$, and $b^8=1$. [step 1.1, algebra]

3.1 Since $b^2\ne1$ and $b^4\ne1$, its order is $8$. Hence it exhausts the eight nonzero elements and is a generator, as [L3] guarantees some element must be. [step 2.1, L3] ∎

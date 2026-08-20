---
id: prop-two-set-measure-identity
kind: proposition
title: "The two-set measure identity $\\mu(A\\cup B)+\\mu(A\\cap B)=\\mu(A)+\\mu(B)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-measure]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Axler, Measure, Integration & Real Analysis, Theorem 2.61"
      url: "https://measure.axler.net/MIRA.pdf"
pipeline_run: null
---

## Statement

For measurable sets $A$ and $B$ in a measure space,

$$\mu(A\cup B)+\mu(A\cap B)=\mu(A)+\mu(B).$$

The equality is valid in $[0,+\infty]$, including when one or both sides equal $+\infty$.

## Facts & Assumptions

**Given:** A measure $\mu$ and measurable sets $A,B$.

[L1] A measure is additive on every finite pairwise disjoint measurable family ([[def-measure]]).

## Proof

**Proof technique:** direct.

1.1 Put $C=A\setminus B$, $D=A\cap B$, and $F=B\setminus A$. These sets are measurable and pairwise disjoint, with $A=C\cup D$, $B=D\cup F$, and $A\cup B=C\cup D\cup F$. [given]

2.1 Finite additivity gives $\mu(A)=\mu(C)+\mu(D)$, $\mu(B)=\mu(D)+\mu(F)$, and $\mu(A\cup B)=\mu(C)+\mu(D)+\mu(F)$. [step 1.1, L1]

3.1 Adding $\mu(D)=\mu(A\cap B)$ to the last equality and regrouping nonnegative extended sums gives the displayed identity; no subtraction occurs, so infinite values and the cases $A=\varnothing$, $B=\varnothing$, or $A=B$ are included. [step 2.1, algebra] ∎


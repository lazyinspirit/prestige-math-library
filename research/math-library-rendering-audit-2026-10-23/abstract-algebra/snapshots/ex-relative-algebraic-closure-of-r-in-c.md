---
id: ex-relative-algebraic-closure-of-r-in-c
kind: example
title: "The relative algebraic closure of $\\mathbb R$ in $\\mathbb C$ is all of $\\mathbb C$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-relative-algebraic-closure, thm-complex-numbers-form-a-field]
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
    - title: "A. W. Knapp, Basic Algebra, 2nd ed., Chapter IX, Section 1"
      url: "https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf"
pipeline_run: null
---

## Example

The relative algebraic closure of $\mathbb R$ in $\mathbb C$ is $\mathbb C$ itself.

## Facts & Assumptions

**Given:** A complex number $z=a+bi$ with $a,b\in\mathbb R$.

[L1] The relative algebraic closure consists of the elements algebraic over the base field ([[def-relative-algebraic-closure]]).

[L2] Every complex number has a unique form $a+bi$, with $i^2=-1$ ([[thm-complex-numbers-form-a-field]]).

## Verification

**Proof technique:** direct.

1.1 The nonzero real polynomial $(t-a)^2+b^2$ vanishes at $z$, because $(z-a)^2+b^2=(bi)^2+b^2=0$. [given, L2, algebra]

2.1 Thus every $z\in\mathbb C$ is algebraic over $\mathbb R$, so [L1] identifies the relative algebraic closure with all of $\mathbb C$. [step 1.1, L1] ∎

---
id: cex-four-dividing-n-forces-a-nonprimitive-two-square-representation
kind: counterexample
title: "$68=8^2+2^2$ is representable but has no primitive two-square representation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sum-of-two-squares-representation, thm-primitive-sum-of-two-squares-characterisation]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, Chapter E, Example E.II.7(d)"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement refuted

Every integer representable as a sum of two squares has a primitive two-square representation. The integer $68$ is a counterexample.

## Facts & Assumptions

**Given:** The integer $68$.

[F1] A two-square representation is primitive when its coordinate gcd is $1$ ([[def-sum-of-two-squares-representation]]).

[L1] A positive integer $n$ has a primitive two-square representation if and only if $v_2(n)\le1$ and no prime $q\equiv3\pmod4$ divides $n$ ([[thm-primitive-sum-of-two-squares-characterisation]]).

## Counterexample

**Proof technique:** direct.

1.1 Directly, $68=8^2+2^2$, but $\gcd(8,2)=2$, so the displayed representation is not primitive. [F1, algebra]

1.2 In any equality $4k=x^2+y^2$, square residues modulo $4$ force both $x$ and $y$ even. Thus no representation of a multiple of four can be primitive. [F1, algebra]

2.1 Since $v_2(68)=2$, [L1] gives the same conclusion: $68$ has no primitive representation despite step 1.1. [step 1.1, step 1.2, L1, algebra] ∎

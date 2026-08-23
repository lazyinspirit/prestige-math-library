---
id: cex-an-odd-three-mod-four-valuation-obstructs-two-squares
kind: counterexample
title: "$539=7^2\\cdot11$ is not a sum of two squares"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sum-of-two-squares-representation, lem-three-mod-four-prime-dividing-two-square-sum, thm-sum-of-two-squares-characterisation]
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
    - title: "P. Hackman, Elementary Number Theory, Chapter E, Example E.II.3(b)"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement refuted

Every positive integer is a sum of two integer squares. The integer $539$ is a counterexample.

## Facts & Assumptions

**Given:** The integer $539=7^2\cdot11$.

[F1] A representation of a nonnegative integer $n$ as a sum of two squares is an ordered pair $(x,y)\in\mathbb Z^2$ such that $n=x^2+y^2$ ([[def-sum-of-two-squares-representation]]).

[L1] If $q\equiv3\pmod4$ is prime and $q\mid x^2+y^2$, then $q\mid x$ and $q\mid y$ ([[lem-three-mod-four-prime-dividing-two-square-sum]]).

[L2] A positive integer $n$ is a sum of two squares if and only if every prime $q\equiv3\pmod4$ occurs to an even exponent in its canonical prime factorisation ([[thm-sum-of-two-squares-characterisation]]).

## Counterexample

**Proof technique:** direct.

1.1 The factorisation $539=7^2\cdot11$ contains the prime $11\equiv3\pmod4$ to exponent one. [algebra]

2.1 If $539=x^2+y^2$, [L1] would give $11\mid x,y$ and hence $11^2\mid539$, contrary to step 1.1. Thus no representation in the sense of [F1] exists. [step 1.1, F1, L1, assume-contra, algebra, discharge-contradiction]

3.1 Equivalently, step 1.1 violates the even-exponent condition in [L2]. [step 1.1, L2] ∎

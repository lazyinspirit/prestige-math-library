---
id: ex-squarefree-sums-of-two-squares
kind: example
title: "Squarefree sums of two squares up to $30$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-sum-of-two-squares-representation, def-squarefree-positive-integer, cor-squarefree-sum-of-two-squares-characterisation]
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
    - title: "P. Hackman, Elementary Number Theory, Chapter E, Theorems E.II.2 and E.II.4"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Example

Among the squarefree positive integers at most $30$, those representable as sums of two squares are

$$1,2,5,10,13,17,26,29.$$

Every displayed representation below is primitive.

## Facts & Assumptions

**Given:** Positive integers at most $30$.

[F1] A two-square representation is primitive when its coordinate gcd is $1$ ([[def-sum-of-two-squares-representation]]).

[F2] A positive integer $n$ is squarefree if no square of a prime divides $n$ ([[def-squarefree-positive-integer]]).

[L1] A squarefree positive integer is a sum of two squares if and only if none of its odd prime factors is congruent to $3$ modulo $4$; every such representation is primitive ([[cor-squarefree-sum-of-two-squares-characterisation]]).

## Verification

**Proof technique:** direct.

1.1 Trial division gives the squarefree positive integers at most $30$ as $1,2,3,5,6,7,10,11,13,14,15,17,19,21,22,23,26,29,30$. [F2, algebra]

2.1 Applying [L1] removes exactly those having an odd prime factor congruent to $3$ modulo $4$, leaving $1,2,5,10,13,17,26,29$. [step 1.1, L1, algebra]

3.1 The complete witness list is $1=1^2+0^2$, $2=1^2+1^2$, $5=1^2+2^2$, $10=1^2+3^2$, $13=2^2+3^2$, $17=1^2+4^2$, $26=1^2+5^2$, and $29=2^2+5^2$. Each coordinate gcd is one, as [F1] and [L1] require. [step 2.1, F1, L1, algebra] ∎

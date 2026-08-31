---
id: cor-average-order-of-divisor-counting-function
kind: corollary
title: "The average order of tau is log n"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-summatory-function-and-average-order,
       thm-divisor-counting-summatory-estimate,
       lem-summatory-logarithm-asymptotic]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Karl-Dieter Crisman, Number Theory: In Context and Interactive"
      url: "https://math.gordon.edu/ntic/nticoneside.pdf"
    - title: "Tom Sanders, Topics in Analytic Number Theory, Chapter 1"
      url: "https://people.maths.ox.ac.uk/~sanders/tant/notes.pdf"
pipeline_run: null
---

## Statement

The arithmetic function $n\mapsto\log n$ is an average order of $\tau$.

## Facts & Assumptions

**Given:** A real $x\ge1$.

## Proof

**Proof technique:** direct.

1.1 By [[thm-divisor-counting-summatory-estimate]] and [[lem-summatory-logarithm-asymptotic]], $$\sum_{n\le x}\tau(n)=x\log x+(2\gamma-1)x+O(\sqrt x),\qquad \sum_{n\le x}\log n=x\log x-x+O(\log x).$$ [given]

2.1 The two sums differ by $2\gamma x+O(\sqrt x)$, while the comparison sum is $x\log x+O(x)$ and is therefore eventually positive. Hence $$\frac{\sum_{n\le x}\tau(n)}{\sum_{n\le x}\log n}=1+O\!\left(\frac1{\log x}\right)\to1.$$ By [[def-summatory-function-and-average-order]], this is exactly the statement that $\log n$ is an average order of $\tau$. [step 1.1, given, algebra] ∎

---
id: cor-average-order-of-euler-totient
kind: corollary
title: "The average order of Euler's totient is 6n over pi squared"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-summatory-function-and-average-order,
       thm-euler-totient-summatory-estimate]
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
pipeline_run: null
---

## Statement

The arithmetic function $n\mapsto6n/\pi^2$ is an average order of $\varphi$.

## Facts & Assumptions

**Given:** A real $x\ge1$ and $N:=\lfloor x\rfloor$.

## Proof

**Proof technique:** direct.

1.1 The comparison sum satisfies $$\sum_{n\le x}\frac{6n}{\pi^2}=\frac{6}{\pi^2}\sum_{n=1}^{N}n=\frac{3}{\pi^2}N(N+1)=\frac{3}{\pi^2}x^2+O(x).$$ [given, algebra]

2.1 By [[thm-euler-totient-summatory-estimate]], $\sum_{n\le x}\varphi(n)=3x^2/\pi^2+O(x\log x)$. Comparing with step 1.1 shows that the two summatory functions are asymptotic, with the comparison sum eventually positive. Hence [[def-summatory-function-and-average-order]] says that $6n/\pi^2$ is an average order of $\varphi$. [step 1.1, given, algebra] ∎

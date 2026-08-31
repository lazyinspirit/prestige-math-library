---
id: cor-asymptotic-density-of-coprime-pairs
kind: corollary
title: "The proportion of pairs in {1,...,n}^2 that are coprime tends to 6 over pi squared"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-coprime-pair-counting-asymptotic]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-08-31
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

For positive integers $n$, the proportion of pairs in $\{1,\ldots,n\}^2$ that
are coprime tends to $6/\pi^2$.

## Facts & Assumptions

**Given:** A positive integer $n$.

## Proof

**Proof technique:** direct.

1.1 By [[thm-coprime-pair-counting-asymptotic]], the number of coprime pairs in $\{1,\ldots,n\}^2$ is $$\frac{6}{\pi^2}n^2+O(n\log n).$$ [given]

2.1 Dividing by the total number $n^2$ of ordered pairs gives $$\frac{\#\{(a,b)\in\{1,\ldots,n\}^2:\gcd(a,b)=1\}}{n^2}=\frac{6}{\pi^2}+O\!\left(\frac{\log n}{n}\right),$$ and the error term tends to $0$. [step 1.1, given, algebra] ∎

---
id: cor-von-mangoldt-mobius-inversion-formula
kind: corollary
title: "Möbius inversion gives $\\Lambda=\\mu*\\log$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-classical-mobius-inversion, thm-von-mangoldt-divisor-sum-identity]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, An Introduction to Analytic Number Theory, Definition 3.9"
      url: "https://kskedlaya.org/ant/chapter-3.html"
    - title: "Tom Sanders, Topics in Analytic Number Theory, Chapter 1"
      url: "https://people.maths.ox.ac.uk/~sanders/tant/notes.pdf"
pipeline_run: null
---

## Statement

For every positive integer $n$,

$$
\Lambda(n)=\sum_{\substack{d\mid n\\d>0}} \mu(d)\log(n/d).
$$

Equivalently,

$$
\Lambda=\mu*\log.
$$

## Facts & Assumptions

**Given:** A positive integer $n$.

## Proof

**Proof technique:** direct.

1.1 By [[thm-von-mangoldt-divisor-sum-identity]], the arithmetic function $\Lambda$ satisfies $\log n=\sum_{d\mid n}\Lambda(d)$ for every positive integer $n$. [given]

2.1 Apply [[cor-classical-mobius-inversion]] to the functions $f=\Lambda$ and $g=\log$. It gives $\Lambda(n)=\sum_{d\mid n}\mu(d)\log(n/d)$. [step 1.1]

3.1 The right-hand side is exactly the Dirichlet convolution formula for $\mu*\log$, so $\Lambda=\mu*\log$. [step 2.1] ∎

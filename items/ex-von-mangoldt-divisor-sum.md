---
id: ex-von-mangoldt-divisor-sum
kind: example
title: "Checking the von Mangoldt divisor-sum identity on sample integers"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-von-mangoldt-function, thm-von-mangoldt-divisor-sum-identity]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Exercise 2.51"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Example

For $16$ and $30$ the divisor-sum identity reads

$$
\sum_{d\mid16}\Lambda(d)=4\log2=\log16
$$

and

$$
\sum_{d\mid30}\Lambda(d)=\log2+\log3+\log5=\log30.
$$

## Facts & Assumptions

**Given:** The integers $16$ and $30$.

## Verification

**Proof technique:** direct.

1.1 The divisors of $16$ are $1,2,4,8,16$. By [[def-von-mangoldt-function]], only the prime powers $2,4,8,16$ contribute, each with value $\log2$, so $\sum_{d\mid16}\Lambda(d)=4\log2=\log16$. [given, algebra]

1.2 The divisors of $30$ are $1,2,3,5,6,10,15,30$. Again by [[def-von-mangoldt-function]], only $2,3,5$ contribute, so $\sum_{d\mid30}\Lambda(d)=\log2+\log3+\log5=\log30$. [given, algebra]

2.1 These are exactly the values predicted by [[thm-von-mangoldt-divisor-sum-identity]] on one prime power and one squarefree composite with three prime factors. [step 1.1, step 1.2] ∎

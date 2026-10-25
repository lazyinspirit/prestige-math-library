---
id: ex-dirichlet-convolution-table-through-twelve
kind: example
title: "A Dirichlet-convolution table through $12$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-dirichlet-convolution, def-dirichlet-convolution-identity, def-divisor-counting-function]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Section 2.9"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Example

For the constant-one function $\mathbf 1$, the convolution $(\mathbf 1*\mathbf
1)(n)$ counts positive divisors. Through $12$ one gets:

| $n$ | positive divisors of $n$ | $(\mathbf 1*\mathbf 1)(n)$ | $\tau(n)$ |
| --- | --- | ---: | ---: |
| $1$ | $1$ | $1$ | $1$ |
| $2$ | $1,2$ | $2$ | $2$ |
| $3$ | $1,3$ | $2$ | $2$ |
| $4$ | $1,2,4$ | $3$ | $3$ |
| $5$ | $1,5$ | $2$ | $2$ |
| $6$ | $1,2,3,6$ | $4$ | $4$ |
| $7$ | $1,7$ | $2$ | $2$ |
| $8$ | $1,2,4,8$ | $4$ | $4$ |
| $9$ | $1,3,9$ | $3$ | $3$ |
| $10$ | $1,2,5,10$ | $4$ | $4$ |
| $11$ | $1,11$ | $2$ | $2$ |
| $12$ | $1,2,3,4,6,12$ | $6$ | $6$ |

## Facts & Assumptions

**Given:** The constant-one function $\mathbf 1$ and the integers $1\le n\le12$.

## Verification

**Proof technique:** direct.

1.1 By [[def-dirichlet-convolution]], $(\mathbf 1*\mathbf 1)(n)=\sum_{d\mid n} 1$, so each entry in the third column is exactly the number of listed positive divisors of $n$. The rows $n=1,\dots,6$ therefore give the values $1,2,2,3,2,4$. [given, algebra]

1.2 The same divisor-counting rule applied to the listed divisors for $n=7,\dots,12$ gives the remaining values $2,4,3,4,2,6$. By [[def-divisor-counting-function]], these are also the corresponding $\tau(n)$ values. [given, algebra]

2.1 Thus every row of the table displays $(\mathbf 1*\mathbf 1)(n)=\tau(n)$ on the range $1\le n\le12$. [step 1.1, step 1.2] ∎

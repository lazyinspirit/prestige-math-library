---
id: ex-affine-dimension-formula
kind: example
title: "The affine dimension formula on a plane curve domain"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-polynomial-ring-over-a-field-is-a-pid]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §§18, 21"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.116: Dimension of finite type algebras over fields, reprise"
      url: "https://stacks.math.columbia.edu/tag/07NB"
pipeline_run: null
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-03-height-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---


## Example

Let
$$ A=k[x,y]/(y-x^2). $$
Then $A\cong k[x]$ is a one-dimensional affine domain. For the prime ideals $(0)$ and $\mathfrak m=(\bar x,\bar y)$, the affine dimension formula reads
$$ \operatorname{ht}(\mathfrak p)+\dim(A/\mathfrak p)=1. $$

## Facts & Assumptions

**Given:** A field $k$, the domain $A=k[x,y]/(y-x^2)$, and the primes $(0)$ and $\mathfrak m=(\bar x,\bar y)$.

[L1] Under $A\cong k[x]$, the ring is a PID: nonzero prime ideals are maximal, while $(0)$ is prime ([[cor-polynomial-ring-over-a-field-is-a-pid]]).

[L2] The evaluation quotient $A/(\bar x,\bar y)\cong k$ is a field, while $A/(0)\cong k[x]$.

## Verification

**Proof technique:** direct computation.

1.1 Substituting $y=x^2$ gives $A\cong k[x]$. By [L1], any nonzero prime of this PID is maximal, and the chain $(0)\subsetneq(x)$ shows that its dimension is exactly one. The zero prime has height zero and quotient $A$ of dimension one. [L1, given, algebra]

2.1 By [L2], $A/\mathfrak m\cong k$ has dimension zero. The chain $(0)\subsetneq\mathfrak m$ and [L1] give $\operatorname{ht}(\mathfrak m)=1$. Thus $\operatorname{ht}(\mathfrak m)+\dim(A/\mathfrak m)=1+0=1$; at $(0)$ the corresponding sum is $0+1=1$. [L1, L2, step 1.1]

3.1 Both displayed instances hold by direct computation in $k[x]$, without invoking the general affine dimension formula. [step 1.1, step 2.1] ∎

---
id: ex-relative-height-in-a-quotient
kind: example
title: "Relative height in a quotient of k[x,y,z]"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [cor-dimension-of-a-finite-polynomial-ring-over-a-field, cor-height-plus-quotient-dimension-affine-domain, lem-height-in-quotient-is-relative-chain-length]
justified_by: []
aliases: []
landmark: false
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
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §§18, 21"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.116: Dimension of finite type algebras over fields, reprise"
      url: "https://stacks.math.columbia.edu/tag/07NB"
pipeline_run: null
---


## Example

Let $A=k[x,y,z]$, let $\mathfrak p=(x)$, and let $\mathfrak q=(x,y)$. Then in $A/\mathfrak p\cong k[y,z]$ the prime $\mathfrak q/\mathfrak p$ has height $1$.

## Facts & Assumptions

**Given:** A field $k$, the polynomial ring $A=k[x,y,z]$, and the primes $\mathfrak p=(x)\subset\mathfrak q=(x,y)$.

[L1] Height in a quotient is the relative chain length between the two primes upstairs ([[lem-height-in-quotient-is-relative-chain-length]]).

[L2] The affine-domain dimension formula gives heights in polynomial rings over a field ([[cor-height-plus-quotient-dimension-affine-domain]], [[cor-dimension-of-a-finite-polynomial-ring-over-a-field]]).

## Verification

**Proof technique:** direct computation.

1.1 The only strict prime chain from $\mathfrak p$ to $\mathfrak q$ is $(x)\subsetneq(x,y)$, so [L1] gives $\operatorname{ht}(\mathfrak q/\mathfrak p)=1$. [L1, given]

2.1 By [L2], $A$ has dimension $3$, $A/\mathfrak q\cong k[z]$ has dimension $1$, and $A/\mathfrak p\cong k[y,z]$ has dimension $2$. Thus $\operatorname{ht}(\mathfrak q)=2$ and $\operatorname{ht}(\mathfrak p)=1$, so the same relative height is $1$. [L2, step 1.1]

3.1 So the quotient-chain computation and the affine-dimension computation agree. [step 1.1, step 2.1] ∎

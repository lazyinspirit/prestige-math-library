---
id: ex-relative-height-in-a-quotient
kind: example
title: "Relative height in a quotient of k[x,y,z]"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-height-in-quotient-is-relative-chain-length]
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

Let $A=k[x,y,z]$, let $\mathfrak p=(x)$, and let $\mathfrak q=(x,y)$. Then in $A/\mathfrak p\cong k[y,z]$ the prime $\mathfrak q/\mathfrak p$ has height $1$.

## Facts & Assumptions

**Given:** A field $k$, the polynomial ring $A=k[x,y,z]$, and the primes $\mathfrak p=(x)\subset\mathfrak q=(x,y)$.

[L1] Height in a quotient is the relative chain length between the two primes upstairs ([[lem-height-in-quotient-is-relative-chain-length]]).

[L2] In the quotient $A/\mathfrak p\cong k[y,z]$, the prime $\mathfrak q/\mathfrak p$ is the principal ideal $(y)$; a prime strictly below $(y)$ must be zero by cancellation in the polynomial domain.

## Verification

**Proof technique:** direct computation.

1.1 In $k[y,z]$, let $Q\subsetneq(y)$ be prime. If $Q$ contained a nonzero polynomial $f$, write $f=y^r g$ with $r\ge1$ and $y\nmid g$. Primality would give $y\in Q$ or $g\in Q$; the latter is impossible because $g\notin(y)$, while the former contradicts $Q\subsetneq(y)$. Hence $Q=(0)$. By [L1], the only strict chain from $\mathfrak p$ to $\mathfrak q$ is $(x)\subsetneq(x,y)$ and $\operatorname{ht}(\mathfrak q/\mathfrak p)=1$. [L1, L2, given, algebra]

2.1 The quotient correspondence identifies the chain from step 1.1 with $(0)\subsetneq(y)$ in $A/\mathfrak p$, confirming its length is one. [L1, step 1.1]

3.1 Therefore the relative height in the stated quotient is one. [step 1.1, step 2.1] ∎

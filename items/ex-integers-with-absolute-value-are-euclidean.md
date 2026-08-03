---
id: ex-integers-with-absolute-value-are-euclidean
kind: example
title: 'The integers are a Euclidean domain with Euclidean function $\delta(b)=|b|$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-euclidean-domain, def-zero-divisor-and-integral-domain, thm-int-comm-ring, lem-int-cancellation, cor-division-algorithm-nonzero-divisor, def-int-abs, lem-int-abs-properties, lem-nat-embeds-int]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "Romyar Sharifi, Abstract Algebra"
      url: "https://math.ucla.edu/~sharifi/algebra.pdf"
pipeline_run: null
---

## Example

The integral domain $\mathbb Z$ is a Euclidean domain. A Euclidean function is
$\delta(b)=|b|$, with the nonnegative integer $|b|$ identified with its unique
preimage in $\mathbb N$.

## Facts & Assumptions

**Given:** Integers $a,b\in\mathbb Z$ with $b\ne0$.

[L1] The integers form a commutative ring
([[thm-int-comm-ring]]).

[L2] The canonical embedding $\mathbb N\to\mathbb Z$ is injective, preserves
addition, multiplication and order, and has the nonnegative integers as its
image; in particular it makes $1\ne0$ ([[lem-nat-embeds-int]]).

[L3] The product of two nonzero integers is nonzero
([[lem-int-cancellation]]).

[L4] A commutative ring with $1\ne0$ and no zero divisors is an integral domain
([[def-zero-divisor-and-integral-domain]]).

[L5] For $b\ne0$, there are $q,r\in\mathbb Z$ with $a=qb+r$ and $0\le r<|b|$
([[cor-division-algorithm-nonzero-divisor]]).

[L6] Integer absolute values are nonnegative, vanish exactly at zero, and satisfy $|r|=r$ for $r\ge0$
([[lem-int-abs-properties]], [[def-int-abs]]).

[L7] A Euclidean domain is an integral domain equipped with a natural-valued function satisfying the stated division alternative
([[def-euclidean-domain]]).

## Verification

**Proof technique:** direct.

1.1 By [L1]--[L4], $\mathbb Z$ is an integral domain. [L1, L2, L3, L4]

1.2 For each nonzero integer $c$, let $\delta(c)\in\mathbb N$ be the unique natural number whose image in $\mathbb Z$ is $|c|$; this is defined by [L2] and [L6]. [L2, L6]

1.3 By [L5], choose $q,r\in\mathbb Z$ such that $a=qb+r$ and $0\le r<|b|$. [L5, given]

2.1 If $r=0$, this is the zero-remainder alternative in the Euclidean-domain definition. If $r\ne0$, then $|r|=r$ because $r\ge0$. If $\delta(b)\le\delta(r)$, order preservation in [L2] would give $|b|\le|r|$, contradicting step 1.3; hence $\delta(r)<\delta(b)$. [step 1.2, step 1.3, L2, L6, algebra]

3.1 Thus the integral domain in step 1.1 has the Euclidean function $\delta$ satisfying the required division property, so $\mathbb Z$ is a Euclidean domain. [step 1.1, step 1.2, step 2.1, L7] ∎

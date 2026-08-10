---
id: cor-polynomials-over-an-infinite-domain-are-determined-by-values
kind: corollary
title: 'Over an infinite integral domain, equal polynomial functions come from equal polynomials'
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: direct-corollary
deps: [thm-root-bound-for-polynomials-over-a-domain]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Neil Donaldson, Math 120B Notes, Sections 22-23'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Statement

Let $D$ be an infinite integral domain. If $f,g\in D[x]$ satisfy $f(a)=g(a)$ for every $a\in D$, then $f=g$ as formal polynomials.

## Facts & Assumptions

**Given:** An infinite integral domain $D$ and polynomials $f,g\in D[x]$ with equal values at every element of $D$.

[L1] A nonzero polynomial of degree $n$ over an integral domain has at most $n$ distinct roots ([[thm-root-bound-for-polynomials-over-a-domain]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose for contradiction that $h=f-g$ is nonzero, and let $n=\deg h$; the assumed equality of values makes every element of $D$ a root of $h$. [assume-contra, given]

2.1 Since $D$ is infinite it contains more than $n$ distinct elements, contradicting [L1]; hence $h=0$ and $f=g$. [step 1.1, L1, discharge-contradiction] ∎

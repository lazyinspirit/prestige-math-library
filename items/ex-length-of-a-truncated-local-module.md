---
id: ex-length-of-a-truncated-local-module
kind: example
title: "The module $R/(x^i)$ over $k[x]/(x^n)$ has length $i$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-artinian-truncated-polynomial-ring, cor-length-is-additive-in-short-exact-sequences]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Exercise (19.10)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Section 10.52: Length"
      url: "https://stacks.math.columbia.edu/tag/00IU"
pipeline_run: null
---

## Example

Let $R=k[x]/(x^n)$ with $n\ge1$, and let $1\le i\le n$. Then the $R$-module $R/(x^i)$ has length $i$.

## Facts & Assumptions

**Given:** A field $k$, integers $n\ge1$ and $1\le i\le n$, and the ring $R=k[x]/(x^n)$.

## Verification

**Proof technique:** direct.

1.1 By [[ex-artinian-truncated-polynomial-ring]], every quotient $(x^m)/(x^{m+1})$ with $0\le m<n$ is one-dimensional over $k$. In particular each such quotient has length $1$, and the module $R/(x)\cong k$ also has length $1$. [given, algebra]

2.1 For every $1\le m<i$, the natural projection $R/(x^{m+1})\to R/(x^m)$ has kernel $(x^m)/(x^{m+1})$, so there is a short exact sequence $$ 0\to(x^m)/(x^{m+1})\to R/(x^{m+1})\to R/(x^m)\to0. $$ Starting from the base case $\ell_R(R/(x))=1$ from step 1.1 and applying [[cor-length-is-additive-in-short-exact-sequences]] inductively, one gets $\ell_R(R/(x^{m+1}))=\ell_R(R/(x^m))+1=m+1$ for every $m<i$. [step 1.1, given, induction]

3.1 Taking $m=i-1$ in step 2.1 gives $\ell_R(R/(x^i))=i$. [step 2.1] ∎

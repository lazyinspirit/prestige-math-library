---
id: ex-hilbert-series-of-a-polynomial-ring
kind: example
title: "The polynomial ring and a homogeneous quotient have the expected Hilbert series and Hilbert polynomial"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: []
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Stacks Project, Example 10.58.9"
      url: "https://stacks.math.columbia.edu/tag/00JV"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, §20"
      url: "https://web.mit.edu/18.705/www/12Nts.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-02-height-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Example

Let $k$ be a field and give $k[x,y]$ the standard grading. Then
$$ \operatorname{HS}_{k[x,y]}(t)=\frac{1}{(1-t)^2}, $$
because the degree-$n$ piece has basis
$$ x^n,x^{n-1}y,\ldots,xy^{n-1},y^n $$
and therefore dimension $n+1$.

For the homogeneous quotient
$$ A:=k[x,y]/(y^2), $$
the degree-$0$ piece has dimension $1$ and each degree-$n\ge1$ piece has basis
$x^n,x^{n-1}y$. Hence
$$ \operatorname{HS}_A(t)=1+2t+2t^2+\cdots=\frac{1+t}{1-t}, $$
so the Hilbert polynomial of $A$ is the constant polynomial $2$.

## Facts & Assumptions

**Given:** A field $k$, the standard grading on $k[x,y]$, and the quotient $A=k[x,y]/(y^2)$.

[L1] The geometric-series identity $\sum_{n\ge0}t^n=(1-t)^{-1}$ and its formal derivative give $\sum_{n\ge0}(n+1)t^n=(1-t)^{-2}$.

## Verification

**Proof technique:** direct.


1.1 In $k[x,y]$, the degree-$n$ monomials are exactly $x^{n-i}y^i$ for $0\le i\le n$, so the degree-$n$ piece has dimension $n+1$. Therefore $ \operatorname{HS}_{k[x,y]}(t)=\sum_{n\ge0}(n+1)t^n=\frac{1}{(1-t)^2}. $ [L1, given, algebra]


1.2 In the quotient by $(y^2)$, every monomial containing $y^2$ vanishes. So for $n\ge1$ the degree-$n$ piece is spanned by $x^n$ and $x^{n-1}y$, and these two classes are linearly independent. Hence $ \operatorname{HS}_A(t)=1+\sum_{n\ge1}2t^n=\frac{1+t}{1-t}. $ [given, algebra]


2.1 The eventual coefficient sequence of $\operatorname{HS}_A(t)$ is constant equal to $2$, so its Hilbert polynomial is $2$. [step 1.2]


3.1 Thus both the polynomial ring and this homogeneous quotient realize the expected Hilbert series and Hilbert polynomial. [step 1.1, step 1.2, step 2.1] ∎

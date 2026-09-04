---
id: ex-hilbert-series-of-a-polynomial-ring
kind: example
title: "The polynomial ring and a homogeneous quotient have the expected Hilbert series and Hilbert polynomial"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-hilbert-serre-theorem]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Stacks Project, Example 10.58.9"
      url: "https://stacks.math.columbia.edu/tag/00JV"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, §20"
      url: "https://web.mit.edu/18.705/www/12Nts.pdf"
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

**Given:** A field $k$, the standard grading on $k[x,y]$, and the quotient
$A=k[x,y]/(y^2)$.

[L1] Finite graded modules over standard graded algebras have rational Hilbert
series and eventual polynomial growth ([[thm-hilbert-serre-theorem]]).

## Verification

**Proof technique:** direct.


1.1 In $k[x,y]$, the degree-$n$ monomials are exactly $x^{n-i}y^i$ for $0\le i\le n$, so the degree-$n$ piece has dimension $n+1$. Therefore $ \operatorname{HS}_{k[x,y]}(t)=\sum_{n\ge0}(n+1)t^n=\frac{1}{(1-t)^2}. $ [given, algebra]


1.2 In the quotient by $(y^2)$, every monomial containing $y^2$ vanishes. So for $n\ge1$ the degree-$n$ piece is spanned by $x^n$ and $x^{n-1}y$, and these two classes are linearly independent. Hence $ \operatorname{HS}_A(t)=1+\sum_{n\ge1}2t^n=\frac{1+t}{1-t}. $ [given, algebra]


1.3 The eventual coefficient sequence of $\operatorname{HS}_A(t)$ is constant equal to $2$, so the Hilbert polynomial is $2$; this matches the general rationality promised by [L1]. [L1]


2.1 Thus both the polynomial ring and this homogeneous quotient realize the expected Hilbert series and Hilbert polynomial. [algebra] ∎

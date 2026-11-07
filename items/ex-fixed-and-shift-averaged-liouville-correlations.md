---
id: ex-fixed-and-shift-averaged-liouville-correlations
kind: example
title: "Fixed-shift and shift-averaged correlation conventions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: ai-generated
  proof: ai-generated
deps:
  - def-fixed-shift-liouville-correlation-average
  - def-averaged-shift-liouville-correlation
  - def-liouville-function
justified_by: []
aliases: []
generation:
  role: example
verification:
  precheck: pass
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Terence Tao, Correlations of multiplicative functions, slides 9–13"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2024/03/correlations-jan-5.pdf"
    - title: "Kaisa Matomäki, Maksym Radziwiłł, and Terence Tao, An averaged form of Chowla's conjecture, Theorem 1.1"
      url: "https://arxiv.org/pdf/1503.05121v3"
---

## Example

Let $\lambda(n)=(-1)^{\Omega(n)}$, where $\Omega(n)$ counts prime factors
with multiplicity and $\Omega(1)=0$. At $X=4$, the fixed-shift average for
$(h_1,h_2)=(0,1)$ is
$$
\frac14\sum_{n=1}^4\lambda(n)\lambda(n+1)=-\frac12,
$$
whereas the absolute shift average for $k=2$ and $H=2$ is
$$
\frac1{2\cdot4}\sum_{h=1}^2\left|\sum_{n=1}^4\lambda(n)\lambda(n+h)\right|=\frac14.
$$
The first quantity keeps one chosen shift pair and its sign; the second
averages absolute values over $h=1,2$. This is a finite convention example,
not an asymptotic assertion.

## Example references

[[def-liouville-function|Liouville function and prime-factor convention]]

[[def-fixed-shift-liouville-correlation-average|fixed-shift normalization]]

[[def-averaged-shift-liouville-correlation|shift-averaged normalization]]

[Tao, Liouville values and Chowla correlation convention, slides 9–13](https://terrytao.wordpress.com/wp-content/uploads/2024/03/correlations-jan-5.pdf)

## Facts & Assumptions

**Given:** The Liouville function and the fixed- and shift-averaging conventions stated above.

[F1] [[def-liouville-function]]: $\lambda(n)=(-1)^{\Omega(n)}$ and $\lambda(1)=1$.

[F2] [[def-fixed-shift-liouville-correlation-average]]: a fixed-shift correlation is a signed sum divided by $X$.

[F3] [[def-averaged-shift-liouville-correlation]]: the shift average takes absolute values before averaging over $h_2,\ldots,h_k$.

## Verification

1.1 The factorizations $1=1$, $2=2$, $3=3$, $4=2^2$, $5=5$, and $6=2\cdot3$ give $\lambda(1)=1$, $\lambda(2)=\lambda(3)=\lambda(5)=-1$, and $\lambda(4)=\lambda(6)=1$ by [F1]. [given, F1, algebra]

2.1 For the fixed shift $h_2=1$, the four products are $-1,+1,-1,-1$; their sum is $-2$, so [F2] gives $C_{2,(0,1)}(4)=-2/4=-1/2$. [given, F2, step 1.1, algebra]

3.1 For $h_2=2$, the four products are $-1,-1,+1,+1$, whose sum is $0$. Thus [F3] gives the shift average $(|-2|+|0|)/(2\cdot4)=1/4$. [given, F3, step 1.1, step 2.1, algebra]

4.1 The values $-1/2$ and $1/4$ are different, and the calculation is only at $X=4$; it asserts no limiting correlation result. [given, step 2.1, step 3.1, algebra] ∎

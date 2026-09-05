---
id: thm-dirichlet-l-euler-product
kind: theorem
title: "Euler product for Dirichlet L-functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-dirichlet-l-function, cor-completely-multiplicative-dirichlet-series-euler-product]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Definition 3.4"
      url: "https://kskedlaya.org/ant/chap-lfunc.html"
    - title: "Andrew V. Sutherland, Number Theory I, Definition 18.19"
      url: "https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

For every Dirichlet character $\chi$ and every $s$ with $\operatorname{Re}s>1$,

$$L(s,\chi)=\prod_p \frac{1}{1-\chi(p)p^{-s}},$$

and this product is nonzero on $\operatorname{Re}s>1$.

## Facts & Assumptions

**Given:** A Dirichlet character $\chi$ and a complex number $s$ with
$\operatorname{Re}s>1$.

[L1] The Dirichlet $L$-function is $\sum_{n\ge1}\chi(n)n^{-s}$
([[def-dirichlet-l-function]]).

[L2] A completely multiplicative arithmetic function has the geometric Euler
product $\sum_{n\ge1}f(n)n^{-s}=\prod_p(1-f(p)p^{-s})^{-1}$ at points of
absolute convergence
([[cor-completely-multiplicative-dirichlet-series-euler-product]]).

## Proof

**Proof technique:** direct.

1.1 A Dirichlet character is completely multiplicative on $\mathbb Z$, because it is multiplicative on unit classes and both sides vanish when a nonunit factor is present. Hence [L2] applied to $f=\chi$ and [L1] give the Euler product formula on $\operatorname{Re}s>1$. [L1, L2, given, algebra]

2.1 Write $\sigma=\operatorname{Re}s>1$. Then $|\chi(p)p^{-s}|\le p^{-\sigma}$, so $\sum_p|\chi(p)p^{-s}|$ converges. Therefore $\sum_{p,m\ge1}\chi(p)^m/(m p^{ms})$ converges absolutely, and $-\log(1-\chi(p)p^{-s})$ is the absolutely convergent local series. Summing over $p$ shows that the Euler product of step 1.1 is the exponential of a convergent complex series, so it cannot vanish. [step 1.1, algebra] ∎

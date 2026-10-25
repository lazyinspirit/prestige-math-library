---
id: prop-p-power-roots-of-unity-in-characteristic-p
kind: proposition
title: "In characteristic $p$ the only $p^{k}$-th root of unity is $1$, and $t^{p^{k}}-1=(t-1)^{p^{k}}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-roots-of-unity-in-a-field, thm-binomial-theorem-over-a-commutative-ring, lem-prime-divides-intermediate-binomial-coefficients, thm-characteristic-of-a-field-is-zero-or-prime, def-ring-characteristic, def-polynomial-ring-over-a-commutative-ring, def-divides-in-z]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), Section 1"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
    - title: "P. L. Clark, Field Theory (course notes/monograph), Chapter 9, Section 1"
      url: "https://web.archive.org/web/2023/http://alpha.math.uga.edu/~pete/FieldTheory.pdf"
pipeline_run: null
---

## Statement

Let $K$ be a field of characteristic $p>0$ ([[def-ring-characteristic]]; $p$ is
prime by [[thm-characteristic-of-a-field-is-zero-or-prime]]) and let $k\ge1$.
Then in $K[t]$ ([[def-polynomial-ring-over-a-commutative-ring]])

$$t^{p^{k}}-1=(t-1)^{p^{k}},$$

and consequently $\mu_{p^{k}}(K)=\{1\}$ ([[def-roots-of-unity-in-a-field]]).

More generally, if $k\ge0$ and $m\ge1$ with $p\nmid m$
([[def-divides-in-z]]), and if $n:=p^{k}m$, then

$$\mu_n(K)=\mu_m(K).$$

## Facts & Assumptions

**Given:** A field $K$ of characteristic $p>0$, so that $p\cdot1_K=0_K$ and hence $j\cdot c=(j\cdot1_K)c=0$ for every $c\in K[t]$ and every integer $j$ divisible by $p$; and an integer $k\ge1$.

[L1] For a commutative ring $R$, all $x,y\in R$ and $n\in\mathbb N$, $(x+y)^{n}=\sum_{j=0}^{n}\binom nj x^{j}y^{n-j}$, the natural-number coefficients acting by repeated addition ([[thm-binomial-theorem-over-a-commutative-ring]]).

[L2] If $p$ is prime and $0<j<p$, then $p\mid\binom pj$ ([[lem-prime-divides-intermediate-binomial-coefficients]]).

[L3] $\mu_n(K)=\{x\in K:x^{n}=1\}$ ([[def-roots-of-unity-in-a-field]]).

## Proof

**Proof technique:** direct.

1.1 For every $u\in K[t]$ one has $(u-1)^{p}=u^{p}-1$: by [L1] applied in the commutative ring $K[t]$, $(u+(-1))^{p}=\sum_{j=0}^{p}\binom pj u^{j}(-1)^{p-j}$; for $0<j<p$ the coefficient $\binom pj$ is a multiple of $p$ by [L2], so that term vanishes by the hypothesis on $K$; the surviving terms are $u^{p}$ and $(-1)^{p}$, and $(-1)^{p}=-1$ for odd $p$ while for $p=2$ one has $1=-1$ in $K$, so $(-1)^{p}=-1$ in either case. [L1, L2, given]

2.1 Hence $(t-1)^{p^{k}}=t^{p^{k}}-1$ for every $k\ge1$, by induction on $k$: at $k=1$ this is step 1.1 with $u=t$; and if it holds at $k$, then $(t-1)^{p^{k+1}}=\bigl((t-1)^{p^{k}}\bigr)^{p}=\bigl(t^{p^{k}}-1\bigr)^{p}=t^{p^{k+1}}-1$, the last equality being step 1.1 with $u=t^{p^{k}}$. [step 1.1, algebra]

3.1 Therefore $\mu_{p^{k}}(K)=\{1\}$: an $x\in K$ with $x^{p^{k}}=1$ is a root of $t^{p^{k}}-1$, so $(x-1)^{p^{k}}=0$ by step 2.1, and a field has no nonzero element with a vanishing power, so $x=1$; and $1^{p^{k}}=1$. [step 2.1, L3]

4.1 Let $k\ge0$ and $m\ge1$ with $p\nmid m$, and put $n=p^km$. If $x^{n}=1$ then $(x^{m})^{p^{k}}=x^{n}=1$, so $x^{m}\in\mu_{p^{k}}(K)$, which is $\{1\}$ by step 3.1 when $k\ge1$ and is $\{1\}$ trivially when $k=0$; either way $x^{m}=1$. Conversely $x^{m}=1$ gives $x^{n}=(x^{m})^{p^{k}}=1$. Hence $\mu_n(K)=\mu_m(K)$. [step 3.1, L3, algebra] ∎

## Remarks

- **This is why every later hypothesis reads "the characteristic does not divide $n$".** Nothing is lost by it: the $p$-part of $n$ contributes no roots of unity at all in characteristic $p$, so a statement about $\mu_n$ there is already a statement about $\mu_m$ for the prime-to-$p$ part $m$. The hypothesis excludes a degenerate case rather than a genuine one.

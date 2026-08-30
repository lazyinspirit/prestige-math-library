---
id: thm-gamma-meromorphic-continuation
kind: theorem
title: "Meromorphic continuation of Gamma"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-gamma-factorial-values,
       thm-gamma-functional-equation]
justified_by: []
forward_refs: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 6 §2"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
    - title: "M. Weber, Complex Analysis, §3.7"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Statement

Gamma extends to a meromorphic function on $\mathbb C$ with simple poles at the
nonpositive integers, and

$$\operatorname{Res}(\Gamma,-n)=\frac{(-1)^n}{n!}\qquad(n=0,1,2,\dots).$$

More generally, for every integer $m\ge0$ and every
$z\notin\{0,-1,\dots,-m\}$,

$$\Gamma(z)=\frac{\Gamma(z+m+1)}{z(z+1)\cdots(z+m)}.$$

## Facts & Assumptions

**Given:** The holomorphic Gamma function on $\operatorname{Re}z>0$.

[L1] The functional equation $\Gamma(z+1)=z\Gamma(z)$ holds on the right half-plane ([[thm-gamma-functional-equation]]).

[L2] $\Gamma(1)=1$ and $\Gamma(n+1)=n!$ for integers $n\ge0$ ([[cor-gamma-factorial-values]]).

## Proof

**Proof technique:** direct.

1.1 For each integer $m\ge0$, define $$G_m(z):=\frac{\Gamma(z+m+1)}{z(z+1)\cdots(z+m)}$$ on the half-plane $\operatorname{Re}z>-m-1$ with the nonpositive integers $0,-1,\dots,-m$ removed. By repeated use of [L1], $G_m(z)=\Gamma(z)$ whenever $\operatorname{Re}z>0$. [given, L1, construct]

2.1 The functions $G_m$ and $G_{m+1}$ agree on their common domain because both equal $\Gamma(z)$ on the nonempty open half-plane $\operatorname{Re}z>0$. Hence the $G_m$ glue to a meromorphic continuation of Gamma to $\mathbb C$, and step 1.1 is exactly the displayed continuation formula on the domain of $G_m$. The denominator in step 1.1 shows that the only possible poles are the nonpositive integers, and each is simple. [step 1.1, L1, algebra]

3.1 Near $z=-n$, take $m=n$. Then $$\Gamma(z)=\frac{\Gamma(z+n+1)} {z(z+1)\cdots(z+n-1)(z+n)}.$$ Using [L2], the numerator tends to $\Gamma(1)=1$ and the product excluding $z+n$ tends to $(-n)(-n+1)\cdots(-1)=(-1)^n n!$. Therefore $$\operatorname{Res}(\Gamma,-n)= \frac{1}{(-1)^n n!}=\frac{(-1)^n}{n!}.$$ [step 2.1, L2, algebra] ∎

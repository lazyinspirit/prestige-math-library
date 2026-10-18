---
id: thm-gamma-meromorphic-continuation
kind: theorem
title: "Meromorphic continuation of Gamma"
status: published
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
  audited: 2026-08-30
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

2.1 On the common domain of $G_m$ and $G_{m+1}$, put $w=z+m+1$. Then $\operatorname{Re}w>0$, so [L1] gives $\Gamma(w+1)=w\Gamma(w)$, and $w\ne0$. Thus $$G_{m+1}(z)=\frac{\Gamma(z+m+2)}{z(z+1)\cdots(z+m)(z+m+1)}=G_m(z).$$ Each quotient also defines a meromorphic function on the full half-plane $\operatorname{Re}z>-m-1$, with at most simple poles at $0,-1,\dots,-m$; the equality just proved persists there as equality of meromorphic functions, since the quotients have equal values on a punctured neighborhood of every removed point. These half-planes are nested and cover $\mathbb C$, and adjacent compatibility gives compatibility for every pair. Hence the quotients glue to a meromorphic continuation of Gamma, with no possible poles except the nonpositive integers, all at most simple. [step 1.1, L1, algebra]

2.2 For $z$ off the nonpositive integers, choose $N$ so large that $\operatorname{Re}(z+N+1)>0$. Applying [L1] to $z+N+1$ and cancelling the nonzero factor $z+N+1$ gives $$\Gamma(z+1)=G_N(z+1)=\frac{\Gamma(z+N+1)}{(z+1)\cdots(z+N)}=zG_N(z)=z\Gamma(z).$$ Iteration proves the displayed continuation formula wherever both sides are finite. Near every remaining pole away from $0,-1,\dots,-m$, it is an equality on a punctured neighborhood and therefore an equality of meromorphic functions there as well. [step 2.1, L1, algebra]

3.1 Near $z=-n$, take $m=n$. Then $$\Gamma(z)=\frac{\Gamma(z+n+1)} {z(z+1)\cdots(z+n-1)(z+n)}.$$ Using [L2], the numerator tends to $\Gamma(1)=1$ and the product excluding $z+n$ tends to $(-n)(-n+1)\cdots(-1)=(-1)^n n!$. Therefore $$\operatorname{Res}(\Gamma,-n)= \frac{1}{(-1)^n n!}=\frac{(-1)^n}{n!}.$$ [step 2.1, L2, algebra] ∎

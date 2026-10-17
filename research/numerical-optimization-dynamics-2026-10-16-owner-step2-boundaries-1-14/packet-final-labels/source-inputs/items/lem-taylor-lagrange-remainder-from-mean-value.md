---
id: lem-taylor-lagrange-remainder-from-mean-value
kind: lemma
title: Taylor's Lagrange remainder follows from repeated Rolle steps
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 7
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-mean-value-theorem-on-closed-interval, def-continuity-and-derivative-on-real-interval, lem-derivative-algebra-and-chain-rules]
sources:
  references:
    - title: "Rump, Verification methods: Rigorous results using floating-point arithmetic, §11.4"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
    - title: "Michael C. Colding, MIT 18.100B Real Analysis, Lecture 16"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec16.pdf"
---

## Statement

Let $n\ge0$, let $f$ have continuous derivatives through order $n+1$ on an
open interval containing the closed interval between $c$ and $x$, and define
$P_n(t)=\sum_{j=0}^n f^{(j)}(c)(t-c)^j/j!$. If $x\ne c$, there is a point
$\xi$ strictly between $c$ and $x$ such that
$$
f(x)-P_n(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-c)^{n+1}.
$$
For $x=c$, the remainder is zero.

## Facts & Assumptions

**Given:** $n\ge0$, points $c,x$ in an open interval on which $f$ is
$C^{n+1}$ as defined in
[[def-continuity-and-derivative-on-real-interval]], the power rule in
[[lem-derivative-algebra-and-chain-rules]], and the closed-interval mean value
theorem [[lem-mean-value-theorem-on-closed-interval]].

[L1] [[lem-mean-value-theorem-on-closed-interval]]: a continuous function on
$[u,v]$ differentiable on $(u,v)$ has a point $w\in(u,v)$ with
$g(v)-g(u)=g'(w)(v-u)$.

[L2] [[lem-derivative-algebra-and-chain-rules]]: the chain rule holds and
$t^m$ has derivative $mt^{m-1}$ for each integer $m\ge1$, hence
$(t-c)^m$ has derivative $m(t-c)^{m-1}$.

## Proof

1.1 Fix $x\ne c$ and set $A=(f(x)-P_n(x))/(x-c)^{n+1}$ and $g(t)=f(t)-P_n(t)-A(t-c)^{n+1}$ on the interval between $c$ and $x$. Then $g(c)=g(x)=0$ and $g^{(j)}(c)=0$ for each $1\le j\le n$, because the Taylor polynomial matches those derivatives at $c$ by [L2] and the last term has a zero of order $n+1$. [given, L2, construct, algebra]

2.1 By [L1] applied to $g$ on the interval with endpoints $c,x$, there is a point $z_1$ strictly between them with $g'(z_1)=0$. If $n\ge1$, also $g'(c)=0$, so [L1] applied to $g'$ between $c$ and $z_1$ gives $z_2$ between them with $g''(z_2)=0$. Inductively, for each $j\le n$ the zeros $g^{(j)}(c)=0$ and $g^{(j)}(z_j)=0$ give a point $z_{j+1}$ between them with $g^{(j+1)}(z_{j+1})=0$. The last point is the required $\xi$; when $n=0$, take $\xi=z_1$. [step 1.1, L1, induction]

3.1 Since $P_n^{(n+1)}=0$ and the $(n+1)$st derivative of $A(t-c)^{n+1}$ is $A(n+1)!$, the equation $g^{(n+1)}(\xi)=0$ gives $A=f^{(n+1)}(\xi)/(n+1)!$ by [L2]. Substituting the definition of $A$ proves the formula. At $x=c$, $P_n(c)=f(c)$ directly. [step 1.1, step 2.1, L2, algebra] ∎


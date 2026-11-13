---
id: lem-author-10a0d5e0c110-strict-parameter-budgets
title: Strict numerical budgets for the two-stage PSD amplification
kind: lemma
domain: mathematics
status: published
origin: pipeline
deps:
  - prop-expander-prereq-ordered-angle-inequalities
  - prop-expander-prereq-geometric-growth-budget
  - math:thm-natural-logarithm-laws
dependency_roles:
  prop-expander-prereq-ordered-angle-inequalities: mathematical-premise
  prop-expander-prereq-geometric-growth-budget: mathematical-premise
  math:thm-natural-logarithm-laws: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
---

## Statement

Let $0<a\le1/5$, $-1<c_-\le0\le c_+$, $s=1+c_-$, $w=c_+-c_->0$, $B=1+c_++a$, $T=1+4c_+-3c_-=s+4w$, and $L_0=\log(B/(2a))$. Suppose $32aTL_0/s^2<1$. Put $\delta=s/(2w)$, $q=1+\delta$, and $K=\lceil L_0/\log q\rceil$. Then $a/s<1/32$, $a<1/32$, $q^K\ge B/(2a)$, and
$K\arcsin(8a/s)<\pi/8$,
$\sum_{j=K}^{\infty}(\pi/2)4B/(s q^j)\le4\pi a(s+2w)/s^2<\pi/8$.

## Facts & Assumptions

[F1] The principal inverse sine and the bounds $\arcsin v\le\pi v/2$ for $0\le v\le1$ and $\log(1+v)\ge2v/(2+v)$ for $v\ge0$ are supplied by [[prop-expander-prereq-ordered-angle-inequalities]]. The logarithmic bound is strict when $v>0$.

[F2] The ceiling $\lceil x\rceil$ is the least integer at least $x$. For $q>1$, $b>0$ and an integer $k\ge0$, $\sum_{j=k}^{\infty}bq^{-j}=bq^{-k}q/(q-1)$ ([[prop-expander-prereq-geometric-growth-budget]]).

[F3] The natural logarithm is defined on the positive reals, is strictly increasing, satisfies $\log1=0$, and obeys $\log(xy)=\log x+\log y$ for $x,y>0$ ([[math:thm-natural-logarithm-laws]]).

## Proof

**Given:** The data and hypotheses of the Statement.

**Goal:** Establish the two parameter bounds, the lower bound on $q^K$, and both strict angle budgets in the Statement.

1.1 Since $B\ge1+a$ and $a\le1/5$, $B/(2a)\ge3$. Applying the strict logarithmic bound of [F1] at $v=2$ gives $\log3>1$, and [F3] gives $L_0\ge\log3>1$. Also $0<s\le1$, $w>0$, and $T=s+4w>s$. Hence $32a/s<32aTL_0/s^2<1$, so $a/s<1/32$ and $a<1/32$. In particular $0<8a/s<1/4$. [given, F1, F3, algebra]

2.1 We have $\delta>0$, $q>1$, and $\log q>0$ by [F3]. Put $x=L_0/\log q>0$. By [F2], $K=\lceil x\rceil$ is a positive integer and $K\ge x$. Applying the product law in [F3] repeatedly to the $K$ factors of $q^K$ gives $\log(q^K)=K\log q\ge L_0=\log(B/(2a))$. Strict logarithmic monotonicity therefore gives $q^K\ge B/(2a)$. [F2, F3, step 1.1, algebra]

3.1 By [F1] at $v=\delta$, $\log q\ge2\delta/(2+\delta)$. If $0<x\le1$, the least-integer characterization gives $K=1$, so $32aK/s<1$ by step 1.1. If $x>1$, minimality of $K$ implies $K-1<x$, hence $K<x+1\le2x$. Therefore $K\le2L_0/\log q\le(2+\delta)L_0/\delta=TL_0/s$, and the stated strict hypothesis again gives $32aK/s<1$. Since $0<8a/s<1/4$, the inverse-sine estimate of [F1] applies and yields $K\arcsin(8a/s)\le4\pi aK/s<\pi/8$. [given, F1, F2, step 1.1, step 2.1, algebra]

4.1 Apply the geometric-series identity in [F2] with $b=2\pi B/s>0$ and $k=K\ge1$. It gives $\sum_{j=K}^{\infty}(\pi/2)4B/(s q^j)=2\pi Bq/(s\delta q^K)\le4\pi a q/(s\delta)=4\pi a(s+2w)/s^2$, using $q-1=\delta$ and step 2.1. Since $w>0$ and $L_0>1$, $s+2w<T<TL_0$. Thus the last expression is strictly less than $4\pi aTL_0/s^2<\pi/8$. Together with steps 1.1, 2.1 and 3.1 this proves every stated conclusion. [given, F2, step 1.1, step 2.1, step 3.1, algebra] ∎

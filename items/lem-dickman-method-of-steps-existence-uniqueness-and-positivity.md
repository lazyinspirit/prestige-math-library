---
id: lem-dickman-method-of-steps-existence-uniqueness-and-positivity
kind: lemma
title: "Method-of-steps construction and basic properties of the Dickman function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-dickman-de-brujin-function
  - thm-induction-principle
  - thm-continuous-implies-integrable
  - thm-newton-leibniz-with-interior-derivative
  - thm-heine-borel-characterisation-r
  - thm-extreme-value-r
justified_by: []
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Adolf Hildebrand and Gérald Tenenbaum, Integers without large prime factors"
      url: "https://numdam.org/item/JTNB_1993__5_2_411_0.pdf"
    - title: "Michal Klazar, Lecture 13: Friable integers. The saddle point method"
      url: "https://kam.mff.cuni.cz/~klazar/ACNT24lec13.pdf"
---

## Statement

There is a unique continuous function $\rho:[0,\infty)\to\mathbb R$ such that $\rho(u)=1$ on $[0,1]$ and, for every integer $m\ge1$ and $u\in[m,m+1]$,

$$\rho(u)=\rho(m)-\int_m^u\frac{\rho(t-1)}{t}\,dt.$$

Extend it by $\rho(u)=0$ for $u<0$. The function is differentiable on $(1,\infty)$ and satisfies $u\rho'(u)+\rho(u-1)=0$ for every $u>1$. Moreover,

$$u\rho(u)=\int_{u-1}^{u}\rho(t)\,dt\quad(u\ge1),\qquad \rho(u)>0\quad(u\ge0).$$

## Statement references

[Hildebrand and Tenenbaum, equations (1.5)–(1.6), Lemma 2.5, printed pp. 415 and 426](https://numdam.org/item/JTNB_1993__5_2_411_0.pdf)

[Klazar, Lecture 13, p. 2](https://kam.mff.cuni.cz/~klazar/ACNT24lec13.pdf)

## Facts & Assumptions

**Given:** The initial value and recursive clauses in the Statement.

[F1] [[def-dickman-de-brujin-function]]: $\rho=1$ on $[0,1]$ and, for each integer $m\ge1$, $\rho(u)=\rho(m)-\int_m^u\rho(t-1)/t\,dt$ on $[m,m+1]$.

[F2] [[thm-induction-principle]]: A property of natural numbers holds for every natural number if it holds at $0$ and is inherited from each natural number to its successor.

[F3] [[thm-continuous-implies-integrable]]: Every continuous real function on a compact interval $[a,b]$ is Riemann integrable there.

[F4] [[thm-newton-leibniz-with-interior-derivative]]: If $G$ is continuous on $[a,b]$, differentiable on $(a,b)$, and its interior derivative has a Riemann-integrable extension $f$ to $[a,b]$, then $\int_a^b f=G(b)-G(a)$.

[F5] [[thm-heine-borel-characterisation-r]]: A subset of $\mathbb R$ is compact exactly when it is closed and bounded.

[F6] [[thm-extreme-value-r]]: A continuous real-valued function on a nonempty compact subset of $\mathbb R$ attains its minimum.

## Proof

**Given:** The initial value and recursive clauses in the Statement.

1.1 The initial values in [F1] define $\rho$ uniquely on $[0,1]$. If it has been defined on $[0,k+1]$, then $t\mapsto\rho(t-1)/t$ is continuous on $[k+1,k+2]$, because $t-1\in[k,k+1]$ and $t\ge1$, and is Riemann integrable by [F3]. The recursive clause in [F1] therefore gives exactly one continuous extension whose value at $k+1$ agrees with the existing one. Induction using [F2] gives compatible restrictions on all $[0,k+1]$; their union is continuous on $[0,\infty)$, and the prescribed zero values define it for $u<0$. [given, F1, F2, F3, construct]

2.1 Any other continuous function satisfying [F1] agrees with $\rho$ on $[0,1]$; inductively, if it agrees through $m$, its recurrence gives the same values on $[m,m+1]$. Therefore it agrees everywhere on $[0,\infty)$, proving uniqueness. [given, F1, F2, step 1.1]

2.2 If $u\in(m,m+1)$ and $h$ is small with $u+h\in[m,m+1]$, [F1] gives $\frac{\rho(u+h)-\rho(u)}h=-\frac1h\int_u^{u+h}\frac{\rho(t-1)}t\,dt$; continuity makes the average tend to $\rho(u-1)/u$, so $\rho'(u)=-\rho(u-1)/u$. At each integer $m\ge2$, the left and right difference quotients have the same limit $-\rho(m-1)/m$ by continuity and agreement of the step definitions, proving the delay equation for every $u>1$. [F1, step 1.1, algebra]

3.1 For $u\ge1$ put $H(u)=u\rho(u)-\int_{u-1}^{u}\rho(t)\,dt$. The integral change under $u\mapsto u+h$ is $\int_u^{u+h}\rho(t)\,dt-\int_{u-1}^{u-1+h}\rho(t)\,dt$, whose averages tend to $\rho(u)$ and $\rho(u-1)$ by continuity; hence $H'(u)=\rho(u)+u\rho'(u)-\rho(u)+\rho(u-1)=0$ at noninteger $u>1$ by step 2.2. On each $[m,m+1]$, $H$ is continuous and its interior derivative is zero, so [F4] gives $H(m+1)=H(m)$. Since $H(1)=0$ and [F2] permits induction, $H(u)=0$ for all $u\ge1$, proving the integral identity. [given, F1, F2, F3, F4, step 2.2, algebra]

4.1 If $\rho(v)\le0$ for some $v\ge0$, then $v>1$. The set $Z=\{t\in[0,v]:\rho(t)\le0\}$ is nonempty and bounded; it is closed because continuity makes its complement open, so [F5] makes $Z$ compact. By [F6], the identity function attains its minimum $u_0$ on $Z$. Since [F1] gives $\rho=1$ on $[0,1]$, $u_0>1$. For $u_0-1\le t<u_0$, minimality gives $\rho(t)>0$; continuity and $\rho(u_0)\le0$ imply $\rho(u_0)=0$. Thus $\rho$ is nonnegative on $[u_0-1,u_0]$ and positive near its midpoint, so its integral there is positive. This contradicts step 3.1, which says the integral equals $u_0\rho(u_0)=0$. Hence $\rho(u)>0$ for every $u\ge0$. [given, F1, F5, F6, step 1.1, step 3.1, algebra] ∎


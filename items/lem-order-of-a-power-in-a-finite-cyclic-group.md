---
id: lem-order-of-a-power-in-a-finite-cyclic-group
kind: lemma
title: "In a cyclic group of order $m$, $g^a$ has order $m/\\gcd(a,m)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-order-in-a-group, lem-order-characterisation, lem-group-power-laws, def-common-divisor-and-gcd, cor-gcd-quotients-coprime, lem-coprime-divides-product]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory, §C.I"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "William Stein, Elementary Number Theory, §2.5"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Statement

Let $G=\langle g\rangle$ be cyclic of finite order $m\ge1$. For every integer $a$,

$$\operatorname{ord}(g^a)=\frac{m}{\gcd(a,m)}.$$

## Facts & Assumptions

**Given:** A generator $g$ of a cyclic group of order $m$ and an integer $a$.

[L1] The order of an element is the least positive exponent giving the identity ([[def-order-in-a-group]]).

[L2] Since $\operatorname{ord}(g)=m$, one has $g^u=1$ exactly when $m\mid u$ ([[lem-order-characterisation]]).

[L3] $(g^a)^t=g^{at}$ for every integer $t$ ([[lem-group-power-laws]]).

[L4] Put $d=\gcd(a,m)$; then $d$ divides both $a$ and $m$ ([[def-common-divisor-and-gcd]]).

[L5] After dividing two integers by their nonzero greatest common divisor, the resulting quotients are coprime ([[cor-gcd-quotients-coprime]]).

[L6] If $\gcd(r,s)=1$ and $r\mid st$, then $r\mid t$ ([[lem-coprime-divides-product]]).

## Proof

**Proof technique:** direct.

1.1 Since $m\ge1$, the common divisor $d$ is nonzero. Write $a=da'$ and $m=dm'$; [L5] gives $\gcd(a',m')=1$. [L4, L5, algebra]

2.1 By [L2] and [L3], $(g^a)^t=1$ is equivalent to $m\mid at$, hence to $m'\mid a't$. [L2, L3, step 1.1, algebra]

3.1 By [L6] and $\gcd(a',m')=1$, the condition in step 2.1 is equivalent to $m'\mid t$. [step 2.1, L6]

4.1 Thus the least positive $t$ with $(g^a)^t=1$ is $m'=m/d$, which is the asserted order by [L1]. [step 3.1, L1] ∎

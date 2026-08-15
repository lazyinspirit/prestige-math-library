---
id: cor-carmichael-exponent-theorem
kind: corollary
title: "If $\\gcd(a,n)=1$, then $a^{\\lambda(n)}\\equiv1\\pmod n$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-carmichael-function, thm-unit-criterion-modulo-n, def-exponent-of-a-finite-group]
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
    - title: "Peter Hackman, Elementary Number Theory, §C.V"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

If $n\ge1$ and $\gcd(a,n)=1$, then

$$a^{\lambda(n)}\equiv1\pmod n.$$

## Facts & Assumptions

**Given:** Integers $n\ge1$ and $a$ with $\gcd(a,n)=1$.

[L1] $\lambda(n)$ is the exponent of $(\mathbb Z/n)^\times$ ([[def-carmichael-function]]).

[L2] The class of $a$ is a unit exactly when $\gcd(a,n)=1$ ([[thm-unit-criterion-modulo-n]]).

[L3] Every element of a finite group raised to its exponent is the identity ([[def-exponent-of-a-finite-group]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], the class of $a$ lies in the unit group modulo $n$. [L2]

2.1 By [L1] and [L3], its $\lambda(n)$th power is the identity class, which is the asserted congruence. For $n=1$, both sides are the unique class and $\lambda(1)=1$. [step 1.1, L1, L3] ∎

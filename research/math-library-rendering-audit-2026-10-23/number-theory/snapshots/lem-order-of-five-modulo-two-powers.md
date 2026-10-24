---
id: lem-order-of-five-modulo-two-powers
kind: lemma
title: "For $k\\ge3$, the class of $5$ has order $2^{k-2}$ modulo $2^k$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-order-in-a-group, lem-order-characterisation, lem-group-power-laws, lem-p-adic-valuation-basic, lem-p-adic-valuation-additive, thm-induction-principle, thm-unit-criterion-modulo-n]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
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
    - title: "Peter Hackman, Elementary Number Theory, Theorem C.IV.8"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

For every integer $k\ge3$, the residue class of $5$ has order $2^{k-2}$ in $(\mathbb Z/2^k)^\times$.

## Facts & Assumptions

**Given:** An integer $k\ge3$.

[L1] The order is the least positive exponent giving the identity ([[def-order-in-a-group]]), and an element of order $r$ has $x^t=1$ exactly when $r\mid t$ ([[lem-order-characterisation]]).

[L2] Group powers satisfy $x^{r+s}=x^rx^s$ and $(x^r)^s=x^{rs}$ ([[lem-group-power-laws]]).

[L3] $v_2(a)=j$ means $2^j\mid a$ and $2^{j+1}\nmid a$ ([[lem-p-adic-valuation-basic]]), and valuations add on nonzero products ([[lem-p-adic-valuation-additive]]).

[L4] Mathematical induction holds on $\mathbb N$ ([[thm-induction-principle]]).

[L5] A residue class is a unit exactly when its representative is coprime to the modulus ([[thm-unit-criterion-modulo-n]]).

## Proof

**Proof technique:** induction.

1.1 The odd integer $5$ is coprime to $2^k$, so [L5] puts its class in the unit group. At $j=0$, $5^{2^0}-1=4$, so its $2$-adic valuation is $2$. [base, L3, L5, algebra]

1.2 Assume $v_2(5^{2^j}-1)=j+2$. Since $5^{2^j}\equiv1\pmod4$, the factor $5^{2^j}+1$ is congruent to $2$ modulo $4$ and has valuation $1$. The factorisation $5^{2^{j+1}}-1=(5^{2^j}-1)(5^{2^j}+1)$ and [L3] therefore give valuation $j+3$. [ih, L2, L3]

2.1 By induction, $v_2(5^{2^j}-1)=j+2$ for all $j\ge0$. [step 1.1, step 1.2, L4]

3.1 Step 2.1 with $j=k-2$ gives $5^{2^{k-2}}\equiv1\pmod{2^k}$, while the case $j=k-3$ gives $5^{2^{k-3}}\not\equiv1\pmod{2^k}$. [step 2.1, L3]

4.1 By [L1], the order divides $2^{k-2}$; every proper divisor of this prime power divides $2^{k-3}$, which step 3.1 excludes. Hence the order is $2^{k-2}$. [step 1.1, step 3.1, L1, discharge-induction] ∎

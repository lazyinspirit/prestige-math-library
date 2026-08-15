---
id: lem-order-of-one-plus-pu-modulo-prime-powers
kind: lemma
title: "For odd prime $p$, $p\\nmid u$, and $k\\ge1$, the class of $1+pu$ has order $p^{k-1}$ modulo $p^k$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-unit-group-modulo-n-and-euler-totient, thm-unit-criterion-modulo-n, lem-prime-power-binomial-congruence, lem-group-power-laws, lem-p-adic-valuation-basic, lem-p-adic-valuation-additive, thm-induction-principle, lem-order-characterisation]
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
    - title: "Peter Hackman, Elementary Number Theory, §C.IV"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

Let $p$ be an odd prime and $u\in\mathbb Z$ with $p\nmid u$. For every $k\ge1$, the class of $1+pu$ in $(\mathbb Z/p^k)^\times$ has order $p^{k-1}$.

## Facts & Assumptions

**Given:** An odd prime $p$, an integer $u$ not divisible by $p$, and $k\ge1$.

[L1] The units modulo a positive modulus form a finite group ([[def-unit-group-modulo-n-and-euler-totient]]), and a class is a unit exactly when its representative is coprime to the modulus ([[thm-unit-criterion-modulo-n]]).

[L2] If $p\nmid v$ and $s\ge1$, then $(1+p^sv)^p\equiv1+p^{s+1}v\pmod{p^{s+2}}$ ([[lem-prime-power-binomial-congruence]]).

[L3] Group powers satisfy $(x^r)^s=x^{rs}$ ([[lem-group-power-laws]]).

[L4] $v_p(a)=j$ means $p^j\mid a$ but $p^{j+1}\nmid a$ ([[lem-p-adic-valuation-basic]]), and valuations add on nonzero products ([[lem-p-adic-valuation-additive]]).

[L5] Mathematical induction holds on $\mathbb N$ ([[thm-induction-principle]]).

[L6] If an element has finite order $r$, its $m$th power is the identity exactly when $r\mid m$ ([[lem-order-characterisation]]).

## Proof

**Proof technique:** induction.

1.1 For $j=0$, $(1+pu)^{p^0}-1=pu$ has valuation $1$. [base, given, L4]

1.2 Assume $(1+pu)^{p^j}=1+p^{j+1}v$ with $p\nmid v$. Applying [L2] with $s=j+1$ and using [L3] gives $(1+pu)^{p^{j+1}}=1+p^{j+2}v'$ with $p\nmid v'$. [ih, L2, L3, L4]

1.3 Any common prime divisor of $1+pu$ and $p^k$ would be $p$, but $1+pu\equiv1\pmod p$. Thus $1+pu$ is coprime to $p^k$, so [L1] places its class in $(\mathbb Z/p^k)^\times$. [given, L1, algebra]

2.1 By induction, $v_p((1+pu)^{p^j}-1)=j+1$ for every $j\ge0$. [step 1.1, step 1.2, L5]

3.1 By step 1.3 the order is defined in the finite unit group. Step 2.1 at $j=k-1$ and [L6] show that it divides $p^{k-1}$. If it were a proper divisor of this prime power, it would divide $p^{k-2}$ when $k\ge2$, so [L6] would make the $p^{k-2}$nd power equal to $1$, contradicting step 2.1 at $j=k-2$; for $k=1$ the class is already the identity and has order $1$. [step 1.3, step 2.1, L4, L6, discharge-induction] ∎

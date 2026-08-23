---
id: cor-divisors-of-primitively-two-square-representable-integers
kind: corollary
title: "Divisors greater than one of primitively represented integers are primitively represented"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-primitive-sum-of-two-squares-characterisation, lem-p-adic-valuation-basic]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, Chapter E, Corollary E.II.8(b)"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

If a positive integer $n$ has a primitive two-square representation and $d>1$ divides $n$, then $d$ has a primitive two-square representation.

## Facts & Assumptions

**Given:** A primitively represented positive integer $n$ and a divisor $d>1$ of $n$.

[L1] A positive integer $n$ has a primitive two-square representation if and only if $v_2(n)\le1$ and no prime $q\equiv3\pmod4$ divides $n$ ([[thm-primitive-sum-of-two-squares-characterisation]]).

[L2] For a prime $p$ and a nonzero integer $a$, $p^k\mid a$ if and only if $k\le v_p(a)$ ([[lem-p-adic-valuation-basic]]).

## Proof

**Proof technique:** direct.

1.1 Since $d\mid n$, the divisibility criterion in [L2] gives $v_p(d)\le v_p(n)$ for every prime $p$. Thus $v_2(d)\le1$, and no three-mod-four prime can divide $d$, because none divides $n$ by [L1]. [given, L1, L2]

2.1 The two inherited conditions in step 1.1 satisfy [L1], so $d$ has a primitive two-square representation. [step 1.1, L1] ∎

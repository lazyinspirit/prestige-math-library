---
id: lem-brahmagupta-fibonacci-two-square-identity
kind: lemma
title: "The Brahmagupta–Fibonacci two-square identity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: []
aliases: []
landmark: true
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
    - title: "P. Hackman, Elementary Number Theory, Chapter E, §E.II.1"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "W. Stein, Elementary Number Theory: Primes, Congruences, and Secrets, §5.7"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Statement

For all integers $a,b,c,d$,

$$(a^2+b^2)(c^2+d^2)=(ac-bd)^2+(ad+bc)^2=(ac+bd)^2+(ad-bc)^2.$$

## Facts & Assumptions

**Given:** Integers $a,b,c,d$.

## Proof

**Proof technique:** direct.

1.1 Expanding gives $(ac-bd)^2+(ad+bc)^2=a^2c^2-2abcd+b^2d^2+a^2d^2+2abcd+b^2c^2=(a^2+b^2)(c^2+d^2)$. [given, algebra]

2.1 Likewise $(ac+bd)^2+(ad-bc)^2=a^2c^2+2abcd+b^2d^2+a^2d^2-2abcd+b^2c^2=(a^2+b^2)(c^2+d^2)$. [given, algebra] ∎

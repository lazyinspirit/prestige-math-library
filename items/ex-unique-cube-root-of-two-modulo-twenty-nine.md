---
id: ex-unique-cube-root-of-two-modulo-twenty-nine
kind: example
title: "The unique cube root of $2$ modulo $29$ is $-3$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-unique-kth-root-modulo-prime-for-coprime-exponent]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "N. Mascot, Legendre Symbols and Quadratic Reciprocity, Chapter 3"
      url: "https://www.maths.tcd.ie/~mascotn/teaching/2020/MAU23101/3%20Legendre.pdf"
pipeline_run: null
---

## Example

The congruence $x^3\equiv2\pmod{29}$ has the unique solution class $[-3]_{29}$.

## Facts & Assumptions

**Given:** The prime $29$, exponent $3$, and target $2$.

[L1] If $p$ is prime, $k\ge1$, $p\nmid a$, and $\gcd(k,p-1)=1$, then $x^k\equiv a\pmod p$ has one solution class; if $k\ell\equiv1\pmod{p-1}$, it is $[a^\ell]_p$ ([[cor-unique-kth-root-modulo-prime-for-coprime-exponent]]).

## Verification

**Proof technique:** direct.

1.1 Since $\gcd(3,28)=1$ and $3\cdot19=57\equiv1\pmod{28}$, [L1] says that the unique cube-root class is $[2^{19}]_{29}$. [L1, given, algebra]

2.1 Modulo $29$, $2^8\equiv24$ and $2^{10}\equiv9$, so $2^{19}=2^{10}2^8\cdot2\equiv9\cdot24\cdot2\equiv26\equiv-3$; directly, $(-3)^3=-27\equiv2\pmod{29}$. [step 1.1, algebra] ∎

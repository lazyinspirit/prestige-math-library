---
id: thm-first-supplement-to-quadratic-reciprocity
kind: theorem
title: "First supplement: $(-1/p)=(-1)^{(p-1)/2}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-eulers-criterion-for-legendre-symbol, def-congruence-modulo-an-integer, thm-division-algorithm-in-z, def-legendre-symbol]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "H. Hackman, Elementary Number Theory, Chapter D, Section D.I"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "W. Stein, Elementary Number Theory, Theorem 4.1.7"
      url: "https://wstein.org/ent/ent.pdf"
    - title: "A. Gorodnik, Number Theory, Lecture 9, Theorem 1.6"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture9.pdf"
pipeline_run: null
---

## Statement

For every odd prime $p$,

$$\left(\frac{-1}{p}\right)=(-1)^{(p-1)/2}.$$

Equivalently, $(-1/p)=1$ if and only if $p\equiv1\pmod4$, while $(-1/p)=-1$ if and only if $p\equiv3\pmod4$.

## Facts & Assumptions

**Given:** An odd prime $p$.

[L1] Euler's criterion gives $(a/p)\equiv a^{(p-1)/2}\pmod p$ for every integer $a$ ([[thm-eulers-criterion-for-legendre-symbol]]).

[L2] Division by a positive integer has a unique quotient and remainder in the standard range ([[thm-division-algorithm-in-z]]).

[L3] The congruence $a\equiv b\pmod n$ means that $n$ divides $a-b$ ([[def-congruence-modulo-an-integer]]).

[L4] For an odd prime $p$, $\left(\frac ap\right)=1$ when $p\nmid a$ and $a$ is a quadratic residue modulo $p$, and $\left(\frac ap\right)=-1$ when $p\nmid a$ and $a$ is a quadratic nonresidue modulo $p$ ([[def-legendre-symbol]]).

## Proof

**Proof technique:** direct.

1.1 Substitute $a=-1$ in [L1]. An odd prime never divides $-1$, so [L4] gives $(-1/p)\in\{1,-1\}$, and $(-1)^{(p-1)/2}$ is likewise $1$ or $-1$; two such integers differ by at most $2<p$, so their congruence modulo the odd prime $p$ is equality: $(-1/p)=(-1)^{(p-1)/2}$. [L1, L4, given, algebra]

1.2 By [L2], write $p=4q+r$ with $0\le r<4$. Since $p$ is odd, $r$ is $1$ or $3$. If $r=1$, then $(p-1)/2=2q$ is even; if $r=3$, then $(p-1)/2=2q+1$ is odd. [L2, algebra]

2.1 By [L3], the two remainder cases in step 1.2 are exactly $p\equiv1\pmod4$ and $p\equiv3\pmod4$. Combining their parities with step 1.1 proves both biconditionals. [L3, step 1.1, step 1.2] ∎

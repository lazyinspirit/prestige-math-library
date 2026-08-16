---
id: thm-gauss-quadratic-residue-lemma
kind: theorem
title: "Gauss's quadratic-residue lemma"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-gauss-half-system-permutation, thm-eulers-criterion-for-legendre-symbol, def-monoid-finite-product, thm-integers-modulo-n-basic-algebra, thm-unit-criterion-modulo-n, lem-prime-not-dividing-is-coprime, def-legendre-symbol]
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
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "H. Hackman, Elementary Number Theory, Chapter D, Section D.IV"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "W. Stein, Elementary Number Theory, Lemma 4.3.1"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Statement

Let $p$ be an odd prime and let $p\nmid a$. Let $N(a,p)$ be the number of least positive residues of

$$a,2a,\ldots,\frac{p-1}{2}a$$

modulo $p$ that exceed $p/2$. Then

$$\left(\frac ap\right)=(-1)^{N(a,p)}.$$

## Facts & Assumptions

**Given:** An odd prime $p$, an integer $a$ with $p\nmid a$, and $m=(p-1)/2$.

[L1] There are unique signs $\varepsilon_j\in\{\pm1\}$ and a permutation $r_1,\ldots,r_m$ of $1,\ldots,m$ with $aj\equiv\varepsilon_jr_j\pmod p$ for $1\le j\le m$ ([[lem-gauss-half-system-permutation]]).

[L2] A finite indexed family in a monoid has a recursively defined product ([[def-monoid-finite-product]]).

[L3] A class $[u]_p$ is a unit exactly when $\gcd(u,p)=1$ ([[thm-unit-criterion-modulo-n]]).

[L4] Euler's criterion gives $(a/p)\equiv a^{(p-1)/2}\pmod p$ ([[thm-eulers-criterion-for-legendre-symbol]]).

[L5] Multiplication on $\mathbb Z/p$ is associative and commutative with identity ([[thm-integers-modulo-n-basic-algebra]]).

[L6] If $p$ is prime and $p\nmid a$, then $\gcd(a,p)=1$ ([[lem-prime-not-dividing-is-coprime]]).

[L7] For an odd prime $p$, $\left(\frac ap\right)=1$ when $p\nmid a$ and $a$ is a quadratic residue modulo $p$, and $\left(\frac ap\right)=-1$ when $p\nmid a$ and $a$ is a quadratic nonresidue modulo $p$ ([[def-legendre-symbol]]).

## Proof

**Proof technique:** direct.

1.1 Use [L1] to write $aj\equiv\varepsilon_jr_j\pmod p$ for $1\le j\le m$. A sign is negative exactly when the least positive residue of $aj$ exceeds $p/2$, so exactly $N(a,p)$ of the signs are negative. [L1, given]

2.1 Multiply the $m$ congruences using [L2] and [L5]. Since the $r_j$ permute $1,\ldots,m$, this gives $a^m m!\equiv(-1)^{N(a,p)}m!\pmod p$. [L2, L5, step 1.1, algebra]

3.1 Every factor $j$ satisfies $1\le j\le m<p$, so $p\nmid j$ and [L6] gives $\gcd(j,p)=1$; then [L3] makes each $[j]_p$ a unit, so their product $[m!]_p$ is a unit and can be cancelled from step 2.1. Hence $a^m\equiv(-1)^{N(a,p)}\pmod p$. [L3, L5, L6, step 2.1]

4.1 By [L4], $(a/p)\equiv a^m\equiv(-1)^{N(a,p)}\pmod p$. Since $p\nmid a$, [L7] gives $(a/p)\in\{1,-1\}$, and $(-1)^{N(a,p)}$ is likewise $1$ or $-1$; two such integers differing by a multiple of the odd prime $p$ differ by at most $2<p$, so the congruence is equality in $\mathbb Z$. [L4, L7, step 3.1, given, algebra] ∎

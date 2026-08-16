---
id: lem-gauss-half-system-permutation
kind: lemma
title: "Multiplication by $a$ with $p\\nmid a$ permutes an odd prime's signed half-system up to sign"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-standard-representatives-modulo-n, thm-z-mod-p-is-a-field, thm-subset-of-a-finite-set]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "H. Hackman, Elementary Number Theory, Chapter D, Section D.IV"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "W. Stein, Elementary Number Theory, Section 4.3"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Statement

Let $p$ be an odd prime, let $p\nmid a$, and put $m=(p-1)/2$. For each $1\le j\le m$, there are unique $\varepsilon_j\in\{1,-1\}$ and $r_j\in\{1,\ldots,m\}$ such that

$$aj\equiv\varepsilon_jr_j\pmod p.$$

The absolute representatives $r_1,\ldots,r_m$ are a permutation of $1,\ldots,m$.

## Facts & Assumptions

**Given:** An odd prime $p$, an integer $a$ with $p\nmid a$, and $m=(p-1)/2$.

[L1] Every class modulo a positive integer $n$ has exactly one representative $s$ with $0\le s<n$ ([[thm-standard-representatives-modulo-n]]).

[L2] The quotient $\mathbb Z/p$ is a field ([[thm-z-mod-p-is-a-field]]).

[L3] Every injection from a finite set to itself is a bijection ([[thm-subset-of-a-finite-set]]).

## Proof

**Proof technique:** direct.

1.1 For $1\le j\le m$, [L1] gives the standard representative $s_j$ of $aj$. It is nonzero because [L2] permits cancellation of the nonzero classes $[a]_p$ and $[j]_p$. If $s_j\le m$, set $(\varepsilon_j,r_j)=(1,s_j)$; if $s_j>m$, set $(\varepsilon_j,r_j)=(-1,p-s_j)$. Since $p=2m+1$, this gives the stated unique signed representative with $1\le r_j\le m$. [L1, L2, given]

2.1 If $r_j=r_k$, then $aj\equiv ak$ or $aj\equiv-ak\pmod p$. Cancelling $[a]_p$ by [L2] gives $j\equiv k$ or $j\equiv-k\pmod p$. In the first case $|j-k|<p$ forces $j=k$; in the second, $2\le j+k\le p-1$, so $p\nmid(j+k)$, a contradiction. Thus $j\mapsto r_j$ is injective. [L2, step 1.1]

3.1 The map $j\mapsto r_j$ is an injection from the finite set $\{1,\ldots,m\}$ to itself, so [L3] makes it a bijection. Therefore $r_1,\ldots,r_m$ is a permutation of the half-system. [L3, step 2.1] ∎

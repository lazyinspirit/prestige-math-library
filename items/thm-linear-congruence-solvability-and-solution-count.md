---
id: thm-linear-congruence-solvability-and-solution-count
kind: theorem
title: "For $n\\ge1$, $ax\\equiv b\\pmod n$ is solvable exactly when $\\gcd(a,n)\\mid b$, and then has exactly $\\gcd(a,n)$ solution classes modulo $n$"
status: published
origin: session
deps: [lem-linear-congruence-reduction-by-the-gcd, thm-bezout-identity, lem-coprime-criterion, thm-standard-representatives-modulo-n, def-finite-cardinality, lem-divisibility-basic, def-common-divisor-and-gcd]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Mathematics LibreTexts, Linear Congruences"
      url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/02%3A_Congruences/2.02%3A_Linear_Congruences"
pipeline_run: null
---

## Statement

Let $a,b\in\mathbb Z$ and $n\ge1$, and put $d:=\gcd(a,n)$. The congruence

$$ax\equiv b\pmod n$$

has an integer solution if and only if $d\mid b$. When it is solvable, it has
exactly $d$ solution classes in $\mathbb Z/n$. More explicitly, if
$a=da'$, $n=dn'$, $b=db'$ and $x_0$ solves
$a'x_0\equiv b'\pmod{n'}$, the solutions modulo $n$ are

$$[x_0+jn']_n\qquad(0\le j<d).$$

## Facts & Assumptions

**Given:** Integers $a,b$, a positive integer $n$, and $d:=\gcd(a,n)$.

[L1] The integer $d$ divides both $a$ and $n$, and every common divisor of $a,n$ divides each integer linear combination of them ([[def-common-divisor-and-gcd]], [[lem-divisibility-basic]]).

[L2] If $d\mid b$, the original congruence is equivalent to $a'x\equiv b'\pmod{n'}$, where $a=da'$, $n=dn'$, $b=db'$, $n'>0$, and $a',n'$ are coprime ([[lem-linear-congruence-reduction-by-the-gcd]]).

[L3] Coprime integers $u,v$ admit integers $s,t$ with $su+tv=1$ ([[lem-coprime-criterion]], [[thm-bezout-identity]]).

[L4] Every class modulo a positive integer $c$ has a unique representative $r$ with $0\le r<c$, and the quotient has cardinality $c$ ([[thm-standard-representatives-modulo-n]], [[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 If $x$ solves the congruence, then $n\mid ax-b$, so $ax-b=nq$ for some $q$ and $b=ax-nq$. Since $d\mid a$ and $d\mid n$, it follows that $d\mid b$. [L1]

1.2 Conversely suppose $d\mid b$ and use the notation of [L2]. Choose $u,v$ with $ua'+vn'=1$ by [L3]. Then $x_0:=ub'$ satisfies $a'x_0-b'=b'(ua'-1)=-b'vn'$, so it solves the reduced congruence and hence the original one. [L2, L3]

1.3 By [L4], every integer $q$ has a unique residue $j$ with $0\le j<d$ modulo $d$. Thus every integer congruent to $x_0$ modulo $n'$ is congruent modulo $dn'=n$ to exactly one $x_0+jn'$ with $0\le j<d$. [L4]

2.1 Every solution $x$ of the reduced congruence is congruent to $x_0$ modulo $n'$. Indeed, $n'\mid a'(x-x_0)$; multiplying $ua'+vn'=1$ by $x-x_0$ shows that $n'$ divides $x-x_0$. Conversely every $x\equiv x_0\pmod{n'}$ solves the reduced congruence. [step 1.2, L2, L3]

2.2 If $0\le i,j<d$ and $[x_0+in']_n=[x_0+jn']_n$, then $dn'\mid(i-j)n'$, so cancellation gives $d\mid i-j$; uniqueness of the standard representatives modulo $d$ yields $i=j$. Hence the displayed $d$ classes are distinct. [step 1.3, L4]

3.1 Steps 1.1 and 1.2 prove the solvability criterion. When it holds, steps 2.1, 1.3 and 2.2 show that the displayed list is exhaustive and contains exactly $d$ distinct solution classes. [step 1.1, step 1.2, step 2.1, step 1.3, step 2.2] ∎

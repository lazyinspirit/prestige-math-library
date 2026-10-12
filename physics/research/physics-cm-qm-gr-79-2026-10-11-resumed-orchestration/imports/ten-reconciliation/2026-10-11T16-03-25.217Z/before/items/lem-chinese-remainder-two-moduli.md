---
id: lem-chinese-remainder-two-moduli
kind: lemma
title: "For coprime positive $m,n$, every pair of residue classes modulo $m$ and $n$ has a unique simultaneous class modulo $mn$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-coprime-criterion, def-congruence-modulo-an-integer, def-integers-modulo-n, def-common-divisor-and-gcd, cor-gcd-quotients-coprime, lem-divisibility-basic, lem-int-cancellation]
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
    - title: "K. Conrad, The Chinese Remainder Theorem"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/crt.pdf"
    - title: "MIT, Chinese Remainder Theorem notes"
      url: "https://math.mit.edu/~roed/courses/magic/CRT.pdf"
pipeline_run: null
---

## Statement

Let $m,n$ be positive integers, $a,b\in\mathbb Z$, and
$d:=\gcd(m,n)$. The simultaneous system

$$x\equiv a\pmod m,\qquad x\equiv b\pmod n$$

is solvable if and only if $d\mid(a-b)$. If it is solvable, all its solutions
form one congruence class modulo $mn/d$.

In particular, when $m,n$ are coprime, every pair of classes
$[a]_m,[b]_n$ determines a unique simultaneous class $[x]_{mn}$. This includes
$m=1$ or $n=1$.

## Facts & Assumptions

**Given:** Positive integers $m,n$, integers $a,b$, and $d:=\gcd(m,n)$.

[L1] The gcd $d$ is a positive common divisor of $m,n$ ([[def-common-divisor-and-gcd]]).

[L2] Writing $m=dm'$ and $n=dn'$, the positive integers $m',n'$ are coprime ([[cor-gcd-quotients-coprime]], [[lem-int-cancellation]]).

[L3] Coprime integers $u,v$ admit integers $s,t$ with $su+tv=1$ ([[lem-coprime-criterion]]).

[L4] Congruence means divisibility of a difference, and divisors are preserved by integer linear combinations ([[def-congruence-modulo-an-integer]], [[lem-divisibility-basic]]).

[L5] The quotient $\mathbb Z/c$ consists of the congruence classes modulo $c$ ([[def-integers-modulo-n]]).

## Proof

**Proof technique:** direct.

1.1 If $x$ solves both congruences, then $m\mid(x-a)$ and $n\mid(x-b)$. Since $d$ divides $m,n$, it divides both differences and therefore their difference $b-a$; equivalently $d\mid(a-b)$. [L1, L4]

1.2 Conversely suppose $d\mid(a-b)$ and write $a-b=dc$, $m=dm'$, $n=dn'$ as in [L2]. Choose $u,v$ with $um'+vn'=1$ by [L3], put $t:=-uc$, and set $x:=a+mt$. Then $x\equiv a\pmod m$, while $x-b=(a-b)+d m't=d(c-m'uc)=dcn'v$, so $x\equiv b\pmod n$. [L2, L3, L4]

1.3 If $x,y$ are two solutions, then $m\mid(x-y)$, so $x-y=dm'q$ for some integer $q$. Also $n=dn'\mid(x-y)$, hence cancellation of $d$ gives $n'\mid m'q$; multiplying a Bézout identity for $m',n'$ by $q$ shows $n'\mid q$. Thus $dm'n'=mn/d$ divides $x-y$. [L2, L3, L4]

1.4 Conversely, if $mn/d=dm'n'$ divides $x-y$, then both $m=dm'$ and $n=dn'$ divide $x-y$, so $x$ and $y$ satisfy exactly the same two residue conditions. Hence, when compatible, the solution set is one class modulo $mn/d$. [L2, L4, L5]

2.1 When $\gcd(m,n)=1$, one has $d=1$ and the compatibility condition is automatic; the modulus $mn/d$ is $mn$, so steps 1.1 through 1.4 give the stated bijection between pairs of residue classes and simultaneous classes. The same proof applies when either modulus is $1$. [step 1.1, step 1.2, step 1.3, step 1.4, L5] ∎

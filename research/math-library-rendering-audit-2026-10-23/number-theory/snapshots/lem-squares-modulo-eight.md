---
id: lem-squares-modulo-eight
kind: lemma
title: "A square is congruent to $0$, $1$ or $4$ modulo $8$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-congruence-modulo-an-integer, cor-division-algorithm-nonzero-divisor, thm-unit-square-criterion-modulo-two-powers, lem-divisibility-basic, def-divides-in-z]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "Evan Dummit, Number Theory (part 9): The Geometry of Numbers, §9.1.3"
      url: "https://dummit.cos.northeastern.edu/docs/numthy_9_geometry_of_numbers.pdf"
    - title: "Karl-Dieter Crisman, Number Theory: In Context and Interactive, §14.2"
      url: "https://math.gordon.edu/ntic/nticoneside.pdf"
pipeline_run: null
---

## Statement

Call an integer **even** when $2$ divides it and **odd** otherwise
([[def-divides-in-z]]). Let $x\in\mathbb Z$. Then $x^2$ is congruent to $0$, to
$1$ or to $4$ modulo $8$ ([[def-congruence-modulo-an-integer]]). More precisely,
if $x$ is odd then $x^2\equiv 1\pmod 8$, and if $x$ is even then
$x^2\equiv 0\pmod 8$ or $x^2\equiv 4\pmod 8$.

Consequently, if $x$ is odd then $x^2\equiv 1\pmod 4$, and if $x$ is even then
$x^2\equiv 0\pmod 4$.

## Facts & Assumptions

**Given:** An integer $x$.

[F1] For $a,b,n\in\mathbb Z$, $a\equiv b\pmod n$ means $n\mid(a-b)$ ([[def-congruence-modulo-an-integer]]).

[F2] For $d,a\in\mathbb Z$, $d\mid a$ means $a=dq$ for some $q\in\mathbb Z$ ([[def-divides-in-z]]).

[L1] For $a,b\in\mathbb Z$ with $b\ne 0$ there is exactly one pair $(q,r)$ of integers with $a=qb+r$ and $0\le r<|b|$; moreover $b\mid a$ holds exactly when $r=0$ ([[cor-division-algorithm-nonzero-divisor]]).

[L2] Let $a$ be odd. For $k\ge 3$, the congruence $x^2\equiv a\pmod{2^k}$ is soluble if and only if $a\equiv 1\pmod 8$ ([[thm-unit-square-criterion-modulo-two-powers]]).

[L3] Divisibility is transitive: $d\mid a$ and $a\mid b$ imply $d\mid b$ ([[lem-divisibility-basic]]).

## Proof

**Proof technique:** cases.

1.1 By [L1] with $b=2$ there is exactly one pair $(q,r)$ with $x=2q+r$ and $0\le r<2$, so $r=0$ or $r=1$; that is, $x=2u$ for an integer $u$, or $x=2u+1$ for an integer $u$, and these are the even and odd cases. [given, L1, algebra]

1.2 In the odd case, $x=2u+1$ gives $x^2=2(2u^2+2u)+1$, so $x^2$ is odd; the congruence $t^2\equiv x^2\pmod{2^3}$ has the solution $t=x$, so [L2] applied with $a=x^2$ and $k=3$ gives $x^2\equiv 1\pmod 8$. [assume-case odd, L2, F1, algebra]

1.3 In the even case, $x=2u$ gives $x^2=4u^2$, and by [L1] with $b=2$ applied to $u$ the integer $u$ is itself either $2v$ or $2v+1$ for an integer $v$. [assume-case even, L1, algebra]

2.1 If $u=2v$ then $x^2=16v^2=8\cdot 2v^2$, so $8\mid x^2-0$ and $x^2\equiv 0\pmod 8$. [step 1.3, assume-case ueven, F1, F2, algebra]

2.2 If $u=2v+1$ then $u^2=2(2v^2+2v)+1$, so $x^2=4u^2=8(2v^2+2v)+4$, whence $8\mid x^2-4$ and $x^2\equiv 4\pmod 8$. [step 1.3, assume-case uodd, F1, F2, algebra]

3.1 Steps 1.2, 2.1 and 2.2 cover every integer $x$, so $x^2$ is congruent to $0$, to $1$ or to $4$ modulo $8$, with $1$ occurring exactly in the odd case. [step 1.2, step 2.1, step 2.2, algebra]

4.1 For the modulo-$4$ consequence: in the odd case $8\mid x^2-1$ and $4\mid 8$, so [L3] gives $4\mid x^2-1$ and $x^2\equiv 1\pmod 4$; in the even case either $8\mid x^2$, whence $4\mid x^2$ by [L3], or $x^2=8w+4=4(2w+1)$ for an integer $w$, whence $4\mid x^2$ directly, so $x^2\equiv 0\pmod 4$ in both. [step 3.1, step 1.2, step 2.1, step 2.2, L3, F1, F2, cases-exhaustive] ∎

## Remarks

**Where the odd case comes from.** The published criterion [[thm-unit-square-criterion-modulo-two-powers]] says that for $k\ge 3$ an odd $a$ is a square modulo $2^k$ exactly when $a\equiv 1\pmod 8$. Reading it at $k=3$ in the direction "soluble implies $a\equiv 1\pmod 8$", with $a=x^2$ and the solution $t=x$ already in hand, is the whole odd case. The elementary route is also short — $x=2u+1$ gives $x^2=4u(u+1)+1$ with $u(u+1)$ even — and the citation is used instead because the criterion is the general statement of which this is the special case.

**Which residues actually occur.** All three do: $0=0^2$, $1=1^2$ and $4=2^2$ realise the residues $0$, $1$ and $4$. So the list cannot be shortened, and the modulo-$8$ classification of squares is exactly this list.

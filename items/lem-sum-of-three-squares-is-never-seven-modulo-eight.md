---
id: lem-sum-of-three-squares-is-never-seven-modulo-eight
kind: lemma
title: "No sum of three integer squares is congruent to $7$ modulo $8$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-squares-modulo-eight, def-congruence-modulo-an-integer, lem-congruence-respects-integer-arithmetic, cor-division-algorithm-nonzero-divisor]
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
    - title: "Karl-Dieter Crisman, Number Theory: In Context and Interactive, §14.2, Fact 14.2.1"
      url: "https://math.gordon.edu/ntic/nticoneside.pdf"
pipeline_run: null
---

## Statement

There are no integers $x,y,z$ with $x^2+y^2+z^2\equiv 7\pmod 8$
([[def-congruence-modulo-an-integer]]). In fact, the residues modulo $8$
attained by sums of three integer squares are exactly $0,1,2,3,4,5,6$.

## Facts & Assumptions

**Given:** Integers $x,y,z$.

[F1] For $a,b,n\in\mathbb Z$, $a\equiv b\pmod n$ means $n\mid(a-b)$ ([[def-congruence-modulo-an-integer]]).

[L1] For every integer $x$: if $x$ is odd then $x^2\equiv 1\pmod 8$, and if $x$ is even then $x^2\equiv 0\pmod 8$ or $x^2\equiv 4\pmod 8$ ([[lem-squares-modulo-eight]]).

[L2] If $a\equiv a'\pmod n$ and $b\equiv b'\pmod n$, then $a+b\equiv a'+b'\pmod n$ ([[lem-congruence-respects-integer-arithmetic]]).

[L3] For $a,b\in\mathbb Z$ with $b\ne 0$ there is exactly one pair $(q,r)$ of integers with $a=qb+r$ and $0\le r<|b|$; moreover $b\mid a$ holds exactly when $r=0$ ([[cor-division-algorithm-nonzero-divisor]]).

## Proof

**Proof technique:** cases.

1.1 By [L3] with $b=2$ each of $x,y,z$ is even or odd; let $t$ be how many of the three are odd, so $t$ is $0$, $1$, $2$ or $3$, and these four values exhaust the possibilities. [given, L3, construct]

1.2 By [L1], each odd coordinate contributes a square congruent to $1$ modulo $8$, and each even coordinate contributes a square congruent to $0$ or to $4$ modulo $8$. [L1]

2.1 If $t=3$ then, adding the three contributions by [L2], $x^2+y^2+z^2\equiv 1+1+1=3\pmod 8$. [step 1.1, step 1.2, assume-case three, L2, F1, algebra]

2.2 If $t=2$ then $x^2+y^2+z^2\equiv 1+1+e\pmod 8$ with $e$ equal to $0$ or $4$, so the sum is congruent to $2$ or to $6$. [step 1.1, step 1.2, assume-case two, L2, F1, algebra]

2.3 If $t=1$ then $x^2+y^2+z^2\equiv 1+e_1+e_2\pmod 8$ with each $e_i$ equal to $0$ or $4$, giving $1$, $5$, $5$ or $9$; since $9\equiv 1\pmod 8$, the sum is congruent to $1$ or to $5$. [step 1.1, step 1.2, assume-case one, L2, F1, algebra]

2.4 If $t=0$ then $x^2+y^2+z^2\equiv e_1+e_2+e_3\pmod 8$ with each $e_i$ equal to $0$ or $4$, giving $0$, $4$, $8$ or $12$; since $8\equiv 0$ and $12\equiv 4$ modulo $8$, the sum is congruent to $0$ or to $4$. [step 1.1, step 1.2, assume-case zero, L2, F1, algebra]

3.1 Steps 2.1 to 2.4 cover the four values of $t$ listed in step 1.1 and show that every sum of three squares is congruent to one of $0,1,2,3,4,5,6$, never to $7$, modulo $8$. Conversely, the triples $(0,0,0)$, $(1,0,0)$, $(1,1,0)$, $(1,1,1)$, $(2,0,0)$, $(2,1,0)$ and $(2,1,1)$ have sums of squares $0,1,2,3,4,5,6$, respectively. Thus the attained residues are exactly the seven listed classes, and $7$ is not attained. [step 2.1, step 2.2, step 2.3, step 2.4, F1, algebra, cases-exhaustive] ∎

## Remarks

**Why the cases are counted by parity rather than listed by value.** Enumerating the possible triples of residues from $\{0,1,4\}$ would give ten unordered choices; grouping them by how many coordinates are odd gives four, because the odd coordinates contribute a fixed residue and only the even ones branch. The exhaustiveness is then visible from step 1.1 alone.

**Every listed residue is attained.** Taking $(x,y,z)$ to be $(0,0,0)$, $(1,0,0)$, $(1,1,0)$, $(1,1,1)$, $(2,0,0)$, $(2,1,0)$ and $(2,1,1)$ gives sums $0,1,2,3,4,5,6$, so the second sentence of the Statement is an equality of sets and not merely an inclusion.

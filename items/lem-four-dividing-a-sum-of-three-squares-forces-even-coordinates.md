---
id: lem-four-dividing-a-sum-of-three-squares-forces-even-coordinates
kind: lemma
title: "If $4$ divides $x^2+y^2+z^2$ then $x$, $y$ and $z$ are all even"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-squares-modulo-eight, def-congruence-modulo-an-integer, lem-congruence-respects-integer-arithmetic, def-divides-in-z, cor-division-algorithm-nonzero-divisor]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
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

Let $x,y,z\in\mathbb Z$ and suppose $4\mid x^2+y^2+z^2$ ([[def-divides-in-z]]).
Then $x$, $y$ and $z$ are all even.

## Facts & Assumptions

**Given:** Integers $x,y,z$ with $4\mid x^2+y^2+z^2$.

[F1] For $a,b,n\in\mathbb Z$, $a\equiv b\pmod n$ means $n\mid(a-b)$ ([[def-congruence-modulo-an-integer]]).

[F2] For $d,a\in\mathbb Z$, $d\mid a$ means $a=dq$ for some $q\in\mathbb Z$ ([[def-divides-in-z]]).

[L1] For every integer $x$: if $x$ is odd then $x^2\equiv 1\pmod 4$, and if $x$ is even then $x^2\equiv 0\pmod 4$ ([[lem-squares-modulo-eight]]).

[L2] If $a\equiv a'\pmod n$ and $b\equiv b'\pmod n$, then $a+b\equiv a'+b'\pmod n$ and $a-b\equiv a'-b'\pmod n$ ([[lem-congruence-respects-integer-arithmetic]]).

[L3] For $a,b\in\mathbb Z$ with $b\ne 0$ there is exactly one pair $(q,r)$ of integers with $a=qb+r$ and $0\le r<|b|$; moreover $b\mid a$ holds exactly when $r=0$ ([[cor-division-algorithm-nonzero-divisor]]).

## Proof

**Proof technique:** direct.

1.1 By [L3] with $b=2$ each of $x,y,z$ is even or odd; let $t$ be how many of the three are odd, so $t$ is one of $0,1,2,3$. [given, L3, construct]

1.2 By [L1], modulo $4$ each odd coordinate contributes a square congruent to $1$ and each even coordinate contributes a square congruent to $0$. [L1]

2.1 Adding the three contributions by [L2], $x^2+y^2+z^2\equiv t\pmod 4$, since the $t$ odd coordinates each contribute $1$ and the remaining ones contribute $0$. [step 1.1, step 1.2, L2, F1, algebra]

3.1 The hypothesis $4\mid x^2+y^2+z^2$ says $x^2+y^2+z^2\equiv 0\pmod 4$ by [F1] and [F2]; subtracting this from step 2.1 by the difference clause of [L2] gives $0\equiv t\pmod 4$, that is $4\mid t$. [given, step 2.1, L2, F1, F2, algebra]

4.1 Since $0\le t<4$, [L3] applied with $a=t$ and $b=4$ has the unique pair $(q,r)=(0,t)$, and it says $4\mid t$ holds exactly when $r=0$; so step 3.1 forces $t=0$, meaning none of $x,y,z$ is odd, that is $x$, $y$ and $z$ are all even. [step 1.1, step 3.1, L3, algebra] ∎

## Remarks

**The modulus cannot be relaxed to $2$.** Divisibility of $x^2+y^2+z^2$ by $2$ leaves $t=0$ and $t=2$ both possible, and $1^2+1^2+0^2=2$ realises the second, so $2$ dividing the sum does not force the coordinates even. It is the count $t$ being pinned to a single residue modulo $4$ that makes the argument work, and that needs the modulus $4$.

**Where it is used.** This is the halving step of [[prop-three-square-congruence-obstruction]]: it is what licenses passing from a representation of $4^{\sigma(a)}m$ to one of $4^{a}m$.

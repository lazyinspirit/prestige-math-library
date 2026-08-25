---
id: prop-three-square-congruence-obstruction
kind: proposition
title: "Positive integers $4^a m$ with $m\\equiv 7\\pmod 8$ are not sums of three integer squares"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-sum-of-three-squares-is-never-seven-modulo-eight, lem-four-dividing-a-sum-of-three-squares-forces-even-coordinates, thm-induction-principle, def-group-power, lem-units-of-z, lem-int-cancellation, def-congruence-modulo-an-integer, def-divides-in-z]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
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

Let $a\in\mathbb N$ and let $m$ be a positive integer with $m\equiv 7\pmod 8$
([[def-congruence-modulo-an-integer]]). Then there are no integers $x,y,z$ with
$4^am=x^2+y^2+z^2$, where $4^a$ is the natural power of $4$ in the commutative
monoid $(\mathbb Z,\cdot,1)$ ([[def-group-power]], [[lem-units-of-z]]).

## Facts & Assumptions

**Given:** A positive integer $m$ with $m\equiv 7\pmod 8$.

[F1] For $a,b,n\in\mathbb Z$, $a\equiv b\pmod n$ means $n\mid(a-b)$ ([[def-congruence-modulo-an-integer]]).

[F2] For $d,a\in\mathbb Z$, $d\mid a$ means $a=dq$ for some $q\in\mathbb Z$ ([[def-divides-in-z]]).

[L1] There are no integers $x,y,z$ with $x^2+y^2+z^2\equiv 7\pmod 8$ ([[lem-sum-of-three-squares-is-never-seven-modulo-eight]]).

[L2] If $x,y,z\in\mathbb Z$ and $4\mid x^2+y^2+z^2$, then $x$, $y$ and $z$ are all even ([[lem-four-dividing-a-sum-of-three-squares-forces-even-coordinates]]).

[L3] If $x,y\in\mathbb Z$ are nonzero then $xy\ne 0$; consequently, if $xz=yz$ and $z\ne 0$, then $x=y$ ([[lem-int-cancellation]]).

[L4] In a monoid $(M,\cdot,e)$ the natural powers of $g\in M$ satisfy $g^{0}=e$ and $g^{\sigma(n)}=g^{n}\cdot g$ for $n\in\mathbb N$, where $\sigma$ is the successor on $\mathbb N$ ([[def-group-power]]).

[L5] $(\mathbb Z,\cdot,1)$ is a commutative monoid ([[lem-units-of-z]]).

[L6] Let $S\subseteq\mathbb N$. If $0\in S$ and $\sigma(n)\in S$ whenever $n\in S$, then $S=\mathbb N$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction.

1.1 Let $S$ be the set of $a\in\mathbb N$ such that for every positive integer $m$ with $m\equiv 7\pmod 8$ there are no integers $x,y,z$ with $4^am=x^2+y^2+z^2$. [given, construct]

1.2 Base case $0\in S$: by [L4] in the monoid of [L5], $4^{0}=1$, so $4^{0}m=m$ and a representation $m=x^2+y^2+z^2$ would give $x^2+y^2+z^2\equiv 7\pmod 8$ by the hypothesis $m\equiv 7\pmod 8$, which [L1] excludes. [base, L1, L4, L5, F1, algebra]

2.1 Induction step: let $a\in S$, let $m$ be a positive integer with $m\equiv 7\pmod 8$, and suppose integers $x,y,z$ satisfy $4^{\sigma(a)}m=x^2+y^2+z^2$; by [L4] and [L5], $4^{\sigma(a)}=4^{a}\cdot 4$, so $x^2+y^2+z^2=4\cdot(4^am)$ and hence $4\mid x^2+y^2+z^2$ by [F2]. [step 1.1, ih, L4, L5, F2, algebra]

3.1 By [L2] the coordinates $x$, $y$, $z$ are then all even, so $x=2x'$, $y=2y'$ and $z=2z'$ for integers $x',y',z'$. [step 2.1, L2, construct]

4.1 Substituting gives $4\cdot(4^am)=x^2+y^2+z^2=4(x'^2+y'^2+z'^2)$, and cancelling the nonzero factor $4$ by [L3] yields $4^am=x'^2+y'^2+z'^2$, which contradicts $a\in S$ since $m$ is a positive integer congruent to $7$ modulo $8$. [step 2.1, step 3.1, L3, algebra]

5.1 So no such $x,y,z$ exist and $\sigma(a)\in S$; with the base case of step 1.2, [L6] gives $S=\mathbb N$, which is the assertion. [step 1.2, step 4.1, L6, discharge-induction] ∎

## Remarks

**Three descriptions of the same integers.** For a positive $m$, the condition $m\equiv 7\pmod 8$ says $m=8b+7$ for an integer $b$, and $b\ge 0$ because $8b+7>0$; so the integers excluded here are exactly those of the form $4^a(8b+7)$ with $a$ a natural number and $b$ a nonnegative integer, which is how Dummit writes them. Crisman's phrase for the same set, an even power of two times an odd number congruent to seven modulo eight, is a third description: $4^a=2^{2a}$ and every $m\equiv 7\pmod 8$ is odd.

**Only one direction is proved.** The statement says these integers are not sums of three squares. Its converse, that every other nonnegative integer is a sum of three squares, is Legendre's three-square theorem; it is not available from this page's declared prerequisites, and nothing here uses it. In particular the argument above rules out no integer beyond the ones named.

**Why the induction is on the exponent.** The base case is a congruence computation modulo $8$ and nothing more. The step is where the work is: it needs that a sum of three squares divisible by $4$ has all coordinates even, which is [[lem-four-dividing-a-sum-of-three-squares-forces-even-coordinates]], since without it the halved coordinates need not be integers.

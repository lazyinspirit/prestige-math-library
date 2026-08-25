---
id: cor-integers-requiring-four-squares
kind: corollary
title: "Positive integers $4^a m$ with $m\\equiv 7\\pmod 8$ need four nonzero squares"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-three-square-congruence-obstruction, thm-lagrange-four-square-theorem, def-sum-of-four-squares-representation, def-group-power, lem-units-of-z, thm-induction-principle, def-congruence-modulo-an-integer, thm-int-ordered-ring, lem-nat-embeds-int, lem-nat-order-is-membership, lem-nat-discrete, def-natural-numbers]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
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

Let $a\in\mathbb N$, let $m$ be a positive integer with $m\equiv 7\pmod 8$
([[def-congruence-modulo-an-integer]]), and put $n=4^am$, the power being the
natural power in the commutative monoid $(\mathbb Z,\cdot,1)$
([[def-group-power]], [[lem-units-of-z]]). Then $n$ is a sum of four integer
squares, and in every representation $(x_1,x_2,x_3,x_4)\in\mathbb Z^4$ of $n$
([[def-sum-of-four-squares-representation]]) all four coordinates are nonzero.

## Facts & Assumptions

**Given:** A natural number $a$, a positive integer $m$ with $m\equiv 7\pmod 8$, and $n=4^am$.

[F1] A representation of a nonnegative integer $n$ as a sum of four squares is an ordered quadruple $(a,b,c,d)\in\mathbb Z^4$ with $n=a^2+b^2+c^2+d^2$ ([[def-sum-of-four-squares-representation]]).

[L1] Every nonnegative integer is a sum of four integer squares ([[thm-lagrange-four-square-theorem]]).

[L2] For $a\in\mathbb N$ and a positive integer $m$ with $m\equiv 7\pmod 8$, there are no integers $x,y,z$ with $4^am=x^2+y^2+z^2$ ([[prop-three-square-congruence-obstruction]]).

[L3] In a monoid $(M,\cdot,e)$ the natural powers of $g\in M$ satisfy $g^{0}=e$ and $g^{\sigma(n)}=g^{n}\cdot g$ for $n\in\mathbb N$, where $\sigma$ is the successor on $\mathbb N$ ([[def-group-power]]).

[L4] $(\mathbb Z,\cdot,1)$ is a commutative monoid ([[lem-units-of-z]]).

[L5] The order on $\mathbb Z$ is total, $x\le y$ implies $x+z\le y+z$, and $0<x$, $0<y$ imply $0<xy$ ([[thm-int-ordered-ring]]).

[L6] The embedding of $\mathbb N$ into $\mathbb Z$ is injective, preserves order, and has image exactly the nonnegative integers ([[lem-nat-embeds-int]]).

[L7] On $\mathbb N$, the strict order is membership and $0\in n$ whenever $n\ne0$ ([[lem-nat-order-is-membership]]).

[L8] One has $m<n$ exactly when $\sigma(m)\le n$ ([[lem-nat-discrete]]), and $1=\sigma(0)$ ([[def-natural-numbers]]).

[L9] Let $S\subseteq\mathbb N$. If $0\in S$ and $\sigma(n)\in S$ whenever $n\in S$, then $S=\mathbb N$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** contradiction.

1.1 The integers satisfy $0<1$, and every positive integer is at least $1$: the first because the embedded natural number $1$ is nonnegative and differs from the embedded natural number $0$, which is the integer $0$, by injectivity in [L6]; and if $y>0$ then [L6] writes $y$ as the image of a unique natural $t$, with $t\ne0$, so [L7] gives $0\in t$, hence $0<t$, and [L8] turns this into $1=\sigma(0)\le t$, which order preservation in [L6] carries to $1\le y$. [L6, L7, L8]

1.2 Suppose, for contradiction, that some quadruple $(x_1,x_2,x_3,x_4)\in\mathbb Z^4$ satisfies $n=x_1^2+x_2^2+x_3^2+x_4^2$ with $x_j=0$ for at least one index $j$. [assume-contra]

2.1 Let $U=\{a\in\mathbb N:4^a\ge1\}$. Since $4^0=1$ by [L3] in the monoid of [L4], the set $U$ contains $0$. If $a\in U$, then $4^{\sigma(a)}=4^a\cdot4$ by [L3], and both factors are at least $1$: $4^a\ge1$ by the hypothesis $a\in U$, and step 1.1 gives $4\ge1$ because $4$ is a positive integer. Thus both factors are positive, so [L5] gives $4^{\sigma(a)}>0$, and step 1.1 then gives $4^{\sigma(a)}\ge1$. Hence $\sigma(a)\in U$, and [L9] yields $U=\mathbb N$. [step 1.1, L3, L4, L5, L9]

3.1 Since $m$ is positive, step 1.1 gives $m\ge1$; and step 2.1 gives $4^a\ge1$. So both factors in $n=4^am$ are positive, [L5] gives $n>0$, and in particular $n$ is nonnegative. [step 1.1, step 2.1, L5]

4.1 By [L1] applied to the nonnegative integer $n$ of step 3.1, $n$ is a sum of four integer squares, so a representation in the sense of [F1] exists. [step 3.1, L1, F1]

5.1 Under the assumption of step 1.2, deleting the coordinate $x_j$ leaves three integers $y_1,y_2,y_3$, the other coordinates in any order, with $y_1^2+y_2^2+y_3^2=x_1^2+x_2^2+x_3^2+x_4^2-x_j^2=n=4^am$, which [L2] excludes; the assumption therefore fails, so every representation of $n$ has all four coordinates nonzero, and by step 4.1 at least one representation exists. [step 4.1, step 1.2, L2, F1, algebra, discharge-contradiction] ∎

## Remarks

**What the two clauses say together.** Four squares suffice for $n$, by [[thm-lagrange-four-square-theorem]], and three do not, by [[prop-three-square-congruence-obstruction]]; the second clause is the sharper form of the latter, since a representation with a zero coordinate is exactly a representation of $n$ by three squares with a fourth coordinate added. So for these $n$ the number four in Lagrange's theorem cannot be lowered.

**The smallest instances.** Taking $a=0$ and $m=7$ gives $n=7$; taking $a=1$ and $m=7$ gives $n=28$; and taking $a=0$ and $m=15$ gives $n=15$, so the statement is not about $7$ alone.

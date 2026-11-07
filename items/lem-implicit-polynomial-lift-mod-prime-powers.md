---
id: lem-implicit-polynomial-lift-mod-prime-powers
kind: lemma
title: "A simple partial derivative gives a polynomial lift modulo prime powers"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-prime
  - def-divides-in-z
  - def-homogeneous-polynomial-and-homogeneous-ideal
  - def-formal-derivative-of-a-polynomial
  - lem-unit-modulo-prime-powers
sources:
  scraped: []
  references:
    - title: "D. R. Heath-Brown, The density of rational points on curves and surfaces, Lemma 5"
      url: "https://arxiv.org/pdf/math/0405392v1"
---

## Statement

Let $n\ge3$, let $p$ be a prime, and let
$F\in\mathbb Z[x_1,\ldots,x_n]$ be a polynomial, with
$\partial F/\partial x_2$ the termwise formal derivative in the variable
$x_2$. Let
$t=(1,t_2,\ldots,t_n)\in\mathbb Z^n$ satisfy
$F(t)\equiv0\pmod p$ and $p\nmid\partial F/\partial x_2(t)$. Then for each
integer $m\ge1$ there is a polynomial $f_m\in\mathbb Z[Y_3,\ldots,Y_n]$ such
that, for every tuple $y_3,\ldots,y_n$ with $y_j\equiv t_j\pmod p$, the
congruence

$$F(1,z,y_3,\ldots,y_n)\equiv0\pmod{p^m}$$

has exactly one solution class $z\pmod{p^m}$ satisfying $z\equiv t_2\pmod p$,
and that class is $f_m(y_3,\ldots,y_n)\pmod{p^m}$.

## Statement references

[Heath-Brown, Lemma 5 and its induction](https://arxiv.org/pdf/math/0405392v1)

[[def-prime]]

[[def-divides-in-z]]

## Facts & Assumptions

**Given:** $F,p,t$ as in the Statement; congruence modulo $q$ means divisibility
of the difference by $q$.

[F1] [[def-prime]]: $p$ has no positive divisors other than $1$ and $p$.

[F2] [[lem-unit-modulo-prime-powers]]: If $p\nmid a$, then $a$ has a
multiplicative inverse modulo every positive power of $p$.

[F3] [[def-formal-derivative-of-a-polynomial]]: The formal derivative of a
polynomial in one variable over a commutative ring is computed term by term;
viewing $F$ as a polynomial in $x_2$ gives the stated partial derivative.

## Proof

1.1 Put $\mu=\partial F/\partial x_2(t)$, and choose $u\in\mathbb Z$ with
$u\mu\equiv1\pmod p$ by [F2]. Define $f_1(Y_3,\ldots,Y_n)=t_2$. For every
$y_j\equiv t_j\pmod p$, $z=t_2$ solves the congruence modulo $p$; it is the
unique residue class satisfying $z\equiv t_2\pmod p$. [F2, F3, given, choose]

1.2 Suppose $f_m$ has been constructed with the asserted property, and define
the integer polynomial
$$f_{m+1}(Y):=f_m(Y)-uF(1,f_m(Y),Y_3,\ldots,Y_n).$$
For any allowed $y$, write $F_0=F(1,f_m(y),y_3,\ldots,y_n)$; by the induction
hypothesis $p^m\mid F_0$. Also
$\partial F/\partial x_2(1,f_m(y),y_3,\ldots,y_n)\equiv\mu\pmod p$.
Expanding each monomial in the second variable gives
$F(1,f_m(y)-uF_0,y)\equiv F_0-uF_0\mu\equiv0\pmod{p^{m+1}}$,
because the terms quadratic in $uF_0$ are divisible by $p^{2m}$ and
$2m\ge m+1$. Thus $f_{m+1}(y)$ is a solution reducing to $t_2$ modulo $p$.
[step 1.1, F2, F3, algebra]

2.1 If $z$ is any other solution modulo $p^{m+1}$ reducing to $t_2$ modulo
$p$, the induction hypothesis gives $z\equiv f_m(y)\pmod{p^m}$, so write
$z=f_m(y)+\lambda p^m\pmod{p^{m+1}}$ for some $\lambda\pmod p$. Expanding
$F(1,z,y)$ modulo $p^{m+1}$ gives
$F_0+\lambda p^m\mu\equiv0\pmod{p^{m+1}}$. Since $\mu$ is invertible
modulo $p$ by [F2], there is exactly one possible $\lambda\pmod p$, namely the
correction used in step 1.2. Therefore $z\equiv f_{m+1}(y)\pmod{p^{m+1}}$ and
the solution class is unique. [step 1.2, F2, F3, algebra]

3.1 Step 1.1 proves the statement for $m=1$, while steps 1.2 and 2.1 establish
existence and uniqueness at the next power from the preceding power. Induction
proves the claim for every $m\ge1$. [step 1.1, step 1.2, step 2.1, induction] ∎

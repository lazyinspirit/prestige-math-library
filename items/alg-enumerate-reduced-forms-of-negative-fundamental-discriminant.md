---
id: alg-enumerate-reduced-forms-of-negative-fundamental-discriminant
kind: algorithm
title: "Enumerate Reduced Primitive Positive-Definite Forms of Negative Fundamental Discriminant"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-binary-quadratic-form-over-integers
  - def-discriminant-of-binary-quadratic-form
  - def-primitive-binary-quadratic-form
  - def-reduced-positive-definite-binary-quadratic-form
  - def-common-divisor-and-gcd
  - def-int-abs
  - thm-division-algorithm-in-z
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "William Stein, Elementary Number Theory and Elliptic Curves, §§9.3–9.4"
      url: "https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf"
    - title: "Andrew Granville, Binary Quadratic Forms, Chapter 4"
      url: "https://dms.umontreal.ca/~andrew/Courses/Chapter4.pdf"
---

## Definition

An integral binary quadratic form is a polynomial $ax^2+bxy+cy^2$ with
$a,b,c\in\mathbb Z$, written $(a,b,c)$; its discriminant is
$\Delta=b^2-4ac$. It is primitive when
$\gcd(a,b,c):=\gcd(\gcd(a,b),c)=1$, where each pairwise gcd is the
nonnegative greatest common divisor. It is positive definite when its value is
positive at every nonzero real pair $(x,y)$. A positive-definite form $(a,b,c)$
is reduced when $|b|\le a\le c$ and $b\ge0$ whenever $|b|=a$ or $a=c$.

Input a negative fundamental discriminant $D$: either $D$ is squarefree and
$D\equiv1\pmod4$, or $D=4d$ for a squarefree integer $d\equiv2$ or
$3\pmod4$. Here squarefree means that no square of a prime divides the
integer. Put $N=|D|$, set $L=0$ and $U=N+1$, and repeat the following until
$U=L+1$: set $M=\lfloor(L+U)/2\rfloor$; if $3M^2\le N$, replace $L$ by
$M$, and otherwise replace $U$ by $M$. Set $A=L$. Thus
$A=\lfloor\sqrt{N/3}\rfloor$, the largest integer with $3A^2\le N$.

For each integer $a=1,\ldots,A$, in increasing order, and each integer
$b=-a,\ldots,a$, in increasing order, do the following:

1. Skip $b$ unless $b\equiv D\pmod2$.
2. Skip $b$ unless $4a$ divides $b^2-D$. Otherwise set
   $c=(b^2-D)/(4a)$.
3. Retain $(a,b,c)$ exactly when $\gcd(\gcd(a,b),c)=1$, $a\le c$, and
   $b\ge0$ whenever $|b|=a$ or $a=c$.

Output the retained triples in the order generated and their number. The
subsequent correctness theorem identifies this count with the number of
proper-equivalence classes of primitive positive-definite integral binary
quadratic forms of discriminant $D$.

To evaluate $\gcd(u,v)$, start with $(r,s)=(|u|,|v|)$; while $s>0$, replace
$(r,s)$ by $(s,r\bmod s)$, and return $r$ when $s=0$. The remainder is the
least nonnegative integer congruent to $r$ modulo $s$.

## Definition references

[[def-binary-quadratic-form-over-integers]]

[[def-discriminant-of-binary-quadratic-form]]

[[def-primitive-binary-quadratic-form]]

[[def-reduced-positive-definite-binary-quadratic-form]]

[[def-common-divisor-and-gcd]]

[[def-int-abs]]

[[thm-division-algorithm-in-z]]

[William Stein, *Elementary Number Theory and Elliptic Curves*, §§9.3–9.4](https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf)

[Andrew Granville, *Binary Quadratic Forms*, Chapter 4](https://dms.umontreal.ca/~andrew/Courses/Chapter4.pdf)

## Remarks

This is an enumeration of form classes. It does not compute the structure of an
ideal class group, decide whether a specified ideal is principal, calculate an
integral basis, implement Dedekind–Kummer, enumerate Minkowski-bounded ideals,
or duplicate a separate candidate-and-class-covering list.

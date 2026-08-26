---
id: lem-leading-coefficient-is-minimal-in-a-reduced-class
kind: lemma
title: "The leading coefficient of a reduced positive-definite form is minimal in its proper-equivalence class"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-reduced-positive-definite-binary-quadratic-form, def-integer-represented-by-binary-quadratic-form, def-proper-equivalence-of-binary-quadratic-forms]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William Stein, Elementary Number Theory and Elliptic Curves, Theorem 9.3.2"
      url: "https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf"
    - title: "Andrew Granville, Binary Quadratic Forms, Exercise 4.1f(a)"
      url: "https://dms.umontreal.ca/~andrew/Courses/Chapter4.pdf"
pipeline_run: null
---

## Statement

Let $f=(a,b,c)$ be a reduced positive-definite binary quadratic form, and let
$g$ be any form properly equivalent to $f$. Then the leading coefficient of $g$
is at least $a$.

## Facts & Assumptions

**Given:** A reduced positive-definite form $f=(a,b,c)$ and a matrix $M=\begin{pmatrix}p&q\\ r&s\end{pmatrix}\in\mathrm{SL}_2(\mathbb Z)$ such that $g=f\mid M$.

[F1] A reduced positive-definite form satisfies $|b|\le a\le c$ ([[def-reduced-positive-definite-binary-quadratic-form]]).

[F2] Proper equivalence means $g(x,y)=f(px+qy,rx+sy)$ ([[def-proper-equivalence-of-binary-quadratic-forms]]).

[F3] Primitive representation means representation by a pair of coprime integers ([[def-integer-represented-by-binary-quadratic-form]]).

## Proof

**Proof technique:** direct.

1.1 Since $f$ is positive definite, $a=f(1,0)>0$. Also the leading coefficient of $g$ is $g(1,0)=f(p,r)=ap^2+bpr+cr^2$. [F2, given, algebra]

1.2 Because $ps-qr=1$, every common divisor of $p$ and $r$ divides $1$, so $\gcd(p,r)=1$. Thus the integer $f(p,r)$ is primitively represented by $f$. [F2, F3, algebra]

2.1 Using $|b|\le a\le c$ from [F1], we have $f(p,r)\ge ap^2-a|pr|+ar^2=a(p^2-|pr|+r^2)$. [F1, step 1.1, algebra]

3.1 If $r=0$, then $p\ne0$ because $ps-qr=1$, so $p^2-|pr|+r^2=p^2\ge1$. If $r\ne0$, then $p^2-|pr|+r^2=(|p|-|r|)^2+|pr|\ge1$. Hence in all cases $p^2-|pr|+r^2\ge1$. [step 2.1, algebra]

4.1 Combining steps 1.1, 2.1, and 3.1 gives $g(1,0)=f(p,r)\ge a$. So the leading coefficient of $g$ is at least $a$. [step 1.1, step 2.1, step 3.1] ∎

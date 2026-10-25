---
id: thm-proper-equivalence-preserves-representations
kind: theorem
title: "Properly equivalent binary quadratic forms represent the same integers, with primitive representations in bijection"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-proper-equivalence-of-binary-quadratic-forms, def-integer-represented-by-binary-quadratic-form, lem-binary-quadratic-form-substitution-is-a-right-action]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "William Stein, Elementary Number Theory and Elliptic Curves, Proposition 9.2.4"
      url: "https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf"
    - title: "Andrew Granville, Binary Quadratic Forms, Exercise 4.1d"
      url: "https://dms.umontreal.ca/~andrew/Courses/Chapter4.pdf"
pipeline_run: null
---

## Statement

Let $f$ and $g$ be integral binary quadratic forms. If $f$ and $g$ are properly
equivalent, then:

1. $f$ and $g$ represent exactly the same integers.
2. Primitive representations correspond bijectively: for each integer $n$, a
   pair $(x,y)$ with $\gcd(x,y)=1$ satisfies $g(x,y)=n$ if and only if the pair
   $(px+qy,rx+sy)$ has relatively prime coordinates and satisfies
   $f(px+qy,rx+sy)=n$, where $g=f\mid\begin{pmatrix}p&q\\ r&s\end{pmatrix}$.

## Facts & Assumptions

**Given:** Integral binary quadratic forms $f$ and $g$, an integer $n$, and a matrix $M=\begin{pmatrix}p&q\\ r&s\end{pmatrix}\in\mathrm{SL}_2(\mathbb Z)$ with $g=f\mid M$.

[F1] Proper equivalence means $g(x,y)=f(px+qy,rx+sy)$ for all integers $x,y$ ([[def-proper-equivalence-of-binary-quadratic-forms]]).

[F2] The form $h$ represents $n$ when $n=h(u,v)$ for some integers $u,v$, and it primitively represents $n$ when moreover $\gcd(u,v)=1$ ([[def-integer-represented-by-binary-quadratic-form]]).

[L1] Integral substitution defines a right action of $\mathrm{SL}_2(\mathbb Z)$ on integral binary quadratic forms ([[lem-binary-quadratic-form-substitution-is-a-right-action]]).

## Proof

**Proof technique:** direct.

1.1 If $g(x,y)=n$, then $n=f(px+qy,rx+sy)$ by [F1], so every representation of $n$ by $g$ yields a representation of $n$ by $f$. [F1, F2]

2.1 Since $ps-qr=1$, the inverse matrix is $M^{-1}=\begin{pmatrix}s&-q\\ -r&p\end{pmatrix}\in\mathrm{SL}_2(\mathbb Z)$. By [L1], $(f\mid M)\mid M^{-1}=f$, so $f=g\mid M^{-1}$. Applying step 1.1 to $g$ and $M^{-1}$ gives the converse implication. Therefore $f$ and $g$ represent exactly the same integers. [F1, L1, step 1.1, algebra]

3.1 Let $u=px+qy$ and $v=rx+sy$. If $\gcd(x,y)=1$ and an integer $d$ divides both $u$ and $v$, then $d$ divides $su-qv=(ps-qr)x=x$ and $-ru+pv=(ps-qr)y=y$, so $\gcd(u,v)=1$. The same argument with $M^{-1}$ gives the converse, so the correspondence of steps 1.1 and 2.1 restricts to a bijection on primitive representations. [F2, step 2.1, algebra] ∎

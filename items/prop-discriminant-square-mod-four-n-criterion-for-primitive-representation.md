---
id: prop-discriminant-square-mod-four-n-criterion-for-primitive-representation
kind: proposition
title: "A positive integer $n$ is primitively represented by some discriminant $\\Delta$ form exactly when $\\Delta$ is a square modulo $4n$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integer-represented-by-binary-quadratic-form, def-discriminant-of-binary-quadratic-form, def-proper-equivalence-of-binary-quadratic-forms, prop-proper-equivalence-preserves-discriminant-and-primitivity, lem-coprime-criterion, def-congruence-modulo-an-integer]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Andrew Granville, Binary Quadratic Forms, Proposition 4.1"
      url: "https://dms.umontreal.ca/~andrew/Courses/Chapter4.pdf"
pipeline_run: null
---

## Statement

Let $n$ be a positive integer and let $\Delta\in\mathbb{Z}$. Then the following
are equivalent:

1. some integral binary quadratic form of discriminant $\Delta$ primitively
   represents $n$;
2. $\Delta$ is a square modulo $4n$.

## Facts & Assumptions

**Given:** A positive integer $n$ and an integer $\Delta$.

[F1] A form primitively represents $n$ when $n=f(r,s)$ for some integers $r,s$ with $\gcd(r,s)=1$ ([[def-integer-represented-by-binary-quadratic-form]]).

[F2] The discriminant of $(a,b,c)$ is $b^2-4ac$ ([[def-discriminant-of-binary-quadratic-form]]).

[F3] Proper equivalence means substitution by a determinant-one integer matrix, and properly equivalent forms have the same discriminant ([[def-proper-equivalence-of-binary-quadratic-forms]], [[prop-proper-equivalence-preserves-discriminant-and-primitivity]]).

[L1] $\gcd(r,s)=1$ if and only if $ru-st=1$ for some integers $t,u$ ([[lem-coprime-criterion]]).

[L2] $a\equiv b\pmod m$ means that $m$ divides $a-b$ ([[def-congruence-modulo-an-integer]]).

## Proof

**Proof technique:** direct.

1.1 Suppose a form $f=(a,b,c)$ of discriminant $\Delta$ primitively represents $n$, say $n=f(r,s)$ with $\gcd(r,s)=1$. By [L1] choose integers $t,u$ with $ru-st=1$, and put $M=\begin{pmatrix}r&t\\ s&u\end{pmatrix}\in\mathrm{SL}_2(\mathbb Z)$. [F1, L1, given, choose]

1.2 Conversely, suppose $\Delta\equiv b^2\pmod{4n}$ for some integer $b$. Then $4n$ divides $b^2-\Delta$, so $c:=(b^2-\Delta)/(4n)$ is an integer. The form $f=(n,b,c)$ has discriminant $\Delta$, and $f(1,0)=n$ with $\gcd(1,0)=1$, so it primitively represents $n$. [F1, F2, L2, given, construct, algebra]

2.1 The properly equivalent form $g=f\mid M$ has leading coefficient $g(1,0)=f(r,s)=n$, so $g=(n,b',c')$ for some integers $b',c'$. By [F3], $g$ has the same discriminant $\Delta$, hence $\Delta=b'^2-4nc'$, which says exactly that $\Delta\equiv b'^2\pmod{4n}$. [F2, F3, step 1.1, algebra]

3.1 Step 2.1 proves that primitive representation implies the square congruence, and step 1.2 proves the converse. [step 2.1, step 1.2] ∎

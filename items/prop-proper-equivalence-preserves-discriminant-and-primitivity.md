---
id: prop-proper-equivalence-preserves-discriminant-and-primitivity
kind: proposition
title: "Proper equivalence preserves discriminant and primitivity of the form"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-proper-equivalence-of-binary-quadratic-forms, def-discriminant-of-binary-quadratic-form, def-primitive-binary-quadratic-form, lem-binary-quadratic-form-substitution-is-a-right-action]
justified_by: []
aliases: []
landmark: false
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
    - title: "William Stein, Elementary Number Theory and Elliptic Curves, Proposition 9.2.8"
      url: "https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf"
    - title: "Andrew Granville, Binary Quadratic Forms, Exercise 4.1d"
      url: "https://dms.umontreal.ca/~andrew/Courses/Chapter4.pdf"
pipeline_run: null
---

## Statement

Let $f$ and $g$ be properly equivalent integral binary quadratic forms. Then:

1. $f$ and $g$ have the same discriminant.
2. $f$ is primitive if and only if $g$ is primitive.

## Facts & Assumptions

**Given:** Integral binary quadratic forms $f=(a,b,c)$ and $g=(A,B,C)$, and a matrix $M=\begin{pmatrix}p&q\\ r&s\end{pmatrix}\in\mathrm{SL}_2(\mathbb Z)$ with $g=f\mid M$.

[F1] Proper equivalence means $g(x,y)=f(px+qy,rx+sy)$ for a determinant-one integer matrix ([[def-proper-equivalence-of-binary-quadratic-forms]]).

[F2] The discriminant of $(u,v,w)$ is $v^2-4uw$ ([[def-discriminant-of-binary-quadratic-form]]).

[F3] The form $(u,v,w)$ is primitive when the only integers dividing all three coefficients are $1$ and $-1$ ([[def-primitive-binary-quadratic-form]]).

[L1] Integral substitution defines a right action of $\mathrm{SL}_2(\mathbb Z)$ on integral binary quadratic forms ([[lem-binary-quadratic-form-substitution-is-a-right-action]]).

## Proof

**Proof technique:** direct.

1.1 Expanding $g(x,y)=f(px+qy,rx+sy)$ gives $A=ap^2+bpr+cr^2$, $B=2apq+b(ps+qr)+2crs$, and $C=aq^2+bqs+cs^2$. A direct simplification yields $B^2-4AC=(ps-qr)^2(b^2-4ac)=b^2-4ac$, since $ps-qr=1$. Thus $f$ and $g$ have the same discriminant. [F1, F2, algebra]

2.1 Suppose an integer $d$ divides $a$, $b$, and $c$. Then the formulas of step 1.1 show that $d$ also divides $A$, $B$, and $C$. [step 1.1, algebra]

3.1 Since $ps-qr=1$, the inverse matrix $M^{-1}=\begin{pmatrix}s&-q\\ -r&p\end{pmatrix}$ is integral and lies in $\mathrm{SL}_2(\mathbb Z)$. By [L1], $f=g\mid M^{-1}$, so the same argument as in step 2.1 with $M^{-1}$ shows that every common divisor of $A$, $B$, and $C$ also divides $a$, $b$, and $c$. [F1, L1, step 2.1, algebra]

4.1 Steps 2.1 and 3.1 show that $(a,b,c)$ and $(A,B,C)$ have exactly the same common divisors. Therefore one form is primitive exactly when the other is, by [F3]. [F3, step 2.1, step 3.1] ∎

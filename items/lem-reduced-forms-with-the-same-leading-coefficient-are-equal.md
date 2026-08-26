---
id: lem-reduced-forms-with-the-same-leading-coefficient-are-equal
kind: lemma
title: "Properly equivalent reduced forms with the same leading coefficient are equal"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-reduced-positive-definite-binary-quadratic-form, def-proper-equivalence-of-binary-quadratic-forms, def-discriminant-of-binary-quadratic-form]
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
    - title: "William Stein, Elementary Number Theory and Elliptic Curves, Theorem 9.3.2"
      url: "https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf"
    - title: "Andrew Granville, Binary Quadratic Forms, Exercise 4.1f(b)"
      url: "https://dms.umontreal.ca/~andrew/Courses/Chapter4.pdf"
pipeline_run: null
---

## Statement

Let $f=(a,b,c)$ and $g=(a,b',c')$ be reduced positive-definite binary quadratic
forms. If $f$ and $g$ are properly equivalent, then $f=g$.

## Facts & Assumptions

**Given:** Reduced positive-definite forms $f=(a,b,c)$ and $g=(a,b',c')$, and a matrix $M=\begin{pmatrix}p&q\\ r&s\end{pmatrix}\in\mathrm{SL}_2(\mathbb Z)$ with $g=f\mid M$.

[F1] Proper equivalence means $g(x,y)=f(px+qy,rx+sy)$ ([[def-proper-equivalence-of-binary-quadratic-forms]]).

[F2] Reduced forms satisfy $|b|\le a\le c$ and $|b'|\le a\le c'$, with $b\ge0$ whenever $|b|=a$ or $a=c$, and similarly for $b'$ ([[def-reduced-positive-definite-binary-quadratic-form]]).

[F3] The discriminant of $(u,v,w)$ is $v^2-4uw$ ([[def-discriminant-of-binary-quadratic-form]]).

## Proof

**Proof technique:** direct.

1.1 The leading coefficient of $g$ is $g(1,0)=f(p,r)=ap^2+bpr+cr^2$, and because $|b|\le a\le c$ one has $g(1,0)\ge a(p^2-|pr|+r^2)\ge a$. Since $g$ has leading coefficient exactly $a$, equality holds throughout. [F1, F2, algebra]

2.1 Equality in step 1.1 forces $p^2-|pr|+r^2=1$, so $(|p|,|r|)$ is one of $(1,0)$, $(0,1)$, or $(1,1)$. [step 1.1, algebra]

3.1 If $(|p|,|r|)=(1,0)$, then $r=0$ and $p=\pm1$. The determinant condition gives $s=p$ and $M=\begin{pmatrix}p&q\\ 0&p\end{pmatrix}$. The transformed middle coefficient is $b'=b+2aq$ when $p=1$ and $b'=b-2aq$ when $p=-1$, so $|b'|\le a$ and $|b|\le a$ force $q=0$ unless $|b|=a$ and $b'=-b$. But the boundary rule in [F2] forbids $b'=-a$ for a reduced form, so $q=0$, hence $b'=b$ and $c'=c$. [F1, F2, step 2.1, algebra]

3.2 If $(|p|,|r|)=(0,1)$, then $p=0$ and $r=\pm1$. Equality in step 1.1 gives $c=a$, so reducedness of $f$ yields $0\le b\le a$. The determinant condition gives $q=-r$, so $M=\begin{pmatrix}0&-r\\ r&s\end{pmatrix}$, and direct substitution gives $g=(a,-b+2ars,a-brs+as^2)$. Since $g$ is reduced, $|-b+2ars|\le a$. If $s=0$, then $g=(a,-b,a)$, and reducedness of $g$ with $a=c'=a$ forces $-b\ge0$; together with $b\ge0$ this gives $b=0$, hence $g=f$. If $s\ne0$, then the same bound implies $2a|s|-b\le a$, so $|s|=1$ and $b=a$; because $0\le b\le a$, this means $b=a$, and the sign of $-b+2ars$ shows $rs=1$. Then $g=(a,a,a)=f$. [F1, F2, step 1.1, step 2.1, algebra]

3.3 If $(|p|,|r|)=(1,1)$, equality in step 1.1 forces $c=a$ and $|b|=a$. By reducedness, $b=a$. Replacing $M$ by $-M$ if necessary does not change the substitution, so we may assume $(p,r)=(1,-1)$. Then $s+q=1$, and the transformed middle coefficient is $b'=a(2q-1)$. Since $|b'|\le a$, one has $q=0$ or $q=1$; reducedness excludes $b'=-a$, so $q=1$ and $b'=a$. The discriminant identity $b'^2-4ac'=b^2-4ac$ then gives $c'=a=c$, so again $g=f$. [F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 The three cases of step 2.1 are exhaustive, and each yields $g=f$. Therefore properly equivalent reduced forms with the same leading coefficient are equal. [step 3.1, step 3.2, step 3.3] ∎

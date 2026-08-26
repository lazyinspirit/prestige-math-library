---
id: lem-gauss-reduction-step-improves-a-positive-definite-form
kind: lemma
title: "A non-reduced positive-definite form admits an equivalent positive-definite form with smaller reduction measure"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-proper-equivalence-of-binary-quadratic-forms, prop-proper-equivalence-preserves-discriminant-and-primitivity, prop-positive-definite-binary-form-criterion, def-reduced-positive-definite-binary-quadratic-form]
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
    - title: "William Stein, Elementary Number Theory and Elliptic Curves, Section 9.3.2"
      url: "https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf"
    - title: "Andrew Granville, Binary Quadratic Forms, algorithm (4.1.1)"
      url: "https://dms.umontreal.ca/~andrew/Courses/Chapter4.pdf"
pipeline_run: null
---

## Statement

Let $f=(a,b,c)$ be a positive-definite integral binary quadratic form that is
not reduced. Define its **reduction measure**

$$\mu(f):=3a+c+\varepsilon(f),$$

where $\varepsilon(f)=0$ when $b\ge0$ whenever $|b|=a$ or $a=c$, and
$\varepsilon(f)=1$ otherwise. Then there exists a properly equivalent
positive-definite form $g$ with

$$\mu(g)<\mu(f).$$

## Facts & Assumptions

**Given:** A positive-definite integral binary quadratic form $f=(a,b,c)$ that is not reduced.

[F1] Proper equivalence is substitution by a determinant-one integer matrix ([[def-proper-equivalence-of-binary-quadratic-forms]]).

[F2] Proper equivalence preserves the discriminant, and hence preserves primitivity as well ([[prop-proper-equivalence-preserves-discriminant-and-primitivity]]).

[F3] A form is positive definite exactly when its leading coefficient is positive and its discriminant is negative ([[prop-positive-definite-binary-form-criterion]]).

[F4] A positive-definite form is reduced exactly when $|b|\le a\le c$ and $b\ge0$ whenever $|b|=a$ or $a=c$ ([[def-reduced-positive-definite-binary-quadratic-form]]).

## Proof

**Proof technique:** direct.

1.1 Since $f$ is positive definite, [F3] gives $a>0$ and $\Delta:=b^2-4ac<0$. [F3]

2.1 If $c<a$ or if $c=a$ and $b<0$, let $g=f\mid\begin{pmatrix}0&-1\\ 1&0\end{pmatrix}=(c,-b,a)$. This matrix lies in $\mathrm{SL}_2(\mathbb Z)$, so $g$ is properly equivalent to $f$; by [F2] and [F3] it is again positive definite because its leading coefficient is $c>0$ and its discriminant is still $\Delta<0$. Its measure satisfies $\mu(g)=3c+a+\varepsilon(g)<3a+c+\varepsilon(f)=\mu(f)$ because $c<a$ gives a drop of at least $1$, and when $c=a$ with $b<0$ the boundary defect disappears so $\varepsilon(g)=0<1=\varepsilon(f)$. [F1, F2, F3, F4, step 1.1, construct, algebra]

3.1 Assume now that step 2.1 does not apply. Then $a\le c$ and, because $f$ is not reduced, one must have $b\notin(-a,a]$. Choose the unique integer $k$ for which $b':=b+2ak$ lies in $(-a,a]$, and let $g=f\mid\begin{pmatrix}1&k\\ 0&1\end{pmatrix}=(a,b',c')$, where $c'=ak^2+bk+c$. [F1, F4, step 1.1, choose]

4.1 The new form $g$ is properly equivalent to $f$, so it has the same discriminant $\Delta<0$ by [F2]; its leading coefficient is still $a>0$, so [F3] makes it positive definite. Also $4a(c'-c)=b'^2-b^2$, hence $c'\le c$, with strict inequality when $|b'|<|b|$. [F2, F3, step 1.1, step 3.1, algebra]

5.1 If $|b|>a$, then $|b'|<|b|$, so step 4.1 gives $c'<c$. In this case $\varepsilon(f)=0$: if $a<c$ there is no boundary defect, while if $a=c$ then step 2.1 was excluded and therefore $b>0$. [step 2.1, step 3.1, step 4.1, algebra]

5.2 If $|b|=a$, then step 2.1 is excluded, so $a<c$ and the only way $b\notin(-a,a]$ can occur is $b=-a$. Then the chosen residue is $b'=a$, so $c'=c$ and the boundary defect disappears: $\varepsilon(g)=0<1=\varepsilon(f)$. Hence again $\mu(g)<\mu(f)$. [F4, step 3.1, step 4.1, algebra]

6.1 If $|b|>a$ and $c'>a$, then $-a<b'\le a<c'$, so $g$ already satisfies the reduced-form boundary sign conditions and $\varepsilon(g)=0$. Therefore $$ \mu(g)=3a+c'<3a+c=\mu(f). $$ [F4, step 5.1, algebra]

6.2 If $|b|>a$ and $c'=a$, then step 5.1 gives $c>a$ because otherwise $c=a$ and $c'=c$ would force $|b'|=|b|$, contradicting $|b'|<|b|$. If $b'\ge0$, then $\varepsilon(g)=0$ and $$ \mu(g)=4a<3a+c=\mu(f). $$ If instead $b'<0$, let $h=g\mid\begin{pmatrix}0&-1\\ 1&0\end{pmatrix}=(a,-b',a)$. Then $h$ is properly equivalent to $f$, still positive definite, and $\varepsilon(h)=0$, so again $$ \mu(h)=4a<3a+c=\mu(f). $$ [F1, F4, step 2.1, step 4.1, step 5.1, algebra]

6.3 If $|b|>a$ and $c'<a$, let $h=g\mid\begin{pmatrix}0&-1\\ 1&0\end{pmatrix}=(c',-b',a)$. Then $h$ is properly equivalent to $f$ and positive definite. Since $c'\le a-1$ and $\varepsilon(h)\le1$, $$ \mu(h)=3c'+a+\varepsilon(h)\le 3(a-1)+a+1=4a-2<4a\le3a+c=\mu(f). $$ [F1, step 4.1, step 5.1, algebra]

7.1 Step 2.1 covers the case $c<a$ or $c=a$ with $b<0$; steps 6.1, 6.2, and 6.3 cover the remaining case $|b|>a$; and step 5.2 covers the case $|b|=a$ with $b<0$. Therefore every non-reduced positive-definite form is properly equivalent to a positive-definite form of smaller reduction measure. [F4, step 2.1, step 6.1, step 6.2, step 6.3, step 5.2] ∎

---
id: lem-binary-quadratic-form-substitution-is-a-right-action
kind: lemma
title: "Integral substitution defines a right action of $\\mathrm{SL}_2(\\mathbb Z)$ on integral binary quadratic forms"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-proper-equivalence-of-binary-quadratic-forms, thm-matrix-multiplication-laws]
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
    - title: "William Stein, Elementary Number Theory and Elliptic Curves, Proposition 9.2.3"
      url: "https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf"
    - title: "Andrew Granville, Binary Quadratic Forms, Exercise 4.1d"
      url: "https://dms.umontreal.ca/~andrew/Courses/Chapter4.pdf"
pipeline_run: null
---

## Statement

For an integral binary quadratic form $f$ and matrices $M,N\in\mathrm{SL}_2(\mathbb Z)$,
the substitution notation of [[def-proper-equivalence-of-binary-quadratic-forms]]
satisfies

$$f\mid I=f,\qquad (f\mid M)\mid N=f\mid(MN).$$

Thus integral substitution defines a right action of $\mathrm{SL}_2(\mathbb Z)$
on integral binary quadratic forms.

## Facts & Assumptions

**Given:** An integral binary quadratic form $f=(a,b,c)$ and matrices $M,N\in\mathrm{SL}_2(\mathbb Z)$.

[F1] Proper equivalence is defined by the substitution $g(x,y)=f(px+qy,rx+sy)$ for a determinant-one integer matrix $\begin{pmatrix}p&q\\ r&s\end{pmatrix}$ ([[def-proper-equivalence-of-binary-quadratic-forms]]).

[L1] Matrix multiplication is associative, and identity matrices act as units on either side whenever the shapes are compatible ([[thm-matrix-multiplication-laws]]).

## Proof

**Proof technique:** direct.

1.1 If $I$ is the $2\times2$ identity matrix, then $(f\mid I)(x,y)=f(1\cdot x+0\cdot y,0\cdot x+1\cdot y)=f(x,y)$ for all $x,y$, so $f\mid I=f$. [F1, L1, algebra]

1.2 Write $M=\begin{pmatrix}p&q\\ r&s\end{pmatrix}$ and $N=\begin{pmatrix}u&v\\ w&z\end{pmatrix}$. Then $((f\mid M)\mid N)(x,y)=(f\mid M)(ux+vy,wx+zy)=f(p(ux+vy)+q(wx+zy),r(ux+vy)+s(wx+zy))$, which is exactly $(f\mid(MN))(x,y)$ by the definition of matrix multiplication. [F1, L1, algebra]

2.1 The coefficients of $f\mid M$ are $a p^2+bpr+c r^2$, $2apq+b(ps+qr)+2crs$, and $a q^2+bqs+c s^2$, hence are integers. Therefore the substitutions stay inside the set of integral binary quadratic forms, and steps 1.1 and 1.2 are precisely the right-action axioms. [F1, step 1.2, algebra] ∎

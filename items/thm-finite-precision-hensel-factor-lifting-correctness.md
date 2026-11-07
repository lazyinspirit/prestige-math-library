---
id: thm-finite-precision-hensel-factor-lifting-correctness
kind: theorem
title: "Correctness and finite termination of coprime Hensel factor lifting"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - alg-finite-precision-hensel-factor-lifting-over-zp
  - lem-hensel-factor-correction-one-stage
  - lem-coprime-factor-bezout-lift
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08, Chapter VII, Theorem 7.33"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
    - title: "Andrew V. Sutherland, MIT 18.785 Number Theory I, Fall 2021, Lecture 9, Hensel's lemmas"
      url: "https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf"
verification: {}
---

## Statement

Let $p$ be a prime, $N\ge1$, and let $f\in R_N[T]$ be monic of degree
$m+n$, where $R_N=\mathbb Z/p^N\mathbb Z$ and $m,n\ge0$. Suppose the
reduction of $f$ modulo $p$ has a factorization
$\bar f=\bar g_0\bar h_0$ into coprime monic polynomials over $\mathbb F_p$
of degrees $m,n$. Then the finite-precision factor-lifting procedure returns,
after at most $N-1$ correction stages, monic polynomials $G,H\in R_N[T]$ of
degrees $m,n$ such that $\bar G=\bar g_0$, $\bar H=\bar h_0$, and $f=GH$ in
$R_N[T]$.

## Statement references

[J. S. Milne, *Algebraic Number Theory*, Chapter VII, Theorem 7.33](https://www.jmilne.org/math/CourseNotes/ANT.pdf)

[Andrew V. Sutherland, MIT 18.785, Fall 2021, Lecture 9, Hensel's lemmas](https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf)

## Facts & Assumptions

**Given:** $p,N,m,n,f,\bar g_0,\bar h_0$ as in the Statement.

[F1] [[alg-finite-precision-hensel-factor-lifting-over-zp]]: The procedure uses
least-residue lifts; for positive $m,n$, at stage $r$ it computes the unique
remainder $u_r$ of degree less than $m$ satisfying
$u_r\bar H\equiv\epsilon_r\pmod{\bar G}$ and then sets
$v_r=(\epsilon_r-u_r\bar H)/\bar G$ of degree less than $n$. It applies the
corrections $p^rU_r,p^rV_r$ for $r=1,\ldots,N-1$.

[F2] [[lem-hensel-factor-correction-one-stage]]: If $A$ is a commutative ring,
$I$ an ideal, $f,g,h\in A[T]$ are monic of degrees $m+n,m,n$, respectively,
$f-gh\in I^r[T]$, and $ag+bh\equiv1\pmod I$ for some $a,b\in A[T]$, then
there are corrections $u,v\in I^r[T]$ with $\deg u<m$, $\deg v<n$ such
that $f-(g+u)(h+v)\in I^{r+1}[T]$.

[L1] [[lem-coprime-factor-bezout-lift]]: Coprime reductions of two polynomials
over $A/I$ lift to a Bezout relation between their lifts modulo $I$.

## Proof

**Given:** The data above, including the deterministic correction rule in [F1].


1.1 If $m=0$, the procedure returns $(1,f)$, whose reductions are $(\bar g_0,\bar h_0)=(1,\bar f)$ and whose product is $f$. If $n=0$, it returns $(f,1)$ with the same required properties. These branches terminate immediately. [F1, given, cases, algebra]

1.2 Suppose $m,n>0$. The initial coefficient lifts in [F1] are monic of the prescribed degrees and reduce to $\bar g_0,\bar h_0$, so their product differs from $f$ by an element of $pR_N[T]$. At stage $r$, assume the current monic $g,h$ have degrees $m,n$, reduce to $\bar g_0,\bar h_0$, and satisfy $f-gh\in p^rR_N[T]$. Then $\epsilon_r$ is well-defined and has degree less than $m+n$. [F1, given, algebra]

2.1 Apply [L1] to the coprime reductions to obtain a lifted Bezout relation modulo $p$. Apply [F2] with $A=R_N$, $I=(p)$, and these $g,h,f$: a pair of bounded corrections exists whose reductions $\bar u,\bar v$ satisfy $\epsilon_r=\bar u\bar h+\bar v\bar g$. Reducing this identity modulo $\bar g$ determines $\bar u$ uniquely because $\bar h$ is invertible modulo $\bar g$; division by $\bar g$ then determines $\bar v$ uniquely. Thus [F1] computes exactly these correction residues, and the lemma gives $f-(g+p^rU_r)(h+p^rV_r)\in p^{r+1}R_N[T]$. The degree bounds keep both factors monic of degrees $m,n$ and preserve their reductions modulo $p$. [F1, F2, L1, step 1.2, algebra]

3.1 There are exactly $N-1$ correction stages. Induction using step 2.1 gives $f-GH\in p^N R_N[T]=0$ at the end. If $N=1$, there are no stages and the initial factorization already gives equality in $R_1[T]$. Hence the procedure terminates with the stated exact factorization and reductions. [F1, step 1.2, step 2.1, given, algebra] ∎
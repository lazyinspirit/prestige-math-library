---
id: alg-finite-precision-hensel-factor-lifting-over-zp
kind: algorithm
title: "Finite-precision Hensel factor lifting over Z/p^N"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - lem-hensel-factor-correction-one-stage
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08, Chapter VII, Theorem 7.33 and Remark 7.37"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
    - title: "Andrew V. Sutherland, MIT 18.785 Number Theory I, Fall 2021, Lecture 9, Hensel's lemmas"
      url: "https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf"
verification:
  precheck: n/a
---

## Definition

**Inputs.** A prime $p$, an integer $N\ge1$, nonnegative integers $m,n$, a
monic polynomial $f\in R_N[T]$ of degree $m+n$, where
$R_N=\mathbb Z/p^N\mathbb Z$, and monic polynomials
$\bar g_0,\bar h_0\in\mathbb F_p[T]$ of degrees $m,n$ such that
$\bar f=\bar g_0\bar h_0$ and $\gcd(\bar g_0,\bar h_0)=1$.

**Outputs.** A pair $G,H\in R_N[T]$ of monic polynomials of degrees $m,n$
with $\bar G=\bar g_0$ and $\bar H=\bar h_0$.

**Procedure.** If $m=0$, return $(G,H)=(1,f)$. If $n=0$, return
$(G,H)=(f,1)$. Otherwise, lift each coefficient of $\bar g_0,\bar h_0$ to
its least nonnegative representative in $R_N$ and call the resulting monic
polynomials $G,H$.

For each $r=1,\ldots,N-1$, perform the following finite correction. Represent
each coefficient of $f-GH$ by its least nonnegative integer in
$\{0,\ldots,p^N-1\}$, divide those representatives by $p^r$, and reduce
modulo $p$ to obtain $\epsilon_r\in\mathbb F_p[T]$. The current invariant
$f-GH\in p^rR_N[T]$ makes these divisions exact, and the equal monic degrees
give $\deg\epsilon_r<m+n$. Use the polynomial Euclidean algorithm to find the
unique $u_r\in\mathbb F_p[T]$ of degree less than $m$ satisfying
$u_r\bar H\equiv\epsilon_r\pmod{\bar G}$. The coprimality of $\bar G$ and
$\bar H$ makes $\bar H$ invertible modulo $\bar G$. Define
$v_r=(\epsilon_r-u_r\bar H)/\bar G$; the congruence makes this a polynomial
and $\deg v_r<n$. Lift the coefficients of $u_r,v_r$ to their least
nonnegative representatives $U_r,V_r\in R_N[T]$, and replace
$G\leftarrow G+p^rU_r$ and $H\leftarrow H+p^rV_r$ in $R_N[T]$.

After these $N-1$ stages, return $(G,H)$. When $N=1$ the loop is empty and the
input factorization already holds in $R_1[T]$.

## Definition references

[[lem-hensel-factor-correction-one-stage]]

[J. S. Milne, *Algebraic Number Theory*, Chapter VII, Theorem 7.33 and Remark 7.37](https://www.jmilne.org/math/CourseNotes/ANT.pdf)

[Andrew V. Sutherland, MIT 18.785, Fall 2021, Lecture 9, Hensel's lemmas](https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf)

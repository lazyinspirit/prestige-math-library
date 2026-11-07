---
id: lem-determinant-rank-drop-on-a-nonsingular-residue-class
kind: lemma
title: "Monomial evaluation determinants vanish on a sufficiently large nonsingular residue class"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-projective-space-points
  - def-anisotropic-box-and-monomial-scale-parameters
  - def-homogeneous-polynomial-and-homogeneous-ideal
  - def-prime
  - lem-unit-modulo-prime-powers
  - lem-implicit-polynomial-lift-mod-prime-powers
sources:
  scraped: []
  references:
    - title: "D. R. Heath-Brown, The density of rational points on curves and surfaces, proof of Theorem 14"
      url: "https://arxiv.org/pdf/math/0405392v1"
---

## Statement

Let $n\ge3$, let $p$ be prime, and write $\mathbb F_p=\mathbb Z/p\mathbb Z$.
Let $F\in\mathbb Z[x_1,\ldots,x_n]$ be a homogeneous form, and let
$t=(1,t_2,\ldots,t_n)\in\mathbb F_p^n$ satisfy $F(t)=0$ and
$\partial F/\partial x_2(t)\ne0$. Fix real $B_i\ge1$, a degree $D\ge1$, and a
set $\mathcal E$ of $M\ge1$ distinct exponent vectors
$e\in\mathbb N^n$ with $\sum_i e_i=D$. Let $S_t$ be the primitive normalized
integer representatives in this box satisfying $F(x)=0$ whose reduction modulo $p$ is projectively
equal to $t$. Put $s_i=\sum_{e\in\mathcal E}e_i$, and choose $f\ge0$ so that
$$\binom{f+n-2}{n-2}\le M<\binom{f+n-1}{n-2},\qquad \nu=(f+1)M-\binom{f+n-1}{n-1}.$$
If $\nu\ge1$ and $p^\nu>M^M\prod_iB_i^{s_i}$, then for every $M$ distinct
vectors $x^{(1)},\ldots,x^{(M)}\in S_t$,

$$\det\bigl((x^{(a)})^e\bigr)_{1\le a\le M,\ e\in\mathcal E}=0.$$

## Statement references

[Heath-Brown, determinant divisibility on a nonsingular residue class](https://arxiv.org/pdf/math/0405392v1)

[[def-projective-space-points]]

[[def-primitive-projective-coordinate-representative]]

[[def-anisotropic-box-and-monomial-scale-parameters]]

## Facts & Assumptions

**Given:** The prime, form, residue point, box, monomial set, and parameters in
the Statement.

[F1] [[def-anisotropic-box-and-monomial-scale-parameters]]: The box uses the
unique primitive normalized integer representative and has coordinate bounds
$|x_i|\le B_i$.

[F2] [[lem-implicit-polynomial-lift-mod-prime-powers]]: A simple nonzero
partial derivative modulo $p$ makes the coordinate $x_2$ a polynomial function
of the remaining coordinates modulo every $p^m$, on the residue class of $t$.

[F3] [[lem-unit-modulo-prime-powers]]: If $p\nmid a$, then $a$ is invertible
modulo every positive power of $p$.

[F4] [[def-homogeneous-polynomial-and-homogeneous-ideal]]: A homogeneous form
of degree $D$ has each monomial of total degree $D$.

## Proof

1.1 Choose integer lifts $\widetilde t_2,\ldots,\widetilde t_n$ of the
residues $t_2,\ldots,t_n$. Let $x\in S_t$ and set $m=\nu$. Since the first coordinate of its
projective reduction is nonzero, $p\nmid x_1$; by [F3] it has an inverse
modulo $p^m$. Define $v_1=1$ and $v_i\equiv x_i x_1^{-1}\pmod{p^m}$ for
$i\ge2$. Homogeneity and $F(x)=0$ give $F(v)\equiv0\pmod{p^m}$, while
$v\equiv (1,t_2,\ldots,t_n)\pmod p$. By [F2],
$v_2\equiv f_m(v_3,\ldots,v_n)\pmod{p^m}$. Thus each normalized monomial
column can be evaluated using the polynomial
$$g_e(Z_3,\ldots,Z_n):=(1,f_m(\widetilde t_3+Z_3,\ldots,\widetilde t_n+Z_n),\widetilde t_3+Z_3,\ldots,\widetilde t_n+Z_n)^e,$$
at points $Z_i\equiv0\pmod p$. The original determinant differs modulo
$p^m$ from the determinant of these evaluations only by multiplication of
row $a$ by the unit $(x_1^{(a)})^D$. [F1, F2, F3, F4, given, algebra]

1.2 Work modulo $p^m$ with the $M$ polynomial columns $g_e$. If a column is
the zero polynomial modulo $p^m$, its evaluation column is zero and the
determinant is zero modulo $p^m$, as required below. Otherwise order monomials
$Z^\alpha$ first by total degree and then lexicographically. Repeatedly choose
the least monomial occurring in a remaining column, choose a column in which
its coefficient has the least $p$-divisibility, and use that column to clear
the same monomial from all later columns. Here a coefficient has $p$-divisibility
$q$ when it is divisible by $p^q$ but not by $p^{q+1}$; coefficients zero
modulo $p^m$ may be ignored. This clearing is possible: if the pivot coefficient
is $p^q b$ with $p\nmid b$ and another coefficient is $p^q c$, [F3] supplies
an inverse for $b$ modulo $p^{m-q}$, so an integer multiple of the pivot column
removes the other coefficient modulo $p^m$. These column operations preserve
the determinant modulo $p^m$ and make the least monomials of successive columns
strictly increase. [F3, given, construct, algebra]

2.1 There are $\binom{j+n-3}{n-3}$ monomials of total degree $j$ in
$n-2$ variables, and $\binom{f+n-2}{n-2}$ of total degree at most $f$.
Therefore the sum of the least total degrees in the reduced columns is at least
$$\sum_{j=0}^{f}j\binom{j+n-3}{n-3}+(f+1)\left(M-\binom{f+n-2}{n-2}\right) =(f+1)M-\binom{f+n-1}{n-1}=\nu.$$
For the middle equality, count each monomial of degree $j\le f$ once for every
integer between $j$ and $f$, and use
$\sum_{q=0}^f\binom{q+n-2}{n-2}=\binom{f+n-1}{n-1}$. Since each $Z_i$ at the
evaluation points is divisible by $p$, every entry in a column whose least
monomial has degree $q$ is divisible by $p^q$. The reduced determinant, and
hence the determinant in step 1.1, is divisible by $p^\nu$. [step 1.1, F4, algebra]

3.1 By the Leibniz formula, the absolute value of the determinant is at most
$M!\prod_{e\in\mathcal E}\prod_iB_i^{e_i}\le
M^M\prod_iB_i^{s_i}$. Its divisibility by $p^\nu$ and the strict inequality
in the Statement force the integer determinant to be zero. [step 2.1, given, algebra] ∎

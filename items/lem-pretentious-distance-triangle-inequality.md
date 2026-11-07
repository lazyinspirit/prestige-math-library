---
dependency_level: 2
id: lem-pretentious-distance-triangle-inequality
kind: lemma
title: "Triangle inequality for pretentious distance"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-pretentious-distance-to-an-archimedean-twist
  - def-multiplicative-arithmetic-function
  - thm-complex-numbers-form-a-field
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - lem-complex-conjugation-and-modulus-laws
  - def-complete-ordered-real-field
  - cor-cauchy-reals-lub-complete
  - thm-of-square-roots
  - lem-of-square-monotone
  - lem-of-square-positive
  - thm-cauchy-schwarz-finite
proof_strategy: direct
aliases: []
sources:
  scraped: []
  references:
    - title: "Andrew Granville and K. Soundararajan, Pretentious Multiplicative Number Theory (author manuscript, 2011)"
      url: "https://dms.umontreal.ca/~andrew/PDF/PretendBook010610.pdf"
---

## Statement

Let $f_1,f_2,g_1,g_2:\mathbb Z_{>0}\to\mathbb C$ be multiplicative
arithmetic functions with absolute value at most $1$ at every positive integer.
For real $x\ge3$,

$$ D(f_1g_1,f_2g_2;x)\le D(f_1,f_2;x)+D(g_1,g_2;x). $$

## Statement references

[[def-pretentious-distance-to-an-archimedean-twist]]

[Granville and Soundararajan, *Pretentious Multiplicative Number Theory*, Lemmas 4.1.1–4.1.2, PDF pp. 31–32](https://dms.umontreal.ca/~andrew/PDF/PretendBook010610.pdf)

## Facts & Assumptions

**Given:** The four multiplicative functions and real $x\ge3$ in the statement.

[F1] For 1-bounded multiplicative $h,k$, $D(h,k;x)^2=\sum_{p\le x}(1-\operatorname{Re}(h(p)\overline{k(p)}))/p$ ([[def-pretentious-distance-to-an-archimedean-twist]]).

[F2] Complex numbers have unique real coordinates and the coordinate multiplication formula; real and imaginary parts, conjugation, and modulus have their coordinate definitions ([[thm-complex-numbers-form-a-field]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F3] The real numbers form a complete ordered field; real absolute value is the piecewise order absolute value; nonnegative real numbers have unique nonnegative square roots; nonnegative numbers preserve order under squaring; and every real square is nonnegative ([[def-complete-ordered-real-field]], [[cor-cauchy-reals-lub-complete]], [[thm-of-square-roots]], [[lem-of-square-monotone]], [[lem-of-square-positive]]).

[F4] Complex conjugation preserves products and the complex modulus is nonnegative and multiplicative ([[lem-complex-conjugation-and-modulus-laws]]).

[F5] For finite real sequences, $|\sum_j a_jb_j|\le(\sum_j a_j^2)^{1/2}(\sum_j b_j^2)^{1/2}$ ([[thm-cauchy-schwarz-finite]]).

[F6] Multiplicativity means $h(1)=1$ and $h(mn)=h(m)h(n)$ for coprime positive integers $m,n$ ([[def-multiplicative-arithmetic-function]]).

## Proof

1.1 For $|u|,|v|\le1$, write $u=x+iy$ and $v=r+is$ with real coordinates. By [F2]–[F3], $|u|^2=x^2+y^2$ and $|v|^2=r^2+s^2$, so $|x|,|y|,|r|,|s|\le1$. Put $a=1-x$ and $b=1-r$. Then $0\le a,b\le2$ and $y^2\le1-x^2=2a-a^2\le2a$, while $s^2\le1-r^2=2b-b^2\le2b$. Since $|uv|\le1$ by [F4], we have $1-\operatorname{Re}(uv)\ge0$. The coordinate multiplication formula [F2] gives
$$ \operatorname{Re}(uv)=\operatorname{Re}u\operatorname{Re}v-\operatorname{Im}u\operatorname{Im}v\ge(1-a)(1-b)-2\sqrt{ab}\ge1-a-b-2\sqrt{ab}. $$
Thus $1-\operatorname{Re}(uv)\le(\sqrt a+\sqrt b)^2$, so $\sqrt{1-\operatorname{Re}(uv)}\le\sqrt{1-\operatorname{Re}u}+\sqrt{1-\operatorname{Re}v}$. [given, F2, F3, F4, algebra]

2.1 For each prime $p\le x$, take $u=f_1(p)\overline{f_2(p)}$ and $v=g_1(p)\overline{g_2(p)}$. The coordinate definitions [F2] give $|\overline{z}|=|z|$, and the modulus product law [F4] therefore puts $u,v$ in the closed unit disk. Products of multiplicative functions are multiplicative by [F6], and their values remain 1-bounded by the given bounds. Apply step 1.1 at every such prime, square and sum with weights $1/p$, and then apply [F5] to the finite sequences $\sqrt{1-\operatorname{Re}u}/\sqrt p$ and $\sqrt{1-\operatorname{Re}v}/\sqrt p$. The result is
$$ D(f_1g_1,f_2g_2;x)^2\le\big(D(f_1,f_2;x)+D(g_1,g_2;x)\big)^2. $$
Both sides are nonnegative, so taking their nonnegative square roots proves the claim. [F1, F2, F4, F5, F6, step 1.1, algebra] ∎

## Proof references

[[def-pretentious-distance-to-an-archimedean-twist]]

[[lem-complex-conjugation-and-modulus-laws]]

[[thm-cauchy-schwarz-finite]]

[[def-multiplicative-arithmetic-function]]

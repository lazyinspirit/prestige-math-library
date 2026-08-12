---
id: lem-complex-conjugation-and-modulus-laws
kind: lemma
title: 'Conjugation is an involutive real-field automorphism, $z\overline z=|z|^2$, and modulus is definite, multiplicative, and subadditive'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-conjugate-real-imaginary-part-and-modulus, thm-complex-numbers-form-a-field, thm-of-square-roots, lem-of-square-monotone, lem-of-square-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I: Complex Numbers and the Complex Exponential"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: frontier-11
---

## Statement

Complex conjugation is a real-field automorphism satisfying
$$\overline{z+w}=\overline z+\overline w,\qquad \overline{zw}=\overline z\,\overline w,\qquad \overline{\overline z}=z.$$
For every $z,w\in\mathbb C$,
$$z\overline z=|z|^2,\qquad |z|\ge0,\qquad |z|=0\Longleftrightarrow z=0,$$
$$|zw|=|z||w|,\qquad |z+w|\le |z|+|w|.$$

## Facts & Assumptions

**Given:** $z=a+bi$ and $w=u+vi$.

[F1] Complex numbers have unique real coordinates and the coordinate addition and multiplication formulas ([[thm-complex-numbers-form-a-field]]).

[F2] Conjugation and modulus are defined by $\overline{a+bi}=a-bi$ and $|a+bi|=\sqrt{a^2+b^2}$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F3] Every nonnegative element of a complete ordered field has a unique nonnegative square root ([[thm-of-square-roots]]).

[F4] For nonnegative elements $r,s$ of an ordered field, $r\le s$ if and only if $r^2\le s^2$ ([[lem-of-square-monotone]]).

[F5] The square of every nonzero element of an ordered field is positive ([[lem-of-square-positive]]).

## Proof

**Proof technique:** direct.

1.1 Coordinate expansion using [F1] and [F2] proves the two homomorphism laws, that conjugation fixes every real number, and that applying it twice is the identity. Thus conjugation is an involutive real-field automorphism. [F1, F2, algebra]

1.2 Direct multiplication gives $z\overline z=a^2+b^2=|z|^2$. [F1, F2, algebra]

1.3 Lagrange's identity gives $$ (a^2+b^2)(u^2+v^2)-(au+bv)^2=(av-bu)^2\ge0. $$ The final inequality follows from [F5], with the zero case included. [F5, algebra]

2.1 By [F2] and [F3], $|z|\ge0$. If $z=0$, then $|z|=0$; conversely, $|z|=0$ makes $a^2+b^2=0$, and [F5] forces $a=b=0$. [F2, F3, F5, step 1.2]

3.1 Apply step 1.2 to $zw$ and use step 1.1: $|zw|^2=(zw)\overline{zw}=(z\overline z)(w\overline w) =|z|^2|w|^2$. Both sides of $|zw|=|z||w|$ are nonnegative, so uniqueness in [F3] proves multiplicativity. [F3, step 1.1, step 1.2, step 2.1]

3.2 Hence $au+bv\le |z||w|$: if $au+bv\le0$ this follows from $|z||w|\ge0$; otherwise both quantities are nonnegative, step 1.3 and [F4] give the inequality after squaring. [F4, step 2.1, step 1.3]

4.1 Expanding with [F1] and [F2], then using step 3.2, gives $$ |z+w|^2=a^2+b^2+u^2+v^2+2(au+bv) \le (|z|+|w|)^2. $$ [F1, F2, step 1.2, step 3.2, algebra]

5.1 Both sides of $|z+w|\le|z|+|w|$ are nonnegative, so [F4] turns the squared inequality in step 4.1 into the triangle inequality. [F4, step 2.1, step 4.1] ∎

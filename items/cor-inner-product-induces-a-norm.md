---
id: cor-inner-product-induces-a-norm
kind: corollary
title: The induced length is a norm
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-cauchy-schwarz-in-an-inner-product-space, def-inner-product-norm, def-norm-and-normed-space, rem-real-and-complex-normed-space-convention, lem-complex-conjugation-and-modulus-laws, lem-of-abs-value, lem-of-square-monotone, thm-nth-roots-exist, def-complex-conjugate-real-imaginary-part-and-modulus]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §1.3.3, pp.38–39"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Lectures 15–16"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
---

## Statement

Let $V$ be a real or complex inner-product space with induced length $\|v\|=\sqrt{\langle v,v\rangle}$. Then $\|v\|\ge0$ with $\|v\|=0$ exactly for $v=0$, $\|\lambda v\|=|\lambda|\,\|v\|$ for every scalar $\lambda$, and $\|u+v\|\le\|u\|+\|v\|$; hence $\|\cdot\|$ is a norm on $V$, read over $\mathbb R$ by [[def-norm-and-normed-space]] and over $\mathbb C$ by [[rem-real-and-complex-normed-space-convention]].

## Facts & Assumptions

[A1] The induced length is the unique nonnegative square root of the diagonal pairing, with $\|v\|\ge0$ and $\|v\|=0$ exactly for $v=0$ ([[def-inner-product-norm]]).

[A2] Cauchy–Schwarz gives $|\langle u,v\rangle|\le\|u\|\,\|v\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[A3] A norm on a real vector space satisfies separation, absolute homogeneity and the triangle inequality, and a complex normed space is defined by the same clauses with the complex modulus ([[def-norm-and-normed-space]], [[rem-real-and-complex-normed-space-convention]]).

[A4] For complex scalars $z\overline z=|z|^2$ and $\lambda\overline{\lambda}=|\lambda|^2$ ([[lem-complex-conjugation-and-modulus-laws]]), and for real scalars $|xy|=|x|\,|y|$ with $|x|\ge0$ ([[lem-of-abs-value]]).

[A5] For nonnegative reals $a\le b$ if and only if $a^2\le b^2$ ([[lem-of-square-monotone]]), and each nonnegative real has a unique nonnegative square root ([[thm-nth-roots-exist]]).

[A6] If $z=a+bi$ then $\operatorname{Re}z=a$ and $|z|=\sqrt{a^2+b^2}$, so $\operatorname{Re}z\le|z|$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

## Proof

**Proof technique:** direct.

**Given:** A real or complex inner-product space $V$, vectors $u,v\in V$ and a scalar $\lambda$; in the real case conjugation is the identity and $|\cdot|$ is the absolute value of $\mathbb R$, so the second clause of [A4] is read in the real field.

1.1 Nonnegativity and separation are [A1]: $\|v\|\ge0$, and $\|v\|=0$ exactly when $\langle v,v\rangle=0$, that is exactly when $v=0$. [A1, A3]

1.2 Homogeneity: $\langle\lambda v,\lambda v\rangle=\lambda\overline{\lambda}\langle v,v\rangle=|\lambda|^2\|v\|^2$ by sesquilinearity and [A4], and both $\|\lambda v\|$ and $|\lambda|\,\|v\|$ are nonnegative with equal squares, so $\|\lambda v\|=|\lambda|\,\|v\|$ by uniqueness of the nonnegative square root. [A1, A4, A5, algebra]

1.3 Triangle inequality: expanding and using conjugate symmetry gives $\|u+v\|^2=\|u\|^2+2\operatorname{Re}\langle u,v\rangle+\|v\|^2$, and $\operatorname{Re}z\le|z|$ for every scalar $z$, since either $\operatorname{Re}z<0\le|z|$ or $\operatorname{Re}z=a\ge0$ with $a^2\le a^2+b^2=|z|^2$ by [A6]; with [A2] this gives $\|u+v\|^2\le\|u\|^2+2\|u\|\,\|v\|+\|v\|^2=(\|u\|+\|v\|)^2$. [A1, A2, A4, A6, algebra]

2.1 Both sides of the inequality in step 1.3 are nonnegative, so monotonicity of squaring on the nonnegatives turns it into $\|u+v\|\le\|u\|+\|v\|$. [A5, step 1.3]

3.1 Steps 1.1, 1.2 and 2.1 are exactly the clauses of [A3] over $\mathbb R$, and over $\mathbb C$ they are the same clauses with the complex modulus, so $\|\cdot\|$ is a norm on $V$ in either scalar field. [A3, step 1.1, step 1.2, step 2.1] ∎

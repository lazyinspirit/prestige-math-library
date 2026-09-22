---
id: thm-cauchy-schwarz-in-an-inner-product-space
kind: theorem
title: "Cauchy–Schwarz: $|\\langle x,y\\rangle|\\le\\|x\\|\\,\\|y\\|$, with equality exactly for dependent pairs"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-real-and-complex-inner-product-space, def-inner-product-norm, thm-nth-roots-exist, lem-complex-conjugation-and-modulus-laws, lem-of-abs-value, lem-of-square-monotone, def-linear-independence]
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
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §1.3.3, Lemma 1.40, p.38"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Lectures 15–16"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
---

## Statement

For all vectors $x,y$ in a real or complex inner-product space,

$$|\langle x,y\rangle|\le\|x\|\,\|y\| ,$$

with equality if and only if $x$ and $y$ are linearly dependent.

## Facts & Assumptions

[A1] The pairing is linear in the first argument, conjugate-linear in the second, conjugate symmetric and positive definite, and the induced length satisfies $\langle v,v\rangle=\|v\|^2$ with $\|v\|\ge0$ and $\|v\|=0$ exactly for $v=0$ ([[def-real-and-complex-inner-product-space]]).

[A2] The induced length is the unique nonnegative square root of the diagonal pairing, and positive definiteness makes the radicand a nonnegative real ([[def-inner-product-norm]]).

[A3] Every nonnegative real has a unique nonnegative square root: there is exactly one $s\ge0$ with $s^n=a$ for each $n\ge1$ ([[thm-nth-roots-exist]]).

[A4] For complex scalars $z\overline z=|z|^2$, $|z|\ge0$, and $|z|=0$ exactly for $z=0$ ([[lem-complex-conjugation-and-modulus-laws]]).

[A5] For real scalars $|x|\ge0$, $|x|=0$ exactly for $x=0$, and $|xy|=|x|\,|y|$ ([[lem-of-abs-value]]).

[A6] For nonnegative reals, $a\le b$ if and only if $a^2\le b^2$ ([[lem-of-square-monotone]]).

[A7] A finite list is linearly dependent when some choice of scalars, not all zero, makes the corresponding combination vanish; for the two-element list $(x,y)$ this means that $ax+by=0$ for scalars $a,b$ not both zero ([[def-linear-independence]]).

## Proof

**Proof technique:** direct.

**Given:** Vectors $x,y$ in a real or complex inner-product space $V$. In the real case read conjugation as the identity and $|\cdot|$ as the absolute value of $\mathbb R$, so that [A4] is replaced by [A5].

1.1 If $y=0$, then $\langle x,y\rangle=\langle x,0\cdot y\rangle=0\cdot\langle x,y\rangle=0$ by conjugate-linearity in the second argument, and $\|y\|=0$; hence $|\langle x,y\rangle|=0=\|x\|\,\|y\|$, while $x,y$ are dependent with witness scalars $(a,b)=(0,1)$ because $0\cdot x+1\cdot 0=0$ and $b\ne0$. [A1, A2, A7]

1.2 Suppose now $y\ne0$ and set $c=\langle x,y\rangle/\langle y,y\rangle$, a well-defined scalar because $\langle y,y\rangle=\|y\|^2>0$; expanding with linearity in the first argument, conjugate-linearity in the second and conjugate symmetry gives $0\le\|x-cy\|^2=\|x\|^2-c\,\overline{\langle x,y\rangle}-\overline c\,\langle x,y\rangle+|c|^2\|y\|^2=\|x\|^2-|\langle x,y\rangle|^2/\|y\|^2$. [A1, A2, A3, A4, A5, algebra]

2.1 Multiplying step 1.2 by the positive number $\|y\|^2$ gives $|\langle x,y\rangle|^2\le\|x\|^2\|y\|^2$, and since $|\langle x,y\rangle|$, $\|x\|$ and $\|y\|$ are nonnegative, monotonicity of squaring on the nonnegatives gives the inequality $|\langle x,y\rangle|\le\|x\|\,\|y\|$. [A2, A6, step 1.2, algebra]

2.2 If $x,y$ are dependent, then either $y=0$, which is step 1.1, or $x=cy$ for some scalar $c$ with $y\ne0$; in the second case $\langle x,y\rangle=c\|y\|^2$ and $\|cy\|^2=\langle cy,cy\rangle=|c|^2\|y\|^2$ with both norms nonnegative, so $\|x\|=|c|\,\|y\|$ by uniqueness of nonnegative square roots, and $|\langle x,y\rangle|=|c|\,\|y\|^2=\|x\|\,\|y\|$. [A1, A2, A3, A4, A5, A6, A7, step 1.1, algebra]

3.1 Conversely suppose $|\langle x,y\rangle|=\|x\|\,\|y\|$ and $y\ne0$; then $\|y\|^2>0$ and step 1.2 gives $\|x-cy\|^2=\|x\|^2-\|x\|^2=0$, so $x-cy=0$ by positive definiteness, that is $x=cy$ and the pair is dependent by [A7]; together with steps 1.1 and 2.2 this proves the inequality and both directions of the equality statement. [A1, A7, step 1.1, step 1.2, step 2.2] ∎

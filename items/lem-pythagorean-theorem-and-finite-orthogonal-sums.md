---
id: lem-pythagorean-theorem-and-finite-orthogonal-sums
kind: lemma
title: Pythagoras and finite orthogonal sums
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-orthogonality-and-orthogonal-complement, thm-parallelogram-law, def-real-and-complex-inner-product-space]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §1.3.3, p.38"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Lecture 15"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
---

## Statement

Let $x_1,\dots,x_n$ be pairwise orthogonal vectors in a real or complex inner-product space, that is $\langle x_i,x_j\rangle=0$ whenever $i\ne j$ ([[def-orthogonality-and-orthogonal-complement]]). Then

$$\Bigl\|\sum_{j=1}^{n}x_j\Bigr\|^2=\sum_{j=1}^{n}\|x_j\|^2 ,$$

the empty sum on the right being $0$ at $n=0$.

## Facts & Assumptions

[A1] Orthogonality means $\langle x,y\rangle=0$, the pairing is linear in the first argument and conjugate-linear in the second, and $\|v\|^2=\langle v,v\rangle$ ([[def-orthogonality-and-orthogonal-complement]], [[def-real-and-complex-inner-product-space]]).

[A2] Every inner-product norm satisfies the parallelogram law ([[thm-parallelogram-law]]).

## Proof

**Proof technique:** direct.

**Given:** Pairwise orthogonal vectors $x_1,\dots,x_n$ in a real or complex inner-product space.

1.1 At $n=0$ the sum is $0$ and both sides vanish, and at $n=1$ the identity is $\|x_1\|^2=\|x_1\|^2$. [A1]

1.2 For two orthogonal vectors $x,y$, expansion gives $\|x+y\|^2=\|x\|^2+\langle x,y\rangle+\langle y,x\rangle+\|y\|^2=\|x\|^2+\|y\|^2$, and the same computation with $y$ replaced by $-y$ shows that the sum of a finite orthogonal family may be split off one term at a time. [A1, A2, algebra]

2.1 Suppose the identity holds for orthogonal families of $n-1$ terms, $n\ge2$, and let $x_1,\dots,x_n$ be pairwise orthogonal; the partial sum $s=\sum_{j=1}^{n-1}x_j$ satisfies $\langle s,x_n\rangle=\sum_{j=1}^{n-1}\langle x_j,x_n\rangle=0$ by linearity in the first argument, and $\|s\|^2=\sum_{j=1}^{n-1}\|x_j\|^2$ by the induction hypothesis, so $\|\sum_{j=1}^{n}x_j\|^2=\|s+x_n\|^2=\|s\|^2+\|x_n\|^2=\sum_{j=1}^{n}\|x_j\|^2$. [step 1.2, step 1.1, A1, algebra]

3.1 Induction on $n$ from the cases $n=0,1$ of step 1.1 and the induction step of step 2.1 proves the identity for every $n$, so pairwise orthogonal vectors satisfy $\|\sum_{j=1}^{n}x_j\|^2=\sum_{j=1}^{n}\|x_j\|^2$. [step 1.1, step 2.1] ∎

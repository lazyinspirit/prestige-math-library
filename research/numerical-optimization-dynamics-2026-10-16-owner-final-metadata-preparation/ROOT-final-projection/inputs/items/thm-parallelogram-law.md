---
id: thm-parallelogram-law
kind: theorem
title: The parallelogram law
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [cor-inner-product-induces-a-norm, def-real-and-complex-inner-product-space, def-inner-product-norm]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §1.3.3, p.39"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Lecture 15"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
---

## Statement

In every real or complex inner-product space, for all vectors $x,y$,

$$\|x+y\|^2+\|x-y\|^2=2\|x\|^2+2\|y\|^2 .$$

## Facts & Assumptions

[A1] The pairing is linear in the first argument, conjugate-linear in the second and conjugate symmetric, and $\|v\|^2=\langle v,v\rangle$ ([[def-real-and-complex-inner-product-space]]).

[A2] The induced length is the unique nonnegative square root of the diagonal pairing, so $\|v\|^2=\langle v,v\rangle$ ([[def-inner-product-norm]]).

## Proof

**Proof technique:** direct.

**Given:** Vectors $x,y$ in a real or complex inner-product space.

1.1 Expanding with linearity in the first argument, conjugate-linearity in the second and conjugate symmetry gives $\|x+y\|^2=\langle x+y,x+y\rangle=\|x\|^2+\langle x,y\rangle+\overline{\langle x,y\rangle}+\|y\|^2$ and, replacing $y$ by $-y$, $\|x-y\|^2=\|x\|^2-\langle x,y\rangle-\overline{\langle x,y\rangle}+\|y\|^2$. [A1, A2, algebra]

2.1 The cross terms in step 1.1 cancel when the two expansions are added, so $\|x+y\|^2+\|x-y\|^2=2\|x\|^2+2\|y\|^2$, the parallelogram law. [step 1.1, algebra] ∎

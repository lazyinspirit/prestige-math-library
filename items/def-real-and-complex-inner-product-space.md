---
id: def-real-and-complex-inner-product-space
kind: definition
title: Real and complex inner-product spaces and their induced length
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-inner-product-space, def-inner-product-norm, def-complex-conjugate-real-imaginary-part-and-modulus]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §1.3.3, §2.3.6 and §§5.3.1–5.3.2"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Lectures 15–16 and 22–23"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
---

## Definition

Let $\mathbb F$ be $\mathbb R$ or $\mathbb C$, with **conjugation** $z\mapsto\overline z$
the identity on $\mathbb R$ and complex conjugation on $\mathbb C$
([[def-complex-conjugate-real-imaginary-part-and-modulus]]). A **real** or
**complex inner-product space** is an $\mathbb F$-vector space $V$ together with
an inner product $\langle\cdot,\cdot\rangle:V\times V\to\mathbb F$ in the sense
of [[def-inner-product-space]]: for all $u,v,w\in V$ and $a,b\in\mathbb F$,

$$\langle au+bv,w\rangle=a\langle u,w\rangle+b\langle v,w\rangle,\qquad \langle u,v\rangle=\overline{\langle v,u\rangle},\qquad \langle v,v\rangle\ge0,\quad \langle v,v\rangle=0\iff v=0 .$$

**Conjugate-linearity in the second argument.** Conjugate symmetry together with
linearity in the first argument gives, for all $w\in V$,

$$\langle w,au+bv\rangle=\overline{\langle au+bv,w\rangle}=\overline{a\langle u,w\rangle+b\langle v,w\rangle}=\overline a\,\langle w,u\rangle+\overline b\,\langle w,v\rangle .$$

**Induced length.** The **induced length**, or inner-product norm, of $v$ is

$$\|v\|:=\sqrt{\langle v,v\rangle},$$

which is exactly the published [[def-inner-product-norm]]: positive definiteness
makes $\langle v,v\rangle$ a nonnegative real with a unique nonnegative square
root, so that $\|v\|\ge0$, $\|v\|=0$ exactly for $v=0$, and
$\langle v,v\rangle=\|v\|^2$.

**The convention on this page.** Every inner-product space below is real or
complex in this sense, the pairing is linear in the first argument and
conjugate-linear in the second, and $\|v\|$ always denotes the induced length.
In the real case conjugation is the identity and $|z|$ is the absolute value of
$\mathbb R$; in the complex case they are complex conjugation and the complex
modulus. All statements below are therefore written once and read in either
scalar field.

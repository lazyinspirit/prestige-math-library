---
id: lem-complex-modulus-of-real-embedding-equals-real-absolute-value
kind: lemma
title: "Complex modulus restricts to real absolute value"
status: draft
origin: pipeline
pipeline_run: quantum-prerequisites-4-2026-10-15
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-complex-numbers-and-arithmetic, def-complex-conjugate-real-imaginary-part-and-modulus, def-abs-value, lem-of-abs-value, lem-of-square-positive, lem-of-zero-mult, thm-of-square-roots]
justified_by: []
dependency_level: 0
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Tomasz Kochanek, Functional analysis, Lecture 1 (complete five-page lecture notes)"
      url: "https://www.impan.pl/~tkoch/FA_lecturenotes/lecture1.pdf"
    - title: "M. Winklmeier, Functional Analysis lecture notes (complete 140-page lecture notes)"
      url: "https://math.uniandes.edu.co/~mwinklme/teaching/FuncAna/FA-lecture_notes.pdf"
---

## Statement

For every real $r$, write $\lambda_r$ for its canonical image in $\mathbb C$. Then
$$
|\lambda_r|_{\mathbb C}=|r|_{\mathbb R}.
$$

## Facts & Assumptions

**Given:** A real number $r$ and the complex modulus and real absolute value in the cited definitions. Write $\lambda_r$ for its constant-class image in $\mathbb C$.

[F1] The canonical real embedding sends $r$ to its constant class in $\mathbb C$ ([[def-complex-numbers-and-arithmetic]]).

[F2] The imaginary unit $i$ is the class of the polynomial $x$ in $\mathbb C=\mathbb R[x]/(x^2+1)$ ([[def-complex-numbers-and-arithmetic]]).

[F3] Every complex number has unique real coordinates $a+bi$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F4] The complex modulus is $|a+bi|_{\mathbb C}=\sqrt{a^2+b^2}$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F5] Real absolute value is nonnegative and equals $r$ when $r\ge0$ and $-r$ when $r<0$ ([[def-abs-value]], [[lem-of-abs-value]]).

[F6] If $r\ne0$, then $r^2>0$ ([[lem-of-square-positive]]); if $r=0$, then $r^2=0$ by $0\cdot a=0$ in a field ([[lem-of-zero-mult]]).

[F7] Every nonnegative real has a unique nonnegative square root ([[thm-of-square-roots]]).

## Proof

1.1 The canonical image of $r$ is the class of the constant polynomial $r$ by [F1]. Since $i$ is the class of $x$ by [F2], this is also the class of $r+0x$, namely $r+0i$. Uniqueness of complex coordinates in [F3] identifies that image with $r+0i$. [F1, F2, F3, algebra]

1.2 If $r=0$ then $r^2=0$, and if $r\ne0$ then [F6] gives $r^2>0$. Thus $r^2\ge0$ in either case, so [F7] guarantees that its nonnegative square root exists. [F6, F7, cases]

1.3 By [F5], $|r|_{\mathbb R}\ge0$. If $r\ge0$, then $|r|=r$; if $r<0$, then $|r|=-r$. In either case $|r|_{\mathbb R}^2=r^2$, including $r=0$. [F5, algebra]

2.1 By [F4] and step 1.1, the modulus of the canonical image of $r$ is $\sqrt{r^2+0^2}=\sqrt{r^2}$, whose radicand is nonnegative by step 1.2. [F4, step 1.1, step 1.2, algebra]

3.1 Step 2.1 and step 1.3 identify the complex modulus of the canonical image of $r$ and $|r|_{\mathbb R}$ as nonnegative square roots of the same $r^2$. By uniqueness in [F7], they are equal. [F7, step 2.1, step 1.3] ∎

---
id: ex-riesz-transforms-square-to-minus-the-identity-in-sum
kind: example
title: "Finite sum of Riesz squares in L2"
status: published
origin: pipeline
deps: [def-riesz-transforms-on-euclidean-space, cor-riesz-transforms-are-ltwo-bounded, cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity, lem-ltwo-fourier-multiplier-bound, thm-plancherel, def-countable-choice, def-complex-lp-and-euclidean-test-function-conventions]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Section 5.1.4, Proposition 5.1.16, printed p. 327"
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "Chapter 20, identities after Definition 20.1, printed p. 114"
---

## Statement

Assume [[def-countable-choice|Countable Choice]] and let $n\ge1$. Let
$R_1,\dots,R_n$ be the Riesz transforms of
[[def-riesz-transforms-on-euclidean-space]], the $L^2(\mathbb R^n;\mathbb C)$
operators $R_j=\mathcal F_2^{-1}M_{m_j}\mathcal F_2$ with symbols

$$ m_j(\xi)=\begin{cases}-i\,\xi_j/|\xi|,&\xi\ne0,\\0,&\xi=0 .\end{cases} $$

Then:

1. $\sum_{j=1}^nR_j^2f=-f$ for every $f\in L^2(\mathbb R^n;\mathbb C)$, the
   identity holding as $L^2$ classes, with the explicit finite symbol
   computation $\sum_{j=1}^nm_j(\xi)^2=-1$ for every $\xi\ne0$;
2. at $n=1$ the operator $R_1$ is the line Hilbert transform $H$ of
   [[cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity]],
   so the $n=1$ case of assertion 1 is exactly $H^2=-I$;
3. the assigned value $m_j(0)=0$ is immaterial: it is a value on the
   Lebesgue-null singleton $\{0\}$, and the multiplier operator depends only on
   the almost-everywhere class of its symbol. Unlike the periodic conjugate
   operator, no zero-mode exception arises here.

This is an $L^2$ statement only; no $L^p$ bound for $p\ne2$ is asserted.

## Facts & Assumptions

**Given:** [[def-countable-choice|Countable Choice]], the dimension $n\ge1$, and the Euclidean $L^2$ conventions of [[def-complex-lp-and-euclidean-test-function-conventions]].

[F1] For $1\le j\le n$ the $j$-th Riesz transform is $R_j=\mathcal F_2^{-1}M_{m_j}\mathcal F_2$ with $m_j(\xi)=-i\xi_j/|\xi|$ for $\xi\ne0$ and $m_j(0)=0$; the symbol is measurable with $|m_j(\xi)|\le1$ everywhere, $R_j$ is well-defined and bounded on $L^2$ with $\|R_j\|\le1$, the assigned value at the origin has no effect on the operator, and the definition asserts only the multiplier description. [[def-riesz-transforms-on-euclidean-space]]

[F2] A measurable symbol $m$ with finite essential supremum defines $T_m=\mathcal F_2^{-1}M_m\mathcal F_2$, a bounded operator with $\|T_m\|=\|m\|_\infty$, and the operator depends only on the almost-everywhere class of $m$: values on Lebesgue-null sets, including the single point $\{0\}$, do not affect the operator or its norm. [[lem-ltwo-fourier-multiplier-bound]]

[F3] For these Riesz transforms $\|R_jf\|_2\le\|f\|_2$ and $\sum_{j=1}^nR_j^2f=-f$ for every $f\in L^2(\mathbb R^n;\mathbb C)$, as $L^2$ statements only. [[cor-riesz-transforms-are-ltwo-bounded]]

[F4] The line Hilbert transform has Schwartz-core symbol $-i\operatorname{sgn}(\xi)$, extends uniquely to a bounded operator $H$ on $L^2(\mathbb R;\mathbb C)$ with $\|Hf\|_2=\|f\|_2$ and $H^2f=-f$; the point $\xi=0$, where the symbol vanishes, is Lebesgue null and creates no zero-mode exception. [[cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity]]

[F5] Plancherel: $\mathcal F_2$ is a surjective complex-linear isometry of $L^2(\mathbb R^n;\mathbb C)$, so $\mathcal F_2^{-1}$ is complex-linear and $\mathcal F_2^{-1}(-g)=-\mathcal F_2^{-1}g$, while $\mathcal F_2^{-1}(-\mathcal F_2g)=-g$ for every class $g$. [[thm-plancherel]]

## Proof

**Proof technique:** direct.

1.1 For $\xi\ne0$ and every $j$ one has $m_j(\xi)^2=\bigl(-i\xi_j/|\xi|\bigr)^2=-\xi_j^2/|\xi|^2$, so the finite sum is $s(\xi):=\sum_{j=1}^nm_j(\xi)^2=-\sum_{j=1}^n\xi_j^2/|\xi|^2=-1$, while $s(0)=\sum_jm_j(0)^2=0$. Also each $m_j$ is measurable, and $|m_j(\xi)|=|\xi_j|/|\xi|\le1$ for $\xi\ne0$ while $m_j(0)=0$, so $|m_j|\le1$ everywhere. [F1, algebra]

2.1 The symbol $s=\sum_{j=1}^nm_j^2$ of step 1.1 is measurable and satisfies $|s(\xi)|=1$ for $\xi\ne0$ and $s(0)=0$, hence $|s|\le1$ everywhere; since $s$ agrees with the constant function $-1$ on the complement of the singleton $\{0\}$, which is Lebesgue null, $s$ and $-1$ have the same almost-everywhere class. [step 1.1, F2]

2.2 Since $R_j=\mathcal F_2^{-1}M_{m_j}\mathcal F_2$ by [F1], the composition of the two bounded operators $\mathcal F_2$ and $\mathcal F_2^{-1}$ gives $R_j^2=\mathcal F_2^{-1}M_{m_j}M_{m_j}\mathcal F_2=\mathcal F_2^{-1}M_{m_j^2}\mathcal F_2=T_{m_j^2}$ in the notation of [F2], and summing the finitely many bounded operators gives $\sum_{j=1}^nR_j^2=\mathcal F_2^{-1}M_s\mathcal F_2=T_s$ by the complex-linearity of $\mathcal F_2$ and $\mathcal F_2^{-1}$ in [F1] and [F5]. [step 1.1, F1, F2, F5]

2.3 At $n=1$ one has $|\xi|=\sqrt{\xi^2}=|\xi_1|$, so for $\xi\ne0$ the symbol of [F1] is $m_1(\xi)=-i\xi/|\xi|=-i\operatorname{sgn}(\xi)$, while $m_1(0)=0=-i\operatorname{sgn}(0)$ as well; hence $m_1$ is exactly the signum symbol of [F4] at every point, and by [F2] the operators agree: $R_1=T_{m_1}=T_{-i\operatorname{sgn}}=H$. [step 1.1, F1, F2, F4]

3.1 By [F2] the operator $T_s$ depends only on the almost-everywhere class of $s$, which by step 2.1 is the class of the constant $-1$; so $T_s=T_{-1}$, and for $f\in L^2(\mathbb R^n;\mathbb C)$ the isometry and linearity of [F5] give $T_{-1}f=\mathcal F_2^{-1}(-\mathcal F_2f)=-\mathcal F_2^{-1}\mathcal F_2f=-f$. Combined with step 2.2 this gives $\sum_{j=1}^nR_j^2f=-f$ for every $f\in L^2(\mathbb R^n;\mathbb C)$, which is assertion 1 and agrees with the identity recorded in [F3]. [step 2.1, step 2.2, F2, F3, F5]

4.1 For $n=1$, step 2.3 identifies $R_1$ with $H$, so $R_1^2=H^2=-I$ on $L^2(\mathbb R;\mathbb C)$ by [F4]; this is exactly the case $n=1$ of the sum identity proved in step 3.1, and it exhibits assertion 2. [step 2.3, step 3.1, F4]

5.1 Finally, the assignment $m_j(0)=0$ is a value on the Lebesgue-null singleton $\{0\}$, and the multiplier operator depends only on the almost-everywhere class of its symbol by [F2]; changing that single value therefore changes neither $R_j$ nor any identity above. This is the announced contrast with the periodic conjugate operator, whose multiplier is defined on the frequency-zero mode of a finite-measure circle: on Euclidean $L^2$ there is no exceptional constant mode attached to the null set $\{0\}$, so assertion 3 holds. [step 2.1, step 4.1, F2, F3] ∎

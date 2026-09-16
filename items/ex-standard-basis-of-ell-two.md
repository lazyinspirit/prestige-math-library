---
id: ex-standard-basis-of-ell-two
kind: example
title: The standard basis of $\ell^2(\mathbb N)$
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-square-summable-family-on-an-arbitrary-index-set, thm-monotone-convergence, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-hilbert-space-fourier-expansion, def-countable-choice, lem-finite-bessel-inequality, def-real-and-complex-inner-product-space, lem-pythagorean-theorem-and-finite-orthogonal-sums]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — Example 2.65, p.87"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §2.1, p.52"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]). In
$\ell^2(\mathbb N,\mathbb F)$
([[def-square-summable-family-on-an-arbitrary-index-set]]) let $u_n$ be the
family that is $1$ at $n$ and $0$ elsewhere. Then $(u_n)_{n\in\mathbb N}$ is an
orthonormal basis of $\ell^2(\mathbb N,\mathbb F)$
([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]), and
for every $a=(a_n)\in\ell^2(\mathbb N,\mathbb F)$ the canonical partial sums
converge,

$$a=\sum_{n=0}^{\infty}a_nu_n\quad\text{in }\ell^2\text{-norm},\qquad \|a\|_2^2=\sum_{n=0}^{\infty}|a_n|^2 .$$

## Facts & Assumptions

[A1] For $a,b\in\ell^2(\mathbb N,\mathbb F)$ the pairing is $\langle a,b\rangle=\sum_{n\in\mathbb N}a_n\overline{b_n}$ (a finite-subset sum), $\|a\|_2^2=\sum_{n\in\mathbb N}|a_n|^2$, and for a finite $F$ the difference satisfies $\|a-a\cdot\mathbf 1_F\|_2^2=\sum_{n\notin F}|a_n|^2$; if $\sum_n|a_n|^2<+\infty$ then for every real $\varepsilon>0$ some finite $F$ has $\sum_{n\notin F}|a_n|^2<\varepsilon$ ([[def-square-summable-family-on-an-arbitrary-index-set]]).

[A2] $\langle u_n,u_m\rangle=\delta_{nm}$, so the $u_n$ have norm one and are pairwise orthogonal; finite orthogonal sums satisfy Pythagoras ([[def-real-and-complex-inner-product-space]], [[lem-pythagorean-theorem-and-finite-orthogonal-sums]]).

[A3] If a Cauchy sequence $(a^{(m)})$ in $\ell^2(\mathbb N,\mathbb F)$ has coordinate-wise limits $a_n$, then $a=(a_n)\in\ell^2$ and $a^{(m)}\to a$: for $\varepsilon>0$ choose $M$ with $\|a^{(m)}-a^{(p)}\|_2\le\varepsilon$ for $m,p\ge M$; for each finite $F$, letting $p\to\infty$ in the finite sums gives $\sum_{n\in F}|a_n-a^{(M)}_n|^2\le\varepsilon^2$; taking the supremum over finite $F$ gives $\|a-a^{(M)}\|_2\le\varepsilon$, so $a\in\ell^2$ and all $a^{(m)}$ with $m\ge M$ are within $\varepsilon$ of $a$ ([[def-square-summable-family-on-an-arbitrary-index-set]]).

[A4] A nondecreasing sequence of reals bounded above converges to the supremum of its range ([[thm-monotone-convergence]]).

[A5] A complete orthonormal family expands every vector as the norm limit of its finite-subset partial sums ([[thm-hilbert-space-fourier-expansion]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

## Verification

**Proof technique:** direct.

**Given:** $\mathbb F\in\{\mathbb R,\mathbb C\}$ and the coordinate vectors $u_n\in\ell^2(\mathbb N,\mathbb F)$.

1.1 The coordinate vectors are orthonormal: for all $n,m$ one has $\langle u_n,u_m\rangle=\delta_{nm}$ because each finite sum has the single surviving term $n=m$. [A2]

1.2 The space $\ell^2(\mathbb N,\mathbb F)$ is complete: if $(a^{(m)})$ is Cauchy, then for each fixed $n$ the scalars $a^{(m)}_n$ form a Cauchy sequence in $\mathbb F$ because $|a^{(m)}_n-a^{(p)}_n|\le\|a^{(m)}-a^{(p)}\|_2$, hence converge to a scalar $a_n$; by [A3] the family $a=(a_n)$ lies in $\ell^2$ and is the limit of the sequence. [A3]

2.1 The closed linear span of the coordinate vectors is all of $\ell^2(\mathbb N,\mathbb F)$: for $a\in\ell^2$ and $\varepsilon>0$, [A1] gives a finite $F$ with $\sum_{n\notin F}|a_n|^2<\varepsilon$, and the vector $a\cdot\mathbf 1_F=\sum_{n\in F}a_nu_n$ lies in the span with $\|a-a\cdot\mathbf 1_F\|_2^2=\sum_{n\notin F}|a_n|^2<\varepsilon^2$; hence every $a$ is a limit of span elements. [step 1.1, A1]

3.1 By steps 1.1, 1.2 and 2.1, $\ell^2(\mathbb N,\mathbb F)$ is a Hilbert space and $(u_n)$ is an orthonormal family with dense span, hence a complete orthonormal family, i.e. an orthonormal basis; the expansion $a=\sum_na_nu_n$ is then the finite-subset expansion, and the canonical partial sums $\sum_{n<N}a_nu_n$ converge to $a$ because their distance to $a$ is the square root of the omitted tail $\sum_{n\ge N}|a_n|^2$, while the nondecreasing partial sums $t_N=\sum_{n<N}|a_n|^2$ converge to their supremum $\|a\|_2^2$ by [A4], so the tails tend to $0$; the norm formula is the definition of $\|\cdot\|_2$ in [A1]. [step 1.1, step 1.2, step 2.1, A1, A4, A5] ∎

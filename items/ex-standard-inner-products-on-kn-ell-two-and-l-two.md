---
id: ex-standard-inner-products-on-kn-ell-two-and-l-two
kind: example
title: The standard inner products make K n, ell two and quotient L two Hilbert spaces
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-hilbert-space, def-real-and-complex-inner-product-space, lem-complex-conjugation-and-modulus-laws, cor-finite-dimensional-normed-spaces-are-banach, rem-ell-p-is-l-p-of-counting-measure, def-l-p-space-as-a-quotient-by-null-functions, def-counting-measure, thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz, lem-complex-lp-completeness-density-and-inner-product, thm-riesz-fischer-completeness-of-l-p, def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Example 1.42, p.39 and §2.3.6"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Lectures 15–16 and 22–23"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
---

## Example

Assume the Axiom of Countable Choice. Let $\mathbb K$ be $\mathbb R$ or $\mathbb C$ and let $(X,\mathcal A,\mu)$ be a measure space. Then the following are real or complex Hilbert spaces with the displayed first-variable-linear pairings, whose induced lengths are the standard norms:

1. $\mathbb K^n$ with $\langle x,y\rangle=\sum_{j<n}x_j\overline{y_j}$, for each natural $n$;
2. $\ell^2(\mathbb N;\mathbb K)$ with $\langle x,y\rangle=\sum_{k\ge0}x_k\overline{y_k}$;
3. the quotient $L^2(\mu;\mathbb K)$ with $\langle[f],[g]\rangle=\int_X f\overline g\,d\mu$.

In the real case conjugation is the identity, so the pairings read $x\cdot y=\sum_jx_jy_j$ and $\int fg\,d\mu$.

## Facts & Assumptions

[A1] In a real or complex inner-product space the pairing is linear in the first argument and conjugate-linear and conjugate-symmetric in the second, positive definite, and the induced length is the square root of the diagonal pairing ([[def-real-and-complex-inner-product-space]]).

[A2] For complex scalars $|z|^2=z\overline z\ge0$ with $|z|=0$ exactly for $z=0$, and $|zw|=|z|\,|w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

[A3] A normed space admitting a finite basis is a Banach space ([[cor-finite-dimensional-normed-spaces-are-banach]]), and a Hilbert space is an inner-product space complete for its induced norm ([[def-hilbert-space]]).

[A4] On $(\mathbb N,\mathcal P(\mathbb N),\#)$ the integral is the series of values, $\mathcal L^p(\#)$ is the space of $p$-summable sequences, and almost-everywhere equality is equality everywhere ([[rem-ell-p-is-l-p-of-counting-measure]], [[def-counting-measure]]).

[A5] On the quotient $L^2(\mu;\mathbb C)$ the pairing $\langle[f],[g]\rangle=\int f\overline g$ is representative-independent and satisfies the inner-product axioms, with $\langle f,f\rangle=\|f\|_2^2$ ([[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]).

[A6] Under countable choice, complex $L^p$ is complete and the complex $L^2$ pairing and its Cauchy–Schwarz inequality are available; the real $L^p$ spaces are complete for the same hypothesis ([[lem-complex-lp-completeness-density-and-inner-product]], [[thm-riesz-fischer-completeness-of-l-p]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[A7] Countable Choice is the hypothesis under which the $L^p$ completeness theorems and the complex pairing theorem are stated ([[def-countable-choice]]).

## Verification

**Proof technique:** direct.

**Given:** A scalar field $\mathbb K\in\{\mathbb R,\mathbb C\}$, a natural $n$ and a measure space $(X,\mathcal A,\mu)$.

1.1 On $\mathbb K^n$ the displayed pairing is linear in the first argument and conjugate symmetric by the finite-sum algebra of [A1], and positive definite because $\sum_{j<n}|x_j|^2=0$ forces every $|x_j|=0$ and hence every $x_j=0$ by [A2]; the induced length is $\bigl(\sum_{j<n}|x_j|^2\bigr)^{1/2}$, a norm on the finite-dimensional space $\mathbb K^n$, which is therefore complete by [A3]; so $\mathbb K^n$ is a Hilbert space for this pairing. [A1, A2, A3]

1.2 On $\ell^2(\mathbb N;\mathbb K)$ the pairing is the counting-measure integral of $f\overline g$ by [A4], so $\langle x,y\rangle=\sum_{k\ge0}x_k\overline{y_k}$ with absolutely convergent series; the complex case is [A5] and the real case is the restriction of [A5] to real-valued classes, where conjugation is the identity, so in both cases the axioms of [A1] hold and the induced length is the $\ell^2$ norm; completeness is the counting-measure instance of [A6]. [A1, A4, A5, A6, A7]

1.3 On the quotient $L^2(\mu;\mathbb K)$ the displayed pairing is well defined on a.e. classes and satisfies the inner-product axioms with $\langle[f],[f]\rangle=\|[f]\|_2^2$ by [A5] in the complex case and by the same statement restricted to real-valued classes in the real case, and completeness is [A6]. [A1, A5, A6, A7]

2.1 Hence $\mathbb K^n$, $\ell^2(\mathbb N;\mathbb K)$ and $L^2(\mu;\mathbb K)$ are inner-product spaces complete for the induced norms, that is Hilbert spaces, with the pairings displayed in the statement. [step 1.1, step 1.2, step 1.3, A3] ∎

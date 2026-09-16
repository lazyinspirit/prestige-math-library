---
id: thm-parseval-identity-for-fourier-series
kind: theorem
title: The Parseval identity for Fourier series
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-trigonometric-system-is-complete-in-l-two-of-the-torus, thm-parseval-equivalences-for-a-complete-orthonormal-family, def-countable-choice, thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set, def-fourier-coefficients-and-trigonometric-polynomials, def-square-summable-family-on-an-arbitrary-index-set, lem-trigonometric-characters-are-orthonormal, lem-finite-set-has-max, lem-l-two-with-the-integral-pairing-is-a-hilbert-space]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §2.5, Theorem 2.17 and equation (2.48)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — Example 2.66, pp.87–88"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). For all
$f,g\in L^2(\mathbb T;\mathbb C)$,

$$\|f\|_2^2=\sum_{k\in\mathbb Z}|\widehat f(k)|^2,\qquad \langle f,g\rangle=\sum_{k\in\mathbb Z}\widehat f(k)\overline{\widehat g(k)} ,$$where both sums are taken in the finite-subset-supremum/finite-subset-net sense of [[def-square-summable-family-on-an-arbitrary-index-set]]. The bilinear series is absolutely convergent,$$\sum_{k\in\mathbb Z}\bigl|\widehat f(k)\overline{\widehat g(k)}\bigr|\le \Bigl(\sum_{k\in\mathbb Z}|\widehat f(k)|^2\Bigr)^{1/2} \Bigl(\sum_{k\in\mathbb Z}|\widehat g(k)|^2\Bigr)^{1/2},$$

and the value is also the limit of the canonical symmetric partial sums
$\sum_{|k|\le N}\widehat f(k)\overline{\widehat g(k)}$.

## Facts & Assumptions

[A1] The characters are an orthonormal basis of the complex Hilbert space $L^2(\mathbb T;\mathbb C)$ ([[thm-trigonometric-system-is-complete-in-l-two-of-the-torus]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

[A2] For a Hilbert space with orthonormal basis $(e_i)_{i\in I}$ the coefficient map $x\mapsto(\langle x,e_i\rangle)_{i\in I}$ is a linear bijection onto $\ell^2(I,\mathbb F)$ preserving norms and inner products ([[thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set]]).

[A3] $\widehat f(k)=\langle f,e_k\rangle$ ([[def-fourier-coefficients-and-trigonometric-polynomials]], [[lem-trigonometric-characters-are-orthonormal]]).

[A4] On $\ell^2(\mathbb Z,\mathbb C)$ the pairing is $\langle a,b\rangle=\sum_{k\in\mathbb Z}a_k\overline{b_k}$, the finite-dimensional Cauchy–Schwarz inequality gives $\sum_{k\in F}|a_k\overline{b_k}|\le(\sum_{k\in F}|a_k|^2)^{1/2}(\sum_{k\in F}|b_k|^2)^{1/2}$ for finite $F$, and passing to the supremum over finite $F$ bounds the total absolute sum by $\|a\|_2\|b\|_2$ ([[def-square-summable-family-on-an-arbitrary-index-set]]).

[A5] For an absolutely summable family the finite-subset net limit equals the limit of the symmetric partial sums, because the symmetric index sets are cofinal among the finite subsets of $\mathbb Z$ ([[def-square-summable-family-on-an-arbitrary-index-set]], [[lem-finite-set-has-max]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice and $f,g\in L^2(\mathbb T;\mathbb C)$.

1.1 By [A1] and [A2] the coefficient map $h\mapsto(\widehat h(k))_{k\in\mathbb Z}$ is a linear bijection of $L^2(\mathbb T;\mathbb C)$ onto $\ell^2(\mathbb Z,\mathbb C)$ preserving norms and inner products; therefore $\|f\|_2^2=\|(\widehat f(k))\|_2^2=\sum_{k\in\mathbb Z}|\widehat f(k)|^2$ and $\langle f,g\rangle=\sum_{k\in\mathbb Z}\widehat f(k)\overline{\widehat g(k)}$. [A1, A2, A3]

2.1 The bilinear series converges absolutely: by the finite Cauchy–Schwarz inequality of [A4], every finite subsum of $|\widehat f(k)\overline{\widehat g(k)}|$ is at most $\|(\widehat f(k))\|_2\|(\widehat g(k))\|_2=\|f\|_2\|g\|_2$, and taking the supremum over finite subsets gives the displayed bound; in particular the family is summable in the sense of the finite-subset net. [step 1.1, A4]

3.1 The sum equals the limit of the symmetric partial sums: since the family is absolutely summable, its finite-subset net converges, and the symmetric index sets are cofinal among finite subsets by [A5], so the symmetric partial sums converge to the same value. [step 2.1, A5]

4.1 The norm identity and the sesquilinear identity of step 1.1, together with the absolute convergence and cofinality statements of steps 2.1 and 3.1, are exactly the assertions of the theorem. [step 1.1, step 2.1, step 3.1] ∎

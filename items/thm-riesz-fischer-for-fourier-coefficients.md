---
id: thm-riesz-fischer-for-fourier-coefficients
kind: theorem
title: "Riesz–Fischer: the Fourier coefficient map is onto the space of square-summable families"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-trigonometric-system-is-complete-in-l-two-of-the-torus, thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set, def-countable-choice, def-fourier-coefficients-and-trigonometric-polynomials, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, def-square-summable-family-on-an-arbitrary-index-set]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §2.5, Theorem 2.17, final assertion"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — Exercise 2.64, p.87"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). The Fourier
coefficient map

$$\Phi:L^2(\mathbb T;\mathbb C)\to\ell^2(\mathbb Z,\mathbb C),\qquad \Phi(f):=\bigl(\widehat f(k)\bigr)_{k\in\mathbb Z},$$

is a surjective linear isometry preserving inner products:
$\|\Phi(f)\|_2=\|f\|_2$ and
$\langle\Phi(f),\Phi(g)\rangle_{\ell^2}=\langle f,g\rangle$ for all $f,g$.

Consequently every square-summable family $a\in\ell^2(\mathbb Z,\mathbb C)$ is
the sequence of Fourier coefficients of a unique class
$f\in L^2(\mathbb T;\mathbb C)$, namely the $L^2$ limit of the partial sums
$\sum_{|k|\le N}a_ke_k$. This is a surjectivity statement about the coefficient
map, not the completeness theorem for $L^p$.

## Facts & Assumptions

[A1] The characters are an orthonormal basis of the complex Hilbert space $L^2(\mathbb T;\mathbb C)$ ([[thm-trigonometric-system-is-complete-in-l-two-of-the-torus]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

[A2] If $(e_i)_{i\in I}$ is an orthonormal basis of a Hilbert space $H$, then $x\mapsto(\langle x,e_i\rangle)_{i\in I}$ is a surjective linear isometry $H\to\ell^2(I,\mathbb F)$ preserving inner products, and $\ell^2(I,\mathbb F)$ is complete ([[thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set]]).

[A3] $\widehat f(k)=\langle f,e_k\rangle$, so $\Phi$ is the coefficient map of the character basis ([[def-fourier-coefficients-and-trigonometric-polynomials]]).

[A4] The elements of $\ell^2(\mathbb Z,\mathbb C)$ are the square-summable families, and the expansion of an element $a$ in the coordinate vectors is its defining family, so surjectivity of the coefficient map means exactly that every $a$ occurs as $(\widehat f(k))$ for some $f$ ([[def-square-summable-family-on-an-arbitrary-index-set]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice and the Fourier coefficient map $\Phi$.

1.1 By [A1] the characters are an orthonormal basis of $L^2(\mathbb T;\mathbb C)$, and by [A3] the map $\Phi$ is exactly the coefficient map of that basis. [A1, A3]

2.1 The general coefficient-isometry theorem for Hilbert spaces with a given orthonormal basis therefore applies to $\Phi$: it is a linear bijection onto $\ell^2(\mathbb Z,\mathbb C)$ satisfying $\|\Phi(f)\|_2=\|f\|_2$ and $\langle\Phi(f),\Phi(g)\rangle_{\ell^2}=\langle f,g\rangle$, and the target space is complete. [step 1.1, A2]

3.1 In particular $\Phi$ is surjective: for every $a\in\ell^2(\mathbb Z,\mathbb C)$ there is exactly one $f\in L^2(\mathbb T;\mathbb C)$ with $\widehat f(k)=a_k$ for all $k$, and that $f$ is the limit of the partial sums of the series $\sum a_ke_k$ by the synthesis part of the same theorem. [step 2.1, A4]

4.1 Steps 2.1 and 3.1 are the announced surjective isometry and the Riesz–Fischer uniqueness of the class realizing a given square-summable coefficient family. [step 2.1, step 3.1] ∎

---
id: thm-trigonometric-system-is-complete-in-l-two-of-the-torus
kind: theorem
title: The trigonometric system is complete in $L^2$ of the torus
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-trigonometric-characters-are-orthonormal, cor-trigonometric-polynomials-are-dense-in-continuous-periodic-functions, lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori, def-countable-choice, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-finite-measure-l-r-includes-into-l-p-for-p-less-r, def-fourier-coefficients-and-trigonometric-polynomials]
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
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §2.5, pp.64–65, Theorem 2.17"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — Example 2.66, pp.87–88"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). The characters
$(e_k)_{k\in\mathbb Z}$ form an orthonormal basis of the complex Hilbert space
$L^2(\mathbb T;\mathbb C)$
([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]],
[[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]): they are
orthonormal and their closed linear span is all of $L^2(\mathbb T;\mathbb C)$.

## Facts & Assumptions

[A1] The characters are orthonormal in $L^2(\mathbb T;\mathbb C)$ ([[lem-trigonometric-characters-are-orthonormal]]).

[A2] The complex continuous functions on $\mathbb T$ are dense in $L^2(\mathbb T;\mathbb C)$ for the $L^2$ norm ([[lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori]]).

[A3] The trigonometric polynomials are uniformly dense in $C(\mathbb T,\mathbb C)$, and on the probability space $\mathbb T$ one has $\|g\|_2\le m_{\mathbb T}(\mathbb T)^{1/2}\|g\|_\infty=\|g\|_\infty$ for continuous $g$ ([[cor-trigonometric-polynomials-are-dense-in-continuous-periodic-functions]], [[thm-finite-measure-l-r-includes-into-l-p-for-p-less-r]]).

[A4] The span of the characters is exactly the set of trigonometric polynomials, and an orthonormal family is complete exactly when its closed linear span is the whole space ([[def-fourier-coefficients-and-trigonometric-polynomials]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, the Hilbert space $L^2(\mathbb T;\mathbb C)$ and the characters $e_k$.

1.1 The characters are orthonormal by [A1], and their linear span is the set of trigonometric polynomials by [A4]. [A1, A4]

1.2 The closure of the span contains every continuous function: given continuous $g$ and $\varepsilon>0$, uniform density of trigonometric polynomials gives a polynomial $p$ with $\|g-p\|_\infty<\varepsilon$, and then $\|g-p\|_2\le\|g-p\|_\infty<\varepsilon$. [A3]

2.1 Hence the closed span contains the closure of $C(\mathbb T,\mathbb C)$, which is all of $L^2(\mathbb T;\mathbb C)$ by the density of continuous functions. [step 1.2, A2]

3.1 Therefore the characters are an orthonormal family whose closed linear span is $L^2(\mathbb T;\mathbb C)$, that is, an orthonormal basis of that Hilbert space. [step 1.1, step 2.1, A4] ∎

---
id: def-spatial-and-frequency-centres-and-variances
kind: definition
title: 'Spatial and frequency centres and variances of an $L^2$ function with finite second moments'
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps:
  - def-complex-lp-and-euclidean-test-function-conventions
  - def-countable-choice
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-l-p-space-as-a-quotient-by-null-functions
  - lem-complex-lp-completeness-density-and-inner-product
  - thm-plancherel
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Calder Sheagren, Uncertainty Principles with Fourier Analysis (University of Chicago REU 2017, author PDF)"
      url: "https://math.uchicago.edu/~may/REU2017/REUPapers/Sheagren.pdf"
      locator: "§§1–5, pp. 1–13; §2 Plancherel p. 5; §3 Heisenberg pp. 5–8 (3.3–3.12)"
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes (arXiv:0903.3845)"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "Chapter 24, Example 24.5 and Remark 24.6, printed pp. 145–146 (one-dimensional Heisenberg variances, with normalization converted here)"
---

## Definition

Assume countable choice ([[def-countable-choice]]). Let $n\ge1$ and let
$f\in L^2(\mathbb R^n;\mathbb C)$
([[def-l-p-space-as-a-quotient-by-null-functions]]) be nonzero with finite
second moments,
$$\int_{\mathbb R^n}|x|^2|f(x)|^2\,dx<\infty,\qquad \int_{\mathbb R^n}|\xi|^2|\widehat f(\xi)|^2\,d\xi<\infty,$$
where $\widehat f$ is the Plancherel transform of [[thm-plancherel]]. Define
the **spatial mean** $a=(a_1,\dots,a_n)$ and **spatial variance** $V_x(f)$, and
the **frequency mean** $b=(b_1,\dots,b_n)$ and **frequency variance**
$V_\xi(f)$, by
$$a_j:=\frac{1}{\|f\|_2^2}\int_{\mathbb R^n}x_j|f(x)|^2\,dx,\qquad V_x(f):=\frac{1}{\|f\|_2^2}\int_{\mathbb R^n}|x-a|^2|f(x)|^2\,dx,$$
$$b_j:=\frac{1}{\|\widehat f\|_2^2}\int_{\mathbb R^n}\xi_j|\widehat f(\xi)|^2\,d\xi,\qquad V_\xi(f):=\frac{1}{\|\widehat f\|_2^2}\int_{\mathbb R^n}|\xi-b|^2|\widehat f(\xi)|^2\,d\xi .$$
These are the probability-normalised means and variances of the measures
$|f(x)|^2dx/\|f\|_2^2$ and $|\widehat f(\xi)|^2d\xi/\|\widehat f\|_2^2$. The
integrals are read in the componentwise convention of
[[def-integrable-real-and-complex-functions-and-their-integrals]], with
$|f|^2=f\overline f$ and $x_j,\xi_j$ the real coordinate functions; the
frequencies are measured in the $e^{-2\pi ix\cdot\xi}$ convention of
[[thm-plancherel]] and [[def-complex-lp-and-euclidean-test-function-conventions]].
No centring is asserted here: the mean is subtracted in the variance but the
transformation property of the pair $(V_x,V_\xi)$ is proved separately in
[[lem-centering-by-translation-and-modulation-preserves-the-variance-product]].

## Well-definedness

Since $f\ne0$ in $L^2$, we have $\|f\|_2>0$. By the $L^2$ Cauchy–Schwarz
inequality and the pairing convention of
[[lem-complex-lp-completeness-density-and-inner-product]], applied to the
functions $x\mapsto|x_j|\,|f(x)|$ and $|f|$,
$$\int_{\mathbb R^n}|x_j|\,|f(x)|^2\,dx\le\big\||x_j|f\big\|_2\|f\|_2\le\big\||x|f\big\|_2\|f\|_2<\infty,$$
where $|x_j|\le|x|$ and the hypothesis on the second moment bound the first
factor. Each numerator $|\int x_j|f|^2|$ is therefore finite, and the same
estimate with $|x-a|^2\le2|x|^2+2|a|^2$ makes the spatial variance numerator
finite. On the frequency side [[thm-plancherel]] gives
$\|\widehat f\|_2=\|f\|_2>0$ and, together with the assumed second moment of
$\widehat f$, the same Cauchy–Schwarz estimate makes both frequency numerators
finite. Hence all four quantities are well-defined finite real numbers and
$a,b\in\mathbb R^n$.

---
id: thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms
kind: theorem
title: Fourier transform agrees with l one and plancherel transforms
status: published
origin: pipeline
deps: [thm-polynomial-growth-functions-define-tempered-distributions, def-fourier-transform-of-a-tempered-distribution, thm-plancherel, thm-l-one-l-two-agreement-of-fourier-transform, lem-schwartz-space-is-dense-in-l-two, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-holder-inequality-for-integrals, def-countable-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
      url: "https://web.archive.org/web/20250519141924if_/https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "Definition 11.22, p. 127, and Theorem 11.29, pp. 131–132; normalization converted to 2pi"
proof_strategy: direct
---

## Statement

Assume Countable Choice and use the negative-sign $2\pi$ normalization.  If
$f\in L^1(\mathbb R^n;\mathbb C)$, then

$$\mathcal F u_f=u_{\widehat f},$$

where $\widehat f$ is the integral Fourier transform.  If
$f\in L^2(\mathbb R^n;\mathbb C)$, then

$$\mathcal F u_f=u_{\mathcal F_2f},$$

where $\mathcal F_2$ is the Plancherel extension.  These equalities are in
$\mathcal S'(\mathbb R^n)$ and therefore depend only on the corresponding
almost-everywhere classes.

## Facts & Assumptions

**Given:** [[def-countable-choice|Countable Choice]] and the fixed $2\pi$ Fourier convention.

[F1] Every $L^p$ class, including $p=1,2,\infty$, defines a regular tempered distribution ([[thm-polynomial-growth-functions-define-tempered-distributions]]).

[F2] The transform on $\mathcal S'$ is defined by bilinear transposition ([[def-fourier-transform-of-a-tempered-distribution]]).

[F3] Absolute Fubini applies on the sigma-finite Euclidean product ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F4] Schwartz space is dense in complex $L^2$, and the Plancherel transform is its unitary extension ([[lem-schwartz-space-is-dense-in-l-two]], [[thm-plancherel]]).

[F5] The integral and Plancherel transforms agree on $L^1\cap L^2$ ([[thm-l-one-l-two-agreement-of-fourier-transform]]).

[F6] Hölder applied to moduli controls all $L^2$ test pairings ([[thm-holder-inequality-for-integrals]]).

## Proof

**Proof technique:** Fubini followed by $L^2$ approximation.

1.1 Let $f\in L^1$ and $\varphi\in\mathcal S$.  Schwartz decay makes $\varphi\in L^1$, so $\int\!\int|f(x)\varphi(\xi)|\,dx\,d\xi<\infty$.  Absolute Fubini is therefore applicable. [F2, F3]

$$\langle\mathcal Fu_f,\varphi\rangle =\int f(x)\!\left(\int\varphi(\xi)e^{-2\pi ix\cdot\xi}\,d\xi\right)dx =\int\widehat f(\xi)\varphi(\xi)\,d\xi.$$

Since $\widehat f$ is bounded, [F1] makes the last functional tempered.  This proves the $L^1$ assertion. [F1, F2, F3]

1.2 Let $f\in L^2$ and choose $f_j\in\mathcal S$ with $f_j\to f$ in $L^2$.  For a fixed $\varphi\in\mathcal S$, also $\mathcal F\varphi\in L^2$, and Hölder gives the first convergence below. [F4, F6]

$$\int(f_j-f)\mathcal F\varphi\longrightarrow0.$$

Plancherel gives $\mathcal F_2f_j\to\mathcal F_2f$ in $L^2$, so a second Hölder estimate gives $\int(\mathcal F_2f_j-\mathcal F_2f)\varphi\to0$. [F4, F6]

2.1 Each $f_j$ belongs to $L^1\cap L^2$, and the two agreement results give the displayed identity. [F5, step 1.1]

$$\int f_j\mathcal F\varphi =\int(\mathcal F_2f_j)\varphi.$$

Passing to the two limits from step 1.2 yields $\langle\mathcal Fu_f,\varphi\rangle= \langle u_{\mathcal F_2f},\varphi\rangle$.  Since this holds for every Schwartz test, the $L^2$ assertion follows. [F1, F2, F5, step 1.2] ∎

---
id: thm-support-measure-uncertainty-inequality
kind: theorem
title: 'The support-measure uncertainty inequality $|E||F|\ge1$'
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps:
  - def-complex-lp-and-euclidean-test-function-conventions
  - def-countable-choice
  - def-l-p-space-as-a-quotient-by-null-functions
  - lem-l-one-fourier-transform-is-well-defined
  - thm-holder-inequality-for-integrals
  - thm-l-one-l-two-agreement-of-fourier-transform
  - thm-plancherel
  - thm-riemann-lebesgue
  - thm-the-lebesgue-integral-respects-almost-everywhere-equality
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "David L. Donoho and Philip B. Stark, Uncertainty Principles and Signal Recovery, SIAM J. Appl. Math. 49(3) (1989) 906–931"
      url: "https://web.stanford.edu/dept/statistics/cgi-bin/donoho/wp-content/uploads/2018/08/UPSR.pdf"
      locator: "§3, Theorem 2, inequality (3.1), and proof, printed pp. 909–911; zero concentration errors yield the one-dimensional support bound. The n-dimensional elementary proof is given here."

---

## Statement

Assume countable choice. Let $f\in L^2(\mathbb R^n;\mathbb C)$ be nonzero and
let $E,F\subseteq\mathbb R^n$ be Lebesgue measurable sets of finite measure such
that $f=0$ almost everywhere on $\mathbb R^n\setminus E$ and $\widehat f=0$
almost everywhere on $\mathbb R^n\setminus F$. Here $\widehat f$ denotes the
continuous $L^1$ transform ([[lem-l-one-fourier-transform-is-well-defined]]),
which is defined because $|E|<\infty$ forces $f\in L^1$. Then
$$|E|\,|F|\ge1 .$$ No regularity of $E$ or $F$ beyond measurability and finite
measure is assumed, and no complex analysis is used.

## Facts & Assumptions

**Given:** Countable choice ([[def-countable-choice]]), a nonzero $f\in L^2(\mathbb R^n;\mathbb C)$, and Lebesgue measurable sets $E,F$ of finite measure with $f=0$ almost everywhere off $E$ and $\widehat f=0$ almost everywhere off $F$.

[F1] Countable choice is assumed; it is the hypothesis carried by the $L^1$ transform interface, the agreement theorem, and Plancherel below ([[def-countable-choice]]).

[F2] For $g\in L^1(\mathbb R^n;\mathbb C)$ the $L^1$ transform is defined at every frequency, satisfies $|\widehat g(\xi)|\le\|g\|_1$, and is unchanged by null-set modifications of the representative ([[lem-l-one-fourier-transform-is-well-defined]]); it is continuous and vanishes at infinity ([[thm-riemann-lebesgue]]).

[F3] Hölder's inequality with conjugate exponents $p=q=2$: for measurable real $u\in\mathcal L^2$ and $v\in\mathcal L^2$ one has $\int|uv|\le\|u\|_2\|v\|_2$ ([[thm-holder-inequality-for-integrals]]); $L^1$ and $L^2$ are the quotient spaces of [[def-l-p-space-as-a-quotient-by-null-functions]] with the norms of [[def-complex-lp-and-euclidean-test-function-conventions]], and integrable functions that agree almost everywhere have equal integrals ([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]).

[F4] If $g\in L^1\cap L^2$, its bounded continuous $L^1$ transform represents the Plancherel transform $\mathcal F_2g$ almost everywhere ([[thm-l-one-l-two-agreement-of-fourier-transform]]), and Plancherel gives $\|\mathcal F_2g\|_2=\|g\|_2$ ([[thm-plancherel]]).

## Proof

**Proof technique:** direct.

1.1 The function is integrable and its transform is bounded. Since $f=0$ almost everywhere on $\mathbb R^n\setminus E$, one has $\int_{\mathbb R^n}|f|=\int_E|f|$; applying [F3] with $u=|f|$ and $v=\mathbf 1_E$, whose $\mathcal L^2$ norm is $|E|^{1/2}<\infty$, gives $\int_E|f|\le\|f\|_2|E|^{1/2}<\infty$. Hence $f\in L^1\cap L^2$, its $L^1$ transform $\widehat f$ is defined and continuous [F2], and $|\widehat f(\xi)|\le\|f\|_1\le|E|^{1/2}\|f\|_2$ for every $\xi\in\mathbb R^n$. [F1, F2, F3, given]

2.1 Plancherel size from the two supports. As $f\in L^1\cap L^2$, the continuous transform $\widehat f$ represents $\mathcal F_2f$ almost everywhere [F4]; since $\widehat f=0$ almost everywhere off $F$, also $\mathcal F_2f=0$ almost everywhere off $F$. Therefore $\mathcal F_2f$ is represented by the function that vanishes off $F$ and equals $\widehat f$ on $F$, and $$\int_{\mathbb R^n}|\mathcal F_2f|^2=\int_F|\widehat f|^2\le|F|\,\sup_{\xi\in\mathbb R^n}|\widehat f(\xi)|^2\le|E|\,|F|\,\|f\|_2^2 ,$$ where the last inequality inserts the uniform bound of step 1.1 and $|F|<\infty$ is used. [F4, given, step 1.1]

3.1 Conclusion. Plancherel's isometry [F4] gives $\|\mathcal F_2f\|_2^2=\|f\|_2^2$, so step 2.1 yields $\|f\|_2^2\le|E||F|\|f\|_2^2$. Since $f$ is nonzero, $\|f\|_2^2>0$, and dividing gives $|E||F|\ge1$. [F4, given, step 2.1] ∎

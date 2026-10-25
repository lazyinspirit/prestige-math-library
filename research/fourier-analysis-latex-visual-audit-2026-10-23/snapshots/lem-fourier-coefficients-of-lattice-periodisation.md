---
id: lem-fourier-coefficients-of-lattice-periodisation
kind: lemma
title: "Fourier coefficients of a lattice periodisation"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
design_row: FR-19
deps: [def-full-rank-lattice-covolume-and-dual-lattice, lem-lattice-fundamental-parallelotope-partitions-euclidean-space, lem-schwartz-periodisation-over-a-lattice-is-smooth-and-uniformly-summable, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, cor-c-one-change-of-variables-for-l-one-functions, def-fourier-transform-on-l-one-of-rn, def-countable-choice, thm-complex-exponential-addition-and-real-extension, thm-kernel-and-fibres-of-complex-exponential, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, lem-schwartz-functions-and-all-derivatives-are-integrable, def-schwartz-space-and-its-seminorms]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lior Silberman, Fourier series and the Poisson summation formula (Math 604/613 notes, UBC)"
      url: "https://personal.math.ubc.ca/~lior/teaching/1011/613D_F10/Fourier+PoissonSum.pdf"
      locator: "§3, Exercise 13(1): $\\widehat{\\Pi_\\Lambda f}(k)=\\frac{1}{\\operatorname{covol}(\\Lambda)}\\widehat f(k)$ for $k\\in\\Lambda^*$, with the normalised Haar measure on $T$, PDF p. 4"
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE (author PDF)"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
      locator: "§7, (7.15)-(7.17): the two expressions for the periodised fundamental solution and the Fourier-series comparison, printed pp. 72-73"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $f\in\mathcal S(\mathbb R^n)$,
let $\Lambda$ be a full-rank lattice with dual $\Lambda^*$ and fundamental
parallelotope $F$, and let $P:=P_\Lambda f$ be the periodisation of
[[lem-schwartz-periodisation-over-a-lattice-is-smooth-and-uniformly-summable]].
Then for every $\lambda^*\in\Lambda^*$,
$$\int_F P(x)e^{-2\pi i\lambda^*\cdot x}\,dx=\widehat f(\lambda^*),\qquad\text{so the normalised coefficient is}\qquad \frac{1}{\operatorname{covol}(\Lambda)}\int_F P(x)e^{-2\pi i\lambda^*\cdot x}\,dx=\frac{\widehat f(\lambda^*)}{\operatorname{covol}(\Lambda)},$$
with $\widehat f$ the $L^1$ Fourier transform of [[def-fourier-transform-on-l-one-of-rn]].

## Facts & Assumptions

**Given:** Countable Choice, $f\in\mathcal S(\mathbb R^n)$ ([[def-schwartz-space-and-its-seminorms]]), a full-rank lattice $\Lambda=A\mathbb Z^n$ with dual $\Lambda^*=A^{-T}\mathbb Z^n$ and fundamental parallelotope $F=A((0,1]^n)$, the periodisation $P(x)=\sum_{\lambda\in\Lambda}f(x+\lambda)$ of [[lem-schwartz-periodisation-over-a-lattice-is-smooth-and-uniformly-summable]], and $\lambda^*\in\Lambda^*$ ([[def-full-rank-lattice-covolume-and-dual-lattice]], [[lem-lattice-fundamental-parallelotope-partitions-euclidean-space]]).

[F1] The translates $F+\lambda$, $\lambda\in\Lambda$, are pairwise disjoint and cover $\mathbb R^n$ ([[lem-lattice-fundamental-parallelotope-partitions-euclidean-space]]); $P$ converges absolutely at every point with locally uniformly summable derivative series ([[lem-schwartz-periodisation-over-a-lattice-is-smooth-and-uniformly-summable]]).

[F2] Tonelli and Fubini apply on the $\sigma$-finite product of the counting measure on $\Lambda$ and Lebesgue measure on $F$ ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F3] Translation substitution: $\int_{F+\lambda}g(y)\,dy=\int_Fg(x+\lambda)\,dx$ for integrable $g$, by the translation invariance of Lebesgue measure ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]) and the change-of-variables formula for $L^1$ functions ([[cor-c-one-change-of-variables-for-l-one-functions]]).

[F4] $f\in L^1(\mathbb R^n;\mathbb C)$, so $\widehat f(\lambda^*)=\int_{\mathbb R^n}f(y)e^{-2\pi i\lambda^*\cdot y}\,dy$ is defined ([[lem-schwartz-functions-and-all-derivatives-are-integrable]], [[def-fourier-transform-on-l-one-of-rn]]).

[F5] For $\lambda^*\in\Lambda^*$ and $\lambda\in\Lambda$ one has $\lambda^*\cdot\lambda\in\mathbb Z$, hence $e^{-2\pi i\lambda^*\cdot(y-\lambda)}=e^{-2\pi i\lambda^*\cdot y}e^{2\pi i\lambda^*\cdot\lambda}=e^{-2\pi i\lambda^*\cdot y}$ ([[def-full-rank-lattice-covolume-and-dual-lattice]], [[thm-complex-exponential-addition-and-real-extension]], [[thm-kernel-and-fibres-of-complex-exponential]]).

## Proof

**Proof technique:** direct.

1.1 Because $F+\lambda$ tile $\mathbb R^n$ [F1], translation substitution [F3] and Tonelli [F2] give $\sum_{\lambda\in\Lambda}\int_F|f(x+\lambda)|\,dx=\int_{\mathbb R^n}|f(y)|\,dy<\infty$ by [F4]. Since $|e^{-2\pi i\lambda^*\cdot x}|=1$, the same absolute majorant controls $f(x+\lambda)e^{-2\pi i\lambda^*\cdot x}$; hence the absolutely convergent series defining $P$ may be integrated term by term over the finite-measure set $F$, and $\int_FP(x)e^{-2\pi i\lambda^*\cdot x}\,dx=\sum_\lambda\int_Ff(x+\lambda)e^{-2\pi i\lambda^*\cdot x}\,dx$ by [F2]. [F1, F2, F3, F4, given, algebra]

2.1 In the $\lambda$-th term substitute $y=x+\lambda$ [F3]: $\int_Ff(x+\lambda)e^{-2\pi i\lambda^*\cdot x}\,dx=\int_{F+\lambda}f(y)e^{-2\pi i\lambda^*\cdot(y-\lambda)}\,dy=\int_{F+\lambda}f(y)e^{-2\pi i\lambda^*\cdot y}\,dy$ by [F5]. Summing over $\lambda$, the disjointness and covering property [F1] identify the sum of the cell integrals with the integral over $\mathbb R^n$ (countable additivity for the absolutely convergent sums of step 1.1), so $\int_FP(x)e^{-2\pi i\lambda^*\cdot x}\,dx=\int_{\mathbb R^n}f(y)e^{-2\pi i\lambda^*\cdot y}\,dy=\widehat f(\lambda^*)$ by [F4]. [step 1.1, F1, F3, F4, F5, given]

3.1 Dividing by $\operatorname{covol}(\Lambda)=|\det A|>0$ gives the displayed normalised coefficient. Countable Choice is inherited from the Euclidean integration and change-of-variables suppliers above; the lattice indexing is the explicit bijection $\lambda=Ak\leftrightarrow k\in\mathbb Z^n$. [step 2.1, given] ∎ 
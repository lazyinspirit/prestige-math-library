---
id: thm-poisson-summation-for-a-full-rank-lattice
kind: theorem
title: "Poisson summation for a full-rank lattice"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
design_row: FR-19
deps: [def-full-rank-lattice-covolume-and-dual-lattice, lem-lattice-fundamental-parallelotope-partitions-euclidean-space, lem-character-orthogonality-on-a-lattice-fundamental-domain, lem-schwartz-periodisation-over-a-lattice-is-smooth-and-uniformly-summable, lem-fourier-coefficients-of-lattice-periodisation, lem-lattice-periodic-continuous-functions-are-determined-by-their-lattice-fourier-coefficients, thm-fourier-transform-maps-schwartz-space-continuously-to-itself, lem-schwartz-functions-and-all-derivatives-are-integrable, lem-euclidean-linear-maps-have-matrices-and-are-bounded, def-dirac-comb, thm-p-series-real-exponents, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-dominated-convergence, def-fourier-transform-on-l-one-of-rn, def-countable-choice, lem-a-uniformly-approximable-real-valued-map-is-continuous, thm-componentwise-limits-and-continuity]
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
      locator: "§3, Exercise 13: the coefficient identity, the expansion $\\Pi_\\Lambda f=(1/\\operatorname{covol})\\sum_{\\Lambda^*}\\widehat f(k)e(kx)$ and $\\sum_{v\\in\\Lambda}f(v)=(1/\\operatorname{vol})\\sum_{k\\in\\Lambda^*}\\widehat f(k)$, PDF p. 4"
    - title: "Noam Elkies, Theta functions and weighted theta functions of Euclidean lattices (author PDF)"
      url: "https://people.math.harvard.edu/~elkies/aws09.pdf"
      locator: "§2, Theorem 2 (Poisson summation in $\\mathbb R^n$) and the proof (26)-(32) by Fourier expansion of the periodisation, printed pp. 10-11"
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE (author PDF)"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
      locator: "§7, (7.11)-(7.17): the periodisation of $f$ over the lattice, its Fourier-series comparison and the method of images, printed pp. 72-73"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $f\in\mathcal S(\mathbb R^n)$
and let $\Lambda$ be a full-rank lattice with dual $\Lambda^*$ and covolume
$c:=\operatorname{covol}(\Lambda)$. Then both series below converge absolutely
and
$$\sum_{\lambda\in\Lambda}f(\lambda)=\frac{1}{c}\sum_{\lambda^*\in\Lambda^*}\widehat f(\lambda^*);$$
more precisely, the periodisation identity
$$\sum_{\lambda\in\Lambda}f(x+\lambda)=\frac{1}{c}\sum_{\lambda^*\in\Lambda^*}\widehat f(\lambda^*)e^{2\pi i\lambda^*\cdot x}$$
holds for every $x\in\mathbb R^n$.

## Facts & Assumptions

**Given:** Countable Choice, $f\in\mathcal S(\mathbb R^n)$, the full-rank lattice $\Lambda=A\mathbb Z^n$ with dual $\Lambda^*=A^{-T}\mathbb Z^n$ and covolume $c=|\det A|$, the fundamental parallelotope $F=A((0,1]^n)$, the periodisation $P=P_\Lambda f$, and the $L^1$ transform $\widehat f$ of [[def-fourier-transform-on-l-one-of-rn]].

[F1] $P$ is smooth, $\Lambda$-periodic and absolutely convergent at every point: $P(x)=\sum_{\lambda\in\Lambda}f(x+\lambda)$ with locally uniformly summable derivative series ([[lem-schwartz-periodisation-over-a-lattice-is-smooth-and-uniformly-summable]]).

[F2] $\widehat f\in\mathcal S(\mathbb R^n)$ ([[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]]), and Schwartz functions satisfy the product-weight bound $|\partial^\beta g(y)|\le A_\beta\prod_j(1+y_j^2)^{-1}$ for a finite constant built from finitely many seminorms; in particular $|\widehat f(\xi)|\le A(1+|\xi|)^{-N}$ for every prescribed $N$ ([[lem-schwartz-functions-and-all-derivatives-are-integrable]]).

[F3] Lattice count: there is a constant $C$ with $\#\{\lambda^*\in\Lambda^*:|\lambda^*|\le r\}\le C(1+r)^n$ for all $r\ge0$. Indeed $\lambda^*=A^{-T}k$, so $|\lambda^*|\le r$ implies $|k|=|A^{T}\lambda^*|\le K r$ for a constant $K$ ([[lem-euclidean-linear-maps-have-matrices-and-are-bounded]], [[def-full-rank-lattice-covolume-and-dual-lattice]]), and the number of integer points with $|k|\le Kr$ is at most $(2Kr+1)^n$, as the shell count of [[def-dirac-comb]] shows.

[F4] $\sum_{m\ge1}m^{n-N}<\infty$ for real $N>n+1$ ([[thm-p-series-real-exponents]]).

[F5] Character orthogonality on the fundamental domain: $(1/c)\int_Fe^{2\pi i(\lambda^*-\eta^*)\cdot x}dx=1$ if $\lambda^*=\eta^*$ and $0$ otherwise ([[lem-character-orthogonality-on-a-lattice-fundamental-domain]]).

[F6] The periodisation has $P$'s coefficients: $\int_FP(x)e^{-2\pi i\eta^*\cdot x}dx=\widehat f(\eta^*)$ for every $\eta^*\in\Lambda^*$ ([[lem-fourier-coefficients-of-lattice-periodisation]]).

[F7] A continuous $\Lambda$-periodic function with all lattice coefficients zero vanishes identically ([[lem-lattice-periodic-continuous-functions-are-determined-by-their-lattice-fourier-coefficients]]).

[F8] Termwise integration of a uniformly convergent series over a finite-measure set and interchange of an absolutely summable integral are justified by the dominated-convergence and Fubini interfaces ([[thm-dominated-convergence]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F9] Uniform limits of continuous real-valued functions are continuous ([[lem-a-uniformly-approximable-real-valued-map-is-continuous]]), and a complex-valued function is continuous when its real and imaginary parts are continuous ([[thm-componentwise-limits-and-continuity]]).

## Proof

**Proof technique:** direct.

1.1 By [F2], for every $N$ there is $A_N$ with $|\widehat f(\lambda^*)|\le A_N(1+|\lambda^*|)^{-N}$. Splitting $\Lambda^*$ into the shells $m\le|\lambda^*|<m+1$ and using the count of [F3], $\sum_{\lambda^*\in\Lambda^*}|\widehat f(\lambda^*)|\le A_N\sum_{m\ge0}C(1+m)^n(1+m)^{-N}<\infty$ once $N>n+1$ by [F4]. [F2, F3, F4, given, algebra]

2.1 Hence $S(x):=c^{-1}\sum_{\lambda^*\in\Lambda^*}\widehat f(\lambda^*)e^{2\pi i\lambda^*\cdot x}$ converges absolutely and uniformly on $\mathbb R^n$; its sum is continuous by [F9] applied to real and imaginary parts, and it is $\Lambda$-periodic because each exponential $e^{2\pi i\lambda^*\cdot x}$ is $\Lambda$-periodic exactly when $\lambda^*\in\Lambda^*$ ([[def-full-rank-lattice-covolume-and-dual-lattice]]). [step 1.1, F9, given, algebra]

3.1 For every $\eta^*\in\Lambda^*$, [F8] and the absolute convergence of step 1.1 justify integrating the series term by term against $e^{-2\pi i\eta^*\cdot x}$ over the finite-measure set $F$: $\int_FS(x)e^{-2\pi i\eta^*\cdot x}dx=c^{-1}\sum_{\lambda^*}\widehat f(\lambda^*)\int_Fe^{2\pi i(\lambda^*-\eta^*)\cdot x}dx=\widehat f(\eta^*)$, the last equality by [F5]. By [F6] the periodisation $P$ has the same coefficient $\widehat f(\eta^*)$ for every $\eta^*\in\Lambda^*$. [step 2.1, F5, F6, F8, given]

4.1 Since $P$ and $S$ are both continuous and $\Lambda$-periodic ([F1], step 2.1) and their difference has every lattice Fourier coefficient zero by step 3.1, [F7] gives $P=S$, which is the displayed periodisation identity. Evaluating at $x=0$ gives $\sum_{\lambda\in\Lambda}f(\lambda)=c^{-1}\sum_{\lambda^*\in\Lambda^*}\widehat f(\lambda^*)$; absolute convergence on the left is the $x=0$ case of [F1], and on the right it is step 1.1. Countable Choice is inherited from the periodisation, change-of-variables and convergence suppliers above. [step 3.1, F1, F6, F7, given] ∎ 
---
id: thm-poisson-summation-under-two-sided-polynomial-decay
kind: theorem
title: "Poisson summation under two-sided polynomial decay"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
design_row: FR-19
deps: [def-full-rank-lattice-covolume-and-dual-lattice, lem-lattice-fundamental-parallelotope-partitions-euclidean-space, lem-character-orthogonality-on-a-lattice-fundamental-domain, lem-lattice-periodic-continuous-functions-are-determined-by-their-lattice-fourier-coefficients, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-dominated-convergence, lem-euclidean-linear-maps-have-matrices-and-are-bounded, thm-geometric-series, lem-a-uniformly-approximable-real-valued-map-is-continuous, def-fourier-transform-on-l-one-of-rn, def-countable-choice, thm-complex-exponential-addition-and-real-extension, thm-complex-exponential-is-entire-with-derivative-itself, thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions, thm-componentwise-limits-and-continuity, thm-kernel-and-fibres-of-complex-exponential, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, cor-c-one-change-of-variables-for-l-one-functions, thm-heine-borel-rn]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes (arXiv:0903.3845)"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "ch. 23, Theorem 23.5 with hypotheses (23.1)-(23.2) and its proof: continuous $f\\in L^1$ with two-sided $(d+\\varepsilon)$-decay has periodisation equal to its Fourier series at every point, PDF pp. 137-138"
    - title: "Lior Silberman, Fourier series and the Poisson summation formula (Math 604/613 notes, UBC)"
      url: "https://personal.math.ubc.ca/~lior/teaching/1011/613D_F10/Fourier+PoissonSum.pdf"
      locator: "§3, Exercises 12 and 13: $\\widehat f$ is bounded continuous, coefficients of $\\Pi_\\Lambda f$ are $c^{-1}\\widehat f$, and polynomially decaying $f$ gives a continuous periodisation, PDF pp. 3-4"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $\Lambda$ be a
full-rank lattice with covolume $c$ and dual $\Lambda^*$, and let
$f:\mathbb R^n\to\mathbb C$ be continuous with
$\int_{\mathbb R^n}|f|<\infty$ and Fourier transform
$\widehat f(\xi)=\int f(x)e^{-2\pi ix\cdot\xi}dx$. Suppose that for some
constants $C>0$ and $\varepsilon>0$,
$$|f(x)|\le\frac{C}{(1+|x|)^{n+\varepsilon}}\qquad\text{and}\qquad|\widehat f(\xi)|\le\frac{C}{(1+|\xi|)^{n+\varepsilon}}\qquad(x,\xi\in\mathbb R^n).$$
Then for every $x\in\mathbb R^n$ both series converge absolutely (the left one
locally uniformly in $x$) and
$$\sum_{\lambda\in\Lambda}f(x+\lambda)=\frac{1}{c}\sum_{\lambda^*\in\Lambda^*}\widehat f(\lambda^*)e^{2\pi i\lambda^*\cdot x};$$
in particular
$\sum_{\lambda}f(\lambda)=c^{-1}\sum_{\lambda^*}\widehat f(\lambda^*)$. This is
the non-Schwartz hypothesis promised by the design: continuity and two-sided
$(n+\varepsilon)$-decay, with no claim for bare $L^1$ data.

## Facts & Assumptions

**Given:** Countable Choice, a continuous integrable $f$ with the two-sided decay bounds displayed, the full-rank lattice $\Lambda=A\mathbb Z^n$ with dual $\Lambda^*=A^{-T}\mathbb Z^n$, covolume $c$, fundamental parallelotope $F$ ([[def-full-rank-lattice-covolume-and-dual-lattice]], [[lem-lattice-fundamental-parallelotope-partitions-euclidean-space]]), and the $L^1$ transform $\widehat f$ ([[def-fourier-transform-on-l-one-of-rn]]).

[F1] Lattice-ball growth: $\#\{\lambda\in\Lambda:|\lambda|\le r\}\le C_\Lambda(1+r)^n$, and likewise $\#\{\lambda^*\in\Lambda^*:|\lambda^*|\le r\}\le C_{\Lambda^*}(1+r)^n$. If $\Lambda=A\mathbb Z^n$, boundedness of $A^{-1}$ gives $|k|\le K|Ak|$; hence each integer coordinate of $k$ lies in $[-Kr,Kr]$, leaving at most $(2Kr+1)^n$ choices. The dual case is the same with $A^T$ ([[lem-euclidean-linear-maps-have-matrices-and-are-bounded]]). Compact Euclidean sets are bounded by [[thm-heine-borel-rn]], providing the bound on $x$ used in the locally uniform estimate.

[F2] The translates $F+\lambda$ tile $\mathbb R^n$ disjointly ([[lem-lattice-fundamental-parallelotope-partitions-euclidean-space]]); translation leaves Lebesgue measure unchanged ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]), and the integral substitution follows from [[cor-c-one-change-of-variables-for-l-one-functions]] applied on $\mathbb R^n$ to $g\mathbf 1_{F+\lambda}$. Tonelli and Fubini apply to the countable lattice and its finite-measure cell ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F3] For $\varepsilon>0$, put $q=2^{-\varepsilon}\in(0,1)$. Then the dyadic tail $\sum_{j\ge j_0}2^{-j\varepsilon}=\sum_{j\ge j_0}q^j$ converges by the geometric-series theorem ([[thm-geometric-series]]).

[F4] A locally uniform limit of continuous real-valued functions is continuous ([[lem-a-uniformly-approximable-real-valued-map-is-continuous]]).

[F5] Character orthogonality: $(1/c)\int_Fe^{2\pi i(\lambda^*-\eta^*)\cdot x}dx=\delta_{\lambda^*\eta^*}$ ([[lem-character-orthogonality-on-a-lattice-fundamental-domain]]); for $\lambda^*\in\Lambda^*$, $\lambda\in\Lambda$ one has $\lambda^*\cdot\lambda\in\mathbb Z$ and $e^{-2\pi i\lambda^*\cdot(y-\lambda)}=e^{-2\pi i\lambda^*\cdot y}$ ([[def-full-rank-lattice-covolume-and-dual-lattice]], [[thm-complex-exponential-addition-and-real-extension]], [[thm-kernel-and-fibres-of-complex-exponential]]).

[F6] Termwise integration and exchange of sum and integral under absolute convergence and uniform majorants ([[thm-dominated-convergence]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F7] A continuous $\Lambda$-periodic function with all lattice Fourier coefficients zero vanishes ([[lem-lattice-periodic-continuous-functions-are-determined-by-their-lattice-fourier-coefficients]]).

[F8] Since $f\in L^1(\mathbb R^n;\mathbb C)$, its Fourier transform $\widehat f$ is bounded and uniformly continuous; the character factor $x\mapsto e^{2\pi i\lambda^*\cdot x}$ is continuous ([[thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions]], [[thm-complex-exponential-is-entire-with-derivative-itself]]).

[F9] A complex-valued function is continuous exactly when its real and imaginary parts are continuous ([[thm-componentwise-limits-and-continuity]]).

## Proof

**Proof technique:** direct.

1.1 Fix a compact set $K$, let $R$ bound $|x|$ on $K$, and choose $j_0$ so $2^j\ge2R$ for $j\ge j_0$. For $2^j\le|\lambda|<2^{j+1}$ we have $|x+\lambda|\ge2^{j-1}$, so $|f(x+\lambda)|\le C'2^{-j(n+\varepsilon)}$ uniformly on $K$. The annulus contains at most the number of lattice points in the ball of radius $2^{j+1}$, hence at most $C''2^{jn}$ by [F1]; its total contribution is therefore $O(2^{-j\varepsilon})$. These contributions are summable by [F3]. The finitely many lattice points with $|\lambda|<2^{j_0}$ contribute a finite sum of continuous functions, uniformly on $K$. Thus $P(x):=\sum_{\lambda\in\Lambda}f(x+\lambda)$ converges absolutely and uniformly on $K$; its real and imaginary parts are uniform limits of continuous real-valued functions, so [F4] makes both limits continuous and [F9] makes $P$ continuous on $K$. Since $K$ was arbitrary, $P$ is continuous on $\mathbb R^n$, and reindexing the absolutely convergent series gives $P(x+\mu)=P(x)$ for $\mu\in\Lambda$. [F1, F3, F4, F9, given, algebra]

2.1 By the tiling [F2], Tonelli and the integrability of $f$, $\sum_{\lambda\in\Lambda}\int_F|f(x+\lambda)|dx=\int_{\mathbb R^n}|f|<\infty$; hence [F6] justifies termwise integration and, substituting $y=x+\lambda$ with $e^{-2\pi i\lambda^*\cdot(y-\lambda)}=e^{-2\pi i\lambda^*\cdot y}$ [F5], $\int_FP(x)e^{-2\pi i\lambda^*\cdot x}dx=\sum_\lambda\int_{F+\lambda}f(y)e^{-2\pi i\lambda^*\cdot y}dy=\widehat f(\lambda^*)$ for every $\lambda^*\in\Lambda^*$. [step 1.1, F2, F5, F6, given]

2.2 Define $S(x):=c^{-1}\sum_{\lambda^*\in\Lambda^*}\widehat f(\lambda^*)e^{2\pi i\lambda^*\cdot x}$. Grouping the dual lattice into dyadic annuli and applying [F1], each annulus contributes $O(2^{-j\varepsilon})$ by the decay bound on $\widehat f$; [F3] makes the series absolutely convergent. Since each exponential has modulus one, this convergence is uniform on $\mathbb R^n$; each summand is continuous by [F8], so its real and imaginary partial sums converge uniformly to continuous functions, and [F4] and [F9] make $S$ continuous. It is $\Lambda$-periodic because $\lambda^*\cdot\lambda\in\mathbb Z$ for $\lambda^*\in\Lambda^*$, $\lambda\in\Lambda$. Integrating term by term with [F5] and [F6] gives $\int_FS(x)e^{-2\pi i\eta^*\cdot x}dx=c^{-1}\sum_{\lambda^*}\widehat f(\lambda^*)\int_Fe^{2\pi i(\lambda^*-\eta^*)\cdot x}dx=\widehat f(\eta^*)$ for every $\eta^*\in\Lambda^*$. [step 1.1, F1, F3, F4, F5, F6, F8, F9, given]

3.1 By steps 2.1 and 2.2 the continuous $\Lambda$-periodic function $P-S$ has every lattice Fourier coefficient zero, so $P=S$ by [F7]; this is the displayed identity, and its left side converges absolutely by step 1.1. Evaluating at $x=0$ gives $\sum_\lambda f(\lambda)=c^{-1}\sum_{\lambda^*}\widehat f(\lambda^*)$. The two-sided $(n+\varepsilon)$-decay hypotheses are used only through the majorants of steps 1.1 and 2.2; they cannot be dropped to bare integrability with point values, as recorded on the companion page. Countable Choice is inherited from the integration and convergence suppliers above. [step 2.1, step 2.2, F7, given] ∎ 

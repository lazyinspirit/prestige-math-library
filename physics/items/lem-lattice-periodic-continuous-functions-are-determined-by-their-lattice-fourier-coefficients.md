---
id: lem-lattice-periodic-continuous-functions-are-determined-by-their-lattice-fourier-coefficients
kind: lemma
title: "Continuous lattice-periodic functions are determined by their lattice Fourier coefficients"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
design_row: FR-19
deps: [def-full-rank-lattice-covolume-and-dual-lattice, lem-lattice-fundamental-parallelotope-partitions-euclidean-space, lem-periodic-continuous-functions-are-determined-by-their-fourier-coefficients, cor-c-one-change-of-variables-for-l-one-functions, thm-complex-exponential-addition-and-real-extension, def-countable-choice, thm-continuous-image-of-a-compact-space-is-compact, lem-continuity-is-local-and-pastes, prop-transpose-laws, def-matrix-product-and-identity-matrix, cor-integral-over-a-null-set-vanishes, thm-lebesgue-measure-of-a-box-of-every-kind, def-invertible-matrix-and-general-linear-group, thm-linear-change-of-variables-for-lebesgue-measure, thm-compactness-under-continuous-maps, thm-heine-borel-rn]
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
      locator: "§2, Exercises 7(6) and 9(3): the characters separate points of $T$ and $g\\mapsto\\check g$ is an isometric isomorphism $L^2(\\Lambda^*)\\to L^2(T)$; and §3, Exercise 10(3): the direct map is its inverse, PDF pp. 2-3"
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes (arXiv:0903.3845)"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "ch. 4 and ch. 23: uniqueness of Fourier coefficients for continuous functions on the torus, PDF pp. 26-30 and 135-136"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let
$h:\mathbb R^n\to\mathbb C$ be continuous and $\Lambda$-periodic for a
full-rank lattice $\Lambda$, with fundamental parallelotope $F$. If
$\int_Fh(x)e^{-2\pi i\lambda^*\cdot x}\,dx=0$ for every
$\lambda^*\in\Lambda^*$, then $h=0$ everywhere. Consequently a continuous
$\Lambda$-periodic function is determined by the family
$\bigl(\int_Fh(x)e^{-2\pi i\lambda^*\cdot x}\,dx\bigr)_{\lambda^*\in\Lambda^*}$
of its unnormalised lattice Fourier coefficients.

## Facts & Assumptions

**Given:** Countable Choice, a continuous $\Lambda$-periodic function $h:\mathbb R^n\to\mathbb C$ with $\Lambda=A\mathbb Z^n$ a full-rank lattice, $\Lambda^*=A^{-T}\mathbb Z^n$, $F=A((0,1]^n)$ ([[def-full-rank-lattice-covolume-and-dual-lattice]], [[lem-lattice-fundamental-parallelotope-partitions-euclidean-space]]), and $\int_Fh\,e^{-2\pi i\lambda^*\cdot x}dx=0$ for every $\lambda^*\in\Lambda^*$.

[F1] The pullback $h_A(y):=h(Ay)$ is continuous, as a composite of continuous maps ([[lem-continuity-is-local-and-pastes]]), and $\mathbb Z^n$-periodic: $h_A(y+k)=h(Ay+Ak)=h(Ay)$ because $Ak\in\Lambda$ ([[def-full-rank-lattice-covolume-and-dual-lattice]], [[def-matrix-product-and-identity-matrix]]).

[F2] Published uniqueness for the unit lattice: a continuous $\mathbb Z^n$-periodic $g$ with $\int_{[0,1]^n}g(y)e^{-2\pi ik\cdot y}dy=0$ for every $k\in\mathbb Z^n$ is zero everywhere; this assumes Countable Choice ([[lem-periodic-continuous-functions-are-determined-by-their-fourier-coefficients]]).

[F3] The cube $[0,1]^n$ is compact by [[thm-heine-borel-rn]], so the closed parallelotope $\overline F=A([0,1]^n)$ is compact, and the real and imaginary parts of $h$ are bounded on it by the compact-image and extreme-value clauses of [[thm-compactness-under-continuous-maps]]. The boundary of the unit cube is a finite union of degenerate boxes, hence null ([[thm-lebesgue-measure-of-a-box-of-every-kind]]); its image under $A$ is null by [[thm-linear-change-of-variables-for-lebesgue-measure]]. Thus the substitution [[cor-c-one-change-of-variables-for-l-one-functions]] on the open box also computes the half-open and closed-domain integrals, since integrals over null sets vanish ([[cor-integral-over-a-null-set-vanishes]]).

[F4] Transpose algebra: $k\cdot y=k\cdot A^{-1}x=(A^{-1})^{T}k\cdot x=(A^{-T}k)\cdot x$, and $A^{-T}k\in\Lambda^*$ for $k\in\mathbb Z^n$ ([[prop-transpose-laws]], [[def-matrix-product-and-identity-matrix]], [[def-full-rank-lattice-covolume-and-dual-lattice]]); the exponential is additive, $e^{u+v}=e^ue^v$ ([[thm-complex-exponential-addition-and-real-extension]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $h_A$ is continuous and $\mathbb Z^n$-periodic. For every $k\in\mathbb Z^n$ its unit-lattice Fourier coefficient vanishes: substituting $x=Ay$ in the $L^1$ change-of-variables formula [F3] and using [F4], $\int_{(0,1]^n}h(Ay)e^{-2\pi ik\cdot y}dy=(1/|\det A|)\int_Fh(x)e^{-2\pi i(A^{-T}k)\cdot x}dx=0$, because $A^{-T}k\in\Lambda^*$ and the hypothesis makes every $\Lambda^*$-coefficient of $h$ vanish. [F1, F3, F4, given, algebra]

2.1 The difference between $[0,1]^n$ and $(0,1]^n$ is null by [F3], so the coefficients in step 1.1 also vanish over $[0,1]^n$. Applying the published unit-lattice uniqueness [F2] to $h_A$ gives $h_A=0$; since $A$ is invertible, hence surjective ([[def-invertible-matrix-and-general-linear-group]]), every $x=Ay$ has $h(x)=h_A(y)=0$, so $h=0$ everywhere. Finally, if two continuous $\Lambda$-periodic functions have the same unnormalised coefficient family, their difference has all coefficients zero and is therefore identically zero, so the coefficient family determines the function; this last restatement uses nothing beyond linearity of the integral. Countable Choice is inherited from the published unit-lattice theorem. [step 1.1, F2, F3, given] ∎ 
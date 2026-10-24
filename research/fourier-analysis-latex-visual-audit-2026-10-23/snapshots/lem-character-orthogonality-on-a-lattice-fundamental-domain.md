---
id: lem-character-orthogonality-on-a-lattice-fundamental-domain
kind: lemma
title: "Orthogonality of the lattice characters over a fundamental domain"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
design_row: FR-19
deps: [def-full-rank-lattice-covolume-and-dual-lattice, lem-lattice-fundamental-parallelotope-partitions-euclidean-space, lem-trigonometric-characters-are-orthonormal, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-linear-change-of-variables-for-lebesgue-measure, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, thm-lebesgue-measure-of-a-box-of-every-kind, cor-integral-over-a-null-set-vanishes, lem-complex-integration-by-parts-on-intervals-and-decaying-lines, def-countable-choice, thm-kernel-and-fibres-of-complex-exponential, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-matrix-product-and-identity-matrix, prop-transpose-laws, thm-determinant-of-transpose, thm-real-square-matrix-invertible-iff-determinant-nonzero]
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
      locator: "§2, Exercise 8: with the Haar probability measure on $T$, $\\frac{1}{\\operatorname{vol}T}\\int_T e(kx)\\,dx=\\delta_{k,0}$ and $\\frac{1}{\\operatorname{vol}T}\\int_T e(kx)\\overline{e(\\ell x)}\\,dx=\\delta_{k\\ell}$ for $k,\\ell\\in\\Lambda^*$, PDF p. 3"
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes (arXiv:0903.3845)"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "ch. 14 and ch. 23 background: characters $e^{2\\pi ik\\cdot x}$ are orthonormal on the torus, used to expand a periodisation in its Fourier series, PDF pp. 79, 135-138"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $A$,
$\Lambda=A\mathbb Z^n$ and $F$ be as in
[[lem-lattice-fundamental-parallelotope-partitions-euclidean-space]], and let
$\lambda^*,\eta^*\in\Lambda^*$. Then
$$\frac{1}{\operatorname{covol}(\Lambda)}\int_F e^{2\pi i(\lambda^*-\eta^*)\cdot x}\,dx=\begin{cases}1,&\lambda^*=\eta^*,\\ 0,&\lambda^*\ne\eta^*.\end{cases}$$

## Facts & Assumptions

**Given:** Countable Choice, an invertible real $n\times n$ matrix $A$, the lattice $\Lambda=A\mathbb Z^n$ with dual $\Lambda^*=A^{-T}\mathbb Z^n$ and covolume $\operatorname{covol}(\Lambda)=|\det A|$, the fundamental parallelotope $F=A((0,1]^n)$, and $\lambda^*,\eta^*\in\Lambda^*$ ([[def-full-rank-lattice-covolume-and-dual-lattice]], [[lem-lattice-fundamental-parallelotope-partitions-euclidean-space]]).

[F1] $\lambda^*,\eta^*\in A^{-T}\mathbb Z^n$, so $\mu:=\lambda^*-\eta^*\in A^{-T}\mathbb Z^n$ and $c:=A^{T}\mu\in\mathbb Z^n$; conversely $c=0$ forces $\mu=0$, because $A^{T}$ is invertible ([[def-full-rank-lattice-covolume-and-dual-lattice]], [[prop-transpose-laws]], [[thm-determinant-of-transpose]], [[thm-real-square-matrix-invertible-iff-determinant-nonzero]], [[def-matrix-product-and-identity-matrix]]).

[F2] Change of variables: for the $C^1$ diffeomorphism $y\mapsto Ay$ on the open unit box, $\int_{F^\circ}g(x)\,dx=|\det A|\int_{(0,1)^n}g(Ay)\,dy$ for nonnegative Lebesgue measurable $g$ ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]); the boundary $F\setminus F^\circ=A\bigl((0,1]^n\setminus(0,1)^n\bigr)$ is the image under $A$ of a finite union of degenerate boxes, hence a null set ([[thm-linear-change-of-variables-for-lebesgue-measure]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]), and integrals over a null set vanish ([[cor-integral-over-a-null-set-vanishes]]).

[F3] The box integral factorises: for $c\in\mathbb R^n$, $\int_{(0,1]^n}e^{2\pi ic\cdot y}\,dy=\prod_{j=1}^n\int_0^1e^{2\pi ic_jt}\,dt$ ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F4] One-dimensional character integrals: $\int_0^1e^{2\pi irt}\,dt=1$ when $r=0$ and $0$ when $r$ is a nonzero integer, by the complex primitive $\int_0^1e^{2\pi irt}dt=(e^{2\pi ir}-1)/(2\pi ir)$ ([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]]) together with $e^{2\pi ir}=1$ for integral $r$ ([[thm-kernel-and-fibres-of-complex-exponential]]); this is the unit-cube case of the orthonormality of the characters ([[lem-trigonometric-characters-are-orthonormal]]), and $|e^{2\pi ic\cdot y}|=1$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

## Proof

**Proof technique:** direct.

1.1 Put $\mu=\lambda^*-\eta^*$, so that $c=A^{T}\mu\in\mathbb Z^n$ and $e^{2\pi i\mu\cdot x}=e^{2\pi ic\cdot(A^{-1}x)}$ [F1, F4]. The integrand has modulus one on the finite-measure set $F$. Apply the nonnegative substitution and null-boundary formulas of [F2] separately to the positive and negative parts of its real and imaginary parts; all four integrals are finite, so recombining them gives the complex substitution formula. Together with [F3], this yields $\int_F e^{2\pi i\mu\cdot x}\,dx=|\det A|\int_{(0,1]^n}e^{2\pi ic\cdot y}\,dy=|\det A|\prod_{j=1}^n\int_0^1e^{2\pi ic_jt}\,dt$. [F1, F2, F3, F4, given, algebra]

1.2 Each factor is evaluated by [F4]: for $c_j=0$ the factor is $\int_0^1 1\,dt=1$, and for $c_j\in\mathbb Z\setminus\{0\}$ it is $(e^{2\pi ic_j}-1)/(2\pi ic_j)=0$ because $e^{2\pi ic_j}=1$. Hence the product equals $1$ when every $c_j=0$, and $0$ otherwise. [F4, given, algebra]

2.1 Since $c=A^{T}\mu$, we have $c=0$ if and only if $\mu=0$, by invertibility of $A^{T}$ [F1]. Dividing the identity of step 1.1 by $\operatorname{covol}(\Lambda)=|\det A|$, the product of step 1.2 is exactly the normalised integral, so it equals $1$ when $\lambda^*=\eta^*$ and $0$ when $\lambda^*\ne\eta^*$. Countable Choice is inherited from the change-of-variables interface used in [F2], exactly as in the volume computation of the tiling lemma. [step 1.1, step 1.2, F1, given] ∎ 
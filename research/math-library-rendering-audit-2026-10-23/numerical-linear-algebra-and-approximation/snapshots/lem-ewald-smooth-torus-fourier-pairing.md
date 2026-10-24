---
id: lem-ewald-smooth-torus-fourier-pairing
kind: lemma
title: "Smooth torus test functions have rapidly convergent Fourier pairings"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [cor-c-one-change-of-variables-for-l-one-functions, def-countable-choice, def-ewald-three-dimensional-periodic-source-data, lem-character-orthogonality-on-a-lattice-fundamental-domain, lem-lattice-fundamental-parallelotope-partitions-euclidean-space, lem-lattice-periodic-continuous-functions-are-determined-by-their-lattice-fourier-coefficients, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-integration-by-parts, thm-p-series-real-exponents, thm-uniform-derivative-limit-on-a-closed-interval, thm-weierstrass-m-test-for-complex-function-series]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Lior Silberman, Fourier Series and the Poisson Summation Formula (Math 613 lecture notes)"
      url: "https://personal.math.ubc.ca/~lior/teaching/1011/613D_F10/Fourier+PoissonSum.pdf"
      locator: "§2, Exercises 7–11, printed pp. 2–4: lattice characters, orthogonality, coefficient decay, and differentiated Fourier series."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice. Let $A\in GL_3(\mathbb R)$, $V=|\det A|$,
$\Lambda=A\mathbb Z^3$, $\kappa_k=2\pi A^{-T}k$, and let $\varphi$ be a smooth
$\Lambda$-periodic function. With the Fourier coefficients of
[[def-ewald-three-dimensional-periodic-source-data]], for every derivative
order $q\ge0$,
$$\sum_{k\in\mathbb Z^3}|\kappa_k|^q|\widehat\varphi(k)|<\infty.$$
Consequently the Fourier series of $\varphi$ and every differentiated series
converge uniformly to $\varphi$ and its corresponding derivatives. More
generally, if a coefficient sequence satisfies
$|a_k|\le C(1+|\kappa_k|)^s$ for some $C<\infty$ and $s\ge0$, then
$$T_a(\varphi):=V\sum_{k\in\mathbb Z^3}a_k\widehat\varphi(-k)$$
converges absolutely and defines a continuous periodic distribution. A
periodic distribution is determined by its Fourier coefficients.

## Facts & Assumptions

**Given:** Countable Choice, $A\in GL_3(\mathbb R)$, the lattice data of
[[def-ewald-three-dimensional-periodic-source-data]], a smooth periodic
$\varphi$, and a sequence $(a_k)_{k\in\mathbb Z^3}$ with
$|a_k|\le C(1+|\kappa_k|)^s$ for fixed finite $C$ and $s\ge0$.

[A1] Countable Choice is assumed by the periodic Fourier uniqueness theorem used below ([[def-countable-choice]]).

[F1] The cell has volume $V$, its angular characters are $e_k(x)=e^{i\kappa_k\cdot x}$, and the Fourier coefficient is $V^{-1}\int_F\varphi(x)e^{-i\kappa_k\cdot x}dx$ ([[def-ewald-three-dimensional-periodic-source-data]], [[lem-lattice-fundamental-parallelotope-partitions-euclidean-space]]).

[F2] The lattice characters are orthogonal on $F$: $V^{-1}\int_Fe^{i(\kappa_k-\kappa_j)\cdot x}dx=1$ for $k=j$ and $0$ otherwise ([[lem-character-orthogonality-on-a-lattice-fundamental-domain]]).

[F3] Integration by parts on a closed interval holds for differentiable factors with integrable derivatives; periodic endpoint values cancel when the factors are periodic ([[thm-integration-by-parts]]).

[F4] For every real $p>1$, $\sum_{m\ge1}m^{-p}$ converges ([[thm-p-series-real-exponents]]).

[F5] A function series dominated termwise by a convergent scalar series converges uniformly ([[thm-weierstrass-m-test-for-complex-function-series]]).

[F6] Uniform convergence of the derivatives, together with convergence at one point, identifies the derivative of the uniform limit on a closed interval ([[thm-uniform-derivative-limit-on-a-closed-interval]]).

[F7] A continuous periodic function with all Fourier coefficients zero vanishes identically on the torus ([[lem-lattice-periodic-continuous-functions-are-determined-by-their-lattice-fourier-coefficients]]).

[F8] Linear change of variables sends $F$ to the fundamental cube, and an absolutely integrable function on the cube may be integrated successively in its three coordinates ([[cor-c-one-change-of-variables-for-l-one-functions]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

## Proof

**Proof technique:** direct.

1.1 Put $\widetilde\varphi(t)=\varphi(At)$, which is smooth and $\mathbb Z^3$-periodic. Change variables to the unit cube and integrate successively in the three coordinates using [F8]. In $t$ coordinates the physical Laplacian is the constant-coefficient operator $\Delta_t=\sum_{r,s}(A^{-1}A^{-T})_{rs}\partial_{t_r}\partial_{t_s}$. Repeatedly apply [F3] to the real and imaginary parts in each coordinate; periodicity makes every opposite-face boundary term cancel, and the character is an eigenfunction with eigenvalue $-|\kappa_k|^2$. Thus for every integer $m\ge1$, $\widehat\varphi(k)=(1+|\kappa_k|^2)^{-m}\widehat{(1-\Delta)^m\varphi}(k),\qquad |\widehat\varphi(k)|\le (1+|\kappa_k|^2)^{-m}\sup_{x\in F}|(1-\Delta)^m\varphi(x)|.$ The last inequality follows because the Fourier coefficient is the normalized integral over the cell [F1]. [A1, F1, F3, F8, algebra]

2.1 Since $|\kappa_k|\ge 2\pi|k|/\|A^T\|_2$, the number of integer vectors with $j\le|\kappa_k|<j+1$ is at most $(2\|A^T\|_2(j+1)/(2\pi)+3)^3$. For any fixed $q$, choose an integer $m>(q+4)/2$; the shell sum of $|\kappa_k|^q(1+|\kappa_k|^2)^{-m}$ is then bounded by a constant times a convergent p-series [F4]. Hence $\sum_k|\kappa_k|^q|\widehat\varphi(k)|<\infty$. [step 1.1, F4, algebra]

3.1 Enumerate $\mathbb Z^3$ by increasing $\max_r|k_r|$ and lexicographically within each finite shell. For each derivative order, step 2.1 and [F5] make the Fourier series and its formal derivative series uniformly convergent. Apply [F6] to the real and imaginary parts along each coordinate line; the uniform derivative limits are the derivatives of the sum. By [F2], termwise integration shows that the sum has the same Fourier coefficients as $\varphi$; [F7] makes the continuous difference zero. Each derivative series likewise has the coefficients of the corresponding derivative of $\varphi$, by periodic integration by parts [F3], so [F7] identifies it with that derivative. Hence the Fourier partial sums converge in every smooth seminorm. [step 2.1, F2, F3, F5, F6, F7, construct]

4.1 Choose $m>(s+4)/2$ in step 1.1. The shell count of step 2.1 gives $\sum_k|a_k\widehat\varphi(-k)|\le C\sup_F|(1-\Delta)^m\varphi| \sum_k(1+|\kappa_k|)^s(1+|\kappa_k|^2)^{-m}<\infty.$ This is a bound by the seminorm $\sup_F|(1-\Delta)^m\varphi|$, a finite sum of the smooth seminorms in the source-data definition, so $T_a$ is a continuous linear functional. If a periodic distribution has the same Fourier coefficients as $T_a$, their difference vanishes on every character and hence on every trigonometric polynomial; by the smooth convergence of step 3.1 and continuity of the distribution, it vanishes on every smooth test function. Therefore the coefficients determine it. [step 1.1, step 2.1, A1, F1, F2, algebra] ∎


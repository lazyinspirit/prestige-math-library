---
id: def-nufft-transform-types-and-mode-conventions
kind: definition
title: Type-1, type-2, and type-3 nonuniform Fourier transforms
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: nonuniform-fast-fourier-transforms
dependency_level: 1
deps:
  - def-complex-exponential
  - def-real-elementary-functions-and-domains
  - def-nufft-finite-array-norms
  - def-finite-sum-in-a-commutative-monoid
  - thm-complex-numbers-form-a-field
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - lem-complex-conjugation-and-modulus-laws
  - thm-generalised-associativity
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: No choice principle is used; all source and mode sets are finite.
sources:
  references:
    - title: "Jens Keiner, Stefan Kunis, and Antje Vollrath, The Nonequispaced FFT and
        its Applications, Part I, slides 40 and 69"
      url: "https://math.aalto.fi/numericsyear/NFFT/nfft.pdf"
      locator: "PDF slides 40 and 69; finite type-1 and type-2 sums and stated
        arithmetic scope"
    - title: "Leslie Greengard and June-Yub Lee, Accelerating the Nonuniform Fast
        Fourier Transform"
      url: "https://cims.nyu.edu/~greengar/glee_nufft_sirev.pdf"
      locator: "§1, printed pp. 443–445, equations (1)–(6)"
    - title: "Leslie Greengard and June-Yub Lee, NUFFT User's Guide, Version 1.2"
      url: "https://cs.nyu.edu/~berger/nufft/nufft_manual.pdf"
      locator: "§1, PDF pp. 2–3, one-, two-, and three-dimensional type-1, type-2, and
        type-3 sums"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Fix an integer dimension $d\ge1$. Let $\mathbb T^d=[0,1)^d$ be the chosen representatives for period-one coordinates; all coordinates in a type-1 or type-2 transform are interpreted modulo integer shifts. Here $\pi$ is the real constant defined in [[def-real-elementary-functions-and-domains]]. For $x\in\mathbb R^d$ and $k\in\mathbb Z^d$, write $k\cdot x=\sum_{r=1}^d k_rx_r$. Let $N,J\ge0$ be finite integers, let $x_0,\ldots,x_{N-1}\in\mathbb T^d$, let $c=(c_j)_{j<N}\in\mathbb C^N$, and choose integers $K_r\ge0$. The rectangular mode set is

$$\mathcal K=\prod_{r=1}^d\{-K_r,-K_r+1,\ldots,K_r\}.$$

The **type-1 nonuniform discrete Fourier transform** maps source coefficients to integer-mode samples:

$$F_k=\sum_{j=0}^{N-1}c_j e^{-2\pi i k\cdot x_j},\qquad k\in\mathcal K.$$

The **type-2 nonuniform discrete Fourier transform** maps a coefficient array $(f_k)_{k\in\mathcal K}$ to values at the same point list:

$$g_j=\sum_{k\in\mathcal K}f_k e^{+2\pi i k\cdot x_j},\qquad 0\le j<N.$$

For the type-1 matrix $A=(e^{-2\pi i k\cdot x_j})_{k\in\mathcal K,\,j<N}$, define its conjugate transpose by $(A^*)_{jk}=\overline{A_{kj}}$. Use the finite counting inner products from [[def-nufft-finite-array-norms]]; the type-2 matrix is $A^*$ as proved below.

The **type-3 nonuniform discrete Fourier transform** takes a finite source list $x_0,\ldots,x_{N-1}\in\mathbb R^d$, coefficients $c_j\in\mathbb C$, and a separately specified finite frequency list $\xi_0,\ldots,\xi_{J-1}\in\mathbb R^d$, and returns

$$G_\ell=\sum_{j=0}^{N-1}c_j e^{-2\pi i \xi_\ell\cdot x_j},\qquad 0\le\ell<J.$$

Type 3 has no integer-mode restriction or implicit coordinate wrapping. No frequency normalization, axis scaling, or frequency-space product is implicit; any such scaling is separate input data whose cost must be analyzed separately. Each displayed map is a finite sum of defined complex exponentials; the zero-source case has the empty-sum value zero and the zero-output case returns the empty array. No fast algorithm or complexity claim for type 3 is part of this definition.

## Facts & Assumptions

**Given:** The finite source and mode lists, arrays $c,f$, and the displayed type-1/type-2 conventions.

[F1] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: for real $t$, $e^{it}=\cos t+i\sin t$.

[F2] [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]]: cosine is even and sine is odd.

[F3] [[def-complex-conjugate-real-imaginary-part-and-modulus]]: $\overline{a+ib}=a-ib$ for real $a,b$.

[F4] [[def-finite-sum-in-a-commutative-monoid]], [[thm-generalised-associativity]], [[thm-complex-numbers-form-a-field]], and [[lem-complex-conjugation-and-modulus-laws]]: finite complex sums may be expanded and reordered, multiplication is commutative/distributive, and conjugation preserves products and sums.

## Proof

1.1 Fix $j<N$ and $k\in\mathcal K$, and put $t=2\pi k\cdot x_j\in\mathbb R$. By [F1]–[F2], $e^{-it}=\cos(-t)+i\sin(-t)=\cos t-i\sin t$. Applying [F3] gives $\overline{e^{-it}}=\cos t+i\sin t=e^{it}$. Thus $(A^*)_{jk}=\overline{A_{kj}}=e^{+2\pi i k\cdot x_j}$. [given, F1, F2, F3, algebra]

2.1 For any $c\in\mathbb C^N$ and $f\in\mathbb C^{\mathcal K}$, expand the finite sums: $\langle Ac,f\rangle_{\mathcal K}=\sum_{k\in\mathcal K}\sum_{j<N}c_j e^{-2\pi i k\cdot x_j}\overline{f_k} =\sum_{j<N}c_j\overline{\sum_{k\in\mathcal K}f_k e^{+2\pi i k\cdot x_j}} =\langle c,A^*f\rangle_{\{j<N\}}.$ The first equality uses finite distributivity/reordering from [F4]; the second uses step 1.1 and the stated inner-product convention. Thus the type-2 sum is exactly the conjugate-transpose action under matching finite inner products. [F4, step 1.1, algebra] ∎
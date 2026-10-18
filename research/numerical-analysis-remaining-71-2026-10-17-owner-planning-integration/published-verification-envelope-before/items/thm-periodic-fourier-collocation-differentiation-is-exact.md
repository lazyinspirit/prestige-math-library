---
id: thm-periodic-fourier-collocation-differentiation-is-exact
kind: theorem
title: "Periodic Fourier collocation differentiates its interpolant exactly"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-periodic-fourier-collocation-grid, alg-periodic-fourier-collocation-differentiation-matrix, lem-orthogonality-of-characters-on-a-finite-cyclic-group, thm-finite-fourier-inversion, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-sine-and-cosine-derivatives, thm-chain-rule, thm-algebra-of-derivatives, thm-quarter-turn-values-and-shift-formulas, thm-sine-and-cosine-subtraction-formulas]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "No choice axiom is used; only finite Fourier inversion and finite sums are used."
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, §2.2"
      url: "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      locator: "Printed pp. 79–83 / PDF pp. 85–89; Fourier collocation interpolation and differentiation matrices."
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, Ch. 7"
      url: "https://www.math.hmc.edu/~dyong/math165/trefethenbook.pdf"
      locator: "Chapter 7, printed pp. 231–244 (complete book PDF); Fourier and periodic-sinc interpolation."
---

## Statement

Let $N\ge2$, let $U=(U_j)_{j=0}^{N-1}\in\mathbb R^N$, and let $p=I_NU\in\mathcal T_N$ be the interpolant defined in [[def-periodic-fourier-collocation-grid]]. The matrix [[alg-periodic-fourier-collocation-differentiation-matrix]] satisfies
$$
(D_NU)_i=p'(x_i),\qquad 0\le i<N.
$$
For even $N$, this statement includes the Nyquist cosine mode, whose derivative vanishes at the grid nodes.

## Facts & Assumptions

**Given:** An integer $N\ge2$, the periodic grid and interpolant, and real nodal data $U$.

[F1] [[def-periodic-fourier-collocation-grid]]: $I_NU=\sum_jU_jL_j$ on the $N$ equally spaced nodes; its frequency set is a complete set of residues modulo $N$, with only the cosine Nyquist mode when $N$ is even.

[F2] [[alg-periodic-fourier-collocation-differentiation-matrix]]: $(D_N)_{ij}$ is the termwise derivative of $L_j$ evaluated at $x_i$; in the even case the Nyquist sine term is zero at these nodes.

[F3] [[lem-orthogonality-of-characters-on-a-finite-cyclic-group]]: summing all $N$ characters over $\mathbb Z/N\mathbb Z$ gives $N$ when the two indices agree modulo $N$ and $0$ otherwise.

[F4] [[thm-finite-fourier-inversion]]: the finite Fourier transform on $\mathbb Z/N\mathbb Z$ has an inverse, so the frequency coefficients representing nodal data are unique.

[F5] [[thm-sine-and-cosine-derivatives]]: $(\cos kx)'=-k\sin(kx)$ and $(\sin kx)'=k\cos(kx)$.

[F6] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: $e^{it}=\cos t+i\sin t$ for real $t$.

[F7] [[thm-quarter-turn-values-and-shift-formulas]]: $\sin(k\pi)=0$ for every integer $k$.

[F8] [[thm-sine-and-cosine-subtraction-formulas]]: $\cos(u-v)=\cos u\cos v+\sin u\sin v$, so each $\cos(k(x-x_j))$ expands into cosine and sine modes with frequency $k$.

[F9] [[thm-chain-rule]]: differentiating a trigonometric function composed with $x\mapsto k(x-x_j)$ multiplies its derivative by $k$.

[F10] [[thm-algebra-of-derivatives]]: differentiating a finite sum of differentiable functions gives the sum of their derivatives.

## Proof
1.1 By [F8], each low-frequency cosine difference in $L_j$ expands into the corresponding cosine/sine modes in $\mathcal T_N$. For even $N=2K$, its Nyquist term expands into $\cos(Kx)\cos(Kx_j)+\sin(Kx)\sin(Kx_j)$; [F7] makes the second coefficient zero because $Kx_j=\pi j$. At a grid difference $x_i-x_j=2\pi(i-j)/N$, Euler's identity [F6] rewrites the cosine sum defining $L_j(x_i)$ as the normalized sum of all characters in a complete residue system modulo $N$: for odd $N=2K+1$ the residues are $-K,\ldots,K$, and for even $N=2K$ they are $-K+1,\ldots,K$. Character orthogonality [F3] gives $L_j(x_i)=1$ when $i=j$ and $0$ otherwise. Thus $I_NU$ takes the prescribed nodal values and lies in $\mathcal T_N$. [F1, F3, F6, F7, F8, algebra]

1.2 Let $q\in\mathcal T_N$. Euler's formula expands each low-frequency cosine/sine pair into the characters $e^{ikx_j}$ and $e^{-ikx_j}$. If $N=2K+1$, the resulting residues are $-K,\ldots,K$; if $N=2K$, they are $-K+1,\ldots,K-1$ together with the Nyquist residue $K$, because $\cos(Kx_j)=e^{iKx_j}$. In either case this is one coefficient for each residue modulo $N$, and the change from the real basis coefficients to these character coefficients is invertible (for each low mode it is the usual two-by-two Euler change, and the Nyquist coefficient is unchanged). Thus if $q$ vanishes at the nodes, its finite Fourier transform is zero and inversion [F4] makes every character coefficient, hence every real basis coefficient, zero. This proves uniqueness. [F1, F4, F6, algebra]

2.1 Differentiate the finite sum $p(x)=\sum_jU_jL_j(x)$ term by term using [F10]. By [F5] and [F9], $p'(x_i)=\sum_jU_jL_j'(x_i)$. When $N$ is odd this is exactly the sine sum defining $D_NU$ in [F2]. When $N=2K$ the derivative of the remaining Nyquist term is proportional to $\sin(K(x_i-x_j))=\sin(\pi(i-j))=0$ by [F7], so the same equality holds with the Nyquist term omitted. [F2, F5, F7, F9, F10, step 1.1, algebra]

3.1 Steps 1.1–2.1 establish the nodal interpolation and derivative identity for every data vector, including both parity branches of $N$. [step 1.1, step 1.2, step 2.1] ∎

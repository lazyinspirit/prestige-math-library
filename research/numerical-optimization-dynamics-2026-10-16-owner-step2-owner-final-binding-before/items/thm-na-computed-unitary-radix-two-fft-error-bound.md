---
id: thm-na-computed-unitary-radix-two-fft-error-bound
kind: theorem
title: "Computed unitary radix-two FFT has the multiplicative stage error bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: computed-fast-transforms-and-convolution
dependency_level: 14
deps: [alg-na-computed-unitary-radix-two-fft, lem-na-computed-unitary-butterfly-error-bound, thm-radix-two-fft-correctness, def-unitary-discrete-fourier-transform-on-z-mod-n, def-recursive-radix-two-fast-fourier-transform, lem-radix-two-even-odd-dft-factorisation, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-rational-power, lem-rational-power-laws, def-unnormalised-engineering-dft-and-conversion, def-real-elementary-functions-and-domains, thm-finite-parseval-and-plancherel, thm-finite-fourier-inversion, lem-complex-conjugation-and-modulus-laws, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, def-counting-inner-product-on-complex-functions-on-z-mod-n]
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Nicholas J. Higham, Accuracy and Stability of Numerical Algorithms, 2nd ed., Chapter 24, Theorems 24.1–24.2, pp. 452–454"
      url: https://pages.stat.wisc.edu/~bwu62/771/hingham2002.pdf
    - title: "C. Sidney Burrus, Fast Fourier Transforms, Chapter 11 §11.7"
      url: https://repository.rice.edu/server/api/core/bitstreams/01e9e0a5-fa6f-453d-a1b5-8209fa0a565c/content
---

## Statement

Let $N=2^m$, $m\ge0$, and suppose a successful execution of [[alg-na-computed-unitary-radix-two-fft]] has no range failures. If every twiddle certificate satisfies $\epsilon_\ell\le\epsilon_{\rm tw}\le1/4$ and $u\le1/16$, put $\eta=10u+\epsilon_{\rm tw}$. Then

$$
\|\widehat{\mathcal F}_Nx-\mathcal F_Nx\|_2\le((1+\eta)^m-1)\|x\|_2.
$$

The conjugated inverse routine has the same bound. If $m\eta\le1$, the right side is at most $2m\eta\|x\|_2$. Thus an $O(u\log N)$ shorthand requires both $\epsilon_{\rm tw}=O(u)$ and $u\log N$ small; the theorem makes no such shorthand when twiddle errors are uncontrolled.

## Facts & Assumptions

**Given:** $N=2^m$, $x\in\mathbb C^N$, a successful execution, $u\le1/16$, and $\epsilon_\ell\le\epsilon_{\rm tw}\le1/4$ for every twiddle certificate.

[F1] For $N=2M$, split $x$ into even and odd subsequences $e,o$; the unnormalised DFT obeys $X_k(x)=X_k(e)+e^{-2\pi ik/N}X_k(o)$ and $X_{k+M}(x)=X_k(e)-e^{-2\pi ik/N}X_k(o)$, while $\mathcal F_N=N^{-1/2}X_N$ ([[lem-radix-two-even-odd-dft-factorisation]], [[def-unnormalised-engineering-dft-and-conversion]], [[def-unitary-discrete-fourier-transform-on-z-mod-n]]). The recursive FFT computes $X_N$ exactly ([[def-recursive-radix-two-fast-fourier-transform]], [[thm-radix-two-fft-correctness]]).

[F2] Every computed normalized butterfly differs from its exact block by at most $\eta$ times the pair input norm ([[lem-na-computed-unitary-butterfly-error-bound]]).

[F3] The unitary DFT preserves the squared Euclidean norm; in particular the exact transforms of the even and odd subsequences have squared norms summing to $\|x\|_2^2$ ([[thm-finite-parseval-and-plancherel]]).

[F4] Complex conjugation preserves modulus and the Euclidean norm, and the inverse unitary DFT is obtained by conjugating input, applying the forward DFT, and conjugating output ([[lem-complex-conjugation-and-modulus-laws]], [[thm-finite-fourier-inversion]]).

[F5] The real exponential is its power series ([[def-real-elementary-functions-and-domains]]).

[F6] For $z\in\mathbb C^N$, $\|z\|_2^2=\sum_j|z_j|^2$ ([[def-counting-inner-product-on-complex-functions-on-z-mod-n]]).

[F7] Every exact twiddle $w=e^{-2\pi ik/N}$ has $|w|=1$, and $\sqrt N=\sqrt2\sqrt{N/2}$ for $N\ge2$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[def-rational-power]], [[lem-rational-power-laws]]).

## Proof

1.1 For $m=0$, $N=1$ and the algorithm returns the input exactly, so the error is $0=(1+\eta)^0-1$. For $m\ge1$, [F1] gives the exact unnormalised top outputs $X_k(e)+wX_k(o)$ and $X_k(e)-wX_k(o)$, with $w=e^{-2\pi ik/N}$. The child unitary outputs are $E_k=X_k(e)/\sqrt{N/2}$ and $O_k=X_k(o)/\sqrt{N/2}$; dividing the parent unnormalised outputs by $\sqrt N=\sqrt2\sqrt{N/2}$ gives exactly $U_w(E_k,O_k)=2^{-1/2}(E_k+wO_k,E_k-wO_k)$. By [F7], $|w|=1$ and the scaling identity holds, so the columns of $U_w$ have squared norm $1$ and inner product $2^{-1}(w-w)=0$; hence $U_w$ preserves the pair norm. [given, F1, F7, algebra, base]

2.1 Suppose the recursive transform of length $N/2$ has error bound $\rho_{m-1}=(1+\eta)^{m-1}-1$. By [F3] and [F6], stacking the exact even and odd transforms has norm $\|x\|_2$; stacking their computed errors has norm at most $\rho_{m-1}\|x\|_2$, since the even and odd input coordinates partition $x$. Hence the stacked computed suboutputs have norm at most $(1+\rho_{m-1})\|x\|_2$. For each $k$, [F2] bounds the top butterfly error by $\eta$ times the norm of its computed input pair. Squaring these bounds and summing over $k$ shows that the total top-stage error norm is at most $\eta(1+\rho_{m-1})\|x\|_2$. The prior subtransform errors contribute at most $\rho_{m-1}\|x\|_2$ through the direct sum of exact norm-preserving blocks in step 1.1. Therefore the total error is at most $[\rho_{m-1}+\eta(1+\rho_{m-1})]\|x\|_2=((1+\eta)^m-1)\|x\|_2$. Induction proves the forward bound for every $m$. [given, F2, F3, F6, step 1.1, algebra, induction, ih]

3.1 By [F4], the inverse implementation is conjugation before and after the forward routine and conjugation preserves every coordinate modulus. Applying step 2.1 to $\overline{x}$ gives the same error norm for the inverse direction. [F4, step 2.1]

4.1 If $m\eta\le1$, then $1+\eta\le e^\eta$ by the power series [F5], so $(1+\eta)^m\le e^{m\eta}$. For $0\le t\le1$, $e^t-1=\sum_{j\ge1}t^j/j!\le t\sum_{j\ge1}1/j!<2t$. Thus $((1+\eta)^m-1)\le2m\eta$. If $\epsilon_{\rm tw}=O(u)$, this is $O(mu)=O(u\log_2N)$, with the smallness condition already imposed. [given, F5, step 2.1, algebra, discharge-induction: step 2.1] ∎

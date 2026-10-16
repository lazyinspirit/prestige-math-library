---
id: thm-qa-30-smooth-fourier-approximation
kind: theorem
title: Certified finite smooth Fourier approximation and LCU normalization
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
page: quantum-optimization-sdp-and-variational-algorithms
deps:
  - def-principal-inverse-sine-and-cosine
  - thm-principal-inverse-sine-and-cosine-derivatives
  - thm-sine-and-cosine-derivatives
  - thm-qa-22-lcu-block-encoding-correctness
  - thm-complex-spectral-theorem-for-normal-endomorphisms
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: van Apeldoorn et al., Quantum SDP-solvers, Appendix B, Lemma 37 and Theorem 40
      url: https://arxiv.org/pdf/1705.01843v4
---

## Statement

Let $r,\Delta,B>0$, $0<e\le B/2$, and
$f(x_0+x)=\sum_{k\ge0}a_kx^k$ with
$\sum_k|a_k|(r+\Delta)^k\le B$. Put $\nu=\Delta/(r+\Delta)$,
$x=\ln(32B/e)$, and choose
$$K=\lceil\nu^{-1}\ln(16B/e)\rceil+2,\quad L=\lceil\nu^{-2}x\rceil+2,\quad M=\lceil\nu^{-1}x\rceil+2.$$
Use the exact finite arcsine convolutions and binomial expansion in OP8
SmoothFourier. The exact truncated coefficients $c_s$ have
$\sum_s|c_s|\le B$, $|s|\le2M$, and give an approximation to $f$ within
$e/8$ throughout $[x_0-r,x_0+r]$.
Rounding all complex coefficients with total absolute error at most $e/16$
gives error below $e/4$ and coefficient norm at most $B+e/16$.
There are $O(M+1)$ distinct signed frequencies. In an LCU SELECT their
largest evolution time is $O(\Delta^{-1}\ln(B/e))$.

## Facts & Assumptions

**Given:** The absolutely convergent Taylor coefficient budget, positive parameters, exact finite convolution rules, coefficient precision, and supplied evolution/LCU circuits.

[F1] Principal inverse sine inverts sine on its principal interval and has derivative $(1-y^2)^{-1/2}$ ([[def-principal-inverse-sine-and-cosine]], [[thm-principal-inverse-sine-and-cosine-derivatives]]).

[F2] The sine and cosine derivatives give the elementary trigonometric estimates used below ([[thm-sine-and-cosine-derivatives]]).

[F3] Finite LCU compression is the normalized coefficient-weighted sum ([[thm-qa-22-lcu-block-encoding-correctness]]).

[F4] A Hermitian matrix has an orthonormal eigenbasis, so a uniform scalar error on its spectrum bounds the corresponding operator norm ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

## Proof

**Given:** The convergent coefficient bound and positive input parameters.

1.1 Set $t=(z-x_0)/(r+\Delta)$, so $|t|\le1-\nu$, and $b_k=a_k(r+\Delta)^k$. The omitted Taylor terms have modulus at most $\sum_{k\ge K}|b_k|(1-\nu)^k\le B e^{-\nu K}\le e/16$. Let $u_{2j}=0$ and $u_{2j+1}=(2/\pi)\binom{2j}{j}/(4^j(2j+1))$. These are nonnegative and $\sum_\ell u_\ell=1$, while $\sum_\ell u_\ell y^\ell=(2/\pi)\arcsin y$ for $|y|<1$. One direct derivation is to solve $(1-y^2)h'(y)=yh(y)$ with $h(0)=1$ by coefficients, obtaining $h(y)=\sum_j\binom{2j}{j}y^{2j}/4^j=(1-y^2)^{-1/2}$; coefficient integration gives the inverse-sine derivative and its value zero at zero. Letting $y$ increase to one, nonnegativity and finite partial sums give total sum $(2/\pi)\arcsin1=1$. Thus for $y=\sin(\pi t/2)$, $t=\sum_\ell u_\ell y^\ell$. [F1, F2, given, construct, algebra]

2.1 Let $u^{(k)}_\ell$ be the coefficients of the $k$th power of this series, with $u^{(0)}_0=1$. They are nonnegative with sum one. Convolution truncated above $L$ computes their exact coefficients through $L$: all degrees are nonnegative, so discarded high degrees cannot contribute to a lower degree in a later convolution. For $|t|\le1-\nu$, $|y|\le\cos(\pi\nu/2)\le e^{-\nu^2}$. The last inequality follows by integrating $(\ln\cos v)'=-\tan v\le-v$ on $[0,\pi/2)$ and using $\pi^2/8>1$. Hence the omitted degrees $\ell>L$ in every power have absolute contribution at most $e^{-\nu^2L}$. Summing with weights $|b_k|$ gives error at most $B e^{-\nu^2L}\le e/32$. [step 1.1, algebra]

3.1 With $v=\pi t/2$, the exact identity $\sin^\ell v=(i/2)^\ell\sum_{j=0}^{\ell}(-1)^j\binom\ell j e^{i(2j-\ell)v}$ has coefficient absolute sum one. For the omitted terms $|j-\ell/2|>M$, their absolute sum is a fair-binomial tail at most $2e^{-2M^2/\ell}$. To prove that bound directly, for a fair-binomial $J$, $\mathbb E e^{s(J-\ell/2)}=\cosh(s/2)^\ell\le e^{\ell s^2/8}$; the inequality follows termwise from $(2j)!\ge2^j j!$. Markov's inequality with $s=4M/\ell$ gives the upper tail $e^{-2M^2/\ell}$, and symmetry gives the other tail. The case $\ell=0$ has no omitted terms. Since $L\le\nu^{-2}x+3$ and $M\ge\nu^{-1}x+2$, $M^2\ge xL$ (the excess $4\nu^{-1}x+4$ dominates $3x$). Thus every retained degree's omitted Fourier tail is at most $2e^{-2x}$. After the coefficient weights the error is at most $2B e^{-2x}=e^2/(512B)\le e/512$. [step 1.1, step 2.1, algebra]

4.1 Combining the errors gives $e/16+e/32+e/512<e/8$. Every frequency is $s=2j-\ell$ with $|j-\ell/2|\le M$, so $|s|\le2M$. Multiplication by $e^{-i\pi s x_0/(2(r+\Delta))}$ converts the variable $t$ Fourier series to the OP8 evolution $e^{i\pi s z/(2(r+\Delta))}$. This phase has modulus one. The exact total coefficient norm is at most $\sum_{k<K}|b_k|\sum_{\ell\le L}u^{(k)}_\ell\le B$: expanding sine powers has norm one, and truncation cannot increase their individual absolute sums. Collisions among signed frequencies can only reduce the norm by the triangle inequality. Rounding the final coefficients, including these phases, with total error at most $e/16$ adds at most that much uniform error and gives norm at most $B+e/16$. [step 1.1, step 2.1, step 3.1, algebra]

5.1 Choose a certified normalization $B_+\in[B+e/16,B+e/8]$ containing the rounded coefficient norm below it; when $B=1$ one may take $B_+=1+e/8$, which is rational only when $e$ is rational. LCU followed by flag dilution has clean compression equal to the rounded Fourier sum divided by $B_+$. Its error from $f(H)/B_+$ is at most $e/(4B_+)$ for a Hermitian $H$ whose spectrum is in the stated interval, by diagonalization. Approximate SELECT evolutions or PREPARE/dilution operations add their declared operator errors through the usual finite product telescoping and weighted block sum. No normalized postselected-state inverse is used. [F3, F4, step 4.1, construct, algebra]

6.1 The largest evolution time is $\pi M/(r+\Delta)=O(\Delta^{-1}\ln(B/e))$, since $x\ge\ln64$ and $0<\nu<1$. There are at most $4M+1$ distinct frequencies. The finite convolution arrays need at most $O(KL^2+KL^2)=O(KL^2)$ arithmetic operations (direct truncated convolution, then the binomial coefficients and frequency accumulation); their actual numerical precision and classical bit costs are separate and explicit. Thus this construction proves the scalar and coefficient claims without an uncharged coefficient oracle or a citation-only supplier. [step 2.1, step 3.1, step 4.1, algebra] ∎

## Remarks

For shifted positive Gibbs G with 1<=lambda_min(G)<=2 and ||G||<=2K_G,
choose x0=K_G+1/2,r=K_G,Delta=1/2. The exponential coefficients have
absolute B=exp(-x0/2) exp((r+Delta)/2)=1. For the observable square root,
x0=0,r=1,Delta=1/2 and coefficients (1/2) binom(1/2,k)2^-k
have absolute sum at r+Delta bounded by one: the sum at 3/4 is
(1/2)(2-sqrt(1-3/4))=3/4. These elementary series follow by differentiating
and the same coefficient-recurrence argument as above.

Use the SAME observable normalization B_A,+ for numerator and M=0 baseline;
the baseline is I/(2 B_A,+), not the unnormalized I/2 unless B_A,+=1.
The Gibbs normalization is also fixed in both branches. This gives exact
normalization cancellation before finite approximation errors are bounded.

---
id: lem-conjugate-dirichlet-kernel-and-principal-value-formula
kind: lemma
title: "The conjugate Dirichlet kernel, and the periodic principal-value formula"
status: draft
origin: pipeline
deps: [def-conjugate-function-on-the-circle, def-period-one-fourier-coefficients-partial-sums-and-convolution, def-dirichlet-and-fejer-kernels, lem-fourier-partial-sums-are-dirichlet-convolutions, lem-finite-sine-harmonic-sums, thm-parseval-identity-for-fourier-series, thm-riesz-fischer-for-fourier-coefficients, thm-riemann-lebesgue-lemma-for-fourier-coefficients, thm-complex-lp-completeness-and-almost-everywhere-subsequences, cor-mean-value-theorem, thm-dominated-convergence, thm-sine-and-cosine-addition-formulas, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "Chapter 10, Proposition 10.3 and equation (10.3), printed pp. 58-59"
---

## Statement

Assume [[def-countable-choice|Countable Choice]], and work on
$\mathbb T=\mathbb R/\mathbb Z$ with the conventions of
[[def-period-one-fourier-coefficients-partial-sums-and-convolution]]. Let
$f\in L^2(\mathbb T;\mathbb C)$ and let $N\ge1$. Put

$$K_N(t):=2\sum_{k=1}^N\sin(2\pi kt)=\frac{\cos(\pi t)-\cos((2N+1)\pi t)}{\sin(\pi t)}\qquad(t\notin\mathbb Z),$$

the **conjugate Dirichlet kernel**, and write
$C S_Nf=\sum_{0<|k|\le N}(-i\operatorname{sgn}k)\widehat f(k)e_k$ for the
conjugate partial sum. Then:

1. $CS_Nf$ is the convolution of $f$ with $K_N$: for almost every $x$,
   $CS_Nf(x)=\int_0^1K_N(t)f(x-t)\,dt$.
2. Extend $C$ to $L^2(\mathbb T;\mathbb C)$ by the square-summable coefficient
   family $(-i\operatorname{sgn}k\widehat f(k))_{k\in\mathbb Z}$; the resulting
   class $Cf$ is the $L^2$ limit of the partial sums $CS_Nf$.
3. If a representative of $f$ is $C^1$ on an open interval containing $x$,
   then

$$ Cf(x)=\lim_{\varepsilon\downarrow0}\int_{\varepsilon<|t|<1/2}f(x-t)\cot(\pi t)\,dt ,$$

   the limit existing for almost every such $x$, and being the symmetric
   principal value about the singularity.

The finite kernel $K_N$ is not itself a cotangent truncation: $K_N$ equals
$\cot(\pi t)$ minus the oscillatory remainder
$\cos((2N+1)\pi t)/\sin(\pi t)$, and only the limit $N\to\infty$ of the
convolutions recovers the principal value.

## Facts & Assumptions

**Given:** Countable Choice, $f\in L^2(\mathbb T;\mathbb C)$, $N\ge1$, and the characters $e_k(x)=e^{2\pi ikx}$.

[F1] $C$ is defined on trigonometric polynomials coefficientwise by $\widehat{Cg}(k)=-i\operatorname{sgn}(k)\widehat g(k)$, it is complex-linear, kills constants, and preserves real-valuedness. [[def-conjugate-function-on-the-circle]]

[F2] Fourier coefficients, partial sums $S_Nf$, characters, and the torus convolution $(f*g)(x)=\int_0^1f(x-t)g(t)dt$ are as defined there, and the torus integral is invariant under the reflections used below. [[def-period-one-fourier-coefficients-partial-sums-and-convolution]]

[F3] The Dirichlet kernel is $D_N(t)=\sum_{|k|\le N}e_k(t)$. [[def-dirichlet-and-fejer-kernels]]

[F4] For one-period integrable $f$, $S_Nf(x)=\int_0^1f(x-t)D_N(t)\,dt=(f*D_N)(x)$ for every $x$. [[lem-fourier-partial-sums-are-dirichlet-convolutions]]

[F5] For $N\ge1$ and $x\notin2\pi\mathbb Z$, $\sum_{n=1}^N\sin(nx)=\frac{\cos(x/2)-\cos((N+1/2)x)}{2\sin(x/2)}$. [[lem-finite-sine-harmonic-sums]]

[F6] Parseval: $\|f\|_2^2=\sum_{k\in\mathbb Z}|\widehat f(k)|^2$ in the finite-subset-supremum sense, so the tails over $\{|k|>N\}$ tend to $0$. [[thm-parseval-identity-for-fourier-series]]

[F7] Every square-summable coefficient family in $\ell^2(\mathbb Z;\mathbb C)$ is the Fourier coefficient family of a unique $L^2$ class, realized as the $L^2$ limit of its symmetric partial sums. [[thm-riesz-fischer-for-fourier-coefficients]]

[F8] Riemann-Lebesgue: if $g$ is integrable on one period then $\widehat g(k)\to0$ as $|k|\to\infty$. [[thm-riemann-lebesgue-lemma-for-fourier-coefficients]]

[F9] Norm-convergent sequences in $L^2$ have subsequences converging almost everywhere to a representative of the limit. [[thm-complex-lp-completeness-and-almost-everywhere-subsequences]]

[F10] The real mean value theorem bounds the increment of a real $C^1$ function by the supremum of its derivative times the interval length. Applied separately to the real and imaginary parts, it gives $|g(t)-g(0)|\le C|t|$ for a complex $C^1$ function on a compact interval about $0$, with $C=\|\operatorname{Re}g'\|_\infty+\|\operatorname{Im}g'\|_\infty$. [[cor-mean-value-theorem]]

[F11] Dominated convergence. [[thm-dominated-convergence]]

[F12] Cosine addition formula: $\cos(A+B)=\cos A\cos B-\sin A\sin B$. [[thm-sine-and-cosine-addition-formulas]]

## Proof

**Proof technique:** direct.

1.1 By [F1] and [F3], $K_N:=CD_N$ is the trigonometric polynomial with coefficients $-i\operatorname{sgn}(k)$ on $0<|k|\le N$ and $0$ elsewhere, so $K_N(t)=\sum_{0<|k|\le N}(-i\operatorname{sgn}k)e_k(t)=2\sum_{k=1}^N\sin(2\pi kt)$, using $e_k-e_{-k}=2i\sin(2\pi kt)$. Applying [F5] with $x=2\pi t$ gives $2\sum_{k=1}^N\sin(2\pi kt)=\frac{\cos(\pi t)-\cos((2N+1)\pi t)}{\sin(\pi t)}$ for $t\notin\mathbb Z$, while $K_N(0)=0$; in particular $K_N$ is odd, one-periodic, and $\int_{-1/2}^{1/2}K_N(t)\,dt=0$. [F1, F3, F5]

1.2 By [F1], the conjugate partial sum is the trigonometric polynomial $CS_Nf=\sum_{0<|k|\le N}(-i\operatorname{sgn}k)\widehat f(k)e_k$. Expanding $K_N$ from 1.1 and substituting $u=x-t$ in each finite sum as in [F2] and [F4], $\int_0^1K_N(t)f(x-t)\,dt=\sum_{0<|k|\le N}(-i\operatorname{sgn}k)\widehat f(k)e_k(x)=CS_Nf(x)$ for every $x$. The bounded finite kernel makes the integral exist for each translate of the $L^1$ representative, and the finite coefficient calculation is exact; this keeps the finite-$N$ object a polynomial-level convolution and makes no claim on any cotangent kernel. [F1, F2, F4]

2.1 Fix a point $x$ at which some representative of $f$ is $C^1$ on an open interval containing $x$, and put $g(t):=f(x-t)-f(x)$ for $|t|<1/2$, so that $|g(t)|\le C|t|$ for a constant $C$ and all small $t$ by [F10]. Step 1.2 gives $CS_Nf(x)=\int_0^1K_N(t)f(x-t)\,dt$; since $K_N$ is one-periodic, odd, and has $\int_{-1/2}^{1/2}K_N=0$ by 1.1, that integral equals $\int_{|t|<1/2}K_N(t)g(t)\,dt$. The closed form of 1.1 splits the kernel as $\cot(\pi t)-\cos((2N+1)\pi t)/\sin(\pi t)$, so $CS_Nf(x)=A(x)-R_N(x)$ with $A(x):=\int_{|t|<1/2}\cot(\pi t)g(t)\,dt$ and $R_N(x):=\int_{|t|<1/2}\frac{\cos((2N+1)\pi t)}{\sin(\pi t)}g(t)\,dt$, the integrands being defined and measurable off the null point $t=0$. [step 1.1, step 1.2, F10]

2.2 Put $a_k:=-i\operatorname{sgn}(k)\widehat f(k)$. Since $|a_k|\le|\widehat f(k)|$ for every $k$ (with $a_0=0$), [F6] gives $\sum_k|a_k|^2\le\|f\|_2^2<\infty$. Thus [F7] supplies a unique class $Cf\in L^2(\mathbb T;\mathbb C)$ whose symmetric partial sums are exactly the $CS_Nf$ of 1.2 and which is their $L^2$ limit; by [F9] there is an increasing sequence $N_j\to\infty$ with $CS_{N_j}f(x)\to Cf(x)$ for almost every $x$. [step 1.2, F6, F7, F9]

3.1 For the point $x$ of 2.1, [F12] writes $\cos((2N+1)\pi t)=\cos(2\pi Nt)\cos(\pi t)-\sin(2\pi Nt)\sin(\pi t)$, so $R_N(x)=\int_{|t|<1/2}\cos(2\pi Nt)\frac{\cos(\pi t)g(t)}{\sin(\pi t)}\,dt-\int_{|t|<1/2}\sin(2\pi Nt)g(t)\,dt$. Both $t\mapsto\cos(\pi t)g(t)/\sin(\pi t)$ and $t\mapsto g(t)$ are integrable on $(-1/2,1/2)$: the second because $f$ is $L^1$ on the finite torus and the quotient is bounded near $0$ by $C$; away from $0$, $1/\sin(\pi t)$ is bounded and $g\in L^1$, so the quotient is integrable there as well. Extending them by zero to one period, [F8] gives $\widehat h(N)\to0$ for these integrable functions, hence $R_N(x)\to0$ as $N\to\infty$; the convergence is at every such $x$, and no uniformity in $x$ is claimed. [step 2.1, F8, F10, F12]

3.2 Also at the point $x$ of 2.1, for $0<\varepsilon<1/2$ the oddness of $\cot$ gives $\int_{\varepsilon<|t|<1/2}\cot(\pi t)f(x-t)\,dt=\int_{\varepsilon<|t|<1/2}\cot(\pi t)g(t)\,dt$, and by [F10] the function $\cot(\pi t)g(t)$ is integrable on $(-1/2,1/2)$; [F11] therefore gives $\int_{\varepsilon<|t|<1/2}\cot(\pi t)g(t)\,dt\to A(x)$ as $\varepsilon\downarrow0$. So the symmetric principal value exists at $x$ and equals $A(x)$. [step 2.1, F10, F11]

4.1 Combining 3.1 and 3.2, for every $x$ at which $f$ is $C^1$ near $x$ the finite convolutions satisfy $CS_Nf(x)=A(x)-R_N(x)\to A(x)$, so the full sequence $CS_Nf(x)$ converges to the principal value at every such $x$; by 2.2 it also converges to $Cf(x)$ along a subsequence for almost every $x$. Therefore $Cf(x)=\lim_{\varepsilon\downarrow0}\int_{\varepsilon<|t|<1/2}f(x-t)\cot(\pi t)\,dt$ for almost every $x$ in the open set where $f$ is $C^1$ near $x$, as asserted. [step 2.2, step 3.1, step 3.2] ∎

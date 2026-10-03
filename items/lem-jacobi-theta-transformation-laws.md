---
id: lem-jacobi-theta-transformation-laws
kind: lemma
title: "Transformation laws of the Jacobi theta function"
status: draft
origin: pipeline
deps:
  - def-countable-choice
  - thm-jacobi-theta-triple-product
  - thm-poisson-summation-for-schwartz-functions
  - lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization
  - thm-weierstrass-m-test-for-complex-function-series
  - thm-weierstrass-convergence-holomorphic-functions
  - thm-identity-theorem-holomorphic-functions
  - cor-principal-logarithm-is-holomorphic-on-the-slit-plane
  - def-complex-logarithms-principal-logarithm-and-complex-powers
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-complex-exponential-addition-and-real-extension
  - thm-kernel-and-fibres-of-complex-exponential
  - thm-chain-rule-for-complex-derivatives
  - def-schwartz-space-and-its-seminorms
  - thm-exponential-beats-every-polynomial
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "E. M. Stein and R. Shakarchi, Complex Analysis (Princeton, 2003)"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
      locator: "Ch. 10 §1.1, Theorem 1.6 and Corollaries 1.7–1.8, printed pp. 290–291; shifted real Gaussian Poisson formula followed by two identity-theorem extensions."
---

## Statement

Assume countable choice. For $\tau\in\mathfrak H$ and $z\in\mathbb C$, let $\Theta(z\mid\tau)$ and $\theta(\tau)=\Theta(0\mid\tau)$ be the functions of [[thm-jacobi-theta-triple-product]], and set
$$s(\tau)=\exp\bigl(\tfrac12\operatorname{Log}(\tau/i)\bigr).$$
The principal logarithm is defined here because $\operatorname{Re}(\tau/i)>0$; thus $s$ is the holomorphic square root of $\tau/i$ that is positive for $\tau=it$, $t>0$. Then
$$\Theta(z\mid-1/\tau)=s(\tau)e^{\pi i\tau z^2}\Theta(\tau z\mid\tau),\qquad \Theta(z\mid\tau+2)=\Theta(z\mid\tau).$$
In particular
$$\theta(-1/\tau)=s(\tau)\theta(\tau),\qquad \theta(1-1/\tau)=s(\tau)\sum_{n\in\mathbb Z}e^{\pi i(n+1/2)^2\tau}.$$
As $\operatorname{Im}\tau\to\infty$, uniformly in $\operatorname{Re}\tau$,
$$\theta(1-1/\tau)=2s(\tau)e^{\pi i\tau/4}\bigl(1+O(e^{-2\pi\operatorname{Im}\tau})\bigr).$$

## Facts & Assumptions

**Given:** Countable choice ([[def-countable-choice]]), $\tau\in\mathfrak H$ and $z\in\mathbb C$.

[F1] The theta series $\Theta(z\mid\tau)=\sum_{n\in\mathbb Z}e^{\pi in^2\tau+2\pi inz}$ converges absolutely and uniformly on compact products; it is entire in $z$ and holomorphic in $\tau$ ([[thm-jacobi-theta-triple-product]]).

[F2] Under countable choice, shifted Poisson summation for a Schwartz function $f$ on $\mathbb R$ gives $\sum_n f(a+n)=\sum_m\widehat f(m)e^{2\pi ima}$, and both sums converge absolutely. For $f_t(u)=e^{-\pi tu^2}$, $t>0$, the Fourier transform is $t^{-1/2}e^{-\pi\xi^2/t}$ ([[thm-poisson-summation-for-schwartz-functions]], [[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]).

[F3] Summable uniform majorants give uniformly convergent function series; locally uniform holomorphic limits are holomorphic, and holomorphic functions on a connected domain agreeing on a set with an interior accumulation point agree everywhere ([[thm-weierstrass-m-test-for-complex-function-series]], [[thm-weierstrass-convergence-holomorphic-functions]], [[thm-identity-theorem-holomorphic-functions]]).

[F4] The principal logarithm is holomorphic off the nonpositive real ray and exponentiates to its argument. The exponential is entire, satisfies its addition law and has kernel $2\pi i\mathbb Z$; composition preserves holomorphy ([[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]], [[def-complex-logarithms-principal-logarithm-and-complex-powers]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-complex-exponential-addition-and-real-extension]], [[thm-kernel-and-fibres-of-complex-exponential]], [[thm-chain-rule-for-complex-derivatives]]).

## Proof

1.1 For $t>0$, every derivative of $f_t(u)=e^{-\pi tu^2}$ is a polynomial times this Gaussian. Exponential domination ([[thm-exponential-beats-every-polynomial]]) bounds each such derivative times every power of $u$, so $f_t$ is Schwartz in [[def-schwartz-space-and-its-seminorms]]. Apply [F2] at the real shift $a=x$ to obtain $\sum_n e^{-\pi t(n+x)^2}=t^{-1/2}\sum_m e^{-\pi m^2/t}e^{2\pi imx}$. Multiplying by $\sqrt t$ and expanding $(n+x)^2$ gives $\Theta(x\mid i/t)=\sqrt t\,e^{-\pi tx^2}\Theta(itx\mid it)$ for every real $x$. This is the asserted inversion identity for $\tau=it$, since $-1/(it)=i/t$, $s(it)=\sqrt t$ and $e^{\pi i(it)x^2}=e^{-\pi tx^2}$. Countable choice is used precisely through the two suppliers in [F2]. [F1, F2, F4, given, algebra]

2.1 Fix real $x$. Both sides of the claimed inversion identity are holomorphic in $\tau\in\mathfrak H$. For the right-hand theta series, on any compact $K\subset\mathfrak H$ its terms have modulus at most $e^{-\pi y_0n^2+C|n|}$, where $y_0=\min_K\operatorname{Im}\tau>0$ and $C$ bounds $2\pi|x\operatorname{Im}\tau|$; this summable Gaussian majorant proves holomorphy by [F3]. The other factors are holomorphic by [F4], including $s$, since $\tau/i$ lies in the right half-plane. The left side is holomorphic by [F1] and composition with $-1/\tau$. By 1.1 the two sides agree on the positive imaginary axis, whose points accumulate within $\mathfrak H$, so the identity theorem [F3] proves equality for all $\tau$. Now fix such $\tau$. The two sides are entire in $z$ by [F1, F4] and agree for real $z=x$, so a second identity-theorem application proves the inversion formula for every $z\in\mathbb C$. [F1, F3, F4, step 1.1, algebra]

3.1 Each term of the theta series is unchanged on replacing $\tau$ by $\tau+2$, since $e^{2\pi in^2}=1$ for integral $n$; absolute convergence therefore proves the stated period-two identity. Setting $z=0$ in 2.1 gives $\theta(-1/\tau)=s(\tau)\theta(\tau)$. Since $n^2$ and $n$ have the same parity, [F1, F4] give $\theta(1+u)=\Theta(1/2\mid u)$ for $u\in\mathfrak H$. Apply 2.1 with $z=1/2$ and complete the square: $e^{\pi i\tau/4}\Theta(\tau/2\mid\tau)=\sum_n e^{\pi i(n+1/2)^2\tau}$. This proves the shifted-constant formula. [F1, F4, step 2.1, algebra]

4.1 Pair $n=j$ with $n=-j-1$, $j\ge0$, in the absolutely convergent shifted series. Its value is $2e^{\pi i\tau/4}(1+\sum_{j\ge1}e^{\pi i\tau j(j+1)})$. If $y=\operatorname{Im}\tau$, then $j(j+1)\ge2j$ gives $|\sum_{j\ge1}e^{\pi i\tau j(j+1)}|\le e^{-2\pi y}/(1-e^{-2\pi y})$. This proves the uniform asymptotic and its stated error term. The principal square root never vanishes on $\mathfrak H$; no alternative square-root sign, boundary point $\tau=0$, or half-weight multiplier convention is implicit in any formula. [F1, F4, step 3.1, algebra] ∎

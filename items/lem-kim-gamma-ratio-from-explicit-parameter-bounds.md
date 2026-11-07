---
dependency_level: 0
id: lem-kim-gamma-ratio-from-explicit-parameter-bounds
kind: lemma
title: The Kim Gamma ratio under explicit parameter bounds
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- thm-stirling-formula-gamma
- thm-gamma-weierstrass-product
- thm-holomorphic-parameter-riemann-integral
- thm-integration-by-parts
- thm-natural-logarithm-laws
- thm-complex-exponential-is-entire-with-derivative-itself
- cor-gamma-function-has-no-zeros
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: Local bounded reconstruction of the BLS/BS07/Kim method
    url: https://www.ams.org/journals/jams/2003-16-01/S0894-0347-02-00410-1/S0894-0347-02-00410-1.pdf
    locator: Appendix2 equation11; conditional analytic Gamma estimate, unitary parameter
      classification separate
---

## Statement

Let $a_1,\ldots,a_D\in\mathbb C$ with $\operatorname{Re}a_j>-1$, where $D\ge0$ is finite. For $F\in C_c^\infty((1/2,2);\mathbb C)$ put $\widetilde F(s)=\int_0^\infty F(x)x^{-s}\,dx$. Then
$$
H(s)=\widetilde F(-s)\prod_{j=1}^D\frac{\Gamma((1+s+a_j)/2)}{\Gamma((-s-a_j)/2)}
$$
is holomorphic on $\operatorname{Re}s>0$ and decreases faster than every inverse power of $|\operatorname{Im}s|$ uniformly on each closed strip $0<A\le\operatorname{Re}s\le B<\infty$. In the spherical symmetric-square application take $a_j=\mu_i+\mu_j$ for $i\le j$; the sufficient local parameter condition is $\operatorname{Re}\mu_i>-1/2$ for every $i$. This lemma does not prove that condition from unitary generic representation theory.

## Facts & Assumptions

**Given:** The finite parameter list, strict real-part inequalities and compactly supported smooth test function.

[F1] Sectorial Stirling holds uniformly away from the negative real ray, and reciprocal Gamma is entire by its Weierstrass product and vanishes exactly at the nonpositive integers. [[cor-gamma-function-has-no-zeros]] [[thm-stirling-formula-gamma]] [[thm-gamma-weierstrass-product]]

[F2] Jointly continuous finite-interval holomorphic parameter integrals are holomorphic; the exponential is entire with its derivative. [[thm-holomorphic-parameter-riemann-integral]] [[thm-complex-exponential-is-entire-with-derivative-itself]]

[F3] Integration by parts holds on a finite interval, and logarithms obey their usual laws. Apply the real integration identity to real and imaginary components when needed. [[thm-integration-by-parts]] [[thm-natural-logarithm-laws]]

## Proof

1.1 For $\operatorname{Re}s>0$, every numerator Gamma argument has positive real part since $1+\operatorname{Re}s+\operatorname{Re}a_j>0$. Hence it avoids Gamma's poles; every reciprocal denominator Gamma factor is entire by [F1]. Also $\widetilde F(-s)$ is entire by [F2], since its integral is over one fixed compact interval and its kernel is $F(x)e^{s\log x}$. Thus their finite product is holomorphic on the stated half-plane. [given, F1, F2, algebra]

1.2 Write $s=\sigma+it$ with $\sigma\in[A,B]$. For a fixed $a_j=u_j+iv_j$, the two Gamma arguments have real parts $(1+\sigma+u_j)/2$ and $(-\sigma-u_j)/2$ and opposite imaginary parts $(t+v_j)/2$ and $-(t+v_j)/2$. Their real parts remain in compact intervals. For large $|t|$ both lie in a fixed closed sector away from the negative real ray. Taking absolute values in [F1] gives the usual vertical estimate $|\Gamma(u+iv)|\asymp |v|^{u-1/2}e^{-\pi|v|/2}$, uniformly for bounded $u$ and large $|v|$: indeed $\log|u+iv|=\log|v|+O(v^{-2})$ and $\arg(u+iv)=\operatorname{sgn}(v)\pi/2-u/v+O(|v|^{-3})$ in the Stirling main term. The two exponential factors cancel because the imaginary parts have equal modulus. Each ratio is therefore bounded by a fixed power of $1+|t|$ uniformly on the strip. The finite product is polynomially bounded there. [given, F1, algebra]

2.1 Substitute $x=e^w$ in the Mellin integral. Then $\widetilde F(-s)=\int F(e^w)e^w e^{\sigma w}e^{itw}\,dw$, with a fixed compact interval in $w$. Every derivative of $F(e^w)e^w e^{\sigma w}$ is uniformly bounded for $\sigma\in[A,B]$, and the function and all derivatives vanish at the endpoints. Repeated integration by parts [F3] gives $|\widetilde F(-s)|\le C_K(1+|t|)^{-K}$ for every integer $K\ge0$, uniformly on the strip. Multiplying by the polynomial bound of step 1.2 and choosing $K$ larger than any requested power proves rapid decay. The remaining bounded $t$ range is controlled by continuity on a compact rectangle. Empty products and $F=0$ are included. [given, F2, F3, step 1.1, step 1.2, algebra] ∎

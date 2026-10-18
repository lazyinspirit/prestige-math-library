---
id: lem-loggamma-series-convergence-and-gamma-identity
kind: lemma
title: Weierstrass log-Gamma series converges to a Gamma branch
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-loggamma-right-halfplane-branch, thm-gamma-weierstrass-product, cor-principal-logarithm-is-holomorphic-on-the-slit-plane, thm-ftc-second-part, thm-continuous-implies-integrable, thm-weierstrass-convergence-holomorphic-functions]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: DLMF, §5.2, Gamma function and Euler constant
      url: https://dlmf.nist.gov/5.2
    - title: DLMF, §5.8(ii), equation 5.8.2
      url: https://dlmf.nist.gov/5.8
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§2 and 3
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
---

## Statement

For every $z$ with $\operatorname{Re}z>0$, the series defining
$\ell_+(z)$ in [[def-loggamma-right-halfplane-branch]] converges locally
uniformly, defines a holomorphic function, and satisfies
$e^{\ell_+(z)}=\Gamma(z)$ for Euler's Gamma function on that half-plane.

## Facts & Assumptions

**Given:** $\operatorname{Re}z>0$ and the definitions in
[[def-loggamma-right-halfplane-branch]].

[F1] [[thm-gamma-weierstrass-product]]:
$$\frac1{\Gamma(z)}=ze^{\gamma z}\prod_{n=1}^{\infty} \left(1+\frac zn\right)e^{-z/n}.$$

[F2] [[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]]:
$\operatorname{Log}'(w)=1/w$ on the slit plane.

[F3] [[thm-ftc-second-part]]: the derivative of a continuously differentiable
real function integrates to its endpoint difference; apply to the real and
imaginary parts of a complex-valued curve.

[F4] [[thm-continuous-implies-integrable]]: a continuous function on the
compact interval $[0,1]$ is Riemann integrable.

[F5] [[thm-weierstrass-convergence-holomorphic-functions]]: a locally uniform
limit of holomorphic functions is holomorphic.

## Proof
1.1 For $w=z/n$ with $\operatorname{Re}z>0$, the path $1+tw$ lies in the principal-logarithm domain. Its derivative integrand is continuous on $[0,1]$ and is integrable by [F4]. By [F2], [F3], and the chain rule, $$\operatorname{Log}(1+w)=\int_0^1\frac{w}{1+tw}\,dt, \qquad w-\operatorname{Log}(1+w)=\int_0^1\frac{tw^2}{1+tw}\,dt.$$ Since $|1+tw|^2=1+2t\operatorname{Re}w+t^2|w|^2\ge1$, the summand has absolute value at most $|z|^2/(2n^2)$. Summing this bound is uniform on every compact subset of the right half-plane. Each summand is holomorphic there, so the series converges locally uniformly and defines a holomorphic function by [F5]. [given, F2, F3, F4, F5, algebra]

2.1 For each finite $N$, exponentiating the partial sum gives $$\exp\left(-\operatorname{Log}z-\gamma_Ez+ \sum_{n=1}^{N}\left(\frac zn-\operatorname{Log}(1+z/n)\right)\right) =\left(ze^{\gamma_Ez}\prod_{n=1}^{N}(1+z/n)e^{-z/n}\right)^{-1}.$$ Taking $N\to\infty$, local uniform convergence from step 1.1 and [F1] show that the left side tends to $e^{\ell_+(z)}$ and the right side to $\Gamma(z)$. This proves the claimed branch identity. [F1, step 1.1, algebra] ∎
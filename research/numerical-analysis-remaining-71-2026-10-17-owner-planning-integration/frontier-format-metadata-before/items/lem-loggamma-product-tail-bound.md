---
id: lem-loggamma-product-tail-bound
kind: lemma
title: Explicit tail bound for the log-Gamma product series
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-loggamma-right-halfplane-branch, lem-loggamma-series-convergence-and-gamma-identity, cor-principal-logarithm-is-holomorphic-on-the-slit-plane, thm-ftc-second-part, thm-continuous-implies-integrable]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: DLMF, §5.8(ii), equation 5.8.2
      url: https://dlmf.nist.gov/5.8
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§2 and 3
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
---

## Statement

For $\operatorname{Re}z>0$ and integer $N>2|z|$, the tail in the series for
$\ell_+(z)$ after its first $N$ summands satisfies

$$\left|\sum_{n=N+1}^{\infty} \left(\frac zn-\operatorname{Log}\left(1+\frac zn\right)\right)\right| \le \frac{|z|^2}{2N\left(1-|z|/(N+1)\right)}.$$

## Facts & Assumptions

**Given:** $\operatorname{Re}z>0$ and an integer $N>2|z|$.

[F1] [[def-loggamma-right-halfplane-branch]]: the summands are
$z/n-\operatorname{Log}(1+z/n)$.

[F2] [[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]]:
$\operatorname{Log}'(w)=1/w$ on the slit plane.

[F3] [[thm-ftc-second-part]]: the derivative of a continuously differentiable
complex-valued path integrates to its endpoint difference, by applying the
real theorem to each component.

[F4] [[thm-continuous-implies-integrable]]: a continuous function on
$[0,1]$ is Riemann integrable.

## Proof
1.1 Put $w=z/n$, so $\operatorname{Re}w>0$. The integrand in the path formula is continuous and integrable by [F4]. By [F2], [F3], and the chain rule, $$w-\operatorname{Log}(1+w)=\int_0^1\frac{tw^2}{1+tw}\,dt.$$ Since $|1+tw|^2=1+2t\operatorname{Re}w+t^2|w|^2\ge1$, this summand has modulus at most $|z|^2/(2n^2)$. [given, F1, F2, F3, F4, algebra]

2.1 The decreasing function $t\mapsto t^{-2}$ satisfies $\sum_{n=N+1}^{\infty}n^{-2}\le\int_N^\infty t^{-2}dt=1/N$. Summing step 1.1 gives $|z|^2/(2N)$. Since $0<1-|z|/(N+1)<1$ under $N>2|z|$, this is no larger than the stated bound. [given, step 1.1, algebra] ∎
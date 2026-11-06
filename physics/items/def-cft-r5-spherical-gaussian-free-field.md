---
id: def-cft-r5-spherical-gaussian-free-field
kind: definition
title: Gaussian free field on the Riemann sphere in the Liouville convention
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: mathematics
deps: []
dependency_roles: {}
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Colin Guillarmou, Antti Kupiainen, Rémi Rhodes, Vincent Vargas, Conformal Bootstrap in Liouville Theory, arXiv:2005.11530v1"
      url: https://arxiv.org/pdf/2005.11530v1
      locator: "§1.1, PDF pp. 4–5; §2.1, PDF pp. 19–20."
    - title: "Rémi Rhodes and Vincent Vargas, Lecture notes on Gaussian multiplicative chaos and Liouville Quantum Gravity, arXiv:1602.07323v1"
      url: https://arxiv.org/pdf/1602.07323
      locator: "§2, PDF pp. 2–7; the GFF is used as a random distribution, not a pointwise field."
---

## Definition

Let $S=\widehat{\mathbb C}=\mathbb C\cup\{\infty\}$ with its usual two complex charts. In the finite chart write $z=x+iy$, put $|z|_+=\max\{1,|z|\}$, and use the finite positive background measure $dA_0(z)=|z|_+^{-4}\,dx\,dy$. It has total mass $\pi+2\pi\int_1^\infty r^{-3}dr=2\pi$. Under $w=1/z$, the Jacobian $dx_zdy_z=|w|^{-4}dx_wdy_w$ gives the same coordinate expression $dA_0(w)=|w|_+^{-4}\,d\Re(w)\,d\Im(w)$, which is continuous and positive but not smooth across $|w|=1$. Independently, use the smooth round metric $g_{\rm rd}=4(dx^2+dy^2)/(1+|z|^2)^2$ in the finite chart; in the $w$ chart it has the same expression. Write $d_{\rm rd}$ for its geodesic distance and $dA_{\rm rd}$ for its area measure. The covariance kernel below is interpreted globally in the two charts as a locally integrable function off its logarithmic diagonal singularity.

A **centered spherical Gaussian free field in the Liouville convention** is a probability space $(\Omega,\mathcal F,\mathbb P)$ and a real linear map $X:C^\infty(S;\mathbb R)\to L^2(\Omega,\mathbb P)$ such that every finite vector $(X(f_1),\ldots,X(f_n))$ is centered Gaussian and, for all real smooth test functions $f,h$,

$$\mathbb E[X(f)X(h)]=\int_S\int_S f(z)h(w)K(z,w)\,dA_{\rm rd}(z)\,dA_{\rm rd}(w),\qquad K(z,w)=\log\frac1{|z-w|}+\log|z|_++\log|w|_+.$$

This finite-chart formula is global: when $|z|,|w|>1$, it becomes $K=\log(1/|z^{-1}-w^{-1}|)$ in the $w=1/z$ chart; when $|z|>1$ and $|w|\le1$, it becomes $K=\log(1/|1-w/z|)$, and the other mixed case follows by symmetry. These formulas agree on overlaps and have only the stated diagonal logarithmic singularity.

Require that, outside one null set, $f\mapsto X(f)$ is a continuous distribution on $C^\infty(S)$ with its usual test-function topology. The point notation $X(z)$ is only shorthand for this random distribution and its covariance kernel; it does not assert a pointwise value. Fix $0<\varepsilon_0<1$ and a finite constant $M$ large enough for the constructions below. A **smoothing family** is a family of nonnegative smooth local averaging kernels $\rho_\varepsilon(z,w)$, for $0<\varepsilon<\varepsilon_0$, supported where $d_{\rm rd}(z,w)\le\varepsilon$, satisfying $\rho_\varepsilon(z,w)\le M\varepsilon^{-2}$, with unit integral in $w$ against $dA_{\rm rd}(w)$ and satisfying $\int_S\rho_\varepsilon(z,w)f(w)dA_{\rm rd}(w)\to f(z)$ for every smooth $f$. For every two such families $\rho,\sigma$, the mixed regularized covariance is
$$K^{\rho,\sigma}_{\varepsilon,\delta}(z,w):=\mathbb E[X(\rho_\varepsilon(z,\cdot))X(\sigma_\delta(w,\cdot))]$$
and converges to $K(z,w)$ off the diagonal, with
$$K^{\rho,\sigma}_{\varepsilon,\delta}(z,w)\le C+\log^+\!\frac{1}{d_{\rm rd}(z,w)+\varepsilon+\delta}$$
uniformly in $z,w,\varepsilon,\delta,\rho,\sigma$ for one finite $C$ depending only on $M$ and the fixed sphere geometry, as verified below. Set $X^\rho_\varepsilon(z)=X(\rho_\varepsilon(z,\cdot))$; this is a smooth Gaussian field for each $\varepsilon>0$. Thus the local L2 lemma has its mixed-family covariance hypothesis. The test pairing uses the smooth measure $dA_{\rm rd}$; the distinct measure $dA_0$ remains the interaction/background measure in GMC and is not inserted into the smoothing pairing. No division by the nonsmooth density of $dA_0$ is used.

This convention fixes the background measure and additive normalization used by the probabilistic Liouville sphere construction. The constant mode is not part of $X$ and is introduced separately in that construction.

## Definition references

[[def-cft-r5-full-local-cft-data]]


## Proof

**Given:** A random distribution with the covariance and almost-sure continuity in the Definition, the round sphere, and the fixed scale bound $M$.

1.1 Choose a nonnegative smooth function $\chi$ on $[0,\infty)$, positive at zero and identically zero for arguments at least $1$, with all derivatives zero at $1$. For $0<\varepsilon<\varepsilon_0<1$, set $N_\varepsilon(z)=\int_S\chi(d_{\rm rd}(z,u)^2/\varepsilon^2)dA_{\rm rd}(u)$ and $\rho_\varepsilon(z,u)=\chi(d_{\rm rd}(z,u)^2/\varepsilon^2)/N_\varepsilon(z)$. The squared distance is smooth below the injectivity radius; outside that region the numerator is identically zero, so the kernel is globally smooth. Round-ball area bounds give $c\varepsilon^2\le N_\varepsilon(z)\le C\varepsilon^2$. This constructs a nonempty class with a fixed finite scale bound $M$. The unit integral and shrinking support imply approximation of each continuous test function uniformly. [given, construct, algebra]

1.2 The kernel satisfies $K(u,v)=\log^+(1/d_{\rm rd}(u,v))+H(u,v)$ with $H$ bounded on the complement of the diagonal and extending boundedly across it. Indeed the chordal-distance identity rewrites the finite-chart singularity using the bounded continuous function $\log|u|_+-\frac12\log(1+|u|^2)$ in each variable; round distance and chordal distance have bounded ratio. Continuity off the diagonal includes points on the equator: $\log|u|_+$ is continuous and locally Lipschitz there, although not differentiable. Probability averaging on shrinking balls therefore gives the asserted off-diagonal covariance limit. [given, algebra]

2.1 Write $a=\max(\varepsilon,\delta)$ and $d=d_{\rm rd}(z,w)$. If $d>4a$, all pairs in the two supports have distance between $d/2$ and $3d/2$, so the logarithmic bound follows immediately. If $d\le4a$, average first in the variable whose smoothing radius is $a$. Its probability density is at most $M a^{-2}$. For every fixed other point $v$, the round polar-area bound gives $\int_{d_{\rm rd}(u,v)<a}\log(a/d_{\rm rd}(u,v))dA_{\rm rd}(u)\le C a^2\int_0^1t\log(1/t)dt\le C'a^2$. Since $a<1$, the inequality $\log^+(1/r)\le\log(1/a)+\log^+(a/r)$ gives the averaged upper bound $\log(1/a)+C_M$. In this case $a\le d+\varepsilon+\delta\le6a$; together with the bounded remainder from step 1.2 this proves the displayed uniform mixed bound. [given, step 1.2, algebra]

3.1 For every sample distribution in the one full-probability event in the Definition, $z\mapsto X(\rho_\varepsilon(z,\cdot))$ is smooth: derivatives in $z$ pass through the continuous linear functional on smooth tests. This assertion differentiates the smooth test kernel, not $K$ or $dA_0$. In a planar chart with $dA_{\rm rd}(u)=a(u)d^2u$, a fixed nonnegative compact planar convolution is represented exactly by the smooth test $\eta_\varepsilon(z-u)/a(u)$. A cutoff and a smooth partition of unity extend such kernels to global averaging kernels; local equivalence of the round and planar distances gives their scale bound after a fixed rescaling of the parameter. Any fixed finite selection of these profiles and the kernels of step 1.1 fits one common $M$. In particular planar radial convolutions remain available across $|z|=1$, since $a$ is smooth there. Their covariance averages the original $K$ and no density multiplier survives. This proves the smoothing claims without any smoothness assumption on the equatorial background measure. [given, step 1.1, step 1.2, step 2.1, construct, algebra] ∎

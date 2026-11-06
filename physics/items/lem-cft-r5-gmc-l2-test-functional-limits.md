---
id: lem-cft-r5-gmc-l2-test-functional-limits
kind: lemma
title: L2 limits of spherical Gaussian multiplicative chaos test functionals
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: mathematics
library: mathematics
deps:
  - def-cft-r5-spherical-gaussian-free-field
  - def-cft-r5-spherical-gaussian-multiplicative-chaos-data
dependency_roles:
  def-cft-r5-spherical-gaussian-free-field: mathematical-premise
  def-cft-r5-spherical-gaussian-multiplicative-chaos-data: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
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
    - title: "Rémi Rhodes and Vincent Vargas, Lecture notes on Gaussian multiplicative chaos and Liouville Quantum Gravity, arXiv:1602.07323v1"
      url: https://arxiv.org/pdf/1602.07323
      locator: "§2.2, proof of Theorem 2.3, PDF pp. 3–5; the L2 range is $\\gamma^2<d$."
---

## Statement

Assume the covariance and smoothing conventions of the spherical Gaussian free field and its normalized chaos regularization defined earlier on this page. For $0<\gamma<\sqrt2$ and every real continuous $f$ on $S$, the scalar random variables

$$M_{\gamma,\varepsilon}(f):=\int_S f(z)\exp\!\left(\gamma X_\varepsilon(z)-\frac{\gamma^2}{2}\mathbb E[X_\varepsilon(z)^2]\right)dA_0(z)$$

converge in $L^2(\Omega,\mathbb P)$ as $\varepsilon\downarrow0$. Their limit is unchanged when one smoothing family is replaced by another. For real continuous $f,h$, the limiting functionals satisfy

$$\mathbb E[M_\gamma(f)]=\int_S f\,dA_0,\qquad \mathbb E[M_\gamma(f)M_\gamma(h)]=\int_S\int_S f(z)h(w)e^{\gamma^2K(z,w)}dA_0(z)dA_0(w).$$

The statement concerns scalar test-function limits; it does not assert a Radon-measure-valued version for the full range $0<\gamma<2$.

## Statement references

[[def-cft-r5-spherical-gaussian-free-field]]

[[def-cft-r5-spherical-gaussian-multiplicative-chaos-data]]

## Facts & Assumptions

**Given:** $X$ is a centered Gaussian random distribution on the compact sphere, $K$ has the logarithmic singularity specified by the GFF definition, and $M_{\gamma,\varepsilon}$ is its normalized regularization.

[F1] [[def-cft-r5-spherical-gaussian-free-field]]: the covariance is $K(z,w)=\log(1/|z-w|)+\log|z|_++\log|w|_+$, paired on tests against the smooth round area measure $dA_{\rm rd}$; the GMC integration measure remains $dA_0$; every pair of admitted smoothings has mixed covariance converging off the diagonal and bounded above by $C+\log^+(1/(d_{\rm rd}(z,w)+\varepsilon+\delta))$ uniformly.

[F2] [[def-cft-r5-spherical-gaussian-multiplicative-chaos-data]]: $M_{\gamma,\varepsilon}(dz)=e^{\gamma X_\varepsilon(z)-\gamma^2\mathbb E[X_\varepsilon(z)^2]/2}dA_0(z)$.

[A1] $0<\gamma<\sqrt2$, so $\gamma^2<2$.

## Proof

1.1 The covariance bound in [F1] implies $e^{\gamma^2K_{\varepsilon,\delta}(z,w)}\le C_1(d_{\rm rd}(z,w)^{-\gamma^2}+1)$ for a constant independent of the two smoothing parameters. The background density $dA_0$ is continuous and bounded in every compact chart, so near the diagonal its integral is bounded by a constant times $\int_0^1r^{1-\gamma^2}dr=(2-\gamma^2)^{-1}<\infty$ by [A1]; away from the diagonal it is bounded. [F1, A1, algebra]

2.1 If $U,V$ are jointly centered Gaussian, their moment-generating function gives $\mathbb E[e^{\gamma U-\gamma^2\mathbb E[U^2]/2}e^{\gamma V-\gamma^2\mathbb E[V^2]/2}]=e^{\gamma^2\mathbb E[UV]}$. Fubini applied to the absolutely integrable kernel bound in step 1.1 therefore gives $\mathbb E[M_{\gamma,\varepsilon}(f)M_{\gamma,\delta}(h)]=\int_S\int_S f(z)h(w)e^{\gamma^2K_{\varepsilon,\delta}(z,w)}dA_0(z)dA_0(w)$. [F1, F2, step 1.1, algebra]

3.1 The off-diagonal covariance convergence in [F1], the integrable bound in step 1.1, and dominated convergence show that the moment in step 2.1 tends to $\int_S\int_S f(z)h(w)e^{\gamma^2K(z,w)}dA_0(z)dA_0(w)$ as $\varepsilon,\delta\downarrow0$. Taking $h=1$ in the same Gaussian exponential identity gives $\mathbb E[M_{\gamma,\varepsilon}(f)]=\int_S f\,dA_0$ for every $\varepsilon$. [F1, step 1.1, step 2.1, algebra]

4.1 Expand $\mathbb E[|M_{\gamma,\varepsilon}(f)-M_{\gamma,\delta}(f)|^2]$ into two self terms and two mixed terms. By step 3.1 each term tends to $I_f$ with its indicated sign, so the limit is $I_f+I_f-I_f-I_f=0$. Thus the regularized scalar functionals are Cauchy in the complete space $L^2(\Omega,\mathbb P)$ and have an $L^2$ limit. [step 2.1, step 3.1, algebra]

5.1 For two smoothing families, the same uniform covariance bound and off-diagonal limit in [F1] give the same mixed second-moment limit in step 3.1. Repeating the four-term difference calculation of step 4.1 shows that their scalar limits agree. The limits have the first and second moments asserted in the Statement by step 3.1. [F1, step 3.1, step 4.1] ∎

## Remarks

The proof stops at scalar $L^2$ limits. Turning the simultaneous family of limits into a finite Radon random measure, and extending existence and mollifier-independence to $\sqrt2\le\gamma<2$, require additional arguments. The cited lecture notes prove the L2 case and refer elsewhere for the remaining subcritical interval; they are not treated as supplying those local arguments.

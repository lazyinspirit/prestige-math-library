---
id: def-cft-r5-liouville-radial-hamiltonian-data
kind: definition
title: Radial Hilbert-space data and Liouville Hamiltonian
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: mathematics
library: mathematics
deps:
  - def-cft-r5-liouville-probabilistic-sphere-model
  - def-cft-r5-spherical-gaussian-multiplicative-chaos-data
dependency_roles:
  def-cft-r5-liouville-probabilistic-sphere-model: mathematical-premise
  def-cft-r5-spherical-gaussian-multiplicative-chaos-data: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
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
      locator: "§1.2–§1.3 and equations (1.17)–(1.23), PDF pp. 8–11; §2.1, PDF p. 19; §2.3–§2.4, PDF pp. 22–24, distinguish the full-range semigroup generator from the function-potential form."
---

## Definition

Let $0<\gamma<2$, $\mu>0$ and $Q=2/\gamma+\gamma/2$. Let $D=\{z\in\mathbb C:|z|<1\}$ and $T=\partial D$, with angular coordinate $\theta\in[0,2\pi)$. Let $\Omega_T=(\mathbb R^2)^{\mathbb N_{>0}}$ with the product of standard two-dimensional Gaussian laws. Write its coordinate pairs as $(x_n,y_n)$ and set $\varphi_n=(x_n+iy_n)/(2\sqrt n)$, $\varphi_{-n}=\overline{\varphi_n}$; the real circle Gaussian free field is the random distribution $\varphi(\theta)=\sum_{n\ne0}\varphi_ne^{in\theta}$, with covariance $\mathbb E[\varphi(\theta)\varphi(\theta')]=\log(1/|e^{i\theta}-e^{i\theta'}|)$ interpreted distributionally. Let $P_T$ be the product Gaussian law and $\mathcal H_T=L^2(\Omega_T,P_T)$.

For a finite sequence of nonnegative integers $k=(k_n)$ and $l=(l_n)$, let $H_{k,l}$ be the product of the normalized Hermite polynomials in the coordinates $(x_n,y_n)$, with the one-variable normalization fixed by $\mathbb E[H_m(Z)H_j(Z)]=\delta_{mj}$ for a standard normal $Z$. On their linear span define the nonnegative number operator $\mathcal P H_{k,l}=\left(\sum_{n\ge1}n(k_n+l_n)\right)H_{k,l}$.

A **radial Liouville data package in the function-potential regime** has $0<\gamma<\sqrt2$ and includes the circle-GMC limit, when it exists, of

$$m_{\gamma,N}(d\theta)=\exp\!\left(\gamma\varphi^{(N)}(\theta)-\frac{\gamma^2}{2}\mathbb E[\varphi^{(N)}(\theta)^2]\right)d\theta,\qquad \varphi^{(N)}(\theta)=\sum_{0<|n|\le N}\varphi_ne^{in\theta},$$

and its total mass $V=m_\gamma(T)$. It also includes the closed nonnegative quadratic-form realization, when it exists, of

$$H=-\frac12\partial_c^2+\frac12Q^2+\mathcal P+\mu e^{\gamma c}V$$

on $\mathcal H=L^2(\mathbb R\times\Omega_T,dc\otimes P_T)$. “Friedrichs realization” means the self-adjoint operator associated with the closure of the lower-bounded form initially evaluated on $C_c^\infty(\mathbb R)$ tensored with finite Hermite polynomials. This definition does not assert that the form is closable for every parameter or that $H$ has a particular spectrum.

The cutoff measures above remain defined for $0<\gamma<2$, as do the conditional disk data below. The displayed multiplication-potential formula defines the radial Liouville Hamiltonian only in the function-potential regime $0<\gamma<\sqrt2$. A zero raw circle limit does not define the interacting Liouville Hamiltonian for $\sqrt2\le\gamma<2$; the source's full-range operator is instead the radial semigroup generator of §2.3. No construction of that additional operator is asserted here.

For $x,y\in D$, define the Dirichlet Green kernel $G_D(x,y)=\log\left|\frac{1-\bar yx}{x-y}\right|$. Let $X_D$ be an independent centered Dirichlet Gaussian free field with covariance $G_D$; its normalized exponential mollifications are $M_{\gamma,D,\varepsilon}(dx)=e^{\gamma X_{D,\varepsilon}(x)-\gamma^2\mathbb E[X_{D,\varepsilon}(x)^2]/2}dx$, and $M_{\gamma,D}$ is their Radon-measure limit in the vague topology (convergence against every continuous compactly supported function on $D$) when it exists. The harmonic extension of the boundary distribution is $P\varphi(re^{i\theta})=\sum_{n\ne0}r^{|n|}\varphi_ne^{in\theta}$ for $0\le r<1$, with convergence in distributions. For real $\alpha,\beta<Q$ and $0<|z|<1$, the radial two-insertion vector, when the conditional expectation exists, is

$$U_{\alpha,\beta}(0,z)(c,\varphi)=e^{(\alpha+\beta-Q)c+\beta(P\varphi)(z)+\alpha\beta G_D(0,z)}(1-|z|^2)^{\beta^2/2}\,\mathbb E\!\left[\left.\exp\!\left(-\mu e^{\gamma c}\int_D e^{\gamma(P\varphi)(x)}(1-|x|^2)^{\gamma^2/2}e^{\gamma\alpha G_D(x,0)+\gamma\beta G_D(x,z)}M_{\gamma,D}(dx)\right)\right|\varphi\right],$$

where $P\varphi$ is the harmonic extension of the boundary distribution to $D$, $M_{\gamma,D}$ is the GMC of the independent Dirichlet GFF on $D$, and the conditional expectation is over that interior field. The existence of this vector, its relation to sphere correlation functions, and the self-adjoint spectral resolution of $H$ are separate theorem obligations.

## Definition references

[[def-cft-r5-liouville-probabilistic-sphere-model]]

[[def-cft-r5-spherical-gaussian-multiplicative-chaos-data]]

## Remarks

This radial package records the objects in the cited scattering proof. It is not a proof that the probabilistic sphere measure satisfies reflection positivity or that the displayed quadratic form has the source's self-adjoint extension and continuous spectrum.

---
dependency_level: 3
id: def-yang-microlocalized-archimedean-whittaker-vector
kind: definition
title: "Yang's Microlocalized Archimedean Whittaker Data"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-gln-generic-whittaker-model
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Liyang Yang, Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n), §§3.2 and 4.1"
      url: "https://arxiv.org/pdf/2309.07534v2"
    - title: "Paul D. Nelson, Subconvex Bounds for Standard L-Functions on GL(n), §§8.5–8.6 and 10–11"
      url: "https://arxiv.org/pdf/2109.15230v2"
pipeline_run: number-theory-all-141-2026-10-25
---

## Definition

Let $n\geq2$, $G'=\mathrm{GL}_n(\mathbb R)$, and let $B'$, $A'$, and $N'$ be its upper-triangular, diagonal, and lower-unitriangular subgroups. Put $\delta_{B'}(a)=\prod_{i<j}|a_i/a_j|$ for $a=\operatorname{diag}(a_1,\ldots,a_n)$, let $\mathfrak g'$ and $\mathfrak n'$ be the Lie algebras of $G'$ and $N'$, and let $\rho^\vee$ be the half-sum of the positive coroots; explicitly, $T^{\rho^\vee}=\operatorname{diag}(T^{(n+1-2j)/2})_{j=1}^n$. Fix a nondegenerate unitary character $\theta$ of $N'$, a smooth compactly supported function $\beta$ on $A'$ satisfying $\int_{A'}\beta(a)\chi(a)\,d^\times a=1$, and inducing data $\chi=\bigotimes_{j=1}^n\chi_j|\cdot|^{\lambda_j}$ for a principal series containing the fixed generic representation $\pi'_\infty$; each $\chi_j$ is unitary and each $\lambda_j$ is fixed. Set $\theta_T(\exp X)=\theta(\exp(TX))$ for $X\in\mathfrak n'$, where $T\geq1$.

For $g'=au$ with $a\in A'$ and $u\in N'$, put $J[\theta_T,\beta](g')=\delta_{B'}(a)^{1/2}\beta(a)\theta_T(u)$, and put it equal to zero outside $A'N'$. Choose $h_0\in C_c^\infty(\mathfrak g')$ with $\int h_0(X)\,dX=1$. Define a smooth measure $\gamma_0$ on $G'$ by

$$\int_{G'}\Phi(g)\,d\gamma_0(g)=\int_{\mathfrak g'}h_0(X)\Phi(\exp(T^{-1/2}X))e^{-\langle T\theta^\dagger,T^{-1/2}X\rangle}\,dX,$$

where $\theta^\dagger$ is the logarithmic differential of $\theta$, extended by zero to a fixed complementary subspace. Put $\gamma=\gamma_0^**\gamma_0$, with $h^*(g)=\overline{h(g^{-1})}$ and convolution taken against fixed Haar measure; for a smooth complex measure the star means conjugated pushforward by inversion. Set

$$J[\theta_T,\beta,\gamma](g')=\int_{G'}J[\theta_T,\beta](g'g'')\,d\gamma(g''),$$

and define $\beta_T(a)=\delta_{B'}(T^{\rho^\vee})^{-1/2}\beta(T^{\rho^\vee}a)$, $J_T$ by replacing $\beta$ with $\beta_T$, and

$$M_T(g')=\int_{A'}\delta_{B'}(a)^{1/2}J_T(a^{-1}g')\chi(a)\,d^\times a.$$

If $w_{n-1}$ is the long Weyl element of $G'$, Yang's archimedean Whittaker test function is

$$W'_{\infty,T}(g')=\chi(T^{-\rho^\vee})T^{n(n-1)/8}\int_{N'}M_T(w_{n-1}ug')\theta(u)\,du.$$

Independently, for fixed archimedean representations $\Pi_\infty$ of $G=\mathrm{GL}_{n+1}(\mathbb R)$ and $\pi'_\infty$ of $G'$, let $\mathfrak g$ be the Lie algebra of $G$ and choose $\tau$ in its imaginary dual so that $T\tau$ and its restriction to $\mathfrak g'$ lie in the coadjoint orbits of those representations. Choose a smooth Fourier-side bump supported where the tangent displacement from $T\tau$ is $O(T^{1/2+\varepsilon})$ and the normal displacement is $O(T^\varepsilon)$, in fixed norms. Push its Fourier transform to $G$ in exponential coordinates and truncate it to a smooth function $\widetilde f_\infty^\dagger$ supported where

$$g=I_{n+1}+O(T^{-\varepsilon}),\qquad \operatorname{Ad}^*(g)\tau=\tau+O(T^{-1/2+\varepsilon}).$$

For a unitary central character $\omega_\infty$, put $\widetilde f_\infty(g)=\int_{Z(\mathbb R)}\widetilde f_\infty^\dagger(zg)\omega_\infty(z)\,d^\times z$ and $f_\infty=\widetilde f_\infty*\widetilde f_\infty^*$. Convolution before central projection uses group Haar measure; convolution of the centrally projected $\widetilde f_\infty$ uses $Z(\mathbb R)\backslash G(\mathbb R)$, with the quotient measure and unitary central-character compensation. This definition specifies the chosen test data only; it does not assert that the associated operator is a rank-one projector or prove any norm or period estimate.

## Definition references

[Liyang Yang, *Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n)*, §§3.2 and 4.1](https://arxiv.org/pdf/2309.07534v2)

[Paul D. Nelson, *Subconvex Bounds for Standard L-Functions on GL(n)*, §§8.5–8.6 and 10–11](https://arxiv.org/pdf/2109.15230v2)


## Interface limits

These smooth microlocal data are not asserted finite under the archimedean maximal compact subgroup. The batch49 spectral expansion is stated for compact-type-finite test functions; extension to these data and the associated norm-twist transport are held analytic prerequisites, rather than consequences of this definition. In every displayed Rankin–Selberg quotient period, larger- and smaller-rank Whittaker functions must use opposite unipotent characters. No nonzero or positive prescribed-vector period follows from genericity alone.

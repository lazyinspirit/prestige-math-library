---
id: def-type-s-and-h-multiscale-density-priors
kind: definition
title: Type-S log-density and type-H histogram prior families
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-negative-sobolev-space-for-white-noise
justified_by:
  - lem-type-s-h-prior-draws-are-l2-densities
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Castillo and Nickl, On the Bernstein–von Mises phenomenon for nonparametric Bayes procedures, §§2–3.2, equations (19)–(25)"
      url: https://arxiv.org/pdf/1310.2484
    - title: "Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, §7.4 Notes"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
---

## Definition

Use the compactly supported wavelet basis $(\psi_{lk})$ of [[def-negative-sobolev-space-for-white-noise]], with $|K_l|=2^l$, uniformly bounded overlap, and bounded wavelets at each finite level. For the density-model source results, every truth $f_0$ is a probability density satisfying $0<\rho_0\le f_0\le D_0<\infty$ for constants $\rho_0,D_0$. For $n\ge3$ and smoothness index $\alpha>0$, let $j_n$ and $\ell_n$ be the largest integers satisfying
$$2^{j_n}\le n^{1/(2\alpha+1)},\qquad 2^{\ell_n}\le(n/\log n)^{1/(2\alpha+1)}.$$
Choose one cutoff sequence $L_n\in\{j_n,\ell_n\}$ for all $n\ge3$; set any finite $L_n$ for $n=1,2$, which does not change asymptotic claims.

For a finite wavelet series $T_n=\sum_{l\le L_n}\sum_{k\in K_l}\sigma_l\xi_{lk}\psi_{lk}$, define $c(T_n)=\log\int_0^1e^{T_n(x)}dx$ and the normalized log-density $f_n(x)=e^{T_n(x)-c(T_n)}$.

The **type-S1 family** takes IID coefficients $\xi_{lk}$ with a continuous density $\varphi_H$ for which $\log\varphi_H$ is Lipschitz, and uses $\sigma_l=2^{-l(\alpha+1/2)}$. Its source theorem assumes $\log f_0$ has coefficient Hölder regularity $\alpha>1$ and $f_0$ is bounded above and bounded away from zero.

The **type-S2 family** takes IID standard-normal coefficients and uses $\sigma_l=2^{-l(r+1/2)}$, where $0<r<\alpha-1/4$; its source theorem uses the same truth condition $\log f_0\in C^\alpha$, $\alpha>1$, and positive finite density bounds.

For the **type-H family**, partition $[0,1]$ into dyadic cells $I_{L_n,k}$ of length $2^{-L_n}$, draw $\omega=(\omega_k)_{k<2^{L_n}}\sim\operatorname{Dirichlet}(a_{0,L_n},\ldots,a_{2^{L_n}-1,L_n})$, and set $f_n=2^{L_n}\omega_k$ on cell $I_{L_n,k}$. The source assumptions are $c_1 2^{-L_na}\le a_{k,L_n}\le c_2$ for fixed positive $a,c_1,c_2$, and $f_0\in C^\alpha$ for $1/2<\alpha\le1$, together with the common positive finite density bounds above. The source's type-S/H multiscale BvM conclusion is not part of this definition; its required local proof is recorded in the batch handoff.

Here $C^\alpha_\psi$ denotes the coefficient class with norm $\|g\|_{C^\alpha_\psi}:=\sup_{l,k}2^{l(\alpha+1/2)}|\langle g,\psi_{lk}\rangle|$. For sufficiently regular standard wavelets this is the usual Hölder scale (with the usual Zygmund interpretation at integer smoothness).

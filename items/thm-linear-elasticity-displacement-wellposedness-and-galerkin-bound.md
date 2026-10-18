---
id: thm-linear-elasticity-displacement-wellposedness-and-galerkin-bound
kind: theorem
title: "Dirichlet elasticity energy bound and Galerkin estimate"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-linear-elasticity-displacement-formulation-and-data, lem-na-homogeneous-dirichlet-korn-identity, lem-na-homogeneous-dirichlet-poincare, lem-w-one-two-is-a-hilbert-space, def-wkp-zero-as-a-sobolev-closure, def-sobolev-space-wkp-and-its-norm, def-countable-choice, cor-cauchy-schwarz-inequality-for-l-two, thm-lax-milgram, thm-cea-quasi-optimality-for-conforming-galerkin-approximations]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Long Chen, Introduction to Linear Elasticity and Its Finite Element Approximation (complete 13-page notes)"
      url: "https://cpb-us-e2.wpmucdn.com/sites.uci.edu/dist/5/3624/files/2019/01/elasticity.pdf"
      locator: "§4.1, printed pp. 9–10: displacement weak form, Korn coercivity, and well-posedness; §5.1, printed p. 13: Lamé-parameter dependence."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications (complete 691-page text)"
      url: "https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf"
      locator: "Chapter 1, §1.3 and Chapter 8, §8.12.1, printed pp. 16–29 and 519–520: coercive Galerkin analysis and displacement formulation for nearly incompressible elasticity."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and the data of [[def-linear-elasticity-displacement-formulation-and-data]]. For every finite $\lambda\ge0$ there is a unique $u\in V$ such that $\mathcal E_\lambda(u,v)=f(v)$ for every $v\in V$. It satisfies
$$
\|u\|_V\le\mu_0^{-1}\|f\|_{V'},\qquad \sqrt{\mathcal E_\lambda(u,u)}\le\mu_0^{-1/2}\|f\|_{V'}.
$$
For every finite-dimensional conforming subspace $V_h\subset V$, the Galerkin solution $u_h$ is unique and
$$
\|u-u_h\|_V\le\frac{2\mu_1+d\lambda}{\mu_0}\inf_{v_h\in V_h}\|u-v_h\|_V.
$$

## Facts & Assumptions

**Given:** Countable Choice, $d\in\{2,3\}$, the model data, a finite $\lambda\ge0$, and $f\in V'$.

[A1] Countable Choice is used for Hilbert completeness and the continuous Lax–Milgram and Céa applications. ([[def-countable-choice]])

[F1] $V=H^1_0(D;\mathbb R^d)$ has the gradient norm, and the local homogeneous-Dirichlet Poincaré inequality makes that norm equivalent to the usual $H^1$ norm. ([[def-linear-elasticity-displacement-formulation-and-data]], [[lem-na-homogeneous-dirichlet-poincare]])

[F2] Under Countable Choice, $W^{1,2}(D)$ is Hilbert; $H^1_0(D)$ is its closed subspace defined as the $H^1$-closure of $C_c^\infty(D)$. ([[lem-w-one-two-is-a-hilbert-space]], [[def-wkp-zero-as-a-sobolev-closure]], [[def-sobolev-space-wkp-and-its-norm]])

[F3] For every $v\in V$, $2\|\varepsilon(v)\|_2^2=\|\nabla v\|_2^2+\|\operatorname{div}v\|_2^2$. ([[lem-na-homogeneous-dirichlet-korn-identity]])

[F4] Cauchy–Schwarz bounds the $L^2$ pairing and the induced integral bilinear forms. ([[cor-cauchy-schwarz-inequality-for-l-two]])

[F5] A bounded coercive real bilinear form on a Hilbert space has a unique variational solution. ([[thm-lax-milgram]])

[F6] For a bounded coercive conforming Galerkin problem, $\|u-u_h\|\le(M/\alpha)\inf_{v_h}\|u-v_h\|$. ([[thm-cea-quasi-optimality-for-conforming-galerkin-approximations]])

## Proof

1.1 Since $|\varepsilon(v)|_F\le|\nabla v|_F$ and $|\operatorname{div}v|\le\sqrt d|\nabla v|_F$, [F4] gives $|\mathcal E_\lambda(u,v)|\le(2\mu_1+d\lambda)\|u\|_V\|v\|_V$. The form is real, symmetric, and bounded. [given, F1, F4, algebra]

1.2 By [F3] and $\mu\ge\mu_0$, $\mathcal E_\lambda(v,v)\ge2\mu_0\|\varepsilon(v)\|_2^2\ge\mu_0\|v\|_V^2$; the volumetric term is nonnegative. [given, F3, algebra]

2.1 By [F1]–[F2], $V$ is complete in $\|\cdot\|_V$. Applying [F5] to the bounded functional $f$ and the form of steps 1.1–1.2 yields a unique $u\in V$. [A1, F1, F2, F5, step 1.1, step 1.2]

3.1 Testing with $v=u$ gives $\mathcal E_\lambda(u,u)=f(u)\le\|f\|_{V'}\|u\|_V$ and, by step 1.2, $\mu_0\|u\|_V^2\le\|f\|_{V'}\|u\|_V$. If $u\ne0$, divide by $\mu_0\|u\|_V$; if $u=0$, the claimed bound is immediate. Substitution into the energy identity gives the second estimate. [given, step 1.2, step 2.1, algebra]

4.1 The form bounds in step 1.1 and the coercivity constant $\mu_0$ in step 1.2 satisfy the hypotheses of [F6] on every finite-dimensional conforming $V_h$. Thus its Galerkin solution is unique and the stated $M/\alpha$ estimate is exactly $M=2\mu_1+d\lambda$, $\alpha=\mu_0$. [A1, F1, F2, F6, step 1.1, step 1.2] ∎
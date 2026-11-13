---
id: def-se-compact-remainder
kind: definition
domain: mathematics
title: Regularized lower-order observation remainder
status: draft
deps:
  - def-se-control-cutoffs
  - def-se-dirichlet-scale
  - prop-se-scale-flow
  - lem-se-spectral-cutoff-duality
  - lem-se-positive-spectral-scale-contract
  - def-se-foundation-time-function-spaces
  - math:def-axiom-of-choice
dependency_roles:
  def-se-control-cutoffs: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  prop-se-scale-flow: mathematical-premise
  lem-se-spectral-cutoff-duality: mathematical-premise
  lem-se-positive-spectral-scale-contract: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
formulation_deps:
  - def-se-control-cutoffs
  - def-se-dirichlet-scale
  - prop-se-scale-flow
  - lem-se-spectral-cutoff-duality
  - def-se-foundation-time-function-spaces
  - math:def-axiom-of-choice
argument_deps:
  - def-se-control-cutoffs
  - def-se-dirichlet-scale
  - prop-se-scale-flow
  - lem-se-spectral-cutoff-duality
  - lem-se-positive-spectral-scale-contract
  - def-se-foundation-time-function-spaces
  - math:def-axiom-of-choice
dependency_level: 8
---

## Definition

Assume the Axiom of Choice. Let $\Omega$ be the smooth exterior domain, $H_D^s(\Omega)$ its Dirichlet spectral scale, $R=(I-\Delta_D)^{-1}$, $W(t)=e^{it\Delta_D}$, and $\psi$ the real smooth compactly supported cutoff specified in [[def-se-control-cutoffs]]. Let $T>0$ and $\mathcal I=[-2,2)$.

For $\sigma\in\mathcal I$, set $k(\sigma)=0$ if $\sigma\ge0$ and $k(\sigma)=1$ if $\sigma<0$, and put $\tau=\sigma+2k(\sigma)$. Set $\rho(\sigma)=\sigma+1$ when $-1<\sigma<0$, and $\rho(\sigma)=0$ otherwise. For $v_0\in H_D^\sigma(\Omega)$, write $v(t)=W(t)v_0$ and define the lower-order observation remainder

$$Q_\sigma(v_0)=\int_0^T\|\psi R^{k(\sigma)}v(t)\|_{H_D^{\rho(\sigma)}(\Omega)}^2\,dt.$$

Here $R^0$ is the identity and $R^1=R$. The multiplication by $\psi$ is the bounded spectral-scale multiplier supplied by [[lem-se-spectral-cutoff-duality]]. The integral is with respect to Lebesgue time measure. In particular, outside $(-1,0)$ the spatial norm in the integrand is the $L^2(\Omega)$ norm.

## Definition references

[[def-se-control-cutoffs]]

[[def-se-dirichlet-scale]]

[[prop-se-scale-flow]]

[[lem-se-spectral-cutoff-duality]]

[[lem-se-positive-spectral-scale-contract]]

[[def-se-foundation-time-function-spaces]]

[[math:def-axiom-of-choice]]

## Justification

The domain and cutoff are fixed by [[def-se-control-cutoffs]], and the operator and scale notation by [[def-se-dirichlet-scale]]. The Axiom of Choice is retained as an assumption of the scale and flow suppliers [[math:def-axiom-of-choice]]. The interval and piecewise formulas determine unique values of $k$, $\tau$ and $\rho$. Directly from the cases, $\tau\in[0,2)$ and $0\le\rho\le\tau$; if $-1<\sigma<0$, then $\rho=\tau-1\in(0,1)$.

By [[prop-se-scale-flow]], $R^{k(\sigma)}v(t)=W(t)R^{k(\sigma)}v_0$, $R^{k(\sigma)}v_0\in H_D^\tau(\Omega)$, and $\|R^{k(\sigma)}v_0\|_{H_D^\tau}=\|v_0\|_{H_D^\sigma}$. The same supplier makes $t\mapsto R^{k(\sigma)}v(t)$ continuous in $H_D^\tau$. The scale embeddings from [[lem-se-positive-spectral-scale-contract]] give a continuous inclusion $H_D^\tau\hookrightarrow H_D^\rho$ because $\rho\le\tau$. The smooth compactly supported $\psi$ has bounded derivatives through order two, so [[lem-se-spectral-cutoff-duality]] makes multiplication by $\psi$ bounded on $H_D^\rho$.

Consequently the integrand is a continuous nonnegative scalar function on $[0,T]$, and its Lebesgue integral is finite and independent of representatives; the time and norm conventions are those of [[def-se-foundation-time-function-spaces]]. More explicitly, for a constant depending on the fixed scale level and cutoff, $0\le Q_\sigma(v_0)\le T C_\psi^2\|v_0\|_{H_D^\sigma}^2$. At $\rho=0$, [[def-se-dirichlet-scale]] identifies $H_D^0$ with $L^2$. This definition alone does not assert compactness of the resulting quadratic quantity.

## Source notes

The article supplies the indices and the notation (3.7) on PDF page 8. Its citation is attribution; the well-definedness argument uses the independent suppliers stated above.

---
id: lem-se-3-3
kind: lemma
domain: mathematics
title: "Lemma 3.3: observability modulo a compact remainder"
status: published
proof_strategy: direct
deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-control-cutoffs
  - def-se-dirichlet-scale
  - def-se-foundation-time-function-spaces
  - def-se-compact-remainder
  - prop-se-scale-flow
  - prop-se-cutoff-multipliers
  - lem-se-positive-spectral-scale-contract
  - prop-se-local-lower-order
  - prop-se-integer-commutator
  - prop-se-fractional-interpolation
  - math:def-axiom-of-choice
dependency_roles:
  def-se-geometry: mathematical-premise
  def-se-nontrapping: mathematical-premise
  def-se-control-cutoffs: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  def-se-compact-remainder: mathematical-premise
  prop-se-scale-flow: mathematical-premise
  prop-se-cutoff-multipliers: mathematical-premise
  lem-se-positive-spectral-scale-contract: mathematical-premise
  prop-se-local-lower-order: mathematical-premise
  prop-se-integer-commutator: mathematical-premise
  prop-se-fractional-interpolation: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
dependency_level: 10
---

## Statement

Assume the Axiom of Choice and (H): $n\ge2$, $\Theta\subset\mathbb R^n$ is nonempty and compact with smooth boundary, its exterior $\Omega=\mathbb R^n\setminus\Theta$ is connected, and $\Theta$ is non-trapping, meaning that every admissible generalized reflected ray, including glancing behavior, leaves each compact set in finite forward time. Let $H_D^s(\Omega)$ be the Dirichlet spectral scale, $W(t)=e^{it\Delta_D}$ its unitary evolution, and $\varphi,\psi$ the cutoffs of [[def-se-control-cutoffs]].

For every $T>0$ and $\sigma\in[-2,2)$ there is $C>0$ such that, for every $v_0\in H_D^\sigma(\Omega)$,
$$\|v_0\|_{H_D^\sigma}^2\le C\left(\int_0^T\|\varphi W(t)v_0\|_{H_D^\sigma}^2\,dt+Q_\sigma(v_0)\right).$$
Here $Q_\sigma$ is the lower-order observation remainder of [[def-se-compact-remainder]]: with $R=(I-\Delta_D)^{-1}$, $k=0$ for $\sigma\ge0$ and $k=1$ for $\sigma<0$, and $\rho=\sigma+1$ for $-1<\sigma<0$ and $\rho=0$ otherwise, it is $Q_\sigma(v_0)=\int_0^T\|\psi R^k W(t)v_0\|_{H_D^\rho}^2\,dt$.

## Facts & Assumptions

[F1] The cutoffs satisfy $\chi=1-\varphi$ and $0\le\chi\le\psi$; multiplication by $\varphi,\chi,\psi$ is bounded on the scale levels used below. [[def-se-control-cutoffs]] [[prop-se-cutoff-multipliers]]

[F2] The flow is unitary on each spectral scale level, commutes with $R$, and $R:H_D^s\to H_D^{s+2}$ is an onto isometry. Higher scale levels embed contractively into lower ones. [[prop-se-scale-flow]] [[lem-se-positive-spectral-scale-contract]] [[math:def-axiom-of-choice]]

[F3] For $0<\tau<2$, the local lower-order estimate gives $\int_0^T\|\chi W(t)u\|_{H_D^\tau}^2dt\le C_1\|u\|_{H_D^\theta}^2$ for some $0\le\theta<\tau$, with the explicit piecewise $\theta$ in [[prop-se-local-lower-order]]. Its hypotheses are (H), Choice, and the stated cutoff and flow conventions. [[prop-se-local-lower-order]]

[F4] For $0\le\theta<\tau$ and every $\varepsilon>0$, spectral absorption gives $\|u\|_{H_D^\theta}^2\le\varepsilon\|u\|_{H_D^\tau}^2+C_\varepsilon\|u\|_2^2$. [[prop-se-fractional-interpolation]]

[F5] For $-2\le\sigma<0$, put $\tau=\sigma+2$ and $y=Rv$. The commutator estimate is $\|\varphi y\|_{H_D^\tau}\le\|\varphi v\|_{H_D^\sigma}+C_\varphi\|\psi y\|_{H_D^\rho}$, with $\rho$ as in the Statement. [[prop-se-integer-commutator]]

## Proof

[F1] The cutoffs satisfy $\chi=1-\varphi$ and $0\le\chi\le\psi$; multiplication by $\varphi,\chi,\psi$ is bounded on the scale levels used below. [[def-se-control-cutoffs]] [[prop-se-cutoff-multipliers]]

[F2] The flow is unitary on each spectral scale level, commutes with $R$, and $R:H_D^s\to H_D^{s+2}$ is an onto isometry. Higher scale levels embed contractively into lower ones. [[prop-se-scale-flow]] [[lem-se-positive-spectral-scale-contract]] [[math:def-axiom-of-choice]]

[F3] For $0<\tau<2$, the local lower-order estimate gives $\int_0^T\|\chi W(t)u\|_{H_D^\tau}^2dt\le C_1\|u\|_{H_D^\theta}^2$ for some $0\le\theta<\tau$, with the explicit piecewise $\theta$ in [[prop-se-local-lower-order]]. Its hypotheses are (H), Choice, and the stated cutoff and flow conventions. [[prop-se-local-lower-order]]

[F4] For $0\le\theta<\tau$ and every $\varepsilon>0$, spectral absorption gives $\|u\|_{H_D^\theta}^2\le\varepsilon\|u\|_{H_D^\tau}^2+C_\varepsilon\|u\|_2^2$. [[prop-se-fractional-interpolation]]

[F5] For $-2\le\sigma<0$, put $\tau=\sigma+2$ and $y=Rv$. The commutator estimate is $\|\varphi y\|_{H_D^\tau}\le\|\varphi v\|_{H_D^\sigma}+C_\varphi\|\psi y\|_{H_D^\rho}$, with $\rho$ as in the Statement. [[prop-se-integer-commutator]]



**Given:** The hypotheses, $T>0$, $\sigma\in[-2,2)$, and $v_0\in H_D^\sigma$ in the Statement.

**Goal:** Establish the displayed estimate with a constant independent of $v_0$.

1.1 First let $0\le\tau<2$, $u\in H_D^\tau$, and $z(t)=W(t)u$. Unitarity, $z=\varphi z+\chi z$, and the squared triangle inequality give $T\|u\|_{H_D^\tau}^2\le2\int_0^T\|\varphi z\|_{H_D^\tau}^2dt+2\int_0^T\|\chi z\|_{H_D^\tau}^2dt$. If $\tau=0$, $0\le\chi\le\psi$ bounds the second integral by $\int_0^T\|\psi z\|_2^2dt$, proving the desired positive-index estimate at zero. [F1, F2, given]

2.1 Suppose $0<\tau<2$. Apply the local lower-order estimate and then absorption, choosing $\varepsilon$ so that $2C_1\varepsilon\le T/2$. It follows that $\|u\|_{H_D^\tau}^2\le C\left(\int_0^T\|\varphi z\|_{H_D^\tau}^2dt+\|u\|_2^2\right)$. By $L^2$ unitarity, $z=\varphi z+\chi z$, $\chi\le\psi$, and the scale embedding into $L^2$, we also have $\|u\|_2^2\le (2/T)\int_0^T(\|\varphi z\|_{H_D^\tau}^2+\|\psi z\|_2^2)dt$. Thus, for every $0\le\tau<2$, $\|u\|_{H_D^\tau}^2\le C\int_0^T(\|\varphi W(t)u\|_{H_D^\tau}^2+\|\psi W(t)u\|_2^2)dt$. [F1, F2, F3, F4, step 1.1, given]

3.1 Now let $-2\le\sigma<0$ and put $\tau=\sigma+2\in[0,2)$, $y_0=Rv_0$, $v(t)=W(t)v_0$, and $y(t)=W(t)y_0=Rv(t)$. The resolvent isometry gives $\|y_0\|_{H_D^\tau}=\|v_0\|_{H_D^\sigma}$. Applying step 2.1 to $y_0$ and the commutator estimate pointwise gives $\|v_0\|_{H_D^\sigma}^2\le C\int_0^T(\|\varphi v(t)\|_{H_D^\sigma}^2+\|\psi y(t)\|_{H_D^\rho}^2+\|\psi y(t)\|_2^2)dt$. [F2, F5, step 2.1, given]

4.1 Here $\rho\ge0$, so the scale embedding bounds the last integrand by $\|\psi y(t)\|_{H_D^\rho}^2$. By the definition of $Q_\sigma$ this is precisely the required estimate for negative $\sigma$. For nonnegative $\sigma$, step 2.1 is the required estimate because $k=0$ and $\rho=0$. The flow continuity and bounded cutoff actions make the displayed time integrals well-defined. [F1, F2, step 2.1, step 3.1, given] ∎

## Source notes

The article is cited for attribution of Lemma 3.3 and its proof structure on PDF pages 9–11. The deduction above uses the stated suppliers, not the article's assertion as a premise.

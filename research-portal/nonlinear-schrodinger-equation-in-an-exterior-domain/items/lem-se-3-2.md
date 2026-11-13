---
id: lem-se-3-2
kind: lemma
domain: mathematics
title: "Lemma 3.2: compactness of the remainder"
status: draft
proof_strategy: direct
deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-compact-remainder
  - def-se-foundation-weak-compactness-language
  - prop-se-scale-flow
  - prop-se-local-compactness-bounds
  - lem-se-spectral-cutoff-duality
  - prop-se-fractional-interpolation
  - math:thm-weakly-convergent-sequences-are-norm-bounded
  - math:def-axiom-of-choice
  - math:thm-hahn-banach-dominated-extension
  - def-se-foundation-time-function-spaces
dependency_roles:
  def-se-geometry: mathematical-premise
  def-se-nontrapping: mathematical-premise
  def-se-compact-remainder: mathematical-premise
  def-se-foundation-weak-compactness-language: mathematical-premise
  prop-se-scale-flow: mathematical-premise
  prop-se-local-compactness-bounds: mathematical-premise
  lem-se-spectral-cutoff-duality: mathematical-premise
  prop-se-fractional-interpolation: mathematical-premise
  math:thm-weakly-convergent-sequences-are-norm-bounded: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:thm-hahn-banach-dominated-extension: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
formulation_deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-compact-remainder
  - def-se-foundation-weak-compactness-language
  - math:def-axiom-of-choice
argument_deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-compact-remainder
  - def-se-foundation-weak-compactness-language
  - prop-se-scale-flow
  - prop-se-local-compactness-bounds
  - lem-se-spectral-cutoff-duality
  - prop-se-fractional-interpolation
  - math:thm-weakly-convergent-sequences-are-norm-bounded
  - math:def-axiom-of-choice
  - math:thm-hahn-banach-dominated-extension
  - def-se-foundation-time-function-spaces
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
dependency_level: 12
---

## Statement

Assume the Axiom of Choice and hypothesis (H): $n\ge2$, the nonempty compact obstacle $\Theta\subset\mathbb R^n$ has smooth boundary, its exterior $\Omega=\mathbb R^n\setminus\Theta$ is connected, and it is non-trapping, as specified in [[def-se-geometry]] and [[def-se-nontrapping]]. Let $T>0$ and $\sigma\in[-2,2)$. If $v_{j,0}\rightharpoonup v_0$ weakly in the Dirichlet spectral space $H_D^\sigma(\Omega)$, then $Q_\sigma(v_{j,0}-v_0)\to0$, where the scale, weak convergence and remainder are as in [[def-se-compact-remainder]] and [[def-se-foundation-weak-compactness-language]].

In the exceptional range $-1<\sigma<0$, the indices in the remainder are $\tau=\sigma+2\in(1,2)$ and $\rho=\tau-1\in(0,1)$.

## Facts & Assumptions

[F1] For $k=0$ when $\sigma\ge0$ and $k=1$ when $\sigma<0$, put $\tau=\sigma+2k$. The remainder is $Q_\sigma(w)=\int_0^T\|\psi R^kW(t)w\|_{H_D^\rho}^2\,dt$, with $\rho=\sigma+1$ for $-1<\sigma<0$ and $\rho=0$ otherwise. Here $R=(I-\Delta_D)^{-1}$, $W(t)=e^{it\Delta_D}$, and $\psi$ is the specified smooth compactly supported cutoff [[def-se-compact-remainder]].

[F2] The map $R^k:H_D^\sigma\to H_D^\tau$ is an isometry, commutes with $W(t)$, and $W(t)$ is strongly continuous and unitary on $H_D^\tau$ [[prop-se-scale-flow]]. Weak convergence means convergence under every bounded scalar-linear functional [[def-se-foundation-weak-compactness-language]].

[F3] Under the stated geometry and Choice, a bounded weakly null sequence in $H_D^\tau$, $0\le\tau<2$, has localized free evolutions converging strongly to zero in $L^2(0,T;L^2(\Omega))$ [[prop-se-local-compactness-bounds]]. This conclusion uses compactness on a bounded localization, not a global compact Sobolev embedding on $\Omega$.

[F4] Multiplication by $\psi$ is bounded on $H_D^\tau$ for $0\le\tau<2$ [[lem-se-spectral-cutoff-duality]]. If $0<\rho<\tau$, a sequence uniformly bounded in $L^2(0,T;H_D^\tau)$ and converging to zero in $L^2(0,T;L^2)$ also converges to zero in $L^2(0,T;H_D^\rho)$ [[prop-se-fractional-interpolation]].

[F5] A weakly convergent sequence in a real or complex normed space is norm bounded under the real dominated-extension principle HB and Countable Choice [[math:thm-weakly-convergent-sequences-are-norm-bounded]]. Under the assumed Axiom of Choice, the real Hahn–Banach dominated-extension theorem supplies precisely this HB premise [[math:thm-hahn-banach-dominated-extension]]. Countable Choice follows by applying Choice to countable families of nonempty sets [[math:def-axiom-of-choice]].

[F6] The spaces $L^2(0,T;X)$ use strongly measurable Banach-valued maps modulo equality almost everywhere, with norm $(\int_0^T\|f(t)\|_X^2\,dt)^{1/2}$ and Lebesgue time measure [[def-se-foundation-time-function-spaces]].

## Proof

[F1] For $k=0$ when $\sigma\ge0$ and $k=1$ when $\sigma<0$, put $\tau=\sigma+2k$. The remainder is $Q_\sigma(w)=\int_0^T\|\psi R^kW(t)w\|_{H_D^\rho}^2\,dt$, with $\rho=\sigma+1$ for $-1<\sigma<0$ and $\rho=0$ otherwise. Here $R=(I-\Delta_D)^{-1}$, $W(t)=e^{it\Delta_D}$, and $\psi$ is the specified smooth compactly supported cutoff [[def-se-compact-remainder]].

[F2] The map $R^k:H_D^\sigma\to H_D^\tau$ is an isometry, commutes with $W(t)$, and $W(t)$ is strongly continuous and unitary on $H_D^\tau$ [[prop-se-scale-flow]]. Weak convergence means convergence under every bounded scalar-linear functional [[def-se-foundation-weak-compactness-language]].

[F3] Under the stated geometry and Choice, a bounded weakly null sequence in $H_D^\tau$, $0\le\tau<2$, has localized free evolutions converging strongly to zero in $L^2(0,T;L^2(\Omega))$ [[prop-se-local-compactness-bounds]]. This conclusion uses compactness on a bounded localization, not a global compact Sobolev embedding on $\Omega$.

[F4] Multiplication by $\psi$ is bounded on $H_D^\tau$ for $0\le\tau<2$ [[lem-se-spectral-cutoff-duality]]. If $0<\rho<\tau$, a sequence uniformly bounded in $L^2(0,T;H_D^\tau)$ and converging to zero in $L^2(0,T;L^2)$ also converges to zero in $L^2(0,T;H_D^\rho)$ [[prop-se-fractional-interpolation]].

[F5] A weakly convergent sequence in a real or complex normed space is norm bounded under the real dominated-extension principle HB and Countable Choice [[math:thm-weakly-convergent-sequences-are-norm-bounded]]. Under the assumed Axiom of Choice, the real Hahn–Banach dominated-extension theorem supplies precisely this HB premise [[math:thm-hahn-banach-dominated-extension]]. Countable Choice follows by applying Choice to countable families of nonempty sets [[math:def-axiom-of-choice]].

[F6] The spaces $L^2(0,T;X)$ use strongly measurable Banach-valued maps modulo equality almost everywhere, with norm $(\int_0^T\|f(t)\|_X^2\,dt)^{1/2}$ and Lebesgue time measure [[def-se-foundation-time-function-spaces]].



**Given:** The geometry, Choice, $T$, $\sigma$ and weakly convergent initial data in the Statement.

**Goal:** Prove $Q_\sigma(v_{j,0}-v_0)\to0$.

1.1 Set $w_j=v_{j,0}-v_0$ and $y_{j,0}=R^k w_j$. The sequence $w_j$ is weakly null. For every bounded scalar-linear functional $\ell$ on $H_D^\tau$, the composition $\ell R^k$ is bounded on $H_D^\sigma$; hence $y_{j,0}\rightharpoonup0$ in $H_D^\tau$. By weak boundedness and the isometry, there is $M<\infty$ such that $\|y_{j,0}\|_{H_D^\tau}\le M$ for all $j$. The case definitions give $0\le\tau<2$. [given, F1, F2, F5]

2.1 Put $y_j(t)=W(t)y_{j,0}$. The localized compactness result applies to this bounded weakly null sequence and yields $\psi y_j\to0$ in $L^2(0,T;L^2(\Omega))$. By commutation, $\psi y_j(t)=\psi R^kW(t)w_j$. [F2, F3, F6, step 1.1]

3.1 If $\rho=0$, the definition of $Q_\sigma$ identifies it with $\|\psi y_j\|_{L^2(0,T;L^2)}^2$, which tends to zero. This includes $\sigma=-2$, $\sigma=-1$, and all $0\le\sigma<2$. [F1, F6, step 2.1]

4.1 Otherwise $-1<\sigma<0$, so $\tau=\sigma+2\in(1,2)$ and $\rho=\tau-1\in(0,\tau)$. Unitarity and the multiplier bound give $\sup_{j,t}\|\psi y_j(t)\|_{H_D^\tau}\le CM$. Strong continuity and bounded multiplication give strong measurability, and the finite time interval gives a uniform $L^2(0,T;H_D^\tau)$ bound. Applying the interpolation convergence statement to step 2.1 gives $\psi y_j\to0$ in $L^2(0,T;H_D^\rho)$. Its squared norm is $Q_\sigma(w_j)$, so the desired limit holds in this case as well. [F1, F2, F4, F6, step 1.1, step 2.1] ∎

## Source notes

The article is cited for the statement and attribution to Lemma 3.2, PDF pages 8–9. The deduction above uses the stated suppliers rather than the article's lemma as a premise.

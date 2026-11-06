---
id: def-gts-intrinsic-mirror-algebra-and-classical-period
kind: definition
title: Intrinsic mirror algebra data and classical period
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: mathematics
library: physics
category: string-theory
deps:
  - def-gts-universal-novikov-completion
  - lem-gts-novikov-completion-is-filtered-ring
dependency_roles:
  def-gts-universal-novikov-completion: mathematical-premise
  lem-gts-novikov-completion-is-filtered-ring: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Sam Johnston, Quantum periods, toric degenerations and intrinsic mirror symmetry
      url: https://arxiv.org/pdf/2501.01408v3
      locator: §1 and §4, the intrinsic mirror algebra, theta basis and period coefficient conventions
    - title: Per Berglund, Tim Gräfnitz, and Michael Lathwood, Gromov-Witten Invariants and Mirror Symmetry for Non-Fano Varieties via Tropical Disks
      url: https://arxiv.org/pdf/2404.16782v3
      locator: §§4.2 and 9, classical periods and the primitive theta potential
---

## Definition

Let $k$ be a field, let $(\Gamma,\nu)$ be an additive abelian group with a homomorphism $\nu:\Gamma\to\mathbb R$, and let $\Lambda_{\nu,k}$ be the universal Novikov completion with its convolution multiplication as defined by the earlier completion and filtered-ring items. Write $v$ for its Novikov valuation and $F^c\Lambda_{\nu,k}=\{a:v(a)\ge c\}$. For a set $P$, define the completed free module
$$R=\widehat{\bigoplus}_{p\in P}\Lambda_{\nu,k}\vartheta_p:=\left\{(a_p)_{p\in P}:a_p\in\Lambda_{\nu,k},\ \#\{p:v(a_p)<C\}<\infty\text{ for every }C\in\mathbb R\right\},$$
with filtration $F^cR=\{(a_p):a_p\in F^c\Lambda_{\nu,k}\text{ for every }p\}$. Thus every $r\in R$ has a unique coefficient expansion $r=\sum_{p\in P}a_p\vartheta_p$, and each coefficient map $r\mapsto a_p$ is continuous. This separated module is complete: a Cauchy sequence has a limit in each coefficient because $\Lambda_{\nu,k}$ is complete, and for any cutoff $C$ its limit has only finitely many coefficients of valuation below $C$, by applying the Cauchy condition at a larger cutoff. Assume that $R$ is equipped with a continuous associative $\Lambda_{\nu,k}$-bilinear multiplication and a specified unit $\vartheta_0$ for a chosen index $0\in P$. These algebra and multiplication data are inputs; this definition does not construct them.

For $r=\sum_{p\in P}a_p\vartheta_p$ with $a_p\in\Lambda_{\nu,k}$, define its trace coefficient by $\operatorname{tr}_R(r)=a_0$. For $W\in R$, the classical formal period is
$$\pi_W(s)=\sum_{m\ge0}\operatorname{tr}_R(W^m)s^m\in\Lambda_{\nu,k}\llbracket s\rrbracket,$$
where $s$ is a formal period variable distinct from the curve-class monomials in $\Lambda_{\nu,k}$. For the Laurent algebra $R=k[x_1^{\pm1},\ldots,x_n^{\pm1}]$ with basis $x^m$, unit $1=x^0$, and coefficient ring $k$, this trace is the Laurent constant-term operator $\operatorname{CT}_x$ and $\pi_W(s)=\sum_{m\ge0}\operatorname{CT}_x(W^m)s^m$.

The unmarked specialization $\pi_W(1):=\sum_{m\ge0}\operatorname{tr}_R(W^m)$ is defined only when this sum converges coefficientwise in the declared completion; a sufficient condition is that the multiplication satisfies $F^aR\cdot F^bR\subseteq F^{a+b}R$ for all $a,b\in\mathbb R$ and that $W\in F^\epsilon R$ for some $\epsilon>0$. Indeed $W^m\in F^{m\epsilon}R$, so each fixed filtration quotient receives contributions from only finitely many powers. Continuity of multiplication alone does not imply this filtration estimate. Source period conventions that use curve monomials as coefficients require the same local-finiteness check after the stated base change. The $m=0$ term is the trace of the unit and equals $1$.

An oscillatory period requires a smooth complex $n$-fold $Z$, a holomorphic function $W:Z\to\mathbb C$, a holomorphic $n$-form $\Omega$, a nonzero parameter $z\in\mathbb C^*$, and a specified locally finite integral chain $\Gamma=\sum_\alpha n_\alpha\sigma_\alpha$ of oriented piecewise-$C^1$ singular $n$-simplices in the underlying real manifold of $Z$. If $\Gamma$ is noncompact, choose a compact exhaustion $(K_j)_{j\ge1}$ of $Z$ and require that for every $R>0$ there is $j_R$ such that $\operatorname{supp}(\Gamma)\setminus K_{j_R}\subseteq\{p\in Z:\operatorname{Re}(W(p)/z)>R\}$; the boundary is required to lie in the same rapid-decay end region. Define the integral by summing over the simplices and require absolute convergence, namely $\sum_\alpha |n_\alpha|\int_{\sigma_\alpha}|e^{-W/z}\Omega|<\infty$. When the integral converges absolutely, its normalization here is
$$\Pi_{W,\Gamma}(z)=(2\pi i)^{-n}\int_\Gamma e^{-W/z}\Omega.$$
If analytic convergence is not established, this notation is used only after a formal completion and coefficient extraction have been specified. No cycle, convergence assertion, or identity with a quantum period is implicit in the data.

## Definition references

[[def-gts-universal-novikov-completion]]

[[lem-gts-novikov-completion-is-filtered-ring]]

## Remarks

The definition records the algebraic input needed to discuss theta-function periods. It does not assert that a log Calabi–Yau pair admits such an algebra, that a theta potential exists, or that a classical or oscillatory period equals a Gromov–Witten series. In particular, the unmarked specialization cannot be inferred merely by setting the formal variable $s$ to $1$; its coefficientwise convergence must be checked for the chosen potential and completion.

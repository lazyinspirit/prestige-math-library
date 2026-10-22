---
id: thm-qftx-heavy-derivative-bound
kind: theorem
domain: mathematics
library: mathematics
title: Low-momentum matching has a controlled remainder
status: draft
origin: pipeline
dependency_level: 2
deps:
  - def-axiom-of-choice
  - lem-ac-supplies-sequential-choices-for-probability-constructions
  - lem-unbounded-adjoint-is-well-defined-and-closed
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-qftx-positive-unbounded-spectral-calculus
  - def-qftx-heavy-gaussian-data
justified_by: []
forward_refs: []
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  lem-ac-supplies-sequential-choices-for-probability-constructions: mathematical-premise
  lem-unbounded-adjoint-is-well-defined-and-closed: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  thm-qftx-positive-unbounded-spectral-calculus: mathematical-premise
  def-qftx-heavy-gaussian-data: mathematical-premise
physical_scope: Pure mathematics; no physical premises or physical claim.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Matthias Neubert, Effective Field Theory and Heavy Quark Physics"
      url: "https://arxiv.org/pdf/hep-ph/0512222"
      locator: "§2, printed pp.3–5, equations (2)–(10): the local Wilsonian expansion is useful when the retained energy is much smaller than the heavy scale."
    - title: "C. P. Burgess, Introduction to Effective Field Theory"
      url: "https://arxiv.org/pdf/hep-th/0701053"
      locator: "§§2.2.1 and 2.2.4, printed pp.20–24: inverse-mass expansion and truncation/power counting."
verification:
  precheck: pending
---

## Statement

Assume the hypotheses and notation of [[def-qftx-heavy-gaussian-data]]. Let $E\ge0$ be an energy and let $P_E:=E_A([0,E^2])$ be the spectral projection of $A$. For $J=P_EJ\in H$ and an integer $N\ge0$, define
$$S_NJ:=M^{-2}\sum_{r=0}^{N}(-A/M^2)^rJ,$$
which is well-defined since $J$ has bounded spectral support. Put $R_NJ:=K^{-1}J-S_NJ$. Then
$$\|R_NJ\|\le M^{-2}(E^2/M^2)^{N+1}\|J\|,$$
and
$$\left|\Delta S_{\mathrm{eff}}(J)+\tfrac12\langle J,S_NJ\rangle\right| =\tfrac12|\langle J,R_NJ\rangle| \le \frac{\|J\|^2}{2M^2}(E^2/M^2)^{N+1}.$$
Use natural units $\hbar=c=1$: $A$ has units of mass squared, $E,M$ have mass units, and $E^2/M^2$ is dimensionless. Under the source normalization of [[def-qftx-heavy-gaussian-data]], $\|J\|^2/M^2$ and the action remainder are dimensionless. These are exact conditional bounds for every $E\ge0$; the truncation is small/useful when $E<M$. No claim is made for unrestricted sources or arbitrary interacting matching.

## Facts & Assumptions

**Given:** AC, $H,A,M,K,E_A,K^{-1}$ as in [[def-qftx-heavy-gaussian-data]], $E\ge0$, and $J=P_EJ$.

[A1] [[def-axiom-of-choice]]: the spectral construction assumes AC.

[A2] [[lem-ac-supplies-sequential-choices-for-probability-constructions]]: AC supplies countable choice required in the actual proof of the spectral supplier.

[F1] [[thm-qftx-positive-unbounded-spectral-calculus]]: bounded Borel functions of $A$ have norm at most their supremum and $A$ has its spectral PVM on $[0,\infty)$.

[F2] [[def-qftx-heavy-gaussian-data]]: $K^{-1}=f_M(A)$ for $f_M(a)=(M^2+a)^{-1}$, and $\Delta S_{\mathrm{eff}}(J)=-\tfrac12\langle J,K^{-1}J\rangle$.

[F3] [[thm-cauchy-schwarz-in-an-inner-product-space]]: $|\langle x,y\rangle|\le\|x\|\|y\|$.

## Proof

**Proof technique:** direct scalar remainder and the spectral functional calculus.

**Given:** The hypotheses and notation in the Statement.

1.1 For every $a\ge0$, putting $x=a/M^2$ and multiplying by $1+x$ gives
$$\frac1{M^2+a}=M^{-2}\sum_{r=0}^{N}(-a/M^2)^r+ M^{-2}\frac{(-a/M^2)^{N+1}}{1+a/M^2}.$$
This finite geometric identity also holds at $a=0$ and for $N=0$. [given, algebra]

2.1 On $J=P_EJ$, the spectral variable satisfies $0\le a\le E^2$. Therefore every polynomial term $A^rJ$ is defined, and the remainder multiplier satisfies
$$\left|M^{-2}\frac{(-a/M^2)^{N+1}}{1+a/M^2}\right| \le M^{-2}(E^2/M^2)^{N+1},$$
because $1+a/M^2\ge1$. Extend this bounded multiplier by zero outside $[0,E^2]$ and apply [F1]. With [F2] this identifies the inverse kernel and proves the vector identity defining $R_NJ$ and its norm bound. [A1, A2, F1, F2, step 1.1, algebra]

3.1 By [F2], the action remainder equals $\tfrac12|\langle J,R_NJ\rangle|$. Cauchy–Schwarz [F3] and step 2.1 give the claimed bound. The factor $(E^2/M^2)^{N+1}$ decreases to zero only when $E<M$; for $E\ge M$ the same finite-order bound remains true but need not be small. [F2, F3, step 2.1, algebra] ∎

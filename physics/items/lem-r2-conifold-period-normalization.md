---
id: lem-r2-conifold-period-normalization
kind: lemma
title: "Holomorphic normalization by the vanishing period"
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-r2-ordinary-double-point-smoothing-model
  - lem-r2-standard-conifold-residue-periods
dependency_roles:
  def-r2-ordinary-double-point-smoothing-model: mathematical-premise
  lem-r2-standard-conifold-residue-periods: mathematical-premise
physical_scope: null
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Cynk and D. van Straten, Calabi–Yau Conifold Expansions, §4, Proposition 2"
      url: "https://download.uni-mainz.de/mathematik/Algebraische%20Geometrie/DvS-Publikationen/Calabi-Yau%20Conifold%20Expansions.pdf"
---

## Statement

Let $h(w,t)$ be holomorphic near $(0,0)\in\mathbb C^4\times\mathbb C$, with $h(0,0)\ne0$, and on $Q_t$ put $\Omega_t^0:=h(w,t)\omega_t$, where $\omega_t$ is from [[def-r2-ordinary-double-point-smoothing-model]]. Then the vanishing period $\Pi_A^0(t):=\int_{A_t}\Omega_t^0$ extends holomorphically to $t=0$ and
$$\Pi_A^0(t)=-\pi^2h(0,0)t+O(t^2).$$
Consequently $u(t):=t/\Pi_A^0(t)$ extends holomorphically across $0$ with $u(0)\ne0$, and $\Omega_t:=u(t)\Omega_t^0$ has $\int_{A_t}\Omega_t=t$ while remaining a holomorphic nonvanishing relative three-form on the punctured local family. Thus the smoothing coordinate can simultaneously be the vanishing-period coordinate by rescaling the form by a holomorphic unit.

## Facts & Assumptions

**Given:** $h$ and the local model of [[def-r2-ordinary-double-point-smoothing-model]].

[F1] [[lem-r2-standard-conifold-residue-periods]]: $\int_{A_t}\omega_t=-\pi^2t$ for the oriented real vanishing sphere.

## Proof

**Given:** $h$ is holomorphic with $h(0,0)\ne0$.

1.1 Parametrize $A_t$ by $w=\sqrt t\,v$, $v\in S^3$, for positive $t$. The pullback of $\omega_t$ is $-(t/2)$ times the unit-sphere volume form by [F1]'s local residue calculation. Hence
$$\Pi_A^0(t)=-\frac t2\int_{S^3}h(\sqrt t\,v,t)\,d\operatorname{vol}_{S^3}(v).$$
[F1, given, algebra]

2.1 Expand $h(w,t)=\sum_{\alpha,m}c_{\alpha,m}w^\alpha t^m$ on a polydisc about $(0,0)$. For all sufficiently small $t$, this series converges uniformly and absolutely on $w=\sqrt t S^3$, so it may be integrated termwise. If any component of $\alpha$ is odd, the integral of $v^\alpha$ is zero by the reflection $v_j\mapsto-v_j$. Otherwise $|\alpha|$ is even and the factor $t^{|\alpha|/2+m}$ has a nonnegative integer exponent. The resulting integral is therefore a convergent power series in $t$; its constant term is $h(0,0)\operatorname{Area}(S^3)$. [step 1.1, given, algebra]

3.1 By the explicit area computation in [[lem-r2-standard-conifold-residue-periods]], $\operatorname{Area}(S^3)=2\pi^2$. Substitution in step 1.1 gives $\Pi_A^0(t)=-\pi^2h(0,0)t+O(t^2)$ with a holomorphic quotient $\Pi_A^0(t)/t$ whose value at zero is nonzero. [F1, step 2.1]

4.1 Write $\Pi_A^0(t)=t\,v(t)$ with $v$ holomorphic and $v(0)=-\pi^2h(0,0)\ne0$. Then $u(t)=1/v(t)$ is holomorphic and nonzero near $0$. Multiplication by $u(t)$ preserves holomorphicity and nonvanishing of the relative form, and $\int_{A_t}u(t)\Omega_t^0=u(t)\Pi_A^0(t)=t$. [step 3.1, algebra] ∎

## Remarks

The normalization is a choice of holomorphic form, not a change of the equation $q(w)=t$. Cynk–van Straten's conifold-period expansion in §4, Proposition 2, independently gives the linear vanishing order in this threefold case; the coefficient here follows from the fixed residue convention.


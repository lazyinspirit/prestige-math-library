---
id: pthm-tgr-static-constant-density-star
kind: physics-theorem
title: "Verified constant-density static star and vacuum exterior"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 8
deps:
  - post-tgr-incompressible-star-preparation
  - thm-tgr-constant-density-star-verified
  - def-tgr-spherical-static-state-domain
dependency_roles:
  post-tgr-incompressible-star-preparation: physical-assumption
  thm-tgr-constant-density-star-verified: mathematical-premise
  def-tgr-spherical-static-state-domain: mathematical-premise
justified_by: []
physical_scope: >-
  Exact constant-density family in the adopted static Lambda=0 model for
  0<u<8/9, including regular center and explicit C1 piecewise-C2 vacuum
  matching; the bound is family-specific, with no realistic causal EOS,
  general Buchdahl conclusion, empirical claim, or stability result.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "MIT 8.962, General Relativity, Spring 2020 Lecture Guide, Lecture 21, PDF pp. 8–10"
      url: "https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/743631236d2866f6ba129f06110d8b1a_MIT8_962S20_guide.pdf"
    - title: "P.-H. Chavanis, Statistical mechanics of self-gravitating systems in general relativity: I. The quantum Fermi gas, arXiv:1908.10806v1 (2019), Sec. III.A, Eqs. (99)–(110)"
      url: "https://arxiv.org/pdf/1908.10806"
verification:
  precheck: pass
---

## Statement

Assume the constant-density preparation [[post-tgr-incompressible-star-preparation]] and the exact $\mathrm{ZF}+\mathrm{AC}_\omega$ mathematical convention used by [[thm-tgr-constant-density-star-verified]]. Put $a=\sqrt{1-u}$ and $B(r)=\sqrt{1-ur^2/R^2}$. For $0\le r\le R$, the adopted model has the explicit profiles
$$M(r)=M_R(r/R)^3,\quad b(r)=B(r)^2,\quad P(r)=\varepsilon_0\frac{B(r)-a}{3a-B(r)},\quad e^{\phi(r)}=\frac{3a-B(r)}2.$$
For $r\ge R$, set $M(r)=M_R$, $b(r)=1-2GM_R/(c^2r)$, $P(r)=0$, $\varepsilon(r)=0$, and $e^{\phi(r)}=\sqrt{b(r)}$. Then the interior is a regular static Einstein-fluid solution through the center, the exterior is vacuum, and the join at $r=R$ is $C^1$ and piecewise $C^2$ with no delta-supported surface stress. The central pressure is finite and equals $P(0)=\varepsilon_0(1-a)/(3a-1)$. This conclusion is specific to the constant-density branch $0<u<8/9$.

## Facts & Assumptions

**Given:** The constant-density EOS, $\rho_0>0$, $R>0$, $u\in(0,8/9)$, the adopted static Einstein-fluid model, and the exact current mathematical supplier under $\mathrm{ZF}+\mathrm{AC}_\omega$.

[F1] [[post-tgr-incompressible-star-preparation]] supplies $\varepsilon_0=\rho_0c^2$, $M_R=4\pi\rho_0R^3/3$, $u=2GM_R/(c^2R)\in(0,8/9)$, and the constant EOS on $I_P=(0,\infty)$ together with its smooth extension $\widehat{\mathcal E}$ to an open interval containing zero, so the interior boundary value $P(R)=0$ is defined. It prescribes the vacuum exterior separately from the fluid EOS.

[F2] [[thm-tgr-constant-density-star-verified]]: under those parameters and the geometry of [[def-tgr-spherical-static-state-domain]], the displayed $M,b,P,e^\phi$ solve the interior Einstein/conservation equations, extend to a $C^2$ Cartesian center, and match to the exterior at $r=R$ as a $C^1$ piecewise-$C^2$ metric with no distributional surface stress; the bound is only for this family.

[A1] The Einstein equation and constant-density boundary preparation in [F1] are adopted physical premises, not observations.

## Proof

1.1 Since $u<8/9$, $a=\sqrt{1-u}>1/3$. For $0\le r\le R$, $a\le B(r)\le1$, so $b=B^2>0$ and $3a-B(r)\ge3a-1>0$. Thus the stated interior pressure and lapse are finite, $P(R)=0$, and $P(0)=\varepsilon_0(1-a)/(3a-1)$. [given, F1, algebra]

2.1 The inputs in [F1] meet the hypotheses of [F2] exactly. That mathematical result verifies the mass, lapse, pressure, and vacuum equations and the regular center and interface; therefore these fields solve the adopted physical model. The discontinuous density at the boundary is part of the stated piecewise model, and the verified $C^1$ matching supplies no delta-supported surface stress. [A1, F1, F2, step 1.1] ∎


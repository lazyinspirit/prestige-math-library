---
id: pthm-tgr-static-tov-local-branch
kind: physics-theorem
title: "Constructed regular-center local static TOV branch"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 7
deps:
  - post-tgr-static-spherical-fluid-preparation
  - lem-tgr-spherical-einstein-tov-reduction
  - thm-tgr-tov-regular-center-local-existence
dependency_roles:
  post-tgr-static-spherical-fluid-preparation: physical-assumption
  lem-tgr-spherical-einstein-tov-reduction: mathematical-premise
  thm-tgr-tov-regular-center-local-existence: mathematical-premise
justified_by: []
physical_scope: >-
  Local branch around a regular center for a supplied smooth positive EOS and
  compact central-pressure range in the adopted classical static isotropic
  Lambda=0 model; no global surface, global horizon avoidance, realistic EOS,
  empirical claim, or dynamical stability.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "P.-H. Chavanis, Statistical mechanics of self-gravitating systems in general relativity: I. The quantum Fermi gas, arXiv:1908.10806v1 (2019), Sec. III.A, Eqs. (97)–(106)"
      url: "https://arxiv.org/pdf/1908.10806"
    - title: "MIT 8.962, General Relativity, Spring 2020 Lecture Guide, Lectures 20–21, PDF pp. 7–9"
      url: "https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/743631236d2866f6ba129f06110d8b1a_MIT8_962S20_guide.pdf"
verification:
  precheck: pass
---

## Statement

Assume the adopted model [[post-tgr-static-spherical-fluid-preparation]] and its supplied $C^\infty$ positive EOS $\mathcal E:I_P\to(0,\infty)$ on an open pressure interval $I_P\subset(0,\infty)$. Let $P_c\subset I_P$ be a nonempty compact interval, let $\delta>0$ be such that its closed $\delta$-neighbourhood lies in $I_P$, and choose a central pressure $P_0\in P_c$ and a dimensionless central lapse $e^{\phi_c}>0$. Under the exact mathematical convention $\mathrm{ZF}+\mathrm{AC}_\omega$ of [[thm-tgr-tov-regular-center-local-existence]], put $K=4\pi G/c^4$. There is a common $R_0>0$ and, for each $P_0\in P_c$, smooth even profiles $P,v$ on $[-R_0,R_0]$ satisfying
$$v(r)=K\int_0^1s^2\mathcal E(P(rs))\,ds,\qquad P(r)=P_0-\int_0^r t\frac{(\mathcal E(P(t))+P(t))(v(t)+KP(t))}{1-2t^2v(t)}\,dt,$$
with $P(0)=P_0$, $v(0)=K\mathcal E(P_0)/3$, $b(r):=1-2r^2v(r)\ge1/2$, and $P'(0)=v'(0)=0$. Defining
$$M(r)=\frac{c^2}{G}r^3v(r),\qquad \phi(r)=\phi_c+\int_0^r t\frac{v(t)+KP(t)}{1-2t^2v(t)}\,dt,$$
gives a positive-lapse $C^2$ metric center and a local solution of the adopted Einstein-fluid equations. On $r>0$ its equations are
$$M'=\frac{4\pi r^2\mathcal E(P)}{c^2},\qquad \phi'=\frac{GM/c^2+4\pi Gr^3P/c^4}{r^2b},\qquad P'=-\frac{G(\mathcal E(P)+P)(M+4\pi r^3P/c^2)}{c^2r^2b}.$$
No conclusion is made that the branch reaches a finite zero-pressure surface, remains horizon-free globally, or is dynamically stable.

## Facts & Assumptions

**Given:** The adopted static Einstein-fluid model, a smooth positive supplied EOS, a compact central-pressure range with the stated margin, $\phi_c\in\mathbb R$, and the exact $\mathrm{ZF}+\mathrm{AC}_\omega$ convention of the mathematical suppliers.

[F1] [[post-tgr-static-spherical-fluid-preparation]] adopts the $\Lambda=0$ field equation with static metric and stress $\operatorname{diag}(-\mathcal E(P),P,P,P)$; $\mathcal E$ is a supplied smooth positive function, not a derived EOS.

[F2] [[thm-tgr-tov-regular-center-local-existence]]: for positive smooth $\mathcal E$ on $I_P$, compact $P_c$ with a closed pressure margin, and $\phi_c\in\mathbb R$, the even Volterra profiles displayed in the Statement exist smoothly on a common interval, satisfy $b\ge1/2$, and give a $C^2$ Cartesian center and local continuity in $P_0$; the theorem assumes $\mathrm{ZF}+\mathrm{AC}_\omega$.

[F3] [[lem-tgr-spherical-einstein-tov-reduction]]: on every smooth $r>0$ interval with $b>0$, the mass, lapse, and pressure equations are equivalent to all mixed Einstein equations under the stated $(-,+,+,+)$ curvature convention.

[A1] The field equation and EOS in [F1] are adopted model premises, not deductions about nature.

## Proof

1.1 The supplied $\mathcal E$, compact interval $P_c$, pressure margin $\delta$, and central lapse meet [F2] exactly. Its Volterra construction gives the even smooth $P,v$, the lower bound $b\ge1/2$, and the displayed integral formula for $\phi$; in particular the center is regular in the stated $C^2$ Cartesian sense. [given, A1, F1, F2]

2.1 The constructed profiles satisfy the mass, pressure, and lapse equations in [F3] on $r>0$, with $\varepsilon(r)=\mathcal E(P(r))$ and $b>0$. The converse direction of [F3] therefore gives every mixed Einstein component of the adopted model on the punctured neighborhood. In Cartesian coordinates the static unit vector $u=e^{-\phi}\partial_{x^0}$ and metric are continuous, and the isotropic stress has covariant form $T_{ab}=(\varepsilon+P)u_a u_b+Pg_{ab}$, so its components extend continuously to the center. A $C^2$ metric has a continuous Einstein tensor; equality on the punctured neighborhood therefore extends to the center. [A1, F1, F2, F3, step 1.1, algebra] ∎


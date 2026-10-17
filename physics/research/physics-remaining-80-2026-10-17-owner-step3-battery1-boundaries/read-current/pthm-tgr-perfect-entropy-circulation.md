---
id: pthm-tgr-perfect-entropy-circulation
kind: physics-theorem
title: "Perfect entropy advection and restricted circulation"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 8
proof_strategy: direct
deps:
  - post-tgr-perfect-fluid-model
  - lem-tgr-perfect-fluid-projection
  - lem-tgr-carter-circulation
  - def-countable-choice
  - def-tgr-local-fluid-state
  - def-tgr-framework-units
  - cor-zero-derivative-implies-constant
dependency_roles:
  post-tgr-perfect-fluid-model: physical-assumption
  lem-tgr-perfect-fluid-projection: mathematical-premise
  lem-tgr-carter-circulation: mathematical-premise
  def-countable-choice: mathematical-premise
  def-tgr-local-fluid-state: mathematical-premise
  def-tgr-framework-units: formulation-prerequisite
  cor-zero-derivative-implies-constant: mathematical-premise
justified_by: []
physical_scope: "Conditional smooth isolated perfect-fluid branch with positive marker density and temperature; entropy-current conservation and local material-loop circulation only, with draft mathematical balance/circulation suppliers and stated local-flow conditions."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Éric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1 (2006), §§5.2–5.4 and 6.1–6.3"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
      locator: "Full 37-page PDF; PDF pp. 17–24: perfect-fluid balance projections, entropy per particle, the Carter–Lichnerowicz identity, and its isentropic restriction."
    - title: "Nicolas Borghini, Elements of Hydrodynamics, University of Bielefeld lecture notes (version of 2 September 2015), §§IX.1–IX.3.2"
      url: "https://www.physik.uni-bielefeld.de/~borghini/Teaching/Hydrodynamics15/Hydrodynamics.pdf"
      locator: "Full 184-page PDF; PDF pp. 134–148: particle and stress balances, perfect-fluid tensor/current, and conditional entropy-current conservation."
---

## Statement

Assume the smooth isolated perfect material model of [[post-tgr-perfect-fluid-model]] on an open region $O$ of a time-oriented Lorentzian four-manifold $(M,g)$ with signature $(-,+,+,+)$. Thus $u$ is a smooth future-directed unit timelike observer-congruence field, $g(u,u)=-1$, the local state is the $C^2$ state of [[def-tgr-local-fluid-state]] with $n>0$ and $T>0$, $J^a=nu^a$, $\mathsf T^{ab}=\varepsilon u^a u^b+p(g^{ab}+u^a u^b)$, and $\nabla_aJ^a=0$, $\nabla_a\mathsf T^{ab}=0$. Write $D=u^a\nabla_a$ and $u^\flat=g(u,\cdot)$. For every smooth closed curve $\gamma_0:[0,1]\to O$ whose image is compact and for which a local flow $\Phi_\lambda$ of $u$ is defined on a neighborhood of that image for $\lambda$ in an interval about $0$, set $\gamma_\lambda=\Phi_\lambda\circ\gamma_0$, $H=(\varepsilon+p)/n$, $P=(H/c)u^\flat$, and $\mathcal C(\lambda)=\int_{\gamma_\lambda}P$, with $c$ and the length-coordinate convention of [[def-tgr-framework-units]]. Conditional on the exact current mathematical supplier interfaces, the entropy identities and loop law are
$$\nabla_a(su^a)=0,\qquad D\sigma_p=0,\qquad \frac{d\mathcal C}{d\lambda}=\frac1c\int_{\gamma_\lambda}T\,d\sigma_p.$$
In particular, $\mathcal C$ is locally constant if $\sigma_p$ is constant on the whole region swept out by the loop. Material advection alone, $D\sigma_p=0$, does not imply $d\sigma_p=0$ or circulation conservation. These are conditional model deductions, not an existence theorem or empirical claim.

## Facts & Assumptions

**Given:** The stated smooth isolated perfect-fluid model on $O$, with $n>0$, $T>0$, a smooth closed curve with compact image, and a local flow of $u$ defined near that image for sufficiently small $\lambda$.

[F1] [[post-tgr-perfect-fluid-model]] (draft physical postulate): the selected model adopts $J^a=nu^a$, $\mathsf T^{ab}=\varepsilon u^a u^b+p\Delta^{ab}$, and the local balances $\nabla_aJ^a=0$, $\nabla_a\mathsf T^{ab}=0$ on the specified smooth fixed-composition branch. This is an adopted physical model, not a deduction from geometry.

[F2] [[lem-tgr-perfect-fluid-projection]] (draft mathematical supplier): for a smooth state and perfect stress/current with $\nabla_a\mathsf T^{ab}=f^b$ and $\nabla_aJ^a=0$, it states $T\nabla_a(su^a)=-u_bf^b$ and $nT D\sigma_p=-u_bf^b$. At $f=0$, $n,T>0$, it yields the two vanishing identities used here. These identities apply to the stated state and balance hypotheses.

[F3] [[lem-tgr-carter-circulation]] (draft mathematical supplier): with the same smooth state and isolated perfect balances, $H=(\varepsilon+p)/n$, $P=(H/c)u^\flat$, and the stated compact closed curve/local-flow hypotheses, it gives $\iota_u d(Hu^\flat)=T\,d\sigma_p$ and $d\mathcal C/d\lambda=c^{-1}\int_{\gamma_\lambda}T\,d\sigma_p$. Its Statement also records circulation constancy when $\sigma_p$ is spatially constant on the swept region, but its proof derives the derivative identity and stops at the resulting $\mathcal C'=0$; this theorem obtains constancy from [F7] and does not infer it from $D\sigma_p=0$ alone. The compact-curve and local-flow hypotheses here are exactly those of the derivative identity.

[F4] [[def-countable-choice]]: the supplier chain explicitly assumes countable choice $\mathrm{AC}_\omega$; this theorem carries that exact premise and invokes no stronger choice principle.

[F5] [[def-tgr-local-fluid-state]]: the selected C2 state defines $n=1/v$, $s=n\sigma_p$, $T=e_{\sigma_p}$, and $\sigma_p$ as entropy per marker. These state coordinates are used with the stated $C^2$ regularity.

[F6] [[def-tgr-framework-units]]: use $x^0=ct$ with $c>0$ in SI units and dimensionless unit observers in signature $(-,+,+,+)$. Only its local unit and observer conventions are used here.

[F7] [[cor-zero-derivative-implies-constant]] (published mathematical corollary): a continuous real function on an order-convex interval whose derivative vanishes at every interior point is constant on the interval. The local circulation function is differentiable on its flow interval, so this applies when its derivative vanishes throughout that interval.

[A1] The curve is smooth, closed, and compactly contained in $O$; the local flow is parameterized by $\partial_\lambda\Phi_\lambda=u$ and is defined on a neighborhood of the curve for small $\lambda$. This is a local condition, not completeness of the flow.

## Proof

1.1 By [F1] the selected stress and particle current satisfy the isolated balances, so in [F2] set $f^b=0$. The exact supplier identities give $T\nabla_a(su^a)=0$ and $nT D\sigma_p=0$. Since $n>0$ and $T>0$ by [F5], division gives $\nabla_a(su^a)=0$ and $D\sigma_p=0$. This is a deduction under the adopted perfect-fluid model and the stated mathematical hypotheses. [given, A1, F1, F2, F4, F5, algebra]

2.1 The curve and local-flow hypotheses in [A1] match [F3], with the same state and isolated perfect balances from [F1]. Its exact conditional loop identity yields $d\mathcal C/d\lambda=c^{-1}\int_{\gamma_\lambda}T\,d\sigma_p$ on an open interval about $0$. Here $c$ uses [F6] and the specific entropy is the state coordinate of [F5]. If $\sigma_p$ is constant throughout the region swept by the loop on that interval, then $\sigma_p\circ\gamma_\lambda$ is constant in the curve parameter, so $d\sigma_p(\partial_s\gamma_\lambda)=\partial_s(\sigma_p\circ\gamma_\lambda)=0$. Thus the line integral and hence $\mathcal C'$ vanish throughout the interval; no vanishing ambient differential on a non-open swept image is required. The differentiable function $\mathcal C$ is continuous there; applying [F7] shows it is constant on that interval. The separate conclusion $D\sigma_p=0$ from step 1.1 is only a derivative along $u$ and does not imply spatial constancy. [given, A1, F1, F3, F4, F5, F6, F7, step 1.1] ∎

---
id: def-ip-hyperbolic-dirichlet-to-neumann-map
kind: definition
title: Time-dependent Dirichlet-to-Neumann map for the wave equation
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
axiom_base: Countable Choice
deps:
  - thm-ip-variable-metric-wave-ibvp-energy-wellposedness
  - lem-ip-riemannian-green-boundary-traces-and-wave-lifting
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Mikko Salo, On geometric inverse problems and microlocal analysis (full
        author lecture notes, arXiv:2312.08123v1)
      url: https://arxiv.org/pdf/2312.08123v1
      locator: §3.1, forward map and full time-dependent boundary map conventions, PDF
        pp. 22–24; the local definition states the classical trace class needed
        for the boundary pairing.
    - title: Medet Nursultanov and Lauri Oksanen, Introduction to inverse problems for
        hyperbolic PDEs (full lecture notes, arXiv:2311.06020v2)
      url: https://arxiv.org/pdf/2311.06020v2
      locator: §§2.4 and 3.3, PDF pp. 9 and 17–18, for the time-dependent boundary
        pairing and normal derivative convention.
---

## Definition

Assume Countable Choice. Let $(M,g)$ be a compact, connected, nonempty smooth Riemannian manifold with smooth boundary, let $T>0$, and write $Q=(0,T)\times M$ and $\Sigma=(0,T)\times\partial M$. Let $q\in C^\infty(M;\mathbb R)$ be independent of time, and let $L_q=\partial_t^2-\Delta_g+q$. Write $\mathcal H=C_c^\infty(\Sigma)$ for smooth Dirichlet data compactly supported away from the temporal endpoints. Assume that for every $h\in\mathcal H$ the zero-initial-data Dirichlet problem $L_qu=0$, $u|_\Sigma=h$, $(u(0),u_t(0))=(0,0)$ has a unique solution $u_{q,h}\in C^2([0,T]\times M)$. Define the full time-dependent Dirichlet-to-Neumann map by
$$\Lambda_q^+ :\mathcal H\to L^2(\Sigma,dS_gdt),\qquad \Lambda_q^+h=\partial_{\nu_{out}}u_{q,h}|_\Sigma,$$
where $\nu_{out}$ is the outward unit normal. Also assume that for every $k\in\mathcal H$ the terminal-data Dirichlet problem $L_qv=0$, $v|_\Sigma=k$, $(v(T),v_t(T))=(0,0)$ has a unique solution $v_{q,k}\in C^2([0,T]\times M)$, and define
$$\Lambda_q^- :\mathcal H\to L^2(\Sigma,dS_gdt),\qquad \Lambda_q^-k=\partial_{\nu_{out}}v_{q,k}|_\Sigma.$$
The Green boundary pairing is the bilinear pairing $\int_\Sigma h\,\partial_{\nu_{out}}v\,dS_gdt$; the classical normal trace is in $L^2(\Sigma)$ for each stated $C^2$ solution class. Equality of two forward maps means equality on every $h\in\mathcal H$ over the whole time interval $(0,T)$, with the analogous convention for terminal maps.

## Definition references

[[thm-ip-variable-metric-wave-ibvp-energy-wellposedness]]

[[lem-ip-riemannian-green-boundary-traces-and-wave-lifting]]

[[def-countable-choice]]

## Well-definedness

The energy theorem proves existence and uniqueness for the homogeneous-boundary lifted problem and, in its proof's final step, smoothness on the closed cylinder for every admitted smooth time-compact input. Adding the smooth lift therefore gives the asserted $C^2$ solution. Its energy uniqueness implies uniqueness among classical solutions. Time reversal gives the terminal solution. The Green-and-lifting lemma bounds its classical normal trace in $L^2(\Sigma)$. Thus both displayed maps are defined on every element of $\mathcal H$.

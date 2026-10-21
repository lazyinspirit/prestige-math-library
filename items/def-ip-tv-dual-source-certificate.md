---
id: def-ip-tv-dual-source-certificate
kind: definition
title: Dual source certificates for TV regularization
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-spatial-bv-and-distributional-tv
  - def-ip-boundary-tv-conventions
  - def-ip-banach-convex-subgradient-and-dual-pairing
  - def-ip-bregman-distance
  - def-calligraphic-l-p-on-a-measure-space
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-real-and-complex-inner-product-space
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - thm-riesz-representation-for-hilbert-space
  - def-countable-choice
  - def-ip-tv-functional-on-l2-distributional-variation
  - lem-ip-tv-l2-functional-properties
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "José A. Iglesias, Gwenael Mercier, and Otmar Scherzer, A note on convergence of solutions of total variation regularized linear inverse problems, Definition 1"
      url: "https://arxiv.org/pdf/1711.06495"
    - title: "Antonin Chambolle, Vincent Duval, Gabriel Peyré, and Clarice Poon, Geometric properties of solutions to the total variation denoising problem, §§1.3 and 3.1"
      url: "https://arxiv.org/pdf/1602.00087"
    - title: "Barbara Kaltenbacher, Convergence rates under a range invariance condition with application to electrical impedance tomography, Definition (1.25)"
      url: "https://arxiv.org/pdf/2403.18704"
---

## Definition

Assume Countable Choice. Let $\Omega=\mathbb R^2$, or let $\Omega\subseteq\mathbb R^2$ be a bounded Lipschitz domain. Set $X=L^2(\Omega;\mathbb R)$ and let $Y=L^2(\Sigma,\mu;\mathbb R)$ for a measure space $(\Sigma,\mu)$, using the real integral inner products; under Countable Choice these are real Hilbert spaces. Let $A:X\to Y$ be bounded and real-linear, and let $A^*:Y\to X$ be its Hilbert adjoint, characterized by $\langle Au,p\rangle_Y=\langle u,A^*p\rangle_X$. Define $R:X\to[0,+\infty]$ as follows. If $\Omega=\mathbb R^2$, take $R(u)=TV_2(u;\mathbb R^2)$, the supremum of $\int u\,\operatorname{div}\varphi$ over smooth compactly supported vector fields of Euclidean norm at most one. For bounded $\Omega$, either take Neumann TV, $R(u)=TV(u;\Omega)$ when $u\in BV(\Omega)$ and $+\infty$ otherwise, or Dirichlet TV, $R(u)=TV(\widetilde u;\mathbb R^2)$ when the zero extension $\widetilde u$ belongs to $BV(\mathbb R^2)$ and $+\infty$ otherwise. Thus the bounded-domain choices count, respectively, only the interior derivative or also the jump of the zero extension across the boundary. In the full-space case finite $R$ does not require global $L^1$ integrability.

Identify each $q\in X$ with the continuous linear functional $h\mapsto\langle q,h\rangle_X$ by the real Hilbert-space Riesz representation. For exact data $f=Au^\dagger$, a **minimum-TV exact solution** is a point $u^\dagger\in X$ satisfying $Au^\dagger=f$ and $R(u^\dagger)\le R(u)$ for every $u\in X$ with $Au=f$. A vector $p^\dagger\in Y$ is a **dual source certificate** for $u^\dagger$ if $A^*p^\dagger\in\partial R(u^\dagger)$, where $\partial R$ is the convex subdifferential on the real Banach space $X$. The **TV source condition** at $u^\dagger$ is that such a certificate exists; it does not assert uniqueness of the truth or of the certificate. For a chosen certificate, the associated Bregman distance is

$$D_R^{A^*p^\dagger}(u,u^\dagger):=R(u)-R(u^\dagger)-\langle A^*p^\dagger,u-u^\dagger\rangle_X,$$

for $u\in\operatorname{dom}R$.

## Definition references

[[def-ip-spatial-bv-and-distributional-tv|Spatial TV is the mass of the distributional derivative.]]

[[def-ip-tv-functional-on-l2-distributional-variation|Full-space TV on L² uses the local distributional test-field supremum.]]

[[lem-ip-tv-l2-functional-properties|This extended functional is proper, convex, lower semicontinuous, and agrees with BV TV when globally integrable.]]

[[def-ip-boundary-tv-conventions|Full-space, Dirichlet, and Neumann TV have distinct boundary conventions.]]

[[def-ip-banach-convex-subgradient-and-dual-pairing|The subdifferential uses the supporting-functional inequality on the real dual.]]

[[def-ip-bregman-distance|The Bregman distance fixes the comparison/reference-point orientation.]]

[[def-real-and-complex-inner-product-space|The real L² pairing is linear in its first argument and induces the L² norm.]]

[[lem-l-two-with-the-integral-pairing-is-a-hilbert-space|Real L² spaces with the integral pairing are Hilbert spaces under Countable Choice.]]

[[thm-riesz-representation-for-hilbert-space|Riesz representation defines the unique bounded Hilbert adjoint.]]

[[def-countable-choice|Countable Choice is assumed by the real L² Hilbert-space and Riesz-representation results.]]

[Iglesias, Mercier, and Scherzer, *A note on convergence of solutions of total variation regularized linear inverse problems*, Definition 1](https://arxiv.org/pdf/1711.06495)

[Chambolle, Duval, Peyré, and Poon, *Geometric properties of solutions to the total variation denoising problem*, §§1.3 and 3.1](https://arxiv.org/pdf/1602.00087)

[Kaltenbacher, *Convergence rates under a range invariance condition with application to electrical impedance tomography*, Definition (1.25)](https://arxiv.org/pdf/2403.18704)

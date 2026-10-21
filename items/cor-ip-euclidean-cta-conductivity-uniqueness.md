---
id: cor-ip-euclidean-cta-conductivity-uniqueness
kind: corollary
title: "Conductivity uniqueness on a Euclidean CTA domain with simple transversal"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-conductivity-dirichlet-to-neumann-map
  - lem-ip-conductivity-liouville-transform-and-dn-conjugacy
  - thm-ip-boundary-determination-of-scalar-conductivity
  - def-ip-simple-surface-and-geodesic-xray-transform
  - thm-ip-euclidean-schrodinger-calderon-uniqueness
  - def-axiom-of-choice
  - def-countable-choice
dependency_level: 5
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Mikko Salo, Calderon problem, full lecture notes (2008)"
      url: "https://users.jyu.fi/~salomi/lecturenotes/calderon_lectures.pdf"
      locator: "Sections 3.1 and 3.3, Liouville reduction, Euclidean Schrödinger uniqueness, and its full CGO/Fourier proof."
    - title: "Mikko Salo, Applications of microlocal analysis to inverse problems (2019)"
      url: "https://arxiv.org/pdf/1908.03041"
      locator: "§5, Theorem 5.1, boundary determination of all scalar conductivity jets."
---

## Statement

Assume the Axiom of Choice and Countable Choice.

Let $\Omega\subset\mathbb R^3$ be a bounded smooth domain whose Euclidean metric is isometric to the product metric $dx_1^2\oplus g_0$ on a compact subdomain of $\mathbb R\times D^\circ$, where $(D,g_0)$ is a compact connected simple Riemannian surface with smooth boundary. Let $\gamma_1,\gamma_2\in C^\infty(\overline\Omega,\mathbb R)$ be strictly positive. If their full physical scalar conductivity Dirichlet-to-Neumann maps agree on every boundary datum, then $\gamma_1=\gamma_2$ in $\overline\Omega$.

## Statement references

[[def-ip-conductivity-dirichlet-to-neumann-map|Full physical scalar conductivity DN map]]

[[lem-ip-conductivity-liouville-transform-and-dn-conjugacy|Liouville potential and boundary conjugacy]]

[[thm-ip-boundary-determination-of-scalar-conductivity|Equality of all boundary conductivity jets]]

[[def-ip-simple-surface-and-geodesic-xray-transform|Simple transversal surface convention]]

[[thm-ip-euclidean-schrodinger-calderon-uniqueness|Euclidean Schrödinger full-data uniqueness]]

## Facts & Assumptions
[A1] [[def-axiom-of-choice]] is inherited from the boundary determination and Euclidean potential uniqueness suppliers [F1]--[F3].

[A2] [[def-countable-choice]] is inherited from the boundary determination and Euclidean potential uniqueness suppliers [F1]--[F3].

**Given:** the Euclidean CTA product domain, a compact simple transversal surface, two positive smooth conductivities, and equality of their full physical DN maps.

[F1] [[thm-ip-boundary-determination-of-scalar-conductivity]]: equal full conductivity DN maps imply equality of every inward boundary-normal derivative of the two conductivities.

[F2] [[lem-ip-conductivity-liouville-transform-and-dn-conjugacy]]: for $\rho_j=\sqrt{\gamma_j}$, $q_j=\Delta_g\rho_j/\rho_j$, the conductivity equation is conjugated by $u=\rho_jv$ to $(-\Delta_g+q_j)u=0$, and $\Lambda_{\gamma_j}f=\rho_{j,b}\Lambda_{q_j}(\rho_{j,b}f)-\rho_{j,b}(\partial_\nu\rho_j)f$.

[F3] [[thm-ip-euclidean-schrodinger-calderon-uniqueness]]: on a bounded smooth Euclidean domain in dimension at least three, equality of the full Schrödinger DN maps for real smooth nonresonant potentials implies equality of the potentials.

## Proof

**Given:** the data in the statement.

1.1 By [F1], all boundary-normal jets of $\gamma_1$ and $\gamma_2$ agree, so the boundary values and first normal derivatives of $\rho_j=\sqrt{\gamma_j}$ agree. Put $q_j=\Delta_g\rho_j/\rho_j$. Their Liouville boundary relations in [F2], together with $\Lambda_{\gamma_1}=\Lambda_{\gamma_2}$, now give $\Lambda_{q_1}g=\Lambda_{q_2}g$ for every $g\in H^{1/2}(\partial\Omega)$: substitute $f=g/\rho_b$ into the physical-flux relation, using the common positive boundary value $\rho_b$ and common $\partial_\nu\rho_j$. Multiplication and division by smooth positive $\rho_b$ preserve $H^{1/2}(\partial\Omega)$. [A1, A2, F1, F2, given, algebra]

1.2 Each $q_j$ is nonresonant. If $w\in H_0^1(\Omega)$ solves $(-\Delta_g+q_j)w=0$, then $v=w/\rho_j\in H_0^1(\Omega)$ solves $-\operatorname{div}(\gamma_j\nabla v)=0$ by [F2]. Testing weakly with $\overline v$ gives $\int_\Omega\gamma_j|\nabla v|^2dx=0$. Positivity of $\gamma_j$ implies $v=0$, hence $w=0$. [F2, given, algebra]

2.1 The domain is bounded and smooth in $\mathbb R^3$, the potentials are real and smooth, both operators are nonresonant by step 1.2, and their full Schrödinger DN maps agree by step 1.1. Thus [F3] applies and yields $q_1=q_2=:q$ in $\Omega$. [A1, A2, F3, step 1.1, step 1.2]

3.1 Each $\rho_j$ solves $(-\Delta_g+q)\rho_j=0$ and the two functions have the same boundary value by step 1.1. Their difference is a zero-trace solution of the nonresonant operator from step 1.2, hence vanishes. Therefore $\rho_1=\rho_2$ and $\gamma_1=\rho_1^2=\rho_2^2=\gamma_2$ in $\Omega$; continuity extends this equality to $\overline\Omega$. [F2, step 1.1, step 1.2, step 2.1, algebra] ∎


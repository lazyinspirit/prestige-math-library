---
id: lem-ip-alessandrini-identity
kind: lemma
title: "Alessandrini identities for scalar conductivity and Schrödinger DN maps"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-conductivity-dirichlet-to-neumann-map
  - lem-ip-conductivity-map-wellposedness
  - lem-ip-smooth-manifold-elliptic-nonresonant-regularity
  - def-ip-sobolev-spaces-on-compact-riemannian-domain
  - def-riemannian-metric-and-riemannian-manifold
  - def-riemannian-gradient
  - def-laplace-beltrami-operator-as-trace-of-the-hessian
  - def-riemannian-volume-density
  - def-axiom-of-choice
  - def-countable-choice
dependency_level: 3
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Mikko Salo, Applications of microlocal analysis to inverse problems (2019)"
      url: "https://arxiv.org/pdf/1908.03041"
      locator: "Section 5, Lemma 5.4 and proof, PDF pp. 24-25."
    - title: "Dos Santos Ferreira, Kurylev, Lassas, and Salo, The Calderon problem in transversally anisotropic geometries (2016)"
      url: "https://arxiv.org/pdf/1305.1273"
      locator: "Section 2, Alessandrini identity for the Schrödinger DN map."
---

## Statement

Assume the Axiom of Choice and Countable Choice.

Let $(M,g)$ be a nonempty compact connected smooth Riemannian domain with nonempty smooth boundary. If $\gamma_1,\gamma_2\in C^\infty(M,\mathbb R)$ are strictly positive and $u_j$ solves $\operatorname{div}_g(\gamma_j\nabla_gu_j)=0$ with smooth boundary value $f_j$, then
$$\langle(\Lambda_{\gamma_1}-\Lambda_{\gamma_2})f_1,f_2\rangle_{\partial M} =\int_M(\gamma_1-\gamma_2)g(\nabla_gu_1,\nabla_g\overline{u_2})\,dV_g.$$
If instead $q_1,q_2\in C^\infty(M,\mathbb R)$ have trivial Dirichlet kernels for $-\Delta_g+q_j$ and $u_j$ solves $(-\Delta_g+q_j)u_j=0$ with smooth boundary value $f_j$, then
$$\langle(\Lambda_{q_1}-\Lambda_{q_2})f_1,f_2\rangle_{\partial M} =\int_M(q_1-q_2)u_1\overline{u_2}\,dV_g.$$

## Statement references

[[def-ip-conductivity-dirichlet-to-neumann-map|Full-data conductivity and Schrödinger DN maps]]

[[lem-ip-conductivity-map-wellposedness|Positive conductivity weak solvability]]

[[lem-ip-smooth-manifold-elliptic-nonresonant-regularity|Nonresonant Schrödinger solvability]]

## Facts & Assumptions
[A1] [[def-axiom-of-choice]] is inherited from the weak DN-map well-posedness suppliers [F2]--[F3].

[A2] [[def-countable-choice]] is inherited from the weak DN-map well-posedness suppliers [F2]--[F3].

**Given:** the compact smooth Riemannian domain, two positive conductivities or two real nonresonant potentials, and arbitrary smooth complex boundary values $f_1,f_2$.

[F1] [[def-ip-conductivity-dirichlet-to-neumann-map]]: the conductivity DN map is the weak boundary form of $\operatorname{div}_g(\gamma\nabla_g)$, and the Schrödinger DN map is the weak boundary form of $-\Delta_g+q$; their smooth-data fluxes use $\gamma\partial_{\nu_{\rm out}}$ and $\partial_{\nu_{\rm out}}$, respectively.

[F2] [[lem-ip-conductivity-map-wellposedness]]: positive smooth conductivity gives a unique weak solution for each $H^{1/2}$ boundary value.

[F3] [[lem-ip-smooth-manifold-elliptic-nonresonant-regularity]]: a trivial Schrödinger Dirichlet kernel gives a unique weak solution for each $H^{1/2}$ boundary value, with smooth solutions for smooth boundary data.

[F4] [[def-riemannian-volume-density]]: in each chart the Riemannian volume is a positive density, so the integration-by-parts identities can be patched without assuming orientability.

## Proof

**Given:** the data in the statement.

1.1 Write $a_{\gamma_j}(v,w)=\int_M\gamma_jg(\nabla v,\nabla\bar w)\,dV_g$. By [F1], $\langle\Lambda_{\gamma_1}f_1,f_2\rangle=a_{\gamma_1}(u_1,u_2)$, since $u_2$ is an extension of $f_2$. Let $\widetilde u_1$ solve the $\gamma_2$ equation with boundary value $f_1$, which exists by [F2]. Then $\langle\Lambda_{\gamma_2}f_1,f_2\rangle=a_{\gamma_2}(\widetilde u_1,u_2)$. Since $u_1-\widetilde u_1\in H_0^1(M)$ and $u_2$ solves the $\gamma_2$ weak equation, Hermitian symmetry gives $a_{\gamma_2}(u_1-\widetilde u_1,u_2)=\overline{a_{\gamma_2}(u_2,u_1-\widetilde u_1)}=0$. Hence $a_{\gamma_2}(\widetilde u_1,u_2)=a_{\gamma_2}(u_1,u_2)$. Subtracting the two equalities gives the conductivity identity. [A1, A2, F1, F2, F4, given, algebra]

1.2 Write $a_{q_j}(v,w)=\int_M(g(\nabla v,\nabla\bar w)+q_jv\bar w)\,dV_g$. By [F1], $\langle\Lambda_{q_1}f_1,f_2\rangle=a_{q_1}(u_1,u_2)$ because $u_2$ extends $f_2$. Let $\widetilde u_1$ be the $q_2$ solution with boundary value $f_1$, which exists by [F3]. Then $\langle\Lambda_{q_2}f_1,f_2\rangle=a_{q_2}(\widetilde u_1,u_2)$. Since $u_1-\widetilde u_1\in H_0^1(M)$ and $u_2$ solves the $q_2$ weak equation, real-valuedness of $q_2$ gives $a_{q_2}(u_1-\widetilde u_1,u_2)=\overline{a_{q_2}(u_2,u_1-\widetilde u_1)}=0$. Thus $\langle\Lambda_{q_2}f_1,f_2\rangle=a_{q_2}(u_1,u_2)$. [A1, A2, F1, F3, F4, given, algebra]

2.1 Subtract the identities in step 1.2. The gradient terms cancel and the remaining volume term is $\int_M(q_1-q_2)u_1\overline{u_2}\,dV_g$, which proves the Schrödinger identity. [step 1.2, algebra] ∎


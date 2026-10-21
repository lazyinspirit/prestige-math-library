---
id: lem-ip-conductivity-liouville-transform-and-dn-conjugacy
kind: lemma
title: "Liouville transform and conductivity DN conjugacy"
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
  - def-bounded-c-one-domain-boundary-charts-and-outward-normal
  - def-classical-normal-derivative
  - def-axiom-of-choice
  - def-countable-choice
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikko Salo, Calderon problem, full lecture notes (2008)"
      url: "https://users.jyu.fi/~salomi/lecturenotes/calderon_lectures.pdf"
      locator: "Section 3.1, reduction to the Schrodinger equation and the boundary DN relation."
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis (2023)"
      url: "https://arxiv.org/pdf/2312.08123v1"
      locator: "Exercise 4.1 and the discussion immediately following it."
---

## Statement

Assume the Axiom of Choice and Countable Choice.

Let $(M,g)$ be a nonempty compact connected smooth Riemannian domain with nonempty smooth boundary, let $\gamma\in C^\infty(M,\mathbb R)$ be strictly positive, put $\rho=\sqrt{\gamma}$, and define $q=(\Delta_g\rho)/\rho$. If $v$ solves $\operatorname{div}_g(\gamma\nabla_gv)=0$ and $u=\rho v$, then $u$ solves $(-\Delta_g+q)u=0$. The potential $q$ has trivial Dirichlet kernel. For boundary data $f=v|_{\partial M}$, with $\rho_b=\rho|_{\partial M}$ and the physical flux convention $\Lambda_\gamma f=\gamma\partial_{\nu_{\rm out}}v|_{\partial M}$, the exact boundary relation is
$$\Lambda_\gamma f=\rho_b\Lambda_q(\rho_b f)-\rho_b(\partial_{\nu_{\rm out}}\rho)|_{\partial M}f.$$

## Statement references

[[def-ip-conductivity-dirichlet-to-neumann-map|Physical conductivity and Schrödinger DN maps]]

[[lem-ip-smooth-manifold-elliptic-nonresonant-regularity|Nonresonant elliptic solvability]]

## Facts & Assumptions
[A1] [[def-axiom-of-choice]] is inherited from the weak conductivity and nonresonant Dirichlet solvability suppliers [F2]--[F3].

[A2] [[def-countable-choice]] is inherited from the weak conductivity and nonresonant Dirichlet solvability suppliers [F2]--[F3].

**Given:** the data in the statement, and the weak formulations of the conductivity and Schrödinger equations.

[F1] [[def-ip-conductivity-dirichlet-to-neumann-map]]: the conductivity DN map is the physical flux $\gamma\partial_{\nu_{\rm out}}v$; the Schrödinger DN map is $\partial_{\nu_{\rm out}}u$; both are defined by their weak boundary forms, and the $H^1$ trace is continuous into $L^2(\partial M)$.

[F2] [[lem-ip-conductivity-map-wellposedness]]: for every boundary datum in $H^{1/2}$ and every smooth positive conductivity, the conductivity equation has a unique weak $H^1$ solution.

[F3] [[lem-ip-smooth-manifold-elliptic-nonresonant-regularity]]: if the Schrödinger Dirichlet kernel is zero, the weak Dirichlet problem is uniquely solvable, and smooth coefficients and data give solutions in every chartwise Sobolev space.

[F4] [[def-ip-sobolev-spaces-on-compact-riemannian-domain]], [[def-riemannian-gradient]], and [[def-laplace-beltrami-operator-as-trace-of-the-hessian]]: $H^1$ is the completion of smooth functions in the fixed-atlas norm; the Laplacian is $\Delta_g=\operatorname{div}_g\nabla_g$ with the metric gradient. The scalar product rule used below follows in local charts from the weak Leibniz rule and this divergence convention; its distributional use is shown in step 1.1.

## Proof

**Given:** the data in the statement.

1.1 Let $v\in H^1(M)$ be a weak conductivity solution and put $u=\rho v$. Since $\rho$ is smooth, the distributional Leibniz rule in charts gives $$\operatorname{div}_g(\rho^2\nabla_gv)=\rho^2\Delta_gv+2\rho\,g(\nabla_g\rho,\nabla_gv),\qquad \Delta_g(\rho v)=\rho\Delta_gv+2g(\nabla_g\rho,\nabla_gv)+v\Delta_g\rho.$$ The first expression is zero distributionally by the weak equation. Dividing by the smooth positive $\rho$ in that identity and substituting into the second gives $\Delta_g(\rho v)=v\Delta_g\rho=q(\rho v)$, hence $u\in H^1(M)$ solves $(-\Delta_g+q)u=0$ weakly. Equivalently, the same identity reads $\operatorname{div}_g(\rho^2\nabla_g(u/\rho))=\rho(\Delta_gu-qu)$, so the transformation also sends every weak Schrödinger solution in $H^1$ back to a weak conductivity solution. These distributional identities use only the divergence convention in [F4], and are independent of orientability. [F4, given, algebra]

2.1 If $w\in H_0^1(M)$ solves $(-\Delta_g+q)w=0$, then $v=w/\rho$ lies in $H_0^1(M)$ because multiplication by the smooth functions $\rho$ and $\rho^{-1}$ preserves this space. The distributional identities of step 1.1 in reverse give $\operatorname{div}_g(\gamma\nabla_gv)=0$; by density this is the weak equation on all $H_0^1$ tests. Testing with $v$ yields $\int_M\gamma|\nabla_gv|_g^2\,dV_g=0$. Positivity of $\gamma$ implies $\nabla_gv=0$ almost everywhere; the zero trace then gives $v=0$, hence $w=0$. Therefore $q$ is nonresonant and $\Lambda_q$ is defined. [A1, A2, F1, F2, F3, given, step 1.1, algebra]

3.1 Let $f,h\in H^{1/2}(\partial M)$, let $v_f$ be the conductivity solution, and put $u=\rho v_f$. Let $U_h$ be the Schrödinger solution with trace $\rho_bh$; it exists by step 2.1 and the nonresonant solvability supplier. Then $U_h/\rho$ is the conductivity solution with trace $h$ by step 1.1. Use these solutions as extensions in the weak DN pairings from [F1]. The weak product calculation, valid almost everywhere for $H^1$ functions and smooth $\rho$, is $$\rho^2g\!\left(\nabla_g(u/\rho),\nabla_g(\overline{U_h}/\rho)\right)=g(\nabla_gu,\nabla_g\overline{U_h})+q\,u\overline{U_h}-\operatorname{div}_g\!\left(u\overline{U_h}\nabla_g\log\rho\right).$$ Here $q=\Delta_g\log\rho+|\nabla_g\log\rho|_g^2$. The product $u\overline{U_h}$ lies in $W^{1,1}(M)$. Approximate $u,U_h$ in $H^1$ by smooth functions using the completion defining $H^1$; their products converge in $W^{1,1}$, and their boundary products converge in $L^1$ by the trace bound in [F1]. Thus the smooth Gauss--Green formula passes to this product, whose trace is $(\rho_bf)\overline{(\rho_bh)}$. Integrating therefore gives $\langle\Lambda_\gamma f,h\rangle=\langle\Lambda_q(\rho_bf),\rho_bh\rangle-\int_{\partial M}\rho_b(\partial_{\nu_{\rm out}}\rho)f\overline h\,dS_g$. By duality, multiplication of an $H^{-1/2}$ distribution by $\rho_b$ is characterized by pairing against $\rho_bh$, so this is exactly the asserted operator identity for arbitrary $H^{1/2}$ data. [F1, F2, F3, F4, step 1.1, step 2.1, algebra] ∎


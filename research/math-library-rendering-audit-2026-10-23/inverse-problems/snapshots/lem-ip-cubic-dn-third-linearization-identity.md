---
id: lem-ip-cubic-dn-third-linearization-identity
kind: lemma
title: "Third linearization identity for the cubic Dirichlet-to-Neumann map"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-conductivity-dirichlet-to-neumann-map
  - lem-ip-cubic-dn-small-data-differentiability
  - lem-ip-smooth-manifold-elliptic-nonresonant-regularity
  - def-riemannian-gradient
  - def-laplace-beltrami-operator-as-trace-of-the-hessian
  - def-riemannian-volume-density
  - thm-sobolev-gauss-green-formula-on-c-one-domains
  - def-bounded-c-one-domain-boundary-charts-and-outward-normal
  - def-axiom-of-choice
  - def-countable-choice
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis (2023)"
      url: "https://arxiv.org/pdf/2312.08123v1"
      locator: "Section 4.4, third linearization of the cubic DN map and Lemma 4.14, PDF pp. 55-56."
    - title: "Feizmohammadi and Oksanen, An inverse problem for a semi-linear elliptic equation in Riemannian geometries (2019)"
      url: "https://arxiv.org/pdf/1904.00608v3"
      locator: "Section 2.2, multiple-fold linearization method, PDF pp. 9-12."
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume the Axiom of Choice and Countable Choice.

Let $(M,g)$ be a compact smooth Riemannian domain with nonempty smooth boundary and with every connected component meeting the boundary, let $q\in C^\infty(M,\mathbb R)$, and fix smooth boundary directions $h_1,h_2,h_3,h_4$. For $\epsilon=(\epsilon_1,\epsilon_2,\epsilon_3)$ near zero, let $u_\epsilon$ be the unique small solution of $-\Delta_g u+qu^3=0$ with boundary value $\epsilon_1h_1+\epsilon_2h_2+\epsilon_3h_3$, and set $\mathcal N(\epsilon)=\partial_{\nu_{\rm out}}u_\epsilon|_{\partial M}$. Let $v_j$ be the harmonic solution with boundary value $h_j$. If
$$w_{123}=\left.\partial_{\epsilon_1}\partial_{\epsilon_2}\partial_{\epsilon_3}u_\epsilon\right|_{\epsilon=0},$$
where $u_\epsilon$ has boundary value $\epsilon_1h_1+\epsilon_2h_2+\epsilon_3h_3$, then
$$-\Delta_gw_{123}+6qv_1v_2v_3=0,\qquad w_{123}|_{\partial M}=0,$$
and
$$\int_{\partial M}\left.\partial_{\epsilon_1}\partial_{\epsilon_2}\partial_{\epsilon_3}\mathcal N(\epsilon)\right|_{\epsilon=0}\overline{h_4}\,dS_g =6\int_Mq\,v_1v_2v_3\overline{v_4}\,dV_g.$$

## Statement references

[[lem-ip-cubic-dn-small-data-differentiability|Small-data cubic solution and DN map differentiability]]

[[def-ip-conductivity-dirichlet-to-neumann-map|Boundary normal derivative and pairing]]

## Facts & Assumptions
[A1] [[def-axiom-of-choice]] is inherited from the small-data differentiability supplier [F1] and nonresonant regularity supplier [F2].

[A2] [[def-countable-choice]] is inherited from the small-data differentiability supplier [F1] and nonresonant regularity supplier [F2].

**Given:** the data in the statement and the finite-parameter solution family from the small-data lemma.

[F1] [[lem-ip-cubic-dn-small-data-differentiability]]: for every finite list of smooth boundary directions, the small solution and nonlinear DN data depend $C^3$ on the real parameters $\epsilon_j$.

[F2] [[lem-ip-smooth-manifold-elliptic-nonresonant-regularity]]: the zero-Dirichlet Laplacian has a unique weak inverse and smooth data yield smooth solutions.

[F3] [[def-ip-conductivity-dirichlet-to-neumann-map]]: the smooth Schrödinger DN convention is the outward normal derivative, and the boundary pairing is linear in the first argument and conjugate-linear in the second.

[F4] [[def-riemannian-volume-density]] and [[def-laplace-beltrami-operator-as-trace-of-the-hessian]]: integration by parts for $\Delta_g$ is performed with the positive density $dV_g$ and outward boundary density $dS_g$.

[F5] [[thm-sobolev-gauss-green-formula-on-c-one-domains]]: on a bounded $C^1$ Euclidean domain of dimension at least two, integration by parts for smooth functions has the outward-normal boundary term; the Riemannian identity in these dimensions follows chartwise from the coordinate divergence formula and positive volume density. The one-dimensional identity is proved directly in step 3.1.

## Proof

**Given:** the data in the statement.

1.1 Differentiate $-\Delta_g u_\epsilon+q u_\epsilon^3=0$ once in $\epsilon_j$ at $\epsilon=0$. Since $u_0=0$, the derivative $v_j=\partial_{\epsilon_j}u_\epsilon|_0$ solves $-\Delta_gv_j=0$ with trace $h_j$. Differentiating twice in distinct parameters gives $-\Delta_g(\partial_{\epsilon_i}\partial_{\epsilon_j}u_\epsilon|_0)=0$ with zero trace, so this second derivative vanishes by [F2]. [A1, A2, F1, F2, given, algebra]

2.1 The third mixed derivative of $u_\epsilon^3$ at zero has exactly the six permutations of $v_1v_2v_3$, hence equals $6v_1v_2v_3$; all other chain-rule terms contain $u_0$ or one of the vanishing second derivatives from step 1.1. Differentiating the equation gives $-\Delta_gw_{123}+6qv_1v_2v_3=0$, with zero boundary trace. By [F1], the third derivative of the nonlinear DN data is $\partial_{\nu_{\rm out}}w_{123}|_{\partial M}$. [F1, step 1.1, algebra]

3.1 The harmonic fields and $w_{123}$ are smooth by [F2], since their boundary data and the forcing $-6qv_1v_2v_3$ are smooth. Since $v_4$ is harmonic and $w_{123}$ has zero trace, Green's formula gives $$\int_{\partial M}(\partial_{\nu_{\rm out}}w_{123})\overline{h_4}\,dS_g =\int_M(\Delta_gw_{123})\overline{v_4}\,dV_g.$$ Indeed, the second Green identity has boundary term $w_{123}\partial_{\nu}\overline{v_4}$ equal to zero, and interior term $w_{123}\Delta_g\overline{v_4}=0$. For dimension at least two, in each boundary chart write $\Delta_g w=|g|^{-1/2}\partial_i(|g|^{1/2}g^{ij}\partial_jw)$ and apply [F5] to the coordinate components; summing with the finite partition leaves the displayed Riemannian boundary integral by [F4]. In dimension one, use arclength coordinates $t$ and integrate $\frac{d}{dt}(w_{123}\overline{v_4'}-w_{123}'\overline{v_4})=w_{123}\overline{v_4''}-w_{123}''\overline{v_4}$ by the fundamental theorem of calculus. Finite chart localization cancels interior endpoint and cutoff terms. At a physical left endpoint $\partial_{\nu_{\rm out}}=-\partial_t$, at a right endpoint $\partial_{\nu_{\rm out}}=\partial_t$, and $dS_g$ is counting density. Using $w_{123}=0$ at those endpoints and $v_4''=0$ gives exactly the same displayed identity. [F2, F3, F4, F5, step 2.1, algebra]

4.1 The equation in step 2.1 gives $\Delta_gw_{123}=6qv_1v_2v_3$. Substituting this into step 3.1 and using the definition of the third DN derivative proves the displayed identity. [F3, step 2.1, step 3.1, algebra] ∎


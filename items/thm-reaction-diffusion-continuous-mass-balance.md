---
id: thm-reaction-diffusion-continuous-mass-balance
kind: theorem
title: Continuous reaction-diffusion mass balance on boxes, tori, and piecewise C1 domains
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
aliases: []
deps:
  - def-semilinear-reaction-diffusion-system
  - def-stoichiometric-mass-invariant
  - thm-riemann-fubini-on-product-rectangles
  - thm-ftc-second-part
  - thm-divergence-theorem-for-bounded-piecewise-c-one-domains
  - def-bounded-piecewise-c-one-euclidean-domain
  - def-countable-choice
justified_by: []
proof_strategy: direct
axiom_base: The box and torus branches are choice-free. The additional bounded piecewise C1 branch explicitly assumes AC_omega through the published divergence theorem; no choice axiom is used in the box/torus proof.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Willem Hundsdorfer, Numerical Solution of Advection-Diffusion-Reaction Equations, lecture notes for Ph.D. course, 1996
      url: https://ir.cwi.nl/pub/4797/4797D.pdf
      locator: "§0, printed p. 1: mass-balance modeling for multiple species; the local proof supplies the continuous no-flux and periodic identities."
verification:
  precheck: pass
---

## Statement

Let $u\in C^1([0,T];C^2(\overline\Omega;\mathbb R^m))$ solve $u_t=D\Delta u+F(u)$, with constant diagonal $D=\operatorname{diag}(d_i)$, and let its range lie in $R$. Let $c$ be a conservation or dissipation vector on $R$. One may take (i) a box $\Omega=\prod_{j=1}^d[0,L_j]$ with periodic identification or homogeneous Neumann data, or (ii) a bounded domain $\Omega\subset\mathbb R^d$, $d\ge2$, with a specified finite piecewise $C^1$ boundary presentation as in [[def-bounded-piecewise-c-one-euclidean-domain]], assuming $\mathrm{AC}_\omega$ in this second branch and homogeneous Neumann data on every face outside the edge set. For either branch,
$$
\frac{d}{dt}\int_\Omega c^Tu(x,t)\,dx=\int_\Omega c^TF(u(x,t))\,dx.
$$
Hence the total mass is constant when $c^TF=0$ on $R$ and nonincreasing when $c^TF\le0$ on $R$. The first branch is choice-free; $\mathrm{AC}_\omega$ is used only for the stated piecewise $C^1$ divergence-theorem branch.

## Facts & Assumptions

**Given:** A smooth bounded solution of the diagonal semilinear system, its state rectangle, a conservation or dissipation vector, and one of the two domain and boundary-condition branches in the Statement.

[F1] [[def-semilinear-reaction-diffusion-system]]: $u_t=D\Delta u+F(u)$ with constant diagonal $D$ and periodic or homogeneous no-flux conditions.

[F2] [[def-stoichiometric-mass-invariant]]: $c^TF(z)=0$ throughout $R$ in the conservation case, and $c^TF(z)\le0$ throughout $R$ in the dissipation case.

[F3] [[thm-riemann-fubini-on-product-rectangles]]: a continuous function on a compact product rectangle has equal iterated integrals in every coordinate order.

[F4] [[thm-ftc-second-part]]: integrating a continuous derivative along a closed interval gives the endpoint difference.

[F5] [[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]]: under $\mathrm{AC}_\omega$, a specified finite piecewise $C^1$ presentation and a $C^1$ vector field give the bulk-divergence integral as the sum of outward face-flux integrals.

[F6] [[def-bounded-piecewise-c-one-euclidean-domain]]: the bounded-domain branch has finitely many faces, an edge set null for each face, and the stated outward normal off that set.

[F7] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is the explicitly stated countable-choice axiom.

[A1] In the box branch, opposite periodic traces match, or the outward normal derivative is zero on each face. In the piecewise $C^1$ branch, assume $\mathrm{AC}_\omega$ and $\partial_nu_i=0$ on each face outside its edge set.

## Proof

1.1 Since $u_t$ is continuous on the compact cylinder, the time difference quotient of $c^Tu$ is the time average of $c^Tu_t$ by [F4], and uniform continuity makes it converge uniformly to $c^Tu_t$. Each stated domain has finite volume, so integrating this uniform convergence proves $\frac d{dt}\int_\Omega c^Tu=\int_\Omega c^Tu_t$. [F4, given, algebra]

2.1 In the box branch, substitute [F1] into step 1.1. The diffusion contribution is $\sum_i c_id_i\int_\Omega\Delta u_i\,dx$. For each coordinate $j$, [F3] permits integration in $x_j$ first, and [F4] gives $\int_0^{L_j}\partial_{jj}u_i\,dx_j=\partial_ju_i|_{x_j=L_j}-\partial_ju_i|_{x_j=0}$. This difference is zero for matching periodic traces and is zero for homogeneous Neumann data. Summing over components and coordinates makes the total diffusion contribution vanish. [A1, F1, F3, F4, step 1.1, algebra]

2.2 In the specified piecewise $C^1$ branch, each vector field $\nabla u_i$ is $C^1$ on the closure. Apply [F5] using the domain presentation [F6] and the axiom assumption [F7]: $\int_\Omega\Delta u_i\,dx=\sum_j\int_{S_j}\nabla u_i\cdot\nu_j\,dS$. By [A1], the integrand is zero on every face outside its surface-null edge set; hence every face integral vanishes. Thus the diffusion contribution to step 1.1 is also zero in this branch. [A1, F5, F6, F7, step 1.1, algebra]

3.1 In either branch, after the diffusion term vanishes, the remaining derivative is $\int_\Omega c^TF(u(x,t))\,dx$. By [F2] its integrand is identically zero in the conservation case and nonpositive in the dissipation case. Integrating proves the claimed mass derivative and monotonicity. [F2, step 2.1, step 2.2, algebra] ∎

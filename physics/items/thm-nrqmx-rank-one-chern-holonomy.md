---
id: thm-nrqmx-rank-one-chern-holonomy
kind: theorem
domain: mathematics
library: mathematics
title: Rank-one holonomy and integral curvature
status: published
origin: pipeline
dependency_level: 4
deps:
  - def-nrqmx-smooth-projector-bundle
  - thm-nrqmx-berry-projector-curvature
  - lem-nrqmx-c2-projector-chern-integrality
  - lem-first-chern-form-agrees-with-the-topological-line-class
  - lem-nrqmx-c1-stokes-compact-surface
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  def-nrqmx-smooth-projector-bundle: mathematical-premise
  thm-nrqmx-berry-projector-curvature: mathematical-premise
  lem-nrqmx-c2-projector-chern-integrality: mathematical-premise
  lem-first-chern-form-agrees-with-the-topological-line-class: mathematical-premise
  lem-nrqmx-c1-stokes-compact-surface: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Applications of Quantum Mechanics, University of Cambridge lecture notes
      url: https://www.damtp.cam.ac.uk/user/tong/aqm/aqm.pdf
    - title: J. E. Avron, R. Seiler, and L. G. Yaffe, Adiabatic Theorems and Applications to the Quantum Hall Effect
      url: https://phsites.technion.ac.il/avron/wp-content/uploads/sites/3/2013/05/commun_math_phys_110_33-49_1987.pdf
---

## Statement

Assume full AC. Let $\Sigma$ be a compact boundaryless oriented smooth surface, and let $P:\Sigma\to\operatorname{End}(\mathbb C^d)$ be a $C^2$ rank-one orthogonal projection family. Let $E_P$ be its complex line bundle, $\nabla=P\,d$, and $F=P(dP\wedge dP)P$. Then
$$\frac{i}{2\pi}\int_\Sigma\operatorname{tr}F=\langle c_1(E_P),[\Sigma]\rangle\in\mathbb Z.$$
For any $C^2$ closed path $\gamma$ subdivided into local unit frames $u_j$, with $A_j=u_j^*du_j$ and transition $u_{j+1}=u_jg_j$ for $g_j$ valued in $U(1)$ at the crossing points, the holonomy is the scalar by which parallel transport acts on its one-dimensional initial fiber. This scalar is the product of the local factors $\exp(-\int_{\gamma_j}A_j)$ and the transition factors $g_j^{-1}$. Thus geometric holonomy includes the frame-transition scalars whenever one frame does not cover the path.

In addition, suppose $\Sigma=\Sigma_N\cup\Sigma_S$ is a decomposition into compact oriented subsurfaces with disjoint interiors and common finite boundary $\Gamma=\partial\Sigma_N=-\partial\Sigma_S$, a finite union of oriented smooth circles. If $E_P$ has supplied $C^2$ unit frames $u_N,u_S$ on these subsurfaces and $u_S=u_Ng$ on $\Gamma$ for a $C^2$ map $g:\Gamma\to U(1)$, then
$$\langle c_1(E_P),[\Sigma]\rangle=\operatorname{wind}(g):=\sum_{\Gamma_j\subset\Gamma}\frac{1}{2\pi i}\int_{\Gamma_j}g^{-1}dg\in\mathbb Z,$$
where each component $\Gamma_j$ has the orientation induced by $\partial\Sigma_N$.

## Facts & Assumptions

**Given:** Full AC, the stated compact oriented smooth surface, a $C^2$ rank-one orthogonal projection family, and a $C^2$ closed path. For the conditional clutching clause, also assume the stated subsurface decomposition and supplied unit frames.

[A1] Full AC is [[def-axiom-of-choice]] and implies Countable Choice [[def-countable-choice]], as well as the hypotheses of the Chern and de Rham suppliers used below.

[F1] [[def-nrqmx-smooth-projector-bundle]] and [[thm-nrqmx-berry-projector-curvature]]: $E_P$ has fibers $\operatorname{ran}P$, $\nabla=P\,d$, $F=P(dP\wedge dP)P$, and a local unit frame has connection form $u^*du$.

[F2] [[lem-nrqmx-c2-projector-chern-integrality]]: under full AC, the displayed curvature integral equals the integral first Chern class pairing for a $C^2$ projector.

[F3] [[lem-first-chern-form-agrees-with-the-topological-line-class]]: for a smooth Hermitian line bundle, the anti-Hermitian curvature $\Omega$ has Chern form $-\Omega/(2\pi i)$ and its de Rham class is the real image of $c_1$.

[F4] [[lem-nrqmx-c1-stokes-compact-surface]]: Stokes holds for the $C^1$ connection forms on the two compact subsurfaces, including their piecewise-$C^2$ boundaries.

## Proof

1.1 The first equality and integrality are exactly [F2], with the Chern-form convention and sign fixed by [F3]. [A1, F2, F3, given]

1.2 Let $\gamma$ lie in one frame patch with unit frame $u$. A section is $u c$, and $\nabla(uc)=u(dc+A c)$ for $A=u^*du$; therefore a parallel section satisfies $c'=-A(\gamma')c$. Since this is a scalar equation, its transport factor on that segment is $\exp(-\int_\gamma A)$. The compact path has a finite subdivision into local frame patches by compactness and the open-cover property; uniqueness follows directly by differentiating $c(t)\exp(\int_{t_0}^t A(\gamma'(v))\,dv)$, which is constant. To identify this with Kato transport, write $P(t)=P(\gamma(t))$ and $v(t)=W(t)v_0$ with $P(0)v_0=v_0$. Intertwining gives $Pv=v$ and $PP' P=0$ gives $Pv'=P[P',P]v=0$, so $v$ is parallel. Conversely, a parallel section with $Pv=v$ satisfies $v'=P' v+Pv'=P' v=[P',P]v$, hence satisfies the same Kato equation. [F1, given, construct, algebra]

2.1 At a frame change $u_{j+1}=u_jg_j$, equality of the represented section $u_jc_j=u_{j+1}c_{j+1}$ gives $c_{j+1}=g_j^{-1}c_j$. Composing the local scalar transport equations from step 1.2 with these coefficient changes gives exactly the product in the Statement. Include the final transition back to the initial frame at the closing point, so the product represents the endpoint map in the initial unit vector. Subdividing a segment splits its integral into a sum, and inserting an intermediate frame at a crossing splits a transition into two whose inverse factors multiply to the original inverse; hence refinement leaves the product unchanged. Step 1.2 identifies this parallel transport with Kato transport. [F1, F2, step 1.2, algebra]

3.1 In the two-subsurface decomposition, set $A_N=u_N^*du_N$ and $A_S=u_S^*du_S$. From $u_S=u_Ng$ and $g^{-1}g=1$, the product rule gives $A_S=A_N+g^{-1}dg$. For a line, $A\wedge A=0$, so the scalar curvature on each patch is $dA$. The common boundary has opposite induced orientations on the two subsurfaces. Applying [F4] gives $\int_\Sigma\operatorname{tr}F=\int_\Gamma A_N+\int_{-\Gamma}A_S=\int_\Gamma(A_N-A_S)=-\int_\Gamma g^{-1}dg.$ For one oriented component parameterized by $t\in[0,2\pi]$, $|g(t)|=1$ implies $g^{-1}g'=ia(t)$ for a real continuous function $a$. Put $\theta(t)=\int_0^t a(s)\,ds$; differentiating shows $g(t)e^{-i\theta(t)}$ is constant, so $g(t)=g(0)e^{i\theta(t)}$. Since $g(2\pi)=g(0)$, $\theta(2\pi)\in2\pi\mathbb Z$, and hence $(2\pi i)^{-1}\int g^{-1}dg\in\mathbb Z$. Summing components shows $\operatorname{wind}(g)\in\mathbb Z$. Multiplying the curvature identity by $i/(2\pi)$ and using step 1.1 proves the claimed Chern-number formula, with the sign fixed by the orientation of $\partial\Sigma_N$. [F1, F2, F4, step 1.1, algebra] ∎


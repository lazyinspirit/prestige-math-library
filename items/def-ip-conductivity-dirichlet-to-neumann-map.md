---
id: def-ip-conductivity-dirichlet-to-neumann-map
kind: definition
title: "Scalar conductivity and Schrödinger Dirichlet-to-Neumann maps"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-sobolev-spaces-on-compact-riemannian-domain
  - def-riemannian-metric-and-riemannian-manifold
  - def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary
  - def-bounded-c-one-domain-boundary-charts-and-outward-normal
  - def-classical-normal-derivative
  - def-riemannian-gradient
  - def-laplace-beltrami-operator-as-trace-of-the-hessian
  - def-riemannian-volume-density
  - lem-ip-conductivity-map-wellposedness
  - lem-ip-smooth-manifold-elliptic-nonresonant-regularity
  - thm-lp-trace-operator-on-a-bounded-c-one-domain
  - thm-sharp-trace-theorem-for-w-one-p
  - thm-kernel-of-the-trace-is-w-one-p-zero
  - thm-bounded-right-inverse-for-the-sobolev-trace
  - lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts
  - thm-collar-neighborhood-theorem
  - thm-sobolev-gauss-green-formula-on-c-one-domains
  - def-axiom-of-choice
  - def-countable-choice
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Mikko Salo, Calderon problem, full lecture notes (2008)"
      url: "https://users.jyu.fi/~salomi/lecturenotes/calderon_lectures.pdf"
      locator: "Section 3.1, conductivity and Schrodinger Dirichlet-to-Neumann maps and the physical flux convention."
    - title: "Feizmohammadi and Oksanen, An inverse problem for a semilinear elliptic equation in Riemannian geometries (2019)"
      url: "https://arxiv.org/pdf/1904.00608v3"
      locator: "Section 2, definition of the semilinear Dirichlet-to-Neumann map and its linear Schrödinger specialization."
---

## Definition

Assume the Axiom of Choice and Countable Choice. For complex boundary data, the duality pairing is linear in the dual element and conjugate-linear in its boundary test.

Let $(M,g)$ be a nonempty compact connected smooth Riemannian domain with nonempty smooth boundary. For a real-valued $\gamma\in C^\infty(M)$ with $\gamma(x)>0$ at every $x\in M$, let $v_f\in H^1(M)$ be the unique weak solution of $\operatorname{div}_g(\gamma\nabla_gv_f)=0$ with trace $f\in H^{1/2}(\partial M)$, whose existence is supplied by the positive-conductivity solvability lemma. Define the full-data physical conductivity Dirichlet-to-Neumann map $\Lambda_\gamma:H^{1/2}(\partial M)\to H^{-1/2}(\partial M)$ by
$$\langle\Lambda_\gamma f,h\rangle=\int_M\gamma\,g(\nabla_gv_f,\nabla_g\overline{V_h})\,dV_g,$$
where $V_h\in H^1(M)$ is any extension of $h\in H^{1/2}(\partial M)$. The weak equation makes this value independent of the extension. For smooth data, under the boundary-density identification of the conjugate-linear dual, $\Lambda_\gamma f=\gamma\partial_{\nu_{\rm out}}v_f|_{\partial M}$; this is the full physical flux convention. When $M=\overline\Omega\subset\mathbb R^n$ with the Euclidean metric, this is the scalar Euclidean conductivity DN map.

For a real $q\in C^\infty(M)$ such that the only $w\in H_0^1(M)$ satisfying $(-\Delta_g+q)w=0$ weakly is $w=0$, let $u_f\in H^1(M)$ be the unique weak solution of $(-\Delta_g+q)u_f=0$ with trace $f$, whose existence follows from the nonresonant regularity lemma. Define the Schrödinger DN map $\Lambda_q:H^{1/2}(\partial M)\to H^{-1/2}(\partial M)$ by
$$\langle\Lambda_qf,h\rangle=\int_M\big(g(\nabla_gu_f,\nabla_g\overline{V_h})+qu_f\overline{V_h}\big)\,dV_g.$$
For smooth data, under the boundary-density identification of the conjugate-linear dual, this is $\partial_{\nu_{\rm out}}u_f|_{\partial M}$. Equality of these operators means equality on all of $H^{1/2}(\partial M)$, not equality for a restricted set of boundary inputs.

## Definition references

[[def-ip-sobolev-spaces-on-compact-riemannian-domain|Fixed-atlas Sobolev and trace spaces]]

[[lem-ip-conductivity-map-wellposedness|Positive conductivity weak solvability]]

[[lem-ip-smooth-manifold-elliptic-nonresonant-regularity|Schrodinger weak solvability under nonresonance]]

[[def-riemannian-metric-and-riemannian-manifold|Riemannian volume density]]

[[def-bounded-c-one-domain-boundary-charts-and-outward-normal|Outward unit normal]]

[[def-classical-normal-derivative|Classical normal derivative]]

[[def-riemannian-gradient|Riemannian gradient]]

[[def-laplace-beltrami-operator-as-trace-of-the-hessian|Laplacian convention]]

[[def-riemannian-volume-density|Riemannian density in Green's formula]]

[[thm-kernel-of-the-trace-is-w-one-p-zero|Zero trace is equivalent to H-zero]]

[[thm-lp-trace-operator-on-a-bounded-c-one-domain|Sobolev trace]]

[[thm-bounded-right-inverse-for-the-sobolev-trace|Boundary extension]]

[[thm-sobolev-gauss-green-formula-on-c-one-domains|Gauss-Green formula]]

[[thm-collar-neighborhood-theorem|Smooth boundary-data extension]]

## Facts & Assumptions

**Given:** AC and Countable Choice; the compact smooth Riemannian domain; positive smooth $\gamma$; a real smooth nonresonant $q$; and the weak solutions in the Definition.

[A1] [[def-axiom-of-choice]] is assumed by the Euclidean trace-kernel and Gauss-Green suppliers [F2, F5].

[A2] [[def-countable-choice]] is assumed by the local weak-solution, trace-lift, and collar suppliers [F3, F4, F6, F8].

[F1] [[def-ip-sobolev-spaces-on-compact-riemannian-domain]]: $H_0^1(M)$ is the closure of interior compactly supported smooth functions in a fixed finite chartwise $H^1$ norm; the trace is defined chartwise and the fixed finite atlas admits a smooth partition of unity.

[F2] [[thm-kernel-of-the-trace-is-w-one-p-zero]]: on a bounded Euclidean $C^1$ domain, an $H^1$ function has zero trace if and only if it belongs to the $H^1$ closure of compactly supported interior smooth functions.

[F3] [[lem-ip-conductivity-map-wellposedness]]: for each $H^{1/2}$ boundary value, the positive-conductivity weak solution exists uniquely, its weak equation vanishes on every $H_0^1$ test, and smooth boundary data with smooth forcing give a solution smooth up to the boundary.

[F4] [[lem-ip-smooth-manifold-elliptic-nonresonant-regularity]]: under the stated trivial Dirichlet-kernel condition, the Schrödinger weak solution is unique and smooth for smooth boundary data.

[F5] [[thm-sobolev-gauss-green-formula-on-c-one-domains]]: for smooth functions on a bounded Euclidean $C^1$ domain, integration by parts produces the outward-normal boundary term.

[F6] [[thm-bounded-right-inverse-for-the-sobolev-trace]]: each $H^{1/2}$ boundary datum has an $H^1$ extension in a smooth Euclidean chart; finite chart localization supplies such extensions on $M$.

[F7] [[lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts]]: multiplying by a smooth cutoff multiplies the trace by its boundary restriction, and flattening charts transport the trace to the Euclidean chart trace.

[F8] [[thm-collar-neighborhood-theorem]]: smooth boundary data extend smoothly into a collar by constant normal extension and a cutoff.

[F9] [[thm-lp-trace-operator-on-a-bounded-c-one-domain]]: the trace is a bounded map on $H^1$ and agrees with restriction for smooth functions.

[F10] [[thm-sharp-trace-theorem-for-w-one-p]]: in the fixed boundary charts the trace is bounded from $H^1$ into $H^{1/2}$, and the chartwise maps patch to the trace used in the Definition.

## Verification

**Given:** the data in the Definition and two $H^1$ extensions $V_h^{(1)},V_h^{(2)}$ of the same boundary datum $h$.

1.1 Their difference $W=V_h^{(1)}-V_h^{(2)}$ has zero trace. Localize $W$ by the fixed finite partition in [F1]. On each boundary chart, [F7] shows that the localized function has zero Euclidean trace after flattening; [F2] then approximates it in $H^1$ by compactly supported interior smooth functions. On interior charts, ordinary compactly supported mollification gives the same approximation. Pulling back and summing the finitely many approximations shows $W\in H_0^1(M)$. [A1, F1, F2, F7, given, construct]

2.1 For the conductivity pairing, [F3] gives $\int_M\gamma\,g(\nabla_gv_f,\nabla_g\overline W)\,dV_g=0$, since $W\in H_0^1(M)$. Therefore replacing $V_h^{(1)}$ by $V_h^{(2)}$ changes the displayed pairing by zero. For the Schrödinger pairing, the same argument with the weak equation in [F4] gives $\int_M(g(\nabla_gu_f,\nabla_g\overline W)+qu_f\overline W)\,dV_g=0$. Thus both definitions are independent of the chosen extension. For each $h$, choose a bounded lift $V_h$ by [F6]; Cauchy--Schwarz gives $|\langle\Lambda_\gamma f,h\rangle|\leq C\|v_f\|_{H^1}\|h\|_{H^{1/2}}$ and $|\langle\Lambda_q f,h\rangle|\leq C(1+\|q\|_\infty)\|u_f\|_{H^1}\|h\|_{H^{1/2}}$. Hence each pairing is a continuous conjugate-linear functional of $h$, as required for the anti-dual in [F1]. [A2, F1, F3, F4, F6, step 1.1, algebra]

3.1 By [F3] and [F4], smooth boundary data yield solutions smooth up to $\partial M$. For smooth test data $h$, choose a smooth collar extension $V_h$ by [F8]. In a boundary chart, write $\operatorname{div}_g(\gamma\nabla_gv)=|g|^{-1/2}\partial_i(|g|^{1/2}\gamma g^{ij}\partial_jv)$ and $\Delta_gu=|g|^{-1/2}\partial_i(|g|^{1/2}g^{ij}\partial_ju)$. Apply the Euclidean Gauss-Green identity [F5] to the coordinate fluxes; summing over the finite partition gives the Riemannian boundary flux, while artificial chart boundaries cancel and the density transforms to $dS_g$. For the conductivity equation it yields $$\langle\Lambda_\gamma f,h\rangle=\int_{\partial M}\gamma\,\partial_{\nu_{\rm out}}v_f\,\overline h\,dS_g,$$ since $\operatorname{div}_g(\gamma\nabla_gv_f)=0$. For the Schrödinger equation it yields $$\langle\Lambda_qf,h\rangle=\int_{\partial M}\partial_{\nu_{\rm out}}u_f\,\overline h\,dS_g,$$ since $(-\Delta_g+q)u_f=0$. The extensions required for the weak pairings exist by [F6], and smooth test extensions exist by [F8]. [A1, A2, F3, F4, F5, F6, F8, F9, algebra] ∎


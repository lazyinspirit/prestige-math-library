---
id: prop-gr-fx-thin-transport-invariance
kind: proposition
title: Connection transport is invariant under thin homotopy
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-fx-thin-paths
  - def-gr-fx-connection-path-transport
  - def-gr-fx-tetrad-spin-connection
  - lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval
  - thm-smooth-dependence-of-ode-solutions-on-parameters
  - def-based-loops-and-fundamental-group
  - thm-qftx-cw-fundamental-group-presentation
  - def-group-presentation
  - prop-normal-closure-is-products-of-conjugates
dependency_roles:
  def-gr-fx-thin-paths: mathematical-premise
  def-gr-fx-connection-path-transport: mathematical-premise
  def-gr-fx-tetrad-spin-connection: mathematical-premise
  lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval: mathematical-premise
  thm-smooth-dependence-of-ode-solutions-on-parameters: mathematical-premise
  def-based-loops-and-fundamental-group: mathematical-premise
  thm-qftx-cw-fundamental-group-presentation: mathematical-premise
  def-group-presentation: mathematical-premise
  prop-normal-closure-is-products-of-conjugates: mathematical-premise
physical_scope: null
sources:
  references:
    - title: "Urs Schreiber and Konrad Waldorf, Parallel Transport and Functors, arXiv:0705.0452, §2.1 and Appendix B.3"
      url: "https://arxiv.org/pdf/0705.0452"
      locator: "§2.1 defines thin homotopies; Appendix B.3 proves Proposition 4.3, deriving the curvature variation formula and thin-homotopy invariance of the parallel-transport holonomy map."
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, §3.3.3"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S3.html"
      locator: "§3.3.3 relates path dependence of parallel transport to curvature."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Under the assumptions of [[def-gr-fx-connection-path-transport]], if two piecewise-smooth paths $\gamma_0,\gamma_1:[0,1]\to U$ are thin-homotopic in the sense of [[def-gr-fx-thin-paths]], then $U_{\gamma_0}(1)=U_{\gamma_1}(1)$ in the fixed tetrad trivialization.

## Statement references

[[def-gr-fx-connection-path-transport]]

[[def-gr-fx-thin-paths]]

[[def-based-loops-and-fundamental-group]]

[[thm-qftx-cw-fundamental-group-presentation]]

[[def-group-presentation]]

[[prop-normal-closure-is-products-of-conjugates]]

## Facts & Assumptions

**Given:** A smooth matrix connection $\omega$ on $U$, a finite curvilinear-triangle subdivision of a fixed-endpoint thin homotopy $H$, and the path ODE of Definition [[def-gr-fx-connection-path-transport]].

[F1] [[def-gr-fx-thin-paths]]: a thin homotopy is piecewise smooth on finitely many curvilinear triangles, fixes the two path endpoints, and has differential rank at most one on every triangle.

[F2] [[def-gr-fx-connection-path-transport]]: along each smooth path segment, transport is the unique solution of $U'=-\omega(\dot\gamma)U$, with later transport multiplying on the left.

[F3] [[def-gr-fx-tetrad-spin-connection]]: $F=d\omega+\omega\wedge\omega$ is the curvature matrix two-form, and a Lorentz connection satisfies $\omega^{\mathsf T}\eta+\eta\omega=0$.

[F4] [[thm-smooth-dependence-of-ode-solutions-on-parameters]]: solutions of a smooth parameter-dependent finite-dimensional ODE depend smoothly on the parameter on a common compact interval.

[F5] [[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]: for a continuous matrix coefficient and arbitrary initial matrix, the linear matrix ODE has a unique solution on the given compact interval.

[F6] [[def-based-loops-and-fundamental-group]]: the fundamental group consists of based loops modulo endpoint-fixed path homotopy.

[F7] [[thm-qftx-cw-fundamental-group-presentation]]: a finite connected CW complex has the presentation with non-tree 1-cells as generators and 2-cell attaching loops as relators.

[F8] [[def-group-presentation]]: a presentation $\langle X\mid R\rangle$ is the quotient of the free group on $X$ by the normal closure of $R$.

[F9] [[prop-normal-closure-is-products-of-conjugates]]: the normal closure of a set is the set of finite products of conjugates of its elements and their inverses.

## Proof

**Proof technique:** direct.

1.1 On one closed curvilinear triangle $\Delta$ of the subdivision, pull the connection back by the smooth restriction of $H$ and write its two coefficient matrices as $A_s=\omega(H_s)$ and $A_t=\omega(H_t)$. For a smooth family of paths inside $\Delta$, let $U_t=-A_tU$, $U(s,0)=I$, and put $K=U_s+A_sU$. Smooth dependence in [F4] permits this differentiation, and [F5] gives uniqueness for the linear equation satisfied by $K$. The product rule gives $K_t+A_tK=-(\partial_sA_t-\partial_tA_s+[A_s,A_t])U=-H^*F(\partial_s,\partial_t)U$. Here [F3] identifies the pulled-back two-form as the curvature of the supplier connection. [given, F2, F3, F4, F5, algebra]

2.1 Since $\operatorname{rank}(dH)\le1$ on $\Delta$, $H_s,H_t$ are linearly dependent and the alternating two-form satisfies $H^*F(\partial_s,\partial_t)=F(H_s,H_t)=0$. Fix a vertex $q_0$ and join it to each $q\in\Delta$ by the image of the straight radial path in the standard-simplex parametrization. The associated transports $Q(q)$ exist globally by [F5] and depend smoothly on $q$: apply [F4] locally in the endpoint parameter and continue over finitely many subintervals of the compact path interval, using uniqueness on overlaps. For each radial path, [F3] and the ODE give $(Q^{\mathsf T}\eta Q)'=0$, hence $Q(q)^{\mathsf T}\eta Q(q)=\eta$ and $Q(q)$ is invertible. Step 1.1 on this radial family with fixed start gives $dQ=-H^*\omega\,Q$. Thus transport from $q_1$ to $q_2$ in $\Delta$ is $Q(q_2)Q(q_1)^{-1}$ by [F5], and the triangle boundary transport is identity. [given, F1, F2, F3, F4, F5, step 1.1, algebra]

3.1 The finite curvilinear-triangle subdivision is a finite connected CW complex $K$; choose the lower-left corner as basepoint and a maximal tree in its one-skeleton. The outer boundary loop contracts to that basepoint by the straight-line contraction of the parameter square, so [F6] makes its fundamental-group class the identity. By [F7], $\pi_1(K)$ has generators given by non-tree edge loops closed along the tree and relators given by based triangular face boundaries. For each free generator $x_e$, assign the inverse transport of its based edge loop and extend to a homomorphism $\Phi$ from the free group; [F2]'s path-composition law gives $\Phi(w)=U_w^{-1}$ for every edge word $w$. These transports are invertible because along each segment [F3] and the ODE give $(U^{\mathsf T}\eta U)'=-U^{\mathsf T}(\omega^{\mathsf T}\eta+\eta\omega)U=0$, hence $U^{\mathsf T}\eta U=\eta$; reversing the ODE gives $U_{\bar\alpha}=U_\alpha^{-1}$. A based face relator is a tree path, a triangular boundary and the reverse tree path, so step 2.1 makes its transport and its $\Phi$-image the identity. The boundary word is identity in the presentation by [F6]–[F8], and [F9] writes it as a finite product of conjugates of face relators and their inverses; all of these map to $I$, so $U_\lambda=I$. The side edges of the square are constant by fixed endpoints, giving $U_\lambda=U_{\gamma_1}^{-1}U_{\gamma_0}$ and $U_{\gamma_0}(1)=U_{\gamma_1}(1)$. [given, F1, F2, F3, F6, F7, F8, F9, step 2.1, algebra] ∎
---
id: thm-local-gauss-bonnet-for-an-arbitrary-disk-region
kind: theorem
title: Local Gauss-Bonnet for an arbitrary disk region
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - thm-euler-poincare-formula-for-finite-cw-complexes
  - def-regular-oriented-surface-region-with-piecewise-smooth-boundary
  - thm-local-gauss-bonnet-for-a-frameable-disk-region
  - lem-finite-frameable-decomposition-of-a-regular-disk-region
  - def-signed-exterior-angle-at-a-piecewise-smooth-corner
  - prop-geodesic-curvature-under-orientation-and-parameter-reversal
justified_by: []
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, Theorem 9.3 and the discussion preceding Theorem 9.7, printed pp. 162-169 (PDF pp. 179-186)."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, Theorem 2.0.1, printed pp. 10-13 (PDF pp. 17-20)."
---

## Statement

Assume the axiom of choice. Let $(M,g,J)$ be an oriented Riemannian surface and let $D\subseteq M$ be a
compact regular oriented disk region with finitely many ordinary corners, of
the kind fixed by
[[def-regular-oriented-surface-region-with-piecewise-smooth-boundary]]. Then

$$\int_DK\,dA+\int_{\partial D}k_g\,ds+\sum_{j=1}^m\alpha_j=2\pi ,$$

where $k_g$ is the signed geodesic curvature of the positively oriented
boundary and $\alpha_1,\dots,\alpha_m$ are its signed exterior angles. No
global orthonormal frame on a neighbourhood of $D$ is required, and the
full-choice assumption is inherited from the frameable decomposition and
the frameable disk formula.

## Facts & Assumptions

**Given:** An oriented Riemannian surface and a compact regular oriented disk region with finitely many ordinary corners.

[F1] $D$ admits a finite face-to-face subdivision into regular disk pieces $D_1,\dots,D_F$ such that each piece lies in an oriented coordinate chart of $M$ and carries a smooth positive orthonormal frame, with only ordinary corners. Every new edge is piecewise smooth, and the relative interior of each new non-boundary edge lies in $\operatorname{Int}D$; its endpoints may lie on $\partial D$ ([[lem-finite-frameable-decomposition-of-a-regular-disk-region]]).

[F2] For a positively oriented compact regular disk region with ordinary corners carrying a smooth positive orthonormal frame on a neighbourhood, $\int_DK\,dA+\int_{\partial D}k_g\,ds+\sum_j\alpha_j=2\pi$ ([[thm-local-gauss-bonnet-for-a-frameable-disk-region]]).

[F3] At a positively oriented boundary corner with interior sector angle $\beta\in(0,2\pi)$, the signed exterior angle is $\alpha=\pi-\beta$ ([[def-signed-exterior-angle-at-a-piecewise-smooth-corner]]).

[F4] Reversing the parameter of a regular $C^2$ unit-speed curve changes the sign of its signed geodesic curvature at every point ([[prop-geodesic-curvature-under-orientation-and-parameter-reversal]]).

[F5] The finite triangular data of [F1] form a regular CW structure on the closed disk $D$, so $V-E+F=\sum_j(-1)^j\operatorname{rank}H_j(D;\mathbb Z)=1$ because a disk is contractible ([[thm-euler-poincare-formula-for-finite-cw-complexes]], [[lem-finite-frameable-decomposition-of-a-regular-disk-region]]).

## Proof

**Proof technique:** apply the frameable formula to each piece of the finite frameable decomposition, cancel internal edges, count vertices with the planar disk identity, and read off the boundary terms.

1.1 Apply [F1] to obtain the finitely many regular disk pieces $D_i$, each contained in an oriented chart of $M$ and carrying a smooth positive orthonormal frame on a neighbourhood; the pieces are face-to-face, all corners are ordinary, and the subarcs of $\partial D$ appear as boundary sides of the pieces. [F1, given]

2.1 Every piece $D_i$ is a compact regular oriented disk region with ordinary corners carrying a smooth positive orthonormal frame on a neighbourhood, so [F2] applies to it: $\int_{D_i}K\,dA+\int_{\partial D_i}k_g\,ds+\sum_v\alpha^{(i)}_v=2\pi$, the sum being over the piece's corners. [F1, F2, step 1.1]

3.1 Summing step 2.1 over the finitely many pieces and using additivity of the area integral over the face-to-face decomposition gives $2\pi F=\int_DK\,dA+\sum_i\int_{\partial D_i}k_g\,ds+\sum_i\sum_v\alpha^{(i)}_v$. [step 2.1, algebra]

4.1 Each internal edge of the decomposition is incident with exactly two pieces and is traversed by them in opposite directions, because both pieces inherit the orientation of $D$; by [F4] the two signed curvature integrals over that edge cancel. Each subarc of $\partial D$ is incident with exactly one piece and carries the positive boundary orientation, so the surviving edge integral is $\int_{\partial D}k_g\,ds$. [F1, F4, step 3.1]

5.1 At every decomposition vertex $v$ let $m_v$ be the number of piece corners at $v$ and $\beta^{(i)}_v\in(0,2\pi)$ the interior angle of the corresponding piece; by [F3] the piece contributes $\alpha^{(i)}_v=\pi-\beta^{(i)}_v$. Summing over all piece corners gives $\sum_i\sum_v\alpha^{(i)}_v=\pi\sum_vm_v-\bigl(2\pi V_{\mathrm{int}}+\pi V_{\mathrm{bd}}^{\mathrm{sub}}+\sum_j\beta_j^{\mathrm{orig}}\bigr)$, where $V_{\mathrm{int}}$ counts interior vertices, $V_{\mathrm{bd}}^{\mathrm{sub}}$ counts boundary vertices subdividing smooth boundary arcs, and $\beta_j^{\mathrm{orig}}$ are the interior angles at the original corners of $D$. In a face-to-face decomposition into disk cells $\sum_vm_v=2E_{\mathrm{int}}+E_{\mathrm{bd}}$ and $E_{\mathrm{bd}}=V_{\mathrm{bd}}=V_{\mathrm{bd}}^{\mathrm{sub}}+m$ for the number $m$ of original corners, so $\sum_i\sum_v\alpha^{(i)}_v=\sum_j\alpha_j^{\mathrm{orig}}+2\pi(E_{\mathrm{int}}-V_{\mathrm{int}})$. [F1, F3, step 4.1, algebra]

6.1 The finite CW count of [F5] applies to the decomposition: $V-E+F=1$. Since boundary edges and boundary vertices occur in equal numbers, this reads $V_{\mathrm{int}}-E_{\mathrm{int}}+F=1$, equivalently $F-E_{\mathrm{int}}+V_{\mathrm{int}}=1$. [F1, F5, step 5.1]

7.1 Substituting steps 4.1, 5.1 and 6.1 into step 3.1 gives $2\pi F=\int_DK\,dA+\int_{\partial D}k_g\,ds+\sum_j\alpha_j^{\mathrm{orig}}+2\pi E_{\mathrm{int}}-2\pi V_{\mathrm{int}}$, hence $\int_DK\,dA+\int_{\partial D}k_g\,ds+\sum_j\alpha_j=2\pi(F-E_{\mathrm{int}}+V_{\mathrm{int}})=2\pi$. [step 3.1, step 4.1, step 5.1, step 6.1, algebra] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, Theorem 9.3 together with the reduction preceding Theorem 9.7, printed pp. 162-169, proves the local formula first for a region contained in a chart and then passes to general regions; Datar, *Lectures on Riemannian Geometry*, Lecture 2, Theorem 2.0.1, printed pp. 10-13, gives the same computation. The reduction is carried out here through the library's finite frameable decomposition [[lem-finite-frameable-decomposition-of-a-regular-disk-region]], the internal-edge cancellation, the corner bookkeeping and the disk Euler count of [[lem-finite-planar-graph-disk-cuts-and-euler-count]].

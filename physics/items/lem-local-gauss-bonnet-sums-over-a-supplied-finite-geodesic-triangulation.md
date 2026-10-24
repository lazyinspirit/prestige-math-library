---
id: lem-local-gauss-bonnet-sums-over-a-supplied-finite-geodesic-triangulation
kind: lemma
title: Summing local Gauss-Bonnet over a supplied triangulation
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - thm-local-gauss-bonnet-for-a-frameable-disk-region
  - def-curvilinear-triangulation-of-a-compact-surface
  - def-regular-oriented-surface-region-with-piecewise-smooth-boundary
  - def-signed-exterior-angle-at-a-piecewise-smooth-corner
  - prop-geodesic-curvature-under-orientation-and-parameter-reversal
  - def-riemannian-volume-density
  - thm-density-integration-is-defined-without-an-orientation
justified_by: []
landmark: false
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
      locator: "Chapter 9, printed pp. 162-172 (PDF pp. 178-188): Theorem 9.3 is summed over the faces of a triangulation in the proof of Theorem 9.7, with the interior-edge and vertex-angle bookkeeping giving the Euler count."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, Section 2.2, printed pp. 13-15 (PDF pp. 20-22): the global Gauss-Bonnet proof by summing the local formula over a triangulation."
---

## Statement

Assume the axiom of choice. Let $(M,g,J)$ be a compact oriented Riemannian surface region with finitely
many ordinary corners in the sense of
[[def-regular-oriented-surface-region-with-piecewise-smooth-boundary]], and let
$\mathcal T=(V,E,F,\phi)$ be finite face-to-face triangular face, edge, and
link data on $M$, satisfying the clauses of
[[def-curvilinear-triangulation-of-a-compact-surface]] wherever $M$ has smooth
boundary and using its analogous sector charts at the prescribed corners,
whose closed faces are compact regular
oriented disk regions with ordinary corners, each lying in a frameable chart,
and whose face orientations agree with the orientation of $M$. Then
$$\int_MK\,dA+\int_{\partial M}k_g\,ds+\sum_v\alpha_v=2\pi\,(V-E+F),$$
where $k_g$ is the signed geodesic curvature of the positively oriented
boundary, the sum runs over the corners of $\partial M$ with signed exterior
angles $\alpha_v$, and $V,E,F$ count the vertices, edges and faces of
$\mathcal T$.

Under the same choice assumption, if instead $M$ is closed, possibly nonorientable, and $\mathcal T$ is a finite
curvilinear triangulation of $M$ whose faces are frameable compact regular disk
regions with ordinary corners, each face being given an arbitrary orientation, then
$$\int_MK\,\mu_g=2\pi\,(V-E+F).$$
The two statements are the oriented boundary case and the orientation-free
closed case of the same face-by-face summation; no global orientation is used
in the second.

## Facts & Assumptions

**Given:** Full AC through the local disk formula; a compact oriented regular surface region with a finite curvilinear triangulation whose face orientations agree with the surface orientation, or a closed possibly nonorientable surface with a finite curvilinear triangulation whose faces have arbitrary orientations ([[def-axiom-of-choice]]).

[F1] A curvilinear triangulation is finite face-to-face data with each face map a homeomorphism from the closed reference triangle onto a closed triangular disk, three distinct vertices per face, every interior edge incident with exactly two faces and every boundary edge with exactly one, and vertex links a circle in the interior and a closed interval with the two boundary edge germs at the endpoints on the boundary ([[def-curvilinear-triangulation-of-a-compact-surface]]).

[F2] For a positively oriented compact regular disk region with ordinary corners carrying a smooth positive orthonormal frame on a neighbourhood, $\int_DK\,dA+\int_{\partial D}k_g\,ds+\sum_j\alpha_j=2\pi$ ([[thm-local-gauss-bonnet-for-a-frameable-disk-region]]).

[F3] A region corner of a positively oriented regular region with interior sector angle $\beta\in(0,2\pi)$ has signed exterior angle $\alpha=\pi-\beta$; a boundary point that is not a corner has interior angle $\pi$ and exterior angle $0$ ([[def-regular-oriented-surface-region-with-piecewise-smooth-boundary]], [[def-signed-exterior-angle-at-a-piecewise-smooth-corner]]).

[F4] On an oriented face the signed geodesic curvature is $g(\nabla_TT,JT)$; when face orientation reverses, its induced boundary tangent and $J$ both reverse, so this boundary curvature is unchanged. Adjacent faces have opposite inward conormals on a common edge, hence their contributions cancel ([[prop-geodesic-curvature-under-orientation-and-parameter-reversal]]).

[F5] The Riemannian volume density $\mu_g$ is defined without a choice of orientation; the positive area measure of a disk face, for either chosen orientation, is its restriction ([[def-riemannian-volume-density]]).

[F6] Compactly supported smooth density integration is linear and local, so an integral against $\mu_g$ over a finite face-to-face decomposition is the sum of the integrals over the faces ([[thm-density-integration-is-defined-without-an-orientation]]).


## Proof

**Proof technique:** apply the frameable disk formula to every face, cancel the interior edge integrals, count the vertex angle excesses, and reduce the constants by the incidence identities of the triangulation.

1.1 Every closed face $f$ of $\mathcal T$ is a compact regular oriented disk region with ordinary corners, contained in a frameable chart, so [F2] applies with its selected face orientation: $\int_fK\,dA+\int_{\partial f}k_g\,ds+\sum_{c}\alpha_c=2\pi$, the sum being over the three corners $c$ of $f$. [F2, given]

1.2 Each face has three distinct vertices and three sides, each interior edge has exactly two incident faces and each boundary edge exactly one, the link circle at an interior vertex is partitioned into its incident face corners, and at a boundary vertex exactly two boundary edge germs occur. Hence: the number $m_v$ of face corners at $v$ satisfies $\sum_vm_v=3F$; the face-edge incidences satisfy $3F=2E_{\mathrm{int}}+E_{\mathrm{bd}}$; and the boundary incidences satisfy $E_{\mathrm{bd}}=V_{\mathrm{bd}}$ because along each boundary circle boundary edges and boundary vertices alternate, each boundary vertex being incident with exactly two boundary edges. [F1, given]

1.3 At a vertex $v$ the closed face sectors at $v$ tile a neighbourhood of $v$ in $M$ with pairwise disjoint open sectors: if $v\in\operatorname{Int}M$ the sectors fill a full disk and their interior angles sum to $2\pi$; if $v\in\partial M$ they fill exactly the sector of $M$ at $v$, so their interior angles sum to the interior angle $\beta^M_v$ of $M$ at $v$, which equals $\pi$ when $v$ is not a corner of $\partial M$. Since each face corner at $v$ contributes exterior angle $\pi-\beta$ by [F3], summing over faces gives $\sum_f\sum_c\alpha_c=\pi\sum_vm_v-2\pi V_{\mathrm{int}}-\sum_{v\in\partial M}\beta^M_v$, and $\sum_{v\in\partial M}\beta^M_v=\pi V_{\mathrm{bd}}-\sum_v\alpha_v$ by the corner identity [F3]. [F1, F3, given]

2.1 The area integrals add: $\sum_{f\in F}\int_fK\,dA=\int_MK\,dA$. The face boundary integrals cancel on interior edges: an interior edge is incident with exactly two faces, whose orientations agree with the orientation of $M$, so it is traversed by their induced boundary orientations in the two opposite directions, and [F4] makes the two signed curvature integrals sum to zero; each boundary edge contributes its subarc of $\partial M$ with the positive boundary orientation of $M$, so $\sum_{f}\int_{\partial f}k_g\,ds=\int_{\partial M}k_g\,ds$. [F1, F4, step 1.1, given]

3.1 Summing the equations of step 1.1 over the $F$ faces and substituting steps 1.2, 1.3 and 2.1 gives $2\pi F=\int_MK\,dA+\int_{\partial M}k_g\,ds+3\pi F-2\pi V_{\mathrm{int}}-\pi V_{\mathrm{bd}}+\sum_v\alpha_v$. [step 1.1, step 1.2, step 1.3, step 2.1, algebra]

4.1 The incidence identities give $2E=2E_{\mathrm{int}}+2E_{\mathrm{bd}}=(3F-E_{\mathrm{bd}})+2E_{\mathrm{bd}}=3F+V_{\mathrm{bd}}$, so $2\pi(V-E+F)=2\pi V_{\mathrm{int}}+2\pi V_{\mathrm{bd}}-\pi(3F+V_{\mathrm{bd}})+2\pi F=2\pi V_{\mathrm{int}}+\pi V_{\mathrm{bd}}-\pi F$. Rearranging step 3.1 therefore yields $\int_MK\,dA+\int_{\partial M}k_g\,ds+\sum_v\alpha_v=2\pi(V-E+F)$. [step 1.2, step 3.1, algebra]

5.1 For the closed nonorientable case, orient each face arbitrarily. Its positively oriented area measure is $\mu_g$ by [F5], so step 1.1 applies to every face. On a common interior edge the two inward conormals $JT$ of its incident faces point to opposite sides, independently of their chosen orientations: reversing one face orientation reverses both $J$ and its positive boundary tangent $T$. Thus $g(\nabla_TT,JT)$ has opposite values on the two sides and the integrals cancel by [F4]. There are no boundary edges, so summing gives $\int_MK\,\mu_g=2\pi F+\bigl(2\pi V-\pi\sum_vm_v\bigr)$ with $\sum_vm_v=3F$ and $2E=3F$, hence $\int_MK\,\mu_g=2\pi(V-E+F)$, where the replacement of the facewise density integrals by the integral over $M$ is [F6]. This proves both statements. [F4, F5, F6, step 1.1, step 4.1, algebra] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, printed pp. 162-172, sums the local formula of Theorem 9.3 over the triangles of a triangulation in the proof of Theorem 9.7; the cancellation of interior edge integrals and the reduction of the angle sums to the vertex count are the steps reproduced here. Datar, *Lectures on Riemannian Geometry*, Lecture 2, Section 2.2, printed pp. 13-15, carries out the same summation. The incidence identities $3F=2E_{\mathrm{int}}+E_{\mathrm{bd}}$ and $E_{\mathrm{bd}}=V_{\mathrm{bd}}$ and the corner bookkeeping are checked here against the library definitions [[def-curvilinear-triangulation-of-a-compact-surface]] and [[def-regular-oriented-surface-region-with-piecewise-smooth-boundary]]; in the nonorientable case the orientation-free density of [[def-riemannian-volume-density]] replaces the global area form.

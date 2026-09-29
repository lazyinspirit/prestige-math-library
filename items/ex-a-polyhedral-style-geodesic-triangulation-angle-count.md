---
id: ex-a-polyhedral-style-geodesic-triangulation-angle-count
kind: example
title: Finite triangulation angle bookkeeping
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - lem-local-gauss-bonnet-sums-over-a-supplied-finite-geodesic-triangulation
  - def-euler-characteristic-of-a-finitely-triangulated-compact-surface
  - def-curvilinear-triangulation-of-a-compact-surface
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, printed pp. 167-172 (PDF pp. 183-188): the local-to-global count of the global Gauss-Bonnet proof is a finite vertex-edge-face bookkeeping."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, Section 2.2, printed pp. 13-15 (PDF pp. 20-22): the incidence identities 3F=2E and the vertex angle count in the global summation."
---

## Example

For the tetrahedral combinatorial pattern $V=4$, $E=6$, $F=4$, the incidence
identity $3F=2E$ holds and the Euler expression is
$2\pi(V-E+F)=4\pi$. If this pattern is equipped with face-corner angles from
a smooth closed surface triangulation, the angles around each vertex sum to
$2\pi$; then the total exterior-angle correction is
$3\pi F-2\pi V=4\pi$, leaving $2\pi F-4\pi=4\pi$ in the local-to-global
count. The incidence pattern alone supplies no angle measurements or
curvature integral.

## Facts & Assumptions

**Given:** The finite combinatorial data of a closed triangulation with four vertices, six edges and four triangular faces, each vertex incident with three face corners, each edge incident with two faces, and each face bounded by three distinct edges.

[F1] For a curvilinear triangulation of a compact surface, the number $m_v$ of face corners at a vertex satisfies $\sum_vm_v=3F$, the face-edge incidences satisfy $3F=2E_{\mathrm{int}}+E_{\mathrm{bd}}$, and boundary incidences satisfy $E_{\mathrm{bd}}=V_{\mathrm{bd}}$; in the closed case these reduce to $\sum_vm_v=3F=2E$ ([[def-curvilinear-triangulation-of-a-compact-surface]]).

[F2] Under full AC, the supplied local-to-global lemma applies to a closed oriented Riemannian surface with a finite face-to-face geodesic triangulation whose faces are compact regular oriented disks in frameable charts, and gives $\int_MK\,dA=2\pi(V-E+F)$; the incident face angles sum to $2\pi$ at each interior vertex ([[lem-local-gauss-bonnet-sums-over-a-supplied-finite-geodesic-triangulation]]).

[F3] For a curvilinear triangulation of a compact surface the Euler characteristic of the triangulated surface is $\chi(M;\mathcal T)=V-E+F$ ([[def-euler-characteristic-of-a-finitely-triangulated-compact-surface]]).

## Verification

**Proof technique:** enumerate the incidences of the tetrahedral pattern, count the vertex angles and substitute into the finite local-to-global identity.

1.1 In the given pattern $V=4$, $E=6$ and $F=4$; every edge is interior and incident with two faces, so counting face-edge incidences gives $3F=12=2E$, and counting face corners gives $\sum_vm_v=3F=12$, compatible with three corners at each of the four vertices. Hence $V-E+F=4-6+4=2$. [F1, F3, given]

2.1 For the conditional angle count, suppose face-corner angles $\beta_c$ are supplied and satisfy the smooth closed-surface normalization $\sum_{c\ni v}\beta_c=2\pi$ at each of the four vertices. This is additional geometric data, not a consequence of the incidence pattern. With exterior angles $\alpha_c=\pi-\beta_c$, there are $3F$ face corners by [F1], so $\sum_f\sum_c\alpha_c=3\pi F-\sum_v2\pi=12\pi-8\pi=4\pi$. [F1, step 1.1, algebra]

3.1 Under the angle normalization in step 2.1, the formal remainder is $2\pi F-\sum_f\sum_c\alpha_c=8\pi-4\pi=4\pi$. Since $3F=2E$ and $V=4$, this is $2\pi(V-E+F)$. If AC and a smooth oriented Riemannian realization with a supplied finite geodesic triangulation satisfying [F2]'s hypotheses were separately supplied, [F2] would identify this count with its curvature integral. The combinatorial pattern alone supplies neither the angle normalization nor a Riemannian surface, so it asserts no curvature integral. [F2, F3, step 1.1, step 2.1, algebra] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, printed pp. 167-172, reduces the global theorem to the vertex-edge-face count for a finite triangulation; Datar, *Lectures on Riemannian Geometry*, Lecture 2, Section 2.2, printed pp. 13-15, uses the same incidence identities. The tetrahedral enumeration is carried out here purely as finite arithmetic against the conventions of [[def-curvilinear-triangulation-of-a-compact-surface]] and the count of [[lem-local-gauss-bonnet-sums-over-a-supplied-finite-geodesic-triangulation]], with no geometric realization claimed.

---
id: ex-dual-handle-presentations-of-a-genus-g-surface
kind: example
title: "Dual handle presentations of a genus-g surface"
status: draft
origin: pipeline
dependency_level: 5
deps: [def-dual-handle-decomposition, thm-handle-duality-from-negating-a-morse-function, thm-morse-functions-and-handle-decompositions-correspond, cor-index-zero-handles-create-components, cor-index-n-handles-cap-boundary-spheres, thm-every-smooth-manifold-admits-a-riemannian-metric, thm-morse-lemma, lem-manifold-bump-for-a-compact-set-inside-an-open-set, thm-compactly-supported-vector-fields-are-complete]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156), Sections 5.1-5.4, printed pp. 129-148"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow), Sections 2-4, printed pp. 10-48"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
proof_strategy: "standard height function and index exchange"
---

## Example

Assume $\mathrm{AC}_\omega$. The closed orientable surface $\Sigma_g$ has a presentation with one $0$-handle,
$2g$ $1$-handles and one $2$-handle. Its dual presentation has one $0$-handle
(the dual of the original $2$-handle), $2g$ $1$-handles (self-dual) and one
$2$-handle (the dual of the original $0$-handle); for $g=0$ the dual
presentation of the two-handle sphere is the same pair of handles read in
reverse order. The example verifies the index exchange $k\leftrightarrow2-k$ of
the duality theorem in the surface case.


## Facts & Assumptions

**Given:** $g\ge0$ and $\mathrm{AC}_\omega$; construct $\Sigma_g$ by successively adding $g$ punctured-torus pieces to a disk and capping the remaining boundary.

[F1] [[thm-morse-functions-and-handle-decompositions-correspond]]: Assume $\mathrm{AC}_\omega$. An adapted excellent Morse function on a compact triad determines a handle decomposition relative to the incoming face with exactly one handle of index $\operatorname{ind}(p)$ per critical point; conversely each finite handle presentation is realized by an adapted excellent function of the same handle indices.

[F2] [[cor-index-zero-handles-create-components]] and [[cor-index-n-handles-cap-boundary-spheres]]: a $0$-handle attaches along the empty set and adds a disjoint $n$-disk; a $2$-handle on a surface attaches along a circle and caps it.

[F3] [[def-dual-handle-decomposition]]: the dual of a presentation relative to $M_0$ is the presentation of the reversed triad relative to $M_1$ with the same handle bodies and exchanged disk factors, in reverse order; a $k$-handle becomes an $(n-k)$-handle and attaching and belt spheres are interchanged.

[F4] [[thm-handle-duality-from-negating-a-morse-function]]: Assume $\mathrm{AC}_\omega$. If $f$ is adapted excellent on a compact triad then $1-f$ is adapted excellent on the reversed triad with indices $n-\operatorname{ind}(p)$ at the same critical points, and its handle decomposition is the dual one.


[F8] Under $\mathrm{AC}_\omega$, [[thm-every-smooth-manifold-admits-a-riemannian-metric]] supplies a background metric, [[thm-morse-lemma]] supplies the quadratic critical charts, [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]] supplies finite chart cutoffs, and [[thm-compactly-supported-vector-fields-are-complete]] makes a compactly supported smooth field on a boundaryless carrier complete.


## Verification

**Proof technique:** direct.

1.1 Start with a disk. In each of $g$ repetitions, attach an orientable band along two arcs of the current single boundary circle so that the boundary splits into two circles; attach a second orientable band between these two circles. The boundary is again one circle and the surface has acquired one punctured-torus piece. This is the usual genus-$g$ orientable surface with one disk removed. Capping its final circle gives $\Sigma_g$, using exactly one disk, $2g$ bands and one cap. [F2, given, construct]

2.1 Read the disk, the bands and the cap as handles of indices $0,1,2$. By [F1] the resulting finite handle presentation is realized by an adapted excellent $h:\Sigma_g\to[0,1]$ with one minimum, $2g$ saddles of distinct values and one maximum. No arbitrary embedded height function is being assumed excellent or already in the adapted range. For $g=0$ the construction is two disks glued along their circle. [F1, F2, step 1.1, construct]

3.1 Patch a background metric from [F8] to Euclidean metrics in smaller disjoint Morse charts of the realizing function of step 2.1, using the finite chart cutoffs. Its negative gradient is strictly descending off the critical points and equals $(2u,-2v)$ in these charts. It is complete by [F8] because the closed surface is compact. Thus it is an adapted field, and [F4] applies to this pair. The negated function $1-h$ is adapted excellent with the same $2g+2$ critical points, and the indices are exchanged by $k\mapsto2-k$: the maximum of $h$ has index $0$ for $1-h$, the $2g$ saddles keep index $1$, and the minimum of $h$ has index $2$ for $1-h$ (this is the general fact that negating a function changes the index of a nondegenerate critical point from $k$ to $n-k$, here $n=2$). By [F1] applied to $1-h$, the dual presentation has one $0$-handle, $2g$ $1$-handles and one $2$-handle. [F1, F4, F8, step 2.1, algebra]

4.1 Identify the handles of the two presentations through [F3]: the dual $0$-handle is the original $2$-handle, the $2g$ one-handles are self-dual since $2-1=1$, and the dual $2$-handle is the original $0$-handle; the order of attachment is reversed and attaching and belt spheres are interchanged. For $g=0$ this says that the dual presentation of the sphere's two-handle presentation is the same pair of handles read in reverse order, which agrees with the explicit picture of two disks glued along their boundary circle. [F3, F4, step 2.1, step 3.1, algebra]

5.1 The index exchange is verified in every surface degree: $0\leftrightarrow2$ and $1\leftrightarrow1$, so no handle of the dual presentation has an index outside $\{0,1,2\}$ and the numbers of handles of each index are $1,2g,1$ in both presentations. This is exactly the surface case of the duality theorem. [F1, F3, step 4.1, algebra] ∎

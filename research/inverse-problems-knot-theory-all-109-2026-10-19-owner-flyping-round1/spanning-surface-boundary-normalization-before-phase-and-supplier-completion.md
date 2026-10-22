---
id: lem-spanning-surfaces-can-match-boundary-framings-and-separate-their-collars
kind: lemma
title: "Spanning surfaces can match boundary framings and separate their collars"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-normal-transfer-linking-defines-a-symmetric-surface-pairing
  - lem-small-crosscap-addition-preserves-corrected-normal-signature
  - def-one-variable-alexander-module-of-an-oriented-link
  - lem-seifert-pairing-well-defined
  - thm-euclidean-inverse-function-theorem
  - thm-isotopy-extension
  - thm-parametric-transversality
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from normal-transfer linking, componentwise positive-meridian linking and the explicit crosscap supplier. It implies countable choice for supported isotopy extension and parametric transversality."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "C. McA. Gordon and R. A. Litherland, On the Signature of a Link, Inventiones Mathematicae 47 (1978), 53–69, Theorem 11 Proof I and Proof II, printed pp.66–67"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0047/PPN356556735_0047.pdf"
---

## Statement

Assume full AC. Let $F_0,F_1\subset S^3$ be connected compact smooth spanning surfaces for the same nonempty link $L=K_1\cup\cdots\cup K_m$, with supplied finite smooth disk-and-band presentations; neither surface need be orientable. Write $f_i(F)$ for the self-linking of a component $K_i$ with its small surface-normal push, both oriented compatibly. For arbitrary component orientations,
$$f_i(F)\equiv\sum_{j\ne i}\operatorname{lk}(K_i,K_j)\pmod2.$$
In particular $f_i(F_1)-f_i(F_0)$ is even for every $i$.

By finitely many small separated crosscap additions of either sign and ambient isotopies, applied to $F_0$ and preserving its boundary link type, one obtains a connected surface $F_0^*$ with boundary literally $L$, with the same component framings as $F_1$, and with its interior disjoint from that of $F_1$ in a neighborhood of $L$. Its remaining interior intersection with the original comparison surface $F_1$ is transverse and is a finite disjoint union of embedded circles. These operations preserve $\operatorname{sign}(B_{F_0})+e(F_0)/2$, where $e(F)=-\sum_i f_i(F)$. Labels and orientations of the boundary components are transported. This is a boundary-collar normalization, not a claim that the two entire spanning surfaces are related by these moves alone.

## Statement references

[[def-axiom-of-choice]]

[[lem-normal-transfer-linking-defines-a-symmetric-surface-pairing]]

[[lem-small-crosscap-addition-preserves-corrected-normal-signature]]

## Facts & Assumptions

**Given:** Full AC and the two connected compact finitely presented spanning surfaces for the same nonempty smooth link.

[F1] Positive-meridian linking is a homomorphism on complement homology, its meridian value is one, and linking is symmetric and bilinear on disjoint oriented cycles. ([[def-one-variable-alexander-module-of-an-oriented-link]], [[lem-seifert-pairing-well-defined]])

[F2] A separated product boundary sum with the explicit signed small Möbius band changes the normal pairing by an orthogonal $[\epsilon]$, changes $e$ by $-2\epsilon$, preserves the boundary link type, and leaves all other boundary components and their collars unchanged. ([[lem-small-crosscap-addition-preserves-corrected-normal-signature]])

[F3] The normal-transfer pairing is invariant under orientation-preserving ambient isotopies and is defined for all the supplied finite disk-and-band surfaces. ([[lem-normal-transfer-linking-defines-a-symmetric-surface-pairing]])

[F4] The inverse function theorem supplies local inverses; the derivative formula upgrades the inverse to smooth for a smooth map. ([[thm-euclidean-inverse-function-theorem]])

[F5] An isotopy of a compact smooth surface with boundary in $S^3$ extends to an ambient isotopy, with any prescribed open neighborhood of its compact track as support. ([[thm-isotopy-extension]])

[F6] Full AC implies countable choice, and a finite-dimensional family transverse to a target submanifold has transverse slices outside a null parameter set. ([[thm-choice-implies-dependent-implies-countable-choice]], [[thm-parametric-transversality]])

## Proof

1.1 Choose a small normal push $K_i'$ disjoint from the whole surface $F$. Triangulate its finite disk-and-band presentation and choose arbitrary reference orientations on its finitely many triangles. Their sum modulo two is a fundamental two-chain with boundary the sum of the boundary circles modulo two. Lift that two-chain to an integral chain $C$ in $S^3\setminus K_i'$ by using the chosen triangle orientations, and orient the boundary circles as prescribed in the Statement. Then $\partial C-\sum_j K_j=2z$ for an integral one-chain $z$. Its boundary is zero, because $2\partial z=0$ and singular chain groups have no integer torsion. Applying the linking homomorphism with $K_i'$ from [F1] gives $0=\sum_j\operatorname{lk}(K_i',K_j)+2\operatorname{lk}(K_i',z)$. This use on $z$ is on complement homology and does not require it to be embedded. For $j\ne i$ the small push is homotopic to $K_i$ in the complement of $K_j$. The $i$th term is $f_i(F)$ by symmetry. Reduction modulo two proves the stated parity formula, independently of the orientability of $F$. [given, F1, construct, algebra]

1.2 A smooth boundary circle has an oriented normal disk bundle with a smooth trivialization. One may construct it on a cut parameter interval using finitely many normal frames, then correct the endpoint rotation by a smooth angle interpolation so that the frames glue; the oriented two-plane rotation group is connected. The normal exponential chart is injective at a sufficiently small uniform radius by [F4] and compactness, as in the normal-transfer construction. In these coordinates a nowhere-zero transverse vector along the circle has an angular lift on the cut interval, whose endpoint difference is $2\pi$ times an integer. Its small pushed curve is a longitude plus that many positive meridians. By [F1] its self-linking is the self-linking of the reference longitude plus this integer. In particular two such fields have the same self-linking precisely when their angular lifts differ by a periodic smooth function. Surface inward conormals and surface normals along an oriented boundary circle differ by a fixed quarter-turn in its oriented normal plane. They therefore have the same integer and the same self-linking. These assertions concern boundary collars only and do not orient the whole surface. [given, F1, F4, construct]

2.1 By step 1.1 the difference $d_i=f_i(F_1)-f_i(F_0)$ is even. If $d_i\ne0$, add $|d_i|/2$ crosscaps of sign $\epsilon=\operatorname{sign}(d_i)$ to that component of $F_0$, using [F2]. Each increases that component's self-linking by $2\epsilon$: the total Euler change is $-2\epsilon$, and the other component self-linkings are unchanged. Such a small separated attachment is available in a boundary chart, placing its Möbius band in a small ball off the surface and joining through a product collar of the chosen boundary arc. After each attachment use the local boundary-link isotopy in [F2] to return the boundary to the original $L$; linking and framings are transported by that isotopy. Use disjoint small boundary neighborhoods for the finitely many required attachments, or successive smaller neighborhoods. Connectedness and the finite disk-and-band presentation are retained. This produces a surface $\widehat F_0$ whose component framings equal those of $F_1$. [step 1.1, F2, F3, construct, algebra]

3.1 Work in disjoint sufficiently short normal tubes of the boundary circles, containing no other parts of either surface than their boundary collars. Choose the tube coordinates adapted to the actual collar of $F_1$, so it is the radial ray of angle zero: extending its inward conormal to a transverse frame and using [F4] gives these coordinates. On a short collar of $\widehat F_0$, the base projection to the boundary circle is a coordinate and the normal radius is a strictly increasing inward parameter. This follows at the boundary from the nonzero inward transverse derivative, then uniformly by compactness and [F4]. Thus its collar has coordinates $(s,r,\theta(s,r))$, with its angular direction tending to a smooth angle field at $r=0$. Its relative angular winding is zero by steps 1.2 and 2.1. It therefore has a periodic real angular lift on a sufficiently short collar. First straighten its angle to its limiting field on a smaller radius strip, using an angular interpolation cut off before the outer edge; then interpolate that limiting field to a fixed small angle $\delta\ne0$, again cut off in radius. Throughout these interpolations the base coordinate $s$ and radius $r$ are unchanged, so distinct parameters remain distinct and the collar stays embedded even if the angle varies in $r$. The formulas extend smoothly across $r=0$: they are rotations of the smooth transverse vector by a periodic smooth angle, while the initial straightening error vanishes with $r$. All changes vanish on an outer collar. The final innermost collar is the ray of angle $\delta$ and is disjoint from the angle-zero interior collar of $F_1$. [step 1.2, step 2.1, F4, construct]

3.2 Extend the collar embedding isotopies of step 3.1 by the unchanged embedding on the remainder of $\widehat F_0$ and use [F5]. The ambient extension fixes every boundary point because the embedding isotopy fixes it; no claim that this extension fixes the comparison surface is needed. Perform it on the finitely many disjoint boundary tubes. Denote the endpoint by $F_0'$. It still has boundary $L$, retains its component framings by [F3], and misses $F_1$ in a punctured neighborhood of each boundary component. Shrink to a common such neighborhood $U$. The given finite smooth presentation is transported by the isotopies. [step 3.1, F3, F5, F6, construct]

4.1 It remains to make the intersection outside $U$ transverse. In the boundaryless ambient manifold $S^3\setminus L$, the target $F_1\setminus L$ is a closed embedded boundaryless surface. All possible intersections of the two surfaces are contained in a compact region outside a smaller $U$. In finitely many ambient charts covering that region choose three bump-supported vector fields spanning each tangent space on smaller covering charts, with supports away from a still smaller neighborhood of $L$. Compose their short flows with parameters $a_j$, obtaining ambient diffeomorphisms $h_a$ fixed there. At zero parameter the parameter derivatives span the ambient tangent space on every possible intersection. For a sufficiently small parameter ball the same remains true at all intersections, by compactness and continuity; regions outside those covering charts retain their positive separation or are fixed. Thus the evaluation $(x,a)\mapsto h_a(x)$ from the interior of $F_0'$ is transverse to $F_1\setminus L$. Apply [F6] and choose an arbitrarily small good parameter. The path of short flows from zero to it is an ambient isotopy fixed near $L$. Its endpoint $F_0^*$ is transverse to the comparison surface outside $L$ and retains the separated collars. [step 3.2, F5, F6, construct]

5.1 Their interior intersection is now a compact one-dimensional smooth manifold with no boundary: it is transverse away from $L$ and absent in a punctured neighborhood of $L$. Compactness and interval charts give finitely many components, each an embedded circle; the circle description follows by following a local interval until its first return, or by the usual compact one-manifold classification. Thus only finitely many interior circles remain. Every crosscap move preserved the corrected signature by [F2], and every subsequent ambient isotopy preserved both its pairing signature and all component self-linkings by [F1] and [F3]. Their finite composition therefore preserves $\operatorname{sign}(B)+e/2$. The component labels and chosen orientations were transported throughout. This proves the claimed normalization while leaving the remaining entire-surface comparison as a separate obligation. [step 2.1, step 4.1, F1, F2, F3, construct] ∎

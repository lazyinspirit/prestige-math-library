---
id: lem-corrected-normal-signature-is-independent-of-spanning-surface
kind: lemma
title: "Corrected normal signature is independent of the spanning surface"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-normal-transfer-pairing-and-signature-under-component-connecting-tubes
  - lem-normal-transfer-linking-defines-a-symmetric-surface-pairing
  - lem-compact-smooth-boundary-surfaces-have-finite-disk-band-presentations
  - lem-spanning-surfaces-can-match-boundary-framings-and-separate-their-collars
  - lem-straight-collar-spanning-surfaces-are-related-by-interior-tube-moves
  - lem-interior-tube-addition-preserves-normal-pairing-signature
  - def-one-variable-alexander-module-of-an-oriented-link
  - lem-seifert-pairing-well-defined
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the normal pairing and linking-number interfaces and implies countable choice for surface presentations, collar normalization and the finite tube movie."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "C. McA. Gordon and R. A. Litherland, On the Signature of a Link, Inventiones Mathematicae 47 (1978), Corollary 8 printed p.62, Proposition 10 printed pp.65–66, and Theorem 11 printed pp.66–67"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0047/PPN356556735_0047.pdf"
---

## Statement

Assume full AC. Let $L\subset S^3$ be a nonempty smooth link in the standard oriented three-sphere. If $F_0,F_1$ are compact smooth embedded spanning surfaces for $L$, possibly disconnected and nonorientable, with no closed components, then
$$\operatorname{sign}(B_{F_0})+\frac{e(F_0)}2=\operatorname{sign}(B_{F_1})+\frac{e(F_1)}2.$$
Here $B_F([a],[b])=\operatorname{lk}(a,\tau b)$ is the full symmetric normal-transfer pairing on $H_1(F;\mathbb Q)$, including cross-component entries, and $e(F)=-\sum_i\operatorname{lk}(K_i,K_i')$. Each $K_i'$ is a sufficiently small surface-normal push of the boundary component $K_i$, oriented compatibly with an arbitrary orientation of $K_i$. The value of $e(F)$ does not depend on these orientations or on the sufficiently small normal push choices. Thus the displayed quantity depends only on the ambient isotopy type of the unoriented link in oriented $S^3$.

## Statement references

[[def-axiom-of-choice]]

[[lem-normal-transfer-pairing-and-signature-under-component-connecting-tubes]]

## Facts & Assumptions

**Given:** Full AC, the nonempty smooth boundary link, and its two compact smooth spanning surfaces without closed components.

[F1] Every component has a finite smooth disk-and-band presentation. The full normal-transfer pairing is well-defined, symmetric, finite-rank, and has cross-component entries $2\operatorname{lk}(a,b)$. Finitely many tubes joining distinct components make the surface connected without changing its signature or $e$, and leave the boundary collar fixed. ([[lem-compact-smooth-boundary-surfaces-have-finite-disk-band-presentations]], [[lem-normal-transfer-pairing-and-signature-under-component-connecting-tubes]])

[F2] Normal-transfer pairings are transported by orientation-preserving ambient isotopies. Linking is symmetric and bilinear and its positive-meridian coefficient is invariant under homotopies in the complement. ([[lem-normal-transfer-linking-defines-a-symmetric-surface-pairing]], [[def-one-variable-alexander-module-of-an-oriented-link]], [[lem-seifert-pairing-well-defined]])

[F3] Two connected finitely presented spanning surfaces can be normalized by signed small crosscaps and ambient isotopies, preserving the corrected normal signature, so that they have equal component framings, separated boundary collars and only finitely many transverse interior intersection circles. In the proof of this normalization, Step 3.1 actually makes the comparison collar the angle-zero ray and the changed collar a constant angle-$\delta$ ray, $0<\delta<\pi$, in their common smooth boundary tubes. The later generic perturbation is fixed on smaller tubes. We use these explicit constructed charts, not just the assertion of disjoint collars. ([[lem-spanning-surfaces-can-match-boundary-framings-and-separate-their-collars]])

[F4] Connected surfaces with a finite transverse interior circle intersection and supplied boundary tube charts making their actual collars the two positive coordinate rays are related by a finite sequence of ambient isotopies fixing the boundary pointwise and interior tube additions or removals. All intermediate surfaces are connected, with the same nonempty boundary and finite smooth disk-and-band presentations. ([[lem-straight-collar-spanning-surfaces-are-related-by-interior-tube-moves]])

[F5] An interior tube addition to a connected boundary surface preserves its normal-pairing signature and its boundary Euler quantity; therefore its inverse does as well whenever both surfaces are connected. ([[lem-interior-tube-addition-preserves-normal-pairing-signature]])

## Proof

1.1 Along each boundary component the normal line of the surface is trivial: its inward conormal and the chosen tangent to the boundary determine a nonzero surface-normal vector using the ambient orientation. The two unit normal choices are opposites. Their small pushes are homotopic in the complement of the boundary circle by rotating the vector through a constant half-turn in its oriented normal disk bundle. Different small radii are homotopic there as well. Consequently [F2] gives the same self-linking for either choice and any sufficiently small normal push. Reversing the boundary orientation reverses the induced push orientation too, so bilinearity leaves their self-linking unchanged. The sum defining $e$ is therefore well-defined independently of the arbitrary component orientations. An orientation-preserving ambient isotopy transports both cycles, their normal push homotopies and all their linking coefficients, hence preserves $e$ and, by [F2], the pairing signature. [given, F2, construct, algebra]

1.2 Use [F1] to supply finite smooth presentations on every component of $F_0,F_1$ and to connect their components by finitely many interior tubes. Denote the resulting connected surfaces by $H_0,H_1$. They still have boundary literally $L$ and satisfy $\operatorname{sign}(B_{H_i})+e(H_i)/2=\operatorname{sign}(B_{F_i})+e(F_i)/2$ for $i=0,1$. This reduction retains the full cross-component terms of the original pairings: [F1] adds a zero block for each connection rather than replacing the old matrix by a block diagonal approximation. [given, F1, algebra]

2.1 Apply [F3] to $H_0,H_1$, obtaining a connected surface $G$ with boundary $L$ and with $\operatorname{sign}(B_G)+e(G)/2=\operatorname{sign}(B_{H_0})+e(H_0)/2$. Retain the actual smooth coordinates constructed in that normalization: near each component of $L$, the collar of $H_1$ is the positive ray of angle zero and that of $G$ is the positive ray of the fixed angle $\delta\in(0,\pi)$. The construction has zero relative winding because the component framings were matched; its collar interpolation straightens the entire collar on a smaller tube, rather than only its tangent at the boundary. Its final perturbation is fixed in that smaller tube. In each normal coordinate plane apply the same invertible real linear change sending the ordered rays at angles $\delta,0$ to the positive first and second axes. Such a change exists since the two ray vectors are linearly independent, and it is smooth and periodic along the boundary since $\delta$ is fixed. These reparametrized boundary tubes meet precisely the chart hypothesis of [F4]. The finite transverse intersection circles away from them are unaffected. [step 1.2, F3, construct, algebra]

3.1 Now [F4] supplies an actual finite sequence from $G$ to $H_1$ of connected surfaces, related by ambient isotopies fixing $L$ and tube additions or removals supported off $L$. Every surface has the finite presentation required by [F5]. At an addition [F5] preserves both signature and $e$; at a removal apply the same equality in reverse to its connected target and source. Ambient isotopies preserve them by step 1.1 and [F2]. Thus each successive pair has the same corrected normal signature. Telescoping the finitely many equalities gives $\operatorname{sign}(B_G)+e(G)/2=\operatorname{sign}(B_{H_1})+e(H_1)/2$. [step 1.1, step 2.1, F2, F4, F5, algebra]

4.1 Combine this equality with those in steps 1.2 and 2.1 to obtain the equality asserted for the original possibly disconnected $F_0,F_1$. No orientability or link primeness was used. Finally an ambient isotopy of links transports a spanning surface and preserves its normal pairing and boundary self-linkings by step 1.1, so the equality also proves dependence only on the stated link isotopy type. All surfaces have nonempty boundary on each component, exactly as required for [F1]; no closed-component deletion or unproved surface-equivalence assertion is being used. [step 1.1, step 1.2, step 2.1, step 3.1, algebra] ∎

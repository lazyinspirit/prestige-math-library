---
id: lem-elementary-surface-sewing-relations
kind: lemma
title: "Elementary colored surface sewings give the Frobenius relations"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-oriented-open-closed-surface-category, def-frobenius-object-and-knowledgeable-sewing-data, def-lax-strong-and-strict-monoidal-functor, def-symmetric-monoidal-category]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
axiom_use: "No choice. Each verification is a finite boundary-relative gluing of disks, pairs of pants, or the Cardy annulus."
sources:
  references:
    - title: "Aaron D. Lauda and Hendryk Pfeiffer, Open-closed strings: Two-dimensional extended TQFTs and Frobenius algebras, arXiv:math/0510664v3"
      url: "https://arxiv.org/pdf/math/0510664v3"
      locator: "§§3.3–3.5, PDF pp. 18–25; the local proof expands Proposition 3.10's elementary relative-diffeomorphism checks."
    - title: "Gregory W. Moore and Graeme Segal, D-branes and K-theory in 2D topological field theory, arXiv:hep-th/0609042v1"
      url: "https://arxiv.org/pdf/hep-th/0609042v1"
      locator: "§§2.1–2.4, PDF pp. 5–12, for the independent colored open/closed sewing convention."
---

## Statement

In the category $\mathsf{Cob}^{\mathrm{oc}}_2(S)$ of [[def-oriented-open-closed-surface-category]], the ten generator surfaces obey the boundary-relative equalities whose images under a strong symmetric monoidal functor are precisely equations 1–7 in [[def-frobenius-object-and-knowledgeable-sewing-data]]. Thus the closed pair of pants, disk, and reversed pair of pants give a commutative Frobenius object; the open pair of pants, disk, and reversed pair of pants give the indexed open algebra/coalgebra/Frobenius equations and cyclic trace; the zipper and cozipper give the central unital algebra map, pairing adjunction, and colored Cardy equality. Each equality preserves every black parametrization, corner endpoint color, and free-boundary label. This lemma proves the listed relations; it does not assert that they present all surface morphisms.

For the singleton color set, write $A=A_{**}$ and $i=i_*$, $i^*=i^*_*$; then the open pairing is symmetric, while commutativity is required only of $C$.

## Facts & Assumptions

**Given:** A color set $S$, the collared boundary-relative surface category, and its ten elementary cobordisms with the source and target labels specified in the two linked definitions.

[F1] A morphism is an orientation-preserving diffeomorphism class relative to every black parameterization and preserving each free-boundary color; gluing uses matching collars and endpoint colors ([[def-oriented-open-closed-surface-category]]).

[F2] The ten algebraic generator maps and their typed composites are those in the definition of S-colored knowledgeable data; in particular, the two Frobenius composites have separately typed domains and codomains ([[def-frobenius-object-and-knowledgeable-sewing-data]]).

[F3] A strong symmetric monoidal functor preserves identities and composition and carries the symmetry, tensor, and unit constraints coherently ([[def-lax-strong-and-strict-monoidal-functor]], [[def-symmetric-monoidal-category]]).

## Proof

1.1 A closed multiplication is the oriented pair of pants with two incoming parameterized circles and one outgoing circle; its unit is a disk with outgoing circle. A closed comultiplication is the same pair of pants with reversed height, and the counit is a disk with incoming circle. For closed associativity and coassociativity, cut either composite along the two seams joining the three elementary pants. Both cut surfaces are disks with the same six seam sides and the same cyclically ordered, parameterized circle boundaries; gluing the matched seam sides reconstructs each composite. For the unit and counit equations, cut the cup-cap seam; both sides are the same annular collar after deleting the disk born and killed on that seam. For each of the two Frobenius equations, cut along the unique internal seam and then along an arc from that seam to each boundary circle: both sides become the same four disks in the same cyclic order, and the seam pairs have opposite induced orientations. Extending the boundary matching radially over each disk and smoothing inside the product seam collars gives an orientation-preserving diffeomorphism fixed on the black boundary. [given, F1, F2, construct]

1.2 The two closed multiplication inputs may be exchanged by the symmetry cylinder. The resulting pair of pants is carried to the original by the orientation-preserving half-turn that exchanges its two incoming collars and fixes the outgoing collar as parameterized; hence the closed multiplication is commutative. The same cut-and-match arguments in step 1.1 preserve the ordering of external circles, so they prove the closed algebra, coalgebra, counit, and both Frobenius equalities with the displayed associators and unitors inserted by functoriality. [step 1.1, F1, F3]

2.1 For open associativity, the two composites are the two seam decompositions of one disk whose four black interval collars occur in the order $I_{ab},I_{bc},I_{cd},I_{ad}$ along its boundary; the intervening free intervals have labels $a,b,c,d$ in that order. Cutting each composite along its two internal interval seams gives the same three disks, with corresponding black edges and all four free labels matched. The unit composites cut to a disk with one input and one output interval; the removable cap is absorbed into the adjacent product collar, which is the identity cylinder relative to the interval parameterization. Reversing height gives the corresponding open coassociativity and counit diffeomorphisms. For each typed open Frobenius equality, the two cuts give the same disk with two interval inputs, two interval outputs, and free edges successively labeled $a,b,c,d$; the first seam factors through $\Delta_{abc}$ and the second through $\Delta_{bcd}$, with the multiplication seam joining the same two boundary edges. Reversing which seam is cut first changes the parenthesization but not the matched cyclic boundary word. The disk extensions described in step 1.1 give diffeomorphisms relative to all four black collars. [F1, F2, step 1.1, construct]

2.2 The two sides of the indexed cyclic trace equality are disks with incoming collars $I_{ab},I_{ba}$ and the same two oppositely oriented free edges labeled $a$ and $b$. Cutting along the product seam gives two disks; the boundary matching sends the $I_{ab}$ collar to the same parameterized collar and the $I_{ba}$ collar to itself, while interchanging the order in which the seam is traversed. The zipper unit equality $\eta_a=i_a\eta_C$ compares two disks with the same outgoing $I_{aa}$ collar and the same two free edges labeled $a$: cutting off the zipper seam on the right leaves exactly the disk for the open unit. The zipper algebra equality compares the two decompositions of the same planar disk with two closed circle inputs and one outgoing $I_{aa}$ collar; cut along the two zipper seams on one side and the single zipper seam on the other, then match the circle collars and the two $a$-labeled free arcs in cyclic order. For centrality, both composites are the same disk strip with one closed input circle, one interval input $I_{ab}$, and one interval output $I_{ab}$; the cut arc passes between the circle collar and the interval collar on the first side and on the other side, and the resulting edge words agree because the circle has no marked point. The free edges keep their respective labels $a,b$. For the adjunction equation, the two maps $C\otimes A_{aa}\to k$ are disks with the same closed input circle, the same open input interval, and empty output; cut along the zipper seam and the evaluation seam, then match the two resulting disks in boundary order. This gives the pairing equality with both black parameterizations fixed. [F1, F2, step 1.1]

2.3 In the Cardy equality, the left composite first applies the cozipper to $I_{bb}$ and then zips the closed output to $I_{aa}$; the right composite applies $\Delta_{bab}$, exchanges the two oppositely labeled interval factors by the symmetry, and joins them with $\mu_{aba}$. Both are genus-zero annular strips with the two external black intervals $I_{bb}$ and $I_{aa}$ fixed and with the same two free edges labeled $a$ and $b$. Cut the left strip along the zipper seam and the right strip along the two open-pants seams. In each case the cuts yield disks whose boundary words, read from the fixed $I_{bb}$ collar toward $I_{aa}$, are $b,a,b$ and $a,b,a$ with the same seam pairings; the symmetry on the right is exactly the interchange needed to match the two middle seam edges. Extend each matched disk-boundary map over its disk and smooth at the seams. This gives a diffeomorphism fixing the two black parameterizations and each labeled free edge, so the two displayed composites are equal as morphisms. [F1, F2, step 1.1]

3.1 Applying any strong symmetric monoidal functor to the boundary-relative equalities of steps 1.1–2.3 preserves the composites and symmetry cylinders by [F3]. Its assigned maps therefore satisfy the algebra, coalgebra, Frobenius, cyclicity, centrality, adjunction, and Cardy equations with the exact types of [F2]. The defining equations are separately stated in that item, so no equality is inferred from a differently typed composite. [F2, F3, step 1.1, step 1.2, step 2.1, step 2.2, step 2.3] ∎

## Cardy diagram

The equation has source $A_{bb}$ and target $A_{aa}$; the intermediate factors on its right-hand expression are $A_{ba}\otimes A_{ab}$ before the flip and $A_{ab}\otimes A_{ba}$ after it.

~~~tikzcd
A_{bb} \arrow[rrr, bend left=18, "i_a\circ i_b^*"']
  \arrow[r, "\Delta_{bab}"]
& A_{ba}\otimes A_{ab} \arrow[r, "\tau"]
& A_{ab}\otimes A_{ba} \arrow[r, "\mu_{aba}"]
& A_{aa}
~~~

---
id: lem-two-sheeted-pl-disk-immersion-has-essential-embedded-disk
kind: lemma
title: "Eliminating double curves of a two-sheeted polygonal disk"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [ lem-finite-polygonal-disk-and-collar-surgery, def-based-loops-and-fundamental-group, def-normal-subgroup ]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "§3.1, proof of Theorem 3.1, printed pp.46–48, double-circle and double-arc elimination; the present statement is the orientable PL special case"
dependency_level: 0
---

## Statement

Let $M$ be an orientable piecewise linear three-manifold with boundary, let $F$ be a connected subsurface of its boundary, and let $N$ be a normal subgroup of $\pi_1(F)$. Suppose $f:D\to M$ is a proper piecewise linear immersion of a finite polygonal disk, with $f(\partial D)\subset F$, having only regular double curves and with no point having more than two inverse images. More precisely, the double-value set is a finite disjoint union of circles in the interior and arcs properly ending in the boundary; near a double value the two sheets are transverse planes, or transverse half-planes at an endpoint, and there are no other singularities. If the boundary loop of $f$ does not represent an element of $N$, then there is a properly embedded piecewise linear disk in $M$ whose boundary lies in $F$ and does not represent an element of $N$.

Membership in $N$ for an unbased boundary loop is interpreted after joining it to a fixed basepoint in $F$. It is independent of that joining path because $N$ is normal. The disk produced need not have the same boundary as $f$.

## Statement references

[[def-based-loops-and-fundamental-group]]

[[def-normal-subgroup]]

## Facts & Assumptions

**Given:** $M,F,N,D,f$ with the stated finite regular-double-curve conditions.

[F1] Finite simple polygonal circles in a disk bound polygonal subdisks; cutting along a proper simple polygonal arc splits a disk into two disks. Prescribed piecewise linear boundary identifications between polygonal disks extend over them, and finite arcs have polygonal strip neighborhoods ([[lem-finite-polygonal-disk-and-collar-surgery]]). For the cutting assertion, join the proper arc to each of the two boundary intervals and apply the polygonal disk assertion after separating shared endpoints by a small polygonal collar.

[F2] Loop concatenation and reversal define $\pi_1(F)$; conjugating a loop changes its chosen basepath, and a normal subgroup is closed under conjugation, products and inverses ([[def-based-loops-and-fundamental-group]], [[def-normal-subgroup]]).

## Proof

**Given:** The data of the Statement. All modifications below use finite polygonal subdivisions and sufficiently small polygonal neighborhoods.

1.1 Each double circle has two distinct preimage circles in $D$, and its normal crossing neighborhood is a product of that circle with a planar cross. To check the possible monodromy, orient $D$ and $M$. Each sheet has its induced coorientation, and the ordered pair of sheet coorientations orients their intersection line. If continuation once around the double circle interchanged the sheets, this orientation of the intersection line would be reversed, which is impossible on a circle. Thus the two sheets return individually. The orientation of each sheet and of the intersection line also preserves each of its transverse directions; consequently no pair of opposite arms is interchanged. Trivializing the interval strips in the two sheets therefore gives the product cross. No rotation or reflection monodromy remains. [given, construct]

2.1 The two preimage circles of a chosen double circle bound disks $D_1,D_2\subset D$ by [F1]. If they are nested, say $D_1\subset\operatorname{Int}D_2$, replace the part $D_2$ by a copy of $D_1$, matching boundary points with the same image under $f$, and retain the outside of $D_2$. If they are disjoint, interchange the maps on $D_1$ and $D_2$, with those same boundary identifications, and retain the rest. The identifications extend over the disks by [F1]. At the joining circle resolve the crossing by connecting adjacent arms of the planar cross instead of opposite arms. The resolution can be made polygonal: in a small square normal section replace the two crossing segments by two disjoint bent polygonal arcs joining the selected adjacent pairs, equal to the old arms near the square boundary. Taking products with successive subintervals of the double circle gives matching polygonal annuli; step 1.1 ensures their end identifications agree. This removes that double circle. The retained domain is a disk, its external boundary map is unchanged, and each retained old sheet piece is used at most once. Outside the crossing neighborhood no new double value is introduced; inside it the replacement sheets are disjoint. Other double curves miss this neighborhood and are either retained or discarded. [F1, step 1.1, construct]

3.1 Repeat step 2.1 until there are no double circles. The number of double curves strictly decreases at every repetition and was finite initially. Each new disk is still a proper polygonal immersion with at most two preimages per value, regular double arcs, and the original boundary loop. The intermediate disk need not lift to an embedding in any covering space; this proof concerns the immersion in $M$ itself. [given, step 2.1]

4.1 Choose a double arc $C$. Its two preimage arcs $a,b$ are disjoint proper arcs in the disk. They cut it into three polygonal disks, in order an outer piece, a middle piece, and the other outer piece. Orient the boundary of $D$, and label its four successive portions by $\alpha,\beta,\gamma,\delta$ so that $\alpha$ and $\gamma$ are the exposed boundary intervals of the outer pieces. The two ways of matching the orientations of $a$ and $b$ give the following boundary words after the two possible crossing resolutions: $$\begin{array}{c|c|c|c} &\text{original}&\text{first disk}&\text{second disk}\\ \text{same orientation}&\alpha\beta\gamma\delta&\alpha\gamma&\alpha\beta^{-1}\gamma\delta^{-1}\\ \text{opposite orientations}&\alpha\beta\gamma\delta&\alpha\gamma^{-1}&\alpha\delta\gamma\beta\end{array}.$$ Here all boundary paths are their images in $F$; short joining paths inside the endpoint half-disk neighborhoods have been collapsed in the written words. They are homotopic to the actual polygonal boundary paths. To verify the domains and the words, cut along $a,b$, and use the common parametrization of their images $C$ to match the cut shores. Joining the two outer disks along one shore produces the first disk, with the exposed intervals $\alpha,\gamma$ read in the matching directions. Joining all three disks in the other order along two shores produces the second disk; following its boundary reads the remaining word in the table. Each join is along a full boundary interval, hence gives a disk by [F1]. Each old piece is used at most once in either candidate. This surgery will be applied after the circle eliminations of step 3.1. [F1, given, step 3.1, construct]

5.1 Realize each of these two gluings in $M$ by the corresponding adjacent-arm resolution along $C$. In a transverse square use the two disjoint bent arcs described in step 2.1. At an endpoint use its half-space version; the changed boundary arcs stay in $F$, since that endpoint has a neighborhood in the subsurface containing the original boundary germs. Subdivide finitely along $C$ to obtain polygonal product strips, and use a width smaller than their positive distances to all other double curves and to nonincident sheet pieces. Thus the replacement is a proper polygonal immersion with no double value along $C$ and with no newly introduced double curve. Away from the strip it uses a subset of the old sheet pieces, with no repetition. The two-to-one bound is therefore preserved. The remaining double curves are among the old ones other than $C$. [given, F1, step 2.1, step 4.1, construct]

6.1 At least one candidate disk still has its boundary class outside $N$. In the first row of the table put $w=\alpha\beta\gamma\delta$, $u=\alpha\gamma$, $v=\alpha\beta^{-1}\gamma\delta^{-1}$. Cancellation of successive reversed paths gives $$w=u\delta^{-1}v^{-1}u\delta.$$ In the second row put $u=\alpha\gamma^{-1}$ and $v=\alpha\delta\gamma\beta$. Then the corresponding cancellation identity is $$w=u(\gamma\delta)^{-1}u^{-1}v(\gamma\delta).$$ These are identities of composable paths with the indicated common endpoint identifications; inserting basepaths turns them into products of conjugates in $\pi_1(F)$. By [F2], if both candidate boundary classes belonged to $N$, so would $w$, contradicting the induction hypothesis. Retain a candidate whose boundary class is outside $N$. [F2, step 4.1, step 5.1]

7.1 Repeat steps 4.1–6.1. Each repetition removes at least one double arc and introduces none, so after finitely many repetitions there is a proper polygonal immersion of a disk with no double values and with boundary class outside $N$. It is injective. A continuous injection of the compact disk into the Hausdorff manifold $M$ is an embedding; its polygonal local models make this a piecewise linear proper embedding. Its boundary is in $F$, as required. All choices made in the construction are finite; no countable or arbitrary-index choice assumption has been used. [given, step 3.1, step 5.1, step 6.1] ∎

## Remarks

This is the local double-curve-elimination half of the orientable loop theorem. An arbitrary nullhomotopy disk need not satisfy its two-sheeted immersion hypothesis. Establishing that reduction requires the separate finite twofold-cover tower argument; this lemma does not replace that argument or assert the full loop theorem.

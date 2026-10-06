---
id: lem-whitney-disk-framing-obstruction-can-be-corrected-under-the-standard-high-dimensional-hypotheses
kind: lemma
title: The Whitney framing extends over a clean disk in the stable range
deps:
- def-countable-choice
- def-whitney-disk-and-clean-framed-whitney-disk
- lem-opposite-local-signs-give-the-compatible-whitney-circle-framing
- lem-orthonormal-frame-fields-along-a-clean-whitney-disk-in-the-stable-range
- lem-a-normal-summand-of-rank-at-least-two-surjects-on-the-framing-loop-obstruction
- thm-relative-whitney-approximation-for-manifold-valued-maps
- thm-gram-schmidt-orthonormalisation
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, Oxford University Press
      2002; complete electronic copy)
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Proof of Theorem 7.27, printed p. 140 (obstruction in $\pi_1(O(2(n-1)))=\mathbb Z_2$; it is removed
      by changing the framing on one summand because $\pi_1(O(n-1))$ maps onto it for $n\ge3$)
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University
      Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Lemma 6.13 and its proof, printed pp. 80-84 (direct construction of the frame fields along the disk)
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
dependency_level: 4
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $W$ be a clean embedded Whitney bigon for complementary sheet neighbourhoods $A^a,B^b$ along its boundary arcs, $a,b\ge3$, with local orientations and opposite corner signs in an oriented disk tube. Then $W$ admits an admissible normal framing after an allowed correction in one sheet-normal summand, supported away from its fixed corner collars. Thus every clean disk under these hypotheses can be framed, and clean framed disks exist when the Whitney circle is nullhomotopic and the clean-disk existence hypotheses hold. The disk normal rank is $N=m-2$. Relative to a global oriented disk-normal frame the obstruction of a chosen admissible full boundary frame is its loop class in $\pi_1(SO(N))$. A correction within a rank-$(a-1)$ or rank-$(b-1)$ summand realizes its inverse. This is existence of an extendible admissible choice; an arbitrary prescribed full frame need not extend. The rounded circle has normal rank $m-1$, which is not the obstruction rank. Global orientation of $X,A,B$ is unnecessary; the globally oriented closed-sheet case is a special case.

## Facts & Assumptions

[F1] Opposite signs in locally oriented sheet collars give compatible adjustable admissible partial boundary frames. [[lem-opposite-local-signs-give-the-compatible-whitney-circle-framing]]

[F2] For $N>r\ge2$, the block inclusion $SO(r)\to SO(N)$ is onto on fundamental groups. [[lem-a-normal-summand-of-rank-at-least-two-surjects-on-the-framing-loop-obstruction]]

[F3] Under Countable Choice, continuous manifold-valued maps smooth near a closed set can be smoothed through a homotopy fixed near that set. [[thm-relative-whitney-approximation-for-manifold-valued-maps]]

[F4] Gram–Schmidt orthonormalizes a finite independent list and preserves its successive spans. [[thm-gram-schmidt-orthonormalisation]]

[F5] Part (i) gives choice-free Stiefel connectivity through complement rank minus one; part (ii) extends an admissible partial frame before choosing its orthogonal complement. [[lem-orthonormal-frame-fields-along-a-clean-whitney-disk-in-the-stable-range]]

## Proof


**Given:** The clean bigon, oriented local sheet collars with opposite corner signs, countable choice, and any initially chosen admissible boundary frame.

1.1 The compatible-framing lemma constructs an admissible boundary splitting and frames and gives a global rank-$(m-2)$ disk-normal trivialization by explicit radial projection transport. Compare the boundary frame with this global frame, matching its orientation. The comparison is a based loop in $SO(m-2)$ after a constant frame change at one corner. The loop extends over the disk exactly when its class is trivial: an extension gives a nullhomotopy and a nullhomotopy gives a disk extension. [given, construct, F1]

2.1 Apply the earlier normal-summand surjection with $N=m-2$ and $r=a-1\ge2$. Here $N-r=b-1\ge2$, and in particular $N>r$. Choose a based loop within that summand mapping to the inverse full-frame loop class. Reparametrize it to be supported in the interior of one sheet arc, keeping its endpoint collars constant. Multiplication within the summand preserves its subspace and sheet tangency while fixing every corner value, and kills the full-frame obstruction. The corrected loop extends over the disk. Smooth that extension relative to the boundary collar and apply orthonormalization, yielding a smooth admissible disk-normal frame. [step 1.1, construct, F2, F3, F4]

3.1 Alternatively the preceding frame-fields lemma extends the admissible partial $E$ frame first in $V_{a-1}(\mathbb R^{m-2})$ and then chooses $H$ in its orthogonal complement; it supplies an extendible admissible choice directly. Both routes permit choosing the full boundary class, and neither asserts extension of every previously fixed class. The extra inward tangent-to-disk line belongs to the rounded circle-normal bundle and is not included in the disk-normal loop comparison. The constructions use only the tube and arc orientations, so the locally oriented formulation and its global specialization follow. [step 2.1, construct, F5] ∎

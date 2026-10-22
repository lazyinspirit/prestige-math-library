---
id: lem-bridge-sphere-normalization
kind: lemma
title: Normalize a decomposing sphere relative to a bridge sphere
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-knot-bridge-position-and-unknotting-number
  - def-knot-connected-sum-and-prime-knot
  - lem-knot-connected-sum-well-defined
  - lem-knot-decomposing-sphere-realizes-connected-sum
  - def-countable-choice
  - thm-isotopy-extension
  - lem-knot-exterior-is-irreducible
  - thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three
  - lem-choice-free-smooth-parametrized-ball-windows-and-disk-absorption
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Seiya Negami and Kazuo Okita, The Splittability and Triviality of 3-Bridge Links"
      url: "https://www.researchgate.net/publication/243080042_The_splittability_and_triviality_of_3-bridge_links"
      locator: "§3, Lemma 3-3 and its proof, printed pp. 259–262; the m=2 case"
    - title: "William Jaco, Lectures on Three-Manifold Topology"
      url: "https://www.maths.gla.ac.uk/~mpowell/Lectures-3-mfld-topology_Jaco.pdf"
      locator: "Chapter II, Lemma II.8, printed p. 22, planar-surface hierarchy disk count"
---

## Statement

Assume the Axiom of Countable Choice. Let $K=K_1\#K_2$ be a smooth oriented connected sum with both factors nontrivial. Let $S$ be a regular level sphere giving a bridge position: $S$ divides $S^3$ into two balls, and in each ball the knot is a finite collection of properly embedded arcs, each of which cobounds an embedded disk with an arc on $S$; the disks in each ball are pairwise disjoint. Let $P$ be a smooth decomposing sphere meeting $K$ transversely in two points and cutting it into the given two oriented factors. Put $E=S^3\setminus\operatorname{int}N(K)$ and let $A=P\setminus\operatorname{int}N(K)$ be the resulting annulus, where $N(K)$ is a small closed tubular neighborhood. Assume the inclusion-induced map $\pi_1(A)\to\pi_1(E)$ is injective and that there is no embedded disk in $E$, with interior disjoint from $A\cup\partial E$, whose boundary is the union of a properly embedded arc in $A$ that does not cobound a disk in $A$ with a subarc of $\partial A$ and an arc in $\partial E$. Then, after isotoping $P$ through spheres meeting $K$ twice and changing only the bridge-spanning disk systems for the fixed pair $(K,S)$, one can arrange that $P\cap S$ is exactly one simple closed curve and that the union of the upper and lower bridge-spanning disks meets $P$ in exactly two arcs, each joining one point of $P\cap K$ to a point of $P\cap S$. The two points of $P\cap K$ lie in opposite bridge balls.

## Statement references

[[def-knot-bridge-position-and-unknotting-number|The fixed height and bridge-position convention]]

[[def-knot-connected-sum-and-prime-knot|Connected-sum decomposition and nontrivial factors]]

[[lem-knot-decomposing-sphere-realizes-connected-sum|A sphere transverse to the knot determines the oriented factors]]

## Facts & Assumptions

**Given:** Countable choice, the fixed smooth bridge pair $(K,S)$ with displayed disjoint spanning disks, and the specified two-puncture sphere $P$ satisfying the two essential-annulus hypotheses.

[F1] **External input:** Negami–Okita, Lemma 3-3, printed pp. 259–262, for $m=2$: an incompressible, boundary-incompressible twice-punctured sphere in a nonsplit link exterior can be normalized relative to a fixed bridge sphere by an isotopy of the link pair and changes of spanning disks. Its bridge-sphere intersection is one circle and all spanning-disk intersections are puncture-to-circle arcs. The last paragraph of its proof places one puncture on each side. This is an imported PL normalization theorem, including existence of the finite disk-move sequence; its innermost-arc availability argument is not reconstructed here. [Negami–Okita, Lemma 3-3 and proof](https://www.researchgate.net/publication/243080042_The_splittability_and_triviality_of_3-bridge_links).

[F2] A knot exterior is irreducible under countable choice. [[lem-knot-exterior-is-irreducible]]

[F3] Compact smooth embedding isotopies extend ambiently under countable choice. [[thm-isotopy-extension]]

[F4] Smooth ball-window attachments and removals with supplied collars preserve the displayed ball parameters. [[lem-choice-free-smooth-parametrized-ball-windows-and-disk-absorption]]

[F5] A two-puncture sphere determines the oriented connected-sum factors independently of the boundary caps. [[lem-knot-decomposing-sphere-realizes-connected-sum]], [[lem-knot-connected-sum-well-defined]]

## Proof

1.1 The annulus $A$ is incompressible: a compression would have boundary essential in $A$ and nullhomotopic in $E$, contrary to the assumed injection. The stated prohibition of disks is precisely boundary-incompressibility. A knot is a nonsplit link, and [F2] supplies irreducibility for the disk-exchange isotopies in the imported result. Hence the $m=2$ case of [F1] applies to this specified $P$ and the fixed bridge sphere $S$. Its conclusion and final puncture redistribution give the one-circle form with one puncture in each bridge ball, rather than merely the existence of an unrelated decomposing sphere. [given, F1, F2]

2.1 To realize that finite disk-move sequence smoothly, keep the initial smooth knot and bridge sphere fixed and round the finitely many arcs and disk seams at each stage. The moves in the source proof are disk exchange, pushing a surface band across a spanning subdisk, and replacing a spanning subdisk by a parallel surface disk. Each has a disk-product neighborhood: on a band push, move its interval coordinate using a bump function stationary near the retained boundary intervals; on disk replacement, take a small normal parallel copy and round the joining seam. A puncture slide uses the same product at a bridge endpoint and has velocity tangent to the fixed knot. Disk exchange across a sphere uses the knot-free ball from [F2], with its collars retained by [F4]. Choose these neighborhoods sufficiently small to avoid the other same-side disks and all nonincident pieces; there are only finitely many compact pieces at each stage. These operations are smooth versions of the prescribed moves, with the same incidences. Extend their embedding isotopies by [F3]. Thus the PL input yields smooth spheres meeting the fixed knot twice and smooth disjoint spanning-disk systems for the fixed bridge pair. [F1, F2, F3, F4, step 1.1, construct]

3.1 In the final configuration of [F1], every spanning-disk intersection arc has exactly one puncture endpoint and one endpoint on $P\cap S$. Each puncture lies on exactly one spanning disk in its bridge ball, so there are exactly two such arcs. There are no circle components or other arcs by the imported normal form. Small foot perturbations make their circle endpoints distinct, preserving every incidence. All changes of $P$ were isotopies preserving the knot setwise, so [F5] preserves the specified oriented factors. This proves the stated normal form, including opposite-side punctures. [F1, F5, step 1.1, step 2.1, construct] ∎

## References

[Negami–Okita, Lemma 3-3, printed pp. 259–262](https://www.researchgate.net/publication/243080042_The_splittability_and_triviality_of_3-bridge_links). The complete statement and proof of this lemma were consulted. The source works in the PL category; step 2.1 explains the smooth realization of its finite disk moves. The normalization and termination theorem is an external input, not a claimed independent local reconstruction of its innermost-arc argument.

[Jaco, Chapter II, printed pp. 21–22](https://www.maths.gla.ac.uk/~mpowell/Lectures-3-mfld-topology_Jaco.pdf). This is the hierarchy reference used by Negami–Okita; no additional Jaco result is invoked separately here.

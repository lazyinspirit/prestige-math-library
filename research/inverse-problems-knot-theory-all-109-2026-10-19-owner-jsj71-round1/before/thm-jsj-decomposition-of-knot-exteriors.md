---
id: thm-jsj-decomposition-of-knot-exteriors
kind: theorem
title: "JSJ decomposition of compact knot exteriors"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-knot-exterior
  - def-incompressibility-seifert-fibration-and-jsj-system
  - lem-knot-exterior-is-irreducible
  - lem-kneser-haken-finiteness-for-incompressible-tori
  - lem-cut-along-incompressible-tori-preserves-irreducibility
  - lem-torus-in-ball-is-compressible
  - lem-boundary-compressible-annulus-is-boundary-parallel
  - lem-incompressible-surface-in-solid-torus-is-meridian-or-boundary-parallel
  - lem-essential-surface-in-seifert-piece-is-vertical-or-horizontal
  - lem-essential-annulus-in-seifert-piece-isotopic-to-vertical
  - lem-atoroidal-piece-with-essential-annulus-is-seifert
  - lem-seifert-boundary-fiber-slopes-unique-except-small-pieces
  - thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations
  - thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds
  - thm-seifert-van-kampen
  - thm-normal-form-for-free-products-with-amalgamation
  - thm-one-loop-graph-of-groups-is-an-hnn-extension
  - thm-hnn-normal-form-theorem
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Assumes full AC through the knot-exterior irreducibility and homology interfaces. Full AC supplies countable choice for finite-position arguments and the normal-form transversals. The Haken bound itself uses only the declared countable-choice branch."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "§1.2, Propositions 1.7–1.8, Lemma 1.10, Lemmas 1.14–1.16, and Theorem 1.9, printed pp.11–23"
    - title: "Stefan Friedl, An Introduction to 3-Manifolds"
      url: "https://www.math.csi.cuny.edu/abhijit/gt3m/Friedl-3mfds.pdf"
      locator: "§6.1, Theorem 6.1, printed pp.20–21; independent statement and scope check"
    - title: "Walter Neumann and Gadde Swarup, Canonical decompositions of 3-manifolds"
      url: "https://arxiv.org/pdf/math/9712227"
      locator: "§§2–4, torus-boundary JSJ system and isotopy uniqueness"
---

## Statement

Assume full AC. Let $K:S^1\to S^3$ be a smooth oriented knot with a chosen compact exterior $E_K$. There exists a finite inclusion-minimal collection $\mathcal T$ of pairwise disjoint incompressible tori in the interior of $E_K$ such that every component of $E_K$ cut along $\mathcal T$ is atoroidal or Seifert-fibered. Any two such inclusion-minimal collections are ambient isotopic in $E_K$. Atoroidal pieces in this statement are not asserted to be hyperbolic.

## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, Theorem 1.9](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Stefan Friedl, *An Introduction to 3-Manifolds*, Theorem 6.1](https://www.math.csi.cuny.edu/abhijit/gt3m/Friedl-3mfds.pdf)

[Walter Neumann and Gadde Swarup, *Canonical decompositions of 3-manifolds*](https://arxiv.org/pdf/math/9712227)

## Facts & Assumptions

**Given:** Full AC, a smooth oriented knot $K:S^1\to S^3$, and its chosen compact exterior $E_K$.

[F1] Full AC implies countable choice by restriction to countable families ([[def-axiom-of-choice]], Definition; [[thm-choice-implies-dependent-implies-countable-choice]], Statement).

[F2] A smooth knot exterior is compact and irreducible under the declared choice branch ([[def-knot-exterior]], Definition; [[lem-knot-exterior-is-irreducible]], Statement).

[F3] A compact smooth manifold with corners has a finite compatible triangulation ([[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]], Statement).

[F4] Any finite family of incompressible tori in a compact irreducible manifold with nonempty boundary, with no $T^2\times I$ complementary component, has a fixed finite upper bound in terms of a triangulation ([[lem-kneser-haken-finiteness-for-incompressible-tori]], Statement).

[F5] Cutting an irreducible manifold along a finite family of incompressible tori leaves irreducible components ([[lem-cut-along-incompressible-tori-preserves-irreducibility]], Statement).

[F6] If a torus is incompressible in a cut component, its fundamental group injects there by the Loop Theorem; van Kampen and amalgam or HNN normal forms then embed the groups of the cut pieces back into the unsplit component ([[thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds]], Statement; [[thm-seifert-van-kampen]], Statement; [[thm-normal-form-for-free-products-with-amalgamation]], Statement; [[thm-one-loop-graph-of-groups-is-an-hnn-extension]], Statement; [[thm-hnn-normal-form-theorem]], Statement).

[F7] A connected essential annulus in an irreducible atoroidal piece with torus boundary makes that piece Seifert-fibered ([[lem-atoroidal-piece-with-essential-annulus-is-seifert]], Statement); essential annuli in a Seifert piece can be verticalized except for the stated small manifolds ([[lem-essential-annulus-in-seifert-piece-isotopic-to-vertical]], Statement).

## Proof

1.1 By [F2] and [F3], $E_K$ is an irreducible manifold with a finite triangulation and one torus boundary component. Start with the empty family. If a current cut component $C$ is neither atoroidal nor Seifert-fibered, then by the definition of atoroidal it contains an incompressible torus $T$ that is not boundary-parallel in $C$. Add $T$ to the family and continue. Every cut component remains irreducible by [F5]. [F1, F2, F3, F5, given, construct]

1.2 At each cut, the geometric incompressibility of $T$ implies $\pi_1(T)\to\pi_1(C)$ is injective by [F6]. If $T$ separates $C$, van Kampen expresses $\pi_1(C)$ as an amalgamated product and amalgam normal form embeds each side group. If $T$ is nonseparating, cutting gives a one-loop graph of groups, hence an HNN extension by [F6], and HNN normal form embeds the cut-piece group. Induction shows that every later chosen torus is incompressible in the original $E_K$. [F5, F6, step 1.1, construct]

2.1 No finite stage of this process has a complementary component $T^2\times I$. Such a component has two torus ends. If one end is an original boundary torus, the other is a selected torus boundary-parallel in the component where it was chosen; if both ends are selected tori, the later one was boundary-parallel to the earlier one when chosen. Both contradict the construction rule. Therefore every finite accumulated family satisfies the hypotheses of [F4]. [F4, step 1.1, step 1.2, algebra]

2.2 The bound [F4] is fixed by the initial triangulation of $E_K$, so the process cannot make infinitely many cuts. It terminates with every cut component atoroidal or Seifert-fibered. Among all finite systems with this property choose one with the least number of tori. A proper subfamily with the property would have smaller cardinality, so this system is inclusion-minimal. This proves the existence assertion. [F4, step 2.1, algebra, choose]

3.1 For uniqueness, let $\mathcal T$ and $\mathcal T'$ be two inclusion-minimal systems. Put them in transverse position. Innermost-disk exchanges remove circles that bound disks on either torus: if such a circle were essential on the other torus, its disk would compress that torus; otherwise the two disks form a sphere, and irreducibility gives a ball across which the intersection is removed. The remaining components of $\mathcal T'\cap(E_K\!\setminus\!\mathcal T)$ are incompressible annuli or tori. A boundary-compressible annulus is boundary-parallel by [[lem-boundary-compressible-annulus-is-boundary-parallel]], so isotope it out of the intersection. Thus any remaining annulus is essential. [F2, F5, step 1.2, construct]

3.2 If a remaining intersection circle lies on a torus of $\mathcal T$, each adjacent cut piece is either already Seifert-fibered or is atoroidal and contains the essential annulus cut off by that circle; in the latter case [F7] makes the piece Seifert-fibered. Where the annulus-verticalization supplier applies without changing a fibration, its boundary circle is a regular fiber on both sides, so the fibrations match along that slope. The current local proof does not verify all simultaneous annulus choices and the exceptional $T^2\times I$ and twisted $I$-bundle cases needed to conclude that the entire torus can be removed, nor the final disjoint-system comparison in Hatcher's uniqueness argument. Those cases are not proved here; this item is escalated for the uniqueness claim. [F7, step 3.1]

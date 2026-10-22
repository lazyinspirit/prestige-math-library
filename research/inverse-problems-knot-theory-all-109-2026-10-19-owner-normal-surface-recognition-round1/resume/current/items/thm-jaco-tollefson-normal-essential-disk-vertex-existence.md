---
id: thm-jaco-tollefson-normal-essential-disk-vertex-existence
kind: theorem
title: "Jaco–Tollefson normal essential-disk vertex theorem"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-normal-surface-coordinate-box
  - lem-essential-pl-disks-admit-normal-replacements
justified_by: []
aliases: []
proof_strategy: not-supplied
provenance:
  statement: ai-altered
  proof: not-supplied
sources:
  references:
    - title: "Joel Hass, Jeffrey C. Lagarias, and Nicholas Pippenger, The Computational Complexity of Knot and Link Problems, Journal of the ACM 46 (1999)"
      url: "https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf"
      locator: "§5, Theorem 5.6, printed p.13; the source states the vertex-disk theorem and cites Jaco–Tollefson Corollary6.4."
    - title: "Jeff Erickson, Normal Surfaces and Knots, Computational Topology lecture notes (2009)"
      url: "https://jeffe.cs.illinois.edu/teaching/comptop/2009/notes/normal-surfaces.pdf"
      locator: "§§14.1–14.4, complete six-page note; it cites rather than proves Haken essential-surface completeness."
    - title: "Jeffrey L. Tollefson, Normal surface Q-theory, Pacific Journal of Mathematics 183 (1998), 359–374"
      url: "https://msp.org/pjm/1998/183-2/pjm-v183-n2-p07-p.pdf"
      locator: "Complete §4, printed pp.366–369, actual exchange-patch proof with irreducible/boundary-irreducible hypotheses; it does not prove this general disk theorem."

    - title: "William Jaco and Jeffrey L. Tollefson, Algorithms for the complete decomposition of a closed 3-manifold, Illinois Journal of Mathematics 39 (1995), 358–406"
      url: "https://www.researchgate.net/profile/William-Jaco/publication/242529283_Algorithms_for_the_complete_decomposition_of_a_closed_3-manifold/links/5437e7a80cf2590375c56442/Algorithms-for-the-complete-decomposition-of-a-closed-3-manifold.pdf"
      locator: "Complete §4, proof of Lemma5.1, and §6 through Corollary6.4, printed pp.368–390. Theorem4.3 omits its disk proof; Lemma6.3 gives an outline; Corollary6.4 assumes irreducibility."
    - title: "Joel Hass and Jeffrey C. Lagarias, The number of Reidemeister moves needed for unknotting"
      url: "https://arxiv.org/pdf/math/9807012"
      locator: "Theorem3.1 and following remark, printed pp.10–11: the irreducibility hypothesis in the cited vertex-disk theorem can be removed, without supplying the extension proof."

---

## Statement

Let $M$ be a compact triangulated piecewise-linear $3$-manifold with nonempty boundary. If $M$ contains a properly embedded disk whose boundary is not null-homotopic in $\partial M$, then $M$ contains such a disk whose primitive normal-coordinate vector lies on an extreme ray of the Haken cone.

## Statement references

[[def-normal-surface-coordinate-box]] — Haken cone, extreme rays and primitive vertex vectors.

[Hass–Lagarias–Pippenger, Theorem 5.6](https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf) — Jaco–Tollefson vertex-surface theorem.

## Source proof status

HLP §5, Theorem 5.6, states the full vertex-disk result but says only that it is an immediate consequence of Jaco–Tollefson Corollary 6.4. The authentic primary paper has now been recovered and its complete §4, proof of Lemma5.1 and §6 through Corollary6.4 read. Theorem4.3 omits its disk proof as parallel to the sphere proof; Lemma6.3 explicitly gives an outline using that characterization and the sphere-system proof. Corollary6.4 assumes irreducibility, which the preserved Statement does not. Hass–Lagarias Theorem3.1 and its following remark explicitly say that irreducibility can be removed, but do not provide that extension argument. Thus recovery of the primary text has identified the precise remaining proof work; it has not itself supplied a complete local proof.

Normal essential-disk replacement is proved by [[lem-essential-pl-disks-admit-normal-replacements]]. The missing steps are the disk version of the exchange-surface characterization, the least-weight/support-minimal exchange-disk and exchange-annulus argument, and its extension from irreducible manifolds to the full compact PL scope. Tollefson’s Q-theory §4 supplies an actual disk-patch exchange argument under irreducibility and boundary irreducibility, which do not cover this claim. The original primitive vertex-disk claim remains present and escalated. No citation, normalization or Euler-characteristic calculation is treated as its proof.

---
id: def-oriented-reidemeister-moves
kind: definition
title: "Oriented Reidemeister moves"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-regular-oriented-link-diagram, def-planar-isotopy-of-link-diagrams]
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "historical complete Step5 reader; item def-oriented-reidemeister-moves; evidence research/frontier-38-owner-30-reader-17.md, research/frontier-38-owner-30-reader-findings-17.json. Original reports retain their scope and source limitations; no recursive audit of all published prerequisites or complete bibliography is claimed. Restored from completed 2026-10-03 evidence; no new audit performed."
    delegated_by: "tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane"
sources:
  references:
    - title: "Birman and Brendle, Braids: A Survey, Handbook of Knot Theory chapter, author manuscript; section 2.3 and Figures 3-12, printed pp. 12-26"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links, AMS Surveys and Monographs 208 (2015); section 2.1, printed pp. 13-19; Appendix B.1, printed pp. 367-372"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
    - title: "Queffelec, Reidemeister's theorem using transversality, Bulletin of the Australian Mathematical Society (2024); arXiv:2406.18203v1, sections 2-3"
      url: "https://arxiv.org/pdf/2406.18203v1"
---

## Definition

An **oriented Reidemeister move** is one of the following local replacements of
a regular oriented link diagram ([[def-regular-oriented-link-diagram]]),
performed inside a small closed disk while the diagram outside the disk is left
unchanged, and understood up to planar isotopy outside the disk
([[def-planar-isotopy-of-link-diagrams]]). All sign and orientation variants of
each local picture are included.

**(R1) Kink creation and deletion.** A single strand is replaced by a small
kink: two arcs crossing once and otherwise disjoint from the strand, with the
over/under datum of the new crossing as in the picture. The move is allowed in
both directions (create or delete the kink) and with both signs of the kink,
the sign being the sign of the crossing created. The orientations of the two
strands of the kink are the two possible consistent orientations through the
crossing, and all of them occur in the move list.

**(R2) Slide of two strands.** Two local arcs belonging to two strands are
replaced so that the number of crossings between those strands changes by two
of opposite signs: the standard picture slides one strand over or under the
other, creating or deleting the pair of crossings, with the two crossings being
the two possible signs in either order. All four orientation patterns of the
two strands at the two crossings are included.

**(R3) Sliding a strand past a crossing.** One strand is moved across an
existing crossing of two other strands, so that the crossing of the two other
strands passes from one side of the moving strand to the other; the three
crossings of the local picture keep their signs and the over/under data are
preserved. The three strands must have a consistent strict height order:
one is above both others, one below both, and the remaining strand is between
them. The cyclic over/under pattern is excluded. Every orientation pattern
and all six height orders of this standard local picture are included.

A local R2 or R3 picture is **braid-like** when, after a local coordinate
change and deformation, all participating strands run in the same positive
longitudinal direction. This is a local condition and does not require a
globally chosen braid axis. R1 is kept as a separate kink move.

The strands keep their orientations throughout every move. The union of the
three move types, together with planar isotopy, generates the equivalence
relation on diagrams used in the Reidemeister equivalence theorem below; the
moves are sometimes called R1, R2, R3 as above. Since every move changes the
diagram only inside a disk, it has a type and a finite list of local
orientation/sign variants, and each variant is realized by an ambient isotopy
as the next items show. The complete list of variants is required because the
Markov and Alexander constructions below act on oriented diagrams and count
signed crossings.

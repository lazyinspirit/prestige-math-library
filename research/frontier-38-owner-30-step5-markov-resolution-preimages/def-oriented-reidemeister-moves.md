---
id: def-oriented-reidemeister-moves
kind: definition
title: "Oriented Reidemeister moves"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-regular-oriented-link-diagram, def-planar-isotopy-of-link-diagrams]
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Birman and Brendle, Braids: A Survey, Handbook of Knot Theory chapter, author manuscript; section 2.2 and Figures 3-12, printed pp. 12-26"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links, AMS Surveys and Monographs 208 (2015); section 2.1 and Appendix B.1, printed pp. 367-372"
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
determined by the global diagram. All orientation patterns of the three strands
occurring in the picture are included.

The strands keep their orientations throughout every move. The union of the
three move types, together with planar isotopy, generates the equivalence
relation on diagrams used in the Reidemeister equivalence theorem below; the
moves are sometimes called R1, R2, R3 as above. Since every move changes the
diagram only inside a disk, it has a type and a finite list of local
orientation/sign variants, and each variant is realized by an ambient isotopy
as the next items show. The complete list of variants is required because the
Markov and Alexander constructions below act on oriented diagrams and count
signed crossings.

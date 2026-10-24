---
id: def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram
kind: definition
title: "Seifert smoothing and Seifert circles of an oriented link diagram"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-regular-oriented-link-diagram, def-embedded-submanifold-and-slice-chart]
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
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-17.md"
      - "research/frontier-38-owner-30-alpha-batch-17-5a.md"
      - "research/frontier-38-owner-30-step5-hash-17-post-5a.json"
    content_sha256: "d9ac9961c7985f37aa69e1d7c94cb1a4be7cc7ee70968ceb2a112b7d3dfe0649"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Birman and Brendle, Braids: A Survey, Handbook of Knot Theory chapter, author manuscript; section 2.2 and Figure 4, printed pp. 13-15"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Traczyk, A new proof of Markov's braid theorem, Banach Center Publications 42 (1998), 409-419; section 1 and Figures 1-2"
      url: "https://web.archive.org/web/20231206161844if_/http://matwbn.icm.edu.pl/ksiazki/bcp/bcp42/bcp42127.pdf"
---

## Definition

Let $D$ be an oriented link diagram ([[def-regular-oriented-link-diagram]]),
regarded as a decorated immersed oriented $4$-valent planar graph, and let
$V$ be its finite set of double points. At each $v\in V$ the two branches of
the diagram cross; the local **Seifert smoothing** of $D$ at $v$ replaces the
crossing by the unique pair of non-crossing arcs in a small disk about $v$ that
joins the four half-edges in the orientation-respecting way: entering along a
strand, one follows the smoothing turn that keeps the travelling direction
consistently on the same side, so that the two oriented arcs through $v$ are
reconnected without crossing. Performing this replacement in pairwise disjoint
small disks, one for each crossing, and leaving the rest of the diagram
unchanged produces the **Seifert smoothing of $D$**: a finite disjoint union of
oriented simple closed curves in $S^2$, its **Seifert circles**. At each
crossing the smoothing reconnects the four half-edges in one of the two
possible non-crossing ways, and exactly one of the two respects the
orientations; hence the smoothing is a well-defined operation on the diagram.
The Seifert smoothing may merge two circles into one or split one circle into
two at a crossing, so its number of circles is a new invariant of the picture
and is not in general the number of components of the link.

The **Seifert picture** of $D$ is the smoothed picture together with one signed
short arc at each former crossing $v$, drawn transversely to the two smoothed
strands and joining the two distinct Seifert circles that passed through $v$; the sign of the arc is the sign of the
crossing, positive or negative. The signed arcs lie in the complement of the
Seifert circles and meet the circles only at their endpoints
([[def-embedded-submanifold-and-slice-chart]]); every crossing is recorded exactly once. The two smoothed arcs at a crossing
are parallel and equally directed. They cannot belong to the same oriented
Jordan circle: the connecting strip is on opposite local sides of its two
equally directed boundary arcs, whereas a fixed complementary side of an
oriented Jordan circle is consistently on one local side. Thus each signed
arc joins distinct circles, coherently oriented in their common annulus. The orientation of each Seifert circle is the one induced by the
Smoothed strands, and the collection of circles and signed arcs is the object
to which the coherence and height definitions
([[def-coherence-of-seifert-circles-and-the-height-of-a-diagram]]) are applied.

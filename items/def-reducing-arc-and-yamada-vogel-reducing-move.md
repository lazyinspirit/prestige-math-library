---
id: def-reducing-arc-and-yamada-vogel-reducing-move
kind: definition
title: "Defect regions, reducing arcs and the Yamada-Vogel reducing move"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-coherence-of-seifert-circles-and-the-height-of-a-diagram,
       lem-two-disjoint-circles-in-s-two-cobound-an-annulus,
       def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram,
       def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Birman and Brendle, Braids: A Survey, Handbook of Knot Theory chapter, author manuscript; section 2.2 and Figures 4-5, printed pp. 13-16"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Traczyk, A new proof of Markov's braid theorem, Banach Center Publications 42 (1998), 409-419; section 1 and Figure 1"
      url: "https://web.archive.org/web/20231206161844if_/http://matwbn.icm.edu.pl/ksiazki/bcp/bcp42/bcp42127.pdf"
---

## Definition

Assume the Axiom of Choice. Let $D$ be an oriented diagram with Seifert
picture $S$, consisting of the Seifert circles $C_1,\dots,C_m$ and the finite
set of signed arcs recording the crossings
([[def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram]]), and
let coherence of pairs of Seifert circles be as in
[[def-coherence-of-seifert-circles-and-the-height-of-a-diagram]].

A **region** of $S$ is a connected component of
$S^2\setminus S$, where $S$ includes both the circles and the signed arcs.
Thus a region contains no signed arc in its interior. Its boundary can contain
signed arcs and portions of Seifert circles. A region is a **defect region**
if two Seifert circles $C_i\ne C_j$ that are **incoherent** both occur in the
boundary of that region. The existence of a defect region when the height is
positive is the content of the defect-region lemma below.

A **reducing arc** is a simple arc $\alpha$ contained in a defect region
together with its endpoints, joining an incoherent pair $C_i,C_j$ of Seifert
circles and meeting the union of the Seifert circles exactly in its two
endpoints; the arc may be taken polygonal inside the region.

The **Yamada-Vogel reducing move** performed along $\alpha$ slides one of the
two circles, say $C_i$, over the other along $\alpha$: in the diagram this is a
Reidemeister II move of the original diagram in which a neighbourhood of the arc
is replaced by the standard band picture of two crossings of opposite signs, so
that in the new Seifert picture the incoherent pair $C_i,C_j$ is replaced by
two **coherent** Seifert circles $C_a,C_z$ joined by two signed arcs of opposite
signs, all other Seifert circles unchanged, $C_a$ bounds a disk containing no
other new Seifert circle, and $C_z$ bounds a disk containing
all Seifert circles that were contained in the annulus cobounded by $C_i$ and
$C_j$. The inverse of a reducing move is also allowed. A diagram is
**reducible** when it admits a reducing arc; the move is defined for every
defect region and the resulting picture is again a Seifert picture of an
oriented diagram of the same link.

The choice axiom is used exactly where coherence is used, through the annulus
lemma of [[lem-two-disjoint-circles-in-s-two-cobound-an-annulus]]; the local
band picture of the move itself is an explicit Reidemeister II replacement of
two oppositely signed crossings.

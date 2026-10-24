---
id: def-coherence-of-seifert-circles-and-the-height-of-a-diagram
kind: definition
title: "Coherence of Seifert circles and the height of a diagram"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram,
       lem-two-disjoint-circles-in-s-two-cobound-an-annulus,
       def-induced-boundary-orientation,
       def-oriented-smooth-manifold-and-oriented-chart, def-axiom-of-choice]
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
    content_sha256: "95f24363861090d2ecab4165f90baeac22ea281e37ab19a9d3813a6e13a03d88"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Birman and Brendle, Braids: A Survey, Handbook of Knot Theory chapter, author manuscript; section 2.2, printed pp. 13-16"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Traczyk, A new proof of Markov's braid theorem, Banach Center Publications 42 (1998), 409-419; section 1"
      url: "https://web.archive.org/web/20231206161844if_/http://matwbn.icm.edu.pl/ksiazki/bcp/bcp42/bcp42127.pdf"
---

## Definition

Assume the Axiom of Choice. Let $C,C'$ be two disjoint oriented circles in
$S^2$ ([[def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram]])
and let $A$ be the annulus they cobound, which exists and has the two circles as
its boundary circles by [[lem-two-disjoint-circles-in-s-two-cobound-an-annulus]].
Orient $A$ once, a choice of one of its two orientations
([[def-oriented-smooth-manifold-and-oriented-chart]]); this orientation induces
a boundary orientation on each of the two boundary circles $C$ and $C'$, and
reversing the orientation of $A$ reverses both induced orientations
([[def-induced-boundary-orientation]]).

**Coherence.** The circles $C$ and $C'$ are **coherent** when, with respect to
one, equivalently any, orientation of $A$, the given orientations of $C$ and
$C'$ agree with the two induced boundary orientations in **opposite** senses:
one of the given orientations agrees and the other disagrees. Equivalently,
the two given oriented circles represent the same element of
$H_1(A;\mathbb Z)$, which is the formulation used in the survey. The two
formulations are the classical description of one-dimensional coherent
orientation of an annulus, and the equivalence of reversing the orientation of
$A$ is immediate because both induced boundary orientations flip, so the
relation "opposite senses of agreement" is independent of the chosen
orientation. When the given orientations agree with the induced boundary
orientations in the same sense (both agree or both disagree), the circles are
**incoherent**.

**Height.** For an oriented diagram $D$ with Seifert picture $S$ and Seifert
circles $C_1,\dots,C_m$
([[def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram]]),
the **height** of $D$ is the number of distinct unordered pairs $\{i,j\}$ of
indices such that $C_i$ and $C_j$ are incoherent:

$$h(D):=\#\bigl\{\{i,j\}:1\le i<j\le m,\ C_i\text{ and }C_j\text{ incoherent}\bigr\}.$$

Coherence is defined for every pair of Seifert circles of the picture, not only
for pairs joined by a signed arc; the signed arcs only record the crossings of
the original diagram. In particular $h(D)=0$ means that all pairs of Seifert
circles of $D$ are coherent. The axiom of choice is consumed exactly through
the annulus lemma, which supplies the annulus $A$ and its two boundary circles;
the rest of the definition, including the invariance under reversing the
orientation of $A$, is choice-free. Distinct Seifert circles are disjoint, so the definition applies to every
one of the finitely many pairs, including pairs with no signed arc between them.
The empty and one-circle pictures have height zero.

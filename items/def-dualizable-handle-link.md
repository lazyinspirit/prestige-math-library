---
id: def-dualizable-handle-link
kind: definition
title: "Dualizable framed handle link"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-knot-meridian-and-preferred-longitude
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-regular-oriented-link-diagram
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - lem-linking-number-even-sum-and-reidemeister-invariance
  - def-countable-choice
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Lisa Piccirillo, The Conway knot is not slice"
      url: "https://arxiv.org/pdf/1808.02923"
      locator: "§3, definition preceding Theorem 3.1, arXiv v1 PDF p. 4"
    - title: "Jennifer Hom, Getting a handle on the Conway knot"
      url: "https://arxiv.org/pdf/2107.09171"
      locator: "§3, dualizable-link construction and trace descriptions"
---

## Definition

Assume countable choice. A dualizable framed handle link is an ordered
three-component link $(B,G,R)$ in
$S^3$ in which $R$ is designated as a dotted component representing a
$4$-dimensional $1$-handle, $B$ and $G$ are designated as $0$-framed $2$-handle
attaching circles (their framing pushoffs represent their preferred longitudes),
the ordered sublink $(B,R)$ is ambient isotopic as an
unframed link to $B$ together with a meridian of $B$, the ordered sublink
$(G,R)$ has the same property with $G$ in place of $B$, and
$\operatorname{lk}(B,G)=0$. Here $\operatorname{lk}(B,G)$ is half the sum of
the signs of the mixed crossings in any regular oriented diagram of $B\cup G$;
the linking-number lemma guarantees that this is an integer independent of the
chosen diagram. The associated handlebody
$X(B,G,R)$ has one
$0$-handle, the $1$-handle represented by $R$, and the two indicated
$2$-handles. Dotted-circle notation means that the unknotted component $R$
specifies a $1$-handle $D^1\times D^3$ attached along its two foot balls
$\partial D^1\times D^3$; its belt sphere is $\{0\}\times S^2$. A
$0$-framed $2$-handle is $D^2\times D^2$ attached along its attaching region
$S^1\times D^2$, with the boundary pushoff representing the preferred
longitude.

## Definition references

[Piccirillo, §3, definition preceding Theorem 3.1](https://arxiv.org/pdf/1808.02923)

[Hom, §3](https://arxiv.org/pdf/2107.09171)

## Facts & Assumptions

**Given:** A three-component link in $S^3$ with the component labels and framing data in the Definition and countable choice.

[A1] Countable choice, written $\mathrm{AC}_\omega$, is [[def-countable-choice]].

[F1] [[def-oriented-link-in-s-three-and-ambient-isotopy]]: each component is a smooth oriented embedded circle in the standard oriented $S^3$, and ambient isotopy means an orientation-preserving isotopy of the ambient sphere.

[F2] [[def-knot-meridian-and-preferred-longitude]]: a meridian is the boundary of a normal disk to the component, oriented by the knot and ambient orientations, and the preferred longitude is the degree-one peripheral curve with zero exterior-homology class.

[F3] [[def-regular-oriented-link-diagram]] and [[def-oriented-crossing-sign-writhe-and-blackboard-framing]]: a regular oriented diagram has finitely many transverse double crossings with over/under data, each assigned the determinant crossing sign.

[F4] [[lem-linking-number-even-sum-and-reidemeister-invariance]]: the half-sum of mixed crossing signs is an integer independent of the regular oriented diagram, and it is symmetric in the two components.

## Proof

**Proof technique:** direct.

1.1 The definition specifies $R$ as dotted and $B,G$ as zero-framed attaching circles. Thus $R$ contributes one $1$-handle, while $B$ and $G$ contribute the two $2$-handles in the stated handlebody. [given, construct]

2.1 The two meridional-sublink conditions are invariant under ambient isotopy, and each says that the indicated $2$-handle goes geometrically once over the $1$-handle. The separately stated mixed-crossing condition is a link invariant by [F4], while [F3] fixes the crossing-sign convention; it is not inferred from either meridional-sublink condition. [A1, F1, F2, F3, F4, given, step 1.1] ∎


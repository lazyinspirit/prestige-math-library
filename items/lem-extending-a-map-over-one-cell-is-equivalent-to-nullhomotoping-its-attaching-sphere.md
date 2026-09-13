---
id: lem-extending-a-map-over-one-cell-is-equivalent-to-nullhomotoping-its-attaching-sphere
kind: lemma
title: Extending over one cell is equivalent to nullhomotoping the attaching sphere
status: published
origin: pipeline
deps: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: James Davis and Paul Kirk, Lecture Notes in Algebraic Topology
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: Chapter 7, Section 7.1, printed pages 165--167
---

## Statement

Let $n\geq0$, and let $B=A\cup_\alpha D^{n+1}$ be obtained by attaching one cell along
$\alpha:S^n\to A$, and let $f:A\to Y$ be continuous. Then $f$ extends to
$B$ if and only if $f\alpha:S^n\to Y$ is nullhomotopic.

## Facts & Assumptions

[F1] The attached space is the pushout of $S^n\hookrightarrow D^{n+1}$ and $\alpha:S^n\to A$.

[F2] $D^{n+1}$ is the cone on $S^n$, and a nullhomotopy of a sphere map descends to a map on that cone.

## Proof

**Given:** The attachment and map in the statement.

1.1 Suppose $\bar f:B\to Y$ extends $f$. Its restriction to the characteristic disk, composed with a radial contraction of $D^{n+1}$ to its center, is a nullhomotopy of $\bar f|_{S^n}=f\alpha$. [F1]

1.2 Conversely, let $H:S^n\times I\to Y$ satisfy $H(-,0)=f\alpha$ and have constant terminal map. Collapsing $S^n\times\{1\}$ turns the cylinder into $CS^n\cong D^{n+1}$, and [F2] makes $H$ descend to a map $F:D^{n+1}\to Y$ with $F|_{S^n}=f\alpha$. [F2]

2.1 The maps $f$ on $A$ and $F$ on $D^{n+1}$ agree on the attaching boundary. By [F1]'s pushout universal property they glue uniquely to a continuous map $\bar f:B\to Y$ extending $f$. The two constructions are inverse existence implications and require no choice. $\square$ [F1, step 1.1, step 1.2]

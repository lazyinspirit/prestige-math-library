---
id: cor-abelian-subgroups-of-hyperbolic-groups-are-virtually-cyclic
kind: corollary
title: "Abelian subgroups of hyperbolic groups are virtually cyclic"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-centralizer-of-an-infinite-order-element-is-virtually-cyclic]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Section 6.5.2"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
---

## Statement

Every abelian subgroup of a hyperbolic group contains a cyclic subgroup of
finite index.

## Facts & Assumptions

**Given:** An abelian subgroup $A$ of a hyperbolic group $G$.

[A1] An abelian subgroup of a hyperbolic group that is torsion is finite.

[L1] Centralizers of infinite-order elements are virtually cyclic
([[thm-centralizer-of-an-infinite-order-element-is-virtually-cyclic]]).

## Proof

**Proof technique:** direct.

1.1 If $A$ contains an element of infinite order, then $A \subseteq C_G(g)$ for that element $g$, so [L1] shows that $A$ is virtually cyclic. [given, L1]

2.1 If every element of $A$ has finite order, then [A1] says that $A$ is finite, hence virtually cyclic. Therefore every abelian subgroup of a hyperbolic group is virtually cyclic. [A1, step 1.1] ∎

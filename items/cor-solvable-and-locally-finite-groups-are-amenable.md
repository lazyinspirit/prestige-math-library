---
id: cor-solvable-and-locally-finite-groups-are-amenable
kind: corollary
title: "Under the ultrafilter lemma, solvable groups and locally finite groups are amenable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-derived-series-solvable-group-and-derived-length, def-locally-finite-group, lem-directed-union-of-amenable-subgroups-is-amenable, prop-finite-groups-are-amenable, thm-abelian-groups-are-amenable, thm-extensions-of-amenable-groups-are-amenable]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "Cornelia Drutu and Michael Kapovich, Lectures on Geometric Group Theory"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
---

## Statement

Assume the ultrafilter lemma. Every solvable group is amenable, and every
locally finite group is amenable.

## Facts & Assumptions

**Given:** A solvable group or a locally finite group, and the ultrafilter lemma.

[L1] Solvability is defined by the derived series terminating at the trivial group ([[def-derived-series-solvable-group-and-derived-length]]).

[L2] A group is locally finite when every finitely generated subgroup is finite ([[def-locally-finite-group]]).

[L3] Directed unions of amenable subgroups are amenable ([[lem-directed-union-of-amenable-subgroups-is-amenable]]).

[L4] Finite groups are amenable, and under the ultrafilter lemma so are abelian groups ([[prop-finite-groups-are-amenable]], [[thm-abelian-groups-are-amenable]]).

[L5] Extensions of amenable groups are amenable ([[thm-extensions-of-amenable-groups-are-amenable]]).

## Proof

**Proof technique:** direct.

1.1 Let $G$ be solvable. If its derived length is $0$, then $G$ is trivial and hence finite, so [L4] applies. If the derived length is positive, then $G'=[G,G]$ has smaller derived length by [L1], and the quotient $G/G'$ is abelian. Inducting on derived length and applying [L5] shows that every solvable group is amenable. [L1, L4, L5, given]

1.2 Let $G$ be locally finite. The family of finitely generated subgroups of $G$ is directed by inclusion, its union is all of $G$, and every member is finite by [L2]. Hence each member is amenable by [L4], and [L3] gives amenability of $G$. [L2, L3, L4, given]

2.1 Steps 1.1 and 1.2 prove the two claims. [step 1.1, step 1.2] ∎

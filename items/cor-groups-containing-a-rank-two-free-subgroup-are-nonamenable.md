---
id: cor-groups-containing-a-rank-two-free-subgroup-are-nonamenable
kind: corollary
title: "Under the ultrafilter lemma, groups containing a rank-two free subgroup are nonamenable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-free-group-of-rank-two-is-nonamenable, thm-subgroups-and-quotients-of-amenable-groups-are-amenable]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
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

Assume the ultrafilter lemma. If a group contains a free subgroup of rank $2$,
then it is nonamenable.

## Facts & Assumptions

**Given:** A group $G$ containing a subgroup $H\cong F_2$, and the ultrafilter lemma.

[L1] The rank-two free group is nonamenable ([[thm-free-group-of-rank-two-is-nonamenable]]).

[L2] Under the ultrafilter lemma, subgroups of amenable groups are amenable ([[thm-subgroups-and-quotients-of-amenable-groups-are-amenable]]).

## Proof

**Proof technique:** direct.

1.1 If $G$ were amenable, then [L2] would make its subgroup $H$ amenable. [L2, given, assume-contra]

2.1 But $H\cong F_2$, and [L1] says $F_2$ is nonamenable. This contradiction proves that $G$ is nonamenable. [L1, step 1.1, discharge-contradiction] ∎

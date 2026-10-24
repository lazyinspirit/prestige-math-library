---
id: def-paradoxical-decomposition-of-a-group
kind: definition
title: "Paradoxical decompositions of groups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "Cornelia Drutu and Michael Kapovich, Lectures on Geometric Group Theory"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
---

## Definition

Let $G$ be a group. A **paradoxical decomposition** of $G$ consists of pairwise
disjoint subsets

$$A_1,\dots,A_m,\ B_1,\dots,B_n\subseteq G$$

and group elements $a_1,\dots,a_m,b_1,\dots,b_n\in G$ such that

$$G=\bigsqcup_{i=1}^m A_i\sqcup\bigsqcup_{j=1}^n B_j=\bigsqcup_{i=1}^m a_iA_i=\bigsqcup_{j=1}^n b_jB_j.$$

Thus the group is partitioned into finitely many pieces, and each of the two
subfamilies can be translated to cover the whole group again.

---
id: lem-paradoxical-groups-admit-no-invariant-mean
kind: lemma
title: "Paradoxical groups admit no invariant mean"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-left-invariant-mean-and-amenable-group, def-paradoxical-decomposition-of-a-group]
justified_by: []
aliases: []
landmark: false
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
    - title: "C. Löh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "Cornelia Drutu and Michael Kapovich, Lectures on Geometric Group Theory"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
---

## Statement

If a group admits a paradoxical decomposition, then it admits no left-invariant
mean.

## Facts & Assumptions

**Given:** A group $G$ with a paradoxical decomposition.

[L1] A left-invariant mean is a positive normalized functional on
$\ell^\infty(G)$ invariant under left translation
([[def-left-invariant-mean-and-amenable-group]]).

[L2] In a paradoxical decomposition, disjoint pieces $A_i,B_j$ partition $G$,
and the translated families $(a_iA_i)$ and $(b_jB_j)$ each partition $G$
([[def-paradoxical-decomposition-of-a-group]]).

## Proof

**Proof technique:** direct.

1.1 Assume toward contradiction that $m$ is a left-invariant mean on $G$. By [L2] and positivity, finite additivity on indicator functions gives $1=m(\mathbf 1_G)=\sum_i m(\mathbf 1_{A_i})+\sum_j m(\mathbf 1_{B_j})$. [L1, L2, given, assume-contra]

2.1 The translated families from [L2] also partition $G$, so left invariance gives $1=m(\mathbf 1_G)=\sum_i m(\mathbf 1_{a_iA_i})=\sum_i m(\mathbf 1_{A_i})$ and likewise $1=\sum_j m(\mathbf 1_{B_j})$. Combining these equalities with step 1.1 yields $1=2$, a contradiction. [L1, L2, step 1.1, discharge-contradiction] ∎

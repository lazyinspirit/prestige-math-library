---
id: cor-groups-acting-geometrically-on-the-same-space-are-quasi-isometric
kind: corollary
title: "Groups acting geometrically on the same space are quasi-isometric"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-quasi-isometry-is-an-equivalence-relation-on-metric-spaces, thm-svarc-milnor-lemma]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory, Sections 4.4 and 5.1"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
    - title: "C. Drutu and M. Kapovich, Lectures on Geometric Group Theory, Chapter 5"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
pipeline_run: null
---

## Statement

If two groups act geometrically on the same nonempty geodesic metric space,
then they are quasi-isometric.

## Facts & Assumptions

**Given:** Geometric actions of groups $G$ and $H$ on the same nonempty geodesic metric space $X$.

[L1] Under a geometric action on a geodesic metric space, every orbit map is a quasi-isometry ([[thm-svarc-milnor-lemma]]).

[L2] Quasi-isometry is an equivalence relation on metric spaces ([[thm-quasi-isometry-is-an-equivalence-relation-on-metric-spaces]]).

## Proof

**Proof technique:** direct.

1.1 Choose points $x_G,x_H \in X$. By [L1], the orbit maps based at $x_G$ and $x_H$ make the groups $G$ and $H$ each quasi-isometric to the common space $X$. [L1, given, choose]

2.1 By transitivity of quasi-isometry from [L2], the spaces $G$ and $H$ are quasi-isometric to each other. [L2, step 1.1] ∎

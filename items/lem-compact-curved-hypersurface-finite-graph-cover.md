---
id: lem-compact-curved-hypersurface-finite-graph-cover
kind: lemma
title: Compact curved hypersurfaces admit a finite curved graph cover
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
- lem-shape-operator-and-gauss-kronecker-curvature-of-a-graph
- def-euclidean-hypersurface-normal-shape-operator-and-curvature
- lem-smooth-euclidean-hypersurface-graph-and-localization
- def-countable-choice
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "historical complete Step5 reader; item lem-compact-curved-hypersurface-finite-graph-cover; evidence research/frontier-38-owner-30-reader-6.md, research/frontier-38-owner-30-reader-findings-6.json. Original reports retain their scope and source limitations; no recursive audit of all published prerequisites or complete bibliography is claimed. Restored from completed 2026-10-03 evidence; no new audit performed."
    delegated_by: "tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Ved Datar, Lectures on Riemannian Geometry
    url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
    locator: Definition 14.2.1 and Corollary 14.2.2, printed p.104; Example 14.2.4, p.105; Definition 14.2.7 and Remark 14.2.8, p.106. The explicit graph determinant is derived locally in this item or its suppliers.
---

## Statement

Assume Countable Choice. Let $S\subseteq\mathbb R^n$ ($n\ge2$) be a compact embedded $C^\infty$ hypersurface with a continuous unit normal field $\nu$ and everywhere nonvanishing extrinsic Gaussian curvature $K=\det S_\nu\neq0$. Then there exist finitely many open sets $U_j\subseteq\mathbb R^{n-1}$, smooth $h_j:U_j\to\mathbb R$ with $\det D^2h_j\neq0$ on $U_j$, embeddings $X_j(y)=(y,h_j(y))$ of $\operatorname{graph}h_j$ onto relatively open pieces $S_j\subseteq S$ covering $S$ (after ambient rigid motions), and nonnegative $C^\infty$ functions $\chi_j$ on $S$ with $\sum_j\chi_j=1$ and $\operatorname{supp}\chi_j$ compactly contained in $S_j$.

## Facts & Assumptions

**Given:** The compact embedded smooth hypersurface, continuous unit normal and nonzero curvature in the statement, with Countable Choice.

[F1] Smooth graph charts, compact smooth localization, normal independence and the Euclidean curvature convention are established locally. ([[lem-smooth-euclidean-hypersurface-graph-and-localization]], [[def-euclidean-hypersurface-normal-shape-operator-and-curvature]])

[F2] The graph curvature is $\det D^2h/(1+|\nabla h|^2)^{(n+1)/2}$. ([[lem-shape-operator-and-gauss-kronecker-curvature-of-a-graph]])

[A1] Countable Choice is assumed. ([[def-countable-choice]])

## Proof

**Proof technique:** direct; apply the local graph and compact localization constructions.

1.1 By [F1], every point has a smooth graph chart after a rigid motion. The given continuous normal is locally smooth and equals either the graph normal or its negative with constant sign on a connected smaller chart. Its shape operator therefore differs by that sign; nonvanishing curvature is unchanged. Formula [F2] implies $\det D^2h\ne0$ throughout the smaller graph chart. This argument also works with local normals only, without a global orientation. [given, F1, F2]

2.1 Apply the compact localization part of [F1] with $K=S$ to the graph neighbourhoods of step 1.1. Its ambient-ball bumps give finitely many pieces covering $S$ and nonnegative smooth $\chi_j$ with compact support inside their pieces and sum one. Their graph functions retain their nondegenerate Hessians on the whole chart. These are all the asserted data. The construction needs only finite choices; the assumed Countable Choice remains available to surface-measure consumers. [F1, A1, step 1.1] ∎

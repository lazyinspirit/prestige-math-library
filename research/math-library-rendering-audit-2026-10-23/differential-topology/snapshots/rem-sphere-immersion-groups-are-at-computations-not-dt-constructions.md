---
id: rem-sphere-immersion-groups-are-at-computations-not-dt-constructions
kind: remark
title: "The sphere immersion groups are algebraic-topology computations, not differential-topology constructions"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [lem-stiefel-manifolds-are-connected-and-simply-connected-in-positive-codimension, lem-the-second-homotopy-group-of-so-three-vanishes, thm-smale-classification-of-sphere-immersions-in-euclidean-space, def-higher-homotopy-group-by-based-cubes, lem-formal-immersions-of-the-circle-in-the-plane-are-classified-by-the-winding-number]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Ralph L. Cohen, Immersions of Manifolds and Homotopy Theory (Harvard CMSA Math-Science Literature Lecture write-up, June 30 2022), §2.1"
      url: https://math.stanford.edu/~ralph/immersions-final.pdf
      locator: "PDF pp. 4–10; the immersion classification consumes the homotopy groups of Stiefel manifolds, which are computed in algebraic topology"
dependency_level: 14
---

## Remark

The homotopy-theoretic inputs used on this page — $\pi_2(\mathrm{SO}(3))=0$
([[lem-the-second-homotopy-group-of-so-three-vanishes]]) via the quaternion double cover and the covering isomorphism on
$\pi_n$ for $n\ge2$; $\pi_1(\mathrm{SO}(2))\cong\mathbb Z$ via circle degree
([[lem-formal-immersions-of-the-circle-in-the-plane-are-classified-by-the-winding-number]]); the Stiefel connectivities
$\pi_0(V_m(\mathbb R^n))=0$ for $n\ge m+1$ and $\pi_1(V_m(\mathbb R^n))=0$ for
$n\ge m+2$ ([[lem-stiefel-manifolds-are-connected-and-simply-connected-in-positive-codimension]]),
and the higher homotopy exact sequences of the fibrations
$V_m(\mathbb R^n)\to S^{n-1}$ — are algebraic-topology computations owned by
the prerequisite pages on higher homotopy groups and cofiber sequences,
fibrations and homotopy exact sequences, covering spaces and lifting, and the
Hurewicz, Whitehead, Freudenthal and CW-approximation theorems. Here they are consumed
as the values of $\pi_m(V_m(\mathbb R^n))$ and $\pi_2(\mathrm{SO}(3))$ in the
sense of [[def-higher-homotopy-group-by-based-cubes]];
[[thm-smale-classification-of-sphere-immersions-in-euclidean-space]] states the
classification in terms of them.

This page contributes only the differential-topological reduction: the
Smale–Hirsch weak homotopy equivalence (from the predecessor page), the
identification of formal data with Stiefel sections, and the clutching
difference class that turns the classification into these groups. No new
homotopy-theoretic machinery is minted here, and conversely the groups
$\pi_m(V_m(\mathbb R^n))$ remain algebraic-topology inputs; each use is
recorded in the dependencies of the items above.

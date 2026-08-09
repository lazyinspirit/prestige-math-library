---
id: def-partition-of-unity-subordinate-to-a-cover
kind: definition
title: "Locally finite partitions of unity and subordination to an open cover"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-cover-refinement-and-local-finiteness, def-continuous-map-top, def-zero-sets-and-cozero-sets, def-compact-space]
justified_by: []
aliases: [def-partition-of-unity]
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "J. Robbin, Partitions of Unity"
      url: "https://people.math.wisc.edu/~jwrobbin/partitions_of_unity.pdf"
    - title: "Dartmouth Point-Set Topology, Lecture 25"
      url: "https://math.dartmouth.edu/~rmaguire/teaching/dartmouth_math_054_2022_summer/lectures/2022_summer_point_set_topology_lecture_25.pdf"
    - title: "R. Gardner, Notes on Munkres Section 41: Paracompactness (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-41.pdf"
pipeline_run: null
---

## Definition

Let $X$ be a topological space and let $\mathcal U$ be an open cover of $X$. A
family $\{\varphi_s:X\to[0,1]\}_{s\in S}$ is a **partition of unity** when each
$\varphi_s$ is continuous, the family of cozero sets
$\{\operatorname{coz}(\varphi_s)\}_{s\in S}$ is locally finite, and
$$\sum_{s\in S}\varphi_s(x)=1\quad\text{for every }x\in X.$$
The sum is unambiguous because local finiteness says that only finitely many
summands are nonzero near, and hence at, any fixed point.

It is **subordinate to $\mathcal U$** when for every $s\in S$ some
$U\in\mathcal U$ contains the support
$$\operatorname{supp}(\varphi_s):=\overline{\operatorname{coz}(\varphi_s)}.$$
Here cozero sets and zero sets have the meanings of
[[def-zero-sets-and-cozero-sets]].

## Remarks

The finite case is included: if $S$ is finite, the cozero family is locally
finite automatically. The definition does not require $X$ to be Hausdorff;
Hausdorffness enters the existence theorem through shrinking and Urysohn's lemma.

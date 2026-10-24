---
id: thm-subordinate-partitions-of-unity-exist
kind: theorem
title: "Under choice and dependent choice, every open cover of a paracompact Hausdorff space admits a locally finite subordinate partition of unity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-paracompact-hausdorff-cover-shrinking, thm-paracompact-hausdorff-implies-normal, thm-urysohn-lemma, lem-normalizing-a-locally-finite-positive-family, def-axiom-of-choice, def-dependent-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Dartmouth Point-Set Topology, Lecture 25"
      url: "https://math.dartmouth.edu/~rmaguire/teaching/dartmouth_math_054_2022_summer/lectures/2022_summer_point_set_topology_lecture_25.pdf"
    - title: "J. Robbin, Partitions of Unity"
      url: "https://people.math.wisc.edu/~jwrobbin/partitions_of_unity.pdf"
    - title: "Topology 262 notes (California State University, Northridge)"
      url: "https://www.csun.edu/~ac53971/research/topology_262.pdf"
    - title: "R. Gardner, Notes on Munkres Section 41: Paracompactness (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-41.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice and the Axiom of Dependent Choice. Every open cover
of a paracompact Hausdorff space admits a locally finite partition of unity
subordinate to it.

## Facts & Assumptions

**Given:** Choice, dependent choice, a paracompact Hausdorff space $X$, and an open cover $\mathcal U$.

[L1] There are locally finite covers $\{V_s\}$, $\{W_s\}$ and $U_s\in\mathcal U$ with $\overline{V_s}\subseteq W_s\subseteq\overline{W_s}\subseteq U_s$ ([[lem-paracompact-hausdorff-cover-shrinking]]).

[L2] Every paracompact Hausdorff space is normal ([[thm-paracompact-hausdorff-implies-normal]]).

[L3] Under dependent choice, Urysohn's lemma separates disjoint closed sets in a normal space by a continuous map into $[0,1]$ ([[thm-urysohn-lemma]], clause 1).

[L4] If $\{f_s:X\to[0,\infty)\}_{s\in S}$ is a continuous family with locally finite cozero family and everywhere-positive sum $f=\sum_sf_s$, then the functions $\varphi_s=f_s/f$ form a partition of unity, with the same cozero sets and supports as the corresponding $f_s$ ([[lem-normalizing-a-locally-finite-positive-family]]).

## Proof

**Proof technique:** constructive.

1.1 Apply [L1] to obtain $V_s,W_s,U_s$ as stated. [L1, construct]

2.1 By [L2], $X$ is normal. For each $s$, the closed sets $\overline{V_s}$ and $X\setminus W_s$ are disjoint, so [L3] gives a continuous $f_s:X\to[0,1]$ equal to $1$ on $\overline{V_s}$ and $0$ on $X\setminus W_s$. [step 1.1, L2, L3, choose]

3.1 The cozero set of $f_s$ lies in $W_s$, while its support lies in $\overline{W_s}\subseteq U_s$; since $\{W_s\}$ is locally finite, so is the cozero family. [step 1.1, step 2.1]

3.2 Because $\{V_s\}$ covers $X$ and $f_s=1$ on $V_s$, the pointwise sum $\sum_sf_s$ is positive everywhere. [step 1.1, step 2.1]

4.1 By [L4], the normalized functions $\varphi_s=f_s/(\sum_tf_t)$ form a locally finite partition of unity; their supports equal those of $f_s$, so step 3.1 makes the partition subordinate to $\mathcal U$. [step 3.1, step 3.2, L4, discharge-construct] ∎

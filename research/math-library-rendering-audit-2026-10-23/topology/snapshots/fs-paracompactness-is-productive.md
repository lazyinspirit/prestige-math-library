---
id: fs-paracompactness-is-productive
kind: false-statement
title: "Assuming choice, refuted: paracompactness is productive"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-lower-limit-line-is-regular-and-lindelof, lem-regular-lindelof-spaces-are-paracompact, thm-paracompact-hausdorff-implies-normal, thm-normality-is-not-productive, lem-products-preserve-t0-t1-and-hausdorff, def-lower-limit-topology, def-hausdorff-space, def-axiom-of-choice, def-countable-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
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
    - title: "G. Gruenhage, General Topology Course Notes, Sorgenfrey plane and Jones's lemma"
      url: "https://webhome.auburn.edu/~gruengf/papers/Topology_Course_Notes.pdf"
    - title: "R. Gardner, Notes on Munkres Section 41: Paracompactness (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-41.pdf"
    - title: "Sorgenfrey topology (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Sorgenfrey_topology"
pipeline_run: null
---

## Statement

Assuming the Axiom of Choice, paracompactness is productive.

## Facts & Assumptions

**Given:** The Axiom of Choice and the lower-limit line $L$.

[A1] Choice implies countable choice: apply a choice function to any countably indexed family of nonempty sets ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] If $x<y$ in $L$, then $[x,y)$ and $[y,y+1)$ are disjoint open neighbourhoods, so $L$ is Hausdorff ([[def-lower-limit-topology]], [[def-hausdorff-space]]).

[L1] The lower-limit line is regular and Lindelöf; under countable choice every regular Lindelöf space is paracompact ([[lem-lower-limit-line-is-regular-and-lindelof]], [[lem-regular-lindelof-spaces-are-paracompact]]).

[L2] Under choice, the product $L^2$ is not normal ([[thm-normality-is-not-productive]]).

[L3] The product of Hausdorff spaces is Hausdorff ([[lem-products-preserve-t0-t1-and-hausdorff]]).

[L4] A paracompact Hausdorff space is normal ([[thm-paracompact-hausdorff-implies-normal]]).

## Refutation

**Proof technique:** direct.

1.1 By [A1] and [L1], both factors $L$ are paracompact. [A1, L1]

2.1 If paracompactness were productive, $L^2$ would be paracompact. [step 1.1]

3.1 By [F1] and [L3], $L^2$ is Hausdorff; then [L4] would make it normal, contradicting [L2]. [F1, L2, L3, L4, step 2.1]

4.1 Hence the displayed productive assertion is refuted. [step 3.1] ∎

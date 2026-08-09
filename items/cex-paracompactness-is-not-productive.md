---
id: cex-paracompactness-is-not-productive
kind: counterexample
title: "Assuming choice, two paracompact lower-limit lines can have a nonparacompact product"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-lower-limit-line-is-regular-and-lindelof, lem-regular-lindelof-spaces-are-paracompact, thm-normality-is-not-productive, lem-products-preserve-t0-t1-and-hausdorff, thm-paracompact-hausdorff-implies-normal, def-lower-limit-topology, def-hausdorff-space, def-axiom-of-choice, def-countable-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
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

## Statement refuted

Assuming the Axiom of Choice, a product of paracompact spaces is paracompact.

## Facts & Assumptions

**Given:** The lower-limit line $L$ under the Axiom of Choice.

[A1] Choice implies countable choice ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] If $x<y$ in $L$, then $[x,y)$ and $[y,y+1)$ are disjoint open neighbourhoods, so $L$ is Hausdorff ([[def-lower-limit-topology]], [[def-hausdorff-space]]).

[L1] The lower-limit line is regular and Lindelöf; under countable choice every regular Lindelöf space is paracompact ([[lem-lower-limit-line-is-regular-and-lindelof]], [[lem-regular-lindelof-spaces-are-paracompact]]).

[L2] Under choice, $L^2$ is not normal ([[thm-normality-is-not-productive]]).

[L3] The product of Hausdorff spaces is Hausdorff ([[lem-products-preserve-t0-t1-and-hausdorff]]).

[L4] A paracompact Hausdorff space is normal ([[thm-paracompact-hausdorff-implies-normal]]).

## Counterexample

**Proof technique:** direct.

1.1 By [A1] and [L1], both factors $L$ are paracompact. [A1, L1]

2.1 If $L^2$ were paracompact, [F1] and [L3] would make it Hausdorff, and [L4] would then make it normal, contradicting [L2]. [F1, L2, L3, L4, step 1.1]

3.1 Thus two paracompact spaces have a nonparacompact product, refuting the displayed assertion. [step 2.1] ∎

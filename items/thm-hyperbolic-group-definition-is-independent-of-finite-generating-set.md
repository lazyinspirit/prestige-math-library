---
id: thm-hyperbolic-group-definition-is-independent-of-finite-generating-set
kind: theorem
title: "Hyperbolicity of a finitely generated group is independent of the finite generating set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-hyperbolic-group, thm-hyperbolicity-is-invariant-under-quasi-isometry-for-geodesic-spaces, thm-two-finite-generating-sets-of-a-group-give-bilipschitz-equivalent-word-metrics]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Section 6.3"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
---

## Statement

Let $G$ be a finitely generated group. If the Cayley graph of $G$ is hyperbolic
for one finite generating set, then it is hyperbolic for every finite
generating set.

## Facts & Assumptions

**Given:** A finitely generated group $G$ and two finite generating sets $S,T$.

[L1] Two finite generating sets of a group give bilipschitz equivalent word
metrics
([[thm-two-finite-generating-sets-of-a-group-give-bilipschitz-equivalent-word-metrics]]).

[L2] Hyperbolicity is a quasi-isometry invariant of geodesic spaces
([[thm-hyperbolicity-is-invariant-under-quasi-isometry-for-geodesic-spaces]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the identity map on $G$ is a quasi-isometry between the two Cayley graphs $\Gamma(G,S)$ and $\Gamma(G,T)$. [given, L1]

2.1 Therefore [L2] transfers hyperbolicity from one Cayley graph to the other. So the definition of a hyperbolic group does not depend on the chosen finite generating set. [L2, step 1.1] ∎ 
---
id: thm-hyperbolic-group-definition-is-independent-of-finite-generating-set
kind: theorem
title: "Hyperbolicity of a finitely generated group is independent of the finite generating set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-hyperbolic-group, thm-hyperbolicity-is-invariant-under-quasi-isometry-for-geodesic-spaces, thm-two-finite-generating-sets-of-a-group-give-bilipschitz-equivalent-word-metrics, def-axiom-of-choice]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Section 6.3"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-06-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Choice. Let $G$ be a finitely generated group. If the Cayley graph of $G$ is hyperbolic
for one finite generating set, then it is hyperbolic for every finite
generating set.

## Facts & Assumptions

**Given:** AC, a finitely generated group $G$ and two finite generating sets $S,T$.

[L1] Two finite generating sets of a group give bilipschitz equivalent word metrics ([[thm-two-finite-generating-sets-of-a-group-give-bilipschitz-equivalent-word-metrics]]).

[L2] Hyperbolicity is a quasi-isometry invariant of geodesic spaces ([[thm-hyperbolicity-is-invariant-under-quasi-isometry-for-geodesic-spaces]]).

[A1] AC is used in [L2] through its Morse and controlled-inverse suppliers ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the identity map on the vertex sets is bilipschitz for the two word metrics. Extend it over each edge of $\Gamma(G,S)$ by a chosen shortest $T$-path for that edge label, and conversely for $T$-edges. Because the generating sets are finite, these paths can be fixed by finitely many choices. The resulting maps are quasi-isometries of the geometric Cayley graphs: every point is within $1/2$ of a vertex, and the vertex metrics have the bilipschitz bounds from [L1]. [given, L1]

2.1 By [L2], under [A1] hyperbolicity transfers from one geometric Cayley graph to the other. Since $S,T$ were arbitrary finite generating sets, the definition does not depend on the set. [L2, A1, step 1.1] ∎

---
id: ex-surface-groups-as-hyperbolic-groups
kind: example
title: "Closed surface groups are hyperbolic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [ex-the-hyperbolic-plane-is-hyperbolic, thm-hyperbolicity-is-invariant-under-quasi-isometry-for-geodesic-spaces, thm-svarc-milnor-lemma, thm-closed-hyperbolic-surface-has-geometric-deck-action, def-axiom-of-choice]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Sections 4.4 and 6.3"
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

## Example

Assume the Axiom of Choice. The fundamental group of a connected closed Riemannian surface of constant curvature $-1$ is a hyperbolic group.

## Facts & Assumptions

**Given:** AC, a connected closed Riemannian surface $\Sigma$ of constant curvature $-1$, and its fundamental group $\pi_1(\Sigma)$.

[L1] The hyperbolic plane is hyperbolic ([[ex-the-hyperbolic-plane-is-hyperbolic]]).

[L2] The Švarc-Milnor lemma transfers geometric actions on proper geodesic spaces to quasi-isometries with finitely generated groups ([[thm-svarc-milnor-lemma]]).

[L3] Hyperbolicity is invariant under quasi-isometry ([[thm-hyperbolicity-is-invariant-under-quasi-isometry-for-geodesic-spaces]]).

[L4] The universal Riemannian cover of $\Sigma$ is isometric to $\mathbb H^2$, and its deck group acts geometrically and is identified with $\pi_1(\Sigma)$ ([[thm-closed-hyperbolic-surface-has-geometric-deck-action]]).

[A1] AC is used in [L4] for the complete-cover and Hopf–Rinow route and in [L3] for the Morse transport ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

1.1 By [L4], the intrinsic curvature hypothesis gives an isometric identification of the universal cover with $\mathbb H^2$. Under it, $\pi_1(\Sigma)$ acts isometrically, properly and cocompactly. [L4, A1]

2.1 By [L2], this action makes $\pi_1(\Sigma)$ finitely generated and its word-metric vertex set quasi-isometric to $\mathbb H^2$. For the finite generating set supplied there, join each edge's orbit endpoints by a chosen geodesic in $\mathbb H^2$ and extend the orbit map over that unit edge. The finitely many generator displacements give a uniform edge-image diameter. Every point of the geometric Cayley graph is within $1/2$ of a vertex, so the vertex quasi-isometry inequalities extend to the whole graph with only bounded additive errors, and coarse density is unchanged. Thus the two **geodesic** spaces are quasi-isometric. By [L1] the plane is hyperbolic; [L3] makes this geometric Cayley graph hyperbolic. [L1, L2, L3, A1, step 1.1] ∎

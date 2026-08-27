---
id: ex-surface-groups-as-hyperbolic-groups
kind: example
title: "Closed surface groups are hyperbolic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [ex-the-hyperbolic-plane-is-hyperbolic, thm-hyperbolicity-is-invariant-under-quasi-isometry-for-geodesic-spaces, thm-svarc-milnor-lemma, thm-hyperbolic-group-definition-is-independent-of-finite-generating-set]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Sections 4.4 and 6.3"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
---

## Example

The fundamental group of a closed hyperbolic surface is a hyperbolic group.

## Facts & Assumptions

**Given:** A closed hyperbolic surface $\Sigma$ and its fundamental group $\pi_1(\Sigma)$.

[L1] The hyperbolic plane is hyperbolic
([[ex-the-hyperbolic-plane-is-hyperbolic]]).

[L2] The Švarc-Milnor lemma transfers geometric actions on proper geodesic
spaces to quasi-isometries with finitely generated groups
([[thm-svarc-milnor-lemma]]).

[L3] Hyperbolicity is invariant under quasi-isometry
([[thm-hyperbolicity-is-invariant-under-quasi-isometry-for-geodesic-spaces]]).

## Verification

**Proof technique:** direct.

1.1 The group $\pi_1(\Sigma)$ acts properly discontinuously and cocompactly by deck transformations on the universal cover $\mathbb H^2$ of $\Sigma$. [given]

2.1 By [L2], $\pi_1(\Sigma)$ is quasi-isometric to $\mathbb H^2$, and [L1] shows that $\mathbb H^2$ is hyperbolic. Therefore [L3] makes $\pi_1(\Sigma)$ hyperbolic. [L1, L2, L3, step 1.1] ∎

---
id: cor-connected-nilpotent-lie-groups-are-discrete-central-quotients-of-bch-groups
kind: corollary
title: Connected nilpotent Lie groups are central quotients of BCH groups
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations, thm-the-exponential-map-of-a-connected-simply-connected-nilpotent-lie-group-is-a-diffeomorphism]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Knapp, Lie Groups Beyond an Introduction, Theorem 1.127 and Corollary 1.134"
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf
      locator: "Chapter I, Theorem 1.127 and Corollary 1.134, printed pp. 115–119"
---

## Statement

Assume countable choice. Every connected real Lie group with nilpotent Lie
algebra is a quotient of the BCH group on that algebra by a discrete central
subgroup.

## Facts & Assumptions

**Given:** Countable choice and a connected group $G$ with nilpotent Lie algebra $\mathfrak n$.

[L1] The simply connected cover of $G$ is quotiented by a discrete central kernel ([[thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations]]).

[L2] A simply connected nilpotent integration is isomorphic through its exponential to the BCH group ([[thm-the-exponential-map-of-a-connected-simply-connected-nilpotent-lie-group-is-a-diffeomorphism]]).

## Proof

**Proof technique:** combine the two classifications.

1.1 By [L1], $G\cong\widetilde G/\Gamma$ for a discrete central subgroup of its simply connected cover. The cover has the same nilpotent Lie algebra. [L1, given]

2.1 By [L2], exponential coordinates identify $\widetilde G$ with the BCH group on $\mathfrak n$. Transporting $\Gamma$ through this isomorphism preserves discreteness and centrality and gives the asserted quotient. The trivial kernel and zero-dimensional group are included. The countable-choice use is exactly that already declared in [L1]–[L2]. [L1, L2, step 1.1] ∎
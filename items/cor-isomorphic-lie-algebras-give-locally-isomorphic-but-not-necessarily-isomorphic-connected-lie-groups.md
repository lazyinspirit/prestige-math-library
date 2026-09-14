---
id: cor-isomorphic-lie-algebras-give-locally-isomorphic-but-not-necessarily-isomorphic-connected-lie-groups
kind: corollary
title: Lie algebras determine connected Lie groups only locally
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-equivalence-between-simply-connected-real-lie-groups-and-finite-dimensional-real-lie-algebras, thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, §3.8"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: "§3.8, Corollary 3.39 and following discussion, printed p. 39"
---

## Statement

Assume countable choice. Connected real Lie groups with isomorphic Lie
algebras have isomorphic identity neighborhoods as local Lie groups, but may
differ globally through distinct discrete central quotients of the same
simply connected integration.

## Facts & Assumptions

**Given:** Countable choice and connected groups $G_1,G_2$ with isomorphic
Lie algebras.

[L1] Their simply connected integrations are isomorphic
([[thm-equivalence-between-simply-connected-real-lie-groups-and-finite-dimensional-real-lie-algebras]]).

[L2] Each connected group is a discrete central quotient of that integration
([[thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations]]).

## Proof

**Proof technique:** compare covering charts.

1.1 Use [L1] to identify the two simply connected covers with one group $\widetilde G$. By [L2], write $G_i\cong\widetilde G/\Gamma_i$ for discrete central subgroups $\Gamma_i$. Choose an identity neighborhood in $\widetilde G$ meeting neither nonidentity kernel; both quotient maps restrict there to diffeomorphisms onto identity neighborhoods. Their composition is a local Lie-group isomorphism. [L1, L2, algebra]
2.1 Nothing forces $\Gamma_1=\Gamma_2$, so the global quotients need not be isomorphic; the line/circle and $SU(2)/SO(3)$ companion examples give exact witnesses. If both kernels are trivial, the groups are globally isomorphic. For the zero algebra all connected integrations are the one-point group. Countable choice is inherited exactly through [L1]–[L2]. [L1, L2, step 1.1] ∎
---
id: fs-the-canonical-map-to-profinite-completion-is-always-injective
kind: false-statement
title: "FALSE: the canonical map to the profinite completion is always injective"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-kernel-and-density-of-the-canonical-map-to-the-profinite-completion, def-finite-residual-and-residually-finite-group]
proof_strategy: "direct"
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
---

## Statement

The canonical map to the profinite completion is always injective.

## Facts & Assumptions

**Given:** A group $G$ that is not residually finite.

[L1] The canonical map is injective exactly when the group is residually finite
([[thm-kernel-and-density-of-the-canonical-map-to-the-profinite-completion]],
[[def-finite-residual-and-residually-finite-group]]).

## Refutation

**Proof technique:** direct.

1.1 Because $G$ is not residually finite, the finite residual $R_f(G)$ contains some nonidentity element. [given]

2.1 By [L1], the finite residual is exactly the kernel of the canonical map. Hence that nonidentity element lies in the kernel, so the canonical map is not injective. [L1, step 1.1]

3.1 Therefore the statement is false. [step 1.1, step 2.1] ∎

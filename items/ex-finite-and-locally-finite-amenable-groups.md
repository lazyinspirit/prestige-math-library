---
id: ex-finite-and-locally-finite-amenable-groups
kind: example
title: "Under the ultrafilter lemma, finite groups and locally finite groups are amenable"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [cor-solvable-and-locally-finite-groups-are-amenable, prop-finite-groups-are-amenable]
justified_by: []
aliases: []
landmark: false
generation:
  role: example
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references: []
---

## Example

Assume the ultrafilter lemma. Every finite group is amenable, and the direct
sum $\bigoplus_{n\in\mathbb N}\mathbb Z/2\mathbb Z$ is an infinite amenable
group.

## Facts & Assumptions

**Given:** The finite-group case, the countable direct sum $L=\bigoplus_{n\in\mathbb N}\mathbb Z/2\mathbb Z$, and the ultrafilter lemma.

[L1] Finite groups are amenable ([[prop-finite-groups-are-amenable]]).

[L2] Under the ultrafilter lemma, locally finite groups are amenable ([[cor-solvable-and-locally-finite-groups-are-amenable]]).

## Verification

**Proof technique:** direct.

1.1 The finite case is exactly [L1]. [L1, given]

2.1 Every finitely generated subgroup of $L$ is supported on finitely many coordinates and is therefore finite. Thus $L$ is locally finite, and [L2] makes it amenable. [L2, step 1.1, algebra] ∎

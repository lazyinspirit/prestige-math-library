---
id: fs-first-cohomology-classifies-all-subgroups-of-a-semidirect-product
kind: false-statement
title: "FALSE: first cohomology classifies all subgroups of a semidirect product"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-first-cohomology-classifies-complements-up-to-kernel-conjugacy]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
---

## Statement

First cohomology classifies all subgroups of a semidirect product.

## Facts & Assumptions

**Given:** The semidirect product $A\rtimes G$.

[L1] First cohomology classifies complements to the kernel up to kernel
conjugacy ([[thm-first-cohomology-classifies-complements-up-to-kernel-conjugacy]]).

## Refutation

**Proof technique:** direct.

1.1 Fact [L1] speaks only about complements to the canonical copy of $A$, meaning subgroups whose projection to $G$ is an isomorphism. [given, L1]

2.1 A subgroup such as the kernel copy $A$ itself or the trivial subgroup does not project isomorphically onto $G$ unless $G=1$. Therefore such subgroups are outside the classification of [L1]. The claim that all subgroups are classified is false. [L1, step 1.1, algebra] ∎

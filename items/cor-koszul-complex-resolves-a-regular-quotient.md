---
id: cor-koszul-complex-resolves-a-regular-quotient
kind: corollary
title: "Koszul Complex Resolves A Regular Quotient"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-regular-sequences-give-acyclic-koszul-complexes, thm-basic-koszul-homology, cor-tensor-products-of-finite-free-modules-and-dimension]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/062D"
pipeline_run: frontier-31a
---

## Statement

If $M$ is finite free and $\mathbf x$ is $M$-regular, then $K(\mathbf x;M)$ is a finite free resolution of $M/(\mathbf x)M$.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[thm-regular-sequences-give-acyclic-koszul-complexes]], [[thm-basic-koszul-homology]], [[cor-tensor-products-of-finite-free-modules-and-dimension]].

## Proof

**Proof technique:** direct.

1.1 Regularity gives zero positive homology and the degree-zero calculation gives $M/(\mathbf x)M$. [given, algebra]

2.1 Each term $\bigwedge^pR^n\otimes_RM$ is finite free because both factors are finite free, so this is a finite free resolution. [step 1.1, algebra] ∎

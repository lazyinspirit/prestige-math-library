---
id: lem-koszul-resolution-minimality-maximal-ideal-sequence
kind: lemma
title: "Koszul Resolution Minimality Maximal Ideal Sequence"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-koszul-complex-resolves-a-regular-quotient, def-minimal-free-resolution-over-a-local-ring, lem-koszul-differential-coordinate-formula]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/0621"
pipeline_run: frontier-31a
---

## Statement

Let $(R,\mathfrak m)$ be a local ring and let $M$ be a finite free $R$-module. If $\mathbf x\subseteq\mathfrak m$ and $K(\mathbf x;M)$ resolves $M/(\mathbf x)M$, then it is a minimal free resolution because every differential matrix has entries among the $x_i$.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[cor-koszul-complex-resolves-a-regular-quotient]], [[def-minimal-free-resolution-over-a-local-ring]], [[lem-koszul-differential-coordinate-formula]].

## Proof

**Proof technique:** direct.

1.1 In the exterior bases, every matrix coefficient of $d$ is $0$ or $\pm x_i$, hence belongs to $\mathfrak m$. [given, algebra]

2.1 Since $M$ is finite free, every term $M\otimes_R\bigwedge^pR^n$ is finite free. The assumed acyclicity and degree-zero quotient therefore make the Koszul complex a finite free resolution, and the containment from step 1.1 is precisely the local minimality criterion. [step 1.1, algebra] ∎

---
id: ex-koszul-homology-after-localisation
kind: example
title: "Koszul Homology After Localisation"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-koszul-homology-localises]
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
      url: "https://stacks.math.columbia.edu/tag/0621"
pipeline_run: frontier-31a
---

## Example

For $R=k[t]$, $M=R/(t)$, and sequence $(t)$, localization at $S=\{1,t,t^2,\ldots\}$ makes both the Koszul complex and its homology zero.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[cor-koszul-homology-localises]].

## Proof

**Proof technique:** direct.

1.1 After inverting $t$, the module $R/(t)$ is zero, so every term of the complex localizes to zero. [given, algebra]

2.1 Exact localization gives zero homology, agreeing with the localized Koszul complex. [step 1.1, algebra] ∎

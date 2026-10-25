---
id: thm-tower-law-for-finite-field-extensions
kind: theorem
title: "Tower law for finite extensions: $[L:F]=[L:K][K:F]$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-product-basis-for-a-tower-of-finite-extensions, def-extension-degree-and-finite-extension]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "A. W. Knapp, Basic Algebra, 2nd ed., Chapter IX, Section 1"
      url: "https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf"
pipeline_run: null
---

## Statement

Let $F\subseteq K\subseteq L$ be fields. If $K/F$ and $L/K$ are finite, then $L/F$ is finite and

$$[L:F]=[L:K][K:F].$$

## Facts & Assumptions

**Given:** Finite extensions $K/F$ and $L/K$.

[L1] Products of an $F$-basis of $K$ and a $K$-basis of $L$ form an $F$-basis of $L$ ([[lem-product-basis-for-a-tower-of-finite-extensions]]).

[L2] Extension degree is the size of a finite basis ([[def-extension-degree-and-finite-extension]]).

## Proof

**Proof technique:** direct.

1.1 Choose bases of sizes $m=[K:F]$ and $n=[L:K]$. [given, L2, choose]

2.1 By [L1], their $mn$ pairwise products form an $F$-basis of $L$. [step 1.1, L1]

3.1 Hence $L/F$ is finite and [L2] gives $[L:F]=mn=[L:K][K:F]$. [step 2.1, L2, algebra] ∎

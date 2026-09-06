---
id: thm-basic-koszul-homology
kind: theorem
title: "Basic Koszul Homology"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-one-element-koszul-homology, lem-koszul-differential-coordinate-formula]
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

## Statement

For a finite sequence $\mathbf x$, $H_0(K(\mathbf x;M))=M/(\mathbf x)M$, $H_i=0$ for $i>n$, and $H_n=\{m\in M:x_im=0\text{ for all }i\}$.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[cor-one-element-koszul-homology]], [[lem-koszul-differential-coordinate-formula]].

## Proof

**Proof technique:** direct.

1.1 The image in degree zero is $(x_1M+\cdots+x_nM)$, so $H_0=M/(\mathbf x)M$. [given, algebra]

2.1 There are no degrees above $n$, and the top differential kills $m$ exactly when every $x_i$ kills $m$. [step 1.1, algebra] ∎

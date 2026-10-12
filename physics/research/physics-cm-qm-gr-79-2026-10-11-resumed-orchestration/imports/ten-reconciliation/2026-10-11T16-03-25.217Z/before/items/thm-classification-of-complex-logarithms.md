---
id: thm-classification-of-complex-logarithms
kind: theorem
title: "All logarithms of $z\\ne0$ are $\\operatorname{Log}z+2\\pi i k$, $k\\in\\mathbb Z$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complex-logarithms-principal-logarithm-and-complex-powers, thm-kernel-and-fibres-of-complex-exponential, thm-complex-exponential-surjects-onto-the-punctured-plane]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I: Complex Numbers and the Complex Exponential"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Statement

For $z\ne0$, the solutions of $\exp w=z$ are exactly $\operatorname{Log}z+2\pi ik$ for $k\in\mathbb Z$. The conventions and prerequisite facts used below are recorded in [[def-complex-logarithms-principal-logarithm-and-complex-powers]], [[thm-kernel-and-fibres-of-complex-exponential]], [[thm-complex-exponential-surjects-onto-the-punctured-plane]].

## Facts & Assumptions

**Given:** $z\ne0$ and $w\in\mathbb C$.

## Proof

**Proof technique:** direct.

1.1 The principal logarithm is one solution by its polar definition. [given]

2.1 Equality $\exp w=\exp(\operatorname{Log}z)$ is equivalent to $w-\operatorname{Log}z\in2\pi i\mathbb Z$ by the fibre theorem. [given] ∎

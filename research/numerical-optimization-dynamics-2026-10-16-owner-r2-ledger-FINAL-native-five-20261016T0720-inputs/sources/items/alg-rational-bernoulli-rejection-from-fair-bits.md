---
id: alg-rational-bernoulli-rejection-from-fair-bits
kind: algorithm
title: "Unbiased rational Bernoulli sampling by bit rejection"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [thm-independent-fair-bit-streams-produce-uniforms]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Luc Devroye, Non-Uniform Random Variate Generation, Chapter XV §1.2, random-bit examples"
      url: "https://luc.devroye.org/chapter_fifteen.pdf"
    - title: "Luc Devroye, Non-Uniform Random Variate Generation, Chapter III §2, discrete inversion"
      url: "https://luc.devroye.org/chapter_three.pdf"
---

## Definition

Input integers $n\ge1$ and $0\le m\le n$, a stream of independent fair bits as in [[thm-independent-fair-bit-streams-produce-uniforms]], and an optional positive integer attempt cap $M_{\max}$ (or $M_{\max}=\infty$). If $m=0$, return $0$ without reading bits; if $m=n$, return $1$ without reading bits. Otherwise let $k$ be the least nonnegative integer with $N=2^k\ge n$. For each attempt, read a fresh non-overlapping block of $k$ bits and interpret it as a uniform integer $R\in\{0,\ldots,N-1\}$. If $R\ge n$, reject the block and start another attempt. If $R<n$, return $1$ when $R<m$ and $0$ otherwise. If a finite cap is reached before an accepted block, return status inconclusive and no Bernoulli value.

## Remarks

The finite-cap branch is not a sample with a substituted default value. Its success law and failure probability are proved separately. The algorithm assumes independent fair-bit blocks; an LCG or keyed deterministic stream does not satisfy that premise by definition.

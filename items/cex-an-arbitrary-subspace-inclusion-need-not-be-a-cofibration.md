---
id: cex-an-arbitrary-subspace-inclusion-need-not-be-a-cofibration
kind: counterexample
title: An arbitrary subspace inclusion need not be a cofibration
deps: ["def-cofibration-and-homotopy-extension-property", "prop-cofibrations-are-characterized-by-a-retraction-of-the-mapping-cylinder-strip", "def-subspace-topology-top", "thm-intermediate-value"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: May, A Concise Course in Algebraic Topology
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 6 §2 p.44 retraction criterion; explicit local witness
status: published
origin: pipeline
proof_strategy: direct
---

## Statement refuted

Every subspace inclusion is a cofibration, even when the subspace is closed.

## Facts & Assumptions

[F1] HEP applies to every target and compatible initial map and homotopy. [[def-cofibration-and-homotopy-extension-property]]

[F2] The subspace topology is inherited by taking traces of open sets. [[def-subspace-topology-top]]

[F3] A continuous real function on an interval takes every value between two of its values. [[thm-intermediate-value]]


## Counterexample

**Given:** The spaces, maps, and hypotheses in the statement above.

1.1 Take $X=\{0\}\cup\{1/n:n\ge1\}\subset\mathbb R$ and A={0}. The complement of A is open in X, since each point 1/n is isolated, so A is closed. Every path in X is constant: if two of its values differ, an irrational strictly between them would be a value of the composite real-valued path on the subinterval between those times by F3, but X contains only rational numbers. [F2, F3]

2.1 If A→X had HEP, use target $S=X\times\{0\}\cup\{0\}\times I$, initial map x↦(x,0), and homotopy (0,t)↦(0,t). F1 would give $R:X\times I\to S$ fixing those prescribed points. Its first coordinate along {1/n}×I is a path in X starting at 1/n and therefore constant by step 1.1. The only point of S with first coordinate 1/n is (1/n,0); hence $R(1/n,1)=(1/n,0)$ for every n. [F1, F2, step 1.1]

3.1 But $(1/n,1)\to(0,1)$ in $X\times I$. Continuity would make the second coordinates of their R-images converge to the second coordinate of $R(0,1)=(0,1)$, namely 1. They are all zero by step 2.1, a contradiction. Thus this explicit closed inclusion is not a cofibration. [F1, F2, step 2.1] ∎

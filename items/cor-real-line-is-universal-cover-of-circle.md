---
id: cor-real-line-is-universal-cover-of-circle
kind: corollary
title: '$\mathbb R\to\mathbb R/\mathbb Z$ is a universal covering'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-real-line-covers-real-line-mod-integers,
       thm-convex-subsets-have-trivial-fundamental-group,
       def-universal-covering-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Section 1.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 3, Section 8"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

The quotient projection

$$p:\mathbb R\longrightarrow\mathbb R/\mathbb Z,\qquad t\longmapsto[t],$$

is a universal covering space of the quotient circle, pointed by $0\mapsto[0]$.

## Facts & Assumptions

**Given:** The quotient projection $p:\mathbb R\to\mathbb R/\mathbb Z$.

[F1] The quotient projection $p$ is a covering map ([[thm-real-line-covers-real-line-mod-integers]]).

[F2] Every nonempty convex subset of Euclidean space is simply connected ([[thm-convex-subsets-have-trivial-fundamental-group]]).

[F3] A universal covering is a covering map whose total space is simply connected ([[def-universal-covering-space]]).

## Proof

**Proof technique:** direct.

1.1 The map $p$ is a covering by [F1]. [F1]

1.2 The real line is a nonempty convex subset of itself, so [F2] makes it simply connected. [F2]

2.1 Steps 1.1 and 1.2 satisfy both clauses of [F3], hence $p$ is a universal covering. [step 1.1, step 1.2, F3] ∎

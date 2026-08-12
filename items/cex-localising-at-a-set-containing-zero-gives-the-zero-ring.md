---
id: cex-localising-at-a-set-containing-zero-gives-the-zero-ring
kind: counterexample
title: 'If $0\in S$, localisation collapses: $S^{-1}R$ is the zero ring'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-localisation-zero-equality-and-kernel-criteria]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'The Stacks Project, Lemma 10.9.4'
      url: 'https://stacks.math.columbia.edu/tag/00CM'
pipeline_run: frontier-12
---

## Statement refuted

Localising a nonzero ring always produces a nonzero ring.

## Facts & Assumptions

**Given:** A nonzero commutative ring $R$ and a multiplicative subset $S$ containing $0$.

[F1] A fraction $r/s$ is zero exactly when $ur=0$ for some $u\in S$ ([[prop-localisation-zero-equality-and-kernel-criteria]]).

## Counterexample

**Proof technique:** direct.

1.1 Let $R$ be any nonzero commutative ring and let $S$ be multiplicative with $0\in S$, for example $S=R$. For every $r/s\in S^{-1}R$, choose $u=0$. Then $ur=0$, so [F1] gives $r/s=0$. [F1]

2.1 Thus $S^{-1}R$ has one element and is the zero ring, refuting the statement even though $R$ itself is nonzero. [step 1.1] ∎

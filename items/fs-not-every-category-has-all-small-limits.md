---
id: fs-not-every-category-has-all-small-limits
kind: false-statement
title: "FALSE: every category has all small limits"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-small-finite-and-large-limits-completeness-and-cocompleteness, def-equalizers-and-coequalizers]
justified_by: []
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Definition 3.2.1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement refuted

Every category has all small limits.

## Facts & Assumptions

**Given:** The category of nonempty sets and all functions.

[F1] A category is complete when every small diagram in it has a limit
([[def-small-finite-and-large-limits-completeness-and-cocompleteness]]).

[F2] An equalizer of $f,g:X\rightrightarrows Y$ must receive every map on which
$f$ and $g$ agree ([[def-equalizers-and-coequalizers]]).

## Refutation

**Proof technique:** counterexample.

1.1 Let $f,g:\{*\}\rightrightarrows\{0,1\}$ be constant at $0$ and $1$. For any nonempty set $X$, the unique function $X\to\{*\}$ has composites constant at different values, so it does not equalize $f,g$. [given]

2.1 Thus this parallel-pair diagram has no cone and in particular no equalizer [F2]. Its indexing category is finite and hence small. [F2, step 1.1]

3.1 By [F1], the category of nonempty sets is not complete. This category refutes the universal statement. [F1, step 2.1] ∎

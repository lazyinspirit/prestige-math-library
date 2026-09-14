---
id: thm-schauder-basis-implies-bounded-approximation-property
kind: theorem
title: "A Schauder basis implies the bounded approximation property"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-dependent-choice, def-schauder-basis-and-coordinate-functionals, def-approximation-property-and-bounded-approximation-property, thm-coordinate-functionals-of-a-schauder-basis-are-bounded, lem-pointwise-convergent-uniformly-bounded-operators-converge-uniformly-on-compact-sets]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Thomas Schlumprecht, Course Notes in Functional Analysis, Math 655"
      url: "https://people.tamu.edu/~t-schlumprecht/course_notes_math655_23c.pdf"
      locator: "Canonical projections and Theorem 3.1.6, printed pp.65-68"
pipeline_run: phase-2-next-18
---

## Statement

Assume DC. If a Banach space $X$ has a Schauder basis with basis constant $K$,
then $X$ has $K$-BAP, and hence AP.

## Facts & Assumptions

[A1] DC holds ([[def-dependent-choice]]).

[L1] Under DC, the partial-sum projections are bounded and satisfy
$\sup_N\|P_N\|=K<\infty$
([[thm-coordinate-functionals-of-a-schauder-basis-are-bounded]]).

[L2] By the defining expansion of a Schauder basis, $P_Nx\to x$ for every
$x\in X$ ([[def-schauder-basis-and-coordinate-functionals]]).

[L3] Uniformly bounded pointwise-convergent bounded operators converge
uniformly on compact sets
([[lem-pointwise-convergent-uniformly-bounded-operators-converge-uniformly-on-compact-sets]]).

[L4] $K$-BAP is compact-uniform approximation of the identity by finite-rank
maps of norm at most $K$ ([[def-approximation-property-and-bounded-approximation-property]]).

## Proof

**Proof technique:** direct.

**Given:** The objects and hypotheses in the Statement.

1.1 Each $P_N$ has range in $\operatorname{span}\{e_1,\ldots,e_N\}$ and hence [given, L1, A1, L2]
has finite rank. By [L1], using [A1] exactly through the coordinate-boundedness
theorem, $\|P_N\|\le K$; by [L2], $P_Nx\to x$ for every $x\in X$.
[A1, L1, L2]

2.1 Apply [L3] to $(P_N)$ and the identity. On each compact $C$, [given, L3, L4, step 1.1]
$\sup_{x\in C}\|P_Nx-x\|\to0$. Together with step 1.1, [L4] says precisely
that $X$ has $K$-BAP. Since BAP implies AP by [L4], the consequence follows.
[L3, L4, step 1.1] ∎

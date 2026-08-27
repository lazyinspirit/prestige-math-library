---
id: ex-dirichlet-function-is-borel-and-nowhere-continuous
kind: example
title: "The Dirichlet function is Borel measurable and nowhere continuous"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-q-and-irrationals-dense-r, prop-indicator-function-is-measurable-iff-its-set-is-measurable, thm-rationals-countable]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Section 3.2"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Example

The Dirichlet function

$$D := \mathbf{1}_{\mathbb{Q}} : \mathbb{R} \to \mathbb{R}$$

is Borel measurable and nowhere continuous.

## Facts & Assumptions

**Given:** The Dirichlet function $D=\mathbf{1}_{\mathbb{Q}}$.

[L1] The set of rationals is countable and hence Borel, so its indicator is
measurable. ([[thm-rationals-countable]],
[[prop-indicator-function-is-measurable-iff-its-set-is-measurable]])

[L2] Both $\mathbb{Q}$ and $\mathbb{R} \setminus \mathbb{Q}$ are dense in
$\mathbb{R}$. ([[lem-q-and-irrationals-dense-r]])

## Verification

**Proof technique:** direct.

1.1 By [L1], the function $D$ is Borel measurable. [L1]

2.1 Let $x \in \mathbb{R}$ and let $U$ be any neighbourhood of $x$. By [L2], the [step 1.1, given, L2]
set $U$ contains both a rational point and an irrational point, so $D$ takes
both values $1$ and $0$ on $U$. Therefore $D$ cannot be continuous at $x$.
Since $x$ was arbitrary, $D$ is nowhere continuous. [step 1.1, given, L2] ∎


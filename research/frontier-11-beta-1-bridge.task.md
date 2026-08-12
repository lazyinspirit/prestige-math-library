# frontier-11, batch 1 — add the ℝ² bridge item (one item)

You are **Beta-frontier-11-1**. Artifacts: `research/frontier-11-batch-1.*`.
Your pairs are already `sufficient`; this is one required addition, nothing else.

## Why

The owner has approved (2026-08-12) that order 54 builds ℂ as the stem field
$\mathbb{R}[x]/(x^2+1)$, materially rewriting four previously published items
whose construction was the coordinate plane. Alpha's re-check
(`research/frontier-11-alpha-recheck.md` §4.5a) found a consequence:

Published `def-complex-metric-convergence-and-continuity`, which stays at order
189, contains the load-bearing sentence

> Under the identification $\mathbb{C}=\mathbb{R}^2$, this is exactly the metric
> $d_2$ induced by the Euclidean norm of [[def-p-norms-on-rn]].

Today that identification comes from `def-complex-numbers-and-arithmetic`'s
"Set $\mathbb{C}=\mathbb{R}^2$". Once ℂ is the quotient, that sentence cites
nothing. Three consumers rest on the plane model directly or transitively:
`def-complex-metric-convergence-and-continuity`, `thm-complex-plane-is-complete`,
and `lem-complex-polynomial-growth-and-minimum-modulus`.

## What to add

One theorem on `field-extensions-and-the-complex-numbers`, placed **immediately
after `thm-complex-numbers-form-a-field`**:

**`thm-complex-numbers-are-the-real-coordinate-plane`** — the map
$a+bi \mapsto (a,b)$ is a bijection $\mathbb{C} \to \mathbb{R}^2$ carrying the
field operations to the coordinate formulas
$(a,b)+(u,v) = (a+u, b+v)$ and $(a,b)(u,v) = (au-bv, av+bu)$, and
$|a+bi| = \sqrt{a^2+b^2}$.

Source: **Srivastava §1.1**, already in your coverage ledger as the $\mathbb{R}^2$
treatment — retag the relevant harvested heading from its current disposition to
`included` naming this id, so the harvest stays true of disk.

## The boundary — this matters

State the coordinate bijection and the arithmetic **only**. Do **not** state the
norm identification with the Euclidean metric $d_2$: that needs `def-p-norms-on-rn`
at **order 167**, which from order 54 is a load-bearing forward reference that
hard-fails `forward-ref`. The metric identification stays at order 189, where
`def-complex-metric-convergence-and-continuity` already cites the p-norm items
directly. Writing $|a+bi|=\sqrt{a^2+b^2}$ is fine — that is your own modulus
definition unfolded, not the $\mathbb{R}^2$ norm.

Every dependency of this item must sit at order ≤ 54. Give it
`provenance.statement` and `provenance.proof` with a rationale in your notes, and
add its proof-contract entry.

## Leave everything else alone

Do not touch any other item, any other page, `plan-spec.json`, `items/`, or
`library/`. Re-run:

```
node tools/validate-plan.mjs research/plan-spec.json
node tools/coverage-checklist.mjs research/frontier-11-batch-1.coverage.json
```

# frontier-11, batch 2 — B-page leaf and undeclared-prereq failures

You are **Beta-frontier-11-2**. Artifacts: `research/frontier-11-batch-2.*`.

Your step-3 fixes were accepted on breadth and depth — both pairs are
`sufficient`. But the step-4 splice made `validate-plan.mjs` **FAIL**, and every
failure is yours. Ten errors, no other batch contributes any.

## 1. `b-leaf` — four items depend on B pages (hard error)

**A B page must be a leaf: nothing may depend on an item homed on an examples
page.** Four of your new items break this:

| your item | depends on | homed on |
|---|---|---|
| `cex-graph-of-x-sin-one-over-x-is-not-rectifiable` | `ex-harmonic-series-diverges` | `series-and-nonnegative-tests-examples` |
| `ex-cantor-function-graph-is-rectifiable-without-being-absolutely-continuous` | `ex-cantor-function-bv-not-absolutely-continuous` | `bounded-variation-and-riemann-stieltjes-examples` |
| `ex-dense-jump-integrand-with-dense-nondifferentiability` | `ex-monotone-function-discontinuous-exactly-at-the-rationals` | `monotone-functions-and-discontinuities-examples` |
| `ex-thomae-integral-function-differentiates-through-dense-discontinuities` | `ex-thomae-is-riemann-integrable-with-integral-zero` | `the-riemann-integral-examples` |

**The fix is the one batch 4 already used and had approved as D8:** cite the
**A-page theorem** that carries the mathematics you actually need, and prove the
specialisation you want inline. The published example may still be *mentioned* in
reader-facing prose — it just cannot be a formal `deps` entry.

Do this per item, not mechanically:

- For the harmonic series, cite the A-page divergence theorem on
  `series-and-nonnegative-tests`, not the example.
- For the Cantor function, cite the A-page bounded-variation/absolute-continuity
  results on `bounded-variation-and-riemann-stieltjes`.
- For the dense-discontinuity monotone function, cite the A-page results on
  `monotone-functions-and-discontinuities`.
- For Thomae, cite the A-page integrability results on `the-riemann-integral`.

If the A page genuinely does **not** carry what you need, say so explicitly in
your notes with the disk evidence — do not invent a citation, and do not quietly
drop the example. Re-deriving a short step inline is fine and expected.

## 2. `undeclared-prereq` — six edges not in the declared closure

- `the-fundamental-theorems-of-calculus` → `the-total-derivative` (order 229)
- `the-fundamental-theorems-of-calculus` → `uniform-convergence-of-functions` (order 169)
- `the-fundamental-theorems-of-calculus-examples` → `monotone-functions-and-discontinuities-examples`
- `the-fundamental-theorems-of-calculus-examples` → `the-riemann-integral-examples`
- `arc-length-and-rectifiable-curves-examples` → `series-and-nonnegative-tests-examples`
- `arc-length-and-rectifiable-curves-examples` → `bounded-variation-and-riemann-stieltjes-examples`

The four `*-examples` edges disappear when you fix §1 — they exist only because
of the B-page dependencies.

The two on the A page are a real decision: **either declare them in that page's
`requires`, or drop the dependency.** Both targets are published and both sit
below order 239, so declaring is legal. Declare only if the dependency is
genuine — if `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle`
really needs the total derivative, say so and declare it; if the item can be
stated for a one-variable parameter without it, drop the edge instead. Do not
declare a dependency you do not use, and do not use one you have not declared.

## Do not

Touch any other batch, `plan-spec.json`, `items/`, or `library/`. The
orchestrator re-runs the splice after you — it is idempotent, so your corrected
manifest simply supersedes.

## Verify before reporting

```
node tools/coverage-checklist.mjs research/frontier-11-batch-2.coverage.json
```

`validate-plan` runs against the spliced spec, which you cannot regenerate; the
orchestrator runs it. Report exactly which of the ten errors each change is
meant to clear.

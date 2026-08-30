# frontier-24 — Alpha group `c`, Step 3 scaffold review

Group `c` covers batches `4`, `5`, and `6`: `signed-and-complex-measures-hahn-and-jordan`, `the-riemann-mapping-theorem`, `bloch-schottky-and-picard`, `mittag-leffler-and-runges-theorem`, and `the-gamma-function`. I read the current `research/frontier-24-batch-{4,5,6}.{pages.json,coverage.json,notes.md}` artifacts, the controlling design sections in `research/plan-measure-theory-track.md` and `research/plan-complex-analysis-track.md`, and the live `research/plan-spec.json`.

I refreshed `research/frontier-24-alpha-c-scope-decisions.json` and resolved all `4` current decline rows as `3` `stands` rows and `1` `owner-decision` row. The required check passes on Saturday, August 29, 2026:
`node tools/scope-decisions.mjs check --run frontier-24 --group c`
-> `scope-decisions: 4 current decline(s), 0 error(s)`.

No owned A page is near the Step-3 split ceiling. The A-page item counts are `28`, `18`, `16`, `18`, and `20`.

I repaired one in-scope scaffold defect during this review: the CA-23 agreement remark in batch `5` no longer declares a formal `forward_refs` target that the live plan does not expose. The companion notes now describe that seam honestly as a later-proof remark without a current formal target id.

| A page | batch | A items | B items | verdict | notes |
|---|---:|---:|---:|---|---|
| `signed-and-complex-measures-hahn-and-jordan` | 4 | 28 | 15 | **sufficient** | route, sources, and deferments are sufficient |
| `the-riemann-mapping-theorem` | 5 | 18 | 9 | **sufficient** | classical extremal route and source stack are sufficient |
| `bloch-schottky-and-picard` | 5 | 16 | 7 | **sufficient** | sufficient after removing the invalid formal forward reference |
| `mittag-leffler-and-runges-theorem` | 6 | 18 | 7 | **sufficient** | Runge/Mittag-Leffler route and source synthesis are sufficient |
| `the-gamma-function` | 6 | 20 | 7 | **sufficient** | amended complex-only route is source-backed and spec-aligned |

Machine half: `research/frontier-24-alpha-c-step3-verdicts.json`.

## Findings

| id | page | severity | disposition |
|---|---|---|---|
| C5-1 | `bloch-schottky-and-picard` | high | repaired in manifest and batch notes |

### C5-1 — repaired: CA-23 declared a formal forward reference to a target the live plan does not expose

The current batch-5 manifest had `rem-agreement-between-classical-and-nevanlinna-picard-theorems` declaring `forward_refs: [cor-nevanlinna-picard-theorems]`. That target is named in the CA-NV-2 design block at `research/plan-complex-analysis-track.md:3801`, but it is not exposed by the live `research/plan-spec.json`, by any current `frontier-24` batch manifest, or by any authored item on disk. Under the repo's `fwdcheck` rules, that is not an honest current formal forward edge.

This was a scaffold defect, but a narrow one. The page does not need a forward dependency for authoring; it only needs the non-load-bearing agreement remark that the design asks for. I repaired the current scaffold by removing the invalid `forward_refs` declaration from `research/frontier-24-batch-5.pages.json` and updating `research/frontier-24-batch-5.notes.md` to state the seam in that honest form.

The remaining Eremenko coverage decline is still an `owner-decision`, not a blocker: the higher-dimensional Cartan extension is genuinely later material, but the live plan still names no exact later destination page or item for it.

## Page review

### `signed-and-complex-measures-hahn-and-jordan`

This pair is sufficient. The A page follows the MT-12 route in the controlling design: signed and complex measure conventions, positive/negative/null sets, the positive-set lemma, Hahn and Jordan decompositions, total variation, integration against signed and complex measures, the finite-total-variation normed-space/completeness block, and the real density case. The batch-4 notes record the design/spec prerequisite mismatch honestly and keep the manifest on the live spec, while also explaining why the predecessor closure already reaches the design-named suppliers.

The current scope rows are exact on current disk. Bass Example 12.6 is a duplicate mutual-singularity witness relative to the stronger Cantor and density examples already scaffolded on the B page. Bass Exercise 12.4 is a weaker downstream comparison fact than the retained extremal formulas. Hunter Theorem 6.30 lands exactly on `the-radon-nikodym-theorem-and-lebesgue-decomposition` at order `288.025`, so that deferment is precise.

**Verdict:** sufficient.

### `the-riemann-mapping-theorem`

This pair is sufficient. The 18-item A page keeps the exact four-stage extremal proof the CA-16 design requires: nonempty extremal family, bounded derivative and Montel attainment, Hurwitz-to-univalence, and the square-root enlargement forcing surjectivity. The page then closes the classical univalent-function consequences through the area theorem, Bieberbach's second-coefficient bound, Koebe quarter, growth, distortion, and the normalized uniqueness remark.

The source stack is sufficient on the current bytes: Weber and Rudin cover the extremal proof and the univalent-function block directly, and batch `5` now carries `5/5` fetch-verified source rows. No additional forward edge, page split, or reading-order change is needed.

**Verdict:** sufficient.

### `bloch-schottky-and-picard`

This pair is sufficient after C5-1. The 16-item A page matches the CA-23 design route: Bloch and Landau remain distinct, the omitted-values logarithm lemma is retained as a real bridge item, Schottky and Montel-Caratheodory stay explicit, and the page closes with little Picard, the punctured-disc omitted-values lemma, great Picard, the meromorphic corollaries, and the agreement remark.

The only scaffold defect was the invalid formal forward reference now removed from the manifest. The remaining Cartan row in Eremenko is not a hidden prerequisite for this page's one-variable route; it is an honest owner-level routing question because the live plan still lacks an exact destination for that higher-dimensional continuation.

**Verdict:** sufficient after repair.

### `mittag-leffler-and-runges-theorem`

This pair is sufficient. The A page follows the CA-19 route in the design: principal parts and Runge pole sets, the grid-cycle and pole-pushing lemmas, compact-set and plane-domain Runge, whole-plane and plane-domain Mittag-Leffler, the cotangent expansion and its differentiated corollary, and the zero-divisor / holomorphic-quotient / meromorphic-field consequences.

The batch-6 notes are honest about the synthesized part of the route: the zero-divisor and quotient corollaries are not falsely claimed as verbatim source theorems, but they are explicitly required by the design and properly sourced through the domain-level Runge/Mittag-Leffler machinery plus the already-published whole-plane Weierstrass theorem. No scope-denial row remains open for this pair.

**Verdict:** sufficient.

### `the-gamma-function`

This pair is sufficient. The A page now keeps the complex-only CA-21 route the seam amendment requires: Euler's integral and holomorphy on `Re z > 0`, the bridge to the published real Gamma page, the functional equation, meromorphic continuation, Euler's limit formula, the reciprocal-Gamma Weierstrass product, zero-freeness, reflection, Beta-Gamma, multiplication, duplication, sectorial Stirling, the Hankel contour setup, and the periodic-perturbation false statement.

The batch-6 notes correctly treat the stale 21-item inventory in the older design table as superseded by the seam amendment. The live spec already carries the added MT-11 prerequisite, the manifest matches it, and the source rows for batch `6` are all fetch-verified on current bytes.

**Verdict:** sufficient.

## Checks run

- `node tools/scope-decisions.mjs refresh --run frontier-24 --group c`
  -> `scope-decisions: c: 4 decline(s), 4 pending`
- `node tools/scope-decisions.mjs check --run frontier-24 --group c`
  -> `scope-decisions: 4 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-24-batch-4.coverage.json research/frontier-24-batch-5.coverage.json research/frontier-24-batch-6.coverage.json --require-destination`
  -> `coverage-checklist: 5 page(s), 145 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-24-batch-4.pages.json research/frontier-24-batch-5.pages.json research/frontier-24-batch-6.pages.json`
  -> `content-policy: 145 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-4.coverage.json`
  -> `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-5.coverage.json`
  -> `source-fetch-check: 5/5 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-6.coverage.json`
  -> `source-fetch-check: 4/4 source(s) fetch-verified`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with only the repository's standing `redundant-prereq` advisories

## Final verdicts

All five owned A pages are sufficient for authoring on the current Saturday, August 29, 2026 bytes. Group `c` closes Step 3 with `3` `stands` scope rows, `1` `owner-decision` scope row, no split obligation, and no remaining scaffold blocker.

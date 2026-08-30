# frontier-25 independent reader report — batch 5

Run: `frontier-25`
Role: independent reader, step 6a
Batch: `5`
Pages: `arithmetic-functions-and-dirichlet-convolution`, `arithmetic-functions-and-dirichlet-convolution-examples`
Reader date: Sunday, August 30, 2026

## Opened scope

- Batch artifacts opened on disk: `research/frontier-25-dispatch/reader-reader-5.prompt.md`, `research/frontier-25-batch-5.pages.json`, `research/frontier-25-batch-5.notes.md`, `research/frontier-25-batch-5.coverage.json`, `research/frontier-25-batch-5.proof-contracts.json`, and `research/frontier-25-alpha-a-step3-scaffold-review.md`.
- Page files opened on disk: `library/number-theory/arithmetic-functions-and-dirichlet-convolution.md` and `library/number-theory/arithmetic-functions-and-dirichlet-convolution-examples.md`.
- Scoped item files opened on disk: all 27 batch-5 items.
- Published dependency items opened on disk: `def-coprime`, `def-divides-in-z`, `lem-divisor-bound`, `def-divisibility-poset-on-positive-integers`, `lem-divisibility-poset-is-lower-finite-and-factorises`, `def-finite-sum-in-a-commutative-monoid`, `def-sum-over-a-finite-index-set`, `lem-finite-sum-reindexing-and-fubini`, `thm-complex-numbers-form-a-field`, `thm-strong-induction`, `thm-fundamental-theorem-of-arithmetic`, `thm-canonical-prime-factorisation`, `def-natural-logarithm`, `thm-natural-logarithm-laws`, `cor-classical-mobius-inversion`, `prop-divisor-sum-identity-for-monic-irreducibles-over-a-finite-field`, `thm-sum-of-totients-over-divisors`, and `def-number-theoretic-mobius-function`.
- External source re-check: I opened the Odlyzko–te Riele disproof metadata through the De Gruyter DOI landing and the CWI/UMN index pages via the web to confirm the historical counterexample metadata for `cex-the-mertens-conjecture-is-false`. The current batch item does not claim an explicit witness value, only existence of a counterexample.

Total distinct item files opened: 45 (`27` scoped + `18` published dependencies), plus both page files and the batch artifacts above.

## Findings

### Repaired

#### R5-1 — `thm-dirichlet-convolution-preserves-multiplicativity`

- Exact location: proof step `3.1` on the initial read.
- Defect: the inverse-half proof replaced `h(a)h(b)` by `h(ab)` for proper divisor pairs in the double sum without any induction hypothesis licensing that substitution.
- Why it matters: that is a load-bearing unlicensed inference inside the proof of multiplicativity of the Dirichlet inverse.
- Severity: fatal.
- Repair: rewrote the inverse-half proof as a strong-induction argument on `mn`, added an explicit base step, moved the comparison with the inverse recursion into a final step, changed the item proof technique to `induction`, added `thm-strong-induction` as a dependency in the item and batch manifest, and synchronized `research/frontier-25-batch-5.proof-contracts.json`.

#### R5-2 — `thm-dirichlet-convolution-invertibility-criterion`

- Exact location: frontmatter dependency list, proof step `1.3`, proof step `2.1`, and the displayed recursion.
- Defect: step `3.1` used `thm-dirichlet-convolution-commutative-ring` without declaring it in `deps`; step `2.1` cited ordinary induction for a strong-induction recursion argument; the displayed recursion also used a multiline `$$...$$` block that rendercheck flags as mis-rendering.
- Why it matters: the dependency closure was incomplete, the induction license was imprecise in a load-bearing existence/uniqueness argument, and the displayed statement did not render safely.
- Severity: fatal.
- Repair: added `thm-dirichlet-convolution-commutative-ring` and `thm-strong-induction` to the item and manifest dependency lists, made the divisor reindexing explicit in step `1.3`, rewrote step `2.1` to invoke strong induction on the shifted recursion, flattened the displayed recursion to a single-line display, and synchronized the proof contract.

#### R5-3 — `thm-von-mangoldt-divisor-sum-identity`

- Exact location: frontmatter dependency list and batch manifest dependency list.
- Defect: proof step `3.1` explicitly cited `[[def-dirichlet-convolution]]`, but the item and `research/frontier-25-batch-5.pages.json` both omitted that dependency.
- Why it matters: the current dependency record did not match the proof text.
- Severity: fatal.
- Repair: added `def-dirichlet-convolution` to the item and batch manifest dependency lists.

#### R5-4 — render defects in statement displays

- Exact location: `thm-dirichlet-convolution-invertibility-criterion`, `def-von-mangoldt-function`, and `prop-liouville-convolution-square-indicator`.
- Defect: each item used a multiline `$$...$$` display block. `tools/rendercheck.mjs` flags that source shape as a hard mis-render.
- Why it matters: the mathematics on disk can be correct while the public render is broken.
- Severity: fatal for the rendered artifacts.
- Repair: rewrote all three displays into single-line display blocks. No mathematical content changed.

#### R5-5 — batch-5 proof-contract boundary rows

- Exact location: `research/frontier-25-batch-5.proof-contracts.json`.
- Defect: three `empty` boundary rows were recorded as `not_applicable` even though the corresponding statements visibly quantify over divisor sums, and four example `iff-forward` / `iff-reverse` rows reused the same boilerplate rationale, which boundary audit flags as non-determined template reuse.
- Why it matters: the contract should record the actual boundary determination, not a generic placeholder, and Step 6 explicitly requires contract checking.
- Severity: nonfatal contract defect.
- Repair: changed the three `empty` rows to anchored `checked` evidence naming the statement/step and the nonempty divisor set `{1, ...}`, and replaced the repeated example rationales with item-specific reasons. The final boundary audit reports no contradicted dispositions and no template cluster.

### Uneditable findings

- None. Every confirmed batch-5 defect I found was repairable within the assigned in-flight scope.

## Files edited

- `items/thm-dirichlet-convolution-invertibility-criterion.md`
- `items/thm-dirichlet-convolution-preserves-multiplicativity.md`
- `items/def-von-mangoldt-function.md`
- `items/prop-liouville-convolution-square-indicator.md`
- `items/thm-von-mangoldt-divisor-sum-identity.md`
- `research/frontier-25-batch-5.pages.json`
- `research/frontier-25-batch-5.proof-contracts.json`

No page prose, published content, another batch, or `research/plan-spec.json` was edited. No judge or stamp was run.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-dirichlet-convolution-invertibility-criterion.md items/thm-dirichlet-convolution-preserves-multiplicativity.md items/def-von-mangoldt-function.md items/prop-liouville-convolution-square-indicator.md items/thm-von-mangoldt-divisor-sum-identity.md`
  Result: all five files were unchanged on the final reflow pass.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-dirichlet-convolution-invertibility-criterion.md items/thm-dirichlet-convolution-preserves-multiplicativity.md items/def-von-mangoldt-function.md items/prop-liouville-convolution-square-indicator.md items/thm-von-mangoldt-divisor-sum-identity.md`
  Result: four proof-bearing items pass; the definition item is correctly omitted from the final proof-bearing count.
- `node tools/proof-contract.mjs research/frontier-25-batch-5.proof-contracts.json --strict`
  Result: `proof-contract: 0 error(s), 0 warning(s), 17/17 item(s) checked`.
- `node tools/boundary-audit.mjs research/frontier-25-batch-5.proof-contracts.json --items-dir items --fail-on-contradicted`
  Result: `136` boundary rows, `82` `not_applicable`, no contradicted dispositions, no template cluster.
- `node tools/rendercheck.mjs <29 batch-5 page/item files>`
  Result after the display repairs: `OK — 29 file(s) ... every math span parses under the real KaTeX, and every frontmatter block parses under the renderer's YAML parser.`
- `node tools/content-policy.mjs research/frontier-25-batch-5.pages.json`
  Result: `content-policy: 27 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs research/frontier-25-batch-5.coverage.json --require-destination`
  Result: `coverage-checklist: 1 page(s), 56 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/citecheck.mjs <27 batch-5 item files>`
  Result: `citecheck: 27 item(s) scanned` and `OK — every recognised elementary move cites a home that states it.`
- `node tools/prosecheck.mjs <29 batch-5 page/item files>`
  Result: `0` errors and `1` heuristic warning (`count-in-prose` on the B-page sentence “The last two examples ...”). I left it unchanged because it is accurate local page prose, not a false or overstrong claim.
- `node tools/risk-report.mjs research/frontier-25-batch-5.proof-contracts.json --items thm-dirichlet-convolution-commutative-ring,thm-dirichlet-convolution-invertibility-criterion,thm-dirichlet-convolution-preserves-multiplicativity,thm-multiplicative-functions-determined-by-prime-powers,prop-divisor-functions-under-dirichlet-convolution,thm-von-mangoldt-divisor-sum-identity,cor-von-mangoldt-mobius-inversion-formula,cor-number-of-monic-irreducible-polynomials-over-a-finite-field,prop-liouville-convolution-square-indicator,ex-dirichlet-convolution-table-through-twelve,ex-dirichlet-inverse-recursion,ex-divisor-counting-and-sum-prime-power-formulas,ex-euler-totient-as-a-mobius-convolution,ex-von-mangoldt-divisor-sum,ex-liouville-square-indicator,cex-multiplicative-does-not-mean-completely-multiplicative,cex-the-mertens-conjecture-is-false`
  Result: `risk-report: 0 error(s), 17 item(s) routed`.
- `git diff --check -- items/thm-dirichlet-convolution-invertibility-criterion.md items/thm-dirichlet-convolution-preserves-multiplicativity.md items/def-von-mangoldt-function.md items/prop-liouville-convolution-square-indicator.md items/thm-von-mangoldt-divisor-sum-identity.md research/frontier-25-batch-5.pages.json research/frontier-25-batch-5.proof-contracts.json`
  Result: clean.

`node tools/citation-fidelity.mjs research/frontier-25-batch-5.proof-contracts.json --items-dir items --fail-on-missing-quote` is not applicable here: the current batch-5 contract contains no citation-quote rows, and the tool correctly refuses to certify an empty citation scope.

## Blockers

- None.

## Per-page verdicts

- `arithmetic-functions-and-dirichlet-convolution`: repaired and clean. I found one load-bearing proof defect in the inverse-multiplicativity argument, two dependency-record defects, one render defect, and one contract-boundary defect cluster; all are repaired on current disk.
- `arithmetic-functions-and-dirichlet-convolution-examples`: clean. The worked examples, counterexamples, and page body remain mathematically sound on the current bytes; no uneditable defect remains.

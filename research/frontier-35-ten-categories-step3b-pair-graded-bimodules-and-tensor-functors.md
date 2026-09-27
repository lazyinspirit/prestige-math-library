# Step 3b — pair `graded-bimodules-and-tensor-functors` (batch 14)

- Run: `frontier-35-ten-categories` · role `alpha-high` ·
  label `step3b-pair-graded-bimodules-and-tensor-functors-59fcd6d177b97dee`
- Covers: A `graded-bimodules-and-tensor-functors` (order 717, 9 items) and
  B `graded-bimodules-and-tensor-functors-examples` (order 718, 3 items)
- Batch file: `research/frontier-35-ten-categories-batch-14.pages.json`
  (sibling pair `homological-gaussian-elimination` 728/728.2 preserved untouched)

## 1. Authored inventory

All 12 items are written as `status: draft`, `origin: pipeline`,
`pipeline_run: frontier-35-ten-categories`, with `deps`, `provenance`,
`sources.references` and `proof_strategy` registered in the batch manifest and
in `research/frontier-35-ten-categories-batch-14.proof-contracts.json`; both
pages exist under `library/homological-algebra/`.

| Order of authoring | Item | Kind |
|---|---|---|
| 1 | `def-graded-ring-module-bimodule-and-internal-shift` | definition |
| 2 | `lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise` | lemma |
| 3 | `def-graded-balanced-tensor-product-and-homogeneous-hom` | definition |
| 4 | `lem-graded-balanced-tensor-and-shift-isomorphisms` | lemma |
| 5 | `def-finitely-generated-graded-projective-module` | definition |
| 6 | `thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules` | theorem |
| 7 | `thm-bimodule-tensor-exactness-and-projective-preservation` | theorem |
| 8 | `thm-graded-bimodule-tensor-hom-adjunction` | theorem |
| 9 | `prop-restriction-and-extension-of-scalars-on-graded-module-categories` | proposition |
| 10 | `ex-internal-shift-versus-a-change-of-degree` | example |
| 11 | `ex-right-flat-bimodule-with-nonprojective-output` | example |
| 12 | `ex-left-projective-bimodule-with-nonexact-tensor` | example |

Every promised result of the design rows HA-18.1–18.9 and the three B witnesses
is present; no claim was dropped, no pair added and no published file edited.

**Scaffold repairs made (all local to this pair).**
1. `thm-graded-bimodule-tensor-hom-adjunction` step 4.2 cited "steps 1.1 to 1.3";
   corrected to "steps 1.1 to 3.1" (the ungraded bijection reuses steps 1.1–3.1).
2. `ex-internal-shift-versus-a-change-of-degree` previously justified an
   inequality with "unless x is a unit"; replaced by the explicit separating
   witness `A(2)_0=kx^2≠0` while `A(-2)_0=A_{-2}=0`.
3. `def-finitely-generated-graded-projective-module` now states the `n=0` empty
   family (= zero module) and proves equivalence with ordinary finite generation
   of the underlying module instead of asserting it.
4. Dependency additions: `def-graded-ring-module-bimodule-and-internal-shift` for
   `lem-graded-balanced-tensor-and-shift-isomorphisms` and for
   `thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules`.
5. Rendering repairs (no mathematics changed): four `$$…$$` blocks joined to one
   source line, and the nested `$` inside `\text{ $A$-linear}` removed by naming
   `Hom_A^{ungr}(P,Q)` in the same definition.

**Design corrections carried from Step 1/3a.** The published
`thm-hom-tensor-adjunction-for-modules` and `def-restriction-and-extension-of-scalars`
are commutative-ring results and are *not* used: the associative/graded currying
and the restriction/extension clauses are proved locally from
`thm-universal-property-of-module-tensor-products` and
`thm-bimodule-actions-induced-on-tensor-products`. `M{r}_d=M_{d-r}` is fixed as
the internal shift, dictionary `M{r}=M(-r)` with the published twist; no super or
Koszul sign is introduced; `HOM_A` is the finite-sum homogeneous Hom and is
explicitly distinguished from the ungraded Hom (witness in the definition's
Remark); the two hypotheses of the tensor functor are kept separate; the whole
pair is choice-free (no AC dependency, only finite choices of lifts).

**Item decisions.** `tools/step3-decisions.mjs record-item --decision accept
--confidence 1` recorded for all 12 items with examined dependency IDs equal to
their declared `deps`, each after the complete item, page, manifest, coverage and
contract were written. `step3-decisions.mjs check --phase final` lists **zero**
work entries for this pair (run-wide 237 accepted; the remaining work belongs to
other pairs).

**Scope declines.** `scope-decisions.mjs refresh --group f` then `stands` with
row-specific evidence for this page's 5 declines; the other 11 group-`f` rows
(batch 12 and the Gaussian pair) were left `pending` for their owners — no owner
ruling was invented. `scope-decisions check` no longer lists any row of this pair.

## 2. Checks actually run (real outputs)

| Check | Result |
|---|---|
| `precheck` explicit paths (12 items) | 9 PASS, 3 definitions `n/a`, 0 failing |
| `rendercheck` (12 items + 2 pages) | OK — no nested/unbalanced delimiters, no multiline display, KaTeX + YAML parse |
| `content-policy` item mode, batch-14 manifest | 26 scoped items, 14 errors — **all** are `scope-item-missing` for the sibling's unwritten items; 0 for this pair |
| `proof-contract --strict` batch-14 contracts | `0 error(s), 0 warning(s), 12/12 item(s) checked` |
| `finite-smoke` batch-14 contracts | 0 errors |
| `risk-report` batch-14 contracts | 0 errors, 12 items routed (routing only) |
| `boundary-audit --fail-on-contradicted --fail-on-template` | 0 contradicted, 0 template clusters, 0 items not yet authored |
| `manifest-deps` (all 17 manifests) | 657 items, 0 errors |
| `validate-plan research/plan-spec.json` | 4 errors, none in this pair (see §4) |
| `coverage-checklist --require-destination` | 2 pages, 31 harvested results, 0 errors/warnings |
| `source-fetch-check` batch-14 coverage | 8/8 sources fetch-verified, 0 drops |
| `source-backing` batch-14 coverage | 11 authored results, all backed |
| `author-check.mts frontier-35-ten-categories 14` | `ok:false` — precheck inside PASSes all 9 proof-bearing items of this pair and proof-contract `ok:true`; the three failing sub-gates fail only on the sibling's 14 absent item files |
| `depcheck`, `fwdcheck`, `extcheck`, `prosecheck`, `depsource`, `pathcheck` | run repo-wide; **no finding names any batch-14 item or page** of this pair. Their non-green rows are pre-existing debt elsewhere (e.g. the `brauer-characters-and-decomposition-matrices` page cycle, 333 `published-unaudited` rows, 3 `justification-backward` rows in complex analysis/probability) |
| `frontier-dependency-ledger refresh --require-reviewed` | passes; 17 edges supplied by batch 14 (batches 16/17), 0 consumed by batch 14 |
| `content-policy --manifest-only` batch 14 | 12 `batch-item-already-exists` — expected pre-splice state until Step 4 splices the ids into `plan-spec.json` |

Local suppliers added: **none**. No `items/` file outside this pair's 12 was
created or edited, and no published item was touched.

## 3. Published concerns for the canonical ledger (not edited here)

**`thm-chain-homotopic-maps-induce-the-same-map-on-homology` — potentially
defective published proof (confidence: high; a proof gap, not a refutation).**
Its Proof step 1.1 starts from an element `z∈Z_n(C)` and evaluates `f_n(z)`,
`g_n(z)`, `s_n(z)`. An arbitrary abelian category need not present its objects
as sets with elements, and the file supplies no generalized-element/Yoneda or
embedding argument, so the written proof does not establish the stated
generality. Downstream consumer to re-check:
`thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism`. Required suppliers
(all published): `def-homology-object-of-a-chain-complex`,
`lem-a-chain-map-carries-cycles-to-cycles-and-boundaries-to-boundaries`,
`thm-a-chain-map-induces-a-well-defined-map-on-homology`,
`def-kernels-and-cokernels-as-equalizers-and-coequalizers`. Repair strategy:
restrict the homotopy identity along the categorical cycle kernel, factor its
`dh` term through the boundary image, and use the homology cokernel to show the
induced difference vanishes — no element is chosen from an arbitrary object.
This finding belongs to the sibling Gaussian pair's scope; it does not affect
this pair (no dependency path reaches it), and the canonical
`research/published-consumer-supplier-ledger.md` was deliberately not edited.

No other published item was found suspect while checking this pair's suppliers.

## 4. Pre-splice plan mismatches and cross-owner items for Step 4

- `validate-plan` reports 4 `undeclared-prereq` errors on
  `homogeneous-resultants-and-projective-intersection-length` (and its examples
  page): its items depend on `linear-algebra-methods-in-combinatorics`,
  `fibre-products-base-change-and-scheme-theoretic-fibres` and
  `the-fundamental-theorem-of-algebra`, none of which is in the page's declared
  `requires` closure. That page is owned by another pair; this dispatch neither
  edited it nor inferred a remedy.
- Orders 717/718 carry `items: []` in `research/plan-spec.json`; Step 4 must
  splice the 12 authored rows (`splice-plan`), which also clears the 12
  `batch-item-already-exists` rows reported by `content-policy --manifest-only`.
- Cross-batch ledger: the owned consumer input
  `research/frontier-35-ten-categories-batch-14.cross-batch-dependencies.json`
  is `[]` — correct, because every page requirement of this pair is published.
  Batch 16's input file still carries 16 `open` rows whose *supplier* is this
  pair; their owners (batches 16 and 17) may now re-verify against the authored
  supplier items. The dispatch's own rule — only the consumer's owner edits its
  input file — was respected and no sibling row was touched.

## 5. Open obligations at handoff

1. The sibling Gaussian pair in batch 14 is being authored concurrently; its 14
   item files, contracts and decisions are outstanding, and the batch-level
   `author-check` (and batch `content-policy` item mode) cannot go green until
   they exist.
2. Group-`f` scope decisions for batch 12 and the Gaussian pair remain `pending`
   for their owners; run-wide `scope-decisions check` therefore still fails, with
   no failing row belonging to this pair.
3. The published `thm-chain-homotopic-maps-induce-the-same-map-on-homology`
   finding in §3 stays with the owner/serial reconciler.
4. Step 4 plan splice for orders 717/718 as in §4.

Checkpoint records for every item (claim, conventions, locators, dependencies,
decision, checks, gaps) are appended as a Step 3b section in
`research/frontier-35-ten-categories-batch-14.notes.md`.

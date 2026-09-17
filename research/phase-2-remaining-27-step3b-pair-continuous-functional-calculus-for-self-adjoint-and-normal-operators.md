# Step 3b — pair `continuous-functional-calculus-for-self-adjoint-and-normal-operators`

- Run: `phase-2-remaining-27`, role alpha-high, batch 5, label
  `step3b-pair-continuous-functional-calculus-for-self-adjoint-and-normal-operators-d50cba1fead75c13`
- A page: `continuous-functional-calculus-for-self-adjoint-and-normal-operators` (26 items)
- B page: `continuous-functional-calculus-for-self-adjoint-and-normal-operators-examples` (7 items)
- Status: **all 33 items and both pages authored and checked; no owner escalation**
- Outputs: the 33 `items/*.md` files, the two
  `library/functional-analysis/` pages, the batch-5 proof-contract entries,
  the refreshed batch-5 cross-batch dependency input and unified ledger, and 33
  current `accept` item decisions (Step 3 final check: 33/33 closed for this pair).

## Completed IDs

A page, in prerequisite order:
`lem-bounded-hilbert-operators-form-a-c-star-algebra`,
`lem-spectrum-of-a-self-adjoint-operator-is-real`,
`lem-spectrum-of-a-positive-operator-is-nonnegative`,
`def-order-on-bounded-self-adjoint-operators`,
`def-c-star-algebra-generated-by-a-normal-operator`,
`cor-normal-operator-norm-equals-spectral-radius`,
`cor-normal-operator-with-zero-spectrum-is-zero`,
`def-isometry-coisometry-and-partial-isometry`,
`thm-partial-isometry-characterizations`,
`def-numerical-range-and-numerical-radius`,
`thm-numerical-radius-is-an-equivalent-operator-norm`,
`lem-polynomial-calculus-is-isometric-for-self-adjoint-operators`,
`thm-continuous-functional-calculus-for-bounded-self-adjoint-operators`,
`lem-spectral-permanence-for-unital-c-star-subalgebras`,
`lem-character-space-of-generated-normal-algebra-is-operator-spectrum`,
`thm-continuous-functional-calculus-for-bounded-normal-operators`,
`thm-spectral-mapping-for-continuous-normal-functional-calculus`,
`thm-continuous-functional-calculus-properties`,
`thm-self-adjoint-norm-and-spectrum-extrema`,
`thm-positive-square-root`, `def-absolute-value-of-a-bounded-operator`,
`thm-polar-decomposition-for-bounded-operators`,
`thm-bounded-normal-operator-abstract-spectral-theorem`,
`rem-positive-square-root-and-covariance-matrices`,
`lem-two-dimensional-numerical-range-is-convex`, `thm-toeplitz-hausdorff`.

B page: `ex-functional-calculus-for-a-diagonal-operator`,
`ex-functional-calculus-for-a-multiplication-operator`,
`ex-square-root-and-absolute-value-of-a-matrix`,
`ex-polar-decomposition-of-the-unilateral-shift`,
`cex-a-quasinilpotent-operator-need-not-be-zero`,
`cex-continuous-calculus-does-not-contain-discontinuous-spectral-projections`,
`cex-self-adjointness-cannot-be-dropped-from-the-order-calculus`.

No pair was added, no promised ID or claim was dropped, no published content was
edited, no `Recorded` item and no `--owner`/judge/audit stamp was used.

## Scaffold audit and local repairs

The scaffold was accepted for inventory, order and source coverage; every
promised item kept its exact ID, kind, title and statement. The following local
repairs were necessary and are recorded here because they change the dependency
interface (they do not change any promised claim):

1. **`lem-spectrum-of-a-positive-operator-is-nonnegative` decoupled from
   `lem-spectrum-of-a-self-adjoint-operator-is-real`.** The scaffold's strategy
   applied the real-spectrum lemma, but positivity in this library is a
   quadratic-form condition that "does not presuppose self-adjointness"
   (`def-self-adjoint-positive-unitary-and-normal-operator`) and the identity
   "positive implies self-adjoint" is nowhere available as a supplier. The item
   is now proved directly: for $z\notin[0,+\infty)$ the quadratic form gives a
   positive lower bound, the range is closed by completeness, and the kernel of
   $T^*-zI$ is trivial; $T=T^*$ is never assumed.
2. **`lem-spectral-permanence-for-unital-c-star-subalgebras` uses the Gelfand
   route, not Stone–Weierstrass.** For a positive invertible $x$ the closed
   unital $\ast$-subalgebra $C^*(1,x)$ is commutative, its Gelfand transform is
   onto $C(\Delta)$, and $1/\hat x$ is the transform of $x^{-1}$; the scaffold's
   `thm-complex-stone-weierstrass-self-adjoint` dependency was replaced by the
   Gelfand–Naimark/character/spectrum suppliers actually used. The general case
   reduces through $b^*b$.
3. **Dependency lists now match the facts actually cited.** Every item's `deps`
   was replaced by the union of its fact rows (for example the calculus items
   now declare the spectrum, C\*-, character-space and bounded-inverse
   suppliers), and the batch-5 manifest dep arrays were refreshed to the same
   lists. The unified ledger was refreshed afterwards; all 130 in-run item
   edges and the page edge carry `verified` reviews.
4. **No new items were required.** The machinery the calculus needs beyond the
   scaffold inventory (the identification of the operator and Banach-algebra
   spectra, $C(\sigma(T))$ as a unital C\*-algebra, positivity via
   $f=|g|^2$) is supplied locally inside the items from published and batch-1/4
   A-page items, so no A-page addition or pair split was needed.
5. **Interface corrections carried in the items.** The commutant clause is the
   $T$-and-$T^*$ form (no Fuglede); the non-closure of the numerical range is
   recorded as an explicit witness in the sharpness remark of
   `thm-toeplitz-hausdorff` and in the A-page prose rather than as a new item;
   and the "quasinilpotent" title of
   `cex-a-quasinilpotent-operator-need-not-be-zero` is aligned with its
   statement by identifying quasinilpotence with spectrum $\{0\}$ in the body.

## Checks actually run (all on the current files)

| Check | Command | Result |
|---|---|---|
| Proof format (explicit paths) | `node tools/tsx-run.mjs tools/precheck.mts` on the 33 item paths | 27 phase bodies checked, 0 failing; the 6 definition/remark items have no phase body |
| Rendering | `node tools/rendercheck.mjs` on the 33 items and the 2 pages | OK — YAML, math, wikilink and KaTeX checks clean |
| Content policy | `node tools/content-policy.mjs` on the owned pair (temp manifest) | 33 scoped items, 0 errors, 0 warnings |
| Strict proof contracts | `node tools/proof-contract.mjs research/phase-2-remaining-27-batch-5.proof-contracts.json --strict --items <33 ids>` | 33/33 checked, 0 errors, 2 non-fatal `shotgun-bracket` warnings (steps 1.3 of two items cite several facts each) |
| Plan | `node tools/validate-plan.mjs research/plan-spec.json` | OK — no item cycle, forward reference, B-page dependency or unresolved id |
| Batch manifest deps | `node tools/manifest-deps.mjs research/phase-2-remaining-27-batch-5.pages.json` | 62 items, 0 normalized, 0 errors |
| Dependency graph | `node tools/depcheck.mjs` | OK — no cycles, all references resolve, no draft item on a published page; no warning is attributed to an owned item |
| Coverage | `node tools/coverage-checklist.mjs research/phase-2-remaining-27-batch-5.coverage.json` | 2 pages, 43 harvested results, 0 errors, 0 warnings |
| Cross-batch ledger | `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27` | refreshed; 141 rows in the batch input, 130 + 1 owned edges reviewed `verified` in the unified ledger |
| Step 3 decisions | `node tools/step3-decisions.mjs record-item ... --decision accept --confidence 1` | 33 receipts; `checkStep3 --phase final` reports all 33 owned items closed |

Sources were not re-fetched: the Step 1 records (four fetch-verified full
treatments, hashes and page counts) were read and matched against the item-level
claims they back, and no authoring decision turned on a claim beyond them.

## Pre-splice plan mismatches (for Step 4)

`research/plan-spec.json` pages 510 and 511 still carry **empty item lists**; the
authored inventory lives only in `research/phase-2-remaining-27-batch-5.pages.json`.
Step 4's splice must write the 26 A items and 7 B items into the plan entries.
The plan's page-level interfaces are already satisfied: the A page requires
exactly `gelfand-theory-and-commutative-c-star-algebras` and the B page requires
only its A companion. The plan's older FA-19 prose also names Stone–Weierstrass
and numerical-range suppliers that are now declared at item level; that is a
prose/interface note for the serial reconciler, not a scope change.

## Published-interface findings (no confirmed defect on an owned path)

No published item on an owned prerequisite path is defective, and no owned item
depends on a `recorded-not-proved` item. Three interface observations are
reported for the owner/reconciler at low confidence, with no repair proposed
because none is load-bearing here:

1. **B-page-only suppliers on the natural examples.** `ex-c-of-a-compact-space-is-banach`,
   `ex-cb-of-a-space-is-banach` and `ex-adjoint-of-the-shifts-multiplication-and-integral-operators`
   are homed only on B/examples pages, so they cannot be depended on by this
   page; the multiplication-operator example therefore proves its spectrum and
   calculus locally. This is a structural consequence of the B-leaf rule, not a
   mathematical defect.
2. **`thm-bounded-inverse-theorem` assumes DC** while this pair declares AC. The
   use is compatible (AC implies DC) and is recorded in the affected items; no
   weaker branch is claimed.
3. **Suspicion, not a confirmed defect:** the published remark
   `rem-spectral-theory-bounded-operators` states the projection-valued spectral
   theorem and the multiplication-operator form in a single remark. An owned
   item must not treat it as a proof, and none does. A Step 5 reader may wish to
   check whether its phrasing claims more than its own sources support.

## Open obligations and handoff notes

- The sharpness witness $W(M_t)=(0,1)$ is stated in the A-page prose and in the
  sharpness-remark section of `thm-toeplitz-hausdorff`; its detailed integral
  computation is not a numbered item and should be read as orientation, not as
  a proved leaf.
- The two `shotgun-bracket` warnings are the only non-clean proof-contract
  diagnostics; both are information-distribution warnings, and the affected
  steps do cite the facts they use.
- The sibling pair `spectral-measures-and-borel-functional-calculus` shares the
  batch-5 files. This dispatch preserved its rows: its 11 cross-batch rows in
  the batch input and its 29 manifest items are untouched, and its items remain
  unauthored (content-policy on the whole batch still reports its 29 missing
  item files).
- Choice accounting: the early Hilbert lemmas declare Countable Choice, the
  Gelfand/calculus chain declares AC, and the finite matrix examples introduce
  no further selection; the axiom audits in the manifest and in each item were
  kept aligned with these uses.

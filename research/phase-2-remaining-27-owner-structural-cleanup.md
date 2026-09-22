# Owner-authorized Step-7 structural cleanup

Run: `phase-2-remaining-27`
Dispatch: `alpha-adjudicate` / label `owner-structural-cleanup-resume`
Date: 2026-09-21
Task: `research/phase-2-remaining-27-owner-structural-cleanup.task.md`

## Scope and evidence read

This report covers the whole dispatch, including the earlier attempt of the
same label. The item edits described in sections 2--4 were already on disk when
this session resumed (item mtimes 2026-09-20 13:58--14:12); this session read
each edited item in full, reconciled the contract, manifest, coverage and
frontier artifacts, refreshed the one stale owner-repair hash binding and
re-ran every named gate.

Read for this dispatch: the task file; `README.md`; `SCHEMA.md` sections 1, 2
and 6; `WORKFLOW.md` "Judgment and closure"; the complete current text
(frontmatter, Facts, Verification) of all seven `b-leaf-content` consumers in
section 1 and of the three carrier items in section 3; the batch-7 and batch-8
proof-contract entries and the merged contract; the batch page manifests; the
per-batch cross-batch inputs and the unified ledger; the owner-repair ledger;
and the owner escalation report `research/phase-2-remaining-27-escalation-sol-1-raw-filtration-follow-up.md`.

No engine state, queue, stamp, judge or adjudication ledger, terminal receipt,
published item or tool was edited.

## 1. The seven fatal `b-leaf-content` edges

In every case the B/examples-page item now occurs **zero** times in the consumer
file --- not in `deps`, not as a `[[wikilink]]` in Facts or the Given line, and
not in any numbered step (checked by full-text search per id). Each consumer
keeps the content it needed: the missing fact is either supplied by an existing
A-page item or established by an explicit local construction. No B-only item
was re-declared as a dependency, and no proof step was dropped.

| consumer | former B-page supplier | disposition (evidence) |
|---|---|---|
| `def-chern-character-of-a-complex-vector-bundle` | `ex-cellular-homology-and-ring-independent-groups-of-complex-projective-space` | Replaced by A-page suppliers: `thm-leray-hirsch-module-isomorphism`, `thm-naturality-normalization-and-whitney-sum-for-chern-classes`, `lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator`, `def-schubert-cells-in-real-and-complex-grassmannians`, `thm-schubert-cells-give-the-stable-grassmannian-cw-structure`, `thm-cellular-cochains-compute-cohomology-with-local-coefficients`, `thm-numerable-fiber-bundles-are-hurewicz-fibrations`, `thm-homotopic-maps-induce-equal-maps-in-singular-cohomology`, `thm-naturality-orientation-sign-and-whitney-product-for-euler-classes`, `def-singular-cup-product-on-cochains`. The Definition's justification now proves rational injectivity of `q*` on each projective stage (even-cell cellular basis + Leray--Hirsch over Q), which is exactly what the roots description needs. |
| `ex-complex-k-ahss-for-complex-projective-space` | `ex-complex-k-ring-of-complex-projective-space` | Replaced: the additive skeletal sequence is built from actual `K`-pair sequences (`thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory`, `thm-an-exact-couple-generates-a-spectral-sequence`, `def-exact-couple`, `lem-cw-quotients-and-collapse-of-a-contractible-subcomplex`, `prop-relative-cw-inclusions-are-cofibrations`, `lem-cofiber-of-a-based-cofibration-is-equivalent-to-the-quotient`, `thm-schubert-cells-give-the-stable-grassmannian-cw-structure`, `def-schubert-cells-in-real-and-complex-grassmannians`, `thm-cellular-cochains-compute-cohomology-with-local-coefficients`), and the ring presentation is proved locally by the disk-face/Bott-generator induction using `thm-hopf-line-calculation-of-k-zero-of-the-two-sphere`, `def-external-product-in-complex-k-theory`, `thm-complex-bott-periodicity`. The dropped `cor-complex-k-theory-ahss` and `thm-multiplicative-ahss-for-a-multiplicative-generalized-theory` are no longer claimed. |
| `ex-euler-class-of-the-universal-oriented-two-plane` | `ex-chern-class-of-tautological-and-hyperplane-lines-on-complex-projective-space` | Replaced by the classification route: `thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians`, `thm-oriented-real-vector-bundles-are-classified-by-bso`, `thm-schubert-cells-give-the-stable-grassmannian-cw-structure`, `lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type`, `thm-subordinate-partitions-of-unity-exist`, `thm-choice-implies-dependent-implies-countable-choice`; the sign `u|_{\CP^1}=-x` is computed from `prop-first-chern-class-of-tensor-dual-and-conjugate-lines`, `def-chern-classes-from-the-projective-bundle-relation`, the Thom/normalization and excision suppliers and `lem-cohomology-ring-of-infinite-complex-projective-space`. |
| `lem-ma-produces-an-uncountable-q-set` | `ex-the-cardinality-of-the-continuum` | Replaced and proved locally: F1 now derives `\omega_1 < 2^{\aleph_0}` and the injection `P(N) -> R` from `rem-continuum-hypothesis`, `def-aleph-and-beth-hierarchies`, `def-cardinal`, `def-axiom-of-choice`, `thm-cantor-set-ternary-description`, and [L1]/[L2] build the dyadic base and its finite-intersection property from `lem-integer-part`, `cor-archimedean-reciprocal`, `thm-n-cross-n-countable`. |
| `ex-standard-inner-products-on-kn-ell-two-and-l-two` | `ex-counting-measure-integral-is-a-series` | Replaced by `rem-ell-p-is-l-p-of-counting-measure` (the counting-measure dictionary together with `def-integrable-real-and-complex-functions-and-their-integrals`), plus the added conjugation/field/norm suppliers `thm-complex-numbers-form-a-field`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `cor-inner-product-induces-a-norm`; [A4] now states and uses the dictionary explicitly. |
| `ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection` | `ex-c-of-a-compact-space-is-banach` | Replaced by a local proof that `C_b(K)` is Banach (step 1.1, Cauchy-criterion argument) with suppliers `def-banach-space`, `thm-uniform-limit-theorem`, `thm-bounded-operator-space-is-banach`, `thm-spectral-theorem-for-bounded-normal-operators-pvm-form`. |
| `ex-ito-formula-for-brownian-powers` | `ex-integral-of-brownian-motion-against-itself-preview` | Replaced by a self-contained finite-binomial/left-Riemann proof: `def-ito-integral-of-an-elementary-predictable-process`, `thm-ito-isometry-and-linearity-in-predictable-l2`, `thm-ito-integral-process-has-a-continuous-martingale-version`, `def-progressively-measurable-and-predictable-process`, `lem-brownian-motion-has-a-jointly-measurable-continuous-version`, `cor-cauchy-schwarz-for-random-variables`, `lem-conditioning-a-known-variable-and-an-independent-variable`, `thm-taking-out-what-is-known`, `thm-dominated-convergence`, `thm-fatou-lemma`, `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`. `thm-ito-formula-one-dimensional`, `cor-brownian-square-martingale`, `def-continuous-brownian-ito-process`, `def-locally-square-integrable-predictable-brownian-integrand`, `thm-localized-ito-integral` are dropped with it. |

Mathematical reading performed here: I read the Facts and Verification of all
seven consumers and checked the replacement argument at its load-bearing points
--- the rational injectivity of `q*` in the Chern-character Definition; the
collapse argument (even total degree only), the abutment identification
`E_inf = F^p/F^{p+1}` and the `\alpha`-basis induction in the K-AHSS example;
the `c_1(L^*)=-c_1(L)` sign and the local-degree `+1` computation in the Euler
class example; the dyadic-base and almost-disjoint application in the Q-set
lemma; the counting-measure dictionary use in the inner-product example; the
completeness and Cauchy-kernel steps in the spectral-projection example; and
the orthogonality, variance (`2h^2`), remainder and telescope estimates in the
Ito-powers example. Section 8 records what this reading does not cover.

`node tools/depcheck.mjs` now reports no `b-leaf-content` error and exits 0.

## 2. The three `git diff --check` failures

All three were whitespace-only reconciliations; the mathematics produced by the
earlier owner repairs is unchanged.

- `items/lem-universal-oriented-sphere-bundle-has-bso-n-minus-one-total-space.md`
  and `items/thm-locally-compact-gelfand-duality.md`: the extra blank line at
  EOF is gone --- the files now end with the single newline after the closing
  `\qed`, confirmed by `od -c` on the last bytes.
- `items/thm-naturality-orientation-sign-and-whitney-product-for-euler-classes.md`:
  the trailing whitespace is gone --- `grep -c '[[:space:]]$'` returns 0 for
  every line, including the last.

Repository-wide `git diff --check` exits 0.

## 3. The three group-D carrier repairs

1. `ex-brownian-hitting-probability-from-an-exponential-martingale` --- the
   continuous stopping time is no longer fed to the discrete theorem. Step 1.1
   now rounds `\rho = \tau \wedge T` up to the finite grid
   `{jT2^{-n}}`, applies `thm-optional-sampling-for-bounded-stopping-times`
   only to the bounded grid-valued index `\rho_n` of the sampled discrete
   martingale, identifies each `M_{\rho_n}` as a conditional expectation of the
   fixed integrable `M_T` (so the family is uniformly integrable by
   `thm-uniform-integrability-of-conditional-expectations-of-one-variable`),
   and upgrades `M_{\rho_n}\to M_\rho` from almost sure to `L^1` via
   `thm-uniform-integrability-plus-probability-convergence-implies-l1-convergence`.
   Step 2.1 then legitimately passes `T\to\infty` under the deterministic bound
   of [F5] and dominated convergence. This is the honest continuous-time
   bounded-stopping argument; the discrete proof was not relabelled.
2. `ex-logarithm-of-geometric-brownian-motion` --- the ill-typed product `mu`
   is gone: [F2] now displays
   `x e^{-|\mu-\sigma^2/2|T-|\sigma|K_T} \le X_s \le x e^{|\mu-\sigma^2/2|T+|\sigma|K_T}`,
   and a full-text scan finds no unescaped `mu` occurrence. The genuinely
   unused localised-integration fact and its four dependencies were removed
   with it, and the steps were renumbered to the canonical `1.1/2.1/3.1`
   demanded by the precheck layer repair.
3. `thm-brownian-filtration-martingale-representation` --- the unused F12
   citation and its `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`
   dependency are gone; `grep -n 'F12\|fubini'` returns nothing and the item
   now declares F1--F11. The product-law/density step remains carried by F9.

## 4. Contract regeneration, merge and boundary synchronization

- Regenerated only the affected batch-8 entry:
  `tools/regen-contract-entries.mjs` was run for
  `ex-logarithm-of-geometric-brownian-motion` and its `citations` /
  `derivations` were regenerated from the current item text.
- The renumbering was propagated into the entry's boundary worksheet --- the
  stale references to the old steps `1.2` and `2.1` now name the current
  `2.1` (the pathwise logarithm identity) and `3.1` (the boundary/consistency
  step) respectively, so every boundary disposition is anchored to a step that
  exists and says what the evidence claims.
- The regenerated entry was written into
  `research/phase-2-remaining-27-batch-8.proof-contracts.json` preserving that
  file's one-space indentation and `\uXXXX` escaping; the serializer was
  verified byte-identical on the untouched part, and an entry-by-entry
  comparison before and after the write shows the logarithm entry as the only
  change.
- The four other reflowed/repaired batch-8 items
  (`ex-harmonic-functions-of-planar-brownian-motion`,
  `thm-integration-by-parts-for-brownian-ito-processes`,
  `thm-space-time-harmonic-functions-yield-brownian-local-martingales`,
  `thm-brownian-filtration-martingale-representation`) were re-checked and
  their on-disk entries are already current: a whitespace-only reflow changes
  neither step ids nor citation tokens, and both the on-disk and regenerated
  variants pass strictly. The on-disk rows were kept to hold the diff to the
  one entry that was genuinely stale.
- `tools/merge-proof-contracts.mjs` merged the fifteen batch contracts into
  `research/phase-2-remaining-27-proof-contracts.json` (982 scoped items from
  15 batch contracts).

## 5. Manifest, coverage and frontier synchronization

- Page manifests: for each of the seven consumers the manifest `deps` list now
  equals the item `deps` list exactly (programmatic comparison over the batch
  manifests); no manifest declares a dependency the item has dropped.
- Coverage: no coverage row needed a change. The two coverage rows naming a
  former supplier (batch-9 page 3 canonical/source row for
  `ex-chern-class-of-tautological-and-hyperplane-lines...`, batch-8 page 0
  source row for `ex-integral-of-brownian-motion-against-itself-preview`) are
  source-coverage entries, not dependency claims, and the items they name still
  exist unchanged.
- Frontier inputs: `research/phase-2-remaining-27-batch-{1,5,8,9,10}.cross-batch-dependencies.json`
  carry the current `removed` review for each of the seven edges (batch 9 also
  records the removed `thm-universal-coefficient-theorem-for-cohomology...`
  edge), plus the two `verified` rows added by this cleanup
  (`ex-brownian-hitting-probability-...` to
  `def-natural-and-usual-augmented-brownian-filtrations`, and
  `ex-euler-class-of-the-universal-oriented-two-plane` to
  `prop-first-chern-class-of-tensor-dual-and-conjugate-lines`).
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27`
  was re-run by this session; the derived
  `research/phase-2-remaining-27-cross-batch-dependencies.json` was already
  current (no rewrite needed): 1092 cross-batch edges,
  `unreviewed_batches: []`, and the remaining orphaned review rows are
  same-batch pairs the ledger does not track by construction.

## 6. Owner-repair licences

`tools/step7-guard.mjs` over the run's seven ledgers reports 694 changed items
and 694/694 licensed. Its single failure was
`owner-prerequisite-repair-stale` at
`research/phase-2-remaining-27-step7-owner-prerequisite-repairs.jsonl:13`, the
existing licence for `thm-space-time-harmonic-functions-yield-brownian-local-martingales`,
whose `post_sha256` no longer matched the current text after that item's
whitespace reflow.

Following the task's instruction for an existing row, its `post_sha256` was
refreshed from `a7bcd6ea...93a4f7fe7` to the current guard hash
`8e103f13a2d04f7cfee5f23e8f6f118385153a8f549397135d94ac776fd71c08`
(`itemHashGuard`, whole `verification:` block excluded); the row's id, defect,
correction basis, both HTTPS sources, `authorized_by: owner` and original
authorization time are untouched. No new `owner-impact-repair` row was needed:
this cleanup changed no item's dependency set beyond the seven already-licensed
consumers, and every one of those keeps its confirmed-fatal licence.

## 7. Validation run

| check | command | result |
|---|---|---|
| depcheck | `node tools/depcheck.mjs` | exit 0; no `b-leaf-content`; "no cycles, all references resolve, no draft items on published pages" (remaining lines are the tool's warnings: 114 `cited-not-in-deps`, 156 `multi-home`, 2 `orphan`, 1 `b-leaf-legacy`, all pre-existing) |
| strict selected contracts | `node tools/proof-contract.mjs research/phase-2-remaining-27-proof-contracts.json --strict --items "<the fifteen group-D items>"` | 0 error(s), 0 warning(s), 15/15 items checked |
| strict extended contracts | same tool, the seven section-1 consumers plus the three whitespace items | 0 error(s), 0 warning(s), 10/10 items checked |
| precheck | `node tools/tsx-run.mjs tools/precheck.mts` (repository-wide) | 16024 checked, 0 failing |
| prosecheck | `node tools/prosecheck.mjs <the 17 items named in sections 1--3> --warnings` | 17 file(s) checked, 0 error(s), 0 warning(s) |
| whitespace | `git diff --check` (repository-wide) | exit 0 |
| Step-7 guard | `node tools/step7-guard.mjs` with the run's seven ledger arguments | OK --- every Step-7 edit is licensed by a confirmed fatal defect, exact owner repair, or terminal resolution |

## 8. Uncertainty, limits and observations for the owner

1. **Depth of the mathematical reading.** The three heavy rewrites
   (`def-chern-character-of-a-complex-vector-bundle`,
   `ex-complex-k-ahss-for-complex-projective-space`,
   `ex-euler-class-of-the-universal-oriented-two-plane`) were read in full and
   their internal inferences, indexing and sign conventions checked as listed
   in section 1. I did **not** re-derive every cited supplier statement line by
   line --- in particular the Bott/Hopf generator conventions
   (`thm-hopf-line-calculation-of-k-zero-of-the-two-sphere`,
   `thm-complex-bott-periodicity`, `def-external-product-in-complex-k-theory`),
   the scope of the classification theorems
   (`thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians`,
   `thm-oriented-real-vector-bundles-are-classified-by-bso`), and the exact
   hypotheses of `thm-leray-hirsch-module-isomorphism` and
   `thm-cellular-cochains-compute-cohomology-with-local-coefficients`. On my
   reading these rewrites are coherent and do not weaken the statements, but
   this is a reading, not a line-by-line verification of every supplier.
2. **Stale review note (flagged, not edited).** The batch-8 contract entry for
   `ex-logarithm-of-geometric-brownian-motion` still carries the Step-5A
   reviewer note describing an older four-step proof ("the logarithmic identity
   (1.1), the localised second identity (2.1), removal of the localisation
   (3.1) and the boundary cases (4.1)"); the current item has three steps and
   reads the logarithm directly from the defining exponential. `status` stays
   `complete` and the reviewer/refuter attributions are unchanged. I did not
   rewrite another reviewer's disposition text; the owner may want Step 8 to
   refresh it.
3. **Cosmetic observations, left unchanged.** `lem-ma-produces-an-uncountable-q-set`
   step 5.1 contains a duplicated clause ("...it is uncountable, so it is
   uncountable."), and
   `ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection`
   lists its facts as [A1]--[A5], [A7], [A6]. Neither is a mathematical
   defect, neither is reported by precheck or prosecheck, and a further edit
   would invalidate the current licence binding without a mathematical reason,
   so they were left for the owner.
4. **No fabricated evidence.** No judge verdict, stamp, adjudication, terminal
   receipt or engine-state file was written; the one ledger edit is the
   task-authorized post-hash refresh of an existing owner licence row.

## 9. Files written by this session

- `research/phase-2-remaining-27-batch-8.proof-contracts.json` (the
  `ex-logarithm-of-geometric-brownian-motion` entry plus its boundary
  worksheet)
- `research/phase-2-remaining-27-proof-contracts.json` (re-merged)
- `research/phase-2-remaining-27-step7-owner-prerequisite-repairs.jsonl`
  (row 13 `post_sha256` refresh)
- `research/phase-2-remaining-27-owner-structural-cleanup.md` (this report)

`research/phase-2-remaining-27-cross-batch-dependencies.json` was verified
current and not rewritten by the final refresh.

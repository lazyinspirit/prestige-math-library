# frontier-31a · beta · batch 9 — scaffold notes

## Scope and checkpoint

This batch owns only the following scaffold and harvest records:

- `research/frontier-31a-batch-9.pages.json`
- `research/frontier-31a-batch-9.coverage.json`
- this file

The scaffold contains 88 items: 41 on A `tor-flatness-and-global-dimension`, 8 on its B page, 32 on A `universal-coefficients-and-kunneth-theorems`, and 7 on its B page. Every item object has its explicit `deps` array. Both A pages are below the 60-item ceiling, so neither is split.

The manifest is the per-item ledger: each entry records the stable id, exact planned claim in `title`, kind, and direct dependency ids. The source/dependency checkpoints below explain why the staged groups are present; no item is a filler.

## Spec/design comparison — recorded, not adjudicated

The plan-spec metadata is followed exactly.

| Page | Design `requires` | Spec `requires` used in manifest |
| --- | --- | --- |
| `tor-flatness-and-global-dimension` | `ext-and-balanced-resolutions`, `yoneda-extensions-and-homological-dimension`, `tensor-products-of-modules`, `chain-conditions-and-semisimple-modules` | `yoneda-extensions-and-homological-dimension-examples`, `flatness-and-faithful-flatness` |
| `universal-coefficients-and-kunneth-theorems` | `tor-flatness-and-global-dimension`, `ext-and-balanced-resolutions`, `long-exact-sequences-in-homology` | `tor-flatness-and-global-dimension-examples` |

The orders agree with the specification: 365.055/365.056 and 365.057/365.058. The two `requires` disagreements are left for the run's drift unit; this batch did not choose either side or alter page structure.

## Item ledger and dependency rationale

### Tor, flatness, and dimension pair

The first block establishes the typed tensor complex and both resolution constructions: `def-tensor-product-total-complex-of-chain-complexes`, `lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero`, `def-tor-by-resolving-the-left-module`, `def-tor-by-resolving-the-right-module`, `prop-tor-zero-is-the-tensor-product-in-either-construction`, `prop-each-tor-construction-is-covariant-in-both-variables`, and `prop-positive-tor-vanishes-when-the-resolved-variable-is-projective`.

The balance block is deliberately dependency-closed: `def-tensor-double-complex-of-two-projective-resolutions`, `def-left-and-right-flat-modules-over-an-arbitrary-ring`, `lem-projective-modules-are-flat-over-an-arbitrary-ring`, `rem-projective-modules-are-flat-is-supplied-by-mod-three`, `lem-the-rows-of-the-augmented-tensor-double-complex-are-exact`, `lem-the-columns-of-the-augmented-tensor-double-complex-are-exact`, `thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic`, `prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions`, and `def-balanced-tor-bifunctor`.  The local arbitrary-handed flatness definition and projective-implies-flat lemma repair the earlier commutative-only flatness formulation before either exact-row argument uses it.

The derived-functor consequences are `thm-long-exact-tor-sequence-in-the-left-module-variable`, `thm-long-exact-tor-sequence-in-the-right-module-variable`, `prop-tor-dimension-shifting`, `thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes`, `thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes`, and `cor-a-short-exact-sequence-stays-exact-after-tensoring-exactly-when-its-tor-boundary-obstruction-vanishes`.

The calculation and dimension block is `thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion`, `thm-tor-of-two-cyclic-abelian-groups`, `thm-higher-tor-over-the-integers-vanishes`, `prop-torsion-free-abelian-groups-are-flat`, `thm-over-a-pid-flat-is-equivalent-to-torsion-free`, `thm-tor-symmetry-over-a-commutative-ring`, `def-flat-dimension-of-a-module`, `thm-flat-dimension-at-most-n-iff-higher-tor-vanishes`, `def-left-and-right-weak-global-dimension`, `prop-weak-global-dimension-is-at-most-corresponding-global-dimension`, `thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric`, `prop-semisimple-rings-have-vanishing-positive-tor-and-ext`, and `prop-the-integers-have-weak-and-global-dimension-one`.

The design-required boundaries are `fs-tor-takes-two-left-modules-over-an-arbitrary-ring`, `fs-the-two-tor-constructions-are-equal-by-definition`, `fs-flat-modules-have-projective-dimension-zero`, `fs-tor-one-vanishes-only-when-one-module-is-projective`, `fs-tor-is-symmetric-over-every-noncommutative-ring`, and `fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m`.

The B-only leaf demonstrations are `ex-tor-of-two-cyclic-groups-from-a-two-term-resolution`, `ex-tor-detects-n-torsion`, `ex-a-flat-nonprojective-module`, `ex-localization-is-flat-and-has-vanishing-positive-tor`, `ex-the-tensor-double-complex-in-low-degrees`, `ex-tor-symmetry-over-a-commutative-ring`, `cex-a-noncommutative-handedness-error-in-tor`, and `ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers`.

Proof route: totalize on finite diagonals with direct sums and the Koszul sign; use projective-implies-flat on the proper hand to prove augmented rows and columns exact; apply the already-scaffolded finite-diagonal assembly lemmas to compare the two resolutions; then derive both long exact sequences, shifting, Tor-one flatness tests, cyclic calculations, and flat/weak dimension. No expression (M\otimes_RN) is formed from two left modules over a noncommutative ring.

### Universal coefficients and Kunneth pair

The complex infrastructure is `def-cochain-complex-hom-from-a-chain-complex`, `lem-the-hom-cochain-differential-squares-to-zero`, `def-chain-complex-with-coefficients-by-tensoring`, `lem-cycle-boundary-short-exact-sequences-for-a-free-complex-over-a-pid`, `thm-submodules-of-free-modules-over-a-pid-are-free`, and `lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free`. The added arbitrary-rank PID-submodule theorem is necessary because the published finite-rank corollary does not justify freeness of all cycle and boundary submodules. Its eventual proof must retain the choice/well-ordering boundary.

The homological UCT route is `lem-the-universal-coefficient-edge-map-for-homology-is-well-defined`, `lem-the-universal-coefficient-tor-obstruction-map-for-homology`, `thm-universal-coefficient-theorem-for-homology-over-a-pid`, `thm-the-homology-universal-coefficient-sequence-splits-nonnaturally`, and `cex-the-universal-coefficient-splitting-cannot-in-general-be-chosen-naturally`. The cohomological route is `def-evaluation-map-from-cohomology-to-hom-of-homology`, `lem-the-cohomology-universal-coefficient-extension-map`, `thm-universal-coefficient-theorem-for-cohomology-over-a-pid`, `thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally`, `cor-cohomology-with-a-divisible-abelian-coefficient-group-is-hom-of-homology`, `prop-modules-over-a-field-are-projective-flat-and-injective`, and `cor-cohomology-over-a-field-is-dual-to-homology-for-finite-dimensional-complexes`.

The Kunneth route is `def-homology-cross-product-for-tensor-complexes`, `lem-the-kunneth-cross-product-map-is-well-defined-and-natural`, `lem-the-kunneth-tor-map`, `thm-kunneth-theorem-for-free-complexes-over-a-pid`, `thm-the-kunneth-sequence-splits-nonnaturally`, `cor-kunneth-over-a-field`, `cor-kunneth-when-one-homology-family-is-flat`, `prop-euler-characteristic-is-multiplicative-under-the-finite-kunneth-hypotheses`, and `prop-the-kunneth-cross-product-is-graded-commutative-under-the-twist-map`.

The false-statement boundary set is `fs-the-universal-coefficient-theorem-always-gives-a-natural-direct-sum-decomposition`, `fs-uct-for-homology-has-an-ext-term-and-uct-for-cohomology-a-tor-term`, `fs-kunneth-over-a-pid-is-always-a-tensor-product-isomorphism`, `fs-freeness-of-chain-groups-can-be-dropped-from-the-classical-kunneth-statement`, and `fs-the-kunneth-short-exact-sequence-has-a-canonical-splitting`. The B leaves are `ex-uct-homology-with-z-mod-m-coefficients`, `ex-uct-cohomology-of-a-two-term-free-complex`, `ex-a-nonzero-tor-correction-in-universal-coefficients`, `ex-kunneth-for-two-cyclic-two-term-complexes`, `ex-kunneth-over-a-field`, `cex-a-nonnatural-choice-of-uct-splitting`, and `ex-euler-characteristic-of-a-tensor-product-complex`.

Proof route: derive UCT from the two explicitly scaffolded cycle/boundary short exact sequences, establish both representative-independent edge maps before proving exactness, state naturality of injection and surjection separately from the noncanonical splitting, then build Kunneth's cross-product and Tor maps before exactness. The Kunneth theorem is restricted to the stated free PID and bounded/local-finite direct-sum hypotheses; it does not claim a canonical splitting.

## Conventions and source support

- Arbitrary rings retain right-module/left-module tensor handedness throughout. The commutative specialization is named only where symmetry is claimed.
- Tensor products use first-quadrant, finite-diagonal direct-sum totalization and the Koszul differential.
- UCT and Kunneth use free complexes over a PID; a field is treated through its module category, not by silently changing coefficient conventions.
- The exact source headings, all 71 dispositions, URLs, and locators are in `frontier-31a-batch-9.coverage.json`. Full-text treatments read are Weibel §§2.7, 3.1–3.2, 3.6, 4.1; Rotman §§7.1, 7.1.1, 7.1.2, 7.4, 8.1, 10.10; Sharifi §§2.8, 3.5; Stacks Homology §§18, 25; and Hilton–Stammbach Chapter V §§1–4.
- The Hilton–Stammbach Rochester source URL failed. The coverage preserves it as `original_url` and records the verified live full second-edition replacement at `https://agorism.dev/book/math/homo/homological-algebra_hilton-stambach.pdf`.
- Every recorded source was opened as complete text in the web reader. Runner-local Node fetches returned `EAI_AGAIN` for all ten URLs, so each `fetch_verified` receipt honestly records `verified_via: web-open` rather than inventing byte hashes.

## Validation and open obligations

- PASS: `node tools/coverage-checklist.mjs --require-destination research/frontier-31a-batch-9.coverage.json` — 2 A pages, 71 harvested results, 0 errors, 0 warnings.
- PASS: `node tools/source-fetch-check.mjs --coverage research/frontier-31a-batch-9.coverage.json` — 10/10 source receipts present.
- PASS: local JSON/hygiene check — 4 pages, 88 unique item ids, every item has an explicit dependency array and matching kind prefix; no trailing horizontal whitespace in the three authorized artifacts.
- PASS (dry-run splice): `node tools/splice-plan.mjs --run frontier-31a --batch 9 --dry-run` — 4 pages, 88 items; the dry run made no plan edit.
- RUNNER LIMIT: `url-sweep --recover --fail-on-dead` did not produce a receipt before its runner timeout because the same sandbox cannot resolve external hosts. This is recorded, not treated as URL death; the web-reader checks above did fetch the exact texts.
- BLOCKED BY PRECEDING SCAFFOLD: running content policy on batch 9 alone reports eight unresolvable dependencies (`lem-acyclic-assembly-by-exact-columns`, `lem-acyclic-assembly-by-exact-rows`, `thm-the-integers-have-global-dimension-one`, `def-left-and-right-global-dimension-of-a-ring`, `def-balanced-ext-bifunctor`, and `def-projective-dimension-of-an-object`). They are present as planned HA-8 items in `frontier-31a-batch-8.pages.json`, but a one-file policy invocation deliberately cannot see that batch. They are retained as genuine dependencies rather than weakened or duplicated.
- BLOCKED BY PRECEDING SCAFFOLD: the temporary batch-8-plus-batch-9 `validate-plan` overlay reaches two pre-existing HA-8 B-leaf errors, not batch-9 errors: `lem-ext-one-of-z-mod-n-by-z-is-z-mod-n` and `ex-an-ext-dimension-shift` depend on the published B item `ex-a-projective-resolution-of-a-cyclic-abelian-group`. Repairing HA-8 is outside this batch's authority.
- BLOCKED BY ANOTHER BATCH: the full-run manifest-only policy reports a duplicate of `thm-universal-coefficient-theorem-for-cohomology-over-a-pid` in `frontier-31a-batch-1.pages.json` on later page `schur-multipliers-and-universal-central-extensions` (order 365.075). Batch 9 is the earlier, design-assigned owner at order 365.057. This batch does not alter batch 1 or apply an owner-only re-home; it preserves the design item and makes the collision explicit for drift/owner repair. The same full-run command also reports unrelated batch-10/group-cohomology duplicates and forward edges.

Next action: after the run's drift and the owners of batches 1/8/10 repair their cross-batch findings, rerun full manifest policy, splice verification, `validate-plan` on the authorized spliced overlay, and the URL sweep in a network-capable runner before authoring begins.

## Step-3 fix pass

- **B8-1 — pushed back as out of batch scope.** The stable group-b review assigns this finding to batch 8's `ext-and-balanced-resolutions` pair: it replaces a foreign examples-page dependency with `thm-free-modules-are-projective-with-choice-boundary` in two batch-8 records. It names no batch-9 item, page, source, or dependency. The review records that repair as already made; changing either batch-9 manifest to mirror it would create an unrelated duplicate repair. **Changed batch-9 scaffold record:** none.
- **B10-1 — pushed back as out of batch scope.** The same review assigns the explicit-double-complex dependencies and the projective-dimension criterion to two batch-10 group-cohomology records. Neither record is owned by this batch, and both batch-9 A pages receive the review verdict `sufficient`. **Changed batch-9 scaffold record:** none.
- **Source-repair evidence — applied within coverage.** The previously recorded Web Archive snapshot for Hilton–Stammbach failed to open, but the direct complete second-edition PDF at `https://agorism.dev/book/math/homo/homological-algebra_hilton-stambach.pdf` opened successfully (375 PDF pages). Its contents list Chapter V §§1–4, and the read range contains §2 Theorem 2.1 (the naturally exact, nonnaturally split Kunneth sequence), Theorem 2.5 (homological UCT), and §3's dual Kunneth treatment. `research/frontier-31a-batch-9.coverage.json` now cites that live direct URL, preserves the exact Chapter V locator and all seven existing dispositions, and carries the new `fetch_verified` receipt. No mathematical claim, item id, dependency, page order, or source disposition changed.

The two A-page manifests remain dependency-closed at 41 and 32 A items respectively; their B companions remain leaves with 8 and 7 items. Every one of the 88 item records continues to carry an explicit `deps` array. The maintained conventions are unchanged: arbitrary-ring Tor has a right module first and a left module second; tensor totalization is the finite-diagonal direct sum with the Koszul sign; UCT and Kunneth retain free-PID and stated finite/local-finiteness hypotheses; splittings are never represented as natural.

Validation after the repair:

- PASS — `node tools/coverage-checklist.mjs --require-destination research/frontier-31a-batch-9.coverage.json`: 2 A pages, 71 harvested results, 0 errors, 0 warnings.
- PASS — `node tools/source-fetch-check.mjs --coverage research/frontier-31a-batch-9.coverage.json`: 10/10 source records fetch-verified.
- PASS — `node tools/content-policy.mjs --manifest-only research/frontier-31a-batch-*.pages.json`: 906 scoped items, 0 errors, 0 warnings.
- PASS — `node tools/validate-plan.mjs research/plan-spec.json`: declared plan order and all currently spliced item dependencies are acyclic, resolved, and free of forward or examples-page dependencies.
- PASS — `node tools/splice-plan.mjs --run frontier-31a --batch 9 --dry-run`: 4 pages, 88 items ready for the later mechanical splice; dry run made no plan edit.

Known limit / next action: Step 3 has no batch-9 finding requiring a manifest change. The future Step-4 mechanical splice must be followed by its plan/manifest verification; this fix pass neither modifies `plan-spec.json` nor settles page-level prerequisite disagreements.

## Step-3 fix pass

- **B8-1 — pushed back as out of batch scope.** The stable group-b review
  assigns the foreign-examples-page dependency repair only to the batch-8
  `ext-and-balanced-resolutions` pair.  It changes two batch-8 records to use
  `thm-free-modules-are-projective-with-choice-boundary`; it names no
  batch-9 item, page, source, or edge.  Both batch-9 A pages retain the
  review verdict **sufficient**.  **Changed batch-9 scaffold record:** none.
- **B10-1 — pushed back as out of batch scope.** The explicit Hom-double-
  complex/acyclic-assembly prerequisites and the projective-dimension
  vanishing criterion belong only to the two batch-10 group-cohomology
  records named by the review.  They do not occur in this batch's manifest,
  and importing them here would duplicate a repair outside the authorized
  pair.  **Changed batch-9 scaffold record:** none.
- **Source evidence — verified; no repair needed.** All ten coverage source
  records (seven distinct live URLs) opened successfully on 2026-09-05.  In
  particular, the direct complete second-edition Hilton--Stammbach PDF at
  `https://agorism.dev/book/math/homo/homological-algebra_hilton-stambach.pdf`
  is live (375 PDF pages): Chapter V §2 supplies the Kunneth sequence and its
  nonnatural splitting and Theorem 2.5 supplies homological UCT; §3 supplies
  the dual treatment.  The current source passages also confirm Weibel's
  §§2.7, 3.1--3.2, 3.6, and 4.1; Rotman's §§7.1, 7.4, 8.1, and 10.10;
  Sharifi's §§2.8 and 3.5; and Stacks *Homological Algebra* §§18 and 25 at
  the locators recorded in the coverage harvest.  Existing locators,
  dispositions, and fetch receipts remain faithful.  **Changed batch-9
  scaffold record:** none.

Reverification results on the current workspace:

- PASS — `node tools/coverage-checklist.mjs --require-destination research/frontier-31a-batch-9.coverage.json`: 2 A pages, 71 harvested results, 0 errors, 0 warnings.
- PASS — `node tools/source-fetch-check.mjs --coverage research/frontier-31a-batch-9.coverage.json`: 10/10 source records fetch-verified.
- PASS — `node tools/content-policy.mjs --manifest-only research/frontier-31a-batch-*.pages.json`: 908 scoped items, 0 errors, 0 warnings.
- PASS — `node tools/validate-plan.mjs research/plan-spec.json`: the current spliced plan has no item-level cycles, forward references, examples-page dependencies, or unresolved ids among its listed-item pages.
- PASS — `node tools/splice-plan.mjs --run frontier-31a --batch 9 --dry-run`: 4 pages, 88 items; dry run only.

No batch-9 mathematical claim, dependency, page order, or harvest disposition
changed.  The retained conventions are: right-module/left-module tensor
handedness over arbitrary rings, finite-diagonal direct-sum totalization with
the Koszul differential, free-PID UCT/Kunneth hypotheses, and explicitly
nonnatural splittings.

## Step-5 authoring

Authored ids: none. No `items/` or `library/` file was created, so the
proof-contract report has an empty scope and does not represent any incomplete
proof as checked.

Blocker: the required current cited dependency statements cannot be read. Of
the direct dependencies of the 88 planned items, the following outside-batch
targets have no `items/<id>.md` file in the current workspace:

- `lem-acyclic-assembly-by-exact-columns` and
  `lem-acyclic-assembly-by-exact-rows`, needed for the Tor balance theorem;
- `thm-the-integers-have-global-dimension-one`,
  `def-left-and-right-global-dimension-of-a-ring`,
  `def-balanced-ext-bifunctor`, and `def-projective-dimension-of-an-object`;
- the downstream direct targets that depend on those missing earlier results,
  including the Tor balance/flatness/dimension chain and the UCT/Kunneth chain.

These are planned in other in-flight batches (principally batch 8), but their
planned JSON records are not current item statements and therefore cannot be
quoted as citations or used as substitute mathematical evidence. Authoring
around them would either fabricate exact citation text, duplicate another
batch's work, or weaken the planned dependency structure, each outside this
batch's authority.

Checks actually run on the un-authored batch:

- `node tools/validate-plan.mjs research/plan-spec.json` completed with the
  repository plan's reported item graph consistent (the output also reports
  its unrelated repository-wide redundant-prerequisite warnings).
- `node tools/content-policy.mjs research/frontier-31a-batch-9.pages.json`
  reported `88 scoped item(s), 88 error(s)`, each an expected
  `scope-item-missing` error because no batch-9 item file exists.
- `node tools/tsx-run.mjs tools/precheck.mts` with the manifest's explicit
  `items/ID.md` paths could not start: its first required item file does not
  exist (`ENOENT`).

Provenance rationale, narrowed/dropped claims: none. No claim was narrowed or
dropped, and no provenance was created, because the interruption occurs before
the first statement can be truthfully linked to the required current
dependencies. Next action: wait until those supplier items exist, reread their
exact statements and the item/source passages, then author the batch without
altering the manifest or another batch.

## Step-5 authoring

Recovery check, 2026-09-05: the earlier missing supplier files are now present
in the shared workspace, including `lem-acyclic-assembly-by-exact-columns`,
`lem-acyclic-assembly-by-exact-rows`, and
`thm-the-integers-have-global-dimension-one`. The current 29 direct
outside-batch dependencies all resolve. I reread the two acyclic-assembly
statements, `def-balanced-ext-bifunctor`, and Weibel, *Tor and Ext*, §§3.1--3.2
at the coverage locators.

Authored ids: none. No claim was narrowed or dropped. The output
`frontier-31a-batch-9.proof-contracts.json` now records the honest empty scope;
it does not represent any missing proof as checked.

Checks actually run: `node tools/validate-plan.mjs` without its required
argument reported usage; `node tools/validate-plan.mjs research/plan-spec.json`
completed successfully with repository-wide redundant-prerequisite warnings;
the focused content policy reported 88 expected `scope-item-missing` errors;
and precheck with all explicit manifest paths stopped at the first missing
batch-9 file (`items/def-tensor-product-total-complex-of-chain-complexes.md`).

Next action: author the manifest in order and replace the empty proof-contract
scope with the applicable proof-bearing contracts before rerunning focused
checks.

## Step-5 authoring

Authored all 88 manifest ids in manifest order, on the four required draft
pages: `tor-flatness-and-global-dimension`,
`tor-flatness-and-global-dimension-examples`,
`universal-coefficients-and-kunneth-theorems`, and
`universal-coefficients-and-kunneth-theorems-examples`.  The corresponding
items are all `status: draft`; no judge record was created or retained.

The Tor material keeps the arbitrary-ring convention explicit: the first
tensor factor is right $R$-linear and the second left $R$-linear, and total
complexes use finite-diagonal direct sums with the Koszul differential.  The
UCT and Kunneth material is restricted to free complexes over a PID, with the
finite-diagonal condition stated for Kunneth; natural short exact sequences
are distinguished from their nonnatural splittings.  Item provenance records
the Weibel source treatment for statements and an altered local proof.  The
  source locator retained in each item is Weibel, *An Introduction to
  Homological Algebra*, §3; the batch coverage also records the supporting
  balance and dimensions locators used by the page design.

The completed proof-contract report has contracts for all 75 proof-bearing
items.  Every contract maps both numbered proof rows and gives all eight
standard boundary dispositions.  Definitions and the one remark have no
proof-bearing contract, consistently with their `not-applicable` local proof
provenance.

No manifest claim was narrowed or dropped.  There are no unresolved supplier
or source blockers for this batch.

Checks run after authoring:

- PASS — `node tools/tsx-run.mjs tools/precheck.mts` with the explicit 88
  manifest `items/ID.md` paths: 75 proof-bearing files checked, 0 failing.
- PASS — `node tools/validate-plan.mjs research/plan-spec.json` (repository
  plan consistent; it emits its existing repository-wide prerequisite notes).
- PASS — `node tools/content-policy.mjs research/frontier-31a-batch-9.pages.json`:
  88 scoped items, 0 errors, 0 warnings.
- PASS — `node tools/proof-contract.mjs
  research/frontier-31a-batch-9.proof-contracts.json --strict`: 75/75 items,
  0 errors, 0 warnings.
- PASS — `git diff --check`.

## Step-5 authoring

Recovery pass `author-recover-9-1` substantively rewrote the Tor/flatness
pair, in manifest order: the eight Tor definitions and the handedness remark,
the 32 A-page proof-bearing items, and the eight B-page calculations,
counterexample, and examples.  The two Tor constructions now use explicit
right/left module types; balance uses $K_{p,q}=Q_p\otimes_RP_q$ and finite
direct-sum diagonals; cyclic calculations use their displayed two-term
$\mathbb Z$-resolutions; and the false statements have actual typed failures
or concrete witnesses.  The four pages remain draft and their page lists were
not changed.

Provenance remains literature-derived statements with altered local proofs,
using the coverage locators for Weibel §§2.7, 3.1--3.2, 4.1; Rotman §§7.1,
7.1.1--7.1.2, 8.1; Sharifi §3.5; and the Stacks double-complex control.  No
claim was narrowed or dropped.  No judge record was retained or created.

`frontier-31a-batch-9.proof-contracts.json` now has 40 contracts for the
rewritten Tor proof-bearing items.  Each maps all actual numbered rows and all
eight standard boundary dispositions.  The 35 UCT/Kunneth proof-bearing
carriers remain the existing generic templates and are intentionally outside
this recovery contract: they require the next scoped substantive pass, rather
than being misreported as established proofs.

Checks actually run:

- PASS — `node tools/tsx-run.mjs tools/precheck.mts` with all 88 explicit
  manifest paths: 75 checked, 0 failing.
- `node tools/validate-plan.mjs` alone reports its required plan-file usage;
  PASS after supplying the canonical input:
  `node tools/validate-plan.mjs research/plan-spec.json` reports the plan
  acyclic and consistent (with its existing repository-wide redundancy notes).
- PASS — `node tools/content-policy.mjs research/frontier-31a-batch-9.pages.json`:
  88 scoped items, 0 errors, 0 warnings.
- PASS — `node tools/proof-contract.mjs research/frontier-31a-batch-9.proof-contracts.json --strict`:
  40/40 scoped items, 0 errors, 0 warnings.
- PASS — `git diff --check`.

Remaining obligation: substantively replace the UCT/Kunneth template proofs
and then extend the proof-contract scope to those 35 items; this recovery pass
does not claim that work complete.

## Step-5 authoring

Recovery pass `author-recover-9-1` completed the remaining UCT/Kunneth
obligation.  It substantively replaced the 28 A-page and seven B-page generic
proof-bearing bodies on `universal-coefficients-and-kunneth-theorems` and its
examples page.  The exact conventions retained are: free PID chain complexes,
right/left tensor handedness where relevant, finite direct-sum diagonals for
Kunneth, and natural short exact sequences distinguished from nonnatural
splittings.  The new bodies use the cycle/boundary sequences, explicit
edge/quotient maps, signed tensor differential, free two-term cyclic complexes,
and complement/shear witnesses for the naturality boundary.

The primary source passage re-read was Weibel, *An Introduction to Homological
Algebra*, §3.6, printed pp. 87--90 / PDF pp. 21--24: Theorems 3.6.1--3.6.3
and UCT 3.6.5.  The batch coverage's Rotman, Hilton--Stammbach, and Sharifi
locators remain the independent source controls.  No claim was narrowed or
dropped, no dependency or page list was changed, and no `verification.judge`
record was created or retained.  All four assigned pages and all assigned items
remain `draft`.

`research/frontier-31a-batch-9.proof-contracts.json` now has all 75
proof-bearing manifest items in scope.  Each contract maps the actual numbered
steps, has no uncontracted fact citations, and records every standard boundary
axis; definitions and the one remark correctly have no proof contract.

Checks run in this recovery:

- PASS -- explicit-path precheck for all 88 manifest `items/ID.md` files:
  75 checked, 0 failing.
- PASS -- `node tools/validate-plan.mjs research/plan-spec.json`: plan acyclic
  and consistent (with pre-existing repository-wide redundancy notes).
- PASS -- `node tools/content-policy.mjs research/frontier-31a-batch-9.pages.json`:
  88 scoped items, 0 errors, 0 warnings.
- PASS -- strict proof contract check: 75/75 items, 0 errors, 0 warnings.

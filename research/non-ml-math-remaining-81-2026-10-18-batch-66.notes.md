# Batch 66 — authoring and reconciliation notes

## Scope and controlling decisions

Authored only the assigned A/B pages, their four draft items, and batch-66
evidence. The A page adds a route-convention definition and cites theorem homes;
it introduces no new theorem. The B page contains two finite examples and one
counterexample, matching the design's examples/failure-case obligation.

The historical proposed-page record lists only
`algebraic-representation-and-tensor-symmetry-map` as a proposed prerequisite.
The current `plan-spec.json` and assigned batch manifest require both that page
and the published
`ariki-categorification-and-graded-decomposition-numbers` page. Following the
controlling plan, both links remain in the manifest and the Ariki route is
covered. The current Ariki page and its exact characteristic-zero and
positive-characteristic carriers were inspected.

The physics-algebras design's reuse-only rule controls: no Category-O, KLR,
Hecke, Specht, Soergel, or Ariki theorem is copied into a new theorem item. The
finite-dimensional check that the chosen `sl2` is semisimple is proved inside
the one example because it verifies that example's BGG-O hypothesis; it is not
promoted to a separate A-page theorem. The shifted-Yangian PBW result
`thm-ordered-monomial-pbw-basis-for-the-shifted-yangian` remains excluded because
its current proof is partial and noneligible.

The full relevant design was read in
`research/physics-algebras-planning-2026-10-17/dossiers/05-hecke.md`, under
“Soergel, KLR and category-O categorification” (pp. 195–241), together with
the assigned PA-35 entry in `proposed-pages.json`, the diagram/parameter
contracts, and the 05-Hecke source README. The plan's required scope is retained:
Category O and degenerate affine Hecke, finite cyclic KLR/Hecke, Specht/cellular,
Soergel, graded decomposition and the characteristic boundary.

## Inventory, dependencies, and levels

The assigned inventory is one A definition and three B proof-bearing items.
All direct dependencies below match the item frontmatter and manifest.

| Item | Kind | In-run dependencies | Level | Local obligation |
|---|---|---|---:|---|
| `def-category-o-klr-and-hecke-route-conventions` | definition | None | 0 | Separate the complex degenerate Category-O route, finite cyclic Hecke/KLR routes, grading variable, and cited theorem ranges. |
| `ex-category-o-degenerate-tensor-functor-on-trivial-sl2-module` | example | `def-category-o-klr-and-hecke-route-conventions` | 1 | Prove the trivial restricted `sl2` module is in BGG O, then compute the `d=0,1` normalized action. |
| `ex-level-one-e2-hecke-klr-block` | example | `def-category-o-klr-and-hecke-route-conventions` | 1 | Compute both height-one algebras and verify the nonzero block hypothesis before applying Brundan–Kleshchev. |
| `cex-place-permutation-is-not-a-nondegenerate-hecke-generator` | counterexample | `def-category-o-klr-and-hecke-route-conventions` | 1 | Test the nondegenerate quadratic relation at `xi=-1` on an explicit nonzero tensor vector. |

The A definition's complete direct supplier list is recorded in the manifest:
`def-axiom-of-choice`, `def-bgg-category-o`, `def-degenerate-affine-hecke-algebra`,
`def-arakawa-suzuki-casimir-operators-on-tensor-functors`,
`thm-the-casimir-and-place-permutation-operators-satisfy-degenerate-affine-hecke-relations`,
`thm-higher-level-schur-weyl-double-centralizer`,
`thm-higher-level-schur-weyl-endomorphism-isomorphism`,
`thm-category-o-translation-intertwines-residue-induction-and-restriction`,
`def-affine-and-cyclotomic-type-a-hecke-algebras`,
`def-nondegenerate-root-of-unity-level-one-hecke-regime`,
`def-cyclotomic-klr-quotient-at-a-dominant-weight`,
`def-graded-module-and-projective-grothendieck-groups-for-klr-towers`,
`thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism`,
`thm-klr-categorification-of-the-negative-quantum-half`,
`thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module`,
`thm-ariki-canonical-basis-theorem-in-characteristic-zero`,
`thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero`,
`thm-positive-characteristic-decomposition-polynomials-factor-through-adjustment`,
`thm-murphy-tableau-elements-form-a-cellular-basis`,
`thm-soergels-character-conjecture`,
`thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials`, and
`thm-parabolic-category-o-multiplicities-are-parabolic-kl-polynomials`.

The B examples' external direct dependencies are exact: the Category-O example
uses the Arakawa–Suzuki definition and relation theorem, the degenerate Hecke
definition, the `sl2` basis/simple/radical/derived-series definitions, and the
BGG definition plus finite-dimensional membership proposition. The `e=2`
example uses the type-A Hecke and cyclic-datum definitions, the level-one regime,
the KLR presentation/quotient/grading, residue projectors, and the published
Brundan–Kleshchev block theorem. The counterexample uses the type-A parameter
regime/relation, the Arakawa–Suzuki place permutation and its relation theorem,
and the tensor-product basis theorem. These complete lists are in the manifest.

The local dependency graph recomputes to A level 0 and B levels 1, with no
cycle. The assigned page-level prerequisite edge is batch 66 → batch 32, so
the applicable batch level remains 1. The stored scheduling graph also records
batch 66 at level 1 with prerequisite 32. The dispatch supplied input digest
`7096b1bbc6f2d70796b6d63080bb4b0fc6e781f6a5e4da539963fbb746842903`; the
stored artifact read during the final check had digest
`8ef5197111cd7fe6e5f51723d594c7e3b569b7e17c45722c4d6fc6142a7e9d07`, reflecting
concurrent run edits. I did not edit the shared scheduling artifact.

## Mathematical scope and axiom branches

- The Arakawa–Suzuki route is over `C` and uses the degenerate operators
  `x_j,s_i`; the source-normalized `y_j=x_j-z_M/N+(N-1)/2` is tracked
  separately. The BGG translation comparison remains at an admissible origin
  and its stated full-support/faithfulness conditions. Its functor square is
  natural-isomorphism commutative; it is not used as proof evidence.
- The Brundan–Kleshchev bridge is only invoked at finite quantum
  characteristic `e=2`, in its nondegenerate `xi=-1` branch. The separate
  `q=1` branch requires `char(F)=e`; it is not conflated with the Category-O
  degenerate route over `C`.
- In the level-one Ariki branch, `xi` and the grading variable `q` remain
  independent. The canonical-basis and graded-decomposition claims are only
  characteristic zero. Positive characteristic retains the adjustment-matrix
  factorization; no identity-matrix claim is made.
- The general negative-half KLR and cyclotomic highest-weight projective
  `K_0` results remain separate theorem families. Murphy cellularity remains
  over its stated commutative ring and unit parameter without semisimplicity.
  The Soergel result remains the local type-A/characteristic-zero result; the
  spherical singular and antispherical regular-ambient parabolic formulas are
  not interchanged.
- Choice remains attached to the suppliers that state it: the higher-level
  double-centralizer/Schur comparisons and Category-O residue comparison assume
  the Axiom of Choice; Ariki and graded decomposition inherit it through their
  QG-8/global-basis suppliers; the negative-half theorem uses it through
  nondegeneracy of the quantum form; the cyclotomic projective `K_0` theorem
  states it directly; the positive-characteristic adjustment result inherits
  it through its crystal/global-basis suppliers; the singular and parabolic
  Category-O multiplicity arguments retain their stated choice hypotheses.
  The finite block isomorphism and the three local computations use no choice.

The one-strand `e=2` proof explicitly checks the Hecke residue projector is
nonzero (`e_{alpha_0}=1`) before invoking the block theorem. The
counterexample only refutes `T_1=P` at `xi=-1`; it does not rule out other
parameter conversions or homomorphisms. All arguments in the three B items are
choice-free.

## Cross-batch prerequisite

`research/non-ml-math-remaining-81-2026-10-18-batch-66.cross-batch-dependencies.json`
keeps the required page edge to
`algebraic-representation-and-tensor-symmetry-map` **open**. Its current batch-32
manifest lists `def-unital-associative-algebra-representation` and
`thm-associative-algebra-representations-are-unital-modules`; I inspected both
actual bodies, which spell out the unital action map/module dictionary. Their
page and carriers remain draft, so this is not an acceptance claim. The precise
pending interface is the representation/module action dictionary and the fact
that a tensor action needs extra coproduct structure. No batch-66 proof quotes
those draft items as a logical premise; all local calculations use their
published direct suppliers. The declared page-level reading prerequisite still
requires reconciliation.

## Sources and source-resolution history

Six complete full-text sources are recorded in the coverage file: the primary
Arakawa–Suzuki paper, two primary Brundan–Kleshchev papers, Kleshchev's full
survey, and Mathas's complete textbook manuscript. Their locators cover the
exact source formulas, finite-`e` block cases, grading/parameter separation,
characteristic branches, and the type-A quadratic convention. All 15 harvested
results have dispositions; six are scaffolded into route conventions or the
finite examples, and the remaining results point to the exact published
carriers. Coverage and fetch gates report no warnings.

`source-fetch-check --stamp` fetched and stamped all 6/6 active coverage URLs;
the check-only rerun resolved all six stamps with zero drops. No active retrieval
failed, so this batch adds no `source_resolution` record and invents no retries.
The prior Ariki 1996 PDF retrieval failure remains documented in the existing
05-Hecke source README; this batch does not rely on that URL. The theorem is
covered by the fully read Brundan–Kleshchev 2009 article and Kleshchev survey.

## Scoped checks

- `source-fetch-check --stamp`: 6/6 sources fetched and stamped; 0 documented
  drops. Check mode: 6/6 resolved.
- `coverage-checklist ... --require-destination --json`: 1 A page, 15 harvested
  results, 0 errors, 0 warnings.
- `manifest-deps`: 4 items, 0 missing dependency arrays, 0 errors.
- Scoped `dependencyLevels`: A 0, all three B items 1, no errors or cycles.
- Read-only batch graph calculation: batch 66 remains level 1, requiring batch
  32. The full `computeRunBatchDependencyLevels` call could not complete because
  another active manifest pair currently duplicates
  `lem-it-quantum-relative-entropy-support-regularization`; no unrelated batch
  was edited. The shared scheduling file remains for the owner to reconcile.
- `precheck.mts`: 3 proof-bearing items checked, 0 failures.
- `proof-contract.mjs --strict`: 3 contracts checked, 0 errors, 0 warnings.
- `proof-layout.mjs` on the four changed item files: 4 files, 9 proof steps,
  0 defects.
- `rendercheck.mjs` on both pages and four items: 6 files, 0 errors, 0 warnings.
- Normal final `content-policy.mjs` on the batch manifest: 4 items in scope,
  0 errors, 0 warnings. The separate `--manifest-only` pre-authoring gate was
  also invoked after authoring and flagged the four now-present item files as
  `batch-item-already-exists`; that mode checks whether IDs may be minted before
  their files are created, so it is not the final content-policy result.

## Readiness-record blocker

No batch-66 step-1 decision receipts existed at handoff. The required
`step1-decisions.mjs check` and `record` commands currently fail while loading
the full run snapshot with the same duplicate item ID:
`lem-it-quantum-relative-entropy-support-regularization` in another active
batch; the current batch-21 and batch-22 manifests both list that ID. I attempted
`record --decision escalated` for all four assigned items;
each invocation returned that duplicate-item error before writing a receipt. I
did not write receipts around that validator or edit the other batch.
Once the run-wide duplicate is reconciled, the three B items have complete
local proofs, suppliers, placement, and contracts; their decision must still
account for the open batch-32 page prerequisite. The A route definition is
locally complete, but its page's declared batch-32 prerequisite remains open.

## Owner PA-01 reading-route reconciliation

The actual authored batch-32 ordinary unital field-algebra action/module dictionary agrees with the basic context of PA-35. All Category-O/Hecke/KLR grading, parameter, weight and characteristic hypotheses remain in the actual published direct suppliers. The Arakawa-Suzuki right action is obtained via the published generator-fixing anti-involution, so it is not silently identified with a left action. PA-01 supplies no missing graded, categorification, coproduct or tensor-functor theorem. The current page-reading record is now `verified` only for this exact compatibility comparison. This supersedes the earlier missing/empty/draft-only reading hold without assigning proof acceptance or native readiness. Draft status alone is not an absent-interface finding; the actual completed PA-01 bodies were compared. Original native process evidence and authoring-time observations remain intact in the archived preimages. No mathematical item, dependency, level, manifest, shared plan, engine control, source or proof status changed. See `research/non-ml-math-remaining-81-2026-10-18-owner-pa01-consumer-routes/construction.md` and `repair.json` for actual reading limits, hashes and owner dispositions.

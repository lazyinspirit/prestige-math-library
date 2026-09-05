# frontier-30 · Beta · batch-16 notes — `harish-chandra-isomorphism-casimir-and-central-characters`

Run `frontier-30`, batch `16`, one A/B pair, category `lie-theory`.
Author: Beta. Session date: `2026-09-05`.

Artifacts owned by this dispatch:

- `research/frontier-30-batch-16.pages.json`
- `research/frontier-30-batch-16.coverage.json`
- this file

Per the dispatch, I edited only those batch-16 scaffold artifacts and did not
touch workflow state, another batch, published content, or plan structure
outside batch `16`.

## 1. Outcome

The repaired pair is now scaffolded as:

- A page `harish-chandra-isomorphism-casimir-and-central-characters`: **45 items**
- B page `harish-chandra-isomorphism-casimir-and-central-characters-examples`: **6 items**

No split is needed. The A page remains below the 60-item ceiling after adding a
local supplier chain for the upstream Lie-theory interfaces that are still
absent from the live `items/` corpus.

The page now closes its own proof boundary for:

- the enveloping algebra and its PBW filtration
- the PBW theorem and the triangular decomposition needed for the
  Harish-Chandra projection
- the Killing-form and root-space interfaces needed for the Casimir scalar
- the regular/Cartan/Weyl/fundamental-weight data needed for Chevalley
  restriction and the dot action
- the finite-dimensional highest-weight classification needed in the
  surjectivity side of Chevalley restriction

## 2. Dependency Boundary

The Stage-1 failure was not a stale alias problem. I checked the live authored
`items/` corpus and aliases against all 25 unresolved dependency ids reported by
`content-policy`; none of those interfaces is currently published on disk.

Because batch `16` is not allowed to depend on unpublished planned items from
DG-27, DG-29, DG-30, DG-31, or DG-32, the repair uses local RL-1 supplier
items with fresh ids rather than reusing the upstream planned ids. The new
local items are narrower than the original DG pages, but they preserve the same
mathematical interfaces needed by the existing RL-1 route.

The resulting local supplier chain is:

- `def-universal-enveloping-algebra-as-a-tensor-quotient`
- `prop-lie-algebra-actions-extend-to-unital-actions-of-the-enveloping-algebra`
- `def-pbw-filtration-by-tensor-degree-on-the-enveloping-algebra`
- `prop-associated-graded-of-the-pbw-filtration-is-commutative`
- `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra`
- `def-killing-form-of-a-semisimple-lie-algebra`
- `prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra`
- `thm-root-space-decomposition-relative-to-a-cartan-subalgebra`
- `prop-root-space-brackets-add-their-roots`
- `prop-killing-form-pairs-only-opposite-root-spaces`
- `def-killing-dual-vector-attached-to-a-root`
- `prop-opposite-root-spaces-bracket-to-the-killing-dual-line`
- `thm-triangular-decomposition-from-a-chosen-positive-root-system`
- `def-highest-weight-vector-and-cyclic-highest-weight-module`
- `def-weyl-vector-rho-for-a-chosen-positive-system`
- `def-regular-element-and-rank-for-a-complex-semisimple-lie-algebra`
- `def-regular-root-hyperplane-arrangement-in-a-cartan-subalgebra`
- `prop-centralizer-of-a-cartan-element-from-its-vanishing-roots`
- `lem-regular-elements-form-a-connected-dense-open-subset`
- `thm-cartan-subalgebras-are-conjugate-in-a-complex-semisimple-lie-algebra`
- `thm-the-root-set-is-a-reduced-crystallographic-root-system`
- `def-root-reflections-and-the-weyl-group-action`
- `def-fundamental-weights-for-a-chosen-simple-root-system`
- `thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights`

These items eliminate all 34 missing edges without weakening any of the
existing RL-1 statements.

## 3. Source Set Actually Read

I read and harvested six full-text sources, and I re-opened every recorded URL
in the web reader on `2026-09-05` to verify liveness.

### Independent full backbones

1. Pavel Etingof, *Representations of Lie Groups*  
   `https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf`

2. Yiannis Sakellaridis, *Verma Modules and the Category O*  
   `https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf`

### Local supplier source for the repair

3. Pavel Etingof, *Lie Groups and Lie Algebras I*  
   `https://math.mit.edu/~etingof/lnlg.pdf`

### Supplementary proof carriers

4. Lin Chen, *Geometric Representation Theory I*, Lecture 4  
   `https://windshower.github.io/linchen/teaching/s2024/lecture4.pdf`

5. Lin Chen, *Geometric Representation Theory I*, Lecture 5  
   `https://windshower.github.io/linchen/teaching/s2024/lecture5.pdf`

6. Alexander Kleshchev, *Lectures on Infinite Dimensional Lie Algebras*  
   `https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf`

### Source roles

- Etingof's representation-theory notes still carry the center theorem,
  Chevalley restriction payoff, central characters, and the free-over-the-center
  consequence.
- Sakellaridis still carries the compact Harish-Chandra/Chevalley route and now
  also supplies the explicit `rho` convention used by the local dot-action seam.
- Etingof's Lie-groups/Lie-algebras notes now supply the missing local closure
  for `U(g)`, PBW, Killing-form nondegeneracy, root spaces, regular elements,
  Cartan conjugacy, Weyl data, fundamental weights, and finite-dimensional
  highest-weight classification.
- Chen Lecture 4 still carries the clean highest-weight scalar computation for
  the Harish-Chandra projection.
- Chen Lecture 5 still carries the filtered-graded comparison behind the
  surjectivity half of Harish-Chandra.
- Kleshchev still carries the invariant-form/Casimir conventions and the
  Casimir eigenvalue formula.

## 4. Proof-Route Decisions

- The repair stays local to RL-1 instead of changing `requires`, the plan, or
  another batch.
- The page still keeps the unshifted Harish-Chandra projection separate from
  the later `rho` shift.
- The page still keeps Chevalley restriction visible as an explicit theorem
  feeding the Harish-Chandra isomorphism.
- The page still avoids importing RL-2's full Verma-module package as a
  dependency; injectivity and scalar-action steps use cyclic highest-weight
  quotients only.
- The page still defers the maximal-quotient and Harish-Chandra-bimodule rows
  from Etingof §14.2 to `primitive-ideals-and-duflo-theorem`.

## 5. Proposed Page Summaries

### `harish-chandra-isomorphism-casimir-and-central-characters`

This page now begins by locally rebuilding the exact Lie-theory interfaces it
needs: `U(g)`, PBW, root-space/Killing-form data, Cartan/Weyl structure, and
finite-dimensional highest-weight classification. It then constructs the
quadratic Casimir, defines the Harish-Chandra projection, proves the Chevalley
restriction theorem needed for the associated graded, and concludes with the
Harish-Chandra isomorphism, the dot-orbit description of central characters,
the polynomial structure of the center, and the freeness of `U(g)` over its
center.

### `harish-chandra-isomorphism-casimir-and-central-characters-examples`

The examples page is unchanged in scope: the normalized `sl_2` Casimir and its
eigenvalue, independent quadratic and cubic generators in `sl_3`, a numerical
`A_2` dot-orbit check, the standard `sl_2` counterexample to ordinary Weyl
orbits, the singular character at `-rho`, and a noncentral asymmetric quadratic
PBW element.

## 6. Known Limits

- The repair intentionally duplicates a minimal local supplier boundary because
  the live authored corpus still lacks the upstream DG/RL items the original
  scaffold expected.
- Those local items should eventually be reconciled against the final authored
  DG-27/DG-29/DG-30/DG-31/DG-32 ids if the run later materializes those pages.
- RL-1 still does not scaffold the full Verma-module package, category `O`
  block decomposition, Harish-Chandra bimodules, or maximal central quotients.

## 7. Validator Log

Validators run after the repair:

- `node tools/coverage-checklist.mjs research/frontier-30-batch-16.coverage.json --require-destination`
- `node tools/manifest-deps.mjs research/frontier-30-batch-*.pages.json`
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json`
- `node tools/validate-plan.mjs research/plan-spec.json`

Results:

- `coverage-checklist` passed:
  `coverage-checklist: 1 page(s), 73 harvested result(s), 0 error(s), 0 warning(s)`
- `manifest-deps` passed:
  `manifest-deps: 694 item(s), 0 normalized, 0 error(s)`
- `content-policy --manifest-only` passed:
  `content-policy: 694 scoped item(s), 0 error(s), 0 warning(s)`
- `validate-plan` exited `0`. It still prints the repository's standing
  informational and warning output outside this batch, but no batch-16 blocking
  error remains.

## Stage-1 dependency repair

- No missing dependency was repairable by swapping to an already authored item
  or alias; all 25 unresolved ids were absent from the live `items/` corpus.
- `def-universal-enveloping-algebra` and the missing module-extension theorem
  were replaced by the local pair
  `def-universal-enveloping-algebra-as-a-tensor-quotient` and
  `prop-lie-algebra-actions-extend-to-unital-actions-of-the-enveloping-algebra`.
- The missing PBW supplier stack was replaced by the local trio
  `def-pbw-filtration-by-tensor-degree-on-the-enveloping-algebra`,
  `prop-associated-graded-of-the-pbw-filtration-is-commutative`, and
  `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra`.
- The missing invariant-form and semisimplicity inputs were compressed into the
  local pair `def-killing-form-of-a-semisimple-lie-algebra` and
  `prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra`.
- The missing Cartan/root/Weyl chain was repaired locally by adding explicit
  root-space, Killing-pairing, regular-element, Cartan-conjugacy, root-system,
  Weyl-action, and fundamental-weight items.
- The missing highest-weight prerequisites were repaired locally by adding
  `def-highest-weight-vector-and-cyclic-highest-weight-module`,
  `def-weyl-vector-rho-for-a-chosen-positive-system`, and
  `thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights`.
- `prop-casimir-eigenvalue-on-a-highest-weight-module`,
  `lem-associated-graded-symbol-of-a-central-element-is-invariant`, and
  `thm-enveloping-algebra-is-free-over-its-center` also received the extra
  local dependencies their proofs genuinely use once the missing suppliers are
  made explicit.

## Step-3 fix pass

The stable batch-16 finding ids referenced by
`research/frontier-30-alpha-a-step3-scaffold-review.md` are the six batch-16
`decline_id` rows in `research/frontier-30-alpha-a-scope-decisions.json`,
which that review marks current while also marking
`harish-chandra-isomorphism-casimir-and-central-characters` as `sufficient`.
I re-checked those rows against the controlling RL-1, RL-2, RL-10, and RL-13
design blocks, the live batch-16 manifest and coverage records, the recorded
source URLs, and the required validators on September 5, 2026 before deciding
whether any batch-local scaffold repair was still required.

No batch-16 manifest or coverage edit was required on September 5, 2026. Every
stable finding still stands on current bytes, so the only changed scaffold
record in this fix pass is this notes receipt.

- `0d427bfcf4648bd66f99da251c923a4f118abc3915a0c8e17a8be3cb8084059f` —
  disposition: `stands`. Evidence: `Definition 5.2` in Sakellaridis is still
  deferred in `research/frontier-30-batch-16.coverage.json` to
  `verma-modules-and-shapovalov-forms`, and the live RL-2 design still owns
  `def-verma-module` plus the universal-property spine while the batch-16
  manifest and notes still use only cyclic highest-weight modules on RL-1.
  Changed scaffold record: none.
- `328ca33b5cd928114550201d66ce3581efc1e9436515a3eb3dee4394dfe0cdbe` —
  disposition: `owner-decision`. Evidence: Etingof `Corollary 14.4` remains a
  Harish-Chandra-bimodule tensor-stability result deferred to
  `primitive-ideals-and-duflo-theorem`; the live RL-1 route still stops at the
  center, central characters, polynomial generators, and freeness of `U(g)`
  over its center, while RL-10 still owns central reductions and primitive
  ideals without naming this exact bimodule corollary as a page item. Changed
  scaffold record: none.
- `43a49d79e75d490d3ffe451176dd73d531ce9083347342ee489cda5adb5a116b` —
  disposition: `owner-decision`. Evidence: Etingof `Corollary 14.3` remains
  the zero-weight multiplicity statement for the adjoint-finite bimodule
  `U_chi`; RL-1 still keeps Harish-Chandra bimodules out of scope, and the
  current later plan still offers only the neighboring RL-10 primitive-ideal
  page rather than an exact dedicated home for this row. Changed scaffold
  record: none.
- `74c6e4edab5a9898575d49dec9a8b466cd3427d6880a0f10c6aafae90f7e6233` —
  disposition: `stands`. Evidence: the paragraph defining `U_chi` is still
  deferred in `research/frontier-30-batch-16.coverage.json` to
  `primitive-ideals-and-duflo-theorem`, and the live RL-10 design still
  explicitly owns `def-central-reduction-of-the-enveloping-algebra` while RL-1
  still stops before maximal quotients and primitive-ideal machinery. Changed
  scaffold record: none.
- `88fdfc40fca802f84e6b5b43538308b5e17396371135d85184611d12ceba8826` —
  disposition: `owner-decision`. Evidence: Kleshchev `Example 2.3.4(ii)` is
  still an affine Kac-Moody Casimir example; RL-1 still needs only the
  finite-dimensional semisimple Casimir package, while RL-13 still owns loop
  algebras, central extensions, and affine root data without naming this exact
  example as a page item. Changed scaffold record: none.
- `b690135eca7d5c20391a61cffbb5cfef620b3d6b4a27fa90cde244705323bd49` —
  disposition: `owner-decision`. Evidence: Etingof `Corollary 14.5` remains
  the quotient-description/classification statement for adjoint-finite
  Harish-Chandra bimodules; RL-1 still excludes that theory, and the live
  later plan still has no exact named home beyond the neighboring RL-10
  primitive-ideal page. Changed scaffold record: none.

Source verification for this fix pass:

- I re-opened all six recorded URLs through the web reader on September 5,
  2026: Etingof `mit18_757_f23_lec_full.pdf`, Sakellaridis
  `vermamodules.pdf`, Etingof `lnlg.pdf`, Chen Lectures `4` and `5`, and
  Kleshchev `IDLALN3.pdf`.
- All six live documents still match the recorded locators and harvested
  headings in `research/frontier-30-batch-16.coverage.json`, so no alternate
  URL, archive substitution, or re-sourcing was needed.
- The existing `fetch_verified` records in
  `research/frontier-30-batch-16.coverage.json` remain valid for the current
  source set.

Validator rerun on September 5, 2026:

- `node tools/coverage-checklist.mjs research/frontier-30-batch-16.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 73 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json`
  -> `content-policy: 694 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-16.coverage.json`
  -> `source-fetch-check: 6/6 source(s) fetch-verified`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> pass with the standing repository-wide `redundant-prereq` advisories,
  ending in the standard `OK` line and no batch-16 order, dependency, or
  unresolved-id failure.

## Step-5 authoring

Authoring completed on Friday, September 4, 2026, with all owned artifacts kept
at `status: draft`.

Authored pages:

- `library/lie-theory/harish-chandra-isomorphism-casimir-and-central-characters.md`
- `library/lie-theory/harish-chandra-isomorphism-casimir-and-central-characters-examples.md`

Authored A-page ids:

- `def-universal-enveloping-algebra-as-a-tensor-quotient`, `prop-lie-algebra-actions-extend-to-unital-actions-of-the-enveloping-algebra`, `def-killing-form-of-a-semisimple-lie-algebra`, `prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra`, `def-pbw-filtration-by-tensor-degree-on-the-enveloping-algebra`, `prop-associated-graded-of-the-pbw-filtration-is-commutative`, `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra`, `thm-root-space-decomposition-relative-to-a-cartan-subalgebra`, `prop-root-space-brackets-add-their-roots`, `prop-killing-form-pairs-only-opposite-root-spaces`, `def-killing-dual-vector-attached-to-a-root`, `prop-opposite-root-spaces-bracket-to-the-killing-dual-line`, `thm-triangular-decomposition-from-a-chosen-positive-root-system`, `def-highest-weight-vector-and-cyclic-highest-weight-module`, `def-weyl-vector-rho-for-a-chosen-positive-system`, `def-regular-element-and-rank-for-a-complex-semisimple-lie-algebra`, `def-regular-root-hyperplane-arrangement-in-a-cartan-subalgebra`, `prop-centralizer-of-a-cartan-element-from-its-vanishing-roots`, `lem-regular-elements-form-a-connected-dense-open-subset`, `thm-cartan-subalgebras-are-conjugate-in-a-complex-semisimple-lie-algebra`, `thm-the-root-set-is-a-reduced-crystallographic-root-system`, `def-root-reflections-and-the-weyl-group-action`, `def-fundamental-weights-for-a-chosen-simple-root-system`, `thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights`, `def-central-character-of-a-lie-algebra-module`, `lem-central-action-on-a-cyclic-highest-weight-module-is-scalar`, `def-quadratic-casimir-element`, `lem-the-casimir-element-is-independent-of-dual-bases`, `prop-the-quadratic-casimir-element-is-central`, `prop-casimir-eigenvalue-on-a-highest-weight-module`, `def-harish-chandra-projection`, `lem-central-elements-have-weight-zero`, `prop-harish-chandra-projection-is-multiplicative-on-the-center`, `lem-harish-chandra-projection-computes-highest-weight-scalars`, `lem-rho-shift-intertwines-the-dot-and-ordinary-weyl-actions`, `prop-harish-chandra-map-is-injective`, `lem-associated-graded-symbol-of-a-central-element-is-invariant`, `lem-regular-semisimple-elements-form-a-dense-open-subset`, `lem-an-invariant-polynomial-is-determined-by-its-cartan-restriction`, `lem-weyl-invariant-cartan-polynomials-extend-to-g-invariants`, `thm-symmetric-invariants-restrict-to-weyl-invariants`, `thm-harish-chandra-isomorphism-for-the-center`, `cor-central-characters-are-dot-weyl-orbits`, `cor-the-center-is-a-polynomial-algebra-of-rank-many-generators`, `thm-enveloping-algebra-is-free-over-its-center`

Authored B-page ids:

- `ex-sl2-casimir-and-its-highest-weight-eigenvalue`, `ex-sl3-harish-chandra-center-generators`, `ex-dot-conjugate-weights-have-the-same-central-character`, `cex-unshifted-weyl-orbits-do-not-classify-central-characters`, `ex-the-zero-weight-singular-central-character`, `cex-a-noninvariant-quadratic-pbw-element-is-not-central`

Authored proof-contract artifact:

- `research/frontier-30-batch-16.proof-contracts.json`

Provenance rationale actually used:

- The 45 A-page statements follow the source-backed RL-1 route from the batch coverage and remain `literature-derived`; the 32 proof-bearing A-page items carry local `ai-altered` proofs, and the 13 definitions carry `proof: not-applicable`.
- On the examples page, `ex-sl2-casimir-and-its-highest-weight-eigenvalue`, `ex-sl3-harish-chandra-center-generators`, `cex-unshifted-weyl-orbits-do-not-classify-central-characters`, and `ex-the-zero-weight-singular-central-character` remain source-backed `literature-derived` statements with local `ai-altered` verifications.
- `ex-dot-conjugate-weights-have-the-same-central-character` and `cex-a-noninvariant-quadratic-pbw-element-is-not-central` are the only `ai-generated` statements in the batch; both are leaf B-page items, both carry truthful `generation.role`, and neither is a dependency target.

Narrowed or dropped claims:

- None. I kept the scaffolded item set and did not change the six standing Step-3 deferments already recorded above.

Validators run after authoring:

- `node tools/tsx-run.mjs tools/precheck.mts ...batch-16 item files...` -> `38 checked, 0 failing — all clean`
- `node tools/proof-contract.mjs research/frontier-30-batch-16.proof-contracts.json --strict` -> `0 error(s), 0 warning(s), 38/38 item(s) checked`
- `node tools/content-policy.mjs research/frontier-30-batch-16.pages.json` -> `content-policy: 51 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json` -> pass with only the standing repository-wide `redundant-prereq` advisories, ending in `OK`
- `node tools/rendercheck.mjs ...owned pages and touched item files...` -> clean on the targeted render pass after removing one wikilink-in-math pattern and one unsupported matrix environment
- `git diff --check -- items library/lie-theory research/frontier-30-batch-16.proof-contracts.json research/frontier-30-batch-16.notes.md` -> clean

Blockers:

- None in batch-16 scope.

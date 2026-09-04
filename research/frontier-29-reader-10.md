# frontier-29 reader-10 report

Date: Tuesday, September 1, 2026.
Run: `frontier-29`
Batch: `10`
Role: independent Step-6 reader

## Opened scope

- Control and batch artifacts: `AGENTS.md`, `CLAUDE.md`, `README.md`,
  `SCHEMA.md`, `WORKFLOW.md`,
  `research/frontier-29-reader.task.md`,
  `research/frontier-29-dispatch/reader-reader-10.prompt.md`,
  `research/frontier-29-batch-10.pages.json`,
  `research/frontier-29-batch-10.coverage.json`,
  `research/frontier-29-batch-10.notes.md`, and
  `research/frontier-29-batch-10.proof-contracts.json`.
- Live-run context: `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .`
  and the assigned page files
  `library/category-theory/duality-and-rigidity-in-monoidal-categories.md`
  and
  `library/category-theory/duality-and-rigidity-in-monoidal-categories-examples.md`.
- Assigned item scope: all `44` manifest-listed batch-owned item files on the
  two assigned pages.
- Direct dependency items opened while checking the current proofs and examples:
  `cor-finite-dimensional-vector-spaces-are-isomorphic-iff-equal-dimension`,
  `cor-the-two-unitors-agree-on-the-unit-object`,
  `def-additive-category`,
  `def-adjunction-by-unit-counit-and-triangle-identities`,
  `def-algebraic-dual-and-linear-functional`, `def-braiding`,
  `def-canonical-map-to-the-double-dual`, `def-dimension`,
  `def-monoidal-category`, `def-monoidal-natural-transformation`,
  `def-the-reverse-and-the-opposite-of-a-monoidal-category`,
  `def-trace-of-an-endomorphism`,
  `thm-currying-is-an-adjunction-in-set`,
  `thm-dual-family-is-a-basis-in-finite-dimension`, and
  `thm-modules-over-a-commutative-ring-form-a-monoidal-category`.

## Confirmed defects

1. `items/thm-in-a-rigid-category-every-morphism-of-monoidal-functors-is-an-isomorphism.md`
   Disposition: repaired in the owned A-page item and synced into the batch
   proof contract.
   Severity: fatal.
   Evidence: the pre-repair statement put rigidity on the target category
   `\mathcal D`, but the proof itself uses duals of objects of the source
   category `\mathcal C`. The claim is false as stated: in the free strict
   monoidal category on one generator, a strong monoidal natural
   transformation between functors into `\mathbf{Vect}_k` is determined by an
   arbitrary linear map on the generator and need not be invertible.
   Repair: moved the rigidity hypothesis to the source category, added the
   missing dual-uniqueness dependency, and rewrote the inverse construction
   around the transported dual pairs.

2. `items/thm-a-dual-object-in-the-endofunctor-category-is-an-adjoint-functor.md`
   Disposition: repaired in the owned A-page item and synced into the batch
   proof contract.
   Severity: fatal.
   Evidence: the second triangle/zig-zag composite was written as
   `L => FLL => L`, which is the wrong order and not the adjunction triangle.
   Repair: replaced it by the correctly typed composite
   `L => LFL => L`.

3. `items/thm-left-duality-is-a-contravariant-antimonoidal-functor.md`
   Disposition: repaired in the owned A-page item and synced into the batch
   proof contract.
   Severity: fatal.
   Evidence: the final sentence invoked self-duality of the unit to conclude
   `\mathbf 1^\vee \cong \mathbf 1`, but the item neither depended on nor
   cited `thm-the-unit-is-self-dual`.
   Repair: added the missing dependency and made the unit comparison an
   explicit uniqueness argument.

4. `research/frontier-29-batch-10.proof-contracts.json`
   Disposition: repaired in the assigned batch contract.
   Severity: nonfatal.
   Evidence: on current disk before regeneration, `proof-contract --strict`
   and `citation-fidelity` both failed: most citations still quoted local fact
   restatements instead of exact source sections, several derivation inputs were
   stale, and four entries used the placeholder source `source-backed fact`.
   Repair: normalized the cited A-page remarks with explicit `## Remark`
   sections, regenerated `29` contract entries from current item text, and
   refreshed the changed theorem entries after the item repairs. The one
   unchanged counterexample without fact lines kept its existing contract entry.

## Edits

- Patched `items/thm-in-a-rigid-category-every-morphism-of-monoidal-functors-is-an-isomorphism.md`.
- Patched `items/thm-a-dual-object-in-the-endofunctor-category-is-an-adjoint-functor.md`.
- Patched `items/thm-left-duality-is-a-contravariant-antimonoidal-functor.md`.
- Patched `items/thm-a-braided-rigid-category-has-a-drinfeld-morphism.md` to
  remove a source-theorem numeral that the contract parser was misreading as a
  proof-step token.
- Added explicit `## Remark` sections to
  `items/rem-which-side-the-word-left-refers-to.md`,
  `items/rem-what-is-needed-before-a-trace-can-be-written.md`,
  `items/rem-pivotal-and-spherical-structures-vary-by-monoidal-automorphisms-of-the-identity.md`,
  `items/rem-the-exact-sequence-additivity-of-trace-and-its-missing-hypotheses.md`,
  and `items/rem-rigidity-alone-does-not-make-a-tensor-category.md`.
- Regenerated `research/frontier-29-batch-10.proof-contracts.json`.
- Wrote this report.
- Wrote `research/frontier-29-reader-findings-10.json`.

- No changed item carried a `verification.judge` block, so no stale judge
  record needed removal.

## Uneditable manifest drift

- `research/frontier-29-batch-10.pages.json` is stale against the repaired item
  frontmatter.
- Its `deps` list for
  `thm-left-duality-is-a-contravariant-antimonoidal-functor` still omits
  `thm-the-unit-is-self-dual`.
- Its `deps` list for
  `thm-in-a-rigid-category-every-morphism-of-monoidal-functors-is-an-isomorphism`
  still omits
  `thm-duals-are-unique-up-to-a-unique-compatible-isomorphism`.

## Page verdicts

- `duality-and-rigidity-in-monoidal-categories`: repaired and clean on current
  bytes.
- `duality-and-rigidity-in-monoidal-categories-examples`: clean on current
  bytes; no B-page prose edits were made.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts` on the four changed proof-bearing
  items: all reflowed cleanly.
- `node tools/tsx-run.mjs tools/precheck.mts` on the four changed proof-bearing
  items: `4 checked, 0 failing`.
- `node tools/tsx-run.mjs tools/precheck.mts` on all `30` proof-bearing
  batch-owned items: `30 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-29-batch-10.proof-contracts.json --strict`:
  `0` errors, `0` warnings, `30/30` items checked.
- `node tools/citation-fidelity.mjs research/frontier-29-batch-10.proof-contracts.json --items-dir items --fail-on-missing-quote`:
  `57` citations, no missing quotes, no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-29-batch-10.proof-contracts.json --items-dir items --fail-on-contradicted`:
  no contradicted dispositions; only template-reuse warnings, which I read and
  did not escalate into additional findings.
- `node tools/rendercheck.mjs` on the `44` batch item files plus the `2`
  assigned page files: `OK — 46 file(s)`.
- `node tools/content-policy.mjs research/frontier-29-batch-10.pages.json`:
  `44 scoped item(s), 0 error(s), 0 warning(s)`.
- `git diff --check -- ...` over the changed batch files: clean.

## Uneditable defects

None. Every confirmed defect on current disk was repairable inside the assigned
batch.

## Blockers

None.

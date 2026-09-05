# frontier-30 reader-10 report

Date: Friday, September 4, 2026.
Run: `frontier-30`
Batch: `10`
Role: independent Step-6 reader

## Opened scope

- Control and batch artifacts: `AGENTS.md`, `CLAUDE.md`, `README.md`,
  `research/frontier-30-reader.task.md`,
  `research/frontier-30-dispatch/reader-reader-10.prompt.md`,
  `research/frontier-30-batch-10.pages.json`,
  `research/frontier-30-batch-10.coverage.json`,
  `research/frontier-30-batch-10.notes.md`,
  `research/frontier-30-batch-10.proof-contracts.json`, and the live
  controller via `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .`.
- Assigned pages: `library/homological-algebra/delta-functors-and-universality.md`
  and
  `library/homological-algebra/delta-functors-and-universality-examples.md`.
- Assigned item scope: all `41` manifest-listed batch-owned item files on the
  two assigned pages.
- Dependency scope: the full `38`-item direct published dependency closure
  needed by the current proofs, plus
  `thm-the-cone-long-exact-sequence` and
  `ex-a-degreewise-split-sequence-with-nonzero-connecting-map` while checking
  the nonnatural-connector witnesses.

## Confirmed defects

1. `items/lem-the-effacement-extension-is-independent-of-the-effacing-morphism.md`
   Disposition: repaired in the owned A-page item and synced into the batch
   proof contract.
   Severity: fatal.
   Evidence: the pre-repair homological proof compared
   `p=(p_1,p_2):P_1\oplus P_2\twoheadrightarrow A` with the original
   effacements using the projections `P_1\oplus P_2\to P_i`, but those do not
   satisfy `p_i\pi_i=p`. The required comparison maps are the inclusions
   `\iota_i:P_i\to P_1\oplus P_2`, which do satisfy `p\iota_i=p_i`.
   Repair: rewrote the proof to use the additive biproduct identification on
   `T_n(P_1\oplus P_2)` and the correct inclusion-based comparison maps.

2. `items/cor-universal-delta-functors-extending-the-same-degree-zero-functor-are-uniquely-isomorphic.md`
   Disposition: repaired in the owned A-page item and synced into the batch
   proof contract.
   Severity: fatal.
   Evidence: the pre-repair statement assumed only `S_0\cong F\cong T_0` but
   then spoke of the degree-zero component being the identity of `F`. Without
   chosen identifications to `F`, that degree-zero map is not defined.
   Repair: added the required chosen natural isomorphisms to `F` and rewrote
   the proof around the induced map `\tau^{-1}\sigma`.

3. `items/prop-an-exact-base-functor-has-the-trivial-universal-delta-functor.md`
   Disposition: repaired in the owned A-page item and synced into the batch
   proof contract.
   Severity: fatal.
   Evidence: the pre-repair proof deduced universality from
   `thm-derived-functors-are-universal-delta-functors`, but the statement did
   not assume enough projectives, enough injectives, or supplied resolution
   data.
   Repair: replaced the argument by the direct Exercise 2.1.2 proof: exactness
   makes the trivial families into delta functors, and any degree-zero map
   extends uniquely by zero in positive degrees.

4. `items/prop-satellites-give-the-first-derived-functor.md`
   Disposition: repaired in the owned A-page item and synced into the batch
   proof contract.
   Severity: nonfatal.
   Evidence: the pre-repair comparison with the derived delta functor treated a
   mere isomorphism `S_0\cong F` or `T^0\cong F` as if it were an already chosen
   extension datum.
   Repair: required the chosen degree-zero identifications explicitly and cited
   the canonical degree-zero identifications on the derived side.

5. `items/fs-any-sequence-of-functors-with-long-exact-sequences-is-a-delta-functor.md`
   Disposition: repaired in the owned A-page item and synced into the batch
   proof contract.
   Severity: nonfatal.
   Evidence: the pre-repair witness cited
   `ex-the-cone-long-exact-sequence-for-multiplication-by-m` for a nonzero
   connecting morphism, but that example only computes the middle
   `\times m` map in a cone sequence and does not exhibit a nonzero connecting
   morphism.
   Repair: changed the witness to the published item
   `ex-a-degreewise-split-sequence-with-nonzero-connecting-map`.

6. `items/fs-a-degree-zero-natural-transformation-between-delta-functors-always-extends.md`
   Disposition: repaired in the owned A-page item and synced into the batch
   proof contract.
   Severity: nonfatal.
   Evidence: same witness defect as item `5`.
   Repair: changed the cited nonzero-connecting-map example to
   `ex-a-degreewise-split-sequence-with-nonzero-connecting-map`.

7. `research/frontier-30-batch-10.proof-contracts.json`
   Disposition: repaired in the assigned batch contract.
   Severity: nonfatal.
   Evidence: after the corollary repair, `proof-contract --strict` failed
   because the unchanged `ex-two-universal-delta-functors-and-their-unique-isomorphism`
   entry still quoted the old corollary statement.
   Repair: regenerated the six changed entries and the dependent
   `ex-two-universal-delta-functors-and-their-unique-isomorphism` entry.

## Edits

- Patched `items/lem-the-effacement-extension-is-independent-of-the-effacing-morphism.md`.
- Patched `items/cor-universal-delta-functors-extending-the-same-degree-zero-functor-are-uniquely-isomorphic.md`.
- Patched `items/prop-an-exact-base-functor-has-the-trivial-universal-delta-functor.md`.
- Patched `items/prop-satellites-give-the-first-derived-functor.md`.
- Patched `items/fs-any-sequence-of-functors-with-long-exact-sequences-is-a-delta-functor.md`.
- Patched `items/fs-a-degree-zero-natural-transformation-between-delta-functors-always-extends.md`.
- Regenerated `research/frontier-30-batch-10.proof-contracts.json`.
- Wrote this report.
- Wrote `research/frontier-30-reader-findings-10.json`.

- No changed item carried a `verification.judge` block, so no stale judge
  record needed removal.

## Uneditable defects

1. `items/ex-one-dimension-shift-along-a-projective-presentation.md`
   Severity: fatal.
   Evidence: the statement at lines `33-35` claims an isomorphism for every
   `n>0`, but the proof line `57` uses
   `L_{n-1}^PF(Q)=0` from positive-degree vanishing. For `n=1`, the needed term
   is `L_0^PF(Q)\cong F(Q)`, which need not vanish, so the displayed
   isomorphism fails in general.

2. `items/ex-one-dimension-shift-along-an-injective-copresentation.md`
   Severity: fatal.
   Evidence: the statement at lines `33-35` claims an isomorphism for every
   `n>0`, but the proof line `57` uses
   `R_I^{n-1}F(J)=0` from positive-degree vanishing. For `n=1`, the needed term
   is `R_I^0F(J)\cong F(J)`, which need not vanish, so the displayed
   isomorphism fails in general.

3. `items/cex-a-nonnatural-choice-of-connecting-maps-does-not-form-a-delta-functor.md`
   Severity: nonfatal.
   Evidence: fact `L3` at lines `42-44` cites
   `ex-the-cone-long-exact-sequence-for-multiplication-by-m` as a source for a
   nonzero connecting morphism, but that cited example does not provide such a
   witness. The nearby published item
   `ex-a-degreewise-split-sequence-with-nonzero-connecting-map` does.

## Uneditable manifest drift

- `research/frontier-30-batch-10.pages.json` is stale against current
  frontmatter for the repaired A-page items
  `prop-satellites-give-the-first-derived-functor`,
  `fs-any-sequence-of-functors-with-long-exact-sequences-is-a-delta-functor`,
  and
  `fs-a-degree-zero-natural-transformation-between-delta-functors-always-extends`.
  I did not edit the batch manifest under the reader brief.

## Page verdicts

- `delta-functors-and-universality`: repaired and clean on current bytes.
- `delta-functors-and-universality-examples`: still has two fatal B-item
  defects and one nonfatal B-item citation defect.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts` on the six changed proof-bearing
  items:
  `6` reflowed.
- `node tools/tsx-run.mjs tools/precheck.mts` on the six changed proof-bearing
  items:
  `6 checked, 0 failing`.
- `node tools/regen-contract-entries.mjs research/frontier-30-batch-10.proof-contracts.json ...`:
  regenerated `7` entries total across the six repaired items plus the
  dependent `ex-two-universal-delta-functors-and-their-unique-isomorphism`
  contract row.
- `node tools/tsx-run.mjs tools/precheck.mts $(scope from contract)`:
  `32 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-30-batch-10.proof-contracts.json --strict`:
  `0` errors, `0` warnings, `32/32` items checked.
- `node tools/citation-fidelity.mjs research/frontier-30-batch-10.proof-contracts.json --items-dir items --fail-on-missing-quote`:
  `123` citations, no missing quotes, no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-30-batch-10.proof-contracts.json --items-dir items --fail-on-contradicted`:
  no contradicted dispositions.
- `node tools/rendercheck.mjs ...batch-10 pages and items...`:
  `OK — 43 file(s)`.
- `node tools/content-policy.mjs research/frontier-30-batch-10.pages.json`:
  `41 scoped item(s), 0 error(s), 0 warning(s)`.
- `git diff --check -- ...` over the changed batch files: clean.

## Blockers

None.

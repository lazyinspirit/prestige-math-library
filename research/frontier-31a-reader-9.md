# frontier-31a reader-9 report

Batch: `9`  
Run: `frontier-31a`  
Role: Step 6a independent reader

## Scope opened

I opened the current batch manifest and support artifacts:

- `research/frontier-31a-batch-9.pages.json` (four pages, 88 items),
  `research/frontier-31a-batch-9.proof-contracts.json`,
  `research/frontier-31a-batch-9.notes.md`,
  `research/frontier-31a-batch-9.coverage.json`, and
  `research/frontier-31a-step6-hash-9-pre.json`.
- The assigned design sections HA-10 and HA-11 in
  `research/plan-homological-algebra-track.md` (lines 1994--2314), and the
  corresponding current `research/plan-spec.json` records (lines 141051,
  141447, 141527, and 141830).

The manifest inventory is:

| Page | Kind | Planned items | Current page body | Current item bodies |
| --- | --- | ---: | --- | --- |
| `tor-flatness-and-global-dimension` | A | 41 | absent | 0/41 present |
| `tor-flatness-and-global-dimension-examples` | B | 8 | absent | 0/8 present |
| `universal-coefficients-and-kunneth-theorems` | A | 32 | absent | 0/32 present |
| `universal-coefficients-and-kunneth-theorems-examples` | B | 7 | absent | 0/7 present |

For each manifest id I checked its expected `items/<id>.md` path; none exists.
For each page I checked its expected
`library/homological-algebra/<page-id>.md` path; none exists. Thus there is no
current title, definition, statement, construction, proof, witness,
computation, citation, contract row, or page summary to read independently.
The plan, coverage file, and Step-5 notes were used only to identify the
intended scope; they were not treated as evidence for a missing item.

The direct item-dependency inventory contains 80 distinct ids. Twenty-nine
published dependency files are present, and the other 51 are batch-9 ids whose
files are likewise absent. No dependency statement is needed to verify a
current batch-9 claim, because no current batch-9 claim exists. In particular,
I did not infer a statement from a planned dependency or source disposition.

The design was nevertheless checked for the intended boundary conditions to
make the blocker precise: Tor must retain right/left module handedness and
finite-diagonal Koszul totalisation; the PID/free-complex UCT and Künneth
sequences must retain their stated hypotheses; and the sequence maps, but not
their splittings, are natural.

## Repairs and contracts

None. Creating 88 proof-bearing item bodies or four page bodies would be
authoring a missing batch, not a localized reader repair. The current proof
contract intentionally has an empty scope (`0/0`), so there is no changed
contract or stale `verification.judge` record to remove.

## Uneditable defects and blockers

All four manifest pages are ill-formed as current review subjects: their page
bodies and every assigned item body are absent. The two B-page bodies are
outside the reader's edit authority; the two A pages cannot be repaired
truthfully without first authoring the missing 73 item bodies. This is fatal to
mathematical review, rather than evidence of a mathematical false claim.

The structured findings artifact records these four page-level defects and
their exact manifest locations. It intentionally does not manufacture 88
duplicate item findings.

## Page verdicts

- `tor-flatness-and-global-dimension`: blocked -- no page or item bodies.
- `tor-flatness-and-global-dimension-examples`: blocked -- no page or item
  bodies.
- `universal-coefficients-and-kunneth-theorems`: blocked -- no page or item
  bodies.
- `universal-coefficients-and-kunneth-theorems-examples`: blocked -- no page
  or item bodies.

## Checks

- `node tools/proof-contract.mjs research/frontier-31a-batch-9.proof-contracts.json --strict`
  passed: `0 error(s), 0 warning(s), 0/0 item(s) checked`. This is only a
  structural confirmation of the empty contract, not a mathematical pass.
- `node tools/content-policy.mjs research/frontier-31a-batch-9.pages.json`
  failed as expected with `88 scoped item(s), 88 error(s), 0 warning(s)`, all
  `scope-item-missing`.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-tensor-product-total-complex-of-chain-complexes.md`
  could not begin because the first assigned file is absent (`ENOENT`). No
  item was changed, so reflow and an item-level precheck do not apply.
- `node tools/validate-plan.mjs research/plan-spec.json` passed its graph
  checks; its repository-wide redundant-prerequisite advisories are unrelated
  to this missing-content blocker.

Next action: the batch authoring stage must supply the current item and page
bodies. A subsequent reader must then reread every body and the dependencies
actually cited by those bodies; this report does not pre-clear the planned
mathematics.

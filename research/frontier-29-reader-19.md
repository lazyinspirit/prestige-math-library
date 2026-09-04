# frontier-29 reader-19 report

Date: 2026-09-01
Run: `frontier-29`
Batch: `19`
Role: independent Step-6 reader

## Opened scope

- Task and batch artifacts: `research/frontier-29-reader.task.md`,
  `research/frontier-29-beta-19.task.md`,
  `research/frontier-29-batch-19.pages.json`,
  `research/frontier-29-batch-19.coverage.json`,
  `research/frontier-29-batch-19.notes.md`, and
  `research/frontier-29-batch-19.proof-contracts.json`.
- Repository instructions and design context: `AGENTS.md`, `CLAUDE.md`,
  `README.md`, `SCHEMA.md`, and the TC-23 / TC-28 design blocks in
  `research/plan-computability-theory-track.md`.
- Live-run check: `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .`
  still reports `frontier-23`; for this reader pass I treated the explicit
  `frontier-29` dispatch artifacts as the controlling scope record.
- Page files: both assigned A pages and both assigned B pages,
  `space-complexity-savitch-and-tqbf`,
  `space-complexity-savitch-and-tqbf-examples`,
  `randomized-complexity-and-amplification`, and
  `randomized-complexity-and-amplification-examples`.
- Assigned item files: every manifest-listed batch-19 item on those pages.
- Dependency items opened directly while checking the current mathematics:
  `def-dtime-ntime-dspace-and-nspace`,
  `def-worst-case-time-and-space-complexity`,
  `def-multitape-and-nondeterministic-machines`,
  `def-tape-finite-support-convention`,
  `def-multigraph-loop-and-digraph`,
  `def-polynomial-time-many-one-reduction`,
  `def-effective-encoding-of-turing-machines`,
  `lem-machine-encoding-is-injective-and-decodable`,
  `def-polynomial-identity-testing`,
  `def-field`,
  `thm-linearity-of-expectation`,
  `thm-markov-inequality`,
  `thm-chebyshev-inequality`,
  `lem-bernoulli-and-binomial-mean-and-variance`,
  `cor-variance-adds-for-pairwise-independent-random-variables`,
  `def-independence-of-finite-random-variables`,
  `thm-expectation-of-products-of-independent-random-variables`,
  `thm-finite-union-bound`,
  `def-matrix-space`,
  `def-matrix-product-and-identity-matrix`,
  `def-polynomial-degree-leading-coefficient-and-monic`,
  `def-polynomial-evaluation-and-root`,
  `thm-root-bound-for-polynomials-over-a-domain`,
  `def-multivariate-polynomial-ring-by-iteration`, and
  `def-monomials-multidegree-and-total-degree`.

## Edits made

1. `items/def-reachable-configuration-formula.md` and
   `items/lem-quantifier-reuse-keeps-reachability-formulas-polynomial.md`:
   repaired the size route so it now assumes the one-step predicate
   `\operatorname{Next}` has size `O(m)` and states the polynomial bound as
   `O(m(i+1))`; also added the missing syntax remark that the displayed
   abbreviations still expand to ordinary quantified Boolean formulas.

2. `items/thm-tqbf-is-pspace-complete.md`: added the missing direct support for
   the claim that configurations admit `O(p(n))`-bit encodings and rewired the
   fact labels so the reachability-formula reduction no longer leans on the
   configuration-count bound for an encoding-length claim.

3. `items/lem-majority-error-bound-from-chebyshev.md`: repaired the proof's
   missing linearity-of-expectation citation and trimmed the dependency list to
   the results actually used.

4. `items/thm-bpp-amplification-to-inverse-polynomial-error.md`: replaced the
   non-integer repetition count `9q(|x|)` by the honest integer witness
   `\lceil 9q(|x|)\rceil`.

5. `items/fs-savitch-stores-the-whole-configuration-graph.md`: corrected the
   citation route for the storage claim so the definition only supports the
   one-midpoint-at-a-time recursion step, while the explicit workspace bound is
   attributed to the logarithmic-recursion-depth lemma.

6. `items/cor-pit-is-in-corp.md`: repaired the statement and given data so the
   sample set is explicitly nonempty, using `|S|\ge \max(1,2d)`; this closes
   the `d=0` boundary hole in the randomized evaluation witness.

7. Contract maintenance: regenerated the affected entries in
   `research/frontier-29-batch-19.proof-contracts.json` for
   `lem-quantifier-reuse-keeps-reachability-formulas-polynomial`,
   `thm-tqbf-is-pspace-complete`,
   `lem-majority-error-bound-from-chebyshev`,
   `thm-bpp-amplification-to-inverse-polynomial-error`,
   `fs-savitch-stores-the-whole-configuration-graph`,
   `cor-pit-is-in-corp`, and the dependent consumer `ex-pit-is-in-corp`.

No stale `verification.judge` block had to be removed: none of the edited
batch-19 items carried one.

## Confirmed remaining defects

None.

## Checks run

- `node tools/tsx-run.mjs tools/reflow.mts ...` on all seven changed item
  files; it reflowed
  `lem-quantifier-reuse-keeps-reachability-formulas-polynomial`,
  `lem-majority-error-bound-from-chebyshev`, and `cor-pit-is-in-corp`.
- `node tools/tsx-run.mjs tools/precheck.mts ...` on the six changed
  proof-format items: pass, `6 checked, 0 failing`.
- `node tools/regen-contract-entries.mjs research/frontier-29-batch-19.proof-contracts.json ...`:
  regenerated six directly edited contract entries, then regenerated
  `ex-pit-is-in-corp` after its source statement changed.
- `node tools/proof-contract.mjs research/frontier-29-batch-19.proof-contracts.json --strict`:
  pass, `30/30`.
- `node tools/citation-fidelity.mjs research/frontier-29-batch-19.proof-contracts.json --fail-on-missing-quote`:
  pass, `70` citations, no quote misses and no widening candidates.
- `node tools/content-policy.mjs research/frontier-29-batch-19.pages.json`:
  pass, `40 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/rendercheck.mjs ...` over the four page files and all assigned
  batch-19 items: pass, `43 file(s)`.
- `node tools/boundary-audit.mjs research/frontier-29-batch-19.proof-contracts.json --fail-on-contradicted --fail-on-template`:
  only the usual template-reuse clusters plus three heuristic item candidates
  (`lem-chernoff-bound-for-bernoulli-trials`,
  `lem-affine-finite-field-hashes-are-pairwise-independent`,
  `thm-freivalds-matrix-product-verification` twice for the two iff axes); I
  re-read those items and did not convert any of them into defects.

## Page verdicts

- `space-complexity-savitch-and-tqbf` (A): pass after the reachability-size,
  TQBF-hardness, and Savitch-citation repairs.
- `space-complexity-savitch-and-tqbf-examples` (B): read in full; no B-page
  prose edits were made, and its local items are now consistent with the A-page
  proofs.
- `randomized-complexity-and-amplification` (A): pass after the Chebyshev,
  inverse-polynomial amplification, and PIT boundary repairs.
- `randomized-complexity-and-amplification-examples` (B): read in full; no
  B-page prose edits were made, and its local items are consistent with the
  repaired A-page claims.

## Uneditable defects

None. No confirmed defect remained in published dependencies, another batch, or
the protected B-page prose.

## Blockers

None for batch-19 mathematics.

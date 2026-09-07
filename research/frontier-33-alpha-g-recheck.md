# frontier-33 · Alpha group `g` · Step 3 recheck

Rechecked the current batch-11, batch-17, and batch-18 manifests and coverage
ledgers, the three `## Step-3 fix pass` records, the owned scope-decision
ledger, and the current plan. The dispositions below concern the bytes now on
disk.

## Dispositions

1. **Batch 11 — `co-bird-free-comb-structure`: affirmed.** No repair was
   requested. Its manifest remains a 13-item A route and four-item B companion,
   with the declared backward prerequisite `co-e-free-comb-structure`; the
   manifest dependency check reports no error. The source-derived co-Bird
   obstruction, E-overlap, quotient-descent, and singleton no-E boundary route
   therefore remains scaffold-sufficient.

2. **Batch 11 — batch-18 repair pushback: affirmed as inapplicable.** The
   repaired dependency concerns only
   `def-arithmetization-of-a-boolean-formula` in batch 18. It is neither a
   batch-11 item nor a dependency of either batch-11 page, so no batch-11
   manifest change is warranted.

3. **Batch 17 — `the-polynomial-hierarchy-and-relativization`: affirmed.**
   The current 25-item A route and four-item B companion retain the two
   declared page prerequisites and explicit item dependencies. Its coverage
   ledger has 153 harvested results with no error or warning, and all six
   recorded source receipts are fetch-verified. No declined refinement became
   load-bearing.

4. **Batch 17 — `expander-graphs-and-constraint-graphs`: affirmed.** The
   current 31-item A route and four-item B companion retain the three declared
   prerequisites and the spectral, explicit-family, regularization, overlay,
   and walk-hitting infrastructure. The same batch-17 current-byte and source
   checks pass; the deferred PCP-hardness, composition, and alphabet-reduction
   material remains outside this page's claims.

5. **Batch 18 — `arithmetization-and-the-sum-check-protocol` backward
   prerequisite repair: verified and closed for Step 3.** The A manifest now
   declares `the-cook-levin-theorem` alongside its interactive-proof and
   finite-field prerequisites. The arithmetization definition directly depends
   on `def-boolean-formula-cnf-and-sat`, which is homed on the Cook--Levin page
   at order 621; batch 18 is order 641. This is the exact required backward
   closure. `splice-plan --dry-run` withholds precisely that one requires edge,
   as expected for the engine-owned Step-4 adjudication; it is not an open
   authoring or mathematical scaffold gap.

6. **Batch 18 — arithmetization/sum-check pair: affirmed after that repair.**
   The manifest retains 24 A items and four B items, including the stated
   Boolean-cube, characteristic, adaptive-challenge, supplied-prime, and
   linear-versus-affine conventions. Coverage has 57 harvested results and no
   error; its expected low-yield warning is accounted for by the five current
   batch-18 scope decisions, all of which stand. Both recorded sources are
   fetch-verified.

## Scope decisions

`scope-decisions refresh --run frontier-33 --group g` produced 39 declines;
the subsequent check reports 39 current decisions and zero errors. Every row
is `stands`, so no newly pending disposition required a repair.

## Current-context scope-decision recheck

The current frozen coverage and plan closure create five pending batch-18 rows.
Each was re-read against `research/frontier-33-batch-18.coverage.json`,
`research/frontier-33-batch-18.pages.json`, `research/plan-spec.json`, and the
batch-18 portion of the Step-3 scaffold report. This section supersedes the
preceding historical all-stands summary for those five rows.

1. **Remark 4.1: sums over general B^v — stands.** The defined protocol is
   expressly Boolean-cube sum-check: it checks `h_i(0)+h_i(1)` and has no
   general-grid input, equation, or dependent claim. General `B^v` sum-check
   is therefore not required.
2. **Theorem 8.18: #SATD in IP — owner-decision.** The present A page keeps
   the supplied-prime arithmetized-counting protocol but makes no uniform
   language-membership claim. Its named destination,
   `counting-complexity-and-sharpp` (order 637), currently has #P/NumberSAT,
   PP, and `P^#P` inventory but neither an #SATD-in-IP item nor an
   interactive-proof route. Selecting a valid owner or changing an existing
   contract is outside group g's authority.
3. **The connection to PCPs: High level view — stands.** The local inventory
   ends with the exact Fourier/BLR/self-correction tools; it states no PCP
   verifier or PCP-soundness application. The planned later page
   `alphabet-reduction-and-the-pcp-theorem` remains the declared route.
4. **Example 19.8(2): Fourier coefficients of a random Boolean function —
   stands.** No scoped statement introduces a random truth table, normal
   approximation, or coefficient-concentration assertion; the retained
   Fourier and BLR claims are deterministic.
5. **Preview: Why multilinear extensions are useful: ensuring a fast prover
   — stands.** Current MLE algorithms assume a full `2^n` table and explicitly
   retain exponential work; no product-of-MLE fast-prover theorem is present
   or needed by the sum-check completeness, soundness, or verifier bound.

The durable decision ledger carries the row-specific source locators and
current-byte evidence. No plan, manifest, coverage row, item, or verdict was
changed.

## Pair verdicts

- `co-bird-free-comb-structure`: **sufficient**.
- `the-polynomial-hierarchy-and-relativization`: **sufficient**.
- `expander-graphs-and-constraint-graphs`: **sufficient**.
- `arithmetization-and-the-sum-check-protocol`: **sufficient**.

The existing `research/frontier-33-alpha-g-step3-verdicts.json` contains those
four current sufficient verdicts and was parsed after the current-byte checks;
no insufficient pair or missing-list entry is warranted.

## Current-byte checks

- Scope refresh/check: 39 declines, 0 pending, 0 errors.
- `manifest-deps` over batches 11, 17, and 18: 109 items, 0 normalized,
  0 errors.
- `coverage-checklist --require-destination`: batch 11, 36 results and 0
  warnings; batch 17, 153 and 0; batch 18, 57, 0 errors, and the expected
  low-yield warning.
- `source-fetch-check`: batch 11, 2/2; batch 17, 6/6; batch 18, 2/2.
- `content-policy --manifest-only`: 109 scoped items, 0 errors, 0 warnings.
- `manifest-integrity --run frontier-33`: 48 owed pages, 48 present, no scope
  drift. `validate-plan` passes its current page-level checks.
- Splice dry runs: batches 11 and 17 are splice-ready; batch 18 reports only
  the corrected Cook--Levin edge awaiting Step 4.

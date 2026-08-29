# frontier-23 — Alpha group `a` Step 6b adjudication

Date: Saturday, August 29, 2026  
Dispatch: `6b-a`  
Owned batches: `1`, `3`, `4`

## Outcome

- Wrote `research/frontier-23-alpha-a-6b-decisions.json` with `43` decisions:
  `6` `accepted_repair`, `20` `amended_repair`, `15`
  `confirmed_fatal`, and `2` `confirmed_nonfatal`.
- Appended `43` closed Step-6 rows to `research/defect-ledger.jsonl`,
  one for each owned touched or refuter obligation.
- Wrote `52` complete `risk_review` records across
  `research/frontier-23-batch-{1,3,4}.proof-contracts.json`.
  The live `risk-report` for batch `1` required one more review than the
  earlier scope snapshot after the repaired dependency graph made
  `thm-fundamental-groups-from-different-maximal-trees-are-isomorphic`
  high-risk on current bytes.

## Batch 1

- Touched carriers: `1` `accepted_repair`
  (`thm-grushko-decomposition-and-rank-additivity`) and `1`
  `amended_repair` (`thm-kurosh-subgroup-theorem`).
- Refuter findings: `9` `confirmed_fatal`, `1` `confirmed_nonfatal`.
- Confirmed fatal repairs:
  `thm-word-problem-for-free-products-and-amalgams-with-decidable-membership`
  now requires effective translation through the amalgamating subgroup;
  `lem-minimal-algebraic-relator-area-exists` now handles the area-`0`
  boundary; `prop-recursive-dehn-function-implies-solvable-word-problem`
  now defines the empty-relator boundary; the Bass-Serre chain now has a
  repaired normal-form theorem, vertex-group embedding corollary, quotient
  graph-of-groups definition, structure theorem, maximal-tree independence
  theorem, and Baumslag-Solitar example.
- Confirmed nonfatal repair:
  `fs-recursively-enumerable-trivial-words-form-a-decision-algorithm` now
  uses the Novikov-Boone witness instead of the old non sequitur about one
  semidecision procedure.

## Batch 3

- Touched carriers: `5` `accepted_repair`, `16` `amended_repair`.
- Refuter findings: `2` `confirmed_fatal`, `1` `confirmed_nonfatal`.
- Reader repairs on
  `cor-dimension-preserved-by-integral-extensions` and
  `cor-height-preserved-under-going-down-integral-extensions` stand on the
  current bytes; the remaining touched items were accepted or amended as
  contract-refresh carriers, with the high-risk ones amended further by the
  added `risk_review` records.
- Confirmed fatal repairs:
  `thm-transitivity-of-integrality` now justifies the nonzero intermediate
  algebra directly, and
  `thm-going-down-over-normal-domains` now replaces the false
  target-localization step with the current
  `A ∩ p_0 B_{q_1} = p_0` contraction proof plus the prime-avoidance lemma.
- Confirmed nonfatal repair:
  `thm-lying-over` now defines `S` before localization, proves `S^{-1}B`
  nonzero first, and only then chooses the maximal ideal.

## Batch 4

- Touched carriers: `3` `amended_repair`.
- Refuter findings: `4` `confirmed_fatal`.
- The three touched reader repairs on
  `cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one`,
  `ex-the-irreducible-complex-characters-of-a-finite-cyclic-group-are-the-n-powers-of-a-primitive-nth-root`,
  and
  `thm-normal-subgroups-are-exactly-intersections-of-kernels-of-irreducible-complex-characters`
  remain mathematically sound; each carrier is amended only because the
  current contract now also carries Alpha's required `risk_review`.
- Confirmed fatal repairs:
  `prop-basic-value-properties-of-a-complex-character` now handles the
  zero-dimensional scalar case separately;
  `ex-the-character-table-of-a-finite-cyclic-group-over-c` now handles the
  `n=1` boundary;
  `ex-the-character-table-of-a-four` now proves every degree-one character
  kills `V_4`;
  `ex-the-character-table-of-s-four-and-its-normal-subgroups` now proves the
  first four irreducibles before using completeness and the degree-sum
  formula to isolate the final row.

## Verification

- `node tools/tsx-run.mjs tools/reflow.mts <17 changed items>`
  Result: `7` items were reflowed once; the rest were already canonical.
- `node tools/tsx-run.mjs tools/precheck.mts <17 changed items>`
  Result: all changed items clean after adopting the canonical phase
  numbering on five files.
- `node tools/proof-contract.mjs research/frontier-23-batch-{1,3,4}.proof-contracts.json --strict`
  Result: all three owned contracts pass with `0` errors and `0` warnings.
- `node tools/citation-fidelity.mjs research/frontier-23-batch-{1,3,4}.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: no missing quotes and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-23-batch-{1,3,4}.proof-contracts.json --fail-on-contradicted`
  Result: no contradicted dispositions in the owned batches.
  Batch `1` still has the standing template-reuse heuristics when
  `--fail-on-template` is requested; those clusters predate this dispatch and
  I did not create a new contradicted row in that batch.
- `node tools/content-policy.mjs research/frontier-23-batch-1.pages.json research/frontier-23-batch-3.pages.json research/frontier-23-batch-4.pages.json`
  Result: `136` scoped items, `0` errors, `0` warnings.
- `node tools/rendercheck.mjs <17 changed items>`
  Result: `OK — 17 file(s)`.
- `node tools/risk-report.mjs research/frontier-23-batch-{1,3,4}.proof-contracts.json --require-reviewed`
  Result: all three owned contracts pass the Step-6 review gate.
- `node tools/step6-scope.mjs stamp --run frontier-23 --group a`
  Result: stamped `43` current carrier hashes.
- `node tools/step6-scope.mjs check --run frontier-23 --phase adjudicate --batch 1`
  Result: `66` routed items, `12` adjudication obligations, `0` errors.
- `node tools/step6-scope.mjs check --run frontier-23 --phase adjudicate --batch 3`
  Result: `23` routed items, `24` adjudication obligations, `0` errors.
- `node tools/step6-scope.mjs check --run frontier-23 --phase adjudicate --batch 4`
  Result: `47` routed items, `7` adjudication obligations, `0` errors.
- `git diff --check -- <scoped changed files>`
  Result: clean.

## Out-of-scope note

- `node tools/defect-ledger.mjs validate --run frontier-23` currently fails,
  but only on eight already-appended foreign rows from other groups
  (`frontier-23-S6-d-*`) whose `subclass` values are outside the current
  closed enum in `tools/defect-ledger.mjs`. None of the rows appended by this
  dispatch were named in that failure.

## Gate repair - `step6-routing-adjudicate` (Saturday, August 29, 2026)

- Reproduced the live `decision-not-applied` queue on the current tree and
  confirmed that `touched:1:thm-grushko-decomposition-and-rank-additivity` no
  longer matched the exact post-reader carrier sealed in
  `research/frontier-23-step6-hash-1-post.json`.
- Reread the current theorem against `research/frontier-23-reader-1.md` and
  found no new mathematical defect. I synced the batch-1 item-manifest deps row
  in `research/frontier-23-batch-1.pages.json`, retagged the touched decision
  from `accepted_repair` to `amended_repair`, and appended the supplemental gate
  row `frontier-23-S6-a-gate-1-1` via
  `research/frontier-23-alpha-a-6b-gate-ledger-rows.json`.
- Focused rerun:
  `node tools/step6-scope.mjs check --run frontier-23 --phase adjudicate --batch 1`
  -> `66 item(s) routed, 12 adjudication obligation(s), 0 error(s)`.
- Full rerun:
  `node tools/step6-scope.mjs check --run frontier-23 --phase adjudicate`
  -> `504 item(s) routed, 227 adjudication obligation(s), 0 error(s)`.

# frontier-19 — lead Alpha step 6c cross-batch closure

Run: `frontier-19`  
Role: `alpha`  
Label: `6c-lead`  
Date: Wednesday, August 26, 2026

## 60%-context checkpoint

Completed checks:

- Read `CLAUDE.md`, `LEVELS.md`, `SCHEMA.md`, and `ARCHITECTURE.md` sections governing Step 6c, Step-6 ledger ownership, post-6b carrier currency, impact closure, and the final Step-6 gate battery.
- Verified the active run state from `.autopilot/status.md`: `6c-edges` is complete, `6c-cross` is active, and no prior `research/frontier-19-alpha-6c.md` artifact existed on disk.
- Opened `research/frontier-19-cross-group-edges.json`; it currently records `edges: []`, `forwards: []`, and `changes: []`, so there are no listed cross-batch citations, forward-reference resolutions, or post-6b structural carriers to adjudicate.
- Reopened the group reports `research/frontier-19-alpha-{a,b,c,d}-6b.md` to verify the state handed into 6c, including the repaired published-dependency rows and the reported run-wide blockers they had seen earlier in the stage.
- Reopened `research/frontier-19-step6-published-claims.jsonl` and `research/frontier-19-step8-published-repairs.jsonl`; the only published Step-6 claims/repairs on disk are the two group-`d` Erdős–Hajnal metadata repairs.
- Ran `node tools/cross-group-edges.mjs check --run frontier-19`; it is currently clean on the empty cross-group scope: `0 edge(s), 0 forward reference(s), 0 post-6b change(s), 0 error(s)`.

Changed artifacts so far:

- `research/frontier-19-alpha-6c.md`
- `research/frontier-19-6c-verdicts.jsonl`

Open constraints:

- The empty `cross-group-edges` scope does not close Step 6 by itself; the full 6c battery still needs to run on the current tree, and any failing gate can still surface a lead-owned gate repair.
- If `url-sweep` / `source-backing` fail only because this sandbox cannot resolve hosts, that is an indispensable environment blocker and must be recorded rather than “repaired” by changing coverage sources without network evidence.
- `node tools/step6-scope.mjs check --run frontier-19 --phase adjudicate` was still pending from an earlier pre-artifact probe; I have not yet taken the post-report, current-tree routing result as evidence.

Exact next action:

- Run the 6c closure battery on the current tree, starting with `step6-scope`, `defect-ledger`, `validate-plan`, repo-wide gates, coverage, URL/backing, policy, merged-contract gates, impact receipts, and `audit-manifest`, then repair or record any remaining 6c-owned failures.

## Cross-group scope

- Listed edges: none.
- Listed forwards: none.
- Listed post-6b changes: none.
- Current machine verdict rows: none required on this scope unless a later 6c gate repair changes a carrier after the post-6b snapshot.

## Impact closure

- Wrote `research/frontier-19-impact.json` with reviewer `Lead Alpha (Codex GPT-5) — step 6c, Wednesday, August 26, 2026`.
  - `402` affected consumers total.
  - `384` are same-run changed carriers and are closed as `repaired`: their current text already postdates the final Step-6 interface state in the owning 6b group repair.
  - `18` are unchanged published Erdős–Hajnal consumers of `def-erdos-hajnal-property-and-constant`; I reopened those item files on current disk and confirmed that the Wednesday, August 26, 2026 published-dependency repair changed only the arXiv reference title plus the stale verification stamp, not the mathematical Definition or its nonempty-graph inequality. Their dispositions are `still-licensed`.
- Wrote `research/frontier-19-impact-6c.json` for the empty `post-6b -> current workspace` impact window. The computed scope is `0` changed interfaces and `0` affected items, so the receipt needed only the reviewer field.

## Gate results

Clean on current disk:

- `node tools/cross-group-edges.mjs check --run frontier-19 --reconcile-plan`
  - `0` edge(s), `0` forward reference(s), `0` post-6b change(s), `0` error(s).
- `node tools/step6-scope.mjs check --run frontier-19 --phase final`
  - `443` item(s) routed, `99` adjudication obligation(s), `0` error(s).
- `node tools/defect-ledger.mjs validate --run frontier-19`
  - `103` defect row(s) checked, `0` error(s).
- `node tools/validate-plan.mjs research/plan-spec.json`
  - pass; only pre-existing `redundant-prereq` notes.
- `node tools/tsx-run.mjs tools/precheck.mts`
  - `5943` checked, `0` failing.
- `node tools/depcheck.mjs`
  - pass; only pre-existing warnings such as `multi-home`, `b-leaf-legacy`, and `cited-not-in-deps`.
- `node tools/fwdcheck.mjs`
  - pass; `0` open forward references.
- `node tools/extcheck.mjs`
  - pass; only pre-existing `unproved-on-published` warnings.
- `node tools/rendercheck.mjs`
  - pass.
- `node tools/prosecheck.mjs`
  - `0` errors; warnings only (`count-of-this-page`, `library-scope-denial`, `count-in-prose`).
- `node tools/depsource.mjs`
  - `0` unresolved dependencies.
- `node tools/pathcheck.mjs`
  - `0` errors, `15` warnings (`draft-unplaced`, `pathway-missing`, `overview-missing`) that Step 10 owns.
- `node tools/manifest-integrity.mjs --run frontier-19`
  - `28` page(s) owed, `28` in the manifests, no scope drift.
- `node tools/splice-plan.mjs --run frontier-19 --verify`
  - verified `28` page(s) across `10` manifest(s).
- `node tools/coverage-checklist.mjs research/frontier-19-batch-<n>.coverage.json` for `n=1..10`
  - all ten batches pass; batch `10` carries one advisory `coverage-low-yield` warning already recorded against its Step-3/6 decline work.
- `node tools/content-policy.mjs research/frontier-19-batch-1.pages.json ... research/frontier-19-batch-10.pages.json`
  - `443` scoped item(s), `0` error(s), `0` warning(s).
- `node tools/merge-proof-contracts.mjs --level frontier-19 research/frontier-19-proof-contracts.json ...`
  - wrote the merged `349`-item contract file.
- `node tools/proof-contract.mjs research/frontier-19-proof-contracts.json --strict`
  - `0` error(s), `3` advisory `shotgun-bracket` warnings on
    - `ex-primes-represented-by-x-squared-plus-two-y-squared`
    - `thm-local-criterion-for-zero-modules-and-maps`
    - `thm-loglog-erdos-hajnal-bound`
- `node tools/finite-smoke.mjs research/frontier-19-proof-contracts.json`
  - `4` checks, `0` error(s).
- `node tools/risk-report.mjs research/frontier-19-proof-contracts.json --require-reviewed`
  - `0` error(s), all `349` items routed.
- `node tools/boundary-audit.mjs research/frontier-19-proof-contracts.json --fail-on-contradicted --fail-on-template`
  - no contradicted or template dispositions; `17` reviewed rows upheld on the record.
- `node tools/citation-fidelity.mjs research/frontier-19-proof-contracts.json --fail-on-missing-quote`
  - no quote misses or widening candidates.
- `node tools/gate-liveness.mjs --run frontier-19 --contracts research/frontier-19-proof-contracts.json --checklists research/frontier-19-batch-1.coverage.json,...,research/frontier-19-batch-10.coverage.json --min-checks 1`
  - live checks recorded for `finite-smoke`, `proof-contract`, `coverage-checklist`, and `precheck`.
- `node tools/impact-audit.mjs --touches research/frontier-19-touches.json --from pre-author --to post-6b --receipt research/frontier-19-impact.json`
  - pass after receipt completion: `445` changed public interfaces, `402` affected items.
- `node tools/impact-audit.mjs --touches research/frontier-19-touches.json --from post-6b --current --receipt research/frontier-19-impact-6c.json`
  - pass after receipt completion: `0` changed public interfaces, `0` affected items.
- `node tools/audit-manifest.mjs research/frontier-19-batch-1.pages.json ... research/frontier-19-batch-10.pages.json --output research/frontier-19-audit-manifest.json`
  - `1397` relationship(s) over `443` item(s) in `10` batch(es); `0` defect(s).

Blocked on environment, not mathematics:

- `node tools/url-sweep.mjs --coverage research/frontier-19-batch-1.coverage.json ... research/frontier-19-batch-10.coverage.json --out research/frontier-19-url-liveness.json --recover --fail-on-dead`
  - `0/57` live; all `57` fail with `curl: (6) Could not resolve host`, including `arxiv.org`, `web.archive.org`, `math.mit.edu`, and `www.jmilne.org`.
  - This is an indispensable sandbox DNS/reachability failure. I did not rewrite coverage sources under it.
- Corroborating non-stage check: `node tools/source-backing.mjs --coverage research/frontier-19-batch-1.coverage.json,...,research/frontier-19-batch-10.coverage.json --liveness research/frontier-19-url-liveness.json --reharvest-plan research/frontier-19-reharvest-plan.json`
  - red on `187` authored results with no openable source left because the liveness artifact is all-dead under the same DNS failure.
  - The tool wrote `research/frontier-19-reharvest-plan.json`, but I did not act on it because the blocking condition is network reachability, not source absence.

## Final state

- `research/frontier-19-6c-verdicts.jsonl` remains intentionally empty. The computed 6c scope stayed empty, and no 6c-owned gate repair changed a post-6b carrier, so no `edge`, `forward`, `item`, `page`, `addition`, `removal`, or `gate` verdict row was honestly owed.
- No Step-6 ledger row was created at `caught_at_stage:"6c-cross"` because there was no 6c carrier defect to repair.
- Step 6 is therefore mathematically and structurally closed on current disk except for the exact URL-liveness execution blocker above.

## Changed artifacts

- `research/frontier-19-alpha-6c.md`
- `research/frontier-19-6c-verdicts.jsonl`
- `research/frontier-19-impact.json`
- `research/frontier-19-impact-6c.json`
- `research/frontier-19-proof-contracts.json`
- `research/frontier-19-audit-manifest.json`
- `research/frontier-19-url-liveness.json`
- `research/frontier-19-reharvest-plan.json`

## Exact next action

- Re-run the exact `url-sweep` gate in a shell with working DNS/network reachability, then re-run the 6c battery from `url-liveness` forward. If the hosts still fail from a network-capable shell, only then use `research/frontier-19-reharvest-plan.json` to scout replacement sources; under the present sandbox-wide DNS failure, changing sources would not be evidence-based.

# Frontier 19 — Alpha group c step-6b adjudication

**Dispatch:** `6b-c`  
**Owned batches:** 7 and 8  
**Frozen text:** no; this is the Step-6 repair window.

## Coverage and independence

- Reader independence is clean in the dispatch records. Batch 7 used reader
  session `01a03aa2-a847-7a02-ac2c-8e527200e4c0`, distinct from Beta author
  session `01a03a65-6556-7d63-930d-6b2cba9dbd23`. Batch 8 used reader session
  `01a03aa2-b3d3-7d61-bcd1-d0df0af2d066`, distinct from Beta author session
  `01a03a65-7101-7503-9f25-8845938aee28`.
- `research/frontier-19-step6-scope-7.json` and
  `research/frontier-19-step6-scope-8.json` were reopened together with
  `research/frontier-19-reader-{7,8}.md`,
  `research/frontier-19-reader-findings-{7,8}.json`, and
  `research/frontier-19-refute-{7,8}.json`.
- The reader and refuter both opened every assigned item/page in batches 7 and
  8 per the scope files (`not_opened=[]` in both refuter reports). Alpha
  re-opened the routed carriers and the cited dependencies needed to verify the
  repaired arguments and the refuter claims.

## Batch 7 obligations

| obligation | verdict | evidence |
|---|---|---|
| `touched:7:cor-a-continuous-preimage-of-a-lebesgue-measurable-set-can-be-nonmeasurable` | `amended_repair` | The repaired proof uses `K=\psi[C]`, completeness on the Cantor null set, and `g=\psi^{-1}|_K`; the current carrier also differs from the reader state because Alpha added the required high-risk `risk_review`. |
| `touched:7:cor-there-is-a-lebesgue-measurable-subset-of-r-that-is-not-borel` | `amended_repair` | Step 3.1 now uses the subspace-Borel trace theorem correctly, and the current carrier also carries Alpha's required `risk_review`. |
| `touched:7:lem-finite-binary-digit-changes-do-not-alter-zero-one-measure` | `amended_repair` | The reader's half-radius cover repair is sound; Alpha additionally removed the reused symbol `m`/`N` ambiguity in step 2.2 and completed the risk review. |
| `touched:7:thm-bernstein-sets-exist-under-a-well-ordering-of-r` | `amended_repair` | The current proof uses the `\kappa \to \mathcal P_{\mathrm{perf}}\times 2` demand enumeration and valid fresh-point recursion, and the carrier now also includes Alpha's risk review. |
| `refuter:7:1` on `cor-a-bernstein-set-is-not-lebesgue-measurable` | `confirmed_fatal` | The old Statement dropped the countable-choice hypothesis carried by both cited supports. The repaired item now states that hypothesis explicitly in title, Statement, and Given. |
| `refuter:7:2` on `cex-a-bernstein-set` | `confirmed_fatal` | The old step 2.1 misattributed nonmeasurability to the inner/outer-measure theorem. The repaired item carries the hypothesis in the counterexample statement and cites the repaired Bernstein nonmeasurability corollary instead. |

## Batch 8 obligations

| obligation | verdict | evidence |
|---|---|---|
| `touched:8:cex-a-harmonic-function-can-vanish-on-a-line-without-vanishing-identically` | `amended_repair` | The carrier change is contract-only: Alpha rewrote the stale derivation and boundary anchors so the worksheet matches the current two-step witness proof. |
| `touched:8:cex-log-modulus-has-no-harmonic-conjugate-on-the-punctured-plane` | `amended_repair` | The repaired step 2.1 uses the open mapping theorem for `G=\exp(F)/z`; the current carrier also differs from the reader state because Alpha added the required `risk_review`. |
| `touched:8:cor-residue-quotient-simple-zero` | `amended_repair` | The current proof splits the `p(a)=0` and `p(a)\ne0` cases, avoids the false simple-pole inference, and still proves `\operatorname{Res}(p/q,a)=p(a)/q'(a)`. |
| `touched:8:ex-harnack-inequality-for-a-poisson-kernel` | `amended_repair` | The item now uses the disc-wide witness `u(z)=P(z,1)`, and the current carrier also includes Alpha's required `risk_review`. |
| `touched:8:ex-log-modulus-is-harmonic-on-the-punctured-plane` | `amended_repair` | The carrier change is contract-only: Alpha replaced the stale zero-case boundary anchor with one matching the live three-step verification. |
| `touched:8:lem-poisson-kernel-properties-on-the-disc` | `amended_repair` | The carrier change is contract-only: Alpha rewrote the boundary evidence so the worksheet cites the live Statement rather than vanished steps `4.1` and `5.1`. |
| `touched:8:thm-harmonic-conjugate-on-homologically-simply-connected-domains` | `amended_repair` | Step 3.1 now cites the exact Cauchy-Riemann implication theorem, and the carrier also now includes Alpha's required `risk_review`. |
| `touched:8:thm-laurent-expansion-annulus` | `amended_repair` | The carrier change is contract-only: Alpha replaced the generic endpoint boundary text with item-specific anchored worksheet evidence and added the required risk review. |
| `touched:8:thm-local-holomorphic-potential-for-harmonic-functions` | `amended_repair` | Step 3.1 now cites the exact zero-gradient holomorphicity theorem, and the current carrier also includes Alpha's required `risk_review`. |
| `touched:8:thm-poles-meromorphic-function-are-discrete-and-countable` | `amended_repair` | The carrier change is contract-only: Alpha repaired the stale endpoint boundary evidence and added the required risk review. |
| `touched:8:thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions` | `amended_repair` | Step 3.1 now invokes the removable-singularity theorem at the strength it states, using boundedness on `0<|z-a|<R/2` rather than an unproved global bound on the whole punctured disc. |
| `touched:8:thm-residue-pole-derivative-formula` | `amended_repair` | Step 1.1 now cites the residue contour-integral corollary that the proof actually uses, and the carrier also now includes Alpha's required `risk_review`. |
| `refuter:8:1` on `cor-residue-quotient-simple-zero` | `confirmed_fatal` | The refuter's counterexample `p=q=z-a` was correct. The repaired proof no longer infers a simple pole from `q(a)=0` and `q'(a)\ne0` alone, and the refuter decision now owns its own fatal defect row. |

## Repairs beyond the routed queue

- `items/thm-laurent-regular-principal-decomposition.md` received a gate-local
  proof-step repair: step 1.3 now cites `[L1]` explicitly, matching the fact it
  uses. This was needed to clear the strict proof-contract gate after Alpha's
  contract regeneration pass surfaced the unused-fact mismatch.
- `research/frontier-19-batch-7.proof-contracts.json` and
  `research/frontier-19-batch-8.proof-contracts.json` were both rewritten after
  Alpha's repairs to regenerate stale derivations/citations, replace template
  or unanchored boundary rows with item-specific ones, and add the required
  high/critical `risk_review` rows.
- `node tools/apply-risk-reviews.mjs --run frontier-19 --file /tmp/frontier-19-groupc-risk-reviews.json`
  applied `44` complete Alpha `risk_review` dispositions across batches `7` and
  `8`.

## Gate results

Passes on Wednesday, August 26, 2026:

- Per-item `reflow` and `precheck` on every Alpha-changed item:
  `cor-a-bernstein-set-is-not-lebesgue-measurable`,
  `cex-a-bernstein-set`,
  `lem-finite-binary-digit-changes-do-not-alter-zero-one-measure`,
  `cor-residue-quotient-simple-zero`,
  `thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions`,
  and `thm-laurent-regular-principal-decomposition`.
- `node tools/proof-contract.mjs research/frontier-19-batch-7.proof-contracts.json --strict`
  -> `0 error(s), 0 warning(s), 28/28 item(s) checked`.
- `node tools/proof-contract.mjs research/frontier-19-batch-8.proof-contracts.json --strict`
  -> `0 error(s), 0 warning(s), 51/51 item(s) checked`.
- Merged group-c contract battery:
  `boundary-audit` -> `template_clusters: 0`, `contradicted_candidates: 0`;
  `risk-report --require-reviewed` -> `0 error(s)`; `citation-fidelity` ->
  no missing quotes; `finite-smoke` -> `0 error(s), 0 check(s)` on this
  partial group-c subset.
- `node tools/content-policy.mjs research/frontier-19-batch-7.pages.json research/frontier-19-batch-8.pages.json`
  -> `0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs research/frontier-19-batch-7.coverage.json --require-destination`
  -> `0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs research/frontier-19-batch-8.coverage.json --require-destination`
  -> `0 error(s), 0 warning(s)`.
- `node tools/audit-manifest.mjs research/frontier-19-batch-7.pages.json research/frontier-19-batch-8.pages.json`
  -> `378 relationship(s)`, `0 defect(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> pass, with only pre-existing `redundant-prereq` notes.
- `node tools/fwdcheck.mjs` -> pass.
- `node tools/extcheck.mjs` -> pass.
- `node tools/defect-ledger.mjs validate --run frontier-19` -> `0 error(s)`.

## Blockers and open constraints

- **Indispensable sandbox blocker: source reachability.**
  `node tools/url-sweep.mjs --coverage research/frontier-19-batch-7.coverage.json --out /tmp/frontier-19-b7-url-liveness.json --recover --fail-on-dead`
  returned `0/3 live; 3 failed`, every failure `curl: (6) Could not resolve host`.
  `node tools/url-sweep.mjs --coverage research/frontier-19-batch-8.coverage.json --out /tmp/frontier-19-b8-url-liveness.json --recover --fail-on-dead`
  returned `0/12 live; 12 failed`, again every failure `curl: (6) Could not resolve host`.
  This is a workspace DNS/reachability failure, not a mathematical review of the
  sources.
- The combined backing check
  `node tools/source-backing.mjs --coverage research/frontier-19-batch-7.coverage.json,research/frontier-19-batch-8.coverage.json --liveness /tmp/frontier-19-groupc-url-liveness.json --reharvest-plan /tmp/frontier-19-groupc-reharvest-plan.json`
  is therefore red on `32 authored result(s) have no openable source left`.
  The generated scout/worklist is `/tmp/frontier-19-groupc-reharvest-plan.json`.
  I did not rewrite coverage sources under this sandbox-liveness failure.
- The repo-wide `depcheck` is still red, but not because of group-c changes. Its
  two errors are the pre-existing published unaudited items
  `def-erdos-hajnal-property-and-constant` and
  `lem-erdos-hajnal-constants-are-downward-closed`, both outside batches 7 and
  8. The rest of its output is inherited warning noise (`multi-home`,
  `cited-not-in-deps`, `b-leaf-legacy`, `unproved-on-published`) outside this
  dispatch.
- `node tools/gate-liveness.mjs --run frontier-19 --contracts /tmp/frontier-19-proof-contracts-groupc.json --checklists research/frontier-19-batch-7.coverage.json,research/frontier-19-batch-8.coverage.json --min-checks 1`
  is red on a vacuous local `finite-smoke` result (`0 checks`). Because Step 6
  runs that liveness gate at the whole-level join, this partial group-c run is
  not the final determination of whether the run owes any finite-smoke check.
- After `node tools/step6-scope.mjs stamp --run frontier-19 --batch 7` and
  `--batch 8`, the filtered adjudication checks for batches `7` and `8` no
  longer report any group-c `decision-stale`, `decision-not-applied`, or
  shared-row ownership errors.
- The remaining `step6-scope` failures are outside group-c repair authority in
  this dispatch:
  `reader-findings-invalid` for batches `7` and `8` because the existing reader
  findings JSON names `frontier-19-batch-7` / `frontier-19-batch-8` instead of
  bare batch numbers, and the unrelated run-wide `published-claim-extra` /
  `published-repair-extra` rows for the Erdős–Hajnal published repairs.

## Artifacts changed in this Alpha pass

- `items/cor-a-bernstein-set-is-not-lebesgue-measurable.md`
- `items/cex-a-bernstein-set.md`
- `items/lem-finite-binary-digit-changes-do-not-alter-zero-one-measure.md`
- `items/cor-residue-quotient-simple-zero.md`
- `items/thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions.md`
- `items/thm-laurent-regular-principal-decomposition.md`
- `research/frontier-19-batch-7.proof-contracts.json`
- `research/frontier-19-batch-8.proof-contracts.json`
- `research/frontier-19-alpha-c-6b-decisions.json`
- `research/frontier-19-alpha-c-6b-ledger-rows.json`
- `research/frontier-19-alpha-c-6b.md`
- `research/defect-ledger.jsonl`
- `research/DEFECT-LEDGER.md`

## Exact next action

- Group `c`'s Step-6b mathematical and contract work is complete on current
  disk. The next action outside this report is the run-wide Step-6 progression:
  finish the other groups' 6b decisions, resolve the pre-existing
  `reader-findings-invalid` / published-repair scope-check rows, and rerun the
  whole-level `step6-scope check --phase adjudicate` and URL-backed gates when a
  shell with working DNS is available.

## Gate adjudication — `rendercheck` (2026-08-26)

- `gate:rendercheck:katex-parse-error:thm-identity-principle-for-plane-harmonic-functions:1` — `repaired`. Reproduced `node tools/rendercheck.mjs`; step `1.1` used the invalid nested form `\text{$u=0$ ...}` inside inline math. I rewrote the set-builder as ordinary math plus `\text{}` prose, which preserves the argument and clears the parse error.
- `gate:rendercheck:katex-parse-error:thm-identity-principle-for-plane-harmonic-functions:2` — `repaired`. This was the second KaTeX failure emitted from the same broken step-`1.1` inline formula; the same set-builder rewrite removes the stray unmatched brace the renderer was reporting.
- `gate:rendercheck:katex-parse-error:thm-maximum-and-minimum-principles-for-plane-harmonic-functions:1` — `repaired`. Reproduced the same nested-`$...$` defect in step `2.1` of the maximum/minimum-principles proof. I rewrote the definition of `S` as plain math plus `\text{}` prose without changing the proof.
- `gate:rendercheck:katex-parse-error:thm-maximum-and-minimum-principles-for-plane-harmonic-functions:2` — `repaired`. This was the paired stray-brace KaTeX failure from the same malformed inline formula in step `2.1`; the set-builder rewrite clears it on current bytes.

Group-`c` gate findings are cleared on current disk. The final rerun was:
`OK — 7812 file(s): no wikilink inside math, no nested or unbalanced delimiters, no multiline display block, every math span parses under the real KaTeX, and every frontmatter block parses under the renderer's YAML parser.`

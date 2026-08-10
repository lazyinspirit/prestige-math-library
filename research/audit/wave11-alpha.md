# Wave 11 Audit-Alpha report

Role: sole Audit-Alpha for A6, GPT 5.6 Sol through the Codex subscription at `xhigh` with a 1,000,000-token context window. Date: 2026-08-10.

## Durable recovery and full-reading checkpoint

- Recovered and verified baseline `442f831c94882899c1dc5559b36599b0f78a99c8` and the complete durable A0/A1-A2/A3/A4 record before acting. The shared worktree was intentionally dirty with concurrent Waves 11–14 work; Alpha did not revert, overwrite, snapshot, commit, or push unrelated work.
- Read the normative instructions, all 61 exact-current scoped items, all four page files, all 114 distinct exact out-of-scope relationship targets, all 59 proof-bearing top-100 spine items, and all 238 affected consumers in full. Read all 55 complete proof contracts: 692 Fact/source citations, 377 proof steps, and 440 boundary rows. No sampling was used.
- Reconciled all 785 final relationships: 615 published-backward, 153 same-batch, and 17 forward; 766 are dependency edges, 17 forward references, and two external mentions. The 267 frozen earlier-wave relationships are all licensed against exact final text: Wave 8 has 55 edges into 18 targets, Wave 9 has 20 into seven, and Wave 10 has 192 into 24.
- Independently confirmed all eight A4 material item repairs, the one A-page sentence repair, both established-knowledge concurrences, and the Pugh Chapter 3 Exercise 35 source override.

## A6 final adjudication and repairs

- Closed the mandatory generated-risk hard edge. `cex-a-function-with-a-primitive-that-is-not-integrable` is now `ai-altered`/`semantic-source`, with the university-hosted Olmsted counterexample as direct support. The edge from `fs-integration-by-parts-needs-no-integrability-hypothesis` is no longer an ai-generated-statement violation.
- Replaced both initially failed source endpoints. The Iowa Taylor source was replaced first by Drexel, whose TLS chain also failed, then by the live Taylor source at `https://en.wikipedia.org/wiki/Taylor%27s_theorem`. `thm-taylor-peano-remainder` is correctly a stronger-hypothesis specialization (`ai-altered`/`semantic-source`); `cor-taylor-remainder-bound` remains `literature-derived`/`exact-source`. The Hawaii derivative source was replaced by the exact CLP square-root derivative page plus the GVSU improper-integral context for `ex-two-root-x-and-its-unbounded-derivative`.
- Made the Pugh override independently reader-verifiable by adding the Lehman-hosted full text containing Chapter 3 Exercise 35 verbatim while retaining Springer’s publisher record for `fs-substitution-holds-for-every-integrable-integrand`.
- Corrected two further provenance classifications after exact-source review: `thm-first-mean-value-theorem-for-integrals` is `ai-altered`/`semantic-source` because it is a specialization, while `thm-integration-by-parts` is `literature-derived`/`exact-source` because the CMU theorem matches exactly.
- Repaired two A6-fatal scope-ledger defects. `rem-integral-conventions-and-scope` no longer assigns Taylor’s integral remainder to a page that expressly excludes it. `rem-darboux-lhopital-taylor-scope` now declares and cites its actual dependency on `cor-injective-or-monotone-derivative-is-continuous`.
- The final provenance census is 28 `ai-altered`, ten `ai-generated`, and 23 `literature-derived` statements; proofs are 55 `ai-generated` and six `not-applicable`; evidence is 23 exact-source, 26 semantic-source, two established-knowledge, seven trivial, and three none. Both contract copies are synchronized except namespace metadata and validate 55/55 with zero errors and zero warnings.
- The final URL sweep is 48/48 live. All ten scoped generated-risk seeds are dispositioned `verified-generated`; four are load-bearing. The global report now has 125 seeds and 40 load-bearing seeds, and Wave 11 has no unresolved generated-risk row.

## Independent-reader results

- The append-only DeepSeek V4 Pro archive contains 69 result packets. The exact-final required set is complete for 54/54 routes: 51 `CLEAN`, three `DEFECTS` adjudicated confirmed nonfatal, and zero unresolved. Two original empty transports were preserved and retried; seven direct consumers were also rerun with exact-current dependency packets. The historical fatal relationship defect in `rem-darboux-lhopital-taylor-scope` was repaired and its exact-final retry is `CLEAN`.
- The three final nonfatal findings close under the 30-second rule: `cor-derivatives-have-no-removable-or-jump-discontinuities` compresses the endpoint one-sided case; `ex-integral-test-applied-to-the-p-series` cites reciprocal order reversal only to ordered-field definitions; and `rem-integral-conventions-and-scope` says it is cited by nothing although one counterexample links it in a closing Remark. The last is non-load-bearing bookkeeping debt below R1 and was deliberately recorded without editing.
- The append-only GPT 5.6 Terra archive contains 24 result packets. Exact-final certification is complete for all 15 item targets and the repaired page. The five initial refusal/block results are preserved with their source/provenance or page-ledger closures. All 15 items carry current owner-delegated `published-audit` Terra stamps; pages remain unstamped.

## Receipts and gates

- Edge audit: 785/785 exact. Spine: 59/59. Impact: 61 changed interfaces and 238 consumers, zero errors or warnings. Content policy: 61/61, zero errors and 13 expected generated-risk warnings. Final URL sweep: 48/48. Proof contracts: 55/55 strict. `git diff --check` passes.
- The authoritative command `node tools/gates.mjs --audit --step A6 --run wave11 --json` is 12/14. Wave 11 has zero local failures. The two failures are shared cross-wave state: 16 material A4 items belonging to Waves 12–14 remain intentionally unstamped until their A6 certifications, and the Wave 12 generated seed `rem-rn-conventions-and-scope` remains pending in the global receipt at cone size seven. Alpha did not mutate another wave to force a global green result.

## Exact A7 handoff

`wave11-rejudge-targets.json` contains exactly 15 item ids:

- `cex-a-function-with-a-primitive-that-is-not-integrable`
- `cex-absolute-value-integrable-without-the-function`
- `cor-taylor-remainder-bound`
- `ex-integral-test-applied-to-the-p-series`
- `ex-two-root-x-and-its-unbounded-derivative`
- `fs-substitution-holds-for-every-integrable-integrand`
- `rem-darboux-lhopital-taylor-scope`
- `rem-integral-conventions-and-scope`
- `thm-additivity-over-subintervals`
- `thm-first-mean-value-theorem-for-integrals`
- `thm-ftc-second-part`
- `thm-integration-by-parts`
- `thm-linearity-of-the-integral`
- `thm-monotonicity-of-the-integral`
- `thm-taylor-peano-remainder`

There is no Wave 11-local A7 blocker. The page repair, pure retags, unchanged consumers, and reader-only routes are excluded. Alpha did not start A7 or any later stage and took no touch snapshot.

## A8 recovery checkpoint — 2026-08-10

- Recovered the complete durable A6 report, published-repair ledger, certification/refuter/risk/provenance/genrisk/URL/edge/spine/impact/gate receipts, both exact proof-contract copies, final manifest, 15-id A7 target receipt, touch ledger, and current judge verdict/attempt/cost ledgers from disk. The baseline remains `442f831c94882899c1dc5559b36599b0f78a99c8`; the dirty shared Waves 11–14 worktree remains preserved.
- Verified the orchestrator-owned canonical `pre-a8` snapshot at `2026-08-09T15:49:34.553Z`. All 2,859 item hashes exactly equal `post-A6`, so A7 made no content mutation.
- A7 is exactly 30 verdict rows over the 15 authorized targets: one DeepSeek V4 Pro and one GPT 5.6 Terra row per id, with no outside-scope row. Ten rejection rows cover eight unique ids. All eight current files reproduce their ledger `item_sha256` and `context_sha256`; their separate verification-stripped normalized hashes reproduce the A6 certification receipt.
- Exact next action: read the eight rejected targets, their contracts, and every dependency cited by a rejection; append one exact `(id, model, context_sha256)` adjudication for each of the ten rejection rows. Apply no mutation unless an outcome is `confirmed_fatal`; then run the fatal-only repair protocol and report only the actually edited ids for targeted paired rejudge. Alpha will not run A7 judges, A9, A10, snapshots, commits, or pushes.

## A8 closure — 2026-08-10

- Adjudicated all ten exact current-context rejection rows over eight ids from complete disk text. Outcomes are one `confirmed_fatal`, eight `confirmed_nonfatal`, and one `false_positive`, with zero unadjudicated rejection. The append-only exact-hash ledger is `wave11-judge-adjudications.jsonl`; the complete decision narrative is `wave11-A8.md`.
- Applied exactly one R1-licensed fatal repair: `rem-integral-conventions-and-scope` now states the sharp FTC equivalence with an a.e. derivative, an `L^1` derivative, and the representation at every point, rather than falsely treating one endpoint identity as a characterization. Its exact-final verification-stripped hash is `fd9044e5ea139cd04abbe1434c61227f0b99d3588d8a57c74cd8d2b5c06e8f28`.
- Removed the stale verified stamp before editing and restored a fresh owner-delegated `published-audit` stamp only after read-only GPT 5.6 Terra exact-final certification. The target is a non-proof Remark, so no contract exists or changed; both 55-contract copies remain synchronized and strict-valid.
- Reconstructed the public-interface blast radius exactly: zero logical consumers and the one direct-citation consumer `cex-a-function-with-a-primitive-that-is-not-integrable`. Full reading dispositions it `still-licensed`; no consumer mutation or rejudge is permitted. The formal impact gate awaits the orchestrator-owned `post-a8` snapshot.
- Step-8 guard is clean: one changed item, one licensed by `confirmed_fatal`, no creations/deletions, no errors, and no warnings. The exact edited-id and targeted paired-rejudge set is only `rem-integral-conventions-and-scope`; final judge item/context hashes before rejudge are `b0343c7c426899dcf42c45ace472c8cdbf4f2f17b3e06cbfc9bcc069bc1d80a9` / `740aff3fcfd3331bd3f9ca57daf015ba2e6a718b52c97b95135497b2d0f29813`.
- The exact measured personal-audit escalation set has 11 ids: `cex-a-function-with-a-primitive-that-is-not-integrable`, `cor-taylor-remainder-bound`, `ex-integral-test-applied-to-the-p-series`, `ex-two-root-x-and-its-unbounded-derivative`, `fs-substitution-holds-for-every-integrable-integrand`, `rem-darboux-lhopital-taylor-scope`, `rem-integral-conventions-and-scope`, `thm-first-mean-value-theorem-for-integrals`, `thm-integration-by-parts`, `thm-linearity-of-the-integral`, and `thm-taylor-peano-remainder`. Nature and drop ramifications are recorded in `wave11-A8.md`; no deletion is proposed.
- Alpha did not run targeted judges, write a judge stamp, take a snapshot, start A9/A10, commit, or push. The orchestrator owns `post-a8`, formal impact verification, the one-id DeepSeek/Terra targeted rejudge and receipt, final coverage, and personal audits.

### A8 targeted-rejudge addendum

- The orchestrator subsequently recorded `post-a8`, closed the formal one-interface/one-consumer impact audit, and ran only the authorized `rem-integral-conventions-and-scope` pair. DeepSeek passed. Terra rejected at exact item/context hashes `b0343c7c426899dcf42c45ace472c8cdbf4f2f17b3e06cbfc9bcc069bc1d80a9` / `740aff3fcfd3331bd3f9ca57daf015ba2e6a718b52c97b95135497b2d0f29813` because “cited by nothing” conflicts with the direct link from `cex-a-function-with-a-primitive-that-is-not-integrable`.
- Alpha appended one and only one new exact-tuple decision: `confirmed_nonfatal`. The finding is factually right but is non-load-bearing corpus bookkeeping, already independently recorded during A6, and affects no mathematical statement, proof, contract, relationship declaration, provenance, impact disposition, or certified sharp-FTC repair. Fatal-only R1 therefore forbids an A8 edit.
- The append-only ledger now totals 11 decisions: one fatal, nine nonfatal, and one false positive. No pass-only targeted receipt or judge stamp is licensed from the mixed pair. The exact prose issue is handed to the orchestrator's A9 scope-denial re-grep; Alpha did not judge, mutate the item, or start A9.

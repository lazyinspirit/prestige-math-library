# Batch 22 Step 3a adjudication

Run: statistical-models-experiments-62. Group: batch-22. Scope: batch 22 only.

## Evidence and level 1 checkpoint

Read the order task, version-2 scope, reader report/findings, refute-22.json, frozen pre/post snapshots, current setup, two definitions, observed-contrast proof and its six direct suppliers. No reader/refuter finding obligations exist. All 15 current item raw hashes equal the frozen reader-post hashes. The two changed definitions account for the only item-source differences; ten other touched obligations concern contracts.

- `def-principal-strata-and-late`: accept the explicit exclusion prerequisite. The setup defines Y(a) only under exclusion; stratum events themselves need no exclusion. Positive P(C) is essential for LATE; P(C)=1 is allowed. Replacing the current Definition by the manifest's exact old statement reconstructs the frozen pre-reader raw SHA-256 2cfb15d0d8132ec32b6a4b61f8c5e1ef4d360058811dfa7caa796025e9c4aa4d. Current source equals reader-post ad4681452d060d6c6aa7afb2d16565a30fdd9288af32a00a9c520567284b7f2f.
- `def-wald-ratio`: accept observed-Y integrability. Without consistency, integrable potential outcomes do not constrain separately specified Y. For example, independently assign Z fairly, put A=Z and all potential outcomes zero, and let observed Y have a symmetric Cauchy law: relevance holds but finite outcome means do not exist. Corrected definition requires integrability and a nonzero first stage; positive arm probabilities are inherited. Current source equals reader-post c1b700fbb5d91cbe578a3e0d3e2367059c2bdda4c1f1b3709003b950e1602580.
- `lem-iv-observed-contrasts-equal-potential-outcome-contrasts`: complete CRITICAL risk review in contract. Consistency implies observed integrability, since |Y| <= |Y(0)|+|Y(1)| almost surely. Coordinatewise measurable maps, including the indicator of each instrument atom, justify independent-product factorization. Both arm denominators are positive; the proof never divides by the first stage. The signed difference handles defiers correctly. No decision is owed for this untouched, unflagged carrier.

Source check: [Kang, IV lecture](https://pages.cs.wisc.edu/~hyunseung/stat992_sp25/IV.html), Randomized Encouragement Designs: Assumptions, Compliance Types, and Proof of Identification of the LATE with (IV1)–(IV6), web lines 167–184, 297–325, 368–379. Checked positivity, joint independence, exclusion and binary coding against local arguments. The displayed pre-monotonicity decomposition at web line 377 has an erroneous plus sign for the defier term; local proofs instead use the correct signed product. Source authority does not replace local proof. The exact Hernán–Robins edition locator is not independently verified here.

Initial risk-report command: `node tools/risk-report.mjs research/statistical-models-experiments-62-batch-22.proof-contracts.json`: 15 routed items, seven HIGH/CRITICAL, zero tool errors. Remaining work: level 2 onward, consumer checks, ledger closure, page decision and final focused checks.

## Level 2 checkpoint

`lem-binary-monotonicity-excludes-defiers`: reviewed_no_defect, audit_enrichment. The two proof steps enumerate all four binary pairs; the retained events partition up to a null set and may individually be empty. Its reader change only refreshes definition citations.

`thm-wald-identifies-a-homogeneous-effect`: reviewed_no_defect, audit_enrichment; completed CRITICAL risk review. Constant tau0 factors out using L1 linearity and relevance permits division, including a negative first stage. Zero effect is allowed. The explicit common constant across all laws is strong but sound; identical observed laws force equal ratios and ATEs.

`cex-valid-iv-does-not-identify-ate-without-further-restrictions`: reviewed_no_defect, audit_enrichment. Product assignment verifies joint independence and both instrument atoms; all outcomes are finite. Arm-by-arm observed pairs agree in both laws, not just their means. First stage .3, reduced form .1, common ratio 1/3; ATEs 1.7 and 2.7 differ.

`ex-defiers-break-the-late-ratio`: reviewed_no_defect, audit_enrichment; completed HIGH risk review. Arm treatment means .6,.3 and outcome means .4,.3 give ratio 1/3; LATE=1 with P(C)=.4. The signed defier term is -.1*3.

`ex-exclusion-violation-distorts-wald-ratio`: reviewed_no_defect, audit_enrichment. Independent product construction; arm treatment means .5,0 and outcome means 2,0 give ratio 4. Fixed-z treatment effects are 2; the example never uses Y(a) without exclusion.

`ex-weak-first-stage-wald-ratio-sensitivity`: reviewed_no_defect, audit_enrichment. Exact arithmetic gives 3, 3.5, and change .5; no variance or causal claim. The hypothetical mean pairs are realizable with bounded observed outcomes, so the clarified Wald domain creates no conflict.

Manifest correction: synchronized the two repaired definitions' statement mirrors to current Definitions. This makes those two decisions amended_repair (the reader's sound source repairs are retained, manifest mirrors now repaired). No item source was edited. All remaining touched changes are exact citation/boundary audit enrichment, not additional mathematical defects. Remaining: levels 3–5, consumer inventory, page and local checks.

## Level 3 checkpoint

`lem-iv-first-stage-is-complier-proportion`: amended_repair. The identity proof is sound without exclusion: independent generated events give arm probabilities, consistency converts to observed means, and binary monotonicity gives the complier indicator. Relevance is used only for positivity. However, its last proof sentence additionally asserted that LATE is well-defined, although its hypotheses do not impose exclusion and thus do not supply common Y(a). Removed only that extra clause; Statement, dependencies and content contract are preserved. Refreshed the exact step-3.1 derivation. This is a proof-only scope overreach (recorded as a fatal missing-hypothesis defect because the extra claim was not licensed); no downstream Statement change is needed. Completed CRITICAL risk review after repair.

`lem-iv-reduced-form-is-complier-effect`: no decision owed, completed HIGH risk review. The contrast identity and monotonicity give E[1_C tau]. For P(C)>0 the event-mean definition rearranges; at zero complier mass the unconditional identity is zero and no conditional mean is asserted. Exclusion is explicitly present. No independence between effects and compliance is assumed.

Remaining: level 4–5, page and consumer review, ledger records and final focused checks.

## Level 4 checkpoint

`thm-wald-identifies-the-complier-average-effect`: reviewed_no_defect, audit_enrichment; completed HIGH risk review. All stated IV conditions satisfy the exact first-stage and reduced-form lemmas. Positive complier mass precedes conditioning and cancellation. Consistency supplies observed integrability. Identical observed laws force identical arm means and ratios, hence identical LATE. P(C)=1 and zero effect are allowed, P(C)=0 excluded by relevance. No ATE conclusion or choice is used.

## Level 5 and page checkpoint

`ex-heterogeneous-effects-late-differs-from-ate`: reviewed_no_defect, audit_enrichment. Four equal weights yield complier mass 1/2, LATE=2, ATE=3; observed contrasts are 1/2 and 1. All cited LATE assumptions hold in the finite independent assignment construction.

`ex-randomized-encouragement-late-calculation`: reviewed_no_defect, audit_enrichment; completed HIGH risk review. The eight-atom product model has arm treatment means 1/4,3/4 and outcome means 1,2, so Wald=2. All causal conditions are explicit and the population ATE is 3.

`instrumental-variables-and-late`: accepted_repair. Reader clarification separates nonzero denominator from finite observed conditional means. Current page equals the frozen reader-post hash; item order is unchanged and supplier-first. Its contrast, monotonicity, homogeneity and identification summary matches the reviewed local results. The companion page was also opened for actual consumer uses and arithmetic context; no separate decision is owed for it and its summary is sound.

All seven HIGH/CRITICAL risk reviews are complete. Next: finalize direct-consumer dispositions, closed defect rows, exact 13 decisions and focused validation. No published defect identified and no published source edited.

## Consumer dispositions and final evidence

Searched all `items/` and `library/` for both changed definition IDs. Every actual direct dependency/reference consumer is owned by batch 22; there are no outside consumers requiring repair. The monotonicity lemma uses only treatment pairs. The first-stage lemma uses C and treatment expectations, so it needs no exclusion; its extra LATE claim was removed. The reduced-form lemma and both identification theorems explicitly impose exclusion and consistency, which also ensures observed-Y integrability. The finite causal examples and counterexample have bounded outcomes; the sensitivity example asserts only scalar arithmetic (realizable using bounded observed arm outcomes). No sound consumer was edited just for citing a changed definition. No downstream Statement changed, hence no further repair hop is required.

The single existing cross-batch page-context obligation was independently checked against the current potential-outcomes page and its consistency/ATE definitions. Their fixed-version, no-interference and mean-contrast conventions agree. Batch 22 uses explicit positive-event integral ratios, not general CATE versions, so it imports no choice obligation from that context. Preserved the existing dependency record and added the current consumer disposition to `briefs/tasks/frontier-dependency-ledger.md`.

Historical Wald evidence: reversing only the reader's opening-sentence change in the current carrier reproduces frozen pre-reader SHA-256 28e5f315b55ce0849d4a396359665231022608c8550c8c0b2dd765c23b86fcd0. The principal-strata preimage and page/current reader-post equality were also checked. No historical source uncertainty is being silently resolved. The report's initial acceptance descriptions concern the sound source repairs; final decisions for both definitions are amended_repair because their stale manifest mirrors were synchronized.

Four confirmed defects are closed in `research/defect-ledger.jsonl` under caught_at_stage `3a-adjudicate`, caught_by_role `group-alpha`, and referenced by their decisions:

- `statistical-models-experiments-62-3a-batch-22-exclusion-domain`: principal-strata estimand exclusion prerequisite and manifest synchronization.
- `statistical-models-experiments-62-3a-batch-22-observed-integrability`: observed outcome integrability prerequisite and manifest synchronization.
- `statistical-models-experiments-62-3a-batch-22-late-overreach`: unsupported LATE well-definedness claim removed from first-stage proof; derivation and three boundary rows synchronized.
- `statistical-models-experiments-62-3a-batch-22-page-ratio-domain`: page summary's ratio-domain qualification retained.

No ledger row was created for ordinary citation enrichment, risk review, manifest formatting, or mechanical checks. No published defect was found; published content and the published-consumer ledger were left untouched. No escalation or proposed withdrawal is pending.

## Local checks and handoff

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-iv-first-stage-is-complier-proportion.md`: reflowed proof carrier; only layout and the described final clause changed from reader-post.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-iv-first-stage-is-complier-proportion.md`: PASS, 1 checked, 0 failing.
- `node tools/proof-contract.mjs research/statistical-models-experiments-62-batch-22.proof-contracts.json --strict`: 15/15 checked, 0 errors, 0 warnings.
- `node tools/rendercheck.mjs items/def-principal-strata-and-late.md items/def-wald-ratio.md items/lem-iv-first-stage-is-complier-proportion.md library/statistical-models-and-experiments/instrumental-variables-and-late.md`: 4 files pass with real KaTeX and renderer YAML parsing.
- Final `node tools/proof-layout.mjs items/def-principal-strata-and-late.md items/def-wald-ratio.md items/lem-iv-first-stage-is-complier-proportion.md`: 3 items, 3 numbered steps, 0 defects. Run after final item edit and reflow; includes the one item edited here and both reader-repaired definitions.
- Final risk report without `--require-reviewed`, then with it: each routes 15 items with 0 errors; all seven HIGH/CRITICAL reviews are complete and specific.
- Custom read-only checks: exact current citation excerpts all match supplier sections; exactly 13 unique decisions cover all owed obligations; all four referenced rows are fixed and owned at 3a-adjudicate; definition manifest mirrors match current Definitions; accepted page equals frozen reader-post raw hash.

Final decisions: 3 amended_repair, 1 accepted_repair, 9 reviewed_no_defect/audit_enrichment. No reader/refuter finding decisions are owed. No judge, stamp, self-certification, agent dispatch, or gate battery was run. Engine owns current hash stamping and subsequent gates. Blockers: none. Next action: engine collection.

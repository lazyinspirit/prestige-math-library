# Step 3a adjudication — batch 54

Run: `statistical-models-experiments-62`; group: `batch-54`.

Scope has two touched obligations, no reader/refuter findings, and no page obligations. Review follows the generated order: theorem at level 2, then example at level 3. Published dependencies remain read-only.

## Level 2: thm-benjamini-hochberg-independent-fdr

Verdict: **amended_repair**, repair confidence 1. The reader source is retained exactly; the amendment synchronizes the manifest Statement with the corrected sample-space event. The pre-reader raw hash is `6bfdca8321a05ee318d6983f7875cfc5d63b24d471f4341e9996cc682f09bfd3`; the exact archive at `research/statistical-models-experiments-62-owner-pca-boundary-application-archive/6bfdca8321a05ee318d6983f7875cfc5d63b24d471f4341e9996cc682f09bfd3.source` was compared with the current source. The current raw hash equals the immutable post-reader `b39d6abd25134a23b12086591e5acfb49d6247fb98eaf43c3dcdea769d00601c`. Reader notation and measurability/integrability clarifications are justified. The original unintroduced data variable X is a nonfatal notation omission: the canonical sample-space identity interpretation gives the intended law immediately, but expressing the event directly is precise. This is not a false FDR identity. Closed defect: `SME62-3A-B54-BH-NOTATION`.

For each fixed parameter theta, exact uniformity and mutual independence yield FDR = m_0 q/m. I checked the actual BH procedure and all six leave-one-out proof steps: finite rank unions establish measurability, maximality prevents a tie crossing the final rejection threshold, and both cases of the identity give rejection iff p_i <= (S_i+1)q/m with R=S_i+1 on rejection. Grouping yields independence of p_i and S_i; the product-law theorem applies to two measurable random elements. The partition on S_i in {0,...,m-1} and indicator integration give q/m per true null; finite linearity gives the conclusion. Empty true-null set, m=1, R=0 and R=m, zero/one endpoints, ties, arbitrary atomic false-null laws, and the global null are covered. Only 0<q<1 is claimed. No AC, conditioning on null events, or limiting argument is used.

Read current direct dependencies: `alg-benjamini-hochberg-step-up-procedure`, `lem-benjamini-hochberg-leave-one-out-identity`, `def-false-discovery-rate-and-familywise-error-rate`, `def-p-value`, `def-independent-random-elements`, `thm-grouping-independent-sigma-algebras`, `thm-independent-random-elements-have-product-joint-law`, both expectation corollaries, and the expectation definition; also the leave-one-out measurable-function and Borel definitions and the FDR probability definition. Their current statements meet the typed hypotheses of F1–F10. The grouping and product-law proofs were read; neither supplies an unresolved defect relevant to this argument.

Direct reference/dependency search found the owned example and A-page summary only. The example uses the same exactly uniform, independent theorem; its contract F5 already quotes the corrected Statement. The A-page description remains accurate. No consumer repair or outside alert is required. The manifest Statement is now synchronized; dependencies and provenance are unchanged. Complete CRITICAL risk review is recorded in the owning contract before proceeding to the example.

Sources independently read: [Benjamini–Yekutieli (2001)](https://www.math.tau.ac.il/~yekutiel/papers/dep_annals.pdf), §5 equations (19)–(21), Theorem 5.1, printed p.1180 (PDF p.16), and the following arbitrary-false-null discussion on p.1181; [Stanford Lecture 11](https://web.stanford.edu/class/archive/stats/stats200/stats200.1172/Lecture11.pdf), PDF pp.33–36, complete leave-one-out partition proof. BY distinguishes exact uniformity from the conservative discrete case. The source's exact identity agrees with the independently checked local proof. BH (1995) is retained as bibliographic context; no claim of independently rereading that paper is made.

## Level 3: ex-benjamini-hochberg-fdr-versus-fwer

Verdict: **accepted_repair**, repair confidence 1. The raw current source equals the immutable post-reader hash `492ccaef6a0d67ee4d775d489e06c95fe5cf5e739cc7ec40f25e38f2e9eb89a9`; the pre-reader hash is `4a265726ddbce66cd72a400b50c7443b2fc68910a0f14bd779d70b95a3ca2d80`. The reader report identifies the added simple-integral evaluation in step 3.1; no claim of a separately recovered full pre-reader example source is made. The current proof and all five cited dependencies have been reviewed independently. Closed defect: `SME62-3A-B54-BH-INDICATOR`, elementary polish rather than a fatal proof gap.

With two hypotheses, one true uniform p-value and one false p-value zero almost surely, independence follows by event factorization. Rank 1 always qualifies; rank 2 qualifies iff P_1<=1/2, up to the model's allowed null exceptional set. Thus (V,R)=(1,2) with probability 1/2 and (0,1) otherwise; FDR=1/4 and FWER=1/2. The probability-zero zero tie, closed threshold at 1/2, and endpoint 1 do not change these conclusions. F5 matches the already-reviewed theorem and no additional claim about FWER control is inferred. In the separate global-null comparison, V=R, so FDP is the indicator of any rejection even when R=0; the reader's explicit simple-function integral gives FDR=FWER without requiring independence. This closes a readily supplied elementary derivation, not a substantial prerequisite gap. Complete CRITICAL risk review is recorded. No item-source edit was needed.

## Published findings, consumers, and ledger

No defective published supplier or outside consumer was found. Published sources were read only. No proposed withdrawal or owned-consumer record for these IDs exists in `briefs/tasks/frontier-dependency-ledger.md`; there is no new frontier dependency issue to register. The published-consumer ledger needs no change. The two closed presentation-defect rows are owned at `3a-adjudicate` and referenced by the two decisions. The manifest synchronization is bookkeeping accompanying the same theorem repair, not a third mathematical defect.

## Checks and handoff

All local checks exited 0:

- Initial `node tools/risk-report.mjs research/statistical-models-experiments-62-batch-54.proof-contracts.json`: theorem CRITICAL 9, example CRITICAL 8, leave-one-out lemma MODERATE 4; zero errors.
- `node tools/risk-report.mjs research/statistical-models-experiments-62-batch-54.proof-contracts.json --require-reviewed`: zero errors after the two complete risk reviews.
- `node tools/proof-contract.mjs research/statistical-models-experiments-62-batch-54.proof-contracts.json --strict`: 3/3 checked, zero errors and warnings.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-benjamini-hochberg-independent-fdr.md items/ex-benjamini-hochberg-fdr-versus-fwer.md`: 2 checked, zero failures.
- `node tools/proof-layout.mjs items/thm-benjamini-hochberg-independent-fdr.md items/ex-benjamini-hochberg-fdr-versus-fwer.md`: 2 items, 7 steps, zero defects. Neither item was edited in this adjudication.
- Locked native `defect-ledger append` accepted the two rows and regenerated `research/DEFECT-LEDGER.md` in the same transaction.

Changed outputs are the exact task-named report and decisions, owning batch proof contract (risk reviews), owning batch page manifest (theorem Statement mirror), and the appended shared defect ledger plus its generated view. Source items and library pages remain unchanged. Final inventory check confirms exactly the two owed touched obligations, both current raw item hashes still equal post-reader, and the example contract differs only by risk_review. No mathematical blocker or escalation. No judge cycle, stamps, certification, scheduling, or gate battery was initiated; the engine owns subsequent hashing and gates.

The first auxiliary inventory assertion used unsorted JSON keys and failed its contract-digest comparison; correcting it to the native canonical key ordering passed. This was a verification-script serialization mistake, with no content defect or change.

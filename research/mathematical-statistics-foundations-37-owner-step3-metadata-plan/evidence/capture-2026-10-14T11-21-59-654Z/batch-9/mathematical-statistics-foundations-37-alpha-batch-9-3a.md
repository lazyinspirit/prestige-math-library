# Batch 9 Step 3a adjudication

Run: `mathematical-statistics-foundations-37`; group: `batch-9`.

Reviewed scope, reader report/findings, refuter report, pre/post fingerprints and the required order. Seven high/critical risk items; five touched obligations and one refuter obligation. No page-only obligation. Engine retains scheduling, stamping and gates.

## Dependency-ordered review

- Level 0 `lem-randomized-threshold-has-exact-level`: sound. Derived finite-measure continuity, checked the infimum cutoff inequalities, atom-free and positive-atom branches, and reflected lower-tail construction. Strict 0<alpha<1 is essential; endpoints are excluded. Direct Borel, measure, probability and infimum statements checked. Risk review complete; no decision owed.
- Level 4 `def-monotone-likelihood-ratio-family`: sound. Read experiment/statistic/domination/likelihood-density suppliers. Finite density representatives and pairwise exceptional sets are correctly qualified; infinity captures alternative-only mass. AC is inherited solely for simultaneous versions. Risk review complete; no decision owed.


- Level 5 `lem-mlr-orders-randomized-thresholds`: accept reader repair. Measurable `r(T)` supplies the density-integral identity. Alternative-only support lies strictly above the finite-ratio support; zero-mass blocks have zero restricted alternative mass. Ordered averages and the finite covariance identity prove both upper and lower comparisons, including gamma endpoints and singular mass 0/1. Risk review complete.

- Level 6 `thm-karlin-rubin-one-sided-ump-test`: accept reader repair. Verified pointwise kernel construction, exact calibration on the Borel pushforward law of T, composite-null level, finite (possibly zero) likelihood cutoff, singular support and signed L1 comparison. Reflection and reciprocal extended ratios give the lower tail. Empty alternatives are explicitly vacuous. Risk review complete.

- Level 6 `thm-ump-nonexistence-witness`: amend reader repair and confirm `refuter:9:1` fatal. Literal uniqueness of pointwise kernels is false: change the rejection value at c+ (or c-) without changing any normal-law power. Steps 3.1–3.2 already prove equality P0-almost surely, sufficient for step 4.1. Replaced only their concluding uniqueness phrases by uniqueness up to P0-almost-sure equality of rejection functions. Reviewed translation/density identification, atomlessness under inherited AC/countable choice, signed L1 comparisons, the zero-integral iff-zero-a.e. supplier, and the positive-mass disagreement interval. Statement, hypotheses and dependencies unchanged. Risk review complete; no judge stamp existed.

- Level 7 `ex-binomial-one-sided-ump-test`: accept the reader kernel construction mathematically. Full finite sigma-algebra/counting measure gives domination. Ratio base >1 for 0<p1<p2<1 proves MLR; the mass table (1,3,3,1)/8 yields 1/8+(1/3)(3/8)=1/4. Reviewed Karlin–Rubin applies at interior p0=1/2. Risk review complete.

- Level 7 `ex-two-sided-normal-alternatives-have-opposed-most-powerful-tests`: accept reader repair mathematically. Read all 29 direct supplier statements. Translation, reflection and singleton nullity yield shifted densities and size 1/2. The signed-product comparisons prove most power; I=integral_[0,1] phi>0 gives powers 1/2±I and their reversal. Nonexistence uses the theorem Statement, unchanged by the proof-only repair. Risk review complete.

## Metadata and consumer maintenance

The four kernel-construction reader repairs left batch-9.pages.json statements and deps at their pre-reader wording. Mirrored the exact current Statement/Example and kernel dependency for the two theorems and two examples. This metadata synchronization creates no separate mathematical defect. Their touched verdicts are amended_repair; the MLR lemma remains accepted_repair. No item Statement/Definition was changed by this adjudication. The normal example actually uses only the nonexistence theorem Statement and remains sound. No further consumer repair is necessary, and no published defect was found.

## Decisions and ledger

| Obligation | Verdict | Closed defect |
|---|---|---|
| `touched:9:lem-mlr-orders-randomized-thresholds` | `accepted_repair` | `mathematical-statistics-foundations-37-3a-b9-mlr-measurable-representation` |
| `touched:9:thm-karlin-rubin-one-sided-ump-test` | `amended_repair` | `mathematical-statistics-foundations-37-3a-b9-karlin-rubin-one-sided-ump-test-kernel-construction` |
| `touched:9:thm-ump-nonexistence-witness` | `amended_repair` | `mathematical-statistics-foundations-37-3a-b9-ump-nonexistence-witness-kernel-construction` |
| `touched:9:ex-binomial-one-sided-ump-test` | `amended_repair` | `mathematical-statistics-foundations-37-3a-b9-binomial-one-sided-ump-test-kernel-construction` |
| `touched:9:ex-two-sided-normal-alternatives-have-opposed-most-powerful-tests` | `amended_repair` | `mathematical-statistics-foundations-37-3a-b9-two-sided-normal-alternatives-have-opposed-most-powerful-tests-kernel-construction` |
| `refuter:9:1` | `confirmed_fatal` | `mathematical-statistics-foundations-37-3a-b9-pointwise-normal-test-uniqueness` |

The five reader clarifications are nonfatal local proof-step gaps: the measurable ratio representation or the immediate converse binary-kernel construction. They do not refute the mathematical claims. Each has a closed fixed ledger row at `3a-adjudicate`; the separate literal uniqueness false claim has its own fatal fixed row. `refuter:9:1` references exactly that one row. Repair confidence is 1 for each completed repair. No row was created for manifest synchronization or any mechanical check.

## Sources and evidence scope

- [Shao, Lecture 11](https://pages.stat.wisc.edu/~shao/stat610/stat610-11.pdf): Definition 8.3.16 (PDF p.7), Lemma B and Theorem 8.3.17 with proof (PDF pp.9–10; extracted lines 240–309). Checked real parameter ordering, full-data MLR, support convention including infinity, upper/lower direction and attained sizes. The local arguments independently prove monotonicity, boundary-randomized calibration and the signed-product comparison.
- [Deligiannidis, Foundations of Statistical Inference](https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf): Theorem 13.2, Definition 13.3, Definition 13.4 and Theorem 13.5 with proof (PDF pp.78–79, printed pp.77–78; extracted lines 5483–5539). Theorem 13.5 assumes a continuous statistic distribution; its calibration is not substituted for the local atom-sensitive lemma. The local proofs treat all measurable randomized competitors explicitly.
- [Gregory, STAT 713 Lecture 11](https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_11_slides_annotated.pdf): typed Neyman–Pearson statement (PDF p.7, slide6; extracted lines 60–69) qualifies uniqueness by probability-zero events, consistent with the repaired normal witness. Read the typed Karlin–Rubin summary at PDF p.14 (slide9, lines 148–159), which uses a sufficient statistic. Its broad uniqueness wording is not used as proof. Handwritten proof annotations have poorly readable extraction; I do not claim to have read those annotations completely. The assigned full-data proofs were checked independently from their local arguments and exact suppliers.

Read all current batch carriers, direct cited dependency statements, the complete reader/refuter artifacts, the batch manifest and cross-batch records. Read the normal-law, translation/reflection, measure, integral and zero-integral supplier statements exactly; did not re-audit every transitive foundation beneath published results. The two assigned pages were inspected as context and accurately summarize the current claims; no page decision or page edit is owed. No published defective supplier affecting this batch was found, so no published-consumer ledger edit was made.

All seven raw item hashes matched their reader-post fingerprints before my item edit. The original pre/post hash files and routing fingerprint remain unchanged. Only the two uniqueness conclusions in `items/thm-ump-nonexistence-witness.md` were edited locally; its Statement and dependencies remain unchanged. The binomial and normal examples are the only direct item/reference consumers of the reader-clarified theorem Statements found in the current item/page inventory. Their actual uses, kernels and power comparisons were independently reviewed and need no further mathematical changes. The examples have no item/reference consumers. The frontier-dependency ledger and owned cross-batch item evidence record these dispositions while preserving prior records and withdrawals.

## Local checks

- Initial `node tools/risk-report.mjs research/mathematical-statistics-foundations-37-batch-9.proof-contracts.json`: seven HIGH/CRITICAL items, zero errors; each now has a specific complete risk review.
- `node tools/regen-contract-entries.mjs research/mathematical-statistics-foundations-37-batch-9.proof-contracts.json thm-ump-nonexistence-witness`: regenerated one entry, preserving risk and boundary records.
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-ump-nonexistence-witness.md`: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-ump-nonexistence-witness.md`: one checked, zero failures.
- `node tools/rendercheck.mjs items/thm-ump-nonexistence-witness.md`: one file, zero errors; real KaTeX and renderer YAML parsing ran.
- Final post-edit `node tools/proof-layout.mjs items/thm-ump-nonexistence-witness.md`: one item, five steps, zero defects.
- `node tools/proof-contract.mjs research/mathematical-statistics-foundations-37-batch-9.proof-contracts.json --strict`: 7/7 checked, zero errors, zero warnings.
- `node tools/risk-report.mjs research/mathematical-statistics-foundations-37-batch-9.proof-contracts.json --require-reviewed`: seven routed, zero errors.
- `node tools/defect-ledger.mjs append --file /tmp/msf37-batch9-defects.json`: six rows appended under the tool's serialized append lock; generated ledger view refreshed.

No judge, stamping, certification or engine gate was initiated. Decision hash stamping and the gate battery remain engine work.

## Handoff

All six owed obligations decided; seven risk reviews complete. No blocker, escalation, proposed withdrawal, published repair or outside-scope repair. Current raw item hashes follow for handoff evidence; they are not certification stamps.

- `lem-randomized-threshold-has-exact-level`: `eb99700fc992b6df990225d7c28c68c4cae7562183bebfcce447d5cf6600771f`.
- `def-monotone-likelihood-ratio-family`: `ed101098de198e05910a121a036029eb26ef374c808ba7baec91fc60502cb4d1`.
- `lem-mlr-orders-randomized-thresholds`: `3542fdfe7a635fc3fe17b8c01116266b657c2a7d9e3d9daea53c920d507bdf94`.
- `thm-karlin-rubin-one-sided-ump-test`: `20ec35272910581b34a47aa0422cb25507dd0af756d26d8ac361e9d46d043acd`.
- `thm-ump-nonexistence-witness`: `787971536db273dcd0fab683e6481c5ace2b3858eaa9fc37bb0b76b44a9f4e1f`.
- `ex-binomial-one-sided-ump-test`: `3c369202b1b944473a372890acd6df52fad576c6ead566bad79ec1c8d8ba66bd`.
- `ex-two-sided-normal-alternatives-have-opposed-most-powerful-tests`: `7dc79bcfdfd3abd905f5ac013d5c73b94857e9d6790408607946138a45f63fb5`.

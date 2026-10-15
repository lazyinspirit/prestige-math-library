# Batch 10 Step 3a adjudication

Run: `bayesian-computational-statistics-62`; group: `batch-10`.

Scope: six assigned draft items, reviewed in the generated dependency order. The sole owed decision is `touched:10:thm-hellinger-tv-comparison-under-library-convention`; reader findings and refuter flags are empty, and no page decision is owed. The refuter artifact is `research/bayesian-computational-statistics-62-refute-10.json` (there is no refuter-10.md).

## Level 0 completed

`def-hellinger-distance-for-dominated-laws`: reviewed the full supplied-density definition and its eight actual prerequisite statements. Threshold measurability and the bound by p+q give a measurable integral in [0,2], including zeros and one-point spaces. An empty space cannot carry a probability. AC is explicitly limited to imported representative selection; no extra selection occurs locally. Invariance is proved by the next item. Risk review complete in the owning contract; no decision is owed for this untouched item. Source checked: Kleijn course notes §8.1 (8.2), PDF page 46, https://staff.fnwi.uva.nl/b.j.k.kleijn/NPBayes-LecNotes-2015.pdf. Next: complete the level-1 repair adjudication before higher items.

## Level 1 completed

`thm-hellinger-tv-comparison-under-library-convention`: **amended_repair**, repair confidence 1. All thirteen dependency statements were read. The reader’s finite-density uniqueness proof is valid, and comparing both sets of rho-densities now establishes common-dominator invariance. Every restricted integral is finite, so subtracting integrals on E_m is legitimate; alpha(E_m)=0 follows from the displayed lower bound. The density change handles the p+q=0 set explicitly. The event maximizer gives TV = density L1/2; Holder gives TV <= h; pointwise comparison gives h² <= 2TV. Equal laws and disjoint point masses check the endpoints.

The reader-post item initially matched SHA256 `101cce8ee20bd095894a71377b4f7229ab5f3df9172b1be1c8ca0e0a8194a905`; the pre-reader item hash is `ccd2fe43649bb21046271cdedb6d084d688086582979029d00395844bab6eace`. The snapshots record only this item and its contract changing, with unchanged item-manifest projection. The reader report documents the former uniqueness omission in steps 3.1/4.1; the present proof was independently checked rather than accepted from that report. No complete pre-reader source preimage is claimed here.

Additional confirmed nonfatal citation defect: F7 attributed quotient closure to `thm-arithmetic-and-lattice-operations-preserve-measurability`, whose actual Statement contains scalar, sum, product and lattice closure only. Replaced F7 with those supplied operations and explicitly proved the piecewise quotients measurable by strict thresholds in step 2.1. Updated exact derivation claims/inputs and the risk review. The theorem Statement, dependency list, manifest claim and provenance remain valid unchanged; no judge record was present. No Statement/Definition changed, so no propagated consumer repair is required. Defects: `bcs62-b10-3a-density-uniqueness`, `bcs62-b10-3a-quotient-citation`.

Sources checked: Kleijn notes §8.1 (8.2), PDF p.46, and §9.4 Lemma 9.8(i)–(ii), PDF p.56. The source’s density-L1 inequalities agree after the independently derived factor 1/2. Risk review complete. Next: counterexample, posterior theorem, convention example, then finite-model example.

## Level 2: counterexample completed

`cex-identifiability-alone-does-not-imply-posterior-consistency`: read all six steps and all fifteen exact supplier statements. The prior sums to one on k>=1 and excludes the truth; directional KL is -log(1-4δ_k²)/2 and tends to zero. The discrete metric is an actual metric on distinct laws and its complement is measurable. Every finite likelihood is positive and at most one, ensuring positive finite evidence and posterior mass one on the complement. Product affinity yields TV(P_0^n,P_n^n) <= sqrt(2nδ_n) -> 0; the randomized-test signed-mass bound therefore makes uniform type-II error tend to one if type-I error tends to zero. The arbitrary discrete metric qualification is essential and is stated. All zero/log/support boundaries and inherited AC conventions are valid. Risk review complete; untouched item owes no decision. Next: independently complete the posterior theorem and its source proof check.

## Level 2: posterior theorem completed

`thm-posterior-consistency-under-prior-mass-and-tests`: independently checked the entire Statement, all twelve steps and all 35 actual supplier statements. Product-density normalization and measurability meet Tonelli and Bayes-kernel hypotheses. On a positive-prior measurable KL subset, the log ratio has positive-part expectation <=1 and negative-part expectation <=a+1, making the prior-averaged log ratio integrable. Tonelli handles likelihood zeros in prior-almost-every parameter along the sample; countability handles all coordinates. Jensen’s log-sum and exponential integrability hypotheses are established before use, and SLLN gives the eventual denominator bound with b>a.

The fixed-block test has independent [0,1] outputs, mean separation 1/4, and both errors bounded by exp(1/8)exp(-cn), c=1/(8m); the downward equality case is included. The numerator expectation keeps the p0-positive indicator and uses an inequality, avoiding an unwarranted reverse absolute-continuity assumption. For 0<a<b<c, geometric summability, Markov and Borel–Cantelli prove consistency and eventual validity of posterior fibres under the truth. Empty complements are trivial, and rational radii justify simultaneous radii. Pinsker and the comparison give h⁴ <= 2 KL; joint square-root measurability and Tonelli give measurable Hellinger balls of positive prior mass. AC uses remain explicit. The piecewise quotient in 2.2 has elementary threshold preimages from F23/F25; A_n is defined explicitly in 4.1 for its earlier display. Neither creates a missing mathematical prerequisite. Risk review complete; no item edit or decision owed.

Sources: [Kleijn notes](https://staff.fnwi.uva.nl/b.j.k.kleijn/NPBayes-LecNotes-2015.pdf), §7.3 Theorems 7.5/7.8 and full proofs, PDF pp.41–44. The author/reader evidence calling this “§7.8” should be read as Theorem 7.8 in §7.3. [Kleijn–van der Vaart](https://pure.uva.nl/ws/files/1850322/114737_376240.pdf), §4.1 Lemma 4.1 and Corollaries 4.1–4.2, printed pp.376–379, were checked. The extracted Corollary 4.2 display says the excluded mass tends to 1, an apparent source typo; the preceding Corollary 4.1 and the independently checked local proof give 0. No local claim relies on that endpoint. PDF screenshots failed with cache-miss errors; complete relevant extracted text was available and read. No inaccessible GGV article was treated as read. Next: finish both finite examples and local checks.

## Level 2: convention example completed

`ex-l1-distance-convention-factor-of-two`: read both verification steps and all four prerequisites. The disjoint point-mass densities (1,0), (0,1) give L1=2, event TV=1 and h²=2, attaining the claimed upper inequality. The zero-density endpoints are valid and involve no division. Risk review complete; untouched item owes no decision. Next: level-3 finite-model application.

## Level 3 completed

`ex-identifiable-finite-model`: read all three verification steps and seventeen supplier statements. Explicit finite normalized joint densities and proper weights satisfy the theorem’s kernel requirements; injectivity follows from unequal Bernoulli probabilities. The true atom supplies positive KL mass. Both threshold-test errors, including equality for nonrejection, are bounded by exp(-n/8). Every 0<η<1/2 has singleton complement {1}; η>=1/2 has empty complement. Thus the current posterior theorem applies with no missing hypothesis. Risk review complete; untouched item owes no decision. All six required risk reviews are now complete.

## Dependency maintenance, published findings and final checks

The batch-5 page-only prerequisite and its two present item arguments were inspected directly. Updated only the owned batch-10 cross-batch evidence and appended the owned consumer record to `briefs/tasks/frontier-dependency-ledger.md` while holding an exclusive file lock. No supplier/consumer Statement or Definition changed, no published-library defect was found, and no published carrier or published ledger was edited. No proposed withdrawal was removed or introduced. Both assigned page summaries were read and are consistent with their actual items; neither owes a page decision.

Exactly one decision is written in `research/bayesian-computational-statistics-62-alpha-batch-10-3a-decisions.json`. Two nonfatal defects are closed as fixed in `research/defect-ledger.jsonl`, caught at `3a-adjudicate` and referenced by that decision. The initial append attempt rejected an evidence-shape mistake before writing; the corrected append succeeded for exactly two rows. No mathematical defect row was created for this mechanical attempt.

Local validation results:

- Initial risk report routed all six items (two HIGH, four CRITICAL). After independent reviews, `risk-report --require-reviewed` reported six items and zero errors.
- Reflow on the amended Hellinger theorem: unchanged. Precheck: one proof checked, zero failures.
- Final strict proof-contract check: six of six items, zero errors and zero warnings. An initial check identified four missing citation-use mappings for the newly explicit step 3.1 inputs; all were synchronized before the successful final check.
- Rendercheck on the amended item: one file, all math parsed with real KaTeX and frontmatter with renderer YAML, zero errors.
- Scoped depcheck using all six manifest item IDs: selected item/page and prerequisite cycle checks passed.
- Required final `node tools/proof-layout.mjs items/thm-hellinger-tv-comparison-under-library-convention.md`: one item, seven steps, zero defects, after the final item edit and formatter.
- Raw-hash comparison: all five unedited items still equal their reader-post hashes. The amended theorem now has SHA256 `8b669a1007458bed1bb0b43ade61487fa84b085ffb7f770556b6a01eb93dfb15`, distinct from both immutable snapshots. Both pages and the manifest were left unchanged.

A mistaken `rendercheck --help` invocation was interrupted before producing a result; no whole-corpus validation is claimed. All successful checks above were explicitly scoped. These are local checks, not judgments, certification, gate results, or engine decision stamps.

Blockers and owner repair requests: none. The engine retains scheduling, stamping and the gate battery. Work is ready for engine collection.

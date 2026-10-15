# Step 3a adjudication — batch 24

Run: `statistical-models-experiments-62`; group: `batch-24`.

Scope owes only `touched:24:lem-finite-event-conditional-expectation-formula`; reader findings and refuter flags are empty. No page obligation.

## lem-finite-event-conditional-expectation-formula

Reviewed steps 1.1, 2.1, 2.2, 3.1 and all six actual suppliers. Positive event mass normalizes the weights even at mass one; the two-cell version retains 0<P(A)<1, is measurable and integrable, and matches integrals on all four sigma(A) events. Disjoint finite splitting proves the partition formula including {Ω}. Zero-weight atoms and constant X cause no issue; no empty probability space, null-cell division or AC use. Grinstead–Snell Ch.6 Definition 6.2/Theorem 6.5, pp.239–240 checked. Reader repair accepted; current raw hash matches post snapshot and reconstructed pre bytes match pre snapshot.

## lem-finite-simple-random-sampling-identities

Reviewed all four steps and seven actual suppliers. Double counting yields marginal m/n and joint m(m-1)/(n(n-1)); centered cross sums eliminate off-diagonal terms and give (n-m)Sxy/(mn). Expansion of sample cross products then gives (m-1)Sxy. Checked m=1 joint probability zero, m=n deterministic sample, n=2, constants and possibly negative covariance. Sample covariance restricted to m>=2; no independence of inclusions assumed and no AC. Hudgens–Halloran Appendix A.4 identifies SRS inputs; the covariance and unbiasedness proofs are supplied locally.

## def-two-stage-randomized-interference-design-and-effects

Reviewed full Definition and nine actual suppliers. The joint law normalizes by counting C-subsets and each within-group K-subset; conditional law depends only on its strategy and factors across groups. Bounds N>1, 1<=C<N and 1<=K_i^s<n_i ensure both unit arms and both strategy arms positive. Partial interference makes group outcomes independent of other strategy labels; targets are finite strategy averages, estimators are observable data functions. Checked equal strategies, n_i=2, C=1/N-1 and group rather than unit weighting. DE is control-minus-treated and TE=IE+DE. No stratified interference/additivity or AC required. Hudgens–Halloran §§2.1–3.5 are source context.

## lem-two-stage-finite-design-variance-identities

Reviewed all six steps and nine actual suppliers. Conditional centered errors kill fixed/error cross terms; independent finite group errors give sum v_i/C_s². SRS inclusion averaging gives sum v_i/(C_s N). Expected sample variance adds sum v_i/N after dividing the (1-1/C_s) noise sum by C_s-1. Complement identity gives fixed arm covariance -Sψφ/N, producing contrast variance with -Sψ−φ²/N and exact nonnegative bias. No joint coupling of both strategies within one group is needed because arms are disjoint. Checked C=2 and N-C=2, zero variances, constant means, equal schedules; finite conditional spaces meet square integrability. Hudgens–Halloran Appendices A.4, A.6–A.9 checked against locally derived identities.

## thm-ht-exposure-specific-mean-unbiased

Reviewed all four steps and eight actual suppliers. Exposure sufficiency replaces each nonzero indicator outcome by its fixed label outcome; finite weighting sums to π and strictly positive π cancels. Finite linearity gives unit-weighted M-normalized mean and both-label contrast without exposure independence. Nonempty groups give M>0. Checked π=1, zero outcomes, coincident labels and dependence; π=0 explicitly excluded. Observed estimator is measurable on the declared full-power-set data space. Aronow–Samii Lemma 4.1/Appendix A.2 checked; no AC or general conditional-expectation existence used.

## thm-two-stage-randomized-interference-estimators-unbiased

Reviewed steps 1.1, 1.2, 2.1, 3.1, 4.1 and all ten actual suppliers. Conditional identity E[1{Zij=z}Y|Si=s]=P(Zij=z|Si=s)E[Y|Si=s,Zij=z] follows directly by finite partition splitting; m/n cancels m. Partial interference and the conditional product law justify the same group mean after conditioning on the whole first-stage vector, rather than falsely using a tower implication from Si alone. SRS group inclusion and finite linearity then give all four population contrasts. Checked C=1/N-1, K=1/n-1, constants and zero effects; all events/denominators positive. No stratified interference, additivity, general conditional-expectation existence or AC. Hudgens–Halloran Appendices A.1–A.3 checked. Corrected only the mismatched closing bracket in step 1.1 and synchronized its contract; no Statement/Definition change.

## thm-stratified-interference-variance-estimators-conservative

Reviewed steps 1.1, 1.2, 2.1, 3.1, 4.1 and ten actual suppliers. Stratified interference fixes both potential arm lists; the complement identity gives control/treated covariance -S_i01/n_i. Expanding their difference gives v_i=S_i0²/(n_i-k)+S_i1²/k-S_iD²/n_i. Unbiased sample variances require both arm counts >=2. The two-stage identities then cancel noise coefficients because (1-C/N)/(CN)+1/N²=1/(CN), leaving sum S_iD²/(N² n_i). For I/T/O select the corresponding two fixed group-mean lists; reversing the supplier contrast sign changes no variance, yielding S_I²/N, S_T²/N, S_O²/N. Conditional independence follows from finite group assignment functions and partial interference. Checked N=4,C=2,K=2,n_i=4; I/T/O allow within-group singleton arms; zero/noise-free/equal schedules. Positive square-sum coefficients prove both necessity and sufficiency of the stated equality conditions. No AC and no unresolved prerequisite. Hudgens–Halloran §4.2.1, Theorems 4–9 and Appendices A.4–A.9 checked.

## Decision and historical comparison

`accepted_repair`, repair confidence 1, for the single owed touched obligation. The reader's domain expansion is necessary at the one-cell partition and preserves the richer approved claim. The original source is exactly recovered from the Step-2 source-format archive by removing its final newline: SHA-256 `eed067ca23a548715151d1a96734a34435204d6d8539bae7bde887fc0e77a9aa`, matching pre. Current supplier raw SHA-256 `a969ad7aae2137295ae706d9db2b22da620a07a8539742cc1b834d221900e646` matches post. Only the event-definition domain, variable name and separating clause changed mathematically; proof unchanged. Original contract hash `ae2440c5833c762c6d8b0f18b9198cfd7f9e8de1b2e750c4a835eb37e75ddaba` changes to reader-post `4b240f8a4e56ed29e936c961f30e127b004a7f11cf87dac8c40f09f213c84b5c` before Alpha risk enrichment. Manifest hash stays `f4f339e2daaae067ac7a79e0560bf82964629c9df9467758ddadb04336b08c73`. No historical uncertainty or missing-preimage escalation remains.

## Direct consumers and repairs

The direct dependency/reference search over items and library finds precisely the design Definition, finite two-stage variance lemma, unbiasedness theorem, conservative-variance theorem, and A page placement. All are batch 24. The design's unit-arm conditioning stays strictly between zero and one. The other three proofs use finite positive-cell partition averaging and remain sound under the expanded supplier. Their F6/F8/F9 contract quotations were stale and are now exact current Statement quotations. The page Objective still accurately describes the finite-partition supplier. No necessary Statement/Definition change in a consumer, no further propagation, and no outside affected consumer.

Four contract boundary records had old step ranges: sampling endpoints, finite two-stage variance zero, HT choice, and unbiasedness zero/degenerate/choice. They now cite actual steps. The only Alpha item edit replaces the mismatched closing parenthesis with `]` in unbiasedness step 1.1. Its derivation mirror is synchronized. No material rewrite, judge invalidation, provenance change or manifest change is necessary; the carrier has no prior judge stamp. No mathematical prerequisite, published defect, proposed withdrawal or owner blocker found. Published suppliers remain read-only.

Closed defects (each confidence 1):

- `statistical-models-experiments-62-3a-batch-24-event-domain`: Original Statement defined E[X|A] only for 0<P(A)<1 but asserted positive-cell finite-partition identity at {Ω}. Reader expanded definition to P(B)>0; independently verified normalization, integral characterization and partition proof, including probability-one and zero-weight atoms. Original bytes recovered by stripping final newline from owner-step2-source-format archive match pre-reader eed067ca...; current raw bytes match post-reader a969ad7a.... Accepted repair.
- `statistical-models-experiments-62-3a-batch-24-sampling-contract`: Endpoint boundary cited nonexistent 1.2–1.4. Rebound to current steps 1.1, 2.1, 2.2, 3.1; mathematics unchanged.
- `statistical-models-experiments-62-3a-batch-24-variance-contract`: Zero boundary cited nonexistent 1.4/1.5 and F6 retained the supplier pre-reader Statement. Rebound zero case to all six current steps and synchronized exact F6 quotation after independently checking its actual use.
- `statistical-models-experiments-62-3a-batch-24-ht-contract`: Nonempty-choice boundary cited nonexistent 1.2/1.3. Rebound to current steps 1.1, 2.1, 3.1, 4.1; mathematics unchanged.
- `statistical-models-experiments-62-3a-batch-24-unbiased-contract`: Zero, degenerate and choice boundaries cited nonexistent 1.3–1.5; F8 retained the supplier pre-reader Statement. Rebound all three to actual current steps and synchronized exact F8 quotation and the corrected step-1.1 claim.
- `statistical-models-experiments-62-3a-batch-24-conservative-contract`: F9 quote retained the original supplier Statement, no longer present after reader repair. Synchronized to current positive-probability event formula; finite-partition application and proof mathematics independently sound.
- `statistical-models-experiments-62-3a-batch-24-unbiased-bracket`: Step 1.1 ended E_i,s[Y_ij(Z_i)|Z_ij=z) with a parenthesis instead of closing square bracket. Replaced the one delimiter and synchronized the contract derivation. No claim, hypothesis, dependency or mathematical inference changed.

The one routed decision references the supplier domain defect only. The six additional closed risk-discovered defects belong to other subjects and therefore cannot be attached to that supplier decision. No reader/refuter decisions are owed. Owner/engine action: route supplemental obligations for the six newly recorded defects before closure. The current step3-scope validator requires same-subject decision references and reports unowned ledger rows otherwise (tools/step3-scope.mjs, lines 1681 and 1804). I have preserved the dispatched requirement of exactly one owed decision rather than inventing gate or touched obligations. All associated local repairs are complete; this is an engine routing issue, not an unmet mathematical prerequisite.

## Sources independently consulted

- [Grinstead–Snell Chapter 4](https://chance.dartmouth.edu/teaching_aids/books_articles/probability_book/Chapter4.pdf), §4.1, printed p.134: event-normalized weights require positive probability, including probability one.
- [Grinstead–Snell Chapter 6](https://chance.dartmouth.edu/teaching_aids/books_articles/probability_book/Chapter6.pdf), Definition 6.2/Theorem 6.5, pp.239–240: conditional mean and complete partition proof. The local item explicitly excludes null cells.
- [Hudgens–Halloran](https://www.treatment-effects.com/Hudgens-Halloran-2008.pdf), §§2.1–3.5, pp.833–835; §4.2.1 and Theorems 4–9, pp.836–838; complete Appendices A.1–A.9, pp.840–841. Checked fixed outcomes, partial/stratified interference, count guards, effect direction, independent conditional group laws and variance corrections. Local proofs supply counting and two-stage identities rather than relying on the paper's cited SRS facts.
- [Aronow–Samii](https://arxiv.org/pdf/1305.6156v4), §3 Conditions 1–2, §4 Lemma 4.1, Appendix A.2, PDF pp.8–9 and 29. Checked exposure sufficiency, consistency and cancellation. The source uses strict upper positivity; the local finite calculation also proves the permitted probability-one endpoint.

All cited local prerequisite Statements/Definitions and required authored proofs were read, including the finite expectation/integral bridge, conditional-expectation characterization, binomial counting, finite sums/Fubini, variance and linearity, estimand/statistic interfaces, randomized-assignment model, variance addition and preservation of independence. No arbitrary-index choice, limiting argument or general conditional-expectation existence theorem is imported.

## Checks

Initial risk-report: 15 routed items, seven HIGH/CRITICAL, zero errors. All seven now have specific complete risk reviews. Required risk-report with `--require-reviewed`: 15 routed items, zero errors.

Strict proof-contract check on the seven reviewed carriers initially reported three stale supplier quotations; these were repaired. Rerun: 7/7 checked, zero errors and warnings. Reflow on the changed unbiasedness item: unchanged. Precheck on the accepted supplier and changed unbiasedness carrier: 2 checked, zero failing. Rendercheck on both: clean YAML and KaTeX. Failed source-extraction attempt: `pdftotext` is unavailable; used installed PyMuPDF and the browser PDF text to complete source reading. No defect row was created for that tooling failure.

Final ledger validation on the seven owned JSONL rows: 7 checked, zero errors. Final required proof-layout command on the sole Alpha-edited item: 1 item, 5 steps, zero defects. No later item edit or formatter ran. The initial attempt to validate a JSON array as a JSONL ledger failed mechanically; the correctly encoded JSONL subset passed. No mathematical blocker; the six new defect routes remain an owner/engine bookkeeping obligation. No judge, stamp, certification, engine transition or gate battery was initiated.

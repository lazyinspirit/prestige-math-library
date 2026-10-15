# Batch 51 Step 3a adjudication

Run: `bayesian-computational-statistics-62`; group: `batch-51`.

Scope: three touched obligations, no page, reader or refuter findings. Reader and refuter artifacts were read; their empty finding lists do not substitute for independent review. Items are reviewed in the generated dependency order.

## Completed lower-level review

- `def-iid-empirical-bootstrap-sample`: finite index construction, multiplicities, measurability, n=1 and deletion n>=2 checked against all eleven prerequisite statements. No defect.
- `lem-iid-sample-covariance-converges`: product integrability, IID preservation, integrable WLLN and covariance expansion checked. Singular/zero covariance allowed. No defect.
- `alg-basic-bootstrap-interval`: source-only enrichment; the Definition uses admissible nonempty finite quantiles and 0<alpha<1, so reflection preserves endpoint order, including ties and B=1. No coverage claim. Decision: reviewed_no_defect, audit_enrichment.
- `lem-empirical-bootstrap-law-is-a-probability-measure`: nonnegative indicator sum, disjoint countable additivity and normalization checked. No defect.
- `lem-finite-bootstrap-cdf-supremum-is-measurable`: exact finite maximum uses both left and right CDF values and continuity of G; random ties cause no measurability issue. No defect.
- `thm-delete-one-jackknife-linearization-for-smooth-statistics`: measurable modulus on high-probability compact deletion segments, scalar mean-value bound, squared pseudovalue errors, centered quadratic expansion and cross-term bound checked. No measurable choice of secant points is needed. No defect.

Specific completed risk reviews for these five required carriers are recorded in the owning proof contract.

## Completion

All routed reviews and all nine required risk reviews are complete. There are exactly three decisions: two source audit enrichments (`reviewed_no_defect`) and one accepted nonfatal internal-reference repair (`accepted_repair`, confidence 1). No escalation, mathematical uncertainty, proposed withdrawal, or new published defect remains.

## Level 2–3 checkpoint

`alg-delete-one-jackknife-acceleration`: source-only enrichment; n>=2 and the S2=0 undefined branch make the procedure exhaustive, including tied delete-one values. The local theorem is quoted with its full C1, second-moment and positive projected variance hypotheses. No acceleration consistency or BCa coverage assertion is imported.

`thm-conditional-iid-bootstrap-clt-for-empirical-law`: all eight steps and twenty prerequisite statements reviewed. The selected variance becomes positive eventually, and the countable cutoff selection gives all positive thresholds. The finite-grid argument and measurable supremum close the final subsequence contradiction. Current raw bytes match reader-post 16ca60708450acc59c887f59957c34def304447d6b12803e5b6017dc8e191dec. The corrected internal reference is mathematically appropriate; historical delta binding was subsequently recovered exactly as recorded below.

`ex-discrete-median-bootstrap-ties`: all 27 index tuples and quantile ranks independently checked; seven ones and twenty zeros give the stated outputs. Its required risk review and the conditional CLT review are complete in the contract.

The two algorithm pre-reader carriers were reconstructed by removing precisely the added bibliography entry; both match their immutable pre-reader raw hashes. No Definition changed.

## Level 4 checkpoint

`thm-iid-bootstrap-validity-for-smooth-statistics`: sampling delta expansion and conditional trace bound establish both root limits. The two local remainders are controlled at mu, so the theorem needs only differentiability at mu; the stronger jackknife C1 condition is not silently imported. Gaussian continuity closes the CDF sandwich. No defect.

`cex-iid-bootstrap-inconsistency-at-absolute-mean-kink`: half-normal sampling limit and conditional interval mass at zero checked, including a zero sample mean and possible bootstrap atoms. The exact bound by twice the uniform CDF error yields the nonzero random limit Phi(2|Z|)-1/2. No defect. Both risk reviews are complete.

The CLT pre-reader carrier was recovered exactly: replacing “the subsequence construction in step 2.2 and its consequences in steps 3.1–5.1” by “steps 2.2–2.4 to that subsequence” in Step 6.1, leaving the tags unchanged, reproduces raw pre-reader SHA-256 dc5a93d455ea9bb4d8c9104d035775cf8512f0aab12a0ad1a47130666e1c85d8. This authenticates the single internal-reference correction; no historical-byte uncertainty remains. The original wrong range was nonfatal citation polish: the correct construction and consequences already occur in 2.2, 3.1, 4.1 and 5.1. Accept the reader repair and record one closed nonfatal ledger row.

## Sources and scope limits

The current carriers, each of their cited prerequisite statements, reader report, empty reader-findings artifact, empty refuter artifact, pre/post snapshots and generated order were read. Local prerequisite proofs read in full: the empirical probability lemma, finite-index conditional IID lemma, finite CDF-supremum lemma, sample covariance lemma, jackknife theorem and conditional bootstrap CLT. The published delta theorem's first-order proof was checked for the exact application. Other published prerequisites were reviewed at their exact statement interfaces; this is not a transitive audit of those published proofs.

Authoritative source passages independently accessed:

- [Washington STAT 581 Chapter 8](https://sites.stat.washington.edu/jaw/COURSES/580s/581/LECTNOTES/ch8b.pdf): §2 empirical resampling setup; §3 jackknife variance definition, PDF p12; §4 Theorem 4.1 and full proof, PDF p14; §5 Theorem 5.1 and full proof, PDF pp25–26. The functional delta theorem is context; the local finite-dimensional argument supplies its own remainder control.
- [Bickel, Götze and van Zwet (1997)](https://www3.stat.sinica.edu.tw/statistica/oldpdf/a7n11.pdf): §2.3 Example 6, journal p7, confirms the random conditional absolute-value kink limit. The Rademacher witness and interval-mass calculation are checked directly here.
- [Efron and Tibshirani (1993), primary book text mirrored online](https://djvu.online/file/DrRxMumhAaOZY): §14.3, p186, equation (14.15), including the definition of the average delete-one estimate immediately above it. The mean-minus-delete-one cubic numerator and sixth-times-quadratic-sum-to-three-halves denominator agree with the algorithm. The Google Books link did not expose the passage; a Harvard PDF download exposed only eleven preliminary pages, so neither was treated as full-text evidence.
- [Davison and Hinkley, Chapter 5 publisher record](https://www.cambridge.org/core/books/abs/bootstrap-methods-and-their-application/confidence-intervals/499FDF2036D956E7B7E7FB7F25D08B13) confirms the chapter metadata. Its full text was not exposed there. [Primary book text mirror](https://pdfcoffee.com/davison-hinkley-bootstrap-methods-and-their-application-pdf-free.html) was consulted, but its OCR did not expose the exact §5.2 formula in the accessed extracts; direct retrieval also returned HTTP 403. I do not claim independent full-text confirmation of that exact source locator. The reflected construction itself was checked directly from the root-error identity: subtracting the upper and lower quantiles of bootstrap estimate minus observed estimate yields the stated reflected endpoints. The library explicitly adopts its own finite lower-quantile convention; no interpolation convention or coverage assertion is imported.

## Repairs, records and consumers

No item content was edited by this adjudicator: all three touched carriers remain byte-identical to their reader-post sources. No Statement or Definition changed, so no supplier interface propagation was triggered. The CLT's owned theorem and kink-counterexample consumers were independently reviewed above against its full hypotheses. Sources added by the reader to the two algorithms were synchronized into their corresponding manifest entries. All stable IDs and page membership were preserved.

The single confirmed historical nonfatal defect is closed as `bcs62-b51-conditional-clt-internal-reference` in `research/defect-ledger.jsonl`, at stage `3a-adjudicate`, disposition `fixed`, confidence 1, and referenced by the CLT decision. No defect rows were created for source enrichment or mechanical validation. The generated defect-ledger view was refreshed.

The owned cross-batch dependency input retains its three prior context rows and adds the missing declared `iid-bootstrap-and-jackknife-validity` → `polyhedral-selective-inference` page-context row after reading both current page bodies. That published page's known-variance Gaussian selective pivot is not used to prove bootstrap validity or interval coverage. The unified dependency ledger was refreshed by its tool. No published item was edited and no defective published supplier was identified within the reviewed uses.

## Local validation

- Risk report before reviews: 19 items, nine HIGH/CRITICAL carriers; zero errors. Final `node tools/risk-report.mjs research/bayesian-computational-statistics-62-batch-51.proof-contracts.json --require-reviewed`: zero errors, all nine complete.
- `node tools/proof-contract.mjs research/bayesian-computational-statistics-62-batch-51.proof-contracts.json --strict`: 19/19 checked, zero errors or warnings.
- `node tools/tsx-run.mjs tools/precheck.mts items/alg-basic-bootstrap-interval.md items/alg-delete-one-jackknife-acceleration.md items/thm-conditional-iid-bootstrap-clt-for-empirical-law.md --json`: one proof checked and passed; both algorithms not applicable; zero failures.
- `node tools/rendercheck.mjs` on those same three explicit item paths with `--json`: three checked, no errors or warnings.
- Final batched `node tools/proof-layout.mjs items/alg-basic-bootstrap-interval.md items/alg-delete-one-jackknife-acceleration.md items/thm-conditional-iid-bootstrap-clt-for-empirical-law.md`: three items, eight steps, zero defects. No subsequent item edit or formatter was run.
- Exact obligation/byte checks: three of three decisions, three of three current raw item hashes match reader-post, nine of nine risk reviews complete. All three pre-reader item byte strings were reconstructed in memory and checked against their immutable raw hashes; no historical uncertainty remains.
- `node tools/defect-ledger.mjs validate --run bayesian-computational-statistics-62`: 122 rows, zero errors after correcting this adjudicator's mechanical location label from `proof` to `proof-step`. The initial label failure did not represent a mathematical defect.

No judge, stamps, dispatch, stage transition or gate battery was initiated. The engine owns stamping and subsequent gates.

# Batch 64 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-64`.

Disposition: one accepted reader repair; two escalated findings about the same unresolved batch-59 prerequisite. Three local risk reviews are complete and three retain that inherited hold. This report does not certify the batch or close either escalation.

## Routed decisions and historical evidence

- `touched:64:def-qftx-finite-gaussian-shell-transform`: **accepted_repair**, `repair_confidence: 1`. Exact pre-reader bytes were recovered at `research/physics-non-fluid-129-2026-10-21-r2-owner-step2-qft64-consumers/current/items/def-qftx-finite-gaussian-shell-transform.md`. Its raw SHA256 is `0a6a4b65e3d222a8345b15737d9a7aee136370c97d3ff682adda6542b88f1fa1`, matching the immutable batch-64 pre snapshot. Current raw SHA256 is `63f694751d79df9149e8b12caeb75a71ad26e4d3c6aa5fc4c8a8d08c9dc114dc`, matching the post snapshot. The sole text delta separates the coordinate units of x,z from the dimensionless exponent V, specifies squared coordinate units for C, and makes an action interpretation conditional on V=S/hbar. The integral, function classes, covariance and proof are unchanged. Closed ledger row: `physics-non-fluid-129-2026-10-21-r2-3a-batch-64-shell-exponent-units`.
- `reader:64:1`: **escalated**. Original observation is bound to producer pre hash `890c5345ada34e98fca108ec0c782b8d64d004f2e8a25dc096881423e43b63a6`. Preserve the genuine finding; no false-positive or historical repair claim.
- `refuter:64:1`: **escalated**. Observed current producer hash and current independently reviewed producer hash both equal `8b644981a257bf07b191311b998ef8bcde3ba455e8dad9c7d82271bce027f5a4`. This carrier still has the reported missing prerequisite.

The decisions JSON retains each finding's exact producer batch 59, consumer `def-qftx-heavy-gaussian-data`, dependency path, producer carrier at routing, immutable producer pre-snapshot record, observed source and observation fingerprint. All six owned item hashes still equal their immutable post-reader item hashes. No reader/refuter reports, immutable snapshots or routing records were changed. No historical observation is unbound in this scope.

## Review in required dependency order

Each item's review was recorded in this report and its contract before advancing to the next dependency level; the following consolidates those checkpoints.

1. **Level 0: `def-qftx-finite-gaussian-shell-transform`.** Reviewed all three steps and all five supplier definitions/statements. Addition is continuous, hence the translated Borel integrand is measurable on the Euclidean Borel product. Tonelli can be applied with Lebesgue measure restricted to Borel sets, giving Borel parameter measurability; both measures are sigma-finite. Strict positivity follows because the countable union of the sets {g>=1/n} is the whole probability space. The inverse logarithm is continuous by the explicit positive-delta argument, and its negative is finite and nonnegative on (0,1]. The coordinatewise second-moment argument proves the Dirac law at C=0. Singular covariance, f=0 and f=+infinity are permitted; finite V excludes an infinite logarithm. Risk review complete.

2. **Level 0: `lem-qftx-finite-heavy-gaussian-square`.** Positive-definite K has positive-definite inverse covariance and a positive finite Gaussian normalizer. Expansion of the translated quadratic form gives the stated sign and factor 1/2. The translation is a measurable measure-preserving bijection; the exact integral-invariance supplier allows nonnegative integrals before finiteness is established. Thus the numerator is finite and both ratios equal the displayed exponential. Checked j=0 and d=1; singular K and d=0 are excluded. AC is expressly inherited from the Gaussian suppliers. Risk review complete.

3. **Level 1: `def-qftx-heavy-gaussian-data`.** Locally, g_M(a)=(M²+a)^-1 is bounded, ag_M is bounded by one, and the scalar spectral measure after applying g_M has density g_M². Hence its output lies in D(A). Spectral cutoffs and bounded multiplicativity prove both inverse identities on precisely D(A). Positivity makes the quadratic form real and nonnegative, with negative effective-action shift. The finite real Gaussian ratio and inverse-log definition justify that interpretation only at the finite regulator. J=0 and A=0 work; M=0 is excluded. Its local deduction is sound conditional on the spectral supplier, but its risk review stays open for the producer issue below.

4. **Level 1: `prop-qftx-finite-gaussian-shell-semigroup`.** The probability product is sigma-finite. Its bounded exponential integrand is integrable, so Fubini factors the characteristic function. The exact multivariate-normal uniqueness lemma identifies the addition pushforward, including singular and zero covariances. Tonelli then proves the pointwise equality for every nonnegative Borel f, including infinity. Finite nonnegative potentials stay in the class required for a second transform. No determinant factor, differentiation along covariance paths or continuum limit is inferred. Risk review complete.

5. **Level 2: `thm-qftx-heavy-derivative-bound`.** Finite geometric division holds for all a>=0 and N>=0. Band support puts J in every required power domain; extending each band multiplier by zero gives a bounded Borel multiplier. Its supremum proves the norm bound, and Cauchy–Schwarz proves the action bound with the correct factor 1/2. E=0 gives zero remainder; N=0 works; E=M and E>M retain valid finite-order bounds without a vanishing bound as N grows. AC supplies CC. Local deduction sound; risk stays open for the inherited producer prerequisite.

6. **Level 3: `cex-qftx-eft-outside-band`.** The exact real-multiplication theorem applies to m(p)=p² on the sigma-finite nonzero Lebesgue space under AC and CC. The shifted inverse maps into its maximal domain. For N=0 the remainder magnitude tends to M^-2, above the proposed coefficient because E<M; for N>=1 it diverges. A sufficiently far compact interval of length M therefore gives a strict pointwise inequality. Its normalized indicator has norm one, lies in every power/remainder domain, and yields the strict integrated inequality. E=0 works; E=M is excluded. This explicit counterexample is locally sound and reports no observation. Its declared dependency closure through the band theorem retains the producer hold, so risk stays open.

## Batch-59 escalation: exact missing prerequisite and attempted closure

Independently read the entire current `items/thm-qftx-positive-unbounded-spectral-calculus.md`, its entry in `research/physics-non-fluid-129-2026-10-21-r2-batch-59.proof-contracts.json`, its batch-59 manifest row, all seven declared supplier statements/definitions, and the additional published `def-adjoint-of-a-densely-defined-unbounded-operator` and closed-adjoint lemma. Current Proof 1.1 invokes “the defining criterion for the adjoint.” Neither its local statement nor its declared prerequisites supplies that unbounded-adjoint definition. The producer's contract and manifest also omit it. The consumer's additional closed-adjoint prerequisite cannot supply a missing premise inside the producer carrier.

The exact missing definition says y belongs to D(T*) iff x↦<Tx,y> is bounded in the ambient Hilbert norm on D(T), and T*y is the unique w satisfying <Tx,y>=<x,w> for every x in D(T). Attempted closure: the producer's graph-limit identity <Aw,u>=<w,v> implies |<Aw,u>|<=||w|| ||v|| by its Cauchy–Schwarz supplier. Once the adjoint criterion is explicitly supplied, it gives u in D(A*) and A*u=v; domain equality then proves closedness. Subtracting the identity term proves the claimed adjoint domain for I+A; the same criterion gives the orthogonal-complement kernel argument for surjectivity. The remaining bounded-resolvent, null projection, pushforward, two domain inclusions and bounded-calculus calculations are coherent conditional on that prerequisite. The ambient-Borel extension currently present correctly handles A=0; it does not fix the distinct adjoint omission.

Required owner action: route the exact definition/dependency repair to batch 59, synchronize its contract and manifest and check the resulting producer proof, then resolve both original consumer obligations. I made no outside producer edit and did not clear the escalation. The two escalated decisions have no closed defect row because the issue is unresolved; no completion confidence is asserted for them.

## Consumers, metadata and ledgers

The complete item/page search for the changed shell definition found its sole item consumer `prop-qftx-finite-gaussian-shell-semigroup` and its owning A-page placement. The proposition's Statement, F1 and all three proof steps use the same normalized transform and admissible potentials. It needs no repair and triggers no next interface hop. The A/B pages retain their original item order and empty prose bodies; no page decision is owed. No TikZ/tikzcd occurs in the assigned carriers or pages; these scalar/operator arguments require no additional diagram.

Synchronized the shell definition's manifest statement to the accepted current text. Refreshed the two owned F1 contract quotations from the independently reviewed current spectral-supplier Statement, including its ambient-Borel extension. This corrects stale quotation metadata, without changing any argument or claiming supplier acceptance. All six contracts now contain specific independent risk reviews; the three inherited holds remain open. No item content was edited during this adjudication, so no judge record was invalidated. The accepted reader edit had no judge stamp.

Changed the three owned cross-batch input rows (the analytic-prerequisite page and both direct spectral consumers) from verified to open with exact producer evidence. Ran the required frontier-dependency-ledger refresh; it refreshed and deduplicated the unified ledger. No withdrawal proposed; all stable IDs remain. No defective published item was established, so no published ledger edit or lock was needed. Imported suppliers and root mathematics were read-only.

## Sources and limits

Local exact source sections were checked for all 22 direct suppliers identified in the reader inventory: AC, Hilbert/inner-product, Lp quotient, measure-preserving, Gaussian and logarithm definitions; AC-to-sequential-choice, Gaussian characteristic, L2 Hilbert, real-multiplication and closed-adjoint lemmas; Cauchy–Schwarz, exponential monotonicity, Fubini, integral invariance, translation invariance, Gaussian density, PVM multiplicativity, positive spectral calculus, product-measure and Tonelli theorems. Additional producer-only bounded-PVM, bounded-normal spectral and PVM-definition statements and the missing unbounded-adjoint definition were read. These are exact supplier checks, not a new transitive audit of published mathematics.

External reading:

- [Skinner, Chapter 2](https://www.damtp.cam.ac.uk/user/dbs26/AQFT/chap2.pdf), §§2.1–2.2, printed pp.13–16 (PDF pp.1–4), equations (2.2)–(2.12): normalized finite Lebesgue Gaussian expectation, explicit S/hbar exponent and source square completion. Skinner uses the opposite source sign in the action; replacing his source by -j gives the carrier convention and the same positive quadratic exponent. Browser retrieval failed on file size; downloaded PDF and read extracted pages locally with PyMuPDF.
- [Williams, Spectral Theorem notes](https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf), Definition 7.6, printed p.30, and Remark 7.10/Lemma 7.12, p.31: ambient-norm continuity defines the adjoint domain; the representing-vector identity proves adjoint closedness. Read these complete passages, with the same first-variable-linear convention.
- [Neubert](https://arxiv.org/pdf/hep-ph/0512222), §2, printed pp.3–5 (PDF pp.4–6), equations (2)–(10): split modes, low-energy local expansion and natural-unit convention. This supplies EFT motivation, not the carrier's exact spectral remainder estimate or empirical evidence. Downloaded PDF pages were read locally.

Did not retrieve Moshayedi, Burgess, Baez or Princeton full texts in this dispatch; no independent reading of those references is claimed. Local proofs and exact mathematical suppliers carry the reviewed deductions. No measurements, precision estimates, p-values or claims of empirical confirmation were introduced.

## Focused checks

- Initial risk report without `--require-reviewed`: exit 0, six CRITICAL carriers routed.
- Scoped `proof-contract.mjs ... --strict`: initial failure on two stale spectral-supplier quotations; after exact current quotation refresh, exit 0, six checked, zero errors/warnings. No scientific defect row was created for this mechanical mismatch.
- Scoped `tsx-run.mjs ... precheck.mts` on all six items: exit 0, six passes.
- Scoped `rendercheck.mjs` on six items and both pages: exit 0, eight files clean.
- Final `proof-layout.mjs items/def-qftx-finite-gaussian-shell-transform.md`: exit 0, one item, three steps, zero defects. This covers the reader-changed item after all final metadata edits.
- Required risk rerun with `--require-reviewed`: exit 1, exactly the three intentionally open inherited reviews (heavy data, derivative bound, outside-band counterexample). Their local checks do not close the unresolved prerequisite.
- Current item hash comparison: all six match the immutable post snapshot. Decisions file contains exactly the three owed obligations; no additional item/page decisions.

The engine owns decision hashing, gates and transitions. No judge cycle, stamp, publication or commit was performed. The dispatch's remaining blocker is the batch-59 adjoint prerequisite and the resulting three open risk reviews.

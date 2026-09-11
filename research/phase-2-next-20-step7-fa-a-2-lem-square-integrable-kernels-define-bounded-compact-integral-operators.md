# Final adjudication — queue position 2

Run: phase-2-next-20. Group a. Item: `lem-square-integrable-kernels-define-bounded-compact-integral-operators`.
Disposition: repaired. Source status: familiar.

## Scope and inspected evidence

The terminal recorder accepted queue position 1 before substantive review of this item began. Read this item's entire current Statement, Facts and Proof, its complete owning batch-1 proof contract including risk/boundary records, its manifest entry, the relevant Axler coverage entries (Example 10.5 and 10.67–10.70), and the batch notes. The A/B context is `library/measure-theory/weak-mixing-and-the-chacon-transformation{,-examples}.md`: probability normalization, first-variable-linear complex pairing, AC for countable selections, explicit compactness from rectangle approximation, no later spectral/compact-operator page imported.

Read the complete cited supplier items: `def-l-two-operator-conventions-for-weak-mixing`, `lem-product-rectangle-kernels-are-dense-in-complex-l-two`, `thm-completion-measurable-functions-have-base-measurable-representatives`, `thm-tonelli-and-fubini-for-completed-product-measures`, `thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz`, `thm-complex-lp-completeness-and-almost-everywhere-subsequences`, `thm-bolzano-weierstrass`, and `def-axiom-of-choice`. Also read the full existing published supplier `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, now added directly. Exact source sections for all Facts, including new F9, are quoted in the owning proof contract.

Read the initial and final Terra rejections in `research/phase-2-next-20-judge.jsonl`, the Alpha adjudication in `research/phase-2-next-20-judge-adjudications.jsonl`, and the item's Alpha report in `research/phase-2-next-20-alpha-step7-a.md`. The initial objection correctly identified an unsupported representative claim attributed to rectangle density. Alpha supplied the correct real completion-representative theorem and applied it to both components. The final rejection correctly identifies a remaining interface defect: step 1.1 still appeals to the uncompleted Fubini argument inside the completed theorem's proof, rather than its stated interface.

## Independent mathematical basis

Under AC, for a probability space and a kernel in the completed-square complex L2, the integral construction yields an original-factor L2 operator with norm at most the kernel norm. It is compact, is approximated in operator norm by finite-rank rectangle operators, and has zero kernel class if the operator vanishes.

F8 applied to each real component yields a product-measurable representative. Its infinite-value sets are product-measurable and null, so setting those values to zero gives a finite complex representative. An input L2 class on the original factor has an original-factor measurable representative. Thus k(x,y)f(y) is product-measurable. Probability mass one gives the product L2 norm of f(y) equal to ||f||2. Product Cauchy–Schwarz (applied with the conjugate of f(y) for this pairing convention) gives absolute integrability of k(x,y)f(y). F9's uncompleted-product Statement then directly gives original-factor integrable section-integral functions after zero extension. Its hypotheses hold because probability factors are sigma-finite. Completed Tonelli on |k|² gives square-integrable sections a.e.; section Cauchy–Schwarz and integration give ||Kf||2<=||k||2 ||f||2. The inequality holds after zero extension and proves the output actually belongs to original-factor L2, including for incomplete factors.

Product-null changes are contained in product-measurable null covers; Tonelli makes their sections null for almost every parameter. Input representative changes likewise do not change the integral class. Linearity and the same estimate for k-l give ||K_k-K_l||<=||k-l||2. No universal exceptional set over all input functions is needed.

A rectangle combination has range in a finite span of indicators. Removing dependence and finite Gram–Schmidt give a finite orthonormal basis. Bounded input sequences have bounded images by the established estimate, hence bounded complex coordinates. Successive real Bolzano–Weierstrass extractions for the finitely many real and imaginary coordinates give a convergent vector subsequence. The empty/zero range is addressed explicitly.

Density and AC give rectangle approximants with error <2^(-m), including m=0. Under AC, repeated nested subsequence extraction and an increasing diagonal choice give eventual membership in every extracted subsequence. For inputs bounded by B the two-error bound is 2B 2^(-m) plus a convergent approximant's Cauchy difference. Fix m first and then the indices; complex L2 completeness gives the required limit. B=0 is immediate. Finally, testing K=0 against each pair of indicator functions gives the integral of k over every rectangle equal to zero. First-variable linearity makes this exactly the pairing with its real rectangle indicator. F1's stated zero-pairing conclusion proves k=0. There is no exchange of an uncountable family of tests with a single a.e. exceptional-set assertion.

These measure-completion, Fubini and finite-rank approximation arguments are familiar enough to verify directly against the complete local suppliers; no external verification was needed or performed. Existing external source references and earlier source-reading receipts are provenance, not a claim of fresh web reading by this adjudicator.

## Final repair and dependency reconciliation

Added only the existing published uncompleted Fubini theorem to this item's deps and new Fact F9. Step 1.1 now applies its Statement to the explicit product-measurable, absolutely integrable function and obtains original-factor measurability directly. Removed the appeal to F2's proof. Updated only the owning manifest dependency/strategy and this item's owning proof-contract citation and derivation. Preserved the previous independent risk review; this file records the terminal review. No new item, supplier edit, claim weakening, third judgment or pass stamp is involved.

Read `briefs/tasks/frontier-dependency-ledger.md`. Reconciled and atomically rewrote the owning input `research/phase-2-next-20-batch-1.cross-batch-dependencies.json` as its valid empty array: the added supplier is already published, not a different batch in this run. Ran `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-next-20`, which succeeded. A spurious cross-batch row would misclassify this dependency. The exact new dependency and its mathematical use are recorded above and in the owning manifest/contract. No published mathematical defect was found; the published-defect ledger was not edited.

## Validation and terminal checkpoint

- Focused precheck: 1 checked, 0 failing.
- Strict owning proof-contract check: 1/1 checked, 0 errors and 0 warnings.
- Focused renderer/YAML/KaTeX check: clean.
- Global depcheck: reports “OK — no cycles, all references resolve, no draft items on published pages”; existing warnings remain outside this repair.
- Frontier dependency refresh: succeeded.

All mathematical obligations for this item are resolved. Next action: record these exact final bytes as repaired with source status familiar. The recorder's append-only receipt is authoritative for completion. This completes the supplied queue once that command accepts; no further review wave is requested.

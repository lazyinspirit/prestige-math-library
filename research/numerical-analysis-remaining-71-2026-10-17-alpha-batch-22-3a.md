# Batch 22 Step-3a adjudication

Run: `numerical-analysis-remaining-71-2026-10-17`; group: `batch-22`.

Scope and history: the scope has no touched carriers, page obligations or reader findings. Pre/post reader snapshots agree for every item, contract and manifest; the reader made no repairs. Exactly two refuter obligations are owed. No historical-preimage exception is invoked. Review follows the generated dependency order.

## Level 1: weighted backward-error definition

`refuter:22:1`: confirmed_fatal, citation-inaccurate, repaired with confidence 1. The original first source incorrectly named Markus A. Berhanu. The linked thesis cover (PDF page 1) and title page (PDF page 2, printed page 1) identify Michael Berhanu. Corrected the author in the carrier and manifest source mirror; Definition, dependencies and provenance classifications are unchanged. Ledger row: `numerical-analysis-remaining-71-2026-10-17-3a-batch-22-D01`.

Independently reviewed the entire Definition and `def-matrix-polynomial-and-homogeneous-eigenpairs`: positive weights, nonzero x and representative, dimensions and grade are explicit. Delta A_j=-A_j proves a nonempty feasible set of finite nonnegative costs; projective scaling preserves it. Alpha=0, beta=0 and zero residual are admissible. No AC or analytic compactness assumption is required. The HIGH risk review is complete in the batch contract. The cited Tisseur–Meerbergen section 4.2 treats a different coefficient max-norm convention and is contextual background, not a supplier for the local product-norm formula.

Sources checked: [Berhanu thesis](https://eprints.maths.manchester.ac.uk/582/1/mberhanu05.pdf), title page and section 3.2, pp. 58–61; [Tisseur–Meerbergen](https://eprints.maths.manchester.ac.uk/466/1/38198.pdf), section 4.2, pp. 264–265. The subsequent theorem and its formula are checked separately below.

## Level 2: denominator proposition

`prop-clearing-a-common-denominator-away-from-poles` owes a risk review only; no extra decision is created. Read its complete two-step proof, F1, `def-rational-matrix-eigenproblem-and-pole-domain` and the polynomial definition. Reduced scalar denominators ensure exactly the genuine poles are removed; multiplication and division by q(lambda) prove both directions for every nonzero x on Omega. Constant q=1, the zero rational matrix, singular N and an empty pole set cause no failure. Points at infinity are not asserted to lie in this finite domain. No AC or missing supplier is used. HIGH risk review complete; no repair.

Source checked: [NLEVP](https://discovery.ucl.ac.uk/id/eprint/1056500/2/nlevp.pdf), section 2.1, p. 3, rational-matrix discussion and equation (2). This gives context; the reduced-denominator equivalence follows directly from the local definition.

## Level 2: exact weighted-error theorem

`refuter:22:2`: confirmed_fatal; inaccurate first citation repaired with confidence 1. Corrected Michael Berhanu and the locator to Theorem 3.3, whose weighted product norm matches this item. The original Theorem 3.1 uses coefficientwise bounds instead. Both corrections repair the same first source entry; they are recorded together in `numerical-analysis-remaining-71-2026-10-17-3a-batch-22-D02`. Manifest source mirror synchronized. This is a citation-only repair; no proof rewrite or stale judge stamp is present.

Read the entire current Statement, Given, F1 and steps 1.1–3.1, with its previously reviewed defining supplier. The j=0 or j=m term makes S positive; x is nonzero. Step 2.1 derives all required finite-dimensional inequalities with the declared inner-product convention, including the rowwise matrix bound. The complex conjugate on c_j in step 2.2 gives sum_j Delta A_j c_j x=-r. The rank-one Frobenius identity gives the squared minimum; taking its square root gives the claimed norm. Checked r=0, alpha=0, beta=0, representative rescaling, m=1, arbitrary positive weights and reversal reindexing. No regularity of the perturbed polynomial is required by the definition. No AC or unmet prerequisite. No Statement/Definition changes or forced consumer repair.

Source: Berhanu section 3.2, Definition 3.3 (p. 60), Theorem 3.3 and its complete proof (p. 61); compare Theorem 3.1 (pp. 58–59). The source proof has apparent typographical problems in its displayed minimizer; the local minimizer was checked directly rather than copied or certified from it.

## Level 2: strong linearization

`thm-first-companion-pencil-is-strong-linearization` owes a HIGH risk review only. Read all six proof steps, Statement, Given, F1/F2, both full supplier definitions and the corresponding contract citations/derivations. D has the displayed finite polynomial inverse. The row-swap and D-determinant signs multiply to +1. The elementary polynomial operations have constant nonzero determinants and yield diag(P,I). For the reversal, the reordered lower block is unit triangular, so the same elimination works even at mu=0. The m=1 branch gives L=P directly. Homogeneous determinant equality extends to beta=0 as a polynomial identity. Finite lifts are bijections of kernels; the infinite kernel is precisely the first-block copy of ker A_m. Regularity makes d=degree(det P) well-defined, and reversal gives zero order mn-d, including degree-zero determinants and padded grades. The leading coefficient of det P is det A_m, so the final invertibility criterion follows. Algebraic and geometric multiplicities remain distinct. No AC, missing result or repair.

Sources checked: [Mackey–Mackey–Tisseur](https://eprints.maths.manchester.ac.uk/2293/1/VM60_review.pdf), section 3, Definition 7 and equation (6), printed pp. 7–8 (PDF pp. 8–9), using a downloaded PDF and PyMuPDF text extraction after browser extraction failed; Tisseur–Meerbergen sections 3.1 and 3.4, printed pp. 250–253. The former fixes grade and strong reversal equivalence and identifies the Frobenius forms. The latter uses a different block ordering/sign convention; the local proof independently establishes its stated convention.

## Scope, dependencies and remaining work

No item Statement/Definition, mathematical proof, dependency edge, provenance classification or page was changed. Both manifest source mirrors match the citation repairs; proof-contract mathematical rows remain current. All three HIGH risk reviews are complete. The batch cross-dependency artifact is an empty array; the owned consumer suppliers are local definitions checked above. The frontier dependency ledger records this disposition. No published defective item, proposed withdrawal, outside consumer repair or mathematical escalation was found. No published content was edited.

The live status command reports a running run at Step 3; recent Git history contains no closeout for it. Historical RESUME files were not used. No engine transition, dispatch, stamp or judge cycle was initiated.

## Local checks and handoff

All commands exited 0:

- `node tools/risk-report.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-22.proof-contracts.json`: 11 routed items; exactly the three HIGH items above.
- The same command with `--require-reviewed`: 0 errors, 11 items routed; all required reviews complete.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-coefficientwise-weighted-backward-error-for-matrix-polynomial.md items/thm-exact-coefficientwise-weighted-backward-error.md --json`: 2 files, 1 proof checked, 0 failures; definition correctly not applicable.
- `node tools/rendercheck.mjs` on those same two item paths: both passed YAML and real KaTeX checks.
- `node tools/proof-contract.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-22.proof-contracts.json --strict`: 0 errors, 0 warnings, 11/11 checked.
- `node tools/tsx-run.mjs tools/reflow.mts` on both changed paths: both unchanged.
- After the final edits and reflow, one batched `node tools/proof-layout.mjs items/def-coefficientwise-weighted-backward-error-for-matrix-polynomial.md items/thm-exact-coefficientwise-weighted-backward-error.md`: 2 items, 4 steps, 0 defects.
- Defect-ledger append accepted exactly the two closed fatal citation rows and refreshed its generated view.

The task-named decisions file contains exactly `refuter:22:1` and `refuter:22:2`, both route `flagged`, each with one closed ledger row and `repair_confidence: 1`. No extra touched/page/reader decision was invented for audit enrichment. Both pre/post snapshots have identical hash maps and page hash maps. The engine still owns current decision hashing and the subsequent gate battery; these local checks are not proof certification. No outstanding mathematical blocker or owner decision remains in this dispatch.

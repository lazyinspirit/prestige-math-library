# Batch 12 Step 3a adjudication

Run: numerical-optimization-dynamics-2026-10-16. Group: batch-12.

Scope: three touched obligations; no reader, refuter, or page obligations. Review follows the generated item order. Reader and refuter reports are evidence only.

## Level 1: central-difference remainder

Reviewed the current lemma, all six direct dependencies, and the full Taylor Schlömilch–Roche supplier. Degree-four Taylor expansions have endpoint remainders bounded by M5 h^5/120, so symmetric subtraction and division by positive 2h give the claimed M5 h^4/120 and fixed coefficient f'''(x)/6. Reflected endpoints and M5=0 are covered. Risk review complete; no defect and no decision owed.

## Level 1: complex-step theorem

Read all four proof steps and twelve direct suppliers, including the full CR, smoothness, Cauchy higher-derivative, and holomorphic-derivative arguments. For g(t)=Im f(x+it), the successive derivatives are Re f', -Im f'', and -Re f'''. Reality on a real neighborhood gives g(0)=g''(0)=0 and g'(0)=f'(x). Real Taylor on [0,h] proves the exact constant; the component perturbation adds delta_im/h. Openness, endpoint smoothness, zero constants and the holomorphy restriction are adequate. Higham formula (*) and its real-axis deduction corroborate the hypotheses. Risk review complete; no defect and no decision owed.

## Level 1: vector-product bounds

Read all seven steps and twelve direct suppliers, together with the Jacobian, Hessian and Ck conventions used by the estimator definition. Coordinate Taylor bounds aggregate by nonnegative squaring; mixed-partial symmetry identifies the Hessian product. Positive h and dimensions, v=0, zero derivative bounds, and independent per-call errors at a repeated point are consistent. Bilinearity gives the exact covariance numerator and the central denominator 4h^2. The existing covariance lemma step 1.1 proves square-integrability implies integrability by total mass one and 2|X|<=1+X^2; identity Borel functions then license factorization. Reader F9 explicitly records this already immediate inference.

Decision touched:12:thm-jacobian-and-hessian-vector-products-have-truncation-and-noise-bounds: reviewed_no_defect, change_kind audit_enrichment, defect_ids []. Exact preimage: research/numerical-optimization-dynamics-2026-10-16-owner-boundary-integration-intake/integration-current-sources/thm-jacobian-and-hessian-vector-products-have-truncation-and-noise-bounds.md, matching pre hash 4d419685b13fdd72f3c123f94b0ca310a388337aa5229613d6a85ee1e1e0161c. At intake its raw hash equaled reader-post e09171492f9374344aea050e8bcae8d17687ea99cd8ceffe4035176503d3f308. The reader delta is F9 and its use in step 1.3. The focused contract check rejected the new F9 source_section Proof, which is outside the allowed schema. Alpha made F9 self-contained by writing 2 E|X|<=1+E[X^2]<infinity and removed that invalid contract citation; F6 retains the supplier reference. This mechanical reconciliation changes no mathematical conclusion and creates no defect row. Risk review complete.

## Level 1: sparse recovery

Read all three steps and five direct dependencies. A safe pattern removes outside terms, and proper coloring leaves at most one matching column per row. Empty supports and unused colors give zero; singleton supports recover their entry even when it is zero. The collision witness (1,2) versus (3,0) has the same seed product 3 and satisfies the same overestimated safe pattern. No choice axiom is used. Bell–Kristensen §2.5, printed p.8 (PDF index 7), confirms the compression/coloring context; the UNT Coleman–Moré archive did not open. Local algebra suffices independently of that unavailable source. Risk review complete; no defect and no decision owed.

## Level 2: optimal steps

Read all five steps, the complete scalar error theorem (and its already reviewed suppliers), and the square/cube-root theorems. The normalized nonnegative differences (r-1)^2/r and (r-1)^2(r+2)/r prove unique global minima; the explicit two-point differences prove strict decrease below each minimizer. Both cap branches, equality at the cap, all zero-constant cases, and the unattained infimum at h=0 are covered. This optimizes the displayed conservative central bound with 2delta/h, not the sharper possible bound or actual error. Risk review complete; no defect and no decision owed.

## Level 2: modulus counterexample

Accepted the reader repair with repair_confidence 1. The exact pre-reader archive is research/numerical-optimization-dynamics-2026-10-16-owner-step1-gate-r1-binding-before/items/cex-complex-step-absolute-value-returns-the-wrong-derivative.md (pre raw hash 2b4b5e80e786f71d2052dbde32a03d0b1e1bcef015134d455e410676da0ae18b). Current raw hash equals post 52ebcab63cc7101fc7db71d7dd9123037a7febb2d99f1a984557d2d4391e436e. The original C_h notation was outside its declared holomorphic domain: this is a real typing defect, not a refutation of the holomorphic theorem. The repair correctly formulates an unrestricted quotient claim and exhibits U=C, I=(0,2), x=1, arbitrary h>0 with real derivative 1 and quotient 0. Distinct real/imaginary directional limits prove nonholomorphy; all three direct suppliers were reviewed. Closed defect nod-b12-3a-complex-quotient-domain records the accepted correction. Manifest title synchronized to the corrected title; no source rewrite or judge stamp.

Consumer scan over all items and library files found only the owning B-page placement. Its prose about nonholomorphic absolute value remains accurate, so no consumer edit or outside alert is required. Risk review complete.

## Level 3: Richardson theorem

Accepted the reader repair with repair_confidence 1. The exact pre-reader archive is research/numerical-optimization-dynamics-2026-10-16-owner-step1-gate-r1-binding-before/items/thm-richardson-extrapolation-has-fourth-order-error-bound.md (831f74627cf2f428b29989f2ce55ba98b2d612a848c18d2ac181422c1d9c5d0a). Current raw hash equals post e4f94bed8b678dd4277a027de20ac8a81a9e0b9bcfc3be981a452b7453fc5a13. The reader defines the previously implicit hatted estimate by substituting the four inexact values and cites this in step 4.1. This is a nonfatal notation omission, now fully resolved as nod-b12-3a-richardson-inexact-notation.

Independently read all four steps and six direct suppliers. The fixed c2 cancels; the residual factor is (4/16+1)/3=5/12, hence M5/288 in the C5 specialization. The four perturbation weights have absolute sum 3/h. M=0, zero noise, positive h and both inner/outer stencil endpoints are covered. The actual uniform fourth-order remainder hypothesis is essential and is stated. Full item/library reference scan finds no item consumer; the owning A-page summary remains correct and needs no edit.

## Sources and scope limits

All direct local dependencies of the seven ordered subjects were opened; relevant proofs were read, including the reflected Taylor remainder, CR/higher-derivative/smoothness arguments, line restriction and mixed-partial symmetry, Euclidean norms, covariance and independence factorization, finite sums, and square/cube-root existence. Source sections are the exact Statement/Definition/Proof locations recorded in the batch proof contracts. This is an item-local and used-interface review, not a whole transitive-library audit.

External checks: [FNC finite differences](https://fncbook.github.io/v1.0/localapprox/finitediffs.html), equations (132), (135) and centered-weight Table 2; [Higham](https://nhigham.com/2020/10/06/what-is-the-complex-step-approximation/), formula (*) and the subsequent real-axis deduction; [Bell–Kristensen](https://arxiv.org/pdf/2111.05207), §2.5, printed p.8. The [Buttenschoen notes](https://www.buttenschoen.ca/MATH551/numerical-differentiation/), Proposition 1, have a sign inconsistency between the stated signed error and their own Taylor derivation; the library's absolute bound is independently proved and does not inherit it. The Coleman–Moré UNT URL failed to open; no missing proof step was filled from it. No unresolved mathematical uncertainty or defective published library item was found in the used interfaces.

## Validation and handoff

Before Alpha edits all three touched sources equaled their immutable reader-post raw hashes. The counterexample and Richardson sources remain byte-identical to reader-post; Alpha only makes vector-theorem F9 self-contained to remove an invalid contract source-section citation. Other changes are the six mandatory contract risk reviews, the corrected manifest title, the report/decisions, defect-ledger closures, and the owned-consumer frontier note. Stable IDs and existing withdrawal records are preserved; no withdrawal or outside consumer repair is proposed. Current vector-theorem raw SHA-256 after the F9 reconciliation: caf6925a402be27ba0f5609e1722a85ea6b4889394e21d67430a1c6b4f038cc4. No Statement or Definition was changed by Alpha, and no prior judge record was present to invalidate.

Completed local checks:

- Initial risk-report without --require-reviewed identified six required reviews; final risk-report with --require-reviewed reports 0 errors, 11 routed items, with all six required reviews complete.
- proof-contract.mjs on the seven ordered subjects with --strict --items: 7/7 checked, 0 errors and 0 warnings after the F9 reconciliation. The initial invalid Proof-section row was a mechanical failure and has no defect-ledger row.
- reflow.mts on the Alpha-edited vector theorem: unchanged.
- precheck.mts on all three touched paths: 3 checked, 0 failing.
- rendercheck.mjs on all three touched paths: 3 files, valid YAML and KaTeX.
- Final proof-layout.mjs after the last item edit and reflow, batching all three touched paths: 3 items, 14 steps, 0 defects.
- Exact obligation comparison: precisely the three touched obligations, with no extra decisions. Two accepted repairs each reference one closed defect row; the audit-enrichment decision references none. Both unchanged touched sources still match reader-post; the sole Alpha source delta is explicitly recorded above.

No blockers, escalations, or defective published-item findings. No judge, stamp, dispatch, full gate battery, commit, publication or push was performed. Engine hash stamping and the gate battery remain engine-owned.


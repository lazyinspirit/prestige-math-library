# Batch 81 Step 3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`; group: `batch-81`. Work is limited to the dispatch. No agents, judges, stamps, transitions, or publication actions are initiated.

## Level 0 review

- `def-logarithmic-norm-for-complex-matrices`: full definition and discharge proof checked; n>=1, conjugate-transpose convention, real largest eigenvalue and attained Rayleigh maximum are sound.
- `def-phi-functions-by-everywhere-convergent-series`: full definition and convergence proof checked; k>=0, zero input and empty matrix cases hold. The exponential majorant and finite-dimensional completeness justify the full domain.
- `lem-matrix-action-defect-variation-of-constants`: accepted reader repair. Current raw bytes equal the post-reader item hash; the pre/post hashes differ. Step 3.1 now supplies continuous-coordinate integrability, treats t=0 directly, and applies the FTC on nondegenerate intervals with the correct orientation for negative time. All four steps are sound; C1 and one-sided endpoint hypotheses suffice. This is a nonfatal explicit-premise/boundary clarification, rather than a false identity. The Statement is unchanged.

Risk reviews for these three items are complete in the owned proof contract. Exact local suppliers checked include finite-dimensional completeness, bounded-operator exponential, vector FTC clause 1, coordinate derivative/integral (including orientation/linearity), continuous-implies-integrable, real coordinates of C, standard coordinate inner products, matrix-space/product/identity, finite-dimensional operator norm, adjoint and spectral-theorem interfaces.

Sources opened: Higham, https://nhigham.com/2022/01/18/what-is-the-logarithmic-norm/, Theorems 3 and 6 with proofs; Al-Mohy and Higham, https://eprints.maths.manchester.ac.uk/1536/3/paper16.pdf, Section 2, (2.2), (2.5), Theorem 2.1 and its complete proof. The local defect proof is independently derived; the source supplies context.

Next: review level 1 algorithms and lemmas, then level 2 and higher in the generated order; adjudicate the routed page summary separately.

## Level 1 review

The full scaled Taylor procedure and certification provider definition were reviewed. Finite search/tie-breaking and zero/p=0 branches are specified; successful certificates require sound input bounds and local provider bounds. The variational logarithmic-norm proof correctly uses the first-variable-linear inner product and a finite nonempty eigenbasis. Phi convergence follows from factorial/exponential majorants and completeness, with n=0 split off. All three risk reviews are complete. Published submultiplicativity, real exponential definition and infinite-radius statements were checked exactly. No item edits or new defects at this level. Next: exponential growth, augmented identity and Taylor certificate proofs.

## Level 2 review

The four-step growth proof uses a squared norm and positive integrating factor, so it never divides by a possibly zero trajectory norm; MVT is used only on nondegenerate positive-time intervals. Replacing A by -A gives the stated negative-time bound. The augmented identity follows from the explicitly checked last-column powers, for k>=1, with n=0 and zero input covered; the recurrence covers k>=0. The seven-step Taylor proof correctly propagates local term/sum errors, telescopes the truncation error, and counts sp calls (p=0 included). R=0 is a zero tail, and 1-R/(p+2)>=1/2. All three risk reviews are complete; no item edits or new defects. Next: Arnoldi residual and examples.

## Level 3 review

The complete Arnoldi error proof and procedure were read against the published Arnoldi definition/factorization and Cauchy–Schwarz statements. The relation certificate is assumed rather than inferred, computed V need not be orthonormal, negative time has the correct kernel sign/orientation, and initial/reduced/projection errors are explicit. Exact happy-breakdown invariance is derived from the recurrence; it does not misuse the no-breakdown supplier. The zero phi-one example is the direct nilpotent 2x2 computation. Both required risk reviews are complete. No new defects. Next: exact level 4 example computations and reader repairs.

Additional sources read: Higham and Lin, https://eprints.maths.manchester.ac.uk/2067/01/covered/MIMS_ep2013_73.pdf, Section 3.1 (power-series convention), Section 7.1 and Section 7.4; Niesen and Wright, https://arxiv.org/pdf/0907.4631, Section 3.1, equations (5)–(6) and the surrounding projection/augmentation derivation. Al-Mohy and Higham Lemma 4.1 and proof concern a specific floating-point mixed error model; the abstract provider contract here does not claim that lemma validates a particular kernel.

## Level 4 review

`ex-nonnormal-transient-action-certificate`: accepted reader repair. Exact computation gives H1=-1, h21=3, e^A=e^{-1}(I+N), error 3/e, action norm sqrt(10)/e>1, mu2=1/2, and weighted bound 2e^{1/2}(1-e^{-3/2}). The exact residual integrand is constant (3/e)e1. The added continuity/integrability premise applies to both scalar and vector integrands on [0,1].

`ex-stiff-diagonal-arnoldi-action`: accepted reader repair. Direct calculation gives H1=-101/2, h21=99/2, projection e^{-101/20}(1,1), and exact action (e^{-10},e^{-1/10}); the residual certificate is sqrt(2)e^{-1/10}(1-e^{-99/20}). The added integrability premise applies on [0,1/10] before the FTC.

For both items current raw hashes equal the reader-post hashes and differ from pre-reader; Statements and exact arithmetic conventions are unchanged. The added premise is an immediately supplied continuity consequence, so these are nonfatal proof clarifications, accepted with repair_confidence 1. Both risk reviews are complete. The defect lemma contract also received two surgical boundary-locator corrections from step 2.1 to current step 3.1 (metadata only); no mathematical carrier was changed. All 13 HIGH/CRITICAL reviews are now complete.

## Carrier reconciliation

Final verdict for each of the three touched obligations is **amended_repair**, with repair_confidence 1: their mathematical reader repairs are accepted unchanged, while Alpha reconciled each manifest dependency list and missing contract supplier-interface row for `thm-continuous-implies-integrable`. The defect-lemma contract also corrects its zero/endpoints step locator to 3.1. Thus final combined carriers differ from both frozen pre and post carriers; item bytes still exactly match reader-post. No provenance change or judge-stamp invalidation is needed because no item text or mathematical argument was rewritten.

The five required page summaries were read. Batch 34 and batch 68 are context interfaces, not item-level premises for these proofs. The owned batch dependency input retains all five rows and clarifies the limited page-context review. No published carrier defect or outside affected consumer was found. No Statements/Definitions changed, so no new consumer repair cascade arises.

## Page finding

`refuter:81:1`, `matrix-exponential-and-phi-function-actions`, summary paragraph 1: **false_positive**. False positive after independent current page, series definition, augmented theorem and Arnoldi algorithm review. For k>=1 the theorem gives phi_k(X)w as the top n coordinates of exp(B_k(X,w))(0,e_k). For k=0 let C=diag(X,0)=B_1(X,0). Its powers have top-left block X^j (including C^0), hence the absolutely convergent series gives exp(C)=diag(exp(X),1), and the top n entries of exp(C)(w,0) equal exp(X)w=phi_0(X)w. This also holds for X=0 and for n=0. Alternatively recurrence gives phi_0(X)w=w+phi_1(X)(Xw), obtainable from the theorem with B_1(X,Xw). No B_0 is needed. Thus the page claim that each phi action can be obtained from one augmented exponential is sound; the algorithm is free to evaluate k=0 directly. No page edit is warranted.

The page and theorem are unchanged. This is an independently justified current mathematical disposition, not a historical-byte inference. There is no unbound observation or missing-preimage resolution involved. The closed false-positive ledger row retains the original fatal allegation without confirming it.

## Decisions and defect rows

Exactly four obligations are owed and decided: the three touched items above receive amended_repair (mathematical reader changes retained, manifest/contract reconciliation completed), and the single refuter finding receives false_positive. Each has one corresponding closed ledger row; no row is created for a mechanical failure. No reader findings or separate touched-page obligations are owed. No escalation, withdrawal, substantial missing prerequisite or defective published supplier was found.

## Checks and limitations

The initial risk-report command ran successfully and routed 13 HIGH/CRITICAL items among 15 owned items. The live autopilot status was read from `.autopilot/numerical-optimization-dynamics-2026-10-16`; the engine remains responsible for transitions. The required dependency-ledger refresh was attempted but exited 1 on an unrelated YAML invalid escape `\k` in a quoted Feller-condition description (reported line 32, column 76, without a file path). No unrelated carrier was edited. The owned batch-81 dependency input is updated and awaits the owner/engine merge after that parse failure is resolved. This mechanical failure has no defect-ledger row and does not change the mathematical verdicts. Final scoped checks are recorded below.

## Final local validation

- `node tools/risk-report.mjs research/numerical-optimization-dynamics-2026-10-16-batch-81.proof-contracts.json --require-reviewed`: exit 0, 15 items routed, all 13 HIGH/CRITICAL reviews complete, 0 errors.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-matrix-action-defect-variation-of-constants.md items/ex-nonnormal-transient-action-certificate.md items/ex-stiff-diagonal-arnoldi-action.md`: exit 0, 3 checked, 0 failing, no automatic repair proposed.
- `node tools/rendercheck.mjs` on those same three items and both assigned pages with `--quiet`: exit 0, 5 files, YAML and every math span parse successfully.
- Final `node tools/proof-layout.mjs items/lem-matrix-action-defect-variation-of-constants.md items/ex-nonnormal-transient-action-certificate.md items/ex-stiff-diagonal-arnoldi-action.md`: exit 0, 3 items, 10 steps, 0 defects. No item edits or formatter ran afterward.
- Focused artifact consistency check: exactly the four scoped obligations; four matching closed ledger rows; all three item hashes still equal reader-post; all three manifest dependency lists match current item deps; all three contract interfaces include the added integrability supplier; all 13 required risk reviews complete.
- `node tools/defect-ledger.mjs append --file /tmp/nod-b81-defect-rows.json`: exit 0, four rows appended and canonical generated view refreshed. Three nonfatal confirmed proof clarifications are fixed; the page allegation is closed as false-positive.

No item or page source was edited by this adjudication. The final handoff consists of the task-named report and decisions plus the owned contract/manifest/dependency-input reconciliation and required ledger entries. No engine decision hashing, gate battery, judge cycle, stamping, publication, commit or stage transition was performed. The only outstanding operational issue is the failed unified dependency refresh on unrelated malformed YAML; the engine/owner must resolve that input and merge the owned batch dependency rows. There is no open mathematical blocker in batch 81.

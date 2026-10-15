# Step 3a reader report — batch 62

Run: `statistical-models-experiments-62`  
Role: reader  
Date: 2026-10-15

## Opened inventory

- Assigned A page: `two-stage-conditional-error-adaptation`.
- Assigned B page: `two-stage-conditional-error-adaptation-examples`.
- Assigned items, read in dependency order: `lem-selected-sample-size-conditionally-superuniform-pvalue`, `thm-conditional-error-budget-two-stage-adaptation`, `cor-conditionally-superuniform-stage-two-pvalue`, and `ex-two-stage-conditional-error-sample-size-and-weight-adaptation`.
- Declared published dependencies opened: `def-measure`, `def-probability-measure`, `def-axiom-of-choice`, `def-p-value`, `def-conditional-expectation-as-an-ae-class`, `cor-expectation-of-an-indicator-is-probability`, `thm-basic-algebra-and-order-properties-of-conditional-expectation`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `thm-tower-property-of-conditional-expectation`, `thm-taking-out-what-is-known`, `thm-conditional-monotone-convergence`, and `lem-conditioning-a-known-variable-and-an-independent-variable`.
- Reviewed the four assigned proof contracts, batch scope/dependency records, and the direct dependencies' relevant interfaces and proof sections. The declared dependencies are published carriers; I found no additional supplier needed for the assigned arguments.

## Review and edits

The selected-size lemma is valid: the countable partition by `D_m` gives the event-integral inequality for every interim event, and the positive-measure superlevel-set argument proves the conditional bound for each fixed threshold. The conditional-error budget theorem is valid by the tower property, order preservation, and the indicator expectation identity.

In the stage-2 p-value corollary, the dyadic construction used `A_n=2^{-n}ceil(2^n A)` and its level-set formula as though a conditional-expectation version were pointwise in `[0,1]`. The preceding theorem gives that bound almost surely. I repaired the corollary by choosing an `[0,1]`-valued representative, proving that clipping on the measurable null exceptional set preserves the class and changes the rejection event only on a null set. I updated step 1.1 of the batch proof contract to match.

The example's finite model and normal calculation are sound. I made its statement specify the critical value `c>0`, the equal-weight rejection rule, and `alpha = integral_c^infinity phi(t) dt`, matching the calculation in Verification step 1.2.

I corrected the J-STAGE PDF page locators in all four assigned items. The cited printed pages S34–S35 are PDF pages 2–3, and printed S40–S41 are PDF pages 8–9: the first PDF page is printed S33. The verified source passages are:

- Sugiura and Uesaka, “Theoretical Basis of Adaptive Designs for Clinical Trials in Phase II and III,” §2, printed S34–S35 (PDF pp. 2–3), on use of distinct stage-2 participants; §5.1.2, printed S40 (PDF p. 8), which says the prespecified second-stage size must be used for sample-size weights and reports inflation to 0.1146 for a nominal one-sided 0.05 test when the recalculated size is substituted; and §5.1.3, printed S40–S41 (PDF pp. 8–9), integrating the conditional-error function over the interim null law. Official J-STAGE article: https://www.jstage.jst.go.jp/article/jjb/29/Special_Issue_1/29_Special_Issue_1_S33/_article/-char/en . The corresponding official PDF reviewed was https://www.jstage.jst.go.jp/article/jjb/29/Special_Issue_1/29_Special_Issue_1_S33/_pdf/-char/ja .
- Minas, *Multivariate Global Testing and Adaptive Designs*, Chapter 5 §5.4.1, printed pp. 74–75 (PDF pp. 95–96), defines conditional invariance through the conditional null law of the second-stage p-value; §5.4.2, printed pp. 77–78 (PDF pp. 98–99), defines conditional error as the conditional rejection probability and gives the `p2 <= A` rejection rule and type-I bound. Official Warwick repository PDF: https://wrap.warwick.ac.uk/id/eprint/58321/7/WRAP_THESIS_Minas_2013.pdf .

## Uneditable finding

The published dependency `lem-conditioning-a-known-variable-and-an-independent-variable`, Proof step 1.2, extends the independence identity to arbitrary nonnegative Borel `h` while allowing infinite expectations. If `P(A)=0` and `E[h(X)]=infinity`, the displayed product `P(A)E[h(X)]` is the undefined `0 * infinity`. This extension is not needed for the lemma's step 2.1, which uses only `h(t)=t+` and `h(t)=t-`; these are integrable because `X` is in `L1`. The dependency conclusion and its use in the example remain justified. To repair the intermediate statement, restrict it to integrable `h` or separate the null-event case and avoid the undefined product. This is recorded as a nonfatal published-dependency finding for consumer `ex-two-stage-conditional-error-sample-size-and-weight-adaptation`.

## Page verdicts

- `two-stage-conditional-error-adaptation` (A): pass after the corollary repair. The page summary accurately states the single-null-law conditional-error argument, countable selected-size stratification, fixed-threshold conditional superuniformity, and scope limits.
- `two-stage-conditional-error-adaptation-examples` (B): pass. The finite model attains its `1/2` budget under calibrated selection, and the independent-normal calculation gives size `3 alpha/2` under the stated interim-selected unit-norm weights.

## Validation and blocker

Reflow and precheck passed for all four changed items. The final batched proof-layout check reported `4 items, 10 steps, 0 defects`. No blocker remains for this reader assignment.

Coverage limitation: the item's exact J-STAGE `char/en` PDF endpoint was inaccessible through the web tool. I checked the claims and page numbering against the official article page and the official J-STAGE `char/ja` PDF of the same article. The full transitive proofs behind the published foundational dependencies were not re-audited; their relevant interfaces and direct proof sections were reviewed.

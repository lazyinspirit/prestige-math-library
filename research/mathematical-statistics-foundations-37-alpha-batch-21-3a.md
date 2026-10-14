# Batch 21 Step 3a adjudication

Run: `mathematical-statistics-foundations-37`; group: `batch-21`.

Scope owes only `refuter:21:1`; no touched, page, or reader decisions. Frozen pre/post item, contract and manifest hashes agree for all seven items; the reader made no edits. Review proceeds in generated dependency order.

## Completed level 3 review

`thm-first-and-second-order-delta-method-for-random-vectors`: reviewed current full proof and its five actual direct suppliers. Bounds in steps 3.1–3.2 control the remainders by epsilon/M and epsilon/M²; expansions imply zero remainder at h=0. Borel measurability, positive rates/dimensions, varying probability spaces, degenerate limits and the zero-gradient branch are valid. Slutsky applies to same-index composites. No AC or missing premise. Complete risk review recorded in the batch contract.

Sources read: [Bartlett Lecture 16](https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/16notes.pdf), pp. 9–12; [Duchi Lecture 2](https://web.stanford.edu/class/stats300b/ScribeNotes/2021/lecture-02.pdf), Theorems 3–4 and proofs, pp. 2–3. The vector Peano extension is justified by the local argument.

Initial risk-report: exit 0, seven items, four HIGH/CRITICAL subjects. Next: level-4 continuity counterexample, then sample-variance finding.

## Completed level 4 continuity review

`cex-continuity-alone-does-not-give-delta-method`: exact two-point verification proves the constant-one transformed law differs from every scalar linear image, including a=0. Continuity and failure of differentiability at zero are correct; no choice assumption. Supplier reviewed above. Complete risk review recorded; no edit or owed decision. Next: sample-variance citation and current proof.

## Completed level 4 sample-variance review

`refuter:21:1` (`ex-sample-variance-delta-method`), route `flagged`: confirmed_fatal, citation-inaccurate. Current raw source before repair is `5d52931411e8b8363621a46d722b5b3e2104b01671db3504a18cabc3c766b1ab`, exactly the frozen post-reader item hash. The sorted-key SHA-256 of its frozen item/contract/manifest fingerprint is `1478bd7a356ad8f60f122815509f5ca30fd93bc5183aed23721ee3f5b990a813`, matching the routed observed composite hash; no historical uncertainty. Duchi p. 3, Example 2 gives correct setup/covariance but an incorrect final uncentered variance. For Bernoulli(1/4), the printed expression is 3/16, whereas the variance of the centered-square influence is 3/64. Equal masses at 0 and 2 provide the contract’s independent degenerate check: correct variance zero, printed variance four.

All seven direct suppliers and all three local proof steps were read. Borel transformation of iid X into (X,X²), fourth-moment integrability, AC-dependent multivariate CLT, derivative (-2μ₁,1), projected Gaussian covariance, and the centered-fourth-moment expansion justify the general formula, including singular/zero variance. Citation title now specifies setup/covariance and correction of the printed conclusion; a short Remarks paragraph distinguishes the source error from the correct local proof. Synchronized source metadata in the manifest; existing provenance remains ai-altered, contract derivations remain accurate, and complete risk review records the correction. No Statement/Definition change or downstream repair is needed. Repair confidence: 1. Closed defect row and decision are recorded below. Next: level-5 Z-estimator review.

## Completed level 5 Z-estimator review

`thm-z-estimator-asymptotic-linearity-and-normality`: full current proof and its twelve actual suppliers independently reviewed (previously read common suppliers retained as context). Consistency plus the precise measurable neighborhood-supremum condition gives the random-index process replacement. The residual equation and mean expansion give the linear equation; setting the remainder ratio to zero at h=0 is justified by Ψ(θ₀)=0. Absorption using the finite norm of V⁻¹ establishes the root-n rate before the small-times-bounded remainder argument. The negative inverse derivative has covariance V⁻¹ΣV⁻ᵀ, including singular Σ. Joint score measurability, data-measurable estimators, explicitly measurable suprema, finite score second moment, and declared AC meet supplier conditions. No missing existence/uniqueness assertion, endpoint problem, converse assertion or unproved consistency is used. Complete risk review recorded; no edit or owed decision.

Read [van der Vaart, Semiparametric Statistics](https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf), §6.5 Theorem 6.19 and full proof plus relaxation remark, PDF pp. 73–74. Its Donsker and L²-continuity assumptions yield the empirical-process replacement; this carrier instead imposes the direct measurable local process condition and proves replacement itself. Bartlett p. 13 provides scalar classical context; the local proof does not import that slide’s derivative assertions.

## Disposition and local checks

Exactly one decision: `refuter:21:1`, route `flagged`, confirmed_fatal, repaired citation with confidence 1, closed ledger row `msf37-batch21-3a-sample-variance-citation`. No proof or statement was rewritten; no prior judge record exists in the edited item. Reader findings and touched/page obligations remain empty. Current citation qualification and source note preserve the complete content contract and manifest claim. No published item defect, outside consumer repair, proposed withdrawal or mathematical blocker was identified.

Local checks completed: reflow reported unchanged; one-item precheck passed (1 checked, 0 failures); one-item rendercheck passed actual YAML/KaTeX parsing; strict batch proof-contract check passed 7/7 items with zero errors/warnings. These are local checks, not judging or engine gates. Final reviewed risk-report passed (seven items, zero errors; all four HIGH/CRITICAL risk reviews complete). Final `node tools/proof-layout.mjs items/ex-sample-variance-delta-method.md` passed: one item, three steps, zero defects. The owned dependency input was updated for the current measurable-composite supplier hypothesis and `node tools/frontier-dependency-ledger.mjs refresh --run mathematical-statistics-foundations-37` passed.

Coverage: four routed risk subjects and their exact direct supplier content were independently read. Ordinary untouched/unflagged examples have no adjudication obligation; no unrelated transitive audit was claimed.

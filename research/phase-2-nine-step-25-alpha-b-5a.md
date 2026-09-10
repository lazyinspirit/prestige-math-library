# Group b — batch 2 authored-content review

Dispatch: phase-2-catchup-24, 6b-b-2; only batch 2. Local mathematical review; no stamps or engine transitions.

## Completed item: lem-two-signs-detect-an-operator-increment

Accepted. In items/lem-two-signs-detect-an-operator-increment.md, steps 1.1–2.1 give T(x+u)-T(x-u)=2Tu and apply absolute homogeneity and the triangle inequality. The dependency def-bounded-linear-operator supplies linearity and both-field norm conventions. No normalization, completeness or selection is involved; u=0, zero operators/spaces and equal image norms are included. Read Sokal, https://staff.fnwi.uva.nl/r.p.stevenson/1005.1585.pdf, printed p.2, equation (2) and complete following proof: the two-sign estimate has precisely this hypothesis and conclusion. No repair or defect row. Local validation pending the owned batch checks. Next: finish theorem dependency and risk review.

## Completed item: thm-sequential-uniform-boundedness-under-countable-choice

Accepted. Exact claim: ZF + AC_omega, given zero-indexed sequence of bounded linear maps from Banach X to normed Y over R or C, pointwise boundedness implies a common finite operator-norm bound. Steps 1.1–11.1 are complete: unit-ball rescaling, least threshold indices (not necessarily increasing), nonempty independent E_n, one AC_omega selection, total deterministic recursion with +1 ties, finite geometric tail, one Banach limit, and the lower bound (4/3)^n/6. The coefficient 2/3-1/2=1/6 is positive; choosing n>18M_x contradicts the original orbit bound. Zero spaces and zero vectors precede normalization. No completeness of Y, Baire, Hahn–Banach, DC or full AC enters.

Dependency statements read on disk: cor-cauchy-reals-lub-complete, def-operator-norm, def-banach-space, def-countable-choice (only its defining indexed clause), thm-well-ordering-principle, thm-recursion, thm-induction-principle, def-finite-sum, lem-finite-sum-laws, def-integer-power, lem-power-laws, thm-of-archimedean, cor-archimedean-reciprocal, and the preceding local lemma. Checked the current real-completeness proof's deterministic rational approximation underlying LUB; it uses no choice. Complete source proof read: Sokal printed p.2 equation (2) and following proof at the URL above. MIT notes Theorem 36, printed p.17, states the same sequential Banach-to-normed implication; its Baire proof is not consumed. The local independent-vector/sign refinement is correctly identified as an adaptation. Owning contract now contains the specific complete risk_review. No repair, new supplier, shared-plan amendment or unresolved obligation. Next: finish coordinate example dependency/source check.

## Completed item: ex-sequential-uniform-boundedness-for-coordinate-partial-sums

Accepted. Exact claim and convention: zero-indexed c_0(R) or c_0(C), P_N retains coordinates 0 through N, norm one for every N including zero, norm convergence for every input, and choice-free Banach completeness. Read every verification step and the full contract. The scalar tail-infimum construction traps its supremum within eta of every sufficiently late term; complex coordinates transfer Cauchyness and convergence. Unique scalar limits permit Replacement on ordered pairs (j,x_j). The uniform Cauchy bound first establishes boundedness, making later suprema legitimate, then gives convergence; approximation by a single null sequence proves the limit null. The norm witness e_0 and exact tail error include P_0 and finite-support inputs. Only optional step 6.1 assumes AC_omega.

Dependencies checked: the preceding theorem; def-c-zero-and-ell-infinity; cor-cauchy-reals-lub-complete; def-banach-space; def-bounded-linear-operator; def-operator-norm; def-linear-combination-and-span (finite vector sum recursion); rem-real-and-complex-normed-space-convention; lem-complex-conjugation-and-modulus-laws; def-axiom-schema-of-replacement (unique-image instance). Source: MIT https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf, printed pp.5–6, Definition 14 and complete Theorem 16 proof through the c_0 exercise. It supplies the uniform-Cauchy method; the local text actually proves the exercise and projection claims. Contract risk_review completed. No defect or outstanding mathematical obligation. Next: record counterexample review.

## Completed item: cex-sequential-uniform-boundedness-needs-a-complete-domain

Accepted. Exact witness: c_00(K) with supremum norm, K=R or C, zero-indexed T_nx=nx_n. Reviewed every counterexample step and contract. The cutoff definition forms a subspace; finite support equivalence uses a finite list and the valid new index r at length r+1. Bounds include empty support. T_n has exact norm n (T_0=0 separately), whereas each orbit vanishes from a cutoff and is bounded by M||x||. For M>N, reciprocal truncations have distance exactly 1/(N+2), attained at N+1. The reciprocal Archimedean result makes them Cauchy; coordinate domination forces any proposed limit to have nonzero coordinate 1/(j+1) for every j, contradicting its cutoff. No choice is used and no choice-failure assertion is made.

Dependencies checked: def-c-zero-and-ell-infinity; def-normed-subspace; def-bounded-linear-operator; def-operator-norm; def-banach-space; cor-cauchy-reals-lub-complete; thm-of-archimedean; cor-archimedean-reciprocal; def-countable; def-nat-order; lem-nat-trichotomy; thm-induction-principle; thm-subset-of-a-finite-set clause 1; rem-real-and-complex-normed-space-convention; lem-complex-conjugation-and-modulus-laws. MIT printed pp.5–6 at the preceding URL gives the completeness setting; the exact counterexample is correctly marked library-generated. Contract risk_review completed. No defect, repair or unresolved obligation. Next: page decisions and owned local checks.

## Page decisions

Accepted `sequential-uniform-boundedness-with-countable-choice`: the current A page orders the lemma before the theorem and states exactly its AC_omega, Banach-domain, normed-codomain and both-field scope. Its description of independent selection, deterministic signs and geometric Cauchy tail is justified by the authored proof. Companion orientation matches the examples.

Accepted `sequential-uniform-boundedness-with-countable-choice-examples`: the B page's exact norm-one/convergence and choice-free coordinate completeness claims agree with its first item; AC_omega is restricted to the optional theorem application. Its second paragraph accurately describes the nx_n operators and reciprocal-truncation incompleteness witness. No additional claim needs repair.

## Sources, dependency records and amendments

Also read Teschl, https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf, §4.1 printed pp.102–103, Theorem 4.3 through Corollary 4.4. Corollary 4.4 asserts that a pointwise bounded family of bounded operators from Banach X to normed Y is uniformly bounded. Only its statement is comparison evidence; the owned proof supplies its own sequence and choice analysis. PDF screenshots returned cache-miss errors; complete relevant extracted-text passages were retrieved and read successfully, so this leaves no source blocker. No image-dependent mathematical claim was used.

Manifest arrays match all four authored dependency arrays. Checked current other-batch inventories: no owned item dependency or page prerequisite targets another batch. The owned frontier input `research/phase-2-catchup-24-batch-2.cross-batch-dependencies.json` correctly remains `[]`; neither it nor any dependency was changed, so no refresh was needed. Local supplier chains are lemma → theorem → optional example application. All remaining direct suppliers are earlier published items. Current published operator-norm and c_0 definitions explicitly establish supremum existence; their earlier debt is not a current defect. No new published defect was found in the used clauses; no published-ledger edit or classification change is required. This is not a census or a whole-transitive audit.

No content repairs, new definitions/lemmas, withdrawals, missing prerequisites, shared-plan amendments or Phase-2 amendments. No unresolved escalations or source/understanding blockers. No concrete workflow defect found; sound acceptances have empty defect_ids. Changes are limited to the group report, six authored decisions, and three owning-contract risk_review records. Existing independent reviews and engine gates remain intact.

## Local checks and handoff

All checks below ran on the current owned files and passed:

- `node tools/proof-contract.mjs research/phase-2-catchup-24-batch-2.proof-contracts.json --strict`: 4/4, zero errors or warnings.
- `node tools/risk-report.mjs research/phase-2-catchup-24-batch-2.proof-contracts.json --require-reviewed`: zero errors; all three CRITICAL items have specific complete reviews, lemma ORDINARY.
- `node tools/content-policy.mjs research/phase-2-catchup-24-batch-2.pages.json`: four scoped items, zero errors or warnings.
- `node tools/tsx-run.mjs tools/precheck.mts` with the four explicit owned item paths: 4 checked, 0 failing.
- `node tools/rendercheck.mjs` with the four owned items and two owned pages: six files pass KaTeX, delimiter, wikilink and YAML checks.
- Explicit manifest/authored dependency comparison and current other-batch target intersection: four arrays match and no cross-batch edge.

No content changed, so reflow was unnecessary. Final dispositions: four accepted items and two accepted pages, merged by obligation into `research/phase-2-catchup-24-alpha-b-6b-decisions.json`; no repair-confidence claim is appropriate. This completes dispatched local 6B work. Scheduling, full-join hashes and subsequent audit/closure belong to the engine and serial lead.

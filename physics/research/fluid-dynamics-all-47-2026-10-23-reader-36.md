# Reader report — batch 36

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: Step 3a reader  
Scope: batch `36`

## Reviewed inventory

Assigned pages:

- `fd-pda01` — [library/fluid-dynamics/fd-pda01.md](../library/fluid-dynamics/fd-pda01.md)
- `fd-pda01-examples` — [library/fluid-dynamics/fd-pda01-examples.md](../library/fluid-dynamics/fd-pda01-examples.md)

Assigned items, read in dependency order:

- `lem-fd-finite-modal-field-has-finite-second-moment`
- `post-fd-fluid-observation-and-noise`
- `pthm-fd-conditional-fluid-filter-law`
- `ex-fd-symbolic-single-sensor`

Dependency and page context opened to check definitions, hypotheses, and uses:

- In-run fluid mathematics/physics suppliers: `def-fd-quantity-and-frame-conventions`, `def-fd-random-velocity-sensor-law`, `lem-fd-sensor-pairing-is-well-defined`, `def-fd-fluid-coefficient-observation-model`, and `prop-fd-linear-fluid-filter-interface`.
- Mathematical suppliers used by the finite-moment and filtering arguments: `def-axiom-of-choice`, `def-probability-measure`, `def-strongly-measurable-banach-valued-function`, `thm-riesz-fischer-completeness-of-l-p`, `def-nonnegative-lebesgue-integral`, `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function`, `thm-monotone-convergence-for-the-integral`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `def-l-p-space-as-a-quotient-by-null-functions`, `thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space`, `thm-minkowski-inequality-for-integrals`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-holder-inequality-for-integrals`, `thm-bochner-integrability-criterion`, and `thm-bounded-linear-maps-commute-with-bochner-integration`.
- Conditional-law/filter context: `def-state-space-filtering-laws`, `def-regular-conditional-distribution`, `def-measure-kernel-and-probability-kernel`, `def-conditional-law-given-a-random-element`, `def-linear-gaussian-state-space-model-with-independent-noises`, `alg-kalman-filter`, and `thm-kalman-filter-is-exact-posterior`.
- Required pages: `fd-da01`, `fd-f01`, `fd-st01`, `measures-and-their-basic-properties`, `relations-functions-and-quotients`, `rn-as-a-normed-space`, `state-space-filtering-and-predictive-laws`, and `the-lebesgue-integral-and-the-convergence-theorems`.

The current batch manifest and proof-contract file were checked as navigation/evidence only. The current in-run supplier `prop-fd-linear-fluid-filter-interface` is in batch 35; it is not reported as defective. The assigned theorem's dependency closure reaches the imported published theorem `thm-kalman-filter-is-exact-posterior` through that proposition.

## Findings and dispositions

### Uneditable published dependency

`thm-kalman-filter-is-exact-posterior` is marked `status: published`, but its current imported item frontmatter has only `verification.precheck: pass` and a `verification.judge` record. It has neither `verification.audited` nor `verification.verified`, and no `verification.repair` receipt. Physics `SCHEMA.md`, “Verification fields,” requires an audit or delegated verification for a published proved-here item and says a judge stamp alone does not satisfy publication checks. The imported bytes are pinned in `research/math-imports.json` at SHA-256 `292e086cd12c7623295357ec2e0a5a87823f241c7dc5cdbc4e4dafec407f2b95`.

The assigned consumer is `pthm-fd-conditional-fluid-filter-law`: its direct dependency `prop-fd-linear-fluid-filter-interface` invokes this theorem for the exact coefficient conditional law. The local finite-dimensional identification and pushforward argument in the assigned item is sound, but the published supplier's required proof-status evidence is missing, so the page's dependency closure is blocked pending owner-level supplier disposition. This reader did not alter the imported source.

### Source check

The cited filtering references were checked at the relevant sections: [Law, Stuart, and Zygalakis, *Data Assimilation: A Mathematical Introduction*, Chapter 4 §4.1](https://arxiv.org/pdf/1506.07825v1), printed pp. 78–80, and [Särkkä, *Bayesian Filtering and Smoothing* (2013), Chapter 4 §§4.2–4.3](https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf), printed pp. 54–59. Law et al. give the linear-Gaussian Kalman recursion under stricter positive-definite covariance and rank hypotheses; Särkkä gives the Bayesian filtering equations and the linear-Gaussian Kalman update. Those sources support the model form and standard recursion; they do not themselves supply the assigned theorem's singular-covariance extension. The current local mathematical theorem states that extension and gives a conditional-Gaussian/kernel proof, so no source-fidelity defect was found in the assigned items. The missing published audit above remains unresolved.

No empirical measurements or statistical inference are asserted by this batch. The postulate explicitly adopts the Gaussian, independence, finite-mode, and ideal-sensor assumptions and disclaims empirical validation. The example is a symbolic calculation. The double-slit/statistical-evidence guidance therefore does not add experimental premises here.

## Item and page verdicts

- `lem-fd-finite-modal-field-has-finite-second-moment` — Pass. The finite direct-sum completeness argument, continuity bound for the modal map, pushforward measure identity, and second-moment bound follow from the stated hypotheses and cited mathematical suppliers.
- `post-fd-fluid-observation-and-noise` — Pass. The finite-modal linear-Gaussian setup is explicit, dimensioned, and clearly adopted rather than reported as observed physics.
- `pthm-fd-conditional-fluid-filter-law` — Local statement and proof pass: the sensor-matrix identity, exact coefficient-filter invocation, and Borel pushforward kernel are justified. Dependency closure is blocked by the missing required publication audit for `thm-kalman-filter-is-exact-posterior`.
- `ex-fd-symbolic-single-sensor` — Pass. The volume-normalized sensor, positive innovation variance, mean update, and covariance update are correct, including `P = 0`; it records no measurement.
- `fd-pda01` — Page metadata and empty body pass. Its local items are sound as above; page dependency closure remains blocked by the published supplier finding.
- `fd-pda01-examples` — Page metadata and empty body pass. The example is sound and inherits the same dependency-closure blocker through its assigned theorem prerequisite.

## Edits and checks

Created this report and the matching findings JSON. No item or page prose was edited. Both assigned page bodies were already empty and retained `page_layout: compact-v1`. No proof contract or judge record required repair. The repair-only reflow, precheck, and proof-layout commands were not run because there was no item edit.

No TikZ or tikzcd diagrams occur in the assigned items, and none is needed to state or verify these finite-dimensional filtering arguments.

## Blocker and coverage note

The only unresolved blocker is the imported published theorem's missing required proof-audit evidence. Mathematical originals and pinned imports are read-only for this assignment. All assigned pages and items, their direct item dependencies, and the page prerequisites listed above were opened. The relevant cited filter arguments were checked at their exact sections; the cited books were not read cover to cover, and this review did not independently re-audit every transitive supplier of the published Kalman theorem. No empirical source, apparatus, calibration, or measurement claim was present to audit.

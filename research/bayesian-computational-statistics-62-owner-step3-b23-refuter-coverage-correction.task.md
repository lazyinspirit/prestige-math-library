# Native Step-3 refuter coverage correction — batch 23

Run: `bayesian-computational-statistics-62`.
Native label: `refute-23-coverage-correction-1`.
Return artifact: `research/bayesian-computational-statistics-62-refute-23.json`.

Follow `briefs/refuter.md` and `briefs/schemas/refute-report.json`. Work read-only; return only schema-conforming JSON. Do not edit sources, contracts, snapshots, prior reports, receipts, or run state. The engine captures the returned JSON as the report artifact.

Read `research/bayesian-computational-statistics-62-step3-scope-23.json` first. Its `refuter_scope` is the exact owed inventory: 13 item carriers and two page carriers, listed below. Read every current scoped carrier and the supplier sections needed to test its actual claims. Read the current reader report and findings (`research/bayesian-computational-statistics-62-reader-23.md` and `research/bayesian-computational-statistics-62-reader-findings-23.json`) as context, not mathematical acceptance.

This is a bounded fresh native read correcting an incomplete coverage report. The original successful native report listed 14 opened subjects and omitted `ex-multimodal-nonconvex-objective`, despite its coverage_note claiming all 13 items and both pages. Its immutable original report/result remain archived by the owner; they are historical evidence and must not be rewritten. A log observation of an item opening cannot replace your current truthful report or license an invented read attestation.

Read and review all these subjects, verifying against the actual scope file rather than relying solely on this list:

- `items/alg-damped-newton.md`
- `items/alg-gradient-descent.md`
- `items/def-latent-variable-joint-and-observed-data-factorization.md`
- `items/ex-finite-mixture-latent-factorization.md`
- `items/ex-gaussian-location-kl.md`
- `items/ex-multimodal-nonconvex-objective.md`
- `items/ex-strongly-convex-quadratic-gradient-descent.md`
- `items/ex-zero-normalizer-latent-fiber.md`
- `items/lem-armijo-backtracking-terminates-for-strict-descent-directions.md`
- `library/bayesian-computational-statistics/numerical-optimization-for-statistical-computation.md`
- `library/bayesian-computational-statistics/numerical-optimization-for-statistical-computation-examples.md`
- `items/thm-gradient-descent-rate-under-strong-convexity-and-smoothness.md`
- `items/thm-kullback-leibler-is-nonnegative.md`
- `items/thm-newton-local-quadratic-convergence-under-lipschitz-hessian.md`
- `items/thm-observed-density-is-latent-marginal-under-tonelli.md`

Preserve the original concrete finding as historical evidence: `thm-observed-density-is-latent-marginal-under-tonelli`, Proof 4.1, `citation-inaccurate`, fatal, because its prose names nonexistent step 1.4. Independently inspect the current source. If the defect remains, report it with accurate current evidence. If current inspection supports a different disposition or severity, explain the source-based difference in `coverage_note`; do not pretend the original observation never existed. Also report any other concrete current in-scope defect, and avoid manufacturing a defect merely to fill `flagged`.

Set `batch` to `23`. After actually reading all scoped subjects, set `opened` to exactly the 15 `refuter_scope` IDs, once each, and `not_opened` to `[]`. If a real blocker prevents a read, state it honestly and list the unread scoped subject in `not_opened`; incomplete coverage must remain blocked. Keep prerequisite-context IDs out of `opened` unless the scope file itself lists them. State what was checked, this correction's coverage of the omitted example, and genuine limitations in `coverage_note`. No whole-supplier proof audit or source reading may be claimed without actually performing it.

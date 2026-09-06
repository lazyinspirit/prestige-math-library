# frontier-31a — group Alpha `f`, Step 3 scaffold recheck

This recheck covers batches `3`, `16`, and `17`. I reread the group-f scaffold
review and each assigned batch's `## Step-3 fix pass`, then checked the current
manifests, coverage harvests, and `research/plan-spec.json`. All listed
dispositions remain supported by the current scaffold bytes; no repair or
pushback remains open.

## Dispositions

| Batch | Reported finding | Disposition | Current evidence |
| ---: | --- | --- | --- |
| 3 | No numbered review finding; retained geometric Hahn–Banach route. | Closed without change. | The manifest still has 19 A and 11 B items, every item has an explicit `deps` array, and A still requires `the-analytic-hahn-banach-theorem-examples`. The gauge, real-part complex convention, separation, annihilator, complement, Mazur, and Phillips obligations remain in the notes and coverage route. |
| 3 | Coverage-low-yield / 21 declined results. | Closed without change. | The 77-result harvest passes required-destination validation. The advisory is still 29/77 scaffolded, but all 21 group-f decline rows are current `stands` decisions; none supplies a retained premise. |
| 16 | Add `inverse-and-implicit-function-theorems` as the backward prerequisite. | Closed: correction remains applied. | A still requires the two original predecessors plus `inverse-and-implicit-function-theorems`; `plan-spec.json` places the pair at 458.001/458.002 and has the same prerequisite. The characteristic-graph construction uses the inverse projection theorem. |
| 16 | Replace the false heat-equation Cauchy–Kovalevskaya example. | Closed: replacement remains applied. | `ex-cauchy-kovalevskaya-normal-form` remains a dependency-free wave-equation normal-form hypothesis check, while the recorded Cauchy–Kovalevskaya theorem remains dependency-free. The current coverage retains the source-backed characteristic-slice correction. |
| 16 | Retain regularity, rank, caustic, and parameter-Hessian qualifications. | Closed without change. | The named augmented-characteristic, strip-Jacobian, local Cauchy, Burgers, and envelope items remain in the manifest with their stated prerequisite interfaces. |
| 16 | Retain the Andersson/Ageno/Trinity source stack. | Closed without change. | The 45-result, three-source harvest passes required-destination validation and has three current fetch-verification records. |
| 17 | `f/17/verdict`: retain the invariant-$d$, Cartan, time-dependent pullback, and Pfaffian-Frobenius route. | Closed without change. | The manifest still contains 40 A and 12 B items with explicit `deps`; A still requires the three reviewed differential-geometric predecessor pages. |
| 17 | Merry Corollary 23.5 and Lemma 23.3 deferred to de Rham material. | Closed without change. | Both current coverage rows retain destination `the-de-rham-complex-homotopy-and-mayer-vietoris`, a later page at order 471; neither result is a manifest dependency. |
| 17 | Angular-form global-potential obstruction deferred to the integration/Stokes page. | Closed without change. | The B scaffold records local primitives only and directs the nonexistence proof to the unit-circle-period result on later page `integration-of-forms-and-the-general-stokes-theorem` (order 469). It is deliberately not a local `deps` edge. |
| 17 | Lee's Frobenius-theorem material supplied by the declared predecessor. | Closed without change. | The coverage row retains destination `distributions-integral-manifolds-and-the-frobenius-theorem`, which is one of A's current required predecessors. |
| 17 | Hitchin §6.6 deferred. | Closed without change. | The coverage row still assigns the de Rham/homotopy material to `the-de-rham-complex-homotopy-and-mayer-vietoris`; it is outside the present exterior-calculus scaffold. |

## Scope decisions and checks

`node tools/scope-decisions.mjs refresh --run frontier-31a --group f` found
32 current declines and zero pending rows. The immediately following `check`
reported 32 current declines and zero errors, so no new decision was required.

- `manifest-deps` passed for batches 3, 16, and 17: respectively 30, 33, and
  52 items; zero normalized entries and zero errors for each.
- `coverage-checklist --require-destination` passed: respectively 77, 45, and
  80 harvested results; zero errors. Batch 3 alone retains its expected
  `coverage-low-yield` advisory.
- `source-fetch-check` accepted the current fetch-verification records:
  respectively 4/4, 3/3, and 3/3 sources.
- `content-policy --manifest-only` over the three manifests passed: 115 scoped
  items, zero errors, and zero warnings.
- `validate-plan.mjs research/plan-spec.json` passed: the declared page order
  is acyclic and consistent, with no item-level cycles, forward references,
  B-page dependencies, or unresolved IDs among itemized pages. Its unrelated
  repository-wide redundant-prerequisite advisories remain non-blocking.

## Verdict record

I verified the current bytes of
`research/frontier-31a-alpha-f-step3-verdicts.json`
(`sha256:1e7a1893c30323e0c1e149d57d27e942cf58f9276b6fa989df501f49f5efbfb9`):
it contains exactly the three assigned A pages
`geometric-hahn-banach-and-convex-separation`,
`quasilinear-characteristics-and-cauchy-kovalevskaya`, and
`the-exterior-derivative-and-cartan-calculus`, each with verdict `sufficient`.
Those current bytes express the closed-pair outcome, so the verdict artifact is
intentionally unchanged.
